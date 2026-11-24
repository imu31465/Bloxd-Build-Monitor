# Changed — Bundle Modifications Report (Part 108 / 141)

- **Updated at**: `2026-11-24T14:21 JST`
- **Part**: `108 / 141` (**428** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 107](part-107.md) · [Part 109 →](part-109.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/99.js` (31kiid.1299b0d6 → mpd96o.85ad4551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/99.js` (929 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae)

#### 751. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8330` → after: `L8330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8330) · [Before (L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8330)

```diff
-       return null !== (Fk = kk.amount) && void 0 !== Fk ? Fk : 0
+       return null !== (Tm = mm.amount) && void 0 !== Tm ? Tm : 0
```

#### 752. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8350` → after: `L8350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8350) · [Before (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8350)

```diff
-       return (0, Tk.Q)(Xk) ? "string" !== typeof Fk ? "" : (!jk.has(Fk) && jk.size < ek && (jk.add(Fk), console.warn(`No item called "${Fk}", so its hover shows the name as given`)), Fk) : Xk
+       return (0, Am.H)(hm) ? "string" !== typeof Tm ? "" : (!om.has(Tm) && om.size < Om && (om.add(Tm), console.warn(`No item called "${Tm}", so its hover shows the name as given`)), Tm) : hm
```

#### 753. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8356-L8357` → after: `L8356-L8357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8356-L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8356-L8357) · [Before (L8356-L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8356-L8357)

```diff
-         zk = null !== (ak = null === (qk = Fk[kk.name]) || void 0 === qk ? void 0 : qk.rootName) && void 0 !== ak ? ak : kk.name,
-         Sk = null !== (Lk = null !== (tk = Vk.customDisplayName) && void 0 !== tk ? tk : null === (Zk = Fk[kk.name]) || void 0 === Zk ? void 0 : Zk.displayName) && void 0 !== Lk ? Lk : wk(Fk, zk);
+         cm = null !== (Dm = null === (im = Tm[mm.name]) || void 0 === im ? void 0 : im.rootName) && void 0 !== Dm ? Dm : mm.name,
+         zm = null !== (Rm = null !== (pm = Jm.customDisplayName) && void 0 !== pm ? pm : null === (Em = Tm[mm.name]) || void 0 === Em ? void 0 : Em.displayName) && void 0 !== Rm ? Rm : Ym(Tm, cm);
```

#### 754. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8360-L8361` → after: `L8360-L8361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8360-L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8360-L8361) · [Before (L8360-L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8360-L8361)

```diff
-       Ek && (vk = (0, ik.zb)(Sk, {
-         colour: ik.sb[Ek]
+       km && (Zm = (0, am.ob)(zm, {
+         colour: am.kb[km]
```

#### 755. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8366-L8367` → after: `L8366-L8367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8366-L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8366-L8367) · [Before (L8366-L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8366-L8367)

```diff
-         const Tk = (0, Xk.oc)(kk);
-         return Tk.every((kk => "string" === typeof kk)) ? kk : Tk.map((kk => "string" === typeof kk ? kk : {
+         const Am = (0, hm.Zb)(mm);
+         return Am.every((mm => "string" === typeof mm)) ? mm : Am.map((mm => "string" === typeof mm ? mm : {
```

#### 756. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8373` → after: `L8373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8373) · [Before (L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8373)

```diff
-       }(Vk.customDescription, Vk)) && void 0 !== Jk ? Jk : null === (xk = Fk[kk.name]) || void 0 === xk ? void 0 : xk.description) && void 0 !== Hk ? Hk : null === (Pk = Fk[zk]) || void 0 === Pk ? void 0 : Pk.description) && void 0 !== ek ? ek : "";
+       }(Jm.customDescription, Jm)) && void 0 !== jm ? jm : null === (Vm = Tm[mm.name]) || void 0 === Vm ? void 0 : Vm.description) && void 0 !== qm ? qm : null === (Im = Tm[cm]) || void 0 === Im ? void 0 : Im.description) && void 0 !== Om ? Om : "";
```

#### 757. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8375-L8376` → after: `L8375-L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8375-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8375-L8376) · [Before (L8375-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8375-L8376)

```diff
-       if (null !== (Kk = Vk.customAttributes) && void 0 !== Kk && Kk.enchantments) nk = (0, lk.d)(Ok, Vk.customAttributes.enchantments, Vk.customAttributes.enchantmentData);
-       else if (Ik[zk]) nk = (0, ik.zb)(Ok), nk.push({
+       if (null !== (Km = Jm.customAttributes) && void 0 !== Km && Km.enchantments) Sm = (0, wm.c)(bm, Jm.customAttributes.enchantments, Jm.customAttributes.enchantmentData);
+       else if (fm[cm]) Sm = (0, am.ob)(bm), Sm.push({
```

#### 758. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8390` → after: `L8390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8390) · [Before (L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8390)

```diff
-         if (nk = [], (0, Tk.Q)(Vk.customAttributes.health) || (nk.push({
+         if (Sm = [], (0, Am.H)(Jm.customAttributes.health) || (Sm.push({
```

#### 759. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8401` → after: `L8401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8401) · [Before (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8401)

```diff
-           }), (0, Tk.Q)(kk.maxHealth) || (nk.push({
+           }), (0, Am.H)(mm.maxHealth) || (Sm.push({
```

#### 760. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8405` → after: `L8405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8405) · [Before (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8405)

```diff
-           }))), !(0, Tk.Q)(kk.attackDamage) && kk.attackDamage > 0 && (nk.push({
+           }))), !(0, Am.H)(mm.attackDamage) && mm.attackDamage > 0 && (Sm.push({
```

#### 761. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8416` → after: `L8416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8416) · [Before (L8416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8416)

```diff
-           })), !(0, Tk.Q)(kk.secondaryAttackDamage) && kk.secondaryAttackDamage > 0 && (nk.push({
+           })), !(0, Am.H)(mm.secondaryAttackDamage) && mm.secondaryAttackDamage > 0 && (Sm.push({
```

#### 762. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8427` → after: `L8427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8427) · [Before (L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8427)

```diff
-           })), (0, Tk.Q)(kk.baseRunningSpeed) || (nk.push({
+           })), (0, Am.H)(mm.baseRunningSpeed) || (Sm.push({
```

#### 763. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8447` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8447) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8447)

```diff
-           icon: null !== (uk = null === (bk = kk.tameInfo) || void 0 === bk ? void 0 : bk.saddleItemName) && void 0 !== uk ? uk : "Saddle",
+           icon: null !== (Gm = null === (Xm = mm.tameInfo) || void 0 === Xm ? void 0 : Xm.saddleItemName) && void 0 !== Gm ? Gm : "Saddle",
```

#### 764. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8485` → after: `L8485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8485) · [Before (L8485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8485)

```diff
-           let Fk = null !== (Rk = kk.tameInfo.likedFoods) && void 0 !== Rk ? Rk : [];
+           let Tm = null !== (Pm = mm.tameInfo.likedFoods) && void 0 !== Pm ? Pm : [];
```

#### 765. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8534` → after: `L8534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8534) · [Before (L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8534)

```diff
-           for (const Ik of null !== (Ck = kk.tameInfo.neutralFoods) && void 0 !== Ck ? Ck : []) {
+           for (const fm of null !== (ym = mm.tameInfo.neutralFoods) && void 0 !== ym ? ym : []) {
```

#### 766. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8554` → after: `L8554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8554) · [Before (L8554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8554)

```diff
-           for (const Ik of null !== (Nk = kk.tameInfo.dislikedFoods) && void 0 !== Nk ? Nk : []) {
+           for (const fm of null !== (Cm = mm.tameInfo.dislikedFoods) && void 0 !== Cm ? Cm : []) {
```

#### 767. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8564` → after: `L8564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8564) · [Before (L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8564)

```diff
-         nk.length > 0 ? (nk.shift(), nk.unshift(...(0, ik.zb)(Ok))) : nk = (0, ik.zb)(Ok)
+         Sm.length > 0 ? (Sm.shift(), Sm.unshift(...(0, am.ob)(bm))) : Sm = (0, am.ob)(bm)
```

#### 768. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8581-L8582` → after: `L8581-L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8581-L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8581-L8582) · [Before (L8581-L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8581-L8582)

```diff
-         const kk = null !== (qk = null === (Lk = Tk.attributes.customAttributes) || void 0 === Lk ? void 0 : Lk.enchantmentTier) && void 0 !== qk ? qk : "Tier 0",
-           Fk = null !== (tk = null === (Zk = ik.attributes.customAttributes) || void 0 === Zk ? void 0 : Zk.enchantmentTier) && void 0 !== tk ? tk : "Tier 0";
+         const mm = null !== (im = null === (Rm = Am.attributes.customAttributes) || void 0 === Rm ? void 0 : Rm.enchantmentTier) && void 0 !== im ? im : "Tier 0",
+           Tm = null !== (pm = null === (Em = am.attributes.customAttributes) || void 0 === Em ? void 0 : Em.enchantmentTier) && void 0 !== pm ? pm : "Tier 0";
```

#### 769. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8591` → after: `L8591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8591) · [Before (L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8591)

```diff
-         const Ik = document.querySelector(`[data-inven-idx="${kk}"]`);
+         const fm = document.querySelector(`[data-inven-idx="${mm}"]`);
```

#### 770. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8601` → after: `L8601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8601) · [Before (L8601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8601)

```diff
-   34058: (kk, Fk, Ik) => {
+   34180: (mm, Tm, fm) => {
```

#### 771. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8604-L8605` → after: `L8604-L8605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8604-L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8604-L8605) · [Before (L8604-L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8604-L8605)

```diff
-       c: () => ek,
-       d: () => wk
+       e: () => Om,
+       f: () => Ym
```

#### 772. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8607-L8616` → after: `L8607-L8616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8607-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8607-L8616) · [Before (L8607-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8607-L8616)

```diff
-     var Xk = Ik(1406),
-       Tk = Ik(58),
-       ik = Ik(1287),
-       yk = Ik(4516),
-       lk = Ik(2283),
-       ak = Ik(1179),
-       qk = Ik(95),
-       Lk = Ik(1907),
-       tk = Ik(1318),
-       Zk = Ik(1096);
+     var hm = fm(1454),
+       Am = fm(59),
+       am = fm(1309),
+       xm = fm(4471),
+       wm = fm(2317),
+       Dm = fm(1208),
+       im = fm(105),
+       Rm = fm(1946),
+       pm = fm(1345),
+       Em = fm(1135);
```

#### 773. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8628` → after: `L8628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8628) · [Before (L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8628)

```diff
-       return qk.featureFlags.canUseInviteLinks && (0, Zk.jsx)(yk.c, {
+       return im.featureFlags.canUseInviteLinks && (0, Em.jsx)(xm.d, {
```

#### 774. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8658` → after: `L8658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8658) · [Before (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8658)

```diff
-       } = (0, ak.y)(), Ik = null !== (kk = wk(qk.featureFlags.canUseInviteLinks)) && void 0 !== kk ? kk : "Loading Link...", [ik, yk] = (0, Tk.useState)(0), [lk, Lk] = (0, Tk.useReducer)((kk => kk + 1), 0);
+       } = (0, Dm.A)(), fm = null !== (mm = Ym(im.featureFlags.canUseInviteLinks)) && void 0 !== mm ? mm : "Loading Link...", [am, xm] = (0, Am.useState)(0), [wm, Rm] = (0, Am.useReducer)((mm => mm + 1), 0);
```

#### 775. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8671` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8671) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8671)

```diff
-         }), (0, Zk.jsx)(Xk.d, {
+         }), (0, Em.jsx)(hm.e, {
```

#### 776. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8689` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8689) · [Before (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8689)

```diff
-         return (0, ik.x)().then((kk => {
+         return (0, am.C)().then((mm => {
```

#### 777. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8699` → after: `L8699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8699) · [Before (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8699)

```diff
-   34155: (kk, Fk, Ik) => {
+   34280: (mm, Tm, fm) => {
```

#### 778. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8701` → after: `L8701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8701) · [Before (L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8701)

```diff
-       b: () => qk
+       c: () => im
```

#### 779. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8703-L8704` → after: `L8703-L8704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8703-L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8703-L8704) · [Before (L8703-L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8703-L8704)

```diff
-     var Xk = Ik(58),
-       Tk = Ik(1055),
+     var hm = fm(59),
+       Am = fm(1080),
```

#### 780. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8706-L8707` → after: `L8706-L8707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8706-L8707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8706-L8707) · [Before (L8706-L8707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8706-L8707)

```diff
-       yk = Ik(1907),
-       lk = Ik(1096);
+       xm = fm(1946),
+       wm = fm(1135);
```

#### 781. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8713-L8714` → after: `L8713-L8714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8713-L8714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8713-L8714) · [Before (L8713-L8714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8713-L8714)

```diff
-         Tk = `${Ik.toString().padStart(2,"0")}:${Xk.toString().padStart(2,"0")}`;
-       return Fk > 0 ? `${Fk}:${Tk}` : Tk
+         Am = `${fm.toString().padStart(2,"0")}:${hm.toString().padStart(2,"0")}`;
+       return Tm > 0 ? `${Tm}:${Am}` : Am
```

#### 782. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8738` → after: `L8738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8738) · [Before (L8738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8738)

```diff
-   4884: (kk, Fk, Ik) => {
+   4825: (mm, Tm, fm) => {
```

#### 783. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8740` → after: `L8740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8740) · [Before (L8740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8740)

```diff
-       e: () => Hk
+       b: () => qm
```

#### 784. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8742` → after: `L8742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8742) · [Before (L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8742)

```diff
-     var Xk = Ik(1055),
+     var hm = fm(1080),
```

#### 785. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8744-L8751` → after: `L8744-L8751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8744-L8751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8744-L8751) · [Before (L8744-L8751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8744-L8751)

```diff
-       ik = Ik(4619),
-       yk = Ik(1179),
-       lk = Ik(1066),
-       ak = Ik(1406),
-       qk = Ik(1453),
-       Lk = Ik(1324),
-       tk = Ik(2424),
-       Zk = Ik(1096);
+       am = fm(4575),
+       xm = fm(1208),
+       wm = fm(1089),
+       Dm = fm(1454),
+       im = fm(1494),
+       Rm = fm(1354),
+       pm = fm(2487),
+       Em = fm(1135);
```

#### 786. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8789` → after: `L8789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8789) · [Before (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8789)

```diff
-         children: [Ik && (0, Zk.jsx)(tk.b, {
+         children: [fm && (0, Em.jsx)(pm.d, {
```

#### 787. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8791` → after: `L8791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8791) · [Before (L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8791)

```diff
-         }), !Ik && (0, Zk.jsx)(lk.e, {
+         }), !fm && (0, Em.jsx)(wm.c, {
```

#### 788. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8808` → after: `L8808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8808) · [Before (L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8808)

```diff
-       } = (0, yk.y)(), Hk = jk[Fk];
+       } = (0, xm.A)(), qm = om[Tm];
```

#### 789. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8821` → after: `L8821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8821) · [Before (L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8821)

```diff
-           prefixText: ik.u[Fk],
+           prefixText: am.v[Tm],
```

#### 790. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8823` → after: `L8823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8823) · [Before (L8823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8823)

```diff
-           initialValue: null !== (kk = null === Ik || void 0 === Ik ? void 0 : Ik.handle) && void 0 !== kk ? kk : "",
+           initialValue: null !== (mm = null === fm || void 0 === fm ? void 0 : fm.handle) && void 0 !== mm ? mm : "",
```

#### 791. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8829` → after: `L8829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8829) · [Before (L8829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8829)

```diff
-             "submit" === kk.type ? await qk.e.setSocialLink(Tk, Fk, kk.value) : await qk.e.clearSocialLink(Tk, Fk), tk()
+             "submit" === mm.type ? await im.d.setSocialLink(Am, Tm, mm.value) : await im.d.clearSocialLink(Am, Tm), pm()
```

#### 792. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8839` → after: `L8839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8839) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8839)

```diff
-         const kk = `@${Ik.handle}`;
+         const mm = `@${fm.handle}`;
```

#### 793. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8862` → after: `L8862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8862) · [Before (L8862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8862)

```diff
-             ...(0, ak.Y)({
+             ...(0, Dm.Z)({
```

#### 794. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8868` → after: `L8868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8868) · [Before (L8868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8868)

```diff
-             children: (0, Zk.jsx)(lk.e, {
+             children: (0, Em.jsx)(wm.c, {
```

#### 795. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8873` → after: `L8873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8873) · [Before (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8873)

```diff
-             children: (0, Zk.jsx)(lk.e, {
+             children: (0, Em.jsx)(wm.c, {
```

#### 796. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8885` → after: `L8885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8885) · [Before (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8885)

```diff
-         ...(0, ak.Y)(),
+         ...(0, Dm.Z)(),
```

#### 797. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8902` → after: `L8902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8902) · [Before (L8902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8902)

```diff
-           children: (0, Zk.jsx)(lk.e, {
+           children: (0, Em.jsx)(wm.c, {
```

#### 798. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8918` → after: `L8918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8918) · [Before (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8918)

```diff
-         lk = Ik ? ik.t : Fk.map((kk => kk.platform));
+         wm = fm ? am.r : Tm.map((mm => mm.platform));
```

#### 799. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8934` → after: `L8934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8934) · [Before (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8934)

```diff
-   34164: (kk, Fk, Ik) => {
+   34283: (mm, Tm, fm) => {
```

#### 800. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8936` → after: `L8936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8936) · [Before (L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8936)

```diff
-       e: () => ik
+       c: () => am
```

#### 801. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8938-L8939` → after: `L8938-L8939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8938-L8939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8938-L8939) · [Before (L8938-L8939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8938-L8939)

```diff
-     var Xk = Ik(4525),
-       Tk = Ik(4529);
+     var hm = fm(4477),
+       Am = fm(4481);
```

#### 802. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8950` → after: `L8950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8950) · [Before (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8950)

```diff
-       return (0, Tk.e)(!0, Ik, ik, ak), (0, Xk.b)(lk, Ik), Ik || yk ? Fk : null
+       return (0, Am.d)(!0, fm, am, Dm), (0, hm.c)(wm, fm), fm || xm ? Tm : null
```

#### 803. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8953` → after: `L8953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8953) · [Before (L8953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8953)

```diff
-   34231: (kk, Fk, Ik) => {
+   34327: (mm, Tm, fm) => {
```

#### 804. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8957-L8958` → after: `L8957-L8958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8957-L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8957-L8958) · [Before (L8957-L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8957-L8958)

```diff
-     var Xk = Ik(58),
-       Tk = Ik(3378);
+     var hm = fm(59),
+       Am = fm(3443);
```

#### 805. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8964` → after: `L8964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8964) · [Before (L8964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8964)

```diff
-         return (0, Tk.e)().then((() => {
+         return (0, Am.d)().then((() => {
```

#### 806. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8972` → after: `L8972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8972) · [Before (L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8972)

```diff
-   6566: (kk, Fk, Ik) => {
+   6529: (mm, Tm, fm) => {
```

#### 807. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8976-L8977` → after: `L8976-L8977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8976-L8977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8976-L8977) · [Before (L8976-L8977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8976-L8977)

```diff
-     var Xk = Ik(58),
-       Tk = Ik(41);
+     var hm = fm(59),
+       Am = fm(37);
```

#### 808. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8981` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8981) · [Before (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8981)

```diff
-       const [ik, yk] = (0, Xk.useState)(null !== (Ik = Tk.j.getItem(kk)) && void 0 !== Ik ? Ik : Fk);
+       const [am, xm] = (0, hm.useState)(null !== (fm = Am.g.getItem(mm)) && void 0 !== fm ? fm : Tm);
```

#### 809. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8983` → after: `L8983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8983) · [Before (L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8983)

```diff
-         Tk.j.setItem(kk, Fk), yk(Fk)
+         Am.g.setItem(mm, Tm), xm(Tm)
```

#### 810. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8987` → after: `L8987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8987) · [Before (L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8987)

```diff
-   34131: (kk, Fk, Ik) => {
+   34256: (mm, Tm, fm) => {
```

#### 811. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8989-L8990` → after: `L8989-L8990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8989-L8990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8989-L8990) · [Before (L8989-L8990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8989-L8990)

```diff
-       c: () => wk,
-       e: () => ek
+       d: () => Ym,
+       f: () => Om
```

#### 812. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8992-L8993` → after: `L8992-L8993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8992-L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8992-L8993) · [Before (L8992-L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8992-L8993)

```diff
-     Ik(34139);
-     var Xk = Ik(1055),
+     fm(34264);
+     var hm = fm(1080),
```

#### 813. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8995-L8996` → after: `L8995-L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8995-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L8995-L8996) · [Before (L8995-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L8995-L8996)

```diff
-       ik = Ik(58),
-       yk = Ik(34122);
+       am = fm(59),
+       xm = fm(34251);
```

#### 814. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9074` → after: `L9074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9074) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9074)

```diff
-         outlines: ak > 0 ? jk : [],
+         outlines: Dm > 0 ? om : [],
```

#### 815. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9098` → after: `L9098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9098) · [Before (L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9098)

```diff
-     var Zk = Ik(1096);
+     var Em = fm(1135);
```

#### 816. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9102` → after: `L9102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9102) · [Before (L9102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9102)

```diff
-       return kk && Fk ? `scale(${jk})` : "scale(1)"
+       return mm && Tm ? `scale(${om})` : "scale(1)"
```

#### 817. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9116` → after: `L9116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9116) · [Before (L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9116)

```diff
-       if (kk.color !== yk.f.color && (Ik.color = (0, yk.k)(kk.color)), kk.opacity !== yk.f.opacity && (Ik.opacity = kk.opacity / 100), kk.outline !== yk.f.outline || kk.outlineColor !== yk.f.outlineColor) {
+       if (mm.color !== xm.h.color && (fm.color = (0, xm.m)(mm.color)), mm.opacity !== xm.h.opacity && (fm.opacity = mm.opacity / 100), mm.outline !== xm.h.outline || mm.outlineColor !== xm.h.outlineColor) {
```

#### 818. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9118-L9119` → after: `L9118-L9119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9118-L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9118-L9119) · [Before (L9118-L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9118-L9119)

```diff
-           Xk = (0, yk.k)(kk.outlineColor);
-         Ik.textShadow = Fk > 0 ? `-${Fk}px 0 ${Xk}, 0 ${Fk}px ${Xk}, ${Fk}px 0 ${Xk}, 0 -${Fk}px ${Xk}` : "none"
+           hm = (0, xm.m)(mm.outlineColor);
+         fm.textShadow = Tm > 0 ? `-${Tm}px 0 ${hm}, 0 ${Tm}px ${hm}, ${Tm}px 0 ${hm}, 0 -${Tm}px ${hm}` : "none"
```

#### 819. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9121` → after: `L9121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9121) · [Before (L9121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9121)

```diff
-       if (kk.size !== yk.f.size) {
+       if (mm.size !== xm.h.size) {
```

#### 820. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9123` → after: `L9123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9123) · [Before (L9123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9123)

```diff
-         Ik.fontSize = Fk ? `calc(max(1.3rem, 18px) * ${Xk})` : `calc(1.3rem * ${Xk})`, Ik.marginTop = `-${Hk}em`, Ik.transformOrigin = `50% calc(50% + ${Hk}em)`
+         fm.fontSize = Tm ? `calc(max(1.3rem, 18px) * ${hm})` : `calc(1.3rem * ${hm})`, fm.marginTop = `-${qm}em`, fm.transformOrigin = `50% calc(50% + ${qm}em)`
```

#### 821. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9173)

```diff
-         background: kk.filled ? Ik : void 0
+         background: mm.filled ? fm : void 0
```

#### 822. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9228` → after: `L9228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9228) · [Before (L9228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9228)

```diff
-               Ik((Fk => Fk.dpr === Xk && Fk.box.left === kk.left && Fk.box.top === kk.top && Fk.box.width === kk.width && Fk.box.height === kk.height ? Fk : {
+               fm((Tm => Tm.dpr === hm && Tm.box.left === mm.left && Tm.box.top === mm.top && Tm.box.width === mm.width && Tm.box.height === mm.height ? Tm : {
```

#### 823. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9247` → after: `L9247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9247) · [Before (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9247)

```diff
-       const Jk = ak(Fk, wk, lk && Fk.growOnClick ? jk : 1),
+       const jm = Dm(Tm, Ym, wm && Tm.growOnClick ? om : 1),
```

#### 824. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9256-L9257` → after: `L9256-L9257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9256-L9257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9256-L9257) · [Before (L9256-L9257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9256-L9257)

```diff
-         Pk = (0, yk.k)(Fk.color),
-         sk = (0, yk.k)(Fk.outlineColor),
+         Im = (0, xm.m)(Tm.color),
+         nm = (0, xm.m)(Tm.outlineColor),
```

#### 825. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9275` → after: `L9275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9275) · [Before (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9275)

```diff
-       const vk = null !== qk && void 0 !== qk ? qk : Sk.current;
+       const Zm = null !== im && void 0 !== im ? im : zm.current;
```

#### 826. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9299` → after: `L9299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9299) · [Before (L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9299)

```diff
-             }, `o${Fk}`))), Jk.ring && (0, Zk.jsx)("div", {
+             }, `o${Tm}`))), jm.ring && (0, Em.jsx)("div", {
```

#### 827. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9306` → after: `L9306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9306) · [Before (L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9306)

```diff
-             }, `f${Fk}`)))]
+             }, `f${Tm}`)))]
```

#### 828. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9312` → after: `L9312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9312) · [Before (L9312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9312)

```diff
-   34143: (kk, Fk, Ik) => {
+   34268: (mm, Tm, fm) => {
```

#### 829. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9316` → after: `L9316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9316) · [Before (L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9316)

```diff
-       h: () => wk
+       g: () => Ym
```

#### 830. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9318` → after: `L9318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9318) · [Before (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9318)

```diff
-     var Xk = Ik(34122);
+     var hm = fm(34251);
```

#### 831. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9355` → after: `L9355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9355) · [Before (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9355)

```diff
-         const Fk = (0, Xk.g)(Tk, kk[Tk]);
+         const Tm = (0, hm.k)(Am, mm[Am]);
```

#### 832. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9363` → after: `L9363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9363) · [Before (L9363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9363)

```diff
-         Ik.push(Math.round(((0, Xk.g)(Tk, kk[Tk]) - Fk) / ik))
+         fm.push(Math.round(((0, hm.k)(Am, mm[Am]) - Tm) / am))
```

#### 833. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9375` → after: `L9375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9375) · [Before (L9375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9375)

```diff
-       for (const Fk of kk.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${qk}})`, "gi"))) {
+       for (const Tm of mm.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${im}})`, "gi"))) {
```

