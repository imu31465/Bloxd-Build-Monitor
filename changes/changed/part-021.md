# Changed — Bundle Modifications Report (Part 021 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `21 / 50` (**367** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 020](part-020.md) · [Part 022 →](part-022.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/98.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/98.js` (74 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec)

#### 35. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4784-L4842` → after: `L4835-L4842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4835-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4835-L4842) · [Before (L4784-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L4784-L4842)

```diff
-         kq = qq => {
-           aq((Eq => Jq(Eq, qq)))
-         };
-       (0, nE.f)(fY.m, (() => {
-         aq((qq => {
-           const Eq = (0, fY.n)(zY(qq.shopInfo), qq.selectedCategoryKey, (Eq => (0, fY.j)(qq.shopInfo[Eq].items)));
-           return Eq === qq.selectedCategoryKey ? qq : Jq(qq, Eq)
-         }))
-       })), (0, nE.f)("showShopFromServer", (qq => {
-         let {
-           toggle: Eq,
-           kg: gq
-         } = qq;
-         gq && kq(gq), 0 === Object.keys(Nq.shopInfo).length || Eq && lq ? rq.b.set({
-           openEverythingMenuName: null
-         }) : rq.b.set({
- ... (43 more removed lines; see GitHub link above)
+         gloomy: {
+           type: "custom",
+           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
+           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
+           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
+           px: "/textures/skyBoxes/gloomy/_px.jpg",
+           py: "/textures/skyBoxes/gloomy/_py.jpg",
+           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4844-L4980` → after: `L4844-L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4844-L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4844-L4851) · [Before (L4844-L4980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L4844-L4980)

```diff
-         sq = (qq, Eq) => {
-           var gq, Yq, lq;
-           const mq = Xl(Uq, qq),
-             xq = Nq.shopInfo[Uq].items[qq],
-             uq = Nq.userInputsPerItem[mq],
-             Wq = (0, yY.d)(xq, uq),
-             aq = Fq(xq, Wq),
-             Vq = xq.enchant,
-             dq = Vq ? (0, Gq.Eb)(null !== (gq = xq.customTitle) && void 0 !== gq ? gq : qq, {
-               colour: Gq.Ab[Vq.tier]
-             }) : null !== (Yq = xq.customTitle) && void 0 !== Yq ? Yq : qq,
-             jq = Eq => {
-               const gq = null !== Eq && void 0 !== Eq ? Eq : uq,
-                 Yq = void 0 !== Eq ? (0, yY.d)(xq, Eq) : Wq;
-               Fq(xq, Yq) && null !== gq && Lq(qq, xq, Eq);
-               let lq = Nq.redDotInfo;
- ... (121 more removed lines; see GitHub link above)
+         interstellar: {
+           type: "custom",
+           nx: "/textures/skyBoxes/interstellar/_nx.jpg",
+           ny: "/textures/skyBoxes/interstellar/_ny.jpg",
+           nz: "/textures/skyBoxes/interstellar/_nz.jpg",
+           px: "/textures/skyBoxes/interstellar/_px.jpg",
+           py: "/textures/skyBoxes/interstellar/_py.jpg",
+           pz: "/textures/skyBoxes/interstellar/_pz.jpg"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L4982-L5100` → after: `L4853-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4853-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4853-L4860) · [Before (L4982-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L4982-L5100)

```diff
-         Xq = function(qq) {
-           for (const Eq in qq)
-             if (qq[Eq].smp) return !0;
-           return !1
-         }(Nq.shopInfo),
-         wq = ql(Nq.shopInfo, Uq);
-       return (0, Bq.jsx)(oY.d, {
-         className: "Menu ShopBody",
-         show: lq,
-         children: 0 !== Object.keys(Nq.shopInfo).length && (0, Bq.jsxs)(Bq.Fragment, {
-           children: [(0, Bq.jsxs)("div", {
-             className: "MenuSideBar",
-             children: [(0, Bq.jsx)(Wq, {
-               items: zY(Nq.shopInfo).map((qq => {
-                 var Eq;
-                 return {
- ... (103 more removed lines; see GitHub link above)
+         space_blue: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_blue/_nx.jpg",
+           ny: "/textures/skyBoxes/space_blue/_ny.jpg",
+           nz: "/textures/skyBoxes/space_blue/_nz.jpg",
+           px: "/textures/skyBoxes/space_blue/_px.jpg",
+           py: "/textures/skyBoxes/space_blue/_py.jpg",
+           pz: "/textures/skyBoxes/space_blue/_pz.jpg"
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L5102-L5114` → after: `L4862-L4869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4862-L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4862-L4869) · [Before (L5102-L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L5102-L5114)

```diff
-         children: (0, Bq.jsx)(nY.d, {
-           game: {
-             schematicId: Oq
-           }
-         })
-       });
-       var Aq, cq;
-       if ((0, vY.i)(lq)) return (0, Bq.jsx)("div", {
-         className: "ShopBlock",
-         style: {
-           minWidth: `${gq}rem`,
-           height: "0",
-           minHeight: `${Yq}rem`
+         space_lightblue: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_lightblue/_nx.jpg",
+           ny: "/textures/skyBoxes/space_lightblue/_ny.jpg",
+           nz: "/textures/skyBoxes/space_lightblue/_nz.jpg",
+           px: "/textures/skyBoxes/space_lightblue/_px.jpg",
+           py: "/textures/skyBoxes/space_lightblue/_py.jpg",
+           pz: "/textures/skyBoxes/space_lightblue/_pz.jpg"
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L5116-L5151` → after: `L4871-L4878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4871-L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4871-L4878) · [Before (L5116-L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L5116-L5151)

```diff
-         children: (0, Bq.jsx)(vY.e, {
-           itemName: lq,
-           amount: null !== (Aq = Eq.amount) && void 0 !== Aq ? Aq : 0,
-           amountFontSize: Yq / 4 + "rem",
-           enchantmentTier: null === (cq = Eq.enchant) || void 0 === cq ? void 0 : cq.tier
-         })
-       });
-       const uq = lq.slice(-4);
-       return ".jpg" === uq || ".png" === uq ? (0, Bq.jsx)(Il, {
-         image: lq,
-         minWidth: gq
-       }) : (0, Bq.jsx)(xq.d, {
-         name: lq,
-         className: "SelectedItemImage",
-         style: {
-           color: mq
- ... (20 more removed lines; see GitHub link above)
+         space_red: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_red/_nx.jpg",
+           ny: "/textures/skyBoxes/space_red/_ny.jpg",
+           nz: "/textures/skyBoxes/space_red/_nz.jpg",
+           px: "/textures/skyBoxes/space_red/_px.jpg",
+           py: "/textures/skyBoxes/space_red/_py.jpg",
+           pz: "/textures/skyBoxes/space_red/_pz.jpg"
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L5153-L5465` → after: `L4880-L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4880-L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4880-L4887) · [Before (L5153-L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L5153-L5465)

```diff
-         src: `/textures/games/${(0,Gq.Yb)(Yq)}/${Eq}`,
-         alt: Eq,
-         draggable: !1
-       })
-     }
- 
-     function el(qq) {
-       let {
-         item: Eq,
-         cost: gq,
-         currencyAmounts: Yq
-       } = qq;
-       const lq = !isNaN(gq) && 0 !== gq && wl(Yq, Eq.currency);
-       let Oq = null;
-       return Eq.buyButtonText ? Oq = Eq.buyButtonText : lq ? (Oq = gq, Eq.sell && (Oq = -1 * gq), Oq = Oq.toString()) : 0 === gq ? Oq = "Free" : Eq.isRewardedAd && (Oq = "Watch ad"), (0, RE.H)(Oq) || " " === Oq ? null : (0, Bq.jsxs)("div", {
-         className: "BuyItemCostAndIcon",
- ... (297 more removed lines; see GitHub link above)
+         underwater: {
+           type: "custom",
+           nx: "/textures/skyBoxes/underwater/water.jpg",
+           ny: "/textures/skyBoxes/underwater/water.jpg",
+           nz: "/textures/skyBoxes/underwater/water.jpg",
+           px: "/textures/skyBoxes/underwater/water.jpg",
+           py: "/textures/skyBoxes/underwater/water.jpg",
+           pz: "/textures/skyBoxes/underwater/water.jpg"
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L5467-L5474` → after: `L4889-L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4889-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4889-L4896) · [Before (L5467-L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L5467-L5474)

```diff
-         choose: function(qq, Eq) {
-           aq(), lq(qq), mq("typed" === Eq ? "search" : "prefilled" === Eq ? "prefilled" : "suggestion"), Aq({
-             name: qq,
-             source: Eq
-           }), "typed" !== Eq && "prefilled" !== Eq && (0, eq.reportAnalyticsClick)({
-             id: "store.gift_recipient",
-             value: Eq
-           })
+         starry: {
+           type: "custom",
+           nx: "/textures/skyBoxes/starry/_nx.jpg",
+           ny: "/textures/skyBoxes/starry/_ny.jpg",
+           nz: "/textures/skyBoxes/starry/_nz.jpg",
+           px: "/textures/skyBoxes/starry/_px.jpg",
+           py: "/textures/skyBoxes/starry/_py.jpg",
+           pz: "/textures/skyBoxes/starry/_pz.jpg"
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L5476-L5477` → after: `L4898-L4905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4898-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4898-L4905) · [Before (L5476-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L5476-L5477)

```diff
-         clear: function() {
-           aq(), lq(""), mq("search"), Aq(null)
+         space_red_2: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_red_2/_nx.jpg",
+           ny: "/textures/skyBoxes/space_red_2/_ny.jpg",
+           nz: "/textures/skyBoxes/space_red_2/_nz.jpg",
+           px: "/textures/skyBoxes/space_red_2/_px.jpg",
+           py: "/textures/skyBoxes/space_red_2/_py.jpg",
+           pz: "/textures/skyBoxes/space_red_2/_pz.jpg"
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L5479-L5843` → after: `L4907-L4914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4907-L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4907-L4914) · [Before (L5479-L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L5479-L5843)

```diff
-         recordGift: function(qq, Eq) {
-           ! function(qq) {
-             QO.delete(qq.toLowerCase())
-           }(qq), uq((gq => {
-             if (!gq || gq.name.toLowerCase() !== qq.toLowerCase() || !0 !== gq.result.giftRecipientFound || "superRank" === Eq) return gq;
-             const Yq = gq.result.giftRecipientOwnedPacks;
-             return {
-               ...gq,
-               result: {
-                 ...gq.result,
-                 giftRecipientOwnedPacks: Yq.includes(Eq) ? Yq : [...Yq, Eq]
-               }
-             }
-           }))
-         }
-       }
- ... (349 more removed lines; see GitHub link above)
+         space_white: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_white/_nx.jpg",
+           ny: "/textures/skyBoxes/space_white/_ny.jpg",
+           nz: "/textures/skyBoxes/space_white/_nz.jpg",
+           px: "/textures/skyBoxes/space_white/_px.jpg",
+           py: "/textures/skyBoxes/space_white/_py.jpg",
+           pz: "/textures/skyBoxes/space_white/_pz.jpg"
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L6288-L7670` → after: `L4917-L16896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L4917-L16896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L4917-L16896) · [Before (L6288-L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L6288-L7670)

```diff
-       Hm = new Set(["wildSpirits"]);
- 
-     function om(qq) {
-       var Eq;
-       let {
-         tile: gq,
-         design: lq,
-         canGoLive: Aq,
-         live: cq,
-         busy: uq,
-         highlight: Wq,
-         onLiveStart: Nq,
-         onLiveEnd: aq,
-         onOpen: Vq,
-         onAct: dq,
-         onNeedRecipient: jq,
- ... (1367 more removed lines; see GitHub link above)
+       wC = "/textures/dayNight/sun.png",
+       bC = "/textures/dayNight/moon.png",
+       nC = "/textures/dayNight/stars",
+       fC = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
+   },
+   28847: CC => {
+     CC.exports = "data:model/gltf-binary;base64,Z2xURgIAAADIDgAA3AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Mjg4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   28851: CC => {
+     CC.exports = "data:model/gltf-binary;base64,Z2xURgIAAAA0FAAA+AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Njg0fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   28860: CC => {
+     CC.exports = "data:model/gltf-binary;base64,Z2xURgIAAABMCwAApAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+   },
+   28862: CC => {
+     CC.exports = "data:model/gltf-binary;base64,Z2xURgIAAABsBwAA8AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
+ ... (11964 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L7672-L7720` → after: `L16898-L16899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16898-L16899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16898-L16899) · [Before (L7672-L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L7672-L7720)

```diff
-   9283: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Oq
-     });
-     var Yq = gq(307),
-       lq = gq(9292);
- 
-     function Oq(qq, Eq, gq) {
-       const Oq = Object.entries(Eq).sort(((qq, Eq) => Eq[1] - qq[1])),
-         mq = (0, Yq.Eb)(qq);
-       mq.push(qq ? "\n\n" : "\n");
-       for (const [lq, aq] of Oq) {
-         var xq, Aq, cq;
-         const qq = null !== (xq = null === gq || void 0 === gq || null === (Aq = gq[lq]) || void 0 === Aq ? void 0 : Aq.icon) && void 0 !== xq ? xq : `${lq} Enchantment`;
-         mq.push({
-           icon: qq,
- ... (33 more removed lines; see GitHub link above)
+   26377: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAF5JREFUGJWNjrENADEIA53Xj5Edsn/nFejZgSo13zwRUSIlbkDGOgNcqvzTT94Tm4iAZAScJERkJN+Mr7VCVdF7X6oHsbW2HLMXxALAd6T4eao2s11wrj6ppN0vMmd9U+YcBwRrO08AAAAASUVORK5CYII="
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L7722-L8021` → after: `L16901-L16902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16901-L16902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16901-L16902) · [Before (L7722-L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L7722-L8021)

```diff
-   9297: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => cq,
-       h: () => Hq,
-       i: () => dq,
-       k: () => Aq,
-       m: () => jq,
-       n: () => uq,
-       q: () => Wq,
-       t: () => Vq,
-       x: () => Bq
-     });
-     var Yq = gq(296),
-       lq = gq(598),
-       Oq = gq(307),
-       mq = gq(4085),
- ... (284 more removed lines; see GitHub link above)
+   26383: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHZJREFUGJVjYCASMOIQ/4+uBpvC/2u6ghgYGBgYnj37xJA3YQ8DAwMDIxMuRQwMDAxSUnxwNorCYGslnG5EVvjf3lSJ4dmzT3CBkLJ1cOexIOu6duMlg5aGOMPyjRcY1h69h9UP/2uizP9DffsfXRJFISEFRAMARWgf0inTdnYAAAAA … [truncated]
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L8023-L8119` → after: `L16904-L16905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16904-L16905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16904-L16905) · [Before (L8023-L8119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L8023-L8119)

```diff
-   9176: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Nq,
-       e: () => aq,
-       g: () => Vq
-     });
-     var Yq = gq(1422),
-       lq = gq(57),
-       Oq = gq(1298),
-       mq = gq(4359),
-       xq = gq(2325),
-       Aq = gq(1183),
-       cq = gq(96),
-       uq = gq(1942),
-       Bq = gq(1326),
-       Wq = gq(1070);
- ... (81 more removed lines; see GitHub link above)
+   26388: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJBJREFUGJWNjjEOgkAURN9acAAusPUaei/hGai1sfEEXoFGakoTOsId7I3UFrYcwGYsdDcsaGC6mbw/f2ChDICkjzFG/zgDYNOER/9S3bQ8L8eIOFRdKARQ3bQqcidA3gNy6010GKDT1kaQB1fjMdnuzK3cA9Ddr5PNKnIXmnwzIJsm … [truncated]
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L8121-L8354` → after: `L16907-L16908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16907-L16908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16907-L16908) · [Before (L8121-L8354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L8121-L8354)

```diff
-   9270: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => cq
-     });
-     var Yq = gq(57),
-       lq = gq(1018),
-       Oq = gq.n(lq),
-       mq = gq(1942),
-       xq = gq(1070);
- 
-     function Aq(qq) {
-       const Eq = Math.floor(qq / 3600),
-         gq = Math.floor(qq % 3600 / 60),
-         Yq = Math.floor(qq % 60),
-         lq = `${gq.toString().padStart(2,"0")}:${Yq.toString().padStart(2,"0")}`;
-       return Eq > 0 ? `${Eq}:${lq}` : lq
- ... (218 more removed lines; see GitHub link above)
+   26390: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJWN0C0OgDAMgNFvCZfhBNwAQXA4xPwECDSnGCHzeBzhKhynCBhhEH6aNK14bdLCz1B7lS8X+a4yBoDOOayOD1EPSzAhlTGybxZAxmn2fQh9tmXyDq2OD9w3abAdIDrrcZoBKPJsmxZBqe3eAHpwRXB/z9O7FH9jBRTyMcJ5 … [truncated]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L8356-L8373` → after: `L16910-L16911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16910-L16911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16910-L16911) · [Before (L8356-L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L8356-L8373)

```diff
-   9277: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Oq
-     });
-     var Yq = gq(4364),
-       lq = gq(4367);
- 
-     function Oq(qq) {
-       let {
-         children: Eq,
-         showing: gq,
-         globallyUniqueKey: Oq,
-         alwaysMountChildren: mq = !1,
-         doGameplayStartStopOnShow: xq = !0,
-         keepsMovement: Aq = !1
-       } = qq;
- ... (2 more removed lines; see GitHub link above)
+   26393: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJVJREFUGJWNjjEOgkAURN8awwG4wNZr7L2D2c6e2oqGE3AFGntKEjqyV6G2oPUANkOhS4Ks0Z/8Yibvz3z4cwyApJcwRt84A2DzjPvjqX4ITF21Isp2XAIB1A9BTeEEKGpA7nACYB/Jqaso25Ha22T3LmUerzcu/pw8UFM49UNYKmtv … [truncated]
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L8375-L8392` → after: `L16913-L16914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16913-L16914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16913-L16914) · [Before (L8375-L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L8375-L8392)

```diff
-   9326: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => Oq
-     });
-     var Yq = gq(57),
-       lq = gq(3455);
- 
-     function Oq() {
-       const [qq, Eq] = (0, Yq.useState)(!1);
-       return (0, Yq.useLayoutEffect)((() => {
-         let qq = !0;
-         return (0, lq.b)().then((() => {
-           qq && Eq(!0)
-         })), () => {
-           qq = !1
-         }
- ... (2 more removed lines; see GitHub link above)
+   26398: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJBJREFUGJWNj70NwjAUhD+jKANkAddhAZbIDIyQjjrKCozg8rXOHFCmjOioKClojgI5YBRETnrS3eneH6yEA5D0Es7pV84B+KrkcnsomjENXZZowzgPBFA003FfC1DSgOrtDoAiJaehow0jfeMXd2/WPlN8img281M4AHC/nrOG7L5U … [truncated]
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L8394-L8407` → after: `L16916-L16917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16916-L16917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16916-L16917) · [Before (L8394-L8407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L8394-L8407)

```diff
-   6434: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Oq
-     });
-     var Yq = gq(57),
-       lq = gq(38);
- 
-     function Oq(qq, Eq) {
-       var gq;
-       const [Oq, mq] = (0, Yq.useState)(null !== (gq = lq.i.getItem(qq)) && void 0 !== gq ? gq : Eq);
-       return [Oq, Eq => {
-         lq.i.setItem(qq, Eq), mq(Eq)
-       }]
-     }
+   26405: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJWNj7sNg0AQRN9ZiAJo4GLcgJugBpdAC4gWXALhpkcfhITImSOHDpyMA+tsH2DBSCvtjJ72AzvlACS9jXP6xzkAX+Rc708FM6a+SYi6Gz8DARTMdDmXAhQ9oPJ4AiCL5NQ31N1IW/nV3Ye9z2S/JpgtgMdtSHxyX6y28rH/ … [truncated]
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L8409-L8732` → after: `L16919-L16920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16919-L16920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16919-L16920) · [Before (L8409-L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L8409-L8732)

```diff
-   9246: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Vq,
-       g: () => aq
-     });
-     gq(9251);
-     var Yq = gq(1018),
-       lq = gq.n(Yq),
-       Oq = gq(57),
-       mq = gq(9216);
- 
-     function xq(qq, Eq) {
-       return Math.max(1, Math.round(qq * Eq))
-     }
- 
-     function Aq(qq, Eq) {
- ... (308 more removed lines; see GitHub link above)
+   26410: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAEJJREFUGJVjYKAn+A/FDAwMDAxMuBSt6QpCEcCm8P+kAhfC1k0qcPm/pisIxVoMRRkeuoQV1USZ/0f3AFaFhBQQDQAtZBsBoq6pfwAAAABJRU5ErkJggg=="
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L8734-L8824` → after: `L16922-L16923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16922-L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16922-L16923) · [Before (L8734-L8824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L8734-L8824)

```diff
-   9254: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => uq,
-       e: () => dq,
-       i: () => Vq
-     });
-     var Yq = gq(9216);
-     const lq = "XH1-",
-       Oq = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       mq = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       xq = ["color", "outlineColor"],
-       Aq = 1 + 3 * xq.length + mq.length + 1,
-       cq = Math.ceil(8 * Aq / Math.log2(62)),
-       uq = lq.length + cq;
- 
-     function Bq(qq) {
- ... (75 more removed lines; see GitHub link above)
+   26418: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVklEQVR4nGNgZGRkIAYzoAn8R8MM2BT+f3RlPxi/e3YLjBmRFJOs8D8ehWDFcIXr+sIwFILEMBTOqfACSzTU1IAxiA0Sw2piiqMhCsZqIgGMEY44AxwA7mx0I/qrwkoAAAAASUVORK5CYII="
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L8826-L8952` → after: `L16925-L16926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16925-L16926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16925-L16926) · [Before (L8826-L8952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L8826-L8952)

```diff
-   9216: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Yq,
-       f: () => lq,
-       j: () => Oq,
-       k: () => cq,
-       n: () => Aq,
-       q: () => uq,
-       u: () => xq,
-       v: () => mq
-     });
-     const Yq = {
-         opacity: {
-           min: 5,
-           max: 100,
-           step: 1
- ... (111 more removed lines; see GitHub link above)
+   26426: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAD5JREFUGJVjYKA2YITS/wmpY4KxLl68yHDx4kUGXHwmZG3v37/HykZRiC6BLoZiooODA1Y2AwN2z+AToyIAACt9GYvk9AI1AAAAAElFTkSuQmCC"
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L8954-L8992` → after: `L16928-L16953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16928-L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16928-L16953) · [Before (L8954-L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L8954-L8992)

```diff
-   9263: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Bq,
-       f: () => Wq
-     });
-     var Yq = gq(57),
-       lq = gq(38),
-       Oq = gq(9254),
-       mq = gq(9216);
-     const xq = "crosshairCode";
-     let Aq = null;
-     const cq = new Set;
- 
-     function uq() {
-       if (null === Aq) {
-         var qq;
- ... (23 more removed lines; see GitHub link above)
+   26431: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgGFhgqyXyn6CcrZbI/x1dQf+xKUaRg3FgAsgYWRyssDbKCC6IjkFyKNaDBJA1wPgYTkK3FoZJDhoAuUlQt2wj9a8AAAAASUVORK5CYII="
+   },
+   26434: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgQAK2WiL/kTEDLgCS3NEV9L82yoiwwtooI7DiwWgizKfIJmJVDDMNGeNUCDMNr/XogY1uNQAGGFh91NqUJwAAAABJRU5ErkJggg=="
+   },
+   26439: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHdJREFUGJWVjzEKwzAQBEcmdUCVG30hrdvoUer1tf2DX+FKlWq5ic3pCIQsXLM3N3Dwb57vDWDY+XQABMMOScQYAWitkXNmXV/hOPYbHJJIKQHQe59gICyX7jLZ2G6xi1LKbau1TkcPb/GAz5A0fey6GXblV+hnTkyTMRzAztNwAAAA … [truncated]
+   },
+   26444: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJWVkMENgEAIBEdjA1RCC5R+HW0J+tLgoQbntYEJJAtNlpT3L2fLkzEGZgaAJCLi2q1ZPKU5FxHA3XH38r+Ib9xESY/518V2PW0Oc6APK1PWjAkAAAAASUVORK5CYII="
+   },
+   26448: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHFJREFUGJVjYKAQ/A+2VvrPwMDwHybAiE3Rmq4ghmfPPjFISfExhJStY2BgYGBkQlcVbK0EV/Ts2SeGYGslBgYGBgYMhWuP3oMrkpLiY1h79B52t2V46P7H5kYURTVR5jgl4YomFbgQVMQAVUBQEVEAAJ8cKoYguSGpAAAAAElFTkSu … [truncated]
+   },
+   26451: CC => {
+ ... (10 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L8994-L9135` → after: `L16955-L16956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16955-L16956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16955-L16956) · [Before (L8994-L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L8994-L9135)

```diff
-   8850: (qq, Eq, gq) => {
-     function Yq(qq) {
-       return {
-         x: (qq.left + qq.right) / 2,
-         y: (qq.top + qq.bottom) / 2
-       }
-     }
- 
-     function lq(qq) {
-       return 0 === qq.length ? null : qq.reduce(((qq, Eq) => ({
-         left: Math.min(qq.left, Eq.left),
-         top: Math.min(qq.top, Eq.top),
-         right: Math.max(qq.right, Eq.right),
-         bottom: Math.max(qq.bottom, Eq.bottom)
-       })))
-     }
- ... (126 more removed lines; see GitHub link above)
+   26475: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAADxJREFUGJVjYCASMKLx/+OSQ+b8n1rkBudk9+3CZhDcNDiuiTKHsXECZEU4Ff6fWuRG2CSqKWIg5B6SAADfTh/v5gI5YgAAAABJRU5ErkJggg=="
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9137-L9143` → after: `L16958-L16959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16958-L16959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16958-L16959) · [Before (L9137-L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9137-L9143)

```diff
-   8604: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => lq,
-       e: () => Yq
-     });
-     const Yq = "controllerOpenKeyboard",
-       lq = "controllerKeyboardVisible"
+   26480: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAR0lEQVR4nGNgoCX4D8VYASNM0ZGtFWCGjXcHVjUsMN63D1/A9JRibwY1I0W4KrfoKSBbGOEKYSCndytcAzcvJ1FuxOtmOgIARkcT/4g+r8UAAAAASUVORK5CYII="
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9145-L9149` → after: `L16961-L16962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16961-L16962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16961-L16962) · [Before (L9145-L9149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9145-L9149)

```diff
-   9167: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Yq
-     });
-     const Yq = new Set(["chunkBorders"])
+   26487: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAF1JREFUGJVjYCASMKLx/+OSR1b4f2qRG4qq7L5d2Axj+I+Ma6LM/08tcoPxGZjQrGFkYGBgqIkyZ2hZdhLFFCYGVPB/apEbhiJ0hf+nFrnhdBeyIrh70NyM1SOUAwDuYiHjdCJOsgAAAABJRU5ErkJggg=="
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9151-L9197` → after: `L16964-L16965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16964-L16965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16964-L16965) · [Before (L9151-L9197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9151-L9197)

```diff
-   9160: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       ALL_DEV_TOOLS: () => mq,
-       coreDevTools: () => cq,
-       devTools: () => Aq
-     });
-     var Yq = gq(611),
-       lq = gq(1283),
-       Oq = gq(9167);
-     const mq = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function xq() {
-       const {
-         noaDevTools: qq
-       } = await gq.e(231).then((() => gq(40806)));
-       return qq
-     }
- ... (31 more removed lines; see GitHub link above)
+   26493: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE5JREFUGJVjYCASMOIQ/4+ujgWboqlFbnBOdt8uBgYGBgYmbIqev/jI8PzFRxQJdIWMMBMIgf81Ueb/oSb/x+JWuLXIkkQpwm0lMYqIAgBYxCFvlh8iNwAAAABJRU5ErkJggg=="
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9199-L9330` → after: `L16967-L16968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16967-L16968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16967-L16968) · [Before (L9199-L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9199-L9330)

```diff
-   9321: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq,
-       d: () => lq,
-       f: () => uq
-     });
-     var Yq = gq(1547);
- 
-     function lq(qq) {
-       var Eq;
-       return {
-         ...mq.store,
-         yaw: mq.store.yaw + (null !== (Eq = Yq.b[qq].previewYaw) && void 0 !== Eq ? Eq : 0)
-       }
-     }
-     const Oq = {
- ... (116 more removed lines; see GitHub link above)
+   26495: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAFdJREFUGJVjYCASMOKR+4+sjgmXoqlFbgxTi9zgAtgU/kdWgG413BpkRdl9u+Bq4CbWRJkzMDAwMDx/8RFDEYaVNVHm/6Gm/8emAEURkmLsCpEk8SokCABqByCJOIXmgQAAAABJRU5ErkJggg=="
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9332-L9366` → after: `L16970-L16971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16970-L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16970-L16971) · [Before (L9332-L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9332-L9366)

```diff
-   9313: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Yq.c,
-       f: () => Yq.d,
-       i: () => Yq.f
-     });
-     var Yq = gq(9321);
-     class lq {
-       constructor(qq) {
-         this.load = qq, this.loaded = null, this.loading = null
-       }
-       run(qq) {
-         return null !== this.loaded ? qq(this.loaded) : (this.loading ??= this.load().then((qq => (this.loaded = qq, qq)), (qq => {
-           throw this.loading = null, qq
-         })), this.loading.then(qq))
-       }
- ... (19 more removed lines; see GitHub link above)
+   26500: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANJSURBVFiF1ZdPiBNXHMc/2U12ZrKuo1HWssgeKkUQe6wHPVnwIIIsFEE8tHrZg0IvHsVjexAKPbgBSw8iIoLg0YMWxT+osNBCWw/CrqBuslU0uxMnk3mZNfGQvJc3k5nNbFYpfmHgzcyb3/fz++X3Zl7g … [truncated]
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9368-L9379` → after: `L16973-L16974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16973-L16974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16973-L16974) · [Before (L9368-L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9368-L9379)

```diff
-   6535: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => lq,
-       d: () => Oq
-     });
-     var Yq = gq(38);
-     const lq = "shaderPack";
-     async function Oq() {
-       var qq;
-       let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (qq = await Yq.f.getItem(lq, Eq)) && void 0 !== qq ? qq : null
-     }
+   26502: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAClJREFUGJVjYKAS+A/FDEz4FP3//5+wSadKT8FNGyyKoC4n6HqiFBEFAHyUIg2rIQYUAAAAAElFTkSuQmCC"
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9381-L9387` → after: `L16976-L16977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16976-L16977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16976-L16977) · [Before (L9381-L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9381-L9387)

```diff
-   9185: (qq, Eq, gq) => {
-     function Yq(qq, Eq) {
-       return qq && !Eq
-     }
-     gq.d(Eq, {
-       b: () => Yq
-     })
+   26509: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAW0lEQVR4nGNgwA7+QzGMzcCETdGBw8cZFixbB2eDaGwKwSAhKgiFz4LNtAePnzNATWJYt3E7hkK4onPnLqCbyMiITdGkniawJLJKkBsJKkLxNT5FKJ5ACjfKAAAopTtqRlgRmAAAAABJRU5ErkJggg=="
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9389-L9435` → after: `L16979-L16980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16979-L16980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16979-L16980) · [Before (L9389-L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9389-L9435)

```diff
-   9200: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => Oq
-     });
-     var Yq = gq(1046);
- 
-     function lq() {
-       var qq, Eq;
-       return null !== (qq = null === (Eq = screen.orientation) || void 0 === Eq ? void 0 : Eq.type) && void 0 !== qq ? qq : innerWidth > innerHeight ? "landscape" : "portrait"
-     }
-     const Oq = new class {
-       constructor() {
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
-         }
-       }
- ... (31 more removed lines; see GitHub link above)
+   26516: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9437-L9510` → after: `L16982-L16983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16982-L16983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16982-L16983) · [Before (L9437-L9510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9437-L9510)

```diff
-   8846: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => xq,
-       e: () => Aq
-     });
-     var Yq = gq(24),
-       lq = gq(1308),
-       Oq = gq(96);
-     const mq = {
-       blockMined: {
-         pattern: [18],
-         priority: 1,
-         minGapMs: 120
-       },
-       hitLanded: {
-         pattern: [20],
- ... (58 more removed lines; see GitHub link above)
+   26523: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9512-L9561` → after: `L16985-L16986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16985-L16986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16985-L16986) · [Before (L9512-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9512-L9561)

```diff
-   9178: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => Nq,
-       h: () => Wq
-     });
-     var Yq = gq(24),
-       lq = gq(1677),
-       Oq = gq(38),
-       mq = gq(1336),
-       xq = gq(3526),
-       Aq = gq(1448),
-       cq = gq(1367);
-     const uq = 2592e5,
-       Bq = "notificationOptInLastPromptedAt";
-     async function Wq() {
-       var qq;
- ... (34 more removed lines; see GitHub link above)
+   26529: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANUlEQVR4nGNgwAT/oRgv+P//xfz//y874FX8H6YIhhlwKEZRRBWFKIqJ8hAximAKiQbkmwgAbqlC6CbMsIMAAAAASUVORK5CYII="
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9563-L9585` → after: `L16988-L16989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16988-L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16988-L16989) · [Before (L9563-L9585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9563-L9585)

```diff
-   9189: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => xq,
-       g: () => Aq
-     });
-     var Yq = gq(24);
-     const lq = 24,
-       Oq = "farNametags",
-       mq = 1e5;
- 
-     function xq() {
-       var qq;
-       return null === (qq = Yq.b.get("showDistantNametags")) || void 0 === qq || qq
-     }
- 
-     function Aq() {
- ... (7 more removed lines; see GitHub link above)
+   26537: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkUrDlYUUchQnSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5Oik6CIl/i8ttIjx4Lgf7+497t4BQq3EVNM3AaiaZSSiETGdWRX9r+jGAHzox4jETD2WXEzBdXzdw8PXuzDP … [truncated]
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9587-L9833` → after: `L16991-L16992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16991-L16992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16991-L16992) · [Before (L9587-L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9587-L9833)

```diff
-   9304: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => lq,
-       d: () => mq
-     });
-     const Yq = [{
-       threshold: 10n ** 180n,
-       suffix: "NoQig"
-     }, {
-       threshold: 10n ** 177n,
-       suffix: "OcQig"
-     }, {
-       threshold: 10n ** 174n,
-       suffix: "SpQig"
-     }, {
-       threshold: 10n ** 171n,
- ... (231 more removed lines; see GitHub link above)
+   26546: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAElJREFUGJVjYKAA/IdiFMCEVeVlBwZ0xTCF/9FNQlfMCBOHSmAARt0DDAwMDIxYrcaqAclqdDfCTcOl+f//yw5YfY6hkBhFOAEA/0YaM1Y8FzcAAAAASUVORK5CYII="
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L9835-L10035` → after: `L16994-L16995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16994-L16995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16994-L16995) · [Before (L9835-L10035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L9835-L10035)

```diff
-   9292: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => uq,
-       h: () => Wq,
-       j: () => Bq,
-       n: () => mq,
-       q: () => cq,
-       r: () => Aq
-     });
-     var Yq = gq(307);
-     const lq = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
-       Oq = {
-         Damage: {
-           translationKey: "enchantments:damageDescription"
-         },
-         "Attack Speed": {
- ... (185 more removed lines; see GitHub link above)
+   26550: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAe0lEQVR4nGNgoBD8JwEzoPP//385H4IvO+DEMA2/XxmAMapmPBphmn+/Mvj/eZUKGCM0E9AI0/wZqhFFMwzj1PxyPk7NMIDdAGh4wOQ/49CMYgixoY0M/j9asOD/OQkJDIzLJoIaCWn+j6wR3bkENZ/DbQNhJxOjaPAA … [truncated]
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L10037-L10066` → after: `L16997-L16998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR16997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L16997-L16998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L16997-L16998) · [Before (L10037-L10066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L10037-L10066)

```diff
-   8729: (qq, Eq, gq) => {
-     function Yq(qq, Eq) {
-       return !qq.hidden && (Eq || !qq.isRewardedAd)
-     }
- 
-     function lq(qq) {
-       return "object" === typeof qq ? qq.option : qq
-     }
- 
-     function Oq(qq, Eq) {
-       var gq;
-       if ("dropdown" === (null === (gq = qq.userInput) || void 0 === gq ? void 0 : gq.type) && "object" === typeof qq.userInput.dropdownOptions[0]) {
-         for (const gq of qq.userInput.dropdownOptions)
-           if (lq(gq) === Eq) return "object" === typeof gq ? gq.cost : qq.cost;
-         console.error("Didn't find matching option for dropdown item. Item:", qq, "input:", Eq)
-       }
- ... (14 more removed lines; see GitHub link above)
+   26552: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGhJREFUGJVjYCASMOKR+4+sjgmXov9XPRn+X/UkaMr/pIzC/2imopgCk/z//6onMh/uxv/YrPn77SUDi+k5BgYGBkYWZEGj1H8MDAwMDOdmM8HZMADzDCNUJwMDAwMDMhufZ/5jYRMPAHtSLUeUdSEOAAAAAElFTkSuQmCC"
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L10068-L10070` → after: `L17000-L17001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR17000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L17000-L17001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L17000-L17001) · [Before (L10068-L10070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L10068-L10070)

```diff
-   9251: () => {},
-   9224: qq => {
-     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC … [truncated]
+   26558: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFUmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L10072-L10073` → after: `L17003-L17004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR17003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L17003-L17004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L17003-L17004) · [Before (L10072-L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L10072-L10073)

```diff
-   9230: qq => {
-     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
+   26561: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFUmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L10075-L10076` → after: `L17006-L17007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR17006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L17006-L17007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L17006-L17007) · [Before (L10075-L10076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L10075-L10076)

```diff
-   9233: qq => {
-     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5E … [truncated]
+   26570: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFUmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/98.js` (Changed code · before: `L10078-L10079` → after: `L17009-L17025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aecR17009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-289ab94e430cb02680a5758fbfe480d1a5ea8edbaf66538de7c6b914fddc0aec) · [After (L17009-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/98.js#L17009-L17025) · [Before (L10078-L10079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/98.js#L10078-L10079)

```diff
-   9239: qq => {
-     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
+   26578: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFUmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
+   },
+   26584: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAU0lEQVR4nGNgIBIwovH/45JnQla0fzIDw//LDgz/Lzsw7J+MqpEJWZGDgwNcl4MDqmImZAl8gAmvLDaFBw4cQJFA5yP7+j/UTXDgmItQQ3TwEA0AIuUZNuBXvasAAAAASUVORK5CYII="
+   },
+   26591: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAlElEQVR4nGNgGCjAiMT+T6RamDpGuMD/l/MhrFcLsevUPcDAwMDAUF9fz9DY2MjAwMDAyAKXxaEJGdTX1zNcvnwZzmciqAMJIGskWfO6detQ+KQEGEw9RoDBDeiYcoZh+xaEwMEdJuiWYAX/O6ac+W/vceY/1HRkjNMZDAwMDP/tPc6QZBMDA1qAkaIRHRAT … [truncated]
+   },
+   26598: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQklEQVR4nGNgIBIwQun/hBQywRj/LzvgpZkYiARwq2E6sSrSPYAwkVH3AE5FyFYzYlWFpB6rG7GZTrJnGBjwhyUjAMP6ESLn0LcxAAAAAElFTkSuQmCC"
+   },
+   26604: CC => {
+     CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAV0lEQVR4nGNgoBD8h2L8itZu2QbGDHgU/3/9+jUcr8Wh+P//c5pgjE/x/2frFeEKQfjs8eP/J89biKIQzAEpRMYgRSCMYhpMJ0wDNkUoipExXh+jYRQAAImJgagjSDO6AAAAAElFTkSuQmCC"
+   },
+   26608: CC => {
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/99.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/99.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52)

#### 1. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L2)

```diff
- export const ids = [99];
+ export const ids = [99, 194];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L4)

```diff
-   4724: (qq, Eq, gq) => {
+   34033: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L6-L40` → after: `L6-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L6-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L6-L16) · [Before (L6-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L6-L40)

```diff
-       default: () => Pq
-     });
-     var Yq = gq(1512),
-       lq = gq(57),
-       Oq = gq(1183),
-       mq = gq(1101),
-       xq = gq(1086),
-       Aq = gq(2068),
-       cq = gq(1498),
-       uq = gq(1326),
-       Bq = gq(1077),
-       Wq = gq(24),
-       Nq = gq(1422),
-       aq = gq(1025),
-       Vq = gq(2493),
-       dq = gq(1529),
- ... (19 more removed lines; see GitHub link above)
+       EverythingMenu: () => rf
+     });
+     var QC = ZC(48),
+       wC = ZC(1002),
+       bC = ZC.n(wC),
+       nC = ZC(1143),
+       fC = ZC(1013),
+       oC = ZC(1964),
+       qC = ZC(1388),
+       FC = ZC(1072),
+       WC = ZC(1056);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L42` → after: `L18-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L18-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L18-L388) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L42)

```diff
-     function Pq() {
+     function NC(CC) {
+       let {
+         items: zC,
+         link: ZC,
+         onClick: QC,
+         selectedItemId: wC,
+         className: NC,
+         padStartsOnTab: MC = !0
+       } = CC;
+       const {
+         t: gC
+       } = (0, nC.y)(), SC = (0, FC.k)(), pC = [];
+       for (const bC of zC) {
+         var PC;
+         const CC = pC[pC.length - 1];
+         var GC;
+ ... (355 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L45` → after: `L391-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L391-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L391-L425) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L45)

```diff
-       } = (0, Oq.v)(), Eq = (0, cq.useNavigatePreserveSearch)(), gq = (0, Yq.q)(), {
+       } = (0, nC.y)();
+       return null !== ZC && 0 === ZC.length ? (0, WC.jsx)(WC.Fragment, {
+         children: QC(zC)
+       }) : (0, WC.jsxs)("div", {
+         className: "DeleteAccountSubtitle",
+         children: [QC(zC), null === ZC && (0, WC.jsx)("div", {
+           className: "DeleteAccountSubtitleNote",
+           children: QC("auth:deleteAccountSubscriptionsLoadFailed")
+         }), null !== ZC && (0, WC.jsxs)(WC.Fragment, {
+           children: [(0, WC.jsx)("div", {
+             className: "DeleteAccountSubtitleNote",
+             children: QC("auth:deleteAccountStoreSubscriptions")
+           }), (0, WC.jsx)(Wz.d, {
+             className: "DeleteAccountSubtitleLinks",
+             links: ZC.map((CC => {
+               let {
+ ... (19 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L47` → after: `L427-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L427-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L427-L567) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L47)

```diff
-       } = (0, mq.c)(), Qq = (0, Aq.e)(), yq = (0, xq.l)(), tq = (rq = gq.pathname).startsWith(dq.o) ? null : rq.startsWith(oq.docs) ? "docs" : rq.startsWith(oq.leaderboard) ? "leaderboard" : "myGames";
+       } = (0, gC.e)(), {
+         t: bC
+       } = (0, nC.y)(), [fC, oC] = (0, QC.useState)(!1), [FC, NC] = (0, QC.useState)(null), MC = (0, QC.useRef)(zC);
+       (0, QC.useEffect)((() => (MC.current = zC, () => {
+         MC.current = !1
+       })), [zC]);
+       const SC = wC || fC;
+       return (0, WC.jsxs)("div", {
+         className: "AccountSettingsDeleteAccountButtonContainer",
+         children: [(0, WC.jsxs)(qC.I, {
+           onClick: async function() {
+             if (!fC) {
+               oC(!0);
+               try {
+                 const CC = await async function() {
+                   const [CC, zC] = await Promise.all([(0, Zz.b)(ZC.availableUserContextTypes) ? qz() : [], pz(ZC)]);
+ ... (125 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L49-L59` → after: `L569-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L569-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L569-L618) · [Before (L49-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L49-L59)

```diff
-       const vq = function(qq) {
-         if (!qq.startsWith(dq.o)) return {
-           title: "studio:leaveStudio",
-           icon: "left-from-bracket",
-           to: "/"
-         };
-         const Eq = (0, cq.getPreviousLocation)();
-         return {
-           title: "general:back",
-           icon: "arrow-left",
-           to: null !== Eq && Eq.startsWith(oq.myGames) ? -1 : oq.myGames
+       let {
+         showing: ZC,
+         inGame: wC
+       } = CC;
+       const {
+         t: oC,
+         selectedLanguage: FC
+       } = (0, nC.y)(), {
+         hideSocialLocationFrom: NC
+       } = (0, iC.k)(["hideSocialLocationFrom"]), SC = (0, MC.b)(), {
+         userContext: pC,
+         isUserContextUpdating: GC
+       } = (0, gC.e)(), [RC, AC] = (0, QC.useState)(null !== (zC = pC.getPlayerName()) && void 0 !== zC ? zC : ""), [vC, eC] = (0, QC.useState)(null), {
+         purchasing: TC,
+         outcome: aC,
+         purchase: tC
+ ... (34 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L61-L71` → after: `L620-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L620-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L620-L626) · [Before (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L61-L71)

```diff
-       }(gq.pathname);
-       return (0, lq.useEffect)((() => {
-         Wq.b.set({
-           gameState: "studio",
-           openEverythingMenuName: null
-         })
-       }), []), (0, jq.jsxs)("div", {
-         className: "StudioLayout AnimFadeIn",
-         children: [Qq && (0, jq.jsx)("aside", {
-           className: "StudioLayoutLeft",
-           children: (0, jq.jsx)(Vq.d, {})
+       }), [ZC, pz, GC, pC]), (0, WC.jsxs)("div", {
+         className: bC()("SettingsMenuRightInner AccountSettings", {
+           AccountSettingsLocked: wC
+         }),
+         children: [wC && (0, WC.jsx)("div", {
+           className: "AccountSettingsInGameWarning",
+           children: oC("settingsMenu:accountSettingsInGameWarning")
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L73` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L628) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L73)

```diff
-           className: "StudioLayoutRight",
+           className: "SettingBox SetAccountNameDiv SmallTextLight",
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L75-L82` → after: `L630-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L630-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L630-L662) · [Before (L75-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L75-L82)

```diff
-             className: "StudioTop",
-             children: [(0, jq.jsx)(Bq.b, {
-               show: !0,
-               socialBarIsDocked: Qq
-             }), (0, jq.jsxs)("nav", {
-               className: "StudioNav",
-               children: [(0, jq.jsx)(Nq.d, {
-                 icon: vq.icon,
+             className: "AccountSettingsLabel AccountSettingsNameLabel",
+             children: [oC("homePage:discordNamePopupTitle"), (0, WC.jsxs)(mC.LinkPreserveSearch, {
+               className: "AccountSettingsViewProfile",
+               to: (0, EC.g)({
+                 name: pC.getPlayerName()
+               }),
+               onClick: () => {
+                 iC.b.set({
+                   openEverythingMenuName: null
+                 })
+               },
+               children: [(0, WC.jsx)(fC.c, {
+                 name: "arrow-up-right-from-square"
+               }), " ", oC("profileCard:viewProfile")]
+             })]
+           }), (0, WC.jsxs)("div", {
+ ... (17 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L84` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L664) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L84)

```diff
-                   Eq(vq.to)
+                   Gz((0, HC.e)())
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L86` → after: `L666-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L666-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L666-L749) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L86)

```diff
-                 children: qq(vq.title)
+                 children: (0, WC.jsx)(fC.c, {
+                   name: "dice",
+                   className: "ChooseRandomNameIcon"
+                 })
+               }), !PC.featureFlags.canChangeName && (0, WC.jsx)("div", {
+                 className: "EnterName NoInput",
+                 children: (0, HC.b)(RC, !PC.featureFlags.canSeeRealPlayerNames)
+               })]
+             }), (0, WC.jsx)(qC.g, {
+               className: "ChooseNameButton",
+               disabled: VC || RC === pC.getPlayerName(),
+               onClick: () => {
+                 RC.length < HC.l ? eC(oC("homePage:changeNameMinLengthError", {
+                   length: HC.l
+                 })) : RC.length > HC.i ? eC(oC("homePage:changeNameMaxLengthError", {
+                   length: HC.i
+ ... (68 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L88-L98` → after: `L751-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L751-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L751-L825) · [Before (L88-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L88-L98)

```diff
-                 className: "StudioNavTabs",
-                 children: Hq.map((gq => (0, jq.jsxs)(Nq.Q, {
-                   active: tq === gq.id,
-                   href: oq[gq.id],
-                   onClick: () => {
-                     Eq(oq[gq.id])
-                   },
-                   children: [(0, jq.jsx)(aq.d, {
-                     name: gq.icon
-                   }), !yq && qq(gq.title)]
-                 }, gq.id)))
+                 className: "LegacyAccountSettingsLoginButtons",
+                 children: oz.slice(1)
+               })]
+             })]
+           }), PC.featureFlags.useLogin && (null !== pC.loggedInInfo || pC.isLoggedIn()) && (0, WC.jsxs)(WC.Fragment, {
+             children: [(0, WC.jsx)("div", {
+               className: "AccountSettingsLoginDivider"
+             }), (0, WC.jsxs)(qC.I, {
+               onClick: () => {
+                 (0, KC.forceGlobalSignOut)()
+               },
+               className: "AccountSettingsSignedInButton",
+               children: [(0, WC.jsx)(fC.c, {
+                 name: "right-from-bracket"
+               }), oC("auth:signOut")]
+             })]
+ ... (59 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/99.js` (Changed code · before: `L101-L108` → after: `L2101-L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52R2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9e1131243afa52d7a42acebca1f1f4208cacf91ad35ced4f486f3fca86ff3d52) · [After (L2101-L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/99.js#L2101-L2110) · [Before (L101-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/99.js#L101-L108)

```diff
-           }), (0, jq.jsxs)("main", {
-             className: "StudioBottom",
-             children: [Pq && (0, jq.jsx)("div", {
-               className: "StudioCentredMessage",
-               children: (0, jq.jsx)(uq.e, {})
-             }), !Pq && (0, jq.jsx)("div", {
-               className: "StudioContent",
-               children: (0, jq.jsx)(Yq.f, {})
+           }), xC && (0, WC.jsxs)("div", {
+             className: "CrosshairFullScreenFields",
+             children: [(0, WC.jsx)(DZ, {
+               settings: zC,
+               touch: ZC,
+               backdrop: wC,
+               onChange: NC
+             }), (0, WC.jsx)(eZ, {
+               settings: zC,
+               onChange: NC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (187 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   40862: (qq, Eq, gq) => {
+   40956: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L11-L21)

```diff
-     var Yq = gq(40869),
-       lq = gq(37987);
-     class Oq extends((0, Yq.h)(lq.c)) {}(0, Yq.i)(lq.c, Oq);
-     var mq = gq(37206);
-     class xq extends((0, Yq.h)(mq.h)) {}(0, Yq.i)(mq.h, xq);
-     var Aq = gq(37828);
-     class cq extends((0, Yq.h)(Aq.e)) {}(0, Yq.i)(Aq.e, cq);
-     var uq = gq(37429),
-       Bq = gq(40003),
-       Wq = gq(37421);
-     class Nq extends((0, Yq.h)(Wq.f)) {
+     var QC = ZC(40958),
+       wC = ZC(37849);
+     class bC extends((0, QC.g)(wC.e)) {}(0, QC.i)(wC.e, bC);
+     var nC = ZC(37040);
+     class fC extends((0, QC.g)(nC.f)) {}(0, QC.i)(nC.f, fC);
+     var oC = ZC(37677);
+     class qC extends((0, QC.g)(oC.d)) {}(0, QC.i)(oC.d, qC);
+     var FC = ZC(37290),
+       WC = ZC(40092),
+       NC = ZC(37285);
+     class MC extends((0, QC.g)(NC.d)) {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L23)

```diff
-         super(qq, Eq, gq), (0, uq.l)(qq)
+         super(CC, zC, ZC), (0, FC.g)(CC)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L26)

```diff
-         (0, uq.n)(this._material), super.dispose(qq)
+         (0, FC.k)(this._material), super.dispose(CC)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28-L29` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L28-L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L28-L29)

```diff
-     }(0, Yq.i)(Wq.f, Nq), (0, Wq.i)({
-       disableUnusedSpecularTerm: Yq.e,
+     }(0, QC.i)(NC.d, MC), (0, NC.f)({
+       disableUnusedSpecularTerm: QC.c,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var aq = gq(38662);
-     class Vq extends((0, Yq.h)(aq.e)) {}(0, Yq.i)(aq.e, Vq);
-     var dq = gq(38755),
-       jq = gq(37295),
-       Hq = gq(38114),
-       oq = gq(37253);
-     class Pq extends((0, Yq.h)(dq.d)) {}(0, Yq.i)(dq.d, Pq);
-     class Qq extends((0, Yq.h)(jq.d)) {}(0, Yq.i)(jq.d, Qq);
-     class yq extends((0, Yq.h)(Hq.l)) {}(0, Yq.i)(Hq.l, yq);
-     class tq extends((0, Yq.h)(oq.e)) {}(0, Yq.i)(oq.e, tq)
+     var gC = ZC(38517);
+     class SC extends((0, QC.g)(gC.c)) {}(0, QC.i)(gC.c, SC);
+     var pC = ZC(38623),
+       PC = ZC(37149),
+       GC = ZC(37973),
+       RC = ZC(37086);
+     class AC extends((0, QC.g)(pC.e)) {}(0, QC.i)(pC.e, AC);
+     class xC extends((0, QC.g)(PC.b)) {}(0, QC.i)(PC.b, xC);
+     class JC extends((0, QC.g)(GC.q)) {}(0, QC.i)(GC.q, JC);
+     class IC extends((0, QC.g)(RC.e)) {}(0, QC.i)(RC.e, IC)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   41307: (qq, Eq, gq) => {
+   41355: (CC, zC, ZC) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L48-L61` → after: `L48-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L48-L60) · [Before (L48-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L48-L61)

```diff
-     var Yq = gq(41311),
-       lq = (gq(39732), gq(40860), gq(40236), gq(41324)),
-       Oq = gq(39585),
-       mq = gq(37286),
-       xq = gq(37131),
-       Aq = gq(41334),
-       cq = gq(41338),
-       uq = gq(37244),
-       Bq = (gq(40869), gq(41347)),
-       Wq = gq(41340),
-       Nq = gq(38684),
-       aq = gq(41352),
-       Vq = gq(39617),
-       dq = gq(38671);
+     var QC = ZC(41362),
+       wC = (ZC(39791), ZC(40948), ZC(40308), ZC(41375)),
+       bC = ZC(37138),
+       nC = ZC(36961),
+       fC = ZC(41392),
+       oC = ZC(41394),
+       qC = ZC(37083),
+       FC = (ZC(40958), ZC(41402)),
+       WC = ZC(41396),
+       NC = ZC(38548),
+       MC = ZC(41411),
+       gC = ZC(39674),
+       SC = ZC(38529);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L63` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L62) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L63)

```diff
-       Hq = dq.w,
+       PC = SC.x,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L65-L67` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L64-L66) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L65-L67)

```diff
-       Pq = qq => `gpuParticleSystem[${qq>>2}].${"xyzw"[3&qq]}`,
-       Qq = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${dq.b}\n#define COLOR_POSITIONS ${oq(Hq.colorPositions)}\n#define COLOR1 ${oq(Hq.color1)}\n#define COLOR2 ${oq(Hq.color2)}\n#define VELOCITY ${oq(Hq.JV)}\n#define REMAP $ … [truncated]
-     Vq.d.ShadersStore[`${jq}VertexShader`] = Qq, Vq.d.ShadersStore[`${jq}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
+       RC = CC => `gpuParticleSystem[${CC>>2}].${"xyzw"[3&CC]}`,
+       AC = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${SC.d}\n#define COLOR_POSITIONS ${GC(PC.colorPositions)}\n#define COLOR1 ${GC(PC.color1)}\n#define COLOR2 ${GC(PC.color2)}\n#define VELOCITY ${GC(PC.Np)}\n#define REMAP $ … [truncated]
+     gC.b.ShadersStore[`${pC}VertexShader`] = AC, gC.b.ShadersStore[`${pC}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L70-L71` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L69-L70) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L70-L71)

```diff
-     var rq = gq(38665),
-       vq = gq(41355);
+     var IC = ZC(38523),
+       iC = ZC(41418);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L74` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L73) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L74)

```diff
-         super(qq, Eq, gq), this.renderer = gq, this.PV = Yq, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(dq.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
+         super(CC, zC, ZC), this.renderer = ZC, this.sS = QC, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(SC.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L81-L83` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L80-L82) · [Before (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L81-L83)

```diff
-             const qq = Math.floor(Oq / dq.o),
-               gq = Math.min(Eq, (qq + 1) * dq.o);
-             Yq.texSubImage2D(Yq.TEXTURE_2D, 0, Oq % dq.o * 4, qq, 4 * (gq - Oq), 1, Yq.RGBA_INTEGER, Yq.UNSIGNED_INT, lq, Oq * dq.f), Oq = gq
+             const CC = Math.floor(bC / SC.n),
+               ZC = Math.min(zC, (CC + 1) * SC.n);
+             QC.texSubImage2D(QC.TEXTURE_2D, 0, bC % SC.n * 4, CC, 4 * (ZC - bC), 1, QC.RGBA_INTEGER, QC.UNSIGNED_INT, wC, bC * SC.e), bC = ZC
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L87` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L86) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L87)

```diff
-         const lq = Yq.Ba();
+         const wC = QC.mg();
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L90-L91` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L89-L90) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L90-L91)

```diff
-           mq = Math.min(Oq, dq.o);
-         this.records = lq.createRawTexture(null, 4 * mq, Math.ceil(Oq / mq), Bq.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Bq.c.TEXTURE_NEAREST_SAMPLINGMODE, null, Bq.c.TEXTURETYPE_UNSIGNED_INTEGER)
+           nC = Math.min(bC, SC.n);
+         this.records = wC.createRawTexture(null, 4 * nC, Math.ceil(bC / nC), FC.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, FC.d.TEXTURE_NEAREST_SAMPLINGMODE, null, FC.d.TEXTURETYPE_UNSIGNED_INTEGER)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L94-L95` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L93-L94) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L94-L95)

```diff
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.PV.getAnimationRatio() || 1;
-         const Eq = this.PV.getFrameId();
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.sS.getAnimationRatio() || 1;
+         const zC = this.sS.getFrameId();
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L109` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L108) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L109)

```diff
-         for (const gq of dq.s) this.uniforms[gq] = this.uniformBits[gq];
+         for (const ZC of SC.t) this.uniforms[ZC] = this.uniformBits[ZC];
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L111` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L110) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L111)

```diff
-         (0, vq.l)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Eq = this.ramp) || void 0 === Eq || Eq.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Wq.d.CreateRGBATexture(this.rampTexels.texels, dq.m, … [truncated]
+         (0, iC.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (zC = this.ramp) || void 0 === zC || zC.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = WC.b.CreateRGBATexture(this.rampTexels.texels, SC.k, … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L119-L120` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L119-L120) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L119-L120)

```diff
-       constructor(qq) {
-         this.PV = qq, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, aq.e)(), this.engine = qq.Ba(), this.effect = this.createEffec … [truncated]
+       constructor(CC, zC) {
+         this.sS = CC, this.reportFailure = zC, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, MC.b)(), this.engine = CC.mg(), this. … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L123-L126` → after: `L123-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L123-L126) · [Before (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L123-L126)

```diff
-         const gq = dq.o * this.engine.getCaps().maxTextureSize;
-         Eq > gq && this.warnOnce(`capacity:${qq}`, `particle system ${qq} holds ${gq} particles, not ${Eq}: its records texture's limit`);
-         const Yq = new hq(qq, Math.min(Eq, gq), this, this.PV);
-         return this.PV.addParticleSystem(Yq), Yq
+         const ZC = SC.n * this.engine.getCaps().maxTextureSize;
+         zC > ZC && this.warnOnce(`capacity:${CC}`, `particle system ${CC} holds ${ZC} particles, not ${zC}: its records texture's limit`);
+         const QC = new vC(CC, Math.min(zC, ZC), this, this.sS);
+         return this.sS.addParticleSystem(QC), QC
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L131)

```diff
-         for (const Yq of (0, Nq.l)(qq.blendMode))
+         for (const QC of (0, NC.i)(CC.blendMode))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L136)

```diff
-         this.PV._toBeDisposed.push(qq)
+         this.sS._toBeDisposed.push(CC)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L139)

```diff
-         this.PV.removeParticleSystem(qq), qq.releaseGl()
+         this.sS.removeParticleSystem(CC), CC.releaseGl()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L146)

```diff
-           PV: Yq,
+           sS: QC,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L152)

```diff
-           xq = null !== (Eq = qq.ramp) && void 0 !== Eq ? Eq : this.whiteRamp;
+           fC = null !== (zC = CC.ramp) && void 0 !== zC ? zC : this.whiteRamp;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L154)

```diff
-         for (const Aq of (0, Nq.l)(qq.blendMode)) {
+         for (const oC of (0, NC.i)(CC.blendMode)) {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L156)

```diff
-           gq.enableEffect(Eq), Eq.setTexture("gpuParticleTexture", qq.texture.mirror), Eq.setTexture("gpuParticleRampTexture", xq), Eq._bindTexture("gpuParticleRecords", qq.records), Eq.setMatrix("gpuParticleView", Yq.getViewMatrix()), Eq.setMatrix("gpuParticleProjection", Yq.get … [truncated]
+           ZC.enableEffect(zC), zC.setTexture("gpuParticleTexture", CC.texture.mirror), zC.setTexture("gpuParticleRampTexture", fC), zC._bindTexture("gpuParticleRecords", CC.records), zC.setMatrix("gpuParticleView", QC.getViewMatrix()), zC.setMatrix("gpuParticleProjection", QC.get … [truncated]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L158)

```diff
-         return gq.setAlphaMode(Bq.c.ALPHA_DISABLE), mq
+         return ZC.setAlphaMode(FC.d.ALPHA_DISABLE), nC
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L162-L163` → after: `L162-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L162-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L162-L176) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L162-L163)

```diff
-           gq = this.engine._gl;
-         !this.failed && gq && (!Eq || Eq.isParallelCompiled && !Eq.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Eq.isParallelCompiled && Eq.program && (gq.g … [truncated]
+           ZC = this.gl();
+         !this.failed && ZC && (!zC || zC.isParallelCompiled && !zC.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : zC.isParallelCompiled && zC.program && (ZC.g … [truncated]
+           if (CC.isContextLost()) return eC;
+           for (const [QC, wC] of [
+               ["VERTEX SHADER", zC.vertexShader],
+               ["FRAGMENT SHADER", zC.fragmentShader]
+             ]) {
+             const zC = wC && !CC.getShaderParameter(wC, CC.COMPILE_STATUS) ? CC.getShaderInfoLog(wC) : null;
+             if (zC) return `${QC} ${zC}`
+           }
+           return CC.getProgramInfoLog(ZC) || "a program did not link"
+         }(ZC, zC, zC.program))))
+       }
+       gl() {
+         return this.engine._gl
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L166` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L179) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L166)

```diff
-         return qq === Nq.d ? this.multiplyEffect : this.effect
+         return CC === NC.e ? this.multiplyEffect : this.effect
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L170` → after: `L183-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L183-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L183-L187) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L170)

```diff
-           this.fail(Eq)
+           var ZC;
+           this.fail(null !== (ZC = this.gl()) && void 0 !== ZC && ZC.isContextLost() ? eC : function(CC) {
+             const zC = CC.split("\n    at ")[0];
+             return /^\S*@\S*:\d+:\d+/.test(zC) ? "a program failed, its log not in this browser's stack" : zC.replace(/^Error: /, "")
+           }(zC))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L175-L176` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L192-L193) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L175-L176)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${qq}`);
-           for (const qq of this.PV.xZ.slice()) qq instanceof hq && qq.disposeOnStop && qq.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${CC}`), this.reportFailure(CC);
+           for (const CC of this.sS.Ix.slice()) CC instanceof vC && CC.disposeOnStop && CC.dispose()
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L180-L196` → after: `L197-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L197-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L197-L227) · [Before (L180-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L180-L196)

```diff
-     var bq = gq(39941),
-       iq = gq(40857),
-       Zq = gq(39712),
-       fq = gq(39903),
-       Mq = gq(39900),
-       Tq = gq(39833),
-       zq = gq(40908),
-       Sq = gq(37614),
-       pq = gq(41361),
-       Gq = gq(41369),
-       Lq = gq(41374),
-       Jq = gq(39858),
-       kq = gq(2778),
-       Rq = gq(37489),
-       Uq = gq(40060),
-       Fq = gq(37569),
- ... (1 more removed lines; see GitHub link above)
+     var KC = ZC(39635);
+     class YC extends KC.d {
+       createEffect() {
+         const CC = super.createEffect(...arguments);
+         return mC(CC), dC.has(CC) || (dC.add(CC), CC.onCompileObservable.add((() => {
+           mC(CC)
+         }))), CC
+       }
+     }
+     const dC = new WeakSet;
+ 
+     function mC(CC) {
+       CC._vertexSourceCodeBeforeMigration = "", CC._fragmentSourceCodeBeforeMigration = ""
+     }
+     var HC = ZC(40031),
+       EC = ZC(40946),
+ ... (15 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L199-L200` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L230-L231) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L199-L200)

```diff
-       if (qq.visibility < 1 || !qq.isVisible || !qq.isEnabled() || qq.metadata[sq.c] || !qq.isReady()) return !0;
-       const Eq = qq.fn;
+       if (CC.visibility < 1 || !CC.isVisible || !CC.isEnabled() || CC.metadata[BC.e] || !CC.isReady()) return !0;
+       const zC = CC.Zx;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L204` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L235) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L204)

```diff
-           lq = Yq.da();
+           wC = QC.cg();
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L211` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L242) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L211)

```diff
-         this.wB = qq, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Eq.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.MN = CC, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, zC.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L221-L224` → after: `L252-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L252-L255) · [Before (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L221-L224)

```diff
-           wB: Yq
-         } = this, lq = null === (Eq = Yq.Qv) || void 0 === Eq ? void 0 : Eq.visibility;
-         if (!lq || !qq || Yq.Ma.Ta) return !1;
-         if (!(Yq.kB.pYq[0] >= Fq.f)) return !1;
+           MN: QC
+         } = this, wC = null === (zC = QC.JA) || void 0 === zC ? void 0 : zC.visibility;
+         if (!wC || !CC || QC.Vg.CS) return !1;
+         if (!(QC.fN.fQC[0] >= UC.e)) return !1;
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L227` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L258) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L227)

```diff
-         const mq = Yq.BW,
+         const nC = QC.YN,
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L230` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L261) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L230)

```diff
-         return Aq[0] = xq.x + mq[0], Aq[1] = xq.y + mq[1], Aq[2] = xq.z + mq[2], !!lq.eyeClear(Aq[0], Aq[1], Aq[2], qq.minZ, Oq, Yq.kB) && (this.vis = lq, this.passable.clear(), this.count = 0, !0)
+         return oC[0] = fC.x + nC[0], oC[1] = fC.y + nC[1], oC[2] = fC.z + nC[2], !!wC.eyeClear(oC[0], oC[1], oC[2], CC.minZ, bC, QC.fN) && (this.vis = wC, this.passable.clear(), this.count = 0, !0)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L251-L252` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L282-L283) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L251-L252)

```diff
-           kB: xq
-         } = this.wB, [Aq, cq] = xq.pYq, uq = null !== gq && gq.update(Yq[0], Yq[1], Yq[2], xq.Uqq, Aq, cq, this.passable);
+           fN: fC
+         } = this.MN, [oC, qC] = fC.fQC, FC = null !== ZC && ZC.update(QC[0], QC[1], QC[2], fC.WCC, oC, qC, this.passable);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L263` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L294) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L263)

```diff
-           Jq.c.prototype.push.call(qq, Yq)
+           DC.i.prototype.push.call(CC, QC)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L268-L273` → after: `L299-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L299-L304) · [Before (L268-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L268-L273)

```diff
-     var Kq = gq(37560),
-       Cq = gq(37499),
-       Iq = gq(40037),
-       eq = gq(41377),
-       Dq = gq(40040),
-       qE = gq(39960);
+     var VC = ZC(37404),
+       Cz = ZC(37363),
+       zz = ZC(40110),
+       Zz = ZC(41438),
+       Qz = ZC(40119),
+       wz = ZC(40046);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L287-L288` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L318-L319) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L287-L288)

```diff
-       if (!Eq || !0 !== Eq[Rq.n]) return;
-       const gq = Eq[Rq.s],
+       if (!zC || !0 !== zC[yC.o]) return;
+       const ZC = zC[yC.q],
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L296` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L327) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L296)

```diff
-       const Eq = qq.fn;
+       const zC = CC.Zx;
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L298` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L329) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L298)

```diff
-         const qq = Eq[gq].da();
+         const CC = zC[ZC].cg();
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L302` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L333) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L302)

```diff
-         const qq = Eq[gq].da();
+         const CC = zC[ZC].cg();
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L312` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L343) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L312)

```diff
-       if ("function" !== typeof gq) throw new Error(`terrainDrawState: Babylon has no ${Eq} to hook`);
+       if ("function" !== typeof ZC) throw new Error(`terrainDrawState: Babylon has no ${zC} to hook`);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L317` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L348) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L317)

```diff
-       const Oq = gq.kB.Uqq,
+       const bC = ZC.fN.WCC,
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L321` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L352) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L321)

```diff
-         cq = new Kq.d(Oq, qq.Ba());
+         qC = new VC.d(bC, CC.mg());
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L323` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L354) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L323)

```diff
-         if (AE.has(qq) || (AE.add(qq), qq.onContextLostObservable.add(lE), qq.onContextRestoredObservable.add(lE)), xE) return;
+         if (Nz.has(CC) || (Nz.add(CC), CC.onContextLostObservable.add(oz), CC.Yg.add(oz)), Wz) return;
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L325` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L356) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L325)

```diff
-         const Eq = eq.d.prototype,
+         const zC = Zz.c.prototype,
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L332-L333` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L363-L364) · [Before (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L332-L333)

```diff
-         const Yq = cE(qE.c.prototype, "_syncParentEnabledState");
-         Object.assign(qE.c.prototype, {
+         const QC = Mz(wz.d.prototype, "_syncParentEnabledState");
+         Object.assign(wz.d.prototype, {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L338-L339` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L369-L370) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L338-L339)

```diff
-         const lq = cE(Dq.c.prototype, "resetDrawCache");
-         Dq.c.prototype.resetDrawCache = function(qq, Eq) {
+         const wC = Mz(Qz.d.prototype, "resetDrawCache");
+         Qz.d.prototype.resetDrawCache = function(CC, zC) {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L342` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L373) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L342)

```diff
-         const Oq = Iq.e.prototype,
+         const bC = zz.d.prototype,
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L353` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L384) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L353)

```diff
-       }(qq.Ba());
+       }(CC.mg());
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L368-L369` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L399-L400) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L368-L369)

```diff
-             gq = qq.FYq[0],
-             Yq = qq.FYq[1];
+             ZC = CC.SQC[0],
+             QC = CC.SQC[1];
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L385` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L416) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L385)

```diff
-             Oq = Aq.gN(qq.activeCamera),
+             bC = oC.RM(CC.activeCamera),
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L388` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L419) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L388)

```diff
-             const Eq = qq.Ba().currentRenderPassId;
+             const zC = CC.mg().currentRenderPassId;
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L405` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L436) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L405)

```diff
-             if (!Uq.d.IsInFrustum(Eq.FYq, Yq)) continue;
+             if (!LC.b.IsInFrustum(zC.SQC, QC)) continue;
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L415` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L446) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L415)

```diff
-                 if (mq && Yq[Eq] === cq) Nq && 1 === lq[Eq] && Xq(Wq) && 0, Aq.see(Wq, 1 === lq[Eq] ? Bq : -1);
+                 if (nC && QC[zC] === qC) MC && 1 === wC[zC] && OC(NC) && 0, oC.see(NC, 1 === wC[zC] ? WC : -1);
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L422` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L453) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L422)

```diff
-                 } else Oq ? Pq(Wq, Bq, !0 === Wq.metadata[Cq.l]) : Jq.c.prototype.push.call(gq, Wq)
+                 } else bC ? AC(NC, WC, !0 === NC.metadata[Cz.l]) : DC.i.prototype.push.call(ZC, NC)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L429` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L460) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L429)

```diff
-         const Oq = Eq.UYq;
+         const bC = zC.gQC;
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L432` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L463) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L432)

```diff
-           Eq.isEnabled() && Jq.c.prototype.push.call(Yq, Eq)
+           zC.isEnabled() && DC.i.prototype.push.call(QC, zC)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L436-L437` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L467-L468) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L436-L437)

```diff
-         sYq: () => Aq.culled,
-         ZYq: (qq, Eq) => {
+         pQC: () => oC.culled,
+         zQC: (CC, zC) => {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L441` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L472) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L441)

```diff
-             cq = `${lq}|${xq}|${Aq}`;
+             qC = `${wC}|${fC}|${oC}`;
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L445-L447` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L476-L478) · [Before (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L445-L447)

```diff
-             gq.TEq([lq * Oq - 1, xq * Oq - 1, Aq * Oq - 1], null, qq), uq = Object.assign(Yq(qq, Oq + 2), {
-               XYq: cq,
-               wYq: 0,
+             ZC.wzC([wC * bC - 1, fC * bC - 1, oC * bC - 1], null, CC), FC = Object.assign(QC(CC, bC + 2), {
+               PQC: qC,
+               GQC: 0,
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L451` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L482) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L451)

```diff
-             }), oq(uq), Nq[uq._noaSlot] = (0, kq.i)(lq, xq, Aq), aq[3 * uq._noaSlot] = lq, aq[3 * uq._noaSlot + 1] = xq, aq[3 * uq._noaSlot + 2] = Aq, mq.set(cq, uq)
+             }), RC(FC), MC[FC._noaSlot] = (0, jC.f)(wC, fC, oC), gC[3 * FC._noaSlot] = wC, gC[3 * FC._noaSlot + 1] = fC, gC[3 * FC._noaSlot + 2] = oC, nC.set(qC, FC)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L453` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L484) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L453)

```diff
-           uq.wYq++, qq.metadata[Rq.t] = uq
+           FC.GQC++, CC.metadata[yC.s] = FC
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L455-L457` → after: `L486-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L486-L488) · [Before (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L455-L457)

```diff
-         Wk: qq => {
-           const Eq = qq.metadata[Rq.t];
-           Eq && (Eq.wYq--, Eq.wYq <= 0 && (mq.delete(Eq.XYq), dq.push(Eq._noaSlot)), qq.metadata[Rq.t] = null)
+         IH: CC => {
+           const zC = CC.metadata[yC.s];
+           zC && (zC.GQC--, zC.GQC <= 0 && (nC.delete(zC.PQC), pC.push(zC._noaSlot)), CC.metadata[yC.s] = null)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L459` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L490) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L459)

```diff
-         RYq: (qq, Eq) => {
+         MQC: (CC, zC) => {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L461` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L492) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L461)

```diff
-             Yq = Eq.metadata[Rq.t];
+             QC = zC.metadata[yC.s];
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L475` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L506) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L475)

```diff
-         aqq: qq => {
+         y_: CC => {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L477-L478` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L508-L509) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L477-L478)

```diff
-             Eq.SYq.KYq(qq), Eq.zYq.KYq(qq);
-             for (const gq of Eq.FYq) gq.KYq(qq);
+             zC.nQC.RQC(CC), zC.bQC.RQC(CC);
+             for (const ZC of zC.SQC) ZC.RQC(CC);
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L500` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L531) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L500)

```diff
-         if (!(qq * (qq >= 0 ? mq : Yq) + Eq * (Eq >= 0 ? xq : lq) + uq * (uq >= 0 ? Aq : Oq) + gq[cq + 3] >= 0)) return !1
+         if (!(CC * (CC >= 0 ? nC : QC) + zC * (zC >= 0 ? fC : wC) + FC * (FC >= 0 ? oC : bC) + ZC[qC + 3] >= 0)) return !1
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L504` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L535) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L504)

```diff
-     var NE = gq(37773);
+     var Pz = ZC(37604);
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L507-L508` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L538-L539) · [Before (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L507-L508)

```diff
-         var gq = qq.PV;
-         gq.VYq(new Lq.e(gq));
+         var ZC = CC.sS;
+         ZC.sZC(new tC.e(ZC));
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L510` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L541) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L510)

```diff
-         gq.IYq = Yq, Yq.blocks = [];
+         ZC.xQC = QC, QC.blocks = [];
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L513-L515` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L544-L546) · [Before (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L513-L515)

```diff
-         this.textPlanes = mq, this.sYq = () => lq.sYq(), this.aqq = qq => {
-           uq(Yq, qq), lq.aqq(qq)
-         }, this.ZYq = (Eq, gq, xq) => {
+         this.textPlanes = fC, this.pQC = () => wC.pQC(), this.y_ = CC => {
+           FC(QC, CC), wC.y_(CC)
+         }, this.zQC = (zC, ZC, nC) => {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L517` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L548) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L517)

```diff
-           if (!Eq.metadata[Rq.s] && !Eq.metadata[Rq.l]) {
+           if (!zC.metadata[yC.q] && !zC.metadata[yC.n]) {
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L519-L520` → after: `L550-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L550-L551) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L519-L520)

```diff
-               var Aq = Yq.UYq;
-               if (Eq.metadata[Rq.z] && !Eq.parent) {
+               var oC = QC.gQC;
+               if (zC.metadata[yC.x] && !zC.parent) {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L522-L523` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L553-L554) · [Before (L522-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L522-L523)

```diff
-                 var uq = Eq.yR().DYq;
-                 Eq.metadata[Rq.D] = uq.center.length() + uq.radius, Eq.Wa = !0
+                 var FC = zC.WE().IQC;
+                 zC.metadata[yC.y] = FC.center.length() + FC.radius, zC.Hg = !0
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L525` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L556) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L525)

```diff
-               return Aq.push(Eq), Eq.metadata[Rq.g] = Aq, void(Eq.metadata[Rq.l] = !0)
+               return oC.push(zC), zC.metadata[yC.g] = oC, void(zC.metadata[yC.n] = !0)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L535` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L566) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L535)

```diff
-               qq.wB.TEq(jq, null, Hq), dq = Bq(Hq, cq), Yq.blocks.push(dq), Oq[Vq] = dq, dq.XYq = Vq
+               CC.MN.wzC(PC, null, GC), pC = WC(GC, qC), QC.blocks.push(pC), bC[SC] = pC, pC.PQC = SC
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L537` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L568) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L537)

```diff
-             lq.ZYq(Eq, xq), lq.RYq(dq, Eq), dq.wYq = (dq.wYq || 0) + 1, Eq.metadata[Rq.s] = dq, Eq.metadata[Rq.n] = !0, Eq.Wa = !0
+             wC.zQC(zC, nC), wC.MQC(pC, zC), pC.GQC = (pC.GQC || 0) + 1, zC.metadata[yC.q] = pC, zC.metadata[yC.o] = !0, zC.Hg = !0
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L539` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L570) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L539)

```diff
-         }, this.Wk = qq => {
+         }, this.IH = CC => {
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L541-L543` → after: `L572-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L572-L574) · [Before (L541-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L541-L543)

```diff
-             qq.metadata[Rq.l] && ((0, kq.m)(qq.metadata[Rq.g], qq), qq.metadata[Rq.l] = !1), qq.metadata[Rq.g] === mq && (qq.Wa = !1), qq.metadata[Rq.g] = void 0, qq.metadata[Rq.D] = void 0;
-             var Eq = qq.metadata[Rq.s];
-             Eq && Eq.entries && (qq.metadata[Rq.n] && lq.removeEntry(Eq, qq), Eq.wYq--, Eq.wYq <= 0 && (delete Oq[Eq.XYq], (0, kq.m)(Yq.blocks, Eq))), lq.Wk(qq), qq.metadata[Rq.s] = null, qq.metadata[Rq.n] = !1
+             CC.metadata[yC.n] && ((0, jC.i)(CC.metadata[yC.g], CC), CC.metadata[yC.n] = !1), CC.metadata[yC.g] === fC && (CC.Hg = !1), CC.metadata[yC.g] = void 0, CC.metadata[yC.y] = void 0;
+             var zC = CC.metadata[yC.q];
+             zC && zC.entries && (CC.metadata[yC.o] && wC.removeEntry(zC, CC), zC.GQC--, zC.GQC <= 0 && (delete bC[zC.PQC], (0, jC.i)(QC.blocks, zC))), wC.IH(CC), CC.metadata[yC.q] = null, CC.metadata[yC.o] = !1
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L545` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L576) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L545)

```diff
-         }, this.t5 = function(qq) {
+         }, this.S_ = function(CC) {
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L547-L550` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L578-L581) · [Before (L547-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L547-L550)

```diff
-           if (qq.metadata[Rq.s]) {
-             if (qq.metadata[Rq.n] === Eq) return;
-             var gq = qq.metadata[Rq.s];
-             gq && gq.entries && (Eq ? lq.RYq(gq, qq) : lq.removeEntry(gq, qq)), qq.metadata[Rq.n] = Eq
+           if (CC.metadata[yC.q]) {
+             if (CC.metadata[yC.o] === zC) return;
+             var ZC = CC.metadata[yC.q];
+             ZC && ZC.entries && (zC ? wC.MQC(ZC, CC) : wC.removeEntry(ZC, CC)), CC.metadata[yC.o] = zC
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L552-L554` → after: `L583-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L583-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L583-L585) · [Before (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L552-L554)

```diff
-             if (qq.metadata[Rq.l] === Eq) return;
-             var Oq = qq.metadata[Rq.g] || Yq.UYq;
-             Eq ? Oq.push(qq) : (0, kq.m)(Oq, qq), qq.metadata[Rq.l] = Eq
+             if (CC.metadata[yC.n] === zC) return;
+             var bC = CC.metadata[yC.g] || QC.gQC;
+             zC ? bC.push(CC) : (0, jC.i)(bC, CC), CC.metadata[yC.n] = zC
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L558` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L589) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L558)

```diff
-           cq = Eq * qq.wB.kB.Uqq,
+           qC = zC * CC.MN.fN.WCC,
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L561` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L592) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L561)

```diff
-               qq.SYq.KYq(Eq), qq.zYq.KYq(Eq), qq.FYq.forEach((qq => qq.KYq(Eq))), qq.blocks && uq(qq, Eq)
+               CC.nQC.RQC(zC), CC.bQC.RQC(zC), CC.SQC.forEach((CC => CC.RQC(zC))), CC.blocks && FC(CC, zC)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L565-L567` → after: `L596-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L596-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L596-L598) · [Before (L565-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L565-L567)

```diff
-             var gq = new xq.Na(qq[0], qq[1], qq[2]),
-               Yq = new xq.Na(qq[0] + Eq, qq[1] + Eq, qq[2] + Eq);
-             return new Gq.c(gq, Yq, void 0, void 0, void 0, Aq)
+             var ZC = new nC.Eg(CC[0], CC[1], CC[2]),
+               QC = new nC.Eg(CC[0] + zC, CC[1] + zC, CC[2] + zC);
+             return new aC.b(ZC, QC, void 0, void 0, void 0, oC)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L569` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L600) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L569)

```diff
-         lq = uE(gq, Yq, qq.wB, Bq, ((qq, Eq) => {
+         wC = gz(ZC, QC, CC.MN, WC, ((CC, zC) => {
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L572` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L603) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L572)

```diff
-             Yq.isEnabled(!1) && ((0, NE.b)(Yq, Eq) && Jq.c.prototype.push.call(qq, Yq))
+             QC.isEnabled(!1) && ((0, Pz.b)(QC, zC) && DC.i.prototype.push.call(CC, QC))
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L582` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L613) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L582)

