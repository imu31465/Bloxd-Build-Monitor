# Changed — Bundle Modifications Report (Part 016 / 140)

- **Updated at**: `2026-11-24T11:40 JST`
- **Part**: `16 / 140` (**345** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (31kiid.1299b0d6 → fqwnlq.985c8f39 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4692 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1475. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10850` → after: `L10940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10940) · [Before (L10850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10850)

```diff
-           for (const Tk of Ik) yI(kk, Tk), Tk.VK ? Tk.VK.Dt(Fk, Xk) : console.error(new Error(`state.helditem for player ${Tk.Xu} is falsy - ${Tk.VK}`))
+           for (const bS of gS) Xg(SS, bS), bS.RD ? bS.RD.mf(HS, tS) : console.error(new Error(`state.helditem for player ${bS.AY} is falsy - ${bS.RD}`))
```

#### 1476. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10852` → after: `L10942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10942) · [Before (L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10852)

```diff
-         Ix: function(Fk, Ik) {
+         bD: function(HS, gS) {
```

#### 1477. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10854-L10855` → after: `L10944-L10945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10944-L10945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10944-L10945) · [Before (L10854-L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10854-L10855)

```diff
-             Tk = (0, MF.h)();
-           for (const ik of Ik) ik.VK ? ik.Xu === kk.oR || (0, MF.l)(ik.Xu, Tk) ? ik.VK.renderTickLocalPlayer(Fk, Xk) : ik.VK.renderTickNetworkedPlayer(Fk, Xk) : console.error(new Error(`state.helditem for player ${ik.Xu} is falsy - ${ik.VK}`))
+             bS = (0, eH.g)();
+           for (const XS of gS) XS.RD ? XS.AY === SS.HA || (0, eH.k)(XS.AY, bS) ? XS.RD.renderTickLocalPlayer(HS, tS) : XS.RD.renderTickNetworkedPlayer(HS, tS) : console.error(new Error(`state.helditem for player ${XS.AY} is falsy - ${XS.RD}`))
```

#### 1478. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10863-L10864` → after: `L10953-L10954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10953-L10954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10953-L10954) · [Before (L10863-L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10863-L10864)

```diff
-       const Jk = kk.MJ.WFk(Fk.Xu),
-         xk = kk.MJ.zFk(Fk.Xu),
+       const CS = SS.FQ.EHS(HS.AY),
+         nS = SS.FQ.aHS(HS.AY),
```

#### 1479. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10869-L10871` → after: `L10959-L10961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10959-L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10959-L10961) · [Before (L10869-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10869-L10871)

```diff
-           const Ik = kk.MJ.QFk(Fk.Xu).selectedItem;
-           wk = null === Ik || void 0 === Ik ? void 0 : Ik.typeObj, Hk = null !== (Kk = null === Ik || void 0 === Ik || null === (Qk = Ik.attributes) || void 0 === Qk || null === (sk = Qk.customAttributes) || void 0 === sk ? void 0 : sk.enchantmentTier) && void 0 !== Kk ? Kk : nul … [truncated]
-         } else Fk.networkedHeldItemName && (wk = ik.E[Fk.networkedHeldItemName], Hk = Fk.networkedHeldItemEnchantmentTier);
+           const gS = SS.FQ.IHS(HS.AY).selectedItem;
+           jS = null === gS || void 0 === gS ? void 0 : gS.typeObj, GS = null !== (QS = null === gS || void 0 === gS || null === (DS = gS.attributes) || void 0 === DS || null === (wS = DS.customAttributes) || void 0 === wS ? void 0 : wS.enchantmentTier) && void 0 !== QS ? QS : nul … [truncated]
+         } else HS.networkedHeldItemName && (jS = XS.A[HS.networkedHeldItemName], GS = HS.networkedHeldItemEnchantmentTier);
```

#### 1480. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10873` → after: `L10963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10963) · [Before (L10873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10873)

```diff
-       const Vk = xk && kk.MJ.sFk(Fk.Xu).getSelectedSlotIndex() !== Fk._lastInvenIdx,
+       const hS = nS && SS.FQ.fHS(HS.AY).getSelectedSlotIndex() !== HS._lastInvenIdx,
```

#### 1481. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10876-L10881` → after: `L10966-L10971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10966-L10971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10966-L10971) · [Before (L10876-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10876-L10881)

```diff
-       (((null === (Ik = wk) || void 0 === Ik ? void 0 : Ik.name) || null) !== Fk.heldItemName || Vk || zk) && (Fk.VK !== Fk.fistItem && ((null === (Sk = wk) || void 0 === Sk ? void 0 : Sk.meta.rootId) !== kk.bloxd.getMetaInfo(Fk.heldItemName).rootId || Vk || zk) && Fk.VK.reset(), … [truncated]
-       xk && (Fk._lastInvenIdx = kk.MJ.sFk(Fk.Xu).getSelectedSlotIndex()), Fk.heldItemName = null !== (Xk = null === (lk = wk) || void 0 === lk ? void 0 : lk.name) && void 0 !== Xk ? Xk : null, Fk.heldItemEnchantmentTier = Hk;
-       const Rk = wk && !(0, ik.B)(wk.type) ? wk.Ve : void 0,
-         Uk = Pk ? (0, bk.l)(Fk.Xu) : null,
-         Ck = Uk ? ik.E[Uk].Ve : void 0,
-         Nk = Pk && null !== (ak = null === (qk = kk.xR[kk.oR]) || void 0 === qk || null === (Lk = qk[Fk.Xu]) || void 0 === Lk ? void 0 : Lk._glowingEffect) && void 0 !== ak && ak ? uk.GLOWING_EFFECT_EMISSION : void 0;
+       (((null === (gS = jS) || void 0 === gS ? void 0 : gS.name) || null) !== HS.heldItemName || hS || ZS) && (HS.RD !== HS.fistItem && ((null === (JS = jS) || void 0 === JS ? void 0 : JS.meta.rootId) !== SS.bloxd.getMetaInfo(HS.heldItemName).rootId || hS || ZS) && HS.RD.reset(), … [truncated]
+       nS && (HS._lastInvenIdx = SS.FQ.fHS(HS.AY).getSelectedSlotIndex()), HS.heldItemName = null !== (tS = null === (NS = jS) || void 0 === NS ? void 0 : NS.name) && void 0 !== tS ? tS : null, HS.heldItemEnchantmentTier = GS;
+       const yS = jS && !(0, XS.y)(jS.type) ? jS.dK : void 0,
+         VS = PS ? (0, AS.l)(HS.AY) : null,
+         iS = VS ? XS.A[VS].dK : void 0,
+         WS = PS && null !== (qS = null === (uS = SS.rY[SS.HA]) || void 0 === uS || null === (IS = uS[HS.AY]) || void 0 === IS ? void 0 : IS._glowingEffect) && void 0 !== qS && qS ? YS.GLOWING_EFFECT_EMISSION : void 0;
```

#### 1482. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10883-L10884` → after: `L10973-L10974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10973-L10974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10973-L10974) · [Before (L10883-L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10883-L10884)

```diff
-       const ck = null !== (jk = null === (ek = kk.MJ.RFk(Fk.Xu)) || void 0 === ek ? void 0 : ek.isReplayLocalPlayer) && void 0 !== jk && jk;
-       if (Fk.Xu === kk.oR || ck) {
+       const zS = null !== (aS = null === (KS = SS.FQ.JHS(HS.AY)) || void 0 === KS ? void 0 : KS.isReplayLocalPlayer) && void 0 !== aS && aS;
+       if (HS.AY === SS.HA || zS) {
```

#### 1483. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10886-L10887` → after: `L10976-L10977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10976-L10977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10976-L10977) · [Before (L10886-L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10886-L10887)

```diff
-           AXk: Ik
-         } = kk.Xw, {
+           ztS: gS
+         } = SS.Hj, {
```

#### 1484. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10891-L10895` → after: `L10981-L10985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10981-L10985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10981-L10985) · [Before (L10891-L10895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10891-L10895)

```diff
-         } = kk.gJ;
-         Tk().copy(kk.Xw.ulk, null !== Nk && void 0 !== Nk ? Nk : Tk().ZERO);
-         const ak = Pk ? Xk : null,
-           qk = Pk && "number" === typeof yk ? yk : null,
-           Lk = Pk && "number" === typeof lk ? lk : null,
+         } = SS.RP;
+         bS().copy(SS.Hj.wNS, null !== WS && void 0 !== WS ? WS : bS().ZERO);
+         const qS = PS ? tS : null,
+           uS = PS && "number" === typeof xS ? xS : null,
+           IS = PS && "number" === typeof NS ? NS : null,
```

#### 1485. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10897` → after: `L10987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10987) · [Before (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10897)

```diff
-             const Ik = Fk && !(0, ik.B)(Fk.type) ? aI(Fk) : null,
+             const gS = HS && !(0, XS.y)(HS.type) ? Ng(HS) : null,
```

#### 1486. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10899` → after: `L10989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10989) · [Before (L10899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10899)

```diff
-               yk = Xk ? aI(ik.E[Xk]) : null;
+               xS = tS ? Ng(XS.A[tS]) : null;
```

#### 1487. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10907-L10908` → after: `L10997-L10998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10997-L10998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L10997-L10998) · [Before (L10907-L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10907-L10908)

```diff
-           }(Fk.Xu, wk) : null;
-         if (Zk ? (kk.Xw.blk = null !== qk && void 0 !== qk ? qk : Zk.range, kk.Xw.plk = null !== Lk ? TI(Lk) : Zk.coneCos) : (kk.Xw.blk = null !== qk && void 0 !== qk ? qk : 0, kk.Xw.plk = 0), ak) Tk().scale(Ik, (0, tk.W)(ak), 15);
+           }(HS.AY, jS) : null;
+         if (kS ? (SS.Hj.hNS = null !== uS && void 0 !== uS ? uS : kS.range, SS.Hj.QNS = null !== IS ? tg(IS) : kS.coneCos) : (SS.Hj.hNS = null !== uS && void 0 !== uS ? uS : 0, SS.Hj.QNS = 0), qS) bS().scale(gS, (0, fS.K)(qS), 15);
```

#### 1488. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10912-L10913` → after: `L11002-L11003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11002-L11003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11002-L11003) · [Before (L10912-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10912-L10913)

```diff
-             ulk: Fk
-           } = kk.Xw;
+             wNS: HS
+           } = SS.Hj;
```

#### 1489. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10921` → after: `L11011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11011) · [Before (L10921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10921)

```diff
-       if (!kk || void 0 === kk.spotlightRange || !kk.Ve) return null;
+       if (!SS || void 0 === SS.spotlightRange || !SS.dK) return null;
```

#### 1490. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10924` → after: `L11014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11014) · [Before (L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10924)

```diff
-         colour: kk.Ve,
+         colour: SS.dK,
```

#### 1491. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10930` → after: `L11020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11020) · [Before (L10930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10930)

```diff
-   38369: (kk, Fk, Ik) => {
+   38424: (SS, HS, gS) => {
```

#### 1492. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10932` → after: `L11022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11022) · [Before (L10932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10932)

```diff
-       d: () => Sk,
+       b: () => OS,
```

#### 1493. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10935-L10940` → after: `L11025-L11030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11025-L11030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11025-L11030) · [Before (L10935-L10940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10935-L10940)

```diff
-     var Xk = Ik(38066),
-       Tk = Ik(37794),
-       ik = Ik(37866),
-       yk = Ik(3631),
-       lk = Ik(187),
-       ak = Ik(354),
+     var tS = gS(38077),
+       bS = gS(37806),
+       XS = gS(37900),
+       xS = gS(3811),
+       NS = gS(198),
+       qS = gS(402),
```

#### 1494. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10942-L10953` → after: `L11032-L11043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11032-L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11032-L11043) · [Before (L10942-L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10942-L10953)

```diff
-       Lk = Ik(38022),
-       tk = Ik(36772),
-       Zk = Ik(36764),
-       jk = Ik(37909),
-       ek = Ik(337),
-       wk = Ik(34),
-       Hk = Ik(2700),
-       Jk = Ik(37992),
-       xk = Ik(38156),
-       Pk = Ik(38153),
-       Kk = Ik(3702),
-       Qk = Ik(1217);
+       IS = gS(38045),
+       fS = gS(36773),
+       kS = gS(36771),
+       aS = gS(37944),
+       KS = gS(387),
+       jS = gS(31),
+       GS = gS(2910),
+       CS = gS(38013),
+       nS = gS(38198),
+       PS = gS(38190),
+       QS = gS(3870),
+       DS = gS(1309);
```

#### 1495. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10955` → after: `L11045-L11047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11045-L11047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11045-L11047) · [Before (L10955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10955)

```diff
-     const Vk = ["length", 0, 1, 2, 3, "a", 8, 16, 180, 130, "GyYzv8", 512, 212, "012345", 4, 118, 15, "c", "f", 202, "e", 6, 139, "d", 1023, 63, 128, 12, "b", 206, 255, 161, 32, 5, 24, 7, 18, 10, 19, 64, 65535, void 0, null, 171];
+     const hS = ["length", 0, 2, 4, 3, 146, 1, "a", 33554432, 67108864, "b", "d", "e", 5, !1, 6, 68, 13, void 0, 7, 19, null, 26, 8];
+ 
+     function ZS() {}
```

#### 1496. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10960-L11097` → after: `L11052-L11053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11052-L11053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11052-L11053) · [Before (L10960-L11097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L10960-L11097)

```diff
-     "N0NAfl" in function() {} && function() {
-       var kk = function(...kk) {
-         function Fk(...kk) {
-           return kk[Vk[0]] = Vk[2], lk(ik(Lk(kk[Vk[1]])))
-         }
- 
-         function Ik(...kk) {
-           return kk[Vk[0]] = Vk[3], lk(yk(Lk(kk[Vk[1]]), Lk(kk[Vk[2]])))
-         }
- 
-         function Xk(...kk) {
-           return kk[Vk[0]] = Vk[3], ak(yk(Lk(kk[Vk[1]]), Lk(kk[Vk[2]])))
-         }
- 
-         function Tk(...kk) {
-           return kk[Vk[0]] = Vk[4], qk(yk(Lk(kk[Vk[1]]), Lk(kk[Vk[2]])), kk[Vk[3]])
- ... (122 more removed lines; see GitHub link above)
+     "Mwy3xzm" in ZS && function(...SS) {
+       SS[hS[0]] = hS[1]
```

#### 1497. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11099-L11108` → after: `L11055-L11070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11055-L11070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11055-L11070) · [Before (L11099-L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11099-L11108)

```diff
-       zk(kk[Vk[0]] = Vk[14], kk[Vk[5]] = Vk[41], kk[Vk[28]] = Vk[41], kk[Vk[43]] = Vk[41], kk[Vk[23]] = Vk[41], kk[Vk[20]] = Vk[41]);
-       const Fk = (0, Hk[Vk[17]])().client.getMsgHandler().sIk.state.tickCounter;
-       (0, yk.sendColyMessage)(Kk.Wg, {
-         tL: kk[Vk[1]],
-         ZL: (kk[Vk[5]] = lk[Vk[18]].lifeformMeshToBodyPart[kk[Vk[2]] === Vk[42] || void 0 === kk[Vk[2]] || (kk[Vk[28]] = kk[Vk[2]].split("|")) === Vk[42] || void 0 === kk[Vk[28]] ? void 0 : kk[Vk[28]][Vk[1]]]) !== Vk[42] && void 0 !== kk[Vk[5]] ? kk[Vk[5]] : Vk[42],
-         ey: kk[Vk[3]],
-         aq: (kk[Vk[43]] = (kk[Vk[23]] = kk[Vk[4]].MJ.QFk(kk[Vk[4]].oR)) === Vk[42] || void 0 === kk[Vk[23]] || (kk[Vk[20]] = kk[Vk[23]].inventory.getItemAtSelectedSlot()) === Vk[42] || void 0 === kk[Vk[20]] ? void 0 : kk[Vk[20]].name) !== Vk[42] && void 0 !== kk[Vk[43]] ? kk[Vk[4 … [truncated]
-         jL: Qk.D,
-         eL: Fk,
-         wL: Ek
+       SS[hS[0]] = hS[3], "ac3t3OC" in ZS && function(...SS) {
+         JS(SS[hS[0]] = hS[1], SS[-hS[17]] = function(...HS) {
+           return JS(HS[hS[0]] = hS[4], HS[hS[4]] = {}), HS[hS[2]].length !== HS[hS[1]].length + HS[hS[6]].length ? hS[14] : SS[hS[6]](HS[hS[1]], HS[hS[6]], HS[hS[2]], hS[1], hS[1], hS[1], HS[hS[4]])
+         }, SS[hS[6]] = function(...HS) {
+           return JS(HS[hS[0]] = hS[19], HS[-hS[16]] = hS[14]), HS[hS[13]] >= HS[hS[2]].length || (HS[hS[15]]["" + HS[hS[4]] + HS[hS[3]] + HS[hS[13]]] !== hS[18] ? HS[hS[15]]["" + HS[hS[4]] + HS[hS[3]] + HS[hS[13]]] : (HS[hS[2]][HS[hS[13]]] === HS[hS[1]][HS[hS[4]]] && HS[hS[2]][HS … [truncated]
+         }, console.log(SS[-hS[17]]))
+       }(), JS(SS[-hS[20]] = hS[18], SS[hS[10]] = hS[18], SS[hS[22]] = hS[18], SS[hS[19]] = hS[18], SS[hS[23]] = hS[18]);
+       const HS = (0, GS[hS[10]])().client.getMsgHandler().agS.state.tickCounter;
+       (0, xS.sendColyMessage)(QS.yh, {
+         fI: SS[hS[1]],
+         kI: (SS[-hS[20]] = NS[hS[12]].lifeformMeshToBodyPart[SS[hS[6]] === hS[21] || void 0 === SS[hS[6]] || (SS[hS[10]] = SS[hS[6]].split("|")) === hS[21] || void 0 === SS[hS[10]] ? void 0 : SS[hS[10]][hS[1]]]) !== hS[21] && void 0 !== SS[-hS[20]] ? SS[-hS[20]] : hS[21],
+         Gx: SS[hS[2]],
+         qu: (SS[hS[22]] = (SS[hS[19]] = SS[hS[4]].FQ.IHS(SS[hS[4]].HA)) === hS[21] || void 0 === SS[hS[19]] || (SS[hS[23]] = SS[hS[19]].inventory.getItemAtSelectedSlot()) === hS[21] || void 0 === SS[hS[23]] ? void 0 : SS[hS[23]].name) !== hS[21] && void 0 !== SS[hS[22]] ? SS[hS[2 … [truncated]
+         aI: DS.D,
+         KI: HS,
+         jI: cS
```

#### 1498. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11111` → after: `L11073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11073) · [Before (L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11111)

```diff
-     class Sk extends Pk.d {
+     class OS extends PS.c {
```

#### 1499. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11113` → after: `L11075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11075) · [Before (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11113)

```diff
-         super(kk, Fk, Ik, Xk), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
+         super(SS, HS, gS, tS), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
```

#### 1500. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11123` → after: `L11085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11085) · [Before (L11123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11123)

```diff
-         super.reset(), this.heldItemState.Xu === this.qZ.oR && this.breakingParticles.Dt(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
+         super.reset(), this.heldItemState.AY === this.qk.HA && this.breakingParticles.mf(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
```

#### 1501. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11125` → after: `L11087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11087) · [Before (L11125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11125)

```diff
-       CIk() {
+       cgS() {
```

#### 1502. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11127` → after: `L11089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11089) · [Before (L11127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11127)

```diff
-         const Tk = super.CIk(),
+         const bS = super.cgS(),
```

#### 1503. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11132-L11134` → after: `L11094-L11096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11094-L11096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11094-L11096) · [Before (L11132-L11134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11132-L11134)

```diff
-             zC: ak
-           } = this.zqk();
-         if (yk && !Tk.preventAttack) return this.zTk(ik, yk, lk, ak), this.Sqk(ik, yk), {
+             JV: qS
+           } = this.guS();
+         if (xS && !bS.preventAttack) return this.CbS(XS, xS, NS, qS), this.tuS(XS, xS), {
```

#### 1504. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11138-L11141` → after: `L11100-L11103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11100-L11103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11100-L11103) · [Before (L11138-L11141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11138-L11141)

```diff
-         const qk = null !== (kk = null === (Fk = this.qZ.Vkk) || void 0 === Fk ? void 0 : Fk.position) && void 0 !== kk ? kk : null,
-           Lk = null !== (Ik = null === (Xk = this.qZ.Vkk) || void 0 === Xk ? void 0 : Xk.YM) && void 0 !== Ik ? Ik : null,
-           tk = this.qZ.MJ.QFk(this.qZ.oR);
-         if (!tk || !this.qZ.gJ.canAltAction) return {
+         const uS = null !== (SS = null === (HS = this.qk.ISS) || void 0 === HS ? void 0 : HS.position) && void 0 !== SS ? SS : null,
+           IS = null !== (gS = null === (tS = this.qk.ISS) || void 0 === tS ? void 0 : tS.Rl) && void 0 !== gS ? gS : null,
+           fS = this.qk.FQ.IHS(this.qk.HA);
+         if (!fS || !this.qk.RP.canAltAction) return {
```

#### 1505. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11146` → after: `L11108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11108) · [Before (L11146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11146)

```diff
-           jk = new xk.d(this, null, null, qk, Lk, Zk).performPrimaryFire();
+           aS = new nS.e(this, null, null, uS, IS, kS).performPrimaryFire();
```

#### 1506. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11149` → after: `L11111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11111) · [Before (L11149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11149)

```diff
-       NIk() {
+       vgS() {
```

#### 1507. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11154-L11156` → after: `L11116-L11118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11116-L11118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11116-L11118) · [Before (L11154-L11156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11154-L11156)

```diff
-           zC: Xk
-         } = this.zqk(), Tk = super.NIk();
-         return Fk && !Tk.preventAttack && (this.zTk(kk, Fk, Ik, Xk), this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging()), Tk
+           JV: tS
+         } = this.guS(), bS = super.vgS();
+         return HS && !bS.preventAttack && (this.CbS(SS, HS, gS, tS), this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging()), bS
```

#### 1508. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11158` → after: `L11120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11120) · [Before (L11158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11158)

```diff
-       UIk() {
+       dgS() {
```

#### 1509. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11162-L11163` → after: `L11124-L11125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11124-L11125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11124-L11125) · [Before (L11162-L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11162-L11163)

```diff
-         } = this.zqk();
-         return Fk ? this.Sqk(kk, Fk) : this.breakingStart(), !0
+         } = this.guS();
+         return HS ? this.tuS(SS, HS) : this.breakingStart(), !0
```

#### 1510. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11170-L11172` → after: `L11132-L11134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11132-L11134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11132-L11134) · [Before (L11170-L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11170-L11172)

```diff
-           zC: Xk
-         } = this.zqk();
-         return !(!Fk || !this.canAttack(Fk)) && (this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), this.zTk(kk, Fk, Ik, Xk), !0)
+           JV: tS
+         } = this.guS();
+         return !(!HS || !this.canAttack(HS)) && (this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), this.CbS(SS, HS, gS, tS), !0)
```

#### 1511. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11177` → after: `L11139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11139) · [Before (L11177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11177)

```diff
-           qZ: Xk
+           qk: tS
```

#### 1512. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11179` → after: `L11141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11141) · [Before (L11179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11179)

```diff
-         return null !== (Fk = null === (Ik = Xk.xR[Xk.oR][kk]) || void 0 === Ik ? void 0 : Ik.canAttack) && void 0 !== Fk && Fk
+         return null !== (HS = null === (gS = tS.rY[tS.HA][SS]) || void 0 === gS ? void 0 : gS.canAttack) && void 0 !== HS && HS
```

#### 1513. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11181` → after: `L11143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11143) · [Before (L11181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11181)

```diff
-       zTk(kk, Fk, Ik, Xk) {
+       CbS(SS, HS, gS, tS) {
```

#### 1514. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11183` → after: `L11145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11145) · [Before (L11183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11183)

```diff
-           qZ: Tk
+           qk: bS
```

#### 1515. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11185` → after: `L11147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11147) · [Before (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11185)

```diff
-         this.canAttack(Fk) && (sk(Fk, Ik, kk, Tk), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", Tk.oR, Fk, [Xk[0], Xk[1], Xk[2]]))
+         this.canAttack(HS) && (wS(HS, gS, SS, bS), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", bS.HA, HS, [tS[0], tS[1], tS[2]]))
```

#### 1516. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11187` → after: `L11149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11149) · [Before (L11187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11187)

```diff
-       zqk() {
+       guS() {
```

#### 1517. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11189-L11191` → after: `L11151-L11153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11151-L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11151-L11153) · [Before (L11189-L11191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11189-L11191)

```diff
-         const Xk = null !== (kk = this.qZ.Wkk) && void 0 !== kk ? kk : this.qZ.camera.Am(),
-           Tk = null !== (Fk = null === (Ik = this.qZ.MJ.QFk(this.qZ.oR)) || void 0 === Ik ? void 0 : Ik.inventory.getItemAtSelectedSlot()) && void 0 !== Fk ? Fk : null,
-           ik = this.bloxd.getAttackRangeFromHeldItem(this.qZ.oR, Tk),
+         const tS = null !== (SS = this.qk.cSS) && void 0 !== SS ? SS : this.qk.camera.uR(),
+           bS = null !== (HS = null === (gS = this.qk.FQ.IHS(this.qk.HA)) || void 0 === gS ? void 0 : gS.inventory.getItemAtSelectedSlot()) && void 0 !== HS ? HS : null,
+           XS = this.bloxd.getAttackRangeFromHeldItem(this.qk.HA, bS),
```

#### 1518. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11198` → after: `L11160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11160) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11198)

```diff
-         return yk === Lk.c.HIT_ENTITY ? {
+         return xS === IS.e.HIT_ENTITY ? {
```

#### 1519. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11202` → after: `L11164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11164) · [Before (L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11202)

```diff
-           zC: ak
+           JV: qS
```

#### 1520. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11207` → after: `L11169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11169) · [Before (L11207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11207)

```diff
-           zC: null
+           JV: null
```

#### 1521. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11210` → after: `L11172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11172) · [Before (L11210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11210)

```diff
-       Sqk(kk, Fk) {
+       tuS(SS, HS) {
```

#### 1522. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11213` → after: `L11175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11175) · [Before (L11213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11213)

```diff
-           qZ: ik
+           qk: XS
```

#### 1523. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11215-L11218` → after: `L11177-L11180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11177-L11180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11177-L11180) · [Before (L11215-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11215-L11218)

```diff
-         (0, yk.sendColyMessage)(Kk.Jf, {
-           lq: Fk,
-           ey: kk,
-           aq: null !== (Ik = null === (Xk = ik.MJ.QFk(ik.oR)) || void 0 === Xk || null === (Tk = Xk.inventory.getItemAtSelectedSlot()) || void 0 === Tk ? void 0 : Tk.name) && void 0 !== Ik ? Ik : null
+         (0, xS.sendColyMessage)(QS.lg, {
+           Nu: HS,
+           Gx: SS,
+           qu: null !== (gS = null === (tS = XS.FQ.IHS(XS.HA)) || void 0 === tS || null === (bS = tS.inventory.getItemAtSelectedSlot()) || void 0 === bS ? void 0 : bS.name) && void 0 !== gS ? gS : null
```

#### 1524. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11222-L11224` → after: `L11184-L11186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11184-L11186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11184-L11186) · [Before (L11222-L11224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11222-L11224)

```diff
-         const kk = this.qZ.vkk;
-         kk && !(0, Hk.c)().posSatisfiesModifyConstraints(this.qZ.oR, kk.position[0], kk.position[1], kk.position[2]) && (this.qZ.gJ.canChange || this.qZ.gJ.cantBreakError || "You cannot modify this block" !== this.qZ.gJ.cantChangeError) && wk.g.GL("showBottomMessage", {
-           message: this.qZ.gJ.cantBreakError || this.qZ.gJ.cantChangeError,
+         const SS = this.qk.KSS;
+         SS && !(0, GS.b)().posSatisfiesModifyConstraints(this.qk.HA, SS.position[0], SS.position[1], SS.position[2]) && (this.qk.RP.canChange || this.qk.RP.cantBreakError || "You cannot modify this block" !== this.qk.RP.cantChangeError) && jS.k.cj("showBottomMessage", {
+           message: this.qk.RP.cantBreakError || this.qk.RP.cantChangeError,
```

#### 1525. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11229` → after: `L11191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11191) · [Before (L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11229)

```diff
-         if (this.heldItemState.Xu !== this.qZ.oR) return !1;
+         if (this.heldItemState.AY !== this.qk.HA) return !1;
```

#### 1526. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11231` → after: `L11193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11193) · [Before (L11231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11231)

```diff
-         return this.attemptingToBreak && (Ik = this.breakBlock(Fk)), this.breakingParticles.Dt(Ik), this.successfullyBreakingBlockLastTick = Ik, Ik
+         return this.attemptingToBreak && (gS = this.breakBlock(HS)), this.breakingParticles.mf(gS), this.successfullyBreakingBlockLastTick = gS, gS
```

#### 1527. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11234` → after: `L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11196) · [Before (L11234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11234)

```diff
-         super.renderTickLocalPlayer(kk, Fk), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + kk / ek.f.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - kk / 1500, 0)
+         super.renderTickLocalPlayer(SS, HS), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + SS / KS.d.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - SS / 1500, 0)
```

#### 1528. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11236-L11237` → after: `L11198-L11199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11198-L11199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11198-L11199) · [Before (L11236-L11237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11236-L11237)

```diff
-       bIk() {
-         super.bIk();
+       JgS() {
+         super.JgS();
```

#### 1529. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11245` → after: `L11207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11207) · [Before (L11245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11245)

```diff
-         this.targetedPosition = null, this.targetedStartTime = kk, this.lastBreakingSoundTime = Math.min(kk - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.Av(!1), this.currBreakingMesh = null)
+         this.targetedPosition = null, this.targetedStartTime = SS, this.lastBreakingSoundTime = Math.min(SS - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.MJ(!1), this.currBreakingMesh = null)
```

#### 1530. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11249` → after: `L11211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11211) · [Before (L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11249)

```diff
-         const Ik = (0, Hk.c)().getInvenHeldItem(this.qZ.oR);
+         const gS = (0, GS.b)().getInvenHeldItem(this.qk.HA);
```

#### 1531. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11251-L11257` → after: `L11213-L11219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11213-L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11213-L11219) · [Before (L11251-L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11251-L11257)

```diff
-         const lk = null === (Fk = this.qZ.vkk) || void 0 === Fk ? void 0 : Fk.position;
-         if (!lk || !(0, Hk.c)().posSatisfiesModifyConstraints(this.qZ.oR, lk[0], lk[1], lk[2])) return this.resetTargetedBlock(kk), !1;
-         if (this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), !this.targetedPosition !== !lk || !qk().exactEquals(this.targetedPosition, lk)) return this.resetTargetedBlock(kk), this.targetedPosition = qk().copy(this._targetedPosition, lk), (0, yk.sendColyMessage)(Kk._i … [truncated]
-         const ak = (0, Hk.c)().getMetaInfo(this.qZ.QJ(this.targetedPosition)).rootId;
-         let Lk = Tk.E[ak].ttb;
-         if (this.qZ.gJ.creative) {
-           if (this.qZ.gJ.creative) {
+         const NS = null === (HS = this.qk.KSS) || void 0 === HS ? void 0 : HS.position;
+         if (!NS || !(0, GS.b)().posSatisfiesModifyConstraints(this.qk.HA, NS[0], NS[1], NS[2])) return this.resetTargetedBlock(SS), !1;
+         if (this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), !this.targetedPosition !== !NS || !uS().exactEquals(this.targetedPosition, NS)) return this.resetTargetedBlock(SS), this.targetedPosition = uS().copy(this._targetedPosition, NS), (0, xS.sendColyMessage)(QS.Hj … [truncated]
+         const qS = (0, GS.b)().getMetaInfo(this.qk.pC(this.targetedPosition)).rootId;
+         let IS = bS.A[qS].ttb;
+         if (this.qk.RP.creative) {
+           if (this.qk.RP.creative) {
```

#### 1532. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11259` → after: `L11221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11221) · [Before (L11259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11259)

```diff
-             Fk > 20 * ik.f ? Lk *= 1 / 6 : Fk > 6 * ik.f ? Lk *= 1 / 3 : Fk > 4 * ik.f ? Lk *= .5 : Fk > 2 * ik.f && (Lk *= 2 / 3)
+             HS > 20 * XS.e ? IS *= 1 / 6 : HS > 6 * XS.e ? IS *= 1 / 3 : HS > 4 * XS.e ? IS *= .5 : HS > 2 * XS.e && (IS *= 2 / 3)
```

#### 1533. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11262-L11264` → after: `L11224-L11226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11224-L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11224-L11226) · [Before (L11262-L11264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11262-L11264)

```diff
-           const kk = (0, Hk.c)().getBlockTypeIsHarvestable(this.qZ.oR, ak);
-           kk || (Lk *= 2.5), this.toolType === this.bloxd.getItemStat(this.qZ.oR, ak, "harvestType") && kk && (Lk *= 1 / this.toolMultiplier);
-           Lk *= ek.f.getBreakSpeedMultiplier(Ik) * ek.f.getMomentumMultiplier(Ik, this.momentumFrac)
+           const SS = (0, GS.b)().getBlockTypeIsHarvestable(this.qk.HA, qS);
+           SS || (IS *= 2.5), this.toolType === this.bloxd.getItemStat(this.qk.HA, qS, "harvestType") && SS && (IS *= 1 / this.toolMultiplier);
+           IS *= KS.d.getBreakSpeedMultiplier(gS) * KS.d.getMomentumMultiplier(gS, this.momentumFrac)
```

#### 1534. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11270-L11271` → after: `L11232-L11233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11232-L11233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11232-L11233) · [Before (L11270-L11271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11270-L11271)

```diff
-           const Fk = (0, tk.f)(`step_${(0,Jk.d)(ak,!1)}`);
-           Zk.d.play(Fk, .3).rate(.5)
+           const HS = (0, fS.e)(`step_${(0,CS.d)(qS,!1)}`);
+           kS.e.play(HS, .3).rate(.5)
```

#### 1535. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11273` → after: `L11235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11235) · [Before (L11273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11273)

```diff
-         return this.currBreakingMesh && wk === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.Av(!1), wk < 10 ? (this.currBreakingMesh = (0, Xk.c)(this.qZ, this.targetedPosition, wk), this.currBreakingStage = wk) : ((0, Tk.i)(lk), this.resetTargetedBloc … [truncated]
+         return this.currBreakingMesh && jS === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.MJ(!1), jS < 10 ? (this.currBreakingMesh = (0, tS.d)(this.qk, this.targetedPosition, jS), this.currBreakingStage = jS) : ((0, bS.g)(NS), this.resetTargetedBloc … [truncated]
```

#### 1536. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11285` → after: `L11247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11247) · [Before (L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11285)

```diff
-   38153: (kk, Fk, Ik) => {
+   38190: (SS, HS, gS) => {
```

#### 1537. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11287` → after: `L11249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11249) · [Before (L11287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11287)

```diff
-       d: () => sk
+       c: () => wS
```

#### 1538. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11289-L11306` → after: `L11251-L11268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11251-L11268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11251-L11268) · [Before (L11289-L11306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11289-L11306)

```diff
-     var Xk = Ik(38195),
-       Tk = Ik(1217),
-       ik = Ik(38204),
-       yk = Ik(9223),
-       lk = Ik(9183),
-       ak = Ik(187),
-       qk = Ik(37455),
-       Lk = Ik(38156),
-       tk = Ik(37447),
-       Zk = Ik(34),
-       jk = Ik(2700),
-       ek = Ik(1301),
-       wk = Ik(38185),
-       Hk = Ik(37657),
-       Jk = Ik(37438),
-       xk = Ik(38353),
- ... (2 more removed lines; see GitHub link above)
+     var tS = gS(38230),
+       bS = gS(1309),
+       XS = gS(38242),
+       xS = gS(9395),
+       NS = gS(9361),
+       qS = gS(198),
+       uS = gS(37432),
+       IS = gS(38198),
+       fS = gS(37422),
+       kS = gS(31),
+       aS = gS(2910),
+       KS = gS(1400),
+       jS = gS(38221),
+       GS = gS(37648),
+       CS = gS(37419),
+       nS = gS(38416),
+ ... (2 more added lines; see GitHub link above)
```

#### 1539. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11310` → after: `L11272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11272) · [Before (L11310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11310)

```diff
-         this.qZ = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, jk.c)(), this.pickActionHelper = void 0, this.typeObj = null, this.Ckk = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
+         this.qk = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, aS.b)(), this.pickActionHelper = void 0, this.typeObj = null, this.JSS = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
```

#### 1540. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11315` → after: `L11277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11277) · [Before (L11315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11315)

```diff
-         this.qZ.okk(!0), this.typeObj = kk, this.enchantmentTier = Fk
+         this.qk.aSS(!0), this.typeObj = SS, this.enchantmentTier = HS
```

#### 1541. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11317` → after: `L11279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11279) · [Before (L11317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11317)

```diff
-       Kqk() {
+       eqS() {
```

#### 1542. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11320` → after: `L11282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11282) · [Before (L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11320)

```diff
-       Qqk() {}
+       rqS() {}
```

#### 1543. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11328` → after: `L11290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11290) · [Before (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11328)

```diff
-         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.Xu === this.qZ.oR && this.qZ.camera.JY <= 1 && !tk.b.isCameraDetachedFromPlayer(this.qZ)
+         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.AY === this.qk.HA && this.qk.camera.oB <= 1 && !fS.c.isCameraDetachedFromPlayer(this.qk)
```

#### 1544. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11331` → after: `L11293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11293) · [Before (L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11331)

```diff
-         return this.isFirstPersonLocalPlayer() || this.heldItemState.Xu === this.qZ.oR && tk.b.isCameraDetachedFromPlayer(this.qZ)
+         return this.isFirstPersonLocalPlayer() || this.heldItemState.AY === this.qk.HA && fS.c.isCameraDetachedFromPlayer(this.qk)
```

#### 1545. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11333-L11334` → after: `L11295-L11296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11295-L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11295-L11296) · [Before (L11333-L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11333-L11334)

```diff
-       CIk() {
-         return sk.clearSecondaryDownFireTimeout(), this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), {
+       cgS() {
+         return wS.clearSecondaryDownFireTimeout(), this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), {
```

#### 1546. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11342` → after: `L11304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11304) · [Before (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11342)

```diff
-       bIk() {
+       JgS() {
```

#### 1547. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11348` → after: `L11310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11310) · [Before (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11348)

```diff
-       Vqk() {
+       HuS() {
```

#### 1548. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11354` → after: `L11316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11316) · [Before (L11354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11354)

```diff
-               this.sqk().once || Fk()
+               this.SuS().once || HS()
```

#### 1549. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11358` → after: `L11320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11320) · [Before (L11358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11358)

```diff
-         const Ik = this.sqk();
+         const gS = this.SuS();
```

#### 1550. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11361` → after: `L11323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11323) · [Before (L11361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11361)

```diff
-       sqk() {
+       SuS() {
```

#### 1551. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11364` → after: `L11326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11326) · [Before (L11364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11364)

```diff
-       uIk() {
+       ZgS() {
```

#### 1552. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11373-L11375` → after: `L11335-L11337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11335-L11337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11335-L11337) · [Before (L11373-L11375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11373-L11375)

```diff
-           qZ: Ik
-         } = this, ik = Ik.gJ.canUseDevCreativeItems, yk = null === (Fk = this.bloxd.getItemStat(Ik.oR, kk, "showInCreativeInven")) || void 0 === Fk || Fk;
-         return !(0, Xk.d)(kk, (0, Tk.K)((0, ek.d)().lobbyName), yk, ik)
+           qk: gS
+         } = this, XS = gS.RP.canUseDevCreativeItems, xS = null === (HS = this.bloxd.getItemStat(gS.HA, SS, "showInCreativeInven")) || void 0 === HS || HS;
+         return !(0, tS.e)(SS, (0, bS.P)((0, KS.e)().lobbyName), xS, XS)
```

#### 1553. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11377` → after: `L11339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11339) · [Before (L11377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11377)

```diff
-       oqk() {
+       buS() {
```

#### 1554. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11380` → after: `L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11342) · [Before (L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11380)

```diff
-           qZ: kk
+           qk: SS
```

#### 1555. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11382-L11385` → after: `L11344-L11347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11344-L11347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11344-L11347) · [Before (L11382-L11385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11382-L11385)

```diff
-         if (kk.gJ.creative && kk.gJ.canPickBlocks && kk.MJ.Ukk(kk.oR, "inventory") && null !== kk.Vkk) {
-           const Ik = kk.Vkk.YM,
-             Tk = (0, ik.e)(Ik) ? yk.q : this.bloxd.getMetaInfo(Ik).rootName,
-             lk = Xk.c.indexOf(Tk);
+         if (SS.RP.creative && SS.RP.canPickBlocks && SS.FQ.ZSS(SS.HA, "inventory") && null !== SS.ISS) {
+           const gS = SS.ISS.Rl,
+             bS = (0, XS.h)(gS) ? xS.t : this.bloxd.getMetaInfo(gS).rootName,
+             NS = tS.d.indexOf(bS);
```

#### 1556. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11387` → after: `L11349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11349) · [Before (L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11387)

```diff
-             const Ik = kk.MJ.VFk(kk.oR),
+             const gS = SS.FQ.kHS(SS.HA),
```

#### 1557. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11389` → after: `L11351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11351) · [Before (L11389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11389)

```diff
-               ik = this.qZ.MJ.QFk(this.qZ.oR);
+               XS = this.qk.FQ.IHS(this.qk.HA);
```

#### 1558. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11394` → after: `L11356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11356) · [Before (L11394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11394)

```diff
-               if ((null === (Fk = yk[kk]) || void 0 === Fk ? void 0 : Fk.name) === Tk) return Zk.g.GL("setSelectedInventorySlotI", kk, !0), !0
+               if ((null === (HS = xS[SS]) || void 0 === HS ? void 0 : HS.name) === bS) return kS.k.cj("setSelectedInventorySlotI", SS, !0), !0
```

#### 1559. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11405` → after: `L11367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11367) · [Before (L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11405)

```diff
-       NIk() {
+       vgS() {
```

#### 1560. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11407` → after: `L11369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11369) · [Before (L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11407)

```diff
-         return this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), kk
+         return this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), SS
```

#### 1561. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11410-L11411` → after: `L11372-L11373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11372-L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11372-L11373) · [Before (L11410-L11411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11410-L11411)

```diff
-         const kk = this.nIk();
-         return kk.tookAction && this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), kk
+         const SS = this.DgS();
+         return SS.tookAction && this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), SS
```

#### 1562. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11414-L11415` → after: `L11376-L11377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11376-L11377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11376-L11377) · [Before (L11414-L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11414-L11415)

```diff
-         const kk = this.qZ.MJ.QFk(this.qZ.oR);
-         if (!kk || !this.qZ.gJ.canAltAction) return {
+         const SS = this.qk.FQ.IHS(this.qk.HA);
+         if (!SS || !this.qk.RP.canAltAction) return {
```

#### 1563. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11419-L11420` → after: `L11381-L11382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11381-L11382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11381-L11382) · [Before (L11419-L11420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11419-L11420)

```diff
-         const Fk = this.qZ.Vkk;
-         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.qZ.oR, null === Fk || void 0 === Fk ? void 0 : Fk.position[0], null === Fk || void 0 === Fk ? void 0 : Fk.position[1], null === Fk || void 0 === Fk ? void 0 : Fk.position[2], Fk … [truncated]
+         const HS = this.qk.ISS;
+         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.qk.HA, null === HS || void 0 === HS ? void 0 : HS.position[0], null === HS || void 0 === HS ? void 0 : HS.position[1], null === HS || void 0 === HS ? void 0 : HS.position[2], HS … [truncated]
```

#### 1564. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11424-L11425` → after: `L11386-L11387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11386-L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11386-L11387) · [Before (L11424-L11425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11424-L11425)

```diff
-         const Ik = new Lk.d(this, null, null, null, null, kk.selectedItem).performGliderBoost();
-         return Ik.tookAction && this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), Ik
+         const gS = new IS.e(this, null, null, null, null, SS.selectedItem).performGliderBoost();
+         return gS.tookAction && this.qk.FQ.uHS(this.heldItemState.AY).setArmsAreSwinging(), gS
```

#### 1565. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11429-L11431` → after: `L11391-L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11391-L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11391-L11393) · [Before (L11429-L11431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11429-L11431)

```diff
-         if (!this.qZ.Vkk) return !1;
-         const Fk = this.qZ.Vkk.YM;
-         return null !== (kk = lk.g[Fk].canBePlacedOver) && void 0 !== kk && kk
+         if (!this.qk.ISS) return !1;
+         const HS = this.qk.ISS.Rl;
+         return null !== (SS = NS.j[HS].canBePlacedOver) && void 0 !== SS && SS
```

#### 1566. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11433` → after: `L11395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11395) · [Before (L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11433)

```diff
-       nIk() {
+       DgS() {
```

#### 1567. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11435-L11436` → after: `L11397-L11398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11397-L11398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11397-L11398) · [Before (L11435-L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11435-L11436)

```diff
-         const Xk = this.qZ.MJ.QFk(this.qZ.oR);
-         if (!Xk || !this.qZ.gJ.canAltAction) return {
+         const tS = this.qk.FQ.IHS(this.qk.HA);
+         if (!tS || !this.qk.RP.canAltAction) return {
```

#### 1568. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11440` → after: `L11402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11402) · [Before (L11440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11440)

```diff
-         if (Xk.opWrapper.yX) return Zk.g.GL("toggleMenu", "inventory"), {
+         if (tS.opWrapper.tt) return kS.k.cj("toggleMenu", "inventory"), {
```

#### 1569. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11446` → after: `L11408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11408) · [Before (L11446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11446)

```diff
-         if ((0, Kk.e)(null === Tk || void 0 === Tk ? void 0 : Tk.typeObj.type) && this.qZ.MJ.KFk(this.heldItemState.Xu).crouching) return {
+         if ((0, QS.e)(null === bS || void 0 === bS ? void 0 : bS.typeObj.type) && this.qk.FQ.uHS(this.heldItemState.AY).crouching) return {
```

#### 1570. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11450` → after: `L11412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11412) · [Before (L11450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11450)

```diff
-         const ik = null !== (kk = this.qZ.Wkk) && void 0 !== kk ? kk : this.qZ.camera.Am(),
+         const XS = null !== (SS = this.qk.cSS) && void 0 !== SS ? SS : this.qk.camera.uR(),
```

#### 1571. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11455` → after: `L11417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11417) · [Before (L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11455)

```diff
-             nC: jk,
+             cV: aS,
```

#### 1572. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11457-L11461` → after: `L11419-L11423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11419-L11423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11419-L11423) · [Before (L11457-L11461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11457-L11461)

```diff
-           } = this.pickActionHelper.doPickAction(ik, ak.f.entityInteractReach),
-           wk = null === (Fk = this.qZ.Vkk) || void 0 === Fk ? void 0 : Fk.YM,
-           Hk = null === (Ik = this.qZ.Vkk) || void 0 === Ik ? void 0 : Ik.position,
-           Jk = null !== yk && void 0 !== yk ? yk : null,
-           xk = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.qZ.oR, null === Hk || void 0 === Hk ? void 0 : Hk[0], null === Hk || void 0 === Hk ? void 0 : Hk[1], null === Hk || void 0 === Hk ? void 0 : Hk[2], wk ? (0, lk.f)(wk) : "Air", Jk);
+           } = this.pickActionHelper.doPickAction(XS, qS.e.entityInteractReach),
+           jS = null === (HS = this.qk.ISS) || void 0 === HS ? void 0 : HS.Rl,
+           GS = null === (gS = this.qk.ISS) || void 0 === gS ? void 0 : gS.position,
+           CS = null !== xS && void 0 !== xS ? xS : null,
+           nS = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.qk.HA, null === GS || void 0 === GS ? void 0 : GS[0], null === GS || void 0 === GS ? void 0 : GS[1], null === GS || void 0 === GS ? void 0 : GS[2], jS ? (0, NS.h)(jS) : "Air", CS);
```

#### 1573. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11467` → after: `L11429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11429) · [Before (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11467)

```diff
-           Qk = new Lk.d(this, Jk, qk, Hk, wk, Tk).performAltAction(!Pk);
+           DS = new IS.e(this, CS, uS, GS, jS, bS).performAltAction(!PS);
```

#### 1574. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11473` → after: `L11435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11435) · [Before (L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11473)

```diff
-       UIk() {
+       dgS() {
```

#### 1575. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11482` → after: `L11444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11444) · [Before (L11482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11482)

```diff
-         Fk <= 1.2 && kk > 1.2 ? (this.qZ.camera.VY = 0, this.qZ.camera.JY = 0, this.itemZoomer.forceXyOffsetToZero(), this.Kqk()) : 0 === Fk && (this.itemZoomer.forceXyOffsetToZero(), this.Kqk()), Fk > .001 && kk < .001 && (this.qZ.camera.VY = 1.2, this.Kqk())
+         HS <= 1.2 && SS > 1.2 ? (this.qk.camera.lB = 0, this.qk.camera.oB = 0, this.itemZoomer.forceXyOffsetToZero(), this.eqS()) : 0 === HS && (this.itemZoomer.forceXyOffsetToZero(), this.eqS()), HS > .001 && SS < .001 && (this.qk.camera.lB = 1.2, this.eqS())
```

#### 1576. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11498` → after: `L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11460) · [Before (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11498)

```diff
-         Zk.g.unsubscribe(this._modelLoadedSub), this.heldItemState.Xu === this.qZ.oR && sk.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.qZ.MJ.eFk(this.heldItemState.Xu)
+         kS.k.unsubscribe(this._modelLoadedSub), this.heldItemState.AY === this.qk.HA && wS.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.qk.FQ.tHS(this.heldItemState.AY)
```

#### 1577. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11501` → after: `L11463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11463) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11501)

```diff
-         Zk.g.unsubscribe(this._newBloxdSub)
+         kS.k.unsubscribe(this._newBloxdSub)
```

#### 1578. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11504` → after: `L11466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11466) · [Before (L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11504)

```diff
-         if (this.Qqk(), this._doneFirstMeshSetup) return;
+         if (this.rqS(), this._doneFirstMeshSetup) return;
```

#### 1579. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11506-L11508` → after: `L11468-L11470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11468-L11470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11468-L11470) · [Before (L11506-L11508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11506-L11508)

```diff
-         const kk = this.heldItemState.Xu;
-         this.qZ.MJ.eFk(kk) || (this._modelLoadedSub = Zk.g.subscribe(`lifeformSetupFinished|${kk}`, (() => {
-           this.Qqk()
+         const SS = this.heldItemState.AY;
+         this.qk.FQ.tHS(SS) || (this._modelLoadedSub = kS.k.subscribe(`lifeformSetupFinished|${SS}`, (() => {
+           this.rqS()
```

#### 1580. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11519` → after: `L11481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11481) · [Before (L11519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11519)

```diff
-         return null === kk || this.qZ.Xw.kp.has(kk) ? kk : (this.thirdPersonThinObjectId = null, null)
+         return null === SS || this.qk.Hj.fY.has(SS) ? SS : (this.thirdPersonThinObjectId = null, null)
```

#### 1581. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11523-L11526` → after: `L11485-L11488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11485-L11488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11485-L11488) · [Before (L11523-L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11523-L11526)

```diff
-           ci: Fk
-         } = this.thirdPersonPose, Ik = Fk.x * this.heldPoseScaleY() * Fk.z < 0, Xk = kk.thinInstMgr.getNodeWorldMatrix(kk.Ip, kk.nodeIndex).determinant() < 0, Tk = (0, Hk.g)(Ik, Xk);
-         if (this.thirdPersonFlippedWinding === Tk && this.thirdPersonAttachedToId === kk.Ip && this.thirdPersonAttachedToNode === kk.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
-         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = Tk, this.thirdPersonAttachedToId = kk.Ip, this.thirdPersonAttachedToNode = kk.nodeIndex;
+           nf: HS
+         } = this.thirdPersonPose, gS = HS.x * this.heldPoseScaleY() * HS.z < 0, tS = SS.thinInstMgr.getNodeWorldMatrix(SS.kY, SS.nodeIndex).determinant() < 0, bS = (0, GS.h)(gS, tS);
+         if (this.thirdPersonFlippedWinding === bS && this.thirdPersonAttachedToId === SS.kY && this.thirdPersonAttachedToNode === SS.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
+         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = bS, this.thirdPersonAttachedToId = SS.kY, this.thirdPersonAttachedToNode = SS.nodeIndex;
```

#### 1582. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11529` → after: `L11491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11491) · [Before (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11529)

```diff
-           eq: !0,
+           Ku: !0,
```

#### 1583. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11532-L11533` → after: `L11494-L11495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11494-L11495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11494-L11495) · [Before (L11532-L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11532-L11533)

```diff
-           const Ik = this.qZ.Xw.kp;
-           ik === this.thirdPersonRequestId && Ik.has(kk.Ip) ? (this.thirdPersonThinObjectId = Fk, Ik.attachThinObject(Fk, kk.Ip, kk.nodeIndex), Ik.set(Fk, "aOpacity", (0, Jk.holderAttachmentOpacity)(this.qZ, this.heldItemState.Xu)), (0, Jk.invalidateAttachmentProximityFade)(this. … [truncated]
+           const gS = this.qk.Hj.fY;
+           XS === this.thirdPersonRequestId && gS.has(SS.kY) ? (this.thirdPersonThinObjectId = HS, gS.attachThinObject(HS, SS.kY, SS.nodeIndex), gS.set(HS, "aOpacity", (0, CS.holderAttachmentOpacity)(this.qk, this.heldItemState.AY)), (0, CS.invalidateAttachmentProximityFade)(this. … [truncated]
```

#### 1584. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11537` → after: `L11499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11499) · [Before (L11537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11537)

```diff
-         return Hk.e * this.thirdPersonPose.ci.y
+         return GS.d * this.thirdPersonPose.nf.y
```

#### 1585. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11543` → after: `L11505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11505) · [Before (L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11543)

```diff
-         const Fk = this.qZ.Xw.kp,
+         const HS = this.qk.Hj.fY,
```

#### 1586. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11547` → after: `L11509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11509) · [Before (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11547)

```diff
-             ci: Tk,
+             nf: bS,
```

#### 1587. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11556` → after: `L11518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11518) · [Before (L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11556)

```diff
-           } = (0, xk.c)(Ik, yk ? ik : Xk, lk, this.typeObj.heldModelOffsetY());
+           } = (0, nS.b)(gS, xS ? XS : tS, NS, this.typeObj.heldModelOffsetY());
```

#### 1588. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11562` → after: `L11524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11524) · [Before (L11562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11562)

```diff
-         null !== kk && (this.qZ.Xw.kp.delete(kk), this.thirdPersonThinObjectId = null)
+         null !== SS && (this.qk.Hj.fY.delete(SS), this.thirdPersonThinObjectId = null)
```

#### 1589. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11566` → after: `L11528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11528) · [Before (L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11566)

```diff
-           qZ: kk,
+           qk: SS,
```

#### 1590. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11569-L11571` → after: `L11531-L11533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11531-L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11531-L11533) · [Before (L11569-L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11569-L11571)

```diff
-         if (!kk.MJ.Ukk(Fk.Xu, "humanoidMesh")) return null;
-         const Ik = kk.MJ.YFk(Fk.Xu),
-           Xk = kk.Xw.kp,
+         if (!SS.FQ.ZSS(HS.AY, "humanoidMesh")) return null;
+         const gS = SS.FQ.VHS(HS.AY),
+           tS = SS.Hj.fY,
```

#### 1591. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11573` → after: `L11535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11535) · [Before (L11573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11573)

```diff
-             Ip: Tk
+             kY: bS
```

#### 1592. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11580` → after: `L11542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11542) · [Before (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11580)

```diff
-           Ip: Tk,
+           kY: bS,
```

#### 1593. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11589` → after: `L11551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11551) · [Before (L11589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11589)

```diff
-           Ip: kk.Ip,
+           kY: SS.kY,
```

#### 1594. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11594` → after: `L11556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11556) · [Before (L11594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11594)

```diff
-           qZ: Fk,
+           qk: HS,
```

#### 1595. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11597-L11599` → after: `L11559-L11561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11559-L11561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11559-L11561) · [Before (L11597-L11599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11597-L11599)

```diff
-         if (!Fk.MJ.Ukk(Ik.Xu, "fourLeggedMesh")) return null;
-         const Xk = Fk.MJ.AFk(Ik.Xu),
-           Tk = Fk.Xw.kp,
+         if (!HS.FQ.ZSS(gS.AY, "fourLeggedMesh")) return null;
+         const tS = HS.FQ.iHS(gS.AY),
+           bS = HS.Hj.fY,
```

#### 1596. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11601` → after: `L11563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11563) · [Before (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11601)

```diff
-             Ip: ik
+             kY: XS
```

#### 1597. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11608` → after: `L11570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11570) · [Before (L11608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11608)

```diff
-           Ip: ik,
+           kY: XS,
```

#### 1598. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11614` → after: `L11576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11576) · [Before (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11614)

```diff
-         if (!this.qZ.Xw.Nw) return;
+         if (!this.qk.Hj.Wj) return;
```

#### 1599. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11616` → after: `L11578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11578) · [Before (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11616)

```diff
-         if (null !== kk) return void this.qZ.Xw.kp.set(kk, "aLightLevels", this.heldItemLightLevels());
+         if (null !== SS) return void this.qk.Hj.fY.set(SS, "aLightLevels", this.heldItemLightLevels());
```

#### 1600. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11619-L11621` → after: `L11581-L11583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11581-L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11581-L11583) · [Before (L11619-L11621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11619-L11621)

```diff
-         if (this.lightTargetsForMesh !== Fk && (this.lightTargetsForMesh = Fk, this.Myk = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
-           const kk = (0, qk.i)(Fk);
-           for (const Fk of kk) Fk.JR && "aLightLevels" in Fk.JR && this.Myk.push(Fk);
+         if (this.lightTargetsForMesh !== HS && (this.lightTargetsForMesh = HS, this.pxS = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
+           const SS = (0, uS.l)(HS);
+           for (const HS of SS) HS.mY && "aLightLevels" in HS.mY && this.pxS.push(HS);
```

#### 1601. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11624` → after: `L11586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11586) · [Before (L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11624)

```diff
-         if (0 === this.Myk.length) return;
+         if (0 === this.pxS.length) return;
```

#### 1602. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11626` → after: `L11588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11588) · [Before (L11626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11626)

```diff
-         for (const Xk of this.Myk)(0, qk.o)(Xk, Ik)
+         for (const tS of this.pxS)(0, uS.r)(tS, gS)
```

#### 1603. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11629` → after: `L11591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11591) · [Before (L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11629)

```diff
-         return this.qZ.MJ.RFk(this.heldItemState.Xu)._lightLevels
+         return this.qk.FQ.JHS(this.heldItemState.AY)._lightLevels
```

#### 1604. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11633` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11595) · [Before (L11633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11633)

```diff
-   38361: (kk, Fk, Ik) => {
+   38418: (SS, HS, gS) => {
```

#### 1605. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11635` → after: `L11597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11597) · [Before (L11635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11635)

```diff
-       d: () => ek,
+       e: () => KS,
```

#### 1606. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11637-L11638` → after: `L11599-L11600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11599-L11600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11599-L11600) · [Before (L11637-L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11637-L11638)

```diff
-       h: () => jk,
-       i: () => yk
+       j: () => aS,
+       k: () => xS
```

#### 1607. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11640-L11642` → after: `L11602-L11604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11602-L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11602-L11604) · [Before (L11640-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11640-L11642)

```diff
-     var Xk = Ik(37144),
-       Tk = Ik(37630),
-       ik = Ik(4475);
+     var tS = gS(37113),
+       bS = gS(37621),
+       XS = gS(4602);
```

#### 1608. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11646-L11648` → after: `L11608-L11610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11608-L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11608-L11610) · [Before (L11646-L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11646-L11648)

```diff
-         position: new Xk.Ge,
-         rotation: new Xk.Ge,
-         ci: new Xk.Ge,
+         position: new tS.VK,
+         rotation: new tS.VK,
+         nf: new tS.VK,
```

#### 1609. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11653-L11655` → after: `L11615-L11617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11615-L11617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11615-L11617) · [Before (L11653-L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11653-L11655)

```diff
-     const lk = new Xk.Ge(-.18, -.66, .48),
-       ak = new Xk.Ge(.4, 1.25, Math.PI + .9),
-       qk = new Xk.Ge(-.12, .12, .12),
+     const NS = new tS.VK(-.18, -.66, .48),
+       qS = new tS.VK(.4, 1.25, Math.PI + .9),
+       uS = new tS.VK(-.12, .12, .12),
```

#### 1610. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11661` → after: `L11623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11623) · [Before (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11661)

```diff
-       return Xk.Matrix.RotationYawPitchRollToRef(kk.y, kk.x, kk.z, Lk), Xk.Matrix.RotationYawPitchRollToRef(Fk[1], Fk[0], Fk[2], tk), Tk.c.matMulToRef(tk, Lk, Zk), Xk.Quaternion.FromRotationMatrixToRef(Zk, Ik)
+       return tS.Matrix.RotationYawPitchRollToRef(SS.y, SS.x, SS.z, IS), tS.Matrix.RotationYawPitchRollToRef(HS[1], HS[0], HS[2], fS), bS.b.matMulToRef(fS, IS, kS), tS.Quaternion.FromRotationMatrixToRef(kS, gS)
```

#### 1611. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11673` → after: `L11635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11635) · [Before (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11673)

```diff
-         ci: yk
+         nf: xS
```

#### 1612. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11675-L11677` → after: `L11637-L11639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11637-L11639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11637-L11639) · [Before (L11675-L11677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11675-L11677)

```diff
-       if (Ik.usesQuaternion = !1, "Gun" === kk.type) return Xk.kS(lk), Tk.kS(ak), void yk.kS(qk);
-       const [Lk, tk, Zk] = null !== Fk && void 0 !== Fk ? Fk : [0, 0, 0], jk = (0, ik.d)(kk.type), wk = jk ? 2.25 : 1.35, Hk = jk ? 0 : .08;
-       if ("TwoDTool" === kk.type || kk.holdAsAiming) Xk.t5(Lk, -.48 + tk, .24 + Zk + Hk), yk.t5(.19 * wk, -.19 * wk, .19 * wk), kk.holdAsAiming ? Tk.t5(.4 + Math.PI, 1.25, Math.PI / 2) : Tk.t5(Math.PI, Math.PI / 2, .35 * Math.PI);
+       if (gS.usesQuaternion = !1, "Gun" === SS.type) return tS.dJ(NS), bS.dJ(qS), void xS.dJ(uS);
+       const [IS, fS, kS] = null !== HS && void 0 !== HS ? HS : [0, 0, 0], aS = (0, XS.b)(SS.type), jS = aS ? 2.25 : 1.35, GS = aS ? 0 : .08;
+       if ("TwoDTool" === SS.type || SS.holdAsAiming) tS.I5(IS, -.48 + fS, .24 + kS + GS), xS.I5(.19 * jS, -.19 * jS, .19 * jS), SS.holdAsAiming ? bS.I5(.4 + Math.PI, 1.25, Math.PI / 2) : bS.I5(Math.PI, Math.PI / 2, .35 * Math.PI);
```

#### 1613. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11679` → after: `L11641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11641) · [Before (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11679)

```diff
-         Xk.t5(Lk, -.72 + tk, .18 + Zk + Hk);
+         tS.I5(IS, -.72 + fS, .18 + kS + GS);
```

#### 1614. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11681` → after: `L11643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11643) · [Before (L11681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11681)

```diff
-         yk.t5(kk, kk, kk), Tk.t5(jk ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
+         xS.I5(SS, SS, SS), bS.I5(aS ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
```

#### 1615. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11686` → after: `L11648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11648) · [Before (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11686)

```diff
-   38353: (kk, Fk, Ik) => {
+   38416: (SS, HS, gS) => {
```

#### 1616. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11688` → after: `L11650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11650) · [Before (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11688)

```diff
-       c: () => yk
+       b: () => xS
```

#### 1617. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11690` → after: `L11652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11652) · [Before (L11690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11690)

```diff
-     var Xk = Ik(37144);
+     var tS = gS(37113);
```

#### 1618. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11692` → after: `L11654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11654) · [Before (L11692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11692)

```diff
-       ik = new Xk.Ge;
+       XS = new tS.VK;
```

#### 1619. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11696` → after: `L11658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11658) · [Before (L11696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11696)

```diff
-       const lk = Fk instanceof Xk.Quaternion ? Fk : Xk.Quaternion.RotationYawPitchRollToRef(Fk.y, Fk.x, Fk.z, Tk);
+       const NS = HS instanceof tS.Quaternion ? HS : tS.Quaternion.RotationYawPitchRollToRef(HS.y, HS.x, HS.z, bS);
```

#### 1620. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11700` → after: `L11662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11662) · [Before (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11700)

```diff
-   37134: (kk, Fk, Ik) => {
+   37101: (SS, HS, gS) => {
```

#### 1621. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11710-L11714` → after: `L11672-L11676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11672-L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11672-L11676) · [Before (L11710-L11714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11710-L11714)

```diff
-     var Xk = Ik(37139),
-       Tk = Ik(2700),
-       ik = Ik(628),
-       yk = Ik(1217),
-       lk = Ik(34);
+     var tS = gS(37104),
+       bS = gS(2910),
+       XS = gS(680),
+       xS = gS(1309),
+       NS = gS(31);
```

#### 1622. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11729` → after: `L11691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11691) · [Before (L11729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11729)

```diff
-         if (null !== Tk.Ip)
+         if (null !== bS.kY)
```

#### 1623. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11738` → after: `L11700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11700) · [Before (L11738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11738)

```diff
-         if (null === Tk.Ip || null === (Xk = Tk.hideOnArmourPartsEquip) || void 0 === Xk || !Xk.length) continue;
+         if (null === bS.kY || null === (tS = bS.hideOnArmourPartsEquip) || void 0 === tS || !tS.length) continue;
```

#### 1624. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11740-L11753` → after: `L11702-L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11702-L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11702-L11715) · [Before (L11740-L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11740-L11753)

```diff
-         kk.setVisibility(Tk.Ip, !ik)
-       }
-     }
-     var tk = Ik(37455),
-       Zk = Ik(37259),
-       jk = Ik(37479),
-       ek = Ik(37457),
-       wk = Ik(337),
-       Hk = Ik(37236),
-       Jk = Ik(37286),
-       xk = Ik(37293),
-       Pk = Ik(37383),
-       Kk = Ik(37435),
-       Qk = Ik(37438);
+         SS.setVisibility(bS.kY, !XS)
+       }
+     }
+     var fS = gS(37432),
+       kS = gS(37225),
+       aS = gS(37471),
+       KS = gS(37441),
+       jS = gS(387),
+       GS = gS(37193),
+       CS = gS(37247),
+       nS = gS(37252),
+       PS = gS(37353),
+       QS = gS(37417),
+       DS = gS(37419);
```

#### 1625. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11758` → after: `L11720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11720) · [Before (L11758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11758)

```diff
-         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.Xu = void 0
+         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.AY = void 0
```

#### 1626. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11766` → after: `L11728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11728) · [Before (L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11766)

```diff
-       } = Xk, lk = (0, xk.f)(ik, yk);
+       } = tS, NS = (0, nS.e)(XS, xS);
```

#### 1627. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11770` → after: `L11732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11732) · [Before (L11770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11770)

```diff
-       } else sk[lk] = null, (0, xk.j)(ik, kk.Xw.Yw).then((kk => {
+       } else wS[NS] = null, (0, nS.h)(XS, SS.Hj.Bj).then((SS => {
```

#### 1628. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11774-L11778` → after: `L11736-L11740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11736-L11740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11736-L11740) · [Before (L11774-L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11774-L11778)

```diff
-               Yw: yk
-             } = ik.Xw,
-             lk = (0, xk.f)(Fk, Ik),
-             ak = (0, xk.c)(null !== Ik && void 0 !== Ik ? Ik : Fk, yk, (kk => {
-               (0, Zk.v)(kk, Jk.d), (0, ek.c)(kk, ik.Xw), (0, Hk.c)(kk), (0, Zk.O)(kk)
+               Bj: xS
+             } = XS.Hj,
+             NS = (0, nS.e)(HS, gS),
+             qS = (0, nS.c)(null !== gS && void 0 !== gS ? gS : HS, xS, (SS => {
+               (0, kS.p)(SS, CS.d), (0, KS.c)(SS, XS.Hj), (0, GS.d)(SS), (0, kS.Q)(SS)
```

#### 1629. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11781` → after: `L11743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11743) · [Before (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11781)

```diff
-           (0, xk.l)(kk, ak, {
+           (0, nS.i)(SS, qS, {
```

#### 1630. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11784` → after: `L11746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11746) · [Before (L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11784)

```diff
-               (0, jk.i)(kk) || kk.mG().zp(kk)
+               (0, aS.i)(SS) || SS.lL().ZY(SS)
```

#### 1631. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11791` → after: `L11753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11753) · [Before (L11791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11791)

```diff
-           for (const Tk of qk)(0, xk.p)(Tk);
+           for (const bS of uS)(0, nS.m)(bS);
```

#### 1632. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11793-L11794` → after: `L11755-L11756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11755-L11756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11755-L11756) · [Before (L11793-L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11793-L11794)

```diff
-           const wk = ik.Xw.kp,
-             Pk = ik.MJ.ku(ik.MJ.names.meshAttachments);
+           const jS = XS.Hj.fY,
+             PS = XS.FQ.EY(XS.FQ.names.meshAttachments);
```

#### 1633. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11797` → after: `L11759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11759) · [Before (L11797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11797)

```diff
-             const kk = null !== (Kk = null === (Qk = ik.MJ.eFk(Tk.Xu)) || void 0 === Qk ? void 0 : Qk.Ip) && void 0 !== Kk ? Kk : null;
+             const SS = null !== (QS = null === (DS = XS.FQ.tHS(bS.AY)) || void 0 === DS ? void 0 : DS.kY) && void 0 !== QS ? QS : null;
```

#### 1634. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11799` → after: `L11761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11761) · [Before (L11799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11799)

```diff
-               for (const Xk of Tk.attachments) Xk.modelGlb === Fk && Xk.texture === Ik && null === Xk.Ip && vk(Tk, kk, tk, Xk);
+               for (const tS of bS.attachments) tS.modelGlb === HS && tS.texture === gS && null === tS.kY && OS(bS, SS, fS, tS);
```

#### 1635. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11801` → after: `L11763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11763) · [Before (L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11801)

```diff
-             } else console.error(`Loaded ${lk} but theres no thinObjectId ${kk} for parent entity ${Tk.Xu}`)
+             } else console.error(`Loaded ${NS} but theres no thinObjectId ${SS} for parent entity ${bS.AY}`)
```

#### 1636. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11805` → after: `L11767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11767) · [Before (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11805)

```diff
-         console.error(`Failed to load ${ik}:`, kk.stack)
+         console.error(`Failed to load ${XS}:`, SS.stack)
```

#### 1637. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11812-L11813` → after: `L11774-L11775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11774-L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11774-L11775) · [Before (L11812-L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11812-L11813)

```diff
-         ak = lk.Xw.kp,
-         qk = `${(0,xk.f)(Xk.modelGlb,Xk.texture)}|${Xk.modelNode}`;
+         qS = NS.Hj.fY,
+         uS = `${(0,nS.e)(tS.modelGlb,tS.texture)}|${tS.modelNode}`;
```

#### 1638. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11816` → after: `L11778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11778) · [Before (L11816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11816)

```diff
-         if (!kk) return void console.error(`Node ${Xk.modelNode} not found in container ${Xk.modelGlb}`);
+         if (!SS) return void console.error(`Node ${tS.modelNode} not found in container ${tS.modelGlb}`);
```

#### 1639. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11818` → after: `L11780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11780) · [Before (L11818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11818)

```diff
-           St: 4,
+           hf: 4,
```

#### 1640. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11827-L11828` → after: `L11789-L11790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11789-L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11789-L11790) · [Before (L11827-L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11827-L11828)

```diff
-         }), void 0 !== Xk.animation && (0, xk.t)(Ik), ak.setPickableForType(qk, !0);
-         for (const Fk of [kk, ...kk.getChildMeshes()]) Fk.material && lk.Xw.mp(Fk)
+         }), void 0 !== tS.animation && (0, nS.o)(gS), qS.setPickableForType(uS, !0);
+         for (const HS of [SS, ...SS.getChildMeshes()]) HS.material && NS.Hj.JY(HS)
```

#### 1641. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11834-L11837` → after: `L11796-L11799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11796-L11799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11796-L11799) · [Before (L11834-L11837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11834-L11837)

```diff
-       ak.setEntityId(Lk, jk), ak.setPickable(Lk, kk.personFullBody && (0, Kk.g)(jk)), ak.set(Lk, "aOpacity", (0, Qk.holderAttachmentOpacity)(lk, jk));
-       const ek = lk.xR[lk.oR][jk];
-       if (ak.setRenderingGroupId(Lk, null !== (ik = null === ek || void 0 === ek ? void 0 : ek.zIndex) && void 0 !== ik ? ik : 0), null !== ek && void 0 !== ek && ek.overlayColour) {
-         const [kk, Fk, Ik] = (0, wk.Y)(ek.overlayColour);
+       qS.setEntityId(IS, aS), qS.setPickable(IS, SS.personFullBody && (0, QS.l)(aS)), qS.set(IS, "aOpacity", (0, DS.holderAttachmentOpacity)(NS, aS));
+       const KS = NS.rY[NS.HA][aS];
+       if (qS.setRenderingGroupId(IS, null !== (XS = null === KS || void 0 === KS ? void 0 : KS.zIndex) && void 0 !== XS ? XS : 0), null !== KS && void 0 !== KS && KS.overlayColour) {
+         const [SS, HS, gS] = (0, jS.M)(KS.overlayColour);
```

#### 1642. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11840-L11841` → after: `L11802-L11803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11802-L11803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11802-L11803) · [Before (L11840-L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11840-L11841)

```diff
-       const Hk = lk.MJ.RFk(jk);
-       if (ak.set(Lk, "aLightLevels", null !== (yk = null === Hk || void 0 === Hk ? void 0 : Hk._lightLevels) && void 0 !== yk ? yk : tk.b), Xk.overlayColour) {
+       const GS = NS.FQ.JHS(aS);
+       if (qS.set(IS, "aLightLevels", null !== (xS = null === GS || void 0 === GS ? void 0 : GS._lightLevels) && void 0 !== xS ? xS : fS.c), tS.overlayColour) {
```

#### 1643. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11845` → after: `L11807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11807) · [Before (L11845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11845)

```diff
-       if (Xk.Ip = Lk, void 0 !== Xk.animation) {
+       if (tS.kY = IS, void 0 !== tS.animation) {
```

#### 1644. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11852` → after: `L11814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11814) · [Before (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11852)

```diff
-       const Xk = kk.MJ.getState(Fk, kk.MJ.names.meshAttachments);
+       const tS = SS.FQ.getState(HS, SS.FQ.names.meshAttachments);
```

#### 1645. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11854` → after: `L11816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11816) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11854)

```diff
-         for (const Tk of Xk.attachments) null !== Tk.Ip && kk.Xw.kp.setPickable(Tk.Ip, Ik)
+         for (const bS of tS.attachments) null !== bS.kY && SS.Hj.fY.setPickable(bS.kY, gS)
```

#### 1646. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11862-L11864` → after: `L11824-L11826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11824-L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11824-L11826) · [Before (L11862-L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11862-L11864)

```diff
-         mJ: function(Fk, Ik) {
-           Ik.zIndexSub = lk.g.subscribe(`otherEntitySettingsClientifiedEId|${Fk}|zIndex`, (Fk => {
-             for (const Xk of Ik.attachments) null !== Xk.Ip && kk.Xw.kp.setRenderingGroupId(Xk.Ip, Fk)
+         EQ: function(HS, gS) {
+           gS.zIndexSub = NS.k.subscribe(`otherEntitySettingsClientifiedEId|${HS}|zIndex`, (HS => {
+             for (const tS of gS.attachments) null !== tS.kY && SS.Hj.fY.setRenderingGroupId(tS.kY, HS)
```

#### 1647. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11867-L11869` → after: `L11829-L11831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11829-L11831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11829-L11831) · [Before (L11867-L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11867-L11869)

```diff
-         iG: function(Fk, Ik) {
-           lk.g.unsubscribe(Ik.zIndexSub);
-           const Xk = kk.Xw.kp;
+         pE: function(HS, gS) {
+           NS.k.unsubscribe(gS.zIndexSub);
+           const tS = SS.Hj.fY;
```

#### 1648. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11871-L11872` → after: `L11833-L11834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11833-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11833-L11834) · [Before (L11871-L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11871-L11872)

```diff
-             if (null !== kk.Ip && Xk.has(kk.Ip)) try {
-               Xk.delete(kk.Ip)
+             if (null !== SS.kY && tS.has(SS.kY)) try {
+               tS.delete(SS.kY)
```

#### 1649. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11874` → after: `L11836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11836) · [Before (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11874)

```diff
-               console.error(`Failed to cleanup attachment ${kk.Ip} of entity ${Fk}:`, Tk.stack)
+               console.error(`Failed to cleanup attachment ${SS.kY} of entity ${HS}:`, bS.stack)
```

#### 1650. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11878` → after: `L11840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11840) · [Before (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11878)

```diff
-         Ix: function(Fk, Ik) {
+         bD: function(HS, gS) {
```

#### 1651. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11882-L11883` → after: `L11844-L11845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11844-L11845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11844-L11845) · [Before (L11882-L11883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11882-L11883)

```diff
-             const Fk = null !== (Tk = null === (ik = kk.MJ.eFk(yk.Xu)) || void 0 === ik ? void 0 : ik.Ip) && void 0 !== Tk ? Tk : null;
-             null === Fk || (0, Xk.pausesOutOfView)(kk, yk.Xu, Fk) || Gk(kk, yk)
+             const HS = null !== (bS = null === (XS = SS.FQ.tHS(xS.AY)) || void 0 === XS ? void 0 : XS.kY) && void 0 !== bS ? bS : null;
+             null === HS || (0, tS.pausesOutOfView)(SS, xS.AY, HS) || ES(SS, xS)
```

#### 1652. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11890` → after: `L11852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11852) · [Before (L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11890)

```diff
-       const Ik = kk.MJ.getState(Fk, kk.MJ.names.meshAttachments);
+       const gS = SS.FQ.getState(HS, SS.FQ.names.meshAttachments);
```

#### 1653. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11895-L11897` → after: `L11857-L11859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11857-L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11857-L11859) · [Before (L11895-L11897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11895-L11897)

```diff
-       const Ik = kk.Xw.kp,
-         Xk = kk.jkk / 1e3;
-       for (const Tk of Fk.animatedAttachments) Tk.clipPose.write(Ik, Tk.Ip, Xk)
+       const gS = SS.Hj.fY,
+         tS = SS.o3 / 1e3;
+       for (const bS of HS.animatedAttachments) bS.clipPose.write(gS, bS.kY, tS)
```

#### 1654. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11901` → after: `L11863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11863) · [Before (L11901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11901)

```diff
-       const Xk = kk.MJ.getState(Fk, kk.MJ.names.meshAttachments);
+       const tS = SS.FQ.getState(HS, SS.FQ.names.meshAttachments);
```

#### 1655. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11904` → after: `L11866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11866) · [Before (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11904)

```diff
-           if (Tk.Ip === Ik) return !0;
+           if (bS.kY === gS) return !0;
```

#### 1656. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11910` → after: `L11872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11872) · [Before (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11910)

```diff
-       return Rk(kk, Fk, null !== (Xk = Ik.attachments) && void 0 !== Xk ? Xk : [])
+       return yS(SS, HS, null !== (tS = gS.attachments) && void 0 !== tS ? tS : [])
```

#### 1657. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11919` → after: `L11881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11881) · [Before (L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11919)

```diff
-       if ((0, ik.Q)(kk)) return console.error("Cannot update mesh attachments for invalid eId", kk), Xk;
+       if ((0, XS.K)(SS)) return console.error("Cannot update mesh attachments for invalid eId", SS), tS;
```

#### 1658. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11921-L11922` → after: `L11883-L11884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11883-L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11883-L11884) · [Before (L11921-L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11921-L11922)

```diff
-         ak = lk.MJ.eFk(kk);
-       if (!ak) return console.error(`Cannot update mesh attachments for entity ${kk} as it has no mesh`), Xk;
+         qS = NS.FQ.tHS(SS);
+       if (!qS) return console.error(`Cannot update mesh attachments for entity ${SS} as it has no mesh`), tS;
```

#### 1659. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11924` → after: `L11886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11886) · [Before (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11924)

```diff
-         Ip: qk
+         kY: uS
```

#### 1660. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11926-L11929` → after: `L11888-L11891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11888-L11891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11888-L11891) · [Before (L11926-L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11926-L11929)

```diff
-       if (null === qk) return console.error(`Cannot update mesh attachments for entity ${kk} as it has no thinObjectId`), Xk;
-       const tk = lk.MJ.getState(kk, lk.MJ.names.meshAttachments);
-       if (!tk) return console.error(`Cannot update mesh attachments for entity ${kk} as it has no meshAttachments component`), Xk;
-       for (const Tk of tk.attachments)(0, yk.kb)(Tk.owners, Fk);
+       if (null === uS) return console.error(`Cannot update mesh attachments for entity ${SS} as it has no thinObjectId`), tS;
+       const fS = NS.FQ.getState(SS, NS.FQ.names.meshAttachments);
+       if (!fS) return console.error(`Cannot update mesh attachments for entity ${SS} as it has no meshAttachments component`), tS;
+       for (const bS of fS.attachments)(0, xS.ib)(bS.owners, HS);
```

#### 1661. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11936` → after: `L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11898) · [Before (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11936)

```diff
-               Xk.owners.push(Ik), Ck(kk, Xk.Ip, yk.overlayColour), Tk = !0;
+               tS.owners.push(gS), iS(SS, tS.kY, xS.overlayColour), bS = !0;
```

#### 1662. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11942` → after: `L11904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11904) · [Before (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11942)

```diff
-             Ip: null,
+             kY: null,
```

#### 1663. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11947` → after: `L11909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11909) · [Before (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11947)

```diff
-         return Lk(kk.Xw.kp, Xk, Fk.attachments), ik
+         return IS(SS.Hj.fY, tS, HS.attachments), XS
```

#### 1664. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11949` → after: `L11911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11911) · [Before (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11949)

```diff
-       const Zk = lk.Xw.kp;
+       const kS = NS.Hj.fY;
```

#### 1665. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11952` → after: `L11914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11914) · [Before (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11952)

```diff
-         0 === kk.owners.length && (null !== kk.Ip && Zk.delete(kk.Ip), (0, yk.kb)(tk.attachments, kk), null !== kk.clipPose && (0, yk.kb)(tk.animatedAttachments, kk), Tk--)
+         0 === SS.owners.length && (null !== SS.kY && kS.delete(SS.kY), (0, xS.ib)(fS.attachments, SS), null !== SS.clipPose && (0, xS.ib)(fS.animatedAttachments, SS), bS--)
```

#### 1666. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11960` → after: `L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11922) · [Before (L11960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11960)

```diff
-         Xk = Ik.MJ.getState(kk, Ik.MJ.names.meshAttachments);
+         tS = gS.FQ.getState(SS, gS.FQ.names.meshAttachments);
```

#### 1667. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11962-L11963` → after: `L11924-L11925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11924-L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11924-L11925) · [Before (L11962-L11963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11962-L11963)

```diff
-       const yk = null === (Fk = Ik.MJ.eFk(kk)) || void 0 === Fk ? void 0 : Fk.Ip;
-       (0, ik.Q)(yk) || Lk(Ik.Xw.kp, yk, Xk.attachments)
+       const xS = null === (HS = gS.FQ.tHS(SS)) || void 0 === HS ? void 0 : HS.kY;
+       (0, XS.K)(xS) || IS(gS.Hj.fY, xS, tS.attachments)
```

#### 1668. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11968` → after: `L11930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11930) · [Before (L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11968)

```diff
-       const Xk = kk.Xw.kp;
+       const tS = SS.Hj.fY;
```

#### 1669. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11975` → after: `L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11937) · [Before (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11975)

```diff
-   37662: (kk, Fk, Ik) => {
+   37655: (SS, HS, gS) => {
```

#### 1670. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11983-L11986` → after: `L11945-L11947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11945-L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11945-L11947) · [Before (L11983-L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11983-L11986)

```diff
-     var Xk = Ik(2700),
-       Tk = Ik(1844),
-       ik = Ik(337),
-       yk = Ik(37674),
+     var tS = gS(2910),
+       bS = gS(2022),
+       XS = gS(387),
```

#### 1671. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11988` → after: `L11949-L11950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11949-L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11949-L11950) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11988)

```diff
-       ak = Ik(354),
+       NS = gS(37667),
+       qS = gS(402),
```

#### 1672. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11990-L11992` → after: `L11952-L11954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11952-L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11952-L11954) · [Before (L11990-L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11990-L11992)

```diff
-       Lk = Ik(37447),
-       tk = Ik(37139),
-       Zk = Ik(37670);
+       IS = gS(37422),
+       fS = gS(37104),
+       kS = gS(37664);
```

#### 1673. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11996` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11958) · [Before (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L11996)

```diff
-         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
+         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
```

#### 1674. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12005` → after: `L11967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11967) · [Before (L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12005)

```diff
-         mJ: function(kk, Fk) {
+         EQ: function(SS, HS) {
```

#### 1675. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12013-L12014` → after: `L11975-L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11975-L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11975-L11976) · [Before (L12013-L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12013-L12014)

```diff
-         iG: null,
-         Ix: function(Fk, Ik) {
+         pE: null,
+         bD: function(HS, gS) {
```

#### 1676. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12018` → after: `L11980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11980) · [Before (L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12018)

```diff
-             const Ik = kk.MJ.eFk(ik.Xu);
+             const gS = SS.FQ.tHS(XS.AY);
```

#### 1677. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12020` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11982) · [Before (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12020)

```diff
-               ik.vx = !1;
+               XS.KD = !1;
```

#### 1678. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12024` → after: `L11986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11986) · [Before (L12024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12024)

```diff
-               vIk: yk
+               ngS: xS
```

#### 1679. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12026-L12027` → after: `L11988-L11989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11988-L11989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11988-L11989) · [Before (L12026-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12026-L12027)

```diff
-             if (!(null !== (Xk = null === yk || void 0 === yk ? void 0 : yk.EIk) && void 0 !== Xk ? Xk : null === (Tk = Ik.mesh) || void 0 === Tk ? void 0 : Tk.isEnabled())) {
-               ik.vx = !1;
+             if (!(null !== (tS = null === xS || void 0 === xS ? void 0 : xS.PgS) && void 0 !== tS ? tS : null === (bS = gS.mesh) || void 0 === bS ? void 0 : bS.isEnabled())) {
+               XS.KD = !1;
```

#### 1680. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12031` → after: `L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11993) · [Before (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12031)

```diff
-               Ip: lk
+               kY: NS
```

#### 1681. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12033` → after: `L11995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L11995) · [Before (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12033)

```diff
-             yk ? ik._thinObjectId !== lk && Kk(ik, lk) : ik._rootMesh !== Ik.mesh && Qk(ik, Ik.mesh), yk && (0, tk.pausesOutOfView)(kk, ik.Xu, lk) ? ik.vx = !0 : Pk(kk, ik)
+             xS ? XS._thinObjectId !== NS && QS(XS, NS) : XS._rootMesh !== gS.mesh && DS(XS, gS.mesh), xS && (0, fS.pausesOutOfView)(SS, XS.AY, NS) ? XS.KD = !0 : PS(SS, XS)
```

#### 1682. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12040` → after: `L12002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12002) · [Before (L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12040)

```diff
-       Fk.vx && null !== Fk._thinObjectId && kk.Xw.kp.has(Fk._thinObjectId) && Pk(kk, Fk)
+       HS.KD && null !== HS._thinObjectId && SS.Hj.fY.has(HS._thinObjectId) && PS(SS, HS)
```

#### 1683. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12044` → after: `L12006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12006) · [Before (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12044)

```diff
-       const Ik = Fk.isServerControlled ? Fk.serverSetRotation[1] : kk.MJ.KFk(Fk.Xu).heading;
+       const gS = HS.isServerControlled ? HS.serverSetRotation[1] : SS.FQ.uHS(HS.AY).heading;
```

#### 1684. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12049` → after: `L12011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12011) · [Before (L12049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12049)

```diff
-       const Ik = kk.MJ.getState(Fk, "meshRotation");
+       const gS = SS.FQ.getState(HS, "meshRotation");
```

#### 1685. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12055-L12061` → after: `L12017-L12023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12017-L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12017-L12023) · [Before (L12055-L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12055-L12061)

```diff
-       Fk.vx = !1;
-       const Jk = kk.MJ.FFk(kk.oR),
-         xk = kk.MJ.XIk(Fk.Xu),
-         Pk = Fk.Xu === kk.oR,
-         Kk = (0, Zk.d)(kk, Fk.Xu, xk),
-         Qk = kk.MJ.KFk(kk.oR),
-         sk = kk.MJ.KFk(Fk.Xu),
+       HS.KD = !1;
+       const CS = SS.FQ.sSS(SS.HA),
+         nS = SS.FQ.THS(HS.AY),
+         PS = HS.AY === SS.HA,
+         QS = (0, kS.e)(SS, HS.AY, nS),
+         DS = SS.FQ.uHS(SS.HA),
+         wS = SS.FQ.uHS(HS.AY),
```

#### 1686. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12064-L12065` → after: `L12026-L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12026-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12026-L12027) · [Before (L12064-L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12064-L12065)

```diff
-         const Ik = kk.bloxd.getResolvedPhysicsSettings(kk.oR, Jk.physicsState);
-         null === Ik.fixedHeading && Ik.steering && Jk._steeringActiveLastTick ? Sk[1] = (0, lk.h)(kk, Jk) : Sk[1] = (0, yk.q)(Ik, Jk.steeringHeading, Fk.baseRenderRotation[1] + Lk.b.getPlayerFacingHeading(kk))
+         const gS = SS.bloxd.getResolvedPhysicsSettings(SS.HA, CS.physicsState);
+         null === gS.fixedHeading && gS.steering && CS._steeringActiveLastTick ? JS[1] = (0, NS.j)(SS, CS) : JS[1] = (0, xS.t)(gS, CS.steeringHeading, HS.baseRenderRotation[1] + IS.c.getPlayerFacingHeading(SS))
```

#### 1687. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12068-L12070` → after: `L12030-L12032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12030-L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12030-L12032) · [Before (L12068-L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12068-L12070)

```diff
-         if ((null === xk || void 0 === xk ? void 0 : xk.TIk) && kk.bloxd.getRiddenVehicleEId(xk.le) === Fk.Xu && null === kk.bloxd.getLifeformType(Fk.Xu)) {
-           const kk = Tk.c.lerpWeight(jk * Fk._accumulatedDt);
-           Sk[1] = Fk.renderRotation[1] + ik.e.computeShortestRotation(Fk.renderRotation[1], Sk[1]) * kk
+         if ((null === nS || void 0 === nS ? void 0 : nS.oHS) && SS.bloxd.getRiddenVehicleEId(nS.fK) === HS.AY && null === SS.bloxd.getLifeformType(HS.AY)) {
+           const SS = bS.d.lerpWeight(aS * HS._accumulatedDt);
+           JS[1] = HS.renderRotation[1] + XS.b.computeShortestRotation(HS.renderRotation[1], JS[1]) * SS
```

#### 1688. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12073-L12074` → after: `L12035-L12036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12035-L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12035-L12036) · [Before (L12073-L12074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12073-L12074)

```diff
-       const vk = Kk ? null !== (Ik = null === Qk || void 0 === Qk ? void 0 : Qk.speed) && void 0 !== Ik ? Ik : 0 : null !== (Xk = null === sk || void 0 === sk ? void 0 : sk.speed) && void 0 !== Xk ? Xk : 0,
-         Ek = null !== (ak = null === sk || void 0 === sk ? void 0 : sk.pose) && void 0 !== ak ? ak : "standing",
+       const OS = QS ? null !== (gS = null === DS || void 0 === DS ? void 0 : DS.speed) && void 0 !== gS ? gS : 0 : null !== (tS = null === wS || void 0 === wS ? void 0 : wS.speed) && void 0 !== tS ? tS : 0,
+         dS = null !== (qS = null === wS || void 0 === wS ? void 0 : wS.pose) && void 0 !== qS ? qS : "standing",
```

#### 1689. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12079-L12080` → after: `L12041-L12042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12041-L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12041-L12042) · [Before (L12079-L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12079-L12080)

```diff
-         uk = !(Kk && !Pk) && !0 === (null === (tk = kk.xR) || void 0 === tk || null === (ek = tk[kk.oR]) || void 0 === ek || null === (wk = ek[Fk.Xu]) || void 0 === wk ? void 0 : wk.lockHeadToBody),
-         bk = null !== (Hk = kk.MJ.getState(Fk.Xu, "animator")) && void 0 !== Hk ? Hk : null;
+         YS = !(QS && !PS) && !0 === (null === (fS = SS.rY) || void 0 === fS || null === (KS = fS[SS.HA]) || void 0 === KS || null === (jS = KS[HS.AY]) || void 0 === jS ? void 0 : jS.lockHeadToBody),
+         AS = null !== (GS = SS.FQ.getState(HS.AY, "animator")) && void 0 !== GS ? GS : null;
```

#### 1690. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12089` → after: `L12051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12051) · [Before (L12089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12089)

```diff
-       const ik = (0, Xk.e)().Xw.kp.getNodeNames(Fk),
+       const XS = (0, tS.e)().Hj.fY.getNodeNames(HS),
```

#### 1691. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12133` → after: `L12095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12095) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12133)

```diff
-       let Sk = Zk ? 0 : null !== ak && void 0 !== ak ? ak : 0,
+       let JS = kS ? 0 : null !== qS && void 0 !== qS ? qS : 0,
```

#### 1692. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12141` → after: `L12103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12103) · [Before (L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12141)

```diff
-           nk = Math.max(nk, null !== (Gk = wk[Xk].rotationsPerSecond) && void 0 !== Gk ? Gk : Hk)
+           vS = Math.max(vS, null !== (ES = jS[tS].rotationsPerSecond) && void 0 !== ES ? ES : GS)
```

#### 1693. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12147-L12148` → after: `L12109-L12110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12109-L12110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12109-L12110) · [Before (L12147-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12147-L12148)

```diff
-           Ik = Zk ? 0 : null !== ak && void 0 !== ak ? ak : kk.softTolerance,
-           yk = Zk ? null : null !== Lk && void 0 !== Lk ? Lk : kk.hardTolerance,
+           gS = kS ? 0 : null !== qS && void 0 !== qS ? qS : SS.softTolerance,
+           xS = kS ? null : null !== IS && void 0 !== IS ? IS : SS.hardTolerance,
```

#### 1694. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12152` → after: `L12114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12114) · [Before (L12152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12152)

```diff
-         const tk = Zk ? nk : null !== (pk = kk.rotationsPerSecond) && void 0 !== pk ? pk : Hk,
+         const fS = kS ? vS : null !== (LS = SS.rotationsPerSecond) && void 0 !== LS ? LS : GS,
```

#### 1695. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12157-L12158` → after: `L12119-L12120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12119-L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12119-L12120) · [Before (L12157-L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12157-L12158)

```diff
-             Ik = ik.e.computeShortestRotation(zk[Xk], lk[Xk]);
-           Ik < -Sk ? lk[Xk] = zk[Xk] - Sk : Ik > Sk && (lk[Xk] = zk[Xk] + Sk);
+             gS = XS.b.computeShortestRotation(ZS[tS], NS[tS]);
+           gS < -JS ? NS[tS] = ZS[tS] - JS : gS > JS && (NS[tS] = ZS[tS] + JS);
```

#### 1696. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12161` → after: `L12123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12123) · [Before (L12161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12161)

```diff
-             const kk = ik.e.computeShortestRotation(zk[Xk], qk[Xk]),
+             const SS = XS.b.computeShortestRotation(ZS[tS], uS[tS]),
```

#### 1697. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12165` → after: `L12127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12127) · [Before (L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12165)

```diff
-           Tk || (qk[Xk] = ik.e.applyRotation(qk[Xk], lk[Xk], jk)), lk[Xk] === kk && qk[Xk] === Fk || (Vk = !0)
+           bS || (uS[tS] = XS.b.applyRotation(uS[tS], NS[tS], aS)), NS[tS] === SS && uS[tS] === HS || (hS = !0)
```

#### 1698. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12170` → after: `L12132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12132) · [Before (L12170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12170)

```diff
-       const uk = (0, Xk.e)().Xw.kp,
+       const YS = (0, tS.e)().Hj.fY,
```

#### 1699. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12179` → after: `L12141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12141) · [Before (L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12179)

```diff
-         const Tk = ik.e.computeShortestRotation(Ik[1], zk[1]);
+         const bS = XS.b.computeShortestRotation(gS[1], ZS[1]);
```

#### 1700. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12191` → after: `L12153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12153) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12191)

```diff
-   37691: (kk, Fk, Ik) => {
+   37694: (SS, HS, gS) => {
```

#### 1701. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12196-L12199` → after: `L12158-L12161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12158-L12161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12158-L12161) · [Before (L12196-L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12196-L12199)

```diff
-     var Xk = Ik(37705),
-       Tk = Ik(187),
-       ik = Ik(6475),
-       yk = Ik(354),
+     var tS = gS(37713),
+       bS = gS(198),
+       XS = gS(6672),
+       xS = gS(402),
```

#### 1702. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12201-L12203` → after: `L12163-L12165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12163-L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12163-L12165) · [Before (L12201-L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12201-L12203)

```diff
-       ak = Ik(37693),
-       qk = Ik(9183),
-       Lk = Ik(37674),
+       qS = gS(37703),
+       uS = gS(9361),
+       IS = gS(37672),
```

#### 1703. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12205-L12207` → after: `L12167-L12169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12167-L12169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12167-L12169) · [Before (L12205-L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12205-L12207)

```diff
-       Zk = Ik(37686);
-     var jk = Ik(1844),
-       ek = Ik(337);
+       kS = gS(37685);
+     var aS = gS(2022),
+       KS = gS(387);
```

#### 1704. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12212` → after: `L12174-L12193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12174-L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12174-L12193) · [Before (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12212)

```diff
-     const Kk = [1, 2, 0, 18, 3, 228, 37, "e", "f", "d", 8, 255, "length", 226, 199, "a", 4, "undefined", void 0, 86, 63, 6, "fromCodePoint", 7, 12, "push", "b", "h", "i", "g", 91, 5, 8191, 88, 13, 14, 33554432, 67108864, 31, 34, 185, "c", 26, 9, 38, 94, 82, 112, 133, "TH", 179, 1 … [truncated]
+     const QS = [2, 0, 1, 198, 178, "a", 94, 49, 130, 6, "d", 8, 255, "length", 5, 210, 146, 174, "f", "undefined", 88, void 0, 200, 154, 63, "fromCodePoint", 7, 12, "push", "c", 3, 181, "h", "i", 91, "e", 8191, 13, 14, 37, 35, 221, 41, 106, 4, 16, 100, "w", 512, 47, 9, "g", 199,  … [truncated]
+ 
+     function DS(...SS) {
+       return SS[QS[13]] = QS[2], typeof nS[SS[QS[1]]] === QS[19] ? nS[SS[QS[1]]] = function(...SS) {
+         for (JS(SS[QS[13]] = QS[2], SS[QS[5]] = 'dt8HZ1[?kjBMe}n4GfVW6YAI%]q.(7rUQc*sJw;)p|/F>,Ezlo32`:<yDRbPTm_=C!~S$iLN0h&aO@{g#+^5vKx9uX"', SS[QS[0]] = "" + (SS[QS[1]] || ""), SS[-QS[4]] = SS[QS[0]].length, SS[QS[10]] = [], SS[-QS[8]] = QS[1], SS[QS[9]] = QS[1], SS[QS[7]] = -Q … [truncated]
+           if (SS[-QS[6]] = SS[QS[5]].indexOf(SS[QS[0]][SS[-QS[3]]]), SS[-QS[6]] !== -QS[2])
+             if (SS[QS[7]] < QS[1]) SS[QS[7]] = SS[-QS[6]];
+             else {
+               JS(SS[QS[7]] += SS[-QS[6]] * QS[34], SS[-QS[8]] |= SS[QS[7]] << SS[QS[9]], SS[QS[9]] += (SS[QS[7]] & QS[36]) > QS[20] ? QS[37] : QS[38]);
+               do {
+                 JS(SS[QS[10]].push(SS[-QS[8]] & QS[12]), SS[-QS[8]] >>= QS[11], SS[QS[9]] -= QS[11])
+               } while (SS[QS[9]] > QS[26]);
+               SS[QS[7]] = -QS[2]
+             } return SS[QS[7]] > -QS[2] && SS[QS[10]].push((SS[-QS[8]] | SS[QS[7]] << SS[QS[9]]) & QS[12]), wS(SS[QS[10]])
+       }(PS[SS[QS[1]]]) : nS[SS[QS[1]]]
+     }
+ ... (4 more added lines; see GitHub link above)
```

#### 1705. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12215` → after: `L12196-L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12196-L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12196-L12209) · [Before (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12215)

```diff
-       return kk[Kk[12]] = Kk[0], typeof Nk !== Kk[17] && Nk ? (new Nk).decode(new ck(kk[Kk[2]])) : typeof Wk !== Kk[17] && Wk ? Wk.from(kk[Kk[2]]).toString("utf-8") : dk(kk[Kk[2]])
+       if (SS[QS[13]] = QS[30], SS[QS[1]] === function(...SS) {
+           return SS[QS[13]] = QS[2], typeof nS[SS[QS[1]]] === QS[19] ? nS[SS[QS[1]]] = function(...SS) {
+             for (JS(SS[QS[13]] = QS[2], SS[QS[5]] = 'o27)x]eKz,CQ<n3$15j(i?![GIf%H&=Y|J>Rpub}D*gt9NW6#rTmdw@F0+OS~l48qc{LsMBkZ;EPXvA_`y^:"hV.Ua/', SS[QS[31]] = "" + (SS[QS[1]] || ""), SS[QS[30]] = SS[QS[31]].length, SS[-QS[39]] = [], SS[QS[35]] = QS[1], SS[QS[18]] = QS[1], SS[QS[ … [truncated]
+               if (SS[QS[33]] = SS[QS[5]].indexOf(SS[QS[31]][SS[QS[32]]]), SS[QS[33]] !== -QS[2])
+                 if (SS[QS[26]] < QS[1]) SS[QS[26]] = SS[QS[33]];
+                 else {
+                   JS(SS[QS[26]] += SS[QS[33]] * QS[34], SS[QS[35]] |= SS[QS[26]] << SS[QS[18]], SS[QS[18]] += (SS[QS[26]] & QS[36]) > QS[20] ? QS[37] : QS[38]);
+                   do {
+                     JS(SS[-QS[39]].push(SS[QS[35]] & QS[12]), SS[QS[35]] >>= QS[11], SS[QS[18]] -= QS[11])
+                   } while (SS[QS[18]] > QS[26]);
+                   SS[QS[26]] = -QS[2]
+                 } return SS[QS[26]] > -QS[2] && SS[-QS[39]].push((SS[QS[35]] | SS[QS[26]] << SS[QS[18]]) & QS[12]), wS(SS[-QS[39]])
+           }(PS[SS[QS[1]]]) : nS[SS[QS[1]]]
+         }(97) + QS[47]) return SS[QS[2]] + SS[QS[0]]
```

#### 1706. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12223-L12224` → after: `L12217-L12218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12217-L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12217-L12218) · [Before (L12223-L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12223-L12224)

```diff
-     Vk(xk = {}, Pk = ["W{0)4=y=ef..,&2?_$1odt{rY/QxyT)5WQxet^FB207M[(B!ATel{nf}`j", "{QE6D`^V_SW9l~e", 'UpU6GZGy",wB4OwoiC)mLM_]Z0<9.5yI`Y=eGYdN}K!25Jg/5QHzfZ_', "1}~5&^@rSj7)_", '[5eVGYBx$f!c8~1*6%oygMT8F"y7OA', "KkA1M}v7|0+Xa!toG%|)hK.sWjx/SA_V4H*y&vdr;I[QGCNIkJ[B=J^c@Y~$X", "u … [truncated]
-       Vk(kk[Kk[12]] = Kk[2], kk[Kk[15]] = [function() {
+     JS(nS = {}, PS = ["0MLUqOsW._emT4V*[qf<J<@2x}&@M^K|@(C[(", "jF,B?TM?_:;~1GkW}4EZ`0J`WjUir3n", "<fc<c<>C4=;?yb97x/k{oa7|_kM.4;j]6[(BGR:|f<K&U3)U", "LjH11*jt", "$UcaSy`r@khEEw`.{n)`mTu*)})BwGe6>wLUuOA8", 'GTL`"`lrMfd<$.h;|!nO`0h?mn%BvH`.)2r?CTft', '{MUjS:fzoTV04qg)"d', "kRP@D2( … [truncated]
+       JS(SS[QS[13]] = QS[1], SS[QS[17]] = [function() {
```

#### 1707. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12232` → after: `L12226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12226) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12232)

```diff
-       }], kk[Kk[13]] = Kk[18], kk[Kk[1]] = []);
+       }], SS[QS[14]] = QS[21], SS[QS[15]] = []);
```

#### 1708. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12234` → after: `L12228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12228) · [Before (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12234)

```diff
-         Vk(kk[Kk[13]] = Object, kk[Kk[1]][Kk[25]]("".__proto__.constructor.name))
+         JS(SS[QS[14]] = Object, SS[QS[15]][QS[28]]("".__proto__.constructor.name))
```

#### 1709. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12236-L12239` → after: `L12230-L12233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12230-L12233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12230-L12233) · [Before (L12236-L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12236-L12239)

```diff
-       kk: for (kk[Kk[14]] = Kk[2]; kk[Kk[14]] < kk[Kk[15]][Kk[12]]; kk[Kk[14]]++) try {
-         for (kk[Kk[13]] = kk[Kk[15]][kk[Kk[14]]](), kk[Kk[16]] = Kk[2]; kk[Kk[16]] < kk[Kk[1]][Kk[12]]; kk[Kk[16]]++)
-           if (typeof kk[Kk[13]][kk[Kk[1]][kk[Kk[16]]]] === Kk[17]) continue kk;
-         return kk[Kk[13]]
+       SS: for (SS[QS[16]] = QS[1]; SS[QS[16]] < SS[QS[17]][QS[13]]; SS[QS[16]]++) try {
+         for (SS[QS[14]] = SS[QS[17]][SS[QS[16]]](), SS[QS[18]] = QS[1]; SS[QS[18]] < SS[QS[15]][QS[13]]; SS[QS[18]]++)
+           if (typeof SS[QS[14]][SS[QS[15]][SS[QS[18]]]] === QS[19]) continue SS;
+         return SS[QS[14]]
```

#### 1710. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12241-L12243` → after: `L12235-L12237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12235-L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12235-L12237) · [Before (L12241-L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12241-L12243)

```diff
-       return kk[Kk[13]] || this
-     }() || {}, Nk = Ck.TextDecoder, ck = Ck.Uint8Array, Wk = Ck.je, fk = Ck.String || String, Bk = Ck.Array || Array, dk = function(...kk) {
-       return Vk(kk[Kk[12]] = Kk[2], kk[Kk[15]] = new Bk(Kk[59]), kk[Kk[26]] = fk[Kk[22]] || fk.fromCharCode, kk[Kk[1]] = []),
+       return SS[QS[14]] || this
+     }() || {}, US = zS.TextDecoder, pS = zS.Uint8Array, sS = zS.CK, BS = zS.String || String, MS = zS.Array || Array, FS = function(...SS) {
+       return JS(SS[QS[13]] = QS[1], SS[QS[29]] = new MS(QS[64]), SS[QS[10]] = BS[QS[25]] || BS.fromCharCode, SS[QS[20]] = []),
```

#### 1711. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12245-L12246` → after: `L12239-L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12239-L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12239-L12240) · [Before (L12245-L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12245-L12246)

```diff
-           for (Vk(Fk[Kk[12]] = Kk[0], Fk[Kk[15]] = Kk[18], Fk[-Kk[19]] = Kk[18], Fk[Kk[4]] = Fk[Kk[2]][Kk[12]], kk[Kk[1]][Kk[12]] = Kk[2]), Fk[Kk[9]] = Kk[2]; Fk[Kk[9]] < Fk[Kk[4]];) Vk(Fk[-Kk[19]] = Fk[Kk[2]][Fk[Kk[9]]++], Fk[-Kk[19]] <= Kk[57] ? Fk[Kk[15]] = Fk[-Kk[19]] : Fk[-K … [truncated]
-           return kk[Kk[1]].join("")
+           for (JS(HS[QS[13]] = QS[2], HS[QS[5]] = QS[21], HS[QS[0]] = QS[21], HS[QS[23]] = HS[QS[1]][QS[13]], SS[QS[20]][QS[13]] = QS[1]), HS[-QS[22]] = QS[1]; HS[-QS[22]] < HS[QS[23]];) JS(HS[QS[0]] = HS[QS[1]][HS[-QS[22]]++], HS[QS[0]] <= QS[62] ? HS[QS[5]] = HS[QS[0]] : HS[QS[ … [truncated]
+           return SS[QS[20]].join("")
```

#### 1712. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12248-L12265` → after: `L12242-L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12242-L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12242-L12245) · [Before (L12248-L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12248-L12265)

```diff
-     }()), Jk = (...kk) => {
-       function Fk(...kk) {
-         return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = function(...kk) {
-           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[0]] = '9OFdEZfWDSm+IQj8/#k6@JpuV>s2HMg~U;^4[qG0b5C$!BnYl<=vwAXc`"7*)1xTrL,{]%?.K3_}oaiehNy(z&:R|tP', kk[Kk[1]] = "" + (kk[Kk[2]] || ""), kk[Kk[4]] = kk[Kk[1]].length, kk[Kk[16]] = [], kk[Kk[31]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[29]] =  … [truncated]
-             if (kk[Kk[28]] = kk[Kk[0]].indexOf(kk[Kk[1]][kk[Kk[27]]]), kk[Kk[28]] !== -Kk[0])
-               if (kk[Kk[29]] < Kk[2]) kk[Kk[29]] = kk[Kk[28]];
-               else {
-                 Vk(kk[Kk[29]] += kk[Kk[28]] * Kk[30], kk[Kk[31]] |= kk[Kk[29]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[29]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
-                 do {
-                   Vk(kk[Kk[16]].push(kk[Kk[31]] & Kk[11]), kk[Kk[31]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
-                 } while (kk[Kk[8]] > Kk[23]);
-                 kk[Kk[29]] = -Kk[0]
-               } return kk[Kk[29]] > -Kk[0] && kk[Kk[16]].push((kk[Kk[31]] | kk[Kk[29]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[16]])
-         }(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
-       }
-       kk[Kk[12]] = Kk[43], Fk(Kk[47]) + "Y" in sk && function(...kk) {
- ... (2 more removed lines; see GitHub link above)
+     }()), DS(QS[86]) + QS[33] in ZS && function(...SS) {
+       JS(SS[QS[13]] = QS[1], SS[QS[66]] = function(...SS) {
+         function HS(SS) {
+           return NS(XS(IS(SS)))
```

#### 1713. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12269-L12306` → after: `L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12249) · [Before (L12269-L12306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12269-L12306)

```diff
-           switch (kk[Kk[12]] = Kk[0], ((kk[Kk[2]] & Kk[36]) !== Kk[2]) * Kk[0] + (kk[Kk[2]] < Kk[2]) * Kk[1]) {
-             case Kk[2]:
-               return [kk[Kk[2]] % Kk[36], Math.trunc(kk[Kk[2]] / Kk[37])];
-             case Kk[0]:
-               return [kk[Kk[2]] % Kk[36] - Kk[36], Math.trunc(kk[Kk[2]] / Kk[37]) + Kk[0]];
-             case Kk[1]:
-               return [((kk[Kk[2]] + Kk[36]) % Kk[36] + Kk[36]) % Kk[36], Math.round(kk[Kk[2]] / Kk[37])];
-             case Kk[4]:
-               return [kk[Kk[2]] % Kk[36], Math.trunc(kk[Kk[2]] / Kk[37])]
-           }
-         }
-         kk[Kk[12]] = Kk[2], Vk(kk[Kk[15]] = Fk([Kk[1], Kk[16]]), kk[-Kk[38]] = Fk([Kk[0], Kk[1]]), kk[Kk[1]] = kk[Kk[15]] + kk[-Kk[38]], kk[Kk[9]] = kk[Kk[1]] - kk[-Kk[38]], kk[-Kk[39]] = kk[Kk[9]] * Kk[1], kk[Kk[8]] = kk[-Kk[39]] / Kk[1], console.log(Ik(kk[Kk[1]])), console.log( … [truncated]
-       }();
-       const Ik = kk[Kk[2]][Fk(113) + Fk(114) + Fk(115)];
-       if (Ik === Kk[66]) {
-         function Lk(...kk) {
- ... (22 more removed lines; see GitHub link above)
+           return SS[QS[13]] = QS[0], NS(xS(IS(SS[QS[1]]), IS(SS[QS[2]])))
```

#### 1714. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12310` → after: `L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12253) · [Before (L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12310)

```diff
-           return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = tk(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
+           return SS[QS[13]] = QS[0], qS(xS(IS(SS[QS[1]]), IS(SS[QS[2]])))
```

#### 1715. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12312-L12321` → after: `L12255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12255) · [Before (L12312-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12312-L12321)

```diff
-         return void Vk((0, Zk[Kk[41]])(kk[Kk[0]], kk[Kk[1]], kk[Kk[4]], kk[Kk[16]], kk[Kk[31]], kk[Kk[21]], kk[Kk[2]]), function(kk, Fk, Ik, Xk) {
-           if (null === kk) return;
-           if (Ik.TH[1] < -kk.maxFallSpeed) {
-             const Tk = Xk / 1e3,
-               ik = (jk.c.lerpWeight(Tk / kk.slowDownSeconds) * (-kk.maxFallSpeed - Ik.TH[1]) - (kk.compensateGravity ? Fk.physics.gravity[1] * Ik.gravityMultiplier * Tk : 0)) * Ik.Xq / Tk;
-             lk().set(wk, 0, ik, 0), Ik.applyForce(wk)
-           }
-         }(kk[Kk[2]][Jk(118) + Jk(119) + Jk(120) + Jk(121)], kk[Kk[0]], kk[Kk[31]], kk[Kk[23]]))
-       }
-       if (kk[Kk[10]]) {
+ 
```

#### 1716. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12323-L12332` → after: `L12257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12257) · [Before (L12323-L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12323-L12332)

```diff
-           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[0]] = '4}$=,uv#dhzCZHGx+Df7<iP%pJ3`qO2U5[kKc~s/g;L)SW?jaly"|>1tB]0mbNo9{A8nEFw*IYX&M.@eR^_Tr6(!Q:V', kk[Kk[1]] = "" + (kk[Kk[2]] || ""), kk[Kk[46]] = kk[Kk[1]].length, kk[Kk[16]] = [], kk[Kk[31]] = Kk[2], kk[-Kk[48]] = Kk[2], kk[Kk[29]] … [truncated]
-             if (kk[-Kk[47]] = kk[Kk[0]].indexOf(kk[Kk[1]][kk[Kk[45]]]), kk[-Kk[47]] !== -Kk[0])
-               if (kk[Kk[29]] < Kk[2]) kk[Kk[29]] = kk[-Kk[47]];
-               else {
-                 Vk(kk[Kk[29]] += kk[-Kk[47]] * Kk[30], kk[Kk[31]] |= kk[Kk[29]] << kk[-Kk[48]], kk[-Kk[48]] += (kk[Kk[29]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
-                 do {
-                   Vk(kk[Kk[16]].push(kk[Kk[31]] & Kk[11]), kk[Kk[31]] >>= Kk[10], kk[-Kk[48]] -= Kk[10])
-                 } while (kk[-Kk[48]] > Kk[23]);
-                 kk[Kk[29]] = -Kk[0]
-               } return kk[Kk[29]] > -Kk[0] && kk[Kk[16]].push((kk[Kk[31]] | kk[Kk[29]] << kk[-Kk[48]]) & Kk[11]), Qk(kk[Kk[16]])
+           return SS[QS[13]] = QS[30], uS(xS(IS(SS[QS[1]]), IS(SS[QS[2]])), SS[QS[0]])
```

#### 1717. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12336` → after: `L12261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12261) · [Before (L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12336)

```diff
-           return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = zk(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
+           return SS[QS[13]] = QS[2], kS(cS(fS(SS[QS[1]]), SS[QS[1]].length * QS[11]))
```

#### 1718. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12338-L12339` → after: `L12263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12263) · [Before (L12338-L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12338-L12339)

```diff
-         Vk(kk[Kk[4]][Kk[60]] = lk()[Sk(Kk[61])](kk[Kk[31]][Kk[49]]), lk()[Sk(123)](kk[Kk[4]][Kk[56]], kk[Kk[31]][Kk[49]]))
-       } else {
+ 
```

#### 1719. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12341-L12350` → after: `L12265-L12269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12265-L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12265-L12269) · [Before (L12341-L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12341-L12350)

```diff
-           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[0]] = 'RQPzG4[8,.@<+Spv3q9aw(s/e#n]Z}Fd5JIVEgD^~h%*crbx"oW!CN)YH`O7l0iB:KU2y=1$tA>6u|?&_{jLT;fMkmX', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[Kk[41]] = kk[Kk[26]].length, kk[Kk[16]] = [], kk[Kk[31]] = Kk[2], kk[Kk[50]] = Kk[2], kk[Kk[23] … [truncated]
-             if (kk[Kk[43]] = kk[Kk[0]].indexOf(kk[Kk[26]][kk[Kk[27]]]), kk[Kk[43]] !== -Kk[0])
-               if (kk[Kk[23]] < Kk[2]) kk[Kk[23]] = kk[Kk[43]];
-               else {
-                 Vk(kk[Kk[23]] += kk[Kk[43]] * Kk[30], kk[Kk[31]] |= kk[Kk[23]] << kk[Kk[50]], kk[Kk[50]] += (kk[Kk[23]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
-                 do {
-                   Vk(kk[Kk[16]].push(kk[Kk[31]] & Kk[11]), kk[Kk[31]] >>= Kk[10], kk[Kk[50]] -= Kk[10])
-                 } while (kk[Kk[50]] > Kk[23]);
-                 kk[Kk[23]] = -Kk[0]
-               } return kk[Kk[23]] > -Kk[0] && kk[Kk[16]].push((kk[Kk[31]] | kk[Kk[23]] << kk[Kk[50]]) & Kk[11]), Qk(kk[Kk[16]])
+           JS(SS[QS[13]] = QS[0], SS[QS[5]] = fS(SS[QS[1]])), SS[QS[5]].length > QS[45] && (SS[QS[5]] = cS(SS[QS[5]], SS[QS[1]].length * QS[11]));
+           var HS = Array(QS[45]),
+             gS = Array(QS[45]);
+           for (SS[QS[30]] = QS[1]; SS[QS[30]] < QS[45]; SS[QS[30]]++) JS(HS[SS[QS[30]]] = 909522486 ^ SS[QS[5]][SS[QS[30]]], gS[SS[QS[30]]] = 1549556828 ^ SS[QS[5]][SS[QS[30]]]);
+           return SS[QS[46]] = cS(HS.concat(fS(SS[QS[2]])), QS[48] + SS[QS[2]].length * QS[11]), kS(cS(gS.concat(SS[QS[46]]), hS(DS(103) + QS[47], QS[48], 256)))
```

#### 1720. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12358-L12360` → after: `L12274-L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12274-L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12274-L12276) · [Before (L12358-L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12358-L12360)

```diff
-             for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[55]] = '6ElonXsIJABLkYqRTpOZNbdaSKWigPcGMCH.@xt8U[/vrj+Fyf}_VeDh#<"Q2{m;`7&wz>?9$(350*^u|!,=%~1:]4)', kk[Kk[52]] = "" + (kk[Kk[2]] || ""), kk[-Kk[54]] = kk[Kk[52]].length, kk[Kk[16]] = [], kk[Kk[31]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[ … [truncated]
-               if (kk[Kk[28]] = kk[Kk[55]].indexOf(kk[Kk[52]][kk[Kk[53]]]), kk[Kk[28]] !== -Kk[0])
-                 if (kk[Kk[23]] < Kk[2]) kk[Kk[23]] = kk[Kk[28]];
+             for (JS(SS[QS[13]] = QS[2], SS[QS[2]] = '5gLjnbFcWpaeNr4k=B8PxCfw.^_tD3]J/[Ohm,:A2vuElU?H)TVRXM%">Q9{#}y76SdK0+*|<@1;sqIZzG&!i$~(Y`o', SS[QS[49]] = "" + (SS[QS[1]] || ""), SS[QS[29]] = SS[QS[49]].length, SS[QS[44]] = [], SS[QS[35]] = QS[1], SS[QS[52]] = QS[1], SS[QS[5 … [truncated]
+               if (SS[QS[50]] = SS[QS[2]].indexOf(SS[QS[49]][SS[QS[11]]]), SS[QS[50]] !== -QS[2])
+                 if (SS[QS[51]] < QS[1]) SS[QS[51]] = SS[QS[50]];
```

#### 1721. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12362` → after: `L12278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12278) · [Before (L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12362)

```diff
-                   Vk(kk[Kk[23]] += kk[Kk[28]] * Kk[30], kk[Kk[31]] |= kk[Kk[23]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[23]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
+                   JS(SS[QS[51]] += SS[QS[50]] * QS[34], SS[QS[35]] |= SS[QS[51]] << SS[QS[52]], SS[QS[52]] += (SS[QS[51]] & QS[36]) > QS[20] ? QS[37] : QS[38]);
```

#### 1722. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12364-L12367` → after: `L12280-L12283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12280-L12283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12280-L12283) · [Before (L12364-L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12364-L12367)

```diff
-                     Vk(kk[Kk[16]].push(kk[Kk[31]] & Kk[11]), kk[Kk[31]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
-                   } while (kk[Kk[8]] > Kk[23]);
-                   kk[Kk[23]] = -Kk[0]
-                 } return kk[Kk[23]] > -Kk[0] && kk[Kk[16]].push((kk[Kk[31]] | kk[Kk[23]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[16]])
+                     JS(SS[QS[44]].push(SS[QS[35]] & QS[12]), SS[QS[35]] >>= QS[11], SS[QS[52]] -= QS[11])
+                   } while (SS[QS[52]] > QS[26]);
+                   SS[QS[51]] = -QS[2]
+                 } return SS[QS[51]] > -QS[2] && SS[QS[44]].push((SS[QS[35]] | SS[QS[51]] << SS[QS[52]]) & QS[12]), wS(SS[QS[44]])
```

#### 1723. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12371` → after: `L12287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12287) · [Before (L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12371)

```diff
-             return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = Ok(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
+             return SS[QS[13]] = QS[2], typeof nS[SS[QS[1]]] === QS[19] ? nS[SS[QS[1]]] = gS(PS[SS[QS[1]]]) : nS[SS[QS[1]]]
```

#### 1724. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12373-L12388` → after: `L12289-L12296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12289-L12296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12289-L12296) · [Before (L12373-L12388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12373-L12388)

```diff
-           const Gk = lk()[nk(125) + "t"](kk[Kk[31]][Kk[49]], kk[Kk[4]][Kk[56]]);
-           Gk > Kk[16] * Ik[nk(Kk[58]) + nk(Kk[57]) + Kk[7]] * Ik[nk(Kk[58]) + nk(Kk[57]) + Kk[7]] && Vk(kk[Kk[4]][nk(Kk[59])] = Kk[2], kk[Kk[4]][Kk[60]] = Math[nk(129)](Gk))
-         }
-       }
-       if (kk[Kk[69]] = Kk[0], kk[Kk[4]][Kk[60]] > Kk[2]) {
-         function pk(...kk) {
-           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[15]] = '`2OZ7(&MB>[g?Ct4Y%ckJ<p]z35yF6mRA_|NW#jH0nud:fs9E$~{aKUbq8;Q1IrD=Gv!+LxTi)/.*l^h},S"Ve@PowX', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[Kk[62]] = kk[Kk[26]].length, kk[Kk[9]] = [], kk[-Kk[61]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[29] … [truncated]
-             if (kk[Kk[43]] = kk[Kk[15]].indexOf(kk[Kk[26]][kk[Kk[27]]]), kk[Kk[43]] !== -Kk[0])
-               if (kk[Kk[29]] < Kk[2]) kk[Kk[29]] = kk[Kk[43]];
-               else {
-                 Vk(kk[Kk[29]] += kk[Kk[43]] * Kk[30], kk[-Kk[61]] |= kk[Kk[29]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[29]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
-                 do {
-                   Vk(kk[Kk[9]].push(kk[-Kk[61]] & Kk[11]), kk[-Kk[61]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
-                 } while (kk[Kk[8]] > Kk[23]);
-                 kk[Kk[29]] = -Kk[0]
-               } return kk[Kk[29]] > -Kk[0] && kk[Kk[9]].push((kk[-Kk[61]] | kk[Kk[29]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[9]])
+           HS[QS[13]] = QS[2];
+           try {
+             SS[-QS[53]]
+           } catch (bS) {
+             SS[-QS[53]] = QS[1]
+           }
+           for (JS(HS[QS[2]] = SS[-QS[53]] ? DS(104) + tS(105) + tS(QS[43]) : tS(QS[102]) + tS(QS[60]) + tS(109), HS[QS[0]] = "", HS[QS[30]] = QS[21]), HS[QS[44]] = QS[1]; HS[QS[44]] < HS[QS[1]].length; HS[QS[44]]++) JS(HS[QS[30]] = HS[QS[1]].charCodeAt(HS[QS[44]]), HS[QS[0]] += H … [truncated]
+           return HS[QS[0]]
```

#### 1725. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12396-L12398` → after: `L12301-L12303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12301-L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12301-L12303) · [Before (L12396-L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12396-L12398)

```diff
-             for (Vk(kk[Kk[12]] = Kk[0], kk[-Kk[64]] = 'CsBrYFAdjZObpvhXLTgV*}{]fu>%)5E:MI+qnD^twN,;e&m_?o~1`GQUR3aPJcHlkSKiW=49x<z[0#$2y68!@"7.|(/', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[-Kk[63]] = kk[Kk[26]].length, kk[Kk[20]] = [], kk[Kk[7]] = Kk[2], kk[Kk[8]] = Kk[2], kk[-Kk … [truncated]
-               if (kk[Kk[43]] = kk[-Kk[64]].indexOf(kk[Kk[26]][kk[Kk[10]]]), kk[Kk[43]] !== -Kk[0])
-                 if (kk[-Kk[54]] < Kk[2]) kk[-Kk[54]] = kk[Kk[43]];
+             for (JS(SS[QS[13]] = QS[2], SS[QS[2]] = ':3u9"[%?.81v(zEQrVK<m]&+nUGbJ#X@W5ApB$kd7;l~s)`x{h!TIeoC0SD,*/H^4_R}t|FjgP>i2MLwyOYZ=fq6Nca', SS[-QS[55]] = "" + (SS[QS[1]] || ""), SS[QS[30]] = SS[-QS[55]].length, SS[QS[44]] = [], SS[QS[14]] = QS[1], SS[QS[9]] = QS[1], SS[QS[ … [truncated]
+               if (SS[QS[33]] = SS[QS[2]].indexOf(SS[-QS[55]][SS[QS[11]]]), SS[QS[33]] !== -QS[2])
+                 if (SS[QS[26]] < QS[1]) SS[QS[26]] = SS[QS[33]];
```

#### 1726. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12400` → after: `L12305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12305) · [Before (L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12400)

```diff
-                   Vk(kk[-Kk[54]] += kk[Kk[43]] * Kk[30], kk[Kk[7]] |= kk[-Kk[54]] << kk[Kk[8]], kk[Kk[8]] += (kk[-Kk[54]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
+                   JS(SS[QS[26]] += SS[QS[33]] * QS[34], SS[QS[14]] |= SS[QS[26]] << SS[QS[9]], SS[QS[9]] += (SS[QS[26]] & QS[36]) > QS[20] ? QS[37] : QS[38]);
```

#### 1727. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12402-L12405` → after: `L12307-L12310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12307-L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12307-L12310) · [Before (L12402-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12402-L12405)

```diff
-                     Vk(kk[Kk[20]].push(kk[Kk[7]] & Kk[11]), kk[Kk[7]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
-                   } while (kk[Kk[8]] > Kk[23]);
-                   kk[-Kk[54]] = -Kk[0]
-                 } return kk[-Kk[54]] > -Kk[0] && kk[Kk[20]].push((kk[Kk[7]] | kk[-Kk[54]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[20]])
+                     JS(SS[QS[44]].push(SS[QS[14]] & QS[12]), SS[QS[14]] >>= QS[11], SS[QS[9]] -= QS[11])
+                   } while (SS[QS[9]] > QS[26]);
+                   SS[QS[26]] = -QS[2]
+                 } return SS[QS[26]] > -QS[2] && SS[QS[44]].push((SS[QS[14]] | SS[QS[26]] << SS[QS[9]]) & QS[12]), wS(SS[QS[44]])
```

#### 1728. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12409` → after: `L12314-L12320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12314-L12320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12314-L12320) · [Before (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12409)

```diff
-             return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = bk(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
+             return SS[QS[13]] = QS[2], typeof nS[SS[QS[1]]] === QS[19] ? nS[SS[QS[1]]] = gS(PS[SS[QS[1]]]) : nS[SS[QS[1]]]
+           }
+           HS[QS[13]] = QS[2];
+           try {
+             SS[QS[2]]
+           } catch (bS) {
+             SS[QS[2]] = ""
```

#### 1729. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12412-L12420` → after: `L12327-L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12327-L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12327-L12332) · [Before (L12412-L12420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12412-L12420)

```diff
-           function Uk(...kk) {
-             Vk(kk[Kk[12]] = Kk[2], kk[Kk[15]] = function(...Fk) {
-               return Vk(Fk[Kk[12]] = Kk[1], Fk[Kk[15]] = [], Fk[Kk[26]] = Fk[Kk[2]].length, Fk[Kk[2]].sort(((kk, Fk) => kk - Fk)), kk[Kk[65]](Fk[Kk[15]], [], Kk[2], Fk[Kk[26]], Fk[Kk[2]], Fk[Kk[0]])), Fk[Kk[15]]
-             }, kk[Kk[65]] = function(...Fk) {
-               if (Vk(Fk[Kk[12]] = Kk[21], Fk[Kk[68]] = Kk[66]), !(Fk[Kk[31]] < Kk[2])) {
-                 if (Fk[Kk[31]] === Kk[2]) return Fk[Kk[2]].push(Fk[Kk[0]]);
-                 for (Fk[Kk[67]] = Fk[Kk[1]]; Fk[Kk[67]] < Fk[Kk[4]] && !(Fk[Kk[16]][Fk[Kk[67]]] > Fk[Kk[31]]); Fk[Kk[67]]++) Fk[Kk[67]] > Fk[Kk[1]] && Fk[Kk[16]][Fk[Kk[67]]] === Fk[Kk[16]][Fk[Kk[67]] - Kk[0]] || Vk(Fk[Kk[68]] = Array.from(Fk[Kk[0]]), Fk[Kk[68]].push(Fk[Kk[16]][Fk … [truncated]
-               }
-             }, console.log(kk[Kk[15]]))
+         function uS(...SS) {
+           var HS, gS, tS, bS;
+           for (JS(SS[QS[13]] = QS[0], SS[QS[5]] = SS[QS[2]].length, SS[QS[59]] = Array()), SS[QS[44]] = Array(Math.ceil(SS[QS[1]].length / QS[0])), HS = QS[1]; HS < SS[QS[44]].length; HS++) SS[QS[44]][HS] = SS[QS[1]].charCodeAt(HS * QS[0]) << QS[11] | SS[QS[1]].charCodeAt(HS * QS … [truncated]
+           for (; SS[QS[44]].length > QS[1];) {
+             for (JS(bS = Array(), tS = QS[1]), HS = QS[1]; HS < SS[QS[44]].length; HS++) JS(tS = (tS << QS[45]) + SS[QS[44]][HS], gS = Math.floor(tS / SS[QS[5]]), tS -= gS * SS[QS[5]]), (bS.length > QS[1] || gS > QS[1]) && (bS[bS.length] = gS);
+             JS(SS[QS[59]][SS[QS[59]].length] = tS, SS[QS[44]] = bS)
```

#### 1730. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12422` → after: `L12334-L12336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12334-L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12334-L12336) · [Before (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12422)

```diff
-           Rk(132) + "V" in sk && Uk(), kk[Kk[69]] = Kk[4]
+           for (SS[QS[10]] = "", HS = SS[QS[59]].length - QS[2]; HS >= QS[1]; HS--) SS[QS[10]] += SS[QS[2]].charAt(SS[QS[59]][HS]);
+           for (SS[-QS[60]] = Math.ceil(SS[QS[1]].length * QS[11] / (Math.log(SS[QS[2]].length) / Math.log(QS[0]))), HS = SS[QS[10]].length; HS < SS[-QS[60]]; HS++) SS[QS[10]] = SS[QS[2]][QS[1]] + SS[QS[10]];
+           return SS[QS[10]]
```

#### 1731. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12424-L12430` → after: `L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12338) · [Before (L12424-L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12424-L12430)

```diff
-         kk[Kk[4]][Kk[60]] -= Ik[uk(Kk[48]) + uk(134) + uk(135) + uk(136) + "ck"]
-       }
-       const Xk = Ik[Fk(137) + Kk[71]] + kk[Kk[4]][Fk(138)];
-       Vk(kk[Kk[26]] = lk()[Fk(139)](kk[Kk[4]][Kk[56]]) + kk[Kk[16]][Fk(Kk[70]) + Fk(140)] * Xk * Ik[Fk(141)] * kk[Kk[69]], kk[Kk[26]] = ek[Kk[7]][Fk(142)](kk[Kk[26]], Ik[Fk(143) + Kk[71]], Xk), kk[Kk[4]][Fk(Kk[72])]++);
-       const ik = kk[Kk[23]] / 1e3,
-         yk = wk;
-       if (Vk(lk()[Fk(145)](yk, kk[Kk[16]][Fk(Kk[70]) + Fk(146) + Fk(147)]), lk()[Fk(Kk[81]) + Fk(Kk[82])](yk, yk), lk()[Fk(Kk[80])](yk, yk, kk[Kk[26]]), kk[-Kk[78]] = Kk[0]), kk[Kk[4]][Fk(Kk[72])] < Ik[Fk(Kk[83]) + Fk(Kk[84]) + Fk(Kk[85])]) {
+ 
```

#### 1732. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12432-L12441` → after: `L12340-L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12340-L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12340-L12342) · [Before (L12432-L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12432-L12441)

```diff
-           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[15]] = '&0uz`:%_$)~IwaPXg7tHOR"<(^hv|]YCd@jf#EJLQNZq8S2kn3!ymD*V[=W/eK9bp{rTcUoB}56?xsM.>+A14,liFG;', kk[-Kk[73]] = "" + (kk[Kk[2]] || ""), kk[Kk[41]] = kk[-Kk[73]].length, kk[-Kk[74]] = [], kk[-Kk[76]] = Kk[2], kk[Kk[77]] = Kk[2], kk[K … [truncated]
-             if (kk[Kk[28]] = kk[Kk[15]].indexOf(kk[-Kk[73]][kk[Kk[27]]]), kk[Kk[28]] !== -Kk[0])
-               if (kk[Kk[75]] < Kk[2]) kk[Kk[75]] = kk[Kk[28]];
-               else {
-                 Vk(kk[Kk[75]] += kk[Kk[28]] * Kk[30], kk[-Kk[76]] |= kk[Kk[75]] << kk[Kk[77]], kk[Kk[77]] += (kk[Kk[75]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
-                 do {
-                   Vk(kk[-Kk[74]].push(kk[-Kk[76]] & Kk[11]), kk[-Kk[76]] >>= Kk[10], kk[Kk[77]] -= Kk[10])
-                 } while (kk[Kk[77]] > Kk[23]);
-                 kk[Kk[75]] = -Kk[0]
-               } return kk[Kk[75]] > -Kk[0] && kk[-Kk[74]].push((kk[-Kk[76]] | kk[Kk[75]] << kk[Kk[77]]) & Kk[11]), Qk(kk[-Kk[74]])
+           var HS, gS;
+           for (JS(SS[QS[13]] = QS[2], SS[QS[2]] = "", SS[QS[0]] = -QS[2]); ++SS[QS[0]] < SS[QS[1]].length;) JS(HS = SS[QS[1]].charCodeAt(SS[QS[0]]), gS = SS[QS[0]] + QS[2] < SS[QS[1]].length ? SS[QS[1]].charCodeAt(SS[QS[0]] + QS[2]) : QS[1]), 55296 <= HS && HS <= 56319 && 56320 < … [truncated]
+           return SS[QS[2]]
```

#### 1733. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12445` → after: `L12346-L12348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12346-L12348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12346-L12348) · [Before (L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12445)

```diff
-           return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = Ck(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
+           for (JS(SS[QS[13]] = QS[2], SS[QS[68]] = Array(SS[QS[1]].length >> QS[0])), SS[QS[66]] = QS[1]; SS[QS[66]] < SS[QS[68]].length; SS[QS[66]]++) SS[QS[68]][SS[QS[66]]] = QS[1];
+           for (SS[QS[66]] = QS[1]; SS[QS[66]] < SS[QS[1]].length * QS[11]; SS[QS[66]] += QS[11]) SS[QS[68]][SS[QS[66]] >> QS[14]] |= (SS[QS[1]].charCodeAt(SS[QS[66]] / QS[11]) & QS[12]) << QS[72] - SS[QS[66]] % QS[71];
+           return SS[QS[68]]
```

#### 1734. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12447-L12452` → after: `L12350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12350) · [Before (L12447-L12452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12447-L12452)

```diff
-         kk[-Kk[78]] = jk[Kk[41]][Nk(154) + Nk(155)](kk[Kk[4]][Nk(Kk[79])] / Tk[Kk[8]][Nk(157) + Nk(158) + Nk(159) + "nd"]), kk[-Kk[78]] > .8 && Vk(kk[-Kk[78]] = Kk[0], kk[Kk[4]][Nk(Kk[79])] = 1e5)
-       }
-       const ak = Hk;
-       Vk(lk()[Fk(160)](ak, yk, kk[Kk[31]][Kk[49]]), lk()[Fk(Kk[80])](ak, ak, kk[Kk[31]][Kk[90]] * kk[-Kk[78]] / ik), kk[Kk[31]][Fk(Kk[91]) + Fk(Kk[92])](ak), lk()[Fk(Kk[55])](kk[Kk[4]][Kk[56]], kk[Kk[31]][Kk[49]], yk, kk[-Kk[78]]));
-       const qk = wk;
-       if (Vk(lk()[Fk(Kk[81]) + Fk(Kk[82])](qk, kk[Kk[4]][Kk[56]]), lk()[Fk(Kk[80])](qk, qk, Ik[Fk(164) + Fk(165) + Kk[7]])), kk[Kk[4]][Fk(Kk[72])] > Ik[Fk(Kk[83]) + Fk(Kk[84]) + Fk(Kk[85])]) {
+ 
```

#### 1735. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12454-L12463` → after: `L12352-L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12352-L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12352-L12353) · [Before (L12454-L12463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12454-L12463)

```diff
-           for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[0]] = '}SiYGbAaoJBLTn@rE[?8WC9>"l.!VZdIeuh1NftOzm3x/0]s#<F+g:*6R7~)QK=;U2_HvM`,$D4c%|(j{^X&k5Pwypq', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[Kk[41]] = kk[Kk[26]].length, kk[-Kk[47]] = [], kk[Kk[7]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[23]] … [truncated]
-             if (kk[Kk[86]] = kk[Kk[0]].indexOf(kk[Kk[26]][kk[Kk[3]]]), kk[Kk[86]] !== -Kk[0])
-               if (kk[Kk[23]] < Kk[2]) kk[Kk[23]] = kk[Kk[86]];
-               else {
-                 Vk(kk[Kk[23]] += kk[Kk[86]] * Kk[30], kk[Kk[7]] |= kk[Kk[23]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[23]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
-                 do {
-                   Vk(kk[-Kk[47]].push(kk[Kk[7]] & Kk[11]), kk[Kk[7]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
-                 } while (kk[Kk[8]] > Kk[23]);
-                 kk[Kk[23]] = -Kk[0]
-               } return kk[Kk[23]] > -Kk[0] && kk[-Kk[47]].push((kk[Kk[7]] | kk[Kk[23]] << kk[Kk[8]]) & Kk[11]), Qk(kk[-Kk[47]])
+           for (JS(SS[QS[13]] = QS[2], SS[QS[69]] = ""), SS[QS[70]] = QS[1]; SS[QS[70]] < SS[QS[1]].length * QS[71]; SS[QS[70]] += QS[11]) SS[QS[69]] += String.fromCharCode(SS[QS[1]][SS[QS[70]] >> QS[14]] >>> QS[72] - SS[QS[70]] % QS[71] & QS[12]);
+           return SS[QS[69]]
```

#### 1736. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12467` → after: `L12357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12357) · [Before (L12467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12467)

```diff
-           return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = ck(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
+           return SS[QS[13]] = QS[0], SS[QS[1]] >>> SS[QS[2]] | SS[QS[1]] << QS[71] - SS[QS[2]]
```

#### 1737. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12471-L12484` → after: `L12361-L12362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12361-L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12361-L12362) · [Before (L12471-L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12471-L12484)

```diff
-           function Fk(...kk) {
-             return kk[Kk[12]] = Kk[0], typeof xk[kk[Kk[2]]] === Kk[17] ? xk[kk[Kk[2]]] = function(...kk) {
-               for (Vk(kk[Kk[12]] = Kk[0], kk[Kk[87]] = 'A;yG|r$pK~sRxgP5u[#e}HnBv`Z/*M3TC_kmjDEFlQYIcJtOhVdaUi%f7NWqbLS2X1."(<4@{>&9w!z0=6?8^)+:,]o', kk[Kk[26]] = "" + (kk[Kk[2]] || ""), kk[Kk[4]] = kk[Kk[26]].length, kk[Kk[88]] = [], kk[Kk[7]] = Kk[2], kk[Kk[8]] = Kk[2], kk[Kk[2 … [truncated]
-                 if (kk[Kk[28]] = kk[Kk[87]].indexOf(kk[Kk[26]][kk[Kk[27]]]), kk[Kk[28]] !== -Kk[0])
-                   if (kk[Kk[23]] < Kk[2]) kk[Kk[23]] = kk[Kk[28]];
-                   else {
-                     Vk(kk[Kk[23]] += kk[Kk[28]] * Kk[30], kk[Kk[7]] |= kk[Kk[23]] << kk[Kk[8]], kk[Kk[8]] += (kk[Kk[23]] & Kk[32]) > Kk[33] ? Kk[34] : Kk[35]);
-                     do {
-                       Vk(kk[Kk[88]].push(kk[Kk[7]] & Kk[11]), kk[Kk[7]] >>= Kk[10], kk[Kk[8]] -= Kk[10])
-                     } while (kk[Kk[8]] > Kk[23]);
-                     kk[Kk[23]] = -Kk[0]
-                   } return kk[Kk[23]] > -Kk[0] && kk[Kk[88]].push((kk[Kk[7]] | kk[Kk[23]] << kk[Kk[8]]) & Kk[11]), Qk(kk[Kk[88]])
-             }(Pk[kk[Kk[2]]]) : xk[kk[Kk[2]]]
-           }
+           return SS[QS[13]] = QS[0], SS[QS[1]] >>> SS[QS[2]]
+         }
```

#### 1738. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12486-L12512` → after: `L12364-L12392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12364-L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12364-L12392) · [Before (L12486-L12512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12486-L12512)

```diff
-           function Ik(...kk) {
-             if (kk[Kk[12]] = Kk[0], !kk[Kk[2]]) return -Kk[0];
-             const Fk = Ik(kk[Kk[2]].left),
-               Xk = Ik(kk[Kk[2]].right),
-               Tk = Math.abs(Fk - Xk);
-             if (Fk === 1 / 0 || Xk === 1 / 0 || Tk > Kk[0]) return 1 / 0;
-             return Math.max(Fk, Xk) + Kk[0]
-           }
-           kk[Kk[12]] = Kk[2], window[Fk(167) + Fk(168) + Fk(169) + "_"] = {
-             buildCharacterMap: function(...kk) {
-               kk[Kk[12]] = Kk[0];
-               const Fk = {};
-               for (let Ik of kk[Kk[2]].replace(/[^w]/g, "").toLowerCase()) Fk[Ik] = Fk[Ik] + Kk[0] || Kk[0];
-               return Fk
-             },
-             isAnagrams: function(...kk) {
- ... (11 more removed lines; see GitHub link above)
+         function jS(...SS) {
+           return SS[QS[13]] = QS[30], SS[QS[1]] & SS[QS[2]] ^ ~SS[QS[1]] & SS[QS[0]]
+         }
+ 
+         function GS(...SS) {
+           return SS[QS[13]] = QS[30], SS[QS[1]] & SS[QS[2]] ^ SS[QS[1]] & SS[QS[0]] ^ SS[QS[2]] & SS[QS[0]]
+         }
+ 
+         function CS(...SS) {
+           return SS[QS[13]] = QS[2], aS(SS[QS[1]], QS[0]) ^ aS(SS[QS[1]], QS[37]) ^ aS(SS[QS[1]], 22)
+         }
+ 
+         function ZS(...SS) {
+           return SS[QS[13]] = QS[2], aS(SS[QS[1]], QS[9]) ^ aS(SS[QS[1]], QS[108]) ^ aS(SS[QS[1]], 25)
+         }
+ 
+ ... (13 more added lines; see GitHub link above)
```

#### 1739. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12515-L12517` → after: `L12396-L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12396-L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12396-L12743) · [Before (L12515-L12517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12515-L12517)

```diff
-         Wk(166) in sk && fk(), qk[Kk[0]] = -Ik[Wk(170) + Wk(171) + Kk[7]]
-       }
-       Vk(lk()[Fk(Kk[80])](qk, qk, kk[Kk[31]][Kk[90]] / ik), kk[Kk[31]][Fk(Kk[91]) + Fk(Kk[92])](qk), kk[Kk[31]][Fk(Kk[93]) + Kk[94]] = Ik[Fk(Kk[93]) + Kk[94]])
+ 
+         function vS(...SS) {
+           return JS(SS[QS[13]] = QS[0], SS[-QS[41]] = (SS[QS[1]] & QS[77]) + (SS[QS[2]] & QS[77]), SS[QS[78]] = (SS[QS[1]] >> QS[45]) + (SS[QS[2]] >> QS[45]) + (SS[-QS[41]] >> QS[45])), SS[QS[78]] << QS[45] | SS[-QS[41]] & QS[77]
+         }
+         return JS(SS[QS[13]] = QS[1], SS[-QS[53]] = QS[1], SS[QS[2]] = ""), SS[QS[76]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, … [truncated]
+           hex: HS,
+           b64: tS,
+           any: bS,
+           hex_hmac: gS,
+           b64_hmac: tS,
+           any_hmac: bS
+         }
+       }(), console.log(SS[QS[66]]))
+     }(), CS = (...SS) => {
+       function HS(...SS) {
+         return SS[QS[13]] = QS[2], typeof nS[SS[QS[1]]] === QS[19] ? nS[SS[QS[1]]] = function(...SS) {
+ ... (332 more added lines; see GitHub link above)
```

#### 1740. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12519-L12521` → after: `L12745-L12747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12745-L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12745-L12747) · [Before (L12519-L12521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12519-L12521)

```diff
-     var zk = Ik(37672),
-       Sk = Ik(6473),
-       vk = Ik(1231);
+     var OS = gS(37667),
+       dS = gS(6670),
+       cS = gS(1327);
```

#### 1741. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12596` → after: `L12822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12822) · [Before (L12596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12596)

```diff
-       Ok = (0, ek.db)(qk.n, (kk => {
+       ES = (0, KS.U)(uS.o, (SS => {
```

#### 1742. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12598-L12599` → after: `L12824-L12825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12824-L12825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12824-L12825) · [Before (L12598-L12599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12598-L12599)

```diff
-         const yk = (0, qk.f)(kk);
-         return null !== (Fk = null !== (Ik = null === (Xk = Ek[yk]) || void 0 === Xk ? void 0 : Xk.upForceScalar) && void 0 !== Ik ? Ik : null === (Tk = qk.n[kk]) || void 0 === Tk || null === (ik = Tk.climbableInside) || void 0 === ik ? void 0 : ik.upForceScalar) && void 0 !== Fk … [truncated]
+         const xS = (0, uS.h)(SS);
+         return null !== (HS = null !== (gS = null === (tS = vS[xS]) || void 0 === tS ? void 0 : tS.upForceScalar) && void 0 !== gS ? gS : null === (bS = uS.o[SS]) || void 0 === bS || null === (XS = bS.climbableInside) || void 0 === XS ? void 0 : XS.upForceScalar) && void 0 !== HS … [truncated]
```

#### 1743. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12607` → after: `L12833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12833) · [Before (L12607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12607)

```diff
-     const gk = [212, 0, 1, 182, "c", 79, 81, 7, "e", 201, 4, 8, 255, "length", "undefined", void 0, 231, 11, 191, 63, 6, "fromCodePoint", 12, "push", 85, 3, "b", 135, 9, 91, 116, 8191, 88, 13, 14, 2, 100, 230, 223, "h", 203, "d", 222, "a", 181, 210, 208, 198, 17, 226, 5, 127, "g" … [truncated]
+     const oS = [2, 0, 1, "h", 3, "a", 9, 84, 119, "f", 171, 8, 255, "length", "b", 61, "d", 216, "undefined", void 0, 38, "c", 195, 63, 6, "fromCodePoint", 7, 12, "push", 181, "i", "g", 91, 165, 143, 8191, 88, 13, 14, 175, 189, 239, 209, 30, "e", 89, 60, 137, null, 113, 187, 48,  … [truncated]
```

#### 1744. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12610-L12613` → after: `L12836-L12839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12836-L12839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12836-L12839) · [Before (L12610-L12613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12610-L12613)

```diff
-       return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
-         for (qF(kk[gk[13]] = gk[2], kk[gk[5]] = ';*o}HV<n=`Cv)tpeJA?X(gBOmbu$x%9DZQ6"&0!7dl:358kq1Uyj4>hMcN,2@/#S+P]W|R^E[Y~f_F{iz.IrGLTKwas', kk[gk[0]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[0]].length, kk[gk[10]] = [], kk[gk[8]] = gk[1], kk[gk[9]] = gk[1], kk[gk[7]] = -gk[ … [truncated]
-           if (kk[gk[6]] = kk[gk[5]].indexOf(kk[gk[0]][kk[-gk[3]]]), kk[gk[6]] !== -gk[2])
-             if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[6]];
+       return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
+         for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'woa*?lDH]RGC{~0,e5%_pfz(vncO:P^$yxQM6;+h3`uIN14W&ZmYVK|Tq=S8)AjrE#b}g[!J27s>/kUB@dLF9.Xt<i"', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[0]].length, SS[-oS[10]] = [], SS[oS[8]] = oS[1], SS[oS[9]] = oS[1], SS[-oS[7]] = -o … [truncated]
+           if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[0]][SS[oS[3]]]), SS[oS[6]] !== -oS[2])
+             if (SS[-oS[7]] < oS[1]) SS[-oS[7]] = SS[oS[6]];
```

#### 1745. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12615` → after: `L12841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12841) · [Before (L12615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12615)

```diff
-               qF(kk[gk[7]] += kk[gk[6]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[gk[9]], kk[gk[9]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+               NH(SS[-oS[7]] += SS[oS[6]] * oS[32], SS[oS[8]] |= SS[-oS[7]] << SS[oS[9]], SS[oS[9]] += (SS[-oS[7]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1746. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12617-L12620` → after: `L12843-L12846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12843-L12846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12843-L12846) · [Before (L12617-L12620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12617-L12620)

```diff
-                 qF(kk[gk[10]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[9]] -= gk[11])
-               } while (kk[gk[9]] > gk[7]);
-               kk[gk[7]] = -gk[2]
-             } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[8]] | kk[gk[7]] << kk[gk[9]]) & gk[12]), hk(kk[gk[10]])
+                 NH(SS[-oS[10]].push(SS[oS[8]] & oS[12]), SS[oS[8]] >>= oS[11], SS[oS[9]] -= oS[11])
+               } while (SS[oS[9]] > oS[26]);
+               SS[-oS[7]] = -oS[2]
+             } return SS[-oS[7]] > -oS[2] && SS[-oS[10]].push((SS[oS[8]] | SS[-oS[7]] << SS[oS[9]]) & oS[12]), mS(SS[-oS[10]])
```

#### 1747. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12629-L12642` → after: `L12851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12851) · [Before (L12629-L12642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12629-L12642)

```diff
-       if (kk[gk[13]] = gk[25], kk[gk[1]] === function(...kk) {
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
-             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '?HTLRc{g+[vCAJFzkZj*@Ve:3~17K$bPmO0I#";G.,sU)ot}YW!x/&B6i_l|aXyD9^`MhpE>qf]%=8Surwd4N(5Q2n<', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[10]] = [], kk[gk[30]] = gk[1], kk[gk[20]] = gk[1], kk[gk[7] … [truncated]
-               if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[26]][kk[-gk[27]]]), kk[gk[28]] !== -gk[2])
-                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
-                 else {
-                   qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[30]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                   do {
-                     qF(kk[gk[10]].push(kk[gk[30]] & gk[12]), kk[gk[30]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
-                   kk[gk[7]] = -gk[2]
-                 } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[30]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[10]])
-           }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-         }(105)) return kk[gk[2]] + kk[gk[35]]
+       return SS[oS[13]] = oS[2], typeof US !== oS[18] && US ? (new US).decode(new pS(SS[oS[1]])) : typeof sS !== oS[18] && sS ? sS.from(SS[oS[1]]).toString("utf-8") : FS(SS[oS[1]])
```

#### 1748. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12649-L12656` → after: `L12858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12858) · [Before (L12649-L12656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12649-L12656)

```diff
-           qF(kk[gk[13]] = gk[1], kk[-gk[36]] = function(kk) {
-             var Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk = kk.length;
-             if (tk < gk[35]) return gk[1];
-             if (qF(Fk = Math.max(...kk), Ik = Math.min(...kk)), Fk === Ik) return gk[1];
-             for (qF(Xk = Array(tk - gk[2]).fill(Number.MAX_SAFE_INTEGER), Tk = Array(tk - gk[2]).fill(Number.MIN_SAFE_INTEGER), ik = Math.ceil((Fk - Ik) / (tk - gk[2])), yk = gk[1]), lk = gk[1]; lk < tk; lk++) kk[lk] !== Ik && kk[lk] !== Fk && qF(yk = Math.floor((kk[lk] - Ik) / i … [truncated]
-             for (qF(ak = Number.MIN_SAFE_INTEGER, qk = Ik), Lk = gk[1]; Lk < tk - gk[2]; Lk++) Xk[Lk] === Number.MAX_SAFE_INTEGER && Tk[Lk] === Number.MIN_SAFE_INTEGER || qF(ak = Math.max(ak, Xk[Lk] - qk), qk = Tk[Lk]);
-             return ak = Math.max(ak, Fk - qk)
-           }, console.log(kk[-gk[36]]))
+           SS[oS[13]] = oS[1]
```

#### 1749. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12658-L12664` → after: `L12860-L12864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12860-L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12860-L12864) · [Before (L12658-L12664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12658-L12664)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = Tk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-         }), Tk || (Tk = function(kk) {
-           var Fk, Ik, Xk, Tk, ik, yk, lk;
-           for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
-             var ak = 'q.%yx>1;_80zoFLSAEfXPBcwn=Yj{gUJ2k)t~r6G*5sNWvl#?I(V&!9^d+h"]<`/meT3D$|pQ}aK,4uRiC7b[H@OMZ:'.indexOf(Fk[lk]);
-             if (ak !== -gk[2])
-               if (yk < gk[1]) yk = ak;
+           return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = bS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+         }), bS || (bS = function(...SS) {
+           for (NH(SS[oS[13]] = oS[2], SS[-oS[26]] = '<GMXPAWSqfR4B8+5#eV.?Fcm2H097g;}rT*%El|sx/p)d1Nj=ni@3L`u&(O,Zzk:_{aCDv~o$!UY^w"bI>]yh[K6JQt', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[29]] = SS[oS[0]].length, SS[oS[39]] = [], SS[-oS[33]] = oS[1], SS[oS[34]] = oS[1], SS[oS[3 … [truncated]
+             if (SS[oS[30]] = SS[-oS[26]].indexOf(SS[oS[0]][SS[oS[3]]]), SS[oS[30]] !== -oS[2])
+               if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[30]];
```

#### 1750. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12666` → after: `L12866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12866) · [Before (L12666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12666)

```diff
-                 qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 NH(SS[oS[31]] += SS[oS[30]] * oS[32], SS[-oS[33]] |= SS[oS[31]] << SS[oS[34]], SS[oS[34]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1751. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12668-L12675` → after: `L12868-L12873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12868-L12873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12868-L12873) · [Before (L12668-L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12668-L12675)

```diff
-                   qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
-                 } while (ik > gk[7]);
-                 yk = -gk[2]
-               }
-           }
-           return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
-         }), ik(gk[264]) + gk[112] in Dk && yk(), qF(lk = void 0, ak = {
-           [ik(108)]: function(...kk) {
+                   NH(SS[oS[39]].push(SS[-oS[33]] & oS[12]), SS[-oS[33]] >>= oS[11], SS[oS[34]] -= oS[11])
+                 } while (SS[oS[34]] > oS[26]);
+                 SS[oS[31]] = -oS[2]
+               } return SS[oS[31]] > -oS[2] && SS[oS[39]].push((SS[-oS[33]] | SS[oS[31]] << SS[oS[34]]) & oS[12]), mS(SS[oS[39]])
+         }), XS(oS[8]) + oS[30] in eS && xS(), NH(NS = void 0, qS = {
+           [XS(oS[72])]: function(...SS) {
```

#### 1752. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12677-L12680` → after: `L12875-L12878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12875-L12878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12875-L12878) · [Before (L12677-L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12677-L12680)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'm)|IfiEvrTy}^;DxX0<7YAQ9&1_,B:8kl(nZC]R[3p#.V5hsaj/NduFe~S%!G?2gJU+>P=`4"$W6oO*qzb{cMLHtKw@', kk[-gk[37]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[37]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[-gk[38]] = gk[1], kk … [truncated]
-                   if (kk[gk[28]] = kk[gk[2]].indexOf(kk[-gk[37]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
-                     if (kk[gk[40]] < gk[1]) kk[gk[40]] = kk[gk[28]];
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = 'pvH5syQ>i2hx&b4!LPA`#.O^J7u{N}IcB+C6wg_8Kl:0zDSf3n[W]Y"@9*ZUajq$RXV?M)/(%kGt;E~=e1,o<dFTrm|', SS[oS[49]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[49]].length, SS[-oS[52]] = [], SS[oS[44]] = oS[1], SS[-oS[51]] = oS[1], SS … [truncated]
+                   if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[49]][SS[oS[3]]]), SS[oS[6]] !== -oS[2])
+                     if (SS[-oS[50]] < oS[1]) SS[-oS[50]] = SS[oS[6]];
```

#### 1753. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12682` → after: `L12880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12880) · [Before (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12682)

```diff
-                       qF(kk[gk[40]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[40]] << kk[-gk[38]], kk[-gk[38]] += (kk[gk[40]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       NH(SS[-oS[50]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[-oS[50]] << SS[-oS[51]], SS[-oS[51]] += (SS[-oS[50]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1754. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12684-L12687` → after: `L12882-L12885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12882-L12885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12882-L12885) · [Before (L12684-L12687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12684-L12687)

```diff
-                         qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[38]] -= gk[11])
-                       } while (kk[-gk[38]] > gk[7]);
-                       kk[gk[40]] = -gk[2]
-                     } return kk[gk[40]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[40]] << kk[-gk[38]]) & gk[12]), hk(kk[gk[41]])
+                         NH(SS[-oS[52]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[-oS[51]] -= oS[11])
+                       } while (SS[-oS[51]] > oS[26]);
+                       SS[-oS[50]] = -oS[2]
+                     } return SS[-oS[50]] > -oS[2] && SS[-oS[52]].push((SS[oS[44]] | SS[-oS[50]] << SS[-oS[51]]) & oS[12]), mS(SS[-oS[52]])
```

#### 1755. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12689-L12739` → after: `L12887-L12888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12887-L12888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12887-L12888) · [Before (L12689-L12739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12689-L12739)

```diff
-             }
-             Fk(gk[305]) in Dk && function(...kk) {
-               kk[gk[13]] = gk[1];
-               const Fk = require("big-integer");
-               qF(kk[gk[43]] = class {
-                 static randomPrime(...kk) {
-                   kk[gk[13]] = gk[2];
-                   const Ik = Fk.one.shiftLeft(kk[gk[1]] - gk[2]),
-                     Xk = Fk.one.shiftLeft(kk[gk[1]]).prev();
-                   for (; gk[58];) {
-                     let kk = Fk.randBetween(Ik, Xk);
-                     if (kk.isProbablePrime(gk[59])) return kk
-                   }
-                 }
-                 static generate(...kk) {
-                   kk[gk[13]] = gk[2];
- ... (35 more removed lines; see GitHub link above)
+             } [
+               [SS[-oS[53]], SS[oS[14]], SS[oS[0]]], SS[oS[16]]
```

#### 1756. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12741-L12742` → after: `L12890-L12891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12890-L12891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12890-L12891) · [Before (L12741-L12742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12741-L12742)

```diff
-             const Ik = kk[gk[44]][Fk(gk[103])];
-             Ik[Fk(gk[85]) + gk[54]] && Ik[Fk(gk[396]) + Fk(gk[233]) + Fk(gk[312]) + "es"](kk[-gk[45]], kk[gk[46]])
+             const gS = SS[-oS[53]][HS(oS[252])];
+             gS[HS(oS[54]) + oS[58]] && gS[HS(oS[55]) + HS(oS[151]) + HS(130)](SS[oS[14]], SS[oS[0]])
```

#### 1757. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12744-L12749` → after: `L12893-L12898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12893-L12898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12893-L12898) · [Before (L12744-L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12744-L12749)

```diff
-           [ik(gk[302])]: function(...kk) {
-             function Fk(kk) {
-               return typeof Rk[kk] === gk[14] ? Rk[kk] = function(...kk) {
-                 for (qF(kk[gk[13]] = gk[2], kk[-gk[32]] = '`LAWBJSbaZjr@QP,CV1R&kOUMX<T.[d{(cg2?s4o$>Nei8In#H3ux07FEhDz]q/=|v6*%!lp;fY_+~Ky"9:)^wG}m5t', kk[gk[47]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[47]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk … [truncated]
-                   if (kk[gk[48]] = kk[-gk[32]].indexOf(kk[gk[47]][kk[gk[11]]]), kk[gk[48]] !== -gk[2])
-                     if (kk[gk[49]] < gk[1]) kk[gk[49]] = kk[gk[48]];
+           [XS(oS[310])]: function(...SS) {
+             function HS(...SS) {
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'XzcAf`Sm5GiZPqbw%)8ahor*"QTEW|^geJkN@B]!I0Cp_Mj~3={yR6DK:V&n?/#4F2Ov($>;dtsU.H}l1L9<u+[x7,Y', SS[-oS[56]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[-oS[56]].length, SS[-oS[40]] = [], SS[oS[57]] = oS[1], SS[oS[9]] = oS[1], S … [truncated]
+                   if (SS[oS[6]] = SS[oS[2]].indexOf(SS[-oS[56]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+                     if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
```

#### 1758. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12751` → after: `L12900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12900) · [Before (L12751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12751)

```diff
-                       qF(kk[gk[49]] += kk[gk[48]] * gk[29], kk[gk[50]] |= kk[gk[49]] << kk[gk[20]], kk[gk[20]] += (kk[gk[49]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[57]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1759. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12753-L12774` → after: `L12902-L12908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12902-L12908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12902-L12908) · [Before (L12753-L12774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12753-L12774)

```diff
-                         qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
-                       } while (kk[gk[20]] > gk[7]);
-                       kk[gk[49]] = -gk[2]
-                     } return kk[gk[49]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[49]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
-               }(Uk[kk]) : Rk[kk]
-             }
-             Fk(gk[30]) + "N" in Dk && function(...kk) {
-               qF(kk[gk[13]] = gk[1], kk[gk[43]] = function(...kk) {
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[10]] = kk[gk[1]].length, kk[gk[26]] = [], kk[-gk[51]] = gk[1], kk[gk[53]] = gk[1], kk[gk[1]].sort(((kk, Fk) => kk - Fk))), kk[gk[52]] = gk[1]; kk[gk[52]] < kk[gk[10]]; kk[gk[52]]++)
-                   if (!(kk[gk[52]] > gk[1] && kk[gk[1]][kk[gk[52]]] === kk[gk[1]][kk[gk[52]] - gk[2]]))
-                     for (qF(kk[-gk[51]] = kk[gk[52]] + gk[2], kk[gk[53]] = kk[gk[10]] - gk[2]); kk[-gk[51]] < kk[gk[53]];)
-                       if (kk[gk[1]][kk[gk[52]]] + kk[gk[1]][kk[-gk[51]]] + kk[gk[1]][kk[gk[53]]] < gk[1]) kk[-gk[51]]++;
-                       else if (kk[gk[1]][kk[gk[52]]] + kk[gk[1]][kk[-gk[51]]] + kk[gk[1]][kk[gk[53]]] > gk[1]) kk[gk[53]]--;
-                 else {
-                   for (kk[gk[26]].push([kk[gk[1]][kk[gk[52]]], kk[gk[1]][kk[-gk[51]]], kk[gk[1]][kk[gk[53]]]]); kk[-gk[51]] < kk[gk[53]] && kk[gk[1]][kk[-gk[51]]] === kk[gk[1]][kk[-gk[51]] + gk[2]];) kk[-gk[51]]++;
-                   for (; kk[-gk[51]] < kk[gk[53]] && kk[gk[1]][kk[gk[53]]] === kk[gk[1]][kk[gk[53]] - gk[2]];) kk[gk[53]]--;
- ... (6 more removed lines; see GitHub link above)
+                         NH(SS[-oS[40]].push(SS[oS[57]] & oS[12]), SS[oS[57]] >>= oS[11], SS[oS[9]] -= oS[11])
+                       } while (SS[oS[9]] > oS[26]);
+                       SS[oS[31]] = -oS[2]
+                     } return SS[oS[31]] > -oS[2] && SS[-oS[40]].push((SS[oS[57]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[-oS[40]])
+               }(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             } [
+               [SS[oS[5]], SS[oS[2]], SS[oS[21]], SS[oS[59]], SS[oS[44]]], SS[-oS[183]]
```

#### 1760. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12776-L12778` → after: `L12910-L12913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12910-L12913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12910-L12913) · [Before (L12776-L12778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12776-L12778)

```diff
-             const Ik = kk[gk[43]][Fk(117)];
-             if (Ik[Fk(118) + gk[54]]) Ik[Fk(gk[370]) + Fk(gk[66]) + Fk(122)](kk[gk[26]], kk[gk[35]]);
-             else {
+             if (!SS[oS[5]][XS(oS[123])][XS(oS[124]) + oS[58]]) {
+               return void XS(134)
+             }
+             if (!SS[oS[21]] || SS[oS[59]] === oS[1]) {
```

#### 1761. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12780-L12782` → after: `L12915-L12917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12915-L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12915-L12917) · [Before (L12780-L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12780-L12782)

```diff
-                 for (qF(kk[gk[13]] = gk[2], kk[-gk[17]] = 'u~"1|0EK*Pdj4q9%(Dik[_=v;>VF/w5Jm?t)CxolWfXhZ.LpyB^nIb!MQYA2s`8&G:+3THa]gczN6e$,<#7US{}O@rR', kk[gk[55]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[55]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[-gk[57]] = gk[1],  … [truncated]
-                   if (kk[gk[28]] = kk[-gk[17]].indexOf(kk[gk[55]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
-                     if (kk[gk[56]] < gk[1]) kk[gk[56]] = kk[gk[28]];
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = '|GlHYLPjRmiVSUtregCBMhNosKQEfndD5yXu$!=T4+b,#J?*<AZ%OvpW.F(1qak&Ic6x;2]09)@^:}7`w{/[z_>38"~', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[60]] = SS[oS[14]].length, SS[oS[64]] = [], SS[-oS[63]] = oS[1], SS[oS[9]] = oS[1], SS[ … [truncated]
+                   if (SS[oS[61]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[61]] !== -oS[2])
+                     if (SS[oS[62]] < oS[1]) SS[oS[62]] = SS[oS[61]];
```

#### 1762. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12784` → after: `L12919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12919) · [Before (L12784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12784)

```diff
-                       qF(kk[gk[56]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[56]] << kk[-gk[57]], kk[-gk[57]] += (kk[gk[56]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       NH(SS[oS[62]] += SS[oS[61]] * oS[32], SS[-oS[63]] |= SS[oS[62]] << SS[oS[9]], SS[oS[9]] += (SS[oS[62]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1763. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12786-L12789` → after: `L12921-L12924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12921-L12924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12921-L12924) · [Before (L12786-L12789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12786-L12789)

```diff
-                         qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[57]] -= gk[11])
-                       } while (kk[-gk[57]] > gk[7]);
-                       kk[gk[56]] = -gk[2]
-                     } return kk[gk[56]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[56]] << kk[-gk[57]]) & gk[12]), hk(kk[gk[41]])
+                         NH(SS[oS[64]].push(SS[-oS[63]] & oS[12]), SS[-oS[63]] >>= oS[11], SS[oS[9]] -= oS[11])
+                       } while (SS[oS[9]] > oS[26]);
+                       SS[oS[62]] = -oS[2]
+                     } return SS[oS[62]] > -oS[2] && SS[oS[64]].push((SS[-oS[63]] | SS[oS[62]] << SS[oS[9]]) & oS[12]), mS(SS[oS[64]])
```

#### 1764. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12793` → after: `L12928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12928) · [Before (L12793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12793)

```diff
-                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = Xk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = bS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1765. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12797-L12821` → after: `L12932-L12937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12932-L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12932-L12937) · [Before (L12797-L12821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12797-L12821)

```diff
-                 kk[gk[13]] = gk[1];
-                 const Fk = require("big-integer");
-                 qF(kk[gk[43]] = class {
-                   static randomPrime(...kk) {
-                     kk[gk[13]] = gk[2];
-                     const Ik = Fk.one.shiftLeft(kk[gk[1]] - gk[2]),
-                       Xk = Fk.one.shiftLeft(kk[gk[1]]).prev();
-                     for (; gk[58];) {
-                       let kk = Fk.randBetween(Ik, Xk);
-                       if (kk.isProbablePrime(gk[59])) return kk
-                     }
-                   }
-                   static generate(...kk) {
-                     kk[gk[13]] = gk[2];
-                     const Ik = Fk(gk[60]);
-                     let Xk, Tk;
- ... (9 more removed lines; see GitHub link above)
+                 NH(SS[oS[13]] = oS[1], SS[oS[54]] = function(...HS) {
+                   return NH(HS[oS[13]] = oS[2], HS[-oS[65]] = []), (HS[oS[1]] === oS[2] || HS[oS[1]] >= oS[66]) && SS[oS[2]](HS[-oS[65]], [], HS[oS[1]], oS[1]), HS[-oS[65]]
+                 }, SS[oS[2]] = function(...HS) {
+                   for (HS[oS[13]] = oS[66], HS[oS[66]] = HS[oS[4]]; HS[oS[66]] < HS[oS[0]]; HS[oS[66]]++) {
+                     if (HS[oS[2]].length !== HS[oS[66]]) return;
+                     for (HS[oS[67]] = oS[1]; HS[oS[67]] < HS[oS[0]]; HS[oS[67]]++) SS[oS[53]](HS[oS[2]], [HS[oS[66]], HS[oS[67]]]) && (NH(HS[oS[2]].push([HS[oS[66]], HS[oS[67]]]), SS[oS[2]](HS[oS[1]], HS[oS[2]], HS[oS[0]], HS[oS[66]] + oS[2])), HS[oS[2]].length === HS[oS[0]] && H … [truncated]
```

#### 1766. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12823-L12824` → after: `L12939-L12946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12939-L12946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12939-L12946) · [Before (L12823-L12824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12823-L12824)

```diff
-                   static encrypt(...kk) {
-                     return kk[gk[13]] = gk[25], Fk(kk[gk[1]]).modPow(kk[gk[35]], kk[gk[2]])
+                 }, SS[oS[4]] = function(...SS) {
+                   for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = [], SS[oS[69]] = SS[oS[1]].length), SS[oS[68]] = oS[1]; SS[oS[68]] < SS[oS[69]]; SS[oS[68]]++)
+                     for (SS[oS[5]][SS[oS[68]]] = "", SS[oS[16]] = oS[1]; SS[oS[16]] < SS[oS[69]]; SS[oS[16]]++) SS[oS[5]][SS[oS[68]]] += SS[oS[1]][SS[oS[68]]][oS[2]] === SS[oS[16]] ? oS[150] : ".";
+                   return SS[oS[5]]
+                 }, SS[oS[53]] = function(...SS) {
+                   for (NH(SS[oS[13]] = oS[0], SS[-oS[70]] = SS[oS[1]].length), SS[oS[4]] = oS[1]; SS[oS[4]] < SS[-oS[70]]; SS[oS[4]]++) {
+                     if (SS[oS[1]][SS[oS[4]]][oS[1]] === SS[oS[2]][oS[1]] || SS[oS[1]][SS[oS[4]]][oS[2]] === SS[oS[2]][oS[2]]) return oS[71];
+                     if (Math.abs((SS[oS[1]][SS[oS[4]]][oS[1]] - SS[oS[2]][oS[1]]) / (SS[oS[1]][SS[oS[4]]][oS[2]] - SS[oS[2]][oS[2]])) === oS[2]) return oS[71]
```

#### 1767. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12826-L12889` → after: `L12948-L12949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12948-L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12948-L12949) · [Before (L12826-L12889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12826-L12889)

```diff
-                   static decrypt(kk, Ik, Xk) {
-                     return Fk(kk).modPow(Ik, Xk)
-                   }
-                   static encode(...kk) {
-                     kk[gk[13]] = gk[2];
-                     const Ik = kk[gk[1]].split("").map((kk => kk.charCodeAt())).join("");
-                     return Fk(Ik)
-                   }
-                   static decode(...kk) {
-                     kk[gk[13]] = gk[2];
-                     const Fk = kk[gk[1]].toString();
-                     kk[gk[43]] = "";
-                     for (let Ik = gk[1]; Ik < Fk.length; Ik += gk[35]) {
-                       let Xk = Number(Fk.substr(Ik, gk[35]));
-                       Xk <= gk[61] ? (kk[gk[43]] += String.fromCharCode(Number(Fk.substr(Ik, gk[25]))), Ik++) : kk[gk[43]] += String.fromCharCode(Xk)
-                     }
- ... (48 more removed lines; see GitHub link above)
+                   return oS[78]
+                 }, console.log(SS[oS[54]]))
```

#### 1768. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12891` → after: `L12951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12951) · [Before (L12891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12891)

```diff
-               return void(Fk(gk[51]) + gk[285] in Dk && Tk())
+               return void(xS(135) in eS && NS())
```

#### 1769. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12893-L12910` → after: `L12953-L12954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12953-L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12953-L12954) · [Before (L12893-L12910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12893-L12910)

```diff
-             if (!kk[gk[4]] || kk[gk[25]] === gk[1]) {
-               function ik(kk) {
-                 var Fk, Ik, Xk, Tk, ik, yk, lk;
-                 for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
-                   var ak = '{OqnlZiISDtmoFRWsJecCkVv@urU5L+z":3^P2E/6~]X*N1=B9_gY;y7h)Max!p.`jd[G%w|><f8H}b$0&KT4A?,Q(#'.indexOf(Fk[lk]);
-                   if (ak !== -gk[2])
-                     if (yk < gk[1]) yk = ak;
-                     else {
-                       qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                       do {
-                         qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
-                       } while (ik > gk[7]);
-                       yk = -gk[2]
-                     }
-                 }
-                 return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
- ... (2 more removed lines; see GitHub link above)
+             const gS = Math[XS(oS[87])](SS[oS[44]]);
+             if (gS <= SS[oS[21]][HS(oS[47]) + oS[79]]) {
```

#### 1770. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12912-L12935` → after: `L12956-L12958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12956-L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12956-L12958) · [Before (L12912-L12935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12912-L12935)

```diff
-                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = ik(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-               }
- 
-               function lk() {
-                 console.log((function(kk) {
-                   var Fk, Ik, Xk, Tk, ik, yk, lk = gk[1];
-                   for (qF(Fk = {}, Ik = gk[1], Xk = gk[1], Tk = gk[1], ik = kk.length), yk = gk[1]; yk < ik; yk++) {
-                     var ak;
-                     for (qF(Fk = {}, Ik = gk[1], Xk = gk[2]), ak = yk + gk[2]; ak < ik; ak++) kk[yk].x !== kk[ak].x || kk[yk].y !== kk[ak].y ? (Fk[Tk = kk[yk].y === kk[ak].y ? Number.MAX_SAFE_INTEGER : (kk[yk].x - kk[ak].x) / (kk[yk].y - kk[ak].y)] || (Fk[Tk] = gk[1]), qF(Fk[Tk]+ … [truncated]
-                     qF(Ik += Xk, lk = Math.max(lk, Ik))
-                   }
-                   return lk
-                 }))
-               }
-               return void(yk(gk[71]) + "x" in Dk && lk())
-             }
- ... (8 more removed lines; see GitHub link above)
+                 for (NH(SS[oS[13]] = oS[2], SS[-oS[72]] = 'Jmy1<>5D"hv?92j:w)/#kT~A&s=p.@Z^i$;Sxbz|nYu7WB%OG+60{NC}_fIHP]8o![r(tXg43Q`F*,qRVdcKlLUeaME', SS[-oS[51]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[-oS[51]].length, SS[oS[16]] = [], SS[oS[73]] = oS[1], SS[oS[24]] = oS[1], … [truncated]
+                   if (SS[oS[6]] = SS[-oS[72]].indexOf(SS[-oS[51]][SS[oS[3]]]), SS[oS[6]] !== -oS[2])
+                     if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
```

#### 1771. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12937` → after: `L12960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12960) · [Before (L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12937)

```diff
-                       qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[73]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1772. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12939-L12944` → after: `L12962-L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12962-L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12962-L12965) · [Before (L12939-L12944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12939-L12944)

```diff
-                         qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
-                       } while (ik > gk[7]);
-                       yk = -gk[2]
-                     }
-                 }
-                 return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
+                         NH(SS[oS[16]].push(SS[oS[73]] & oS[12]), SS[oS[73]] >>= oS[11], SS[oS[24]] -= oS[11])
+                       } while (SS[oS[24]] > oS[26]);
+                       SS[oS[26]] = -oS[2]
+                     } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[73]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
```

#### 1773. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12947-L12948` → after: `L12968-L12969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12968-L12969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12968-L12969) · [Before (L12947-L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12947-L12948)

```diff
-               function qk(kk) {
-                 return typeof Rk[kk] === gk[14] ? Rk[kk] = ak(Uk[kk]) : Rk[kk]
+               function uS(...SS) {
+                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = qS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1774. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12952-L12957` → after: `L12973-L12978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12973-L12978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12973-L12978) · [Before (L12952-L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12952-L12957)

```diff
-                 module.exports = async (kk = () => {
-                   throw new Error(function(kk) {
-                     return typeof Rk[kk] === gk[14] ? Rk[kk] = function(...kk) {
-                       for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '7tCDobXJLHsa5A|uBmS}di.PTp[4"j#/h;9OZ<r3:egnWR,EYFkNM*%~^v2$6{c!V8q_UlKfGQzI10@w(=y+`>x)]&?', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[73]] = kk[gk[35]].length, kk[-gk[74]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk … [truncated]
-                         if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[72]]]), kk[gk[28]] !== -gk[2])
-                           if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+                 module.exports = async (SS = (...SS) => {
+                   throw SS[oS[13]] = oS[1], new Error(function(...SS) {
+                     return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
+                       for (NH(SS[oS[13]] = oS[2], SS[oS[5]] = '[+48;~{|">z637#xw*.y,vlFr5_&1/^$=M9(2musY)?VSd%:0J}EIN!DTCbHBZGWfAiOotpXhRKeqgQacLjkU@]<nP`', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[73]] = [], SS[oS[44]] = oS[1], SS[oS[9]] = oS[1] … [truncated]
+                         if (SS[oS[6]] = SS[oS[5]].indexOf(SS[oS[14]][SS[oS[24]]]), SS[oS[6]] !== -oS[2])
+                           if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
```

#### 1775. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12959` → after: `L12980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12980) · [Before (L12959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12959)

```diff
-                             qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                             NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[oS[9]], SS[oS[9]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1776. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12961-L12966` → after: `L12982-L12987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12982-L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12982-L12987) · [Before (L12961-L12966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12961-L12966)

```diff
-                               qF(kk[-gk[74]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
-                             } while (kk[gk[20]] > gk[7]);
-                             kk[gk[7]] = -gk[2]
-                           } return kk[gk[7]] > -gk[2] && kk[-gk[74]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[-gk[74]])
-                     }(Uk[kk]) : Rk[kk]
-                   }(gk[83]))
+                               NH(SS[oS[73]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[9]] -= oS[11])
+                             } while (SS[oS[9]] > oS[26]);
+                             SS[oS[31]] = -oS[2]
+                           } return SS[oS[31]] > -oS[2] && SS[oS[73]].push((SS[oS[44]] | SS[oS[31]] << SS[oS[9]]) & oS[12]), mS(SS[oS[73]])
+                     }(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+                   }(oS[157]))
```

#### 1777. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12968-L12971` → after: `L12989-L12992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12989-L12992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12989-L12992) · [Before (L12968-L12971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12968-L12971)

```diff
-                   const Fk = new Set(process.argv.slice(gk[35]));
-                   if (!Fk.has(qk(gk[311]))) {
-                     if (Fk.size !== gk[2]) return gk[70];
-                     if (!Fk.has("-v")) return gk[70]
+                   const HS = new Set(process.argv.slice(oS[0]));
+                   if (!HS.has(uS(140))) {
+                     if (HS.size !== oS[2]) return oS[71];
+                     if (!HS.has("-v")) return oS[71]
```

#### 1778. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12975-L12978` → after: `L12996-L12999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R12996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L12996-L12999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L12996-L12999) · [Before (L12975-L12978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12975-L12978)

```diff
-                       return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
-                         for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = ']wcngAv$:WHB5C7Xd3aNye)9,%.R?(smT~@0E>!jftiF}UD*b=Vzk^Y+xPo/lOLprQ`61&#_I82SMqu4hZKJ|G;[{"<', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[78]] = [], kk[gk[76]] = gk[1], kk[gk[77]] = gk[ … [truncated]
-                           if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
-                             if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[75]];
+                       return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
+                         for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'oOZingY+7l@k)G2mN0$1ABRPW(r=9*3<H`Vpt^_DcKu/aCM&E"w>jIe#~U,X5Tf%Qz{FJs}qhS8b!L:v[y64|x];?.d', SS[oS[74]] = "" + (SS[oS[1]] || ""), SS[oS[75]] = SS[oS[74]].length, SS[oS[16]] = [], SS[oS[76]] = oS[1], SS[-oS[77]] = o … [truncated]
+                           if (SS[oS[30]] = SS[oS[2]].indexOf(SS[oS[74]][SS[oS[3]]]), SS[oS[30]] !== -oS[2])
+                             if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[30]];
```

#### 1779. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12980` → after: `L13001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13001) · [Before (L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12980)

```diff
-                               qF(kk[gk[7]] += kk[gk[75]] * gk[29], kk[gk[76]] |= kk[gk[7]] << kk[gk[77]], kk[gk[77]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                               NH(SS[oS[31]] += SS[oS[30]] * oS[32], SS[oS[76]] |= SS[oS[31]] << SS[-oS[77]], SS[-oS[77]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1780. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12982-L12985` → after: `L13003-L13006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13003-L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13003-L13006) · [Before (L12982-L12985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12982-L12985)

```diff
-                                 qF(kk[gk[78]].push(kk[gk[76]] & gk[12]), kk[gk[76]] >>= gk[11], kk[gk[77]] -= gk[11])
-                               } while (kk[gk[77]] > gk[7]);
-                               kk[gk[7]] = -gk[2]
-                             } return kk[gk[7]] > -gk[2] && kk[gk[78]].push((kk[gk[76]] | kk[gk[7]] << kk[gk[77]]) & gk[12]), hk(kk[gk[78]])
+                                 NH(SS[oS[16]].push(SS[oS[76]] & oS[12]), SS[oS[76]] >>= oS[11], SS[-oS[77]] -= oS[11])
+                               } while (SS[-oS[77]] > oS[26]);
+                               SS[oS[31]] = -oS[2]
+                             } return SS[oS[31]] > -oS[2] && SS[oS[16]].push((SS[oS[76]] | SS[oS[31]] << SS[-oS[77]]) & oS[12]), mS(SS[oS[16]])
```

#### 1781. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12988-L12989` → after: `L13009-L13010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13009-L13010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13009-L13010) · [Before (L12988-L12989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12988-L12989)

```diff
-                     return void 0 === await kk() ? Fk(gk[56]) + "l)" : ""
-                   })(), gk[58]
+                     return void 0 === await SS() ? HS(oS[34]) + "l)" : ""
+                   })(), oS[78]
```

#### 1782. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12992` → after: `L13013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13013) · [Before (L12992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12992)

```diff
-               return void(qk(131) in Dk && Lk())
+               return void(uS(oS[219]) + oS[30] in eS && IS())
```

#### 1783. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12994-L12995` → after: `L13015-L13016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13015-L13016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13015-L13016) · [Before (L12994-L12995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12994-L12995)

```diff
-             const Xk = Math[Fk(137)]((Ik - kk[gk[4]][Fk(gk[79]) + gk[80]]) * kk[gk[4]][Fk(138) + Fk(139) + Fk(gk[142])], kk[gk[4]][Fk(gk[375]) + Fk(gk[347])]);
-             kk[-gk[62]][Fk(gk[81])][Fk(gk[300])](kk[gk[26]], Xk, kk[gk[4]][Fk(gk[313]) + Fk(145)])
+             const tS = Math[HS(oS[83])]((gS - SS[oS[21]][HS(oS[47]) + oS[79]]) * SS[oS[21]][HS(oS[309]) + HS(146) + HS(oS[88])], SS[oS[21]][HS(oS[266]) + HS(oS[315])]);
+             SS[oS[5]][HS(150)][HS(151)](SS[oS[2]], tS, SS[oS[21]][HS(152) + HS(oS[184])])
```

#### 1784. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L12997-L13017` → after: `L13018-L13026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13018-L13026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13018-L13026) · [Before (L12997-L13017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L12997-L13017)

```diff
-           [ik(146)]: function(...kk) {
-             function Fk(...kk) {
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[82]] = 'E2AhNq]u?rG^v[S_z|9{cw.nYt"b5#*sPL@H+pdeM%4$VBIfm;D8R~6g>kj1=x,37a:T`!/J)WQUyiF<oZ0}(&CXlKO', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[-gk[71]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[83]] = gk[1], k … [truncated]
-                   if (kk[gk[28]] = kk[gk[82]].indexOf(kk[gk[26]][kk[gk[84]]]), kk[gk[28]] !== -gk[2])
-                     if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
-                     else {
-                       qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[83]], kk[gk[83]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                       do {
-                         qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[83]] -= gk[11])
-                       } while (kk[gk[83]] > gk[7]);
-                       kk[gk[7]] = -gk[2]
-                     } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[83]]) & gk[12]), hk(kk[gk[41]])
-               }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-             }
-             Fk(147) + "Z" in Dk && function(...kk) {
- ... (5 more removed lines; see GitHub link above)
+           [XS(154)]: function(...SS) {
+             XS(oS[59]) + "V" in eS && function(...SS) {
+               SS[oS[13]] = oS[1]
+             }(), [
+               [SS[oS[5]], SS[oS[86]]], SS[oS[0]]
+             ] = TS;
+             const HS = SS[oS[86]] - Math[XS(oS[87])](SS[oS[5]]);
+             if (HS <= oS[1]) {
+               function gS(...SS) {
```

#### 1785. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13019-L13023` → after: `L13028-L13039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13028-L13039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13028-L13039) · [Before (L13019-L13023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13019-L13023)

```diff
-                   return kk[gk[13]] = gk[35], ak(lk(tk(kk[gk[1]]), tk(kk[gk[2]])))
-                 }
- 
-                 function Tk(kk, Fk) {
-                   return qk(lk(tk(kk), tk(Fk)))
+                   return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
+                     for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'JabPIKY1[x&ic4zoO"h#%D<_w$?A8je=0Sv6X`pB.{!~tfrZHU]+GCMELk3V;Nm2:uT5Qgyn^9@qlF)d/s|R}>7(,W*', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1],  … [truncated]
+                       if (SS[oS[6]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+                         if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[6]];
+                         else {
+                           NH(SS[oS[26]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                           do {
+                             NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
+                           } while (SS[oS[24]] > oS[26]);
+                           SS[oS[26]] = -oS[2]
+                         } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
+                   }(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1786. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13025-L13184` → after: `L13041-L13059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13041-L13059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13041-L13059) · [Before (L13025-L13184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13025-L13184)

```diff
- 
-                 function ik(...kk) {
-                   return kk[gk[13]] = gk[25], Lk(lk(tk(kk[gk[1]]), tk(kk[gk[2]])), kk[gk[35]])
-                 }
- 
-                 function yk(...kk) {
-                   return kk[gk[13]] = gk[2], jk(sk(Zk(kk[gk[1]]), kk[gk[1]].length * gk[11]))
-                 }
- 
-                 function lk(...kk) {
-                   qF(kk[gk[13]] = gk[35], kk[gk[35]] = Zk(kk[gk[1]])), kk[gk[35]].length > gk[86] && (kk[gk[35]] = sk(kk[gk[35]], kk[gk[1]].length * gk[11]));
-                   var Ik = Array(gk[86]),
-                     Xk = Array(gk[86]);
-                   for (kk[-gk[87]] = gk[1]; kk[-gk[87]] < gk[86]; kk[-gk[87]]++) qF(Ik[kk[-gk[87]]] = kk[gk[35]][kk[-gk[87]]] ^ gk[139], Xk[kk[-gk[87]]] = kk[gk[35]][kk[-gk[87]]] ^ gk[140]);
-                   return kk[gk[4]] = sk(Ik.concat(Zk(kk[gk[2]])), gk[88] + kk[gk[2]].length * gk[11]), jk(sk(Xk.concat(kk[gk[4]]), rk(Fk(gk[116]), gk[88], gk[59])))
-                 }
- ... (144 more removed lines; see GitHub link above)
+                 SS[oS[13]] = oS[1];
+                 const gS = require("path"),
+                   {
+                     version: tS
+                   } = require("../../package"),
+                   {
+                     version: bS
+                   } = require("@redacted/enterprise-plugin/package"),
+                   {
+                     version: XS
+                   } = require("@redacted/components/package"),
+                   {
+                     sdkVersion: xS
+                   } = require("@redacted/enterprise-plugin");
+                 require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), gS.resolve(__dirname, HS(162) + HS(163) + "js")
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 1787. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13186-L13188` → after: `L13061-L13063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13061-L13063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13061-L13063) · [Before (L13186-L13188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13186-L13188)

```diff
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'Hnr+}o3$xG!0stq)l_UbL>jdaw"DvkWP*8/F{eQC5:<c;R%X6gTzIuAmY=[E?ZBJ.OK`@17(9#,MihSN]^fVy|&4~p2', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[10]] = [], kk[-gk[115]] = gk[1], kk[gk[34]] = gk[1], k … [truncated]
-                   if (kk[gk[29]] = kk[gk[43]].indexOf(kk[gk[26]][kk[gk[39]]]), kk[gk[29]] !== -gk[2])
-                     if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[29]];
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[27]] = 'jNoBkaguGv54iwySU68{Y~<l^$.V+KR"p*Z2J7?PC:|qb>9;I@[A#1/sTQxWLdc=&Xe_}(`f%Hn!DmO0)FrEzt]3hM,', SS[oS[88]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[88]].length, SS[oS[16]] = [], SS[oS[67]] = oS[1], SS[-oS[90]] = oS[1], S … [truncated]
+                   if (SS[oS[6]] = SS[oS[27]].indexOf(SS[oS[88]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+                     if (SS[oS[89]] < oS[1]) SS[oS[89]] = SS[oS[6]];
```

#### 1788. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13190` → after: `L13065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13065) · [Before (L13190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13190)

```diff
-                       qF(kk[gk[7]] += kk[gk[29]] * gk[29], kk[-gk[115]] |= kk[gk[7]] << kk[gk[34]], kk[gk[34]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       NH(SS[oS[89]] += SS[oS[6]] * oS[32], SS[oS[67]] |= SS[oS[89]] << SS[-oS[90]], SS[-oS[90]] += (SS[oS[89]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1789. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13192-L13195` → after: `L13067-L13070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13067-L13070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13067-L13070) · [Before (L13192-L13195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13192-L13195)

```diff
-                         qF(kk[gk[10]].push(kk[-gk[115]] & gk[12]), kk[-gk[115]] >>= gk[11], kk[gk[34]] -= gk[11])
-                       } while (kk[gk[34]] > gk[7]);
-                       kk[gk[7]] = -gk[2]
-                     } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[-gk[115]] | kk[gk[7]] << kk[gk[34]]) & gk[12]), hk(kk[gk[10]])
+                         NH(SS[oS[16]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[-oS[90]] -= oS[11])
+                       } while (SS[-oS[90]] > oS[26]);
+                       SS[oS[89]] = -oS[2]
+                     } return SS[oS[89]] > -oS[2] && SS[oS[16]].push((SS[oS[67]] | SS[oS[89]] << SS[-oS[90]]) & oS[12]), mS(SS[oS[16]])
```

#### 1790. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13199` → after: `L13074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13074) · [Before (L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13199)

```diff
-                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = Tk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = tS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1791. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13203-L13206` → after: `L13078-L13087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13078-L13087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13078-L13087) · [Before (L13203-L13206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13203-L13206)

```diff
-                 qF(kk[gk[13]] = gk[1], kk[gk[81]] = function(...kk) {
-                   for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = gk[1], kk[-gk[117]] = {}, kk[gk[25]] = gk[1], kk[gk[41]] = gk[1], kk[-gk[116]] = gk[1], kk[gk[77]] = kk[gk[1]].length), kk[gk[52]] = gk[1]; kk[gk[52]] < kk[gk[77]]; kk[gk[52]]++) {
-                     for (qF(kk[-gk[117]] = {}, kk[gk[25]] = gk[1], kk[gk[41]] = gk[2]), kk[gk[39]] = kk[gk[52]] + gk[2]; kk[gk[39]] < kk[gk[77]]; kk[gk[39]]++) kk[gk[1]][kk[gk[52]]].x !== kk[gk[1]][kk[gk[39]]].x || kk[gk[1]][kk[gk[52]]].y !== kk[gk[1]][kk[gk[39]]].y ? (kk[gk[1]][ … [truncated]
-                     qF(kk[gk[25]] += kk[gk[41]], kk[gk[43]] = Math.max(kk[gk[43]], kk[gk[25]]))
+                 NH(SS[oS[13]] = oS[1], SS[oS[5]] = function(...SS) {
+                   for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = SS[oS[1]].length, SS[oS[14]] = [], SS[oS[21]] = oS[1], SS[-oS[91]] = oS[1], SS[oS[1]].sort(((SS, HS) => SS - HS))), SS[oS[67]] = oS[1]; SS[oS[67]] < SS[oS[2]]; SS[oS[67]]++)
+                     if (!(SS[oS[67]] > oS[1] && SS[oS[1]][SS[oS[67]]] === SS[oS[1]][SS[oS[67]] - oS[2]]))
+                       for (NH(SS[oS[21]] = SS[oS[67]] + oS[2], SS[-oS[91]] = SS[oS[2]] - oS[2]); SS[oS[21]] < SS[-oS[91]];)
+                         if (SS[oS[1]][SS[oS[67]]] + SS[oS[1]][SS[oS[21]]] + SS[oS[1]][SS[-oS[91]]] < oS[1]) SS[oS[21]]++;
+                         else if (SS[oS[1]][SS[oS[67]]] + SS[oS[1]][SS[oS[21]]] + SS[oS[1]][SS[-oS[91]]] > oS[1]) SS[-oS[91]]--;
+                   else {
+                     for (SS[oS[14]].push([SS[oS[1]][SS[oS[67]]], SS[oS[1]][SS[oS[21]]], SS[oS[1]][SS[-oS[91]]]]); SS[oS[21]] < SS[-oS[91]] && SS[oS[1]][SS[oS[21]]] === SS[oS[1]][SS[oS[21]] + oS[2]];) SS[oS[21]]++;
+                     for (; SS[oS[21]] < SS[-oS[91]] && SS[oS[1]][SS[-oS[91]]] === SS[oS[1]][SS[-oS[91]] - oS[2]];) SS[-oS[91]]--;
+                     NH(SS[oS[21]]++, SS[-oS[91]]--)
```

#### 1792. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13208-L13209` → after: `L13089-L13090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13089-L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13089-L13090) · [Before (L13208-L13209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13208-L13209)

```diff
-                   return kk[gk[43]]
-                 }, console.log(kk[gk[81]]))
+                   return SS[oS[14]]
+                 }, console.log(SS[oS[5]]))
```

#### 1793. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13211` → after: `L13092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13092) · [Before (L13211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13211)

```diff
-               return ik(gk[240]) in Dk && yk(), Xk + gk[2]
+               return bS(oS[91]) + "C" in eS && xS(), SS[oS[0]][bS(oS[33])] * HS
```

#### 1794. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13213` → after: `L13094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13094) · [Before (L13213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13213)

```diff
-             return Xk
+             return SS[oS[0]][XS(166)]
```

#### 1795. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13215-L13241` → after: `L13096-L13118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13096-L13118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13096-L13118) · [Before (L13215-L13241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13215-L13241)

```diff
-           [ik(gk[376])]: function(kk, Fk, Ik) {
-             Ik || (Ik = function(...kk) {
-               qF(kk[gk[13]] = gk[1], kk[gk[90]] = function(...Fk) {
-                 return qF(Fk[gk[13]] = gk[35], Fk[-gk[119]] = [], Fk[gk[26]] = Fk[gk[1]].length, Fk[gk[1]].sort(((kk, Fk) => kk - Fk)), kk[gk[26]](Fk[-gk[119]], [], gk[1], Fk[gk[26]], Fk[gk[1]], Fk[gk[2]])), Fk[-gk[119]]
-               }, kk[gk[26]] = function(Fk, Ik, Xk, Tk, ik, yk) {
-                 var lk, ak = gk[64];
-                 if (!(yk < gk[1])) {
-                   if (yk === gk[1]) return Fk.push(Ik);
-                   for (lk = Xk; lk < Tk && !(ik[lk] > yk); lk++) lk > Xk && ik[lk] === ik[lk - gk[2]] || qF(ak = Array.from(Ik), ak.push(ik[lk]), kk[gk[26]](Fk, ak, lk + gk[2], Tk, ik, yk - ik[lk]))
-                 }
-               }, console.log(kk[gk[90]]))
-             }), Fk || (Fk = function(...Fk) {
-               return Fk[gk[13]] = gk[2], typeof Rk[Fk[gk[1]]] === gk[14] ? Rk[Fk[gk[1]]] = kk(Uk[Fk[gk[1]]]) : Rk[Fk[gk[1]]]
-             }), kk || (kk = function(...kk) {
-               for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'S{87i_BMGnYDkZ>1@x.9*w<;z]0/(+!2=6v?5}%)`~["&$4y#cuUAKhTsq3|:,^OmHjpWgdlfVXFtQEPRaLIJNoCbre', kk[gk[68]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[68]].length, kk[-gk[118]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
-                 if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[68]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
- ... (11 more removed lines; see GitHub link above)
+           [XS(oS[177])]: function(...SS) {
+             function HS(...SS) {
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'OftZGJrXl5jQbyK2>C=heBLN]Mkos!V({_46RnD<^8dI;UW.YT)i[7}qp*z@Exc&AgwmPH|FS?~3%":1+u#9v,$`0/a', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[14]].length, SS[oS[92]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1], SS[ … [truncated]
+                   if (SS[oS[30]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
+                     if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[30]];
+                     else {
+                       NH(SS[oS[26]] += SS[oS[30]] * oS[32], SS[oS[44]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       do {
+                         NH(SS[oS[92]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
+                       } while (SS[oS[24]] > oS[26]);
+                       SS[oS[26]] = -oS[2]
+                     } return SS[oS[26]] > -oS[2] && SS[oS[92]].push((SS[oS[44]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[92]])
+               }(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+             }
+             XS(168) + oS[316] in eS && function(...SS) {
+ ... (7 more added lines; see GitHub link above)
```

#### 1796. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13243-L13244` → after: `L13120-L13138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13120-L13138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13120-L13138) · [Before (L13243-L13244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13243-L13244)

```diff
-             const lk = Tk - Math[Fk(gk[118])](Xk);
-             if (lk <= gk[1]) {
+             const gS = SS[oS[5]][HS(oS[94])][HS(oS[99]) + HS(oS[10]) + HS(172) + HS(173)](SS[-oS[42]]);
+             return gS === oS[48] ? SS[oS[5]][HS(oS[94])][HS(174) + HS(oS[39]) + HS(oS[77]) + HS(oS[89])](SS[-oS[88]], HS(oS[95]) + HS(oS[96]) + HS(oS[97])) : gS[HS(oS[95]) + HS(oS[96]) + HS(oS[97])]
+           },
+           [XS(oS[29])]: function(...SS) {
+             function HS(...SS) {
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'w!&x)53y,0T.8(V2~Zs=17vXC?Bq4]WgoOnf^<c6S*>@M/KRPder_b|%hkJaNFY;t"QHE{p+im:UL[GD`jlA9$}u#zI', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[-oS[98]] = SS[oS[0]].length, SS[oS[66]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1], SS[o … [truncated]
+                   if (SS[oS[6]] = SS[oS[2]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+                     if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
+                     else {
+                       NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[oS[24]], SS[oS[24]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       do {
+                         NH(SS[oS[66]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
+                       } while (SS[oS[24]] > oS[26]);
+                       SS[oS[31]] = -oS[2]
+                     } return SS[oS[31]] > -oS[2] && SS[oS[66]].push((SS[oS[44]] | SS[oS[31]] << SS[oS[24]]) & oS[12]), mS(SS[oS[66]])
+ ... (3 more added lines; see GitHub link above)
```

#### 1797. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13246-L13248` → after: `L13140-L13142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13140-L13142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13140-L13142) · [Before (L13246-L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13246-L13248)

```diff
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '$EDkWXtPmg3wKYR7h?0dbC)`o^L2;I>}9.FM=:*V6l(#fS|B&NQUZv@5]"T48</e1{!uH_s+G[J%iypzq,Oacxj~Arn', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[121]] = [], kk[-gk[120]] = gk[1], kk[-gk[29]] = gk[1],  … [truncated]
-                   if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
-                     if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[28]];
+                 for (NH(SS[oS[13]] = oS[2], SS[-oS[26]] = 'o3iMP]~T6<j.u8>e}HmBwY[{xO$z52v&LyFV|^aK;,cUNGD#C49p?k/S"1EA!%hX)r*l`d:R(7_tf0nIqQZ@+=gJsWb', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[44]] = oS[1], SS[oS[24]] = oS[1], SS[o … [truncated]
+                   if (SS[oS[6]] = SS[-oS[26]].indexOf(SS[oS[0]][SS[oS[11]]]), SS[oS[6]] !== -oS[2])
+                     if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[6]];
```

#### 1798. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13250` → after: `L13144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13144) · [Before (L13250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13250)

```diff
-                       qF(kk[gk[52]] += kk[gk[28]] * gk[29], kk[-gk[120]] |= kk[gk[52]] << kk[-gk[29]], kk[-gk[29]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       NH(SS[oS[31]] += SS[oS[6]] * oS[32], SS[oS[44]] |= SS[oS[31]] << SS[oS[24]], SS[oS[24]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1799. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13252-L13255` → after: `L13146-L13149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13146-L13149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13146-L13149) · [Before (L13252-L13255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13252-L13255)

```diff
-                         qF(kk[gk[121]].push(kk[-gk[120]] & gk[12]), kk[-gk[120]] >>= gk[11], kk[-gk[29]] -= gk[11])
-                       } while (kk[-gk[29]] > gk[7]);
-                       kk[gk[52]] = -gk[2]
-                     } return kk[gk[52]] > -gk[2] && kk[gk[121]].push((kk[-gk[120]] | kk[gk[52]] << kk[-gk[29]]) & gk[12]), hk(kk[gk[121]])
+                         NH(SS[oS[16]].push(SS[oS[44]] & oS[12]), SS[oS[44]] >>= oS[11], SS[oS[24]] -= oS[11])
+                       } while (SS[oS[24]] > oS[26]);
+                       SS[oS[31]] = -oS[2]
+                     } return SS[oS[31]] > -oS[2] && SS[oS[16]].push((SS[oS[44]] | SS[oS[31]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
```

#### 1800. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13258-L13259` → after: `L13152-L13153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13152-L13153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13152-L13153) · [Before (L13258-L13259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13258-L13259)

```diff
-               function qk(kk) {
-                 return typeof Rk[kk] === gk[14] ? Rk[kk] = ak(Uk[kk]) : Rk[kk]
+               function gS(...SS) {
+                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = HS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1801. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13263-L13279` → after: `L13157-L13160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13157-L13160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13157-L13160) · [Before (L13263-L13279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13263-L13279)

```diff
-                 function Fk(...kk) {
-                   return kk[gk[13]] = gk[2], kk[gk[1]][gk[2]] * gk[123] + (kk[gk[1]][gk[1]] < gk[1] ? gk[122] | kk[gk[1]][gk[1]] : kk[gk[1]][gk[1]])
-                 }
- 
-                 function Ik(...kk) {
-                   switch (kk[gk[13]] = gk[2], ((kk[gk[1]] & gk[122]) !== gk[1]) * gk[2] + (kk[gk[1]] < gk[1]) * gk[35]) {
-                     case gk[1]:
-                       return [kk[gk[1]] % gk[122], Math.trunc(kk[gk[1]] / gk[123])];
-                     case gk[2]:
-                       return [kk[gk[1]] % gk[122] - gk[122], Math.trunc(kk[gk[1]] / gk[123]) + gk[2]];
-                     case gk[35]:
-                       return [((kk[gk[1]] + gk[122]) % gk[122] + gk[122]) % gk[122], Math.round(kk[gk[1]] / gk[123])];
-                     case gk[25]:
-                       return [kk[gk[1]] % gk[122], Math.trunc(kk[gk[1]] / gk[123])]
-                   }
-                 }
- ... (1 more removed lines; see GitHub link above)
+                 SS[oS[13]] = oS[2];
+                 const HS = {};
+                 for (let gS of SS[oS[1]].replace(/[^w]/g, "").toLowerCase()) HS[gS] = HS[gS] + oS[2] || oS[2];
+                 return HS
```

#### 1802. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13281-L13283` → after: `L13162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13162) · [Before (L13281-L13283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13281-L13283)

```diff
-               return qk(gk[44]) in Dk && Lk(), gk[1]
-             }
-             if (lk < gk[2]) {
+ 
```

#### 1803. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13285-L13294` → after: `L13164-L13169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13164-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13164-L13169) · [Before (L13285-L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13285-L13294)

```diff
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'Td.:pvGO["wW{%A5>iyLhr4XY(Zkf;B8_Su2!R)=J`37xC]?cMKzQs&/9j1Etl}g@|0,F$*+#6VoD<~P^bUaemHInqN', kk[gk[126]] = "" + (kk[gk[1]] || ""), kk[-gk[127]] = kk[gk[126]].length, kk[-gk[129]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1 … [truncated]
-                   if (kk[-gk[117]] = kk[gk[43]].indexOf(kk[gk[126]][kk[gk[111]]]), kk[-gk[117]] !== -gk[2])
-                     if (kk[gk[128]] < gk[1]) kk[gk[128]] = kk[-gk[117]];
-                     else {
-                       qF(kk[gk[128]] += kk[-gk[117]] * gk[29], kk[gk[8]] |= kk[gk[128]] << kk[gk[53]], kk[gk[53]] += (kk[gk[128]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                       do {
-                         qF(kk[-gk[129]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
-                       } while (kk[gk[53]] > gk[7]);
-                       kk[gk[128]] = -gk[2]
-                     } return kk[gk[128]] > -gk[2] && kk[-gk[129]].push((kk[gk[8]] | kk[gk[128]] << kk[gk[53]]) & gk[12]), hk(kk[-gk[129]])
+                 SS[oS[13]] = oS[0];
+                 const HS = buildCharMap(SS[oS[1]]),
+                   gS = buildCharMap(SS[oS[2]]);
+                 for (let tS in HS)
+                   if (HS[tS] !== gS[tS]) return oS[71];
+                 return Object.keys(HS).length !== Object.keys(gS).length ? oS[71] : oS[78]
```

#### 1804. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13298` → after: `L13173-L13174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13173-L13174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13173-L13174) · [Before (L13298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13298)

```diff
-                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = tk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                 SS[oS[13]] = oS[2];
+                 return xS(SS[oS[1]]) !== 1 / 0
```

#### 1805. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13302` → after: `L13178-L13183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13178-L13183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13178-L13183) · [Before (L13302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13302)

```diff
-                 kk[gk[13]] = gk[1]
+                 if (SS[oS[13]] = oS[2], !SS[oS[1]]) return -oS[2];
+                 const HS = xS(SS[oS[1]].left),
+                   gS = xS(SS[oS[1]].right),
+                   tS = Math.abs(HS - gS);
+                 if (HS === 1 / 0 || gS === 1 / 0 || tS > oS[2]) return 1 / 0;
+                 return Math.max(HS, gS) + oS[2]
```

#### 1806. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13304-L13327` → after: `L13185-L13192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13185-L13192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13185-L13192) · [Before (L13304-L13327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13304-L13327)

```diff
-               return Zk(gk[3]) + gk[131] in Dk && jk(), yk[Zk(gk[372]) + gk[131]] * lk
-             }
-             return yk[Fk(184) + gk[131]]
-           },
-           [ik(gk[127])]: function(...kk) {
-             function Fk(kk) {
-               return typeof Rk[kk] === gk[14] ? Rk[kk] = function(kk) {
-                 var Fk, Ik, Xk, Tk, ik, yk, lk;
-                 for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
-                   var ak = 'OuqGp$t7C(;Ja=jv)BI+0i8fR>9U,/nw?E1N4eV6x}Y#&]l<hPyrAZH_T3b.cDF^W@QKsz{So:5~|MLg%["Xm`2dk*!'.indexOf(Fk[lk]);
-                   if (ak !== -gk[2])
-                     if (yk < gk[1]) yk = ak;
-                     else {
-                       qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                       do {
-                         qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
- ... (8 more removed lines; see GitHub link above)
+               SS[oS[13]] = oS[1], window[gS(183) + gS(oS[206]) + gS(oS[100]) + oS[154]] = {
+                 buildCharacterMap: tS,
+                 isAnagrams: bS,
+                 isBalanced: XS,
+                 getHeightBalanced: xS
+               }
+             }(), [
+               [SS[-oS[99]], SS[oS[2]], SS[oS[100]]], SS[-oS[41]]
```

#### 1807. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13329-L13330` → after: `L13194-L13195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13194-L13195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13194-L13195) · [Before (L13329-L13330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13329-L13330)

```diff
-             const Ik = kk[gk[26]][Fk(gk[132])][Fk(gk[350]) + Fk(188) + Fk(189) + Fk(gk[114])](kk[gk[41]]);
-             return Ik === gk[64] ? kk[gk[26]][Fk(gk[132])][Fk(gk[18]) + Fk(gk[133]) + Fk(gk[345]) + Fk(194)](kk[gk[2]], Fk(gk[134]) + Fk(gk[135]) + Fk(gk[87])) : Ik[Fk(gk[134]) + Fk(gk[135]) + Fk(gk[87])]
+             const gS = SS[-oS[99]][HS(oS[101])][HS(oS[50]) + HS(oS[103]) + HS(oS[40]) + HS(oS[125])](SS[oS[100]]);
+             return gS === oS[48] ? SS[-oS[99]][HS(oS[101])][HS(oS[139]) + HS(oS[113]) + HS(193) + HS(194)](SS[oS[2]], HS(oS[22]) + HS(oS[102])) : gS[HS(oS[22]) + HS(oS[102])]
```

#### 1808. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13332` → after: `L13197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13197) · [Before (L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13332)

```diff
-           [ik(gk[47])]: function(...kk) {
+           [XS(197)]: function(...SS) {
```

#### 1809. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13334-L13337` → after: `L13199-L13202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13199-L13202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13199-L13202) · [Before (L13334-L13337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13334-L13337)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'AQsyup&n#I1R{~Ng>b|2o.iFJhzL"lv*j4;]}7a$:c/@[WY35%UwS_+Z0=^GHmqMO?<,PB8KC`t!9(TEdDXx)Vfr6ek', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[137]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], kk[ … [truncated]
-                   if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
-                     if (kk[-gk[136]] < gk[1]) kk[-gk[136]] = kk[gk[28]];
+               return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = function(...SS) {
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'tFLXjbRaErBcTWD9;`u7|_Q!q]^@Z{hpOilPCI/v35~(w[$JGAeSngfYUosKVkMHdN?}xy=z0*<:>,"8#&%+1246).m', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[66]] = [], SS[oS[67]] = oS[1], SS[oS[24]] = oS[1], SS[o … [truncated]
+                   if (SS[oS[30]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[11]]]), SS[oS[30]] !== -oS[2])
+                     if (SS[oS[31]] < oS[1]) SS[oS[31]] = SS[oS[30]];
```

#### 1810. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13339` → after: `L13204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13204) · [Before (L13339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13339)

```diff
-                       qF(kk[-gk[136]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[-gk[136]] << kk[gk[53]], kk[gk[53]] += (kk[-gk[136]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       NH(SS[oS[31]] += SS[oS[30]] * oS[32], SS[oS[67]] |= SS[oS[31]] << SS[oS[24]], SS[oS[24]] += (SS[oS[31]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1811. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13341-L13344` → after: `L13206-L13209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13206-L13209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13206-L13209) · [Before (L13341-L13344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13341-L13344)

```diff
-                         qF(kk[gk[137]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
-                       } while (kk[gk[53]] > gk[7]);
-                       kk[-gk[136]] = -gk[2]
-                     } return kk[-gk[136]] > -gk[2] && kk[gk[137]].push((kk[gk[8]] | kk[-gk[136]] << kk[gk[53]]) & gk[12]), hk(kk[gk[137]])
+                         NH(SS[oS[66]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[24]] -= oS[11])
+                       } while (SS[oS[24]] > oS[26]);
+                       SS[oS[31]] = -oS[2]
+                     } return SS[oS[31]] > -oS[2] && SS[oS[66]].push((SS[oS[67]] | SS[oS[31]] << SS[oS[24]]) & oS[12]), mS(SS[oS[66]])
```

#### 1812. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13347-L13375` → after: `L13212-L13224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13212-L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13212-L13224) · [Before (L13347-L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13347-L13375)

```diff
-             Fk(199) in Dk && function(...kk) {
-               qF(kk[gk[13]] = gk[1], kk[gk[43]] = function(...kk) {
-                 function Ik(...kk) {
-                   return kk[gk[13]] = gk[2], ak(yk(tk(kk[gk[1]])))
-                 }
- 
-                 function Xk(...kk) {
-                   return kk[gk[13]] = gk[35], ak(lk(tk(kk[gk[1]]), tk(kk[gk[2]])))
-                 }
- 
-                 function Tk(...kk) {
-                   return kk[gk[13]] = gk[35], qk(lk(tk(kk[gk[1]]), tk(kk[gk[2]])))
-                 }
- 
-                 function ik(...kk) {
-                   return kk[gk[13]] = gk[25], Lk(lk(tk(kk[gk[1]]), tk(kk[gk[2]])), kk[gk[35]])
- ... (13 more removed lines; see GitHub link above)
+             XS(198) + oS[318] in eS && function(...SS) {
+               function HS(...SS) {
+                 for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = '5x_@>"v2O:[E~wu]9;<?1XRd&cDJezL4qoI#r+pgP6lGSW=`VTs3QBib*%Af(NU7){Z/FH^Chk|.$yma,tYMj!8K}n0', SS[oS[0]] = "" + (SS[oS[1]] || ""), SS[oS[21]] = SS[oS[0]].length, SS[oS[16]] = [], SS[oS[67]] = oS[1], SS[oS[9]] = oS[1], SS[oS[ … [truncated]
+                   if (SS[-oS[104]] = SS[oS[2]].indexOf(SS[oS[0]][SS[oS[103]]]), SS[-oS[104]] !== -oS[2])
+                     if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[-oS[104]];
+                     else {
+                       NH(SS[oS[26]] += SS[-oS[104]] * oS[32], SS[oS[67]] |= SS[oS[26]] << SS[oS[9]], SS[oS[9]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
+                       do {
+                         NH(SS[oS[16]].push(SS[oS[67]] & oS[12]), SS[oS[67]] >>= oS[11], SS[oS[9]] -= oS[11])
+                       } while (SS[oS[9]] > oS[26]);
+                       SS[oS[26]] = -oS[2]
+                     } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[67]] | SS[oS[26]] << SS[oS[9]]) & oS[12]), mS(SS[oS[16]])
+               }
```

#### 1813. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13377` → after: `L13226-L13230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13226-L13230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13226-L13230) · [Before (L13377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13377)

```diff
-                 function ak(...Ik) {
+               function gS(...SS) {
+                 return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = HS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
+               }
+               SS[oS[13]] = oS[1],
+                 function(...SS) {
```

#### 1814. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13379-L13381` → after: `L13232-L13234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13232-L13234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13232-L13234) · [Before (L13379-L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13379-L13381)

```diff
-                     for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '$18=:7y`?|+}*lH0wd#Gha3VD,9_!KOWfcjYQ/LM2NrP;sTg4mvt@X<~bBe>x{E&k]i()IZnuRSq[A^CJ"po.zU56F%', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[-gk[141]] = [], kk[gk[101]] = gk[1], kk[gk[97]] = gk[1 … [truncated]
-                       if (kk[-gk[142]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[-gk[142]] !== -gk[2])
-                         if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[-gk[142]];
+                     for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = 'DXO/uv@];P71:#kTM4(8BZg^|r[bC?itpodA65q!h*<wV.W`cR2ULQsEn}_f%xKG{y"$9j,SzN)=lJ0Y3a>&~IeFmH+', SS[oS[14]] = "" + (SS[oS[1]] || ""), SS[oS[4]] = SS[oS[14]].length, SS[oS[16]] = [], SS[oS[105]] = oS[1], SS[oS[24]] = oS[1], … [truncated]
+                       if (SS[oS[64]] = SS[oS[2]].indexOf(SS[oS[14]][SS[oS[3]]]), SS[oS[64]] !== -oS[2])
+                         if (SS[oS[26]] < oS[1]) SS[oS[26]] = SS[oS[64]];
```

#### 1815. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13383` → after: `L13236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13236) · [Before (L13383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13383)

```diff
-                           qF(kk[gk[7]] += kk[-gk[142]] * gk[29], kk[gk[101]] |= kk[gk[7]] << kk[gk[97]], kk[gk[97]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                           NH(SS[oS[26]] += SS[oS[64]] * oS[32], SS[oS[105]] |= SS[oS[26]] << SS[oS[24]], SS[oS[24]] += (SS[oS[26]] & oS[35]) > oS[36] ? oS[37] : oS[38]);
```

#### 1816. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13385-L13388` → after: `L13238-L13241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13238-L13241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13238-L13241) · [Before (L13385-L13388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13385-L13388)

```diff
-                             qF(kk[-gk[141]].push(kk[gk[101]] & gk[12]), kk[gk[101]] >>= gk[11], kk[gk[97]] -= gk[11])
-                           } while (kk[gk[97]] > gk[7]);
-                           kk[gk[7]] = -gk[2]
-                         } return kk[gk[7]] > -gk[2] && kk[-gk[141]].push((kk[gk[101]] | kk[gk[7]] << kk[gk[97]]) & gk[12]), hk(kk[-gk[141]])
+                             NH(SS[oS[16]].push(SS[oS[105]] & oS[12]), SS[oS[105]] >>= oS[11], SS[oS[24]] -= oS[11])
+                           } while (SS[oS[24]] > oS[26]);
+                           SS[oS[26]] = -oS[2]
+                         } return SS[oS[26]] > -oS[2] && SS[oS[16]].push((SS[oS[105]] | SS[oS[26]] << SS[oS[24]]) & oS[12]), mS(SS[oS[16]])
```

#### 1817. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13392-L13419` → after: `L13245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13245) · [Before (L13392-L13419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13392-L13419)

```diff
-                     return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = Xk(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-                   }
-                   Ik[gk[13]] = gk[2];
-                   try {
-                     kk[gk[43]]
-                   } catch (ik) {
-                     kk[gk[43]] = gk[1]
-                   }
-                   for (qF(Ik[gk[43]] = kk[gk[43]] ? Fk(gk[46]) + Fk(209) + Fk(gk[45]) : Fk(gk[46]) + Tk(gk[110]) + Tk(gk[0]), Ik[-gk[134]] = "", Ik[gk[4]] = gk[15]), Ik[gk[10]] = gk[1]; Ik[gk[10]] < Ik[gk[1]].length; Ik[gk[10]]++) qF(Ik[gk[4]] = Ik[gk[1]].charCodeAt(Ik[gk[10]]),  … [truncated]
-                   return Ik[-gk[134]]
-                 }
- 
-                 function qk(...Fk) {
-                   function Ik(kk) {
-                     var Fk, Ik, Xk, Tk, ik, yk, lk, ak = 'AHtVBMLZ>jxh:r2KP"&Jm#e.X3`%/,f7I|u8Os$CN{qDEg(<!TF5on_1;^zkyb=9)aSvW04@dG}[6QYwiUclR*?]~+p';
-                     for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
- ... (12 more removed lines; see GitHub link above)
+                     return SS[oS[13]] = oS[2], typeof iS[SS[oS[1]]] === oS[18] ? iS[SS[oS[1]]] = HS(WS[SS[oS[1]]]) : iS[SS[oS[1]]]
```

#### 1818. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13422-L13429` → after: `L13248-L13250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13248-L13250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13248-L13250) · [Before (L13422-L13429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13422-L13429)

```diff
-                   function Xk(kk) {
-                     return typeof Rk[kk] === gk[14] ? Rk[kk] = Ik(Uk[kk]) : Rk[kk]
-                   }
-                   Fk[gk[13]] = gk[2];
-                   try {
-                     kk[gk[26]]
-                   } catch (ik) {
-                     kk[gk[26]] = ""
+                   function tS(...SS) {
+                     for (NH(SS[oS[13]] = oS[2], SS[oS[2]] = [], SS[oS[0]] = oS[1], SS[-oS[99]] = SS[oS[1]].length, SS[oS[66]] = oS[19], SS[oS[44]] = oS[19]); SS[oS[0]] < SS[-oS[99]];) NH(SS[oS[66]] = SS[oS[1]].charCodeAt(SS[oS[0]]++), SS[oS[66]] >= oS[109] && SS[oS[66]] <= 56319  … [truncated]
+                     return SS[oS[2]]
```

#### 1819. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13436-L13441` → after: `L13253-L13255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13253-L13255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L13253-L13255) · [Before (L13436-L13441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L13436-L13441)

```diff
-                 function Lk(...kk) {
-                   var Fk, Ik, Xk, Tk;
-                   for (qF(kk[gk[13]] = gk[35], kk[gk[86]] = kk[gk[2]].length, kk[gk[85]] = Array()), kk[gk[10]] = Array(Math.ceil(kk[gk[1]].length / gk[35])), Fk = gk[1]; Fk < kk[gk[10]].length; Fk++) kk[gk[10]][Fk] = kk[gk[1]].charCodeAt(Fk * gk[35]) << gk[11] | kk[gk[1]].charCo … [truncated]
-                   for (; kk[gk[10]].length > gk[1];) {
-                     for (qF(Tk = Array(), Xk = gk[1]), Fk = gk[1]; Fk < kk[gk[10]].length; Fk++) qF(Xk = (Xk << gk[86]) + kk[gk[10]][Fk], Ik = Math.floor(Xk / kk[gk[86]]), Xk -= Ik * kk[gk[86]]), (Tk.length > gk[1] || Ik > gk[1]) && (Tk[Tk.length] = Ik);
-                     qF(kk[gk[85]][kk[gk[85]].length] = Xk, kk[gk[10]] = Tk)
+                   function bS(...HS) {
+                     for (NH(HS[oS[13]] = oS[2], HS[-oS[100]] = HS[oS[1]].length, HS[oS[14]] = -oS[2], HS[oS[4]] = oS[19], HS[oS[16]] = ""); ++HS[oS[14]] < HS[-oS[100]];) HS[oS[4]] = HS[oS[1]][HS[oS[14]]], HS[oS[4]] > 65535 && NH(HS[oS[4]] -= oS[107], HS[oS[16]] += SS[oS[5]](HS[oS … [truncated]
+                     return HS[oS[16]]
```