#### 834. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9386` → after: `L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9386) · [Before (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9386)

```diff
-           ...Xk.f,
+           ...hm.h,
```

#### 835. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9399` → after: `L9399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9399) · [Before (L9399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9399)

```diff
-         Ik[ik] = (0, Xk.g)(ik, Fk + kk[Tk] * yk), Tk++
+         fm[am] = (0, hm.k)(am, Tm + mm[Am] * xm), Am++
```

#### 836. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9404` → after: `L9404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9404) · [Before (L9404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9404)

```diff
-   34122: (kk, Fk, Ik) => {
+   34251: (mm, Tm, fm) => {
```

#### 837. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9407-L9408` → after: `L9407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9407) · [Before (L9407-L9408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9407-L9408)

```diff
-       f: () => Tk,
-       g: () => ik,
+       h: () => Am,
```

#### 838. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9410-L9411` → after: `L9409-L9411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9409-L9411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9409-L9411) · [Before (L9410-L9411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9410-L9411)

```diff
-       n: () => ak,
-       q: () => Lk,
+       m: () => im,
+       o: () => Dm,
+       p: () => Rm,
```

#### 839. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9501` → after: `L9501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9501) · [Before (L9501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9501)

```diff
-       const ak = (null !== (Ik = String(lk).split(".")[1]) && void 0 !== Ik ? Ik : "").length,
+       const Dm = (null !== (fm = String(wm).split(".")[1]) && void 0 !== fm ? fm : "").length,
```

#### 840. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9524` → after: `L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9524) · [Before (L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9524)

