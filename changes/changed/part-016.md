# Changed — Bundle Modifications Report (Part 016 / 140)

- **Updated at**: `2026-11-24T12:43 JST`
- **Part**: `16 / 140` (**343** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4683 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1473. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10940` → after: `L10850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10850) · [Before (L10940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10940)

```diff
-           for (const bS of gS) Xg(SS, bS), bS.RD ? bS.RD.mf(HS, tS) : console.error(new Error(`state.helditem for player ${bS.AY} is falsy - ${bS.RD}`))
+           for (const Tk of Ik) yI(kk, Tk), Tk.VK ? Tk.VK.Dt(Fk, Xk) : console.error(new Error(`state.helditem for player ${Tk.Xu} is falsy - ${Tk.VK}`))
```

#### 1474. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10942` → after: `L10852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10852) · [Before (L10942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10942)

```diff
-         bD: function(HS, gS) {
+         Ix: function(Fk, Ik) {
```

#### 1475. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10944-L10945` → after: `L10854-L10855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10854-L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10854-L10855) · [Before (L10944-L10945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10944-L10945)

```diff
-             bS = (0, eH.g)();
-           for (const XS of gS) XS.RD ? XS.AY === SS.HA || (0, eH.k)(XS.AY, bS) ? XS.RD.renderTickLocalPlayer(HS, tS) : XS.RD.renderTickNetworkedPlayer(HS, tS) : console.error(new Error(`state.helditem for player ${XS.AY} is falsy - ${XS.RD}`))
+             Tk = (0, MF.h)();
+           for (const ik of Ik) ik.VK ? ik.Xu === kk.oR || (0, MF.l)(ik.Xu, Tk) ? ik.VK.renderTickLocalPlayer(Fk, Xk) : ik.VK.renderTickNetworkedPlayer(Fk, Xk) : console.error(new Error(`state.helditem for player ${ik.Xu} is falsy - ${ik.VK}`))
```

#### 1476. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10953-L10954` → after: `L10863-L10864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10863-L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10863-L10864) · [Before (L10953-L10954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10953-L10954)

```diff
-       const CS = SS.FQ.EHS(HS.AY),
-         nS = SS.FQ.aHS(HS.AY),
+       const Jk = kk.MJ.WFk(Fk.Xu),
+         xk = kk.MJ.zFk(Fk.Xu),
```

#### 1477. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10959-L10961` → after: `L10869-L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10869-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10869-L10871) · [Before (L10959-L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10959-L10961)

```diff
-           const gS = SS.FQ.IHS(HS.AY).selectedItem;
-           jS = null === gS || void 0 === gS ? void 0 : gS.typeObj, GS = null !== (QS = null === gS || void 0 === gS || null === (DS = gS.attributes) || void 0 === DS || null === (wS = DS.customAttributes) || void 0 === wS ? void 0 : wS.enchantmentTier) && void 0 !== QS ? QS : nul … [truncated]
-         } else HS.networkedHeldItemName && (jS = XS.A[HS.networkedHeldItemName], GS = HS.networkedHeldItemEnchantmentTier);
+           const Ik = kk.MJ.QFk(Fk.Xu).selectedItem;
+           wk = null === Ik || void 0 === Ik ? void 0 : Ik.typeObj, Hk = null !== (Kk = null === Ik || void 0 === Ik || null === (Qk = Ik.attributes) || void 0 === Qk || null === (sk = Qk.customAttributes) || void 0 === sk ? void 0 : sk.enchantmentTier) && void 0 !== Kk ? Kk : nul … [truncated]
+         } else Fk.networkedHeldItemName && (wk = ik.E[Fk.networkedHeldItemName], Hk = Fk.networkedHeldItemEnchantmentTier);
```

#### 1478. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10963` → after: `L10873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10873) · [Before (L10963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10963)

```diff
-       const hS = nS && SS.FQ.fHS(HS.AY).getSelectedSlotIndex() !== HS._lastInvenIdx,
+       const Vk = xk && kk.MJ.sFk(Fk.Xu).getSelectedSlotIndex() !== Fk._lastInvenIdx,
```

#### 1479. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10966-L10971` → after: `L10876-L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10876-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10876-L10881) · [Before (L10966-L10971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10966-L10971)

```diff
-       (((null === (gS = jS) || void 0 === gS ? void 0 : gS.name) || null) !== HS.heldItemName || hS || ZS) && (HS.RD !== HS.fistItem && ((null === (JS = jS) || void 0 === JS ? void 0 : JS.meta.rootId) !== SS.bloxd.getMetaInfo(HS.heldItemName).rootId || hS || ZS) && HS.RD.reset(), … [truncated]
-       nS && (HS._lastInvenIdx = SS.FQ.fHS(HS.AY).getSelectedSlotIndex()), HS.heldItemName = null !== (tS = null === (NS = jS) || void 0 === NS ? void 0 : NS.name) && void 0 !== tS ? tS : null, HS.heldItemEnchantmentTier = GS;
-       const yS = jS && !(0, XS.y)(jS.type) ? jS.dK : void 0,
-         VS = PS ? (0, AS.l)(HS.AY) : null,
-         iS = VS ? XS.A[VS].dK : void 0,
-         WS = PS && null !== (qS = null === (uS = SS.rY[SS.HA]) || void 0 === uS || null === (IS = uS[HS.AY]) || void 0 === IS ? void 0 : IS._glowingEffect) && void 0 !== qS && qS ? YS.GLOWING_EFFECT_EMISSION : void 0;
+       (((null === (Ik = wk) || void 0 === Ik ? void 0 : Ik.name) || null) !== Fk.heldItemName || Vk || zk) && (Fk.VK !== Fk.fistItem && ((null === (Sk = wk) || void 0 === Sk ? void 0 : Sk.meta.rootId) !== kk.bloxd.getMetaInfo(Fk.heldItemName).rootId || Vk || zk) && Fk.VK.reset(), … [truncated]
+       xk && (Fk._lastInvenIdx = kk.MJ.sFk(Fk.Xu).getSelectedSlotIndex()), Fk.heldItemName = null !== (Xk = null === (lk = wk) || void 0 === lk ? void 0 : lk.name) && void 0 !== Xk ? Xk : null, Fk.heldItemEnchantmentTier = Hk;
+       const Rk = wk && !(0, ik.B)(wk.type) ? wk.Ve : void 0,
+         Uk = Pk ? (0, bk.l)(Fk.Xu) : null,
+         Ck = Uk ? ik.E[Uk].Ve : void 0,
+         Nk = Pk && null !== (ak = null === (qk = kk.xR[kk.oR]) || void 0 === qk || null === (Lk = qk[Fk.Xu]) || void 0 === Lk ? void 0 : Lk._glowingEffect) && void 0 !== ak && ak ? uk.GLOWING_EFFECT_EMISSION : void 0;
```

#### 1480. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10973-L10974` → after: `L10883-L10884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10883-L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10883-L10884) · [Before (L10973-L10974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10973-L10974)

```diff
-       const zS = null !== (aS = null === (KS = SS.FQ.JHS(HS.AY)) || void 0 === KS ? void 0 : KS.isReplayLocalPlayer) && void 0 !== aS && aS;
-       if (HS.AY === SS.HA || zS) {
+       const ck = null !== (jk = null === (ek = kk.MJ.RFk(Fk.Xu)) || void 0 === ek ? void 0 : ek.isReplayLocalPlayer) && void 0 !== jk && jk;
+       if (Fk.Xu === kk.oR || ck) {
```

#### 1481. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10976-L10977` → after: `L10886-L10887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10886-L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10886-L10887) · [Before (L10976-L10977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10976-L10977)

```diff
-           ztS: gS
-         } = SS.Hj, {
+           AXk: Ik
+         } = kk.Xw, {
```

#### 1482. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10981-L10985` → after: `L10891-L10895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10891-L10895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10891-L10895) · [Before (L10981-L10985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10981-L10985)

```diff
-         } = SS.RP;
-         bS().copy(SS.Hj.wNS, null !== WS && void 0 !== WS ? WS : bS().ZERO);
-         const qS = PS ? tS : null,
-           uS = PS && "number" === typeof xS ? xS : null,
-           IS = PS && "number" === typeof NS ? NS : null,
+         } = kk.gJ;
+         Tk().copy(kk.Xw.ulk, null !== Nk && void 0 !== Nk ? Nk : Tk().ZERO);
+         const ak = Pk ? Xk : null,
+           qk = Pk && "number" === typeof yk ? yk : null,
+           Lk = Pk && "number" === typeof lk ? lk : null,
```

#### 1483. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10987` → after: `L10897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10897) · [Before (L10987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10987)

```diff
-             const gS = HS && !(0, XS.y)(HS.type) ? Ng(HS) : null,
+             const Ik = Fk && !(0, ik.B)(Fk.type) ? aI(Fk) : null,
```

#### 1484. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10989` → after: `L10899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10899) · [Before (L10989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10989)

```diff
-               xS = tS ? Ng(XS.A[tS]) : null;
+               yk = Xk ? aI(ik.E[Xk]) : null;
```

#### 1485. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10997-L10998` → after: `L10907-L10908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10907-L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10907-L10908) · [Before (L10997-L10998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L10997-L10998)

```diff
-           }(HS.AY, jS) : null;
-         if (kS ? (SS.Hj.hNS = null !== uS && void 0 !== uS ? uS : kS.range, SS.Hj.QNS = null !== IS ? tg(IS) : kS.coneCos) : (SS.Hj.hNS = null !== uS && void 0 !== uS ? uS : 0, SS.Hj.QNS = 0), qS) bS().scale(gS, (0, fS.K)(qS), 15);
+           }(Fk.Xu, wk) : null;
+         if (Zk ? (kk.Xw.blk = null !== qk && void 0 !== qk ? qk : Zk.range, kk.Xw.plk = null !== Lk ? TI(Lk) : Zk.coneCos) : (kk.Xw.blk = null !== qk && void 0 !== qk ? qk : 0, kk.Xw.plk = 0), ak) Tk().scale(Ik, (0, tk.W)(ak), 15);
```

#### 1486. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11002-L11003` → after: `L10912-L10913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10912-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10912-L10913) · [Before (L11002-L11003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11002-L11003)

```diff
-             wNS: HS
-           } = SS.Hj;
+             ulk: Fk
+           } = kk.Xw;
```

#### 1487. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11011` → after: `L10921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10921) · [Before (L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11011)

```diff
-       if (!SS || void 0 === SS.spotlightRange || !SS.dK) return null;
+       if (!kk || void 0 === kk.spotlightRange || !kk.Ve) return null;
```

#### 1488. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11014` → after: `L10924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10924) · [Before (L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11014)

```diff
-         colour: SS.dK,
+         colour: kk.Ve,
```

#### 1489. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11020` → after: `L10930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10930) · [Before (L11020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11020)

```diff
-   38424: (SS, HS, gS) => {
+   38369: (kk, Fk, Ik) => {
```

#### 1490. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11022` → after: `L10932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10932) · [Before (L11022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11022)

```diff
-       b: () => OS,
+       d: () => Sk,
```

#### 1491. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11025-L11030` → after: `L10935-L10940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10935-L10940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10935-L10940) · [Before (L11025-L11030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11025-L11030)

```diff
-     var tS = gS(38077),
-       bS = gS(37806),
-       XS = gS(37900),
-       xS = gS(3811),
-       NS = gS(198),
-       qS = gS(402),
+     var Xk = Ik(38066),
+       Tk = Ik(37794),
+       ik = Ik(37866),
+       yk = Ik(3631),
+       lk = Ik(187),
+       ak = Ik(354),
```

#### 1492. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11032-L11043` → after: `L10942-L10953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10942-L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10942-L10953) · [Before (L11032-L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11032-L11043)

```diff
-       IS = gS(38045),
-       fS = gS(36773),
-       kS = gS(36771),
-       aS = gS(37944),
-       KS = gS(387),
-       jS = gS(31),
-       GS = gS(2910),
-       CS = gS(38013),
-       nS = gS(38198),
-       PS = gS(38190),
-       QS = gS(3870),
-       DS = gS(1309);
+       Lk = Ik(38022),
+       tk = Ik(36772),
+       Zk = Ik(36764),
+       jk = Ik(37909),
+       ek = Ik(337),
+       wk = Ik(34),
+       Hk = Ik(2700),
+       Jk = Ik(37992),
+       xk = Ik(38156),
+       Pk = Ik(38153),
+       Kk = Ik(3702),
+       Qk = Ik(1217);
```

#### 1493. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11045-L11047` → after: `L10955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10955) · [Before (L11045-L11047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11045-L11047)

```diff
-     const hS = ["length", 0, 2, 4, 3, 146, 1, "a", 33554432, 67108864, "b", "d", "e", 5, !1, 6, 68, 13, void 0, 7, 19, null, 26, 8];
- 
-     function ZS() {}
+     const Vk = ["length", 0, 1, 2, 3, "a", 8, 16, 180, 130, "GyYzv8", 512, 212, "012345", 4, 118, 15, "c", "f", 202, "e", 6, 139, "d", 1023, 63, 128, 12, "b", 206, 255, 161, 32, 5, 24, 7, 18, 10, 19, 64, 65535, void 0, null, 171];
```

#### 1494. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11052-L11053` → after: `L10960-L11097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10960-L11097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10960-L11097) · [Before (L11052-L11053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11052-L11053)

```diff
-     "Mwy3xzm" in ZS && function(...SS) {
-       SS[hS[0]] = hS[1]
+     "N0NAfl" in function() {} && function() {
+       var kk = function(...kk) {
+         function Fk(...kk) {
+           return kk[Vk[0]] = Vk[2], lk(ik(Lk(kk[Vk[1]])))
+         }
+ 
+         function Ik(...kk) {
+           return kk[Vk[0]] = Vk[3], lk(yk(Lk(kk[Vk[1]]), Lk(kk[Vk[2]])))
+         }
+ 
+         function Xk(...kk) {
+           return kk[Vk[0]] = Vk[3], ak(yk(Lk(kk[Vk[1]]), Lk(kk[Vk[2]])))
+         }
+ 
+         function Tk(...kk) {
+           return kk[Vk[0]] = Vk[4], qk(yk(Lk(kk[Vk[1]]), Lk(kk[Vk[2]])), kk[Vk[3]])
+ ... (122 more added lines; see GitHub link above)
```

#### 1495. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11055-L11070` → after: `L11099-L11108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11099-L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11099-L11108) · [Before (L11055-L11070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11055-L11070)

```diff
-       SS[hS[0]] = hS[3], "ac3t3OC" in ZS && function(...SS) {
-         JS(SS[hS[0]] = hS[1], SS[-hS[17]] = function(...HS) {
-           return JS(HS[hS[0]] = hS[4], HS[hS[4]] = {}), HS[hS[2]].length !== HS[hS[1]].length + HS[hS[6]].length ? hS[14] : SS[hS[6]](HS[hS[1]], HS[hS[6]], HS[hS[2]], hS[1], hS[1], hS[1], HS[hS[4]])
-         }, SS[hS[6]] = function(...HS) {
-           return JS(HS[hS[0]] = hS[19], HS[-hS[16]] = hS[14]), HS[hS[13]] >= HS[hS[2]].length || (HS[hS[15]]["" + HS[hS[4]] + HS[hS[3]] + HS[hS[13]]] !== hS[18] ? HS[hS[15]]["" + HS[hS[4]] + HS[hS[3]] + HS[hS[13]]] : (HS[hS[2]][HS[hS[13]]] === HS[hS[1]][HS[hS[4]]] && HS[hS[2]][HS … [truncated]
-         }, console.log(SS[-hS[17]]))
-       }(), JS(SS[-hS[20]] = hS[18], SS[hS[10]] = hS[18], SS[hS[22]] = hS[18], SS[hS[19]] = hS[18], SS[hS[23]] = hS[18]);
-       const HS = (0, GS[hS[10]])().client.getMsgHandler().agS.state.tickCounter;
-       (0, xS.sendColyMessage)(QS.yh, {
-         fI: SS[hS[1]],
-         kI: (SS[-hS[20]] = NS[hS[12]].lifeformMeshToBodyPart[SS[hS[6]] === hS[21] || void 0 === SS[hS[6]] || (SS[hS[10]] = SS[hS[6]].split("|")) === hS[21] || void 0 === SS[hS[10]] ? void 0 : SS[hS[10]][hS[1]]]) !== hS[21] && void 0 !== SS[-hS[20]] ? SS[-hS[20]] : hS[21],
-         Gx: SS[hS[2]],
-         qu: (SS[hS[22]] = (SS[hS[19]] = SS[hS[4]].FQ.IHS(SS[hS[4]].HA)) === hS[21] || void 0 === SS[hS[19]] || (SS[hS[23]] = SS[hS[19]].inventory.getItemAtSelectedSlot()) === hS[21] || void 0 === SS[hS[23]] ? void 0 : SS[hS[23]].name) !== hS[21] && void 0 !== SS[hS[22]] ? SS[hS[2 … [truncated]
-         aI: DS.D,
-         KI: HS,
-         jI: cS
+       zk(kk[Vk[0]] = Vk[14], kk[Vk[5]] = Vk[41], kk[Vk[28]] = Vk[41], kk[Vk[43]] = Vk[41], kk[Vk[23]] = Vk[41], kk[Vk[20]] = Vk[41]);
+       const Fk = (0, Hk[Vk[17]])().client.getMsgHandler().sIk.state.tickCounter;
+       (0, yk.sendColyMessage)(Kk.Wg, {
+         tL: kk[Vk[1]],
+         ZL: (kk[Vk[5]] = lk[Vk[18]].lifeformMeshToBodyPart[kk[Vk[2]] === Vk[42] || void 0 === kk[Vk[2]] || (kk[Vk[28]] = kk[Vk[2]].split("|")) === Vk[42] || void 0 === kk[Vk[28]] ? void 0 : kk[Vk[28]][Vk[1]]]) !== Vk[42] && void 0 !== kk[Vk[5]] ? kk[Vk[5]] : Vk[42],
+         ey: kk[Vk[3]],
+         aq: (kk[Vk[43]] = (kk[Vk[23]] = kk[Vk[4]].MJ.QFk(kk[Vk[4]].oR)) === Vk[42] || void 0 === kk[Vk[23]] || (kk[Vk[20]] = kk[Vk[23]].inventory.getItemAtSelectedSlot()) === Vk[42] || void 0 === kk[Vk[20]] ? void 0 : kk[Vk[20]].name) !== Vk[42] && void 0 !== kk[Vk[43]] ? kk[Vk[4 … [truncated]
+         jL: Qk.D,
+         eL: Fk,
+         wL: Ek
```

#### 1496. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11073` → after: `L11111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11111) · [Before (L11073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11073)

```diff
-     class OS extends PS.c {
+     class Sk extends Pk.d {
```

#### 1497. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11075` → after: `L11113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11113) · [Before (L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11075)

```diff
-         super(SS, HS, gS, tS), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
+         super(kk, Fk, Ik, Xk), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
```

#### 1498. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11085` → after: `L11123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11123) · [Before (L11085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11085)

```diff
-         super.reset(), this.heldItemState.AY === this.qk.HA && this.breakingParticles.mf(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
+         super.reset(), this.heldItemState.Xu === this.qZ.oR && this.breakingParticles.Dt(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
```

#### 1499. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11087` → after: `L11125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11125) · [Before (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11087)

```diff
-       cgS() {
+       CIk() {
```

#### 1500. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11089` → after: `L11127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11127) · [Before (L11089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11089)

```diff
-         const bS = super.cgS(),
+         const Tk = super.CIk(),
```

#### 1501. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11094-L11096` → after: `L11132-L11134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11132-L11134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11132-L11134) · [Before (L11094-L11096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11094-L11096)

```diff
-             JV: qS
-           } = this.guS();
-         if (xS && !bS.preventAttack) return this.CbS(XS, xS, NS, qS), this.tuS(XS, xS), {
+             zC: ak
+           } = this.zqk();
+         if (yk && !Tk.preventAttack) return this.zTk(ik, yk, lk, ak), this.Sqk(ik, yk), {
```

#### 1502. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11100-L11103` → after: `L11138-L11141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11138-L11141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11138-L11141) · [Before (L11100-L11103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11100-L11103)

```diff
-         const uS = null !== (SS = null === (HS = this.qk.ISS) || void 0 === HS ? void 0 : HS.position) && void 0 !== SS ? SS : null,
-           IS = null !== (gS = null === (tS = this.qk.ISS) || void 0 === tS ? void 0 : tS.Rl) && void 0 !== gS ? gS : null,
-           fS = this.qk.FQ.IHS(this.qk.HA);
-         if (!fS || !this.qk.RP.canAltAction) return {
+         const qk = null !== (kk = null === (Fk = this.qZ.Vkk) || void 0 === Fk ? void 0 : Fk.position) && void 0 !== kk ? kk : null,
+           Lk = null !== (Ik = null === (Xk = this.qZ.Vkk) || void 0 === Xk ? void 0 : Xk.YM) && void 0 !== Ik ? Ik : null,
+           tk = this.qZ.MJ.QFk(this.qZ.oR);
+         if (!tk || !this.qZ.gJ.canAltAction) return {
```

#### 1503. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11108` → after: `L11146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11146) · [Before (L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11108)

```diff
-           aS = new nS.e(this, null, null, uS, IS, kS).performPrimaryFire();
+           jk = new xk.d(this, null, null, qk, Lk, Zk).performPrimaryFire();
```

#### 1504. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11111` → after: `L11149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11149) · [Before (L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11111)

```diff
-       vgS() {
+       NIk() {
```

#### 1505. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11116-L11118` → after: `L11154-L11156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11154-L11156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11154-L11156) · [Before (L11116-L11118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11116-L11118)

```diff
-           JV: tS
-         } = this.guS(), bS = super.vgS();
-         return HS && !bS.preventAttack && (this.CbS(SS, HS, gS, tS), this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging()), bS
+           zC: Xk
+         } = this.zqk(), Tk = super.NIk();
+         return Fk && !Tk.preventAttack && (this.zTk(kk, Fk, Ik, Xk), this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging()), Tk
```

#### 1506. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11120` → after: `L11158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11158) · [Before (L11120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11120)

```diff
-       dgS() {
+       UIk() {
```

#### 1507. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11124-L11125` → after: `L11162-L11163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11162-L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11162-L11163) · [Before (L11124-L11125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11124-L11125)

```diff
-         } = this.guS();
-         return HS ? this.tuS(SS, HS) : this.breakingStart(), !0
+         } = this.zqk();
+         return Fk ? this.Sqk(kk, Fk) : this.breakingStart(), !0
```

#### 1508. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11132-L11134` → after: `L11170-L11172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11170-L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11170-L11172) · [Before (L11132-L11134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11132-L11134)

```diff
-           JV: tS
-         } = this.guS();
-         return !(!HS || !this.canAttack(HS)) && (this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), this.CbS(SS, HS, gS, tS), !0)
+           zC: Xk
+         } = this.zqk();
+         return !(!Fk || !this.canAttack(Fk)) && (this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), this.zTk(kk, Fk, Ik, Xk), !0)
```

#### 1509. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11139` → after: `L11177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11177) · [Before (L11139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11139)

```diff
-           qk: tS
+           qZ: Xk
```

#### 1510. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11141` → after: `L11179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11179) · [Before (L11141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11141)

```diff
-         return null !== (HS = null === (gS = tS.rY[tS.HA][SS]) || void 0 === gS ? void 0 : gS.canAttack) && void 0 !== HS && HS
+         return null !== (Fk = null === (Ik = Xk.xR[Xk.oR][kk]) || void 0 === Ik ? void 0 : Ik.canAttack) && void 0 !== Fk && Fk
```

#### 1511. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11143` → after: `L11181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11181) · [Before (L11143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11143)

```diff
-       CbS(SS, HS, gS, tS) {
+       zTk(kk, Fk, Ik, Xk) {
```

#### 1512. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11145` → after: `L11183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11183) · [Before (L11145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11145)

```diff
-           qk: bS
+           qZ: Tk
```

#### 1513. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11147` → after: `L11185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11185) · [Before (L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11147)

```diff
-         this.canAttack(HS) && (wS(HS, gS, SS, bS), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", bS.HA, HS, [tS[0], tS[1], tS[2]]))
+         this.canAttack(Fk) && (sk(Fk, Ik, kk, Tk), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", Tk.oR, Fk, [Xk[0], Xk[1], Xk[2]]))
```

#### 1514. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11149` → after: `L11187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11187) · [Before (L11149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11149)

```diff
-       guS() {
+       zqk() {
```

#### 1515. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11151-L11153` → after: `L11189-L11191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11189-L11191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11189-L11191) · [Before (L11151-L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11151-L11153)

```diff
-         const tS = null !== (SS = this.qk.cSS) && void 0 !== SS ? SS : this.qk.camera.uR(),
-           bS = null !== (HS = null === (gS = this.qk.FQ.IHS(this.qk.HA)) || void 0 === gS ? void 0 : gS.inventory.getItemAtSelectedSlot()) && void 0 !== HS ? HS : null,
-           XS = this.bloxd.getAttackRangeFromHeldItem(this.qk.HA, bS),
+         const Xk = null !== (kk = this.qZ.Wkk) && void 0 !== kk ? kk : this.qZ.camera.Am(),
+           Tk = null !== (Fk = null === (Ik = this.qZ.MJ.QFk(this.qZ.oR)) || void 0 === Ik ? void 0 : Ik.inventory.getItemAtSelectedSlot()) && void 0 !== Fk ? Fk : null,
+           ik = this.bloxd.getAttackRangeFromHeldItem(this.qZ.oR, Tk),
```

#### 1516. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11160` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11198) · [Before (L11160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11160)

```diff
-         return xS === IS.e.HIT_ENTITY ? {
+         return yk === Lk.c.HIT_ENTITY ? {
```

#### 1517. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11164` → after: `L11202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11202) · [Before (L11164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11164)

```diff
-           JV: qS
+           zC: ak
```

#### 1518. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11169` → after: `L11207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11207) · [Before (L11169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11169)

```diff
-           JV: null
+           zC: null
```

#### 1519. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11172` → after: `L11210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11210) · [Before (L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11172)

```diff
-       tuS(SS, HS) {
+       Sqk(kk, Fk) {
```

#### 1520. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11175` → after: `L11213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11213) · [Before (L11175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11175)

```diff
-           qk: XS
+           qZ: ik
```

#### 1521. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11177-L11180` → after: `L11215-L11218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11215-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11215-L11218) · [Before (L11177-L11180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11177-L11180)

```diff
-         (0, xS.sendColyMessage)(QS.lg, {
-           Nu: HS,
-           Gx: SS,
-           qu: null !== (gS = null === (tS = XS.FQ.IHS(XS.HA)) || void 0 === tS || null === (bS = tS.inventory.getItemAtSelectedSlot()) || void 0 === bS ? void 0 : bS.name) && void 0 !== gS ? gS : null
+         (0, yk.sendColyMessage)(Kk.Jf, {
+           lq: Fk,
+           ey: kk,
+           aq: null !== (Ik = null === (Xk = ik.MJ.QFk(ik.oR)) || void 0 === Xk || null === (Tk = Xk.inventory.getItemAtSelectedSlot()) || void 0 === Tk ? void 0 : Tk.name) && void 0 !== Ik ? Ik : null
```

#### 1522. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11184-L11186` → after: `L11222-L11224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11222-L11224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11222-L11224) · [Before (L11184-L11186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11184-L11186)

```diff
-         const SS = this.qk.KSS;
-         SS && !(0, GS.b)().posSatisfiesModifyConstraints(this.qk.HA, SS.position[0], SS.position[1], SS.position[2]) && (this.qk.RP.canChange || this.qk.RP.cantBreakError || "You cannot modify this block" !== this.qk.RP.cantChangeError) && jS.k.cj("showBottomMessage", {
-           message: this.qk.RP.cantBreakError || this.qk.RP.cantChangeError,
+         const kk = this.qZ.vkk;
+         kk && !(0, Hk.c)().posSatisfiesModifyConstraints(this.qZ.oR, kk.position[0], kk.position[1], kk.position[2]) && (this.qZ.gJ.canChange || this.qZ.gJ.cantBreakError || "You cannot modify this block" !== this.qZ.gJ.cantChangeError) && wk.g.GL("showBottomMessage", {
+           message: this.qZ.gJ.cantBreakError || this.qZ.gJ.cantChangeError,
```

#### 1523. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11191` → after: `L11229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11229) · [Before (L11191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11191)

```diff
-         if (this.heldItemState.AY !== this.qk.HA) return !1;
+         if (this.heldItemState.Xu !== this.qZ.oR) return !1;
```

#### 1524. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11193` → after: `L11231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11231) · [Before (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11193)

```diff
-         return this.attemptingToBreak && (gS = this.breakBlock(HS)), this.breakingParticles.mf(gS), this.successfullyBreakingBlockLastTick = gS, gS
+         return this.attemptingToBreak && (Ik = this.breakBlock(Fk)), this.breakingParticles.Dt(Ik), this.successfullyBreakingBlockLastTick = Ik, Ik
```

#### 1525. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11196` → after: `L11234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11234) · [Before (L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11196)

```diff
-         super.renderTickLocalPlayer(SS, HS), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + SS / KS.d.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - SS / 1500, 0)
+         super.renderTickLocalPlayer(kk, Fk), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + kk / ek.f.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - kk / 1500, 0)
```

#### 1526. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11198-L11199` → after: `L11236-L11237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11236-L11237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11236-L11237) · [Before (L11198-L11199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11198-L11199)

```diff
-       JgS() {
-         super.JgS();
+       bIk() {
+         super.bIk();
```

#### 1527. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11207` → after: `L11245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11245) · [Before (L11207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11207)

```diff
-         this.targetedPosition = null, this.targetedStartTime = SS, this.lastBreakingSoundTime = Math.min(SS - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.MJ(!1), this.currBreakingMesh = null)
+         this.targetedPosition = null, this.targetedStartTime = kk, this.lastBreakingSoundTime = Math.min(kk - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.Av(!1), this.currBreakingMesh = null)
```

#### 1528. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11211` → after: `L11249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11249) · [Before (L11211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11211)

```diff
-         const gS = (0, GS.b)().getInvenHeldItem(this.qk.HA);
+         const Ik = (0, Hk.c)().getInvenHeldItem(this.qZ.oR);
```

#### 1529. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11213-L11219` → after: `L11251-L11257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11251-L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11251-L11257) · [Before (L11213-L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11213-L11219)

```diff
-         const NS = null === (HS = this.qk.KSS) || void 0 === HS ? void 0 : HS.position;
-         if (!NS || !(0, GS.b)().posSatisfiesModifyConstraints(this.qk.HA, NS[0], NS[1], NS[2])) return this.resetTargetedBlock(SS), !1;
-         if (this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), !this.targetedPosition !== !NS || !uS().exactEquals(this.targetedPosition, NS)) return this.resetTargetedBlock(SS), this.targetedPosition = uS().copy(this._targetedPosition, NS), (0, xS.sendColyMessage)(QS.Hj … [truncated]
-         const qS = (0, GS.b)().getMetaInfo(this.qk.pC(this.targetedPosition)).rootId;
-         let IS = bS.A[qS].ttb;
-         if (this.qk.RP.creative) {
-           if (this.qk.RP.creative) {
+         const lk = null === (Fk = this.qZ.vkk) || void 0 === Fk ? void 0 : Fk.position;
+         if (!lk || !(0, Hk.c)().posSatisfiesModifyConstraints(this.qZ.oR, lk[0], lk[1], lk[2])) return this.resetTargetedBlock(kk), !1;
+         if (this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), !this.targetedPosition !== !lk || !qk().exactEquals(this.targetedPosition, lk)) return this.resetTargetedBlock(kk), this.targetedPosition = qk().copy(this._targetedPosition, lk), (0, yk.sendColyMessage)(Kk._i … [truncated]
+         const ak = (0, Hk.c)().getMetaInfo(this.qZ.QJ(this.targetedPosition)).rootId;
+         let Lk = Tk.E[ak].ttb;
+         if (this.qZ.gJ.creative) {
+           if (this.qZ.gJ.creative) {
```

#### 1530. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11221` → after: `L11259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11259) · [Before (L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11221)

```diff
-             HS > 20 * XS.e ? IS *= 1 / 6 : HS > 6 * XS.e ? IS *= 1 / 3 : HS > 4 * XS.e ? IS *= .5 : HS > 2 * XS.e && (IS *= 2 / 3)
+             Fk > 20 * ik.f ? Lk *= 1 / 6 : Fk > 6 * ik.f ? Lk *= 1 / 3 : Fk > 4 * ik.f ? Lk *= .5 : Fk > 2 * ik.f && (Lk *= 2 / 3)
```

#### 1531. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11224-L11226` → after: `L11262-L11264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11262-L11264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11262-L11264) · [Before (L11224-L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11224-L11226)

```diff
-           const SS = (0, GS.b)().getBlockTypeIsHarvestable(this.qk.HA, qS);
-           SS || (IS *= 2.5), this.toolType === this.bloxd.getItemStat(this.qk.HA, qS, "harvestType") && SS && (IS *= 1 / this.toolMultiplier);
-           IS *= KS.d.getBreakSpeedMultiplier(gS) * KS.d.getMomentumMultiplier(gS, this.momentumFrac)
+           const kk = (0, Hk.c)().getBlockTypeIsHarvestable(this.qZ.oR, ak);
+           kk || (Lk *= 2.5), this.toolType === this.bloxd.getItemStat(this.qZ.oR, ak, "harvestType") && kk && (Lk *= 1 / this.toolMultiplier);
+           Lk *= ek.f.getBreakSpeedMultiplier(Ik) * ek.f.getMomentumMultiplier(Ik, this.momentumFrac)
```

#### 1532. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11232-L11233` → after: `L11270-L11271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11270-L11271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11270-L11271) · [Before (L11232-L11233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11232-L11233)

```diff
-           const HS = (0, fS.e)(`step_${(0,CS.d)(qS,!1)}`);
-           kS.e.play(HS, .3).rate(.5)
+           const Fk = (0, tk.f)(`step_${(0,Jk.d)(ak,!1)}`);
+           Zk.d.play(Fk, .3).rate(.5)
```

#### 1533. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11235` → after: `L11273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11273) · [Before (L11235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11235)

```diff
-         return this.currBreakingMesh && jS === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.MJ(!1), jS < 10 ? (this.currBreakingMesh = (0, tS.d)(this.qk, this.targetedPosition, jS), this.currBreakingStage = jS) : ((0, bS.g)(NS), this.resetTargetedBloc … [truncated]
+         return this.currBreakingMesh && wk === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.Av(!1), wk < 10 ? (this.currBreakingMesh = (0, Xk.c)(this.qZ, this.targetedPosition, wk), this.currBreakingStage = wk) : ((0, Tk.i)(lk), this.resetTargetedBloc … [truncated]
```

#### 1534. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11247` → after: `L11285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11285) · [Before (L11247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11247)

```diff
-   38190: (SS, HS, gS) => {
+   38153: (kk, Fk, Ik) => {
```

#### 1535. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11249` → after: `L11287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11287) · [Before (L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11249)

```diff
-       c: () => wS
+       d: () => sk
```

#### 1536. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11251-L11268` → after: `L11289-L11306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11289-L11306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11289-L11306) · [Before (L11251-L11268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11251-L11268)

```diff
-     var tS = gS(38230),
-       bS = gS(1309),
-       XS = gS(38242),
-       xS = gS(9395),
-       NS = gS(9361),
-       qS = gS(198),
-       uS = gS(37432),
-       IS = gS(38198),
-       fS = gS(37422),
-       kS = gS(31),
-       aS = gS(2910),
-       KS = gS(1400),
-       jS = gS(38221),
-       GS = gS(37648),
-       CS = gS(37419),
-       nS = gS(38416),
- ... (2 more removed lines; see GitHub link above)
+     var Xk = Ik(38195),
+       Tk = Ik(1217),
+       ik = Ik(38204),
+       yk = Ik(9223),
+       lk = Ik(9183),
+       ak = Ik(187),
+       qk = Ik(37455),
+       Lk = Ik(38156),
+       tk = Ik(37447),
+       Zk = Ik(34),
+       jk = Ik(2700),
+       ek = Ik(1301),
+       wk = Ik(38185),
+       Hk = Ik(37657),
+       Jk = Ik(37438),
+       xk = Ik(38353),
+ ... (2 more added lines; see GitHub link above)
```

#### 1537. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11272` → after: `L11310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11310) · [Before (L11272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11272)

```diff
-         this.qk = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, aS.b)(), this.pickActionHelper = void 0, this.typeObj = null, this.JSS = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
+         this.qZ = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, jk.c)(), this.pickActionHelper = void 0, this.typeObj = null, this.Ckk = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
```

#### 1538. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11277` → after: `L11315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11315) · [Before (L11277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11277)

```diff
-         this.qk.aSS(!0), this.typeObj = SS, this.enchantmentTier = HS
+         this.qZ.okk(!0), this.typeObj = kk, this.enchantmentTier = Fk
```

#### 1539. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11279` → after: `L11317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11317) · [Before (L11279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11279)

```diff
-       eqS() {
+       Kqk() {
```

#### 1540. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11282` → after: `L11320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11320) · [Before (L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11282)

```diff
-       rqS() {}
+       Qqk() {}
```

#### 1541. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11290` → after: `L11328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11328) · [Before (L11290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11290)

```diff
-         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.AY === this.qk.HA && this.qk.camera.oB <= 1 && !fS.c.isCameraDetachedFromPlayer(this.qk)
+         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.Xu === this.qZ.oR && this.qZ.camera.JY <= 1 && !tk.b.isCameraDetachedFromPlayer(this.qZ)
```

#### 1542. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11293` → after: `L11331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11331) · [Before (L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11293)

```diff
-         return this.isFirstPersonLocalPlayer() || this.heldItemState.AY === this.qk.HA && fS.c.isCameraDetachedFromPlayer(this.qk)
+         return this.isFirstPersonLocalPlayer() || this.heldItemState.Xu === this.qZ.oR && tk.b.isCameraDetachedFromPlayer(this.qZ)
```

#### 1543. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11295-L11296` → after: `L11333-L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11333-L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11333-L11334) · [Before (L11295-L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11295-L11296)

```diff
-       cgS() {
-         return wS.clearSecondaryDownFireTimeout(), this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), {
+       CIk() {
+         return sk.clearSecondaryDownFireTimeout(), this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), {
```

#### 1544. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11304` → after: `L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11342) · [Before (L11304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11304)

```diff
-       JgS() {
+       bIk() {
```

#### 1545. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11310` → after: `L11348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11348) · [Before (L11310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11310)

```diff
-       HuS() {
+       Vqk() {
```

#### 1546. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11316` → after: `L11354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11354) · [Before (L11316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11316)

```diff
-               this.SuS().once || HS()
+               this.sqk().once || Fk()
```

#### 1547. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11320` → after: `L11358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11358) · [Before (L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11320)

```diff
-         const gS = this.SuS();
+         const Ik = this.sqk();
```

#### 1548. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11323` → after: `L11361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11361) · [Before (L11323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11323)

```diff
-       SuS() {
+       sqk() {
```

#### 1549. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11326` → after: `L11364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11364) · [Before (L11326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11326)

```diff
-       ZgS() {
+       uIk() {
```

#### 1550. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11335-L11337` → after: `L11373-L11375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11373-L11375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11373-L11375) · [Before (L11335-L11337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11335-L11337)

```diff
-           qk: gS
-         } = this, XS = gS.RP.canUseDevCreativeItems, xS = null === (HS = this.bloxd.getItemStat(gS.HA, SS, "showInCreativeInven")) || void 0 === HS || HS;
-         return !(0, tS.e)(SS, (0, bS.P)((0, KS.e)().lobbyName), xS, XS)
+           qZ: Ik
+         } = this, ik = Ik.gJ.canUseDevCreativeItems, yk = null === (Fk = this.bloxd.getItemStat(Ik.oR, kk, "showInCreativeInven")) || void 0 === Fk || Fk;
+         return !(0, Xk.d)(kk, (0, Tk.K)((0, ek.d)().lobbyName), yk, ik)
```

#### 1551. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11339` → after: `L11377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11377) · [Before (L11339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11339)

```diff
-       buS() {
+       oqk() {
```

#### 1552. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11342` → after: `L11380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11380) · [Before (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11342)

```diff
-           qk: SS
+           qZ: kk
```

#### 1553. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11344-L11347` → after: `L11382-L11385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11382-L11385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11382-L11385) · [Before (L11344-L11347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11344-L11347)

```diff
-         if (SS.RP.creative && SS.RP.canPickBlocks && SS.FQ.ZSS(SS.HA, "inventory") && null !== SS.ISS) {
-           const gS = SS.ISS.Rl,
-             bS = (0, XS.h)(gS) ? xS.t : this.bloxd.getMetaInfo(gS).rootName,
-             NS = tS.d.indexOf(bS);
+         if (kk.gJ.creative && kk.gJ.canPickBlocks && kk.MJ.Ukk(kk.oR, "inventory") && null !== kk.Vkk) {
+           const Ik = kk.Vkk.YM,
+             Tk = (0, ik.e)(Ik) ? yk.q : this.bloxd.getMetaInfo(Ik).rootName,
+             lk = Xk.c.indexOf(Tk);
```

#### 1554. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11349` → after: `L11387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11387) · [Before (L11349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11349)

```diff
-             const gS = SS.FQ.kHS(SS.HA),
+             const Ik = kk.MJ.VFk(kk.oR),
```

#### 1555. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11351` → after: `L11389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11389) · [Before (L11351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11351)

```diff
-               XS = this.qk.FQ.IHS(this.qk.HA);
+               ik = this.qZ.MJ.QFk(this.qZ.oR);
```

#### 1556. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11356` → after: `L11394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11394) · [Before (L11356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11356)

```diff
-               if ((null === (HS = xS[SS]) || void 0 === HS ? void 0 : HS.name) === bS) return kS.k.cj("setSelectedInventorySlotI", SS, !0), !0
+               if ((null === (Fk = yk[kk]) || void 0 === Fk ? void 0 : Fk.name) === Tk) return Zk.g.GL("setSelectedInventorySlotI", kk, !0), !0
```

#### 1557. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11367` → after: `L11405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11405) · [Before (L11367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11367)

```diff
-       vgS() {
+       NIk() {
```

#### 1558. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11369` → after: `L11407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11407) · [Before (L11369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11369)

```diff
-         return this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), SS
+         return this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), kk
```

#### 1559. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11372-L11373` → after: `L11410-L11411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11410-L11411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11410-L11411) · [Before (L11372-L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11372-L11373)

```diff
-         const SS = this.DgS();
-         return SS.tookAction && this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), SS
+         const kk = this.nIk();
+         return kk.tookAction && this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), kk
```

#### 1560. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11376-L11377` → after: `L11414-L11415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11414-L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11414-L11415) · [Before (L11376-L11377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11376-L11377)

```diff
-         const SS = this.qk.FQ.IHS(this.qk.HA);
-         if (!SS || !this.qk.RP.canAltAction) return {
+         const kk = this.qZ.MJ.QFk(this.qZ.oR);
+         if (!kk || !this.qZ.gJ.canAltAction) return {
```

#### 1561. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11381-L11382` → after: `L11419-L11420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11419-L11420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11419-L11420) · [Before (L11381-L11382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11381-L11382)

```diff
-         const HS = this.qk.ISS;
-         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.qk.HA, null === HS || void 0 === HS ? void 0 : HS.position[0], null === HS || void 0 === HS ? void 0 : HS.position[1], null === HS || void 0 === HS ? void 0 : HS.position[2], HS … [truncated]
+         const Fk = this.qZ.Vkk;
+         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.qZ.oR, null === Fk || void 0 === Fk ? void 0 : Fk.position[0], null === Fk || void 0 === Fk ? void 0 : Fk.position[1], null === Fk || void 0 === Fk ? void 0 : Fk.position[2], Fk … [truncated]
```

#### 1562. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11386-L11387` → after: `L11424-L11425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11424-L11425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11424-L11425) · [Before (L11386-L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11386-L11387)

```diff
-         const gS = new IS.e(this, null, null, null, null, SS.selectedItem).performGliderBoost();
-         return gS.tookAction && this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), gS
+         const Ik = new Lk.d(this, null, null, null, null, kk.selectedItem).performGliderBoost();
+         return Ik.tookAction && this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), Ik
```

#### 1563. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11391-L11393` → after: `L11429-L11431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11429-L11431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11429-L11431) · [Before (L11391-L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11391-L11393)

```diff
-         if (!this.qk.ISS) return !1;
-         const HS = this.qk.ISS.Rl;
-         return null !== (SS = NS.j[HS].canBePlacedOver) && void 0 !== SS && SS
+         if (!this.qZ.Vkk) return !1;
+         const Fk = this.qZ.Vkk.YM;
+         return null !== (kk = lk.g[Fk].canBePlacedOver) && void 0 !== kk && kk
```

#### 1564. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11395` → after: `L11433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11433) · [Before (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11395)

```diff
-       DgS() {
+       nIk() {
```

#### 1565. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11397-L11398` → after: `L11435-L11436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11435-L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11435-L11436) · [Before (L11397-L11398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11397-L11398)

```diff
-         const tS = this.qk.FQ.IHS(this.qk.HA);
-         if (!tS || !this.qk.RP.canAltAction) return {
+         const Xk = this.qZ.MJ.QFk(this.qZ.oR);
+         if (!Xk || !this.qZ.gJ.canAltAction) return {
```

#### 1566. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11402` → after: `L11440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11440) · [Before (L11402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11402)

```diff
-         if (tS.opWrapper.tt) return kS.k.cj("toggleMenu", "inventory"), {
+         if (Xk.opWrapper.yX) return Zk.g.GL("toggleMenu", "inventory"), {
```

#### 1567. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11408` → after: `L11446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11446) · [Before (L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11408)

```diff
-         if ((0, QS.e)(null === bS || void 0 === bS ? void 0 : bS.typeObj.type) && this.qk.FQ.uHS(this.heldItemState.AY).crouching) return {
+         if ((0, Kk.e)(null === Tk || void 0 === Tk ? void 0 : Tk.typeObj.type) && this.qZ.MJ.KFk(this.heldItemState.Xu).crouching) return {
```

#### 1568. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11412` → after: `L11450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11450) · [Before (L11412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11412)

```diff
-         const XS = null !== (SS = this.qk.cSS) && void 0 !== SS ? SS : this.qk.camera.uR(),
+         const ik = null !== (kk = this.qZ.Wkk) && void 0 !== kk ? kk : this.qZ.camera.Am(),
```

#### 1569. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11417` → after: `L11455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11455) · [Before (L11417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11417)

```diff
-             cV: aS,
+             nC: jk,
```

#### 1570. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11419-L11423` → after: `L11457-L11461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11457-L11461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11457-L11461) · [Before (L11419-L11423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11419-L11423)

```diff
-           } = this.pickActionHelper.doPickAction(XS, qS.e.entityInteractReach),
-           jS = null === (HS = this.qk.ISS) || void 0 === HS ? void 0 : HS.Rl,
-           GS = null === (gS = this.qk.ISS) || void 0 === gS ? void 0 : gS.position,
-           CS = null !== xS && void 0 !== xS ? xS : null,
-           nS = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.qk.HA, null === GS || void 0 === GS ? void 0 : GS[0], null === GS || void 0 === GS ? void 0 : GS[1], null === GS || void 0 === GS ? void 0 : GS[2], jS ? (0, NS.h)(jS) : "Air", CS);
+           } = this.pickActionHelper.doPickAction(ik, ak.f.entityInteractReach),
+           wk = null === (Fk = this.qZ.Vkk) || void 0 === Fk ? void 0 : Fk.YM,
+           Hk = null === (Ik = this.qZ.Vkk) || void 0 === Ik ? void 0 : Ik.position,
+           Jk = null !== yk && void 0 !== yk ? yk : null,
+           xk = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.qZ.oR, null === Hk || void 0 === Hk ? void 0 : Hk[0], null === Hk || void 0 === Hk ? void 0 : Hk[1], null === Hk || void 0 === Hk ? void 0 : Hk[2], wk ? (0, lk.f)(wk) : "Air", Jk);
```

#### 1571. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11429` → after: `L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11467) · [Before (L11429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11429)

```diff
-           DS = new IS.e(this, CS, uS, GS, jS, bS).performAltAction(!PS);
+           Qk = new Lk.d(this, Jk, qk, Hk, wk, Tk).performAltAction(!Pk);
```

#### 1572. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11435` → after: `L11473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11473) · [Before (L11435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11435)

```diff
-       dgS() {
+       UIk() {
```

#### 1573. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11444` → after: `L11482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11482) · [Before (L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11444)

```diff
-         HS <= 1.2 && SS > 1.2 ? (this.qk.camera.lB = 0, this.qk.camera.oB = 0, this.itemZoomer.forceXyOffsetToZero(), this.eqS()) : 0 === HS && (this.itemZoomer.forceXyOffsetToZero(), this.eqS()), HS > .001 && SS < .001 && (this.qk.camera.lB = 1.2, this.eqS())
+         Fk <= 1.2 && kk > 1.2 ? (this.qZ.camera.VY = 0, this.qZ.camera.JY = 0, this.itemZoomer.forceXyOffsetToZero(), this.Kqk()) : 0 === Fk && (this.itemZoomer.forceXyOffsetToZero(), this.Kqk()), Fk > .001 && kk < .001 && (this.qZ.camera.VY = 1.2, this.Kqk())
```

#### 1574. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11460` → after: `L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11498) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11460)

```diff
-         kS.k.unsubscribe(this._modelLoadedSub), this.heldItemState.AY === this.qk.HA && wS.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.qk.FQ.tHS(this.heldItemState.AY)
+         Zk.g.unsubscribe(this._modelLoadedSub), this.heldItemState.Xu === this.qZ.oR && sk.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.qZ.MJ.eFk(this.heldItemState.Xu)
```

#### 1575. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11463` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11501) · [Before (L11463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11463)

```diff
-         kS.k.unsubscribe(this._newBloxdSub)
+         Zk.g.unsubscribe(this._newBloxdSub)
```

#### 1576. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11466` → after: `L11504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11504) · [Before (L11466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11466)

```diff
-         if (this.rqS(), this._doneFirstMeshSetup) return;
+         if (this.Qqk(), this._doneFirstMeshSetup) return;
```

#### 1577. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11468-L11470` → after: `L11506-L11508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11506-L11508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11506-L11508) · [Before (L11468-L11470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11468-L11470)

```diff
-         const SS = this.heldItemState.AY;
-         this.qk.FQ.tHS(SS) || (this._modelLoadedSub = kS.k.subscribe(`lifeformSetupFinished|${SS}`, (() => {
-           this.rqS()
+         const kk = this.heldItemState.Xu;
+         this.qZ.MJ.eFk(kk) || (this._modelLoadedSub = Zk.g.subscribe(`lifeformSetupFinished|${kk}`, (() => {
+           this.Qqk()
```

#### 1578. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11481` → after: `L11519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11519) · [Before (L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11481)

```diff
-         return null === SS || this.qk.Hj.fY.has(SS) ? SS : (this.thirdPersonThinObjectId = null, null)
+         return null === kk || this.qZ.Xw.kp.has(kk) ? kk : (this.thirdPersonThinObjectId = null, null)
```

#### 1579. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11485-L11488` → after: `L11523-L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11523-L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11523-L11526) · [Before (L11485-L11488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11485-L11488)

```diff
-           nf: HS
-         } = this.thirdPersonPose, gS = HS.x * this.heldPoseScaleY() * HS.z < 0, tS = SS.thinInstMgr.getNodeWorldMatrix(SS.kY, SS.nodeIndex).determinant() < 0, bS = (0, GS.h)(gS, tS);
-         if (this.thirdPersonFlippedWinding === bS && this.thirdPersonAttachedToId === SS.kY && this.thirdPersonAttachedToNode === SS.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
-         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = bS, this.thirdPersonAttachedToId = SS.kY, this.thirdPersonAttachedToNode = SS.nodeIndex;
+           ci: Fk
+         } = this.thirdPersonPose, Ik = Fk.x * this.heldPoseScaleY() * Fk.z < 0, Xk = kk.thinInstMgr.getNodeWorldMatrix(kk.Ip, kk.nodeIndex).determinant() < 0, Tk = (0, Hk.g)(Ik, Xk);
+         if (this.thirdPersonFlippedWinding === Tk && this.thirdPersonAttachedToId === kk.Ip && this.thirdPersonAttachedToNode === kk.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
+         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = Tk, this.thirdPersonAttachedToId = kk.Ip, this.thirdPersonAttachedToNode = kk.nodeIndex;
```

#### 1580. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11491` → after: `L11529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11529) · [Before (L11491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11491)

```diff
-           Ku: !0,
+           eq: !0,
```

#### 1581. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11494-L11495` → after: `L11532-L11533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11532-L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11532-L11533) · [Before (L11494-L11495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11494-L11495)

```diff
-           const gS = this.qk.Hj.fY;
-           XS === this.thirdPersonRequestId && gS.has(SS.kY) ? (this.thirdPersonThinObjectId = HS, gS.attachThinObject(HS, SS.kY, SS.nodeIndex), gS.set(HS, "aOpacity", (0, CS.holderAttachmentOpacity)(this.qk, this.heldItemState.AY)), (0, CS.invalidateAttachmentProximityFade)(this. … [truncated]
+           const Ik = this.qZ.Xw.kp;
+           ik === this.thirdPersonRequestId && Ik.has(kk.Ip) ? (this.thirdPersonThinObjectId = Fk, Ik.attachThinObject(Fk, kk.Ip, kk.nodeIndex), Ik.set(Fk, "aOpacity", (0, Jk.holderAttachmentOpacity)(this.qZ, this.heldItemState.Xu)), (0, Jk.invalidateAttachmentProximityFade)(this. … [truncated]
```

#### 1582. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11499` → after: `L11537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11537) · [Before (L11499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11499)

```diff
-         return GS.d * this.thirdPersonPose.nf.y
+         return Hk.e * this.thirdPersonPose.ci.y
```

#### 1583. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11505` → after: `L11543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11543) · [Before (L11505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11505)

```diff
-         const HS = this.qk.Hj.fY,
+         const Fk = this.qZ.Xw.kp,
```

#### 1584. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11509` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11547) · [Before (L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11509)

```diff
-             nf: bS,
+             ci: Tk,
```

#### 1585. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11518` → after: `L11556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11556) · [Before (L11518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11518)

```diff
-           } = (0, nS.b)(gS, xS ? XS : tS, NS, this.typeObj.heldModelOffsetY());
+           } = (0, xk.c)(Ik, yk ? ik : Xk, lk, this.typeObj.heldModelOffsetY());
```

#### 1586. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11524` → after: `L11562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11562) · [Before (L11524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11524)

```diff
-         null !== SS && (this.qk.Hj.fY.delete(SS), this.thirdPersonThinObjectId = null)
+         null !== kk && (this.qZ.Xw.kp.delete(kk), this.thirdPersonThinObjectId = null)
```

#### 1587. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11528` → after: `L11566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11566) · [Before (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11528)

```diff
-           qk: SS,
+           qZ: kk,
```

#### 1588. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11531-L11533` → after: `L11569-L11571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11569-L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11569-L11571) · [Before (L11531-L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11531-L11533)

```diff
-         if (!SS.FQ.ZSS(HS.AY, "humanoidMesh")) return null;
-         const gS = SS.FQ.VHS(HS.AY),
-           tS = SS.Hj.fY,
+         if (!kk.MJ.Ukk(Fk.Xu, "humanoidMesh")) return null;
+         const Ik = kk.MJ.YFk(Fk.Xu),
+           Xk = kk.Xw.kp,
```

#### 1589. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11535` → after: `L11573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11573) · [Before (L11535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11535)

```diff
-             kY: bS
+             Ip: Tk
```

#### 1590. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11542` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11580) · [Before (L11542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11542)

```diff
-           kY: bS,
+           Ip: Tk,
```

#### 1591. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11551` → after: `L11589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11589) · [Before (L11551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11551)

```diff
-           kY: SS.kY,
+           Ip: kk.Ip,
```

#### 1592. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11556` → after: `L11594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11594) · [Before (L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11556)

```diff
-           qk: HS,
+           qZ: Fk,
```

#### 1593. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11559-L11561` → after: `L11597-L11599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11597-L11599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11597-L11599) · [Before (L11559-L11561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11559-L11561)

```diff
-         if (!HS.FQ.ZSS(gS.AY, "fourLeggedMesh")) return null;
-         const tS = HS.FQ.iHS(gS.AY),
-           bS = HS.Hj.fY,
+         if (!Fk.MJ.Ukk(Ik.Xu, "fourLeggedMesh")) return null;
+         const Xk = Fk.MJ.AFk(Ik.Xu),
+           Tk = Fk.Xw.kp,
```

#### 1594. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11563` → after: `L11601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11601) · [Before (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11563)

```diff
-             kY: XS
+             Ip: ik
```

#### 1595. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11570` → after: `L11608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11608) · [Before (L11570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11570)

```diff
-           kY: XS,
+           Ip: ik,
```

#### 1596. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11576` → after: `L11614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11614) · [Before (L11576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11576)

```diff
-         if (!this.qk.Hj.Wj) return;
+         if (!this.qZ.Xw.Nw) return;
```

#### 1597. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11578` → after: `L11616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11616) · [Before (L11578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11578)

```diff
-         if (null !== SS) return void this.qk.Hj.fY.set(SS, "aLightLevels", this.heldItemLightLevels());
+         if (null !== kk) return void this.qZ.Xw.kp.set(kk, "aLightLevels", this.heldItemLightLevels());
```

#### 1598. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11581-L11583` → after: `L11619-L11621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11619-L11621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11619-L11621) · [Before (L11581-L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11581-L11583)

```diff
-         if (this.lightTargetsForMesh !== HS && (this.lightTargetsForMesh = HS, this.pxS = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
-           const SS = (0, uS.l)(HS);
-           for (const HS of SS) HS.mY && "aLightLevels" in HS.mY && this.pxS.push(HS);
+         if (this.lightTargetsForMesh !== Fk && (this.lightTargetsForMesh = Fk, this.Myk = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
+           const kk = (0, qk.i)(Fk);
+           for (const Fk of kk) Fk.JR && "aLightLevels" in Fk.JR && this.Myk.push(Fk);
```

#### 1599. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11586` → after: `L11624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11624) · [Before (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11586)

```diff
-         if (0 === this.pxS.length) return;
+         if (0 === this.Myk.length) return;
```

#### 1600. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11588` → after: `L11626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11626) · [Before (L11588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11588)

```diff
-         for (const tS of this.pxS)(0, uS.r)(tS, gS)
+         for (const Xk of this.Myk)(0, qk.o)(Xk, Ik)
```

#### 1601. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11591` → after: `L11629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11629) · [Before (L11591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11591)

```diff
-         return this.qk.FQ.JHS(this.heldItemState.AY)._lightLevels
+         return this.qZ.MJ.RFk(this.heldItemState.Xu)._lightLevels
```

#### 1602. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11595` → after: `L11633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11633) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11595)

```diff
-   38418: (SS, HS, gS) => {
+   38361: (kk, Fk, Ik) => {
```

#### 1603. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11597` → after: `L11635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11635) · [Before (L11597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11597)

```diff
-       e: () => KS,
+       d: () => ek,
```

#### 1604. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11599-L11600` → after: `L11637-L11638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11637-L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11637-L11638) · [Before (L11599-L11600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11599-L11600)

```diff
-       j: () => aS,
-       k: () => xS
+       h: () => jk,
+       i: () => yk
```

#### 1605. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11602-L11604` → after: `L11640-L11642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11640-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11640-L11642) · [Before (L11602-L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11602-L11604)

```diff
-     var tS = gS(37113),
-       bS = gS(37621),
-       XS = gS(4602);
+     var Xk = Ik(37144),
+       Tk = Ik(37630),
+       ik = Ik(4475);
```

#### 1606. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11608-L11610` → after: `L11646-L11648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11646-L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11646-L11648) · [Before (L11608-L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11608-L11610)

```diff
-         position: new tS.VK,
-         rotation: new tS.VK,
-         nf: new tS.VK,
+         position: new Xk.Ge,
+         rotation: new Xk.Ge,
+         ci: new Xk.Ge,
```

#### 1607. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11615-L11617` → after: `L11653-L11655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11653-L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11653-L11655) · [Before (L11615-L11617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11615-L11617)

```diff
-     const NS = new tS.VK(-.18, -.66, .48),
-       qS = new tS.VK(.4, 1.25, Math.PI + .9),
-       uS = new tS.VK(-.12, .12, .12),
+     const lk = new Xk.Ge(-.18, -.66, .48),
+       ak = new Xk.Ge(.4, 1.25, Math.PI + .9),
+       qk = new Xk.Ge(-.12, .12, .12),
```

#### 1608. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11623` → after: `L11661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11661) · [Before (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11623)

```diff
-       return tS.Matrix.RotationYawPitchRollToRef(SS.y, SS.x, SS.z, IS), tS.Matrix.RotationYawPitchRollToRef(HS[1], HS[0], HS[2], fS), bS.b.matMulToRef(fS, IS, kS), tS.Quaternion.FromRotationMatrixToRef(kS, gS)
+       return Xk.Matrix.RotationYawPitchRollToRef(kk.y, kk.x, kk.z, Lk), Xk.Matrix.RotationYawPitchRollToRef(Fk[1], Fk[0], Fk[2], tk), Tk.c.matMulToRef(tk, Lk, Zk), Xk.Quaternion.FromRotationMatrixToRef(Zk, Ik)
```

#### 1609. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11635` → after: `L11673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11673) · [Before (L11635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11635)

```diff
-         nf: xS
+         ci: yk
```

#### 1610. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11637-L11639` → after: `L11675-L11677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11675-L11677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11675-L11677) · [Before (L11637-L11639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11637-L11639)

```diff
-       if (gS.usesQuaternion = !1, "Gun" === SS.type) return tS.dJ(NS), bS.dJ(qS), void xS.dJ(uS);
-       const [IS, fS, kS] = null !== HS && void 0 !== HS ? HS : [0, 0, 0], aS = (0, XS.b)(SS.type), jS = aS ? 2.25 : 1.35, GS = aS ? 0 : .08;
-       if ("TwoDTool" === SS.type || SS.holdAsAiming) tS.I5(IS, -.48 + fS, .24 + kS + GS), xS.I5(.19 * jS, -.19 * jS, .19 * jS), SS.holdAsAiming ? bS.I5(.4 + Math.PI, 1.25, Math.PI / 2) : bS.I5(Math.PI, Math.PI / 2, .35 * Math.PI);
+       if (Ik.usesQuaternion = !1, "Gun" === kk.type) return Xk.kS(lk), Tk.kS(ak), void yk.kS(qk);
+       const [Lk, tk, Zk] = null !== Fk && void 0 !== Fk ? Fk : [0, 0, 0], jk = (0, ik.d)(kk.type), wk = jk ? 2.25 : 1.35, Hk = jk ? 0 : .08;
+       if ("TwoDTool" === kk.type || kk.holdAsAiming) Xk.t5(Lk, -.48 + tk, .24 + Zk + Hk), yk.t5(.19 * wk, -.19 * wk, .19 * wk), kk.holdAsAiming ? Tk.t5(.4 + Math.PI, 1.25, Math.PI / 2) : Tk.t5(Math.PI, Math.PI / 2, .35 * Math.PI);
```

#### 1611. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11641` → after: `L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11679) · [Before (L11641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11641)

```diff
-         tS.I5(IS, -.72 + fS, .18 + kS + GS);
+         Xk.t5(Lk, -.72 + tk, .18 + Zk + Hk);
```

#### 1612. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11643` → after: `L11681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11681) · [Before (L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11643)

```diff
-         xS.I5(SS, SS, SS), bS.I5(aS ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
+         yk.t5(kk, kk, kk), Tk.t5(jk ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
```

#### 1613. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11648` → after: `L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11686) · [Before (L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11648)

```diff
-   38416: (SS, HS, gS) => {
+   38353: (kk, Fk, Ik) => {
```

#### 1614. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11650` → after: `L11688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11688) · [Before (L11650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11650)

```diff
-       b: () => xS
+       c: () => yk
```

#### 1615. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11652` → after: `L11690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11690) · [Before (L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11652)

```diff
-     var tS = gS(37113);
+     var Xk = Ik(37144);
```

#### 1616. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11654` → after: `L11692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11692) · [Before (L11654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11654)

```diff
-       XS = new tS.VK;
+       ik = new Xk.Ge;
```

#### 1617. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11658` → after: `L11696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11696) · [Before (L11658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11658)

```diff
-       const NS = HS instanceof tS.Quaternion ? HS : tS.Quaternion.RotationYawPitchRollToRef(HS.y, HS.x, HS.z, bS);
+       const lk = Fk instanceof Xk.Quaternion ? Fk : Xk.Quaternion.RotationYawPitchRollToRef(Fk.y, Fk.x, Fk.z, Tk);
```

#### 1618. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11662` → after: `L11700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11700) · [Before (L11662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11662)

```diff
-   37101: (SS, HS, gS) => {
+   37134: (kk, Fk, Ik) => {
```

#### 1619. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11672-L11676` → after: `L11710-L11714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11710-L11714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11710-L11714) · [Before (L11672-L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11672-L11676)

```diff
-     var tS = gS(37104),
-       bS = gS(2910),
-       XS = gS(680),
-       xS = gS(1309),
-       NS = gS(31);
+     var Xk = Ik(37139),
+       Tk = Ik(2700),
+       ik = Ik(628),
+       yk = Ik(1217),
+       lk = Ik(34);
```

#### 1620. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11691` → after: `L11729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11729) · [Before (L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11691)

```diff
-         if (null !== bS.kY)
+         if (null !== Tk.Ip)
```

#### 1621. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11700` → after: `L11738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11738) · [Before (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11700)

```diff
-         if (null === bS.kY || null === (tS = bS.hideOnArmourPartsEquip) || void 0 === tS || !tS.length) continue;
+         if (null === Tk.Ip || null === (Xk = Tk.hideOnArmourPartsEquip) || void 0 === Xk || !Xk.length) continue;
```

#### 1622. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11702-L11715` → after: `L11740-L11753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11740-L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11740-L11753) · [Before (L11702-L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11702-L11715)

```diff
-         SS.setVisibility(bS.kY, !XS)
-       }
-     }
-     var fS = gS(37432),
-       kS = gS(37225),
-       aS = gS(37471),
-       KS = gS(37441),
-       jS = gS(387),
-       GS = gS(37193),
-       CS = gS(37247),
-       nS = gS(37252),
-       PS = gS(37353),
-       QS = gS(37417),
-       DS = gS(37419);
+         kk.setVisibility(Tk.Ip, !ik)
+       }
+     }
+     var tk = Ik(37455),
+       Zk = Ik(37259),
+       jk = Ik(37479),
+       ek = Ik(37457),
+       wk = Ik(337),
+       Hk = Ik(37236),
+       Jk = Ik(37286),
+       xk = Ik(37293),
+       Pk = Ik(37383),
+       Kk = Ik(37435),
+       Qk = Ik(37438);
```

#### 1623. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11720` → after: `L11758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11758) · [Before (L11720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11720)

```diff
-         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.AY = void 0
+         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.Xu = void 0
```

#### 1624. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11728` → after: `L11766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11766) · [Before (L11728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11728)

```diff
-       } = tS, NS = (0, nS.e)(XS, xS);
+       } = Xk, lk = (0, xk.f)(ik, yk);
```

#### 1625. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11732` → after: `L11770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11770) · [Before (L11732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11732)

```diff
-       } else wS[NS] = null, (0, nS.h)(XS, SS.Hj.Bj).then((SS => {
+       } else sk[lk] = null, (0, xk.j)(ik, kk.Xw.Yw).then((kk => {
```

#### 1626. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11736-L11740` → after: `L11774-L11778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11774-L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11774-L11778) · [Before (L11736-L11740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11736-L11740)

```diff
-               Bj: xS
-             } = XS.Hj,
-             NS = (0, nS.e)(HS, gS),
-             qS = (0, nS.c)(null !== gS && void 0 !== gS ? gS : HS, xS, (SS => {
-               (0, kS.p)(SS, CS.d), (0, KS.c)(SS, XS.Hj), (0, GS.d)(SS), (0, kS.Q)(SS)
+               Yw: yk
+             } = ik.Xw,
+             lk = (0, xk.f)(Fk, Ik),
+             ak = (0, xk.c)(null !== Ik && void 0 !== Ik ? Ik : Fk, yk, (kk => {
+               (0, Zk.v)(kk, Jk.d), (0, ek.c)(kk, ik.Xw), (0, Hk.c)(kk), (0, Zk.O)(kk)
```

#### 1627. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11743` → after: `L11781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11781) · [Before (L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11743)

```diff
-           (0, nS.i)(SS, qS, {
+           (0, xk.l)(kk, ak, {
```

#### 1628. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11746` → after: `L11784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11784) · [Before (L11746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11746)

```diff
-               (0, aS.i)(SS) || SS.lL().ZY(SS)
+               (0, jk.i)(kk) || kk.mG().zp(kk)
```

#### 1629. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11753` → after: `L11791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11791) · [Before (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11753)

```diff
-           for (const bS of uS)(0, nS.m)(bS);
+           for (const Tk of qk)(0, xk.p)(Tk);
```

#### 1630. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11755-L11756` → after: `L11793-L11794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11793-L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11793-L11794) · [Before (L11755-L11756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11755-L11756)

```diff
-           const jS = XS.Hj.fY,
-             PS = XS.FQ.EY(XS.FQ.names.meshAttachments);
+           const wk = ik.Xw.kp,
+             Pk = ik.MJ.ku(ik.MJ.names.meshAttachments);
```

#### 1631. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11759` → after: `L11797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11797) · [Before (L11759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11759)

```diff
-             const SS = null !== (QS = null === (DS = XS.FQ.tHS(bS.AY)) || void 0 === DS ? void 0 : DS.kY) && void 0 !== QS ? QS : null;
+             const kk = null !== (Kk = null === (Qk = ik.MJ.eFk(Tk.Xu)) || void 0 === Qk ? void 0 : Qk.Ip) && void 0 !== Kk ? Kk : null;
```

#### 1632. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11761` → after: `L11799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11799) · [Before (L11761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11761)

```diff
-               for (const tS of bS.attachments) tS.modelGlb === HS && tS.texture === gS && null === tS.kY && OS(bS, SS, fS, tS);
+               for (const Xk of Tk.attachments) Xk.modelGlb === Fk && Xk.texture === Ik && null === Xk.Ip && vk(Tk, kk, tk, Xk);
```

#### 1633. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11763` → after: `L11801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11801) · [Before (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11763)

```diff
-             } else console.error(`Loaded ${NS} but theres no thinObjectId ${SS} for parent entity ${bS.AY}`)
+             } else console.error(`Loaded ${lk} but theres no thinObjectId ${kk} for parent entity ${Tk.Xu}`)
```

#### 1634. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11767` → after: `L11805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11805) · [Before (L11767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11767)

```diff
-         console.error(`Failed to load ${XS}:`, SS.stack)
+         console.error(`Failed to load ${ik}:`, kk.stack)
```

#### 1635. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11774-L11775` → after: `L11812-L11813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11812-L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11812-L11813) · [Before (L11774-L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11774-L11775)

```diff
-         qS = NS.Hj.fY,
-         uS = `${(0,nS.e)(tS.modelGlb,tS.texture)}|${tS.modelNode}`;
+         ak = lk.Xw.kp,
+         qk = `${(0,xk.f)(Xk.modelGlb,Xk.texture)}|${Xk.modelNode}`;
```

#### 1636. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11778` → after: `L11816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11816) · [Before (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11778)

```diff
-         if (!SS) return void console.error(`Node ${tS.modelNode} not found in container ${tS.modelGlb}`);
+         if (!kk) return void console.error(`Node ${Xk.modelNode} not found in container ${Xk.modelGlb}`);
```

#### 1637. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11780` → after: `L11818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11818) · [Before (L11780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11780)

```diff
-           hf: 4,
+           St: 4,
```

#### 1638. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11789-L11790` → after: `L11827-L11828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11827-L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11827-L11828) · [Before (L11789-L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11789-L11790)

```diff
-         }), void 0 !== tS.animation && (0, nS.o)(gS), qS.setPickableForType(uS, !0);
-         for (const HS of [SS, ...SS.getChildMeshes()]) HS.material && NS.Hj.JY(HS)
+         }), void 0 !== Xk.animation && (0, xk.t)(Ik), ak.setPickableForType(qk, !0);
+         for (const Fk of [kk, ...kk.getChildMeshes()]) Fk.material && lk.Xw.mp(Fk)
```

#### 1639. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11796-L11799` → after: `L11834-L11837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11834-L11837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11834-L11837) · [Before (L11796-L11799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11796-L11799)

```diff
-       qS.setEntityId(IS, aS), qS.setPickable(IS, SS.personFullBody && (0, QS.l)(aS)), qS.set(IS, "aOpacity", (0, DS.holderAttachmentOpacity)(NS, aS));
-       const KS = NS.rY[NS.HA][aS];
-       if (qS.setRenderingGroupId(IS, null !== (XS = null === KS || void 0 === KS ? void 0 : KS.zIndex) && void 0 !== XS ? XS : 0), null !== KS && void 0 !== KS && KS.overlayColour) {
-         const [SS, HS, gS] = (0, jS.M)(KS.overlayColour);
+       ak.setEntityId(Lk, jk), ak.setPickable(Lk, kk.personFullBody && (0, Kk.g)(jk)), ak.set(Lk, "aOpacity", (0, Qk.holderAttachmentOpacity)(lk, jk));
+       const ek = lk.xR[lk.oR][jk];
+       if (ak.setRenderingGroupId(Lk, null !== (ik = null === ek || void 0 === ek ? void 0 : ek.zIndex) && void 0 !== ik ? ik : 0), null !== ek && void 0 !== ek && ek.overlayColour) {
+         const [kk, Fk, Ik] = (0, wk.Y)(ek.overlayColour);
```

#### 1640. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11802-L11803` → after: `L11840-L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11840-L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11840-L11841) · [Before (L11802-L11803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11802-L11803)

```diff
-       const GS = NS.FQ.JHS(aS);
-       if (qS.set(IS, "aLightLevels", null !== (xS = null === GS || void 0 === GS ? void 0 : GS._lightLevels) && void 0 !== xS ? xS : fS.c), tS.overlayColour) {
+       const Hk = lk.MJ.RFk(jk);
+       if (ak.set(Lk, "aLightLevels", null !== (yk = null === Hk || void 0 === Hk ? void 0 : Hk._lightLevels) && void 0 !== yk ? yk : tk.b), Xk.overlayColour) {
```

#### 1641. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11807` → after: `L11845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11845) · [Before (L11807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11807)

```diff
-       if (tS.kY = IS, void 0 !== tS.animation) {
+       if (Xk.Ip = Lk, void 0 !== Xk.animation) {
```

#### 1642. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11814` → after: `L11852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11852) · [Before (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11814)

```diff
-       const tS = SS.FQ.getState(HS, SS.FQ.names.meshAttachments);
+       const Xk = kk.MJ.getState(Fk, kk.MJ.names.meshAttachments);
```

#### 1643. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11816` → after: `L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11854) · [Before (L11816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11816)

```diff
-         for (const bS of tS.attachments) null !== bS.kY && SS.Hj.fY.setPickable(bS.kY, gS)
+         for (const Tk of Xk.attachments) null !== Tk.Ip && kk.Xw.kp.setPickable(Tk.Ip, Ik)
```

#### 1644. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11824-L11826` → after: `L11862-L11864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11862-L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11862-L11864) · [Before (L11824-L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11824-L11826)

```diff
-         EQ: function(HS, gS) {
-           gS.zIndexSub = NS.k.subscribe(`otherEntitySettingsClientifiedEId|${HS}|zIndex`, (HS => {
-             for (const tS of gS.attachments) null !== tS.kY && SS.Hj.fY.setRenderingGroupId(tS.kY, HS)
+         mJ: function(Fk, Ik) {
+           Ik.zIndexSub = lk.g.subscribe(`otherEntitySettingsClientifiedEId|${Fk}|zIndex`, (Fk => {
+             for (const Xk of Ik.attachments) null !== Xk.Ip && kk.Xw.kp.setRenderingGroupId(Xk.Ip, Fk)
```

#### 1645. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11829-L11831` → after: `L11867-L11869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11867-L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11867-L11869) · [Before (L11829-L11831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11829-L11831)

```diff
-         pE: function(HS, gS) {
-           NS.k.unsubscribe(gS.zIndexSub);
-           const tS = SS.Hj.fY;
+         iG: function(Fk, Ik) {
+           lk.g.unsubscribe(Ik.zIndexSub);
+           const Xk = kk.Xw.kp;
```

#### 1646. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11833-L11834` → after: `L11871-L11872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11871-L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11871-L11872) · [Before (L11833-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11833-L11834)

```diff
-             if (null !== SS.kY && tS.has(SS.kY)) try {
-               tS.delete(SS.kY)
+             if (null !== kk.Ip && Xk.has(kk.Ip)) try {
+               Xk.delete(kk.Ip)
```

#### 1647. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11836` → after: `L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11874) · [Before (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11836)

```diff
-               console.error(`Failed to cleanup attachment ${SS.kY} of entity ${HS}:`, bS.stack)
+               console.error(`Failed to cleanup attachment ${kk.Ip} of entity ${Fk}:`, Tk.stack)
```

#### 1648. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11840` → after: `L11878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11878) · [Before (L11840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11840)

```diff
-         bD: function(HS, gS) {
+         Ix: function(Fk, Ik) {
```

#### 1649. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11844-L11845` → after: `L11882-L11883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11882-L11883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11882-L11883) · [Before (L11844-L11845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11844-L11845)

```diff
-             const HS = null !== (bS = null === (XS = SS.FQ.tHS(xS.AY)) || void 0 === XS ? void 0 : XS.kY) && void 0 !== bS ? bS : null;
-             null === HS || (0, tS.pausesOutOfView)(SS, xS.AY, HS) || ES(SS, xS)
+             const Fk = null !== (Tk = null === (ik = kk.MJ.eFk(yk.Xu)) || void 0 === ik ? void 0 : ik.Ip) && void 0 !== Tk ? Tk : null;
+             null === Fk || (0, Xk.pausesOutOfView)(kk, yk.Xu, Fk) || Gk(kk, yk)
```

#### 1650. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11852` → after: `L11890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11890) · [Before (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11852)

```diff
-       const gS = SS.FQ.getState(HS, SS.FQ.names.meshAttachments);
+       const Ik = kk.MJ.getState(Fk, kk.MJ.names.meshAttachments);
```

#### 1651. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11857-L11859` → after: `L11895-L11897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11895-L11897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11895-L11897) · [Before (L11857-L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11857-L11859)

```diff
-       const gS = SS.Hj.fY,
-         tS = SS.o3 / 1e3;
-       for (const bS of HS.animatedAttachments) bS.clipPose.write(gS, bS.kY, tS)
+       const Ik = kk.Xw.kp,
+         Xk = kk.jkk / 1e3;
+       for (const Tk of Fk.animatedAttachments) Tk.clipPose.write(Ik, Tk.Ip, Xk)
```

#### 1652. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11863` → after: `L11901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11901) · [Before (L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11863)

```diff
-       const tS = SS.FQ.getState(HS, SS.FQ.names.meshAttachments);
+       const Xk = kk.MJ.getState(Fk, kk.MJ.names.meshAttachments);
```

#### 1653. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11866` → after: `L11904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11904) · [Before (L11866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11866)

```diff
-           if (bS.kY === gS) return !0;
+           if (Tk.Ip === Ik) return !0;
```

#### 1654. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11872` → after: `L11910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11910) · [Before (L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11872)

```diff
-       return yS(SS, HS, null !== (tS = gS.attachments) && void 0 !== tS ? tS : [])
+       return Rk(kk, Fk, null !== (Xk = Ik.attachments) && void 0 !== Xk ? Xk : [])
```

#### 1655. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11881` → after: `L11919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11919) · [Before (L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11881)

```diff
-       if ((0, XS.K)(SS)) return console.error("Cannot update mesh attachments for invalid eId", SS), tS;
+       if ((0, ik.Q)(kk)) return console.error("Cannot update mesh attachments for invalid eId", kk), Xk;
```

#### 1656. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11883-L11884` → after: `L11921-L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11921-L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11921-L11922) · [Before (L11883-L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11883-L11884)

```diff
-         qS = NS.FQ.tHS(SS);
-       if (!qS) return console.error(`Cannot update mesh attachments for entity ${SS} as it has no mesh`), tS;
+         ak = lk.MJ.eFk(kk);
+       if (!ak) return console.error(`Cannot update mesh attachments for entity ${kk} as it has no mesh`), Xk;
```

#### 1657. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11886` → after: `L11924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11924) · [Before (L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11886)

```diff
-         kY: uS
+         Ip: qk
```

#### 1658. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11888-L11891` → after: `L11926-L11929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11926-L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11926-L11929) · [Before (L11888-L11891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11888-L11891)

```diff
-       if (null === uS) return console.error(`Cannot update mesh attachments for entity ${SS} as it has no thinObjectId`), tS;
-       const fS = NS.FQ.getState(SS, NS.FQ.names.meshAttachments);
-       if (!fS) return console.error(`Cannot update mesh attachments for entity ${SS} as it has no meshAttachments component`), tS;
-       for (const bS of fS.attachments)(0, xS.ib)(bS.owners, HS);
+       if (null === qk) return console.error(`Cannot update mesh attachments for entity ${kk} as it has no thinObjectId`), Xk;
+       const tk = lk.MJ.getState(kk, lk.MJ.names.meshAttachments);
+       if (!tk) return console.error(`Cannot update mesh attachments for entity ${kk} as it has no meshAttachments component`), Xk;
+       for (const Tk of tk.attachments)(0, yk.kb)(Tk.owners, Fk);
```

#### 1659. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11898` → after: `L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11936) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11898)

```diff
-               tS.owners.push(gS), iS(SS, tS.kY, xS.overlayColour), bS = !0;
+               Xk.owners.push(Ik), Ck(kk, Xk.Ip, yk.overlayColour), Tk = !0;
```

#### 1660. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11904` → after: `L11942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11942) · [Before (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11904)

```diff
-             kY: null,
+             Ip: null,
```

#### 1661. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11909` → after: `L11947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11947) · [Before (L11909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11909)

```diff
-         return IS(SS.Hj.fY, tS, HS.attachments), XS
+         return Lk(kk.Xw.kp, Xk, Fk.attachments), ik
```

#### 1662. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11911` → after: `L11949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11949) · [Before (L11911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11911)

```diff
-       const kS = NS.Hj.fY;
+       const Zk = lk.Xw.kp;
```

#### 1663. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11914` → after: `L11952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11952) · [Before (L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11914)

```diff
-         0 === SS.owners.length && (null !== SS.kY && kS.delete(SS.kY), (0, xS.ib)(fS.attachments, SS), null !== SS.clipPose && (0, xS.ib)(fS.animatedAttachments, SS), bS--)
+         0 === kk.owners.length && (null !== kk.Ip && Zk.delete(kk.Ip), (0, yk.kb)(tk.attachments, kk), null !== kk.clipPose && (0, yk.kb)(tk.animatedAttachments, kk), Tk--)
```

#### 1664. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11922` → after: `L11960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11960) · [Before (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11922)

```diff
-         tS = gS.FQ.getState(SS, gS.FQ.names.meshAttachments);
+         Xk = Ik.MJ.getState(kk, Ik.MJ.names.meshAttachments);
```

#### 1665. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11924-L11925` → after: `L11962-L11963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11962-L11963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11962-L11963) · [Before (L11924-L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11924-L11925)

```diff
-       const xS = null === (HS = gS.FQ.tHS(SS)) || void 0 === HS ? void 0 : HS.kY;
-       (0, XS.K)(xS) || IS(gS.Hj.fY, xS, tS.attachments)
+       const yk = null === (Fk = Ik.MJ.eFk(kk)) || void 0 === Fk ? void 0 : Fk.Ip;
+       (0, ik.Q)(yk) || Lk(Ik.Xw.kp, yk, Xk.attachments)
```

#### 1666. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11930` → after: `L11968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11968) · [Before (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11930)

```diff
-       const tS = SS.Hj.fY;
+       const Xk = kk.Xw.kp;
```

#### 1667. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11937` → after: `L11975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11975) · [Before (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11937)

```diff
-   37655: (SS, HS, gS) => {
+   37662: (kk, Fk, Ik) => {
```

#### 1668. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11945-L11947` → after: `L11983-L11986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11983-L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11983-L11986) · [Before (L11945-L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11945-L11947)

```diff
-     var tS = gS(2910),
-       bS = gS(2022),
-       XS = gS(387),
+     var Xk = Ik(2700),
+       Tk = Ik(1844),
+       ik = Ik(337),
+       yk = Ik(37674),
```

#### 1669. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11949-L11950` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11988) · [Before (L11949-L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11949-L11950)

```diff
-       NS = gS(37667),
-       qS = gS(402),
+       ak = Ik(354),
```

#### 1670. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11952-L11954` → after: `L11990-L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11990-L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11990-L11992) · [Before (L11952-L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11952-L11954)

```diff
-       IS = gS(37422),
-       fS = gS(37104),
-       kS = gS(37664);
+       Lk = Ik(37447),
+       tk = Ik(37139),
+       Zk = Ik(37670);
```

#### 1671. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11958` → after: `L11996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11996) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11958)

```diff
-         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
+         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
```

#### 1672. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11967` → after: `L12005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12005) · [Before (L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11967)

```diff
-         EQ: function(SS, HS) {
+         mJ: function(kk, Fk) {
```

#### 1673. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11975-L11976` → after: `L12013-L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12013-L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12013-L12014) · [Before (L11975-L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11975-L11976)

```diff
-         pE: null,
-         bD: function(HS, gS) {
+         iG: null,
+         Ix: function(Fk, Ik) {
```

#### 1674. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11980` → after: `L12018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12018) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11980)

```diff
-             const gS = SS.FQ.tHS(XS.AY);
+             const Ik = kk.MJ.eFk(ik.Xu);
```

#### 1675. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11982` → after: `L12020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12020) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11982)

```diff
-               XS.KD = !1;
+               ik.vx = !1;
```

#### 1676. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11986` → after: `L12024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12024) · [Before (L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11986)

```diff
-               ngS: xS
+               vIk: yk
```

#### 1677. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11988-L11989` → after: `L12026-L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12026-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12026-L12027) · [Before (L11988-L11989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11988-L11989)

```diff
-             if (!(null !== (tS = null === xS || void 0 === xS ? void 0 : xS.PgS) && void 0 !== tS ? tS : null === (bS = gS.mesh) || void 0 === bS ? void 0 : bS.isEnabled())) {
-               XS.KD = !1;
+             if (!(null !== (Xk = null === yk || void 0 === yk ? void 0 : yk.EIk) && void 0 !== Xk ? Xk : null === (Tk = Ik.mesh) || void 0 === Tk ? void 0 : Tk.isEnabled())) {
+               ik.vx = !1;
```

#### 1678. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11993` → after: `L12031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12031) · [Before (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11993)

```diff
-               kY: NS
+               Ip: lk
```

#### 1679. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11995` → after: `L12033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12033) · [Before (L11995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L11995)

```diff
-             xS ? XS._thinObjectId !== NS && QS(XS, NS) : XS._rootMesh !== gS.mesh && DS(XS, gS.mesh), xS && (0, fS.pausesOutOfView)(SS, XS.AY, NS) ? XS.KD = !0 : PS(SS, XS)
+             yk ? ik._thinObjectId !== lk && Kk(ik, lk) : ik._rootMesh !== Ik.mesh && Qk(ik, Ik.mesh), yk && (0, tk.pausesOutOfView)(kk, ik.Xu, lk) ? ik.vx = !0 : Pk(kk, ik)
```

#### 1680. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12002` → after: `L12040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12040) · [Before (L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12002)

```diff
-       HS.KD && null !== HS._thinObjectId && SS.Hj.fY.has(HS._thinObjectId) && PS(SS, HS)
+       Fk.vx && null !== Fk._thinObjectId && kk.Xw.kp.has(Fk._thinObjectId) && Pk(kk, Fk)
```

#### 1681. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12006` → after: `L12044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12044) · [Before (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12006)

```diff
-       const gS = HS.isServerControlled ? HS.serverSetRotation[1] : SS.FQ.uHS(HS.AY).heading;
+       const Ik = Fk.isServerControlled ? Fk.serverSetRotation[1] : kk.MJ.KFk(Fk.Xu).heading;
```

#### 1682. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12011` → after: `L12049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12049) · [Before (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12011)

```diff
-       const gS = SS.FQ.getState(HS, "meshRotation");
+       const Ik = kk.MJ.getState(Fk, "meshRotation");
```

#### 1683. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12017-L12023` → after: `L12055-L12061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12055-L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12055-L12061) · [Before (L12017-L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12017-L12023)

```diff
-       HS.KD = !1;
-       const CS = SS.FQ.sSS(SS.HA),
-         nS = SS.FQ.THS(HS.AY),
-         PS = HS.AY === SS.HA,
-         QS = (0, kS.e)(SS, HS.AY, nS),
-         DS = SS.FQ.uHS(SS.HA),
-         wS = SS.FQ.uHS(HS.AY),
+       Fk.vx = !1;
+       const Jk = kk.MJ.FFk(kk.oR),
+         xk = kk.MJ.XIk(Fk.Xu),
+         Pk = Fk.Xu === kk.oR,
+         Kk = (0, Zk.d)(kk, Fk.Xu, xk),
+         Qk = kk.MJ.KFk(kk.oR),
+         sk = kk.MJ.KFk(Fk.Xu),
```

#### 1684. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12026-L12027` → after: `L12064-L12065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12064-L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12064-L12065) · [Before (L12026-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12026-L12027)

```diff
-         const gS = SS.bloxd.getResolvedPhysicsSettings(SS.HA, CS.physicsState);
-         null === gS.fixedHeading && gS.steering && CS._steeringActiveLastTick ? JS[1] = (0, NS.j)(SS, CS) : JS[1] = (0, xS.t)(gS, CS.steeringHeading, HS.baseRenderRotation[1] + IS.c.getPlayerFacingHeading(SS))
+         const Ik = kk.bloxd.getResolvedPhysicsSettings(kk.oR, Jk.physicsState);
+         null === Ik.fixedHeading && Ik.steering && Jk._steeringActiveLastTick ? Sk[1] = (0, lk.h)(kk, Jk) : Sk[1] = (0, yk.q)(Ik, Jk.steeringHeading, Fk.baseRenderRotation[1] + Lk.b.getPlayerFacingHeading(kk))
```

#### 1685. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12030-L12032` → after: `L12068-L12070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12068-L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12068-L12070) · [Before (L12030-L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12030-L12032)

```diff
-         if ((null === nS || void 0 === nS ? void 0 : nS.oHS) && SS.bloxd.getRiddenVehicleEId(nS.fK) === HS.AY && null === SS.bloxd.getLifeformType(HS.AY)) {
-           const SS = bS.d.lerpWeight(aS * HS._accumulatedDt);
-           JS[1] = HS.renderRotation[1] + XS.b.computeShortestRotation(HS.renderRotation[1], JS[1]) * SS
+         if ((null === xk || void 0 === xk ? void 0 : xk.TIk) && kk.bloxd.getRiddenVehicleEId(xk.le) === Fk.Xu && null === kk.bloxd.getLifeformType(Fk.Xu)) {
+           const kk = Tk.c.lerpWeight(jk * Fk._accumulatedDt);
+           Sk[1] = Fk.renderRotation[1] + ik.e.computeShortestRotation(Fk.renderRotation[1], Sk[1]) * kk
```

#### 1686. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12035-L12036` → after: `L12073-L12074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12073-L12074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12073-L12074) · [Before (L12035-L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12035-L12036)

```diff
-       const OS = QS ? null !== (gS = null === DS || void 0 === DS ? void 0 : DS.speed) && void 0 !== gS ? gS : 0 : null !== (tS = null === wS || void 0 === wS ? void 0 : wS.speed) && void 0 !== tS ? tS : 0,
-         dS = null !== (qS = null === wS || void 0 === wS ? void 0 : wS.pose) && void 0 !== qS ? qS : "standing",
+       const vk = Kk ? null !== (Ik = null === Qk || void 0 === Qk ? void 0 : Qk.speed) && void 0 !== Ik ? Ik : 0 : null !== (Xk = null === sk || void 0 === sk ? void 0 : sk.speed) && void 0 !== Xk ? Xk : 0,
+         Ek = null !== (ak = null === sk || void 0 === sk ? void 0 : sk.pose) && void 0 !== ak ? ak : "standing",
```

#### 1687. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12041-L12042` → after: `L12079-L12080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12079-L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12079-L12080) · [Before (L12041-L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12041-L12042)

```diff
-         YS = !(QS && !PS) && !0 === (null === (fS = SS.rY) || void 0 === fS || null === (KS = fS[SS.HA]) || void 0 === KS || null === (jS = KS[HS.AY]) || void 0 === jS ? void 0 : jS.lockHeadToBody),
-         AS = null !== (GS = SS.FQ.getState(HS.AY, "animator")) && void 0 !== GS ? GS : null;
+         uk = !(Kk && !Pk) && !0 === (null === (tk = kk.xR) || void 0 === tk || null === (ek = tk[kk.oR]) || void 0 === ek || null === (wk = ek[Fk.Xu]) || void 0 === wk ? void 0 : wk.lockHeadToBody),
+         bk = null !== (Hk = kk.MJ.getState(Fk.Xu, "animator")) && void 0 !== Hk ? Hk : null;
```

#### 1688. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12051` → after: `L12089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12089) · [Before (L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12051)

```diff
-       const XS = (0, tS.e)().Hj.fY.getNodeNames(HS),
+       const ik = (0, Xk.e)().Xw.kp.getNodeNames(Fk),
```

#### 1689. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12095` → after: `L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12133) · [Before (L12095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12095)

```diff
-       let JS = kS ? 0 : null !== qS && void 0 !== qS ? qS : 0,
+       let Sk = Zk ? 0 : null !== ak && void 0 !== ak ? ak : 0,
```

#### 1690. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12103` → after: `L12141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12141) · [Before (L12103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12103)

```diff
-           vS = Math.max(vS, null !== (ES = jS[tS].rotationsPerSecond) && void 0 !== ES ? ES : GS)
+           nk = Math.max(nk, null !== (Gk = wk[Xk].rotationsPerSecond) && void 0 !== Gk ? Gk : Hk)
```

#### 1691. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12109-L12110` → after: `L12147-L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12147-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12147-L12148) · [Before (L12109-L12110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12109-L12110)

```diff
-           gS = kS ? 0 : null !== qS && void 0 !== qS ? qS : SS.softTolerance,
-           xS = kS ? null : null !== IS && void 0 !== IS ? IS : SS.hardTolerance,
+           Ik = Zk ? 0 : null !== ak && void 0 !== ak ? ak : kk.softTolerance,
+           yk = Zk ? null : null !== Lk && void 0 !== Lk ? Lk : kk.hardTolerance,
```

#### 1692. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12114` → after: `L12152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12152) · [Before (L12114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12114)

```diff
-         const fS = kS ? vS : null !== (LS = SS.rotationsPerSecond) && void 0 !== LS ? LS : GS,
+         const tk = Zk ? nk : null !== (pk = kk.rotationsPerSecond) && void 0 !== pk ? pk : Hk,
```

#### 1693. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12119-L12120` → after: `L12157-L12158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12157-L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12157-L12158) · [Before (L12119-L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12119-L12120)

```diff
-             gS = XS.b.computeShortestRotation(ZS[tS], NS[tS]);
-           gS < -JS ? NS[tS] = ZS[tS] - JS : gS > JS && (NS[tS] = ZS[tS] + JS);
+             Ik = ik.e.computeShortestRotation(zk[Xk], lk[Xk]);
+           Ik < -Sk ? lk[Xk] = zk[Xk] - Sk : Ik > Sk && (lk[Xk] = zk[Xk] + Sk);
```

#### 1694. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12123` → after: `L12161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12161) · [Before (L12123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12123)

```diff
-             const SS = XS.b.computeShortestRotation(ZS[tS], uS[tS]),
+             const kk = ik.e.computeShortestRotation(zk[Xk], qk[Xk]),
```

#### 1695. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12127` → after: `L12165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12165) · [Before (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12127)

```diff
-           bS || (uS[tS] = XS.b.applyRotation(uS[tS], NS[tS], aS)), NS[tS] === SS && uS[tS] === HS || (hS = !0)
+           Tk || (qk[Xk] = ik.e.applyRotation(qk[Xk], lk[Xk], jk)), lk[Xk] === kk && qk[Xk] === Fk || (Vk = !0)
```

#### 1696. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12132` → after: `L12170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12170) · [Before (L12132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12132)

```diff
-       const YS = (0, tS.e)().Hj.fY,
+       const uk = (0, Xk.e)().Xw.kp,
```

#### 1697. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12141` → after: `L12179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12179) · [Before (L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12141)

```diff
-         const bS = XS.b.computeShortestRotation(gS[1], ZS[1]);
+         const Tk = ik.e.computeShortestRotation(Ik[1], zk[1]);
```

#### 1698. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12153` → after: `L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12191) · [Before (L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12153)

```diff
-   37694: (SS, HS, gS) => {
+   37691: (kk, Fk, Ik) => {
```

#### 1699. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12158-L12161` → after: `L12196-L12199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12196-L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12196-L12199) · [Before (L12158-L12161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12158-L12161)

```diff
-     var tS = gS(37713),
-       bS = gS(198),
-       XS = gS(6672),
-       xS = gS(402),
+     var Xk = Ik(37705),
+       Tk = Ik(187),
+       ik = Ik(6475),
+       yk = Ik(354),
```

#### 1700. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12163-L12165` → after: `L12201-L12203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12201-L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12201-L12203) · [Before (L12163-L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12163-L12165)

```diff
-       qS = gS(37703),
-       uS = gS(9361),
-       IS = gS(37672),
+       ak = Ik(37693),
+       qk = Ik(9183),
+       Lk = Ik(37674),
```

#### 1701. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12167-L12169` → after: `L12205-L12207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12205-L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12205-L12207) · [Before (L12167-L12169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12167-L12169)

```diff
-       kS = gS(37685);
-     var aS = gS(2022),
-       KS = gS(387);
+       Zk = Ik(37686);
+     var jk = Ik(1844),
+       ek = Ik(337);
```

#### 1702. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12174-L12193` → after: `L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12212) · [Before (L12174-L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12174-L12193)

```diff
-     const QS = [2, 0, 1, 198, 178, "a", 94, 49, 130, 6, "d", 8, 255, "length", 5, 210, 146, 174, "f", "undefined", 88, void 0, 200, 154, 63, "fromCodePoint", 7, 12, "push", "c", 3, 181, "h", "i", 91, "e", 8191, 13, 14, 37, 35, 221, 41, 106, 4, 16, 100, "w", 512, 47, 9, "g", 199,  … [truncated]
- 
-     function DS(...SS) {
-       return SS[QS[13]] = QS[2], typeof nS[SS[QS[1]]] === QS[19] ? nS[SS[QS[1]]] = function(...SS) {
-         for (JS(SS[QS[13]] = QS[2], SS[QS[5]] = 'dt8HZ1[?kjBMe}n4GfVW6YAI%]q.(7rUQc*sJw;)p|/F>,Ezlo32`:<yDRbPTm_=C!~S$iLN0h&aO@{g#+^5vKx9uX"', SS[QS[0]] = "" + (SS[QS[1]] || ""), SS[-QS[4]] = SS[QS[0]].length, SS[QS[10]] = [], SS[-QS[8]] = QS[1], SS[QS[9]] = QS[1], SS[QS[7]] = -Q … [truncated]
-           if (SS[-QS[6]] = SS[QS[5]].indexOf(SS[QS[0]][SS[-QS[3]]]), SS[-QS[6]] !== -QS[2])
-             if (SS[QS[7]] < QS[1]) SS[QS[7]] = SS[-QS[6]];
-             else {
-               JS(SS[QS[7]] += SS[-QS[6]] * QS[34], SS[-QS[8]] |= SS[QS[7]] << SS[QS[9]], SS[QS[9]] += (SS[QS[7]] & QS[36]) > QS[20] ? QS[37] : QS[38]);
-               do {
-                 JS(SS[QS[10]].push(SS[-QS[8]] & QS[12]), SS[-QS[8]] >>= QS[11], SS[QS[9]] -= QS[11])
-               } while (SS[QS[9]] > QS[26]);
-               SS[QS[7]] = -QS[2]
-             } return SS[QS[7]] > -QS[2] && SS[QS[10]].push((SS[-QS[8]] | SS[QS[7]] << SS[QS[9]]) & QS[12]), wS(SS[QS[10]])
-       }(PS[SS[QS[1]]]) : nS[SS[QS[1]]]
-     }
- ... (4 more removed lines; see GitHub link above)
+     const Kk = [1, 2, 0, 18, 3, 228, 37, "e", "f", "d", 8, 255, "length", 226, 199, "a", 4, "undefined", void 0, 86, 63, 6, "fromCodePoint", 7, 12, "push", "b", "h", "i", "g", 91, 5, 8191, 88, 13, 14, 33554432, 67108864, 31, 34, 185, "c", 26, 9, 38, 94, 82, 112, 133, "TH", 179, 1 … [truncated]
```

#### 1703. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12196-L12209` → after: `L12215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12215) · [Before (L12196-L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12196-L12209)

```diff
-       if (SS[QS[13]] = QS[30], SS[QS[1]] === function(...SS) {
-           return SS[QS[13]] = QS[2], typeof nS[SS[QS[1]]] === QS[19] ? nS[SS[QS[1]]] = function(...SS) {
-             for (JS(SS[QS[13]] = QS[2], SS[QS[5]] = 'o27)x]eKz,CQ<n3$15j(i?![GIf%H&=Y|J>Rpub}D*gt9NW6#rTmdw@F0+OS~l48qc{LsMBkZ;EPXvA_`y^:"hV.Ua/', SS[QS[31]] = "" + (SS[QS[1]] || ""), SS[QS[30]] = SS[QS[31]].length, SS[-QS[39]] = [], SS[QS[35]] = QS[1], SS[QS[18]] = QS[1], SS[QS[ … [truncated]
-               if (SS[QS[33]] = SS[QS[5]].indexOf(SS[QS[31]][SS[QS[32]]]), SS[QS[33]] !== -QS[2])
-                 if (SS[QS[26]] < QS[1]) SS[QS[26]] = SS[QS[33]];
-                 else {
-                   JS(SS[QS[26]] += SS[QS[33]] * QS[34], SS[QS[35]] |= SS[QS[26]] << SS[QS[18]], SS[QS[18]] += (SS[QS[26]] & QS[36]) > QS[20] ? QS[37] : QS[38]);
-                   do {
-                     JS(SS[-QS[39]].push(SS[QS[35]] & QS[12]), SS[QS[35]] >>= QS[11], SS[QS[18]] -= QS[11])
-                   } while (SS[QS[18]] > QS[26]);
-                   SS[QS[26]] = -QS[2]
-                 } return SS[QS[26]] > -QS[2] && SS[-QS[39]].push((SS[QS[35]] | SS[QS[26]] << SS[QS[18]]) & QS[12]), wS(SS[-QS[39]])
-           }(PS[SS[QS[1]]]) : nS[SS[QS[1]]]
-         }(97) + QS[47]) return SS[QS[2]] + SS[QS[0]]
+       return kk[Kk[12]] = Kk[0], typeof Nk !== Kk[17] && Nk ? (new Nk).decode(new ck(kk[Kk[2]])) : typeof Wk !== Kk[17] && Wk ? Wk.from(kk[Kk[2]]).toString("utf-8") : dk(kk[Kk[2]])
```

#### 1704. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12217-L12218` → after: `L12223-L12224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12223-L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12223-L12224) · [Before (L12217-L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12217-L12218)

```diff
-     JS(nS = {}, PS = ["0MLUqOsW._emT4V*[qf<J<@2x}&@M^K|@(C[(", "jF,B?TM?_:;~1GkW}4EZ`0J`WjUir3n", "<fc<c<>C4=;?yb97x/k{oa7|_kM.4;j]6[(BGR:|f<K&U3)U", "LjH11*jt", "$UcaSy`r@khEEw`.{n)`mTu*)})BwGe6>wLUuOA8", 'GTL`"`lrMfd<$.h;|!nO`0h?mn%BvH`.)2r?CTft', '{MUjS:fzoTV04qg)"d', "kRP@D2( … [truncated]
-       JS(SS[QS[13]] = QS[1], SS[QS[17]] = [function() {
+     Vk(xk = {}, Pk = ["W{0)4=y=ef..,&2?_$1odt{rY/QxyT)5WQxet^FB207M[(B!ATel{nf}`j", "{QE6D`^V_SW9l~e", 'UpU6GZGy",wB4OwoiC)mLM_]Z0<9.5yI`Y=eGYdN}K!25Jg/5QHzfZ_', "1}~5&^@rSj7)_", '[5eVGYBx$f!c8~1*6%oygMT8F"y7OA', "KkA1M}v7|0+Xa!toG%|)hK.sWjx/SA_V4H*y&vdr;I[QGCNIkJ[B=J^c@Y~$X", "u … [truncated]
+       Vk(kk[Kk[12]] = Kk[2], kk[Kk[15]] = [function() {
```

#### 1705. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12226` → after: `L12232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12232) · [Before (L12226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12226)

```diff
-       }], SS[QS[14]] = QS[21], SS[QS[15]] = []);
+       }], kk[Kk[13]] = Kk[18], kk[Kk[1]] = []);
```

#### 1706. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12228` → after: `L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12234) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12228)

```diff
-         JS(SS[QS[14]] = Object, SS[QS[15]][QS[28]]("".__proto__.constructor.name))
+         Vk(kk[Kk[13]] = Object, kk[Kk[1]][Kk[25]]("".__proto__.constructor.name))
```

#### 1707. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12230-L12233` → after: `L12236-L12239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12236-L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12236-L12239) · [Before (L12230-L12233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12230-L12233)

```diff
-       SS: for (SS[QS[16]] = QS[1]; SS[QS[16]] < SS[QS[17]][QS[13]]; SS[QS[16]]++) try {
-         for (SS[QS[14]] = SS[QS[17]][SS[QS[16]]](), SS[QS[18]] = QS[1]; SS[QS[18]] < SS[QS[15]][QS[13]]; SS[QS[18]]++)
-           if (typeof SS[QS[14]][SS[QS[15]][SS[QS[18]]]] === QS[19]) continue SS;
-         return SS[QS[14]]
+       kk: for (kk[Kk[14]] = Kk[2]; kk[Kk[14]] < kk[Kk[15]][Kk[12]]; kk[Kk[14]]++) try {
+         for (kk[Kk[13]] = kk[Kk[15]][kk[Kk[14]]](), kk[Kk[16]] = Kk[2]; kk[Kk[16]] < kk[Kk[1]][Kk[12]]; kk[Kk[16]]++)
+           if (typeof kk[Kk[13]][kk[Kk[1]][kk[Kk[16]]]] === Kk[17]) continue kk;
+         return kk[Kk[13]]
```

#### 1708. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12235-L12237` → after: `L12241-L12243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12241-L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12241-L12243) · [Before (L12235-L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12235-L12237)

```diff
-       return SS[QS[14]] || this
-     }() || {}, US = zS.TextDecoder, pS = zS.Uint8Array, sS = zS.CK, BS = zS.String || String, MS = zS.Array || Array, FS = function(...SS) {
-       return JS(SS[QS[13]] = QS[1], SS[QS[29]] = new MS(QS[64]), SS[QS[10]] = BS[QS[25]] || BS.fromCharCode, SS[QS[20]] = []),
+       return kk[Kk[13]] || this
+     }() || {}, Nk = Ck.TextDecoder, ck = Ck.Uint8Array, Wk = Ck.je, fk = Ck.String || String, Bk = Ck.Array || Array, dk = function(...kk) {
+       return Vk(kk[Kk[12]] = Kk[2], kk[Kk[15]] = new Bk(Kk[59]), kk[Kk[26]] = fk[Kk[22]] || fk.fromCharCode, kk[Kk[1]] = []),
```

#### 1709. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12239-L12240` → after: `L12245-L12246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12245-L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12245-L12246) · [Before (L12239-L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12239-L12240)

```diff
-           for (JS(HS[QS[13]] = QS[2], HS[QS[5]] = QS[21], HS[QS[0]] = QS[21], HS[QS[23]] = HS[QS[1]][QS[13]], SS[QS[20]][QS[13]] = QS[1]), HS[-QS[22]] = QS[1]; HS[-QS[22]] < HS[QS[23]];) JS(HS[QS[0]] = HS[QS[1]][HS[-QS[22]]++], HS[QS[0]] <= QS[62] ? HS[QS[5]] = HS[QS[0]] : HS[QS[ … [truncated]
-           return SS[QS[20]].join("")
+           for (Vk(Fk[Kk[12]] = Kk[0], Fk[Kk[15]] = Kk[18], Fk[-Kk[19]] = Kk[18], Fk[Kk[4]] = Fk[Kk[2]][Kk[12]], kk[Kk[1]][Kk[12]] = Kk[2]), Fk[Kk[9]] = Kk[2]; Fk[Kk[9]] < Fk[Kk[4]];) Vk(Fk[-Kk[19]] = Fk[Kk[2]][Fk[Kk[9]]++], Fk[-Kk[19]] <= Kk[57] ? Fk[Kk[15]] = Fk[-Kk[19]] : Fk[-K … [truncated]
+           return kk[Kk[1]].join("")
```

#### 1710. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12242-L12245` → after: `L12248-L12265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12248-L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12248-L12265) · [Before (L12242-L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12242-L12245)

```diff
-     }()), DS(QS[86]) + QS[33] in ZS && function(...SS) {
-       JS(SS[QS[13]] = QS[1], SS[QS[66]] = function(...SS) {
-         function HS(SS) {
-           return NS(XS(IS(SS)))
+     }()), Jk = (...kk) => {
+       function Fk(...kk) {
+         return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = function(...kk) {
+           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[0]] = '9OFdEZfWDSm+IQj8/#k6@JpuV>s2HMg~U;^4[qG0b5C$!BnYl<=vwAXc`"7*)1xTrL,{]%?.K3_}oaiehNy(z&:R|tP', kk[Kk[1]] = "" + (kk[Kk[2]] || ""), kk[Kk[4]] = kk[Kk[1]].length, kk[Kk[16]] = [], kk[Kk[31]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[29]] =  … [truncated]
+             if (kk[Kk[28]] = kk[Kk[0]].indexOf(kk[Kk[1]][kk[Kk[27]]]), kk[Kk[28]] !== -Kk[0])
+               if (kk[Kk[29]] < Kk[2]) kk[Kk[29]] = kk[Kk[28]];
+               else {
+                 Vk(kk[Kk[29]] += kk[Kk[28]] * Kk[30], kk[Kk[31]] |= kk[Kk[29]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[29]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
+                 do {
+                   Vk(kk[Kk[16]].push(kk[Kk[31]] & Kk[11]), kk[Kk[31]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
+                 } while (kk[Kk[8]] > Kk[23]);
+                 kk[Kk[29]] = -Kk[0]
+               } return kk[Kk[29]] > -Kk[0] && kk[Kk[16]].push((kk[Kk[31]] | kk[Kk[29]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[16]])
+         }(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
+       }
+       kk[Kk[12]] = Kk[43], Fk(Kk[47]) + "Y" in sk && function(...kk) {
+ ... (2 more added lines; see GitHub link above)
```

#### 1711. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12249` → after: `L12269-L12278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12269-L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12269-L12278) · [Before (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12249)

```diff
-           return SS[QS[13]] = QS[0], NS(xS(IS(SS[QS[1]]), IS(SS[QS[2]])))
+           switch (kk[Kk[12]] = Kk[0], ((kk[Kk[2]] & Kk[36]) !== Kk[2]) * Kk[0] + (kk[Kk[2]] < Kk[2]) * Kk[1]) {
+             case Kk[2]:
+               return [kk[Kk[2]] % Kk[36], Math.trunc(kk[Kk[2]] / Kk[37])];
+             case Kk[0]:
+               return [kk[Kk[2]] % Kk[36] - Kk[36], Math.trunc(kk[Kk[2]] / Kk[37]) + Kk[0]];
+             case Kk[1]:
+               return [((kk[Kk[2]] + Kk[36]) % Kk[36] + Kk[36]) % Kk[36], Math.round(kk[Kk[2]] / Kk[37])];
+             case Kk[4]:
+               return [kk[Kk[2]] % Kk[36], Math.trunc(kk[Kk[2]] / Kk[37])]
+           }
```

#### 1712. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12251` → after: `L12280-L12295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12280-L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12280-L12295) · [Before (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12251)

```diff
- 
+         kk[Kk[12]] = Kk[2], Vk(kk[Kk[15]] = Fk([Kk[1], Kk[16]]), kk[-Kk[38]] = Fk([Kk[0], Kk[1]]), kk[Kk[1]] = kk[Kk[15]] + kk[-Kk[38]], kk[Kk[9]] = kk[Kk[1]] - kk[-Kk[38]], kk[-Kk[39]] = kk[Kk[9]] * Kk[1], kk[Kk[8]] = kk[-Kk[39]] / Kk[1], console.log(Ik(kk[Kk[1]])), console.log( … [truncated]
+       }();
+       const Ik = kk[Kk[2]][Fk(113) + Fk(114) + Fk(115)];
+       if (Ik === Kk[66]) {
+         function Lk(...kk) {
+           Vk(kk[Kk[12]] = Kk[2], kk[-Kk[42]] = function(...kk) {
+             for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[15]] = Kk[2], kk[Kk[26]] = {}, kk[Kk[41]] = Kk[2], kk[Kk[9]] = Kk[2], kk[Kk[7]] = Kk[2], kk[Kk[40]] = kk[Kk[2]].length), kk[Kk[23]] = Kk[2]; kk[Kk[23]] < kk[Kk[40]]; kk[Kk[23]]++) {
+               for (Vk(kk[Kk[26]] = {}, kk[Kk[41]] = Kk[2], kk[Kk[9]] = Kk[0]), kk[Kk[27]] = kk[Kk[23]] + Kk[0]; kk[Kk[27]] < kk[Kk[40]]; kk[Kk[27]]++) kk[Kk[2]][kk[Kk[23]]].x !== kk[Kk[2]][kk[Kk[27]]].x || kk[Kk[2]][kk[Kk[23]]].y !== kk[Kk[2]][kk[Kk[27]]].y ? (kk[Kk[2]][kk[Kk[23] … [truncated]
+               Vk(kk[Kk[41]] += kk[Kk[9]], kk[Kk[15]] = Math.max(kk[Kk[15]], kk[Kk[41]]))
+             }
+             return kk[Kk[15]]
+           }, console.log(kk[-Kk[42]]))
+         }
+         return void(Fk(116) + "H" in sk && Lk())
+       }
+       if ("heading" === Ik[Fk(117)]) {
```

#### 1713. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12253` → after: `L12297-L12306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12297-L12306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12297-L12306) · [Before (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12253)

```diff
-           return SS[QS[13]] = QS[0], qS(xS(IS(SS[QS[1]]), IS(SS[QS[2]])))
+           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[15]] = 'IaK2m@uhix"98TzVyW=E)v6<ABX:Y#edc~jf1CMwnD;[!4>|s&0R^`3JHZ/]g}oQ{_Op.5%Ft7(U?G$LPS*,Nlbkrq+', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[Kk[4]] = kk[Kk[26]].length, kk[Kk[16]] = [], kk[Kk[7]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[43]]  … [truncated]
+             if (kk[Kk[45]] = kk[Kk[15]].indexOf(kk[Kk[26]][kk[-Kk[44]]]), kk[Kk[45]] !== -Kk[0])
+               if (kk[Kk[43]] < Kk[2]) kk[Kk[43]] = kk[Kk[45]];
+               else {
+                 Vk(kk[Kk[43]] += kk[Kk[45]] * Kk[30], kk[Kk[7]] |= kk[Kk[43]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[43]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
+                 do {
+                   Vk(kk[Kk[16]].push(kk[Kk[7]] & Kk[11]), kk[Kk[7]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
+                 } while (kk[Kk[8]] > Kk[23]);
+                 kk[Kk[43]] = -Kk[0]
+               } return kk[Kk[43]] > -Kk[0] && kk[Kk[16]].push((kk[Kk[7]] | kk[Kk[43]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[16]])
```

#### 1714. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12257` → after: `L12310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12310) · [Before (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12257)

```diff
-           return SS[QS[13]] = QS[30], uS(xS(IS(SS[QS[1]]), IS(SS[QS[2]])), SS[QS[0]])
+           return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = tk(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
```

#### 1715. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12259` → after: `L12312-L12321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12312-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12312-L12321) · [Before (L12259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12259)

```diff
- 
+         return void Vk((0, Zk[Kk[41]])(kk[Kk[0]], kk[Kk[1]], kk[Kk[4]], kk[Kk[16]], kk[Kk[31]], kk[Kk[21]], kk[Kk[2]]), function(kk, Fk, Ik, Xk) {
+           if (null === kk) return;
+           if (Ik.TH[1] < -kk.maxFallSpeed) {
+             const Tk = Xk / 1e3,
+               ik = (jk.c.lerpWeight(Tk / kk.slowDownSeconds) * (-kk.maxFallSpeed - Ik.TH[1]) - (kk.compensateGravity ? Fk.physics.gravity[1] * Ik.gravityMultiplier * Tk : 0)) * Ik.Xq / Tk;
+             lk().set(wk, 0, ik, 0), Ik.applyForce(wk)
+           }
+         }(kk[Kk[2]][Jk(118) + Jk(119) + Jk(120) + Jk(121)], kk[Kk[0]], kk[Kk[31]], kk[Kk[23]]))
+       }
+       if (kk[Kk[10]]) {
```

#### 1716. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12261` → after: `L12323-L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12323-L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12323-L12332) · [Before (L12261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12261)

```diff
-           return SS[QS[13]] = QS[2], kS(cS(fS(SS[QS[1]]), SS[QS[1]].length * QS[11]))
+           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[0]] = '4}$=,uv#dhzCZHGx+Df7<iP%pJ3`qO2U5[kKc~s/g;L)SW?jaly"|>1tB]0mbNo9{A8nEFw*IYX&M.@eR^_Tr6(!Q:V', kk[Kk[1]] = "" + (kk[Kk[2]] || ""), kk[Kk[46]] = kk[Kk[1]].length, kk[Kk[16]] = [], kk[Kk[31]] = Kk[2], kk[-Kk[48]] = Kk[2], kk[Kk[29]] … [truncated]
+             if (kk[-Kk[47]] = kk[Kk[0]].indexOf(kk[Kk[1]][kk[Kk[45]]]), kk[-Kk[47]] !== -Kk[0])
+               if (kk[Kk[29]] < Kk[2]) kk[Kk[29]] = kk[-Kk[47]];
+               else {
+                 Vk(kk[Kk[29]] += kk[-Kk[47]] * Kk[30], kk[Kk[31]] |= kk[Kk[29]] << kk[-Kk[48]], kk[-Kk[48]] += (kk[Kk[29]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
+                 do {
+                   Vk(kk[Kk[16]].push(kk[Kk[31]] & Kk[11]), kk[Kk[31]] >>= Kk[10], kk[-Kk[48]] -= Kk[10])
+                 } while (kk[-Kk[48]] > Kk[23]);
+                 kk[Kk[29]] = -Kk[0]
+               } return kk[Kk[29]] > -Kk[0] && kk[Kk[16]].push((kk[Kk[31]] | kk[Kk[29]] << kk[-Kk[48]]) & Kk[11]), Qk(kk[Kk[16]])
```

#### 1717. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12265-L12269` → after: `L12336-L12350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12336-L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12336-L12350) · [Before (L12265-L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12265-L12269)

```diff
-           JS(SS[QS[13]] = QS[0], SS[QS[5]] = fS(SS[QS[1]])), SS[QS[5]].length > QS[45] && (SS[QS[5]] = cS(SS[QS[5]], SS[QS[1]].length * QS[11]));
-           var HS = Array(QS[45]),
-             gS = Array(QS[45]);
-           for (SS[QS[30]] = QS[1]; SS[QS[30]] < QS[45]; SS[QS[30]]++) JS(HS[SS[QS[30]]] = 909522486 ^ SS[QS[5]][SS[QS[30]]], gS[SS[QS[30]]] = 1549556828 ^ SS[QS[5]][SS[QS[30]]]);
-           return SS[QS[46]] = cS(HS.concat(fS(SS[QS[2]])), QS[48] + SS[QS[2]].length * QS[11]), kS(cS(gS.concat(SS[QS[46]]), hS(DS(103) + QS[47], QS[48], 256)))
+           return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = zk(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
+         }
+         Vk(kk[Kk[4]][Kk[60]] = lk()[Sk(Kk[61])](kk[Kk[31]][Kk[49]]), lk()[Sk(123)](kk[Kk[4]][Kk[56]], kk[Kk[31]][Kk[49]]))
+       } else {
+         function vk(...kk) {
+           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[0]] = 'RQPzG4[8,.@<+Spv3q9aw(s/e#n]Z}Fd5JIVEgD^~h%*crbx"oW!CN)YH`O7l0iB:KU2y=1$tA>6u|?&_{jLT;fMkmX', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[Kk[41]] = kk[Kk[26]].length, kk[Kk[16]] = [], kk[Kk[31]] = Kk[2], kk[Kk[50]] = Kk[2], kk[Kk[23] … [truncated]
+             if (kk[Kk[43]] = kk[Kk[0]].indexOf(kk[Kk[26]][kk[Kk[27]]]), kk[Kk[43]] !== -Kk[0])
+               if (kk[Kk[23]] < Kk[2]) kk[Kk[23]] = kk[Kk[43]];
+               else {
+                 Vk(kk[Kk[23]] += kk[Kk[43]] * Kk[30], kk[Kk[31]] |= kk[Kk[23]] << kk[Kk[50]], kk[Kk[50]] += (kk[Kk[23]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
+                 do {
+                   Vk(kk[Kk[16]].push(kk[Kk[31]] & Kk[11]), kk[Kk[31]] >>= Kk[10], kk[Kk[50]] -= Kk[10])
+                 } while (kk[Kk[50]] > Kk[23]);
+                 kk[Kk[23]] = -Kk[0]
+               } return kk[Kk[23]] > -Kk[0] && kk[Kk[16]].push((kk[Kk[31]] | kk[Kk[23]] << kk[Kk[50]]) & Kk[11]), Qk(kk[Kk[16]])
```

#### 1718. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12274-L12276` → after: `L12358-L12360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12358-L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12358-L12360) · [Before (L12274-L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12274-L12276)

```diff
-             for (JS(SS[QS[13]] = QS[2], SS[QS[2]] = '5gLjnbFcWpaeNr4k=B8PxCfw.^_tD3]J/[Ohm,:A2vuElU?H)TVRXM%">Q9{#}y76SdK0+*|<@1;sqIZzG&!i$~(Y`o', SS[QS[49]] = "" + (SS[QS[1]] || ""), SS[QS[29]] = SS[QS[49]].length, SS[QS[44]] = [], SS[QS[35]] = QS[1], SS[QS[52]] = QS[1], SS[QS[5 … [truncated]
-               if (SS[QS[50]] = SS[QS[2]].indexOf(SS[QS[49]][SS[QS[11]]]), SS[QS[50]] !== -QS[2])
-                 if (SS[QS[51]] < QS[1]) SS[QS[51]] = SS[QS[50]];
+             for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[55]] = '6ElonXsIJABLkYqRTpOZNbdaSKWigPcGMCH.@xt8U[/vrj+Fyf}_VeDh#<"Q2{m;`7&wz>?9$(350*^u|!,=%~1:]4)', kk[Kk[52]] = "" + (kk[Kk[2]] || ""), kk[-Kk[54]] = kk[Kk[52]].length, kk[Kk[16]] = [], kk[Kk[31]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[ … [truncated]
+               if (kk[Kk[28]] = kk[Kk[55]].indexOf(kk[Kk[52]][kk[Kk[53]]]), kk[Kk[28]] !== -Kk[0])
+                 if (kk[Kk[23]] < Kk[2]) kk[Kk[23]] = kk[Kk[28]];
```

#### 1719. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12278` → after: `L12362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12362) · [Before (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12278)

```diff
-                   JS(SS[QS[51]] += SS[QS[50]] * QS[34], SS[QS[35]] |= SS[QS[51]] << SS[QS[52]], SS[QS[52]] += (SS[QS[51]] & QS[36]) > QS[20] ? QS[37] : QS[38]);
+                   Vk(kk[Kk[23]] += kk[Kk[28]] * Kk[30], kk[Kk[31]] |= kk[Kk[23]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[23]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
```

#### 1720. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12280-L12283` → after: `L12364-L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12364-L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12364-L12367) · [Before (L12280-L12283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12280-L12283)

```diff
-                     JS(SS[QS[44]].push(SS[QS[35]] & QS[12]), SS[QS[35]] >>= QS[11], SS[QS[52]] -= QS[11])
-                   } while (SS[QS[52]] > QS[26]);
-                   SS[QS[51]] = -QS[2]
-                 } return SS[QS[51]] > -QS[2] && SS[QS[44]].push((SS[QS[35]] | SS[QS[51]] << SS[QS[52]]) & QS[12]), wS(SS[QS[44]])
+                     Vk(kk[Kk[16]].push(kk[Kk[31]] & Kk[11]), kk[Kk[31]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
+                   } while (kk[Kk[8]] > Kk[23]);
+                   kk[Kk[23]] = -Kk[0]
+                 } return kk[Kk[23]] > -Kk[0] && kk[Kk[16]].push((kk[Kk[31]] | kk[Kk[23]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[16]])
```

#### 1721. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12287-L12293` → after: `L12371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12371) · [Before (L12287-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12287-L12293)

```diff
-             return SS[QS[13]] = QS[2], typeof nS[SS[QS[1]]] === QS[19] ? nS[SS[QS[1]]] = gS(PS[SS[QS[1]]]) : nS[SS[QS[1]]]
-           }
-           HS[QS[13]] = QS[2];
-           try {
-             SS[-QS[53]]
-           } catch (bS) {
-             SS[-QS[53]] = QS[1]
+             return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = Ok(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
```

#### 1722. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12295-L12296` → after: `L12373-L12388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12373-L12388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12373-L12388) · [Before (L12295-L12296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12295-L12296)

```diff
-           for (JS(HS[QS[2]] = SS[-QS[53]] ? DS(104) + tS(105) + tS(QS[43]) : tS(QS[102]) + tS(QS[60]) + tS(109), HS[QS[0]] = "", HS[QS[30]] = QS[21]), HS[QS[44]] = QS[1]; HS[QS[44]] < HS[QS[1]].length; HS[QS[44]]++) JS(HS[QS[30]] = HS[QS[1]].charCodeAt(HS[QS[44]]), HS[QS[0]] += H … [truncated]
-           return HS[QS[0]]
+           const Gk = lk()[nk(125) + "t"](kk[Kk[31]][Kk[49]], kk[Kk[4]][Kk[56]]);
+           Gk > Kk[16] * Ik[nk(Kk[58]) + nk(Kk[57]) + Kk[7]] * Ik[nk(Kk[58]) + nk(Kk[57]) + Kk[7]] && Vk(kk[Kk[4]][nk(Kk[59])] = Kk[2], kk[Kk[4]][Kk[60]] = Math[nk(129)](Gk))
+         }
+       }
+       if (kk[Kk[69]] = Kk[0], kk[Kk[4]][Kk[60]] > Kk[2]) {
+         function pk(...kk) {
+           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[15]] = '`2OZ7(&MB>[g?Ct4Y%ckJ<p]z35yF6mRA_|NW#jH0nud:fs9E$~{aKUbq8;Q1IrD=Gv!+LxTi)/.*l^h},S"Ve@PowX', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[Kk[62]] = kk[Kk[26]].length, kk[Kk[9]] = [], kk[-Kk[61]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[29] … [truncated]
+             if (kk[Kk[43]] = kk[Kk[15]].indexOf(kk[Kk[26]][kk[Kk[27]]]), kk[Kk[43]] !== -Kk[0])
+               if (kk[Kk[29]] < Kk[2]) kk[Kk[29]] = kk[Kk[43]];
+               else {
+                 Vk(kk[Kk[29]] += kk[Kk[43]] * Kk[30], kk[-Kk[61]] |= kk[Kk[29]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[29]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
+                 do {
+                   Vk(kk[Kk[9]].push(kk[-Kk[61]] & Kk[11]), kk[-Kk[61]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
+                 } while (kk[Kk[8]] > Kk[23]);
+                 kk[Kk[29]] = -Kk[0]
+               } return kk[Kk[29]] > -Kk[0] && kk[Kk[9]].push((kk[-Kk[61]] | kk[Kk[29]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[9]])
```

#### 1723. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12301-L12303` → after: `L12396-L12398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12396-L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12396-L12398) · [Before (L12301-L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12301-L12303)

```diff
-             for (JS(SS[QS[13]] = QS[2], SS[QS[2]] = ':3u9"[%?.81v(zEQrVK<m]&+nUGbJ#X@W5ApB$kd7;l~s)`x{h!TIeoC0SD,*/H^4_R}t|FjgP>i2MLwyOYZ=fq6Nca', SS[-QS[55]] = "" + (SS[QS[1]] || ""), SS[QS[30]] = SS[-QS[55]].length, SS[QS[44]] = [], SS[QS[14]] = QS[1], SS[QS[9]] = QS[1], SS[QS[ … [truncated]
-               if (SS[QS[33]] = SS[QS[2]].indexOf(SS[-QS[55]][SS[QS[11]]]), SS[QS[33]] !== -QS[2])
-                 if (SS[QS[26]] < QS[1]) SS[QS[26]] = SS[QS[33]];
+             for (Vk(kk[Kk[12]] = Kk[0], kk[-Kk[64]] = 'CsBrYFAdjZObpvhXLTgV*}{]fu>%)5E:MI+qnD^twN,;e&m_?o~1`GQUR3aPJcHlkSKiW=49x<z[0#$2y68!@"7.|(/', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[-Kk[63]] = kk[Kk[26]].length, kk[Kk[20]] = [], kk[Kk[7]] = Kk[2], kk[Kk[8]] = Kk[2], kk[-Kk … [truncated]
+               if (kk[Kk[43]] = kk[-Kk[64]].indexOf(kk[Kk[26]][kk[Kk[10]]]), kk[Kk[43]] !== -Kk[0])
+                 if (kk[-Kk[54]] < Kk[2]) kk[-Kk[54]] = kk[Kk[43]];
```

#### 1724. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12305` → after: `L12400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12400) · [Before (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12305)

```diff
-                   JS(SS[QS[26]] += SS[QS[33]] * QS[34], SS[QS[14]] |= SS[QS[26]] << SS[QS[9]], SS[QS[9]] += (SS[QS[26]] & QS[36]) > QS[20] ? QS[37] : QS[38]);
+                   Vk(kk[-Kk[54]] += kk[Kk[43]] * Kk[30], kk[Kk[7]] |= kk[-Kk[54]] << kk[Kk[8]], kk[Kk[8]] += (kk[-Kk[54]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
```

#### 1725. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12307-L12310` → after: `L12402-L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12402-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12402-L12405) · [Before (L12307-L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12307-L12310)

```diff
-                     JS(SS[QS[44]].push(SS[QS[14]] & QS[12]), SS[QS[14]] >>= QS[11], SS[QS[9]] -= QS[11])
-                   } while (SS[QS[9]] > QS[26]);
-                   SS[QS[26]] = -QS[2]
-                 } return SS[QS[26]] > -QS[2] && SS[QS[44]].push((SS[QS[14]] | SS[QS[26]] << SS[QS[9]]) & QS[12]), wS(SS[QS[44]])
+                     Vk(kk[Kk[20]].push(kk[Kk[7]] & Kk[11]), kk[Kk[7]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
+                   } while (kk[Kk[8]] > Kk[23]);
+                   kk[-Kk[54]] = -Kk[0]
+                 } return kk[-Kk[54]] > -Kk[0] && kk[Kk[20]].push((kk[Kk[7]] | kk[-Kk[54]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[20]])
```

#### 1726. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12314-L12320` → after: `L12409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12409) · [Before (L12314-L12320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12314-L12320)

```diff
-             return SS[QS[13]] = QS[2], typeof nS[SS[QS[1]]] === QS[19] ? nS[SS[QS[1]]] = gS(PS[SS[QS[1]]]) : nS[SS[QS[1]]]
-           }
-           HS[QS[13]] = QS[2];
-           try {
-             SS[QS[2]]
-           } catch (bS) {
-             SS[QS[2]] = ""
+             return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = bk(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
```

#### 1727. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12327-L12332` → after: `L12412-L12420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12412-L12420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12412-L12420) · [Before (L12327-L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12327-L12332)

```diff
-         function uS(...SS) {
-           var HS, gS, tS, bS;
-           for (JS(SS[QS[13]] = QS[0], SS[QS[5]] = SS[QS[2]].length, SS[QS[59]] = Array()), SS[QS[44]] = Array(Math.ceil(SS[QS[1]].length / QS[0])), HS = QS[1]; HS < SS[QS[44]].length; HS++) SS[QS[44]][HS] = SS[QS[1]].charCodeAt(HS * QS[0]) << QS[11] | SS[QS[1]].charCodeAt(HS * QS … [truncated]
-           for (; SS[QS[44]].length > QS[1];) {
-             for (JS(bS = Array(), tS = QS[1]), HS = QS[1]; HS < SS[QS[44]].length; HS++) JS(tS = (tS << QS[45]) + SS[QS[44]][HS], gS = Math.floor(tS / SS[QS[5]]), tS -= gS * SS[QS[5]]), (bS.length > QS[1] || gS > QS[1]) && (bS[bS.length] = gS);
-             JS(SS[QS[59]][SS[QS[59]].length] = tS, SS[QS[44]] = bS)
+           function Uk(...kk) {
+             Vk(kk[Kk[12]] = Kk[2], kk[Kk[15]] = function(...Fk) {
+               return Vk(Fk[Kk[12]] = Kk[1], Fk[Kk[15]] = [], Fk[Kk[26]] = Fk[Kk[2]].length, Fk[Kk[2]].sort(((kk, Fk) => kk - Fk)), kk[Kk[65]](Fk[Kk[15]], [], Kk[2], Fk[Kk[26]], Fk[Kk[2]], Fk[Kk[0]])), Fk[Kk[15]]
+             }, kk[Kk[65]] = function(...Fk) {
+               if (Vk(Fk[Kk[12]] = Kk[21], Fk[Kk[68]] = Kk[66]), !(Fk[Kk[31]] < Kk[2])) {
+                 if (Fk[Kk[31]] === Kk[2]) return Fk[Kk[2]].push(Fk[Kk[0]]);
+                 for (Fk[Kk[67]] = Fk[Kk[1]]; Fk[Kk[67]] < Fk[Kk[4]] && !(Fk[Kk[16]][Fk[Kk[67]]] > Fk[Kk[31]]); Fk[Kk[67]]++) Fk[Kk[67]] > Fk[Kk[1]] && Fk[Kk[16]][Fk[Kk[67]]] === Fk[Kk[16]][Fk[Kk[67]] - Kk[0]] || Vk(Fk[Kk[68]] = Array.from(Fk[Kk[0]]), Fk[Kk[68]].push(Fk[Kk[16]][Fk … [truncated]
+               }
+             }, console.log(kk[Kk[15]]))
```

#### 1728. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12334-L12365` → after: `L12422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12422) · [Before (L12334-L12365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12334-L12365)

```diff
-           for (SS[QS[10]] = "", HS = SS[QS[59]].length - QS[2]; HS >= QS[1]; HS--) SS[QS[10]] += SS[QS[2]].charAt(SS[QS[59]][HS]);
-           for (SS[-QS[60]] = Math.ceil(SS[QS[1]].length * QS[11] / (Math.log(SS[QS[2]].length) / Math.log(QS[0]))), HS = SS[QS[10]].length; HS < SS[-QS[60]]; HS++) SS[QS[10]] = SS[QS[2]][QS[1]] + SS[QS[10]];
-           return SS[QS[10]]
-         }
- 
-         function IS(...SS) {
-           var HS, gS;
-           for (JS(SS[QS[13]] = QS[2], SS[QS[2]] = "", SS[QS[0]] = -QS[2]); ++SS[QS[0]] < SS[QS[1]].length;) JS(HS = SS[QS[1]].charCodeAt(SS[QS[0]]), gS = SS[QS[0]] + QS[2] < SS[QS[1]].length ? SS[QS[1]].charCodeAt(SS[QS[0]] + QS[2]) : QS[1]), 55296 <= HS && HS <= 56319 && 56320 < … [truncated]
-           return SS[QS[2]]
-         }
- 
-         function fS(...SS) {
-           for (JS(SS[QS[13]] = QS[2], SS[QS[68]] = Array(SS[QS[1]].length >> QS[0])), SS[QS[66]] = QS[1]; SS[QS[66]] < SS[QS[68]].length; SS[QS[66]]++) SS[QS[68]][SS[QS[66]]] = QS[1];
-           for (SS[QS[66]] = QS[1]; SS[QS[66]] < SS[QS[1]].length * QS[11]; SS[QS[66]] += QS[11]) SS[QS[68]][SS[QS[66]] >> QS[14]] |= (SS[QS[1]].charCodeAt(SS[QS[66]] / QS[11]) & QS[12]) << QS[72] - SS[QS[66]] % QS[71];
-           return SS[QS[68]]
-         }
- ... (16 more removed lines; see GitHub link above)
+           Rk(132) + "V" in sk && Uk(), kk[Kk[69]] = Kk[4]
```

#### 1729. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12367` → after: `L12424-L12430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12424-L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12424-L12430) · [Before (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12367)

```diff
- 
+         kk[Kk[4]][Kk[60]] -= Ik[uk(Kk[48]) + uk(134) + uk(135) + uk(136) + "ck"]
+       }
+       const Xk = Ik[Fk(137) + Kk[71]] + kk[Kk[4]][Fk(138)];
+       Vk(kk[Kk[26]] = lk()[Fk(139)](kk[Kk[4]][Kk[56]]) + kk[Kk[16]][Fk(Kk[70]) + Fk(140)] * Xk * Ik[Fk(141)] * kk[Kk[69]], kk[Kk[26]] = ek[Kk[7]][Fk(142)](kk[Kk[26]], Ik[Fk(143) + Kk[71]], Xk), kk[Kk[4]][Fk(Kk[72])]++);
+       const ik = kk[Kk[23]] / 1e3,
+         yk = wk;
+       if (Vk(lk()[Fk(145)](yk, kk[Kk[16]][Fk(Kk[70]) + Fk(146) + Fk(147)]), lk()[Fk(Kk[81]) + Fk(Kk[82])](yk, yk), lk()[Fk(Kk[80])](yk, yk, kk[Kk[26]]), kk[-Kk[78]] = Kk[0]), kk[Kk[4]][Fk(Kk[72])] < Ik[Fk(Kk[83]) + Fk(Kk[84]) + Fk(Kk[85])]) {
```

#### 1730. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12369` → after: `L12432-L12441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12432-L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12432-L12441) · [Before (L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12369)

```diff
-           return SS[QS[13]] = QS[30], SS[QS[1]] & SS[QS[2]] ^ SS[QS[1]] & SS[QS[0]] ^ SS[QS[2]] & SS[QS[0]]
+           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[15]] = '&0uz`:%_$)~IwaPXg7tHOR"<(^hv|]YCd@jf#EJLQNZq8S2kn3!ymD*V[=W/eK9bp{rTcUoB}56?xsM.>+A14,liFG;', kk[-Kk[73]] = "" + (kk[Kk[2]] || ""), kk[Kk[41]] = kk[-Kk[73]].length, kk[-Kk[74]] = [], kk[-Kk[76]] = Kk[2], kk[Kk[77]] = Kk[2], kk[K … [truncated]
+             if (kk[Kk[28]] = kk[Kk[15]].indexOf(kk[-Kk[73]][kk[Kk[27]]]), kk[Kk[28]] !== -Kk[0])
+               if (kk[Kk[75]] < Kk[2]) kk[Kk[75]] = kk[Kk[28]];
+               else {
+                 Vk(kk[Kk[75]] += kk[Kk[28]] * Kk[30], kk[-Kk[76]] |= kk[Kk[75]] << kk[Kk[77]], kk[Kk[77]] += (kk[Kk[75]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
+                 do {
+                   Vk(kk[-Kk[74]].push(kk[-Kk[76]] & Kk[11]), kk[-Kk[76]] >>= Kk[10], kk[Kk[77]] -= Kk[10])
+                 } while (kk[Kk[77]] > Kk[23]);
+                 kk[Kk[75]] = -Kk[0]
+               } return kk[Kk[75]] > -Kk[0] && kk[-Kk[74]].push((kk[-Kk[76]] | kk[Kk[75]] << kk[Kk[77]]) & Kk[11]), Qk(kk[-Kk[74]])
```

#### 1731. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12373` → after: `L12445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12445) · [Before (L12373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12373)

```diff
-           return SS[QS[13]] = QS[2], aS(SS[QS[1]], QS[0]) ^ aS(SS[QS[1]], QS[37]) ^ aS(SS[QS[1]], 22)
+           return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = Ck(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
```

#### 1732. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12375` → after: `L12447-L12452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12447-L12452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12447-L12452) · [Before (L12375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12375)

```diff
- 
+         kk[-Kk[78]] = jk[Kk[41]][Nk(154) + Nk(155)](kk[Kk[4]][Nk(Kk[79])] / Tk[Kk[8]][Nk(157) + Nk(158) + Nk(159) + "nd"]), kk[-Kk[78]] > .8 && Vk(kk[-Kk[78]] = Kk[0], kk[Kk[4]][Nk(Kk[79])] = 1e5)
+       }
+       const ak = Hk;
+       Vk(lk()[Fk(160)](ak, yk, kk[Kk[31]][Kk[49]]), lk()[Fk(Kk[80])](ak, ak, kk[Kk[31]][Kk[90]] * kk[-Kk[78]] / ik), kk[Kk[31]][Fk(Kk[91]) + Fk(Kk[92])](ak), lk()[Fk(Kk[55])](kk[Kk[4]][Kk[56]], kk[Kk[31]][Kk[49]], yk, kk[-Kk[78]]));
+       const qk = wk;
+       if (Vk(lk()[Fk(Kk[81]) + Fk(Kk[82])](qk, kk[Kk[4]][Kk[56]]), lk()[Fk(Kk[80])](qk, qk, Ik[Fk(164) + Fk(165) + Kk[7]])), kk[Kk[4]][Fk(Kk[72])] > Ik[Fk(Kk[83]) + Fk(Kk[84]) + Fk(Kk[85])]) {
```

#### 1733. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12377` → after: `L12454-L12463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12454-L12463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12454-L12463) · [Before (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12377)

```diff
-           return SS[QS[13]] = QS[2], aS(SS[QS[1]], QS[9]) ^ aS(SS[QS[1]], QS[108]) ^ aS(SS[QS[1]], 25)
+           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[0]] = '}SiYGbAaoJBLTn@rE[?8WC9>"l.!VZdIeuh1NftOzm3x/0]s#<F+g:*6R7~)QK=;U2_HvM`,$D4c%|(j{^X&k5Pwypq', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[Kk[41]] = kk[Kk[26]].length, kk[-Kk[47]] = [], kk[Kk[7]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[23]] … [truncated]
+             if (kk[Kk[86]] = kk[Kk[0]].indexOf(kk[Kk[26]][kk[Kk[3]]]), kk[Kk[86]] !== -Kk[0])
+               if (kk[Kk[23]] < Kk[2]) kk[Kk[23]] = kk[Kk[86]];
+               else {
+                 Vk(kk[Kk[23]] += kk[Kk[86]] * Kk[30], kk[Kk[7]] |= kk[Kk[23]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[23]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
+                 do {
+                   Vk(kk[-Kk[47]].push(kk[Kk[7]] & Kk[11]), kk[Kk[7]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
+                 } while (kk[Kk[8]] > Kk[23]);
+                 kk[Kk[23]] = -Kk[0]
+               } return kk[Kk[23]] > -Kk[0] && kk[-Kk[47]].push((kk[Kk[7]] | kk[Kk[23]] << kk[Kk[8]]) & Kk[11]), Qk(kk[-Kk[47]])
```

#### 1734. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12381-L12385` → after: `L12467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12467) · [Before (L12381-L12385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12381-L12385)

```diff
-           return SS[QS[13]] = QS[2], aS(SS[QS[1]], QS[26]) ^ aS(SS[QS[1]], QS[65]) ^ KS(SS[QS[1]], QS[30])
-         }
- 
-         function dS(SS) {
-           return aS(SS, 17) ^ aS(SS, QS[74]) ^ KS(SS, QS[73])
+           return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = ck(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
```

#### 1735. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12389-L12530` → after: `L12471-L12483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12471-L12483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12471-L12483) · [Before (L12389-L12530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12389-L12530)

```diff
-           var gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS;
-           for (JS(HS[QS[13]] = QS[0], HS[QS[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), HS[QS[66]] = new Array(QS[75])), JS(HS[QS[1]][HS[QS[2]] >> QS[14]] |= QS[64] << QS[72] - HS[QS[2]] % QS[71], HS[QS[1]][(H … [truncated]
-             for (JS(gS = HS[QS[5]][QS[1]], tS = HS[QS[5]][QS[2]], bS = HS[QS[5]][QS[0]], XS = HS[QS[5]][QS[30]], xS = HS[QS[5]][QS[44]], NS = HS[QS[5]][QS[14]], qS = HS[QS[5]][QS[9]], uS = HS[QS[5]][QS[26]]), fS = QS[1]; fS < QS[75]; fS++) JS(fS < QS[45] ? HS[QS[66]][fS] = HS[QS[ … [truncated]
-             JS(HS[QS[5]][QS[1]] = vS(gS, HS[QS[5]][QS[1]]), HS[QS[5]][QS[2]] = vS(tS, HS[QS[5]][QS[2]]), HS[QS[5]][QS[0]] = vS(bS, HS[QS[5]][QS[0]]), HS[QS[5]][QS[30]] = vS(XS, HS[QS[5]][QS[30]]), HS[QS[5]][QS[44]] = vS(xS, HS[QS[5]][QS[44]]), HS[QS[5]][QS[14]] = vS(NS, HS[QS[5]] … [truncated]
-           }
-           return HS[QS[5]]
-         }
- 
-         function vS(...SS) {
-           return JS(SS[QS[13]] = QS[0], SS[-QS[41]] = (SS[QS[1]] & QS[77]) + (SS[QS[2]] & QS[77]), SS[QS[78]] = (SS[QS[1]] >> QS[45]) + (SS[QS[2]] >> QS[45]) + (SS[-QS[41]] >> QS[45])), SS[QS[78]] << QS[45] | SS[-QS[41]] & QS[77]
-         }
-         return JS(SS[QS[13]] = QS[1], SS[-QS[53]] = QS[1], SS[QS[2]] = ""), SS[QS[76]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, … [truncated]
-           hex: HS,
-           b64: tS,
-           any: bS,
-           hex_hmac: gS,
- ... (126 more removed lines; see GitHub link above)
+           function Fk(...kk) {
+             return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = function(...kk) {
+               for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[87]] = 'A;yG|r$pK~sRxgP5u[#e}HnBv`Z/*M3TC_kmjDEFlQYIcJtOhVdaUi%f7NWqbLS2X1."(<4@{>&9w!z0=6?8^)+:,]o', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[Kk[4]] = kk[Kk[26]].length, kk[Kk[88]] = [], kk[Kk[7]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[2 … [truncated]
+                 if (kk[Kk[28]] = kk[Kk[87]].indexOf(kk[Kk[26]][kk[Kk[27]]]), kk[Kk[28]] !== -Kk[0])
+                   if (kk[Kk[23]] < Kk[2]) kk[Kk[23]] = kk[Kk[28]];
+                   else {
+                     Vk(kk[Kk[23]] += kk[Kk[28]] * Kk[30], kk[Kk[7]] |= kk[Kk[23]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[23]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
+                     do {
+                       Vk(kk[Kk[88]].push(kk[Kk[7]] & Kk[11]), kk[Kk[7]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
+                     } while (kk[Kk[8]] > Kk[23]);
+                     kk[Kk[23]] = -Kk[0]
+                   } return kk[Kk[23]] > -Kk[0] && kk[Kk[88]].push((kk[Kk[7]] | kk[Kk[23]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[88]])
+             }(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
```

#### 1736. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12534-L12610` → after: `L12487-L12492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12487-L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12487-L12492) · [Before (L12534-L12610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12534-L12610)

```diff
-             return SS[QS[13]] = QS[2], typeof nS[SS[QS[1]]] === QS[19] ? nS[SS[QS[1]]] = vS(PS[SS[QS[1]]]) : nS[SS[QS[1]]]
-           }
-           const LS = NS()[dS(QS[62]) + QS[95]](SS[QS[14]][QS[88]], SS[QS[30]][QS[96]]);
-           if (LS > QS[44] * gS[ES(QS[64]) + ES(QS[67]) + QS[35]] * gS[ES(QS[64]) + ES(QS[67]) + QS[35]]) {
-             function YS(...SS) {
-               for (JS(SS[QS[13]] = QS[2], SS[QS[97]] = 'a=.]5`{mt>k|^Wu#n<KsjflALB"(Tv[FECO~ZN*q_X;?}cDQU2wR9+Ir,zpgb@JV6:Ho)hyP!3S10$8/Gd%MiY7e&4x', SS[QS[0]] = "" + (SS[QS[1]] || ""), SS[QS[30]] = SS[QS[0]].length, SS[QS[44]] = [], SS[QS[14]] = QS[1], SS[QS[9]] = QS[1], SS[-QS[ … [truncated]
-                 if (SS[QS[33]] = SS[QS[97]].indexOf(SS[QS[0]][SS[QS[32]]]), SS[QS[33]] !== -QS[2])
-                   if (SS[-QS[98]] < QS[1]) SS[-QS[98]] = SS[QS[33]];
-                   else {
-                     JS(SS[-QS[98]] += SS[QS[33]] * QS[34], SS[QS[14]] |= SS[-QS[98]] << SS[QS[9]], SS[QS[9]] += (SS[-QS[98]] & QS[36]) > QS[20] ? QS[37] : QS[38]);
-                     do {
-                       JS(SS[QS[44]].push(SS[QS[14]] & QS[12]), SS[QS[14]] >>= QS[11], SS[QS[9]] -= QS[11])
-                     } while (SS[QS[9]] > QS[26]);
-                     SS[-QS[98]] = -QS[2]
-                   } return SS[-QS[98]] > -QS[2] && SS[QS[44]].push((SS[QS[14]] | SS[-QS[98]] << SS[QS[9]]) & QS[12]), wS(SS[QS[44]])
-             }
- ... (61 more removed lines; see GitHub link above)
+             if (kk[Kk[12]] = Kk[0], !kk[Kk[2]]) return -Kk[0];
+             const Fk = Ik(kk[Kk[2]].left),
+               Xk = Ik(kk[Kk[2]].right),
+               Tk = Math.abs(Fk - Xk);
+             if (Fk === 1 / 0 || Xk === 1 / 0 || Tk > Kk[0]) return 1 / 0;
+             return Math.max(Fk, Xk) + Kk[0]
```

#### 1737. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12612-L12678` → after: `L12494-L12512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12494-L12512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12494-L12512) · [Before (L12612-L12678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12612-L12678)

```diff
-         }
-       }
-       if (SS[QS[50]] = QS[2], SS[QS[30]][QS[105]] > QS[1]) {
-         function yS(...SS) {
-           for (JS(SS[QS[13]] = QS[2], SS[QS[85]] = '`tcPhdHiTAbKQMBke8Xa(x,[{%!<1:#?)yw*>&+.~53$]_zLCsfDVv9gI4;E@mFURN=purSO0jo^7|q"Jl6ZW}n/GY2', SS[QS[0]] = "" + (SS[QS[1]] || ""), SS[QS[30]] = SS[QS[0]].length, SS[QS[44]] = [], SS[QS[35]] = QS[1], SS[QS[9]] = QS[1], SS[QS[26]]  … [truncated]
-             if (SS[QS[33]] = SS[QS[85]].indexOf(SS[QS[0]][SS[-QS[106]]]), SS[QS[33]] !== -QS[2])
-               if (SS[QS[26]] < QS[1]) SS[QS[26]] = SS[QS[33]];
-               else {
-                 JS(SS[QS[26]] += SS[QS[33]] * QS[34], SS[QS[35]] |= SS[QS[26]] << SS[QS[9]], SS[QS[9]] += (SS[QS[26]] & QS[36]) > QS[20] ? QS[37] : QS[38]);
-                 do {
-                   JS(SS[QS[44]].push(SS[QS[35]] & QS[12]), SS[QS[35]] >>= QS[11], SS[QS[9]] -= QS[11])
-                 } while (SS[QS[9]] > QS[26]);
-                 SS[QS[26]] = -QS[2]
-               } return SS[QS[26]] > -QS[2] && SS[QS[44]].push((SS[QS[35]] | SS[QS[26]] << SS[QS[9]]) & QS[12]), wS(SS[QS[44]])
-         }
- 
- ... (51 more removed lines; see GitHub link above)
+           kk[Kk[12]] = Kk[2], window[Fk(167) + Fk(168) + Fk(169) + "_"] = {
+             buildCharacterMap: function(...kk) {
+               kk[Kk[12]] = Kk[0];
+               const Fk = {};
+               for (let Ik of kk[Kk[2]].replace(/[^w]/g, "").toLowerCase()) Fk[Ik] = Fk[Ik] + Kk[0] || Kk[0];
+               return Fk
+             },
+             isAnagrams: function(...kk) {
+               kk[Kk[12]] = Kk[1];
+               const Fk = buildCharMap(kk[Kk[2]]),
+                 Ik = buildCharMap(kk[Kk[0]]);
+               for (let Xk in Fk)
+                 if (Fk[Xk] !== Ik[Xk]) return Kk[89];
+               return Object.keys(Fk).length === Object.keys(Ik).length || Kk[89]
+             },
+             isBalanced: function(...kk) {
+ ... (3 more added lines; see GitHub link above)
```

#### 1738. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12741` → after: `L12515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12515) · [Before (L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12741)

```diff
-         HS(QS[59]) in ZS && MS(), uS[QS[2]] = -gS[BS(QS[93]) + BS(188) + QS[35]]
+         Wk(166) in sk && fk(), qk[Kk[0]] = -Ik[Wk(170) + Wk(171) + Kk[7]]
```

#### 1739. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12743` → after: `L12517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12517) · [Before (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12743)

```diff
-       JS(NS()[HS(QS[120])](uS, uS, SS[QS[14]][QS[129]] / XS), SS[QS[14]][HS(QS[31]) + HS(QS[130])](uS), SS[QS[14]][HS(QS[131]) + QS[132]] = gS[HS(QS[131]) + QS[132]])
+       Vk(lk()[Fk(Kk[80])](qk, qk, kk[Kk[31]][Kk[90]] / ik), kk[Kk[31]][Fk(Kk[91]) + Fk(Kk[92])](qk), kk[Kk[31]][Fk(Kk[93]) + Kk[94]] = Ik[Fk(Kk[93]) + Kk[94]])
```

#### 1740. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12745-L12747` → after: `L12519-L12521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12519-L12521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12519-L12521) · [Before (L12745-L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12745-L12747)

```diff
-     var OS = gS(37667),
-       dS = gS(6670),
-       cS = gS(1327);
+     var zk = Ik(37672),
+       Sk = Ik(6473),
+       vk = Ik(1231);
```

#### 1741. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12822` → after: `L12596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12596) · [Before (L12822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12822)

```diff
-       ES = (0, KS.U)(uS.o, (SS => {
+       Ok = (0, ek.db)(qk.n, (kk => {
```

#### 1742. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12824-L12825` → after: `L12598-L12599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12598-L12599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12598-L12599) · [Before (L12824-L12825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12824-L12825)

```diff
-         const xS = (0, uS.h)(SS);
-         return null !== (HS = null !== (gS = null === (tS = vS[xS]) || void 0 === tS ? void 0 : tS.upForceScalar) && void 0 !== gS ? gS : null === (bS = uS.o[SS]) || void 0 === bS || null === (XS = bS.climbableInside) || void 0 === XS ? void 0 : XS.upForceScalar) && void 0 !== HS … [truncated]
+         const yk = (0, qk.f)(kk);
+         return null !== (Fk = null !== (Ik = null === (Xk = Ek[yk]) || void 0 === Xk ? void 0 : Xk.upForceScalar) && void 0 !== Ik ? Ik : null === (Tk = qk.n[kk]) || void 0 === Tk || null === (ik = Tk.climbableInside) || void 0 === ik ? void 0 : ik.upForceScalar) && void 0 !== Fk … [truncated]
```

#### 1743. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12833` → after: `L12607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12607) · [Before (L12833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12833)

```diff
-     const oS = [2, 0, 1, "h", 3, "a", 9, 84, 119, "f", 171, 8, 255, "length", "b", 61, "d", 216, "undefined", void 0, 38, "c", 195, 63, 6, "fromCodePoint", 7, 12, "push", 181, "i", "g", 91, 165, 143, 8191, 88, 13, 14, 175, 189, 239, 209, 30, "e", 89, 60, 137, null, 113, 187, 48,  … [truncated]
+     const gk = [212, 0, 1, 182, "c", 79, 81, 7, "e", 201, 4, 8, 255, "length", "undefined", void 0, 231, 11, 191, 63, 6, "fromCodePoint", 12, "push", 85, 3, "b", 135, 9, 91, 116, 8191, 88, 13, 14, 2, 100, 230, 223, "h", 203, "d", 222, "a", 181, 210, 208, 198, 17, 226, 5, 127, "g" … [truncated]
```

#### 1744. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12836-L12839` → after: `L12610-L12613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12610-L12613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12610-L12613) · [Before (L12836-L12839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12836-L12839)

```diff
-       return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
-         for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'woa*?lDH]RGC{~0,e5%_pfz(vncO:P^$yxQM6;+h3`uIN14W&ZmYVK|Tq=S8)AjrE#b}g[!J27s>/kUB@dLF9.Xt<i"', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[0]].length, SS[-oS[10]] = [], SS[oS[8]] = oS[1], SS[oS[9]] = oS[1], SS[-oS[7]] = -o … [truncated]
-           if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[3]]]), SS[oS[6]] !== -oS[2])
-             if (SS[-oS[7]] < oS[1]) SS[-oS[7]] = SS[oS[6]];
+       return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
+         for (qF(kk[gk[13]] = gk[2], kk[gk[5]] = ';*o}HV<n=`Cv)tpeJA?X(gBOmbu$x%9DZQ6"&0!7dl:358kq1Uyj4>hMcN,2@/#S+P]W|R^E[Y~f_F{iz.IrGLTKwas', kk[gk[0]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[0]].length, kk[gk[10]] = [], kk[gk[8]] = gk[1], kk[gk[9]] = gk[1], kk[gk[7]] = -gk[ … [truncated]
+           if (kk[gk[6]] = kk[gk[5]].indexOf(kk[gk[0]][kk[-gk[3]]]), kk[gk[6]] !== -gk[2])
+             if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[6]];
```

#### 1745. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12841` → after: `L12615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12615) · [Before (L12841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12841)

```diff
-               NH(SS[-oS[7]] += SS[oS[6]] * oS[32], SS[oS[8]] |= SS[-oS[7]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[7]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+               qF(kk[gk[7]] += kk[gk[6]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[gk[9]], kk[gk[9]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1746. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12843-L12846` → after: `L12617-L12620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12617-L12620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12617-L12620) · [Before (L12843-L12846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12843-L12846)

```diff
-                 NH(SS[-oS[10]].push(SS[oS[8]] & oS[12]), SS[oS[8]] >>= oS[11], SS[oS[9]] -= oS[11])
-               } while (SS[oS[9]] > oS[26]);
-               SS[-oS[7]] = -oS[2]
-             } return SS[-oS[7]] > -oS[2] && SS[-oS[10]].push((SS[oS[8]] | SS[-oS[7]] << SS[oS[9]]) & oS[12]), mS(SS[-oS[10]])
+                 qF(kk[gk[10]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[9]] -= gk[11])
+               } while (kk[gk[9]] > gk[7]);
+               kk[gk[7]] = -gk[2]
+             } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[8]] | kk[gk[7]] << kk[gk[9]]) & gk[12]), hk(kk[gk[10]])
```

#### 1747. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12851` → after: `L12629-L12642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12629-L12642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12629-L12642) · [Before (L12851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12851)

```diff
-       return SS[oS[13]] = oS[2], typeof US !== oS[18] && US ? (new US).decode(new pS(SS[oS[1]])) : typeof sS !== oS[18] && sS ? sS.from(SS[oS[1]]).toString("utf-8") : FS(SS[oS[1]])
+       if (kk[gk[13]] = gk[25], kk[gk[1]] === function(...kk) {
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
+             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '?HTLRc{g+[vCAJFzkZj*@Ve:3~17K$bPmO0I#";G.,sU)ot}YW!x/&B6i_l|aXyD9^`MhpE>qf]%=8Surwd4N(5Q2n<', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[10]] = [], kk[gk[30]] = gk[1], kk[gk[20]] = gk[1], kk[gk[7] … [truncated]
+               if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[26]][kk[-gk[27]]]), kk[gk[28]] !== -gk[2])
+                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+                 else {
+                   qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[30]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   do {
+                     qF(kk[gk[10]].push(kk[gk[30]] & gk[12]), kk[gk[30]] >>= gk[11], kk[gk[20]] -= gk[11])
+                   } while (kk[gk[20]] > gk[7]);
+                   kk[gk[7]] = -gk[2]
+                 } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[30]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[10]])
+           }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+         }(105)) return kk[gk[2]] + kk[gk[35]]
```

#### 1748. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12858-L12860` → after: `L12649-L12656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12649-L12656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12649-L12656) · [Before (L12858-L12860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12858-L12860)

```diff
-           SS[oS[13]] = oS[1]
-         }), XS || (XS = function(...SS) {
-           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = bS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+           qF(kk[gk[13]] = gk[1], kk[-gk[36]] = function(kk) {
+             var Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk = kk.length;
+             if (tk < gk[35]) return gk[1];
+             if (qF(Fk = Math.max(...kk), Ik = Math.min(...kk)), Fk === Ik) return gk[1];
+             for (qF(Xk = Array(tk - gk[2]).fill(Number.MAX_SAFE_INTEGER), Tk = Array(tk - gk[2]).fill(Number.MIN_SAFE_INTEGER), ik = Math.ceil((Fk - Ik) / (tk - gk[2])), yk = gk[1]), lk = gk[1]; lk < tk; lk++) kk[lk] !== Ik && kk[lk] !== Fk && qF(yk = Math.floor((kk[lk] - Ik) / i … [truncated]
+             for (qF(ak = Number.MIN_SAFE_INTEGER, qk = Ik), Lk = gk[1]; Lk < tk - gk[2]; Lk++) Xk[Lk] === Number.MAX_SAFE_INTEGER && Tk[Lk] === Number.MIN_SAFE_INTEGER || qF(ak = Math.max(ak, Xk[Lk] - qk), qk = Tk[Lk]);
+             return ak = Math.max(ak, Fk - qk)
+           }, console.log(kk[-gk[36]]))
```

#### 1749. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12862-L12864` → after: `L12658-L12664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12658-L12664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12658-L12664) · [Before (L12862-L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12862-L12864)

```diff
-           for (NH(SS[oS[13]] = oS[2], SS[-oS[26]] = '<GMXPAWSqfR4B8+5#eV.?Fcm2H097g;}rT*%El|sx/p)d1Nj=ni@3L`u&(O,Zzk:_{aCDv~o$!UY^w"bI>]yh[K6JQt', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[29]] = SS[oS[0]].length, SS[oS[39]] = [], SS[-oS[33]] = oS[1], SS[oS[34]] = oS[1], SS[oS[3 … [truncated]
-             if (SS[oS[30]] = SS[-oS[26]].indexOf(SS[oS[0]][SS[oS[3]]]), SS[oS[30]] !== -oS[2])
-               if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[30]];
+           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = Tk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+         }), Tk || (Tk = function(kk) {
+           var Fk, Ik, Xk, Tk, ik, yk, lk;
+           for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
+             var ak = 'q.%yx>1;_80zoFLSAEfXPBcwn=Yj{gUJ2k)t~r6G*5sNWvl#?I(V&!9^d+h"]<`/meT3D$|pQ}aK,4uRiC7b[H@OMZ:'.indexOf(Fk[lk]);
+             if (ak !== -gk[2])
+               if (yk < gk[1]) yk = ak;
```

#### 1750. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12866` → after: `L12666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12666) · [Before (L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12866)

```diff
-                 NH(SS[oS[31]] += SS[oS[30]] * oS[32], SS[-oS[33]] |= SS[oS[31]] << SS[oS[34]], SS[oS[34]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                 qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1751. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12868-L12873` → after: `L12668-L12675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12668-L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12668-L12675) · [Before (L12868-L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12868-L12873)

```diff
-                   NH(SS[oS[39]].push(SS[-oS[33]] & oS[12]), SS[-oS[33]] >>= oS[11], SS[oS[34]] -= oS[11])
-                 } while (SS[oS[34]] > oS[26]);
-                 SS[oS[31]] = -oS[2]
-               } return SS[oS[31]] > -oS[2] && SS[oS[39]].push((SS[-oS[33]] | SS[oS[31]] << SS[oS[34]]) & oS[12]), mS(SS[oS[39]])
-         }), XS(oS[8]) + oS[30] in eS && xS(), NH(NS = void 0, qS = {
-           [XS(oS[72])]: function(...SS) {
+                   qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
+                 } while (ik > gk[7]);
+                 yk = -gk[2]
+               }
+           }
+           return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
+         }), ik(gk[264]) + gk[112] in Dk && yk(), qF(lk = void 0, ak = {
+           [ik(108)]: function(...kk) {
```

#### 1752. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12875-L12878` → after: `L12677-L12680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12677-L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12677-L12680) · [Before (L12875-L12878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12875-L12878)

```diff
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
-                 for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'pvH5syQ>i2hx&b4!LPA`#.O^J7u{N}IcB+C6wg_8Kl:0zDSf3n[W]Y"@9*ZUajq$RXV?M)/(%kGt;E~=e1,o<dFTrm|', SS[oS[49]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[49]].length, SS[-oS[52]] = [], SS[oS[44]] = oS[1], SS[-oS[51]] = oS[1], SS … [truncated]
-                   if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[49]][SS[oS[3]]]), SS[oS[6]] !== -oS[2])
-                     if (SS[-oS[50]] < oS[1]) SS[-oS[50]] = SS[oS[6]];
+               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
+                 for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'm)|IfiEvrTy}^;DxX0<7YAQ9&1_,B:8kl(nZC]R[3p#.V5hsaj/NduFe~S%!G?2gJU+>P=`4"$W6oO*qzb{cMLHtKw@', kk[-gk[37]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[37]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[-gk[38]] = gk[1], kk … [truncated]
+                   if (kk[gk[28]] = kk[gk[2]].indexOf(kk[-gk[37]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
+                     if (kk[gk[40]] < gk[1]) kk[gk[40]] = kk[gk[28]];
```

#### 1753. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12880` → after: `L12682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12682) · [Before (L12880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12880)

```diff
-                       NH(SS[-oS[50]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[-oS[50]] << SS[-oS[51]], SS[-oS[51]] += (SS[-oS[50]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       qF(kk[gk[40]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[40]] << kk[-gk[38]], kk[-gk[38]] += (kk[gk[40]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1754. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12882-L12885` → after: `L12684-L12687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12684-L12687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12684-L12687) · [Before (L12882-L12885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12882-L12885)

```diff
-                         NH(SS[-oS[52]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[-oS[51]] -= oS[11])
-                       } while (SS[-oS[51]] > oS[26]);
-                       SS[-oS[50]] = -oS[2]
-                     } return SS[-oS[50]] > -oS[2] && SS[-oS[52]].push((SS[oS[44]] | SS[-oS[50]] << SS[-oS[51]]) & oS[12]), mS(SS[-oS[52]])
+                         qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[38]] -= gk[11])
+                       } while (kk[-gk[38]] > gk[7]);
+                       kk[gk[40]] = -gk[2]
+                     } return kk[gk[40]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[40]] << kk[-gk[38]]) & gk[12]), hk(kk[gk[41]])
```

#### 1755. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12887-L12888` → after: `L12689-L12739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12689-L12739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12689-L12739) · [Before (L12887-L12888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12887-L12888)

```diff
-             } [
-               [SS[-oS[53]], SS[oS[14]], SS[oS[0]]], SS[oS[16]]
+             }
+             Fk(gk[305]) in Dk && function(...kk) {
+               kk[gk[13]] = gk[1];
+               const Fk = require("big-integer");
+               qF(kk[gk[43]] = class {
+                 static randomPrime(...kk) {
+                   kk[gk[13]] = gk[2];
+                   const Ik = Fk.one.shiftLeft(kk[gk[1]] - gk[2]),
+                     Xk = Fk.one.shiftLeft(kk[gk[1]]).prev();
+                   for (; gk[58];) {
+                     let kk = Fk.randBetween(Ik, Xk);
+                     if (kk.isProbablePrime(gk[59])) return kk
+                   }
+                 }
+                 static generate(...kk) {
+                   kk[gk[13]] = gk[2];
+ ... (35 more added lines; see GitHub link above)
```

#### 1756. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12890-L12891` → after: `L12741-L12742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12741-L12742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12741-L12742) · [Before (L12890-L12891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12890-L12891)

```diff
-             const gS = SS[-oS[53]][HS(oS[252])];
-             gS[HS(oS[54]) + oS[58]] && gS[HS(oS[55]) + HS(oS[151]) + HS(130)](SS[oS[14]], SS[oS[0]])
+             const Ik = kk[gk[44]][Fk(gk[103])];
+             Ik[Fk(gk[85]) + gk[54]] && Ik[Fk(gk[396]) + Fk(gk[233]) + Fk(gk[312]) + "es"](kk[-gk[45]], kk[gk[46]])
```

#### 1757. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12893-L12898` → after: `L12744-L12749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12744-L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12744-L12749) · [Before (L12893-L12898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12893-L12898)

```diff
-           [XS(oS[310])]: function(...SS) {
-             function HS(...SS) {
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
-                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'XzcAf`Sm5GiZPqbw%)8ahor*"QTEW|^geJkN@B]!I0Cp_Mj~3={yR6DK:V&n?/#4F2Ov($>;dtsU.H}l1L9<u+[x7,Y', SS[-oS[56]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[-oS[56]].length, SS[-oS[40]] = [], SS[oS[57]] = oS[1], SS[oS[9]] = oS[1], S … [truncated]
-                   if (SS[oS[6]] = SS[oS[2]].indexOf(SS[-oS[56]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
-                     if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
+           [ik(gk[302])]: function(...kk) {
+             function Fk(kk) {
+               return typeof Rk[kk] === gk[14] ? Rk[kk] = function(...kk) {
+                 for (qF(kk[gk[13]] = gk[2], kk[-gk[32]] = '`LAWBJSbaZjr@QP,CV1R&kOUMX<T.[d{(cg2?s4o$>Nei8In#H3ux07FEhDz]q/=|v6*%!lp;fY_+~Ky"9:)^wG}m5t', kk[gk[47]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[47]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk … [truncated]
+                   if (kk[gk[48]] = kk[-gk[32]].indexOf(kk[gk[47]][kk[gk[11]]]), kk[gk[48]] !== -gk[2])
+                     if (kk[gk[49]] < gk[1]) kk[gk[49]] = kk[gk[48]];
```

#### 1758. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12900` → after: `L12751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12751) · [Before (L12900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12900)

```diff
-                       NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[57]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       qF(kk[gk[49]] += kk[gk[48]] * gk[29], kk[gk[50]] |= kk[gk[49]] << kk[gk[20]], kk[gk[20]] += (kk[gk[49]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1759. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12902-L12911` → after: `L12753-L12757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12753-L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12753-L12757) · [Before (L12902-L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12902-L12911)

```diff
-                         NH(SS[-oS[40]].push(SS[oS[57]] & oS[12]), SS[oS[57]] >>= oS[11], SS[oS[9]] -= oS[11])
-                       } while (SS[oS[9]] > oS[26]);
-                       SS[oS[31]] = -oS[2]
-                     } return SS[oS[31]] > -oS[2] && SS[-oS[40]].push((SS[oS[57]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[-oS[40]])
-               }(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
-             } [
-               [SS[oS[5]], SS[oS[2]], SS[oS[21]], SS[oS[59]], SS[oS[44]]], SS[-oS[183]]
-             ] = TS;
-             if (!SS[oS[5]][XS(oS[123])][XS(oS[124]) + oS[58]]) {
-               return void XS(134)
+                         qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
+                       } while (kk[gk[20]] > gk[7]);
+                       kk[gk[49]] = -gk[2]
+                     } return kk[gk[49]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[49]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+               }(Uk[kk]) : Rk[kk]
```

#### 1760. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12913` → after: `L12759-L12778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12759-L12778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12759-L12778) · [Before (L12913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12913)

```diff
-             if (!SS[oS[21]] || SS[oS[59]] === oS[1]) {
+             Fk(gk[30]) + "N" in Dk && function(...kk) {
+               qF(kk[gk[13]] = gk[1], kk[gk[43]] = function(...kk) {
+                 for (qF(kk[gk[13]] = gk[2], kk[gk[10]] = kk[gk[1]].length, kk[gk[26]] = [], kk[-gk[51]] = gk[1], kk[gk[53]] = gk[1], kk[gk[1]].sort(((kk, Fk) => kk - Fk))), kk[gk[52]] = gk[1]; kk[gk[52]] < kk[gk[10]]; kk[gk[52]]++)
+                   if (!(kk[gk[52]] > gk[1] && kk[gk[1]][kk[gk[52]]] === kk[gk[1]][kk[gk[52]] - gk[2]]))
+                     for (qF(kk[-gk[51]] = kk[gk[52]] + gk[2], kk[gk[53]] = kk[gk[10]] - gk[2]); kk[-gk[51]] < kk[gk[53]];)
+                       if (kk[gk[1]][kk[gk[52]]] + kk[gk[1]][kk[-gk[51]]] + kk[gk[1]][kk[gk[53]]] < gk[1]) kk[-gk[51]]++;
+                       else if (kk[gk[1]][kk[gk[52]]] + kk[gk[1]][kk[-gk[51]]] + kk[gk[1]][kk[gk[53]]] > gk[1]) kk[gk[53]]--;
+                 else {
+                   for (kk[gk[26]].push([kk[gk[1]][kk[gk[52]]], kk[gk[1]][kk[-gk[51]]], kk[gk[1]][kk[gk[53]]]]); kk[-gk[51]] < kk[gk[53]] && kk[gk[1]][kk[-gk[51]]] === kk[gk[1]][kk[-gk[51]] + gk[2]];) kk[-gk[51]]++;
+                   for (; kk[-gk[51]] < kk[gk[53]] && kk[gk[1]][kk[gk[53]]] === kk[gk[1]][kk[gk[53]] - gk[2]];) kk[gk[53]]--;
+                   qF(kk[-gk[51]]++, kk[gk[53]]--)
+                 }
+                 return kk[gk[26]]
+               }, console.log(kk[gk[43]]))
+             }(), [
+               [kk[gk[43]], kk[gk[26]], kk[gk[35]]], kk[-gk[82]]
+ ... (4 more added lines; see GitHub link above)
```

#### 1761. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12915-L12917` → after: `L12780-L12782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12780-L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12780-L12782) · [Before (L12915-L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12915-L12917)

```diff
-                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = '|GlHYLPjRmiVSUtregCBMhNosKQEfndD5yXu$!=T4+b,#J?*<AZ%OvpW.F(1qak&Ic6x;2]09)@^:}7`w{/[z_>38"~', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[60]] = SS[oS[14]].length, SS[oS[64]] = [], SS[-oS[63]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
-                   if (SS[oS[61]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[61]] !== -oS[2])
-                     if (SS[oS[62]] < oS[1]) SS[oS[62]] = SS[oS[61]];
+                 for (qF(kk[gk[13]] = gk[2], kk[-gk[17]] = 'u~"1|0EK*Pdj4q9%(Dik[_=v;>VF/w5Jm?t)CxolWfXhZ.LpyB^nIb!MQYA2s`8&G:+3THa]gczN6e$,<#7US{}O@rR', kk[gk[55]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[55]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[-gk[57]] = gk[1],  … [truncated]
+                   if (kk[gk[28]] = kk[-gk[17]].indexOf(kk[gk[55]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
+                     if (kk[gk[56]] < gk[1]) kk[gk[56]] = kk[gk[28]];
```

#### 1762. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12919` → after: `L12784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12784) · [Before (L12919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12919)

```diff
-                       NH(SS[oS[62]] += SS[oS[61]] * oS[32], SS[-oS[63]] |= SS[oS[62]] << SS[oS[9]], SS[oS[9]] += (SS[oS[62]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       qF(kk[gk[56]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[56]] << kk[-gk[57]], kk[-gk[57]] += (kk[gk[56]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1763. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12921-L12924` → after: `L12786-L12789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12786-L12789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12786-L12789) · [Before (L12921-L12924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12921-L12924)

```diff
-                         NH(SS[oS[64]].push(SS[-oS[63]] & oS[12]), SS[-oS[63]] >>= oS[11], SS[oS[9]] -= oS[11])
-                       } while (SS[oS[9]] > oS[26]);
-                       SS[oS[62]] = -oS[2]
-                     } return SS[oS[62]] > -oS[2] && SS[oS[64]].push((SS[-oS[63]] | SS[oS[62]] << SS[oS[9]]) & oS[12]), mS(SS[oS[64]])
+                         qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[57]] -= gk[11])
+                       } while (kk[-gk[57]] > gk[7]);
+                       kk[gk[56]] = -gk[2]
+                     } return kk[gk[56]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[56]] << kk[-gk[57]]) & gk[12]), hk(kk[gk[41]])
```

#### 1764. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12928` → after: `L12793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12793) · [Before (L12928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12928)

```diff
-                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = bS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = Xk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1765. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12932-L12937` → after: `L12797-L12827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12797-L12827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12797-L12827) · [Before (L12932-L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12932-L12937)

```diff
-                 NH(SS[oS[13]] = oS[1], SS[oS[54]] = function(...HS) {
-                   return NH(HS[oS[13]] = oS[2], HS[-oS[65]] = []), (HS[oS[1]] === oS[2] || HS[oS[1]] >= oS[66]) && SS[oS[2]](HS[-oS[65]], [], HS[oS[1]], oS[1]), HS[-oS[65]]
-                 }, SS[oS[2]] = function(...HS) {
-                   for (HS[oS[13]] = oS[66], HS[oS[66]] = HS[oS[4]]; HS[oS[66]] < HS[oS[0]]; HS[oS[66]]++) {
-                     if (HS[oS[2]].length !== HS[oS[66]]) return;
-                     for (HS[oS[67]] = oS[1]; HS[oS[67]] < HS[oS[0]]; HS[oS[67]]++) SS[oS[53]](HS[oS[2]], [HS[oS[66]], HS[oS[67]]]) && (NH(HS[oS[2]].push([HS[oS[66]], HS[oS[67]]]), SS[oS[2]](HS[oS[1]], HS[oS[2]], HS[oS[0]], HS[oS[66]] + oS[2])), HS[oS[2]].length === HS[oS[0]] && H … [truncated]
+                 kk[gk[13]] = gk[1];
+                 const Fk = require("big-integer");
+                 qF(kk[gk[43]] = class {
+                   static randomPrime(...kk) {
+                     kk[gk[13]] = gk[2];
+                     const Ik = Fk.one.shiftLeft(kk[gk[1]] - gk[2]),
+                       Xk = Fk.one.shiftLeft(kk[gk[1]]).prev();
+                     for (; gk[58];) {
+                       let kk = Fk.randBetween(Ik, Xk);
+                       if (kk.isProbablePrime(gk[59])) return kk
+                     }
+                   }
+                   static generate(...kk) {
+                     kk[gk[13]] = gk[2];
+                     const Ik = Fk(gk[60]);
+                     let Xk, Tk;
+ ... (15 more added lines; see GitHub link above)
```

#### 1766. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12939-L12946` → after: `L12829-L12832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12829-L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12829-L12832) · [Before (L12939-L12946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12939-L12946)

```diff
-                 }, SS[oS[4]] = function(...SS) {
-                   for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = [], SS[oS[69]] = SS[oS[1]].length), SS[oS[68]] = oS[1]; SS[oS[68]] < SS[oS[69]]; SS[oS[68]]++)
-                     for (SS[oS[5]][SS[oS[68]]] = "", SS[oS[16]] = oS[1]; SS[oS[16]] < SS[oS[69]]; SS[oS[16]]++) SS[oS[5]][SS[oS[68]]] += SS[oS[1]][SS[oS[68]]][oS[2]] === SS[oS[16]] ? oS[150] : ".";
-                   return SS[oS[5]]
-                 }, SS[oS[53]] = function(...SS) {
-                   for (NH(SS[oS[13]] = oS[0], SS[-oS[70]] = SS[oS[1]].length), SS[oS[4]] = oS[1]; SS[oS[4]] < SS[-oS[70]]; SS[oS[4]]++) {
-                     if (SS[oS[1]][SS[oS[4]]][oS[1]] === SS[oS[2]][oS[1]] || SS[oS[1]][SS[oS[4]]][oS[2]] === SS[oS[2]][oS[2]]) return oS[71];
-                     if (Math.abs((SS[oS[1]][SS[oS[4]]][oS[1]] - SS[oS[2]][oS[1]]) / (SS[oS[1]][SS[oS[4]]][oS[2]] - SS[oS[2]][oS[2]])) === oS[2]) return oS[71]
+                   static encode(...kk) {
+                     kk[gk[13]] = gk[2];
+                     const Ik = kk[gk[1]].split("").map((kk => kk.charCodeAt())).join("");
+                     return Fk(Ik)
```

#### 1767. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12948-L12949` → after: `L12834-L12844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12834-L12844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12834-L12844) · [Before (L12948-L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12948-L12949)

```diff
-                   return oS[78]
-                 }, console.log(SS[oS[54]]))
+                   static decode(...kk) {
+                     kk[gk[13]] = gk[2];
+                     const Fk = kk[gk[1]].toString();
+                     kk[gk[43]] = "";
+                     for (let Ik = gk[1]; Ik < Fk.length; Ik += gk[35]) {
+                       let Xk = Number(Fk.substr(Ik, gk[35]));
+                       Xk <= gk[61] ? (kk[gk[43]] += String.fromCharCode(Number(Fk.substr(Ik, gk[25]))), Ik++) : kk[gk[43]] += String.fromCharCode(Xk)
+                     }
+                     return kk[gk[43]]
+                   }
+                 }, module.exports = kk[gk[43]])
```

#### 1768. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12951` → after: `L12846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12846) · [Before (L12951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12951)

```diff
-               return void(xS(135) in eS && NS())
+               Tk(gk[378]) in Dk && ik()
```

#### 1769. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12953-L12958` → after: `L12848-L12854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12848-L12854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12848-L12854) · [Before (L12953-L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12953-L12958)

```diff
-             const gS = Math[XS(oS[87])](SS[oS[44]]);
-             if (gS <= SS[oS[21]][HS(oS[47]) + oS[79]]) {
-               function qS(...SS) {
-                 for (NH(SS[oS[13]] = oS[2], SS[-oS[72]] = 'Jmy1<>5D"hv?92j:w)/#kT~A&s=p.@Z^i$;Sxbz|nYu7WB%OG+60{NC}_fIHP]8o![r(tXg43Q`F*,qRVdcKlLUeaME', SS[-oS[51]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[-oS[51]].length, SS[oS[16]] = [], SS[oS[73]] = oS[1], SS[oS[24]] = oS[1], … [truncated]
-                   if (SS[oS[6]] = SS[-oS[72]].indexOf(SS[-oS[51]][SS[oS[3]]]), SS[oS[6]] !== -oS[2])
-                     if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
+           },
+           [ik(gk[358])]: function(...kk) {
+             function Fk(...kk) {
+               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
+                 for (qF(kk[gk[13]] = gk[2], kk[-gk[62]] = 'N{4}uG@DMKIJn[c`TqS/*Uh0FyA1irvHdbzW67P~x=E)C53&(Qj_]<$%efXmBaV8wk>Z^pYl9t#"g!:+?sL2R.o|;,O', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], k … [truncated]
+                   if (kk[-gk[63]] = kk[-gk[62]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[-gk[63]] !== -gk[2])
+                     if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[-gk[63]];
```

#### 1770. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12960` → after: `L12856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12856) · [Before (L12960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12960)

```diff
-                       NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[73]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       qF(kk[gk[7]] += kk[-gk[63]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1771. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12962-L12965` → after: `L12858-L12908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12858-L12908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12858-L12908) · [Before (L12962-L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12962-L12965)

```diff
-                         NH(SS[oS[16]].push(SS[oS[73]] & oS[12]), SS[oS[73]] >>= oS[11], SS[oS[24]] -= oS[11])
-                       } while (SS[oS[24]] > oS[26]);
-                       SS[oS[26]] = -oS[2]
-                     } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[73]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
+                         qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
+                       } while (kk[gk[53]] > gk[7]);
+                       kk[gk[7]] = -gk[2]
+                     } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
+               }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             }
+             Fk(gk[369]) in Dk && function(...kk) {
+               kk[gk[13]] = gk[1]
+             }(), [
+               [kk[-gk[62]], kk[gk[26]], kk[gk[4]], kk[gk[25]], kk[gk[10]]], kk[gk[50]]
+             ] = Ak;
+             if (!kk[-gk[62]][Fk(gk[81])][Fk(gk[242]) + gk[54]]) {
+               function Tk() {
+                 var kk, Fk, Ik;
+                 qF(kk = function(...Xk) {
+                   for (Xk[gk[13]] = gk[10], Xk[gk[43]] = Xk[gk[25]]; Xk[gk[43]] < Xk[gk[35]]; Xk[gk[43]]++) {
+ ... (35 more added lines; see GitHub link above)
```

#### 1772. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12969` → after: `L12912-L12948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12912-L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12912-L12948) · [Before (L12969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12969)

```diff
-                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = qS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = ik(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+               }
+ 
+               function lk() {
+                 console.log((function(kk) {
+                   var Fk, Ik, Xk, Tk, ik, yk, lk = gk[1];
+                   for (qF(Fk = {}, Ik = gk[1], Xk = gk[1], Tk = gk[1], ik = kk.length), yk = gk[1]; yk < ik; yk++) {
+                     var ak;
+                     for (qF(Fk = {}, Ik = gk[1], Xk = gk[2]), ak = yk + gk[2]; ak < ik; ak++) kk[yk].x !== kk[ak].x || kk[yk].y !== kk[ak].y ? (Fk[Tk = kk[yk].y === kk[ak].y ? Number.MAX_SAFE_INTEGER : (kk[yk].x - kk[ak].x) / (kk[yk].y - kk[ak].y)] || (Fk[Tk] = gk[1]), qF(Fk[Tk]+ … [truncated]
+                     qF(Ik += Xk, lk = Math.max(lk, Ik))
+                   }
+                   return lk
+                 }))
+               }
+               return void(yk(gk[71]) + "x" in Dk && lk())
+             }
+ ... (21 more added lines; see GitHub link above)
```

#### 1773. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12973-L12978` → after: `L12952-L12957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12952-L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12952-L12957) · [Before (L12973-L12978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12973-L12978)

```diff
-                 module.exports = async (SS = (...SS) => {
-                   throw SS[oS[13]] = oS[1], new Error(function(...SS) {
-                     return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
-                       for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = '[+48;~{|">z637#xw*.y,vlFr5_&1/^$=M9(2musY)?VSd%:0J}EIN!DTCbHBZGWfAiOotpXhRKeqgQacLjkU@]<nP`', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[73]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1] … [truncated]
-                         if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[14]][SS[oS[24]]]), SS[oS[6]] !== -oS[2])
-                           if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
+                 module.exports = async (kk = () => {
+                   throw new Error(function(kk) {
+                     return typeof Rk[kk] === gk[14] ? Rk[kk] = function(...kk) {
+                       for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '7tCDobXJLHsa5A|uBmS}di.PTp[4"j#/h;9OZ<r3:egnWR,EYFkNM*%~^v2$6{c!V8q_UlKfGQzI10@w(=y+`>x)]&?', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[73]] = kk[gk[35]].length, kk[-gk[74]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk … [truncated]
+                         if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[72]]]), kk[gk[28]] !== -gk[2])
+                           if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
```

#### 1774. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12980` → after: `L12959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12959) · [Before (L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12980)

```diff
-                             NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                             qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1775. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12982-L12987` → after: `L12961-L12966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12961-L12966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12961-L12966) · [Before (L12982-L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12982-L12987)

```diff
-                               NH(SS[oS[73]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
-                             } while (SS[oS[9]] > oS[26]);
-                             SS[oS[31]] = -oS[2]
-                           } return SS[oS[31]] > -oS[2] && SS[oS[73]].push((SS[oS[44]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[oS[73]])
-                     }(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
-                   }(oS[157]))
+                               qF(kk[-gk[74]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
+                             } while (kk[gk[20]] > gk[7]);
+                             kk[gk[7]] = -gk[2]
+                           } return kk[gk[7]] > -gk[2] && kk[-gk[74]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[-gk[74]])
+                     }(Uk[kk]) : Rk[kk]
+                   }(gk[83]))
```

#### 1776. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12989-L12992` → after: `L12968-L12971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12968-L12971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12968-L12971) · [Before (L12989-L12992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12989-L12992)

```diff
-                   const HS = new Set(process.argv.slice(oS[0]));
-                   if (!HS.has(uS(140))) {
-                     if (HS.size !== oS[2]) return oS[71];
-                     if (!HS.has("-v")) return oS[71]
+                   const Fk = new Set(process.argv.slice(gk[35]));
+                   if (!Fk.has(qk(gk[311]))) {
+                     if (Fk.size !== gk[2]) return gk[70];
+                     if (!Fk.has("-v")) return gk[70]
```

#### 1777. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12996-L12999` → after: `L12975-L12978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12975-L12978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12975-L12978) · [Before (L12996-L12999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L12996-L12999)

```diff
-                       return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
-                         for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'oOZingY+7l@k)G2mN0$1ABRPW(r=9*3<H`Vpt^_DcKu/aCM&E"w>jIe#~U,X5Tf%Qz{FJs}qhS8b!L:v[y64|x];?.d', SS[oS[74]] = "" + (SS[oS[1]] || ""), SS[oS[75]] = SS[oS[74]].length, SS[oS[16]] = [], SS[oS[76]] = oS[1], SS[-oS[77]] = o … [truncated]
-                           if (SS[oS[30]] = SS[oS[2]].indexOf(SS[oS[74]][SS[oS[3]]]), SS[oS[30]] !== -oS[2])
-                             if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[30]];
+                       return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
+                         for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = ']wcngAv$:WHB5C7Xd3aNye)9,%.R?(smT~@0E>!jftiF}UD*b=Vzk^Y+xPo/lOLprQ`61&#_I82SMqu4hZKJ|G;[{"<', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[78]] = [], kk[gk[76]] = gk[1], kk[gk[77]] = gk[ … [truncated]
+                           if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
+                             if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[75]];
```

#### 1778. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13001` → after: `L12980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12980) · [Before (L13001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13001)

```diff
-                               NH(SS[oS[31]] += SS[oS[30]] * oS[32], SS[oS[76]] |= SS[oS[31]] << SS[-oS[77]], SS[-oS[77]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                               qF(kk[gk[7]] += kk[gk[75]] * gk[29], kk[gk[76]] |= kk[gk[7]] << kk[gk[77]], kk[gk[77]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1779. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13003-L13006` → after: `L12982-L12985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12982-L12985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12982-L12985) · [Before (L13003-L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13003-L13006)

```diff
-                                 NH(SS[oS[16]].push(SS[oS[76]] & oS[12]), SS[oS[76]] >>= oS[11], SS[-oS[77]] -= oS[11])
-                               } while (SS[-oS[77]] > oS[26]);
-                               SS[oS[31]] = -oS[2]
-                             } return SS[oS[31]] > -oS[2] && SS[oS[16]].push((SS[oS[76]] | SS[oS[31]] << SS[-oS[77]]) & oS[12]), mS(SS[oS[16]])
+                                 qF(kk[gk[78]].push(kk[gk[76]] & gk[12]), kk[gk[76]] >>= gk[11], kk[gk[77]] -= gk[11])
+                               } while (kk[gk[77]] > gk[7]);
+                               kk[gk[7]] = -gk[2]
+                             } return kk[gk[7]] > -gk[2] && kk[gk[78]].push((kk[gk[76]] | kk[gk[7]] << kk[gk[77]]) & gk[12]), hk(kk[gk[78]])
```

#### 1780. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13009-L13010` → after: `L12988-L12989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12988-L12989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12988-L12989) · [Before (L13009-L13010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13009-L13010)

```diff
-                     return void 0 === await SS() ? HS(oS[34]) + "l)" : ""
-                   })(), oS[78]
+                     return void 0 === await kk() ? Fk(gk[56]) + "l)" : ""
+                   })(), gk[58]
```

#### 1781. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13013` → after: `L12992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12992) · [Before (L13013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13013)

```diff
-               return void(uS(oS[219]) + oS[30] in eS && IS())
+               return void(qk(131) in Dk && Lk())
```

#### 1782. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13015-L13016` → after: `L12994-L12995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12994-L12995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12994-L12995) · [Before (L13015-L13016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13015-L13016)

```diff
-             const tS = Math[HS(oS[83])]((gS - SS[oS[21]][HS(oS[47]) + oS[79]]) * SS[oS[21]][HS(oS[309]) + HS(146) + HS(oS[88])], SS[oS[21]][HS(oS[266]) + HS(oS[315])]);
-             SS[oS[5]][HS(150)][HS(151)](SS[oS[2]], tS, SS[oS[21]][HS(152) + HS(oS[184])])
+             const Xk = Math[Fk(137)]((Ik - kk[gk[4]][Fk(gk[79]) + gk[80]]) * kk[gk[4]][Fk(138) + Fk(139) + Fk(gk[142])], kk[gk[4]][Fk(gk[375]) + Fk(gk[347])]);
+             kk[-gk[62]][Fk(gk[81])][Fk(gk[300])](kk[gk[26]], Xk, kk[gk[4]][Fk(gk[313]) + Fk(145)])
```

#### 1783. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13018-L13063` → after: `L12997-L13002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12997-L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L12997-L13002) · [Before (L13018-L13063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13018-L13063)

```diff
-           [XS(154)]: function(...SS) {
-             XS(oS[59]) + "V" in eS && function(...SS) {
-               SS[oS[13]] = oS[1]
-             }(), [
-               [SS[oS[5]], SS[oS[86]]], SS[oS[0]]
-             ] = TS;
-             const HS = SS[oS[86]] - Math[XS(oS[87])](SS[oS[5]]);
-             if (HS <= oS[1]) {
-               function gS(...SS) {
-                 function HS(...SS) {
-                   return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
-                     for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'JabPIKY1[x&ic4zoO"h#%D<_w$?A8je=0Sv6X`pB.{!~tfrZHU]+GCMELk3V;Nm2:uT5Qgyn^9@qlF)d/s|R}>7(,W*', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1],  … [truncated]
-                       if (SS[oS[6]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
-                         if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
-                         else {
-                           NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
- ... (30 more removed lines; see GitHub link above)
+           [ik(146)]: function(...kk) {
+             function Fk(...kk) {
+               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
+                 for (qF(kk[gk[13]] = gk[2], kk[gk[82]] = 'E2AhNq]u?rG^v[S_z|9{cw.nYt"b5#*sPL@H+pdeM%4$VBIfm;D8R~6g>kj1=x,37a:T`!/J)WQUyiF<oZ0}(&CXlKO', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[-gk[71]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[83]] = gk[1], k … [truncated]
+                   if (kk[gk[28]] = kk[gk[82]].indexOf(kk[gk[26]][kk[gk[84]]]), kk[gk[28]] !== -gk[2])
+                     if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
```

#### 1784. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13065` → after: `L13004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13004) · [Before (L13065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13065)

```diff
-                       NH(SS[oS[89]] += SS[oS[6]] * oS[32], SS[oS[67]] |= SS[oS[89]] << SS[-oS[90]], SS[-oS[90]] += (SS[oS[89]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[83]], kk[gk[83]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1785. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13067-L13071` → after: `L13006-L13016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13006-L13016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13006-L13016) · [Before (L13067-L13071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13067-L13071)

```diff
-                         NH(SS[oS[16]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[-oS[90]] -= oS[11])
-                       } while (SS[-oS[90]] > oS[26]);
-                       SS[oS[89]] = -oS[2]
-                     } return SS[oS[89]] > -oS[2] && SS[oS[16]].push((SS[oS[67]] | SS[oS[89]] << SS[-oS[90]]) & oS[12]), mS(SS[oS[16]])
-               }
+                         qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[83]] -= gk[11])
+                       } while (kk[gk[83]] > gk[7]);
+                       kk[gk[7]] = -gk[2]
+                     } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[83]]) & gk[12]), hk(kk[gk[41]])
+               }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             }
+             Fk(147) + "Z" in Dk && function(...kk) {
+               qF(kk[gk[13]] = gk[1], kk[gk[110]] = function(...kk) {
+                 function Ik(...kk) {
+                   return kk[gk[13]] = gk[2], ak(yk(tk(kk[gk[1]])))
+                 }
```

#### 1786. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13073-L13074` → after: `L13018-L13195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13018-L13195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13018-L13195) · [Before (L13073-L13074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13073-L13074)

```diff
-               function bS(...SS) {
-                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = tS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+                 function Xk(...kk) {
+                   return kk[gk[13]] = gk[35], ak(lk(tk(kk[gk[1]]), tk(kk[gk[2]])))
+                 }
+ 
+                 function Tk(kk, Fk) {
+                   return qk(lk(tk(kk), tk(Fk)))
+                 }
+ 
+                 function ik(...kk) {
+                   return kk[gk[13]] = gk[25], Lk(lk(tk(kk[gk[1]]), tk(kk[gk[2]])), kk[gk[35]])
+                 }
+ 
+                 function yk(...kk) {
+                   return kk[gk[13]] = gk[2], jk(sk(Zk(kk[gk[1]]), kk[gk[1]].length * gk[11]))
+                 }
+ 
+ ... (162 more added lines; see GitHub link above)
```

#### 1787. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13078-L13087` → after: `L13199-L13206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13199-L13206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13199-L13206) · [Before (L13078-L13087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13078-L13087)

```diff
-                 NH(SS[oS[13]] = oS[1], SS[oS[5]] = function(...SS) {
-                   for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = SS[oS[1]].length, SS[oS[14]] = [], SS[oS[21]] = oS[1], SS[-oS[91]] = oS[1], SS[oS[1]].sort(((SS, HS) => SS - HS))), SS[oS[67]] = oS[1]; SS[oS[67]] < SS[oS[2]]; SS[oS[67]]++)
-                     if (!(SS[oS[67]] > oS[1] && SS[oS[1]][SS[oS[67]]] === SS[oS[1]][SS[oS[67]] - oS[2]]))
-                       for (NH(SS[oS[21]] = SS[oS[67]] + oS[2], SS[-oS[91]] = SS[oS[2]] - oS[2]); SS[oS[21]] < SS[-oS[91]];)
-                         if (SS[oS[1]][SS[oS[67]]] + SS[oS[1]][SS[oS[21]]] + SS[oS[1]][SS[-oS[91]]] < oS[1]) SS[oS[21]]++;
-                         else if (SS[oS[1]][SS[oS[67]]] + SS[oS[1]][SS[oS[21]]] + SS[oS[1]][SS[-oS[91]]] > oS[1]) SS[-oS[91]]--;
-                   else {
-                     for (SS[oS[14]].push([SS[oS[1]][SS[oS[67]]], SS[oS[1]][SS[oS[21]]], SS[oS[1]][SS[-oS[91]]]]); SS[oS[21]] < SS[-oS[91]] && SS[oS[1]][SS[oS[21]]] === SS[oS[1]][SS[oS[21]] + oS[2]];) SS[oS[21]]++;
-                     for (; SS[oS[21]] < SS[-oS[91]] && SS[oS[1]][SS[-oS[91]]] === SS[oS[1]][SS[-oS[91]] - oS[2]];) SS[-oS[91]]--;
-                     NH(SS[oS[21]]++, SS[-oS[91]]--)
+                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = Tk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+               }
+ 
+               function yk(...kk) {
+                 qF(kk[gk[13]] = gk[1], kk[gk[81]] = function(...kk) {
+                   for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = gk[1], kk[-gk[117]] = {}, kk[gk[25]] = gk[1], kk[gk[41]] = gk[1], kk[-gk[116]] = gk[1], kk[gk[77]] = kk[gk[1]].length), kk[gk[52]] = gk[1]; kk[gk[52]] < kk[gk[77]]; kk[gk[52]]++) {
+                     for (qF(kk[-gk[117]] = {}, kk[gk[25]] = gk[1], kk[gk[41]] = gk[2]), kk[gk[39]] = kk[gk[52]] + gk[2]; kk[gk[39]] < kk[gk[77]]; kk[gk[39]]++) kk[gk[1]][kk[gk[52]]].x !== kk[gk[1]][kk[gk[39]]].x || kk[gk[1]][kk[gk[52]]].y !== kk[gk[1]][kk[gk[39]]].y ? (kk[gk[1]][ … [truncated]
+                     qF(kk[gk[25]] += kk[gk[41]], kk[gk[43]] = Math.max(kk[gk[43]], kk[gk[25]]))
```

#### 1788. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13089-L13090` → after: `L13208-L13209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13208-L13209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13208-L13209) · [Before (L13089-L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13089-L13090)

```diff
-                   return SS[oS[14]]
-                 }, console.log(SS[oS[5]]))
+                   return kk[gk[43]]
+                 }, console.log(kk[gk[81]]))
```

#### 1789. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13092` → after: `L13211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13211) · [Before (L13092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13092)

```diff
-               return bS(oS[91]) + "C" in eS && xS(), SS[oS[0]][bS(oS[33])] * HS
+               return ik(gk[240]) in Dk && yk(), Xk + gk[2]
```

#### 1790. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13094` → after: `L13213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13213) · [Before (L13094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13094)

```diff
-             return SS[oS[0]][XS(166)]
+             return Xk
```

#### 1791. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13096-L13118` → after: `L13215-L13241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13215-L13241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13215-L13241) · [Before (L13096-L13118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13096-L13118)

```diff
-           [XS(oS[177])]: function(...SS) {
-             function HS(...SS) {
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
-                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'OftZGJrXl5jQbyK2>C=heBLN]Mkos!V({_46RnD<^8dI;UW.YT)i[7}qp*z@Exc&AgwmPH|FS?~3%":1+u#9v,$`0/a', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[92]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1], SS[ … [truncated]
-                   if (SS[oS[30]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
-                     if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
-                     else {
-                       NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                       do {
-                         NH(SS[oS[92]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
-                       } while (SS[oS[24]] > oS[26]);
-                       SS[oS[26]] = -oS[2]
-                     } return SS[oS[26]] > -oS[2] && SS[oS[92]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[92]])
-               }(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
-             }
-             XS(168) + oS[316] in eS && function(...SS) {
- ... (7 more removed lines; see GitHub link above)
+           [ik(gk[376])]: function(kk, Fk, Ik) {
+             Ik || (Ik = function(...kk) {
+               qF(kk[gk[13]] = gk[1], kk[gk[90]] = function(...Fk) {
+                 return qF(Fk[gk[13]] = gk[35], Fk[-gk[119]] = [], Fk[gk[26]] = Fk[gk[1]].length, Fk[gk[1]].sort(((kk, Fk) => kk - Fk)), kk[gk[26]](Fk[-gk[119]], [], gk[1], Fk[gk[26]], Fk[gk[1]], Fk[gk[2]])), Fk[-gk[119]]
+               }, kk[gk[26]] = function(Fk, Ik, Xk, Tk, ik, yk) {
+                 var lk, ak = gk[64];
+                 if (!(yk < gk[1])) {
+                   if (yk === gk[1]) return Fk.push(Ik);
+                   for (lk = Xk; lk < Tk && !(ik[lk] > yk); lk++) lk > Xk && ik[lk] === ik[lk - gk[2]] || qF(ak = Array.from(Ik), ak.push(ik[lk]), kk[gk[26]](Fk, ak, lk + gk[2], Tk, ik, yk - ik[lk]))
+                 }
+               }, console.log(kk[gk[90]]))
+             }), Fk || (Fk = function(...Fk) {
+               return Fk[gk[13]] = gk[2], typeof Rk[Fk[gk[1]]] === gk[14] ? Rk[Fk[gk[1]]] = kk(Uk[Fk[gk[1]]]) : Rk[Fk[gk[1]]]
+             }), kk || (kk = function(...kk) {
+               for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'S{87i_BMGnYDkZ>1@x.9*w<;z]0/(+!2=6v?5}%)`~["&$4y#cuUAKhTsq3|:,^OmHjpWgdlfVXFtQEPRaLIJNoCbre', kk[gk[68]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[68]].length, kk[-gk[118]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
+                 if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[68]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
+ ... (11 more added lines; see GitHub link above)
```

#### 1792. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13120-L13138` → after: `L13243-L13244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13243-L13244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13243-L13244) · [Before (L13120-L13138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13120-L13138)

```diff
-             const gS = SS[oS[5]][HS(oS[94])][HS(oS[99]) + HS(oS[10]) + HS(172) + HS(173)](SS[-oS[42]]);
-             return gS === oS[48] ? SS[oS[5]][HS(oS[94])][HS(174) + HS(oS[39]) + HS(oS[77]) + HS(oS[89])](SS[-oS[88]], HS(oS[95]) + HS(oS[96]) + HS(oS[97])) : gS[HS(oS[95]) + HS(oS[96]) + HS(oS[97])]
-           },
-           [XS(oS[29])]: function(...SS) {
-             function HS(...SS) {
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
-                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'w!&x)53y,0T.8(V2~Zs=17vXC?Bq4]WgoOnf^<c6S*>@M/KRPder_b|%hkJaNFY;t"QHE{p+im:UL[GD`jlA9$}u#zI', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[98]] = SS[oS[0]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1], SS[o … [truncated]
-                   if (SS[oS[6]] = SS[oS[2]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
-                     if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
-                     else {
-                       NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[oS[24]], SS[oS[24]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                       do {
-                         NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
-                       } while (SS[oS[24]] > oS[26]);
-                       SS[oS[31]] = -oS[2]
-                     } return SS[oS[31]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[31]] << SS[oS[24]]) & oS[12]), mS(SS[oS[66]])
- ... (3 more removed lines; see GitHub link above)
+             const lk = Tk - Math[Fk(gk[118])](Xk);
+             if (lk <= gk[1]) {
```

#### 1793. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13140-L13142` → after: `L13246-L13248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13246-L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13246-L13248) · [Before (L13140-L13142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13140-L13142)

```diff
-                 for (NH(SS[oS[13]] = oS[2], SS[-oS[26]] = 'o3iMP]~T6<j.u8>e}HmBwY[{xO$z52v&LyFV|^aK;,cUNGD#C49p?k/S"1EA!%hX)r*l`d:R(7_tf0nIqQZ@+=gJsWb', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1], SS[o … [truncated]
-                   if (SS[oS[6]] = SS[-oS[26]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
-                     if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
+                 for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '$EDkWXtPmg3wKYR7h?0dbC)`o^L2;I>}9.FM=:*V6l(#fS|B&NQUZv@5]"T48</e1{!uH_s+G[J%iypzq,Oacxj~Arn', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[121]] = [], kk[-gk[120]] = gk[1], kk[-gk[29]] = gk[1],  … [truncated]
+                   if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
+                     if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[28]];
```

#### 1794. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13144` → after: `L13250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13250) · [Before (L13144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13144)

```diff
-                       NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[oS[24]], SS[oS[24]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       qF(kk[gk[52]] += kk[gk[28]] * gk[29], kk[-gk[120]] |= kk[gk[52]] << kk[-gk[29]], kk[-gk[29]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1795. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13146-L13149` → after: `L13252-L13255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13252-L13255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13252-L13255) · [Before (L13146-L13149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13146-L13149)

```diff
-                         NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
-                       } while (SS[oS[24]] > oS[26]);
-                       SS[oS[31]] = -oS[2]
-                     } return SS[oS[31]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[oS[31]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
+                         qF(kk[gk[121]].push(kk[-gk[120]] & gk[12]), kk[-gk[120]] >>= gk[11], kk[-gk[29]] -= gk[11])
+                       } while (kk[-gk[29]] > gk[7]);
+                       kk[gk[52]] = -gk[2]
+                     } return kk[gk[52]] > -gk[2] && kk[gk[121]].push((kk[-gk[120]] | kk[gk[52]] << kk[-gk[29]]) & gk[12]), hk(kk[gk[121]])
```

#### 1796. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13152-L13153` → after: `L13258-L13259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13258-L13259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13258-L13259) · [Before (L13152-L13153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13152-L13153)

```diff
-               function gS(...SS) {
-                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = HS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+               function qk(kk) {
+                 return typeof Rk[kk] === gk[14] ? Rk[kk] = ak(Uk[kk]) : Rk[kk]
```

#### 1797. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13157-L13161` → after: `L13263-L13265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13263-L13265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13263-L13265) · [Before (L13157-L13161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13157-L13161)

```diff
-                 SS[oS[13]] = oS[2];
-                 const HS = {};
-                 for (let gS of SS[oS[1]].replace(/[^w]/g, "").toLowerCase()) HS[gS] = HS[gS] + oS[2] || oS[2];
-                 return HS
-               }
+                 function Fk(...kk) {
+                   return kk[gk[13]] = gk[2], kk[gk[1]][gk[2]] * gk[123] + (kk[gk[1]][gk[1]] < gk[1] ? gk[122] | kk[gk[1]][gk[1]] : kk[gk[1]][gk[1]])
+                 }
```

#### 1798. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13164-L13169` → after: `L13285-L13294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13285-L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13285-L13294) · [Before (L13164-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13164-L13169)

```diff
-                 SS[oS[13]] = oS[0];
-                 const HS = buildCharMap(SS[oS[1]]),
-                   gS = buildCharMap(SS[oS[2]]);
-                 for (let tS in HS)
-                   if (HS[tS] !== gS[tS]) return oS[71];
-                 return Object.keys(HS).length !== Object.keys(gS).length ? oS[71] : oS[78]
+                 for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'Td.:pvGO["wW{%A5>iyLhr4XY(Zkf;B8_Su2!R)=J`37xC]?cMKzQs&/9j1Etl}g@|0,F$*+#6VoD<~P^bUaemHInqN', kk[gk[126]] = "" + (kk[gk[1]] || ""), kk[-gk[127]] = kk[gk[126]].length, kk[-gk[129]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1 … [truncated]
+                   if (kk[-gk[117]] = kk[gk[43]].indexOf(kk[gk[126]][kk[gk[111]]]), kk[-gk[117]] !== -gk[2])
+                     if (kk[gk[128]] < gk[1]) kk[gk[128]] = kk[-gk[117]];
+                     else {
+                       qF(kk[gk[128]] += kk[-gk[117]] * gk[29], kk[gk[8]] |= kk[gk[128]] << kk[gk[53]], kk[gk[53]] += (kk[gk[128]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       do {
+                         qF(kk[-gk[129]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
+                       } while (kk[gk[53]] > gk[7]);
+                       kk[gk[128]] = -gk[2]
+                     } return kk[gk[128]] > -gk[2] && kk[-gk[129]].push((kk[gk[8]] | kk[gk[128]] << kk[gk[53]]) & gk[12]), hk(kk[-gk[129]])
```

#### 1799. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13173-L13174` → after: `L13298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13298) · [Before (L13173-L13174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13173-L13174)

```diff
-                 SS[oS[13]] = oS[2];
-                 return xS(SS[oS[1]]) !== 1 / 0
+                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = tk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1800. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13178-L13183` → after: `L13302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13302) · [Before (L13178-L13183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13178-L13183)

```diff
-                 if (SS[oS[13]] = oS[2], !SS[oS[1]]) return -oS[2];
-                 const HS = xS(SS[oS[1]].left),
-                   gS = xS(SS[oS[1]].right),
-                   tS = Math.abs(HS - gS);
-                 if (HS === 1 / 0 || gS === 1 / 0 || tS > oS[2]) return 1 / 0;
-                 return Math.max(HS, gS) + oS[2]
+                 kk[gk[13]] = gk[1]
```

#### 1801. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13185-L13192` → after: `L13304-L13327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13304-L13327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13304-L13327) · [Before (L13185-L13192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13185-L13192)

```diff
-               SS[oS[13]] = oS[1], window[gS(183) + gS(oS[206]) + gS(oS[100]) + oS[154]] = {
-                 buildCharacterMap: tS,
-                 isAnagrams: bS,
-                 isBalanced: XS,
-                 getHeightBalanced: xS
-               }
-             }(), [
-               [SS[-oS[99]], SS[oS[2]], SS[oS[100]]], SS[-oS[41]]
+               return Zk(gk[3]) + gk[131] in Dk && jk(), yk[Zk(gk[372]) + gk[131]] * lk
+             }
+             return yk[Fk(184) + gk[131]]
+           },
+           [ik(gk[127])]: function(...kk) {
+             function Fk(kk) {
+               return typeof Rk[kk] === gk[14] ? Rk[kk] = function(kk) {
+                 var Fk, Ik, Xk, Tk, ik, yk, lk;
+                 for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
+                   var ak = 'OuqGp$t7C(;Ja=jv)BI+0i8fR>9U,/nw?E1N4eV6x}Y#&]l<hPyrAZH_T3b.cDF^W@QKsz{So:5~|MLg%["Xm`2dk*!'.indexOf(Fk[lk]);
+                   if (ak !== -gk[2])
+                     if (yk < gk[1]) yk = ak;
+                     else {
+                       qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       do {
+                         qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
+ ... (8 more added lines; see GitHub link above)
```

#### 1802. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13194-L13195` → after: `L13329-L13330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13329-L13330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13329-L13330) · [Before (L13194-L13195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13194-L13195)

```diff
-             const gS = SS[-oS[99]][HS(oS[101])][HS(oS[50]) + HS(oS[103]) + HS(oS[40]) + HS(oS[125])](SS[oS[100]]);
-             return gS === oS[48] ? SS[-oS[99]][HS(oS[101])][HS(oS[139]) + HS(oS[113]) + HS(193) + HS(194)](SS[oS[2]], HS(oS[22]) + HS(oS[102])) : gS[HS(oS[22]) + HS(oS[102])]
+             const Ik = kk[gk[26]][Fk(gk[132])][Fk(gk[350]) + Fk(188) + Fk(189) + Fk(gk[114])](kk[gk[41]]);
+             return Ik === gk[64] ? kk[gk[26]][Fk(gk[132])][Fk(gk[18]) + Fk(gk[133]) + Fk(gk[345]) + Fk(194)](kk[gk[2]], Fk(gk[134]) + Fk(gk[135]) + Fk(gk[87])) : Ik[Fk(gk[134]) + Fk(gk[135]) + Fk(gk[87])]
```

#### 1803. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13197` → after: `L13332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13332) · [Before (L13197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13197)

```diff
-           [XS(197)]: function(...SS) {
+           [ik(gk[47])]: function(...kk) {
```

#### 1804. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13199-L13202` → after: `L13334-L13337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13334-L13337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13334-L13337) · [Before (L13199-L13202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13199-L13202)

```diff
-               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
-                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'tFLXjbRaErBcTWD9;`u7|_Q!q]^@Z{hpOilPCI/v35~(w[$JGAeSngfYUosKVkMHdN?}xy=z0*<:>,"8#&%+1246).m', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[66]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[o … [truncated]
-                   if (SS[oS[30]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
-                     if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[30]];
+               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
+                 for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'AQsyup&n#I1R{~Ng>b|2o.iFJhzL"lv*j4;]}7a$:c/@[WY35%UwS_+Z0=^GHmqMO?<,PB8KC`t!9(TEdDXx)Vfr6ek', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[137]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], kk[ … [truncated]
+                   if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
+                     if (kk[-gk[136]] < gk[1]) kk[-gk[136]] = kk[gk[28]];
```

#### 1805. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13204` → after: `L13339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13339) · [Before (L13204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13204)

```diff
-                       NH(SS[oS[31]] += SS[oS[30]] * oS[32], SS[oS[67]] |= SS[oS[31]] << SS[oS[24]], SS[oS[24]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       qF(kk[-gk[136]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[-gk[136]] << kk[gk[53]], kk[gk[53]] += (kk[-gk[136]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1806. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13206-L13209` → after: `L13341-L13344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13341-L13344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13341-L13344) · [Before (L13206-L13209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13206-L13209)

```diff
-                         NH(SS[oS[66]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
-                       } while (SS[oS[24]] > oS[26]);
-                       SS[oS[31]] = -oS[2]
-                     } return SS[oS[31]] > -oS[2] && SS[oS[66]].push((SS[oS[67]] | SS[oS[31]] << SS[oS[24]]) & oS[12]), mS(SS[oS[66]])
+                         qF(kk[gk[137]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
+                       } while (kk[gk[53]] > gk[7]);
+                       kk[-gk[136]] = -gk[2]
+                     } return kk[-gk[136]] > -gk[2] && kk[gk[137]].push((kk[gk[8]] | kk[-gk[136]] << kk[gk[53]]) & gk[12]), hk(kk[gk[137]])
```

#### 1807. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13212-L13224` → after: `L13347-L13351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13347-L13351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13347-L13351) · [Before (L13212-L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13212-L13224)

```diff
-             XS(198) + oS[318] in eS && function(...SS) {
-               function HS(...SS) {
-                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = '5x_@>"v2O:[E~wu]9;<?1XRd&cDJezL4qoI#r+pgP6lGSW=`VTs3QBib*%Af(NU7){Z/FH^Chk|.$yma,tYMj!8K}n0', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[67]] = oS[1], SS[oS[9]] = oS[1], SS[oS[ … [truncated]
-                   if (SS[-oS[104]] = SS[oS[2]].indexOf(SS[oS[0]][SS[oS[103]]]), SS[-oS[104]] !== -oS[2])
-                     if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[-oS[104]];
-                     else {
-                       NH(SS[oS[26]] += SS[-oS[104]] * oS[32], SS[oS[67]] |= SS[oS[26]] << SS[oS[9]], SS[oS[9]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                       do {
-                         NH(SS[oS[16]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[9]] -= oS[11])
-                       } while (SS[oS[9]] > oS[26]);
-                       SS[oS[26]] = -oS[2]
-                     } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[67]] | SS[oS[26]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
-               }
+             Fk(199) in Dk && function(...kk) {
+               qF(kk[gk[13]] = gk[1], kk[gk[43]] = function(...kk) {
+                 function Ik(...kk) {
+                   return kk[gk[13]] = gk[2], ak(yk(tk(kk[gk[1]])))
+                 }
```

#### 1808. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13226-L13230` → after: `L13353-L13377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13353-L13377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13353-L13377) · [Before (L13226-L13230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13226-L13230)

```diff
-               function gS(...SS) {
-                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = HS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
-               }
-               SS[oS[13]] = oS[1],
-                 function(...SS) {
+                 function Xk(...kk) {
+                   return kk[gk[13]] = gk[35], ak(lk(tk(kk[gk[1]]), tk(kk[gk[2]])))
+                 }
+ 
+                 function Tk(...kk) {
+                   return kk[gk[13]] = gk[35], qk(lk(tk(kk[gk[1]]), tk(kk[gk[2]])))
+                 }
+ 
+                 function ik(...kk) {
+                   return kk[gk[13]] = gk[25], Lk(lk(tk(kk[gk[1]]), tk(kk[gk[2]])), kk[gk[35]])
+                 }
+ 
+                 function yk(...kk) {
+                   return kk[gk[13]] = gk[2], jk(sk(Zk(kk[gk[1]]), kk[gk[1]].length * gk[11]))
+                 }
+ 
+ ... (9 more added lines; see GitHub link above)
```

#### 1809. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13232-L13234` → after: `L13379-L13381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13379-L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13379-L13381) · [Before (L13232-L13234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13232-L13234)

```diff
-                     for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'DXO/uv@];P71:#kTM4(8BZg^|r[bC?itpodA65q!h*<wV.W`cR2ULQsEn}_f%xKG{y"$9j,SzN)=lJ0Y3a>&~IeFmH+', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[105]] = oS[1], SS[oS[24]] = oS[1], … [truncated]
-                       if (SS[oS[64]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[3]]]), SS[oS[64]] !== -oS[2])
-                         if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[64]];
+                     for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '$18=:7y`?|+}*lH0wd#Gha3VD,9_!KOWfcjYQ/LM2NrP;sTg4mvt@X<~bBe>x{E&k]i()IZnuRSq[A^CJ"po.zU56F%', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[-gk[141]] = [], kk[gk[101]] = gk[1], kk[gk[97]] = gk[1 … [truncated]
+                       if (kk[-gk[142]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[-gk[142]] !== -gk[2])
+                         if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[-gk[142]];
```

#### 1810. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13236` → after: `L13383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13383) · [Before (L13236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13236)

```diff
-                           NH(SS[oS[26]] += SS[oS[64]] * oS[32], SS[oS[105]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                           qF(kk[gk[7]] += kk[-gk[142]] * gk[29], kk[gk[101]] |= kk[gk[7]] << kk[gk[97]], kk[gk[97]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
```

#### 1811. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13238-L13241` → after: `L13385-L13388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13385-L13388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13385-L13388) · [Before (L13238-L13241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13238-L13241)

```diff
-                             NH(SS[oS[16]].push(SS[oS[105]] & oS[12]), SS[oS[105]] >>= oS[11], SS[oS[24]] -= oS[11])
-                           } while (SS[oS[24]] > oS[26]);
-                           SS[oS[26]] = -oS[2]
-                         } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[105]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
+                             qF(kk[-gk[141]].push(kk[gk[101]] & gk[12]), kk[gk[101]] >>= gk[11], kk[gk[97]] -= gk[11])
+                           } while (kk[gk[97]] > gk[7]);
+                           kk[gk[7]] = -gk[2]
+                         } return kk[gk[7]] > -gk[2] && kk[-gk[141]].push((kk[gk[101]] | kk[gk[7]] << kk[gk[97]]) & gk[12]), hk(kk[-gk[141]])
```

#### 1812. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13245` → after: `L13392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13392) · [Before (L13245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13245)

```diff
-                     return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = HS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+                     return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = Xk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
```

#### 1813. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13247-L13255` → after: `L13394-L13398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13394-L13398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13394-L13398) · [Before (L13247-L13255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13247-L13255)

```diff
- 
-                   function tS(...SS) {
-                     for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = [], SS[oS[0]] = oS[1], SS[-oS[99]] = SS[oS[1]].length, SS[oS[66]] = oS[19], SS[oS[44]] = oS[19]); SS[oS[0]] < SS[-oS[99]];) NH(SS[oS[66]] = SS[oS[1]].charCodeAt(SS[oS[0]]++), SS[oS[66]] >= oS[109] && SS[oS[66]] <= 56319  … [truncated]
-                     return SS[oS[2]]
-                   }
- 
-                   function bS(...HS) {
-                     for (NH(HS[oS[13]] = oS[2], HS[-oS[100]] = HS[oS[1]].length, HS[oS[14]] = -oS[2], HS[oS[4]] = oS[19], HS[oS[16]] = ""); ++HS[oS[14]] < HS[-oS[100]];) HS[oS[4]] = HS[oS[1]][HS[oS[14]]], HS[oS[4]] > 65535 && NH(HS[oS[4]] -= oS[107], HS[oS[16]] += SS[oS[5]](HS[oS … [truncated]
-                     return HS[oS[16]]
+                   Ik[gk[13]] = gk[2];
+                   try {
+                     kk[gk[43]]
+                   } catch (ik) {
+                     kk[gk[43]] = gk[1]
```

#### 1814. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13258-L13276` → after: `L13404-L13417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13404-L13417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13404-L13417) · [Before (L13258-L13276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13258-L13276)

```diff
-                   function xS(...SS) {
-                     if (SS[oS[13]] = oS[2], SS[oS[1]] >= oS[109] && SS[oS[1]] <= 57343) {
-                       function HS(...SS) {
-                         for (NH(SS[oS[13]] = oS[2], SS[-oS[101]] = 'CB0ifStz2r"jbv!moeg*_?.k)I(Z|{1l6n7M+V#T<HKW>&X4YcLsQRAuNd,aU9PDEGO^}~hpF]qwJ@8;%$=/`[3xy:5', SS[oS[98]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[98]].length, SS[oS[16]] = [], SS[oS[67]] = oS[1], SS[oS[24]] =  … [truncated]
-                           if (SS[oS[6]] = SS[-oS[101]].indexOf(SS[oS[98]][SS[-oS[111]]]), SS[oS[6]] !== -oS[2])
-                             if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
-                             else {
-                               NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[67]] |= SS[oS[31]] << SS[oS[24]], SS[oS[24]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
-                               do {
-                                 NH(SS[oS[16]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
-                               } while (SS[oS[24]] > oS[26]);
-                               SS[oS[31]] = -oS[2]
-                             } return SS[oS[31]] > -oS[2] && SS[oS[16]].push((SS[oS[67]] | SS[oS[31]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
-                       }
- 
-                       function gS(...SS) {
- ... (3 more removed lines; see GitHub link above)
+                 function qk(...Fk) {
+                   function Ik(kk) {
+                     var Fk, Ik, Xk, Tk, ik, yk, lk, ak = 'AHtVBMLZ>jxh:r2KP"&Jm#e.X3`%/,f7I|u8Os$CN{qDEg(<!TF5on_1;^zkyb=9)aSvW04@dG}[6QYwiUclR*?]~+p';
+                     for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
+                       var qk = ak.indexOf(Fk[lk]);
+                       if (qk !== -gk[2])
+                         if (yk < gk[1]) yk = qk;
+                         else {
+                           qF(yk += qk * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                           do {
+                             qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
+                           } while (ik > gk[7]);
+                           yk = -gk[2]
+                         }
```

#### 1815. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13280-L13281` → after: `L13422-L13429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13422-L13429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L13422-L13429) · [Before (L13280-L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L13280-L13281)

```diff
-                   function NS(...HS) {
-                     return HS[oS[13]] = oS[0], SS[oS[5]](HS[oS[1]] >> HS[oS[2]] & oS[23] | oS[55])
+                   function Xk(kk) {
+                     return typeof Rk[kk] === gk[14] ? Rk[kk] = Ik(Uk[kk]) : Rk[kk]
+                   }
+                   Fk[gk[13]] = gk[2];
+                   try {
+                     kk[gk[26]]
+                   } catch (ik) {
+                     kk[gk[26]] = ""
```