```diff
-         U3: Yq,
+         Vk: QC,
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L586-L587` → after: `L617-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L617-L618) · [Before (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L586-L587)

```diff
-       } = qq.model.o3, xq = qq.mlq;
-       xq.position.Vqq(Eq[0], Eq[1], Eq[2]), xq.rotation.Vqq(gq[0], gq[1], gq[2]);
+       } = CC.model.Lk, fC = CC.dQC;
+       fC.position.L_(zC[0], zC[1], zC[2]), fC.rotation.L_(ZC[0], ZC[1], ZC[2]);
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L589` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L620) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L589)

```diff
-       Aq.position.Vqq(Yq[0], Yq[1], Yq[2]), Aq.fov = lq, Aq.minZ = Oq, Aq.maxZ = mq
+       oC.position.L_(QC[0], QC[1], QC[2]), oC.fov = wC, oC.minZ = bC, oC.maxZ = nC
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L593` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L624) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L593)

```diff
-       const Eq = qq.Ba(),
+       const zC = CC.mg(),
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L596` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L627) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L596)

```diff
-       if (!Yq || gq.Ra < 2 || Eq.vYq || Yq.getParameter(Yq.DEPTH_BITS) < 24) return !1;
+       if (!QC || ZC.fS < 2 || zC.BZC || QC.getParameter(QC.DEPTH_BITS) < 24) return !1;
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L600` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L631) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L600)

```diff
-         xq = fq.c.prototype.render;
+         fC = XC.b.prototype.render;
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L609` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L640) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L609)

```diff
-         qq ? xq.call(this, qq, gq, lq, mq, Aq, cq, uq, Wq, Nq) : (Eq.setAlphaMode(Bq.c.ALPHA_DISABLE), xq.call(this, null, !1, !1, mq, Aq, cq, uq, !1), Oq._empty || (Yq.depthRange(1, 1), xq.call(Oq, null, gq, lq, mq, Aq, cq, uq, Wq, Nq), Yq.depthRange(0, 1)), xq.call(this, null,  … [truncated]
+         CC ? fC.call(this, CC, ZC, wC, nC, oC, qC, WC, NC, MC) : (zC.setAlphaMode(FC.d.ALPHA_DISABLE), fC.call(this, null, !1, !1, nC, oC, qC, WC, !1), bC._empty || (QC.depthRange(1, 1), fC.call(bC, null, ZC, wC, nC, oC, qC, WC, NC, MC), QC.depthRange(0, 1)), fC.call(this, null,  … [truncated]
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L614-L615` → after: `L645-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L645-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L645-L646) · [Before (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L614-L615)

```diff
-       return [Eq, Sq.i].map(((Eq, gq) => {
-         const Yq = new lq.e("light", xq.Na.FromArray(Eq), qq);
+       return [zC, sC.h].map(((zC, ZC) => {
+         const QC = new wC.e("light", nC.Eg.FromArray(zC), CC);
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L619` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L650) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L619)

```diff
-     class HE extends cq.b {
+     class Jz extends oC.c {
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L628` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L659) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L628)