```diff
-       return `#${kk.toString(16).padStart(6,"0")}`
+       return `#${mm.toString(16).padStart(6,"0")}`
```

#### 841. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9532` → after: `L9532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9532) · [Before (L9532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9532)

```diff
-   34148: (kk, Fk, Ik) => {
+   34273: (mm, Tm, fm) => {
```

#### 842. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9535` → after: `L9535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9535) · [Before (L9535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9535)

```diff
-       f: () => Zk
+       g: () => Em
```

#### 843. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9537-L9540` → after: `L9537-L9540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9537-L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9537-L9540) · [Before (L9537-L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9537-L9540)

```diff
-     var Xk = Ik(58),
-       Tk = Ik(41),
-       ik = Ik(34143),
-       yk = Ik(34122);
+     var hm = fm(59),
+       Am = fm(37),
+       am = fm(34268),
+       xm = fm(34251);
```

#### 844. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9548-L9549` → after: `L9548-L9549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9548-L9549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9548-L9549) · [Before (L9548-L9549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9548-L9549)

```diff
-         const Fk = Tk.j.getItem(lk);
-         ak = null !== (kk = "string" === typeof Fk ? (0, ik.f)(Fk) : null) && void 0 !== kk ? kk : yk.f
+         const Tm = Am.g.getItem(wm);
+         Dm = null !== (mm = "string" === typeof Tm ? (0, am.f)(Tm) : null) && void 0 !== mm ? mm : xm.h
```

#### 845. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9555` → after: `L9555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9555) · [Before (L9555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9555)

```diff
-       ak = kk, (0, yk.n)(kk) ? Tk.j.removeItem(lk) : Tk.j.setItem(lk, (0, ik.h)(kk));
+       Dm = mm, (0, xm.o)(mm) ? Am.g.removeItem(wm) : Am.g.setItem(wm, (0, am.g)(mm));
```

#### 846. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9572` → after: `L9572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9572) · [Before (L9572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9572)

```diff
-   34071: (kk, Fk, Ik) => {
+   34188: (mm, Tm, fm) => {
```

#### 847. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9580` → after: `L9580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9580) · [Before (L9580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9580)

```diff
-   34073: (kk, Fk, Ik) => {
+   34194: (mm, Tm, fm) => {
```

#### 848. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9584` → after: `L9583-L9584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9583-L9584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9583-L9584) · [Before (L9584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9584)

```diff
-       f: () => Lk
+       g: () => im,
+       i: () => Rm
```

#### 849. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9586-L9590` → after: `L9586-L9590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9586-L9590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9586-L9590) · [Before (L9586-L9590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9586-L9590)

```diff
-     var Xk = Ik(1631),
-       Tk = Ik(3147),
-       ik = Ik(95),
-       yk = Ik(1682),
-       lk = Ik(34071);
+     var hm = fm(1681),
+       Am = fm(3197),
+       am = fm(105),
+       xm = fm(1730),
+       wm = fm(34188);
```

#### 850. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9593` → after: `L9593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9593) · [Before (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9593)

```diff
-       return !(0, ik.isMobileApp)() || Xk.b.supports("photos")
+       return !(0, am.isMobileApp)() || hm.e.supports("photos")
```

#### 851. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9600-L9601` → after: `L9600-L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9600-L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9600-L9601) · [Before (L9600-L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9600-L9601)

```diff
-         } = await Xk.b.request("photos.save", {
-           data: await (0, Tk.f)(kk),
+         } = await hm.e.request("photos.save", {
+           data: await (0, Am.e)(mm),
```

#### 852. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9616` → after: `L9616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9616) · [Before (L9616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9616)

```diff
-         if (Fk instanceof DOMException && "AbortError" === Fk.name) return "iI";
+         if (Tm instanceof DOMException && "AbortError" === Tm.name) return "Af";
```

#### 853. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9622` → after: `L9622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9622) · [Before (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9622)

```diff
-   34062: (kk, Fk, Ik) => {
+   34183: (mm, Tm, fm) => {
```

#### 854. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9625-L9626` → after: `L9625-L9626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9625-L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9625-L9626) · [Before (L9625-L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9625-L9626)

```diff
-       e: () => Lk,
-       h: () => tk
+       c: () => Rm,
+       f: () => pm
```

#### 855. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9628-L9631` → after: `L9628-L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9628-L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9628-L9631) · [Before (L9628-L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9628-L9631)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(34044),
-       ik = Ik(1580),
-       yk = Ik(34071);
+     var hm = fm(23),
+       Am = fm(34163),
+       am = fm(1635),
+       xm = fm(34188);
```

#### 856. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9636` → after: `L9636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9636) · [Before (L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9636)

```diff
-       (0, ik.g)(), Xk.d.set({
+       (0, am.d)(), hm.c.set({
```

#### 857. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9642` → after: `L9642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9642) · [Before (L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9642)

```diff
-       Xk.d.set({
+       hm.c.set({
```

#### 858. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9669-L9671` → after: `L9669-L9671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9669-L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9669-L9671) · [Before (L9669-L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9669-L9671)

```diff
-           Ik = `${kk.getFullYear()}${Fk(kk.getMonth()+1)}${Fk(kk.getDate())}`,
-           Xk = `${Fk(kk.getHours())}${Fk(kk.getMinutes())}${Fk(kk.getSeconds())}`;
-         return `bloxd-${Ik}-${Xk}.${yk.d}`
+           fm = `${mm.getFullYear()}${Tm(mm.getMonth()+1)}${Tm(mm.getDate())}`,
+           hm = `${Tm(mm.getHours())}${Tm(mm.getMinutes())}${Tm(mm.getSeconds())}`;
+         return `bloxd-${fm}-${hm}.${xm.d}`
```

#### 859. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9677` → after: `L9677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9677) · [Before (L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9677)

```diff
-   34119: (kk, Fk, Ik) => {
+   34245: (mm, Tm, fm) => {
```

#### 860. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9679-L9680` → after: `L9679-L9680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9679-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9679-L9680) · [Before (L9679-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9679-L9680)

```diff
-       b: () => ik,
-       d: () => Tk
+       e: () => am,
+       i: () => Am
```

#### 861. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9682` → after: `L9682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9682) · [Before (L9682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9682)

```diff
-     var Xk = Ik(25);
+     var hm = fm(23);
```

#### 862. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9689)

```diff
-       return Tk(Xk.d.get("isTouchScreen"), Xk.d.get("clientEscMenuOptions").touchActionButtons)
+       return Am(hm.c.get("isTouchScreen"), hm.c.get("clientEscMenuOptions").touchActionButtons)
```

#### 863. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9692` → after: `L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9692) · [Before (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9692)

```diff
-   34048: (kk, Fk, Ik) => {
+   34168: (mm, Tm, fm) => {
```

#### 864. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9694` → after: `L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9694) · [Before (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9694)

```diff
-       c: () => Xk
+       b: () => hm
```

#### 865. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9698` → after: `L9698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9698) · [Before (L9698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9698)

```diff
-   34044: (kk, Fk, Ik) => {
+   34163: (mm, Tm, fm) => {
```

#### 866. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9704-L9706` → after: `L9704-L9706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9704-L9706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9704-L9706) · [Before (L9704-L9706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9704-L9706)

```diff
-     var Xk = Ik(646),
-       Tk = Ik(1276),
-       ik = Ik(34048);
+     var hm = fm(675),
+       Am = fm(1296),
+       am = fm(34168);
```

#### 867. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9711` → after: `L9711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9711) · [Before (L9711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9711)

```diff
-       } = await Ik.e(236).then((() => Ik(41079)));
+       } = await fm.e(236).then((() => fm(41124)));
```

#### 868. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9719` → after: `L9719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9719) · [Before (L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9719)

```diff
-           this.tools = null === kk ? yk : kk.tools, this.loadHost = null === kk ? lk : async () => kk
+           this.tools = null === mm ? xm : mm.tools, this.loadHost = null === mm ? wm : async () => mm
```

#### 869. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9737` → after: `L9737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9737) · [Before (L9737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9737)

```diff
-         tools: ik.c,
+         tools: am.b,
```

#### 870. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9748` → after: `L9748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9748) · [Before (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9748)

```diff
-     Xk.x && ak.setHost(qk), (0, Tk.B)((() => {
+     hm.A && Dm.setHost(im), (0, Am.p)((() => {
```

#### 871. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9752` → after: `L9752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9752) · [Before (L9752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9752)

```diff
-   34222: (kk, Fk, Ik) => {
+   34322: (mm, Tm, fm) => {
```

#### 872. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9755` → after: `L9755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9755) · [Before (L9755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9755)

```diff
-       f: () => Tk,
+       e: () => Am,
```

#### 873. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9758` → after: `L9758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9758) · [Before (L9758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9758)

```diff
-     var Xk = Ik(1518);
+     var hm = fm(1572);
```

#### 874. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9764` → after: `L9764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9764) · [Before (L9764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9764)

```diff
-         yaw: yk.store.yaw + (null !== (Fk = Xk.c[kk].previewYaw) && void 0 !== Fk ? Fk : 0)
+         yaw: xm.store.yaw + (null !== (Tm = hm.e[mm].previewYaw) && void 0 !== Tm ? Tm : 0)
```

#### 875. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9885` → after: `L9885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9885) · [Before (L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9885)

```diff
-   34218: (kk, Fk, Ik) => {
+   34319: (mm, Tm, fm) => {
```

#### 876. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9887-L9889` → after: `L9887-L9889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9887-L9889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9887-L9889) · [Before (L9887-L9889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9887-L9889)

```diff
-       c: () => Xk.c,
-       f: () => Xk.f,
-       h: () => Xk.h
+       e: () => hm.c,
+       f: () => hm.e,
+       j: () => hm.h
```

#### 877. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9891` → after: `L9891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9891) · [Before (L9891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9891)

```diff
-     var Xk = Ik(34222);
+     var hm = fm(34322);
```

#### 878. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9904` → after: `L9904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9904) · [Before (L9904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9904)

```diff
-         this.mobScene = new Tk((() => Promise.all([Ik.e(72), Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(96), Ik.e(255), Ik.e(75), Ik.e(74), Ik.e(252), Ik.e(73), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(274), Ik.e(228), Ik.e(244), Ik.e(257), Ik.e(260), Ik.e(77), Ik.e … [truncated]
+         this.mobScene = new Am((() => Promise.all([fm.e(72), fm.e(232), fm.e(231), fm.e(254), fm.e(96), fm.e(255), fm.e(75), fm.e(74), fm.e(252), fm.e(73), fm.e(262), fm.e(256), fm.e(261), fm.e(259), fm.e(251), fm.e(274), fm.e(228), fm.e(244), fm.e(257), fm.e(260), fm.e(77), fm.e … [truncated]
```

#### 879. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9921` → after: `L9921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9921) · [Before (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9921)

```diff
-   6644: (kk, Fk, Ik) => {
+   6609: (mm, Tm, fm) => {
```

#### 880. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9923-L9924` → after: `L9923-L9924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9923-L9924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9923-L9924) · [Before (L9923-L9924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9923-L9924)

```diff
-       e: () => Tk,
-       i: () => ik
+       c: () => Am,
+       e: () => am
```

#### 881. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9926` → after: `L9926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9926) · [Before (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9926)

```diff
-     var Xk = Ik(41);
+     var hm = fm(37);
```

#### 882. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9931` → after: `L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9931) · [Before (L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9931)

```diff
-       return null !== (kk = await Xk.g.getItem(Tk, Fk)) && void 0 !== kk ? kk : null
+       return null !== (mm = await hm.e.getItem(Am, Tm)) && void 0 !== mm ? mm : null
```

#### 883. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9934` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9934) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9934)

```diff
-   34083: (kk, Fk, Ik) => {
+   34209: (mm, Tm, fm) => {
```

#### 884. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9942` → after: `L9942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9942) · [Before (L9942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9942)

```diff
-   34111: (kk, Fk, Ik) => {
+   34239: (mm, Tm, fm) => {
```

#### 885. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9944` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9944) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9944)

```diff
-       c: () => ik
+       e: () => am
```

#### 886. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9946` → after: `L9946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9946) · [Before (L9946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9946)

```diff
-     var Xk = Ik(1076);
+     var hm = fm(1103);
```

#### 887. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9950` → after: `L9950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9950) · [Before (L9950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9950)

```diff
-       return null !== (kk = null === (Fk = screen.orientation) || void 0 === Fk ? void 0 : Fk.type) && void 0 !== kk ? kk : innerWidth > innerHeight ? "landscape" : "portrait"
+       return null !== (mm = null === (Tm = screen.orientation) || void 0 === Tm ? void 0 : Tm.type) && void 0 !== mm ? mm : innerWidth > innerHeight ? "landscape" : "portrait"
```

#### 888. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9963` → after: `L9963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9963) · [Before (L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9963)

```diff
-           this.holding && (0, Xk.ow)(new Error("Game view size held for 60 s"))
+           this.holding && (0, hm.lY)(new Error("Game view size held for 60 s"))
```

#### 889. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9990` → after: `L9990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9990) · [Before (L9990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9990)

```diff
-   34079: (kk, Fk, Ik) => {
+   34203: (mm, Tm, fm) => {
```

#### 890. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9992-L9994` → after: `L9992-L9994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9992-L9994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9992-L9994) · [Before (L9992-L9994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9992-L9994)

```diff
-       e: () => qk,
-       f: () => tk,
-       i: () => Lk
+       b: () => im,
+       d: () => pm,
+       h: () => Rm
```

#### 891. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L9996-L9999` → after: `L9996-L9999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR9996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L9996-L9999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L9996-L9999) · [Before (L9996-L9999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L9996-L9999)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(1631),
-       ik = Ik(41),
-       yk = Ik(3612);
+     var hm = fm(23),
+       Am = fm(1681),
+       am = fm(37),
+       xm = fm(3646);
```

#### 892. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10004` → after: `L10004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10004) · [Before (L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10004)

```diff
-       const Fk = null !== (kk = ik.j.getItem(ak)) && void 0 !== kk ? kk : 0;
+       const Tm = null !== (mm = am.g.getItem(Dm)) && void 0 !== mm ? mm : 0;
```

#### 893. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10009` → after: `L10009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10009) · [Before (L10009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10009)

```diff
-       ik.j.setItem(ak, Date.now())
+       am.g.setItem(Dm, Date.now())
```

#### 894. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10012-L10013` → after: `L10012-L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10012-L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10012-L10013) · [Before (L10012-L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10012-L10013)

```diff
-       return await Tk.b.ready, Tk.b.supports("notifications") ? Xk.d.get("mobilePushNotificationsCanAsk") ? async () => {
-         Tk.b.request("notifications.requestPermission", {}).then((kk => {
+       return await Am.e.ready, Am.e.supports("notifications") ? hm.c.get("mobilePushNotificationsCanAsk") ? async () => {
+         Am.e.request("notifications.requestPermission", {}).then((mm => {
```

#### 895. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10017` → after: `L10017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10017) · [Before (L10017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10017)

```diff
-           Xk.d.set({
+           hm.c.set({
```

#### 896. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10023` → after: `L10023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10023) · [Before (L10023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10023)

```diff
-       }: null: await yk.b.canAsk() ? () => yk.b.requestPermission() : null
+       }: null: await xm.e.canAsk() ? () => xm.e.requestPermission() : null
```

#### 897. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10026` → after: `L10026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10026) · [Before (L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10026)

```diff
-   34051: (kk, Fk, Ik) => {
+   34173: (mm, Tm, fm) => {
```

#### 898. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10031` → after: `L10031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10031) · [Before (L10031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10031)

```diff
-       l: () => ek
+       j: () => Om
```

#### 899. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10033-L10037` → after: `L10033-L10037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10033-L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10033-L10037) · [Before (L10033-L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10033-L10037)

```diff
-     var Xk = Ik(149),
-       Tk = Ik(1253),
-       ik = Ik(1194),
-       yk = Ik(1120),
-       lk = Ik(1658);
+     var hm = fm(168),
+       Am = fm(1270),
+       am = fm(1214),
+       xm = fm(1162),
+       wm = fm(1706);
```

#### 900. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10050` → after: `L10050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10050) · [Before (L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10050)

```diff
-       return (0, lk.d)(kk) ? "outdated" : kk instanceof Xk.b ? 429 === kk.httpCode ? "busy" : "server" : "offline"
+       return (0, wm.c)(mm) ? "outdated" : mm instanceof hm.d ? 429 === mm.httpCode ? "busy" : "server" : "offline"
```

#### 901. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10054)

```diff
-       return (0, yk.postJsonWithMetricsCookiesAndJsonResponse)(`${ik.clientSideServerUrls.indexUrl}${Fk}`, Ik, {
+       return (0, xm.postJsonWithMetricsCookiesAndJsonResponse)(`${am.clientSideServerUrls.indexUrl}${Tm}`, fm, {
```

#### 902. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10074` → after: `L10074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10074) · [Before (L10074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10074)

```diff
-       return Zk(Fk) ? Fk : "err" in Fk ? jk(Fk.err) : (kk.setPlayerName(Fk.name), {
+       return Em(Tm) ? Tm : "err" in Tm ? om(Tm.err) : (mm.setPlayerName(Tm.name), {
```

#### 903. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10083` → after: `L10083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10083) · [Before (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10083)

```diff
-       return Zk(Ik) ? Ik : "err" in Ik ? jk(Ik.err) : Ik.nameExists ? {
+       return Em(fm) ? fm : "err" in fm ? om(fm.err) : fm.nameExists ? {
```

#### 904. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10095` → after: `L10095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10095) · [Before (L10095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10095)

```diff
-       return `${kk.slice(0,Tk.j-Fk)}${ik}`
+       return `${mm.slice(0,Am.j-Tm)}${am}`
```

#### 905. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10111` → after: `L10111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10111) · [Before (L10111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10111)

```diff
-   34091: (kk, Fk, Ik) => {
+   34217: (mm, Tm, fm) => {
```

#### 906. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10113-L10114` → after: `L10113-L10114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10113-L10114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10113-L10114) · [Before (L10113-L10114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10113-L10114)

```diff
-       b: () => lk,
-       f: () => ak
+       e: () => wm,
+       g: () => Dm
```

#### 907. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10116` → after: `L10116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10116) · [Before (L10116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10116)

```diff
-     var Xk = Ik(25);
+     var hm = fm(23);
```

#### 908. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10123` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10123) · [Before (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10123)

```diff
-       return null === (kk = Xk.d.get("showDistantNametags")) || void 0 === kk || kk
+       return null === (mm = hm.c.get("showDistantNametags")) || void 0 === mm || mm
```

#### 909. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10132` → after: `L10132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10132) · [Before (L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10132)

```diff
-       }()) && void 0 !== kk ? kk : lk() ? 0 : Tk
+       }()) && void 0 !== mm ? mm : wm() ? 0 : Am
```

#### 910. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10135` → after: `L10135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10135) · [Before (L10135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10135)

```diff
-   34202: (kk, Fk, Ik) => {
+   34315: (mm, Tm, fm) => {
```

#### 911. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10138` → after: `L10138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10138) · [Before (L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10138)

```diff
-       d: () => yk
+       f: () => xm
```

#### 912. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10329` → after: `L10329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10329) · [Before (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10329)

```diff
-           return Ik >= 10 ? `${Fk}${Ik.toFixed(1).replace(/\.0$/,"")}` : `${Fk}${Ik.toFixed(2).replace(/\.?0+$/,"")}`
+           return fm >= 10 ? `${Tm}${fm.toFixed(1).replace(/\.0$/,"")}` : `${Tm}${fm.toFixed(2).replace(/\.?0+$/,"")}`
```

#### 913. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10333` → after: `L10333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10333) · [Before (L10333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10333)

```diff
-       const Tk = Fk < 0n ? -Fk : Fk,
+       const Am = Tm < 0n ? -Tm : Tm,
```

#### 914. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10336` → after: `L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10336) · [Before (L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10336)

```diff
-       if (yk.length <= Ik) return `${ik}${yk}`;
+       if (xm.length <= fm) return `${am}${xm}`;
```

#### 915. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10338` → after: `L10338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10338) · [Before (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10338)

```diff
-       if (lk < 3) return `${ik}${yk}`;
+       if (wm < 3) return `${am}${xm}`;
```

#### 916. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10342` → after: `L10342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10342) · [Before (L10342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10342)

```diff
-         return `${ik}${Fk?`${kk}.${Fk}`:kk}e${yk.length-1}`
+         return `${am}${Tm?`${mm}.${Tm}`:mm}e${xm.length-1}`
```

#### 917. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10349` → after: `L10349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10349) · [Before (L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10349)

```diff
-       return jk = Zk >= 100 ? Math.floor(Zk).toString() : Zk >= 10 ? Zk.toFixed(1).replace(/\.0$/, "") : Zk.toFixed(2).replace(/\.?0+$/, ""), `${ik}${jk}${qk}`
+       return om = Em >= 100 ? Math.floor(Em).toString() : Em >= 10 ? Em.toFixed(1).replace(/\.0$/, "") : Em.toFixed(2).replace(/\.?0+$/, ""), `${am}${om}${im}`
```

#### 918. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10377` → after: `L10377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10377) · [Before (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10377)

```diff
-           if (kk >= 1e3) return `${Ik}${Fk.toExponential(2).replace("e+","e")}`;
+           if (mm >= 1e3) return `${fm}${Tm.toExponential(2).replace("e+","e")}`;
```

#### 919. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10379-L10380` → after: `L10379-L10380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10379-L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10379-L10380) · [Before (L10379-L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10379-L10380)

```diff
-           return ik = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${Ik}${ik}${Tk}`
-         } return `${Ik}${Fk}`
+           return am = mm >= 100 ? Math.floor(mm).toString() : mm >= 10 ? mm.toFixed(1).replace(/\.0$/, "") : mm.toFixed(2).replace(/\.?0+$/, ""), `${fm}${am}${Am}`
+         } return `${fm}${Tm}`
```

#### 920. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10383` → after: `L10383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10383) · [Before (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10383)

```diff
-   34180: (kk, Fk, Ik) => {
+   34299: (mm, Tm, fm) => {
```

#### 921. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10385` → after: `L10385-L10386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10385-L10386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10385-L10386) · [Before (L10385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10385)

```diff
-       d: () => Lk,
+       e: () => Rm,
+       g: () => Em,
```

#### 922. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10388-L10390` → after: `L10389-L10390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10389-L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10389-L10390) · [Before (L10388-L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10388-L10390)

```diff
-       j: () => yk,
-       n: () => qk,
-       r: () => ak
+       l: () => im,
+       p: () => Dm
```

#### 923. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10392` → after: `L10392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10392) · [Before (L10392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10392)

```diff
-     var Xk = Ik(337);
+     var hm = fm(354);
```

#### 924. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10471` → after: `L10471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10471) · [Before (L10471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10471)

```diff
-       return null !== (Fk = ik[kk]) && void 0 !== Fk ? Fk : {
+       return null !== (Tm = am[mm]) && void 0 !== Tm ? Tm : {
```

#### 925. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10578` → after: `L10578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10578) · [Before (L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10578)

```diff
-       } = lk[kk][Fk], ik = Xk.e.sampleUniformIntDistribution(Ik, Tk, "includeMax");
+       } = wm[mm][Tm], am = hm.c.sampleUniformIntDistribution(fm, Am, "includeMax");
```

#### 926. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10585-L10586` → after: `L10585-L10586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10585-L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10585-L10586) · [Before (L10585-L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10585-L10586)

```diff
-   34139: () => {},
-   12750: kk => {
+   34264: () => {},
+   12785: mm => {
```

#### 927. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10589` → after: `L10589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10589) · [Before (L10589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10589)

```diff
-   13880: kk => {
+   13964: mm => {
```

#### 928. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10592` → after: `L10592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10592) · [Before (L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10592)

```diff
-   15338: kk => {
+   15318: mm => {
```

#### 929. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10595` → after: `L10595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR10595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/99.js#L10595) · [Before (L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/99.js#L10595)

```diff
-   15861: kk => {
+   15838: mm => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/babylon-backend.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/babylon-backend.js` (182 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d)

#### 1. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   41123: (kk, Fk, Ik) => {
+   41176: (mm, Tm, fm) => {
```

#### 2. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21)

```diff
-     var Xk = Ik(41132),
-       Tk = Ik(38010);
-     class ik extends((0, Xk.g)(Tk.d)) {}(0, Xk.h)(Tk.d, ik);
-     var yk = Ik(37236);
-     class lk extends((0, Xk.g)(yk.f)) {}(0, Xk.h)(yk.f, lk);
-     var ak = Ik(37835);
-     class qk extends((0, Xk.g)(ak.e)) {}(0, Xk.h)(ak.e, qk);
-     var Lk = Ik(37461),
-       tk = Ik(40269),
-       Zk = Ik(37457);
-     class jk extends((0, Xk.g)(Zk.e)) {
+     var hm = fm(41178),
+       Am = fm(38070);
+     class am extends((0, hm.h)(Am.b)) {}(0, hm.j)(Am.b, am);
+     var xm = fm(37250);
+     class wm extends((0, hm.h)(xm.d)) {}(0, hm.j)(xm.d, wm);
+     var Dm = fm(37905);
+     class im extends((0, hm.h)(Dm.f)) {}(0, hm.j)(Dm.f, im);
+     var Rm = fm(37488),
+       pm = fm(40357),
+       Em = fm(37479);
+     class om extends((0, hm.h)(Em.i)) {
```

#### 3. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L23)

```diff
-         super(kk, Fk, Ik), (0, Lk.h)(kk)
+         super(mm, Tm, fm), (0, Rm.e)(mm)
```

#### 4. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L26)

```diff
-         (0, Lk.l)(this._material), super.dispose(kk)
+         (0, Rm.i)(this._material), super.dispose(mm)
```

#### 5. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L28)

```diff
-     }(0, Xk.h)(Zk.e, jk), (0, Zk.f)({
+     }(0, hm.j)(Em.i, om), (0, Em.k)({
```

#### 6. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var ek = Ik(38684);
-     class wk extends((0, Xk.g)(ek.d)) {}(0, Xk.h)(ek.d, wk);
-     var Hk = Ik(38791),
-       Jk = Ik(37340),
-       xk = Ik(38126),
-       Pk = Ik(37286);
-     class Kk extends((0, Xk.g)(Hk.d)) {}(0, Xk.h)(Hk.d, Kk);
-     class Qk extends((0, Xk.g)(Jk.d)) {}(0, Xk.h)(Jk.d, Qk);
-     class sk extends((0, Xk.g)(xk.m)) {}(0, Xk.h)(xk.m, sk);
-     class Vk extends((0, Xk.g)(Pk.d)) {}(0, Xk.h)(Pk.d, Vk)
+     var Om = fm(38781);
+     class Ym extends((0, hm.h)(Om.d)) {}(0, hm.j)(Om.d, Ym);
+     var qm = fm(38890),
+       jm = fm(37341),
+       Vm = fm(38196),
+       Im = fm(37294);
+     class Km extends((0, hm.h)(qm.d)) {}(0, hm.j)(qm.d, Km);
+     class Qm extends((0, hm.h)(jm.b)) {}(0, hm.j)(jm.b, Qm);
+     class nm extends((0, hm.h)(Vm.n)) {}(0, hm.j)(Vm.n, nm);
+     class Jm extends((0, hm.h)(Im.b)) {}(0, hm.j)(Im.b, Jm)
```

#### 7. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   41559: (kk, Fk, Ik) => {
+   41596: (mm, Tm, fm) => {
```

#### 8. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L48-L60` → after: `L48-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L48-L60) · [Before (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L48-L60)

```diff
-     var Xk = Ik(41561),
-       Tk = (Ik(39980), Ik(41117), Ik(40498), Ik(41573)),
-       ik = Ik(37327),
-       yk = Ik(37144),
-       lk = Ik(41586),
-       ak = Ik(41591),
-       qk = Ik(37277),
-       Lk = (Ik(41132), Ik(41601)),
-       tk = Ik(41599),
-       Zk = Ik(38714),
-       jk = Ik(41604),
-       ek = Ik(39837),
-       wk = Ik(38700);
+     var hm = fm(41599),
+       Am = (fm(40096), fm(41173), fm(40590), fm(41609)),
+       am = fm(37330),
+       xm = fm(37181),
+       wm = fm(41620),
+       Dm = fm(41626),
+       im = fm(37290),
+       Rm = (fm(41178), fm(41636)),
+       pm = fm(41634),
+       Em = fm(38809),
+       om = fm(41638),
+       Om = fm(39960),
+       Ym = fm(38795);
```

#### 9. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L62)

```diff
-       Jk = wk.t,
+       jm = Ym.u,
```

#### 10. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L64-L66` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L64-L66) · [Before (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L64-L66)

```diff
-       Pk = kk => `gpuParticleSystem[${kk>>2}].${"xyzw"[3&kk]}`,
-       Kk = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${wk.c}\n#define COLOR_POSITIONS ${xk(Jk.colorPositions)}\n#define COLOR1 ${xk(Jk.color1)}\n#define COLOR2 ${xk(Jk.color2)}\n#define VELOCITY ${xk(Jk.TH)}\n#define REMAP $ … [truncated]
-     ek.b.ShadersStore[`${Hk}VertexShader`] = Kk, ek.b.ShadersStore[`${Hk}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
+       Im = mm => `gpuParticleSystem[${mm>>2}].${"xyzw"[3&mm]}`,
+       Km = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Ym.d}\n#define COLOR_POSITIONS ${Vm(jm.colorPositions)}\n#define COLOR1 ${Vm(jm.color1)}\n#define COLOR2 ${Vm(jm.color2)}\n#define VELOCITY ${Vm(jm.qq)}\n#define REMAP $ … [truncated]
+     Om.e.ShadersStore[`${qm}VertexShader`] = Km, Om.e.ShadersStore[`${qm}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L69-L70` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L69-L70) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L69-L70)

```diff
-     var Vk = Ik(38691),
-       zk = Ik(41612);
+     var Jm = fm(38790),
+       cm = fm(41643);
```

#### 12. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L73)

```diff
-         super(kk, Fk, Ik), this.renderer = Ik, this.Yw = Xk, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(wk.p), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
+         super(mm, Tm, fm), this.renderer = fm, this.Aq = hm, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Ym.o), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L80-L82` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L80-L82) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L80-L82)

```diff
-             const kk = Math.floor(ik / wk.l),
-               Ik = Math.min(Fk, (kk + 1) * wk.l);
-             Xk.texSubImage2D(Xk.TEXTURE_2D, 0, ik % wk.l * 4, kk, 4 * (Ik - ik), 1, Xk.RGBA_INTEGER, Xk.UNSIGNED_INT, Tk, ik * wk.f), ik = Ik
+             const mm = Math.floor(am / Ym.m),
+               fm = Math.min(Tm, (mm + 1) * Ym.m);
+             hm.texSubImage2D(hm.TEXTURE_2D, 0, am % Ym.m * 4, mm, 4 * (fm - am), 1, hm.RGBA_INTEGER, hm.UNSIGNED_INT, Am, am * Ym.g), am = fm
```

#### 14. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L86)

```diff
-         const Tk = Xk.Oe();
+         const Am = hm.dO();
```

#### 15. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L89-L90` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L89-L90) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L89-L90)

```diff
-           yk = Math.min(ik, wk.l);
-         this.records = Tk.createRawTexture(null, 4 * yk, Math.ceil(ik / yk), Lk.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Lk.d.TEXTURE_NEAREST_SAMPLINGMODE, null, Lk.d.TEXTURETYPE_UNSIGNED_INTEGER)
+           xm = Math.min(am, Ym.m);
+         this.records = Am.createRawTexture(null, 4 * xm, Math.ceil(am / xm), Rm.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Rm.b.TEXTURE_NEAREST_SAMPLINGMODE, null, Rm.b.TEXTURETYPE_UNSIGNED_INTEGER)
```

#### 16. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L93-L94)

```diff
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Yw.getAnimationRatio() || 1;
-         const Fk = this.Yw.getFrameId();
+         let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Aq.getAnimationRatio() || 1;
+         const Tm = this.Aq.getFrameId();
```

#### 17. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L107-L108)

```diff
-         (0, zk.h)(this, this.uniforms, this.uniformBits, kk);
-         for (const Ik of wk.r) this.uniforms[Ik] = this.uniformBits[Ik];
+         (0, cm.j)(this, this.uniforms, this.uniformBits, mm);
+         for (const fm of Ym.q) this.uniforms[fm] = this.uniformBits[fm];
```

#### 18. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L110)

```diff
-         (0, zk.i)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Fk = this.ramp) || void 0 === Fk || Fk.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = tk.b.CreateRGBATexture(this.rampTexels.texels, wk.j, … [truncated]
+         (0, cm.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Tm = this.ramp) || void 0 === Tm || Tm.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = pm.b.CreateRGBATexture(this.rampTexels.texels, Ym.l, … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L120)

```diff
-         this.Yw = kk, this.reportFailure = Fk, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, jk.d)(), this.engine = kk.Oe(), this. … [truncated]
+         this.Aq = mm, this.reportFailure = Tm, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, om.c)(), this.engine = mm.dO(), this. … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L123-L126` → after: `L123-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L123-L126) · [Before (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L123-L126)

```diff
-         const Ik = wk.l * this.engine.getCaps().maxTextureSize;
-         Fk > Ik && this.warnOnce(`capacity:${kk}`, `particle system ${kk} holds ${Ik} particles, not ${Fk}: its records texture's limit`);
-         const Xk = new Sk(kk, Math.min(Fk, Ik), this, this.Yw);
-         return this.Yw.addParticleSystem(Xk), Xk
+         const fm = Ym.m * this.engine.getCaps().maxTextureSize;
+         Tm > fm && this.warnOnce(`capacity:${mm}`, `particle system ${mm} holds ${fm} particles, not ${Tm}: its records texture's limit`);
+         const hm = new zm(mm, Math.min(Tm, fm), this, this.Aq);
+         return this.Aq.addParticleSystem(hm), hm
```

#### 21. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L131)

```diff
-         for (const Xk of (0, Zk.l)(kk.blendMode))
+         for (const hm of (0, Em.j)(mm.blendMode))
```

#### 22. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L136)

```diff
-         this.Yw._toBeDisposed.push(kk)
+         this.Aq._toBeDisposed.push(mm)
```

#### 23. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L139)

```diff
-         this.Yw.removeParticleSystem(kk), kk.releaseGl()
+         this.Aq.removeParticleSystem(mm), mm.releaseGl()
```

#### 24. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L146)

```diff
-           Yw: Xk,
+           Aq: hm,
```

#### 25. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L152)

```diff
-           lk = null !== (Fk = kk.ramp) && void 0 !== Fk ? Fk : this.whiteRamp;
+           wm = null !== (Tm = mm.ramp) && void 0 !== Tm ? Tm : this.whiteRamp;
```

#### 26. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L154)

```diff
-         for (const ak of (0, Zk.l)(kk.blendMode)) {
+         for (const Dm of (0, Em.j)(mm.blendMode)) {
```

#### 27. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L156)

```diff
-           Ik.enableEffect(Fk), Fk.setTexture("gpuParticleTexture", kk.texture.mirror), Fk.setTexture("gpuParticleRampTexture", lk), Fk._bindTexture("gpuParticleRecords", kk.records), Fk.setMatrix("gpuParticleView", Xk.getViewMatrix()), Fk.setMatrix("gpuParticleProjection", Xk.get … [truncated]
+           fm.enableEffect(Tm), Tm.setTexture("gpuParticleTexture", mm.texture.mirror), Tm.setTexture("gpuParticleRampTexture", wm), Tm._bindTexture("gpuParticleRecords", mm.records), Tm.setMatrix("gpuParticleView", hm.getViewMatrix()), Tm.setMatrix("gpuParticleProjection", hm.get … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L158)

```diff
-         return Ik.setAlphaMode(Lk.d.ALPHA_DISABLE), yk
+         return fm.setAlphaMode(Rm.b.ALPHA_DISABLE), xm
```

#### 29. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L170)

```diff
-             if (Fk) return `${Xk} ${Fk}`
+             if (Tm) return `${hm} ${Tm}`
```

#### 30. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L179)

```diff
-         return kk === Zk.b ? this.multiplyEffect : this.effect
+         return mm === Em.c ? this.multiplyEffect : this.effect
```

#### 31. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L184)

```diff
-           this.fail(null !== (Ik = this.gl()) && void 0 !== Ik && Ik.isContextLost() ? vk : function(kk) {
+           this.fail(null !== (fm = this.gl()) && void 0 !== fm && fm.isContextLost() ? Zm : function(mm) {
```

#### 32. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L192-L193` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L192-L193) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L192-L193)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${kk}`), this.reportFailure(kk);
-           for (const kk of this.Yw.jK.slice()) kk instanceof Sk && kk.disposeOnStop && kk.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${mm}`), this.reportFailure(mm);
+           for (const mm of this.Aq.VK.slice()) mm instanceof zm && mm.disposeOnStop && mm.dispose()
```

#### 33. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L197-L198` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L197-L198) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L197-L198)

```diff
-     var Ok = Ik(39806);
-     class nk extends Ok.c {
+     var bm = fm(39930);
+     class Sm extends bm.d {
```

#### 34. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L211-L227` → after: `L211-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L211-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L211-L227) · [Before (L211-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L211-L227)

```diff
-     var uk = Ik(40201),
-       bk = Ik(41114),
-       Rk = Ik(39947),
-       Uk = Ik(40161),
-       Ck = Ik(40157),
-       Nk = Ik(40082),
-       ck = Ik(41170),
-       Wk = Ik(37643),
-       fk = Ik(41615),
-       Bk = Ik(41620),
-       dk = Ik(41629),
-       Yk = Ik(40107),
-       Ak = Ik(2786),
-       gk = Ik(37533),
-       mk = Ik(40312),
-       hk = Ik(37610),
- ... (1 more removed lines; see GitHub link above)
+     var Gm = fm(40309),
+       Xm = fm(41166),
+       Pm = fm(40068),
+       Hm = fm(40272),
+       ym = fm(40264),
+       Cm = fm(40196),
+       rm = fm(41218),
+       sm = fm(37680),
+       lm = fm(41645),
+       Mm = fm(41652),
+       um = fm(41661),
+       Bm = fm(40220),
+       Lm = fm(2858),
+       tm = fm(37554),
+       Um = fm(40408),
+       dm = fm(37644),
+ ... (1 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L230-L231` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L230-L231) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L230-L231)

```diff
-       if (kk.visibility < 1 || !kk.isVisible || !kk.isEnabled() || kk.metadata[rk.f] || !kk.isReady()) return !0;
-       const Fk = kk.lK;
+       if (mm.visibility < 1 || !mm.isVisible || !mm.isEnabled() || mm.metadata[gm.d] || !mm.isReady()) return !0;
+       const Tm = mm.jK;
```

#### 36. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L235)

```diff
-           Tk = Xk.Ue();
+           Am = hm.TY();
```

#### 37. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L242)

```diff
-         this.qZ = kk, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Fk.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.IE = mm, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Tm.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 38. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L252-L255` → after: `L252-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L252-L255) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L252-L255)

```diff
-           qZ: Xk
-         } = this, Tk = null === (Fk = Xk.Bx) || void 0 === Fk ? void 0 : Fk.visibility;
-         if (!Tk || !kk || Xk.Xw.Tw) return !1;
-         if (!(Xk.XZ.jXk[0] >= hk.h)) return !1;
+           IE: hm
+         } = this, Am = null === (Tm = hm.MI) || void 0 === Tm ? void 0 : Tm.visibility;
+         if (!Am || !mm || hm.qY.jY) return !1;
+         if (!(hm.oE.Ohm[0] >= dm.h)) return !1;
```

#### 39. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L258)

```diff
-         const yk = Xk.SZ,
+         const xm = hm.HE,
```

#### 40. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L261)

```diff
-         return ak[0] = lk.x + yk[0], ak[1] = lk.y + yk[1], ak[2] = lk.z + yk[2], !!Tk.eyeClear(ak[0], ak[1], ak[2], kk.minZ, ik, Xk.XZ) && (this.vis = Tk, this.passable.clear(), this.count = 0, !0)
+         return Dm[0] = wm.x + xm[0], Dm[1] = wm.y + xm[1], Dm[2] = wm.z + xm[2], !!Am.eyeClear(Dm[0], Dm[1], Dm[2], mm.minZ, am, hm.oE) && (this.vis = Am, this.passable.clear(), this.count = 0, !0)
```

#### 41. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L282-L283` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L282-L283) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L282-L283)

```diff
-           XZ: lk
-         } = this.qZ, [ak, qk] = lk.jXk, Lk = null !== Ik && Ik.update(Xk[0], Xk[1], Xk[2], lk.xkk, ak, qk, this.passable);
+           oE: wm
+         } = this.IE, [Dm, im] = wm.Ohm, Rm = null !== fm && fm.update(hm[0], hm[1], hm[2], wm.qmm, Dm, im, this.passable);
```

#### 42. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L299-L304` → after: `L299-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L299-L304) · [Before (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L299-L304)

```diff
-     var kF = Ik(37592),
-       FF = Ik(37543),
-       IF = Ik(40295),
-       XF = Ik(41632),
-       TF = Ik(40297),
-       iF = Ik(40218);
+     var mT = fm(37630),
+       TT = fm(37568),
+       fT = fm(40383),
+       hT = fm(41664),
+       AT = fm(40391),
+       aT = fm(40326);
```

#### 43. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L318-L319` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L318-L319) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L318-L319)

```diff
-       if (!Fk || !0 !== Fk[gk.t]) return;
-       const Ik = Fk[gk.x],
+       if (!Tm || !0 !== Tm[tm.q]) return;
+       const fm = Tm[tm.w],
```

#### 44. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L327)

```diff
-       const Fk = kk.lK;
+       const Tm = mm.jK;
```

#### 45. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L329)

```diff
-         const kk = Fk[Ik].Ue();
+         const mm = Tm[fm].TY();
```

#### 46. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L333)

```diff
-         const kk = Fk[Ik].Ue();
+         const mm = Tm[fm].TY();
```

#### 47. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L343)

```diff
-       if ("function" !== typeof Ik) throw new Error(`terrainDrawState: Babylon has no ${Fk} to hook`);
+       if ("function" !== typeof fm) throw new Error(`terrainDrawState: Babylon has no ${Tm} to hook`);
```

#### 48. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L348)

```diff
-       const ik = Ik.XZ.xkk,
+       const am = fm.oE.qmm,
```

#### 49. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L352)

```diff
-         qk = new kF.c(ik, kk.Oe());
+         im = new mT.e(am, mm.dO());
```

#### 50. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L354)

```diff
-         if (jF.has(kk) || (jF.add(kk), kk.onContextLostObservable.add(qF), kk.Ee.add(qF)), ZF) return;
+         if (oT.has(mm) || (oT.add(mm), mm.onContextLostObservable.add(iT), mm.UO.add(iT)), ET) return;
```

#### 51. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L363-L364` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L363-L364) · [Before (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L363-L364)

```diff
-         const Xk = eF(iF.b.prototype, "_syncParentEnabledState");
-         Object.assign(iF.b.prototype, {
+         const hm = OT(aT.c.prototype, "_syncParentEnabledState");
+         Object.assign(aT.c.prototype, {
```

#### 52. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L369-L370)

```diff
-         const Tk = eF(TF.b.prototype, "resetDrawCache");
-         TF.b.prototype.resetDrawCache = function(kk, Fk) {
+         const Am = OT(AT.e.prototype, "resetDrawCache");
+         AT.e.prototype.resetDrawCache = function(mm, Tm) {
```

#### 53. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L373)

```diff
-         const ik = IF.c.prototype,
+         const am = fT.d.prototype,
```

#### 54. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L384)

```diff
-       }(kk.Oe());
+       }(mm.dO());
```

#### 55. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L399-L400` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L399-L400) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L399-L400)

```diff
-             Ik = kk.KXk[0],
-             Xk = kk.KXk[1];
+             fm = mm.Qhm[0],
+             hm = mm.Qhm[1];
```

#### 56. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L416)

```diff
-             ik = ak.Hj(kk.activeCamera),
+             am = Dm.Go(mm.activeCamera),
```

#### 57. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L419)

```diff
-             const Fk = kk.Oe().currentRenderPassId;
+             const Tm = mm.dO().currentRenderPassId;
```

#### 58. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L436)

```diff
-             if (!mk.d.IsInFrustum(Fk.KXk, Xk)) continue;
+             if (!Um.c.IsInFrustum(Tm.Qhm, hm)) continue;
```

#### 59. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L446)

```diff
-                 if (yk && Xk[Fk] === qk) jk && 1 === Tk[Fk] && Dk(Zk) && 0, ak.see(Zk, 1 === Tk[Fk] ? tk : -1);
+                 if (xm && hm[Tm] === im) om && 1 === Am[Tm] && Wm(Em) && 0, Dm.see(Em, 1 === Am[Tm] ? pm : -1);
```

#### 60. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L449)

```diff
-                   const kk = !0 === Zk.metadata[FF.m];
+                   const mm = !0 === Em.metadata[TT.l];
```

#### 61. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L453)

```diff
-                 } else ik ? Kk(Zk, tk, !0 === Zk.metadata[FF.m]) : Yk.f.prototype.push.call(Ik, Zk)
+                 } else am ? Km(Em, pm, !0 === Em.metadata[TT.l]) : Bm.f.prototype.push.call(fm, Em)
```

#### 62. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L460` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L460) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L460)

```diff
-         const ik = Fk.PXk;
+         const am = Tm.Khm;
```

#### 63. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L467-L468` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L467-L468) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L467-L468)

```diff
-         QXk: () => ak.culled,
-         lXk: (kk, Fk) => {
+         nhm: () => Dm.culled,
+         whm: (mm, Tm) => {
```

#### 64. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L472)

```diff
-             qk = `${Tk}|${lk}|${ak}`;
+             im = `${Am}|${wm}|${Dm}`;
```

#### 65. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L476-L478` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L476-L478) · [Before (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L476-L478)

```diff
-             Ik.ZFk([Tk * ik - 1, lk * ik - 1, ak * ik - 1], null, kk), Lk = Object.assign(Xk(kk, ik + 2), {
-               sXk: qk,
-               VXk: 0,
+             fm.pTm([Am * am - 1, wm * am - 1, Dm * am - 1], null, mm), Rm = Object.assign(hm(mm, am + 2), {
+               Jhm: im,
+               chm: 0,
```

#### 66. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L482)

```diff
-             }), Pk(Lk), jk[Lk._noaSlot] = (0, Ak.l)(Tk, lk, ak), ek[3 * Lk._noaSlot] = Tk, ek[3 * Lk._noaSlot + 1] = lk, ek[3 * Lk._noaSlot + 2] = ak, yk.set(qk, Lk)
+             }), Im(Rm), om[Rm._noaSlot] = (0, Lm.g)(Am, wm, Dm), Om[3 * Rm._noaSlot] = Am, Om[3 * Rm._noaSlot + 1] = wm, Om[3 * Rm._noaSlot + 2] = Dm, xm.set(im, Rm)
```

#### 67. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L484)

```diff
-           Lk.VXk++, kk.metadata[gk.z] = Lk
+           Rm.chm++, mm.metadata[tm.y] = Rm
```

#### 68. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L486-L488` → after: `L486-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L486-L488) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L486-L488)

```diff
-         zp: kk => {
-           const Fk = kk.metadata[gk.z];
-           Fk && (Fk.VXk--, Fk.VXk <= 0 && (yk.delete(Fk.sXk), Hk.push(Fk._noaSlot)), kk.metadata[gk.z] = null)
+         yG: mm => {
+           const Tm = mm.metadata[tm.y];
+           Tm && (Tm.chm--, Tm.chm <= 0 && (xm.delete(Tm.Jhm), qm.push(Tm._noaSlot)), mm.metadata[tm.y] = null)
```

#### 69. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L490)

```diff
-         xXk: (kk, Fk) => {
+         Ihm: (mm, Tm) => {
```

#### 70. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L492)

```diff
-             Xk = Fk.metadata[gk.z];
+             hm = Tm.metadata[tm.y];
```

#### 71. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L506)

```diff
-         y5: kk => {
+         Q8: mm => {
```

#### 72. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L508-L509` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L508-L509) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L508-L509)

```diff
-             Fk.ZXk.zXk(kk), Fk.tXk.zXk(kk);
-             for (const Ik of Fk.KXk) Ik.zXk(kk);
+             Tm.ohm.zhm(mm), Tm.Ehm.zhm(mm);
+             for (const fm of Tm.Qhm) fm.zhm(mm);
```

#### 73. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L531` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L531) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L531)

```diff
-         if (!(kk * (kk >= 0 ? yk : Xk) + Fk * (Fk >= 0 ? lk : Tk) + Lk * (Lk >= 0 ? ak : ik) + Ik[qk + 3] >= 0)) return !1
+         if (!(mm * (mm >= 0 ? xm : hm) + Tm * (Tm >= 0 ? wm : Am) + Rm * (Rm >= 0 ? Dm : am) + fm[im + 3] >= 0)) return !1
```

#### 74. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L535)

```diff
-     var xF = Ik(37788);
+     var VT = fm(37827);
```

#### 75. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L538-L539` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L538-L539) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L538-L539)

```diff
-         var Ik = kk.Yw;
-         Ik.AIk(new dk.e(Ik));
+         var fm = mm.Aq;
+         fm.vfm(new um.b(fm));
```

#### 76. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L541)

```diff
-         Ik.oXk = Xk, Xk.blocks = [];
+         fm.khm = hm, hm.blocks = [];
```

#### 77. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L544-L546` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L544-L546) · [Before (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L544-L546)

```diff
-         this.textPlanes = lk, this.QXk = () => Tk.QXk(), this.y5 = kk => {
-           Lk(Xk, kk), Tk.y5(kk)
-         }, this.lXk = (Fk, Ik, yk) => {
+         this.textPlanes = wm, this.nhm = () => Am.nhm(), this.Q8 = mm => {
+           Rm(hm, mm), Am.Q8(mm)
+         }, this.whm = (Tm, fm, xm) => {
```

#### 78. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L548` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L548) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L548)

```diff
-           if (!Fk.metadata[gk.x] && !Fk.metadata[gk.r]) {
+           if (!Tm.metadata[tm.w] && !Tm.metadata[tm.n]) {
```

#### 79. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L550)

```diff
-               var ak = Xk.PXk;
+               var Dm = hm.Khm;
```

#### 80. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L553-L554` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L553-L554) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L553-L554)

```diff
-                 var Lk = Fk.vR().EXk;
-                 Fk.metadata[gk.E] = Lk.center.length() + Lk.radius, Fk.ne = !0
+                 var Rm = Tm.DH().Shm;
+                 Tm.metadata[tm.G] = Rm.center.length() + Rm.radius, Tm.gO = !0
```

#### 81. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L556)

```diff
-               return ak.push(Fk), Fk.metadata[gk.l] = ak, void(Fk.metadata[gk.r] = !0)
+               return Dm.push(Tm), Tm.metadata[tm.i] = Dm, void(Tm.metadata[tm.n] = !0)
```

#### 82. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L566)

```diff
-               kk.qZ.ZFk(Jk, null, xk), Hk = tk(xk, qk), Xk.blocks.push(Hk), ik[wk] = Hk, Hk.sXk = wk
+               mm.IE.pTm(jm, null, Vm), qm = pm(Vm, im), hm.blocks.push(qm), am[Ym] = qm, qm.Jhm = Ym
```

#### 83. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L568)

```diff
-             Tk.lXk(Fk, yk), Tk.xXk(Hk, Fk), Hk.VXk = (Hk.VXk || 0) + 1, Fk.metadata[gk.x] = Hk, Fk.metadata[gk.t] = !0, Fk.ne = !0
+             Am.whm(Tm, xm), Am.Ihm(qm, Tm), qm.chm = (qm.chm || 0) + 1, Tm.metadata[tm.w] = qm, Tm.metadata[tm.q] = !0, Tm.gO = !0
```

#### 84. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L570` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L570) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L570)

```diff
-         }, this.zp = kk => {
+         }, this.yG = mm => {
```

#### 85. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L572-L574` → after: `L572-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L572-L574) · [Before (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L572-L574)

```diff
-             kk.metadata[gk.r] && ((0, Ak.t)(kk.metadata[gk.l], kk), kk.metadata[gk.r] = !1), kk.metadata[gk.l] === lk && (kk.ne = !1), kk.metadata[gk.l] = void 0, kk.metadata[gk.E] = void 0;
-             var Fk = kk.metadata[gk.x];
-             Fk && Fk.entries && (kk.metadata[gk.t] && Tk.removeEntry(Fk, kk), Fk.VXk--, Fk.VXk <= 0 && (delete ik[Fk.sXk], (0, Ak.t)(Xk.blocks, Fk))), Tk.zp(kk), kk.metadata[gk.x] = null, kk.metadata[gk.t] = !1
+             mm.metadata[tm.n] && ((0, Lm.k)(mm.metadata[tm.i], mm), mm.metadata[tm.n] = !1), mm.metadata[tm.i] === wm && (mm.gO = !1), mm.metadata[tm.i] = void 0, mm.metadata[tm.G] = void 0;
+             var Tm = mm.metadata[tm.w];
+             Tm && Tm.entries && (mm.metadata[tm.q] && Am.removeEntry(Tm, mm), Tm.chm--, Tm.chm <= 0 && (delete am[Tm.Jhm], (0, Lm.k)(hm.blocks, Tm))), Am.yG(mm), mm.metadata[tm.w] = null, mm.metadata[tm.q] = !1
```

#### 86. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L576)

```diff
-         }, this.K3 = function(kk) {
+         }, this.K4 = function(mm) {
```

#### 87. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L578-L581` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L578-L581) · [Before (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L578-L581)

```diff
-           if (kk.metadata[gk.x]) {
-             if (kk.metadata[gk.t] === Fk) return;
-             var Ik = kk.metadata[gk.x];
-             Ik && Ik.entries && (Fk ? Tk.xXk(Ik, kk) : Tk.removeEntry(Ik, kk)), kk.metadata[gk.t] = Fk
+           if (mm.metadata[tm.w]) {
+             if (mm.metadata[tm.q] === Tm) return;
+             var fm = mm.metadata[tm.w];
+             fm && fm.entries && (Tm ? Am.Ihm(fm, mm) : Am.removeEntry(fm, mm)), mm.metadata[tm.q] = Tm
```

#### 88. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L583-L585` → after: `L583-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L583-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L583-L585) · [Before (L583-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L583-L585)

```diff
-             if (kk.metadata[gk.r] === Fk) return;
-             var ik = kk.metadata[gk.l] || Xk.PXk;
-             Fk ? ik.push(kk) : (0, Ak.t)(ik, kk), kk.metadata[gk.r] = Fk
+             if (mm.metadata[tm.n] === Tm) return;
+             var am = mm.metadata[tm.i] || hm.Khm;
+             Tm ? am.push(mm) : (0, Lm.k)(am, mm), mm.metadata[tm.n] = Tm
```

#### 89. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L589)

```diff
-           qk = Fk * kk.qZ.XZ.xkk,
+           im = Tm * mm.IE.oE.qmm,
```

#### 90. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L592)

```diff
-               kk.ZXk.zXk(Fk), kk.tXk.zXk(Fk), kk.KXk.forEach((kk => kk.zXk(Fk))), kk.blocks && Lk(kk, Fk)
+               mm.ohm.zhm(Tm), mm.Ehm.zhm(Tm), mm.Qhm.forEach((mm => mm.zhm(Tm))), mm.blocks && Rm(mm, Tm)
```

#### 91. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L596-L598` → after: `L596-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L596-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L596-L598) · [Before (L596-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L596-L598)

```diff
-             var Ik = new yk.Ge(kk[0], kk[1], kk[2]),
-               Xk = new yk.Ge(kk[0] + Fk, kk[1] + Fk, kk[2] + Fk);
-             return new Bk.b(Ik, Xk, void 0, void 0, void 0, ak)
+             var fm = new xm.WO(mm[0], mm[1], mm[2]),
+               hm = new xm.WO(mm[0] + Tm, mm[1] + Tm, mm[2] + Tm);
+             return new Mm.e(fm, hm, void 0, void 0, void 0, Dm)
```

#### 92. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L600)

```diff
-         Tk = wF(Ik, Xk, kk.qZ, tk, ((kk, Fk) => {
+         Am = YT(fm, hm, mm.IE, pm, ((mm, Tm) => {
```

#### 93. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L613)

```diff
-         KD: Xk,
+         zW: hm,
```

#### 94. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L617-L618` → after: `L617-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L617-L618) · [Before (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L617-L618)

```diff
-       } = kk.model.PD, lk = kk.RXk;
-       lk.position.t5(Fk[0], Fk[1], Fk[2]), lk.rotation.t5(Ik[0], Ik[1], Ik[2]);
+       } = mm.model.cW, wm = mm.yhm;
+       wm.position.Z8(Tm[0], Tm[1], Tm[2]), wm.rotation.Z8(fm[0], fm[1], fm[2]);
```

#### 95. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L620) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L620)

```diff
-       ak.position.t5(Xk[0], Xk[1], Xk[2]), ak.fov = Tk, ak.minZ = ik, ak.maxZ = yk
+       Dm.position.Z8(hm[0], hm[1], hm[2]), Dm.fov = Am, Dm.minZ = am, Dm.maxZ = xm
```

#### 96. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L624` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L624) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L624)

```diff
-       const Fk = kk.Oe(),
+       const Tm = mm.dO(),
```

#### 97. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L627)

```diff
-       if (!Xk || Ik.tw < 2 || Fk.IXk || Xk.getParameter(Xk.DEPTH_BITS) < 24) return !1;
+       if (!hm || fm.zY < 2 || Tm.fhm || hm.getParameter(hm.DEPTH_BITS) < 24) return !1;
```

#### 98. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L631` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L631) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L631)

```diff
-         lk = Uk.d.prototype.render;
+         wm = Hm.e.prototype.render;
```

#### 99. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L640)

```diff
-         kk ? lk.call(this, kk, Ik, Tk, yk, ak, qk, tk, Zk, jk) : (Fk.setAlphaMode(Lk.d.ALPHA_DISABLE), lk.call(this, null, !1, !1, yk, ak, qk, tk, !1), ik._empty || (Xk.depthRange(1, 1), lk.call(ik, null, Ik, Tk, yk, ak, qk, tk, Zk, jk), Xk.depthRange(0, 1)), lk.call(this, null,  … [truncated]
+         mm ? wm.call(this, mm, fm, Am, xm, Dm, im, pm, Em, om) : (Tm.setAlphaMode(Rm.b.ALPHA_DISABLE), wm.call(this, null, !1, !1, xm, Dm, im, pm, !1), am._empty || (hm.depthRange(1, 1), wm.call(am, null, fm, Am, xm, Dm, im, pm, Em, om), hm.depthRange(0, 1)), wm.call(this, null,  … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L645-L647` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L645-L647) · [Before (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L645-L647)

```diff
-       return [Fk, Wk.d].map(((Fk, Ik) => {
-         const Xk = new Tk.e("light", yk.Ge.FromArray(Fk), kk);
-         return Xk.diffuse = ik.Color3.FromArray([1, 1, 1]), Xk.specular = ik.Color3.FromArray([1, 1, 1]), Xk.intensity = Wk.c[Ik], Xk
+       return [Tm, sm.g].map(((Tm, fm) => {
+         const hm = new Am.e("light", xm.WO.FromArray(Tm), mm);
+         return hm.diffuse = am.Color3.FromArray([1, 1, 1]), hm.specular = am.Color3.FromArray([1, 1, 1]), hm.intensity = sm.e[fm], hm
```

#### 101. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L650)

```diff
-     class VF extends ak.e {
+     class JT extends Dm.b {
```

#### 102. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L659)

```diff
-         this.heldTexture = kk, this.particleTexture = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.mirror) && void 0 !== Fk ? Fk : null
+         this.heldTexture = mm, this.particleTexture = null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.mirror) && void 0 !== Tm ? Tm : null
```

#### 103. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L668` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L668) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L668)

```diff
-         kk && (this.particleTexture = null, (0, qk.A)(this.heldTexture), this.heldTexture = null), super.dispose(kk, Fk, Ik)
+         mm && (this.particleTexture = null, (0, im.z)(this.heldTexture), this.heldTexture = null), super.dispose(mm, Tm, fm)
```

#### 104. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L673-L674` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L673-L674) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L673-L674)

```diff
-       QIk: function(kk, Fk) {
-         return new nk(kk, Fk.JIk, {
+       Qfm: function(mm, Tm) {
+         return new Sm(mm, Tm.jfm, {
```

#### 105. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L681` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L681) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L681)

```diff
-       NXk: function(kk, Fk) {
+       shm: function(mm, Tm) {
```

#### 106. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L684-L687` → after: `L684-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L684-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L684-L687) · [Before (L684-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L684-L687)

```diff
-           kk.Yw = Xk, Xk.detachControl(), Xk.autoClear = !1, Ck.e.MIN_RENDERINGGROUPS = -1;
-           for (let ik = Ck.e.MIN_RENDERINGGROUPS; ik <= 1; ik++) Xk.setRenderingOrder(ik, Uk.d.PainterSortCompare, Uk.d.PainterSortCompare, Uk.d.PainterSortCompare);
-           Xk.setRenderingAutoClearDepthStencil(0, !1), Rk.e.Enabled = !1, kk.pXk = new PF(kk, Math.round(Fk.uXk)), kk.RXk = new bk.b("camHolder", Xk), kk.camera = new uk.e("camera", new yk.Ge(0, 0, 0), Xk), kk.camera.parent = kk.RXk, KF(kk), (0, Wk.e)(kk, ((kk, Fk, Ik) => (0, ck. … [truncated]
-           const Tk = Ik(Xk, Fk.CXk);
+           mm.Aq = hm, hm.detachControl(), hm.autoClear = !1, ym.b.MIN_RENDERINGGROUPS = -1;
+           for (let am = ym.b.MIN_RENDERINGGROUPS; am <= 1; am++) hm.setRenderingOrder(am, Hm.e.PainterSortCompare, Hm.e.PainterSortCompare, Hm.e.PainterSortCompare);
+           hm.setRenderingAutoClearDepthStencil(0, !1), Pm.d.Enabled = !1, mm.Xhm = new IT(mm, Math.round(Tm.Phm)), mm.yhm = new Xm.c("camHolder", hm), mm.camera = new Gm.b("camera", new xm.WO(0, 0, 0), hm), mm.camera.parent = mm.yhm, KT(mm), (0, sm.h)(mm, ((mm, Tm, fm) => (0, rm. … [truncated]
+           const Am = fm(hm, Tm.rhm);
```

#### 107. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L689)

```diff
-             Tk.some((Fk => Fk === kk)) || console.error(`Light "${kk.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
+             Am.some((Tm => Tm === mm)) || console.error(`Light "${mm.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
```

#### 108. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L691)

```diff
-         }(kk, Fk, sF), QF(kk.Yw)
+         }(mm, Tm, nT), QT(mm.Aq)
```

#### 109. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L693` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L693) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L693)

```diff
-       bXk: KF,
+       Hhm: KT,
```

#### 110. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L695)

```diff
-         const Tk = kk.Yw;
+         const Am = mm.Aq;
```

#### 111. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L698-L699` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L698-L699) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L698-L699)

```diff
-       WXk: function(kk, Fk, Ik) {
-         return kk.engine.tw >= 2 && (kk.fXk || (kk.fXk = new Ek(kk.Yw, kk.BXk)), !kk.fXk.failed) ? kk.fXk.kR(Fk, Ik) : new VF(Fk, Ik, kk.Yw)
+       Mhm: function(mm, Tm, fm) {
+         return mm.engine.zY >= 2 && (mm.Bhm || (mm.Bhm = new km(mm.Aq, mm.Lhm)), !mm.Bhm.failed) ? mm.Bhm.yX(Tm, fm) : new JT(Tm, fm, mm.Aq)
```

#### 112. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L701-L703` → after: `L701-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L701-L703) · [Before (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L701-L703)

```diff
-       YXk: function(kk, Fk) {
-         kk.Yw.jK.forEach((Ik => {
-           if (Ik instanceof Sk) return void Ik.y5(Fk, kk.qZ.SZ);
+       thm: function(mm, Tm) {
+         mm.Aq.VK.forEach((fm => {
+           if (fm instanceof zm) return void fm.Q8(Tm, mm.IE.HE);
```

#### 113. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L709)

```diff
-             Xk.worldOffset.x = -kk.qZ.SZ[0], Xk.worldOffset.y = -kk.qZ.SZ[1], Xk.worldOffset.z = -kk.qZ.SZ[2]
+             hm.worldOffset.x = -mm.IE.HE[0], hm.worldOffset.y = -mm.IE.HE[1], hm.worldOffset.z = -mm.IE.HE[2]
```

#### 114. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L714-L715` → after: `L714-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L714-L715) · [Before (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L714-L715)

```diff
-         const Xk = new lk.d(Fk, kk.Yw, null, void 0, void 0, !1);
-         return (0, ck.g)(Fk, Ik, kk.Yw, Xk), Xk
+         const hm = new wm.c(Tm, mm.Aq, null, void 0, void 0, !1);
+         return (0, rm.f)(Tm, fm, mm.Aq, hm), hm
```

#### 115. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L717-L719` → after: `L717-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L717-L719) · [Before (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L717-L719)

```diff
-       Aw: LF,
-       dXk: function(kk, Fk) {
-         return zF.origin.kS(Fk.origin), zF.direction.kS(Fk.direction), zF.length = Fk.length, zF.epsilon = Fk.epsilon, zF.dXk(kk, !1, void 0, !1, void 0, !0).pickedPoint
+       aq: RT,
+       vhm: function(mm, Tm) {
+         return cT.origin.ZZ(Tm.origin), cT.direction.ZZ(Tm.direction), cT.length = Tm.length, cT.epsilon = Tm.epsilon, cT.vhm(mm, !1, void 0, !1, void 0, !0).pickedPoint
```

#### 116. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L723)

```diff
-   41132: (kk, Fk, Ik) => {
+   41178: (mm, Tm, fm) => {
```

#### 117. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L726-L727` → after: `L726-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L726-L727) · [Before (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L726-L727)

```diff
-       g: () => xk,
-       h: () => mk
+       h: () => Vm,
+       j: () => Um
```

#### 118. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L729-L742` → after: `L729-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L729-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L729-L742) · [Before (L729-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L729-L742)

```diff
-     var Xk = Ik(40269),
-       Tk = Ik(41139),
-       ik = Ik(41178),
-       yk = Ik(41147),
-       lk = Ik(37815),
-       ak = Ik(37821),
-       qk = Ik(37823),
-       Lk = Ik(37829),
-       tk = Ik(37270),
-       Zk = Ik(37277),
-       jk = Ik(41149),
-       ek = Ik(37255),
-       wk = Ik(37259),
-       Hk = Ik(37249);
+     var hm = fm(40357),
+       Am = fm(41186),
+       am = fm(41220),
+       xm = fm(41194),
+       wm = fm(37872),
+       Dm = fm(37880),
+       im = fm(37888),
+       Rm = fm(37894),
+       pm = fm(37286),
+       Em = fm(37290),
+       om = fm(41198),
+       Om = fm(37274),
+       Ym = fm(37276),
+       qm = fm(37260);
```

#### 119. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L748)

```diff
-         Ie: kk
+         nO: mm
```

#### 120. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L753)

```diff
-       const Fk = class extends jk.d {
+       const Tm = class extends om.e {
```

#### 121. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L755-L756` → after: `L755-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L755-L756) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L755-L756)

```diff
-             const Xk = (0, wk.X)(Fk),
-               Tk = Xk && (0, wk.B)(Xk, kk.name);
+             const hm = (0, Ym.cb)(Tm),
+               Am = hm && (0, Ym.y)(hm, mm.name);
```

#### 122. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L758` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L758) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L758)

```diff
-             super(Fk, kk.name, kk.priority, Tk ? Tk.defines : kk.defines(...yk), !1), this.featureState = void 0, this.featureState = Ik, this._pluginManager._addPlugin(this), this._enable(!0), (0, wk.D)(this._material, kk, this.featureState, this._pluginDefineNames)
+             super(Tm, mm.name, mm.priority, Am ? Am.defines : mm.defines(...xm), !1), this.featureState = void 0, this.featureState = fm, this._pluginManager._addPlugin(this), this._enable(!0), (0, Ym.A)(this._material, mm, this.featureState, this._pluginDefineNames)
```

#### 123. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L764` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L764) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L764)

```diff
-             return kk === Hk.e.GLSL || kk === Hk.e.WGSL
+             return mm === qm.b.GLSL || mm === qm.b.WGSL
```

#### 124. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L768` → after: `L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L768) · [Before (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L768)

```diff
-       for (const [Xk, Tk] of Object.entries(ek.e)) {
+       for (const [hm, Am] of Object.entries(Om.d)) {
```

#### 125. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L781-L783` → after: `L781-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L781-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L781-L783) · [Before (L781-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L781-L783)

```diff
-     class Pk extends(xk(lk.b)) {}
-     var Kk = Ik(39806),
-       Qk = Ik(41155);
+     class Im extends(Vm(wm.e)) {}
+     var Km = fm(39930),
+       Qm = fm(41201);
```

#### 126. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L798` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L798) · [Before (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L798)

```diff
-         } = kk.getSize(), lk = Math.round(ik / Tk), ak = kk.getInternalTexture(), qk = Fk && Fk.byteLength === Tk * Tk * lk * 4 ? Fk : null !== (Xk = zk.get(ak)) && void 0 !== Xk ? Xk : kk._readPixelsSync(), Lk = new Qk.c(qk, Tk, Tk, lk, Kk.c.TEXTUREFORMAT_RGBA, Ik, !0, !1, yk.c. … [truncated]
+         } = mm.getSize(), wm = Math.round(am / Am), Dm = mm.getInternalTexture(), im = Tm && Tm.byteLength === Am * Am * wm * 4 ? Tm : null !== (hm = cm.get(Dm)) && void 0 !== hm ? hm : mm._readPixelsSync(), Rm = new Qm.c(im, Am, Am, wm, Km.d.TEXTUREFORMAT_RGBA, fm, !0, !1, xm.c. … [truncated]
```

#### 127. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L800)

```diff
-           const Ik = Fk.createRawTexture(new Uint8Array(4), 1, 1, Kk.c.TEXTUREFORMAT_RGBA, !1, !1, yk.c.NEAREST_SAMPLINGMODE);
+           const fm = Tm.createRawTexture(new Uint8Array(4), 1, 1, Km.d.TEXTUREFORMAT_RGBA, !1, !1, xm.c.NEAREST_SAMPLINGMODE);
```

#### 128. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L802` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L802) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L802)

```diff
-         }(ak, Ik.Oe()), zk.set(ak, qk));
+         }(Dm, fm.dO()), cm.set(Dm, im));
```

#### 129. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L809-L810` → after: `L809-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L809-L810) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L809-L810)

```diff
-     var Sk = Ik(37832);
-     class vk extends(xk(ak.l)) {
+     var zm = fm(37903);
+     class Zm extends(Vm(Dm.j)) {
```

#### 130. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L815` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L815) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L815)

```diff
-               console.error(`Failed to build texture array for atlas ${Fk}`, kk)
+               console.error(`Failed to build texture array for atlas ${Tm}`, mm)
```

#### 131. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L827-L828` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L827-L828) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L827-L828)

```diff
-           lk = Tk.useWebGL2 ? await Vk(kk, null !== (Ik = null === (Xk = Tk.sources.pixels) || void 0 === Xk ? void 0 : Xk[Fk]) && void 0 !== Ik ? Ik : null, this._material.mG()) : null;
-         (0, Sk.e)(this._material, Tk, Fk, lk, ik, Math.round(yk / ik), this._material.shaderLanguage)
+           wm = Am.useWebGL2 ? await Jm(mm, null !== (fm = null === (hm = Am.sources.pixels) || void 0 === hm ? void 0 : hm[Tm]) && void 0 !== fm ? fm : null, this._material.wG()) : null;
+         (0, zm.c)(this._material, Am, Tm, wm, am, Math.round(xm / am), this._material.shaderLanguage)
```

#### 132. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L831-L840` → after: `L831-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L831-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L831-L840) · [Before (L831-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L831-L840)

```diff
-     var Ek = Ik(41158),
-       Ok = Ik(40308),
-       nk = Ik(37144),
-       Gk = Ik(41165),
-       pk = Ik(40427),
-       uk = Ik(40297),
-       bk = Ik(41114),
-       Rk = Ik(37623),
-       Uk = Ik(41170);
-     class Ck extends Ek.c {
+     var km = fm(41203),
+       bm = fm(40404),
+       Sm = fm(37181),
+       em = fm(41212),
+       Nm = fm(40527),
+       Gm = fm(40391),
+       Xm = fm(41166),
+       Pm = fm(37661),
+       Hm = fm(41218);
+     class ym extends km.e {
```

#### 133. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L851-L852` → after: `L851-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L851-L852) · [Before (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L851-L852)

```diff
-       TransformNode: bk.b,
-       je: Ek.c,
+       TransformNode: Xm.c,
+       XO: km.e,
```

#### 134. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L854-L855` → after: `L854-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L854-L855) · [Before (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L854-L855)

```diff
-       BoundingInfo: Ok.d,
-       Ge: nk.Ge,
+       BoundingInfo: bm.b,
+       WO: Sm.WO,
```

#### 135. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L857)

```diff
-       SubMesh: uk.b,
+       SubMesh: Gm.e,
```

#### 136. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L859-L861` → after: `L859-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L859-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L859-L861) · [Before (L859-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L859-L861)

```diff
-       MirroredGeometry: Uk.c,
-       meshFromArrays: Uk.g,
-       plainMeshFromArrays: Uk.k
+       MirroredGeometry: Hm.d,
+       meshFromArrays: Hm.f,
+       plainMeshFromArrays: Hm.h
```

#### 137. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L864-L865` → after: `L864-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L864-L865) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L864-L865)

```diff
-     var ck = Ik(37461);
-     class Wk extends(xk(Lk.e)) {
+     var rm = fm(37488);
+     class sm extends(Vm(Rm.g)) {
```

#### 138. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L871-L873` → after: `L871-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L871-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L871-L873) · [Before (L871-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L871-L873)

```diff
-           const Xk = (0, wk.X)(kk);
-           Xk && (Xk.disableLighting = !0, (0, wk.W)(Xk))
-         }(0, ck.h)(kk)
+           const hm = (0, Ym.cb)(mm);
+           hm && (hm.disableLighting = !0, (0, Ym.$)(hm))
+         }(0, rm.e)(mm)
```

#### 139. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L876)

```diff
-         (0, ck.l)(this._material), super.dispose(kk)
+         (0, rm.i)(this._material), super.dispose(mm)
```

#### 140. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L888)

```diff
-     }(0, Lk.c)({
+     }(0, Rm.d)({
```

#### 141. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L891-L894` → after: `L891-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L891-L894) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L891-L894)

```diff
-     var Bk = Ik(37365),
-       dk = Ik(37633);
-     const Yk = new RegExp(`^#define ${qk.d}\\s*$`, "m");
-     class Ak extends(xk(qk.h)) {
+     var Mm = fm(37357),
+       um = fm(37671);
+     const Bm = new RegExp(`^#define ${im.c}\\s*$`, "m");
+     class Lm extends(Vm(im.j)) {
```

#### 142. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L896)

```diff
-         super(kk, Fk), this.ee = !1, Fk.ditherOnlyWhileFading && (dk.e.add(kk), this.prewarmDitherTwins(kk))
+         super(mm, Tm), this.PO = !1, Tm.ditherOnlyWhileFading && (um.e.add(mm), this.prewarmDitherTwins(mm))
```

#### 143. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L908)

```diff
-           ik && !Yk.test(Xk.defines) && kk.mG().onAfterRenderObservable.addOnce((() => {
+           am && !Bm.test(hm.defines) && mm.wG().onAfterRenderObservable.addOnce((() => {
```

#### 144. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L914-L915` → after: `L914-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L914-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L914-L915) · [Before (L914-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L914-L915)

```diff
-         if (this.ee || kk.Hs()) return !1;
-         const Fk = new uk.b(0, 0, 0, 0, 0, kk, void 0, !1, !1);
+         if (this.PO || mm.aJ()) return !1;
+         const Tm = new Gm.e(0, 0, 0, 0, 0, mm, void 0, !1, !1);
```

#### 145. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L925` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L925) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L925)

```diff
-         this.ee = !0, super.dispose(kk)
+         this.PO = !0, super.dispose(mm)
```

#### 146. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L933)

```diff
-     mk(lk.b, Pk), mk(ak.l, vk), mk(qk.h, Ak), mk(Lk.e, Wk), (0, tk.d)({
+     Um(wm.e, Im), Um(Dm.j, Zm), Um(im.j, Lm), Um(Rm.g, sm), (0, pm.d)({
```

#### 147. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L936)

```diff
-         return (0, Bk.q)(kk, Ik), Ik.detailMap._pluginDefineNames
+         return (0, Mm.s)(mm, fm), fm.detailMap._pluginDefineNames
```

#### 148. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L939` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L939) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L939)

```diff
-         (0, Bk.X)(kk.mirror, Fk, Ik)
+         (0, Mm.W)(mm.mirror, Tm, fm)
```

#### 149. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L943)

```diff
-         if (!Xk) throw new Error(`${Fk.feature.name} has no plugin class (registerPluginClass)`);
+         if (!hm) throw new Error(`${Tm.feature.name} has no plugin class (registerPluginClass)`);
```

#### 150. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L962` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L962) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L962)

```diff
-               Fk(new Error(`${ak.context}: ${(null===Ik||void 0===Ik?void 0:Ik.message)||kk||"Failed to load texture"}`))
+               Tm(new Error(`${Dm.context}: ${(null===fm||void 0===fm?void 0:fm.message)||mm||"Failed to load texture"}`))
```

#### 151. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L980` → after: `L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L980) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L980)

```diff
-         Bk.r.set(Jk, tk), Object.assign(Jk, qk), Jk.updateURL(Xk, ek);
+         Mm.w.set(jm, pm), Object.assign(jm, im), jm.updateURL(hm, Om);
```

#### 152. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L993-L995` → after: `L993-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L993-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L993-L995) · [Before (L993-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L993-L995)

```diff
-         } = kk.sampler, Lk = qk === (0, Zk.z)(lk) ? null : () => {
-           (0, Bk.O)(tk, qk)
-         }, tk = new Tk.c(Xk, Fk, null, lk, ik, Lk, null, (0, Zk.x)(ak));
+         } = mm.sampler, Rm = im === (0, Em.y)(wm) ? null : () => {
+           (0, Mm.L)(pm, im)
+         }, pm = new Am.b(hm, Tm, null, wm, am, Rm, null, (0, Em.w)(Dm));
```

#### 153. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1007)

```diff
-         const tk = new ik.d(Fk, {
+         const pm = new am.b(Tm, {
```

#### 154. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1013` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1013) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1013)

```diff
-         return (0, Bk.E)(Zk, tk), Zk
+         return (0, Mm.F)(Em, pm), Em
```

#### 155. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1017` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1017) · [Before (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1017)

```diff
-   41170: (kk, Fk, Ik) => {
+   41218: (mm, Tm, fm) => {
```

#### 156. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1019-L1021` → after: `L1019-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1019-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1019-L1021) · [Before (L1019-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1019-L1021)

```diff
-       c: () => Lk,
-       g: () => tk,
-       k: () => Zk
+       d: () => Rm,
+       f: () => pm,
+       h: () => Em
```

#### 157. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1023-L1029` → after: `L1023-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1023-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1023-L1029) · [Before (L1023-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1023-L1029)

```diff
-     var Xk = Ik(41158),
-       Tk = Ik(40056),
-       ik = Ik(40308),
-       yk = Ik(40429),
-       lk = Ik(41165),
-       ak = Ik(40427),
-       qk = Ik(37519);
+     var hm = fm(41203),
+       Am = fm(40180),
+       am = fm(40404),
+       xm = fm(40529),
+       wm = fm(41212),
+       Dm = fm(40527),
+       im = fm(37545);
```

#### 158. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1038` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1038) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1038)

```diff
-         (0, qk.o)(kk), this.model = kk, null === (Fk = this.onLinked) || void 0 === Fk || Fk.call(this, kk)
+         (0, im.i)(mm), this.model = mm, null === (Tm = this.onLinked) || void 0 === Tm || Tm.call(this, mm)
```

#### 159. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1065` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1065) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1065)

```diff
-         this.link(new qk.h(kk, Fk, this.getTotalVertices(), new Float64Array(Ik.iXk()), new Float64Array(Xk.iXk())))
+         this.link(new im.e(mm, Tm, this.getTotalVertices(), new Float64Array(fm.ahm()), new Float64Array(hm.ahm())))
```

#### 160. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1069-L1070` → after: `L1069-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1069-L1070) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1069-L1070)

```diff
-         const Fk = new Lk(kk, this.mG()),
-           Ik = this.yXk(void 0, !0);
+         const Tm = new Rm(mm, this.wG()),
+           fm = this.xhm(void 0, !0);
```

#### 161. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1085-L1086` → after: `L1085-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1085-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1085-L1086) · [Before (L1085-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1085-L1086)

```diff
-           const Zk = kk.getIsInstanced() ? (Ik instanceof Array ? 4 * Ik.length : Ik.byteLength) / Lk : this.getTotalVertices(),
-             jk = (0, Tk.l)(Ik, lk, ak, qk, Lk, Zk, !0),
+           const Em = mm.getIsInstanced() ? (fm instanceof Array ? 4 * fm.length : fm.byteLength) / Rm : this.getTotalVertices(),
+             om = (0, Am.u)(fm, wm, Dm, im, Rm, Em, !0),
```

#### 162. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1095` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1095) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1095)

```diff
-           Fk.setVerticesBuffer(new Xk.g(this.Oe(), jk, ik, ek), Zk)
+           Tm.setVerticesBuffer(new hm.g(this.dO(), om, am, Om), Em)
```

#### 163. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1097` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1097) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1097)

```diff
-         return Fk._updatable = yk, Fk._boundingInfo = new ik.d(this.extend.minimum, this.extend.maximum), Fk.relink(), Fk
+         return Tm._updatable = xm, Tm._boundingInfo = new am.b(this.extend.minimum, this.extend.maximum), Tm.relink(), Tm
```

#### 164. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1100` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1100) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1100)

```diff
-         const ak = kk[0].mG(),
+         const Dm = mm[0].wG(),
```

#### 165. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1121)

```diff
-         this.model && ((0, qk.u)(this.model), this.model = null)
+         this.model && ((0, im.m)(this.model), this.model = null)
```

#### 166. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1127)

```diff
-       const Tk = (0, qk.l)(Fk),
+       const Am = (0, im.g)(Tm),
```

#### 167. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1136` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1136) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1136)

```diff
-       wk.positions = ik, wk.normals = null !== tk && void 0 !== tk ? tk : null, wk.uvs = null !== Zk && void 0 !== Zk ? Zk : null, wk.indices = jk;
+       Ym.positions = am, Ym.normals = null !== pm && void 0 !== pm ? pm : null, Ym.uvs = null !== Em && void 0 !== Em ? Em : null, Ym.indices = om;
```

#### 168. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1163` → after: `L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1163) · [Before (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1163)

```diff
-   41612: (kk, Fk, Ik) => {
+   41643: (mm, Tm, fm) => {
```

#### 169. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1166-L1168` → after: `L1166-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1166-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1166-L1168) · [Before (L1166-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1166-L1168)

```diff
-       e: () => lk,
-       h: () => yk,
-       i: () => qk
+       g: () => wm,
+       j: () => xm,
+       m: () => im
```

#### 170. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1170-L1172` → after: `L1170-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1170-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1170-L1172) · [Before (L1170-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1170-L1172)

```diff
-     var Xk = Ik(37327),
-       Tk = Ik(38706),
-       ik = Ik(38700);
+     var hm = fm(37330),
+       Am = fm(38802),
+       am = fm(38795);
```

#### 171. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1175` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1175) · [Before (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1175)

```diff
-       const Tk = ik.t;
+       const Am = am.u;
```

#### 172. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1183` → after: `L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1183) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1183)

```diff
-         Fk[Tk.colorPositions + ik] = kk.gradient, kk.color1.toArray(Fk, Tk.color1 + 4 * ik), (null !== (ak = kk.color2) && void 0 !== ak ? ak : kk.color1).toArray(Fk, Tk.color2 + 4 * ik)
+         Tm[Am.colorPositions + am] = mm.gradient, mm.color1.toArray(Tm, Am.color1 + 4 * am), (null !== (Dm = mm.color2) && void 0 !== Dm ? Dm : mm.color1).toArray(Tm, Am.color2 + 4 * am)
```

#### 173. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1186` → after: `L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1186) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1186)

```diff
-         Lk = Zk(kk, qk, "TH", Xk);
+         Rm = Em(mm, im, "qq", hm);
```

#### 174. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1188)

```diff
-       for (let ik = 0; ik < Lk; ik++) xk(Fk, Tk.TH + 4 * ik, qk[jk(qk, ik)]);
+       for (let am = 0; am < Rm; am++) Vm(Tm, Am.qq + 4 * am, im[om(im, am)]);
```

#### 175. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1198` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1198) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1198)

```diff
-         texels: new Uint8Array(4 * ik.j)
+         texels: new Uint8Array(4 * am.l)
```

#### 176. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1205)

```diff
-         for (let Ik = 0; Ik < ik.j; Ik++) Tk.e.GetCurrentGradient(Ik / ik.j, kk, ((kk, Fk, Ik) => {
+         for (let fm = 0; fm < am.l; fm++) Am.j.GetCurrentGradient(fm / am.l, mm, ((mm, Tm, fm) => {
```

#### 177. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1222)

```diff
-       return Fk ? Fk.length > ik.c ? (Xk(`particleStops:${Ik}`, `GPU particles use the first 2 and last ${ik.c-2} of more than ${ik.c} ${Ik} gradient stops (${kk.name})`), ik.c) : Fk.length : 0
+       return Tm ? Tm.length > am.d ? (hm(`particleStops:${fm}`, `GPU particles use the first 2 and last ${am.d-2} of more than ${am.d} ${fm} gradient stops (${mm.name})`), am.d) : Tm.length : 0
```

#### 178. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1226)

```diff
-       return Fk < 2 || kk.length <= ik.c ? Fk : kk.length - ik.c + Fk
+       return Tm < 2 || mm.length <= am.d ? Tm : mm.length - am.d + Tm
```

#### 179. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1228` → after: `L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1228) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1228)

```diff
-     const ek = new Float32Array(ik.p),
+     const Om = new Float32Array(am.o),
```

#### 180. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1244` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1244) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1244)

```diff
-       kk[Fk] = Ik.gradient, kk[Fk + 1] = Ik.factor1, kk[Fk + 2] = null !== (Xk = Ik.factor2) && void 0 !== Xk ? Xk : Ik.factor1
+       mm[Tm] = fm.gradient, mm[Tm + 1] = fm.factor1, mm[Tm + 2] = null !== (hm = fm.factor2) && void 0 !== hm ? hm : fm.factor1
```

#### 181. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1247` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1247) · [Before (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1247)

```diff
-   41604: (kk, Fk, Ik) => {
+   41638: (mm, Tm, fm) => {
```

#### 182. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1256` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/babylon-backend.js#L1256) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/babylon-backend.js#L1256)

```diff
-       d: () => Xk
+       c: () => hm
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockFaceTable.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/blockFaceTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcd)

#### 1. `bundles/bloxd.io/chunks/js/blockFaceTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockFaceTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockFaceTable.js#L4)

```diff
-   60615: (kk, Fk, Ik) => {
+   60690: (mm, Tm, fm) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d)

#### 1. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L4)

```diff
-   36377: (kk, Fk, Ik) => {
+   36477: (mm, Tm, fm) => {
```

#### 2. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L10)

```diff
-     var Xk = Ik(36386);
+     var hm = fm(36481);
```

#### 3. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L71)

```diff
-     var qk = Ik(36388);
+     var im = fm(36484);
```

#### 4. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L78)

```diff
-       return `${Fk}|${Ik}|${kk}`
+       return `${Tm}|${fm}|${mm}`
```

#### 5. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L105)

```diff
-         return null !== (Tk = await (0, qk.d)(ik, Fk, Ik)) && void 0 !== Tk ? Tk : (await Pk(ik, Fk, Ik)).toDataURL()
+         return null !== (Am = await (0, im.c)(am, Tm, fm)) && void 0 !== Am ? Am : (await Im(am, Tm, fm)).toDataURL()
```

#### 6. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L116)

```diff
-         const ik = (0, Xk.i)(Ik, Tk),
+         const am = (0, hm.f)(fm, Am),
```

#### 7. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L138)

```diff
-             rect: Fk.cropFaces ? ik : [0, 0, 1, 1],
+             rect: Tm.cropFaces ? am : [0, 0, 1, 1],
```

#### 8. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L143)

```diff
-           Jk = Xk.g;
+           jm = hm.d;
```

#### 9. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L150)

```diff
-         return (0, Xk.k)(wk, Ik, Tk, (kk => 1 === Hk[kk])), wk
+         return (0, hm.g)(Ym, fm, Am, (mm => 1 === qm[mm])), Ym
```

#### 10. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L156)

```diff
-         return "SlabBlock" === kk ? ik : "StairsBlock" === kk ? yk : Tk
+         return "SlabBlock" === mm ? am : "StairsBlock" === mm ? xm : Am
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockIconWorker.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/blockIconWorker.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d)

#### 1. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconWorker.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconWorker.js#L193)

```diff
-     if (void 0 === Xk) throw new Error(`no ${Ik} was sent for ${Fk.slice(0,100)}`);
+     if (void 0 === hm) throw new Error(`no ${fm} was sent for ${Tm.slice(0,100)}`);
```

#### 2. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L219` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconWorker.js#L219) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconWorker.js#L219)

```diff
-             Fk(null !== (kk = Ik.error) && void 0 !== kk ? kk : new Error("the icon did not encode"))
+             Tm(null !== (mm = fm.error) && void 0 !== mm ? mm : new Error("the icon did not encode"))
```

#### 3. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconWorker.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconWorker.js#L286)

```diff
-               rect: Tk.cropFaces ? ik : [0, 0, 1, 1],
+               rect: Am.cropFaces ? am : [0, 0, 1, 1],
```

#### 4. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockIconWorker.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockIconWorker.js#L304)

```diff
-           return "SlabBlock" === kk ? jk : "StairsBlock" === kk ? ek : Zk
+           return "SlabBlock" === mm ? om : "StairsBlock" === mm ? Om : Em
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockModelIcons.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/blockModelIcons.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035)

#### 1. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockModelIcons.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockModelIcons.js#L4)

```diff
-   36401: (kk, Fk, Ik) => {
+   36490: (mm, Tm, fm) => {
```

#### 2. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockModelIcons.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockModelIcons.js#L9-L11)

```diff
-     var Xk = Ik(36388),
-       Tk = Ik(36386);
-     const ik = Ik(36409),
+     var hm = fm(36484),
+       Am = fm(36481);
+     const am = fm(36495),
```

#### 3. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockModelIcons.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockModelIcons.js#L48)

```diff
-       return yk.width = Fk, yk.height = Fk, yk.getContext("2d").putImageData(new ImageData((0, Tk.o)(Xk, ik, Fk, Ik), Fk, Fk), 0, 0), yk.toDataURL()
+       return xm.width = Tm, xm.height = Tm, xm.getContext("2d").putImageData(new ImageData((0, Am.k)(hm, am, Tm, fm), Tm, Tm), 0, 0), xm.toDataURL()
```

#### 4. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockModelIcons.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockModelIcons.js#L52)

```diff
-       const Tk = `${Fk}|${Ik}|${kk}`;
+       const Am = `${Tm}|${fm}|${mm}`;
```

#### 5. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockModelIcons.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockModelIcons.js#L54)

```diff
-       return ik || (ik = (0, Xk.e)(kk, (() => Lk(kk)), Fk, Ik).then((Xk => null !== Xk && void 0 !== Xk ? Xk : tk(kk, Fk, Ik))), ik.catch((() => {
+       return am || (am = (0, hm.e)(mm, (() => Rm(mm)), Tm, fm).then((hm => null !== hm && void 0 !== hm ? hm : pm(mm, Tm, fm))), am.catch((() => {
```

#### 6. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockModelIcons.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockModelIcons.js#L59)

```diff
-   36409: (kk, Fk, Ik) => {
+   36495: (mm, Tm, fm) => {
```

#### 7. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L61-L76` → after: `L61-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L61-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockModelIcons.js#L61-L76) · [Before (L61-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockModelIcons.js#L61-L76)

```diff
-       "./Artisan Bench.json": [41193, 275],
-       "./Aspen Item Pedestal.json": [41201, 276],
-       "./Cedar Item Pedestal.json": [41208, 277],
-       "./Cherry Item Pedestal.json": [41211, 278],
-       "./Furnace.json": [41213, 279],
-       "./Jungle Item Pedestal.json": [41216, 280],
-       "./Mango Item Pedestal.json": [41221, 281],
-       "./Palm Item Pedestal.json": [41223, 282],
-       "./Pear Item Pedestal.json": [41230, 283],
-       "./Pine Item Pedestal.json": [41232, 284],
-       "./Plum Item Pedestal.json": [41238, 285],
-       "./Potion Table.json": [41241, 286],
-       "./Salvaging Table.json": [41250, 287],
-       "./Showcase.json": [41253, 288],
-       "./Spectral Item Pedestal.json": [41256, 289],
-       "./Workbench.json": [41264, 290]
+       "./Artisan Bench.json": [41228, 275],
+       "./Aspen Item Pedestal.json": [41232, 276],
+       "./Cedar Item Pedestal.json": [41236, 277],
+       "./Cherry Item Pedestal.json": [41245, 278],
+       "./Furnace.json": [41254, 279],
+       "./Jungle Item Pedestal.json": [41259, 280],
+       "./Mango Item Pedestal.json": [41263, 281],
+       "./Palm Item Pedestal.json": [41266, 282],
+       "./Pear Item Pedestal.json": [41268, 283],
+       "./Pine Item Pedestal.json": [41271, 284],
+       "./Plum Item Pedestal.json": [41273, 285],
+       "./Potion Table.json": [41282, 286],
+       "./Salvaging Table.json": [41291, 287],
+       "./Showcase.json": [41298, 288],
+       "./Spectral Item Pedestal.json": [41305, 289],
+       "./Workbench.json": [41312, 290]
```

#### 8. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/blockModelIcons.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/blockModelIcons.js#L88)

```diff
-     Tk.keys = () => Object.keys(Xk), Tk.id = 36409, kk.exports = Tk
+     Am.keys = () => Object.keys(hm), Am.id = 36495, mm.exports = Am
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99)

#### 1. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5)

```diff
-   42662: (kk, Fk, Ik) => {
-     kk.exports = Ik.p + "static/media/bloxd_wasm_anim_bg.657167461c9fa04b7c6b.wasm"
+   42688: (mm, Tm, fm) => {
+     mm.exports = fm.p + "static/media/bloxd_wasm_anim_bg.c22fda982f3d0ea7fdf0.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L7)

```diff
-   42653: (kk, Fk, Ik) => {
+   42683: (mm, Tm, fm) => {
```

#### 3. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L15-L23` → after: `L15-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23) · [Before (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23)

```diff
-       const yk = xk(kk, Ek.wmCG),
-         lk = Ok,
-         ak = xk(Fk, Ek.wmCG),
-         qk = Ok,
-         Lk = xk(Ik, Ek.wmCG),
-         tk = Ok,
-         Zk = xk(Xk, Ek.wmCG),
-         ek = Ok,
-         wk = xk(Tk, Ek.wmCG),
+       const xm = Vm(mm, km.o3qu),
+         wm = bm,
+         Dm = Vm(Tm, km.o3qu),
+         im = bm,
+         Rm = Vm(fm, km.o3qu),
+         pm = bm,
+         Em = Vm(hm, km.o3qu),
+         Om = bm,
+         Ym = Vm(Am, km.o3qu),
```

#### 4. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L28)

```diff
-         }(ik, Ek.wmCG),
+         }(am, km.o3qu),
```

#### 5. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L30)

```diff
-       const sk = Ek.W2L2(yk, lk, ak, qk, Lk, tk, Zk, ek, wk, Hk, Pk, Qk);
+       const nm = km.LsxH(xm, wm, Dm, im, Rm, pm, Em, Om, Ym, qm, Im, Qm);
```

#### 6. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L33-L39` → after: `L33-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39) · [Before (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39)

```diff
-       return Ek.KMFJ(sk[0], 1 * sk[1], 1), Sk
-     }
- 
-     function ik(kk, Fk) {
-       const Ik = Pk(kk, Ek.wmCG, Ek.To7b),
-         Xk = Ok,
-         Tk = Ek.S5cX(Ik, Xk, Fk);
+       return km.Vv2C(nm[0], 1 * nm[1], 1), zm
+     }
+ 
+     function am(mm, Tm) {
+       const fm = Im(mm, km.o3qu, km.GYkl),
+         hm = bm,
+         Am = km.sxKc(fm, hm, Tm);
```

#### 7. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L44)

```diff
-       Ek.s3eN()
+       km.GJzE()
```

#### 8. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L50)

```diff
-         Cz2w: {
+         w3FG: {
```

#### 9. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L52)

```diff
-           DV5d: function(kk, Fk) {
+           skOo: function(mm, Tm) {
```

#### 10. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L55)

```diff
-           VJho: function(kk, Fk) {
+           q9qt: function(mm, Tm) {
```

#### 11. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58)

```diff
-               Xk = "string" === typeof Ik ? Ik : void 0;
-             var Tk = Jk(Xk) ? 0 : Pk(Xk, Ek.wmCG, Ek.To7b),
+               hm = "string" === typeof fm ? fm : void 0;
+             var Am = jm(hm) ? 0 : Im(hm, km.o3qu, km.GYkl),
```

#### 12. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L62)

```diff
-           LZ7M: function(kk, Fk) {
+           vFqX: function(mm, Tm) {
```

#### 13. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L65)

```diff
-           ZMcJ: function(kk, Fk) {
+           eUtd: function(mm, Tm) {
```

#### 14. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L68)

```diff
-           kcXe: function(kk) {
+           nEhu: function(mm) {
```

#### 15. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82)

```diff
-       pyk: () => Tk,
-       yt: () => ik,
+       rxm: () => Am,
+       Vp: () => am,
```

#### 16. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L85)

```diff
-       lt: () => yk
+       Ip: () => xm
```

#### 17. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L173)

```diff
-       return vk = kk, Ek = kk.exports, Sk = Fk, qk = null, Zk = null, Ek.euF5(), Ek
+       return Zm = mm, km = mm.exports, zm = Tm, im = null, Em = null, km.O94G(), km
```

#### 18. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L197)

```diff
-           if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
+           if (!mm.ok) throw new Error(`failed to fetch Wasm: ${mm.status} ${mm.statusText} fetching '${mm.url}'`);
```

#### 19. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L224-L225` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225)

```diff
-     var uk = Ik(2803),
-       bk = Ik(6599);
+     var Gm = fm(2876),
+       Xm = fm(6571);
```

#### 20. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L245)

```diff
-           kk = await (0, uk.G)(new Ik.U(Ik(42662)), (0, bk.c)("bloxd_wasm_anim"))
+           mm = await (0, Gm.G)(new fm.U(fm(42688)), (0, Xm.c)("bloxd_wasm_anim"))
```

#### 21. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L262)

```diff
-         return ik.pyk(Object.entries(kk).flat(), [...Fk.mobTypes], [...Fk.vehicleTypes], [...Fk.mobAiStates], [...Fk.playerPoses], "builtIns" in Tk ? Tk.builtIns : void 0)
+         return am.rxm(Object.entries(mm).flat(), [...Tm.mobTypes], [...Tm.vehicleTypes], [...Tm.mobAiStates], [...Tm.playerPoses], "builtIns" in Am ? Am.builtIns : void 0)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (522 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc)

#### 1. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5)

```diff
-   42629: (kk, Fk, Ik) => {
-     kk.exports = Ik.p + "static/media/bloxd_wasm_webgl_bg.e77b9dabd302333de511.wasm"
+   42670: (mm, Tm, fm) => {
+     mm.exports = fm.p + "static/media/bloxd_wasm_webgl_bg.c456123193a5c432c6a5.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7)

```diff
-   42624: (kk, Fk, Ik) => {
+   42663: (mm, Tm, fm) => {
```

#### 3. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14)

```diff
-       vH: () => Tk,
-       aik: () => ik,
+       rq: () => Am,
+       Ram: () => am,
```

#### 4. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16)

```diff
-       yt: () => lk,
+       Vp: () => wm,
```

#### 5. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L19-L39` → after: `L19-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L19-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L39) · [Before (L19-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L39)

```diff
-       lt: () => ak,
-       FXk: () => qk,
-       qt: () => Lk,
-       Lt: () => tk,
-       tt: () => Zk,
-       Zt: () => jk,
-       jt: () => ek,
-       et: () => wk,
-       wt: () => Hk,
-       UH: () => Jk,
-       Pt: () => xk,
-       gIk: () => Pk,
-       qik: () => Kk,
-       mIk: () => Qk,
-       Lik: () => sk,
-       Zik: () => Vk,
- ... (5 more removed lines; see GitHub link above)
+       Ip: () => Dm,
+       Thm: () => im,
+       Kp: () => Rm,
+       Qp: () => pm,
+       np: () => Em,
+       Jp: () => om,
+       cp: () => Om,
+       zp: () => Ym,
+       Zp: () => qm,
+       Uq: () => jm,
+       Np: () => Vm,
+       tfm: () => Im,
+       pam: () => Km,
+       Ufm: () => Qm,
+       Eam: () => nm,
+       oam: () => Jm,
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L48)

```diff
-         SF.KOhv(kk, 0)
+         zT.eCP0(mm, 0)
```

#### 7. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L50-L51` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L50-L51) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L50-L51)

```diff
-       static DIk() {
-         return SF.sXOV() >>> 0
+       static Wfm() {
+         return zT.DlYe() >>> 0
```

#### 8. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L53-L54` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L53-L54) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L53-L54)

```diff
-       eik() {
-         return SF.ro29(this.__wbg_ptr)
+       Yam() {
+         return zT.k0A3(this.__wbg_ptr)
```

#### 9. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L56-L57` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L56-L57) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L56-L57)

```diff
-       jTk() {
-         return SF.cFIU(this.__wbg_ptr) >>> 0
+       OAm() {
+         return zT.ygJK(this.__wbg_ptr) >>> 0
```

#### 10. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L59-L60` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L59-L60) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L59-L60)

```diff
-       wik(kk, Fk, Ik) {
-         return SF.gRhh(this.__wbg_ptr, kk, Fk, Ik) >>> 0
+       qam(mm, Tm, fm) {
+         return zT.a6f8(this.__wbg_ptr, mm, Tm, fm) >>> 0
```

#### 11. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L63)

```diff
-         return SF.nDVz(this.__wbg_ptr, kk, Fk, Ik) >>> 0
+         return zT.mkOF(this.__wbg_ptr, mm, Tm, fm) >>> 0
```

#### 12. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L65-L66)

```diff
-       Hik() {
-         return SF.HRZc(this.__wbg_ptr) >>> 0
+       Vam() {
+         return zT.QORr(this.__wbg_ptr) >>> 0
```

#### 13. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L68-L69` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L68-L69) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L68-L69)

```diff
-       wTk(kk, Fk, Ik, Xk, Tk, ik, yk) {
-         return SF.rNUV(this.__wbg_ptr, kk, Fk, Ik, Xk, Tk, ik, yk)
+       qAm(mm, Tm, fm, hm, Am, am, xm) {
+         return zT.f8lk(this.__wbg_ptr, mm, Tm, fm, hm, Am, am, xm)
```

#### 14. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L71-L72)

```diff
-       Jik(kk, Fk, Ik) {
-         return SF.Bdhv(this.__wbg_ptr, kk, Fk, Ik) >>> 0
+       Iam(mm, Tm, fm) {
+         return zT.fMVp(this.__wbg_ptr, mm, Tm, fm) >>> 0
```

#### 15. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L74-L75` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L74-L75) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L74-L75)

```diff
-       xik() {
-         return SF.FCzn(this.__wbg_ptr) >>> 0
+       Kam() {
+         return zT.N5wb(this.__wbg_ptr) >>> 0
```

#### 16. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L77-L78` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L77-L78) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L77-L78)

```diff
-       Pik() {
-         return SF.M09o(this.__wbg_ptr) >>> 0
+       Qam() {
+         return zT.IOLw(this.__wbg_ptr) >>> 0
```

#### 17. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L80-L81` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L80-L81) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L80-L81)

```diff
-       Qik() {
-         return SF.Jm8V(this.__wbg_ptr) >>> 0
+       Jam() {
+         return zT.FpDX(this.__wbg_ptr) >>> 0
```

#### 18. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L84)

```diff
-         return SF.YLbQ(this.__wbg_ptr, kk, Fk, Ik) >>> 0
+         return zT.TxCP(this.__wbg_ptr, mm, Tm, fm) >>> 0
```

#### 19. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L86-L87` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L86-L87) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L86-L87)

```diff
-       QTk(kk, Fk, Ik) {
-         return SF.Nd6l(this.__wbg_ptr, kk, Fk, Ik) >>> 0
+       JAm(mm, Tm, fm) {
+         return zT.IVkw(this.__wbg_ptr, mm, Tm, fm) >>> 0
```

#### 20. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L89-L90` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L89-L90) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L89-L90)

```diff
-       HTk() {
-         return SF.LSme(this.__wbg_ptr) >>> 0
+       jAm() {
+         return zT.EStR(this.__wbg_ptr) >>> 0
```

#### 21. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L92-L93` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L92-L93) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L92-L93)

```diff
-       JTk(kk) {
-         return SF.Mz6Y(this.__wbg_ptr, kk) >>> 0
+       VAm(mm) {
+         return zT.F1sF(this.__wbg_ptr, mm) >>> 0
```

#### 22. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L95-L96` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L95-L96) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L95-L96)

```diff
-       xTk(kk, Fk, Ik, Xk, Tk, ik) {
-         return SF.nQgE(this.__wbg_ptr, kk, Fk, Ik, Xk, Tk, ik) >>> 0
+       IAm(mm, Tm, fm, hm, Am, am) {
+         return zT.AdzX(this.__wbg_ptr, mm, Tm, fm, hm, Am, am) >>> 0
```

#### 23. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L98-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L98-L99) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L98-L99)

```diff
-       eTk() {
-         return SF.wJnC(this.__wbg_ptr) >>> 0
+       YAm() {
+         return zT.VV76(this.__wbg_ptr) >>> 0
```
