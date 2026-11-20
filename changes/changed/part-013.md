# Changed — Bundle Modifications Report (Part 013 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `13 / 58` (**279** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 012](part-012.md) · [Part 014 →](part-014.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/237.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/237.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab)

#### 33. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L402-L403` → after: `L16374-L16899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR16374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L16374-L16899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/237.js#L16374-L16899) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/237.js#L402-L403)

```diff
-       has(zz) {
-         return this.members.has(zz)
+       index(qq) {
+         this.indexed = !0;
+         for (const Eq of nE)
+           for (const gq of Hj(Eq)) {
+             const Eq = qq.blockNameToBlockId(gq, !0),
+               Yq = Qj(gq);
+             null !== Eq && Yq.length > 0 && (this.offsetsList.push(Yq), this.offsetsIndexById[Eq] = this.offsetsList.length)
+           }
+       }
+       onAfterRender(qq, Eq) {
+         this.indexed || this.index(qq);
+         const gq = performance.now();
+         if (gq - this.lastCheckMs < 100) return;
+         this.lastCheckMs = gq, this.checks++;
+         const Yq = ua.c.Oa,
+           [lq, Oq, mq] = oj(Eq, Yq);
+ ... (510 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L405-L406` → after: `L16901-L16911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR16901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L16901-L16911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/237.js#L16901-L16911) · [Before (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/237.js#L405-L406)

```diff
-       ids() {
-         return [...this.members.keys()]
+       liftAbove(qq, Eq, gq) {
+         var Yq;
+         const lq = this.anchorOf(qq);
+         if (!lq) return 0;
+         const Oq = lq.x + gq + (null !== (Yq = this.labelOffsets.get(qq)) && void 0 !== Yq ? Yq : 0),
+           {
+             halfWidth: mq,
+             labelled: xq
+           } = this.extentOf(qq),
+           Aq = lq.y + this.em * (xq ? 6.2 : 3);
+         return Aq < Eq.top - 6 || Oq + mq < Eq.left - 6 || Oq - mq > Eq.right + 6 ? 0 : Eq.top - 6 - Aq
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L408` → after: `L16913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR16913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L16913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/237.js#L16913) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/237.js#L408)

```diff
-       getName(zz) {
+       watch(qq) {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L410` → after: `L16915-L16932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR16915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L16915-L16932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/237.js#L16915-L16932) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/237.js#L410)

```diff
-         return null !== (uz = null === (bz = this.members.get(zz)) || void 0 === bz ? void 0 : bz.name) && void 0 !== uz ? uz : void 0
+         this.tracker && this.sizes.unobserve(this.tracker), null === (Eq = this.hud) || void 0 === Eq || Eq.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = qq, this.hud = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.closest(". … [truncated]
+           passive: !0
+         }), this.hudStyle.observe(this.hud, {
+           attributes: !0,
+           attributeFilter: ["style", "class"]
+         }))
+       }
+       shiftLeftOf(qq, Eq) {
+         var gq;
+         const Yq = this.anchorOf(qq);
+         if (!Yq) return 0;
+         const {
+           y: lq
+         } = Yq, Oq = Yq.x + (null !== (gq = this.labelOffsets.get(qq)) && void 0 !== gq ? gq : 0), mq = this.em, {
+           halfWidth: xq,
+           labelled: Aq
+ ... (2 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L412` → after: `L16934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR16934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L16934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/237.js#L16934) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/237.js#L412)

```diff
-       getSettings(zz) {
+       shiftOnScreen(qq) {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L414` → after: `L16936-L16941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR16936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L16936-L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/237.js#L16936-L16941) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/237.js#L414)

```diff
-         return null === (uz = this.members.get(zz)) || void 0 === uz ? void 0 : uz.settings
+         const gq = this.anchorOf(qq);
+         if (!gq) return 0;
+         const {
+           halfWidth: Yq
+         } = this.extentOf(qq), lq = gq.x + (null !== (Eq = this.labelOffsets.get(qq)) && void 0 !== Eq ? Eq : 0), Oq = lq + Yq - (this.innerWidth - 6);
+         return Oq > 0 ? -Oq : Math.max(0, 6 - (lq - Yq))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L416` → after: `L16943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR16943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L16943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/237.js#L16943) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/237.js#L416)

```diff
-       getSetting(zz, uz) {
+       runLabelAside(qq, Eq) {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L418` → after: `L16945-L17013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR16945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L16945-L17013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/237.js#L16945-L17013) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/237.js#L418)

```diff
-         return null === (bz = this.members.get(zz)) || void 0 === bz ? void 0 : bz.settings[uz]
+         let Yq = null;
+         for (let mq = 0; mq < qq.children.length; mq++) qq.children[mq].classList.contains("DirectionArrowLabel") && (Yq = qq.children[mq]);
+         if (!Yq) return 0;
+         const lq = qq.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(qq) : null,
+           Oq = (lq && this.api ? this.side.sideOf(this.api, {
+             x: lq.x / this.innerWidth * 100,
+             y: lq.y / this.innerHeight * 100
+           }, Eq, this.project) : 0) * this.halfWidthOf(Yq);
+         return Oq !== (null !== (gq = this.sideLabels.get(Yq)) && void 0 !== gq ? gq : 0) && (Yq.style.transform = 0 === Oq ? "" : `translateX(-50%) translateX(${Oq}px)`, 0 === Oq ? this.sideLabels.delete(Yq) : this.sideLabels.set(Yq, Oq)), Oq
+       }
+       extentOf(qq) {
+         let Eq = this.em,
+           gq = !1;
+         for (let Yq = 0; Yq < qq.children.length; Yq++) {
+           const lq = qq.children[Yq],
+             Oq = lq.classList.contains("DirectionArrowLabel");
+ ... (53 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L421` → after: `L17016-L17774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR17016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L17016-L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/237.js#L17016-L17774) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/237.js#L421)

```diff
-         this.members.clear()
+         this.picks.clear()
+       }
+       zW(qq, Eq, gq) {
+         this.picks.set(qq, {
+           item: Eq,
+           had: gq(Eq)
+         }), this.select(qq, Eq)
+       }
+     }(Tl.v);
+ 
+     function Cj(qq) {
+       return Eq => {
+         let gq = 0;
+         for (const Yq of qq.getInventoryItems())(null === Yq || void 0 === Yq ? void 0 : Yq.name) === Eq && (gq += null === Yq.amount ? 1 : Math.max(Yq.amount, 0));
+         return gq
+       }
+ ... (743 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/238.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/238.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L6)

```diff
-   38822: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       default: () => kb
+   40835: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq,
+       e: () => uq,
+       h: () => cq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L8-L144` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L10-L14) · [Before (L8-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L8-L144)

```diff
-     const Ez = [0, 90, 180, 270],
-       nz = "plotsblueprint";
-     var iz = bz(56),
-       lz = bz(36071),
-       Mz = bz(20),
-       tz = bz(1595),
-       Hz = bz(1673),
-       Oz = bz(22);
-     const pz = [
-         ["farm_hut", "farm_house", "farm_barn"],
-         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
-         ["market_stand", "market_stall", "market_shop"],
-         ["castle_wall", "castle_gate", "castle_tower"]
-       ],
-       dz = {
-         farm_hut: {
- ... (121 more removed lines; see GitHub link above)
+     var Yq, lq = gq(37158),
+       Oq = gq(37139);
+     ! function(qq) {
+       qq[qq.CW = 0] = "CW", qq[qq.CCW = 1] = "CCW"
+     }(Yq || (Yq = {}));
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L146-L152` → after: `L16-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L16-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L16-L24) · [Before (L146-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L146-L152)

```diff
-       constructor(zz, uz) {
-         this.api = zz, this.placement = uz, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
-           this.placement.stop(), this.xZ("journal_opened")
-         }, this.build = zz => {
-           this.xZ("placement_started"), this.placement.start(zz), (0, lz.i)()
-         }, this.putAway = () => {
-           this.api.sendCommand(`${nz} cancel`)
+       static Interpolate(qq, Eq, gq, Yq, lq) {
+         if (0 === qq) return 0;
+         const Oq = 1 - 3 * Yq + 3 * Eq,
+           mq = 3 * Yq - 6 * Eq,
+           xq = 3 * Eq;
+         let Aq = qq;
+         for (let cq = 0; cq < 5; cq++) {
+           const Eq = Aq * Aq;
+           Aq -= (Oq * (Eq * Aq) + mq * Eq + xq * Aq - qq) * (1 / (3 * Oq * Eq + 2 * mq * Aq + xq)), Aq = Math.min(1, Math.max(0, Aq))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L154-L169` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L26) · [Before (L154-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L154-L169)

```diff
-       }
-       getPages() {
-         return this.pages
-       }
-       WZ(zz) {
-         let [, uz, bz] = zz;
-         this.pages = Xz(uz, bz), Oz.k.sK(fz, this.pages, !0)
-       }
-       openFromServer() {
-         this.openRequested = !0, this.sd()
-       }
-       sd() {
-         this.openRequested && !Mz.e.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, tz.l)() || (0, Hz.isTypingInInput)() || null !== this.placement.getView() || (0, lz.p)())
-       }
-       xZ(zz) {
-         this.reported.has(zz) || (this.reported.add(zz), this.api.sendCommand(`${nz} report ${zz}`))
+         return 3 * Math.pow(1 - Aq, 2) * Aq * gq + 3 * (1 - Aq) * Math.pow(Aq, 2) * lq + Math.pow(Aq, 3)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L195-L201` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L31) · [Before (L195-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L195-L201)

```diff
-         this.blockMetadata = zz, this.blockIdMappings = new Map, this.maxBlockId = void 0;
-         const uz = new Set(Object.keys(zz).map((uz => zz[uz].id)));
-         uz.add(0), this.maxBlockId = Math.max(...uz)
-       }
-       static
-       for (zz) {
-         return qz(zz)
+         this._radians = qq, this._radians < 0 && (this._radians += 2 * Math.PI)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L203-L206` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L33-L34) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L203-L206)

```diff
-       getBlockIdMapping(zz, uz) {
-         const bz = this.getBlockIdMappingKey(zz, uz);
-         let Ez = this.blockIdMappings.get(bz);
-         return void 0 === Ez && Gz.includes(zz) && (Ez = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, zz, uz), this.blockIdMappings.set(bz, Ez)), Ez
+       degrees() {
+         return 180 * this._radians / Math.PI
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L208-L209` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L36-L37) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L208-L209)

```diff
-       turnBlockId(zz, uz, bz) {
-         return this.mapBlockId(this.blockMetadata[zz], uz, this.getRotationMapping(uz, bz), bz)
+       radians() {
+         return this._radians
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L211-L212` → after: `L39-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L39-L42) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L211-L212)

```diff
-       getBlockIdMappingKey(zz, uz) {
-         return `r${zz}|m${Number(uz)}`
+       static BetweenTwoPoints(qq, Eq) {
+         const gq = Eq.subtract(qq),
+           Yq = Math.atan2(gq.y, gq.x);
+         return new xq(Yq)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L214-L221` → after: `L44-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L44-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L44-L51) · [Before (L214-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L214-L221)

```diff
-       createBlockIdMapping(zz, uz, bz, Ez) {
-         const nz = new Uint16Array(uz + 1),
-           iz = this.getRotationMapping(bz, Ez);
-         for (const lz in zz) {
-           const uz = zz[lz];
-           nz[uz.id] = this.mapBlockId(uz, bz, iz, Ez)
-         }
-         return nz
+       static BetweenTwoVectors(qq, Eq) {
+         let gq = qq.lengthSquared() * Eq.lengthSquared();
+         if (0 === gq) return new xq(Math.PI / 2);
+         gq = Math.sqrt(gq);
+         let Yq = qq.dot(Eq) / gq;
+         Yq = (0, lq.Clamp)(Yq, -1, 1);
+         const Oq = Math.acos(Yq);
+         return new xq(Oq)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L223-L231` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L53-L54) · [Before (L223-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L223-L231)

```diff
-       getRotationMapping(zz, uz) {
-         const bz = Math.round(zz / 90),
-           Ez = new Uint8Array(4);
-         for (let nz = 0; nz < 4; nz++) Ez[nz] = (4 + nz - bz) % 4;
-         if (uz) {
-           let zz = Ez[0];
-           Ez[0] = Ez[1], Ez[1] = zz, zz = Ez[2], Ez[2] = Ez[3], Ez[3] = zz
-         }
-         return Ez
+       static FromRadians(qq) {
+         return new xq(qq)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L233-L267` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L56-L57) · [Before (L233-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L233-L267)

```diff
-       mapBlockId(zz, uz, bz, Ez) {
-         var nz;
-         const {
-           blockMetadata: iz
-         } = this, lz = Math.round(uz / 90), {
-           id: Mz,
-           meta: tz
-         } = zz, {
-           rot: Hz,
-           rootName: Oz,
-           metaStr: pz
-         } = tz;
-         let dz;
-         const [, Fz, Zz] = null !== (nz = mz.exec(pz)) && void 0 !== nz ? nz : [];
-         if (void 0 !== Fz) {
-           var Rz, Kz;
- ... (19 more removed lines; see GitHub link above)
+       static FromDegrees(qq) {
+         return new xq(qq * Math.PI / 180)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L537-L549` → after: `L61-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L61-L71) · [Before (L537-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L537-L549)

```diff
-       constructor() {
-         this.samples = []
-       }
-       add(zz, uz) {
-         for (this.samples.push({
-             x: zz,
-             at: uz
-           }); uz - this.samples[0].at > 100;) this.samples.shift()
-       }
-       get() {
-         const zz = this.samples[0],
-           uz = this.samples[this.samples.length - 1];
-         return uz.at > zz.at ? (uz.x - zz.x) / (uz.at - zz.at) : 0
+       constructor(qq, Eq, gq) {
+         this.startPoint = qq, this.midPoint = Eq, this.endPoint = gq;
+         const Yq = Math.pow(Eq.x, 2) + Math.pow(Eq.y, 2),
+           lq = (Math.pow(qq.x, 2) + Math.pow(qq.y, 2) - Yq) / 2,
+           mq = (Yq - Math.pow(gq.x, 2) - Math.pow(gq.y, 2)) / 2,
+           Aq = (qq.x - Eq.x) * (Eq.y - gq.y) - (Eq.x - gq.x) * (qq.y - Eq.y);
+         this.centerPoint = new Oq.p((lq * (Eq.y - gq.y) - mq * (qq.y - Eq.y)) / Aq, ((qq.x - Eq.x) * mq - (Eq.x - gq.x) * lq) / Aq), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = xq.BetweenTwoPoints(this.centerPoint, this.startPoint);
+         const cq = this.startAngle.degrees();
+         let uq = xq.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
+           Bq = xq.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
+         uq - cq > 180 && (uq -= 360), uq - cq < -180 && (uq += 360), Bq - uq > 180 && (Bq -= 360), Bq - uq < -180 && (Bq += 360), this.orientation = uq - cq < 0 ? 0 : 1, this.angle = xq.FromDegrees(0 === this.orientation ? cq - Bq : Bq - cq)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L772-L894` → after: `L75-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L75-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L75-L146) · [Before (L772-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L772-L894)

```diff
-       constructor() {
-         this.step = ["none"], this.plot = ["none"]
-       }
-       getStep() {
-         return this.step
-       }
-       receiveStep(zz) {
-         this.step = zz, Oz.k.sK(Hu, zz, !0)
-       }
-       getPlot() {
-         return this.plot
-       }
-       receivePlot(zz) {
-         this.plot = zz, Oz.k.sK(Ou, zz, !0)
-       }
-     }
- ... (107 more removed lines; see GitHub link above)
+       constructor(qq, Eq) {
+         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Oq.p(qq, Eq))
+       }
+       addLineTo(qq, Eq) {
+         if (this.closed) return this;
+         const gq = new Oq.p(qq, Eq),
+           Yq = this._points[this._points.length - 1];
+         return this._points.push(gq), this._length += gq.subtract(Yq).length(), this
+       }
+       addArcTo(qq, Eq, gq, Yq) {
+         let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
+         if (this.closed) return this;
+         const mq = this._points[this._points.length - 1],
+           xq = new Oq.p(qq, Eq),
+           cq = new Oq.p(gq, Yq),
+           uq = new Aq(mq, xq, cq);
+ ... (56 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L902-L1069` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L149) · [Before (L902-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L902-L1069)

```diff
-         return {
-           kinds: bz,
-           shapes: Ez,
-           empty: nz,
-           inUse: iz,
-           ownAltActionMessage: lz,
-           placingItems: Mz
-         }
-       }(), Nu
-     }
- 
-     function xu() {
-       return Object.keys(Pz.k).filter((zz => Pz.k[zz].name === zz))
-     }
- 
-     function Ju(zz) {
- ... (152 more removed lines; see GitHub link above)
+         return Eq
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1071-L1080` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L151-L152) · [Before (L1071-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1071-L1080)

```diff
-       watch(zz) {
-         const uz = Su.e.IZ;
-         this.chunks = [];
-         for (let bz = 0; bz < zz.length; bz += 3) {
-           const Ez = Math.floor(zz[bz] / uz),
-             nz = Math.floor(zz[bz + 1] / uz),
-             iz = Math.floor(zz[bz + 2] / uz);
-           this.watches(Ez, nz, iz) || this.chunks.push(Ez, nz, iz)
-         }
-         this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
+       close() {
+         return this.closed = !0, this
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1082-L1089` → after: `L154-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L154-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L154-L158) · [Before (L1082-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1082-L1089)

```diff
-       changed() {
-         const zz = performance.now();
-         if (zz - this.lastCheckMs < 100) return !1;
-         this.lastCheckMs = zz;
-         let uz = !1;
-         for (let bz = 0; bz < this.chunks.length; bz += 3) {
-           const zz = this.api.getChunkVersion(this.chunks[bz], this.chunks[bz + 1], this.chunks[bz + 2]);
-           this.versions[bz / 3] !== zz && (this.versions[bz / 3] = zz, uz = !0)
+       length() {
+         let qq = this._length;
+         if (this.closed) {
+           const Eq = this._points[this._points.length - 1];
+           qq += this._points[0].subtract(Eq).length()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1093-L1132` → after: `L162-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L162-L166) · [Before (L1093-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1093-L1132)

```diff
-       watches(zz, uz, bz) {
-         for (let Ez = 0; Ez < this.chunks.length; Ez += 3)
-           if (this.chunks[Ez] === zz && this.chunks[Ez + 1] === uz && this.chunks[Ez + 2] === bz) return !0;
-         return !1
-       }
-     }
-     const Cu = .35,
-       Yu = {
-         size: .9,
-         alpha: .35,
-         crossed: !1
-       },
-       ku = {
-         size: 1.04,
-         alpha: .45,
-         crossed: !0
- ... (24 more removed lines; see GitHub link above)
+       area() {
+         const qq = this._points.length;
+         let Eq = 0;
+         for (let gq = qq - 1, Yq = 0; Yq < qq; gq = Yq++) Eq += this._points[gq].x * this._points[Yq].y - this._points[Yq].x * this._points[gq].y;
+         return .5 * Eq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1134-L1144` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L168-L169) · [Before (L1134-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1134-L1144)

```diff
-       show(zz) {
-         const uz = [];
-         for (const bz of zz) {
-           const zz = this.shown.findIndex((zz => {
-             let {
-               group: uz
-             } = zz;
-             return nb(uz, bz.rgb, bz.look) && ib(uz, bz)
-           })); - 1 === zz ? uz.push(this.build(bz)) : (uz.push(this.shown[zz]), this.shown.splice(zz, 1))
-         }
-         this.dispose(), this.shown = uz
+       getPoints() {
+         return this._points
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1146-L1148` → after: `L171-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L171-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L171-L183) · [Before (L1146-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1146-L1148)

```diff
-       dispose() {
-         for (const {
-             meshes: zz
+       getPointAtLengthPosition(qq) {
+         if (qq < 0 || qq > 1) return Oq.p.Zero();
+         const Eq = qq * this.length();
+         let gq = 0;
+         for (let Yq = 0; Yq < this._points.length; Yq++) {
+           const qq = (Yq + 1) % this._points.length,
+             lq = this._points[Yq],
+             mq = this._points[qq].subtract(lq),
+             xq = mq.length() + gq;
+           if (Eq >= gq && Eq <= xq) {
+             const qq = mq.normalize(),
+               Yq = Eq - gq;
+             return new Oq.p(lq.x + qq.x * Yq, lq.y + qq.y * Yq)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1150-L1230` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L185) · [Before (L1150-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1150-L1230)

```diff
-           of this.shown)
-           for (const uz of zz) this.api.disposeGameMesh(uz);
-         this.shown = []
-       }
-       build(zz) {
-         const {
-           rgb: uz,
-           look: bz,
-           boxes: Ez
-         } = zz, nz = [uz[0] + (1 - uz[0]) * Cu, uz[1] + (1 - uz[1]) * Cu, uz[2] + (1 - uz[2]) * Cu], iz = [this.buildMesh(zz.cells, uz, bz.alpha, ((zz, uz, nz, iz) => {
-           Eb(zz, uz, nz, Ez[iz], bz.size, !1)
-         })), this.buildMesh(zz.cells, nz, bz.alpha, ((zz, uz, nz, iz) => {
-           Eb(zz, uz, nz, Ez[iz], bz.size, !0)
-         }))];
-         return bz.crossed && iz.push(this.buildMesh(zz.cells, uz, .9, ((zz, uz, Ez) => {
-           (0, eu.h)(zz, uz, Ez, bz.size + .01, .12)
- ... (65 more removed lines; see GitHub link above)
+           gq = xq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1233-L1283` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L189-L190) · [Before (L1233-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1233-L1283)

```diff
-       filled(zz, uz) {
-         this.tap = null, this.turnFrom(zz, uz), this.retry(uz)
-       }
-       arrived(zz, uz) {
-         const {
-           tap: bz
-         } = this;
-         if (null === bz || uz - bz.ms > 1500) return null;
-         const Ez = (0, gu.d)(zz);
-         return (0, gu.e)(bz.next, zz) || bz.lines.some((zz => {
-           let [uz, bz] = zz;
-           return function(zz, uz, bz) {
-             const Ez = [bz[0] - uz[0], bz[1] - uz[1], bz[2] - uz[2]],
-               nz = [zz[0] - uz[0], zz[1] - uz[1], zz[2] - uz[2]],
-               iz = Ez[0] ** 2 + Ez[1] ** 2 + Ez[2] ** 2,
-               lz = 0 === iz ? 0 : Math.min(1, Math.max(0, (nz[0] * Ez[0] + nz[1] * Ez[1] + nz[2] * Ez[2]) / iz));
- ... (35 more removed lines; see GitHub link above)
+       static StartingAt(qq, Eq) {
+         return new cq(qq, Eq)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1287-L1314` → after: `L194-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L194-L199) · [Before (L1287-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1287-L1314)

```diff
-       constructor(zz, uz, bz) {
-         this.api = zz, this.localPlayerId = uz, this.juice = bz, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], th … [truncated]
-       }
-       WZ(zz) {
-         const uz = "active" === zz[0] ? `${zz[1]}|${zz[3]}|${zz[4]}|${zz[5]}|${zz[6]}` : "";
-         if ("active" !== zz[0]) "built" === zz[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
-         else {
-           const [, , , , , , , bz, Ez, nz, iz] = zz;
-           uz !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = bz) : bz === this.layerY ? this.burstUnlisted(Ez) : bz > this.layerY && this.finishLayer(bz), this.layerY = bz, this.layerCells.has(bz) || this.layerCells.set(bz, Ez.filter(Ob)), this.ghostCells = Ez, th … [truncated]
-         }
-         uz !== this.blueprint && (this.blueprint = uz, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((zz => this.api.blockNameToBlockId(zz))), this.chunkWatch.watch([...this.ghostCells.filter(Ob), . … [truncated]
-       }
-       finishLayer(zz) {
-         this.burstUnlisted([]), zz > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = zz)
-       }
-       sd() {
- ... (12 more removed lines; see GitHub link above)
+       static CreateQuadraticBezier(qq, Eq, gq, Yq) {
+         Yq = Yq > 2 ? Yq : 3;
+         const lq = [],
+           mq = (qq, Eq, gq, Yq) => (1 - qq) * (1 - qq) * Eq + 2 * qq * (1 - qq) * gq + qq * qq * Yq;
+         for (let xq = 0; xq <= Yq; xq++) lq.push(new Oq.q(mq(xq / Yq, qq.x, Eq.x, gq.x), mq(xq / Yq, qq.y, Eq.y, gq.y), mq(xq / Yq, qq.z, Eq.z, gq.z)));
+         return new uq(lq)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1316-L1318` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L201-L202) · [Before (L1316-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1316-L1318)

```diff
-       burstUnlisted(zz) {
-         const uz = new Set;
-         for (let nz = 0; nz < zz.length; nz += 4) uz.add(`${zz[nz]},${zz[nz+1]},${zz[nz+2]}`);
+       static CreateCubicBezier(qq, Eq, gq, Yq, lq) {
+         lq = lq > 3 ? lq : 4;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1320-L1327` → after: `L204-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L204-L206) · [Before (L1320-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1320-L1327)

```diff
-           {
-             ghostCells: Ez
-           } = this;
-         for (let nz = 0; nz < Ez.length; nz += 4) {
-           const zz = `${Ez[nz]},${Ez[nz+1]},${Ez[nz+2]}`;
-           !uz.has(zz) && this.open.delete(zz) && bz.push(this.filledCell(nz))
-         }
-         this.burst(bz)
+           xq = (qq, Eq, gq, Yq, lq) => (1 - qq) * (1 - qq) * (1 - qq) * Eq + 3 * qq * (1 - qq) * (1 - qq) * gq + 3 * qq * qq * (1 - qq) * Yq + qq * qq * qq * lq;
+         for (let Aq = 0; Aq <= lq; Aq++) mq.push(new Oq.q(xq(Aq / lq, qq.x, Eq.x, gq.x, Yq.x), xq(Aq / lq, qq.y, Eq.y, gq.y, Yq.y), xq(Aq / lq, qq.z, Eq.z, gq.z, Yq.z)));
+         return new uq(mq)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1329-L1344` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L208-L212) · [Before (L1329-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1329-L1344)

```diff
-       refresh() {
-         const {
-           ghostCells: zz,
-           palette: uz,
-           occupiedCells: bz
-         } = this, Ez = new ub, nz = new Set, iz = [], lz = [];
-         for (let Mz = 0; Mz < zz.length; Mz += 4) {
-           const [bz, tz, Hz, Oz] = [zz[Mz], zz[Mz + 1], zz[Mz + 2], zz[Mz + 3]], pz = this.api.getBlockId(bz, tz, Hz), dz = `${bz},${tz},${Hz}`, Fz = Au(this.blockIds[Oz], pz);
-           !Fz && Tu(pz) ? Ez.add(bz, tz, Hz, Pu(uz[Oz]), Yu, cu(uz[Oz])) : Fz ? this.open.has(dz) && iz.push(this.filledCell(Mz)) : Ez.add(bz, tz, Hz, zb, ku), !Fz && this.api.isBlockInLoadedChunk(bz, tz, Hz) && (nz.add(dz), lz.push(bz, tz, Hz, Tu(pz) ? 0 : 1))
-         }
-         this.open = nz, this.nextCells = lz;
-         for (let Mz = 0; Mz < bz.length; Mz += 3) {
-           const [zz, uz, nz] = [bz[Mz], bz[Mz + 1], bz[Mz + 2]];
-           Tu(this.api.getBlockId(zz, uz, nz)) || Ez.add(zz, uz, nz, zb, ku)
-         }
-         this.meshes.show(Ez.toArray()), this.burst(iz), this.showNext(), this.turn.retry(performance.now())
+       static CreateHermiteSpline(qq, Eq, gq, Yq, lq) {
+         const mq = [],
+           xq = 1 / lq;
+         for (let Aq = 0; Aq <= lq; Aq++) mq.push(Oq.q.Hermite(qq, Eq, gq, Yq, Aq * xq));
+         return new uq(mq)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1346-L1357` → after: `L214-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L214-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L214-L222) · [Before (L1346-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1346-L1357)

```diff
-       burst(zz) {
-         const uz = performance.now(),
-           bz = [];
-         for (const [nz, iz, lz] of zz) {
-           const zz = [nz, iz, lz];
-           this.lastSeenFilled = zz, this.foreseen.delete(zz.join()) || bz.push(zz)
-         }
-         const Ez = this.isHolding(uz);
-         for (const nz of bz) {
-           if (this.lastFilled = nz, Ez && this.pressFilled) {
-             this.turn.filled(nz, uz);
-             continue
+       static CreateCatmullRomSpline(qq, Eq, gq) {
+         const Yq = [],
+           lq = 1 / Eq;
+         let mq = 0;
+         if (gq) {
+           const gq = qq.length;
+           for (let xq = 0; xq < gq; xq++) {
+             mq = 0;
+             for (let Aq = 0; Aq < Eq; Aq++) Yq.push(Oq.q.CatmullRom(qq[xq % gq], qq[(xq + 1) % gq], qq[(xq + 2) % gq], qq[(xq + 3) % gq], mq)), mq += lq
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1359-L1362` → after: `L224-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L224-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L224-L231) · [Before (L1359-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1359-L1362)

```diff
-           const zz = this.turn.arrived(nz, uz);
-           if (null !== zz) {
-             this.pressFilled = Ez;
-             for (const [uz, bz] of this.foreseen) bz <= zz && this.foreseen.delete(uz)
+           Yq.push(Yq[0])
+         } else {
+           const gq = [];
+           gq.push(qq[0].clone()), gq.push(...qq), gq.push(qq[qq.length - 1].clone());
+           let xq = 0;
+           for (; xq < gq.length - 3; xq++) {
+             mq = 0;
+             for (let qq = 0; qq < Eq; qq++) Yq.push(Oq.q.CatmullRom(gq[xq], gq[xq + 1], gq[xq + 2], gq[xq + 3], mq)), mq += lq
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1365` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L235) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1365)

```diff
-         this.juice.filled(zz)
+         return new uq(Yq)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1367-L1405` → after: `L237-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L237-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L237-L271) · [Before (L1367-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1367-L1405)

```diff
-       showNext() {
-         var zz;
-         const uz = this.api.getPositionView(this.localPlayerId);
-         this.playerCells.splice(0, 1 / 0, ...Hb(uz));
-         const bz = this.lastFilled;
-         this.nextCell = this.pickNext(null === bz ? [uz[0], uz[1] + 1, uz[2]] : (0, gu.d)(bz), (() => !1)), this.outline.show(null !== (zz = this.aimed) && void 0 !== zz ? zz : this.nextCell)
-       }
-       pickNext(zz, uz) {
-         const bz = this.api.getPositionView(this.localPlayerId),
-           Ez = [bz[0], bz[1] + Su.e.mw * Su.e.playerEyeToHeightRatio, bz[2]],
-           nz = lb(this.api, this.localPlayerId),
-           {
-             nextCells: iz
-           } = this,
-           lz = zz => [iz[zz], iz[zz + 1], iz[zz + 2]],
-           Mz = function(zz, uz, bz, Ez, nz, iz) {
- ... (23 more removed lines; see GitHub link above)
+       static ArcThru3Points(qq, Eq, gq) {
+         let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
+           lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         const xq = [],
+           Aq = Eq.subtract(qq),
+           cq = gq.subtract(Eq),
+           Bq = qq.subtract(gq),
+           Wq = Oq.q.Cross(Aq, cq),
+           Nq = Wq.length();
+         if (Nq < Math.pow(10, -8)) return new uq(xq);
+         const aq = Aq.lengthSquared(),
+           Vq = cq.lengthSquared(),
+           dq = Bq.lengthSquared(),
+           jq = Wq.lengthSquared(),
+           Hq = .5 * Aq.length() * cq.length() * Bq.length() / Nq,
+ ... (19 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1407-L1408` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L273-L274) · [Before (L1407-L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1407-L1408)

```diff
-       isHolding(zz) {
-         return null !== this.altMs && zz - this.altMs <= 500
+       constructor(qq) {
+         this._length = 0, this._points = qq, this._length = this._computeLength(qq)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1410-L1415` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L276-L277) · [Before (L1410-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1410-L1415)

```diff
-       attemptAltAction(zz) {
-         const uz = performance.now();
-         if (this.isHolding(uz) || (this.pressFilled = !1), this.altMs = uz, this.pressFilled) return "preventPlacement";
-         const bz = this.findAimed(zz);
-         if (null !== bz) return this.foreseen.set(bz.join(), uz), this.lastFilled = bz, this.aimed = null, this.showNext(), this.turn.filled(bz, uz), this.pressFilled = !0, "preventPlacement";
-         null !== this.nextCell && this.turn.tapped(zz, this.nextCell, uz)
+       getPoints() {
+         return this._points
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1417-L1436` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L279-L280) · [Before (L1417-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1417-L1436)

```diff
-       findAimed(zz) {
-         return function(zz, uz, bz, Ez, nz, iz, lz) {
-           const Mz = zz.luz(uz),
-             tz = null === Mz || null === zz.blockNameToBlockId(Mz.name, !0) ? null : Mz.name,
-             Hz = zz.getPositionView(uz),
-             {
-               origin: Oz,
-               direction: pz
-             } = zz.getActionRay(),
-             dz = Du(Ez, {
-               from: Oz,
-               dir: pz,
-               reach: lb(zz, uz),
-               solid: bz
-             }, (uz => {
-               const bz = [Ez[uz], Ez[uz + 1], Ez[uz + 2]];
- ... (4 more removed lines; see GitHub link above)
+       length() {
+         return this._length
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1438-L1439` → after: `L282-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L282-L287) · [Before (L1438-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1438-L1439)

```diff
-       endPress() {
-         this.altMs = null, this.pressFilled = !1
+       continue (qq) {
+         const Eq = this._points[this._points.length - 1],
+           gq = this._points.slice(),
+           Yq = qq.getPoints();
+         for (let lq = 1; lq < Yq.length; lq++) gq.push(Yq[lq].subtract(Yq[0]).add(Eq));
+         return new uq(gq)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1441-L1463` → after: `L289-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L289-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L289-L291) · [Before (L1441-L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1441-L1463)

```diff
-       filledCell(zz) {
-         const {
-           ghostCells: uz
-         } = this, [bz, Ez, nz] = Pu(this.palette[uz[zz + 3]]);
-         return [uz[zz], uz[zz + 1], uz[zz + 2], bz, Ez, nz]
-       }
-     }
- 
-     function Hb(zz) {
-       let [uz, bz, Ez] = zz;
-       const nz = Su.e.Gw / 2;
-       return [Math.floor(uz), Math.floor(bz), Math.floor(Ez), Math.floor(uz - nz), Math.floor(uz + nz), Math.floor(bz + Su.e.mw), Math.floor(Ez - nz), Math.floor(Ez + nz)]
-     }
- 
-     function Ob(zz, uz) {
-       return uz % 4 !== 3
- ... (7 more removed lines; see GitHub link above)
+       _computeLength(qq) {
+         let Eq = 0;
+         for (let gq = 1; gq < qq.length; gq++) Eq += qq[gq].subtract(qq[gq - 1]).length();
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1491-L1798` → after: `L295-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L295-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L295-L303) · [Before (L1491-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1491-L1798)

```diff
- 
-     function Zb(zz, uz, bz, Ez) {
-       const {
-         eye: nz,
-         forward: iz,
-         tanHalfFovX: lz,
-         tanHalfFovY: Mz
-       } = zz, [tz, Hz] = function(zz) {
-         let [uz, bz, Ez] = zz;
-         const nz = Math.hypot(uz, Ez),
-           [iz, lz] = [Ez / nz, -uz / nz];
-         return [
-           [iz, 0, lz],
-           [bz * lz, Ez * iz - uz * lz, -bz * iz]
-         ]
-       }(iz), [Oz, pz] = [uz * lz, bz * Mz], dz = iz[0] + Oz * tz[0] + pz * Hz[0], Fz = iz[1] + pz * Hz[1], Zz = iz[2] + Oz * tz[2] + pz * Hz[2], Rz = (Ez - nz[1]) / Fz;
- ... (292 more removed lines; see GitHub link above)
+   },
+   38649: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Oq
+     });
+     var Yq = gq(38653);
+     const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
+       ...qq
+     } : null : qq.clone(Eq) : null;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1800-L1812` → after: `L305-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L305-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L305-L333) · [Before (L1800-L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L1800-L1812)

```diff
-       constructor(zz, uz) {
-         this.api = zz, this.localPlayerId = uz, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
-       }
-       filled(zz) {
-         if (this.api.particlesEnabled())
-           for (const [uz, bz, Ez, nz, iz, lz] of zz.slice(0, 3)) {
-             const zz = `${nz},${iz},${lz}`;
-             let Mz = this.chips.get(zz);
-             void 0 === Mz && (Mz = this.api.createParticles(rb(nz, iz, lz), {
-               pos: [uz + .5, bz + .5, Ez + .5]
-             }), this.chips.set(zz, Mz));
-             for (let uz = 0; uz < 8; uz++) this.setPoint(uz, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
-             Mz.emitPoints([uz + .5, bz + .5, Ez + .5], this.points, 8)
+       static DeepCopy(qq, Eq, gq, Oq) {
+         let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const xq = function(qq) {
+           const Eq = [];
+           do {
+             const gq = Object.getOwnPropertyNames(qq);
+             for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
+           } while (qq = Object.getPrototypeOf(qq));
+           return Eq
+         }(qq);
+         for (const cq of xq) {
+           if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
+           if (cq.endsWith("Observable")) continue;
+           if (gq && -1 !== gq.indexOf(cq)) continue;
+           const xq = qq[cq],
+             uq = typeof xq;
+ ... (13 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2337` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L339) · [Before (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L2337)

```diff
-   38496: (zz, uz, bz) => {
+   38653: (qq, Eq, gq) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2339-L2340` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L341) · [Before (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L2339-L2340)

```diff
-       c: () => Ez,
-       f: () => iz
+       b: () => Yq
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2347-L2379` → after: `L344-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L344-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/238.js#L344-L392) · [Before (L2347-L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/238.js#L2347-L2379)

```diff
-       constructor(zz, uz, bz) {
-         this.style = zz, this.Bp = uz, this.half = bz, this.particles = null, this.lastFrame = -1
-       }
-       emit(zz, uz, bz) {
-         let iz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
-         return bz !== this.lastFrame && (this.lastFrame = bz, this.particles || (this.particles = zz.createParticles(function(zz, uz) {
-           const [
-             [bz, iz, lz],
-             [Mz, tz, Hz]
-           ] = zz.colours;
-           return {
-             texture: zz.soft ? nz : "square_particle",
-             Bp: uz,
-             minLifeTime: zz.life[0] / Ez,
-             maxLifeTime: zz.life[1] / Ez,
-             minEmitPower: zz.power[0] * Ez,
- ... (17 more removed lines; see GitHub link above)
+       static _CheckLimit(qq, Eq) {
+         let gq = Yq._LogLimitOutputs[qq];
+         return gq ? gq.current++ : (gq = {
+           limit: Eq,
+           current: 1
+         }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
+       }
+       static _GenerateLimitMessage(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const gq = Yq._LogLimitOutputs[qq];
+         if (!gq || !Yq.MessageLimitReached) return;
+         const lq = this._Levels[Eq];
+         gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
+       }
+       static _AddLogEntry(qq) {
+         Yq._LogCache = qq + Yq._LogCache, Yq.OnNewCacheEntry && Yq.OnNewCacheEntry(qq)
+ ... (33 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/239.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/239.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034)

#### 1. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L4-L22` → after: `L4-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L4-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L491) · [Before (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L22)

```diff
-   38987: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       playDocsSound: () => Mz
-     });
-     var Ez = bz(4616),
-       nz = bz(36191),
-       iz = bz(1195);
-     const lz = new Map;
- 
-     function Mz(zz, uz, bz, Mz, tz) {
-       let Hz, Oz = null,
-         pz = 0,
-         dz = 0;
-       if (uz) Hz = new Ez.Howl({
-         src: [`${iz.clientSideServerUrls.staticUrl}/sounds/music/${zz}.mp3`],
-         html5: !0,
- ... (3 more removed lines; see GitHub link above)
+   40466: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Oq,
+       f: () => mq
+     });
+     var Yq = gq(1914);
+     let lq = !1;
+ 
+     function Oq() {
+       lq = !0
+     }
+ 
+     function mq() {
+       lq && (lq = !1, (0, Yq.d)())
+     }
+   },
+ ... (472 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L24-L74` → after: `L493-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L493-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/239.js#L493-L500) · [Before (L24-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/239.js#L24-L74)

```diff
-         Oz = (0, nz.f)(zz);
-         const uz = (0, nz.e)(Oz),
-           bz = null !== (Fz = uz.sprite[zz]) && void 0 !== Fz ? Fz : null;
-         if (!bz) throw new Error(`Docs sound ${zz} is not in sprite sheet ${Oz}`);
-         pz = bz[0] / 1e3, dz = bz[1] / 1e3, Hz = lz.get(Oz), Hz || (Hz = new Ez.Howl({
-           ...uz,
-           volume: 1
-         }), lz.set(Oz, Hz))
-       }
-       const Zz = uz ? Hz.play() : Hz.play(zz);
-       Hz.volume(bz, Zz), Mz > 0 && Hz.seek(pz + Mz, Zz);
-       const Rz = () => uz ? Hz.duration() : dz;
-       let Kz = !1;
-       const wz = zz => {
-           Kz || (Kz = !0, Hz.off("play", Xz, Zz), Hz.off("end", fz, Zz), Hz.off("loaderror", rz), Hz.off("playerror", sz, Zz), uz && Hz.unload(), tz.onEnd(zz))
-         },
- ... (35 more removed lines; see GitHub link above)
+         return null === (Eq = this.members.get(qq)) || void 0 === Eq ? void 0 : Eq.settings
+       }
+       getSetting(qq, Eq) {
+         var gq;
+         return null === (gq = this.members.get(qq)) || void 0 === gq ? void 0 : gq.settings[Eq]
+       }
+       clear() {
+         this.members.clear()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/240.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/240.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L4)

```diff
-   38992: (zz, uz, bz) => {
+   39374: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L8-L33` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L8-L21) · [Before (L8-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L8-L33)

```diff
-     bz(6189);
-     var Ez = bz(56),
-       nz = bz(38998),
-       iz = bz(39250),
-       lz = bz(39365),
-       Mz = bz(39406),
-       tz = bz(39425),
-       Hz = bz(36709),
-       Oz = bz(36514),
-       pz = bz(39582),
-       dz = bz(39624),
-       Fz = (bz(39642), bz(1212)),
-       Zz = bz(195),
-       Rz = bz(1181),
-       Kz = bz(20),
-       wz = bz(2602),
- ... (10 more removed lines; see GitHub link above)
+     const Yq = [0, 90, 180, 270],
+       lq = "plotsblueprint";
+     var Oq = gq(57),
+       mq = gq(36657),
+       xq = gq(24),
+       Aq = gq(1622),
+       cq = gq(1710),
+       uq = gq(31);
+     const Bq = [
+         ["farm_hut", "farm_house", "farm_barn"],
+         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
+         ["market_stand", "market_stall", "market_shop"],
+         ["castle_wall", "castle_gate", "castle_tower"]
+       ],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L35-L36` → after: `L23-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L23-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L23-L94) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L35-L36)

```diff
-         ArrowLeft: -1,
-         ArrowRight: 1
+         farm_hut: {
+           displayName: {
+             translationKey: "plotsGame:blueprintFarmHut"
+           },
+           tier: "small"
+         },
+         farm_house: {
+           displayName: {
+             translationKey: "plotsGame:blueprintFarmHouse"
+           },
+           tier: "medium"
+         },
+         farm_barn: {
+           displayName: {
+             translationKey: "plotsGame:blueprintFarmBarn"
+           },
+ ... (56 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L38-L66` → after: `L96-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L96-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L96-L1475) · [Before (L38-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L38-L66)

```diff
-       Lz = "ArrowUp",
-       Pz = new Set([...Object.keys(Tz), Lz, "ArrowDown"]),
-       Gz = 32,
-       az = 1,
-       Vz = 10,
-       mz = "F4",
-       qz = "Period",
-       hz = Math.PI / 2 - .001,
-       Uz = Math.PI / 6,
-       cz = Math.PI / 6,
-       gz = 1.08,
-       Sz = [{
-         name: "X",
-         direction: [1, 0, 0],
-         colour: "#e5534b"
-       }, {
- ... (13 more removed lines; see GitHub link above)
+       Nq = ["small", "medium", "large"].flatMap((qq => Bq.flat().filter((Eq => Wq[Eq].tier === qq))));
+ 
+     function aq(qq) {
+       return Wq[qq]
+     }
+     const Vq = new Map(Bq.flatMap((qq => qq.slice(1).map(((Eq, gq) => [Eq, qq[gq]])))));
+ 
+     function dq(qq) {
+       var Eq;
+       return null !== (Eq = Vq.get(qq)) && void 0 !== Eq ? Eq : null
+     }
+     const jq = {
+       farm_hut: "plotsGame:journalNoteFarmHut",
+       rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
+       castle_tower: "plotsGame:journalNoteCastleTower",
+       farm_house: "plotsGame:journalNoteFarmHouse",
+ ... (1364 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L69-L81` → after: `L1478-L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1478-L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1478-L1492) · [Before (L69-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L69-L81)

```diff
-       let {
-         heatmap: uz,
-         scale: bz,
-         fullyOpaqueFrom: az,
-         bounds: Uz,
-         fitBounds: cz,
-         schematic: gz,
-         controls: Sz,
-         onStepTime: yz,
-         onShowAllTime: Dz,
-         onTogglePlaying: Qz,
-         getReadout: ez = null
-       } = zz;
+       const Eq = new Map;
+       for (const mq of qq) {
+         var gq;
+         if (Number.isNaN(mq)) return null;
+         Eq.set(mq, (null !== (gq = Eq.get(mq)) && void 0 !== gq ? gq : 0) + 1)
+       }
+       let Yq = NaN,
+         lq = 0;
+       for (const [mq, xq] of Eq)(xq > lq || xq === lq && mq < Yq) && (Yq = mq, lq = xq);
+       let Oq = 0;
+       for (const mq of qq) Oq += Math.abs(mq - Yq);
+       return Oq
+     }
+ 
+     function ag(qq, Eq, gq, Yq) {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L83-L130` → after: `L1494-L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1494-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1494-L1513) · [Before (L83-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L83-L130)

```diff
-         t: jz
-       } = (0, Rz.F)(), {
-         clientEscMenuOptions: iu
-       } = (0, Kz.m)(["clientEscMenuOptions"]), tu = (0, Ez.useRef)(null), Hu = (0, Ez.useRef)(null), Ou = (0, Ez.useRef)(null), pu = (0, wz.e)(tu), [du, Fu] = (0, Ez.useState)(!1), [Zu, Ru] = (0, Ez.useState)(!1), [Ku, wu] = (0, Ez.useState)(!0), Xu = (0, Ez.useRef)(!1), [fu, su] … [truncated]
-       Lu[0] === Tu[0] && Lu[1] === Tu[1] && Lu[2] === Tu[2] || (Pu(Tu), null !== Ju && Au({
-         ...Ju,
-         position: lu(Ju.position, lu(Lu, Mu(Tu, -1)))
-       }));
-       const Gu = (0, Ez.useMemo)((() => function(zz) {
-           return [zz.max[0] - zz.min[0] + 1, zz.max[1] - zz.min[1] + 1, zz.max[2] - zz.min[2] + 1]
-         }(Uz)), [Uz]),
-         au = (0, Ez.useMemo)((() => function(zz, uz) {
-           const bz = [],
-             Ez = [];
-           for (const [nz, iz] of Object.entries(zz.frequencies)) {
-             const zz = Number(nz);
- ... (32 more removed lines; see GitHub link above)
+         eye: lq,
+         forward: Oq,
+         tanHalfFovX: mq,
+         tanHalfFovY: xq
+       } = qq, [Aq, cq] = function(qq) {
+         let [Eq, gq, Yq] = qq;
+         const lq = Math.hypot(Eq, Yq),
+           [Oq, mq] = [Yq / lq, -Eq / lq];
+         return [
+           [Oq, 0, mq],
+           [gq * mq, Yq * Oq - Eq * mq, -gq * Oq]
+         ]
+       }(Oq), [uq, Bq] = [Eq * mq, gq * xq], Wq = Oq[0] + uq * Aq[0] + Bq * cq[0], Nq = Oq[1] + Bq * cq[1], aq = Oq[2] + uq * Aq[2] + Bq * cq[2], Vq = (Yq - lq[1]) / Nq;
+       return Vq > 0 && Vq < 1 / 0 ? [lq[0] + Vq * Wq, lq[2] + Vq * aq] : null
+     }
+     const Vg = "plotsBlueprintPlacementChanged",
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L132-L139` → after: `L1515-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1515-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1515-L1537) · [Before (L132-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L132-L139)

```diff
-       const gu = (0, Ez.useMemo)((() => {
-           if (!ru) return null;
-           const zz = (zz, bz, Ez) => {
-               var nz, iz, lz;
-               return null !== (nz = null === (iz = uz.frequencies[zz + Tu[0]]) || void 0 === iz || null === (lz = iz[bz + Tu[1]]) || void 0 === lz ? void 0 : lz[Ez + Tu[2]]) && void 0 !== nz ? nz : 0
-             },
-             Ez = function(zz, uz, bz, Ez) {
-               let nz = 0,
+     class jg {
+       constructor(qq, Eq) {
+         this.api = qq, this.localPlayerId = Eq, this.placing = null, this.view = null, this.camera = {
+           eye: [0, 0, 0],
+           forward: [0, 0, 1],
+           tanHalfFovX: 1,
+           tanHalfFovY: 1
+         }, this.chunkWatch = void 0, this.meshes = void 0, this.start = qq => {
+           var Eq, gq, Yq, Oq;
+           const mq = null !== (Eq = null === (gq = this.placing) || void 0 === gq ? void 0 : gq.rotation) && void 0 !== Eq ? Eq : 0,
+             {
+               size: xq
+             } = Rq(qq, mq),
+             Aq = this.api.Py(this.localPlayerId),
+             [cq, uq] = null !== (Yq = null !== (Oq = function(qq, Eq, gq) {
+               const [Yq, lq, Oq] = Eq, [mq, xq, Aq] = [Math.floor(gq[0]), Math.floor(gq[1]), Math.floor(gq[2])], cq = 6 + Math.max(Yq, Oq) / 2, [uq, Bq] = [Math.ceil(cq + Yq / 2), Math.ceil(cq + Oq / 2)], [Wq, Nq] = [mq - uq, Aq - Bq], [aq, Vq] = [2 * uq + 1, 2 * Bq + 1], dq = ne … [truncated]
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L141-L144` → after: `L1539-L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1539-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1539-L1550) · [Before (L141-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L141-L144)

```diff
-               for (const pz of [0, 1, 2]) {
-                 if (0 === uz[pz]) {
-                   if (zz[pz] < 0 || zz[pz] > bz[pz]) return null;
-                   continue
+               for (let Qq = 0; Qq + Yq <= aq; Qq++)
+                 for (let qq = 0; qq + Oq <= Vq; qq++) {
+                   const [Eq, lq] = [Wq + Qq, Nq + qq], xq = Math.hypot(Eq + Yq / 2 - gq[0], lq + Oq / 2 - gq[2]);
+                   if (xq > cq || mq >= Eq - 2 && mq < Eq + Yq + 2 && Aq >= lq - 2 && Aq < lq + Oq + 2) continue;
+                   Hq.length = 0;
+                   let uq = 0;
+                   for (let gq = 0; gq < Yq; gq++)
+                     for (let Eq = 0; Eq < Oq; Eq++) Hq.push(dq[(Qq + gq) * Vq + qq + Eq]), uq += jq[(Qq + gq) * Vq + qq + Eq];
+                   const Bq = Ng(Hq);
+                   if (null === Bq) continue;
+                   const aq = xq + 3 * (Bq + uq);
+                   aq < Pq && (Pq = aq, oq = [Eq, lq])
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L146-L172` → after: `L1552-L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1552-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1552-L1594) · [Before (L146-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L146-L172)

```diff
-                 const Ez = (0 - zz[pz]) / uz[pz],
-                   lz = (bz[pz] - zz[pz]) / uz[pz];
-                 nz = Math.max(nz, Math.min(Ez, lz)), iz = Math.min(iz, Math.max(Ez, lz))
-               }
-               if (nz > iz) return null;
-               const lz = [0, 1, 2].map((Ez => Math.min(bz[Ez] - 1, Math.max(0, Math.floor(zz[Ez] + uz[Ez] * nz))))),
-                 Mz = [0, 1, 2].map((zz => Math.sign(uz[zz]))),
-                 tz = [0, 1, 2].map((bz => {
-                   if (0 === Mz[bz]) return 1 / 0;
-                   return ((Mz[bz] > 0 ? lz[bz] + 1 : lz[bz]) - zz[bz]) / uz[bz]
-                 })),
-                 Hz = [0, 1, 2].map((zz => 0 === Mz[zz] ? 1 / 0 : Math.abs(1 / uz[zz])));
-               let Oz = null;
-               for (;;) {
-                 const zz = Ez(lz[0], lz[1], lz[2]);
-                 if (zz >= 1) return lz;
- ... (11 more removed lines; see GitHub link above)
+               return oq
+             }(this.api, xq, Aq)) && void 0 !== Oq ? Oq : this.cornerOnTarget(xq)) && void 0 !== Yq ? Yq : [Math.floor(Aq[0]) + 2, Math.floor(Aq[2])];
+           this.placing = {
+             id: qq,
+             rotation: mq,
+             corner: [cq, this.playerLevel(), uq],
+             sent: null,
+             refusals: 0,
+             hover: null,
+             drag: null
+           }, this.update(), this.api.sendCommand(`${lq} preview`)
+         }, this.rotate = () => {
+           const {
+             id: qq,
+             rotation: Eq,
+             corner: gq
+ ... (27 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L174-L280` → after: `L1596-L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1596-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1596-L1679) · [Before (L174-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L174-L280)

```diff
-         }), [ru, uz, Tu, Uu, Gu, bz, az]),
-         {
-           keyHandlers: Su
-         } = (0, rz.i)({
-           isEnabled: ru,
-           claimedKeyCodes: Pz,
-           yd: zz => {
-             Au((uz => function(zz, uz) {
-               const bz = [Math.sin(zz.heading), 0, Math.cos(zz.heading)],
-                 Ez = lu(lu(Mu(bz, uz.forward), Mu(uu(zz.heading), uz.right)), [0, uz.up, 0]);
-               return {
-                 ...zz,
-                 position: lu(zz.position, Ez)
-               }
-             }(null !== uz && void 0 !== uz ? uz : cu.current.fittedView, zz)))
-           },
- ... (91 more removed lines; see GitHub link above)
+         }, this.dragTo = (qq, Eq) => {
+           const gq = this.placing.drag,
+             Yq = gq && ag(gq.view, qq, Eq, gq.level);
+           null !== gq && null !== Yq && this.moveTo(gq.corner[0] + Math.round(Yq[0] - gq.ground[0]), gq.corner[1] + Math.round(Yq[1] - gq.ground[1]))
+         }, this.endDrag = () => {
+           this.placing.drag = null
+         }, this.tap = () => {
+           const qq = this.view;
+           qq.waiting || (qq.blocked ? this.TV({
+             ...qq,
+             refusals: ++this.placing.refusals
+           }) : this.build())
+         }, this.build = () => {
+           const qq = this.placing,
+             {
+               id: Eq,
+ ... (68 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L282-L387` → after: `L1681-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1681-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1681-L1716) · [Before (L282-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L282-L387)

```diff
-       }), []), (0, Ez.useEffect)((() => {
-         const zz = Ou.current;
-         null !== zz && 0 !== pu.width && 0 !== pu.height && (zz.engine.resize(), zz.needsRender = !0)
-       }), [pu.width, pu.height]), (0, Ez.useEffect)((() => {
-         const zz = Ou.current;
-         null !== zz && (zz.targetFieldOfView = Vu * (ou ? xz : 1))
-       }), [Vu, ou]), (0, Ez.useEffect)((() => {
-         const zz = Ou.current;
-         null !== zz && function(zz, uz, bz, Ez) {
-           const nz = [],
-             iz = [],
-             lz = [],
-             Mz = [];
-           for (let tz = 0; tz < uz.count; tz++) {
-             const zz = uz.values[tz],
-               Hz = (0, sz.y)(zz, bz, Ez);
- ... (90 more removed lines; see GitHub link above)
+       }
+       moveTo(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
+         const Yq = this.placing;
+         if (Hg(Yq)) return;
+         const [lq, Oq, mq] = Yq.corner;
+         if (this.centreOnPlot(lq, mq) && !this.centreOnPlot(qq, Eq, gq))
+           if (this.centreOnPlot(qq, mq, gq)) Eq = mq;
+           else {
+             if (!this.centreOnPlot(lq, Eq, gq)) return;
+             qq = lq
+           } qq === lq && Eq === mq && gq === Yq.rotation || (Yq.rotation = gq, Yq.corner = [qq, Oq, Eq], this.update())
+       }
+       centreOnPlot(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
+         const {
+ ... (20 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L389-L425` → after: `L1718-L1812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1718-L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1718-L1812) · [Before (L389-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L389-L425)

```diff
-         }), du && (0, Nz.jsx)("div", {
-           className: "StudioHeatmap3DUnavailable SmallTextLight",
-           children: jz("3D view isn't available in this browser.")
-         }), ru && (0, Nz.jsx)("div", {
-           className: "StudioHeatmap3DCrosshair"
-         }), (0, Nz.jsx)("div", {
-           className: "StudioHeatmap3DCoordinates SmallTextLight",
-           children: Uu.position.map(((zz, uz) => (zz + Tu[uz]).toFixed(2))).join(" ")
-         }), vu && (0, Nz.jsx)(Iz, {
-           heading: Uu.heading,
-           pitch: Uu.pitch,
-           onViewFrom: zz => {
-             const uz = Mu(zz, -1),
-               bz = 0 === uz[1] ? {
-                 heading: Math.atan2(uz[0], uz[2]),
-                 pitch: 0
- ... (21 more removed lines; see GitHub link above)
+           of Rq(qq, Eq).cells) {
+           const [qq, Eq, Yq] = [gq[0] + uq[0], gq[1] + uq[1], gq[2] + uq[2]];
+           Oq.push(qq, Eq, Yq);
+           const Aq = !this.api.canModifyBlockAt(qq, Eq, Yq),
+             cq = this.api.getBlockId(qq, Eq, Yq),
+             Wq = !bE(cq) && !nE(this.api.blockNameToBlockId(Bq), cq);
+           mq ||= Aq, xq += Wq ? 1 : 0, Aq || Wq ? lq.add(qq, Eq, Yq, qg, DE) : lq.add(qq, Eq, Yq, ZE(Bq), dg, LE(Bq))
+         }
+         this.chunkWatch.watch(Oq), this.meshes.show(lq.toArray());
+         const Aq = this.view,
+           cq = Hg(this.placing);
+         (null === Aq || void 0 === Aq ? void 0 : Aq.id) === qq && Aq.blocked === mq && Aq.toClear === xq && Aq.waiting === cq && Aq.refusals === Yq || this.TV({
+           id: qq,
+           blocked: mq,
+           toClear: xq,
+           waiting: cq,
+ ... (79 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L427-L444` → after: `L1814-L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1814-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1814-L1897) · [Before (L427-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L427-L444)

```diff
-         }), null !== gu && (0, Nz.jsx)("div", {
-           className: "StudioHeatmapMapReadout SmallTextLight",
-           children: null === ez ? jz("studio:heatmapBlockReadout", {
-             x: gu.x,
-             y: gu.y,
-             z: gu.z,
-             count: (0, Fz.T)(gu.value)
-           }) : ez(gu.x, gu.y, gu.z, gu.value)
-         }), (0, Nz.jsxs)("div", {
-           className: "StudioHeatmapMapControls",
-           children: [Sz, (0, Nz.jsx)(Xz.V, {
-             active: null === Ju,
-             onClick: () => {
-               Au(null)
-             },
-             children: (0, Nz.jsx)(fz.c, {
- ... (2 more removed lines; see GitHub link above)
+       }
+       layerDone(qq) {
+         this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
+         const Eq = qq.length / 3;
+         if (0 === Eq || !this.api.particlesEnabled()) return;
+         const gq = Math.min(Eq, 48),
+           [Yq, lq, Oq] = [qq[0] + .5, qq[1] + 1, qq[2] + .5];
+         let mq = 0;
+         for (let xq = 0; xq < gq; xq++) {
+           const Aq = 3 * Math.floor(xq * Eq / gq);
+           for (let Eq = 0; Eq < 2; Eq++) this.setPoint(mq++, qq[Aq] + Math.random() - Yq, qq[Aq + 1] + 1 - lq, qq[Aq + 2] + Math.random() - Oq, .6 + .8 * Math.random())
+         }
+         this.sparkles ??= this.api.createParticles(yg, {
+           pos: [Yq, lq, Oq]
+         }), this.sparkles.emitPoints([Yq, lq, Oq], this.points, mq)
+       }
+ ... (68 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L446` → after: `L1899-L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1899-L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1899-L1906) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L446)

```diff
-         })]
+         })
+       })
+     }
+ 
+     function ig(qq) {
+       return (0, Fq.jsx)(AE.c, {
+         className: "PlotsPlacementKey",
+         ...qq
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L452-L456` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1960) · [Before (L452-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L452-L456)

```diff
-         heading: uz,
-         pitch: bz,
-         onViewFrom: nz,
-         onTurn: iz,
-         onFlip: lz
+         placement: Eq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L458-L478` → after: `L1962-L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1962-L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1962-L1974) · [Before (L458-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L458-L478)

```diff
-       const {
-         t: Mz
-       } = (0, Rz.F)(), tz = (0, Ez.useRef)(null), Hz = zu({
-         heading: uz,
-         pitch: bz
-       }), Oz = uu(uz), pz = Hu(Hz, Oz), dz = yz + Dz + 2, Fz = Sz.flatMap((zz => [1, -1].map((uz => {
-         const bz = Mu(zz.direction, uz);
-         return {
-           ...zz,
-           sign: uz,
-           direction: bz,
-           endX: dz + tu(bz, Oz) * yz,
-           endY: dz - tu(bz, pz) * yz,
-           depth: tu(bz, Hz)
-         }
-       })))).sort(((zz, uz) => uz.depth - zz.depth));
- ... (5 more removed lines; see GitHub link above)
+       return null === (0, nq.h)(Vg, Eq.getView()) ? null : (0, Fq.jsx)(zg, {
+         placement: Eq
+       })
+     }
+ 
+     function zg(qq) {
+       let {
+         placement: Eq
+       } = qq;
+       (0, fg.e)(!0, !0, "PlotsPlacementLayer");
+       const gq = (0, Oq.useMemo)((() => new Mg(Eq)), [Eq]);
+       return (0, Fq.jsx)("div", {
+         className: "PlotsPlacementLayer",
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L480-L491` → after: `L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1976) · [Before (L480-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L480-L491)

```diff
-           var uz, bz;
-           zz.currentTarget.setPointerCapture(zz.pointerId);
-           const Ez = zz.target,
-             nz = Ez.getAttribute("data-end");
-           tz.current = {
-             pointerId: zz.pointerId,
-             x: zz.clientX,
-             y: zz.clientY,
-             travel: 0,
-             side: null === nz ? null : null !== (uz = null === (bz = Fz[Number(nz)]) || void 0 === bz ? void 0 : bz.direction) && void 0 !== uz ? uz : null,
-             isOnMiddle: Ez.hasAttribute("data-middle")
-           }
+           "mouse" === qq.pointerType && 0 !== qq.button || !gq.down(Sg(qq)) || qq.currentTarget.setPointerCapture(qq.pointerId)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L494-L498` → after: `L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1979) · [Before (L494-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L494-L498)

```diff
-           const uz = tz.current;
-           if (null === uz || uz.pointerId !== zz.pointerId) return;
-           const bz = zz.clientX - uz.x,
-             Ez = zz.clientY - uz.y;
-           uz.x = zz.clientX, uz.y = zz.clientY, uz.travel += Math.abs(bz) + Math.abs(Ez), uz.travel >= ez && iz(bz, Ez)
+           gq.move(Sg(qq))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L501-L555` → after: `L1982-L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1982-L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1982-L1993) · [Before (L501-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L501-L555)

```diff
-           const uz = tz.current;
-           tz.current = null, null === uz || uz.pointerId !== zz.pointerId || uz.travel >= ez || (null !== uz.side ? nz(uz.side) : uz.isOnMiddle && lz())
-         },
-         onPointerCancel: () => {
-           tz.current = null
-         },
-         children: [Fz.map(((zz, uz) => {
-           const bz = zz.sign > 0;
-           return (0, Nz.jsxs)("g", {
-             children: [(0, Nz.jsx)("line", {
-               x1: dz,
-               y1: dz,
-               x2: zz.endX,
-               y2: zz.endY,
-               stroke: zz.colour,
-               strokeOpacity: bz ? 1 : .5,
- ... (39 more removed lines; see GitHub link above)
+           gq.up(Sg(qq))
+         },
+         onPointerCancel: qq => {
+           gq.cancel(qq.pointerId)
+         },
+         onLostPointerCapture: qq => {
+           gq.cancel(qq.pointerId)
+         },
+         onPointerLeave: qq => {
+           gq.leave(Sg(qq))
+         },
+         "aria-hidden": !0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L562-L582` → after: `L1999-L2012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L1999-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L1999-L2012) · [Before (L562-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L562-L582)

```diff
-         chunkGridOrigin: nz,
-         camera: iz
-       } = zz;
-       if (null === nz) return;
-       const lz = [iz.position.x, iz.position.y, iz.position.z],
-         Mz = [0, 2].map((zz => Math.floor((lz[zz] + nz[zz]) / Zz.e.IZ))),
-         tz = zz.chunkGridCentre;
-       if (null !== tz && tz.every(((zz, uz) => zz === Mz[uz]))) return;
-       const pz = null === (uz = null === (bz = zz.chunkGrid) || void 0 === bz ? void 0 : bz.isVisible) || void 0 === uz || uz;
-       null === (Ez = zz.chunkGrid) || void 0 === Ez || Ez.dispose();
-       const [Fz, Rz] = [0, 2].map(((zz, uz) => {
-         const bz = [];
-         for (let Ez = Mz[uz] - Vz; Ez <= Mz[uz] + Vz + 1; Ez++) bz.push(Ez * Zz.e.IZ - nz[zz]);
-         return bz
-       })), Kz = -nz[1], wz = [];
-       for (const Hz of Rz) wz.push([new Oz.ER(Fz[0], Kz, Hz), new Oz.ER(Fz[Fz.length - 1], Kz, Hz)]);
- ... (5 more removed lines; see GitHub link above)
+         left: Eq,
+         top: gq,
+         width: Yq,
+         height: lq
+       } = qq.currentTarget.getBoundingClientRect();
+       return {
+         id: qq.pointerId,
+         mouse: "mouse" === qq.pointerType,
+         x: qq.clientX,
+         y: qq.clientY,
+         ndcX: (qq.clientX - Eq) / Yq * 2 - 1,
+         ndcY: 1 - (qq.clientY - gq) / lq * 2,
+         atMs: qq.timeStamp
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L585-L593` → after: `L2024-L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2024-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2024-L2045) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L585-L593)

```diff
-     function Cz(zz, uz, bz, Ez) {
-       zz.v_("matrix", function(zz, uz) {
-         const bz = new Float32Array(16 * uz);
-         for (let Ez = 0; Ez < uz; Ez++) {
-           const uz = 16 * Ez;
-           bz[uz] = 1, bz[uz + 5] = 1, bz[uz + 10] = 1, bz[uz + 12] = zz[3 * Ez], bz[uz + 13] = zz[3 * Ez + 1], bz[uz + 14] = zz[3 * Ez + 2], bz[uz + 15] = 1
-         }
-         return bz
-       }(uz, Ez), 16, !0), zz.v_("color", bz, 4, !0), zz.isVisible = Ez > 0
+     function Rg(qq) {
+       let {
+         hud: Eq
+       } = qq;
+       const gq = (0, nq.h)(uE, Eq.getPlot()),
+         [Yq, lq] = (0, Oq.useState)(null),
+         mq = (0, Gg.j)(Yq);
+       if ("none" === gq[0]) return null;
+       const [, xq, Aq, cq, uq, Bq] = gq;
+       return (0, Fq.jsx)("div", {
+         className: yq()("PlotsPlotBannerContainer", {
+           Below: mq
+         }),
+         children: (0, Fq.jsx)(Ug, {
+           plotX: xq,
+           plotZ: Aq,
+ ... (6 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L598-L624` → after: `L2059-L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2059-L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2059-L2095) · [Before (L598-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L598-L624)

```diff
-         camera: uz,
-         translucent: bz
-       } = zz, Ez = [uz.position.x, uz.position.y, uz.position.z], nz = zz.translucentSortedFrom;
-       if (null !== nz && Math.hypot(Ez[0] - nz[0], Ez[1] - nz[1], Ez[2] - nz[2]) < az) return;
-       zz.translucentSortedFrom = Ez;
-       const iz = new Float64Array(bz.count),
-         lz = new Uint32Array(bz.count);
-       for (let Hz = 0; Hz < bz.count; Hz++) {
-         const zz = bz.fi[3 * Hz] - Ez[0],
-           uz = bz.fi[3 * Hz + 1] - Ez[1],
-           nz = bz.fi[3 * Hz + 2] - Ez[2];
-         iz[Hz] = zz * zz + uz * uz + nz * nz, lz[Hz] = Hz
-       }
-       lz.sort(((zz, uz) => iz[uz] - iz[zz]));
-       const Mz = new Float32Array(3 * bz.count),
-         tz = new Float32Array(4 * bz.count);
- ... (11 more removed lines; see GitHub link above)
+         t: cq
+       } = (0, iq.v)(), uq = (0, Lg.g)("hiddenPlayerNames"), Bq = (0, Lg.g)("players"), Wq = null === mq ? null : null !== (Eq = null === (gq = Bq.byId[mq]) || void 0 === gq ? void 0 : gq.cosmetics) && void 0 !== Eq ? Eq : null, Nq = cq("plotsGame:plotBannerCoords", {
+         x: Yq,
+         z: lq
+       }), aq = "own" === xq || null !== Oq;
+       return (0, Fq.jsxs)("div", {
+         ref: Aq,
+         className: yq()("PlotsPlotBanner", {
+           Own: "own" === xq,
+           Shared: "shared" === xq
+         }),
+         role: "status",
+         children: [(0, Fq.jsxs)("span", {
+           className: yq()("PlotsPlotBannerSeal", {
+             Face: null !== Wq
+           }),
+ ... (21 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L628` → after: `L2099-L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2099-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2099-L2122) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L628)

```diff
-       return [Math.sin(zz.heading) * Math.cos(zz.pitch), -Math.sin(zz.pitch), Math.cos(zz.heading) * Math.cos(zz.pitch)]
+       let {
+         progress: Eq,
+         goal: gq
+       } = qq;
+       const Yq = Math.min(Eq, gq);
+       return (0, Fq.jsxs)("div", {
+         className: "PlotsProgress",
+         children: [(0, Fq.jsx)("div", {
+           className: "PlotsProgressBar",
+           role: "progressbar",
+           "aria-valuemin": 0,
+           "aria-valuemax": gq,
+           "aria-valuenow": Yq,
+           children: (0, Fq.jsx)("div", {
+             className: "PlotsProgressBarFill",
+             style: {
+ ... (8 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L655-L657` → after: `L2127-L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2127-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2127-L2128) · [Before (L655-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L655-L657)

```diff
-         position: lu([zz.min[0] + nz[0] / 2, zz.min[1] + nz[1] / 2, zz.min[2] + nz[2] / 2], Mu(iz, -Oz * gz)),
-         heading: Ez.heading,
-         pitch: Ez.pitch
+         translationKey: `plotsGame:${qq}`,
+         actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L662-L669` → after: `L2177-L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2177-L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2177-L2187) · [Before (L662-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L662-L669)

```diff
-       const Ez = iu(zz),
-         nz = iu(bz),
-         iz = lu(zz.position, Mu(uz, -1)),
-         lz = [0, 1, 2].reduce(((zz, uz) => lu(zz, Mu(nz[uz], tu(iz, Ez[uz])))), [0, 0, 0]);
-       return {
-         position: lu(uz, lz),
-         heading: bz.heading,
-         pitch: bz.pitch
+       const {
+         translationKey: Yq,
+         actions: lq
+       } = gq ? Eq.touch : Eq.desktop;
+       if (0 === lq.length) return qq(Yq);
+       const Oq = [];
+       for (const mq of lq) {
+         const Yq = (0, rg.s)(mq, gq),
+           lq = rg.u[mq][0];
+         if (null === Yq && void 0 === lq) return qq(Eq.plainKey);
+         Oq.push(null === Yq ? (0, rg.l)(lq) : qq(Yq.translationKey))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L674` → after: `L2195-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2195-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2195-L2215) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L674)

```diff
-       return Mu(lu(zz.min, zz.max), .5)
+       let {
+         hud: Eq
+       } = qq;
+       const gq = (0, nq.h)(cE, Eq.getStep()),
+         {
+           t: Yq
+         } = (0, iq.v)();
+       return (0, Fq.jsxs)(mE.g, {
+         placement: "bottom",
+         children: ["step" === gq[0] && (0, Fq.jsx)(Cg, {
+           step: gq[1],
+           progress: gq[2],
+           goal: gq[3]
+         }, gq[1]), "celebrate" === gq[0] && (0, Fq.jsx)(Ig, {
+           className: yq()("Celebrate", {
+             Gold: "house" === gq[1]
+ ... (5 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L678-L680` → after: `L2219-L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2219-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2219-L2239) · [Before (L678-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L678-L680)

```diff
-       const uz = zu(zz),
-         bz = uu(zz.heading);
-       return [uz, bz, Hu(uz, bz)]
+       let {
+         step: Eq,
+         progress: gq,
+         goal: Yq
+       } = qq;
+       const {
+         isTouchScreen: lq
+       } = (0, xq.j)(["isTouchScreen"]), {
+         t: Oq
+       } = (0, iq.v)(), mq = Xg[Eq];
+       return (0, Fq.jsxs)(Ig, {
+         icon: mq.icon,
+         title: Oq(mq.titleKey),
+         children: [(0, Fq.jsx)("div", {
+           className: "PlotsStepCardHint SmallTextLight",
+           children: wg(Oq, mq, lq)
+ ... (5 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L683-L684` → after: `L2242-L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2242-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2242-L2264) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L683-L684)

```diff
-     function lu(zz, uz) {
-       return [zz[0] + uz[0], zz[1] + uz[1], zz[2] + uz[2]]
+     function Ig(qq) {
+       let {
+         className: Eq,
+         icon: gq,
+         title: Yq,
+         children: lq
+       } = qq;
+       return (0, Fq.jsxs)("div", {
+         className: yq()("PlotsStepCard", Eq),
+         role: "status",
+         children: [(0, Fq.jsx)("span", {
+           className: "PlotsStepCardIcon",
+           children: (0, Fq.jsx)(tq.d, {
+             name: gq
+           })
+         }), (0, Fq.jsxs)("div", {
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L687-L688` → after: `L2267-L2274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2267-L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2267-L2274) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L687-L688)

```diff
-     function Mu(zz, uz) {
-       return [zz[0] * uz, zz[1] * uz, zz[2] * uz]
+     function eg() {
+       return (0, Oq.useEffect)((() => (xq.b.set({
+         backpackPointerRequested: !0
+       }), () => {
+         xq.b.set({
+           backpackPointerRequested: !1
+         })
+       })), []), null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L690-L692` → after: `L2276-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2276-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2276-L2334) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L690-L692)

```diff
- 
-     function tu(zz, uz) {
-       return zz[0] * uz[0] + zz[1] * uz[1] + zz[2] * uz[2]
+     const Dg = function(qq, Eq, gq, Yq) {
+       let {
+         localPlayerId: lq
+       } = Yq;
+       const xq = new BE;
+       let Aq = null,
+         cq = null,
+         uq = null,
+         Bq = null,
+         Wq = null;
+       const Nq = [];
+       return {
+         onCreate: qq => {
+           Aq = new tg(qq, lq), cq = new Ag(qq, lq, Aq), uq = new Ag(qq, lq, Aq), Bq = new jg(qq, lq), Wq = new Pq(qq, Bq), Nq.push((0, mq.r)((0, Oq.createElement)(Oq.Fragment, null, (0, Oq.createElement)(Rg, {
+             hud: xq
+           }), (0, Oq.createElement)(Kg, {
+ ... (43 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L694-L696` → after: `L2336-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2336-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/240.js#L2336-L2389) · [Before (L694-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/240.js#L694-L696)

```diff
- 
-     function Hu(zz, uz) {
-       return [zz[1] * uz[2] - zz[2] * uz[1], zz[2] * uz[0] - zz[0] * uz[2], zz[0] * uz[1] - zz[1] * uz[0]]
+   },
+   39098: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq,
+       f: () => Oq
+     });
+     const Yq = 1 / .6,
+       lq = {
+         kind: "smokePuff"
+       };
+     class Oq {
+       constructor(qq, Eq, gq) {
+         this.style = qq, this.WB = Eq, this.half = gq, this.particles = null, this.lastFrame = -1
+       }
+       emit(qq, Eq, gq) {
+         let Oq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
+ ... (38 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/241.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/241.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774)

#### 1. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/241.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/241.js#L4-L7)

```diff
-   39376: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Kz,
-       g: () => fz
+   39569: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       playDocsSound: () => xq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L9-L636` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/241.js#L8-L11) · [Before (L9-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/241.js#L9-L636)

```diff
-     var Ez = bz(39170),
-       nz = bz(39172),
-       iz = bz(39267),
-       lz = bz(36547),
-       Mz = bz(36519),
-       tz = bz(39384),
-       Hz = bz(38060),
-       Oz = bz(36564),
-       pz = bz(39061),
-       dz = bz(37519),
-       Fz = bz(37235),
-       Zz = bz(39145),
-       Rz = bz(39182);
-     let Kz = (() => {
-       var zz;
-       let uz, bz, Oz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz, Gz = tz.c,
- ... (612 more removed lines; see GitHub link above)
+     var Yq = gq(4684),
+       lq = gq(36796),
+       Oq = gq(1195);
+     const mq = new Map;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L638-L858` → after: `L13-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L13-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/241.js#L13-L22) · [Before (L638-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/241.js#L638-L858)

```diff
-     function fz() {
-       Xz || (Xz = !0, Kz.Parse = wz)
-     }
-   },
-   39393: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => nz
-     });
-     var Ez = bz(36519);
-     class nz {
-       constructor(zz, uz, bz) {
-         this._cameraPosition = uz, this._behavior = bz, this.activeInput = !1, this.speed = 1, this.Qy = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
-       }
-       computeCurrentFrameDeltas() {
-         const zz = this._scene.uR().getDeltaTime(),
-           uz = this._getEffectiveDeltaMs(zz);
- ... (205 more removed lines; see GitHub link above)
+     function xq(qq, Eq, gq, xq, Aq) {
+       let cq, uq = null,
+         Bq = 0,
+         Wq = 0;
+       if (Eq) cq = new Yq.Howl({
+         src: [`${Oq.clientSideServerUrls.staticUrl}/sounds/music/${qq}.mp3`],
+         html5: !0,
+         volume: gq
+       });
+       else {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L860-L1384` → after: `L24-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L24-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/241.js#L24-L38) · [Before (L860-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/241.js#L860-L1384)

```diff
-         let uz, bz, Hz, Oz, pz = iz.d,
-           Rz = [],
-           Kz = [],
-           wz = [],
-           Xz = [],
-           fz = [],
-           sz = [],
-           rz = [],
-           oz = [];
-         return zz = class extends pz {
-           get inertia() {
-             return this._targetInertia
-           }
-           set inertia(zz) {
-             this._targetInertia = zz, this.movement && (this.movement.panInertia = zz, this.movement.rotationInertia = zz)
-           }
- ... (509 more removed lines; see GitHub link above)
+         uq = (0, lq.k)(qq);
+         const Eq = (0, lq.g)(uq),
+           gq = null !== (Nq = Eq.sprite[qq]) && void 0 !== Nq ? Nq : null;
+         if (!gq) throw new Error(`Docs sound ${qq} is not in sprite sheet ${uq}`);
+         Bq = gq[0] / 1e3, Wq = gq[1] / 1e3, cq = mq.get(uq), cq || (cq = new Yq.Howl({
+           ...Eq,
+           volume: 1
+         }), mq.set(uq, cq))
+       }
+       const aq = Eq ? cq.play() : cq.play(qq);
+       cq.volume(gq, aq), xq > 0 && cq.seek(Bq + xq, aq);
+       const Vq = () => Eq ? cq.duration() : Wq;
+       let dq = !1;
+       const jq = qq => {
+           dq || (dq = !0, cq.off("play", Hq, aq), cq.off("end", oq, aq), cq.off("loaderror", Qq), cq.off("playerror", Pq, aq), Eq && cq.unload(), Aq.onEnd(qq))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L1386-L1564` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/241.js#L40-L41) · [Before (L1386-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/241.js#L1386-L1564)

```diff
-         enumerable: !1,
-         configurable: !0
-       })
-     }();
-     var lz = bz(39011),
-       Mz = bz(38060),
-       tz = bz(39118);
-     let Hz = !1;
-     ! function() {
-       function zz(zz, uz, bz, Ez) {
-         let nz, iz = 1;
-         1 === Ez ? nz = new Float32Array(uz * bz * 4) : 2 === Ez ? (nz = new Uint16Array(uz * bz * 4), iz = 15360) : nz = 7 === Ez ? new Uint32Array(uz * bz * 4) : new Uint8Array(uz * bz * 4);
-         for (let lz = 0; lz < uz; lz++)
-           for (let Ez = 0; Ez < bz; Ez++) {
-             const bz = 3 * (Ez * uz + lz),
-               Mz = 4 * (Ez * uz + lz);
- ... (163 more removed lines; see GitHub link above)
+         Hq = () => {
+           Aq.onPlay(Vq())
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L1566-L1937` → after: `L43-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L43-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/241.js#L43-L50) · [Before (L1566-L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/241.js#L1566-L1937)

```diff
-         nz = this._gl;
-       this._bindTextureDirectly(nz.TEXTURE_CUBE_MAP, bz, !0), this._setupDepthStencilTexture(bz, zz, Ez.bilinearFiltering, Ez.comparisonFunction);
-       for (let iz = 0; iz < 6; iz++) Ez.generateStencil ? nz.texImage2D(nz.TEXTURE_CUBE_MAP_POSITIVE_X + iz, 0, nz.DEPTH24_STENCIL8, zz, zz, 0, nz.DEPTH_STENCIL, nz.UNSIGNED_INT_24_8, null) : nz.texImage2D(nz.TEXTURE_CUBE_MAP_POSITIVE_X + iz, 0, nz.DEPTH_COMPONENT24, zz, zz, 0, n … [truncated]
-       return this._bindTextureDirectly(nz.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(bz), bz
-     }, nz.ThinEngine.prototype._setCubeMapTextureParams = function(zz, uz, bz) {
-       const Ez = this._gl;
-       Ez.texParameteri(Ez.TEXTURE_CUBE_MAP, Ez.TEXTURE_MAG_FILTER, Ez.LINEAR), Ez.texParameteri(Ez.TEXTURE_CUBE_MAP, Ez.TEXTURE_MIN_FILTER, uz ? Ez.LINEAR_MIPMAP_LINEAR : Ez.LINEAR), Ez.texParameteri(Ez.TEXTURE_CUBE_MAP, Ez.TEXTURE_WRAP_S, Ez.CLAMP_TO_EDGE), Ez.texParameteri(Ez.T … [truncated]
-     }, nz.ThinEngine.prototype.createCubeTexture = function(zz, uz, bz, Ez) {
-       let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-         iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         lz = arguments.length > 6 ? arguments[6] : void 0,
-         Hz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-         Oz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         pz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-         dz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
-         Fz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
- ... (356 more removed lines; see GitHub link above)
+         oq = () => {
+           jq(!1)
+         },
+         Pq = (Eq, gq) => {
+           console.error(`Could not play docs sound ${qq}`, gq), jq(!0)
+         },
+         Qq = (qq, Eq) => {
+           null !== uq && mq.get(uq) === cq && (mq.delete(uq), cq.unload()), Pq(qq, Eq)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L1939-L2221` → after: `L52-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L52-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/241.js#L52-L73) · [Before (L1939-L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/241.js#L1939-L2221)

```diff
-         return Rz(lz) ? lz : null
-       }(zz);
-       if (uz) return uz;
-       const bz = function(zz) {
-         let uz = null;
-         try {
-           "undefined" !== typeof OffscreenCanvas ? uz = new OffscreenCanvas(64, 64) : (0, Fz.e)() && "function" === typeof document.createElement && (uz = document.createElement("canvas"), uz.width = 64, uz.height = 64);
-           const bz = uz?.getContext("2d");
-           if (!bz) return null;
-           bz.font = zz;
-           const Ez = bz.measureText("Hg"),
-             nz = Number(Ez.actualBoundingBoxAscent ?? Ez.fontBoundingBoxAscent),
-             iz = Number(Ez.actualBoundingBoxDescent ?? Ez.fontBoundingBoxDescent),
-             lz = {
-               ascent: nz,
-               height: nz + iz,
- ... (267 more removed lines; see GitHub link above)
+       return cq.on("play", Hq, aq), cq.once("end", oq, aq), cq.once("loaderror", Qq), cq.once("playerror", Pq, aq), {
+         pause: () => {
+           cq.pause(aq)
+         },
+         resume: () => {
+           cq.play(aq)
+         },
+         seek: qq => {
+           const Eq = Vq(),
+             gq = Math.max(qq, 0);
+           cq.seek(Bq + (Eq > 0 ? Math.min(gq, Eq) : gq), aq)
+         },
+         Py: () => {
+           const qq = cq.seek(aq);
+           return "number" === typeof qq ? Math.max(0, qq - Bq) : 0
+         },
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/242.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/242.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L56` → after: `L4-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L249) · [Before (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L56)

```diff
-   39299: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Mz,
-       f: () => Rz,
-       h: () => Hz,
-       j: () => tz
-     });
-     var Ez = bz(39115),
-       nz = bz(38060),
-       iz = bz(39226),
-       lz = bz(39155);
-     class Mz {
-       get Uuz() {
-         return this._isDisposed
-       }
-       constructor(zz, uz, bz) {
- ... (37 more removed lines; see GitHub link above)
+   39578: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => wq
+     });
+     gq(6328);
+     var Yq = gq(57),
+       lq = gq(39585),
+       Oq = gq(39833),
+       mq = gq(39941),
+       xq = gq(39988),
+       Aq = gq(40003),
+       cq = gq(37286),
+       uq = gq(37131),
+       Bq = gq(40155),
+       Wq = gq(40205),
+       Nq = (gq(40236), gq(1214)),
+ ... (230 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L58-L119` → after: `L251-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L251-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L251-L255) · [Before (L58-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L58-L119)

```diff
-       }
-       update(zz) {
-         this.create(zz)
-       }
-       updateDirectly(zz, uz, bz) {
-         let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, zz, Ez ? uz : uz * Float32Array.BYTES_PER_ELEMENT, bz ? bz * this.byteStride : void 0), this._data = 0 === uz && void 0 === bz ? zz : null)
-       }
-       _increaseReferences() {
-         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
-       }
-       dispose() {
-         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
-       }
-     }
-     class tz {
- ... (46 more removed lines; see GitHub link above)
+         return uE.current = Eq, Eq.engine.runRenderLoop((() => {
+           const qq = Eq.camera;
+           qq.fov !== Eq.targetFieldOfView && (qq.fov += (Eq.targetFieldOfView - qq.fov) * (qq.fov > Eq.targetFieldOfView ? .3 : .2), Math.abs(Eq.targetFieldOfView - qq.fov) < 5e-4 && (qq.fov = Eq.targetFieldOfView), Eq.needsRender = !0), Eq.needsRender && (Eq.PV.render(), Eq.need … [truncated]
+         })), () => {
+           uE.current = null, Eq.engine.dispose()
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L121-L180` → after: `L257-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L257-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L257-L447) · [Before (L121-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L121-L180)

```diff
-       }
-       _computeHashCode() {
-         this.hashCode = (tz._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
-       }
-       _rebuild() {
-         this._buffer?._rebuild()
-       }
-       getKind() {
-         return this._kind
-       }
-       isUpdatable() {
-         return this._buffer.isUpdatable()
-       }
-       getData() {
-         return this._buffer.getData()
-       }
- ... (44 more removed lines; see GitHub link above)
+       }), []), (0, Yq.useEffect)((() => {
+         const qq = cE.current;
+         if (!qq) return;
+         const Eq = () => {
+             HE.current = !1, VE(document.pointerLockElement === qq)
+           },
+           gq = () => {
+             HE.current && (HE.current = !1, jE(!1))
+           },
+           Yq = Eq => {
+             const gq = !LE.current.canLock && document.activeElement === qq && 0 !== (1 & Eq.buttons);
+             if (document.pointerLockElement !== qq && !gq) return;
+             const Yq = LE.current.mouseSensitivity * hq;
+             nE((qq => function(qq, Eq, gq) {
+               const Yq = 2 * Math.PI;
+               return {
+ ... (175 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L184-L205` → after: `L451-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L451-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L451-L556) · [Before (L184-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L184-L205)

```diff
-       switch (zz) {
-         case tz.UVKind:
-         case tz.UV2Kind:
-         case tz.UV3Kind:
-         case tz.UV4Kind:
-         case tz.UV5Kind:
-         case tz.UV6Kind:
-           return 2;
-         case tz.NormalKind:
-         case tz.PositionKind:
-           return 3;
-         case tz.ColorKind:
-         case tz.ColorInstanceKind:
-         case tz.MatricesIndicesKind:
-         case tz.MatricesIndicesExtraKind:
-         case tz.MatricesWeightsKind:
- ... (6 more removed lines; see GitHub link above)
+       let {
+         heading: Eq,
+         pitch: gq,
+         onViewFrom: lq,
+         onTurn: Oq,
+         onFlip: mq
+       } = qq;
+       const {
+         t: xq
+       } = (0, Vq.v)(), Aq = (0, Yq.useRef)(null), cq = qE({
+         heading: Eq,
+         pitch: gq
+       }), uq = EE(Eq), Bq = cE(cq, uq), Wq = Rq + Uq + 2, Nq = kq.flatMap((qq => [1, -1].map((Eq => {
+         const gq = xE(qq.direction, Eq);
+         return {
+           ...qq,
+ ... (90 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L209` → after: `L560-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L560-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L560-L593) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L209)

```diff
-       return zz instanceof Int8Array ? tz.BYTE : zz instanceof Uint8Array ? tz.UNSIGNED_BYTE : zz instanceof Int16Array ? tz.SHORT : zz instanceof Uint16Array ? tz.UNSIGNED_SHORT : zz instanceof Int32Array ? tz.INT : zz instanceof Uint32Array ? tz.UNSIGNED_INT : tz.FLOAT
+       var Eq, gq, Yq;
+       const {
+         chunkGridOrigin: lq,
+         camera: Oq
+       } = qq;
+       if (null === lq) return;
+       const mq = [Oq.position.x, Oq.position.y, Oq.position.z],
+         xq = [0, 2].map((qq => Math.floor((mq[qq] + lq[qq]) / aq.c.Oa))),
+         Aq = qq.chunkGridCentre;
+       if (null !== Aq && Aq.every(((qq, Eq) => qq === xq[Eq]))) return;
+       const Bq = null === (Eq = null === (gq = qq.chunkGrid) || void 0 === gq ? void 0 : gq.isVisible) || void 0 === Eq || Eq;
+       null === (Yq = qq.chunkGrid) || void 0 === Yq || Yq.dispose();
+       const [Nq, Vq] = [0, 2].map(((qq, Eq) => {
+         const gq = [];
+         for (let Yq = xq[Eq] - Tq; Yq <= xq[Eq] + Tq + 1; Yq++) gq.push(Yq * aq.c.Oa - lq[qq]);
+         return gq
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L213` → after: `L597-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L597-L616) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L213)

```diff
-       return (0, iz.t)(zz)
+       const {
+         camera: Eq,
+         translucent: gq
+       } = qq, Yq = [Eq.position.x, Eq.position.y, Eq.position.z], lq = qq.translucentSortedFrom;
+       if (null !== lq && Math.hypot(Yq[0] - lq[0], Yq[1] - lq[1], Yq[2] - lq[2]) < Mq) return;
+       qq.translucentSortedFrom = Yq;
+       const Oq = new Float64Array(gq.count),
+         mq = new Uint32Array(gq.count);
+       for (let cq = 0; cq < gq.count; cq++) {
+         const qq = gq.bu[3 * cq] - Yq[0],
+           Eq = gq.bu[3 * cq + 1] - Yq[1],
+           lq = gq.bu[3 * cq + 2] - Yq[2];
+         Oq[cq] = qq * qq + Eq * Eq + lq * lq, mq[cq] = cq
+       }
+       mq.sort(((qq, Eq) => Oq[Eq] - Oq[qq]));
+       const xq = new Float32Array(3 * gq.count),
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L216-L219` → after: `L619-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L619-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L619-L624) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L216-L219)

```diff
-     function dz(zz, uz, bz, Ez, nz, lz, Mz, tz) {
-       (0, iz.k)(zz, uz, bz, Ez, nz, lz, Mz, ((zz, uz) => {
-         for (let bz = 0; bz < Ez; bz++) tz(zz[bz], uz + bz)
-       }))
+     function Dq(qq, Eq) {
+       const gq = (gq, Yq, lq) => new uq.Na(0 === gq ? qq[0] : Eq[0], 0 === Yq ? qq[1] : Eq[1], 0 === lq ? qq[2] : Eq[2]),
+         Yq = [];
+       for (const lq of [0, 1])
+         for (const qq of [0, 1]) Yq.push([gq(0, lq, qq), gq(1, lq, qq)], [gq(lq, 0, qq), gq(lq, 1, qq)], [gq(lq, qq, 0), gq(lq, qq, 1)]);
+       return Yq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L222-L223` → after: `L627-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L627-L628) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L222-L223)

```diff
-     function Fz(zz, uz, bz, Ez, nz, lz, Mz, tz) {
-       return (0, iz.p)(zz, uz, bz, Ez, nz, lz, Mz, tz)
+     function qE(qq) {
+       return [Math.sin(qq.heading) * Math.cos(qq.pitch), -Math.sin(qq.pitch), Math.cos(qq.heading) * Math.cos(qq.pitch)]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L228-L229` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L631-L632) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L228-L229)

```diff
-     function Rz() {
-       Zz || (Zz = !0, tz.DeduceStride = Hz, tz.GetDataType = Oz, tz.GetTypeByteLength = pz, tz.ForEach = dz, tz.GetFloatData = Fz)
+     function EE(qq) {
+       return [Math.cos(qq), 0, -Math.sin(qq)]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L231-L241` → after: `L634-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L634-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L634-L657) · [Before (L231-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L231-L241)

```diff
-   },
-   39115: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Ez
-     });
-     class Ez {
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.Bp = 0, this.is32Bits = !1, this.uniqueId = Ez._Counter++
+ 
+     function gE(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+         heading: Gq,
+         pitch: Lq
+       };
+       const lq = [qq.max[0] - qq.min[0], qq.max[1] - qq.min[1], qq.max[2] - qq.min[2]],
+         Oq = qE(Yq),
+         mq = EE(Yq.heading),
+         xq = cE(Oq, mq),
+         Aq = Math.tan(gq / 2),
+         cq = Aq * Eq;
+       let uq = 1;
+       for (const Bq of [-lq[0] / 2, lq[0] / 2])
+         for (const qq of [-lq[1] / 2, lq[1] / 2])
+           for (const Eq of [-lq[2] / 2, lq[2] / 2]) {
+ ... (8 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L244-L308` → after: `L660-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L660-L669) · [Before (L244-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L244-L308)

```diff
-     Ez._Counter = 0
-   },
-   39296: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => iz
-     });
-     var Ez = bz(36519),
-       nz = bz(39299);
-     class iz {
-       constructor() {
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
-       }
-       getNormal() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || uz && !this.pickedMesh.isVerticesDataPresent(nz.j.NormalKind)) return null;
- ... (49 more removed lines; see GitHub link above)
+ 
+     function YE(qq, Eq, gq) {
+       const Yq = OE(qq),
+         lq = OE(gq),
+         Oq = mE(qq.position, xE(Eq, -1)),
+         mq = [0, 1, 2].reduce(((qq, Eq) => mE(qq, xE(lq[Eq], AE(Oq, Yq[Eq])))), [0, 0, 0]);
+       return {
+         position: mE(Eq, mq),
+         heading: gq.heading,
+         pitch: gq.pitch
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L319-L366` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L673-L674) · [Before (L319-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L319-L366)

```diff
-     function iz() {
-       nz || (nz = !0, Ez.ThinEngine.prototype.updateDynamicIndexBuffer = function(zz, uz) {
-         let bz;
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(zz), bz = zz.is32Bits ? uz instanceof Uint32Array ? uz : new Uint32Array(uz) : uz instanceof Uint16Array ? uz : new Uint16Array(uz), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, bz, … [truncated]
-       }, Ez.ThinEngine.prototype.updateDynamicVertexBuffer = function(zz, uz, bz, Ez) {
-         this.bindArrayBuffer(zz), void 0 === bz && (bz = 0);
-         const nz = uz.byteLength || uz.length;
-         void 0 === Ez || Ez >= nz && 0 === bz ? uz instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, bz, new Float32Array(uz)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, bz, uz) : uz instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, bz, new Floa … [truncated]
-       })
-     }
-   },
-   39125: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Ez
-     });
-     class Ez {
- ... (32 more removed lines; see GitHub link above)
+     function lE(qq) {
+       return xE(mE(qq.min, qq.max), .5)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L368-L440` → after: `L676-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L676-L680) · [Before (L368-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L368-L440)

```diff
-   },
-   39079: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => Xz
-     });
-     var Ez = bz(36547),
-       nz = bz(39024),
-       iz = bz(36543),
-       lz = bz(38060),
-       Mz = bz(36537),
-       tz = bz(39085);
-     class Hz {
-       constructor() {
-         let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, zz && this.reset()
-       }
- ... (57 more removed lines; see GitHub link above)
+ 
+     function OE(qq) {
+       const Eq = qE(qq),
+         gq = EE(qq.heading);
+       return [Eq, gq, cE(Eq, gq)]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L442-L529` → after: `L682-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L682-L684) · [Before (L442-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L442-L529)

```diff
-     class Oz {
-       get isDirty() {
-         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
-       }
-       get func() {
-         return this._func
-       }
-       set func(zz) {
-         this._func !== zz && (this._func = zz, this._isStencilFuncDirty = !0)
-       }
-       get backFunc() {
-         return this._func
-       }
-       set backFunc(zz) {
-         this._backFunc !== zz && (this._backFunc = zz, this._isStencilFuncDirty = !0)
-       }
- ... (72 more removed lines; see GitHub link above)
+ 
+     function mE(qq, Eq) {
+       return [qq[0] + Eq[0], qq[1] + Eq[1], qq[2] + Eq[2]]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L531-L609` → after: `L686-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L686-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L686-L688) · [Before (L531-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L531-L609)

```diff
-     class pz {
-       constructor() {
-         this.reset()
-       }
-       reset() {
-         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = pz.ALWAYS, this.opStencilFail = pz.KEEP, this.opDepthFail = pz.KEEP, this.opStencilDepthPass = pz.REPLACE, this.backFunc = pz.ALWAYS, this.backOpStencilFail = pz.KEEP, this.backOpDepthF … [truncated]
-       }
-       get stencilFunc() {
-         return this.func
-       }
-       set stencilFunc(zz) {
-         this.func = zz
-       }
-       get stencilBackFunc() {
-         return this.backFunc
-       }
- ... (63 more removed lines; see GitHub link above)
+ 
+     function xE(qq, Eq) {
+       return [qq[0] * Eq, qq[1] * Eq, qq[2] * Eq]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L619-L1480` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L692) · [Before (L619-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L619-L1480)

```diff
-       if (uz) {
-         const {
-           requestAnimationFrame: bz
-         } = uz;
-         if ("function" === typeof bz) return bz(zz)
-       }
-       if ((0, Rz.i)()) {
-         const {
-           requestAnimationFrame: bz
-         } = uz || window;
-         if ("function" === typeof bz) return bz(zz)
-       } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(zz);
-       return setTimeout(zz, 16)
-     }
-     class Xz {
-       get frameId() {
- ... (846 more removed lines; see GitHub link above)
+       return qq[0] * Eq[0] + qq[1] * Eq[1] + qq[2] * Eq[2]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1484-L9628` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/242.js#L696) · [Before (L1484-L9628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/242.js#L1484-L9628)

```diff
-       const bz = zz;
-       if (!bz.isParallelCompiled) return void uz(zz);
-       const Ez = bz.onCompiled;
-       bz.onCompiled = () => {
-         Ez?.(), uz(zz)
-       }
-     }
-   },
-   39022: (zz, uz, bz) => {
-     bz.d(uz, {
-       ThinEngine: () => rz
-     });
-     var Ez = bz(39024),
-       nz = bz(39049),
-       iz = bz(39079),
-       lz = bz(39103),
- ... (8129 more removed lines; see GitHub link above)
+       return [qq[1] * Eq[2] - qq[2] * Eq[1], qq[2] * Eq[0] - qq[0] * Eq[2], qq[0] * Eq[1] - qq[1] * Eq[0]]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/243.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/243.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/243.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/243.js#L2)

```diff
- export const ids = [243, 345];
+ export const ids = [243];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L4-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/243.js#L4-L642) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/243.js#L4)

```diff
-   39033: (zz, uz, bz) => {
+   39951: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => dq,
+       i: () => oq
+     });
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(39858),
+       mq = gq(37156),
+       xq = gq(37139),
+       Aq = gq(39960),
+       cq = gq(38653),
+       uq = gq(37171),
+       Bq = gq(39636),
+       Wq = gq(38065),
+       Nq = gq(37758),
+ ... (623 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L9-L10` → after: `L648-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L648-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/243.js#L648-L656) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/243.js#L9-L10)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.ShadersRepository : Ez.ShadersRepositoryWGSL
+       constructor(qq, Eq, gq) {
+         this._cameraPosition = Eq, this._behavior = gq, this.activeInput = !1, this.speed = 1, this.RC = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
+       }
+       computeCurrentFrameDeltas() {
+         const qq = this._scene.Ba().getDeltaTime(),
+           Eq = this._getEffectiveDeltaMs(qq);
+         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
+         this.panDeltaCurrentFrame.A4(0), this.rotationDeltaCurrentFrame.A4(0), this.zoomDeltaCurrentFrame = 0;
+         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.Vqq(this._calculateCurrentVelocity(this._p … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L12-L13` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/243.js#L658-L659) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/243.js#L12-L13)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.ShadersStore : Ez.ShadersStoreWGSL
+       resetRotationVelocity() {
+         this._rotationVelocity.A4(0), this.rotationAccumulatedPixels.A4(0)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L15-L16` → after: `L661-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L661-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/243.js#L661-L694) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/243.js#L15-L16)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.IncludesShadersStore : Ez.IncludesShadersStoreWGSL
+       resetPanVelocity() {
+         this._panVelocity.A4(0), this.panAccumulatedPixels.A4(0)
+       }
+       resetZoomVelocity() {
+         this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
+       }
+       get isInterpolating() {
+         return !!this._behavior?.isInterpolating
+       }
+       getFrameIndependentDecay(qq) {
+         const Eq = this._scene.Ba().getDeltaTime(),
+           gq = this._getEffectiveDeltaMs(Eq),
+           Yq = 1e3 / this.referenceFrameRate;
+         return Math.pow(qq, gq / Yq)
+       }
+       getFrameIndependentInputScale(qq) {
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L21-L23` → after: `L698-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L698-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/243.js#L698-L700) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/243.js#L21-L23)

```diff
-   60333: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       postprocessVertexShader: () => lz
+   39977: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L25-L31` → after: `L702-L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L702-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/243.js#L702-L2648) · [Before (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/243.js#L25-L31)

```diff
-     var Ez = bz(39033);
-     const nz = "postprocessVertexShader",
-       iz = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     Ez.e.ShadersStore[nz] || (Ez.e.ShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
+     class Yq {
+       constructor(qq, Eq) {
+         this.inputMap = [], this.handlers = qq, this._createDefaultEntries = Eq, this.resetInputMap()
+       }
+       resolveInteraction(qq, Eq) {
+         for (const gq of this.inputMap)
+           if (gq.source === qq && this._entryMatches(gq, Eq)) return gq;
+         return null
+       }
+       resetInputMap() {
+         this.inputMap = this._createDefaultEntries?.() ?? []
+       }
+       getEntry(qq, Eq, gq) {
+         const Yq = this.inputMap;
+         for (let lq = 0; lq < Yq.length; lq++) {
+           const Oq = Yq[lq];
+ ... (1931 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/244.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/244.js` (93 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L4)

```diff
-   39226: (zz, uz, bz) => {
+   39879: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L7-L12` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L8-L9) · [Before (L7-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L7-L12)

```diff
-       h: () => pz,
-       k: () => tz,
-       o: () => Fz,
-       p: () => Hz,
-       t: () => Mz,
-       u: () => Oz
+       e: () => cq,
+       g: () => Aq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L14-L44` → after: `L11-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L11-L17) · [Before (L14-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L14-L44)

```diff
-     var Ez = bz(38060),
-       nz = bz(39231);
- 
-     function iz(zz, uz, bz, Ez) {
-       switch (uz) {
-         case 5120: {
-           let uz = zz.getInt8(bz);
-           return Ez && (uz = Math.max(uz / 127, -1)), uz
-         }
-         case 5121: {
-           let uz = zz.getUint8(bz);
-           return Ez && (uz /= 255), uz
-         }
-         case 5122: {
-           let uz = zz.getInt16(bz, !0);
-           return Ez && (uz = Math.max(uz / 32767, -1)), uz
- ... (15 more removed lines; see GitHub link above)
+     var Yq = gq(39689),
+       lq = gq(38653),
+       Oq = gq(39817),
+       mq = gq(39725);
+     class xq {
+       get bM() {
+         return this._isDisposed
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L46-L75` → after: `L19-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L19-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L19-L26) · [Before (L46-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L46-L75)

```diff
-     }
- 
-     function lz(zz, uz, bz, Ez, iz) {
-       switch (uz) {
-         case 5120:
-           Ez && (iz = Math.round(127 * iz)), zz.setInt8(bz, iz);
-           break;
-         case 5121:
-           Ez && (iz = Math.round(255 * iz)), zz.setUint8(bz, iz);
-           break;
-         case 5122:
-           Ez && (iz = Math.round(32767 * iz)), zz.setInt16(bz, iz, !0);
-           break;
-         case 5123:
-           Ez && (iz = Math.round(65535 * iz)), zz.setUint16(bz, iz, !0);
-           break;
- ... (14 more removed lines; see GitHub link above)
+       constructor(qq, Eq, gq) {
+         let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           xq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Aq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           cq = arguments.length > 7 ? arguments[7] : void 0,
+           uq = arguments.length > 8 ? arguments[8] : void 0;
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, mq.e)(), qq && qq.ZJ ? this._engine = qq.ZJ().Ba() : this._engine = qq, this._updatable = gq, this._instanced = xq, this._divisor = cq || 1, this._label = uq, Eq instanceof Yq.b ? (this._data = null, this._buffer = Eq) … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L77-L93` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L28-L33) · [Before (L77-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L77-L93)

```diff
-     }
- 
-     function Mz(zz) {
-       switch (zz) {
-         case 5120:
-         case 5121:
-           return 1;
-         case 5122:
-         case 5123:
-         case 5131:
-           return 2;
-         case 5124:
-         case 5125:
-         case 5126:
-           return 4;
-         default:
- ... (1 more removed lines; see GitHub link above)
+       createVertexBuffer(qq, Eq, gq, Yq, lq) {
+         let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           mq = arguments.length > 6 ? arguments[6] : void 0;
+         const xq = Oq ? Eq : Eq * Float32Array.BYTES_PER_ELEMENT,
+           cq = Yq ? Oq ? Yq : Yq * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         return new Aq(this._engine, this, qq, this._updatable, !0, cq, void 0 === lq ? this._instanced : lq, xq, gq, void 0, void 0, !0, this._divisor || mq)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L95-L117` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L35-L36) · [Before (L95-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L95-L117)

```diff
-     }
- 
-     function tz(zz, uz, bz, Ez, nz, tz, Hz, Oz) {
-       const pz = new Array(Ez),
-         dz = new Array(Ez);
-       if (zz instanceof Array) {
-         let nz = uz / 4;
-         const iz = bz / 4;
-         for (let uz = 0; uz < tz; uz += Ez) {
-           for (let uz = 0; uz < Ez; uz++) pz[uz] = dz[uz] = zz[nz + uz];
-           Oz(dz, uz);
-           for (let uz = 0; uz < Ez; uz++) pz[uz] !== dz[uz] && (zz[nz + uz] = dz[uz]);
-           nz += iz
-         }
-       } else {
-         const Fz = ArrayBuffer.isView(zz) ? new DataView(zz.buffer, zz.byteOffset, zz.byteLength) : new DataView(zz),
- ... (7 more removed lines; see GitHub link above)
+       isUpdatable() {
+         return this._updatable
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L119-L128` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L38-L39) · [Before (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L119-L128)

```diff
-     }
- 
-     function Hz(zz, uz, bz, nz, iz, lz, Hz, Oz) {
-       const pz = uz * Mz(bz),
-         dz = Hz * uz;
-       if (5126 !== bz || iz !== pz) {
-         const Ez = new Float32Array(dz);
-         return tz(zz, nz, iz, uz, bz, dz, lz, ((zz, bz) => {
-           for (let nz = 0; nz < uz; nz++) Ez[bz + nz] = zz[nz]
-         })), Ez
+       getData() {
+         return this._data
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L130-L137` → after: `L41-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L41-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L41-L56) · [Before (L130-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L130-L137)

```diff
-       if (!(zz instanceof Array || zz instanceof Float32Array) || 0 !== nz || zz.length !== dz) {
-         if (zz instanceof Array) {
-           const uz = nz / 4;
-           return zz.slice(uz, uz + dz)
-         }
-         if (ArrayBuffer.isView(zz)) {
-           const uz = zz.byteOffset + nz;
-           return 0 !== (3 & uz) && (Ez.e.Warn("Float array must be aligned to 4-bytes border"), Oz = !0), Oz ? new Float32Array(zz.buffer.slice(uz, uz + dz * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(zz.buffer, uz, dz)
+       getBuffer() {
+         return this._buffer
+       }
+       getStrideSize() {
+         return this.byteStride / Float32Array.BYTES_PER_ELEMENT
+       }
+       create() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         !qq && this._buffer || (qq = qq || this._data, qq && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, qq), this._data = qq) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(qq, this._label), this._data = qq … [truncated]
+       }
+       _rebuild() {
+         if (this._data) this._buffer = null, this.create(this._data);
+         else {
+           if (!this._buffer) return;
+           if (this._buffer.WB > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.WB, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.WB, void 0, this._label));
+           lq.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L141-L193` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L59-L60) · [Before (L141-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L141-L193)

```diff
-       return Oz ? zz.slice() : zz
-     }
- 
-     function Oz(zz, uz, bz, nz, iz, lz, Hz) {
-       const Oz = Mz(bz),
-         pz = function(zz) {
-           switch (zz) {
-             case 5120:
-               return Int8Array;
-             case 5121:
-               return Uint8Array;
-             case 5122:
-               return Int16Array;
-             case 5123:
-             case 5131:
-               return Uint16Array;
- ... (37 more removed lines; see GitHub link above)
+       update(qq) {
+         this.create(qq)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L195-L225` → after: `L62-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L62-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L62-L70) · [Before (L195-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L195-L225)

```diff
-       return 1 !== Oz && 0 !== (Zz & Oz - 1) && (Ez.e.Warn("Array must be aligned to border of element size. Data will be copied."), Hz = !0), Hz ? new pz(Fz.slice(Zz, Zz + dz * Oz)) : new pz(Fz, Zz, dz)
-     }
- 
-     function pz(zz, uz, bz, nz, iz, lz, Hz, Oz) {
-       const pz = uz * Mz(bz),
-         dz = Hz * uz;
-       if (Oz.length !== dz) throw new Error("Output length is not valid");
-       if (5126 === bz && iz === pz)
-         if (zz instanceof Array) {
-           const uz = nz / 4;
-           Oz.set(zz, uz)
-         } else if (ArrayBuffer.isView(zz)) {
-         const uz = zz.byteOffset + nz;
-         if (0 !== (3 & uz)) return Ez.e.Warn("Float array must be aligned to 4-bytes border"), void Oz.set(new Float32Array(zz.buffer.slice(uz, uz + dz * Float32Array.BYTES_PER_ELEMENT)));
-         const bz = new Float32Array(zz.buffer, uz, dz);
-         Oz.set(bz)
- ... (15 more removed lines; see GitHub link above)
+       updateDirectly(qq, Eq, gq) {
+         let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, qq, Yq ? Eq : Eq * Float32Array.BYTES_PER_ELEMENT, gq ? gq * this.byteStride : void 0), this._data = 0 === Eq && void 0 === gq ? qq : null)
+       }
+       _increaseReferences() {
+         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
+       }
+       dispose() {
+         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L246-L247` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L74-L75) · [Before (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L246-L247)

```diff
-       constructor() {
-         this.children = []
+       get bM() {
+         return this._isDisposed
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L249-L250` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L77-L78) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L249-L250)

```diff
-       isValid(zz) {
-         return !0
+       get instanceDivisor() {
+         return this._instanceDivisor
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L252-L271` → after: `L80-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L80-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L80-L119) · [Before (L252-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L252-L271)

```diff
-       process(zz, uz, bz) {
-         let Ez = "";
-         if (this.line) {
-           let bz = this.line;
-           const nz = uz.processor;
-           if (nz) {
-             nz.lineProcessor && (bz = nz.lineProcessor(bz, uz.isFragment, uz.processingContext));
-             const Ez = uz.processor?.attributeKeywordName ?? "attribute",
-               iz = uz.isFragment && uz.processor?.varyingFragmentKeywordName ? uz.processor?.varyingFragmentKeywordName : !uz.isFragment && uz.processor?.varyingVertexKeywordName ? uz.processor?.varyingVertexKeywordName : "varying";
-             if (!uz.isFragment && nz.attributeProcessor && this.line.startsWith(Ez)) bz = nz.attributeProcessor(this.line, zz, uz.processingContext);
-             else if (nz.varyingProcessor && (nz.varyingCheck?.(this.line, uz.isFragment) || !nz.varyingCheck && this.line.startsWith(iz))) bz = nz.varyingProcessor(this.line, uz.isFragment, zz, uz.processingContext);
-             else if (nz.uniformProcessor && nz.uniformRegexp && nz.uniformRegexp.test(this.line)) uz.lookForClosingBracketForUniformBuffer || (bz = nz.uniformProcessor(this.line, uz.isFragment, zz, uz.processingContext));
-             else if (nz.uniformBufferProcessor && nz.uniformBufferRegexp && nz.uniformBufferRegexp.test(this.line)) uz.lookForClosingBracketForUniformBuffer || (bz = nz.uniformBufferProcessor(this.line, uz.isFragment, uz.processingContext), uz.lookForClosingBracketForUniformBuffe … [truncated]
-             else if (nz.textureProcessor && nz.textureRegexp && nz.textureRegexp.test(this.line)) bz = nz.textureProcessor(this.line, uz.isFragment, zz, uz.processingContext);
-             else if ((nz.uniformProcessor || nz.uniformBufferProcessor) && this.line.startsWith("uniform") && !uz.lookForClosingBracketForUniformBuffer) {
-               /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? nz.uniformProcessor && (bz = nz.uniformProcessor(this.line, uz.isFragment, zz, uz.processingContext)) : nz.uniformBufferProcessor && (bz = nz.uniformBufferProcessor(this.line, uz.isFragment,  … [truncated]
- ... (4 more removed lines; see GitHub link above)
+       set instanceDivisor(qq) {
+         const Eq = 0 != qq;
+         this._instanceDivisor = qq, Eq !== this._instanced && (this._instanced = Eq, this._computeHashCode())
+       }
+       get _maxVerticesCount() {
+         const qq = this.getData();
+         return qq ? Array.isArray(qq) ? qq.length / (this.byteStride / 4) - this.byteOffset / 4 : (qq.byteLength - this.byteOffset) / this.byteStride : 0
+       }
+       constructor(qq, Eq, gq, Yq, lq, mq, Bq, Wq, Nq, aq) {
+         let Vq, dq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+           jq = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
+           Hq = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
+           oq = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
+         if (this._isDisposed = !1, this.engine = qq, "object" === typeof Yq && null !== Yq ? (Vq = Yq.updatable ?? !1, lq = Yq.postponeInternalCreation, mq = Yq.stride, Bq = Yq.instanced, Wq = Yq.offset, Nq = Yq.size, aq = Yq.type, dq = Yq.normalized ?? !1, jq = Yq.useBytes ?? !1 … [truncated]
+           const qq = this.getData();
+           this.type = qq ? uq(qq) : Aq.FLOAT
+ ... (24 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L276-L279` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L122-L123) · [Before (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L276-L279)

```diff
-     }
-     class nz {
-       constructor() {
-         this._lines = []
+       _computeHashCode() {
+         this.hashCode = (Aq._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L281-L282` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L125-L126) · [Before (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L281-L282)

```diff
-       get currentLine() {
-         return this._lines[this.lineIndex]
+       _rebuild() {
+         this._buffer?._rebuild()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L284-L285` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L128-L129) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L284-L285)

```diff
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
+       getKind() {
+         return this._kind
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L287-L311` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L131-L132) · [Before (L287-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L287-L311)

```diff
-       set lines(zz) {
-         this._lines.length = 0;
-         for (const uz of zz) {
-           if (!uz || "\r" === uz) continue;
-           if ("#" === uz[0]) {
-             this._lines.push(uz);
-             continue
-           }
-           const zz = uz.trim();
-           if (!zz) continue;
-           if (zz.startsWith("//")) {
-             this._lines.push(uz);
-             continue
-           }
-           const bz = zz.indexOf(";");
-           if (-1 === bz) this._lines.push(zz);
- ... (9 more removed lines; see GitHub link above)
+       isUpdatable() {
+         return this._buffer.isUpdatable()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L313-L320` → after: `L134-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L134-L135) · [Before (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L313-L320)

```diff
-     }
-     class iz extends Ez {
-       process(zz, uz, bz) {
-         for (let Ez = 0; Ez < this.children.length; Ez++) {
-           const nz = this.children[Ez];
-           if (nz.isValid(zz)) return nz.process(zz, uz, bz)
-         }
-         return ""
+       getData() {
+         return this._buffer.getData()
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L322-L325` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L137-L139) · [Before (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L322-L325)

```diff
-     }
-     class lz extends Ez {
-       isValid(zz) {
-         return this.testExpression.isTrue(zz)
+       getFloatData(qq, Eq) {
+         const gq = this.getData();
+         return gq ? (0, Oq.o)(gq, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, qq, Eq) : null
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L327-L330` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L141-L142) · [Before (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L327-L330)

```diff
-     }
-     class Mz {
-       isTrue(zz) {
-         return !0
+       getBuffer() {
+         return this._buffer.getBuffer()
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L332-L391` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L144-L145) · [Before (L332-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L332-L391)

```diff
-       static postfixToInfix(zz) {
-         const uz = [];
-         for (const bz of zz)
-           if (void 0 === Mz._OperatorPriority[bz]) uz.push(bz);
-           else {
-             const zz = uz[uz.length - 1],
-               Ez = uz[uz.length - 2];
-             uz.length -= 2, uz.push(`(${Ez}${bz}${zz})`)
-           } return uz[uz.length - 1]
-       }
-       static infixToPostfix(zz) {
-         const uz = Mz._InfixToPostfixCache.get(zz);
-         if (uz) return uz.accessTime = Date.now(), uz.result;
-         if (!zz.includes("&&") && !zz.includes("||") && !zz.includes(")") && !zz.includes("(")) return [zz];
-         const bz = [];
-         let Ez = -1;
- ... (44 more removed lines; see GitHub link above)
+       getWrapperBuffer() {
+         return this._buffer
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L393-L395` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L147-L148) · [Before (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L393-L395)

```diff
-       isTrue(zz) {
-         let uz = void 0 !== zz[this.define];
-         return this.not && (uz = !uz), uz
+       getStrideSize() {
+         return this.byteStride / (0, Oq.q)(this.type)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L397-L400` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L150-L151) · [Before (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L397-L400)

```diff
-     }
-     class Hz extends Mz {
-       isTrue(zz) {
-         return this.leftOperand.isTrue(zz) || this.rightOperand.isTrue(zz)
+       Tgq() {
+         return this.byteOffset / (0, Oq.q)(this.type)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L402-L405` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L153-L154) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L402-L405)

```diff
-     }
-     class Oz extends Mz {
-       isTrue(zz) {
-         return this.leftOperand.isTrue(zz) && this.rightOperand.isTrue(zz)
+       getSize() {
+         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Oq.q)(this.type) : this._size
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L407-L410` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L156-L157) · [Before (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L407-L410)

```diff
-     }
-     class pz extends Mz {
-       constructor(zz, uz, bz) {
-         super(), this.define = zz, this.operand = uz, this.testValue = bz
+       getIsInstanced() {
+         return this._instanced
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L412-L413` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L159-L160) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L412-L413)

```diff
-       toString() {
-         return `${this.define} ${this.operand} ${this.testValue}`
+       getInstanceDivisor() {
+         return this._instanceDivisor
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L415-L439` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L162-L163) · [Before (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L415-L439)

```diff
-       isTrue(zz) {
-         let uz = !1;
-         const bz = parseInt(void 0 != zz[this.define] ? zz[this.define] : this.define),
-           Ez = parseInt(void 0 != zz[this.testValue] ? zz[this.testValue] : this.testValue);
-         if (isNaN(bz) || isNaN(Ez)) return !1;
-         switch (this.operand) {
-           case ">":
-             uz = bz > Ez;
-             break;
-           case "<":
-             uz = bz < Ez;
-             break;
-           case "<=":
-             uz = bz <= Ez;
-             break;
-           case ">=":
- ... (9 more removed lines; see GitHub link above)
+       create(qq) {
+         this._buffer.create(qq), this._alignBuffer()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L454-L485` → after: `L184-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L184-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L184-L204) · [Before (L454-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L454-L485)

```diff
-       zz.processor && zz.processor.initializeShaders && zz.processor.initializeShaders(zz.processingContext)
-     }
- 
-     function Nz(zz, uz, bz, Ez) {
-       uz.processor?.preProcessShaderCode && (zz = uz.processor.preProcessShaderCode(zz, uz.isFragment)), Gz(zz, uz, (zz => {
-         uz.processCodeAfterIncludes && (zz = uz.processCodeAfterIncludes(uz.isFragment ? "fragment" : "vertex", zz, uz.defines));
-         const nz = function(zz, uz, bz) {
-           let Ez = function(zz, uz) {
-             if (uz.processor?.noPrecision) return zz;
-             const bz = uz.shouldUseHighPrecisionShader; - 1 === zz.indexOf("precision highp float") ? zz = bz ? "precision highp float;\n" + zz : "precision mediump float;\n" + zz : bz || (zz = zz.replace("precision highp float", "precision mediump float"));
-             return zz
-           }(zz, uz);
-           if (!uz.processor) return Ez;
-           if (0 === uz.processor.shaderLanguage && -1 !== Ez.indexOf("#version 3") && (Ez = Ez.replace("#version 300 es", ""), !uz.processor.parseGLES3)) return Ez;
-           const nz = uz.defines,
-             iz = Pz(uz, bz);
- ... (16 more removed lines; see GitHub link above)
+       switch (qq) {
+         case Aq.UVKind:
+         case Aq.UV2Kind:
+         case Aq.UV3Kind:
+         case Aq.UV4Kind:
+         case Aq.UV5Kind:
+         case Aq.UV6Kind:
+           return 2;
+         case Aq.NormalKind:
+         case Aq.PositionKind:
+           return 3;
+         case Aq.ColorKind:
+         case Aq.ColorInstanceKind:
+         case Aq.MatricesIndicesKind:
+         case Aq.MatricesIndicesExtraKind:
+         case Aq.MatricesWeightsKind:
+ ... (5 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L490-L500` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L209) · [Before (L490-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L490-L500)

```diff
-       const uz = /defined\((.+)\)/.exec(zz);
-       if (uz && uz.length) return new tz(uz[1].trim(), "!" === zz[0]);
-       const bz = ["==", "!=", ">=", "<=", "<", ">"];
-       let Ez = "",
-         nz = 0;
-       for (Ez of bz)
-         if (nz = zz.indexOf(Ez), nz > -1) break;
-       if (-1 === nz) return new tz(zz);
-       const iz = zz.substring(0, nz).trim(),
-         lz = zz.substring(nz + Ez.length).trim();
-       return new pz(iz, Ez, lz)
+       return qq instanceof Int8Array ? Aq.BYTE : qq instanceof Uint8Array ? Aq.UNSIGNED_BYTE : qq instanceof Int16Array ? Aq.SHORT : qq instanceof Uint16Array ? Aq.UNSIGNED_SHORT : qq instanceof Int32Array ? Aq.INT : qq instanceof Uint32Array ? Aq.UNSIGNED_INT : Aq.FLOAT
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L503-L522` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L212-L213) · [Before (L503-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L503-L522)

```diff
-     function Jz(zz, uz) {
-       const bz = new lz,
-         Ez = zz.substring(0, uz);
-       let nz = zz.substring(uz);
-       return nz = nz.substring(0, (nz.indexOf("//") + 1 || nz.length + 1) - 1).trim(), bz.testExpression = "#ifdef" === Ez ? new tz(nz) : "#ifndef" === Ez ? new tz(nz, !0) : function(zz) {
-         zz = zz.replace(Zz, "defined[$1]");
-         const uz = Mz.infixToPostfix(zz),
-           bz = [];
-         for (const nz of uz)
-           if ("||" !== nz && "&&" !== nz) bz.push(nz);
-           else if (bz.length >= 2) {
-           let zz = bz[bz.length - 1],
-             uz = bz[bz.length - 2];
-           bz.length -= 2;
-           const Ez = "&&" == nz ? new Oz : new Hz;
-           "string" === typeof zz && (zz = zz.replace(Rz, "defined($1)")), "string" === typeof uz && (uz = uz.replace(Rz, "defined($1)")), Ez.leftOperand = "string" === typeof uz ? xz(uz) : uz, Ez.rightOperand = "string" === typeof zz ? xz(zz) : zz, bz.push(Ez)
- ... (4 more removed lines; see GitHub link above)
+     function Bq(qq) {
+       return (0, Oq.q)(qq)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L525-L538` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L216-L219) · [Before (L525-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L525-L538)

```diff
-     function Az(zz, uz, bz, nz) {
-       let iz;
-       for (; Tz(zz, bz, nz);) {
-         iz = zz.currentLine;
-         const lz = iz.substring(0, 5).toLowerCase();
-         if ("#else" === lz) {
-           const bz = new Ez;
-           return uz.children.push(bz), void Tz(zz, bz, nz)
-         }
-         if ("#elif" === lz) {
-           const zz = Jz(iz, 5);
-           uz.children.push(zz), bz = zz
-         }
-       }
+     function Wq(qq, Eq, gq, Yq, lq, mq, xq, Aq) {
+       (0, Oq.h)(qq, Eq, gq, Yq, lq, mq, xq, ((qq, Eq) => {
+         for (let gq = 0; gq < Yq; gq++) Aq(qq[gq], Eq + gq)
+       }))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L541-L584` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L222-L223) · [Before (L541-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L541-L584)

```diff
-     function Tz(zz, uz, bz) {
-       for (; zz.canRead;) {
-         zz.lineIndex++;
-         const nz = zz.currentLine;
-         if (nz.indexOf("#") >= 0) {
-           const Ez = rz.exec(nz);
-           if (Ez && Ez.length) {
-             switch (Ez[0]) {
-               case "#ifdef": {
-                 const Ez = new iz;
-                 uz.children.push(Ez);
-                 const lz = Jz(nz, 6);
-                 Ez.children.push(lz), Az(zz, Ez, lz, bz);
-                 break
-               }
-               case "#else":
- ... (28 more removed lines; see GitHub link above)
+     function Nq(qq, Eq, gq, Yq, lq, mq, xq, Aq) {
+       return (0, Oq.o)(qq, Eq, gq, Yq, lq, mq, xq, Aq)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L587-L590` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L228-L229) · [Before (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L587-L590)

```diff
-     function Lz(zz, uz, bz, iz) {
-       const lz = new Ez,
-         Mz = new nz;
-       return Mz.lineIndex = -1, Mz.lines = zz.split("\n"), Tz(Mz, lz, iz), lz.process(uz, bz, iz)
+     function Vq() {
+       aq || (aq = !0, Aq.DeduceStride = cq, Aq.GetDataType = uq, Aq.GetTypeByteLength = Bq, Aq.ForEach = Wq, Aq.GetFloatData = Nq)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L592-L598` → after: `L231-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L231-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L231-L241) · [Before (L592-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L592-L598)

```diff
- 
-     function Pz(zz, uz) {
-       const bz = zz.defines,
-         Ez = {};
-       for (const nz of bz) {
-         const zz = nz.replace("#define", "").replace(";", "").trim().split(" ");
-         Ez[zz[0]] = zz.length > 1 ? zz[1] : ""
+   },
+   39689: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq
+     });
+     class Yq {
+       get underlyingResource() {
+         return null
+       }
+       constructor() {
+         this.references = 0, this.WB = 0, this.is32Bits = !1, this.uniqueId = Yq._Counter++
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L602-L622` → after: `L244-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L244-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L244-L286) · [Before (L602-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L602-L622)

```diff
- 
-     function Gz(zz, uz, bz) {
-       let Ez;
-       for (sz.length = 0; null !== (Ez = Kz.exec(zz));) sz.push(Ez);
-       let nz = [zz],
-         iz = !1;
-       for (const Mz of sz) {
-         let zz = Mz[1];
-         if (-1 !== zz.indexOf("__decl__") && (zz = zz.replace(wz, ""), uz.supportsUniformBuffers && (zz = zz.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), zz += "Declaration"), !uz.includesShadersStore[zz]) {
-           const Ez = uz.shadersRepository + "ShadersInclude/" + zz + ".fx";
-           return void az.loadFile(Ez, (Ez => {
-             uz.includesShadersStore[zz] = Ez, Gz(nz.join(""), uz, bz)
-           }))
-         } {
-           let bz = uz.includesShadersStore[zz];
-           if (Mz[2]) {
- ... (5 more removed lines; see GitHub link above)
+     Yq._Counter = 0
+   },
+   39876: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Oq
+     });
+     var Yq = gq(37139),
+       lq = gq(39879);
+     class Oq {
+       constructor() {
+         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
+       }
+       getNormal() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!this.pickedMesh || Eq && !this.pickedMesh.isVerticesDataPresent(lq.g.NormalKind)) return null;
+ ... (27 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L625-L642` → after: `L289-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L289-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L289-L294) · [Before (L625-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L625-L642)

```diff
-           if (Mz[4]) {
-             const zz = Mz[5];
-             if (-1 !== zz.indexOf("..")) {
-               const Ez = zz.split(".."),
-                 nz = parseInt(Ez[0]);
-               let iz = parseInt(Ez[1]),
-                 lz = bz.slice(0);
-               bz = "", isNaN(iz) && (iz = uz.indexParameters[Ez[1]]);
-               for (let zz = nz; zz < iz; zz++) uz.supportsUniformBuffers || (lz = lz.replace(Xz, ((zz, uz) => uz + "{X}"))), bz += lz.replace(fz, zz.toString()) + "\n"
-             } else uz.supportsUniformBuffers || (bz = bz.replace(Xz, ((zz, uz) => uz + "{X}"))), bz = bz.replace(fz, zz)
-           }
-           const Ez = [];
-           for (const zz of nz) {
-             const uz = zz.split(Mz[0]);
-             for (let zz = 0; zz < uz.length - 1; zz++) Ez.push(uz[zz]), Ez.push(bz);
-             Ez.push(uz[uz.length - 1])
- ... (2 more removed lines; see GitHub link above)
+           let gq = qq.getWorldMatrix();
+           qq.nonUniformScaling && (Yq.o.Matrix[0].WG(gq), gq = Yq.o.Matrix[0], gq.setTranslationFromFloats(0, 0, 0), gq.invert(), gq.transposeToRef(Yq.o.Matrix[1]), gq = Yq.o.Matrix[1]), Yq.q.TransformNormalToRef(Eq, gq, Eq)
+         };
+         if (qq && cq(this.pickedMesh, gq), this.ray) {
+           const Eq = Yq.o.Na[0].WG(gq);
+           qq || cq(this.pickedMesh, Eq), Yq.q.Dot(Eq, this.ray.direction) > 0 && gq.negateInPlace()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L645-L651` → after: `L298-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L298-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L298-L308) · [Before (L645-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L645-L651)

```diff
-       sz.length = 0;
-       const lz = nz.join("");
-       iz ? Gz(lz.toString(), uz, bz) : bz(lz)
-     }
-     const az = {
-       loadFile: (zz, uz, bz, Ez, nz, iz) => {
-         throw (0, dz.l)("FileTools")
+       getTextureCoordinates() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lq.g.UVKind;
+         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(qq)) return null;
+         const Eq = this.pickedMesh.iYq();
+         if (!Eq) return null;
+         const gq = this.pickedMesh.getVerticesData(qq);
+         if (!gq) return null;
+         let Oq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId]),
+           mq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId + 1]),
+           xq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId + 2]);
+         return Oq = Oq.scale(this.bu), mq = mq.scale(this.bv), xq = xq.scale(1 - this.bu - this.bv), new Yq.p(Oq.x + mq.x + xq.x, Oq.y + mq.y + xq.y)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L655` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L312) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L655)

```diff
-   39057: (zz, uz, bz) => {
+   39725: (qq, Eq, gq) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L657-L661` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L314) · [Before (L657-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L657-L661)

```diff
-       d: () => nz,
-       h: () => iz,
-       l: () => Mz,
-       o: () => lz,
-       s: () => tz
+       e: () => Oq
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L663-L682` → after: `L316-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L316-L317) · [Before (L663-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L663-L682)

```diff
-     var Ez = bz(39061);
-     const nz = {};
- 
-     function iz(zz, uz) {
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (uz ? uz + "\n" : "") + zz
-     }
- 
-     function lz(zz, uz, bz, iz, lz, Mz, tz) {
-       const Hz = tz || nz.loadFile;
-       if (!Hz) throw (0, Ez.l)("FileTools");
-       return Hz(zz, uz, bz, iz, lz, Mz)
-     }
- 
-     function Mz(zz, uz, bz, Ez) {
-       if (zz) return uz ? zz.IS_NDC_HALF_ZRANGE = "" : delete zz.IS_NDC_HALF_ZRANGE, bz ? zz.USE_REVERSE_DEPTHBUFFER = "" : delete zz.USE_REVERSE_DEPTHBUFFER, void(Ez ? zz.USE_EXACT_SRGB_CONVERSIONS = "" : delete zz.USE_EXACT_SRGB_CONVERSIONS);
-       {
- ... (4 more removed lines; see GitHub link above)
+     var Yq = gq(39608);
+     let lq = !1;
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L684-L727` → after: `L319-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L319-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L319-L327) · [Before (L684-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L684-L727)

```diff
-     function tz(zz, uz) {
-       let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         Ez = arguments.length > 3 ? arguments[3] : void 0;
-       switch (zz) {
-         case 3: {
-           const zz = new Int8Array(uz);
-           return Ez && zz.set(new Int8Array(Ez)), zz
-         }
-         case 0: {
-           const zz = new Uint8Array(uz);
-           return Ez && zz.set(new Uint8Array(Ez)), zz
-         }
-         case 4: {
-           const zz = "number" !== typeof uz ? new Int16Array(uz) : new Int16Array(bz ? uz / 2 : uz);
-           return Ez && zz.set(new Int16Array(Ez)), zz
-         }
- ... (28 more removed lines; see GitHub link above)
+     function Oq() {
+       lq || (lq = !0, Yq.ThinEngine.prototype.updateDynamicIndexBuffer = function(qq, Eq) {
+         let gq;
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(qq), gq = qq.is32Bits ? Eq instanceof Uint32Array ? Eq : new Uint32Array(Eq) : Eq instanceof Uint16Array ? Eq : new Uint16Array(Eq), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, gq, … [truncated]
+       }, Yq.ThinEngine.prototype.updateDynamicVertexBuffer = function(qq, Eq, gq, Yq) {
+         this.bindArrayBuffer(qq), void 0 === gq && (gq = 0);
+         const lq = Eq.byteLength || Eq.length;
+         void 0 === Yq || Yq >= lq && 0 === gq ? Eq instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gq, new Float32Array(Eq)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gq, Eq) : Eq instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gq, new Floa … [truncated]
+       })
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L730` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L330) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L730)

```diff
-   39061: (zz, uz, bz) => {
+   39698: (qq, Eq, gq) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L732-L735` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L332) · [Before (L732-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L732-L735)

```diff
-       c: () => Hz,
-       f: () => Oz,
-       h: () => tz,
-       l: () => nz
+       b: () => Yq
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L737-L751` → after: `L334-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L334-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L334-L357) · [Before (L737-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L737-L751)

```diff
-     const Ez = {};
- 
-     function nz(zz) {
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Ez[zz]) return Ez[zz] = !0, `${zz} needs to be imported before as it contains a side-effect required by your code.`
-     }
-     const iz = {};
-     let lz = !1,
-       Mz = 0;
- 
-     function tz(zz, uz) {
-       let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const Ez = function() {
-         if ((bz || lz) && 0 === Mz) {
-           const bz = `${zz}.${uz}`;
-           iz[bz] || (iz[bz] = !0, console.warn(`[Babylon.js] ${bz}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
+     class Yq {
+       get underlyingResource() {
+         return this._webGLTexture
+       }
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           Eq = arguments.length > 1 ? arguments[1] : void 0;
+         if (this._MSAARenderBuffers = null, this._context = Eq, !qq && (qq = Eq.createTexture(), !qq)) throw new Error("Unable to create webGL texture");
+         this.set(qq)
+       }
+       setUsage() {}
+       set(qq) {
+         this._webGLTexture = qq
+       }
+       reset() {
+         this._webGLTexture = null, this._MSAARenderBuffers = null
+ ... (8 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L753-L773` → after: `L359-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L359-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L359-L365) · [Before (L753-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L753-L773)

```diff
-       };
-       return Ez.__isSideEffectStub = !0, Ez
-     }
- 
-     function Hz(zz) {
-       return !!zz && !zz.__isSideEffectStub
-     }
- 
-     function Oz(zz, uz) {
-       return {
-         get() {},
-         set(zz) {
-           Object.defineProperty(this, uz, {
-             value: zz,
-             writable: !0,
-             configurable: !0,
- ... (5 more removed lines; see GitHub link above)
+       }
+       getMSAARenderBuffer() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._MSAARenderBuffers?.[qq] ?? null
+       }
+       release() {
+         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L777-L795` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L369) · [Before (L777-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L777-L795)

```diff
-   39043: (zz, uz, bz) => {
-     function Ez() {
-       return "undefined" !== typeof window
-     }
- 
-     function nz() {
-       return "undefined" !== typeof navigator
-     }
- 
-     function iz() {
-       return "undefined" !== typeof document
-     }
- 
-     function lz(zz) {
-       let uz = "",
-         bz = zz.firstChild;
- ... (3 more removed lines; see GitHub link above)
+   39653: (qq, Eq, gq) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L797-L801` → after: `L371-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L371-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L371-L1151) · [Before (L797-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L797-L801)

```diff
-       d: () => lz,
-       e: () => iz,
-       h: () => nz,
-       i: () => Ez
-     })
+       b: () => Hq
+     });
+     var Yq = gq(37156),
+       lq = gq(39612),
+       Oq = gq(37153),
+       mq = gq(38653),
+       xq = gq(37151),
+       Aq = gq(39662);
+     class cq {
+       constructor() {
+         let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, qq && this.reset()
+       }
+       get isDirty() {
+         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
+       }
+ ... (765 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L803` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L1153) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L803)

```diff
-   39212: (zz, uz, bz) => {
+   39617: (qq, Eq, gq) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L805-L807` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L1155) · [Before (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L805-L807)

```diff
-       b: () => Ez,
-       f: () => nz,
-       j: () => iz
+       d: () => Yq
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L809-L822` → after: `L1157-L9033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L1157-L9033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L1157-L9033) · [Before (L809-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L809-L822)

```diff
-     class Ez extends Error {}
-     Ez._setPrototypeOf = Object.setPrototypeOf || ((zz, uz) => (zz.__proto__ = uz, zz));
-     const nz = {
-       MeshInvalidPositionsError: 0,
-       UnsupportedTextureError: 1e3,
-       GLTFLoaderUnexpectedMagicError: 2e3,
-       SceneLoaderError: 3e3,
-       LoadFileError: 4e3,
-       RequestFileError: 4001,
-       ReadFileError: 4002
-     };
-     class iz extends Ez {
-       constructor(zz, uz, bz) {
-         super(zz), this.errorCode = uz, this.innerError = bz, this.name = "RuntimeError", Ez._setPrototypeOf(this, iz.prototype)
+     class Yq {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersRepository : Yq.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersStore : Yq.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.IncludesShadersStore : Yq.IncludesShadersStoreWGSL
+       }
+     }
+     Yq.ShadersRepository = "src/Shaders/", Yq.ShadersStore = {}, Yq.IncludesShadersStore = {}, Yq.ShadersRepositoryWGSL = "src/ShadersWGSL/", Yq.ShadersStoreWGSL = {}, Yq.IncludesShadersStoreWGSL = {}
+   },
+   39628: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Wq,
+ ... (7861 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L824-L855` → after: `L9035-L9052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9035-L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9035-L9052) · [Before (L824-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L824-L855)

```diff
-     }
-   },
-   39202: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => Pz,
-       f: () => fz,
-       j: () => Jz,
-       n: () => Tz,
-       r: () => vz,
-       t: () => oz,
-       v: () => Nz,
-       z: () => qz,
-       A: () => xz,
-       B: () => sz
-     });
-     var Ez = bz(39208),
- ... (16 more removed lines; see GitHub link above)
+       _checkIntersections() {
+         for (let qq = 0; qq < this._meshesForIntersections.length; qq++) {
+           const Eq = this._meshesForIntersections.data[qq];
+           if (Eq.actionManager)
+             for (let qq = 0; Eq.actionManager && qq < Eq.actionManager.actions.length; qq++) {
+               const gq = Eq.actionManager.actions[qq];
+               if (12 === gq.trigger || 13 === gq.trigger) {
+                 const qq = gq.getTriggerParameter(),
+                   Yq = qq.mesh ? qq.mesh : qq,
+                   lq = Yq.Nlq(Eq, qq.usePreciseIntersection),
+                   Oq = Eq._intersectionsInProgress.indexOf(Yq);
+                 lq && -1 === Oq ? 12 === gq.trigger ? (gq._executeCurrent(aq.CreateNew(Eq, void 0, Yq)), Eq._intersectionsInProgress.push(Yq)) : 13 === gq.trigger && Eq._intersectionsInProgress.push(Yq) : !lq && Oq > -1 && (13 === gq.trigger && gq._executeCurrent(aq.CreateNew(Eq, … [truncated]
+                   const Eq = qq.mesh ? qq.mesh : qq;
+                   return Yq === Eq
+                 })) && 13 !== gq.trigger || Eq._intersectionsInProgress.splice(Oq, 1))
+               }
+ ... (2 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L857-L860` → after: `L9054-L9069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9054-L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9054-L9069) · [Before (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L857-L860)

```diff
-     }
-     class wz extends Mz.j {
-       constructor(zz, uz) {
-         super(zz, Mz.f.RequestFileError), this.request = uz, this.name = "RequestFileError", Mz.b._setPrototypeOf(this, wz.prototype)
+       _advancePhysicsEngineStep(qq) {}
+       _animate(qq) {}
+       animate() {
+         if (this._engine.isDeterministicLockStep()) {
+           let qq = Math.max(Og.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Og.MaxDeltaTime)) + this._timeAccumulator;
+           const Eq = this._engine.getTimeStep(),
+             gq = 1e3 / Eq / 1e3;
+           let Yq = 0;
+           const lq = this._engine.getLockstepMaxSteps();
+           let Oq = Math.floor(qq / Eq);
+           for (Oq = Math.min(Oq, lq); qq > 0 && Yq < Oq;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Eq * gq, this._animate(Eq), this.onAfterAnimationsObservable.notifyObservers(this), this.JF && this._advancePhysicsEngineStep(Eq), this.onAfterStepO … [truncated]
+           this._timeAccumulator = qq < 0 ? 0 : qq
+         } else {
+           const qq = this.useConstantAnimationDeltaTime ? 16 : Math.max(Og.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Og.MaxDeltaTime));
+           this._animationRatio = .06 * qq, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.JF && this._advancePhysicsEngineStep(qq)
+         }
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L862-L906` → after: `L9071-L9078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9071-L9078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9071-L9078) · [Before (L862-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L862-L906)

```diff
-     }
-     class Xz extends Mz.j {
-       constructor(zz, uz) {
-         super(zz, Mz.f.ReadFileError), this.file = uz, this.name = "ReadFileError", Mz.b._setPrototypeOf(this, Xz.prototype)
-       }
-     }
-     const fz = {
-         DefaultRetryStrategy: class {
-           static ExponentialBackoff() {
-             let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
-               uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
-             return (bz, Ez, nz) => 0 !== Ez.status || nz >= zz || -1 !== bz.indexOf("file:") ? -1 : Math.pow(2, nz) * uz
-           }
-         }.ExponentialBackoff(),
-         BaseUrl: "",
-         CorsBehavior: "anonymous",
- ... (29 more removed lines; see GitHub link above)
+       _clear() {
+         (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
+       }
+       _checkCameraRenderTarget(qq) {
+         if (qq?.outputRenderTarget && !qq?.isRigCamera && (qq.outputRenderTarget._cleared = !1), qq?.rigCameras?.length)
+           for (let Eq = 0; Eq < qq.rigCameras.length; ++Eq) {
+             const gq = qq.rigCameras[Eq].outputRenderTarget;
+             gq && (gq._cleared = !1)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L908-L914` → after: `L9080-L9096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9080-L9096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9080-L9096) · [Before (L908-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L908-L914)

```diff
-           return pz.createImageBitmap(Ez, {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none",
-             ...Oz
-           }).then(uz).catch((uz => {
-             bz && bz("Error while trying to load image: " + zz, uz)
-           })), null
+       }
+       resetDrawCache(qq) {
+         if (this.meshes)
+           for (const Eq of this.meshes) Eq.resetDrawCache(qq)
+       }
+       _renderWithFrameGraph() {
+         let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           Eq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this.activeCamera = null, this.activeCameras = null, qq)
+           for (const gq of this.cameras)
+             if (gq.update(), 0 !== gq.cameraRigMode)
+               for (let qq = 0; qq < gq._rigCameras.length; qq++) gq._rigCameras[qq].update();
+         this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
+         try {
+           this._renderWithFrameGraphAfterBeforeRender(Eq)
+         } finally {
+ ... (1 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L916-L928` → after: `L9098-L9107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9098-L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9098-L9107) · [Before (L916-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L916-L928)

```diff
-         let dz = !1;
-         if (zz instanceof ArrayBuffer || ArrayBuffer.isView(zz))
-           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
-             let uz;
-             uz = zz instanceof ArrayBuffer ? zz : (0, Zz.o)(zz), iz = URL.createObjectURL(new Blob([uz], {
-               type: Mz
-             })), dz = !0
-           } else iz = `data:${Mz};base64,` + (0, tz.h)(zz);
-         else zz instanceof Blob ? (iz = URL.createObjectURL(zz), dz = !0) : (iz = fz.CleanUrl(zz), iz = fz.PreprocessUrl(iz));
-         const Fz = uz => {
-           if (bz) {
-             const Ez = iz || zz.toString();
-             bz(`Error while trying to load image: ${0===Ez.indexOf("http")||Ez.length<=128?Ez:Ez.slice(0,128)+"..."}`, uz)
+       }
+       _renderWithFrameGraphAfterBeforeRender(qq) {
+         this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
+         const Eq = this._frameGraph?.findMainCamera() ?? null;
+         if (this.renderTargetsEnabled) {
+           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Yq.f.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
+           for (let qq = 0; qq < this._renderTargets.length; qq++) {
+             const gq = this._renderTargets.data[qq],
+               Yq = gq.activeCamera || Eq;
+             this._renderRenderTarget(gq, Yq, !0, this.dumpNextRenderTargets)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L930-L949` → after: `L9109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9109) · [Before (L930-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L930-L949)

```diff
-         };
-         if (pz?._features.forceBitmapOverHTMLImageElement) return vz(iz, (Ez => {
-           pz.createImageBitmap(new Blob([Ez], {
-             type: Mz
-           }), {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none",
-             ...Oz
-           }).then((zz => {
-             uz(zz), dz && URL.revokeObjectURL(iz)
-           })).catch((uz => {
-             bz && bz("Error while trying to load image: " + zz, uz)
-           }))
-         }), void 0, nz || void 0, !0, ((zz, uz) => {
-           Fz(uz)
-         })), null;
- ... (4 more removed lines; see GitHub link above)
+           Yq.f.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L951-L997` → after: `L9111-L9115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9111-L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9111-L9115) · [Before (L951-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L951-L997)

```diff
-         sz(iz, Rz);
-         const Kz = [],
-           wz = () => {
-             for (const zz of Kz) zz.target.removeEventListener(zz.name, zz.handler);
-             Kz.length = 0
-           };
-         Kz.push({
-           target: Rz,
-           name: "load",
-           handler: () => {
-             wz(), uz(Rz), dz && Rz.src && URL.revokeObjectURL(Rz.src)
-           }
-         }), Kz.push({
-           target: Rz,
-           name: "error",
-           handler: zz => {
- ... (31 more removed lines; see GitHub link above)
+         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
+         for (let gq = 0, Yq = this._beforeClearStage; gq < Yq.length; gq++) {
+           Yq[gq].action()
+         }
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L999-L1011` → after: `L9117-L9123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9117-L9123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9117-L9123) · [Before (L999-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L999-L1011)

```diff
-           if (-1 !== iz.indexOf("file:")) {
-             const zz = decodeURIComponent(iz.substring(5).toLowerCase());
-             if (lz.FilesToLoad[zz] && "undefined" !== typeof URL) {
-               try {
-                 let uz;
-                 try {
-                   uz = URL.createObjectURL(lz.FilesToLoad[zz])
-                 } catch (Jz) {
-                   uz = URL.createObjectURL(lz.FilesToLoad[zz])
-                 }
-                 Rz.src = uz, dz = !0
-               } catch (Az) {
-                 Rz.src = ""
+           const Eq = this.getActiveMeshCandidates(),
+             gq = Eq.length;
+           if (this._activeMeshesFrozen) {
+             if (!this._skipEvaluateActiveMeshesCompletely)
+               for (let qq = 0; qq < gq; qq++) {
+                 const gq = Eq.data[qq];
+                 gq._internalAbstractMeshDataInfo._wasActiveLastFrame && gq.computeWorldMatrix()
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1013` → after: `L9125-L9133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9125-L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9125-L9133) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1013)

```diff
-               return Rz
+             if (this.particlesEnabled) {
+               const qq = this._activeParticleSystems.length;
+               for (let Eq = 0; Eq < qq; Eq++) this._activeParticleSystems.data[Eq].animate()
+             }
+           } else {
+             this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+             for (let Yq = 0; Yq < gq; Yq++) {
+               const gq = Eq.data[Yq];
+               gq._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, gq.isBlocked || (this._totalVertices.addCount(gq.getTotalVertices(), !1), gq.isReady() && gq.isEnabled() && !gq.rc.hasAZeroComponent && (gq.computeWorldMatrix(qq), gq.actionManager && gq.actionManager.hasSpe … [truncated]
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1018-L1041` → after: `L9144-L9151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9144-L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9144-L9151) · [Before (L1018-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1018-L1041)

```diff
-         return Rz
-       },
-       Nz = (zz, uz, bz, Ez, nz) => {
-         const lz = new FileReader,
-           Mz = {
-             onCompleteObservable: new iz.b,
-             abort: () => lz.abort()
-           };
-         return lz.onloadend = () => Mz.onCompleteObservable.notifyObservers(Mz), nz && (lz.onerror = () => {
-           nz(new Xz(`Unable to read ${zz.name}`, zz))
-         }), lz.onload = zz => {
-           uz(zz.target.result)
-         }, bz && (lz.onprogress = bz), Ez ? lz.readAsArrayBuffer(zz) : lz.readAsText(zz), Mz
-       },
-       vz = (zz, uz, bz, Ez, nz, tz, Hz) => {
-         if (zz.name) return Nz(zz, uz, bz, nz, tz ? zz => {
- ... (8 more removed lines; see GitHub link above)
+         this.frameGraph?.execute()
+       }
+       _renderRenderTarget(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._intermediateRendering = !0, qq._shouldRender()) {
+           if (this._renderId++, this.activeCamera = Eq, !this.activeCamera) throw new Error("Active camera not set");
+           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), qq.render(gq, Yq)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1043-L1181` → after: `L9153-L9163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9153-L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9153-L9163) · [Before (L1043-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1043-L1181)

```diff
-         const {
-           match: pz,
-           type: Zz
-         } = Lz(Oz);
-         if (pz) {
-           const zz = {
-             onCompleteObservable: new iz.b,
-             abort: () => () => {}
-           };
-           try {
-             const zz = nz ? Pz(Oz) : Gz(Oz);
-             uz(zz, void 0, Zz)
-           } catch (Mz) {
-             tz ? tz(void 0, Mz) : dz.e.Error(Mz.message || "Failed to parse the Data URL")
-           }
-           return Fz.c.SetImmediate((() => {
- ... (123 more removed lines; see GitHub link above)
+         this._intermediateRendering = !1
+       }
+       render() {
+         let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.bM) return;
+         const gq = this._renderingMeshEvaluationDepth;
+         try {
+           this._renderFrame(qq, Eq)
+         } finally {
+           this._renderingMeshEvaluationDepth = gq
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1183-L1231` → after: `L9165-L9171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9165-L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9165-L9171) · [Before (L1183-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1183-L1231)

```diff
-       };
- 
-     function Pz(zz) {
-       return (0, tz.e)(zz.split(",")[1])
-     }
-     const Gz = zz => (0, tz.f)(zz.split(",")[1]);
-     let az;
-     const Vz = (zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) => {
-       az = {
-         DecodeBase64UrlToBinary: zz,
-         DecodeBase64UrlToString: uz,
-         DefaultRetryStrategy: bz.DefaultRetryStrategy,
-         BaseUrl: bz.BaseUrl,
-         CorsBehavior: bz.CorsBehavior,
-         PreprocessUrl: bz.PreprocessUrl,
-         IsBase64DataUrl: Ez,
- ... (33 more removed lines; see GitHub link above)
+       }
+       _renderFrame(qq, Eq) {
+         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), dq.e.ZJ = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
+           for (const gq of this.activeCameras) this._checkCameraRenderTarget(gq);
+         this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimatio … [truncated]
+         for (let gq = 0, Yq = this._beforeCameraUpdateStage; gq < Yq.length; gq++) {
+           Yq[gq].action()
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1233-L1337` → after: `L9173-L9220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9173-L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9173-L9220) · [Before (L1233-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1233-L1337)

```diff
-       })
-     };
-     let mz = !1;
- 
-     function qz() {
-       mz || (mz = !0, Vz(Pz, Gz, fz, Tz, Az, vz, oz, Nz, xz, sz), Oz.d.loadFile = vz, Oz.d.loadImage = oz, pz.i.loadFile = vz)
-     }
-   },
-   39231: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => Mz,
-       f: () => iz,
-       i: () => lz
-     });
-     let Ez = null;
- 
- ... (89 more removed lines; see GitHub link above)
+         if (qq)
+           if (this.activeCameras && this.activeCameras.length > 0)
+             for (let gq = 0; gq < this.activeCameras.length; gq++) {
+               const qq = this.activeCameras[gq];
+               if (qq.update(), 0 !== qq.cameraRigMode)
+                 for (let Eq = 0; Eq < qq._rigCameras.length; Eq++) qq._rigCameras[Eq].update()
+             } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
+               for (let gq = 0; gq < this.activeCamera._rigCameras.length; gq++) this.activeCamera._rigCameras[gq].update();
+         if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(qq, Eq);
+         else {
+           this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
+           const qq = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
+           if (this.renderTargetsEnabled) {
+             Yq.f.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
+             for (let Eq = 0; Eq < this.customRenderTargets.length; Eq++) {
+               const gq = this.customRenderTargets[Eq],
+ ... (32 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1339-L1345` → after: `L9222-L9223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9222-L9223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9222-L9223) · [Before (L1339-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1339-L1345)

```diff
-     }
- 
-     function iz(zz, uz, bz) {
-       try {
-         if (zz()) return uz(), !0
-       } catch (Ez) {
-         return bz?.(Ez), !0
+       freezeMaterials() {
+         for (let qq = 0; qq < this.materials.length; qq++) this.materials[qq].freeze()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1347-L1366` → after: `L9225-L9226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9225-L9226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9225-L9226) · [Before (L1347-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1347-L1366)

```diff
-       return !1
-     }
-     const lz = function(zz, uz, bz) {
-       let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
-         nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
-         lz = arguments.length > 6 ? arguments[6] : void 0;
-       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && iz(zz, uz, bz)) return null;
-       const Mz = setInterval((() => {
-         iz(zz, uz, bz) ? clearInterval(Mz) : (nz -= Ez, nz < 0 && (clearInterval(Mz), bz?.(new Error("Operation timed out after maximum retries. " + (lz || "")), !0)))
-       }), Ez);
-       return () => clearInterval(Mz)
-     }
-   },
-   39208: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => Ez
- ... (4 more removed lines; see GitHub link above)
+       unfreezeMaterials() {
+         for (let qq = 0; qq < this.materials.length; qq++) this.materials[qq].unfreeze()
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1368-L1369` → after: `L9228-L9263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9228-L9263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9228-L9263) · [Before (L1368-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1368-L1369)

```diff
-       static get IsCustomRequestAvailable() {
-         return Object.keys(Ez.CustomRequestHeaders).length > 0 || Ez.CustomRequestModifiers.length > 0
+       dispose() {
+         if (this.bM) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+           for (const qq of this._activeAnimatables) qq.onAnimationEndObservable.clear(), qq.onAnimationEnd = null;
+           this.stopAllAnimations()
+         }
+         this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSyste … [truncated]
+         const qq = this._activeRequests.slice();
+         for (const Oq of qq) Oq.abort();
+         this._activeRequests.length = 0;
+         try {
+           this.MJ.notifyObservers(this)
+         } catch (lq) {
+           qg.b.Error("An error occurred while calling onDisposeObservable!", lq)
+         }
+         this.detachControl();
+ ... (20 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1371-L1372` → after: `L9265-L9269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9265-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9265-L9269) · [Before (L1371-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1371-L1372)

```diff
-       static _CleanUrl(zz) {
-         return zz = (zz = zz.replace("file:http:", "http:")).replace("file:https:", "https:")
+       _disposeList(qq, Eq) {
+         const gq = qq.slice(0);
+         Eq = Eq ?? (qq => qq.dispose());
+         for (const Yq of gq) Eq(Yq);
+         qq.length = 0
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1374-L1375` → after: `L9271-L9272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9271-L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9271-L9272) · [Before (L1374-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1374-L1375)

```diff
-       static _ShouldSkipRequestModifications(zz) {
-         return Ez.SkipRequestModificationForBabylonCDN && (zz.includes("preview.babylonjs.com") || zz.includes("cdn.babylonjs.com"))
+       get bM() {
+         return this._isDisposed
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1377-L1387` → after: `L9274-L9277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9274-L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9274-L9277) · [Before (L1377-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1377-L1387)

```diff
-       static _CollectCustomizations(zz) {
-         const uz = {
-           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
-         };
-         if (Ez._ShouldSkipRequestModifications(zz)) return {
-           url: zz,
-           headers: uz
-         };
-         for (const nz in Ez.CustomRequestHeaders) {
-           const zz = Ez.CustomRequestHeaders[nz];
-           zz && (uz[nz] = zz)
+       clearCachedVertexData() {
+         for (let qq = 0; qq < this.meshes.length; qq++) {
+           const Eq = this.meshes[qq].geometry;
+           Eq && Eq.clearCachedData()
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1389-L1397` → after: `L9279-L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9279-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9279-L9282) · [Before (L1389-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1389-L1397)

```diff
-         const bz = {
-           setRequestHeader: (zz, bz) => {
-             uz[zz] = bz
-           }
-         };
-         for (const nz of Ez.CustomRequestModifiers) {
-           if (Ez._ShouldSkipRequestModifications(zz)) break;
-           const uz = nz(bz, zz);
-           "string" === typeof uz && (zz = uz)
+       }
+       cleanCachedTextureBuffer() {
+         for (const qq of this.textures) {
+           qq._buffer && (qq._buffer = null)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1399-L1416` → after: `L9284-L9431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9284-L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9284-L9431) · [Before (L1399-L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1399-L1416)

```diff
-         return {
-           url: zz,
-           headers: uz
-         }
-       }
-       static async FetchAsync(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const bz = uz.method ?? "GET";
-         if ("undefined" !== typeof fetch) {
-           const {
-             url: nz,
-             headers: iz
-           } = Ez._CollectCustomizations(Ez._CleanUrl(zz), uz.headers ?? {});
-           return await fetch(nz, {
-             method: bz,
-             headers: iz,
- ... (2 more removed lines; see GitHub link above)
+       }
+       getWorldExtends(qq) {
+         const Eq = new uq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           gq = new uq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         qq = qq || (() => !0);
+         const Yq = this.meshes.filter(qq);
+         for (const lq of Yq) {
+           if (lq.computeWorldMatrix(!0), !lq.fn || 0 === lq.fn.length || lq.infiniteDistance) continue;
+           const qq = lq.yR(),
+             Yq = qq.boundingBox.minimumWorld,
+             Oq = qq.boundingBox.maximumWorld;
+           uq.q.CheckExtends(Yq, Eq, gq), uq.q.CheckExtends(Oq, Eq, gq)
+         }
+         return Eq.x === Number.MAX_VALUE ? {
+           min: uq.q.Zero(),
+           max: uq.q.Zero()
+ ... (132 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1419-L1439` → after: `L9443-L9462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9443-L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9443-L9462) · [Before (L1419-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1419-L1439)

```diff
-           const lz = new Ez;
-           lz.responseType = "arraybuffer", lz.addEventListener("readystatechange", (() => {
-             if (4 === lz.readyState)
-               if (lz.status >= 200 && lz.status < 300) {
-                 const zz = "undefined" !== typeof Headers ? new Headers : void 0,
-                   uz = lz.getResponseHeader("Content-Type");
-                 uz && zz && zz.set("Content-Type", uz), "undefined" !== typeof Response ? nz(new Response(lz.response, {
-                   status: lz.status,
-                   statusText: lz.statusText,
-                   headers: zz
-                 })) : nz({
-                   ok: !0,
-                   status: lz.status,
-                   statusText: lz.statusText,
-                   headers: {
-                     get: zz => lz.getResponseHeader(zz)
- ... (5 more removed lines; see GitHub link above)
+           this._requestFile(qq, (qq => {
+             Oq(qq)
+           }), Eq, gq, Yq, (qq => {
+             mq(qq)
+           }), lq)
+         }))
+       }
+       _readFile(qq, Eq, gq, Yq, lq) {
+         const Oq = (0, Kq.z)(qq, Eq, gq, Yq, lq);
+         return this._activeRequests.push(Oq), Oq.onCompleteObservable.add((qq => {
+           this._activeRequests.splice(this._activeRequests.indexOf(qq), 1)
+         })), Oq
+       }
+       async _readFileAsync(qq, Eq, gq) {
+         return await new Promise(((Yq, lq) => {
+           this._readFile(qq, (qq => {
+ ... (4 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1442-L1443` → after: `L9465-L9466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9465-L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9465-L9466) · [Before (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1442-L1443)

```diff
-       get requestURL() {
-         return this._requestURL
+       getPerfCollector() {
+         throw (0, Qq.m)("performanceViewerSceneExtension")
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1445-L1446` → after: `L9468-L9469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9468-L9469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9468-L9469) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1445-L1446)

```diff
-       get onprogress() {
-         return this._xhr.onprogress
+       setActiveCameraByID(qq) {
+         return this.setActiveCameraById(qq)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1448-L1449` → after: `L9471-L9472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9471-L9472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9471-L9472) · [Before (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1448-L1449)

```diff
-       set onprogress(zz) {
-         this._xhr.onprogress = zz
+       getMaterialByID(qq) {
+         return this.getMaterialById(qq)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1451-L1452` → after: `L9474-L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9474-L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9474-L9475) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1451-L1452)

```diff
-       get readyState() {
-         return this._xhr.readyState
+       getLastMaterialByID(qq) {
+         return this.getLastMaterialById(qq)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1454-L1455` → after: `L9477-L9478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9477-L9478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9477-L9478) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1454-L1455)

```diff
-       get status() {
-         return this._xhr.status
+       getTextureByUniqueID(qq) {
+         return this.getTextureByUniqueId(qq)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1457-L1458` → after: `L9480-L9481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9480-L9481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9480-L9481) · [Before (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1457-L1458)

```diff
-       get statusText() {
-         return this._xhr.statusText
+       getCameraByID(qq) {
+         return this.getCameraById(qq)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1460-L1461` → after: `L9483-L9484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9483-L9484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9483-L9484) · [Before (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1460-L1461)

```diff
-       get response() {
-         return this._xhr.response
+       getCameraByUniqueID(qq) {
+         return this.getCameraByUniqueId(qq)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1463-L1464` → after: `L9486-L9487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9486-L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9486-L9487) · [Before (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1463-L1464)

```diff
-       get responseURL() {
-         return this._xhr.responseURL
+       getBoneByID(qq) {
+         return this.getBoneById(qq)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1466-L1467` → after: `L9489-L9490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9489-L9490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9489-L9490) · [Before (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1466-L1467)

```diff
-       get responseText() {
-         return this._xhr.responseText
+       getLightByID(qq) {
+         return this.getLightById(qq)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1469-L1470` → after: `L9492-L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9492-L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9492-L9493) · [Before (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1469-L1470)

```diff
-       get responseType() {
-         return this._xhr.responseType
+       getLightByUniqueID(qq) {
+         return this.getLightByUniqueId(qq)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1472-L1473` → after: `L9495-L9496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9495-L9496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9495-L9496) · [Before (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1472-L1473)

```diff
-       set responseType(zz) {
-         this._xhr.responseType = zz
+       getParticleSystemByID(qq) {
+         return this.getParticleSystemById(qq)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1475-L1476` → after: `L9498-L9499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9498-L9499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9498-L9499) · [Before (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1475-L1476)

```diff
-       get timeout() {
-         return this._xhr.timeout
+       getGeometryByID(qq) {
+         return this.getGeometryById(qq)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1478-L1479` → after: `L9501-L9502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9501-L9502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9501-L9502) · [Before (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1478-L1479)

```diff
-       set timeout(zz) {
-         this._xhr.timeout = zz
+       getMeshByID(qq) {
+         return this.getMeshById(qq)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1481-L1482` → after: `L9504-L9505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9504-L9505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9504-L9505) · [Before (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1481-L1482)

```diff
-       addEventListener(zz, uz, bz) {
-         this._xhr.addEventListener(zz, uz, bz)
+       getMeshByUniqueID(qq) {
+         return this.getMeshByUniqueId(qq)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1484-L1485` → after: `L9507-L9508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9507-L9508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9507-L9508) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1484-L1485)

```diff
-       removeEventListener(zz, uz, bz) {
-         this._xhr.removeEventListener(zz, uz, bz)
+       getLastMeshByID(qq) {
+         return this.getLastMeshById(qq)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1487-L1488` → after: `L9510-L9511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9510-L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9510-L9511) · [Before (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1487-L1488)

```diff
-       abort() {
-         this._xhr.abort()
+       getMeshesByID(qq) {
+         return this.getMeshesById(qq)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1490-L1491` → after: `L9513-L9514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9513-L9514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9513-L9514) · [Before (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1490-L1491)

```diff
-       send(zz) {
-         this._xhr.send(zz)
+       getTransformNodeByID(qq) {
+         return this.getTransformNodeById(qq)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1493-L1499` → after: `L9516-L9551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9516-L9551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9516-L9551) · [Before (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1493-L1499)

```diff
-       open(zz, uz, bz) {
-         const {
-           url: nz,
-           headers: iz
-         } = Ez._CollectCustomizations(uz, bz);
-         this._requestURL = Ez._CleanUrl(nz), this._xhr.open(zz, this._requestURL, !0);
-         for (const Ez in iz) this._xhr.setRequestHeader(Ez, iz[Ez])
+       getTransformNodeByUniqueID(qq) {
+         return this.getTransformNodeByUniqueId(qq)
+       }
+       getTransformNodesByID(qq) {
+         return this.getTransformNodesById(qq)
+       }
+       getNodeByID(qq) {
+         return this.getNodeById(qq)
+       }
+       getLastEntryByID(qq) {
+         return this.getLastEntryById(qq)
+       }
+       getLastSkeletonByID(qq) {
+         return this.getLastSkeletonById(qq)
+       }
+     }
+ ... (20 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1501-L1502` → after: `L9553-L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9553-L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9553-L9581) · [Before (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1501-L1502)

```diff
-       setRequestHeader(zz, uz) {
-         this._xhr.setRequestHeader(zz, uz)
+       registerStep(qq, Eq, gq) {
+         let Yq, lq = 0;
+         for (; lq < this.length; lq++) {
+           if (Yq = this[lq].index, qq < Yq) break
+         }
+         this.splice(lq, 0, {
+           index: qq,
+           component: Eq,
+           action: gq.bind(Eq)
+         })
+       }
+       clear() {
+         this.length = 0
+       }
+     }
+   },
+ ... (13 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1504-L1505` → after: `L9583-L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9583-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9583-L9599) · [Before (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1504-L1505)

```diff
-       getResponseHeader(zz) {
-         return this._xhr.getResponseHeader(zz)
+       for (var xq, Aq = Yq.kind, cq = "getter" === Aq ? "get" : "setter" === Aq ? "set" : "value", uq = !Eq && qq ? Yq.static ? qq : qq.prototype : null, Bq = Eq || (uq ? Object.getOwnPropertyDescriptor(uq, Yq.name) : {}), Wq = !1, Nq = gq.length - 1; Nq >= 0; Nq--) {
+         var aq = {};
+         for (var Vq in Yq) aq[Vq] = "access" === Vq ? {} : Yq[Vq];
+         for (var Vq in Yq.access) aq.access[Vq] = Yq.access[Vq];
+         aq.addInitializer = function(qq) {
+           if (Wq) throw new TypeError("Cannot add initializers after decoration has completed");
+           Oq.push(mq(qq || null))
+         };
+         var dq = (0, gq[Nq])("accessor" === Aq ? {
+           get: Bq.get,
+           set: Bq.set
+         } : Bq[cq], aq);
+         if ("accessor" === Aq) {
+           if (void 0 === dq) continue;
+           if (null === dq || "object" !== typeof dq) throw new TypeError("Object expected");
+           (xq = mq(dq.get)) && (Bq.get = xq), (xq = mq(dq.set)) && (Bq.set = xq), (xq = mq(dq.init)) && lq.unshift(xq)
+ ... (1 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1508` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/244.js#L9630) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/244.js#L1508)

```diff
-     Ez.CustomRequestHeaders = {}, Ez.CustomRequestModifiers = new Array, Ez.SkipRequestModificationForBabylonCDN = !0
+     "function" === typeof SuppressedError && SuppressedError
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/245.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/245.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/245.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/245.js#L2)

```diff
- export const ids = [245];
+ export const ids = [245, 346];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/245.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/245.js#L4)

```diff
-   39265: (zz, uz, bz) => {
+   39617: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L11-L19` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/245.js#L9-L16) · [Before (L11-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/245.js#L11-L19)

```diff
-       static Instantiate(zz) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[zz]) return this.RegisteredExternalClasses[zz];
-         const uz = (0, nz.b)(zz);
-         if (uz) return uz;
-         Ez.e.Warn(zz + " not found, you may have missed an import.");
-         const bz = zz.split(".");
-         let iz = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let Ez = 0, nz = bz.length; Ez < nz; Ez++) iz = iz[bz[Ez]];
-         return "function" !== typeof iz ? null : iz
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersRepository : Yq.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersStore : Yq.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.IncludesShadersStore : Yq.IncludesShadersStoreWGSL
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L22` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/245.js#L19) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/245.js#L22)

```diff
-     iz.RegisteredExternalClasses = {}
+     Yq.ShadersRepository = "src/Shaders/", Yq.ShadersStore = {}, Yq.IncludesShadersStore = {}, Yq.ShadersRepositoryWGSL = "src/ShadersWGSL/", Yq.ShadersStoreWGSL = {}, Yq.IncludesShadersStoreWGSL = {}
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L24-L26` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/245.js#L21-L23) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/245.js#L24-L26)

```diff
-   39085: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => nz
+   61138: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       postprocessVertexShader: () => mq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L28-L612` → after: `L25-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/245.js#L25-L31) · [Before (L28-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/245.js#L28-L612)

```diff
-     var Ez = bz(39043);
-     class nz {
-       static get Now() {
-         return (0, Ez.i)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
-       }
-     }
-   },
-   39118: (zz, uz, bz) => {
-     function Ez(zz) {
-       let uz = 1;
-       do {
-         uz *= 2
-       } while (uz < zz);
-       return uz === zz
-     }
- 
- ... (569 more removed lines; see GitHub link above)
+     var Yq = gq(39617);
+     const lq = "postprocessVertexShader",
+       Oq = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/246.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/246.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768)

#### 1. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L4)

```diff
-   39609: (zz, uz, bz) => {
+   39817: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L6)

```diff
-       b: () => Ez
+       c: () => Wq,
+       d: () => Bq,
+       h: () => Aq,
+       l: () => Nq,
+       o: () => cq,
+       q: () => xq,
+       r: () => uq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L8` → after: `L14-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L14-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L14-L235) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L8)

```diff
-     let Ez = !1
+     var Yq = gq(38653),
+       lq = gq(39819);
+ 
+     function Oq(qq, Eq, gq, Yq) {
+       switch (Eq) {
+         case 5120: {
+           let Eq = qq.getInt8(gq);
+           return Yq && (Eq = Math.max(Eq / 127, -1)), Eq
+         }
+         case 5121: {
+           let Eq = qq.getUint8(gq);
+           return Yq && (Eq /= 255), Eq
+         }
+         case 5122: {
+           let Eq = qq.getInt16(gq, !0);
+           return Yq && (Eq = Math.max(Eq / 32767, -1)), Eq
+ ... (206 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L10` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L237) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L10)

```diff
-   39167: (zz, uz, bz) => {
+   39640: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L12` → after: `L239-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L239-L243) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L12)

```diff
-       b: () => Zz
+       d: () => rq,
+       f: () => yq,
+       k: () => tq,
+       g: () => fq,
+       n: () => Mq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L22-L23` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L246-L247) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L22-L23)

```diff
-       get wrapU() {
-         return this._wrapU
+       constructor() {
+         this.children = []
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L25-L26` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L249-L250) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L25-L26)

```diff
-       set wrapU(zz) {
-         this._wrapU = zz
+       isValid(qq) {
+         return !0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L28-L29` → after: `L252-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L252-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L252-L274) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L28-L29)

```diff
-       get wrapV() {
-         return this._wrapV
+       process(qq, Eq, gq) {
+         let Yq = "";
+         if (this.line) {
+           let gq = this.line;
+           const lq = Eq.processor;
+           if (lq) {
+             lq.lineProcessor && (gq = lq.lineProcessor(gq, Eq.isFragment, Eq.processingContext));
+             const Yq = Eq.processor?.attributeKeywordName ?? "attribute",
+               Oq = Eq.isFragment && Eq.processor?.varyingFragmentKeywordName ? Eq.processor?.varyingFragmentKeywordName : !Eq.isFragment && Eq.processor?.varyingVertexKeywordName ? Eq.processor?.varyingVertexKeywordName : "varying";
+             if (!Eq.isFragment && lq.attributeProcessor && this.line.startsWith(Yq)) gq = lq.attributeProcessor(this.line, qq, Eq.processingContext);
+             else if (lq.varyingProcessor && (lq.varyingCheck?.(this.line, Eq.isFragment) || !lq.varyingCheck && this.line.startsWith(Oq))) gq = lq.varyingProcessor(this.line, Eq.isFragment, qq, Eq.processingContext);
+             else if (lq.uniformProcessor && lq.uniformRegexp && lq.uniformRegexp.test(this.line)) Eq.lookForClosingBracketForUniformBuffer || (gq = lq.uniformProcessor(this.line, Eq.isFragment, qq, Eq.processingContext));
+             else if (lq.uniformBufferProcessor && lq.uniformBufferRegexp && lq.uniformBufferRegexp.test(this.line)) Eq.lookForClosingBracketForUniformBuffer || (gq = lq.uniformBufferProcessor(this.line, Eq.isFragment, Eq.processingContext), Eq.lookForClosingBracketForUniformBuffe … [truncated]
+             else if (lq.textureProcessor && lq.textureRegexp && lq.textureRegexp.test(this.line)) gq = lq.textureProcessor(this.line, Eq.isFragment, qq, Eq.processingContext);
+             else if ((lq.uniformProcessor || lq.uniformBufferProcessor) && this.line.startsWith("uniform") && !Eq.lookForClosingBracketForUniformBuffer) {
+               /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? lq.uniformProcessor && (gq = lq.uniformProcessor(this.line, Eq.isFragment, qq, Eq.processingContext)) : lq.uniformBufferProcessor && (gq = lq.uniformBufferProcessor(this.line, Eq.isFragment,  … [truncated]
+ ... (7 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L31-L32` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L276-L279) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L31-L32)

```diff
-       set wrapV(zz) {
-         this._wrapV = zz
+     }
+     class lq {
+       constructor() {
+         this._lines = []
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L34-L35` → after: `L281-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L281-L282) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L34-L35)

```diff
-       get coordinatesMode() {
-         return 0
+       get currentLine() {
+         return this._lines[this.lineIndex]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L37-L38` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L284-L285) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L37-L38)

```diff
-       get isCube() {
-         return !!this._texture && this._texture.isCube
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L40-L41` → after: `L287-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L287-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L287-L311) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L40-L41)

```diff
-       set isCube(zz) {
-         this._texture && (this._texture.isCube = zz)
+       set lines(qq) {
+         this._lines.length = 0;
+         for (const Eq of qq) {
+           if (!Eq || "\r" === Eq) continue;
+           if ("#" === Eq[0]) {
+             this._lines.push(Eq);
+             continue
+           }
+           const qq = Eq.trim();
+           if (!qq) continue;
+           if (qq.startsWith("//")) {
+             this._lines.push(Eq);
+             continue
+           }
+           const gq = qq.indexOf(";");
+           if (-1 === gq) this._lines.push(qq);
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L43-L44` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L313-L320) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L43-L44)

```diff
-       get is3D() {
-         return !!this._texture && this._texture.is3D
+     }
+     class Oq extends Yq {
+       process(qq, Eq, gq) {
+         for (let Yq = 0; Yq < this.children.length; Yq++) {
+           const lq = this.children[Yq];
+           if (lq.isValid(qq)) return lq.process(qq, Eq, gq)
+         }
+         return ""
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L46-L47` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L322-L325) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L46-L47)

```diff
-       set is3D(zz) {
-         this._texture && (this._texture.is3D = zz)
+     }
+     class mq extends Yq {
+       isValid(qq) {
+         return this.testExpression.isTrue(qq)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L49-L50` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L327-L330) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L49-L50)

```diff
-       get is2DArray() {
-         return !!this._texture && this._texture.is2DArray
+     }
+     class xq {
+       isTrue(qq) {
+         return !0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L52-L53` → after: `L332-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L332-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L332-L340) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L52-L53)

```diff
-       set is2DArray(zz) {
-         this._texture && (this._texture.is2DArray = zz)
+       static postfixToInfix(qq) {
+         const Eq = [];
+         for (const gq of qq)
+           if (void 0 === xq._OperatorPriority[gq]) Eq.push(gq);
+           else {
+             const qq = Eq[Eq.length - 1],
+               Yq = Eq[Eq.length - 2];
+             Eq.length -= 2, Eq.push(`(${Yq}${gq}${qq})`)
+           } return Eq[Eq.length - 1]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L55-L56` → after: `L342-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L342-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L342-L375) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L55-L56)

```diff
-       getClassName() {
-         return "ThinTexture"
+       static infixToPostfix(qq) {
+         const Eq = xq._InfixToPostfixCache.get(qq);
+         if (Eq) return Eq.accessTime = Date.now(), Eq.result;
+         if (!qq.includes("&&") && !qq.includes("||") && !qq.includes(")") && !qq.includes("(")) return [qq];
+         const gq = [];
+         let Yq = -1;
+         const lq = () => {
+             uq = uq.trim(), "" !== uq && (gq.push(uq), uq = "")
+           },
+           Oq = qq => {
+             Yq < xq._Stack.length - 1 && (xq._Stack[++Yq] = qq)
+           },
+           mq = () => xq._Stack[Yq],
+           Aq = () => -1 === Yq ? "!!INVALID EXPRESSION!!" : xq._Stack[Yq--];
+         let cq = 0,
+           uq = "";
+ ... (18 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L58-L59` → after: `L377-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L377-L379) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L58-L59)

```diff
-       static _IsRenderTargetWrapper(zz) {
-         return void 0 !== zz?.shareDepth
+       static ClearCache() {
+         const qq = Array.from(xq._InfixToPostfixCache.entries()).sort(((qq, Eq) => qq[1].accessTime - Eq[1].accessTime));
+         for (let Eq = 0; Eq < xq.InfixToPostfixCacheCleanupSize; Eq++) xq._InfixToPostfixCache.delete(qq[Eq][0])
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L62-L65` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L390-L391) · [Before (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L62-L65)

```diff
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Hz.e.Zero(), this._cachedBaseSize = Hz.e.Zero(), this._initialSamplingMode = 2, this._texture = Oz. … [truncated]
-       }
-       isReady() {
-         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         super(), this.define = qq, this.not = Eq
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L67-L69` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L393-L395) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L67-L69)

```diff
-       delayLoad() {}
-       getInternalTexture() {
-         return this._texture
+       isTrue(qq) {
+         let Eq = void 0 !== qq[this.define];
+         return this.not && (Eq = !Eq), Eq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L71-L76` → after: `L397-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L397-L400) · [Before (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L71-L76)

```diff
-       getSize() {
-         if (this._texture) {
-           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
-           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
-         }
-         return this._cachedSize
+     }
+     class cq extends xq {
+       isTrue(qq) {
+         return this.leftOperand.isTrue(qq) || this.rightOperand.isTrue(qq)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L78-L79` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L402-L405) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L78-L79)

```diff
-       getBaseSize() {
-         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+     }
+     class uq extends xq {
+       isTrue(qq) {
+         return this.leftOperand.isTrue(qq) && this.rightOperand.isTrue(qq)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L81-L82` → after: `L407-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L407-L410) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+     }
+     class Bq extends xq {
+       constructor(qq, Eq, gq) {
+         super(), this.define = qq, this.operand = Eq, this.testValue = gq
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L84-L86` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L412-L413) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L84-L86)

```diff
-       updateSamplingMode(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(zz, this._texture, this._texture.generateMipMaps && uz)
+       toString() {
+         return `${this.define} ${this.operand} ${this.testValue}`
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L88-L89` → after: `L415-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L415-L439) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+       isTrue(qq) {
+         let Eq = !1;
+         const gq = parseInt(void 0 != qq[this.define] ? qq[this.define] : this.define),
+           Yq = parseInt(void 0 != qq[this.testValue] ? qq[this.testValue] : this.testValue);
+         if (isNaN(gq) || isNaN(Yq)) return !1;
+         switch (this.operand) {
+           case ">":
+             Eq = gq > Yq;
+             break;
+           case "<":
+             Eq = gq < Yq;
+             break;
+           case "<=":
+             Eq = gq <= Yq;
+             break;
+           case ">=":
+ ... (9 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L91-L92` → after: `L441-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L441-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L441-L485) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L91-L92)

```diff
-       dispose() {
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+     }
+     var Wq = gq(39636),
+       Nq = gq(39630);
+     const aq = /defined\s*?\((.+?)\)/g,
+       Vq = /defined\s*?\[(.+?)\]/g,
+       dq = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       jq = /__decl__/,
+       Hq = /light\{X\}.(\w*)/g,
+       oq = /\{X\}/g,
+       Pq = [],
+       Qq = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function yq(qq) {
+       qq.processor && qq.processor.initializeShaders && qq.processor.initializeShaders(qq.processingContext)
+     }
+ 
+ ... (29 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L95-L181` → after: `L488-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L488-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L488-L518) · [Before (L95-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L95-L181)

```diff
-     var pz, dz = bz(39182),
-       Fz = bz(39061);
-     let Zz = (() => {
-       var zz;
-       let uz, bz, Hz, pz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz, Gz, az, Vz, mz = Oz,
-         qz = [],
-         hz = [],
-         Uz = [],
-         cz = [],
-         gz = [],
-         Sz = [],
-         yz = [],
-         Dz = [],
-         Qz = [],
-         Wz = [],
-         ez = [],
- ... (71 more removed lines; see GitHub link above)
+ 
+     function vq(qq) {
+       const Eq = /defined\((.+)\)/.exec(qq);
+       if (Eq && Eq.length) return new Aq(Eq[1].trim(), "!" === qq[0]);
+       const gq = ["==", "!=", ">=", "<=", "<", ">"];
+       let Yq = "",
+         lq = 0;
+       for (Yq of gq)
+         if (lq = qq.indexOf(Yq), lq > -1) break;
+       if (-1 === lq) return new Aq(qq);
+       const Oq = qq.substring(0, lq).trim(),
+         mq = qq.substring(lq + Yq.length).trim();
+       return new Bq(Oq, Yq, mq)
+     }
+ 
+     function hq(qq, Eq) {
+ ... (15 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L183-L184` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L520-L532) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L183-L184)

```diff
-         set is2DArray(zz) {
-           this._texture && (this._texture.is2DArray = zz)
+         let Yq = gq[gq.length - 1];
+         return "string" === typeof Yq && (Yq = Yq.replace(Vq, "defined($1)")), "string" === typeof Yq ? vq(Yq) : Yq
+       }(lq), gq
+     }
+ 
+     function nq(qq, Eq, gq, lq) {
+       let Oq;
+       for (; bq(qq, gq, lq);) {
+         Oq = qq.currentLine;
+         const mq = Oq.substring(0, 5).toLowerCase();
+         if ("#else" === mq) {
+           const gq = new Yq;
+           return Eq.children.push(gq), void bq(qq, gq, lq)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L186-L187` → after: `L534-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L534-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L534-L536) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L186-L187)

```diff
-         get gammaSpace() {
-           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
+         if ("#elif" === mq) {
+           const qq = hq(Oq, 5);
+           Eq.children.push(qq), gq = qq
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L189-L195` → after: `L538-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L538-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L538-L575) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L189-L195)

```diff
-         set gammaSpace(zz) {
-           if (this._texture) {
-             if (this._texture._gammaSpace === zz) return;
-             this._texture._gammaSpace = zz
-           } else {
-             if (this._gammaSpace === zz) return;
-             this._gammaSpace = zz
+       }
+     }
+ 
+     function bq(qq, Eq, gq) {
+       for (; qq.canRead;) {
+         qq.lineIndex++;
+         const lq = qq.currentLine;
+         if (lq.indexOf("#") >= 0) {
+           const Yq = Qq.exec(lq);
+           if (Yq && Yq.length) {
+             switch (Yq[0]) {
+               case "#ifdef": {
+                 const Yq = new Oq;
+                 Eq.children.push(Yq);
+                 const mq = hq(lq, 6);
+                 Yq.children.push(mq), nq(qq, Yq, mq, gq);
+ ... (22 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L238-L239` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L578-L581) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L238-L239)

```diff
-         getClassName() {
-           return "BaseTexture"
+         const mq = new Yq;
+         if (mq.line = lq, Eq.children.push(mq), "#" === lq[0] && "d" === lq[1]) {
+           const qq = lq.replace(";", "").split(" ");
+           mq.additionalDefineKey = qq[1], 3 === qq.length && (mq.additionalDefineValue = qq[2])
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L241-L286` → after: `L583-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L583-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L583-L623) · [Before (L241-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L241-L286)

```diff
-         set onDispose(zz) {
-           this._onDisposeObserver && this.aT.remove(this._onDisposeObserver), this._onDisposeObserver = this.aT.add(zz)
-         }
-         get isBlocking() {
-           return !0
-         }
-         get loadingError() {
-           return this._loadingError
-         }
-         get errorObject() {
-           return this._errorObject
-         }
-         constructor(uz) {
-           let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           super(null), this.uniqueId = ((0, Ez.j)(this, qz), (0, Ez.j)(this, hz, void 0)), this.name = ((0, Ez.j)(this, Uz), (0, Ez.j)(this, cz, void 0)), this.displayName = ((0, Ez.j)(this, gz), (0, Ez.j)(this, Sz, void 0)), this.metadata = ((0, Ez.j)(this, yz), (0, Ez.j)(this,  … [truncated]
-         }
- ... (30 more removed lines; see GitHub link above)
+       }
+       return !1
+     }
+ 
+     function iq(qq, Eq, gq, Oq) {
+       const mq = new Yq,
+         xq = new lq;
+       return xq.lineIndex = -1, xq.lines = qq.split("\n"), bq(xq, mq, Oq), mq.process(Eq, gq, Oq)
+     }
+ 
+     function Zq(qq, Eq) {
+       const gq = qq.defines,
+         Yq = {};
+       for (const lq of gq) {
+         const qq = lq.replace("#define", "").replace(";", "").trim().split(" ");
+         Yq[qq[0]] = qq.length > 1 ? qq[1] : ""
+ ... (25 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L288-L324` → after: `L625-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L625-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L625-L634) · [Before (L288-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L288-L324)

```diff
-           return null
-         }
-         _rebuild() {}
-         clone() {
-           return null
-         }
-         get textureType() {
-           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
-         }
-         get textureFormat() {
-           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
-         }
-         _markAllSubMeshesAsTexturesDirty() {
-           const zz = this.XT();
-           zz && zz.markAllMaterialsAsDirty(1)
-         }
- ... (21 more removed lines; see GitHub link above)
+           if (xq[4]) {
+             const qq = xq[5];
+             if (-1 !== qq.indexOf("..")) {
+               const Yq = qq.split(".."),
+                 lq = parseInt(Yq[0]);
+               let Oq = parseInt(Yq[1]),
+                 mq = gq.slice(0);
+               gq = "", isNaN(Oq) && (Oq = Eq.indexParameters[Yq[1]]);
+               for (let qq = lq; qq < Oq; qq++) Eq.supportsUniformBuffers || (mq = mq.replace(Hq, ((qq, Eq) => Eq + "{X}"))), gq += mq.replace(oq, qq.toString()) + "\n"
+             } else Eq.supportsUniformBuffers || (gq = gq.replace(Hq, ((qq, Eq) => Eq + "{X}"))), gq = gq.replace(oq, qq)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L326-L343` → after: `L636-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L636-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L636-L640) · [Before (L326-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L326-L343)

```diff
-         }
-         _readPixelsSync() {
-           let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-             bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-             Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-             nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-           if (!this._texture) return null;
-           const iz = this.getSize();
-           let lz = iz.width,
-             Mz = iz.height;
-           const tz = this._getEngine();
-           if (!tz) return null;
-           0 != uz && (lz /= Math.pow(2, uz), Mz /= Math.pow(2, uz), lz = Math.round(lz), Mz = Math.round(Mz));
-           try {
-             return this._texture.isCube ? tz._readTexturePixelsSync(this._texture, lz, Mz, zz, uz, bz, Ez, nz) : tz._readTexturePixelsSync(this._texture, lz, Mz, -1, uz, bz, Ez, nz)
- ... (2 more removed lines; see GitHub link above)
+           const Yq = [];
+           for (const qq of lq) {
+             const Eq = qq.split(xq[0]);
+             for (let qq = 0; qq < Eq.length - 1; qq++) Yq.push(Eq[qq]), Yq.push(gq);
+             Yq.push(Eq[Eq.length - 1])
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L346-L347` → after: `L644-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L644-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L644-L690) · [Before (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L346-L347)

```diff
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
+       }
+       Pq.length = 0;
+       const mq = lq.join("");
+       Oq ? fq(mq.toString(), Eq, gq) : gq(mq)
+     }
+     const Mq = {
+       loadFile: (qq, Eq, gq, Yq, lq, Oq) => {
+         throw (0, Wq.m)("FileTools")
+       }
+     }
+   },
+   39630: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => lq,
+       h: () => Oq,
+       i: () => xq,
+ ... (31 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L349-L350` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L692-L694) · [Before (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L349-L350)

```diff
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
+         case 0: {
+           const qq = new Uint8Array(Eq);
+           return Yq && qq.set(new Uint8Array(Yq)), qq
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L352-L353` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L696-L698) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L352-L353)

```diff
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
+         case 4: {
+           const qq = "number" !== typeof Eq ? new Int16Array(Eq) : new Int16Array(gq ? Eq / 2 : Eq);
+           return Yq && qq.set(new Int16Array(Yq)), qq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L355-L364` → after: `L700-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L700-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L700-L706) · [Before (L355-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L355-L364)

```diff
-         dispose() {
-           if (this._scene) {
-             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
-             const zz = this._scene.textures.indexOf(this);
-             if (zz >= 0 && this._scene.textures.splice(zz, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
-               const zz = this._parentContainer.textures.indexOf(this);
-               zz > -1 && this._parentContainer.textures.splice(zz, 1), this._parentContainer = null
-             }
-           }
-           this.aT.notifyObservers(this), this.aT.clear(), this.metadata = null, super.dispose()
+         case 5:
+         case 8:
+         case 9:
+         case 10:
+         case 2: {
+           const qq = "number" !== typeof Eq ? new Uint16Array(Eq) : new Uint16Array(gq ? Eq / 2 : Eq);
+           return Yq && qq.set(new Uint16Array(Yq)), qq
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L366-L370` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L708-L710) · [Before (L366-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L366-L370)

```diff
-         serialize() {
-           let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !zz) return null;
-           const uz = dz.e.Serialize(this);
-           return dz.e.AppendSerializedAnimations(this, uz), uz
+         case 6: {
+           const qq = "number" !== typeof Eq ? new Int32Array(Eq) : new Int32Array(gq ? Eq / 4 : Eq);
+           return Yq && qq.set(new Int32Array(Yq)), qq
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L372-L384` → after: `L712-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L712-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L712-L719) · [Before (L372-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L372-L384)

```diff
-         static WhenAllReady(zz, uz) {
-           let bz = zz.length;
-           if (0 !== bz)
-             for (let Ez = 0; Ez < zz.length; Ez++) {
-               const nz = zz[Ez];
-               if (nz.isReady()) 0 === --bz && uz();
-               else {
-                 const zz = nz.onLoadObservable;
-                 zz ? zz.addOnce((() => {
-                   0 === --bz && uz()
-                 })) : 0 === --bz && uz()
-               }
-             } else uz()
+         case 7:
+         case 11:
+         case 12:
+         case 13:
+         case 14:
+         case 15: {
+           const qq = "number" !== typeof Eq ? new Uint32Array(Eq) : new Uint32Array(gq ? Eq / 4 : Eq);
+           return Yq && qq.set(new Uint32Array(Yq)), qq
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L386-L387` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L721-L723) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L386-L387)

```diff
-         static _IsScene(zz) {
-           return "Scene" === zz.getClassName()
+         case 1: {
+           const qq = "number" !== typeof Eq ? new Float32Array(Eq) : new Float32Array(gq ? Eq / 4 : Eq);
+           return Yq && qq.set(new Float32Array(Yq)), qq
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L389-L694` → after: `L725-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L725-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L725-L728) · [Before (L389-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L389-L694)

```diff
-       }, (() => {
-         const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(mz[Symbol.metadata] ?? null) : void 0;
-         uz = [(0, nz.G)()], bz = [(0, nz.G)()], Hz = [(0, nz.G)()], pz = [(0, nz.G)()], Fz = [(0, nz.G)("hasAlpha")], Zz = [(0, nz.G)("getAlphaFromRGB")], Rz = [(0, nz.G)()], Kz = [(0, nz.G)("coordinatesIndex")], wz = [(0, nz.G)()], Xz = [(0, nz.G)("coordinatesMode")], fz = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "wrapU" in zz,
-             get: zz => zz.wrapU
-           },
-           metadata: iz
-         }, null, qz), (0, Ez.h)(zz, null, sz, {
-           kind: "getter",
-           name: "wrapV",
-           static: !1,
- ... (290 more removed lines; see GitHub link above)
+       }
+       const lq = new Uint8Array(Eq);
+       return Yq && lq.set(new Uint8Array(Yq)), lq
+     }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L698-L699` → after: `L732-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L732-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L732-L735) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L698-L699)

```diff
-       d: () => rz,
-       e: () => fz
+       b: () => cq,
+       e: () => uq,
+       i: () => Aq,
+       m: () => lq
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L701-L711` → after: `L737-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L737-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L737-L744) · [Before (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L701-L711)

```diff
-     var Ez = bz(39170),
-       nz = bz(39172),
-       iz = bz(36547),
-       lz = bz(36519),
-       Mz = bz(39167),
-       tz = bz(36564),
-       Hz = bz(39061),
-       Oz = bz(39071),
-       pz = bz(39265),
-       dz = bz(37239),
-       Fz = bz(39221);
+     const Yq = {};
+ 
+     function lq(qq) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Yq[qq]) return Yq[qq] = !0, `${qq} needs to be imported before as it contains a side-effect required by your code.`
+     }
+     const Oq = {};
+     let mq = !1,
+       xq = 0;
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L715-L722` → after: `L748-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L748-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L748-L751) · [Before (L715-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L715-L722)

```diff
-       const Ez = uz.width,
-         nz = uz.height;
-       if (zz instanceof Float32Array) {
-         let uz = zz.byteLength / zz.BYTES_PER_ELEMENT;
-         const bz = new Uint8Array(uz);
-         for (; --uz >= 0;) {
-           let Ez = zz[uz];
-           Ez < 0 ? Ez = 0 : Ez > 1 && (Ez = 1), bz[uz] = 255 * Ez
+       const Yq = function() {
+         if ((gq || mq) && 0 === xq) {
+           const gq = `${qq}.${Eq}`;
+           Oq[gq] || (Oq[gq] = !0, console.warn(`[Babylon.js] ${gq}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L724-L737` → after: `L753-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L753-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L753-L754) · [Before (L724-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L724-L737)

```diff
-         zz = bz
-       }
-       const iz = document.createElement("canvas");
-       iz.width = Ez, iz.height = nz;
-       const lz = iz.getContext("2d");
-       if (!lz) return null;
-       const Mz = lz.createImageData(Ez, nz);
-       if (Mz.data.set(zz), lz.putImageData(Mz, 0, 0), bz) {
-         const zz = document.createElement("canvas");
-         zz.width = Ez, zz.height = nz;
-         const uz = zz.getContext("2d");
-         return uz ? (uz.translate(0, nz), uz.scale(1, -1), uz.drawImage(iz, 0, 0), zz.toDataURL("image/png")) : null
-       }
-       return iz.toDataURL("image/png")
+       };
+       return Yq.__isSideEffectStub = !0, Yq
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L741-L746` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L758) · [Before (L741-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L741-L746)

```diff
-       let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Ez = zz.getInternalTexture();
-       if (!Ez) return null;
-       const nz = zz._readPixelsSync(uz, bz);
-       return nz ? Zz(nz, zz.getSize(), Ez.invertY) : null
+       return !!qq && !qq.__isSideEffectStub
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L748-L754` → after: `L760-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L760-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L760-L774) · [Before (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L748-L754)

```diff
-     async function Kz(zz) {
-       let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Ez = zz.getInternalTexture();
-       if (!Ez) return null;
-       const nz = await zz.readPixels(uz, bz);
-       return nz ? Zz(nz, zz.getSize(), Ez.invertY) : null
+ 
+     function uq(qq, Eq) {
+       return {
+         get() {},
+         set(qq) {
+           Object.defineProperty(this, Eq, {
+             value: qq,
+             writable: !0,
+             configurable: !0,
+             enumerable: !0
+           })
+         },
+         configurable: !0,
+         enumerable: !0
+       }
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L756-L789` → after: `L776-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L776-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L776-L873) · [Before (L756-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L756-L789)

```diff
-     var wz = bz(39609),
-       Xz = bz(39182);
-     let fz = (() => {
-         var zz;
-         let uz, bz, Zz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz = Mz.b,
-           Pz = [],
-           Gz = [],
-           az = [],
-           Vz = [],
-           mz = [],
-           qz = [],
-           hz = [],
-           Uz = [],
-           cz = [],
-           gz = [],
-           Sz = [],
- ... (18 more removed lines; see GitHub link above)
+   },
+   39626: (qq, Eq, gq) => {
+     function Yq() {
+       return "undefined" !== typeof window
+     }
+ 
+     function lq() {
+       return "undefined" !== typeof navigator
+     }
+ 
+     function Oq() {
+       return "undefined" !== typeof document
+     }
+ 
+     function mq(qq) {
+       let Eq = "",
+ ... (82 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L791-L792` → after: `L875-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L875-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L875-L888) · [Before (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L791-L792)

```diff
-           get noMipmap() {
-             return this._noMipmap
+         }.ExponentialBackoff(),
+         BaseUrl: "",
+         CorsBehavior: "anonymous",
+         PreprocessUrl: qq => qq,
+         ScriptBaseUrl: "",
+         ScriptPreprocessUrl: qq => qq,
+         CleanUrl: qq => qq = qq.replace(/#/gm, "%23")
+       },
+       Pq = (qq, Eq) => {
+         if ((!qq || 0 !== qq.indexOf("data:")) && oq.CorsBehavior)
+           if ("string" === typeof oq.CorsBehavior || oq.CorsBehavior instanceof String) Eq.crossOrigin = oq.CorsBehavior;
+           else {
+             const gq = oq.CorsBehavior(qq);
+             gq && (Eq.crossOrigin = gq)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L794-L795` → after: `L890-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L890-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L890-L906) · [Before (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L794-L795)

```diff
-           get mimeType() {
-             return this._mimeType
+       },
+       Qq = {
+         getRequiredSize: null
+       },
+       yq = function(qq, Eq, gq, lq) {
+         let Oq, xq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
+           uq = arguments.length > 5 ? arguments[5] : void 0,
+           Bq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cq.b.LastCreatedEngine;
+         if ("undefined" === typeof HTMLImageElement && !Bq?._features.forceBitmapOverHTMLImageElement) return gq("LoadImage is only supported in web or BabylonNative environments."), null;
+         if (Bq?._features.forceBitmapOverHTMLImageElement && "string" !== typeof qq && "undefined" !== typeof Blob) {
+           let Yq;
+           if (qq instanceof Blob) Yq = qq;
+           else {
+             const Eq = qq instanceof ArrayBuffer ? qq : (0, aq.l)(qq);
+             Yq = new Blob([Eq], {
+               type: xq
+ ... (1 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L797-L798` → after: `L908-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L908-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L908-L928) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L797-L798)

```diff
-           set isBlocking(zz) {
-             this._isBlocking = zz
+           return Bq.createImageBitmap(Yq, {
+             premultiplyAlpha: "none",
+             colorSpaceConversion: "none",
+             ...uq
+           }).then(Eq).catch((Eq => {
+             gq && gq("Error while trying to load image: " + qq, Eq)
+           })), null
+         }
+         let Wq = !1;
+         if (qq instanceof ArrayBuffer || ArrayBuffer.isView(qq))
+           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
+             let Eq;
+             Eq = qq instanceof ArrayBuffer ? qq : (0, aq.l)(qq), Oq = URL.createObjectURL(new Blob([Eq], {
+               type: xq
+             })), Wq = !0
+           } else Oq = `data:${xq};base64,` + (0, Aq.f)(qq);
+ ... (5 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L800-L801` → after: `L930-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L930-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L930-L961) · [Before (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L800-L801)

```diff
-           get isBlocking() {
-             return this._isBlocking
+         };
+         if (Bq?._features.forceBitmapOverHTMLImageElement) return rq(Oq, (Yq => {
+           Bq.createImageBitmap(new Blob([Yq], {
+             type: xq
+           }), {
+             premultiplyAlpha: "none",
+             colorSpaceConversion: "none",
+             ...uq
+           }).then((qq => {
+             Eq(qq), Wq && URL.revokeObjectURL(Oq)
+           })).catch((Eq => {
+             gq && gq("Error while trying to load image: " + qq, Eq)
+           }))
+         }), void 0, lq || void 0, !0, ((qq, Eq) => {
+           Nq(Eq)
+         })), null;
+ ... (16 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L803-L804` → after: `L963-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L963-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L963-L967) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L803-L804)

```diff
-           get invertY() {
-             return this._invertY
+         }), dq.push({
+           target: Vq,
+           name: "error",
+           handler: qq => {
+             jq(), Nq(qq), Wq && Vq.src && URL.revokeObjectURL(Vq.src)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L806-L845` → after: `L969-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L969-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L969-L1001) · [Before (L806-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L806-L845)

```diff
-           constructor(uz, bz, nz, lz) {
-             let Mz, tz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zz.TRILINEAR_SAMPLINGMODE,
-               Hz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               pz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
-               dz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               Fz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-               Zz = arguments.length > 9 ? arguments[9] : void 0,
-               Rz = arguments.length > 10 ? arguments[10] : void 0,
-               Kz = arguments.length > 11 ? arguments[11] : void 0,
-               Xz = arguments.length > 12 ? arguments[12] : void 0,
-               fz = arguments.length > 13 ? arguments[13] : void 0;
-             super(bz), this.url = ((0, Ez.j)(this, Pz), (0, Ez.j)(this, Gz, null)), this.uOffset = ((0, Ez.j)(this, az), (0, Ez.j)(this, Vz, 0)), this.vOffset = ((0, Ez.j)(this, mz), (0, Ez.j)(this, qz, 0)), this.uScale = ((0, Ez.j)(this, hz), (0, Ez.j)(this, Uz, 1)), this.vScale … [truncated]
-             let sz = !1,
-               rz = null,
-               oz = !0;
-             "object" === typeof nz && null !== nz ? (Mz = nz.noMipmap ?? !1, lz = nz.invertY ?? !wz.b, tz = nz.samplingMode ?? zz.TRILINEAR_SAMPLINGMODE, Hz = nz.onLoad ?? null, pz = nz.onError ?? null, dz = nz.buffer ?? null, Fz = nz.deleteBuffer ?? !1, Zz = nz.format, Rz = nz.m … [truncated]
- ... (24 more removed lines; see GitHub link above)
+         }), dq.push({
+           target: document,
+           name: "securitypolicyviolation",
+           handler: qq => {
+             if (qq.blockedURI !== Vq.src || "SN" === qq.disposition) return;
+             jq();
+             const Eq = new Error(`CSP violation of policy ${qq.effectiveDirective} ${qq.blockedURI}. Current policy is ${qq.originalPolicy}`);
+             cq.b.UseFallbackTexture = !1, Nq(Eq), Wq && Vq.src && URL.revokeObjectURL(Vq.src), Vq.src = ""
+           }
+         }), (() => {
+           for (const qq of dq) qq.target.addEventListener(qq.name, qq.handler)
+         })();
+         const Hq = "blob:" === Oq.substring(0, 5),
+           yq = "data:" === Oq.substring(0, 5),
+           tq = () => {
+             Hq || yq || !Yq.e.IsCustomRequestAvailable ? Vq.src = Oq : rq(Oq, ((qq, Eq, gq) => {
+ ... (17 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L847` → after: `L1003-L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1003-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1003-L1009) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L847)

```diff
-                 this._texture = vz.createTexture(this.url, Mz, this._invertY, Nz, tz, xz, Jz, this._buffer, void 0, this._format, this._forcedExtension, Rz, Kz, Xz, sz)
+                 let Eq;
+                 try {
+                   Eq = URL.createObjectURL(mq.FilesToLoad[qq])
+                 } catch (hq) {
+                   Eq = URL.createObjectURL(mq.FilesToLoad[qq])
+                 }
+                 Vq.src = Eq, Wq = !0
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L849` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1011) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L849)

```diff
-                 throw Jz("error loading", Az), Az
+                 Vq.src = ""
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L851` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1013) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L851)

```diff
-               Fz && (this._buffer = null)
+               return Vq
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L854-L905` → after: `L1016-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1016-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1016-L1056) · [Before (L854-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L854-L905)

```diff
-           updateURL(zz) {
-             let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               bz = arguments.length > 2 ? arguments[2] : void 0,
-               Ez = arguments.length > 3 ? arguments[3] : void 0;
-             this.url && (this.releaseInternalTexture(), this.XT().markAllMaterialsAsDirty(1, (zz => zz.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = zz), this.url = zz, this._buffer = uz, this._forcedExtension = Ez, this.delayLoadState = 4;
-             const nz = this._delayedOnLoad;
-             this._delayedOnLoad = () => {
-               nz ? nz() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), bz && bz()
-             }, this.delayLoad()
-           }
-           delayLoad() {
-             if (4 !== this.delayLoadState) return;
-             const zz = this.XT();
-             if (!zz) return;
-             let uz = this.url;
-             !uz && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (uz = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(uz, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
- ... (36 more removed lines; see GitHub link above)
+           tq()
+         }
+         return Vq
+       },
+       tq = (qq, Eq, gq, Yq, lq) => {
+         const mq = new FileReader,
+           xq = {
+             onCompleteObservable: new Oq.d,
+             abort: () => mq.abort()
+           };
+         return mq.onloadend = () => xq.onCompleteObservable.notifyObservers(xq), lq && (mq.onerror = () => {
+           lq(new Hq(`Unable to read ${qq.name}`, qq))
+         }), mq.onload = qq => {
+           Eq(qq.target.result)
+         }, gq && (mq.onprogress = gq), Yq ? mq.readAsArrayBuffer(qq) : mq.readAsText(qq), xq
+       },
+ ... (25 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L907-L920` → after: `L1058-L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1058-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1058-L1080) · [Before (L907-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L907-L920)

```diff
-           clone() {
-             const uz = {
-               noMipmap: this._noMipmap,
-               invertY: this._invertY,
-               samplingMode: this.samplingMode,
-               onLoad: void 0,
-               onError: void 0,
-               buffer: this._texture ? this._texture._buffer : void 0,
-               deleteBuffer: this._deleteBuffer,
-               format: this.textureFormat,
-               mimeType: this.mimeType,
-               loaderOptions: this._loaderOptions,
-               creationFlags: this._creationFlags,
-               useSRGBBuffer: this._useSRGBBuffer
+           return Nq.c.SetImmediate((() => {
+             qq.onCompleteObservable.notifyObservers(qq)
+           })), qq
+         }
+         return vq(uq, ((qq, gq) => {
+           Eq(qq, gq?.responseURL, gq?.getResponseHeader("content-type"))
+         }), gq, Yq, lq, Aq ? qq => {
+           Aq(qq.request, new dq(qq.message, qq.request))
+         } : void 0, cq)
+       },
+       vq = (qq, Eq, gq, mq, xq, Aq, uq) => {
+         null !== mq && (mq ?? (mq = cq.b.LastCreatedScene?.offlineProvider)), qq = oq.CleanUrl(qq), qq = oq.PreprocessUrl(qq);
+         const Bq = oq.BaseUrl + qq;
+         let Nq = !1;
+         const aq = {
+             onCompleteObservable: new Oq.d,
+ ... (7 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L922-L971` → after: `L1082-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1082-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1082-L1083) · [Before (L922-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L922-L971)

```diff
-             return Xz.e.Clone((() => new zz(this._texture ? this._texture.url : null, this.XT(), uz)), this)
-           }
-           serialize() {
-             const uz = this.name;
-             zz.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
-             const bz = super.serialize(zz._SerializeInternalTextureUniqueId);
-             if (!bz) return null;
-             if (zz.SerializeBuffers || zz.ForceSerializeBuffers)
-               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) bz.base64String = this._buffer, bz.name = bz.name.replace("data:", "");
-               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
-               const zz = this.mimeType || "image/png";
-               bz.base64String = `data:${zz};base64,${(0,Fz.h)(this._buffer)}`
-             } else(zz.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (bz.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Rz(this) : Kz(this));
-             return bz.invertY = this._invertY, bz.samplingMode = this.samplingMode, bz._creationFlags = this._creationFlags, bz._useSRGBBuffer = this._useSRGBBuffer, zz._SerializeInternalTextureUniqueId && (bz.internalTextureUniqueId = this._texture?.uniqueId), bz.internalTexture … [truncated]
-           }
-           getClassName() {
- ... (34 more removed lines; see GitHub link above)
+             let Vq = () => {
+               cq(), aq.onCompleteObservable.notifyObservers(aq), aq.onCompleteObservable.clear(), gq = void 0, qq = null, Vq = null, Aq = void 0, uq = void 0, Eq = void 0
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L973-L1004` → after: `L1085-L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1085-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1085-L1110) · [Before (L973-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L973-L1004)

```diff
-             return Xz.e.Parse((() => {
-               let nz = !0;
-               if (uz.noMipmap && (nz = !1), uz.mirrorPlane) {
-                 const Ez = zz._CreateMirror(uz.name, uz.renderTargetSize, bz, nz);
-                 return Ez._waitingRenderList = uz.renderList, Ez.mirrorPlane = dz.b.FromArray(uz.mirrorPlane), lz(Ez), Ez
-               }
-               if (uz.isRenderTarget && !uz.base64String) {
-                 let Ez = null;
-                 if (uz.isCube) {
-                   if (bz.reflectionProbes)
-                     for (let zz = 0; zz < bz.reflectionProbes.length; zz++) {
-                       const Ez = bz.reflectionProbes[zz];
-                       if (Ez.name === uz.name) return Ez.cubeTexture
-                     }
-                 } else Ez = zz._CreateRenderTargetTexture(uz.name, uz.renderTargetSize, bz, nz, uz._creationFlags ?? 0), Ez._waitingRenderList = uz.renderList;
-                 return lz(Ez), Ez
- ... (16 more removed lines; see GitHub link above)
+             aq.abort = () => {
+               Nq = !0, Vq && Vq(), Oq && Oq.readyState !== (XMLHttpRequest.DONE || 4) && Oq.abort(), null !== mq && (clearTimeout(mq), mq = null), Oq = null
+             };
+             const dq = qq => {
+                 const Eq = qq.message || "Unknown error";
+                 Aq && Oq ? Aq(new jq(Eq, Oq)) : Wq.b.Error(Eq)
+               },
+               Hq = Wq => {
+                 if (Oq) {
+                   if (Oq.open("GET", Bq), uq) try {
+                     uq(Oq)
+                   } catch (aq) {
+                     return void dq(aq)
+                   }
+                   xq && (Oq.responseType = "arraybuffer"), gq && Oq.addEventListener("progress", gq), Vq && Oq.addEventListener("loadend", Vq), qq = () => {
+                     if (!Nq && Oq && Oq.readyState === (XMLHttpRequest.DONE || 4)) {
+ ... (10 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1006-L1024` → after: `L1112-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1112-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1112-L1120) · [Before (L1006-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1006-L1024)

```diff
-                     },
-                     iz = uz.base64String,
-                     tz = iz.startsWith("data:") ? iz.substring(5) : iz;
-                   Mz = zz.CreateFromBase64String("", tz, bz, Ez), Mz.name = uz.name
-                 } else {
-                   let tz;
-                   tz = uz.name && (uz.name.indexOf("://") > 0 || uz.name.startsWith("data:")) ? uz.name : Ez + uz.name, uz.url && (uz.url.startsWith("data:") || zz.UseSerializedUrlIfAny) && (tz = uz.url);
-                   const Hz = {
-                     noMipmap: !nz,
-                     invertY: uz.invertY,
-                     samplingMode: uz.samplingMode,
-                     useSRGBBuffer: uz._useSRGBBuffer ?? !1,
-                     creationFlags: uz._creationFlags ?? 0,
-                     onLoad: () => {
-                       lz(Mz)
-                     },
- ... (3 more removed lines; see GitHub link above)
+                       const gq = oq.DefaultRetryStrategy;
+                       if (gq) {
+                         const qq = gq(Bq, Oq, Wq);
+                         if (-1 !== qq) return cq(), Oq = new Yq.e, void(mq = setTimeout((() => Hq(Wq + 1)), qq))
+                       }
+                       const uq = new jq("Error status: " + Oq.status + " " + Oq.statusText + " - Unable to load " + Bq, Oq);
+                       Aq && Aq(uq)
+                     }
+                   }, Oq.addEventListener("readystatechange", qq), Oq.send()
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1026-L1211` → after: `L1122-L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1122-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1122-L1127) · [Before (L1026-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1026-L1211)

```diff
-                 return Mz
-               }
-             }), uz, bz)
-           }
-           static CreateFromBase64String(uz, bz, Ez, nz, iz) {
-             let lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz.TRILINEAR_SAMPLINGMODE;
-             return new zz("data:" + bz, Ez, nz, iz, lz, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, uz, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0 … [truncated]
-           }
-           static LoadFromDataString(uz, bz, Ez) {
-             let nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               iz = arguments.length > 4 ? arguments[4] : void 0,
-               lz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-               Mz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : zz.TRILINEAR_SAMPLINGMODE,
-               tz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               Hz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-               Oz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
- ... (170 more removed lines; see GitHub link above)
+               };
+             Hq(0)
+           };
+         if (mq && mq.enableSceneOffline && !qq.startsWith("blob:")) {
+           const Yq = qq => {
+               qq && qq.status > 400 ? Aq && Aq(qq) : Vq()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1213-L1228` → after: `L1129-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1129-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1129-L1235) · [Before (L1213-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1213-L1228)

```diff
-             metadata: iz
-           }, uu, bu), iz && Object.defineProperty(zz, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: iz
-           })
-         })(), zz.SerializeBuffers = !0, zz.ForceSerializeBuffers = !1, zz.OnTextureLoadErrorObservable = new iz.b, zz._SerializeInternalTextureUniqueId = !1, zz._CubeTextureParser = (zz, uz, bz) => {
-           throw (0, Hz.l)("CubeTexture")
-         }, zz._CreateMirror = (zz, uz, bz, Ez) => {
-           throw (0, Hz.l)("MirrorTexture")
-         }, zz._CreateRenderTargetTexture = (zz, uz, bz, Ez, nz) => {
-           throw (0, Hz.l)("RenderTargetTexture")
-         }, zz.NEAREST_SAMPLINGMODE = 1, zz.NEAREST_NEAREST_MIPLINEAR = 8, zz.BILINEAR_SAMPLINGMODE = 2, zz.LINEAR_LINEAR_MIPNEAREST = 11, zz.TRILINEAR_SAMPLINGMODE = 3, zz.LINEAR_LINEAR_MIPLINEAR = 3, zz.NEAREST_NEAREST_MIPNEAREST = 4, zz.NEAREST_LINEAR_MIPNEAREST = 5, zz.NEAREST … [truncated]
-       })(),
-       sz = !1;
+             lq = () => {
+               mq && mq.loadFile(oq.BaseUrl + qq, (qq => {
+                 !Nq && Eq && Eq(qq), aq.onCompleteObservable.notifyObservers(aq)
+               }), gq ? qq => {
+                 !Nq && gq && gq(qq)
+               } : void 0, Yq, xq)
+             };
+           mq.open(lq, Yq)
+         } else Vq();
+         return aq
+       },
+       hq = qq => {
+         const {
+           match: Eq,
+           type: gq
+         } = iq(qq);
+ ... (91 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1231` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1238) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1231)

```diff
-       sz || (sz = !0, (0, tz.c)("BABYLON.Texture", fz), Xz.e._TextureParser = fz.Parse)
+       zq || (zq = !0, Tq(Zq, fq, oq, bq, nq, rq, yq, tq, vq, Pq), uq.e.loadFile = rq, uq.e.loadImage = yq, Bq.n.loadFile = rq)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1234` → after: `L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1241) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1234)

```diff
-   39180: (zz, uz, bz) => {
+   39819: (qq, Eq, gq) => {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1239-L1240` → after: `L1332-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1332-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1332-L1337) · [Before (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1239-L1240)

```diff
-       constructor(zz, uz) {
-         this.width = zz, this.height = uz
+       static SetImmediate(qq) {
+         0 === Yq.length && setTimeout((() => {
+           const qq = Yq;
+           Yq = [];
+           for (const Eq of qq) Eq()
+         }), 1), Yq.push(qq)
```