```diff
-         this.heldTexture = qq, this.particleTexture = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.mirror) && void 0 !== Eq ? Eq : null
+         this.heldTexture = CC, this.particleTexture = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.mirror) && void 0 !== zC ? zC : null
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L637` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L668) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L637)

```diff
-         qq && (this.particleTexture = null, (0, uq.w)(this.heldTexture), this.heldTexture = null), super.dispose(qq, Eq, gq)
+         CC && (this.particleTexture = null, (0, qC.C)(this.heldTexture), this.heldTexture = null), super.dispose(CC, zC, ZC)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L640` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L671) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L640)

```diff
-     const oE = Yq.d.Zero();
+     const Iz = QC.c.Zero();
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L642-L643` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L673-L674) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L642-L643)

```diff
-       sgq: function(qq, Eq) {
-         return new Oq.b(qq, Eq.Rgq, {
+       gZC: function(CC, zC) {
+         return new YC(CC, zC.FZC, {
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L650` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L681) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L650)

```diff
-       clq: function(qq, Eq) {
+       EQC: function(CC, zC) {
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L653-L656` → after: `L684-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L684-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L684-L687) · [Before (L653-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L653-L656)

```diff
-           qq.PV = Yq, Yq.detachControl(), Yq.autoClear = !1, Mq.d.MIN_RENDERINGGROUPS = -1;
-           for (let Oq = Mq.d.MIN_RENDERINGGROUPS; Oq <= 1; Oq++) Yq.setRenderingOrder(Oq, fq.c.PainterSortCompare, fq.c.PainterSortCompare, fq.c.PainterSortCompare);
-           Yq.setRenderingAutoClearDepthStencil(0, !1), Zq.b.Enabled = !1, qq.Ylq = new aE(qq, Math.round(Eq.llq)), qq.mlq = new iq.e("camHolder", Yq), qq.camera = new bq.c("camera", new xq.Na(0, 0, 0), Yq), qq.camera.parent = qq.mlq, VE(qq), (0, Sq.l)(qq, ((qq, Eq, gq) => (0, zq. … [truncated]
-           const lq = gq(Yq, Eq.Alq);
+           CC.sS = QC, QC.detachControl(), QC.autoClear = !1, cC.b.MIN_RENDERINGGROUPS = -1;
+           for (let bC = cC.b.MIN_RENDERINGGROUPS; bC <= 1; bC++) QC.setRenderingOrder(bC, XC.b.PainterSortCompare, XC.b.PainterSortCompare, XC.b.PainterSortCompare);
+           QC.setRenderingAutoClearDepthStencil(0, !1), lC.b.Enabled = !1, CC.hQC = new Gz(CC, Math.round(zC.KQC)), CC.dQC = new EC.c("camHolder", QC), CC.camera = new HC.d("camera", new nC.Eg(0, 0, 0), QC), CC.camera.parent = CC.dQC, Rz(CC), (0, sC.l)(CC, ((CC, zC, ZC) => (0, rC. … [truncated]
+           const wC = ZC(QC, zC.HQC);
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L658` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L689) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L658)

```diff
-             lq.some((Eq => Eq === qq)) || console.error(`Light "${qq.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
+             wC.some((zC => zC === CC)) || console.error(`Light "${CC.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L660` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L691) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L660)

```diff
-         }(qq, Eq, jE), dE(qq.PV)
+         }(CC, zC, xz), Az(CC.sS)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L662` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L693) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L662)

```diff
-       Olq: VE,
+       YQC: Rz,
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L664` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L695) · [Before (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L664)

```diff
-         const lq = qq.PV;
+         const wC = CC.sS;
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L667-L668` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L698-L699) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L667-L668)

```diff
-       Blq: function(qq, Eq, gq) {
-         return qq.engine.Ra >= 2 && (qq.Wlq || (qq.Wlq = new nq(qq.PV)), !qq.Wlq.failed) ? qq.Wlq.Fk(Eq, gq) : new HE(Eq, gq, qq.PV)
+       XQC: function(CC, zC, ZC) {
+         return CC.engine.fS >= 2 && (CC.uQC || (CC.uQC = new hC(CC.sS, CC.rQC)), !CC.uQC.failed) ? CC.uQC.DH(zC, ZC) : new Jz(zC, ZC, CC.sS)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L670-L672` → after: `L701-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L701-L703) · [Before (L670-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L670-L672)

```diff
-       alq: function(qq, Eq) {
-         qq.PV.xZ.forEach((gq => {
-           if (gq instanceof hq) return void gq.aqq(Eq, qq.wB.BW);
+       TQC: function(CC, zC) {
+         CC.sS.Ix.forEach((ZC => {
+           if (ZC instanceof vC) return void ZC.y_(zC, CC.MN.YN);
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L678` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L709) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L678)

```diff
-             Yq.worldOffset.x = -qq.wB.BW[0], Yq.worldOffset.y = -qq.wB.BW[1], Yq.worldOffset.z = -qq.wB.BW[2]
+             QC.worldOffset.x = -CC.MN.YN[0], QC.worldOffset.y = -CC.MN.YN[1], QC.worldOffset.z = -CC.MN.YN[2]
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L683-L684` → after: `L714-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L714-L715) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L683-L684)

```diff
-         const Yq = new Aq.b(Eq, qq.PV, null, void 0, void 0, !1);
-         return (0, zq.f)(Eq, gq, qq.PV, Yq), Yq
+         const QC = new fC.d(zC, CC.sS, null, void 0, void 0, !1);
+         return (0, rC.e)(zC, ZC, CC.sS, QC), QC
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L686-L688` → after: `L717-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L717-L719) · [Before (L686-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L686-L688)

```diff
-       QV: OE,
-       Nlq: function(qq, Eq) {
-         return oE.origin.WG(Eq.origin), oE.direction.WG(Eq.direction), oE.length = Eq.length, oE.epsilon = Eq.epsilon, oE.Nlq(qq, !1, void 0, !1, void 0, !0).pickedPoint
+       aS: qz,
+       sQC: function(CC, zC) {
+         return Iz.origin.Av(zC.origin), Iz.direction.Av(zC.direction), Iz.length = zC.length, Iz.epsilon = zC.epsilon, Iz.sQC(CC, !1, void 0, !1, void 0, !0).pickedPoint
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L692` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L723) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L692)

```diff
-   40869: (qq, Eq, gq) => {
+   40958: (CC, zC, ZC) => {
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L694-L695` → after: `L725-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L725-L726) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L694-L695)

```diff
-       e: () => Jq,
-       h: () => Hq,
+       c: () => TC,
+       g: () => GC,
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L698-L711` → after: `L729-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L729-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L729-L742) · [Before (L698-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L698-L711)

```diff
-     var Yq = gq(40003),
-       lq = gq(40878),
-       Oq = gq(40910),
-       mq = gq(40883),
-       xq = gq(37803),
-       Aq = gq(37815),
-       cq = gq(37818),
-       uq = gq(37821),
-       Bq = gq(37242),
-       Wq = gq(37244),
-       Nq = gq(40889),
-       aq = gq(37230),
-       Vq = gq(37233),
-       dq = gq(37220);
+     var QC = ZC(40092),
+       wC = ZC(40963),
+       bC = ZC(40994),
+       nC = ZC(40968),
+       fC = ZC(37648),
+       oC = ZC(37660),
+       qC = ZC(37666),
+       FC = ZC(37670),
+       WC = ZC(37076),
+       NC = ZC(37083),
+       MC = ZC(40970),
+       gC = ZC(37061),
+       SC = ZC(37063),
+       pC = ZC(37050);
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L717` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L748) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L717)

```diff
-         LN: qq
+         Qg: CC
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L722` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L753) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L722)

```diff
-       const Eq = class extends Nq.d {
+       const zC = class extends MC.e {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L724-L725` → after: `L755-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L755-L756) · [Before (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L724-L725)

```diff
-             const Yq = (0, Vq.T)(Eq),
-               lq = Yq && (0, Vq.u)(Yq, qq.name);
+             const QC = (0, SC.Y)(zC),
+               wC = QC && (0, SC.x)(QC, CC.name);
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L727` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L758) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L727)

```diff
-             super(Eq, qq.name, qq.priority, lq ? lq.defines : qq.defines(...mq), !1), this.featureState = void 0, this.featureState = gq, this._pluginManager._addPlugin(this), this._enable(!0), (0, Vq.w)(this._material, qq, this.featureState, this._pluginDefineNames)
+             super(zC, CC.name, CC.priority, wC ? wC.defines : CC.defines(...nC), !1), this.featureState = void 0, this.featureState = ZC, this._pluginManager._addPlugin(this), this._enable(!0), (0, SC.B)(this._material, CC, this.featureState, this._pluginDefineNames)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L733` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L764) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L733)

```diff
-             return qq === dq.d.GLSL || qq === dq.d.WGSL
+             return CC === pC.e.GLSL || CC === pC.e.WGSL
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L736-L737` → after: `L767-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L767-L768) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L736-L737)

```diff
-         gq = (0, aq.k)(qq);
-       for (const [Yq, lq] of Object.entries(aq.d)) {
+         ZC = (0, gC.l)(CC);
+       for (const [QC, wC] of Object.entries(gC.e)) {
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L750-L752` → after: `L781-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L781-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L781-L783) · [Before (L750-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L750-L752)

```diff
-     class oq extends(Hq(xq.e)) {}
-     var Pq = gq(39585),
-       Qq = gq(40898);
+     class RC extends(GC(fC.d)) {}
+     var AC = ZC(39635),
+       xC = ZC(40977);
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L766-L767` → after: `L798-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L798-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L798-L803) · [Before (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L766-L767)

```diff
-         } = qq.getSize(), Oq = Math.round(lq / Yq), xq = Eq && Eq.byteLength === Yq * Yq * Oq * 4 ? Eq : qq._readPixelsSync();
-         return new Qq.c(xq, Yq, Yq, Oq, Pq.b.TEXTUREFORMAT_RGBA, gq, !0, !1, mq.d.NEAREST_NEAREST_MIPLINEAR)
+         } = CC.getSize(), fC = Math.round(bC / wC), oC = CC.getInternalTexture(), qC = zC && zC.byteLength === wC * wC * fC * 4 ? zC : null !== (QC = iC.get(oC)) && void 0 !== QC ? QC : CC._readPixelsSync(), FC = new xC.d(qC, wC, wC, fC, AC.d.TEXTUREFORMAT_RGBA, ZC, !0, !1, nC.e. … [truncated]
+         iC.has(oC) || (! function(CC, zC) {
+           const ZC = zC.createRawTexture(new Uint8Array(4), 1, 1, AC.d.TEXTUREFORMAT_RGBA, !1, !1, nC.e.NEAREST_SAMPLINGMODE);
+           CC._hardwareTexture.release(), zC.unbindAllTextures(), ZC._swapAndDie(CC, !1)
+         }(oC, ZC.mg()), iC.set(oC, qC));
+         return FC
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L772` → after: `L808-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L808-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L808-L809) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L772)

```diff
-     var rq = gq(37823);
+     const iC = new WeakMap;
+     var vC = ZC(37673);
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L778` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L815) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L778)

```diff
-               console.error(`Failed to build texture array for atlas ${Eq}`, qq)
+               console.error(`Failed to build texture array for atlas ${zC}`, CC)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L781` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L818) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L781)

```diff
-         })), (0, rq.h)(Eq, qq.shaderLanguage)
+         })), (0, vC.k)(zC, CC.shaderLanguage)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L790-L791` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L827-L828) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L790-L791)

```diff
-           xq = lq.useWebGL2 ? await tq(qq, null !== (gq = null === (Yq = lq.sources.pixels) || void 0 === Yq ? void 0 : Yq[Eq]) && void 0 !== gq ? gq : null, this._material.ZJ()) : null;
-         (0, rq.e)(this._material, lq, Eq, xq, Oq, Math.round(mq / Oq), this._material.shaderLanguage)
+           fC = wC.useWebGL2 ? await IC(CC, null !== (ZC = null === (QC = wC.sources.pixels) || void 0 === QC ? void 0 : QC[zC]) && void 0 !== ZC ? ZC : null, this._material.Km()) : null;
+         (0, vC.d)(this._material, wC, zC, fC, bC, Math.round(nC / bC), this._material.shaderLanguage)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L794-L803` → after: `L831-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L831-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L831-L840) · [Before (L794-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L794-L803)

```diff
-     var hq = gq(40901),
-       nq = gq(40055),
-       bq = gq(37131),
-       iq = gq(40905),
-       Zq = gq(40176),
-       fq = gq(40040),
-       Mq = gq(40857),
-       Tq = gq(37586),
-       zq = gq(40908);
-     class Sq extends hq.e {
+     var hC = ZC(40985),
+       KC = ZC(40127),
+       YC = ZC(36961),
+       dC = ZC(40988),
+       mC = ZC(40235),
+       HC = ZC(40119),
+       EC = ZC(40946),
+       lC = ZC(37432),
+       XC = ZC(40992);
+     class cC extends hC.c {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L813-L815` → after: `L850-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L850-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L850-L852) · [Before (L813-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L813-L815)

```diff
-       Mesh: iq.c,
-       TransformNode: Mq.e,
-       IN: hq.e,
+       Mesh: dC.e,
+       TransformNode: EC.c,
+       gg: hC.c,
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L818` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L855) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L818)

```diff
-       Na: bq.Na,
+       Eg: YC.Eg,
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L820-L824` → after: `L857-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L857-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L857-L861) · [Before (L820-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L820-L824)

```diff
-       SubMesh: fq.c,
-       VertexData: Zq.d,
-       MirroredGeometry: zq.b,
-       meshFromArrays: zq.f,
-       plainMeshFromArrays: zq.i
+       SubMesh: HC.d,
+       VertexData: mC.e,
+       MirroredGeometry: XC.d,
+       meshFromArrays: XC.e,
+       plainMeshFromArrays: XC.f
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L827-L828` → after: `L864-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L864-L865) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L827-L828)

```diff
-     var Gq = gq(37429);
-     class Lq extends(Hq(uq.g)) {
+     var rC = ZC(37290);
+     class sC extends(GC(FC.f)) {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L834-L836` → after: `L871-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L871-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L871-L873) · [Before (L834-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L834-L836)

```diff
-           const Yq = (0, Vq.T)(qq);
-           Yq && (Yq.disableLighting = !0, (0, Vq.Q)(Yq))
-         }(0, Gq.l)(qq)
+           const QC = (0, SC.Y)(CC);
+           QC && (QC.disableLighting = !0, (0, SC.W)(QC))
+         }(0, rC.g)(CC)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L839` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L876) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L839)

```diff
-         (0, Gq.n)(this._material), super.dispose(qq)
+         (0, rC.k)(this._material), super.dispose(CC)
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L851` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L888) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L851)

```diff
-     }(0, uq.c)({
+     }(0, FC.d)({
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L854-L857` → after: `L891-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L891-L894) · [Before (L854-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L854-L857)

```diff
-     var kq = gq(37313),
-       Rq = gq(37601);
-     const Uq = new RegExp(`^#define ${cq.c}\\s*$`, "m");
-     class Fq extends(Hq(cq.j)) {
+     var aC = ZC(37175),
+       tC = ZC(37450);
+     const DC = new RegExp(`^#define ${qC.e}\\s*$`, "m");
+     class jC extends(GC(qC.g)) {
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L859` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L896) · [Before (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L859)

```diff
-         super(qq, Eq), this.eN = !1, Eq.ditherOnlyWhileFading && (Rq.g.add(qq), this.prewarmDitherTwins(qq))
+         super(CC, zC), this.Sg = !1, zC.ditherOnlyWhileFading && (tC.g.add(CC), this.prewarmDitherTwins(CC))
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L871` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L908) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L871)

```diff
-           Oq && !Uq.test(Yq.defines) && qq.ZJ().onAfterRenderObservable.addOnce((() => {
+           bC && !DC.test(QC.defines) && CC.Km().onAfterRenderObservable.addOnce((() => {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L877-L878` → after: `L914-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L914-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L914-L915) · [Before (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L877-L878)

```diff
-         if (this.eN || qq.bM()) return !1;
-         const Eq = new fq.c(0, 0, 0, 0, 0, qq, void 0, !1, !1);
+         if (this.Sg || CC.GJ()) return !1;
+         const zC = new HC.d(0, 0, 0, 0, 0, CC, void 0, !1, !1);
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L888` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L925) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L888)

```diff
-         this.eN = !0, super.dispose(qq)
+         this.Sg = !0, super.dispose(CC)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L896` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L933) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L896)

```diff
-     Xq(xq.e, oq), Xq(Aq.j, vq), Xq(cq.j, Fq), Xq(uq.g, Lq), (0, Bq.e)({
+     LC(fC.d, RC), LC(oC.j, eC), LC(qC.g, jC), LC(FC.f, sC), (0, WC.c)({
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L899` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L936) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L899)

```diff
-         return (0, kq.t)(qq, gq), gq.detailMap._pluginDefineNames
+         return (0, aC.u)(CC, ZC), ZC.detailMap._pluginDefineNames
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L902` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L939) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L902)

```diff
-         (0, kq.W)(qq.mirror, Eq, gq)
+         (0, aC.X)(CC.mirror, zC, ZC)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L906` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L943) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L906)

```diff
-         if (!Yq) throw new Error(`${Eq.feature.name} has no plugin class (registerPluginClass)`);
+         if (!QC) throw new Error(`${zC.feature.name} has no plugin class (registerPluginClass)`);
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L919-L920` → after: `L956-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L956-L957) · [Before (L919-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L919-L920)

```diff
-           const gq = new mq.d(Yq, Eq, lq, Oq, xq);
-           return Object.assign(gq, cq), void(0, Wq.B)(qq, gq)
+           const ZC = new nC.e(QC, zC, wC, bC, fC);
+           return Object.assign(ZC, qC), void(0, NC.L)(CC, ZC)
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L925` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L962) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L925)

```diff
-               Eq(new Error(`${Aq.context}: ${(null===gq||void 0===gq?void 0:gq.message)||qq||"Failed to load texture"}`))
+               zC(new Error(`${oC.context}: ${(null===ZC||void 0===ZC?void 0:ZC.message)||CC||"Failed to load texture"}`))
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L942-L943` → after: `L979-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L979-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L979-L980) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L942-L943)

```diff
-           jq = new mq.d(null, Eq, dq);
-         kq.v.set(jq, Bq), Object.assign(jq, cq), jq.updateURL(Yq, aq);
+           PC = new nC.e(null, zC, pC);
+         aC.w.set(PC, WC), Object.assign(PC, qC), PC.updateURL(QC, gC);
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L945` → after: `L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L982) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L945)

```diff
-         Hq && (Hq.label = Vq), qq.uvSet = jq.coordinatesIndex, qq.matrix.set((0, kq.R)(jq)), (0, Wq.B)(qq, jq)
+         GC && (GC.label = SC), CC.uvSet = PC.coordinatesIndex, CC.matrix.set((0, aC.P)(PC)), (0, NC.L)(CC, PC)
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L956-L959` → after: `L993-L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L993-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L993-L996) · [Before (L956-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L956-L959)

```diff
-         } = qq.sampler, uq = cq === (0, Wq.v)(xq) ? null : () => {
-           (0, kq.Q)(Bq, cq)
-         }, Bq = new lq.e(Yq, Eq, null, xq, Oq, uq, null, (0, Wq.u)(Aq));
-         Bq.coordinatesMode = mq.d.SKYBOX_MODE, (0, Wq.B)(qq, Bq)
+         } = CC.sampler, FC = qC === (0, NC.y)(fC) ? null : () => {
+           (0, aC.L)(WC, qC)
+         }, WC = new wC.c(QC, zC, null, fC, bC, FC, null, (0, NC.u)(oC));
+         WC.coordinatesMode = nC.e.SKYBOX_MODE, (0, NC.L)(CC, WC)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L968` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1005) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L968)

```diff
-           wrap: uq = mq.d.CLAMP_ADDRESSMODE
+           wrap: FC = nC.e.CLAMP_ADDRESSMODE
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L970` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1007) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L970)

```diff
-         const Bq = new Oq.e(Eq, {
+         const WC = new bC.d(zC, {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L975-L976` → after: `L1012-L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1012-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1012-L1013) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L975-L976)

```diff
-         const Wq = (0, kq.F)(Bq);
-         return (0, kq.H)(Wq, Bq), Wq
+         const NC = (0, aC.C)(WC);
+         return (0, aC.F)(NC, WC), NC
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L980` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1017) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L980)

```diff
-   40908: (qq, Eq, gq) => {
+   40992: (CC, zC, ZC) => {
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L982-L984` → after: `L1019-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1019-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1019-L1021) · [Before (L982-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L982-L984)

```diff
-       b: () => uq,
-       f: () => Bq,
-       i: () => Wq
+       d: () => FC,
+       e: () => WC,
+       f: () => NC
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L986-L993` → after: `L1023-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1023-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1023-L1030) · [Before (L986-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L986-L993)

```diff
-     var Yq = gq(40901),
-       lq = gq(39817),
-       Oq = gq(40055),
-       mq = gq(40180),
-       xq = gq(40905),
-       Aq = gq(40176),
-       cq = gq(37481);
-     class uq extends mq.d {
+     var QC = ZC(40985),
+       wC = ZC(39882),
+       bC = ZC(40127),
+       nC = ZC(40244),
+       fC = ZC(40988),
+       oC = ZC(40235),
+       qC = ZC(37339);
+     class FC extends nC.c {
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1001` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1038) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1001)

```diff
-         (0, cq.q)(qq), this.model = qq, null === (Eq = this.onLinked) || void 0 === Eq || Eq.call(this, qq)
+         (0, qC.n)(CC), this.model = CC, null === (zC = this.onLinked) || void 0 === zC || zC.call(this, CC)
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1028` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1065) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1028)

```diff
-         this.link(new cq.h(qq, Eq, this.getTotalVertices(), new Float64Array(gq.bYq()), new Float64Array(Yq.bYq())))
+         this.link(new qC.f(CC, zC, this.getTotalVertices(), new Float64Array(ZC.VZC()), new Float64Array(QC.VZC())))
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1032-L1033` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1069-L1070) · [Before (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1032-L1033)

```diff
-         const Eq = new uq(qq, this.ZJ()),
-           gq = this.iYq(void 0, !0);
+         const zC = new FC(CC, this.Km()),
+           ZC = this.CQC(void 0, !0);
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1048-L1049` → after: `L1085-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1085-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1085-L1086) · [Before (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1048-L1049)

```diff
-           const Wq = qq.getIsInstanced() ? (gq instanceof Array ? 4 * gq.length : gq.byteLength) / uq : this.getTotalVertices(),
-             Nq = (0, lq.r)(gq, xq, Aq, cq, uq, Wq, !0),
+           const NC = CC.getIsInstanced() ? (ZC instanceof Array ? 4 * ZC.length : ZC.byteLength) / FC : this.getTotalVertices(),
+             MC = (0, wC.o)(ZC, fC, oC, qC, FC, NC, !0),
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1058` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1095) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1058)

```diff
-           Eq.setVerticesBuffer(new Yq.f(this.Ba(), Nq, Oq, aq), Wq)
+           zC.setVerticesBuffer(new QC.f(this.mg(), MC, bC, gC), NC)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1063-L1065` → after: `L1100-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1100-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1100-L1102) · [Before (L1063-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1063-L1065)

```diff
-         const Aq = qq[0].ZJ(),
-           cq = new xq.c(qq[0].name + "_merged", Aq),
-           Bq = new uq(mq.d.RandomId(), Aq, void 0, !1, cq);
+         const oC = CC[0].Km(),
+           qC = new fC.e(CC[0].name + "_merged", oC),
+           WC = new FC(nC.c.RandomId(), oC, void 0, !1, qC);
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1067` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1104) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1067)

```diff
-           if (!xq.c.MergeMeshes(qq, Eq, gq, cq, lq, Oq)) return cq.dispose(), null
+           if (!fC.e.MergeMeshes(CC, zC, ZC, qC, wC, bC)) return qC.dispose(), null
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1089-L1090` → after: `L1126-L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1126-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1126-L1127) · [Before (L1089-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1089-L1090)

```diff
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xq.c(qq, gq);
-       const lq = (0, cq.n)(Eq),
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fC.e(CC, ZC);
+       const wC = (0, qC.j)(zC),
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1098-L1100` → after: `L1135-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1135-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1135-L1137) · [Before (L1098-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1098-L1100)

```diff
-         Vq = new Aq.d;
-       Vq.positions = Oq, Vq.normals = null !== Bq && void 0 !== Bq ? Bq : null, Vq.uvs = null !== Wq && void 0 !== Wq ? Wq : null, Vq.indices = Nq;
-       const dq = new uq(mq.d.RandomId(), gq, Vq, !1, Yq);
+         SC = new oC.e;
+       SC.positions = bC, SC.normals = null !== WC && void 0 !== WC ? WC : null, SC.uvs = null !== NC && void 0 !== NC ? NC : null, SC.indices = MC;
+       const pC = new FC(nC.c.RandomId(), ZC, SC, !1, QC);
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1111` → after: `L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1148) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1111)

```diff
-       const lq = new xq.c(qq, gq),
+       const wC = new fC.e(CC, ZC),
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1118` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1155) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1118)

```diff
-       return Object.assign(new Aq.d, {
+       return Object.assign(new oC.e, {
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1126` → after: `L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1163) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1126)

```diff
-   41355: (qq, Eq, gq) => {
+   41418: (CC, zC, ZC) => {
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1128` → after: `L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1165) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1128)

```diff
-       b: () => dq,
+       c: () => pC,
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1131` → after: `L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1168) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1131)

```diff
-       l: () => cq
+       j: () => qC
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1133-L1135` → after: `L1170-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1170-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1170-L1172) · [Before (L1133-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1133-L1135)

```diff
-     var Yq = gq(37286),
-       lq = gq(38677),
-       Oq = gq(38671);
+     var QC = ZC(37138),
+       wC = ZC(38538),
+       bC = ZC(38529);
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1138` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1175) · [Before (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1138)

```diff
-       const lq = Oq.w;
+       const wC = bC.x;
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1146` → after: `L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1183) · [Before (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1146)

```diff
-         Eq[lq.colorPositions + Oq] = qq.gradient, qq.color1.toArray(Eq, lq.color1 + 4 * Oq), (null !== (Aq = qq.color2) && void 0 !== Aq ? Aq : qq.color1).toArray(Eq, lq.color2 + 4 * Oq)
+         zC[wC.colorPositions + bC] = CC.gradient, CC.color1.toArray(zC, wC.color1 + 4 * bC), (null !== (oC = CC.color2) && void 0 !== oC ? oC : CC.color1).toArray(zC, wC.color2 + 4 * bC)
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1149` → after: `L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1186) · [Before (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1149)

```diff
-         uq = Wq(qq, cq, "JV", Yq);
+         FC = NC(CC, qC, "Np", QC);
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1151` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1188) · [Before (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1151)

```diff
-       for (let Oq = 0; Oq < uq; Oq++) Hq(Eq, lq.JV + 4 * Oq, cq[Nq(cq, Oq)]);
+       for (let bC = 0; bC < FC; bC++) GC(zC, wC.Np + 4 * bC, qC[MC(qC, bC)]);
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1161` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1198) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1161)

```diff
-         texels: new Uint8Array(4 * Oq.m)
+         texels: new Uint8Array(4 * bC.k)
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1168` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1205) · [Before (L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1168)

```diff
-         for (let gq = 0; gq < Oq.m; gq++) lq.k.GetCurrentGradient(gq / Oq.m, qq, ((qq, Eq, gq) => {
+         for (let ZC = 0; ZC < bC.k; ZC++) wC.k.GetCurrentGradient(ZC / bC.k, CC, ((CC, zC, ZC) => {
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1185` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1222) · [Before (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1185)

```diff
-       return Eq ? Eq.length > Oq.b ? (Yq(`particleStops:${gq}`, `GPU particles use the first 2 and last ${Oq.b-2} of more than ${Oq.b} ${gq} gradient stops (${qq.name})`), Oq.b) : Eq.length : 0
+       return zC ? zC.length > bC.d ? (QC(`particleStops:${ZC}`, `GPU particles use the first 2 and last ${bC.d-2} of more than ${bC.d} ${ZC} gradient stops (${CC.name})`), bC.d) : zC.length : 0
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1189` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1226) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1189)

```diff
-       return Eq < 2 || qq.length <= Oq.b ? Eq : qq.length - Oq.b + Eq
+       return zC < 2 || CC.length <= bC.d ? zC : CC.length - bC.d + zC
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1207` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1244) · [Before (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1207)

```diff
-       qq[Eq] = gq.gradient, qq[Eq + 1] = gq.factor1, qq[Eq + 2] = null !== (Yq = gq.factor2) && void 0 !== Yq ? Yq : gq.factor1
+       CC[zC] = ZC.gradient, CC[zC + 1] = ZC.factor1, CC[zC + 2] = null !== (QC = ZC.factor2) && void 0 !== QC ? QC : ZC.factor1
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1210` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1247) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1210)

```diff
-   41352: (qq, Eq, gq) => {
+   41411: (CC, zC, ZC) => {
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1219` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a2ab3ef386767c12560bac6e92dd1ca588a3d239a08fef5cbfdf0d6adc598eb3) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1256) · [Before (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/babylon-backend.js#L1219)

```diff
-       e: () => Yq
+       b: () => QC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b4ac518b35c9d3f935c61d13f62d92d392878c185332b13bbe748db0e960f853) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockFaceTable.js#L4)

```diff
-   42383: (qq, Eq, gq) => {
+   60281: (CC, zC, ZC) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L4)

```diff
-   36439: (qq, Eq, gq) => {
+   36279: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L10-L14` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L10-L11) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L10-L14)

```diff
-     var Yq = gq(36448);
-     const lq = Math.SQRT1_2,
-       Oq = Math.sqrt(3) / 2,
-       mq = .5,
-       xq = {
+     var QC = ZC(36288);
+     const wC = {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L74` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L71) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L74)

```diff
-     var Wq = gq(36454);
+     var qC = ZC(36291);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L81` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L78) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L81)

```diff
-       return `${Eq}|${gq}|${qq}`
+       return `${zC}|${ZC}|${CC}`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L99` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L96) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L99)

```diff
-         const Oq = await tq(Yq(qq), Eq, yq(gq));
+         const bC = await RC(QC(CC), zC, ZC);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L107-L109` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L104-L105) · [Before (L107-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L107-L109)

```diff
-         const Oq = Yq(qq),
-           mq = yq(gq);
-         return null !== (lq = await (0, Wq.d)(Oq, Eq, mq)) && void 0 !== lq ? lq : (await tq(Oq, Eq, mq)).toDataURL()
+         const bC = QC(CC);
+         return null !== (wC = await (0, qC.c)(bC, zC, ZC)) && void 0 !== wC ? wC : (await RC(bC, zC, ZC)).toDataURL()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L124-L127` → after: `L116-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L116-L119) · [Before (L124-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L124-L127)

```diff
-         const Aq = .6 * gq,
-           cq = Aq * lq,
-           uq = Aq * lq * mq,
-           Wq = Aq * Oq,
+         const bC = (0, QC.h)(ZC, wC),
+           nC = bC * QC.c.across,
+           fC = bC * QC.c.down,
+           qC = bC * QC.c.up,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L129` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L121) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L129)

```diff
-           aq = cq / 2 + (gq - cq) / 2,
+           WC = ZC / 2,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L146` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L138) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L146)

```diff
-             rect: Eq.cropFaces ? Oq : [0, 0, 1, 1],
+             rect: zC.cropFaces ? bC : [0, 0, 1, 1],
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L151` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L143) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L151)

```diff
-           Pq = Yq.d;
+           PC = QC.g;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L158` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L150) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L158)

```diff
-         return (0, Yq.e)(Hq, gq, xq, (qq => 1 === oq[qq])), Hq
+         return (0, QC.j)(SC, ZC, wC, (CC => 1 === pC[CC])), SC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L164` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L156) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L164)

```diff
-         return "SlabBlock" === qq ? Aq : "StairsBlock" === qq ? cq : xq
+         return "SlabBlock" === CC ? bC : "StairsBlock" === CC ? nC : wC
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L174` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2aR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c8676a13edb2064c240e8e0d0f935e6b3e1d9694aa6de80e20d0764ae20ffb2a) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L166) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconDrawing.js#L174)

```diff
-         const Eq = await (0, Wq.h)(qq),
+         const zC = await (0, qC.f)(CC),
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L41-L42` → after: `L99-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L99-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L99-L115) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L41-L42)

```diff
-     const Oq = (qq, Eq) => qq < 0 || Eq < 0 || qq >= gq || Eq >= gq || !lq(Eq * gq + qq),
-       mq = [];
+     const wC = new Uint8Array(zC * zC);
+     for (let nC = 0; nC < zC * zC; nC++) wC[nC] = QC(nC) ? 1 : 0;
+     const bC = (CC, ZC) => CC >= 0 && ZC >= 0 && CC < zC && ZC < zC && 0 === wC[ZC * zC + CC],
+       fC = new Float32Array(zC * zC).fill(1 / 0),
+       oC = function(CC) {
+         if (CC !== qC) {
+           const zC = Math.ceil(CC + 1),
+             ZC = [];
+           for (let QC = -zC; QC <= zC; QC++)
+             for (let wC = -zC; wC <= zC; wC++) {
+               const zC = wC * wC + QC * QC;
+               zC > 0 && zC < (CC + 1) ** 2 && ZC.push(wC, QC, zC)
+             }
+           qC = CC, FC = Int32Array.from(ZC)
+         }
+         return FC
+ ... (1 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L44-L50` → after: `L117-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L117-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L117-L124) · [Before (L44-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L44-L50)

```diff
-       for (let Eq = 0; Eq < gq; Eq++)
-         if (!Oq(Eq, qq)) qq: for (let lq = -Yq; lq <= Yq; lq++) {
-           const xq = Yq - Math.abs(lq);
-           for (let Yq = -xq; Yq <= xq; Yq++)
-             if (Oq(Eq + Yq, qq + lq)) {
-               mq.push(qq * gq + Eq);
-               break qq
+       for (let CC = 0; CC < zC; CC++) {
+         if (1 === wC[nC * zC + CC] && (bC(CC - 1, nC) || bC(CC + 1, nC) || bC(CC, nC - 1) || bC(CC, nC + 1)))
+           for (let ZC = 0; ZC < oC.length; ZC += 3) {
+             const QC = CC + oC[ZC],
+               wC = nC + oC[ZC + 1];
+             if (QC >= 0 && wC >= 0 && QC < zC && wC < zC) {
+               const CC = wC * zC + QC;
+               fC[CC] = Math.min(fC[CC], oC[ZC + 2])
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L52-L57` → after: `L126-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L126-L130) · [Before (L52-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L52-L57)

```diff
-         }
-     for (const xq of mq) Eq.set(qq, 4 * xq), Eq[4 * xq + 3] = 255
-   }
-   const Yq = Math.SQRT1_2,
-     lq = Math.sqrt(3) / 2,
-     Oq = {
+           }
+       }
+     for (let qC = 0; qC < zC * zC; qC++) 1 !== wC[qC] && fC[qC] !== 1 / 0 && (CC.set(nC, 4 * qC), CC[4 * qC + 3] = Math.round(255 * Math.min(1, ZC + 1 - Math.sqrt(fC[qC]))))
+   }
+   const NC = {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L120` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L193) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L120)

```diff
-     if (void 0 === Yq) throw new Error(`no ${gq} was sent for ${Eq.slice(0,100)}`);
+     if (void 0 === QC) throw new Error(`no ${ZC} was sent for ${zC.slice(0,100)}`);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L146` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L219) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L146)

```diff
-             Eq(null !== (qq = gq.error) && void 0 !== qq ? qq : new Error("the icon did not encode"))
+             zC(null !== (CC = ZC.error) && void 0 !== CC ? CC : new Error("the icon did not encode"))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L191` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L264) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L191)

```diff
-           const Aq = .6 * mq,
+           const qC = bC(nC, oC),
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L193` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L266) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L193)

```diff
-             Bq = Aq * Yq * .5,
+             NC = qC * zC,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L196` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L269) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L196)

```diff
-             aq = uq / 2 + (mq - uq) / 2,
+             SC = nC / 2,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L213` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L286) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L213)

```diff
-               rect: Oq.cropFaces ? lq : [0, 0, 1, 1],
+               rect: wC.cropFaces ? bC : [0, 0, 1, 1],
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L231` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L304) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L231)

```diff
-           return "SlabBlock" === qq ? mq : "StairsBlock" === qq ? xq : Oq
+           return "SlabBlock" === CC ? MC : "StairsBlock" === CC ? gC : NC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L245-L278` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7efR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3711f84298fa6742eced1d3f3d49d77af7121f4ebb0bc52e61e8f3636d49b7ef) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L318) · [Before (L245-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockIconWorker.js#L245-L278)

```diff
-           return function(qq, Eq, Yq, lq) {
-             const {
-               vertices: Oq,
-               uvs: mq,
-               indices: xq,
-               shades: Aq
-             } = qq, cq = .03125 * Yq, uq = Yq - 2 * cq, Bq = new Float32Array(Oq.length);
-             for (let gq = 0; gq < Oq.length; gq += 3) Bq[gq] = cq + Oq[gq] * uq, Bq[gq + 1] = cq + Oq[gq + 1] * uq, Bq[gq + 2] = Oq[gq + 2];
-             const Wq = new Float32Array(Yq * Yq).fill(-1 / 0),
-               Nq = new Uint8ClampedArray(Yq * Yq * 4),
-               aq = 255 * qq.alphaCutoff;
-             for (let gq = 0; gq < xq.length; gq += 3) {
-               const [qq, lq, Oq] = [xq[gq], xq[gq + 1], xq[gq + 2]], [cq, uq, Vq] = [3 * qq, 3 * lq, 3 * Oq], [dq, jq, Hq, oq, Pq, Qq] = [Bq[cq], Bq[cq + 1], Bq[uq], Bq[uq + 1], Bq[Vq], Bq[Vq + 1]], yq = (Hq - dq) * (Qq - jq) - (Pq - dq) * (oq - jq);
-               if (Math.abs(yq) < 1e-9) continue;
-               const tq = Aq[gq / 3],
-                 [rq, vq, hq, nq, bq, iq] = [mq[2 * qq], mq[2 * qq + 1], mq[2 * lq], mq[2 * lq + 1], mq[2 * Oq], mq[2 * Oq + 1]],
- ... (18 more removed lines; see GitHub link above)
+           return oC(CC, wC, ZC, QC)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17)

#### 1. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L4)

```diff
-   36475: (qq, Eq, gq) => {
+   36302: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L6-L21` → after: `L6-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L6-L21) · [Before (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L6-L21)

```diff
-       "./Artisan Bench.json": [40921, 266],
-       "./Aspen Item Pedestal.json": [40927, 267],
-       "./Cedar Item Pedestal.json": [40929, 268],
-       "./Cherry Item Pedestal.json": [40935, 269],
-       "./Furnace.json": [40940, 270],
-       "./Jungle Item Pedestal.json": [40947, 271],
-       "./Mango Item Pedestal.json": [40952, 272],
-       "./Palm Item Pedestal.json": [40956, 273],
-       "./Pear Item Pedestal.json": [40963, 274],
-       "./Pine Item Pedestal.json": [40965, 275],
-       "./Plum Item Pedestal.json": [40973, 276],
-       "./Potion Table.json": [40975, 277],
-       "./Salvaging Table.json": [40977, 278],
-       "./Showcase.json": [40980, 279],
-       "./Spectral Item Pedestal.json": [40983, 280],
-       "./Workbench.json": [40988, 281]
+       "./Artisan Bench.json": [41003, 275],
+       "./Aspen Item Pedestal.json": [41009, 276],
+       "./Cedar Item Pedestal.json": [41018, 277],
+       "./Cherry Item Pedestal.json": [41025, 278],
+       "./Furnace.json": [41031, 279],
+       "./Jungle Item Pedestal.json": [41035, 280],
+       "./Mango Item Pedestal.json": [41044, 281],
+       "./Palm Item Pedestal.json": [41047, 282],
+       "./Pear Item Pedestal.json": [41050, 283],
+       "./Pine Item Pedestal.json": [41056, 284],
+       "./Plum Item Pedestal.json": [41062, 285],
+       "./Potion Table.json": [41067, 286],
+       "./Salvaging Table.json": [41070, 287],
+       "./Showcase.json": [41075, 288],
+       "./Spectral Item Pedestal.json": [41082, 289],
+       "./Workbench.json": [41084, 290]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L33)

```diff
-     lq.keys = () => Object.keys(Yq), lq.id = 36475, qq.exports = lq
+     wC.keys = () => Object.keys(QC), wC.id = 36302, CC.exports = wC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L35)

```diff
-   36467: (qq, Eq, gq) => {
+   36297: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L40-L42` → after: `L40-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L40-L42) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L40-L42)

```diff
-     var Yq = gq(36454),
-       lq = gq(36448);
-     const Oq = gq(36475),
+     var QC = ZC(36291),
+       wC = ZC(36288);
+     const bC = ZC(36302),
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L79)

```diff
-       return mq.width = Eq, mq.height = Eq, mq.getContext("2d").putImageData(new ImageData((0, lq.h)(Yq, Oq, Eq, gq), Eq, Eq), 0, 0), mq.toDataURL()
+       return nC.width = zC, nC.height = zC, nC.getContext("2d").putImageData(new ImageData((0, wC.k)(QC, bC, zC, ZC), zC, zC), 0, 0), nC.toDataURL()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L83)

```diff
-       const lq = `${Eq}|${gq}|${qq}`;
+       const wC = `${zC}|${ZC}|${CC}`;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cb3637dc194093c15e4e51745f895b777ebddda5ffb9814f8e587ebcd89ac17) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/blockModelIcons.js#L85)

```diff
-       return Oq || (Oq = (0, Yq.e)(qq, (() => uq(qq)), Eq, gq).then((Yq => null !== Yq && void 0 !== Yq ? Yq : Bq(qq, Eq, gq))), Oq.catch((() => {
+       return bC || (bC = (0, QC.d)(CC, (() => FC(CC)), zC, ZC).then((QC => null !== QC && void 0 !== QC ? QC : WC(CC, zC, ZC))), bC.catch((() => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db)

#### 1. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5)

```diff
-   43039: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/bloxd_wasm_anim_bg.e877f14ffbaecd066601.wasm"
+   42435: (CC, zC, ZC) => {
+     CC.exports = ZC.p + "static/media/bloxd_wasm_anim_bg.72dea6b87a87456a5828.wasm"
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L7)

```diff
-   43032: (qq, Eq, gq) => {
+   42432: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L15-L23` → after: `L15-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23) · [Before (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23)

```diff
-       const mq = Hq(qq, nq.tSYw),
-         xq = bq,
-         Aq = Hq(Eq, nq.tSYw),
-         cq = bq,
-         uq = Hq(gq, nq.tSYw),
-         Bq = bq,
-         Wq = Hq(Yq, nq.tSYw),
-         aq = bq,
-         Vq = Hq(lq, nq.tSYw),
+       const nC = GC(CC, hC.XsNz),
+         fC = KC,
+         oC = GC(zC, hC.XsNz),
+         qC = KC,
+         FC = GC(ZC, hC.XsNz),
+         WC = KC,
+         NC = GC(QC, hC.XsNz),
+         gC = KC,
+         SC = GC(wC, hC.XsNz),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L28)

```diff
-         }(Oq, nq.tSYw),
+         }(bC, hC.XsNz),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L30)

```diff
-       const yq = nq.fbAU(mq, xq, Aq, cq, uq, Bq, Wq, aq, Vq, dq, oq, Qq);
+       const JC = hC.JmIP(nC, fC, oC, qC, FC, WC, NC, gC, SC, pC, RC, xC);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L33-L39` → after: `L33-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39) · [Before (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39)

```diff
-       return nq.NJFj(yq[0], 1 * yq[1], 1), vq
-     }
- 
-     function Oq(qq, Eq) {
-       const gq = oq(qq, nq.tSYw, nq.j6Cc),
-         Yq = bq,
-         lq = nq.zrWh(gq, Yq, Eq);
+       return hC.LnDQ(JC[0], 1 * JC[1], 1), vC
+     }
+ 
+     function bC(CC, zC) {
+       const ZC = RC(CC, hC.XsNz, hC.l7s8),
+         QC = KC,
+         wC = hC.UdTS(ZC, QC, zC);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L44)

```diff
-       nq.d7Th()
+       hC.S3an()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L50)

```diff
-         cVIT: {
+         OrUC: {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L52)

```diff
-           EvN0: function(qq, Eq) {
+           xH1Z: function(CC, zC) {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L55)

```diff
-           GJzs: function(qq, Eq) {
+           I3eF: function(CC, zC) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58)

```diff
-               Yq = "string" === typeof gq ? gq : void 0;
-             var lq = jq(Yq) ? 0 : oq(Yq, nq.tSYw, nq.j6Cc),
+               QC = "string" === typeof ZC ? ZC : void 0;
+             var wC = PC(QC) ? 0 : RC(QC, hC.XsNz, hC.l7s8),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L62)

```diff
-           PBxs: function(qq, Eq) {
+           B5M0: function(CC, zC) {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L65)

```diff
-           puT8: function(qq, Eq) {
+           SICw: function(CC, zC) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L68)

```diff
-           F1HB: function(qq) {
+           Rv0u: function(CC) {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82)

```diff
-       Xmq: () => lq,
-       Ku: () => Oq,
+       hnC: () => wC,
+       SW: () => bC,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L85)

```diff
-       Cu: () => mq
+       pW: () => nC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L90)

```diff
-       return (null === cq || !0 === cq.buffer.detached || void 0 === cq.buffer.detached && cq.buffer !== nq.memory.buffer) && (cq = new DataView(nq.memory.buffer)), cq
+       return null !== qC && qC.buffer === hC.memory.buffer || (qC = new DataView(hC.memory.buffer)), qC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L173)

```diff
-       return hq = qq, nq = qq.exports, vq = Eq, cq = null, Wq = null, nq.vZUi(), nq
+       return eC = CC, hC = CC.exports, vC = zC, qC = null, NC = null, hC.B1Kp(), hC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L197)

```diff
-           if (!qq.ok) throw new Error(`failed to fetch Wasm: ${qq.status} ${qq.statusText} fetching '${qq.url}'`);
+           if (!CC.ok) throw new Error(`failed to fetch Wasm: ${CC.status} ${CC.statusText} fetching '${CC.url}'`);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L224-L225` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225)

```diff
-     var Mq = gq(2805),
-       Tq = gq(6500);
+     var HC = ZC(2856),
+       EC = ZC(6616);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L229)

```diff
-         super((0, Mq.M)(qq, Eq), {
+         super((0, HC.F)(CC, zC), {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L245)

```diff
-           qq = await (0, Mq.N)(new gq.U(gq(43039)), (0, Tq.d)("bloxd_wasm_anim"))
+           CC = await (0, HC.I)(new ZC.U(ZC(42435)), (0, EC.e)("bloxd_wasm_anim"))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L247)

```diff
-           throw new zq((0, Mq.R)(Eq), Eq)
+           throw new lC((0, HC.P)(zC), zC)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28dbR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cb19094f77a907e361c1b7aaa7c3cab9b0fdb1dfc3e4c17be3cf6a62769e28db) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-anim.js#L262)

```diff
-         return Oq.Xmq(Object.entries(qq).flat(), [...Eq.mobTypes], [...Eq.vehicleTypes], [...Eq.mobAiStates], [...Eq.playerPoses], "builtIns" in lq ? lq.builtIns : void 0)
+         return bC.hnC(Object.entries(CC).flat(), [...zC.mobTypes], [...zC.vehicleTypes], [...zC.mobAiStates], [...zC.playerPoses], "builtIns" in wC ? wC.builtIns : void 0)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (526 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5)

```diff
-   43012: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/bloxd_wasm_webgl_bg.27a0dc9e59c84764d00e.wasm"
+   42416: (CC, zC, ZC) => {
+     CC.exports = ZC.p + "static/media/bloxd_wasm_webgl_bg.e291fcd4e174899e0a2c.wasm"
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7)

```diff
-   43003: (qq, Eq, gq) => {
+   42411: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14)

```diff
-       Hd: () => lq,
-       nOq: () => Oq,
+       mp: () => wC,
+       fbC: () => bC,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16)

```diff
-       Ku: () => xq,
+       SW: () => fC,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L19-L39` → after: `L19-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L19-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L39) · [Before (L19-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L39)

```diff
-       Cu: () => Aq,
-       tYq: () => cq,
-       Iu: () => uq,
-       eu: () => Bq,
-       Du: () => Wq,
-       qB: () => Nq,
-       EB: () => aq,
-       gB: () => Vq,
-       YB: () => dq,
-       rYq: () => jq,
-       xB: () => Hq,
-       dYq: () => oq,
-       bOq: () => Pq,
-       jYq: () => Qq,
-       iOq: () => yq,
-       ZOq: () => tq,
- ... (5 more removed lines; see GitHub link above)
+       pW: () => oC,
+       UZC: () => qC,
+       PW: () => FC,
+       GW: () => WC,
+       RW: () => NC,
+       AW: () => MC,
+       xW: () => gC,
+       JW: () => SC,
+       IW: () => pC,
+       ap: () => PC,
+       hW: () => GC,
+       TZC: () => RC,
+       obC: () => AC,
+       aZC: () => xC,
+       FbC: () => JC,
+       WbC: () => IC,
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L48)

```diff
-         vE.Nu8G(qq, 0)
+         iz.lk2I(CC, 0)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L50-L51` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L50-L51) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L50-L51)

```diff
-       static PYq() {
-         return vE.hrnv() >>> 0
+       static jZC() {
+         return iz.TulB() >>> 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L53-L54` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L53-L54) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L53-L54)

```diff
-       MOq() {
-         return vE.Phkk(this.__wbg_ptr)
+       MbC() {
+         return iz.SKzf(this.__wbg_ptr)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L56-L57` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L56-L57) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L56-L57)

```diff
-       Mlq() {
-         return vE.xQNX(this.__wbg_ptr) >>> 0
+       WwC() {
+         return iz.nK2P(this.__wbg_ptr) >>> 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L59-L60` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L59-L60) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L59-L60)

```diff
-       TOq(qq, Eq, gq) {
-         return vE.aSrb(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       gbC(CC, zC, ZC) {
+         return iz.UNwM(this.__wbg_ptr, CC, zC, ZC) >>> 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L63)

```diff
-         return vE.zvOT(this.__wbg_ptr, qq, Eq, gq) >>> 0
+         return iz.hDXG(this.__wbg_ptr, CC, zC, ZC) >>> 0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L65-L66)

```diff
-       zOq() {
-         return vE.slrd(this.__wbg_ptr) >>> 0
+       SbC() {
+         return iz.aPBq(this.__wbg_ptr) >>> 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L68-L69` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L68-L69) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L68-L69)

```diff
-       zlq(qq, Eq, gq, Yq, lq, Oq, mq) {
-         return vE.UY0D(this.__wbg_ptr, qq, Eq, gq, Yq, lq, Oq, mq)
+       MwC(CC, zC, ZC, QC, wC, bC, nC) {
+         return iz.VyJk(this.__wbg_ptr, CC, zC, ZC, QC, wC, bC, nC)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L71-L72)

```diff
-       SOq(qq, Eq, gq) {
-         return vE.HtsE(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       pbC(CC, zC, ZC) {
+         return iz.eHJg(this.__wbg_ptr, CC, zC, ZC) >>> 0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L74-L75` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L74-L75) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L74-L75)

```diff
-       pOq() {
-         return vE.bmgg(this.__wbg_ptr) >>> 0
+       PbC() {
+         return iz.qO2u(this.__wbg_ptr) >>> 0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L77-L78` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L77-L78) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L77-L78)

```diff
-       GOq() {
-         return vE.Lbav(this.__wbg_ptr) >>> 0
+       GbC() {
+         return iz.pPrl(this.__wbg_ptr) >>> 0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L80-L81` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L80-L81) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L80-L81)

```diff
-       JOq() {
-         return vE.pDUN(this.__wbg_ptr) >>> 0
+       AbC() {
+         return iz.diB2(this.__wbg_ptr) >>> 0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L84)

```diff
-         return vE.CzsZ(this.__wbg_ptr, qq, Eq, gq) >>> 0
+         return iz.Rb5X(this.__wbg_ptr, CC, zC, ZC) >>> 0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L86-L87` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L86-L87) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L86-L87)

```diff
-       klq(qq, Eq, gq) {
-         return vE.VT8V(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       RwC(CC, zC, ZC) {
+         return iz.ZhrT(this.__wbg_ptr, CC, zC, ZC) >>> 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L89-L90` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L89-L90) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L89-L90)

```diff
-       Slq() {
-         return vE.DPyX(this.__wbg_ptr) >>> 0
+       gwC() {
+         return iz.PFaT(this.__wbg_ptr) >>> 0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L92-L93` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L92-L93) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L92-L93)

```diff
-       plq(qq) {
-         return vE.T7uy(this.__wbg_ptr, qq) >>> 0
+       SwC(CC) {
+         return iz.v5rQ(this.__wbg_ptr, CC) >>> 0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L95-L96` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L95-L96) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L95-L96)

```diff
-       Glq(qq, Eq, gq, Yq, lq, Oq) {
-         return vE.yTYD(this.__wbg_ptr, qq, Eq, gq, Yq, lq, Oq) >>> 0
+       pwC(CC, zC, ZC, QC, wC, bC) {
+         return iz.HqY5(this.__wbg_ptr, CC, zC, ZC, QC, wC, bC) >>> 0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L98-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L98-L99) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L98-L99)

```diff
-       Tlq() {
-         return vE.lWGm(this.__wbg_ptr) >>> 0
+       NwC() {
+         return iz.YJGx(this.__wbg_ptr) >>> 0
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L101-L102` → after: `L101-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L101-L102) · [Before (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L101-L102)

```diff
-       kOq() {
-         return vE.DaUv(this.__wbg_ptr) >>> 0
+       xbC() {
+         return iz.UVVd(this.__wbg_ptr) >>> 0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L104-L105` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L104-L105) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L104-L105)

```diff
-       ROq(qq) {
-         return vE.YB7f(this.__wbg_ptr, qq) >>> 0
+       JbC(CC) {
+         return iz.y9Lt(this.__wbg_ptr, CC) >>> 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L107-L108)

```diff
-       Ulq(qq) {
-         return vE.YLUZ(this.__wbg_ptr, qq) >>> 0
+       xwC(CC) {
+         return iz.qStR(this.__wbg_ptr, CC) >>> 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L110-L111` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L110-L111) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L110-L111)

```diff
-       UOq(qq) {
-         return vE.QUYU(this.__wbg_ptr, qq) >>> 0
+       IbC(CC) {
+         return iz.qqqe(this.__wbg_ptr, CC) >>> 0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L113-L114)

```diff
-       FOq(qq) {
-         return vE.CWZe(this.__wbg_ptr, qq) >>> 0
+       ibC(CC) {
+         return iz.yLf2(this.__wbg_ptr, CC) >>> 0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L117)

```diff
-         return vE.U0Jb(this.__wbg_ptr, qq, Eq, gq, Yq, lq, Oq) >>> 0
+         return iz.qjZS(this.__wbg_ptr, CC, zC, ZC, QC, wC, bC) >>> 0
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L119-L120` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L119-L120) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L119-L120)

```diff
-       XOq(qq) {
-         return 0 !== vE.hS2c(this.__wbg_ptr, qq)
+       ebC(CC) {
+         return 0 !== iz.dV0P(this.__wbg_ptr, CC)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L122-L123` → after: `L122-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L122-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L122-L126) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L122-L123)

```diff
-       wOq(qq, Eq) {
-         return vE.B5Tw(this.__wbg_ptr, qq, Eq) >>> 0
+       sp() {
+         return iz.WINh(this.__wbg_ptr) >>> 0
+       }
+       hbC(CC, zC) {
+         return iz.YgC0(this.__wbg_ptr, CC, zC) >>> 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L125-L126` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L128-L129) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L125-L126)

```diff
-       KOq(qq) {
-         return vE.Ilqe(this.__wbg_ptr, qq) >>> 0
+       KbC(CC) {
+         return iz.xWhh(this.__wbg_ptr, CC) >>> 0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L129` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L132) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L129)

```diff
-         return vE.wFYj(this.__wbg_ptr) >>> 0
+         return iz.dDXl(this.__wbg_ptr) >>> 0
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L131-L132` → after: `L134-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L134-L135) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L131-L132)

```diff
-       COq() {
-         return vE.Htr0(this.__wbg_ptr) >>> 0
+       YbC() {
+         return iz.saCr(this.__wbg_ptr) >>> 0
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L135` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L138) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L135)

```diff
-         return vE.A4nW(this.__wbg_ptr) >>> 0
+         return iz.aVVK(this.__wbg_ptr) >>> 0
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L137-L138` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L140-L141) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L137-L138)

```diff
-       IOq(qq, Eq, gq, Yq, lq) {
-         return vE.hxuE(this.__wbg_ptr, qq, Eq, gq, Yq, lq) >>> 0
+       dbC(CC, zC, ZC, QC, wC) {
+         return iz.p0AR(this.__wbg_ptr, CC, zC, ZC, QC, wC) >>> 0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L140-L141` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L143-L144) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L140-L141)

```diff
-       eOq(qq, Eq, gq) {
-         return vE.kD0Y(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       mbC(CC, zC, ZC) {
+         return iz.DMrg(this.__wbg_ptr, CC, zC, ZC) >>> 0
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L143-L144` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L146-L147) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L143-L144)

```diff
-       DOq(qq, Eq, gq, Yq) {
-         return vE.ntEb(this.__wbg_ptr, qq, Eq, gq, Yq) >>> 0
+       HbC(CC, zC, ZC, QC) {
+         return iz.pdQg(this.__wbg_ptr, CC, zC, ZC, QC) >>> 0
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L146-L147` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L149-L150) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L146-L147)

```diff
-       qmq(qq, Eq, gq) {
-         return vE.UJnU(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       EbC(CC, zC, ZC) {
+         return iz.Vy34(this.__wbg_ptr, CC, zC, ZC) >>> 0
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L149-L150` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L152-L153) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L149-L150)

```diff
-       Emq(qq, Eq) {
-         return vE.Nq5p(this.__wbg_ptr, qq, Eq) >>> 0
+       lbC(CC, zC) {
+         return iz.SYiJ(this.__wbg_ptr, CC, zC) >>> 0
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L152-L153` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L155-L156) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L152-L153)

```diff
-       Rlq(qq) {
-         return vE.YJ1I(this.__wbg_ptr, qq) >>> 0
+       AwC(CC) {
+         return iz.UdYo(this.__wbg_ptr, CC) >>> 0
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L156` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L159) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L156)

```diff
-         return vE.s4x1(this.__wbg_ptr) >>> 0
+         return iz.ubmw(this.__wbg_ptr) >>> 0
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L158-L159` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L161-L162) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L158-L159)

```diff
-       gmq() {
-         return vE.ykqo(this.__wbg_ptr) >>> 0
+       XbC() {
+         return iz.jOHv(this.__wbg_ptr) >>> 0
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L162` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L165) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L162)

```diff
-         return vE.wBOE(this.__wbg_ptr) >>> 0
+         return iz.FwKj(this.__wbg_ptr) >>> 0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L164-L165` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L167-L168) · [Before (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L164-L165)

```diff
-       Ymq() {
-         return vE.rL5K(this.__wbg_ptr) >>> 0
+       cbC() {
+         return iz.uwlj(this.__wbg_ptr) >>> 0
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L167-L168` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L170-L171) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L167-L168)

```diff
-       lmq() {
-         return vE.av4n(this.__wbg_ptr) >>> 0
+       ubC() {
+         return iz.GF43(this.__wbg_ptr) >>> 0
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L171` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L174) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L171)

```diff
-         const gq = vE.OIx5(qq, Eq);
+         const ZC = iz.iOLq(CC, zC);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L174-L175` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L177-L178) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L174-L175)

```diff
-       Omq(qq) {
-         return vE.Wh0d(this.__wbg_ptr, qq) >>> 0
+       rbC(CC) {
+         return iz.yxhJ(this.__wbg_ptr, CC) >>> 0
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L178` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L181) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L178)

```diff
-         return vE.jqd5(this.__wbg_ptr) >>> 0
+         return iz.xlrd(this.__wbg_ptr) >>> 0
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L180-L181` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L183-L184) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L180-L181)

```diff
-       mOq(qq, Eq) {
-         return vE.GExa(this.__wbg_ptr, qq, Eq) >>> 0
+       uwC(CC, zC) {
+         return iz.fo0h(this.__wbg_ptr, CC, zC) >>> 0
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L183-L184` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L186-L187) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L183-L184)

```diff
-       gOq(qq) {
-         return vE.P4J2(this.__wbg_ptr, qq) >>> 0
+       EwC(CC) {
+         return iz.PzAB(this.__wbg_ptr, CC) >>> 0
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L186-L187` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L189-L190) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L186-L187)

```diff
-       mmq(qq, Eq, gq, Yq) {
-         return vE.CMjo(this.__wbg_ptr, qq, Eq, gq, Yq) >>> 0
+       sbC(CC, zC, ZC, QC) {
+         return iz.HL35(this.__wbg_ptr, CC, zC, ZC, QC) >>> 0
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L189-L190` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L192-L193) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L189-L190)

```diff
-       uOq(qq) {
-         return vE.zNqT(this.__wbg_ptr, qq) >>> 0
+       awC(CC) {
+         return iz.Yoh3(this.__wbg_ptr, CC) >>> 0
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L192-L193` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L195-L196) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L192-L193)

```diff
-       Klq() {
-         vE.gsQO(this.__wbg_ptr)
+       ewC() {
+         iz.S06t(this.__wbg_ptr)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L195-L196` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L198-L199) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L195-L196)

```diff
-       aOq(qq) {
-         vE.XRef(this.__wbg_ptr, qq)
+       LwC(CC) {
+         iz.pZfV(this.__wbg_ptr, CC)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L198-L199` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L201-L202) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L198-L199)

```diff
-       NOq(qq) {
-         return vE.glu6(this.__wbg_ptr, qq)
+       ywC(CC) {
+         return iz.bn5t(this.__wbg_ptr, CC)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L201-L202` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L204-L205) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L201-L202)

```diff
-       wlq() {
-         return vE.kPwm(this.__wbg_ptr) >>> 0
+       vwC() {
+         return iz.uYv7(this.__wbg_ptr) >>> 0
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L205` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L208) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L205)

```diff
-         return vE.DIgh(this.__wbg_ptr) >>> 0
+         return iz.Z0lS(this.__wbg_ptr) >>> 0
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L207-L208` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L210-L211) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L207-L208)

```diff
-       AOq() {
-         return vE.G2YD(this.__wbg_ptr) >>> 0
+       swC() {
+         return iz.SobF(this.__wbg_ptr) >>> 0
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L210-L211` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L213-L214) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L210-L211)

```diff
-       LOq(qq) {
-         return vE.A2Pf(this.__wbg_ptr, qq) >>> 0
+       RbC(CC) {
+         return iz.vnXs(this.__wbg_ptr, CC) >>> 0
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L213-L214` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L216-L217) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L213-L214)

```diff
-       xmq(qq) {
-         return vE.et96(this.__wbg_ptr, qq) >>> 0
+       TbC(CC) {
+         return iz.XH1x(this.__wbg_ptr, CC) >>> 0
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L216-L217` → after: `L219-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L219-L220) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L216-L217)

```diff
-       Amq(qq) {
-         return vE.R04E(this.__wbg_ptr, qq) >>> 0
+       abC(CC) {
+         return iz.xdXR(this.__wbg_ptr, CC) >>> 0
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L219-L220` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L222-L223) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L219-L220)

```diff
-       cmq(qq) {
-         return vE.Q4us(this.__wbg_ptr, qq) >>> 0
+       tbC(CC) {
+         return iz.JUba(this.__wbg_ptr, CC) >>> 0
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L223` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L226) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L223)

```diff
-         return vE.MvAc(this.__wbg_ptr, qq, Eq, gq) >>> 0
+         return iz.gaOW(this.__wbg_ptr, CC, zC, ZC) >>> 0
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L225-L226` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L228-L229) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L225-L226)

```diff
-       slq(qq) {
-         return vE.W4be(this.__wbg_ptr, qq) >>> 0
+       IwC(CC) {
+         return iz.QT1C(this.__wbg_ptr, CC) >>> 0
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L228-L229` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L231-L232) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L228-L229)

```diff
-       flq() {
-         return vE.a7ml(this.__wbg_ptr) >>> 0
+       FwC() {
+         return iz.gCwX(this.__wbg_ptr) >>> 0
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L231-L232` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L234-L235) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L231-L232)

```diff
-       umq(qq) {
-         return vE.iPL4(this.__wbg_ptr, qq) >>> 0
+       DbC(CC) {
+         return iz.tqLX(this.__wbg_ptr, CC) >>> 0
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L234-L235` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L237-L238) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L234-L235)

```diff
-       Bmq(qq) {
-         vE.bvRq(this.__wbg_ptr, qq)
+       jbC(CC) {
+         iz.f5Fw(this.__wbg_ptr, CC)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L237-L238` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fdR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-94575efa3cc4be1e13ed57362956a970ca8f8480689f2160aac8c3b0cbdcc6fd) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L240-L241) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/bloxd-wasm-webgl.js#L237-L238)

```diff
-       Wmq(qq) {
-         return 0 !== vE.B358(this.__wbg_ptr, Gq(qq))
+       ybC(CC) {
+         return 0 !== iz.xcwv(this.__wbg_ptr, uC(CC))
```
