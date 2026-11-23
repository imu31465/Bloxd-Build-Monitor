# Changed — Bundle Modifications Report (Part 037 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `37 / 104` (**300** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 036](part-036.md) · [Part 038 →](part-038.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/293.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/293.js` (210 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663)

#### 68. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L547-L552` → after: `L14284-L14327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14284-L14327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14284-L14327) · [Before (L547-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L547-L552)

```diff
-       toString() {
-         let kk = "";
-         for (let ek = 0; ek < this.sections.length;) {
-           let ik = this.sections[ek++],
-             Dk = this.sections[ek++];
-           kk += (kk ? " " : "") + ik + (Dk >= 0 ? ":" + Dk : "")
+     }
+ 
+     function GC(CC, zC, ZC, QC) {
+       for (var wC; CC.from == CC.to || (ZC < 1 ? CC.from >= zC : CC.from > zC) || (ZC > -1 ? CC.to <= zC : CC.to < zC);) {
+         let zC = !QC && CC instanceof AC && CC.index < 0 ? null : CC.parent;
+         if (!zC) return CC;
+         CC = zC
+       }
+       let bC = QC ? 0 : MC.IgnoreOverlays;
+       if (QC)
+         for (let nC = CC, fC = nC.parent; fC; nC = fC, fC = nC.parent) nC instanceof AC && nC.index < 0 && (null === (wC = fC.enter(zC, ZC, bC)) || void 0 === wC ? void 0 : wC.from) != nC.from && (CC = fC);
+       for (;;) {
+         let QC = CC.enter(zC, ZC, bC);
+         if (!QC) return CC;
+         CC = QC
+       }
+ ... (28 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L556-L561` → after: `L14331-L14332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14331-L14332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14331-L14332) · [Before (L556-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L556-L561)

```diff
-       toJSON() {
-         return this.sections
-       }
-       static fromJSON(kk) {
-         if (!Array.isArray(kk) || kk.length % 2 || kk.some((kk => "number" != typeof kk))) throw new RangeError("Invalid JSON representation of ChangeDesc");
-         return new Ik(kk)
+       get node() {
+         return this
```

#### 70. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L563-L564` → after: `L14334-L14335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14334-L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14334-L14335) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L563-L564)

```diff
-       static create(kk) {
-         return new Ik(kk)
+       get next() {
+         return this.parent
```

#### 71. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L568-L569` → after: `L14339-L14340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14339-L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14339-L14340) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L568-L569)

```diff
-       constructor(kk, ek) {
-         super(kk), this.inserted = ek
+       constructor(CC, zC, ZC, QC) {
+         super(), this._tree = CC, this.from = zC, this.index = ZC, this._parent = QC
```

#### 72. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L571-L573` → after: `L14342-L14343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14342-L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14342-L14343) · [Before (L571-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L571-L573)

```diff
-       apply(kk) {
-         if (this.length != kk.length) throw new RangeError("Applying change set to a document with the wrong length");
-         return Ek(this, ((ek, ik, Dk, fk, Sk) => kk = kk.replace(Dk, Dk + (ik - ek), Sk)), !1), kk
+       get type() {
+         return this._tree.type
```

#### 73. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L575-L576` → after: `L14345-L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14345-L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14345-L14346) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L575-L576)

```diff
-       mapDesc(kk) {
-         return hk(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
+       get name() {
+         return this._tree.type.name
```

#### 74. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L578-L588` → after: `L14348-L14370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14348-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14348-L14370) · [Before (L578-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L578-L588)

```diff
-       invert(kk) {
-         let ek = this.sections.slice(),
-           ik = [];
-         for (let Dk = 0, fk = 0; Dk < ek.length; Dk += 2) {
-           let Sk = ek[Dk],
-             bk = ek[Dk + 1];
-           if (bk >= 0) {
-             ek[Dk] = bk, ek[Dk + 1] = Sk;
-             let rk = Dk >> 1;
-             for (; ik.length < rk;) ik.push(Hk.empty);
-             ik.push(Sk ? kk.slice(fk, fk + Sk) : Hk.empty)
+       get to() {
+         return this.from + this._tree.length
+       }
+       nextChild(CC, zC, ZC, QC) {
+         let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         for (let bC = this;;) {
+           for (let {
+               children: nC,
+               positions: oC
+             } = bC._tree, qC = zC > 0 ? nC.length : -1; CC != qC; CC += zC) {
+             let qC, FC = nC[CC],
+               WC = oC[CC] + bC.from;
+             if (wC & MC.EnterBracketed && FC instanceof gC && (qC = fC.get(FC)) && !qC.overlay && qC.bracketed && ZC >= WC && ZC <= WC + FC.length || PC(QC, ZC, WC, WC + FC.length))
+               if (FC instanceof pC) {
+                 if (wC & MC.ExcludeBuffers) continue;
+                 let nC = FC.findChild(0, FC.buffer.length, zC, ZC - WC, QC);
+ ... (7 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L590` → after: `L14372-L14373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14372-L14373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14372-L14373) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L590)

```diff
-           fk += Sk
+           if (wC & MC.IncludeAnonymous || !bC.type.isAnonymous) return null;
+           if (CC = bC.index >= 0 ? bC.index + zC : zC < 0 ? -1 : bC._parent._tree.children.length, bC = bC._parent, !bC) return null
```

#### 76. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L594-L595` → after: `L14376-L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14376-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14376-L14377) · [Before (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L594-L595)

```diff
-       compose(kk) {
-         return this.empty ? kk : kk.empty ? this : ak(this, kk, !0)
+       get firstChild() {
+         return this.nextChild(0, 1, 0, 4)
```

#### 77. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L597-L599` → after: `L14379-L14380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14379-L14380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14379-L14380) · [Before (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L597-L599)

```diff
-       map(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return kk.empty ? this : hk(this, kk, ek, !0)
+       get lastChild() {
+         return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
```

#### 78. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L601-L602` → after: `L14382-L14383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14382-L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14382-L14383) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L601-L602)

```diff
-       iterChanges(kk) {
-         Ek(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
+       childAfter(CC) {
+         return this.nextChild(0, 1, CC, 2)
```

#### 79. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L604-L605` → after: `L14385-L14386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14385-L14386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14385-L14386) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L604-L605)

```diff
-       get desc() {
-         return Ik.create(this.sections)
+       childBefore(CC) {
+         return this.nextChild(this._tree.children.length - 1, -1, CC, -2)
```

#### 80. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L607-L631` → after: `L14388-L14389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14388-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14388-L14389) · [Before (L607-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L607-L631)

```diff
-       filter(kk) {
-         let ek = [],
-           ik = [],
-           Dk = [],
-           fk = new Wk(this);
-         kk: for (let Sk = 0, bk = 0;;) {
-           let rk = Sk == kk.length ? 1e9 : kk[Sk++];
-           for (; bk < rk || bk == rk && 0 == fk.len;) {
-             if (fk.done) break kk;
-             let kk = Math.min(fk.len, rk - bk);
-             Qk(Dk, kk, -1);
-             let Sk = -1 == fk.ins ? -1 : 0 == fk.off ? fk.ins : 0;
-             Qk(ek, kk, Sk), Sk > 0 && vk(ik, ek, fk.text), fk.forward(kk), bk += kk
-           }
-           let Pk = kk[Sk++];
-           for (; bk < Pk;) {
- ... (9 more removed lines; see GitHub link above)
+       prop(CC) {
+         return this._tree.prop(CC)
```

#### 81. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L633-L638` → after: `L14391-L14401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14391-L14401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14391-L14401) · [Before (L633-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L633-L638)

```diff
-       toJSON() {
-         let kk = [];
-         for (let ek = 0; ek < this.sections.length; ek += 2) {
-           let ik = this.sections[ek],
-             Dk = this.sections[ek + 1];
-           Dk < 0 ? kk.push(ik) : 0 == Dk ? kk.push([ik]) : kk.push([ik].concat(this.inserted[ek >> 1].toJSON()))
+       enter(CC, zC) {
+         let ZC, QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (!(QC & MC.IgnoreOverlays) && (ZC = fC.get(this._tree)) && ZC.overlay) {
+           let wC = CC - this.from,
+             bC = QC & MC.EnterBracketed && ZC.bracketed;
+           for (let {
+               from: CC,
+               to: QC
+             }
+             of ZC.overlay)
+             if ((zC > 0 || bC ? CC <= wC : CC < wC) && (zC < 0 || bC ? QC >= wC : QC > wC)) return new AC(ZC.tree, ZC.overlay[0].from + this.from, -1, this)
```

#### 82. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L642-L646` → after: `L14410-L14428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14410-L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14410-L14428) · [Before (L642-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L642-L646)

```diff
-       static of (kk, ek, ik) {
-         let Dk = [],
-           fk = [],
-           Sk = 0,
-           bk = null;
+       get parent() {
+         return this._parent ? this._parent.nextSignificantParent() : null
+       }
+       get nextSibling() {
+         return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null
+       }
+       get prevSibling() {
+         return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null
+       }
+       get tree() {
+         return this._tree
+       }
+       toTree() {
+         return this._tree
+       }
+       toString() {
+ ... (3 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L648-L672` → after: `L14430-L14450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14430-L14450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14430-L14450) · [Before (L648-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L648-L672)

```diff
-         function rk() {
-           if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Dk.length) return;
-           Sk < ek && Qk(Dk, ek - Sk, -1);
-           let kk = new zk(Dk, fk);
-           bk = bk ? bk.compose(kk.map(bk)) : kk, Dk = [], fk = [], Sk = 0
-         }
-         return function kk(Pk) {
-           if (Array.isArray(Pk))
-             for (let ek of Pk) kk(ek);
-           else if (Pk instanceof zk) {
-             if (Pk.length != ek) throw new RangeError(`Mismatched change set length (got ${Pk.length}, expected ${ek})`);
-             rk(), bk = bk ? bk.compose(Pk.map(bk)) : Pk
-           } else {
-             let {
-               from: kk,
-               to: bk = kk,
- ... (9 more removed lines; see GitHub link above)
+     function xC(CC, zC, ZC, QC) {
+       let wC = CC.cursor(),
+         bC = [];
+       if (!wC.firstChild()) return bC;
+       if (null != ZC)
+         for (let nC = !1; !nC;)
+           if (nC = wC.type.is(ZC), !wC.nextSibling()) return bC;
+       for (;;) {
+         if (null != QC && wC.type.is(QC)) return bC;
+         if (wC.type.is(zC) && bC.push(wC.node), !wC.nextSibling()) return null == QC ? bC : []
+       }
+     }
+ 
+     function JC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC.length - 1;
+       for (let QC = CC; ZC >= 0; QC = QC.parent) {
+ ... (5 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L674-L675` → after: `L14452-L14456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14452-L14456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14452-L14456) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L674-L675)

```diff
-       static empty(kk) {
-         return new zk(kk ? [kk, -1] : [], [])
+       return !0
+     }
+     class IC {
+       constructor(CC, zC, ZC, QC) {
+         this.parent = CC, this.buffer = zC, this.index = ZC, this.start = QC
```

#### 85. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L677-L678` → after: `L14458-L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14458-L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14458-L14521) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L677-L678)

```diff
-       static fromJSON(kk) {
-         if (!Array.isArray(kk)) throw new RangeError("Invalid JSON representation of ChangeSet");
+     }
+     class iC extends RC {
+       get name() {
+         return this.type.name
+       }
+       get from() {
+         return this.context.start + this.context.buffer.buffer[this.index + 1]
+       }
+       get to() {
+         return this.context.start + this.context.buffer.buffer[this.index + 2]
+       }
+       constructor(CC, zC, ZC) {
+         super(), this.context = CC, this._parent = zC, this.index = ZC, this.type = CC.buffer.set.types[CC.buffer.buffer[ZC]]
+       }
+       child(CC, zC, ZC) {
+         let {
+ ... (48 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L680-L691` → after: `L14523-L14531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14523-L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14523-L14531) · [Before (L680-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L680-L691)

```diff
-           ik = [];
-         for (let Dk = 0; Dk < kk.length; Dk++) {
-           let fk = kk[Dk];
-           if ("number" == typeof fk) ek.push(fk, -1);
-           else {
-             if (!Array.isArray(fk) || "number" != typeof fk[0] || fk.some(((kk, ek) => ek && "string" != typeof kk))) throw new RangeError("Invalid JSON representation of ChangeSet");
-             if (1 == fk.length) ek.push(fk[0], 0);
-             else {
-               for (; ik.length < Dk;) ik.push(Hk.empty);
-               ik[Dk] = Hk.of(fk.slice(1)), ek.push(fk[0], ik[Dk].length)
-             }
-           }
+           zC = [],
+           {
+             buffer: ZC
+           } = this.context,
+           QC = this.index + 4,
+           wC = ZC.buffer[this.index + 3];
+         if (wC > QC) {
+           let bC = ZC.buffer[this.index + 1];
+           CC.push(ZC.slice(QC, wC, bC)), zC.push(0)
```

#### 87. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L693` → after: `L14533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14533) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L693)

```diff
-         return new zk(ek, ik)
+         return new gC(this.type, CC, zC, this.to - this.from)
```

#### 88. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L695-L696` → after: `L14535-L14536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14535-L14536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14535-L14536) · [Before (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L695-L696)

```diff
-       static createSet(kk, ek) {
-         return new zk(kk, ek)
+       toString() {
+         return this.context.buffer.childString(this.index)
```

#### 89. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L700-L704` → after: `L14540-L14550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14540-L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14540-L14550) · [Before (L700-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L700-L704)

```diff
-     function Qk(kk, ek, ik) {
-       let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       if (0 == ek && ik <= 0) return;
-       let fk = kk.length - 2;
-       fk >= 0 && ik <= 0 && ik == kk[fk + 1] ? kk[fk] += ek : fk >= 0 && 0 == ek && 0 == kk[fk] ? kk[fk + 1] += ik : Dk ? (kk[fk] += ek, kk[fk + 1] += ik) : kk.push(ek, ik)
+     function vC(CC) {
+       if (!CC.length) return null;
+       let zC = 0,
+         ZC = CC[0];
+       for (let bC = 1; bC < CC.length; bC++) {
+         let QC = CC[bC];
+         (QC.from > ZC.from || QC.to < ZC.to) && (ZC = QC, zC = bC)
+       }
+       let QC = ZC instanceof AC && ZC.index < 0 ? null : ZC.parent,
+         wC = CC.slice();
+       return QC ? wC[zC] = QC : wC.splice(zC, 1), new eC(wC, ZC)
```

#### 90. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L706-L713` → after: `L14552-L14557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14552-L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14552-L14557) · [Before (L706-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L706-L713)

```diff
- 
-     function vk(kk, ek, ik) {
-       if (0 == ik.length) return;
-       let Dk = ek.length - 2 >> 1;
-       if (Dk < kk.length) kk[kk.length - 1] = kk[kk.length - 1].append(ik);
-       else {
-         for (; kk.length < Dk;) kk.push(Hk.empty);
-         kk.push(ik)
+     class eC {
+       constructor(CC, zC) {
+         this.heads = CC, this.node = zC
+       }
+       get next() {
+         return vC(this.heads)
```

#### 91. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L716-L722` → after: `L14560-L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14560-L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14560-L14566) · [Before (L716-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L716-L722)

```diff
- 
-     function Ek(kk, ek, ik) {
-       let Dk = kk.inserted;
-       for (let fk = 0, Sk = 0, bk = 0; bk < kk.sections.length;) {
-         let rk = kk.sections[bk++],
-           Pk = kk.sections[bk++];
-         if (Pk < 0) fk += rk, Sk += rk;
+     class hC {
+       get name() {
+         return this.type.name
+       }
+       constructor(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = zC & ~MC.EnterBracketed, CC instanceof AC) this.yieldNode(CC);
```

#### 92. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L724-L728` → after: `L14568-L14570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14568-L14570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14568-L14570) · [Before (L724-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L724-L728)

```diff
-           let mk = fk,
-             Mk = Sk,
-             Kk = Hk.empty;
-           for (; mk += rk, Mk += Pk, Pk && Dk && (Kk = Kk.append(Dk[bk - 2 >> 1])), !(ik || bk == kk.sections.length || kk.sections[bk + 1] < 0);) rk = kk.sections[bk++], Pk = kk.sections[bk++];
-           ek(fk, mk, Sk, Mk, Kk), fk = mk, Sk = Mk
+           this._tree = CC.context.parent, this.buffer = CC.context;
+           for (let zC = CC._parent; zC; zC = zC._parent) this.stack.unshift(zC.index);
+           this.bufferNode = CC, this.yieldBuf(CC.index)
```

#### 93. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L731-L752` → after: `L14573-L14626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14573-L14626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14573-L14626) · [Before (L731-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L731-L752)

```diff
-     }
- 
-     function hk(kk, ek, ik) {
-       let Dk = [],
-         fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
-         Sk = new Wk(kk),
-         bk = new Wk(ek),
-         rk = 0;
-       for (let Pk = -1;;) {
-         if (++rk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
-         if (Sk.done && bk.len || bk.done && Sk.len) throw new Error("Mismatched change set lengths");
-         if (-1 == Sk.ins && -1 == bk.ins) {
-           let kk = Math.min(Sk.len, bk.len);
-           Qk(Dk, kk, -1), Sk.forward(kk), bk.forward(kk)
-         } else if (bk.ins >= 0 && (Sk.ins < 0 || Pk == Sk.i || 0 == Sk.off && (bk.len < Sk.len || bk.len == Sk.len && !ik))) {
-           let kk = bk.len;
- ... (6 more removed lines; see GitHub link above)
+       yieldNode(CC) {
+         return !!CC && (this._tree = CC, this.type = CC.type, this.from = CC.from, this.to = CC.to, !0)
+       }
+       yieldBuf(CC, zC) {
+         this.index = CC;
+         let {
+           start: ZC,
+           buffer: QC
+         } = this.buffer;
+         return this.type = zC || QC.set.types[QC.buffer[CC]], this.from = ZC + QC.buffer[CC + 1], this.to = ZC + QC.buffer[CC + 2], !0
+       }
+       yield(CC) {
+         return !!CC && (CC instanceof AC ? (this.buffer = null, this.yieldNode(CC)) : (this.buffer = CC.context, this.yieldBuf(CC.index, CC.type)))
+       }
+       toString() {
+         return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
+ ... (38 more added lines; see GitHub link above)
```

#### 94. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L754-L768` → after: `L14628-L14716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14628-L14716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14628-L14716) · [Before (L754-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L754-L768)

```diff
-           if (!(Sk.ins >= 0)) {
-             if (Sk.done && bk.done) return fk ? zk.createSet(Dk, fk) : Ik.create(Dk);
-             throw new Error("Mismatched change set lengths")
-           } {
-             let kk = 0,
-               ek = Sk.len;
-             for (; ek;) {
-               if (++rk > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
-               if (-1 == bk.ins) {
-                 let ik = Math.min(ek, bk.len);
-                 kk += ik, ek -= ik, bk.forward(ik)
-               } else {
-                 if (!(0 == bk.ins && bk.len < ek)) break;
-                 ek -= bk.len, bk.next()
-               }
+           let CC = zC.buffer[this.index + 3];
+           if (CC < (ZC < 0 ? zC.buffer.length : zC.buffer[this.stack[ZC] + 3])) return this.yieldBuf(CC)
+         }
+         return ZC < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + CC, CC, 0, 4, this.mode))
+       }
+       nextSibling() {
+         return this.sibling(1)
+       }
+       prevSibling() {
+         return this.sibling(-1)
+       }
+       atLastNode(CC) {
+         let zC, ZC, {
+           buffer: QC
+         } = this;
+         if (QC) {
+ ... (73 more added lines; see GitHub link above)
```

#### 95. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L770` → after: `L14718-L14739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14718-L14739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14718-L14739) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L770)

```diff
-             Qk(Dk, kk, Pk < Sk.i ? Sk.ins : 0), fk && Pk < Sk.i && vk(fk, Dk, Sk.text), Pk = Sk.i, Sk.forward(Sk.len - ek)
+             this.type.isAnonymous || (QC = !0)
+           }
+           for (;;) {
+             if (QC && zC && zC(this), QC = this.type.isAnonymous, !ZC) return;
+             if (this.nextSibling()) break;
+             this.parent(), ZC--, QC = !0
+           }
+         }
+       }
+       matchContext(CC) {
+         if (!this.buffer) return JC(this.node.parent, CC);
+         let {
+           buffer: zC
+         } = this.buffer, {
+           types: ZC
+         } = zC.set;
+ ... (6 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L777-L795` → after: `L14752-L14759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14752-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14752-L14759) · [Before (L777-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L777-L795)

```diff
-       let ik = [],
-         Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
-         fk = new Wk(kk),
-         Sk = new Wk(ek),
-         bk = 0;
-       for (let rk = !1;;) {
-         if (++bk > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
-         if (fk.done && Sk.done) return Dk ? zk.createSet(ik, Dk) : Ik.create(ik);
-         if (0 == fk.ins) Qk(ik, fk.len, 0, rk), fk.next();
-         else if (0 != Sk.len || Sk.done) {
-           if (fk.done || Sk.done) throw new Error("Mismatched change set lengths");
-           {
-             let kk = Math.min(fk.len2, Sk.len),
-               ek = ik.length;
-             if (-1 == fk.ins) {
-               let ek = -1 == Sk.ins ? -1 : Sk.off ? 0 : Sk.ins;
- ... (3 more removed lines; see GitHub link above)
+       if (!CC.isAnonymous || zC instanceof pC || zC.type != CC) return 1;
+       let ZC = YC.get(zC);
+       if (null == ZC) {
+         ZC = 1;
+         for (let QC of zC.children) {
+           if (QC.type != CC || !(QC instanceof gC)) {
+             ZC = 1;
+             break
```

#### 97. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L797` → after: `L14761-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14761-L14763) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L797)

```diff
-         } else Qk(ik, 0, Sk.ins, rk), Dk && vk(Dk, ik, Sk.text), Sk.next()
+           ZC += dC(CC, QC)
+         }
+         YC.set(zC, ZC)
```

#### 98. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L801-L808` → after: `L14800-L14801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14800-L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14800-L14801) · [Before (L801-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L801-L808)

```diff
-       constructor(kk) {
-         this.set = kk, this.i = 0, this.next()
-       }
-       next() {
-         let {
-           sections: kk
-         } = this.set;
-         this.i < kk.length ? (this.len = kk[this.i++], this.ins = kk[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
+       constructor() {
+         this.map = new WeakMap
```

#### 99. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L810-L811` → after: `L14803-L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14803-L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14803-L14805) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L810-L811)

```diff
-       get done() {
-         return -2 == this.ins
+       setBuffer(CC, zC, ZC) {
+         let QC = this.map.get(CC);
+         QC || this.map.set(CC, QC = new Map), QC.set(zC, ZC)
```

#### 100. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L813-L814` → after: `L14807-L14809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14807-L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14807-L14809) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L813-L814)

```diff
-       get len2() {
-         return this.ins < 0 ? this.len : this.ins
+       getBuffer(CC, zC) {
+         let ZC = this.map.get(CC);
+         return ZC && ZC.get(zC)
```

#### 101. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L816-L820` → after: `L14811-L14812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14811-L14812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14811-L14812) · [Before (L816-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L816-L820)

```diff
-       get text() {
-         let {
-           inserted: kk
-         } = this.set, ek = this.i - 2 >> 1;
-         return ek >= kk.length ? Hk.empty : kk[ek]
+       set(CC, zC) {
+         CC instanceof iC ? this.setBuffer(CC.context.buffer, CC.index, zC) : CC instanceof AC && this.map.set(CC.tree, zC)
```

#### 102. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L822-L826` → after: `L14814-L14815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14814-L14815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14814-L14815) · [Before (L822-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L822-L826)

```diff
-       textBit(kk) {
-         let {
-           inserted: ek
-         } = this.set, ik = this.i - 2 >> 1;
-         return ik >= ek.length && !kk ? Hk.empty : ek[ik].slice(this.off, null == kk ? void 0 : this.off + kk)
+       get(CC) {
+         return CC instanceof iC ? this.getBuffer(CC.context.buffer, CC.index) : CC instanceof AC ? this.map.get(CC.tree) : void 0
```

#### 103. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L828-L829` → after: `L14817-L14818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14817-L14818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14817-L14818) · [Before (L828-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L828-L829)

```diff
-       forward(kk) {
-         kk == this.len ? this.next() : (this.len -= kk, this.off += kk)
+       cursorSet(CC, zC) {
+         CC.buffer ? this.setBuffer(CC.buffer.buffer, CC.index, zC) : this.map.set(CC.tree, zC)
```

#### 104. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L831-L832` → after: `L14820-L14821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14820-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14820-L14821) · [Before (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L831-L832)

```diff
-       forward2(kk) {
-         -1 == this.ins ? this.forward(kk) : kk == this.ins ? this.next() : (this.ins -= kk, this.off += kk)
+       cursorGet(CC) {
+         return CC.buffer ? this.getBuffer(CC.buffer.buffer, CC.index) : this.map.get(CC.tree)
```

#### 105. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L836-L840` → after: `L14825-L14828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14825-L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14825-L14828) · [Before (L836-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L836-L840)

```diff
-       constructor(kk, ek, ik) {
-         this.from = kk, this.to = ek, this.flags = ik
-       }
-       get anchor() {
-         return 32 & this.flags ? this.to : this.from
+       constructor(CC, zC, ZC, QC) {
+         let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         this.from = CC, this.to = zC, this.tree = ZC, this.offset = QC, this.open = (wC ? 1 : 0) | (bC ? 2 : 0)
```

#### 106. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L842-L843` → after: `L14830-L14831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14830-L14831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14830-L14831) · [Before (L842-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L842-L843)

```diff
-       get head() {
-         return 32 & this.flags ? this.from : this.to
+       get openStart() {
+         return (1 & this.open) > 0
```

#### 107. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L845-L846` → after: `L14833-L14834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14833-L14834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14833-L14834) · [Before (L845-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L845-L846)

```diff
-       get empty() {
-         return this.from == this.to
+       get openEnd() {
+         return (2 & this.open) > 0
```

#### 108. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L848-L849` → after: `L14836-L14841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14836-L14841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14836-L14841) · [Before (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L848-L849)

```diff
-       get assoc() {
-         return 8 & this.flags ? -1 : 16 & this.flags ? 1 : 0
+       static addTree(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           QC = [new EC(0, CC.length, CC, 0, !1, ZC)];
+         for (let wC of zC) wC.to > CC.length && QC.push(wC);
+         return QC
```

#### 109. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L851-L853` → after: `L14843-L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14843-L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14843-L14866) · [Before (L851-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L851-L853)

```diff
-       get bidiLevel() {
-         let kk = 7 & this.flags;
-         return 7 == kk ? null : kk
+       static applyChanges(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
+         if (!zC.length) return CC;
+         let QC = [],
+           wC = 1,
+           bC = CC.length ? CC[0] : null;
+         for (let nC = 0, fC = 0, oC = 0;; nC++) {
+           let qC = nC < zC.length ? zC[nC] : null,
+             FC = qC ? qC.fromA : 1e9;
+           if (FC - fC >= ZC)
+             for (; bC && bC.from < FC;) {
+               let zC = bC;
+               if (fC >= zC.from || FC <= zC.to || oC) {
+                 let CC = Math.max(zC.from, fC) - oC,
+                   ZC = Math.min(zC.to, FC) - oC;
+                 zC = CC >= ZC ? null : new EC(CC, ZC, zC.tree, zC.offset + oC, nC > 0, !!qC)
+ ... (8 more added lines; see GitHub link above)
```

#### 110. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L855-L857` → after: `L14868-L14871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14868-L14871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14868-L14871) · [Before (L855-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L855-L857)

```diff
-       get goalColumn() {
-         let kk = this.flags >> 6;
-         return 16777215 == kk ? void 0 : kk
+     }
+     class lC {
+       startParse(CC, zC, ZC) {
+         return "string" == typeof CC && (CC = new XC(CC)), ZC = ZC ? ZC.length ? ZC.map((CC => new bC(CC.from, CC.to))) : [new bC(0, 0)] : [new bC(0, CC.length)], this.createParse(CC, zC || [], ZC)
```

#### 111. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L859-L861` → after: `L14873-L14878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14873-L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14873-L14878) · [Before (L859-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L859-L861)

```diff
-       map(kk) {
-         let ek, ik, Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
-         return this.empty ? ek = ik = kk.mapPos(this.from, Dk) : (ek = kk.mapPos(this.from, 1), ik = kk.mapPos(this.to, -1)), ek == this.from && ik == this.to ? this : new tk(ek, ik, this.flags)
+       parse(CC, zC, ZC) {
+         let QC = this.startParse(CC, zC, ZC);
+         for (;;) {
+           let CC = QC.advance();
+           if (CC) return CC
+         }
```

#### 112. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L863-L868` → after: `L14880-L14883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14880-L14883) · [Before (L863-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L863-L868)

```diff
-       extend(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk,
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (kk <= this.anchor && ek >= this.anchor) return Xk.range(kk, ek, void 0, void 0, ik);
-         let Dk = Math.abs(kk - this.anchor) > Math.abs(ek - this.anchor) ? kk : ek;
-         return Xk.range(this.anchor, Dk, void 0, void 0, ik)
+     }
+     class XC {
+       constructor(CC) {
+         this.string = CC
```

#### 113. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L870-L872` → after: `L14885-L14886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14885-L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14885-L14886) · [Before (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L870-L872)

```diff
-       eq(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return this.anchor == kk.anchor && this.head == kk.head && this.goalColumn == kk.goalColumn && (!ek || !this.empty || this.assoc == kk.assoc)
+       get length() {
+         return this.string.length
```

#### 114. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L874-L878` → after: `L14888-L14889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14888-L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14888-L14889) · [Before (L874-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L874-L878)

```diff
-       toJSON() {
-         return {
-           anchor: this.anchor,
-           head: this.head
-         }
+       chunk(CC) {
+         return this.string.slice(CC)
```

#### 115. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L880-L882` → after: `L14891-L14892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14891-L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14891-L14892) · [Before (L880-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L880-L882)

```diff
-       static fromJSON(kk) {
-         if (!kk || "number" != typeof kk.anchor || "number" != typeof kk.head) throw new RangeError("Invalid JSON representation for SelectionRange");
-         return Xk.range(kk.anchor, kk.head)
+       get lineChunks() {
+         return !1
```

#### 116. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L884-L885` → after: `L14894-L14895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14894-L14895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14894-L14895) · [Before (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L884-L885)

```diff
-       static create(kk, ek, ik) {
-         return new tk(kk, ek, ik)
+       read(CC, zC) {
+         return this.string.slice(CC, zC)
```

#### 117. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L889-L890` → after: `L14912-L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14912-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14912-L14913) · [Before (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L889-L890)

```diff
-       constructor(kk, ek) {
-         this.lw = kk, this.mainIndex = ek
+       constructor(CC, zC, ZC, QC) {
+         this.name = CC, this.set = zC, this.base = ZC, this.modified = QC, this.id = wC++
```

#### 118. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L892-L894` → after: `L14915-L14920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14915-L14920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14915-L14920) · [Before (L892-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L892-L894)

```diff
-       map(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
-         return kk.empty ? this : Xk.create(this.lw.map((ik => ik.map(kk, ek))), this.mainIndex)
+       toString() {
+         let {
+           name: CC
+         } = this;
+         for (let zC of this.modified) zC.name && (CC = `${zC.name}(${CC})`);
+         return CC
```

#### 119. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L896-L901` → after: `L14922-L14928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14922-L14928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14922-L14928) · [Before (L896-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L896-L901)

```diff
-       eq(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this.lw.length != kk.lw.length || this.mainIndex != kk.mainIndex) return !1;
-         for (let ik = 0; ik < this.lw.length; ik++)
-           if (!this.lw[ik].eq(kk.lw[ik], ek)) return !1;
-         return !0
+       static define(CC, zC) {
+         let ZC = "string" == typeof CC ? CC : "?";
+         if (CC instanceof bC && (zC = CC), null === zC || void 0 === zC ? void 0 : zC.base) throw new Error("Can not derive from a modified tag");
+         let QC = new bC(ZC, [], null, []);
+         if (QC.set.push(QC), zC)
+           for (let wC of zC.set) QC.set.push(wC);
+         return QC
```

#### 120. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L903-L904` → after: `L14930-L14932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14930-L14932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14930-L14932) · [Before (L903-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L903-L904)

```diff
-       get main() {
-         return this.lw[this.mainIndex]
+       static defineModifier(CC) {
+         let zC = new fC(CC);
+         return CC => CC.modified.indexOf(zC) > -1 ? CC : fC.get(CC.base || CC, CC.modified.concat(zC).sort(((CC, zC) => CC.id - zC.id)))
```

#### 121. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L906-L907` → after: `L14934-L14938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14934-L14938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14934-L14938) · [Before (L906-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L906-L907)

```diff
-       asSingle() {
-         return 1 == this.lw.length ? this : new Xk([this.main], 0)
+     }
+     let nC = 0;
+     class fC {
+       constructor(CC) {
+         this.name = CC, this.instances = [], this.id = nC++
```

#### 122. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L909-L911` → after: `L14940-L14961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14940-L14961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14940-L14961) · [Before (L909-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L909-L911)

```diff
-       addRange(kk) {
-         let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         return Xk.create([kk].concat(this.lw), ek ? 0 : this.mainIndex + 1)
+       static get(CC, zC) {
+         if (!zC.length) return CC;
+         let ZC = zC[0].instances.find((ZC => {
+           return ZC.base == CC && (QC = zC, wC = ZC.modified, QC.length == wC.length && QC.every(((CC, zC) => CC == wC[zC])));
+           var QC, wC
+         }));
+         if (ZC) return ZC;
+         let QC = [],
+           wC = new bC(CC.name, QC, CC, zC);
+         for (let bC of zC) bC.instances.push(wC);
+         let nC = function(CC) {
+           let zC = [
+             []
+           ];
+           for (let ZC = 0; ZC < CC.length; ZC++)
+             for (let QC = 0, wC = zC.length; QC < wC; QC++) zC.push(zC[QC].concat(CC[ZC]));
+ ... (6 more added lines; see GitHub link above)
```

#### 123. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L913-L916` → after: `L14963-L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14963-L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14963-L14996) · [Before (L913-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L913-L916)

```diff
-       replaceRange(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
-           ik = this.lw.slice();
-         return ik[ek] = kk, Xk.create(ik, this.mainIndex)
+     }
+ 
+     function oC(CC) {
+       let zC = Object.create(null);
+       for (let ZC in CC) {
+         let QC = CC[ZC];
+         Array.isArray(QC) || (QC = [QC]);
+         for (let CC of ZC.split(" "))
+           if (CC) {
+             let ZC = [],
+               wC = 2,
+               bC = CC;
+             for (let zC = 0;;) {
+               if ("..." == bC && zC > 0 && zC + 3 == CC.length) {
+                 wC = 1;
+                 break
+ ... (18 more added lines; see GitHub link above)
```

#### 124. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L918-L921` → after: `L14998-L15006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14998-L15006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14998-L15006) · [Before (L918-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L918-L921)

```diff
-       toJSON() {
-         return {
-           lw: this.lw.map((kk => kk.toJSON())),
-           main: this.mainIndex
+       return qC.add(zC)
+     }
+     const qC = new QC.g({
+       combine(CC, zC) {
+         let ZC, QC, wC;
+         for (; CC || zC;) {
+           if (!CC || zC && CC.depth >= zC.depth ? (wC = zC, zC = zC.next) : (wC = CC, CC = CC.next), ZC && ZC.mode == wC.mode && !wC.context && !ZC.context) continue;
+           let bC = new FC(wC.tags, wC.mode, wC.context);
+           ZC ? ZC.next = bC : QC = bC, ZC = bC
```

#### 125. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L924-L930` → after: `L15010-L15013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15010-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15010-L15013) · [Before (L924-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L924-L930)

```diff
-       static fromJSON(kk) {
-         if (!kk || !Array.isArray(kk.lw) || "number" != typeof kk.main || kk.main >= kk.lw.length) throw new RangeError("Invalid JSON representation for EditorSelection");
-         return new Xk(kk.lw.map((kk => tk.fromJSON(kk))), kk.main)
-       }
-       static single(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
-         return new Xk([Xk.range(kk, ek)], 0)
+     });
+     class FC {
+       constructor(CC, zC, ZC, QC) {
+         this.tags = CC, this.mode = zC, this.context = ZC, this.next = QC
```

#### 126. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L932-L940` → after: `L15015-L15016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15015-L15016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15015-L15016) · [Before (L932-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L932-L940)

```diff
-       static create(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         if (0 == kk.length) throw new RangeError("A selection needs at least one range");
-         for (let ik = 0, Dk = 0; Dk < kk.length; Dk++) {
-           let fk = kk[Dk];
-           if (fk.empty ? fk.from <= ik : fk.from < ik) return Xk.normalized(kk.slice(), ek);
-           ik = fk.to
-         }
-         return new Xk(kk, ek)
+       get opaque() {
+         return 0 == this.mode
```

#### 127. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L942-L946` → after: `L15018-L15019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15018-L15019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15018-L15019) · [Before (L942-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L942-L946)

```diff
-       static cursor(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           ik = arguments.length > 2 ? arguments[2] : void 0,
-           Dk = arguments.length > 3 ? arguments[3] : void 0;
-         return tk.create(kk, kk, (0 == ek ? 0 : ek < 0 ? 8 : 16) | (null == ik ? 7 : Math.min(6, ik)) | (null !== Dk && void 0 !== Dk ? Dk : 16777215) << 6)
+       get inherit() {
+         return 1 == this.mode
```

#### 128. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L948-L950` → after: `L15021-L15022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15021-L15022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15021-L15022) · [Before (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L948-L950)

```diff
-       static range(kk, ek, ik, Dk, fk) {
-         let Sk = (null !== ik && void 0 !== ik ? ik : 16777215) << 6 | (null == Dk ? 7 : Math.min(6, Dk));
-         return fk || kk == ek || (fk = ek < kk ? 1 : -1), ek < kk ? tk.create(ek, kk, 48 | Sk) : tk.create(kk, ek, (fk ? fk < 0 ? 8 : 16 : 0) | Sk)
+       sort(CC) {
+         return !CC || CC.depth < this.depth ? (this.next = CC, this) : (CC.next = this.sort(CC.next), CC)
```

#### 129. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L952-L965` → after: `L15024-L15025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15024-L15025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15024-L15025) · [Before (L952-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L952-L965)

```diff
-       static normalized(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           ik = kk[ek];
-         kk.sort(((kk, ek) => kk.from - ek.from)), ek = kk.indexOf(ik);
-         for (let Dk = 1; Dk < kk.length; Dk++) {
-           let ik = kk[Dk],
-             fk = kk[Dk - 1];
-           if (ik.empty ? ik.from <= fk.to : ik.from < fk.to) {
-             let Sk = fk.from,
-               bk = Math.max(ik.to, fk.to);
-             Dk <= ek && ek--, kk.splice(--Dk, 2, ik.anchor > ik.head ? Xk.range(bk, Sk) : Xk.range(Sk, bk))
-           }
-         }
-         return new Xk(kk, ek)
+       get depth() {
+         return this.context ? this.context.length : 0
```

#### 130. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L970-L997` → after: `L15030-L15052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15030-L15052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15030-L15052) · [Before (L970-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L970-L997)

```diff
-       for (let ik of kk.lw)
-         if (ik.to > ek) throw new RangeError("Selection points outside of document")
-     }
-     let ck = 0;
-     class Tk {
-       constructor(kk, ek, ik, Dk, fk) {
-         this.combine = kk, this.compareInput = ek, this.compare = ik, this.isStatic = Dk, this.id = ck++, this.default = kk([]), this.extensions = "function" == typeof fk ? fk(this) : fk
-       }
-       get reader() {
-         return this
-       }
-       static define() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         return new Tk(kk.combine || (kk => kk), kk.compareInput || ((kk, ek) => kk === ek), kk.compare || (kk.combine ? (kk, ek) => kk === ek : Zk), !!kk.static, kk.enables)
-       }
-       of(kk) {
- ... (12 more removed lines; see GitHub link above)
+       let ZC = Object.create(null);
+       for (let bC of CC)
+         if (Array.isArray(bC.tag))
+           for (let CC of bC.tag) ZC[CC.id] = bC.class;
+         else ZC[bC.tag.id] = bC.class;
+       let {
+         scope: QC,
+         all: wC = null
+       } = zC || {};
+       return {
+         style: CC => {
+           let zC = wC;
+           for (let QC of CC)
+             for (let CC of QC.set) {
+               let QC = ZC[CC.id];
+               if (QC) {
+ ... (7 more added lines; see GitHub link above)
```

#### 131. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1001-L1002` → after: `L15056-L15060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15056-L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15056-L15060) · [Before (L1001-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1001-L1002)

```diff
-     function Zk(kk, ek) {
-       return kk == ek || kk.length == ek.length && kk.every(((kk, ik) => kk === ek[ik]))
+     function NC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : CC.length,
+         bC = new MC(QC, Array.isArray(zC) ? zC : [zC], ZC);
+       bC.highlightRange(CC.cursor(), QC, wC, "", bC.highlighters), bC.flush(wC)
```

#### 132. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1005-L1006` → after: `L15064-L15065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15064-L15065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15064-L15065) · [Before (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1005-L1006)

```diff
-       constructor(kk, ek, ik, Dk) {
-         this.dependencies = kk, this.facet = ek, this.type = ik, this.value = Dk, this.id = ck++
+       constructor(CC, zC, ZC) {
+         this.at = CC, this.highlighters = zC, this.span = ZC, this.class = ""
```

#### 133. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1008-L1024` → after: `L15067-L15091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15067-L15091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15067-L15091) · [Before (L1008-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1008-L1024)

```diff
-       dynamicSlot(kk) {
-         var ek;
-         let ik = this.value,
-           Dk = this.facet.compareInput,
-           fk = this.id,
-           Sk = kk[fk] >> 1,
-           bk = 2 == this.type,
-           rk = !1,
-           Pk = !1,
-           mk = [];
-         for (let Mk of this.dependencies) "doc" == Mk ? rk = !0 : "selection" == Mk ? Pk = !0 : 0 == (1 & (null !== (ek = kk[Mk.id]) && void 0 !== ek ? ek : 1)) && mk.push(kk[Mk.id]);
-         return {
-           create: kk => (kk.values[Sk] = ik(kk), 1),
-           update(kk, ek) {
-             if (rk && ek.docChanged || Pk && (ek.docChanged || ek.selection) || Gk(kk, mk)) {
-               let ek = ik(kk);
- ... (1 more removed lines; see GitHub link above)
+       startSpan(CC, zC) {
+         zC != this.class && (this.flush(CC), CC > this.at && (this.at = CC), this.class = zC)
+       }
+       flush(CC) {
+         CC > this.at && this.class && this.span(this.at, CC, this.class)
+       }
+       highlightRange(CC, zC, ZC, wC, bC) {
+         let {
+           type: nC,
+           from: fC,
+           to: oC
+         } = CC;
+         if (fC >= ZC || oC <= zC) return;
+         nC.isTop && (bC = this.highlighters.filter((CC => !CC.scope || CC.scope(nC))));
+         let WC = wC,
+           NC = function(CC) {
+ ... (9 more added lines; see GitHub link above)
```

#### 134. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1026-L1034` → after: `L15093-L15109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15093-L15109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15093-L15109) · [Before (L1026-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1026-L1034)

```diff
-             return 0
-           },
-           reconfigure: (kk, ek) => {
-             let rk, Pk = ek.config.address[fk];
-             if (null != Pk) {
-               let fk = Ke(ek, Pk);
-               if (this.dependencies.every((ik => ik instanceof Tk ? ek.facet(ik) === kk.facet(ik) : !(ik instanceof Jk) || ek.field(ik, !1) == kk.field(ik, !1))) || (bk ? gk(rk = ik(kk), fk, Dk) : Dk(rk = ik(kk), fk))) return kk.values[Sk] = fk, 0
-             } else rk = ik(kk);
-             return kk.values[Sk] = rk, 1
+             return ZC
+           }(bC, NC.tags);
+         if (MC && (WC && (WC += " "), WC += MC, 1 == NC.mode && (wC += (wC ? " " : "") + MC)), this.startSpan(Math.max(zC, fC), WC), NC.opaque) return;
+         let gC = CC.tree && CC.tree.prop(QC.g.mounted);
+         if (gC && gC.overlay) {
+           let QC = CC.node.enter(gC.overlay[0].from + fC, 1),
+             nC = this.highlighters.filter((CC => !CC.scope || CC.scope(gC.tree.type))),
+             qC = CC.firstChild();
+           for (let FC = 0, NC = fC;; FC++) {
+             let MC = FC < gC.overlay.length ? gC.overlay[FC] : null,
+               SC = MC ? MC.from + fC : oC,
+               pC = Math.max(zC, NC),
+               PC = Math.min(ZC, SC);
+             if (pC < PC && qC)
+               for (; CC.from < PC && (this.highlightRange(CC, pC, PC, wC, bC), this.startSpan(Math.min(PC, CC.to), WC), !(CC.to >= SC) && CC.nextSibling()););
+             if (!MC || SC > ZC) break;
+ ... (1 more added lines; see GitHub link above)
```

#### 135. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1039-L1044` → after: `L15124-L15227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15124-L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15124-L15227) · [Before (L1039-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1039-L1044)

```diff
- 
-     function gk(kk, ek, ik) {
-       if (kk.length != ek.length) return !1;
-       for (let Dk = 0; Dk < kk.length; Dk++)
-         if (!ik(kk[Dk], ek[Dk])) return !1;
-       return !0
+     const gC = bC.define,
+       SC = gC(),
+       pC = gC(),
+       PC = gC(pC),
+       GC = gC(pC),
+       RC = gC(),
+       AC = gC(RC),
+       xC = gC(RC),
+       JC = gC(),
+       IC = gC(JC),
+       iC = gC(),
+       vC = gC(),
+       eC = gC(),
+       hC = gC(eC),
+       KC = gC(),
+       YC = {
+ ... (88 more added lines; see GitHub link above)
```

#### 136. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1048-L1050` → after: `L15341-L15349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15341-L15349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15341-L15349) · [Before (L1048-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1048-L1050)

```diff
-       let ik = !1;
-       for (let Dk of ek) 1 & Me(kk, Dk) && (ik = !0);
-       return ik
+       return ZC => {
+         let {
+           state: QC,
+           dispatch: wC
+         } = ZC;
+         if (QC.readOnly) return !1;
+         let bC = CC(zC, QC);
+         return !!bC && (wC(QC.update(bC)), !0)
+       }
```

#### 137. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1052-L1059` → after: `L15351-L15353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15351-L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15351-L15353) · [Before (L1052-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1052-L1059)

```diff
- 
-     function Nk(kk, ek, ik) {
-       let Dk = ik.map((ek => kk[ek.id])),
-         fk = ik.map((kk => kk.type)),
-         Sk = Dk.filter((kk => !(1 & kk))),
-         bk = kk[ek.id] >> 1;
- 
-       function rk(kk) {
+     const WC = FC(PC, 0),
+       NC = FC(pC, 0),
+       MC = FC(((CC, zC) => pC(CC, zC, function(CC) {
```

#### 138. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1061-L1085` → after: `L15355-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15355-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15355-L15363) · [Before (L1061-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1061-L1085)

```diff
-         for (let ek = 0; ek < Dk.length; ek++) {
-           let Sk = Ke(kk, Dk[ek]);
-           if (2 == fk[ek])
-             for (let kk of Sk) ik.push(kk);
-           else ik.push(Sk)
-         }
-         return ek.combine(ik)
-       }
-       return {
-         create(kk) {
-           for (let ek of Dk) Me(kk, ek);
-           return kk.values[bk] = rk(kk), 1
-         },
-         update(kk, ik) {
-           if (!Gk(kk, Sk)) return 0;
-           let Dk = rk(kk);
- ... (9 more removed lines; see GitHub link above)
+         for (let ZC of CC.selection.np) {
+           let QC = CC.doc.lineAt(ZC.from),
+             wC = ZC.to <= QC.to ? QC : CC.doc.lineAt(ZC.to);
+           wC.from > QC.from && wC.from == ZC.to && (wC = ZC.to == QC.to + 1 ? QC : CC.doc.lineAt(ZC.to - 1));
+           let bC = zC.length - 1;
+           bC >= 0 && zC[bC].to > QC.from ? zC[bC].to = wC.to : zC.push({
+             from: QC.from + /^\s*/.exec(QC.text)[0].length,
+             to: wC.to
+           })
```

#### 139. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1087` → after: `L15365-L15370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15365-L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15365-L15370) · [Before (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1087)

```diff
-       }
+         return zC
+       }(zC))), 0);
+ 
+     function gC(CC, zC) {
+       let ZC = CC.languageDataAt("commentTokens", zC, 1);
+       return ZC.length ? ZC[0] : {}
```

#### 140. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1089-L1111` → after: `L15372-L15405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15372-L15405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15372-L15405) · [Before (L1089-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1089-L1111)

```diff
-     const Rk = Tk.define({
-       static: !0
-     });
-     class Jk {
-       constructor(kk, ek, ik, Dk, fk) {
-         this.id = kk, this.createF = ek, this.updateF = ik, this.compareF = Dk, this.spec = fk, this.provides = void 0
-       }
-       static define(kk) {
-         let ek = new Jk(ck++, kk.create, kk.update, kk.compare || ((kk, ek) => kk === ek), kk);
-         return kk.provide && (ek.provides = kk.provide(ek)), ek
-       }
-       create(kk) {
-         let ek = kk.facet(Rk).find((kk => kk.field == this));
-         return ((null === ek || void 0 === ek ? void 0 : ek.create) || this.createF)(kk)
-       }
-       slot(kk) {
- ... (7 more removed lines; see GitHub link above)
+     const SC = 50;
+ 
+     function pC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC.selection.np,
+         QC = ZC.map((CC => gC(zC, CC.from).block));
+       if (!QC.every((CC => CC))) return null;
+       let wC = ZC.map(((CC, ZC) => function(CC, zC, ZC, QC) {
+         let wC, bC, {
+             open: nC,
+             close: fC
+           } = zC,
+           oC = CC.sliceDoc(ZC - SC, ZC),
+           qC = CC.sliceDoc(QC, QC + SC),
+           FC = /\s*$/.exec(oC)[0].length,
+           WC = /^\s*/.exec(qC)[0].length,
+           NC = oC.length - FC;
+ ... (18 more added lines; see GitHub link above)
```

#### 141. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1113-L1116` → after: `L15407-L15409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15407-L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15407-L15409) · [Before (L1113-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1113-L1116)

```diff
-           reconfigure: (kk, ik) => {
-             let Dk, fk = kk.facet(Rk),
-               Sk = ik.facet(Rk);
-             return (Dk = fk.find((kk => kk.field == this))) && Dk != Sk.find((kk => kk.field == this)) ? (kk.values[ek] = Dk.create(kk), 1) : null != ik.config.address[this.id] ? (kk.values[ek] = ik.field(this), 0) : (kk.values[ek] = this.create(kk), 1)
+           close: {
+             pos: QC - gC - fC.length,
+             margin: /\s/.test(bC.charAt(pC - 1)) ? 1 : 0
```

#### 142. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1120-L1128` → after: `L15442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15442) · [Before (L1120-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1120-L1128)

```diff
-       init(kk) {
-         return [this, Rk.of({
-           field: this,
-           create: kk
-         })]
-       }
-       get extension() {
-         return this
-       }
+       return null
```

#### 143. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1135-L1152` → after: `L15445-L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15445-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15445-L15477) · [Before (L1135-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1135-L1152)

```diff
-     function fe(kk) {
-       return ek => new be(ek, kk)
-     }
-     const Se = {
-       highest: fe(0),
-       high: fe(De),
-       default: fe(ie),
-       low: fe(ee),
-       lowest: fe(ke)
-     };
-     class be {
-       constructor(kk, ek) {
-         this.inner = kk, this.prec = ek
-       }
-     }
-     class re {
- ... (2 more removed lines; see GitHub link above)
+     function PC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC.selection.np,
+         QC = [],
+         wC = -1;
+       CC: for (let {
+           from: bC,
+           to: nC
+         }
+         of ZC) {
+         let CC, ZC = QC.length,
+           fC = 1e9;
+         for (let oC = bC; oC <= nC;) {
+           let ZC = zC.doc.lineAt(oC);
+           if (void 0 == CC && (CC = gC(zC, ZC.from).line, !CC)) continue CC;
+           if (ZC.from > wC && (bC == nC || nC > ZC.from)) {
+             wC = ZC.from;
+ ... (17 more added lines; see GitHub link above)
```

#### 144. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1154-L1158` → after: `L15479-L15496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15479-L15496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15479-L15496) · [Before (L1154-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1154-L1158)

```diff
-       reconfigure(kk) {
-         return re.reconfigure.of({
-           compartment: this,
-           extension: kk
-         })
+       if (2 != CC && QC.some((CC => CC.comment < 0 && (!CC.empty || CC.single)))) {
+         let CC = [];
+         for (let {
+             line: zC,
+             token: wC,
+             indent: bC,
+             empty: nC,
+             single: fC
+           }
+           of QC) !fC && nC || CC.push({
+           from: zC.from + bC,
+           insert: wC + " "
+         });
+         let ZC = zC.changes(CC);
+         return {
+           changes: ZC,
+ ... (2 more added lines; see GitHub link above)
```

#### 145. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1160-L1161` → after: `L15498-L15515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15498-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15498-L15515) · [Before (L1160-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1160-L1161)

```diff
-       get(kk) {
-         return kk.config.compartments.get(this)
+       if (1 != CC && QC.some((CC => CC.comment >= 0))) {
+         let CC = [];
+         for (let {
+             line: zC,
+             comment: ZC,
+             token: wC
+           }
+           of QC)
+           if (ZC >= 0) {
+             let QC = zC.from + ZC,
+               bC = QC + wC.length;
+             " " == zC.text[bC - zC.from] && bC++, CC.push({
+               from: QC,
+               to: bC
+             })
+           } return {
+ ... (2 more added lines; see GitHub link above)
```

#### 146. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1164-L1166` → after: `L15519-L15568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15519-L15568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15519-L15568) · [Before (L1164-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1164-L1166)

```diff
-     class Pe {
-       constructor(kk, ek) {
-         this.compartment = kk, this.inner = ek
+     const GC = nC.d.define(),
+       RC = nC.d.define(),
+       AC = nC.n.define(),
+       xC = nC.n.define({
+         combine: CC => (0, nC.P)(CC, {
+           minDepth: 100,
+           newGroupDelay: 500,
+           joinToEvent: (CC, zC) => zC
+         }, {
+           minDepth: Math.max,
+           newGroupDelay: Math.min,
+           joinToEvent: (CC, zC) => (ZC, QC) => CC(ZC, QC) || zC(ZC, QC)
+         })
+       }),
+       JC = nC.A.define({
+         create: () => rC.empty,
+ ... (34 more added lines; see GitHub link above)
```

#### 147. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1170-L1171` → after: `L15576-L15577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15576-L15577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15576-L15577) · [Before (L1170-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1170-L1171)

```diff
-       constructor(kk, ek, ik, Dk, fk, Sk) {
-         for (this.base = kk, this.compartments = ek, this.dynamicSlots = ik, this.address = Dk, this.staticValues = fk, this.facets = Sk, this.statusTemplate = []; this.statusTemplate.length < ik.length;) this.statusTemplate.push(0)
+       constructor(CC, zC, ZC, QC, wC) {
+         this.changes = CC, this.effects = zC, this.mapped = ZC, this.startSelection = QC, this.selectionsAfter = wC
```

#### 148. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1173-L1175` → after: `L15579-L15580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15579-L15580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15579-L15580) · [Before (L1173-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1173-L1175)

```diff
-       staticFacet(kk) {
-         let ek = this.address[kk.id];
-         return null == ek ? kk.default : this.staticValues[ek >> 1]
+       setSelAfter(CC) {
+         return new KC(this.changes, this.effects, this.mapped, this.startSelection, CC)
```

#### 149. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1177-L1233` → after: `L15582-L15588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15582-L15588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15582-L15588) · [Before (L1177-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1177-L1233)

```diff
-       static resolve(kk, ek, ik) {
-         let Dk = [],
-           fk = Object.create(null),
-           Sk = new Map;
-         for (let Kk of function(kk, ek, ik) {
-             let Dk = [
-                 [],
-                 [],
-                 [],
-                 [],
-                 []
-               ],
-               fk = new Map;
- 
-             function Sk(kk, bk) {
-               let rk = fk.get(kk);
- ... (41 more removed lines; see GitHub link above)
+       toJSON() {
+         var CC, zC, ZC;
+         return {
+           changes: null === (CC = this.changes) || void 0 === CC ? void 0 : CC.toJSON(),
+           mapped: null === (zC = this.mapped) || void 0 === zC ? void 0 : zC.toJSON(),
+           startSelection: null === (ZC = this.startSelection) || void 0 === ZC ? void 0 : ZC.toJSON(),
+           selectionsAfter: this.selectionsAfter.map((CC => CC.toJSON()))
```

#### 150. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1235-L1236` → after: `L15590-L15603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15590-L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15590-L15603) · [Before (L1235-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1235-L1236)

```diff
-         let Mk = Pk.map((kk => kk(bk)));
-         return new me(kk, Sk, Mk, bk, rk, fk)
+       }
+       static fromJSON(CC) {
+         return new KC(CC.changes && nC.ChangeSet.fromJSON(CC.changes), [], CC.mapped && nC.e.fromJSON(CC.mapped), CC.startSelection && nC.i.fromJSON(CC.startSelection), CC.selectionsAfter.map(nC.i.fromJSON))
+       }
+       static fromTransaction(CC, zC) {
+         let ZC = mC;
+         for (let QC of CC.startState.facet(AC)) {
+           let zC = QC(CC);
+           zC.length && (ZC = ZC.concat(zC))
+         }
+         return !ZC.length && CC.changes.empty ? null : new KC(CC.changes.invert(CC.startState.doc), ZC, void 0, zC || CC.startState.selection, mC)
+       }
+       static selection(CC) {
+         return new KC(void 0, mC, void 0, void 0, CC)
```

#### 151. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1240-L1248` → after: `L15607-L15610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15607-L15610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15607-L15610) · [Before (L1240-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1240-L1248)

```diff
-     function Me(kk, ek) {
-       if (1 & ek) return 2;
-       let ik = ek >> 1,
-         Dk = kk.status[ik];
-       if (4 == Dk) throw new Error("Cyclic dependency between fields and/or facets");
-       if (2 & Dk) return Dk;
-       kk.status[ik] = 4;
-       let fk = kk.computeSlot(kk, kk.config.dynamicSlots[ik]);
-       return kk.status[ik] = 2 | fk
+     function YC(CC, zC, ZC, QC) {
+       let wC = zC + 1 > ZC + 20 ? zC - ZC - 1 : 0,
+         bC = CC.slice(wC, zC);
+       return bC.push(QC), bC
```

#### 152. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1252` → after: `L15614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15614) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1252)

```diff
-       return 1 & ek ? kk.config.staticValues[ek >> 1] : kk.values[ek >> 1]
+       return CC.length ? zC.length ? CC.concat(zC) : CC : zC
```

#### 153. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1254-L1274` → after: `L15616-L15623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15616-L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15616-L15623) · [Before (L1254-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1254-L1274)

```diff
-     const xe = Tk.define(),
-       ne = Tk.define({
-         combine: kk => kk.some((kk => kk)),
-         static: !0
-       }),
-       Ue = Tk.define({
-         combine: kk => kk.length ? kk[0] : void 0,
-         static: !0
-       }),
-       He = Tk.define(),
-       we = Tk.define(),
-       le = Tk.define(),
-       pe = Tk.define({
-         combine: kk => !!kk.length && kk[0]
-       });
-     class ye {
- ... (5 more removed lines; see GitHub link above)
+     const mC = [],
+       HC = 200;
+ 
+     function EC(CC, zC) {
+       if (CC.length) {
+         let ZC = CC[CC.length - 1],
+           QC = ZC.selectionsAfter.slice(Math.max(0, ZC.selectionsAfter.length - HC));
+         return QC.length && QC[QC.length - 1].eq(zC) ? CC : (QC.push(zC), YC(CC, CC.length - 1, 1e9, ZC.setSelAfter(QC)))
```

#### 154. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1277-L1280` → after: `L15627-L15631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15627-L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15627-L15631) · [Before (L1277-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1277-L1280)

```diff
-     class Ye {
-       of(kk) {
-         return new ye(this, kk)
-       }
+ 
+     function lC(CC) {
+       let zC = CC[CC.length - 1],
+         ZC = CC.slice();
+       return ZC[CC.length - 1] = zC.setSelAfter(zC.selectionsAfter.slice(0, zC.selectionsAfter.length - 1)), ZC
```

#### 155. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1282-L1287` → after: `L15633-L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15633-L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15633-L15644) · [Before (L1282-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1282-L1287)

```diff
-     class Le {
-       constructor(kk) {
-         this.map = kk
-       }
-       of(kk) {
-         return new Ce(this, kk)
+ 
+     function XC(CC, zC) {
+       if (!CC.length) return CC;
+       let ZC = CC.length,
+         QC = mC;
+       for (; ZC;) {
+         let wC = cC(CC[ZC - 1], zC, QC);
+         if (wC.changes && !wC.changes.empty || wC.effects.length) {
+           let zC = CC.slice(0, ZC);
+           return zC[ZC - 1] = wC, zC
+         }
+         zC = wC.mapped, ZC--, QC = wC.selectionsAfter
```

#### 156. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1292` → after: `L15660-L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15660-L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15660-L15662) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1292)

```diff
-         this.type = kk, this.value = ek
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
+         this.done = CC, this.undone = zC, this.prevTime = ZC, this.prevUserEvent = QC
```

#### 157. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1294-L1296` → after: `L15664-L15665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15664-L15665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15664-L15665) · [Before (L1294-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1294-L1296)

```diff
-       map(kk) {
-         let ek = this.type.map(this.value, kk);
-         return void 0 === ek ? void 0 : ek == this.value ? this : new Ce(this.type, ek)
+       isolate() {
+         return this.prevTime ? new rC(this.done, this.undone) : this
```

#### 158. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1298-L1299` → after: `L15667-L15680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15667-L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15667-L15680) · [Before (L1298-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1298-L1299)

```diff
-       is(kk) {
-         return this.type == kk
+       addChanges(CC, zC, ZC, QC, wC) {
+         let bC = this.done,
+           fC = bC[bC.length - 1];
+         return bC = fC && fC.changes && !fC.changes.empty && CC.changes && (!ZC || uC.test(ZC)) && (!fC.selectionsAfter.length && zC - this.prevTime < QC.newGroupDelay && QC.joinToEvent(wC, function(CC, zC) {
+           let ZC = [],
+             QC = !1;
+           return CC.iterChangedRanges(((CC, zC) => ZC.push(CC, zC))), zC.iterChangedRanges(((CC, zC, wC, bC) => {
+             for (let nC = 0; nC < ZC.length;) {
+               let CC = ZC[nC++],
+                 zC = ZC[nC++];
+               bC >= CC && wC <= zC && (QC = !0)
+             }
+           })), QC
+         }(fC.changes, CC.changes)) || "input.type.compose" == ZC) ? YC(bC, bC.length - 1, QC.minDepth, new KC(CC.changes.compose(fC.changes), dC(nC.w.mapEffects(CC.effects, fC.changes), fC.effects), fC.mapped, fC.startSelection, mC)) : YC(bC, bC.length, QC.minDepth, CC), new rC(b … [truncated]
```

#### 159. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1301-L1302` → after: `L15682-L15685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15682-L15685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15682-L15685) · [Before (L1301-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1301-L1302)

```diff
-       static define() {
-         return new Le((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (kk => kk))
+       addSelection(CC, zC, ZC, QC) {
+         let wC = this.done.length ? this.done[this.done.length - 1].selectionsAfter : mC;
+         return wC.length > 0 && zC - this.prevTime < QC && ZC == this.prevUserEvent && ZC && /^select($|\.)/.test(ZC) && (bC = wC[wC.length - 1], nC = CC, bC.np.length == nC.np.length && 0 === bC.np.filter(((CC, zC) => CC.empty != nC.np[zC].empty)).length) ? this : new rC(EC(this … [truncated]
+         var bC, nC
```

#### 160. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1304-L1309` → after: `L15687-L15719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15687-L15719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15687-L15719) · [Before (L1304-L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1304-L1309)

```diff
-       static mapEffects(kk, ek) {
-         if (!kk.length) return kk;
-         let ik = [];
-         for (let Dk of kk) {
-           let kk = Dk.map(ek);
-           kk && ik.push(kk)
+       addMapping(CC) {
+         return new rC(XC(this.done, CC), XC(this.undone, CC), this.prevTime, this.prevUserEvent)
+       }
+       pop(CC, zC, ZC) {
+         let QC = 0 == CC ? this.done : this.undone;
+         if (0 == QC.length) return null;
+         let wC = QC[QC.length - 1],
+           bC = wC.selectionsAfter[0] || (wC.startSelection ? wC.startSelection.map(wC.changes.invertedDesc, 1) : zC.selection);
+         if (ZC && wC.selectionsAfter.length) return zC.update({
+           selection: wC.selectionsAfter[wC.selectionsAfter.length - 1],
+           annotations: GC.of({
+             side: CC,
+             rest: lC(QC),
+             selection: bC
+           }),
+           userEvent: 0 == CC ? "select.undo" : "select.redo",
+ ... (17 more added lines; see GitHub link above)
```

#### 161. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1311` → after: `L15721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15721) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1311)

```diff
-         return ik
+         return null
```

#### 162. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1314-L1343` → after: `L15724-L15800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15724-L15800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15724-L15800) · [Before (L1314-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1314-L1343)

```diff
-     Ce.reconfigure = Ce.define(), Ce.appendConfig = Ce.define();
-     class Ae {
-       constructor(kk, ek, ik, Dk, fk, Sk) {
-         this.startState = kk, this.changes = ek, this.selection = ik, this.effects = Dk, this.annotations = fk, this.scrollIntoView = Sk, this._doc = null, this._state = null, ik && Bk(ik, ek.newLength), fk.some((kk => kk.type == Ae.time)) || (this.annotations = fk.concat(Ae.time … [truncated]
-       }
-       static create(kk, ek, ik, Dk, fk, Sk) {
-         return new Ae(kk, ek, ik, Dk, fk, Sk)
-       }
-       get newDoc() {
-         return this._doc || (this._doc = this.changes.apply(this.startState.doc))
-       }
-       get newSelection() {
-         return this.selection || this.startState.selection.map(this.changes)
-       }
-       get state() {
-         return this._state || this.startState.applyTransaction(this), this._state
- ... (14 more removed lines; see GitHub link above)
+     rC.empty = new rC(mC, mC);
+     const sC = [{
+       key: "Mod-z",
+       run: iC,
+       preventDefault: !0
+     }, {
+       key: "Mod-y",
+       mac: "Mod-Shift-z",
+       run: vC,
+       preventDefault: !0
+     }, {
+       linux: "Ctrl-Shift-z",
+       run: vC,
+       preventDefault: !0
+     }, {
+       key: "Mod-u",
+ ... (61 more added lines; see GitHub link above)
```

#### 163. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1348-L1355` → after: `L15806-L15830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15806-L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15806-L15830) · [Before (L1348-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1348-L1355)

```diff
-       let ik = [];
-       for (let Dk = 0, fk = 0;;) {
-         let Sk, bk;
-         if (Dk < kk.length && (fk == ek.length || ek[fk] >= kk[Dk])) Sk = kk[Dk++], bk = kk[Dk++];
-         else {
-           if (!(fk < ek.length)) return ik;
-           Sk = ek[fk++], bk = ek[fk++]
-         }!ik.length || ik[ik.length - 1] < Sk ? ik.push(Sk, bk) : ik[ik.length - 1] < bk && (ik[ik.length - 1] = bk)
+       return tC(CC, (ZC => {
+         if (!ZC.empty) return DC(ZC, zC);
+         let QC = CC.moveVertically(ZC, zC);
+         return QC.head != ZC.head ? QC : CC.moveToLineBoundary(ZC, zC)
+       }))
+     }
+     const Cz = CC => VC(CC, !1),
+       zz = CC => VC(CC, !0);
+ 
+     function Zz(CC) {
+       let zC, ZC = CC.scrollDOM.clientHeight < CC.scrollDOM.scrollHeight - 2,
+         QC = 0,
+         wC = 0;
+       if (ZC) {
+         for (let zC of CC.state.facet(fC.j.scrollMargins)) {
+           let ZC = zC(CC);
+ ... (9 more added lines; see GitHub link above)
```

#### 164. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1359-L1367` → after: `L15834-L15849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15834-L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15834-L15849) · [Before (L1359-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1359-L1367)

```diff
-     function se(kk, ek, ik) {
-       var Dk;
-       let fk, Sk, bk;
-       return ik ? (fk = ek.changes, Sk = zk.empty(ek.changes.length), bk = kk.changes.compose(ek.changes)) : (fk = ek.changes.map(kk.changes), Sk = kk.changes.mapDesc(ek.changes, !0), bk = kk.changes.compose(fk)), {
-         changes: bk,
-         selection: ek.selection ? ek.selection.map(Sk) : null === (Dk = kk.selection) || void 0 === Dk ? void 0 : Dk.map(fk),
-         effects: Ce.mapEffects(kk.effects, fk).concat(Ce.mapEffects(ek.effects, Sk)),
-         annotations: kk.annotations.length ? kk.annotations.concat(ek.annotations) : ek.annotations,
-         scrollIntoView: kk.scrollIntoView || ek.scrollIntoView
+     function Qz(CC, zC) {
+       let ZC, QC = Zz(CC),
+         {
+           state: wC
+         } = CC,
+         bC = TC(wC.selection, (ZC => ZC.empty ? CC.moveVertically(ZC, zC, QC.height) : DC(ZC, zC)));
+       if (bC.eq(wC.selection)) return !1;
+       if (QC.selfScroll) {
+         let zC = CC.coordsAtPos(wC.selection.main.head),
+           nC = CC.scrollDOM.getBoundingClientRect(),
+           oC = nC.top + QC.marginTop,
+           qC = nC.bottom - QC.marginBottom;
+         zC && zC.top > oC && zC.bottom < qC && (ZC = fC.j.scrollIntoView(bC.main.head, {
+           y: "start",
+           yMargin: zC.top - oC
+         }))
```

#### 165. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1372-L1379` → after: `L15859-L15863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15859-L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15859-L15863) · [Before (L1372-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1372-L1379)

```diff
-       let Dk = ek.selection,
-         fk = ue(ek.annotations);
-       return ek.userEvent && (fk = fk.concat(Ae.userEvent.of(ek.userEvent))), {
-         changes: ek.changes instanceof zk ? ek.changes : zk.of(ek.changes || [], ik, kk.facet(Ue)),
-         selection: Dk && (Dk instanceof Xk ? Dk : Xk.single(Dk.anchor, Dk.head)),
-         effects: ue(ek.effects),
-         annotations: fk,
-         scrollIntoView: !!ek.scrollIntoView
+       let QC = CC.lineBlockAt(zC.head),
+         wC = CC.moveToLineBoundary(zC, ZC);
+       if (wC.head == zC.head && wC.head != (ZC ? QC.to : QC.from) && (wC = CC.moveToLineBoundary(zC, ZC, !1)), !ZC && wC.head == QC.from && QC.length) {
+         let ZC = /^\s*/.exec(CC.state.sliceDoc(QC.from, Math.min(QC.from + 100, QC.to)))[0].length;
+         ZC && zC.head != QC.from + ZC && (wC = nC.i.cursor(QC.from + ZC))
```

#### 166. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1384-L1402` → after: `L15869-L15872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15869-L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15869-L15872) · [Before (L1384-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1384-L1402)

```diff
-       let Dk = de(kk, ek.length ? ek[0] : {}, kk.doc.length);
-       ek.length && !1 === ek[0].filter && (ik = !1);
-       for (let Sk = 1; Sk < ek.length; Sk++) {
-         !1 === ek[Sk].filter && (ik = !1);
-         let fk = !!ek[Sk].sequential;
-         Dk = se(Dk, de(kk, ek[Sk], fk ? Dk.changes.newLength : kk.doc.length), fk)
-       }
-       let fk = Ae.create(kk, Dk.changes, Dk.selection, Dk.effects, Dk.annotations, Dk.scrollIntoView);
-       return function(kk) {
-         let ek = kk.startState,
-           ik = ek.facet(le),
-           Dk = kk;
-         for (let fk = ik.length - 1; fk >= 0; fk--) {
-           let Sk = ik[fk](kk);
-           Sk && Object.keys(Sk).length && (Dk = se(Dk, de(ek, Sk, kk.changes.newLength), !0))
-         }
- ... (3 more removed lines; see GitHub link above)
+       let QC = !1,
+         wC = TC(CC.selection, (zC => {
+           let wC = (0, oC.X)(CC, zC.head, -1) || (0, oC.X)(CC, zC.head, 1) || zC.head > 0 && (0, oC.X)(CC, zC.head - 1, 1) || zC.head < CC.doc.length && (0, oC.X)(CC, zC.head + 1, -1);
+           if (!wC || !wC.end) return zC;
```

#### 167. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1404-L1427` → after: `L15874-L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15874-L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15874-L15877) · [Before (L1404-L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1404-L1427)

```diff
-         for (let fk of ek.facet(He)) {
-           let ek = fk(kk);
-           if (!1 === ek) {
-             ik = !1;
-             break
-           }
-           Array.isArray(ek) && (ik = !0 === ik ? ek : je(ik, ek))
-         }
-         if (!0 !== ik) {
-           let Dk, fk;
-           if (!1 === ik) fk = kk.changes.invertedDesc, Dk = zk.empty(ek.doc.length);
-           else {
-             let ek = kk.changes.filter(ik);
-             Dk = ek.changes, fk = ek.filtered.mapDesc(ek.changes).invertedDesc
-           }
-           kk = Ae.create(ek, Dk, kk.selection && kk.selection.map(fk), Ce.mapEffects(kk.effects, fk), kk.annotations, kk.scrollIntoView)
- ... (8 more removed lines; see GitHub link above)
+           let bC = wC.start.from == zC.head ? wC.end.to : wC.end.from;
+           return ZC ? nC.i.range(zC.anchor, bC) : nC.i.cursor(bC)
+         }));
+       return !!QC && (zC(aC(CC, wC)), !0)
```

#### 168. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1432-L1433` → after: `L15880-L15885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15880-L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15880-L15885) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1432-L1433)

```diff
-     function ue(kk) {
-       return null == kk ? Fe : Array.isArray(kk) ? kk : [kk]
+     function oz(CC, zC) {
+       let ZC = TC(CC.state.selection, (CC => {
+         let ZC = zC(CC);
+         return nC.i.range(CC.anchor, ZC.head, ZC.goalColumn, ZC.bidiLevel || void 0, ZC.assoc)
+       }));
+       return !ZC.eq(CC.state.selection) && (CC.dispatch(aC(CC.state, ZC)), !0)
```

#### 169. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1444-L1451` → after: `L15888-L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15888-L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15888-L15959) · [Before (L1444-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1444-L1451)

```diff
-     function Qe(kk) {
-       return ek => {
-         if (!/\S/.test(ek)) return qe.Space;
-         if (function(kk) {
-             if (ze) return ze.test(kk);
-             for (let ek = 0; ek < kk.length; ek++) {
-               let ik = kk[ek];
-               if (/\w/.test(ik) || ik > "\x80" && (ik.toUpperCase() != ik.toLowerCase() || Ie.test(ik))) return !0
+     function qz(CC, zC) {
+       return oz(CC, (ZC => CC.moveByChar(ZC, zC)))
+     }
+     const Fz = CC => qz(CC, !yC(CC)),
+       Wz = CC => qz(CC, yC(CC));
+ 
+     function Nz(CC, zC) {
+       return oz(CC, (ZC => CC.moveByGroup(ZC, zC)))
+     }
+ 
+     function Mz(CC, zC) {
+       return oz(CC, (ZC => CC.moveVertically(ZC, zC)))
+     }
+     const gz = CC => Mz(CC, !1),
+       Sz = CC => Mz(CC, !0);
+ 
+ ... (56 more added lines; see GitHub link above)
```

#### 170. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1453-L1457` → after: `L15961-L15963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15961-L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15961-L15963) · [Before (L1453-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1453-L1457)

```diff
-             return !1
-           }(ek)) return qe.Word;
-         for (let ik = 0; ik < kk.length; ik++)
-           if (ek.indexOf(kk[ik]) > -1) return qe.Word;
-         return qe.Other
+             if (bC.head == ZC.head) break;
+             ZC = bC
+           }
```

#### 171. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1460-L1480` → after: `L15967-L15977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15967-L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15967-L15977) · [Before (L1460-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1460-L1480)

```diff
-     class ve {
-       constructor(kk, ek, ik, Dk, fk, Sk) {
-         this.config = kk, this.doc = ek, this.selection = ik, this.values = Dk, this.status = kk.statusTemplate.slice(), this.computeSlot = fk, Sk && (Sk._state = this);
-         for (let bk = 0; bk < this.config.dynamicSlots.length; bk++) Me(this, bk << 1);
-         this.computeSlot = null
-       }
-       field(kk) {
-         let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           ik = this.config.address[kk.id];
-         if (null != ik) return Me(this, ik), Ke(this, ik);
-         if (ek) throw new RangeError("Field is not present in this state")
-       }
-       update() {
-         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-         return Ve(this, ek, !0)
-       }
- ... (5 more removed lines; see GitHub link above)
+ 
+     function iz(CC, zC) {
+       if (CC.state.readOnly) return !1;
+       let ZC = "delete.selection",
+         {
+           state: QC
+         } = CC,
+         wC = QC.changeByRange((QC => {
+           let {
+             from: wC,
+             to: bC
```

#### 172. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1482-L1544` → after: `L15979-L15990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R15979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L15979-L15990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L15979-L15990) · [Before (L1482-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1482-L1544)

```diff
-         for (let bk of kk.effects) bk.is(re.reconfigure) ? (ik && (fk = new Map, ik.compartments.forEach(((kk, ek) => fk.set(ek, kk))), ik = null), fk.set(bk.value.compartment, bk.value.extension)) : bk.is(Ce.reconfigure) ? (ik = null, Dk = bk.value) : bk.is(Ce.appendConfig) && ( … [truncated]
-         if (ik) ek = kk.startState.values.slice();
-         else {
-           ik = me.resolve(Dk, fk, this), ek = new ve(ik, this.doc, this.selection, ik.dynamicSlots.map((() => null)), ((kk, ek) => ek.reconfigure(kk, this)), null).values
-         }
-         let Sk = kk.startState.facet(ne) ? kk.newSelection : kk.newSelection.asSingle();
-         new ve(ik, kk.newDoc, Sk, ek, ((ek, ik) => ik.update(ek, kk)), kk)
-       }
-       replaceSelection(kk) {
-         return "string" == typeof kk && (kk = this.toText(kk)), this.changeByRange((ek => ({
-           changes: {
-             from: ek.from,
-             to: ek.to,
-             insert: kk
-           },
-           range: Xk.cursor(ek.from + kk.length)
- ... (47 more removed lines; see GitHub link above)
+           if (wC == bC) {
+             let nC = zC(QC);
+             nC < wC ? (ZC = "delete.backward", nC = vz(CC, nC, !1)) : nC > wC && (ZC = "delete.forward", nC = vz(CC, nC, !0)), wC = Math.min(wC, nC), bC = Math.max(bC, nC)
+           } else wC = vz(CC, wC, !1), bC = vz(CC, bC, !0);
+           return wC == bC ? {
+             range: QC
+           } : {
+             changes: {
+               from: wC,
+               to: bC
+             },
+             range: nC.i.cursor(wC, wC < QC.head ? -1 : 1)
```

#### 173. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1547-L1585` → after: `L16020-L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16020-L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16020-L16032) · [Before (L1547-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1547-L1585)

```diff
-       }
-       static fromJSON(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-           ik = arguments.length > 2 ? arguments[2] : void 0;
-         if (!kk || "string" != typeof kk.doc) throw new RangeError("Invalid JSON representation for EditorState");
-         let Dk = [];
-         if (ik)
-           for (let fk in ik)
-             if (Object.prototype.hasOwnProperty.call(kk, fk)) {
-               let ek = ik[fk],
-                 Sk = kk[fk];
-               Dk.push(ek.init((kk => ek.spec.fromJSON(Sk, kk))))
-             } return ve.create({
-           doc: kk.doc,
-           selection: Xk.fromJSON(kk.selection),
-           extensions: ek.extensions ? Dk.concat([ek.extensions]) : Dk
- ... (23 more removed lines; see GitHub link above)
+       })),
+       hz = CC => ez(CC, !1, !0),
+       Kz = CC => ez(CC, !0, !1),
+       Yz = (CC, zC) => iz(CC, (ZC => {
+         let QC = ZC.head,
+           {
+             state: wC
+           } = CC,
+           bC = wC.doc.lineAt(QC),
+           fC = wC.charCategorizer(QC);
+         for (let CC = null;;) {
+           if (QC == (zC ? bC.to : bC.from)) {
+             QC == ZC.head && bC.number != (zC ? wC.doc.lines : 1) && (QC += zC ? 1 : -1);
```

#### 174. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1587-L1618` → after: `L16034-L16039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16034-L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16034-L16039) · [Before (L1587-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1587-L1618)

```diff
-           } return ik.length && (kk = kk.replace(/\$(\$|\d*)/g, ((kk, ek) => {
-           if ("$" == ek) return "$";
-           let Dk = +(ek || 1);
-           return !Dk || Dk > ik.length ? kk : ik[Dk - 1]
-         }))), kk
-       }
-       languageDataAt(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           Dk = [];
-         for (let fk of this.facet(xe))
-           for (let Sk of fk(this, ek, ik)) Object.prototype.hasOwnProperty.call(Sk, kk) && Dk.push(Sk[kk]);
-         return Dk
-       }
-       charCategorizer(kk) {
-         let ek = this.languageDataAt("wordChars", kk);
-         return Qe(ek.length ? ek[0] : "")
- ... (16 more removed lines; see GitHub link above)
+           }
+           let oC = (0, nC.V)(bC.text, QC - bC.from, zC) + bC.from,
+             qC = bC.text.slice(Math.min(QC, oC) - bC.from, Math.max(QC, oC) - bC.from),
+             FC = fC(qC);
+           if (null != CC && FC != CC) break;
+           " " == qC && QC == ZC.head || (CC = FC), QC = oC
```

#### 175. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1620` → after: `L16041-L16059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16041-L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16041-L16059) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1620)

```diff
-         return Sk == bk ? null : Xk.range(Sk + ik, bk + ik)
+         return QC
+       })),
+       dz = CC => Yz(CC, !1);
+ 
+     function mz(CC) {
+       let zC = [],
+         ZC = -1;
+       for (let QC of CC.selection.np) {
+         let wC = CC.doc.lineAt(QC.from),
+           bC = CC.doc.lineAt(QC.to);
+         if (QC.empty || QC.to != bC.from || (bC = CC.doc.lineAt(QC.to - 1)), ZC >= wC.number) {
+           let CC = zC[zC.length - 1];
+           CC.to = bC.to, CC.np.push(QC)
+         } else zC.push({
+           from: wC.from,
+           to: bC.to,
+ ... (3 more added lines; see GitHub link above)
```

#### 176. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1624-L1636` → after: `L16064-L16089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16064-L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16064-L16089) · [Before (L1624-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1624-L1636)

```diff
-     function Ee(kk, ek) {
-       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
-         Dk = {};
-       for (let fk of kk)
-         for (let kk of Object.keys(fk)) {
-           let ek = fk[kk],
-             Sk = Dk[kk];
-           if (void 0 === Sk) Dk[kk] = ek;
-           else if (Sk === ek || void 0 === ek);
-           else {
-             if (!Object.hasOwnProperty.call(ik, kk)) throw new Error("Config merge conflict for field " + kk);
-             Dk[kk] = ik[kk](Sk, ek)
-           }
+     function Hz(CC, zC, ZC) {
+       if (CC.readOnly) return !1;
+       let QC = [],
+         wC = [];
+       for (let bC of mz(CC)) {
+         if (ZC ? bC.to == CC.doc.length : 0 == bC.from) continue;
+         let zC = CC.doc.lineAt(ZC ? bC.to + 1 : bC.from - 1),
+           fC = zC.length + 1;
+         if (ZC) {
+           QC.push({
+             from: bC.to,
+             to: zC.to
+           }, {
+             from: bC.from,
+             insert: zC.text + CC.lineBreak
+           });
+ ... (10 more added lines; see GitHub link above)
```

#### 177. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1660-L1669` → after: `L16100-L16168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16100-L16168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16100-L16168) · [Before (L1660-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1660-L1669)

```diff
-     function ae(kk, ek) {
-       return kk == ek || kk.constructor == ek.constructor && kk.eq(ek)
-     }
-     he.prototype.startSide = he.prototype.endSide = 0, he.prototype.point = !1, he.prototype.mapMode = qk.TrackDel;
-     class We {
-       constructor(kk, ek, ik) {
-         this.from = kk, this.to = ek, this.value = ik
-       }
-       static create(kk, ek, ik) {
-         return new We(kk, ek, ik)
+     function Ez(CC, zC, ZC) {
+       if (CC.readOnly) return !1;
+       let QC = [];
+       for (let bC of mz(CC)) ZC ? QC.push({
+         from: bC.from,
+         insert: CC.doc.slice(bC.from, bC.to) + CC.lineBreak
+       }) : QC.push({
+         from: bC.to,
+         insert: CC.lineBreak + CC.doc.slice(bC.from, bC.to)
+       });
+       let wC = CC.changes(QC);
+       return zC(CC.update({
+         changes: wC,
+         selection: CC.selection.map(wC, ZC ? 1 : -1),
+         scrollIntoView: !0,
+         userEvent: "input.copyline"
+ ... (53 more added lines; see GitHub link above)
```

#### 178. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1674-L1713` → after: `L16173-L16178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16173-L16178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16173-L16178) · [Before (L1674-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1674-L1713)

```diff
-       return kk.from - ek.from || kk.value.startSide - ek.value.startSide
-     }
-     class Xe {
-       constructor(kk, ek, ik, Dk) {
-         this.from = kk, this.to = ek, this.value = ik, this.Rik = Dk
-       }
-       get length() {
-         return this.to[this.to.length - 1]
-       }
-       findIndex(kk, ek, ik) {
-         let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           fk = ik ? this.to : this.from;
-         for (let Sk = Dk, bk = fk.length;;) {
-           if (Sk == bk) return Sk;
-           let Dk = Sk + bk >> 1,
-             rk = fk[Dk] - kk || (ik ? this.value[Dk].endSide : this.value[Dk].startSide) - ek;
- ... (24 more removed lines; see GitHub link above)
+       let ZC = -1;
+       return CC.changeByRange((QC => {
+         let wC = [];
+         for (let nC = QC.from; nC <= QC.to;) {
+           let bC = CC.doc.lineAt(nC);
+           bC.number > ZC && (QC.empty || QC.to > bC.from) && (zC(bC, wC, QC), ZC = bC.number), nC = bC.to + 1
```

#### 179. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1716-L1717` → after: `L16182-L16183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16182-L16183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16182-L16183) · [Before (L1716-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1716-L1717)

```diff
-           mapped: ik.length ? new Xe(Dk, fk, ik, bk) : null,
-           pos: Sk
+           changes: wC,
+           range: nC.i.range(bC.mapPos(QC.anchor, 1), bC.mapPos(QC.head, 1))
```

#### 180. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1719` → after: `L16185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16185) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1719)

```diff
-       }
+       }))
```

#### 181. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1721-L1741` → after: `L16187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16187) · [Before (L1721-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1721-L1741)

```diff
-     class Be {
-       constructor(kk, ek, ik, Dk) {
-         this.chunkPos = kk, this.chunk = ek, this.nextLayer = ik, this.Rik = Dk
-       }
-       static create(kk, ek, ik, Dk) {
-         return new Be(kk, ek, ik, Dk)
-       }
-       get length() {
-         let kk = this.chunk.length - 1;
-         return kk < 0 ? 0 : Math.max(this.chunkEnd(kk), this.nextLayer.length)
-       }
-       get size() {
-         if (this.uU) return 0;
-         let kk = this.nextLayer.size;
-         for (let ek of this.chunk) kk += ek.value.length;
-         return kk
- ... (5 more removed lines; see GitHub link above)
+     const uz = CC => {
```

#### 182. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1743-L1776` → after: `L16189-L16293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16189-L16293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16189-L16293) · [Before (L1743-L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1743-L1776)

```diff
-           add: ek = [],
-           sort: ik = !1,
-           filterFrom: Dk = 0,
-           filterTo: fk = this.length
-         } = kk, Sk = kk.filter;
-         if (0 == ek.length && !Sk) return this;
-         if (ik && (ek = ek.slice().sort(te)), this.uU) return ek.length ? Be.of(ek) : this;
-         let bk = new oe(this, null, -1).goto(0),
-           rk = 0,
-           Pk = [],
-           mk = new ce;
-         for (; bk.value || rk < ek.length;)
-           if (rk < ek.length && (bk.from - ek[rk].from || bk.startSide - ek[rk].value.startSide) >= 0) {
-             let kk = ek[rk++];
-             mk.addInner(kk.from, kk.to, kk.value) || Pk.push(kk)
-           } else 1 == bk.rangeIndex && bk.chunkIndex < this.chunk.length && (rk == ek.length || this.chunkEnd(bk.chunkIndex) < ek[rk].from) && (!Sk || Dk > this.chunkEnd(bk.chunkIndex) || fk < this.chunkPos[bk.chunkIndex]) && mk.addChunk(this.chunkPos[bk.chunkIndex], this.chunk[b … [truncated]
- ... (18 more removed lines; see GitHub link above)
+           state: zC,
+           dispatch: ZC
+         } = CC;
+         return !zC.readOnly && (ZC(zC.update(cz(zC, ((CC, ZC) => {
+           ZC.push({
+             from: CC.from,
+             insert: zC.facet(oC.U)
+           })
+         })), {
+           userEvent: "input.indent"
+         })), !0)
+       },
+       rz = CC => {
+         let {
+           state: zC,
+           dispatch: ZC
+ ... (89 more added lines; see GitHub link above)
```

#### 183. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1778-L1782` → after: `L16295-L16303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16295-L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16295-L16303) · [Before (L1778-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1778-L1782)

```diff
-               mapped: Sk,
-               pos: rk
-             } = bk.map(fk, kk);
-             Sk && (Dk = Math.max(Dk, Sk.Rik), ek.push(Sk), ik.push(rk))
-           }
+               from: ZC,
+               to: QC
+             } = CC;
+             return nC.i.range(ZC, Math.min(QC + 1, zC.doc.length))
+           }));
+           return ZC(zC.update({
+             selection: nC.i.create(QC),
+             userEvent: "select"
+           })), !0
```

#### 184. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1784-L1792` → after: `L16305-L16768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16305-L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16305-L16768) · [Before (L1784-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1784-L1792)

```diff
-         let fk = this.nextLayer.map(kk);
-         return 0 == ek.length ? fk : new Be(ik, ek, fk || Be.empty, Dk)
-       }
-       between(kk, ek, ik) {
-         if (!this.uU) {
-           for (let Dk = 0; Dk < this.chunk.length; Dk++) {
-             let fk = this.chunkPos[Dk],
-               Sk = this.chunk[Dk];
-             if (ek >= fk && kk <= fk + Sk.length && !1 === Sk.between(fk, kk - fk, ek - fk, ik)) return
+       }, {
+         key: "Mod-i",
+         run: CC => {
+           let {
+             state: zC,
+             dispatch: ZC
+           } = CC, QC = TC(zC.selection, (CC => {
+             let ZC = (0, oC.gb)(zC),
+               QC = ZC.resolveStack(CC.from, 1);
+             if (CC.empty) {
+               let zC = ZC.resolveStack(CC.from, -1);
+               zC.node.from >= QC.node.from && zC.node.to <= QC.node.to && (QC = zC)
+             }
+             for (let zC = QC; zC; zC = zC.next) {
+               let {
+                 node: ZC
+ ... (448 more added lines; see GitHub link above)
```

#### 185. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1797-L1802` → after: `L16830-L16835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16830-L16835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16830-L16835) · [Before (L1797-L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1797-L1802)

```diff
-       iter() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return Ze.from([this]).goto(kk)
-       }
-       get uU() {
-         return this.nextLayer == this
+     }, {
+       dark: !1
+     });
+     class gZ {
+       constructor(CC, zC) {
+         this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = zC, this.timeoutMS = zC, this.callbacks.push(CC)
```

#### 186. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1804-L1831` → after: `L16837-L16847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16837-L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16837-L16847) · [Before (L1804-L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1804-L1831)

```diff
-       static iter(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return Ze.from(kk).goto(ek)
-       }
-       static compare(kk, ek, ik, Dk) {
-         let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
-           Sk = kk.filter((kk => kk.Rik > 0 || !kk.uU && kk.Rik >= fk)),
-           bk = ek.filter((kk => kk.Rik > 0 || !kk.uU && kk.Rik >= fk)),
-           rk = Te(Sk, bk, ik),
-           Pk = new ge(Sk, rk, fk),
-           mk = new ge(bk, rk, fk);
-         ik.iterGaps(((kk, ek, ik) => Ge(Pk, kk, mk, ek, ik, Dk))), ik.empty && 0 == ik.length && Ge(Pk, 0, mk, 0, 0, Dk)
-       }
-       static eq(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           Dk = arguments.length > 3 ? arguments[3] : void 0;
- ... (12 more removed lines; see GitHub link above)
+       ZN() {
+         if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
+           this.isTimeExhausted = !0;
+           var CC = this.callbacks.slice();
+           this.callbacks.length = 0, CC.forEach((CC => {
+             try {
+               CC()
+             } catch (zC) {
+               console.error("TimeoutLatch callback error:", zC)
+             }
+           }))
```

#### 187. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1834-L1847` → after: `L16850-L16851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16850-L16851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16850-L16851) · [Before (L1834-L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1834-L1847)

```diff
-       static spans(kk, ek, ik, Dk) {
-         let fk = new ge(kk, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(ek),
-           Sk = ek,
-           bk = fk.openStart;
-         for (;;) {
-           let kk = Math.min(fk.to, ik);
-           if (fk.point) {
-             let ik = fk.activeForPoint(fk.to),
-               rk = fk.pointFrom < ek ? ik.length + 1 : fk.point.startSide < 0 ? ik.length : Math.min(ik.length, bk);
-             Dk.point(Sk, kk, fk.point, ik, rk, fk.pointRank), bk = Math.min(fk.openEnd(kk), ik.length)
-           } else kk > Sk && (Dk.span(Sk, kk, fk.active, bk), bk = fk.openEnd(kk));
-           if (fk.to > ik) return bk + (fk.point && fk.to > ik ? 1 : 0);
-           Sk = fk.to, fk.next()
-         }
+       cancel() {
+         this.isCancelled = !0, this.callbacks.length = 0
```

#### 188. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1849-L1861` → after: `L16853-L16854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16853-L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16853-L16854) · [Before (L1849-L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1849-L1861)

```diff
-       static of (kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ik = new ce;
-         for (let Dk of kk instanceof We ? [kk] : ek ? function(kk) {
-             if (kk.length > 1)
-               for (let ek = kk[0], ik = 1; ik < kk.length; ik++) {
-                 let Dk = kk[ik];
-                 if (te(ek, Dk) > 0) return kk.slice().sort(te);
-                 ek = Dk
-               }
-             return kk
-           }(kk) : kk) ik.add(Dk.from, Dk.to, Dk.value);
-         return ik.finish()
+       reset() {
+         this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
```

#### 189. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1863-L1868` → after: `L16856-L16857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16856-L16857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16856-L16857) · [Before (L1863-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1863-L1868)

```diff
-       static join(kk) {
-         if (!kk.length) return Be.empty;
-         let ek = kk[kk.length - 1];
-         for (let ik = kk.length - 2; ik >= 0; ik--)
-           for (let Dk = kk[ik]; Dk != Be.empty; Dk = Dk.nextLayer) ek = new Be(Dk.chunkPos, Dk.chunk, ek, Math.max(Dk.Rik, ek.Rik));
-         return ek
+       get isDone() {
+         return this.isCancelled || this.isTimeExhausted
```

#### 190. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1877` → after: `L16862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16862) · [Before (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1877)

```diff
-         this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.Rik = -1, this.setMaxPoint = -1, this.nextLayer = null
+         this.interval = null, this.latches = new Set
```

#### 191. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1879-L1880` → after: `L16864-L16865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16864-L16865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16864-L16865) · [Before (L1879-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1879-L1880)

```diff
-       add(kk, ek, ik) {
-         this.addInner(kk, ek, ik) || (this.nextLayer || (this.nextLayer = new ce)).add(kk, ek, ik)
+       add(CC) {
+         this.latches.add(CC), this.start()
```

#### 192. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1882-L1885` → after: `L16867-L16868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16867-L16868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16867-L16868) · [Before (L1882-L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1882-L1885)

```diff
-       addInner(kk, ek, ik) {
-         let Dk = kk - this.lastTo || ik.startSide - this.last.endSide;
-         if (Dk <= 0 && (kk - this.lastFrom || ik.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
-         return !(Dk < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = kk), this.from.push(kk - this.chunkStart), this.to.push(ek - this.chunkStart), this.last = ik, this.lastFrom = kk, this.lastTo = ek, this.value.push(ik), ik.poi … [truncated]
+       remove(CC) {
+         this.latches.delete(CC), 0 === this.latches.size && this.stop()
```

#### 193. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1887-L1894` → after: `L16870-L16875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16870-L16875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16870-L16875) · [Before (L1887-L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1887-L1894)

```diff
-       addChunk(kk, ek) {
-         if ((kk - this.lastTo || ek.value[0].startSide - this.last.endSide) < 0) return !1;
-         this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, ek.Rik), this.chunks.push(ek), this.chunkPos.push(kk);
-         let ik = ek.value.length - 1;
-         return this.last = ek.value[ik], this.lastFrom = ek.from[ik] + kk, this.lastTo = ek.to[ik] + kk, !0
-       }
-       finish() {
-         return this.finishInner(Be.empty)
+       start() {
+         null === this.interval && (this.interval = setInterval((() => {
+           this.latches.forEach((CC => {
+             CC.ZN(), CC.isDone && this.remove(CC)
+           }))
+         }), 1))
```

#### 194. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1896-L1899` → after: `L16877-L16878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16877-L16878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16877-L16878) · [Before (L1896-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1896-L1899)

```diff
-       finishInner(kk) {
-         if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return kk;
-         let ek = Be.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(kk) : kk, this.setMaxPoint);
-         return this.from = null, ek
+       stop() {
+         null !== this.interval && (clearInterval(this.interval), this.interval = null)
```

#### 195. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1903-L1911` → after: `L16885-L16923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16885-L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16885-L16923) · [Before (L1903-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1903-L1911)

```diff
-     function Te(kk, ek, ik) {
-       let Dk = new Map;
-       for (let Sk of kk)
-         for (let kk = 0; kk < Sk.chunk.length; kk++) Sk.chunk[kk].Rik <= 0 && Dk.set(Sk.chunk[kk], Sk.chunkPos[kk]);
-       let fk = new Set;
-       for (let Sk of ek)
-         for (let kk = 0; kk < Sk.chunk.length; kk++) {
-           let ek = Dk.get(Sk.chunk[kk]);
-           null == ek || (ik ? ik.mapPos(ek) : ek) != Sk.chunkPos[kk] || (null === ik || void 0 === ik ? void 0 : ik.touchesRange(ek, ek + Sk.chunk[kk].length)) || fk.add(Sk.chunk[kk])
+     function RZ(CC) {
+       var {
+         value: zC,
+         selection: ZC,
+         onChange: QC,
+         onStatistics: wC,
+         onCreateEditor: oC,
+         onUpdate: qC,
+         extensions: FC = GZ,
+         autoFocus: WC,
+         theme: NC = "light",
+         height: MC = null,
+         minHeight: gC = null,
+         maxHeight: SC = null,
+         width: pC = null,
+         minWidth: PC = null,
+ ... (23 more added lines; see GitHub link above)
```

#### 196. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1913-L1934` → after: `L16925-L16935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16925-L16935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16925-L16935) · [Before (L1913-L1934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1913-L1934)

```diff
-       return fk
-     }
-     class oe {
-       constructor(kk, ek, ik) {
-         let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.layer = kk, this.skip = ek, this.Jik = ik, this.rank = Dk
-       }
-       get startSide() {
-         return this.value ? this.value.startSide : 0
-       }
-       get endSide() {
-         return this.value ? this.value.endSide : 0
-       }
-       goto(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
-         return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(kk, ek, !1), this
- ... (6 more removed lines; see GitHub link above)
+       }), XC = fC.j.updateListener.of((CC => {
+         if (CC.docChanged && "function" === typeof QC && !CC.transactions.some((CC => CC.annotation(PZ)))) {
+           HC.current ? HC.current.reset() : (HC.current = new gZ((() => {
+             if (EC.current) {
+               var CC = EC.current;
+               EC.current = null, CC()
+             }
+             HC.current = null
+           }), 200), ("undefined" === typeof window ? new SZ : (pZ || (pZ = new SZ), pZ)).add(HC.current));
+           var zC = CC.state.doc.toString();
+           QC(zC, CC)
```

#### 197. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1936-L1938` → after: `L16937-L16971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16937-L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16937-L16971) · [Before (L1936-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1936-L1938)

```diff
-         if (this.chunkIndex < this.layer.chunk.length) {
-           let Dk = this.layer.chunk[this.chunkIndex].findIndex(kk - this.layer.chunkPos[this.chunkIndex], ek, !0);
-           (!ik || this.rangeIndex < Dk) && this.setRangeIndex(Dk)
+         wC && wC((CC => ({
+           line: CC.state.doc.lineAt(CC.state.selection.main.from),
+           lineCount: CC.state.doc.lines,
+           lineBreak: CC.state.lineBreak,
+           length: CC.state.doc.length,
+           readOnly: CC.state.readOnly,
+           tabSize: CC.state.tabSize,
+           selection: CC.state.selection,
+           selectionAsSingle: CC.state.selection.asSingle().main,
+           np: CC.state.selection.np,
+           selectionCode: CC.state.sliceDoc(CC.state.selection.main.from, CC.state.selection.main.to),
+           selections: CC.state.selection.np.map((zC => CC.state.sliceDoc(zC.from, zC.to))),
+           selectedText: CC.state.selection.np.some((CC => !CC.empty))
+         }))(CC))
+       })), cC = function(CC) {
+         void 0 === CC && (CC = {});
+ ... (19 more added lines; see GitHub link above)
```

#### 198. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1940-L1954` → after: `L16973-L16996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16973-L16996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16973-L16996) · [Before (L1940-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1940-L1954)

```diff
-         this.next()
-       }
-       forward(kk, ek) {
-         (this.to - kk || this.endSide - ek) < 0 && this.gotoInner(kk, ek, !0)
-       }
-       next() {
-         for (;;) {
-           if (this.chunkIndex == this.layer.chunk.length) {
-             this.from = this.to = 1e9, this.value = null;
-             break
-           } {
-             let kk = this.layer.chunkPos[this.chunkIndex],
-               ek = this.layer.chunk[this.chunkIndex],
-               ik = kk + ek.from[this.rangeIndex];
-             if (this.from = ik, this.to = kk + ek.to[this.rangeIndex], this.value = ek.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.Jik < 0 || this.value.point && this.to - this.from >= this.Jik) break
+         return !1 === ZC && qC.push(fC.j.editable.of(!1)), QC && qC.push(nC.l.readOnly.of(!0)), [...qC]
+       }({
+         theme: NC,
+         editable: AC,
+         readOnly: xC,
+         placeholder: RC,
+         indentWithTab: JC,
+         basicSetup: IC
+       }), uC = [XC, lC, ...cC];
+       return qC && "function" === typeof qC && uC.push(fC.j.updateListener.of(qC)), uC = uC.concat(FC), (0, bC.useLayoutEffect)((() => {
+         if (eC && !dC) {
+           var CC = {
+               doc: zC,
+               selection: ZC,
+               extensions: uC
+             },
+ ... (8 more added lines; see GitHub link above)
```

#### 199. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1957-L1969` → after: `L16999-L17035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R16999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L16999-L17035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L16999-L17035) · [Before (L1957-L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1957-L1969)

```diff
-       }
-       setRangeIndex(kk) {
-         if (kk == this.layer.chunk[this.chunkIndex].value.length) {
-           if (this.chunkIndex++, this.skip)
-             for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
-           this.rangeIndex = 0
-         } else this.rangeIndex = kk
-       }
-       nextChunk() {
-         this.chunkIndex++, this.rangeIndex = 0, this.next()
-       }
-       compare(kk) {
-         return this.from - kk.from || this.startSide - kk.startSide || this.rank - kk.rank || this.to - kk.to || this.endSide - kk.endSide
+         return () => {
+           KC && (mC(void 0), YC(void 0))
+         }
+       }), [eC, dC]), (0, bC.useEffect)((() => {
+         CC.container && hC(CC.container)
+       }), [CC.container]), (0, bC.useEffect)((() => () => {
+         KC && (KC.destroy(), YC(void 0)), HC.current && (HC.current.cancel(), HC.current = null)
+       }), [KC]), (0, bC.useEffect)((() => {
+         WC && KC && KC.focus()
+       }), [WC, KC]), (0, bC.useEffect)((() => {
+         KC && KC.dispatch({
+           effects: nC.w.reconfigure.of(uC)
+         })
+       }), [NC, FC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, QC, qC]), (0, bC.useEffect)((() => {
+         if (void 0 !== zC) {
+           var CC = KC ? KC.state.doc.toString() : "";
+ ... (21 more added lines; see GitHub link above)
```

#### 200. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L1972-L2003` → after: `L17038-L17123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17038-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17038-L17123) · [Before (L1972-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L1972-L2003)

```diff
-     class Ze {
-       constructor(kk) {
-         this.heap = kk
-       }
-       static from(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           Dk = [];
-         for (let fk = 0; fk < kk.length; fk++)
-           for (let Sk = kk[fk]; !Sk.uU; Sk = Sk.nextLayer) Sk.Rik >= ik && Dk.push(new oe(Sk, ek, ik, fk));
-         return 1 == Dk.length ? Dk[0] : new Ze(Dk)
-       }
-       get startSide() {
-         return this.value ? this.value.startSide : 0
-       }
-       goto(kk) {
- ... (16 more removed lines; see GitHub link above)
+     var AZ = ZC(1056),
+       xZ = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly",  … [truncated]
+       JZ = (0, bC.forwardRef)(((CC, zC) => {
+         var {
+           className: ZC,
+           value: nC = "",
+           selection: fC,
+           extensions: oC = [],
+           onChange: qC,
+           onStatistics: FC,
+           onCreateEditor: WC,
+           onUpdate: NC,
+           autoFocus: MC,
+           theme: gC = "light",
+           height: SC,
+           minHeight: pC,
+ ... (70 more added lines; see GitHub link above)
```

#### 201. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L2008-L2013` → after: `L17130-L17135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17130-L17135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17130-L17135) · [Before (L2008-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L2008-L2013)

```diff
-       for (let ik = kk[ek];;) {
-         let Dk = 1 + (ek << 1);
-         if (Dk >= kk.length) break;
-         let fk = kk[Dk];
-         if (Dk + 1 < kk.length && fk.compare(kk[Dk + 1]) >= 0 && (fk = kk[Dk + 1], Dk++), ik.compare(fk) < 0) break;
-         kk[Dk] = ik, kk[ek] = fk, ek = Dk
+       if ("string" == typeof zC) CC.appendChild(document.createTextNode(zC));
+       else if (null == zC);
+       else if (null != zC.nodeType) CC.appendChild(zC);
+       else {
+         if (!Array.isArray(zC)) throw new RangeError("Unsupported child node: " + zC);
+         for (var ZC = 0; ZC < zC.length; ZC++) wC(CC, zC[ZC])
```

#### 202. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L2017-L2018` → after: `L17150-L17174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17150-L17174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17150-L17174) · [Before (L2017-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L2017-L2018)

```diff
-       constructor(kk, ek, ik) {
-         this.Jik = ik, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ze.from(kk, ek, ik)
+       constructor(CC, zC) {
+         this.rules = [];
+         let {
+           finish: ZC
+         } = zC || {};
+ 
+         function QC(CC) {
+           return /^@/.test(CC) ? [CC] : CC.split(/,\s*/)
+         }
+ 
+         function wC(CC, zC, bC, nC) {
+           let fC = [],
+             oC = /^@(\w+)\b/.exec(CC[0]),
+             qC = oC && "keyframes" == oC[1];
+           if (oC && null == zC) return bC.push(CC[0] + ";");
+           for (let ZC in zC) {
+ ... (9 more added lines; see GitHub link above)
```

#### 203. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L2020-L2022` → after: `L17176-L17177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17176-L17177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17176-L17177) · [Before (L2020-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L2020-L2022)

```diff
-       goto(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
-         return this.cursor.goto(kk, ek), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = kk, this.endSide = ek, this.openStart = -1, this.next(), this
+       getRules() {
+         return this.rules.join("\n")
```

#### 204. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L2024-L2026` → after: `L17179-L17181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17179-L17181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17179-L17181) · [Before (L2024-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L2024-L2026)

```diff
-       forward(kk, ek) {
-         for (; this.minActive > -1 && (this.activeTo[this.minActive] - kk || this.active[this.minActive].endSide - ek) < 0;) this.removeActive(this.minActive);
-         this.cursor.forward(kk, ek)
+       static newName() {
+         let CC = bC[QC] || 1;
+         return bC[QC] = CC + 1, "\u037c" + CC.toString(36)
```

#### 205. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L2028-L2029` → after: `L17183-L17186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17183-L17186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17183-L17186) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L2028-L2029)

```diff
-       removeActive(kk) {
-         Re(this.active, kk), Re(this.activeTo, kk), Re(this.activeRank, kk), this.minActive = ki(this.active, this.activeTo)
+       static mount(CC, zC, ZC) {
+         let QC = CC[wC],
+           bC = ZC && ZC.nonce;
+         QC ? bC && QC.setNonce(bC) : QC = new oC(CC, bC), QC.mount(Array.isArray(zC) ? zC : [zC], CC)
```

#### 206. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L2031-L2039` → after: `L17188-L17199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17188-L17199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17188-L17199) · [Before (L2031-L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L2031-L2039)

```diff
-       addActive(kk) {
-         let ek = 0,
-           {
-             value: ik,
-             to: Dk,
-             rank: fk
-           } = this.cursor;
-         for (; ek < this.activeRank.length && (fk - this.activeRank[ek] || Dk - this.activeTo[ek]) > 0;) ek++;
-         Je(this.active, ek, ik), Je(this.activeTo, ek, Dk), Je(this.activeRank, ek, fk), kk && Je(kk, ek, this.cursor.from), this.minActive = ki(this.active, this.activeTo)
+     }
+     let fC = new Map;
+     class oC {
+       constructor(CC, zC) {
+         let ZC = CC.ownerDocument || CC,
+           QC = ZC.defaultView;
+         if (!CC.head && CC.adoptedStyleSheets && QC.CSSStyleSheet) {
+           let zC = fC.get(ZC);
+           if (zC) return CC[wC] = zC;
+           this.sheet = new QC.CSSStyleSheet, fC.set(ZC, this)
+         } else this.styleTag = ZC.createElement("style"), zC && this.styleTag.setAttribute("nonce", zC);
+         this.modules = [], CC[wC] = this
```

#### 207. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L2041-L2053` → after: `L17201-L17210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17201-L17210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17201-L17210) · [Before (L2041-L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L2041-L2053)

```diff
-       next() {
-         let kk = this.to,
-           ek = this.point;
-         this.point = null;
-         let ik = this.openStart < 0 ? [] : null;
-         for (;;) {
-           let Dk = this.minActive;
-           if (Dk > -1 && (this.activeTo[Dk] - this.cursor.from || this.active[Dk].endSide - this.cursor.startSide) < 0) {
-             if (this.activeTo[Dk] > kk) {
-               this.to = this.activeTo[Dk], this.endSide = this.active[Dk].endSide;
-               break
-             }
-             this.removeActive(Dk), ik && Re(ik, Dk)
+       mount(CC, zC) {
+         let ZC = this.sheet,
+           QC = 0,
+           wC = 0;
+         for (let bC = 0; bC < CC.length; bC++) {
+           let zC = CC[bC],
+             nC = this.modules.indexOf(zC);
+           if (nC < wC && nC > -1 && (this.modules.splice(nC, 1), wC--, nC = -1), -1 == nC) {
+             if (this.modules.splice(wC++, 0, zC), ZC)
+               for (let CC = 0; CC < zC.rules.length; CC++) ZC.insertRule(zC.rules[CC], QC++)
```

#### 208. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L2055-L2071` → after: `L17212-L17213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17212-L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17212-L17213) · [Before (L2055-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L2055-L2071)

```diff
-             if (!this.cursor.value) {
-               this.to = this.endSide = 1e9;
-               break
-             }
-             if (this.cursor.from > kk) {
-               this.to = this.cursor.from, this.endSide = this.cursor.startSide;
-               break
-             } {
-               let kk = this.cursor.value;
-               if (kk.point) {
-                 if (!(ek && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
-                   this.point = kk, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = kk.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
-                   break
-                 }
-                 this.cursor.next()
-               } else this.addActive(ik), this.cursor.next()
- ... (1 more removed lines; see GitHub link above)
+             for (; wC < nC;) QC += this.modules[wC++].rules.length;
+             QC += zC.rules.length, wC++
```

#### 209. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L2074-L2076` → after: `L17216-L17222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17216-L17222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17216-L17222) · [Before (L2074-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L2074-L2076)

```diff
-         if (ik) {
-           this.openStart = 0;
-           for (let ek = ik.length - 1; ek >= 0 && ik[ek] < kk; ek--) this.openStart++
+         if (ZC) zC.adoptedStyleSheets.indexOf(this.sheet) < 0 && (zC.adoptedStyleSheets = [this.sheet, ...zC.adoptedStyleSheets]);
+         else {
+           let CC = "";
+           for (let zC = 0; zC < this.modules.length; zC++) CC += this.modules[zC].getRules() + "\n";
+           this.styleTag.textContent = CC;
+           let ZC = zC.head || zC;
+           this.styleTag.parentNode != ZC && ZC.insertBefore(this.styleTag, ZC.firstChild)
```

#### 210. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L2079-L2143` → after: `L17225-L17226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R17225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L17225-L17226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L17225-L17226) · [Before (L2079-L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L2079-L2143)

```diff
-       activeForPoint(kk) {
-         if (!this.active.length) return this.active;
-         let ek = [];
-         for (let ik = this.active.length - 1; ik >= 0 && !(this.activeRank[ik] < this.pointRank); ik--)(this.activeTo[ik] > kk || this.activeTo[ik] == kk && this.active[ik].endSide >= this.point.endSide) && ek.push(this.active[ik]);
-         return ek.reverse()
-       }
-       openEnd(kk) {
-         let ek = 0;
-         for (let ik = this.activeTo.length - 1; ik >= 0 && this.activeTo[ik] > kk; ik--) ek++;
-         return ek
-       }
-     }
- 
-     function Ge(kk, ek, ik, Dk, fk, Sk) {
-       kk.goto(ek), ik.goto(Dk);
-       let bk = Dk + fk,
- ... (49 more removed lines; see GitHub link above)
+       setNonce(CC) {
+         this.styleTag && this.styleTag.getAttribute("nonce") != CC && this.styleTag.setAttribute("nonce", CC)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/294.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/294.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b)

#### 1. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L11` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L4) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L4-L11)

```diff
-   40966: kk => {
-     function ek(kk) {
-       var ek = new Error("Cannot find module '" + kk + "'");
-       throw ek.code = "MODULE_NOT_FOUND", ek
-     }
-     ek.keys = () => [], ek.resolve = ek, ek.id = 40966, kk.exports = ek
-   },
-   41021: (kk, ek, ik) => {
+   41125: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L13-L14` → after: `L6-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L6-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L6-L28) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L13-L14)

```diff
-       c: () => Dk,
-       f: () => fk
+       d: () => Gz,
+       e: () => mC,
+       ChangeSet: () => HC,
+       h: () => Yz,
+       i: () => TC,
+       l: () => Ez,
+       n: () => DC,
+       o: () => dC,
+       r: () => wz,
+       u: () => Tz,
+       s: () => az,
+       v: () => Xz,
+       w: () => xz,
+       A: () => kC,
+       B: () => SC,
+       F: () => Jz,
+ ... (7 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L16-L19` → after: `L30-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L30-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L30-L42) · [Before (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L16-L19)

```diff
-     const Dk = "Sends one question to the AI",
-       fk = {
-         title: Dk,
-         "data-asks-ai": !0
+     let QC = [],
+       wC = [];
+ 
+     function bC(CC) {
+       if (CC < 768) return !1;
+       for (let zC = 0, ZC = QC.length;;) {
+         let bC = zC + ZC >> 1;
+         if (CC < QC[bC]) ZC = bC;
+         else {
+           if (!(CC >= wC[bC])) return !0;
+           zC = bC + 1
+         }
+         if (zC == ZC) return !1
```

#### 4. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L21-L24` → after: `L44-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L44-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L44-L430) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L21-L24)

```diff
-   },
-   40936: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Dk
+     }
+ 
+     function nC(CC) {
+       return CC >= 127462 && CC <= 127487
+     }(() => {
+       let CC = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7, … [truncated]
+       for (let zC = 0, ZC = 0; zC < CC.length; zC++)(zC % 2 ? wC : QC).push(ZC += CC[zC])
+     })();
+     const fC = 8205;
+ 
+     function oC(CC, zC) {
+       return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? qC : FC)(CC, zC, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+     }
+ 
+     function qC(CC, zC, ZC) {
+       if (zC == CC.length) return zC;
+ ... (371 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L26-L35` → after: `L432-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L432-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L432-L646) · [Before (L26-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L26-L35)

```diff
-     const Dk = String.raw`
- 	/** The ID of the player running the code.
- 	 *
- 	 * Lobby code usually has nobody running it, so this is null.
- 	 */
- 	declare const myId: string | null
- 	/** The position of the code block or press to code board */
- 	declare const thisPos: [number, number, number]
- 	/** The owner of the current custom lobby */
- 	declare const lobbyOwnerId: string | null
+     class IC {
+       constructor(CC, zC, ZC, QC) {
+         this.from = CC, this.to = zC, this.number = ZC, this.text = QC
+       }
+       get length() {
+         return this.to - this.from
+       }
+     }
+ 
+     function iC(CC, zC, ZC) {
+       return [zC = Math.max(0, Math.min(CC.length, zC)), Math.max(zC, Math.min(CC.length, ZC))]
+     }
+ 
+     function vC(CC, zC) {
+       return oC(CC, zC, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+     }
+ ... (199 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L37-L41` → after: `L648-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L648-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L648-L698) · [Before (L37-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L37-L41)

```diff
- 	interface Console {
- 		/** Log a message to chat. */
- 		log(message: any): void
- 	}
- 	declare const console: Console
+         function fC() {
+           if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !QC.length) return;
+           bC < zC && EC(QC, zC - bC, -1);
+           let CC = new HC(QC, wC);
+           nC = nC ? nC.compose(CC.map(nC)) : CC, QC = [], wC = [], bC = 0
+         }
+         return function CC(oC) {
+           if (Array.isArray(oC))
+             for (let zC of oC) CC(zC);
+           else if (oC instanceof HC) {
+             if (oC.length != zC) throw new RangeError(`Mismatched change set length (got ${oC.length}, expected ${zC})`);
+             fC(), nC = nC ? nC.compose(oC.map(nC)) : oC
+           } else {
+             let {
+               from: CC,
+               to: nC = CC,
+ ... (35 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L43-L1851` → after: `L700-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L700-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L700-L705) · [Before (L43-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L43-L1851)

```diff
- 	interface GameApi {
- 		/** The ID of the player running the code.
- 		 *
- 		 * Lobby code usually has nobody running it, so this is null.
- 		 */
- 		myId: string | null
- 		/** The position of the code block or press to code board */
- 		thisPos: [number, number, number]
- 		/** The owner of the current custom lobby */
- 		lobbyOwnerId: string | null
- 		/**
-  * Get position of a player / entity.
-  * @param entityId
-  */
- getPosition(entityId: EntityId): Pos
- /**
- ... (1793 more removed lines; see GitHub link above)
+     function EC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (0 == zC && ZC <= 0) return;
+       let wC = CC.length - 2;
+       wC >= 0 && ZC <= 0 && ZC == CC[wC + 1] ? CC[wC] += zC : wC >= 0 && 0 == zC && 0 == CC[wC] ? CC[wC + 1] += ZC : QC ? (CC[wC] += zC, CC[wC + 1] += ZC) : CC.push(zC, ZC)
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L1853-L2218` → after: `L707-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L707-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L707-L715) · [Before (L1853-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L1853-L2218)

```diff
- calcExplosionForce(eId: EntityId, explosionType: ExplosionType, knockbackFactor: number, explosionRadius: number, explosionPos: number[], ignoreProjectiles: boolean): { force: Pos; forceFrac: number; }
- /**
-  * Add a custom killfeed message to the killfeed
-  * @param killer - The entity ID or a custom name and colour for the killer
-  * @param victim - The entity ID or a custom name and colour for the victim
-  * @param withItem - The item used
-  */
- addCustomKillfeedMessage(killer: { eId: EntityId } | { name: string; colour: string }, victim: { eId: EntityId } | { name: string; colour: string }, withItem: string): void
- /**
-  * Get the position of a player's target block and the block adjacent to it (e.g. where a block would be placed)
-  *
-  *
-  * Note: This position is a tick ahead of the client's block target info (noa.targetedBlock),
-  * since the client updates the blocktarget before the entities tick (and since it uses the renderposition of the camera)
-  *
-  * This normally doesn't matter but if you are client predicting something based on noa.targetedBlock
- ... (350 more removed lines; see GitHub link above)
+     function lC(CC, zC, ZC) {
+       if (0 == ZC.length) return;
+       let QC = zC.length - 2 >> 1;
+       if (QC < CC.length) CC[CC.length - 1] = CC[CC.length - 1].append(ZC);
+       else {
+         for (; CC.length < QC;) CC.push(SC.empty);
+         CC.push(ZC)
+       }
+     }
```

#### 9. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2220-L2262` → after: `L717-L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L717-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L717-L731) · [Before (L2220-L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2220-L2262)

```diff
- 	}
- 	/** Game API */
- 	declare const api: GameApi;
- type EntityId = string
- type Pos = [number, number, number]
- type LifeformId = EntityId
- type PlayerId = LifeformId
- type PlayerDbId = string
- type LifeformBodyPart = (_TypeOf["lifeformBodyParts"])[number]
- interface PlayerAttemptDamageOtherPlayerOpts {
- 	eId: PlayerId
- 	hitEId: PlayerId
- 	attemptedDmgAmt: number
- 	withItem: string
- 	bodyPartHit?: LifeformBodyPart
- 	attackDir?: number[]
- ... (27 more removed lines; see GitHub link above)
+     function XC(CC, zC, ZC) {
+       let QC = CC.inserted;
+       for (let wC = 0, bC = 0, nC = 0; nC < CC.sections.length;) {
+         let fC = CC.sections[nC++],
+           oC = CC.sections[nC++];
+         if (oC < 0) wC += fC, bC += fC;
+         else {
+           let qC = wC,
+             FC = bC,
+             WC = SC.empty;
+           for (; qC += fC, FC += oC, oC && QC && (WC = WC.append(QC[nC - 2 >> 1])), !(ZC || nC == CC.sections.length || CC.sections[nC + 1] < 0);) fC = CC.sections[nC++], oC = CC.sections[nC++];
+           zC(wC, qC, bC, FC, WC), wC = qC, bC = FC
+         }
+       }
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2264-L2267` → after: `L733-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L733-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L733-L774) · [Before (L2264-L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2264-L2267)

```diff
- 	// Armour
- 	| "Protection"
- 	| "Health"
- 	| "Health Regen"
+     function cC(CC, zC, ZC) {
+       let QC = [],
+         wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
+         bC = new rC(CC),
+         nC = new rC(zC),
+         fC = 0;
+       for (let oC = -1;;) {
+         if (++fC > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
+         if (bC.done && nC.len || nC.done && bC.len) throw new Error("Mismatched change set lengths");
+         if (-1 == bC.ins && -1 == nC.ins) {
+           let CC = Math.min(bC.len, nC.len);
+           EC(QC, CC, -1), bC.forward(CC), nC.forward(CC)
+         } else if (nC.ins >= 0 && (bC.ins < 0 || oC == bC.i || 0 == bC.off && (nC.len < bC.len || nC.len == bC.len && !ZC))) {
+           let CC = nC.len;
+           for (EC(QC, nC.ins, -1); CC;) {
+             if (++fC > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
+ ... (26 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2269-L2271` → after: `L776-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L776-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L776-L999) · [Before (L2269-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2269-L2271)

```diff
- 	// Special Armour
- 	| "Stomp Damage"
- 	| "Knockback Resist"
+     function uC(CC, zC) {
+       let ZC = [],
+         QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
+         wC = new rC(CC),
+         bC = new rC(zC),
+         nC = 0;
+       for (let fC = !1;;) {
+         if (++nC > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
+         if (wC.done && bC.done) return QC ? HC.createSet(ZC, QC) : mC.create(ZC);
+         if (0 == wC.ins) EC(ZC, wC.len, 0, fC), wC.next();
+         else if (0 != bC.len || bC.done) {
+           if (wC.done || bC.done) throw new Error("Mismatched change set lengths");
+           {
+             let CC = Math.min(wC.len2, bC.len),
+               zC = ZC.length;
+             if (-1 == wC.ins) {
+ ... (208 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2273-L2276` → after: `L1001-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1001-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1001-L1038) · [Before (L2273-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2273-L2276)

```diff
- 	// Bows & Crossbows
- 	| "Arrow Speed"
- 	| "Arrow Damage"
- 	| "Quick Charge"
+     function jC(CC, zC) {
+       return CC == zC || CC.length == zC.length && CC.every(((CC, ZC) => CC === zC[ZC]))
+     }
+     class yC {
+       constructor(CC, zC, ZC, QC) {
+         this.dependencies = CC, this.facet = zC, this.type = ZC, this.value = QC, this.id = tC++
+       }
+       dynamicSlot(CC) {
+         var zC;
+         let ZC = this.value,
+           QC = this.facet.compareInput,
+           wC = this.id,
+           bC = CC[wC] >> 1,
+           nC = 2 == this.type,
+           fC = !1,
+           oC = !1,
+ ... (22 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2278-L2286` → after: `L1040-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1040-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1040-L1045) · [Before (L2278-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2278-L2286)

```diff
- 	// Tools
- 	| "Break Speed"
- 	| "Momentum"
- 	| "Mining Yield"
- 	| "Farming Yield"
- 	| "Mining Aura"
- 	| "Digging Aura"
- 	| "Lumber Aura"
- 	| "Farming Aura"
+     function LC(CC, zC, ZC) {
+       if (CC.length != zC.length) return !1;
+       for (let QC = 0; QC < CC.length; QC++)
+         if (!ZC(CC[QC], zC[QC])) return !1;
+       return !0
+     }
```

#### 14. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2288-L2290` → after: `L1047-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1047-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1047-L1051) · [Before (L2288-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2288-L2290)

```diff
- 	// Sticks
- 	| "Horizontal Knockback"
- 	| "Vertical Knockback"
+     function UC(CC, zC) {
+       let ZC = !1;
+       for (let QC of zC) 1 & qz(CC, QC) && (ZC = !0);
+       return ZC
+     }
```

#### 15. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2292-L2577` → after: `L1053-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1053-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1053-L1057) · [Before (L2292-L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2292-L2577)

```diff
- 	// Hang Gliders
- 	| "Firecracker Cooldown"
- 	| "Firecracker Boost"
- 	| "Gliding Speed"
- type EnchantmentTier = (_TypeOf["enchantmentTiers"])[number]
- type CustomTextStyling = (string | EntityName | TranslatedText | StyledIcon | StyledText | ProgressBar | StyledKeyBinding)[]
- type TranslatedText = {
- 	translationKey: string
- 	params?: Record<string, string | number | boolean | EntityName>
- }
- type EntityName = {
- 	entityName: string
- 	ranks?: Readonly<Rank[]>
- 	style?: {
- 		color?: string
- 		colour?: string
- ... (270 more removed lines; see GitHub link above)
+     function BC(CC, zC, ZC) {
+       let QC = ZC.map((zC => CC[zC.id])),
+         wC = ZC.map((CC => CC.type)),
+         bC = QC.filter((CC => !(1 & CC))),
+         nC = CC[zC.id] >> 1;
```

#### 16. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2579-L2919` → after: `L1059-L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1059-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1059-L1133) · [Before (L2579-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2579-L2919)

```diff
- 	// Not defined on client, must be defined on server
- 	boughtCallback?: (
- 		playerId: PlayerId,
- 		cost: number,
- 		currency: string,
- 		categoryKey: ShopCategoryKey,
- 		itemKey: ShopItemKey,
- 		userInput: string,
- 		amount: number | undefined,
- 	) => void
- 	sell?: boolean // Optional, defaults to false. If true, the sign of "cost" is flipped. So a "cost" of -25 would give the player 25 currency AND be displayed as "25" (instead of -25)
- 	sortPriority?: number // Descending, bigger number means closer to the top
- 	hidden?: boolean
- 	smp?: SmpShopItemMeta // Set by the SMP marketplace plugin only, for its own shop screens
- }
- type ShopItemUserInput =
- ... (325 more removed lines; see GitHub link above)
+       function fC(CC) {
+         let ZC = [];
+         for (let zC = 0; zC < QC.length; zC++) {
+           let bC = Fz(CC, QC[zC]);
+           if (2 == wC[zC])
+             for (let CC of bC) ZC.push(CC);
+           else ZC.push(bC)
+         }
+         return zC.combine(ZC)
+       }
+       return {
+         create(CC) {
+           for (let zC of QC) qz(CC, zC);
+           return CC.values[nC] = fC(CC), 1
+         },
+         update(CC, ZC) {
+ ... (59 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2921-L2922` → after: `L1135-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1135-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1135-L1189) · [Before (L2921-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2921-L2922)

```diff
- 	msPerRound?: number // computed from fireRate
- 	msPerRoundTouchScreen?: number // computed from fireRateWithHeldTouch
+     function Qz(CC) {
+       return zC => new bz(zC, CC)
+     }
+     const wz = {
+       highest: Qz(0),
+       high: Qz(Zz),
+       default: Qz(zz),
+       low: Qz(Cz),
+       lowest: Qz(VC)
+     };
+     class bz {
+       constructor(CC, zC) {
+         this.inner = CC, this.prec = zC
+       }
+     }
+     class nz {
+ ... (39 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2924-L2925` → after: `L1191-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1191-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1191-L1238) · [Before (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2924-L2925)

```diff
- 	altYVelocityInaccuracy?: number
- 	altInaccuracyFromJump?: number
+             function bC(CC, nC) {
+               let fC = wC.get(CC);
+               if (null != fC) {
+                 if (fC <= nC) return;
+                 let zC = QC[fC].indexOf(CC);
+                 zC > -1 && QC[fC].splice(zC, 1), CC instanceof fz && ZC.delete(CC.compartment)
+               }
+               if (wC.set(CC, nC), Array.isArray(CC))
+                 for (let zC of CC) bC(zC, nC);
+               else if (CC instanceof fz) {
+                 if (ZC.has(CC.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
+                 let QC = zC.get(CC.compartment) || CC.inner;
+                 ZC.set(CC.compartment, QC), bC(QC, nC)
+               } else if (CC instanceof bz) bC(CC.inner, CC.prec);
+               else if (CC instanceof kC) QC[nC].push(CC), CC.provides && bC(CC.provides, nC);
+               else if (CC instanceof yC) QC[nC].push(CC), CC.facet.extensions && bC(CC.facet.extensions, zz);
+ ... (32 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2927` → after: `L1240-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1240-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1240-L1249) · [Before (L2927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2927)

```diff
- 	hasVerticalInaccuracy?: boolean
+     function qz(CC, zC) {
+       if (1 & zC) return 2;
+       let ZC = zC >> 1,
+         QC = CC.status[ZC];
+       if (4 == QC) throw new Error("Cyclic dependency between fields and/or facets");
+       if (2 & QC) return QC;
+       CC.status[ZC] = 4;
+       let wC = CC.computeSlot(CC, CC.config.dynamicSlots[ZC]);
+       return CC.status[ZC] = 2 | wC
+     }
```

#### 20. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2929` → after: `L1251-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1251-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1251-L1345) · [Before (L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2929)

```diff
- 	keepScopeOnShot?: boolean
+     function Fz(CC, zC) {
+       return 1 & zC ? CC.config.staticValues[zC >> 1] : CC.values[zC >> 1]
+     }
+     const Wz = DC.define(),
+       Nz = DC.define({
+         combine: CC => CC.some((CC => CC)),
+         static: !0
+       }),
+       Mz = DC.define({
+         combine: CC => CC.length ? CC[0] : void 0,
+         static: !0
+       }),
+       gz = DC.define(),
+       Sz = DC.define(),
+       pz = DC.define(),
+       Pz = DC.define({
+ ... (79 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2931` → after: `L1347-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1347-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1347-L1357) · [Before (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2931)

```diff
- 	aimZoomFactor?: number
+     function Iz(CC, zC) {
+       let ZC = [];
+       for (let QC = 0, wC = 0;;) {
+         let bC, nC;
+         if (QC < CC.length && (wC == zC.length || zC[wC] >= CC[QC])) bC = CC[QC++], nC = CC[QC++];
+         else {
+           if (!(wC < zC.length)) return ZC;
+           bC = zC[wC++], nC = zC[wC++]
+         }!ZC.length || ZC[ZC.length - 1] < bC ? ZC.push(bC, nC) : ZC[ZC.length - 1] < nC && (ZC[ZC.length - 1] = nC)
+       }
+     }
```

#### 22. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2933-L2942` → after: `L1359-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1359-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1359-L1369) · [Before (L2933-L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2933-L2942)

```diff
- 	// Kickback
- 	kickbackDecreaseRate: number
- 	minKickback?: number
- 	maxKickback?: number
- 	kickbackRate?: number
- }
- type NonOverridableStats =
- 	// Precomputed values
- 	| "msPerRound"
- 	| "msPerRoundTouchScreen"
+     function iz(CC, zC, ZC) {
+       var QC;
+       let wC, bC, nC;
+       return ZC ? (wC = zC.changes, bC = HC.empty(zC.changes.length), nC = CC.changes.compose(zC.changes)) : (wC = zC.changes.map(CC.changes), bC = CC.changes.mapDesc(zC.changes, !0), nC = CC.changes.compose(wC)), {
+         changes: nC,
+         selection: zC.selection ? zC.selection.map(bC) : null === (QC = CC.selection) || void 0 === QC ? void 0 : QC.map(wC),
+         effects: xz.mapEffects(CC.effects, wC).concat(xz.mapEffects(zC.effects, bC)),
+         annotations: CC.annotations.length ? CC.annotations.concat(zC.annotations) : zC.annotations,
+         scrollIntoView: CC.scrollIntoView || zC.scrollIntoView
+       }
+     }
```

#### 23. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L2944-L3066` → after: `L1371-L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1371-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1371-L1381) · [Before (L2944-L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L2944-L3066)

```diff
- 	// These two don't even work lol
- 	// TODO: Fix them
- 	| "tagSpeedMult"
- 	| "subsequentTagSpeedReductionScalar"
- type GunCategory = (_TypeOf["gunCategories"])[number]
- type WeaponComboInfo = Readonly<{
- 	comboWindowMs: number
- 	comboMultipliers: readonly number[]
- 	backstabAngle?: number // If present, hitting an enemy from behind within this angle (radians) skip to end of combo
- }>
- type AnyMetadataItem = Partial<BlockMetadataItem & NonBlockMetadataItem>
- type CustomItemStat = (_TypeOf["customItemStats"])[number]
- type InvenItem = { name: string; amount: number | null; attributes: ItemAttributes; typeObj: any }
- type RecipesForItem = RecursiveReadonly<
- 	{
- 		requires: { items: ItemName[]; amt: number }[]
- ... (107 more removed lines; see GitHub link above)
+     function vz(CC, zC, ZC) {
+       let QC = zC.selection,
+         wC = Kz(zC.annotations);
+       return zC.userEvent && (wC = wC.concat(Jz.userEvent.of(zC.userEvent))), {
+         changes: zC.changes instanceof HC ? zC.changes : HC.of(zC.changes || [], ZC, CC.facet(Mz)),
+         selection: QC && (QC instanceof TC ? QC : TC.single(QC.anchor, QC.head)),
+         effects: Kz(zC.effects),
+         annotations: wC,
+         scrollIntoView: !!zC.scrollIntoView
+       }
+     }
```

#### 24. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L3068-L3070` → after: `L1383-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1383-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1383-L1430) · [Before (L3068-L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L3068-L3070)

```diff
- 	// If a mob drops an item, then we choose a random amount within these bounds.
- 	dropMinAmount?: number
- 	dropMaxAmount?: number
+     function ez(CC, zC, ZC) {
+       let QC = vz(CC, zC.length ? zC[0] : {}, CC.doc.length);
+       zC.length && !1 === zC[0].filter && (ZC = !1);
+       for (let bC = 1; bC < zC.length; bC++) {
+         !1 === zC[bC].filter && (ZC = !1);
+         let wC = !!zC[bC].sequential;
+         QC = iz(QC, vz(CC, zC[bC], wC ? QC.changes.newLength : CC.doc.length), wC)
+       }
+       let wC = Jz.create(CC, QC.changes, QC.selection, QC.effects, QC.annotations, QC.scrollIntoView);
+       return function(CC) {
+         let zC = CC.startState,
+           ZC = zC.facet(pz),
+           QC = CC;
+         for (let wC = ZC.length - 1; wC >= 0; wC--) {
+           let bC = ZC[wC](CC);
+           bC && Object.keys(bC).length && (QC = iz(QC, vz(zC, bC, CC.changes.newLength), !0))
+ ... (32 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L3072-L4004` → after: `L1432-L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1432-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1432-L1442) · [Before (L3072-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L3072-L4004)

```diff
- 	// If true, the item will "burst" out of the mob rather than just dropping.
- 	applyBurstImpulseToDrop?: boolean
- }>
- type MobBurstAttackInfo = Readonly<{
- 	burstAttackIntervals: readonly number[]
- }>
- type MobArmour = Partial<Readonly<Record<ArmourPart, MobArmourPiece>>>
- type MobWarpTargetSpecialAttackInfo = Readonly<{
- 	cooldown: number
- 	range: number
- 	sound: string | null
- 	delay: number
- 	minDestinationRadius: number
- 	maxDestinationRadius: number
- 	swingArm: boolean
- 	particleOpts: TempMobParticleOpts | null
- ... (917 more removed lines; see GitHub link above)
+     function Kz(CC) {
+       return null == CC ? hz : Array.isArray(CC) ? CC : [CC]
+     }
+     var Yz = function(CC) {
+       return CC[CC.Word = 0] = "Word", CC[CC.Space = 1] = "Space", CC[CC.Other = 2] = "Other", CC
+     }(Yz || (Yz = {}));
+     const dz = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
+     let mz;
+     try {
+       mz = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
+     } catch (ZZ) {}
```

#### 26. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L4257-L4258` → after: `L1445-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L1445-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L1445-L2145) · [Before (L4257-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L4257-L4258)

```diff
-       var ek = new Error("Cannot find module '" + kk + "'");
-       throw ek.code = "MODULE_NOT_FOUND", ek
+       return zC => {
+         if (!/\S/.test(zC)) return Yz.Space;
+         if (function(CC) {
+             if (mz) return mz.test(CC);
+             for (let zC = 0; zC < CC.length; zC++) {
+               let ZC = CC[zC];
+               if (/\w/.test(ZC) || ZC > "\x80" && (ZC.toUpperCase() != ZC.toLowerCase() || dz.test(ZC))) return !0
+             }
+             return !1
+           }(zC)) return Yz.Word;
+         for (let ZC = 0; ZC < CC.length; ZC++)
+           if (zC.indexOf(CC[ZC]) > -1) return Yz.Word;
+         return Yz.Other
+       }
+     }
+     class Ez {
+ ... (685 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L4260-L4269` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/294.js#L2147) · [Before (L4260-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/294.js#L4260-L4269)

```diff
-     ek.keys = () => [], ek.resolve = ek, ek.id = 41012, kk.exports = ek
-   },
-   40960: () => {},
-   40998: () => {},
-   40982: () => {},
-   41015: () => {},
-   40994: () => {},
-   40985: () => {},
-   40974: () => {},
-   41003: () => {}
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/295.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/295.js` (98 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617)

#### 1. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L4-L11) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L4)

```diff
-   40950: (kk, ek, ik) => {
+   41201: CC => {
+     function zC(CC) {
+       var zC = new Error("Cannot find module '" + CC + "'");
+       throw zC.code = "MODULE_NOT_FOUND", zC
+     }
+     zC.keys = () => [], zC.resolve = zC, zC.id = 41201, CC.exports = zC
+   },
+   41255: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L8-L736` → after: `L16-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L16-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L16-L57) · [Before (L8-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L8-L736)

```diff
-     const Dk = String.raw`interface Map<K, V> {
-     clear(): void;
-     /**
-      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
-      */
-     delete(key: K): boolean;
-     /**
-      * Executes a provided function once per each key/value pair in the Map, in insertion order.
-      */
-     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
-     /**
-      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
-      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
-      */
-     get(key: K): V | undefined;
-     /**
- ... (713 more removed lines; see GitHub link above)
+     const QC = "Sends one question to the AI",
+       wC = {
+         title: QC,
+         "data-asks-ai": !0
+       }
+   },
+   41177: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC
+     });
+     const QC = String.raw`
+ 	/** The ID of the player running the code.
+ 	 *
+ 	 * Lobby code usually has nobody running it, so this is null.
+ 	 */
+ 	declare const myId: string | null
+ ... (26 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L738` → after: `L59-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L59-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L59-L63) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L738)

```diff
-  * Describes a user-defined {@link Iterator} that is also iterable.
+  * Set position of a player / entity.
+  * @param entityId
+  * @param x Can also be an array, in which case y and z shouldn't be passed
+  * @param y
+  * @param z
```

#### 4. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L740-L743` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L65) · [Before (L740-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L740-L743)

```diff
- interface IterableIterator<T, TReturn = any, TNext = any> extends Iterator<T, TReturn, TNext> {
-     [Symbol.iterator](): IterableIterator<T, TReturn, TNext>;
- }
- 
+ setPosition(entityId: EntityId, x: number | number[], y?: number, z?: number): void
```

#### 5. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L745` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L67-L68) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L745)

```diff
-  * Describes an {@link Iterator} produced by the runtime that inherits from the intrinsic \`Iterator.prototype\`.
+  * Get the scale of a lifeform.
+  * @param lifeformId
```

#### 6. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L747-L1178` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L70) · [Before (L747-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L747-L1178)

```diff
- interface IteratorObject<T, TReturn = unknown, TNext = unknown> extends Iterator<T, TReturn, TNext> {
-     [Symbol.iterator](): IteratorObject<T, TReturn, TNext>;
- }
- 
- interface ArrayIterator<T> extends IteratorObject<T, BuiltinIteratorReturn, unknown> {
-     [Symbol.iterator](): ArrayIterator<T>;
- }
- 
- interface Array<T> {
-     /** Iterator */
-     [Symbol.iterator](): ArrayIterator<T>;
- 
-     /**
-      * Returns an iterable of key, value pairs for every entry in the array
-      */
-     entries(): ArrayIterator<[number, T]>;
- ... (416 more removed lines; see GitHub link above)
+ getLifeformScale(lifeformId: LifeformId): number
```

#### 7. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1180-L1181` → after: `L72-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L72-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L72-L77) · [Before (L1180-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L1180-L1181)

```diff
-  * Defines the \`TReturn\` type used for built-in iterators produced by \`Array\`, \`Map\`, \`Set\`, and others.
-  * This is \`undefined\` when \`strictBuiltInIteratorReturn\` is \`true\`; otherwise, this is \`any\`.
+  * Set the visual + physical scale of a lifeform. A scale of 1 is the default size.
+  * Bodies stop growing at 25 blocks wide and 90 tall (a player's at scale 50); past that only the model grows.
+  * getLifeformScale returns the scale rounded to 32-bit precision (0.7 reads back as 0.699999988079071).
+  *
+  * @param lifeformId
+  * @param scale Must be a positive number, from about 1.4e-45 to 3.4e38.
```

#### 8. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L1183-L3029` → after: `L79-L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L79-L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L79-L1615) · [Before (L1183-L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L1183-L3029)

```diff
- type BuiltinIteratorReturn = intrinsic;
- 
- interface ProxyHandler<T extends object> {
-     /**
-      * A trap method for a function call.
-      * @param target The original callable object which is being proxied.
-      */
-     apply?(target: T, thisArg: any, argArray: any[]): any;
- 
-     /**
-      * A trap for the \`new\` operator.
-      * @param target The original object which is being proxied.
-      * @param newTarget The constructor that was originally called.
-      */
-     construct?(target: T, argArray: any[], newTarget: Function): object;
- 
- ... (1831 more removed lines; see GitHub link above)
+ setLifeformScale(lifeformId: LifeformId, scale: number): void
+ /**
+  * Get all the player ids.
+  */
+ getPlayerIds(): PlayerId[]
+ /**
+  * Whether a player is currently in the game
+  *
+  * @param playerId
+  */
+ playerIsInGame(playerId: PlayerId): boolean
+ /**
+  * Whether a player is signed in to a Bloxd account: false for guests, who are still in the game.
+  * To check that a player is still in the game, use playerIsInGame.
+  * @param playerId
+  * @returns
+ ... (1521 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3031` → after: `L1617-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1617-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1617-L1620) · [Before (L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L3031)

```diff
-  * Creates a new function.
+  * Delete a request for a player.
+  *
+  * @param playerId
+  * @param id Returned from the addUiRequest call you want to cancel
```

#### 10. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3033-L3952` → after: `L1622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1622) · [Before (L3033-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L3033-L3952)

```diff
- interface Function {
-     /**
-      * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
-      * @param thisArg The object to be used as the this object.
-      * @param argArray A set of arguments to be passed to the function.
-      */
-     apply(this: Function, thisArg: any, argArray?: any): any;
- 
-     /**
-      * Calls a method of an object, substituting another object for the current object.
-      * @param thisArg The object to be used as the current object.
-      * @param argArray A list of arguments to be passed to the method.
-      */
-     call(this: Function, thisArg: any, ...argArray: any[]): any;
- 
-     /**
- ... (904 more removed lines; see GitHub link above)
+ deleteUiRequest(playerId: PlayerId, id: UiRequestId): void
```

#### 11. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3954-L3957` → after: `L1624-L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1624-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1624-L1629) · [Before (L3954-L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L3954-L3957)

```diff
-  * Represents a raw buffer of binary data, which is used to store data for the
-  * different typed arrays. ArrayBuffers cannot be read from or written to directly,
-  * but can be passed to a typed array or DataView Object to interpret the raw
-  * buffer as needed.
+  * Show a message over the shop in the same place that a shop item's onBoughtMessage is shown.
+  * Displays for a couple seconds before disappearing
+  * Use case is to show a dynamic message when player buys an item
+  *
+  * @param playerId
+  * @param info
```

#### 12. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3959-L3970` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1631) · [Before (L3959-L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L3959-L3970)

```diff
- interface ArrayBuffer {
-     /**
-      * Read-only. The length of the ArrayBuffer (in bytes).
-      */
-     readonly byteLength: number;
- 
-     /**
-      * Returns a section of an ArrayBuffer.
-      */
-     slice(begin?: number, end?: number): ArrayBuffer;
- }
- 
+ sendOverShopInfo(playerId: PlayerId, info: string | CustomTextStyling): void
```

#### 13. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3972` → after: `L1633-L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1633-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1633-L1640) · [Before (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L3972)

```diff
-  * Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays.
+  * Open the shop UI for a player
+  *
+  * @param playerId
+  * @param toggle Whether to close the shop if it's already open. Leave this off when opening from an
+  * interaction: holding the interact button re-fires the alt action every ~50-150ms, so a toggle would
+  * flicker the shop open and closed until release.
+  * @param forceCategoryKey If set, will change the shop to this category
+  * @param onlyIfNonEmpty If true, will only open the shop if the category (or shop, if no category is provided) is non-empty
```

#### 14. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3974-L4000` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1642) · [Before (L3974-L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L3974-L4000)

```diff
- interface ArrayBufferTypes {
-     ArrayBuffer: ArrayBuffer;
- }
- 
- interface ArrayBufferConstructor {
-     readonly prototype: ArrayBuffer;
-     new (byteLength: number): ArrayBuffer;
-     isView(arg: any): arg is ArrayBufferView;
- }
- 
- interface ArrayBufferView<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
- ... (11 more removed lines; see GitHub link above)
+ openShop(playerId: PlayerId, toggle?: boolean, forceCategoryKey?: ShopCategoryKey | null, onlyIfNonEmpty?: boolean): void
```

#### 15. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4002-L4003` → after: `L1644-L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1644-L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1644-L1654) · [Before (L4002-L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L4002-L4003)

```diff
-  * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested
-  * number of bytes could not be allocated an exception is raised.
+  * Apply an effect to a lifeform.
+  * Can be an inbuilt effect E.g. "Speed" (speed boost), "Damage" (damage boost).
+  * For inbuilt just pass the name of the effect and the functionality is handled in-engine.
+  * For custom effect, you pass customEffectInfo. The icon can be an InGameIconName or a bloxd item name.
+  * The custom effect onEndCb is an optional helper within which you can undo the effect you applied.
+  * Note that onEndCb will not work for press to code boards, code blocks or world code.
+  *
+  * @param lifeformId
+  * @param effectName
+  * @param duration
+  * @param customEffectInfo
```

#### 16. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4005-L4282` → after: `L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1656) · [Before (L4005-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L4005-L4282)

```diff
- interface Int8Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ applyEffect(lifeformId: LifeformId, effectName: string, duration: number | null, customEffectInfo: { icon?: IngameIconName | ItemName; onEndCb?: () => void; displayName?: string | TranslatedText } & Partial<InbuiltEffectInfo>): void
```

#### 17. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4284-L4285` → after: `L1658-L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1658-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1658-L1662) · [Before (L4284-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L4284-L4285)

```diff
-  * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Check if a lifeform has an effect.
+  *
+  * @param lifeformId
+  * @param name
+  * @param atOrAboveLevel Checks whether the effect is at or above the given level
```

#### 18. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4287-L4563` → after: `L1664-L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1664-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1664-L1851) · [Before (L4287-L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L4287-L4563)

```diff
- interface Uint8Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (261 more removed lines; see GitHub link above)
+ hasEffect(lifeformId: LifeformId, name: string, atOrAboveLevel?: number): boolean
+ /**
+  * Get the level of an effect on a lifeform, or 0 if they don't have it.
+  *
+  * @param lifeformId
+  * @param name
+  */
+ getEffectLevel(lifeformId: LifeformId, name: string): number
+ /**
+  * Get all the effects currently applied to a lifeform.
+  *
+  * @param lifeformId
+  */
+ getEffects(lifeformId: LifeformId): string[]
+ /**
+  * Remove an effect from a lifeform.
+ ... (172 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4566-L4567` → after: `L1930-L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1930-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1930-L1942) · [Before (L4566-L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L4566-L4567)

```diff
-  * A typed array of 16-bit signed integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Register an event for analytics. Custom games only: anywhere else, World Code gets an error.
+  * Special value is eventType "match" and eventValue "match_started" to mark the start of a match when calculating average quantities
+  * Each player can send 20 events a minute. Each day a game can have 20 game categories, 20 event types in each and
+  * 50 event values for each type; once it goes past one, events at that level are dropped until midnight UTC
+  *
+  * @param playerId - The player associated with the event
+  * @param eventType - The type of event e.g. "shop" or "death", at most 64 characters
+  * @param eventValue - The detail of the event e.g. the item bought or cause of death, at most 128 characters
+  * @param gameCategoryId - The game category id e.g. the map you're playing on or the variant of the game to filter by or compare, at most 128 characters
+  * @param gameStartTimeMs - The time the game or match started in milliseconds since 1970, within the last 30 days - use to get event times relative to the start of the game.
+  * Each event also records the player's lifetime playtime
+  * @param position - Where the event happened, e.g. where the player died or the block they broke, shown on Studio's heatmap. In the same frame of reference as the game's registerAnalyticsPlayerPosition positions for this category. Without one, no position is recorded
+  * @param numericValue - A number the event measures, e.g. the coins earned, the round's score or the seconds it took.
```

#### 20. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4569-L4845` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1944) · [Before (L4569-L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L4569-L4845)

```diff
- interface Int16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (261 more removed lines; see GitHub link above)
+ registerAnalyticsEvent(playerId: string, eventType: string, eventValue: string | null, gameCategoryId: string | null, gameStartTimeMs: number, position?: Pos | null, numericValue?: number | null): void
```

#### 21. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4847-L4848` → after: `L1946-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1946-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1946-L1954) · [Before (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L4847-L4848)

```diff
-  * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Record where a player is for the analytics heatmap. Call it at a regular interval (e.g. once a second).
+  * Custom games only: anywhere else, World Code gets an error.
+  * Each player can send 120 positions a minute. Each day a game can send 100,000 different blocks (event positions
+  * included); once it goes past that, positions are dropped until midnight UTC
+  *
+  * @param playerId - The player whose position to record
+  * @param gameCategoryId - The game category id e.g. the map you're playing on or the variant of the game to filter by, at most 128 characters
+  * @param gameStartTimeMs - The time the game or match started in milliseconds since 1970, within the last 30 days - used to get a playback of positions
+  * @param position - The position of the player to record. Defaults to the player's global position.
```

#### 22. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4850-L5127` → after: `L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1956) · [Before (L4850-L5127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L4850-L5127)

```diff
- interface Uint16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ registerAnalyticsPlayerPosition(playerId: string, gameCategoryId: string | null, gameStartTimeMs: number, position?: Pos | null): void
```

#### 23. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L5129-L5130` → after: `L1958-L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1958-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1958-L1959) · [Before (L5129-L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L5129-L5130)

```diff
-  * A typed array of 32-bit signed integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Gets a database value that is saved per lobby.
+  * @param key
```

#### 24. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L5132-L5409` → after: `L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1961) · [Before (L5132-L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L5132-L5409)

```diff
- interface Int32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ getLobbyDbValue(key: string): string | number | null
```

#### 25. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L5411-L5412` → after: `L1963-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1963-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1963-L1965) · [Before (L5411-L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L5411-L5412)

```diff
-  * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the
-  * requested number of bytes could not be allocated an exception is raised.
+  * Sets a database value that is saved per lobby. This persists between sessions.
+  * @param key
+  * @param value
```

#### 26. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L5414-L5690` → after: `L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1967) · [Before (L5414-L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L5414-L5690)

```diff
- interface Uint32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (261 more removed lines; see GitHub link above)
+ setLobbyDbValue(key: string, value: string | number): void
```

#### 27. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L5692-L5693` → after: `L1969-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1969-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1969-L1970) · [Before (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L5692-L5693)

```diff
-  * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number
-  * of bytes could not be allocated an exception is raised.
+  * Deletes a database value that is saved per lobby.
+  * @param key
```

#### 28. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L5695-L5972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1972) · [Before (L5695-L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L5695-L5972)

```diff
- interface Float32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (262 more removed lines; see GitHub link above)
+ deleteLobbyDbValue(key: string): void
```

#### 29. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L5974-L5975` → after: `L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1974) · [Before (L5974-L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L5974-L5975)

```diff
-  * A typed array of 64-bit float values. The contents are initialized to 0. If the requested
-  * number of bytes could not be allocated an exception is raised.
+  * Deletes all database values that are saved per lobby.
```

#### 30. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L5977-L6275` → after: `L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1976) · [Before (L5977-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L5977-L6275)

```diff
- interface Float64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
-     /**
-      * The size in bytes of each element in the array.
-      */
-     readonly BYTES_PER_ELEMENT: number;
- 
-     /**
-      * The ArrayBuffer instance referenced by the array.
-      */
-     readonly buffer: TArrayBuffer;
- 
-     /**
-      * The length in bytes of the array.
-      */
-     readonly byteLength: number;
- 
- ... (283 more removed lines; see GitHub link above)
+ deleteAllLobbyDbValues(): void
```

#### 31. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6277` → after: `L1978-L1980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1978-L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1978-L1980) · [Before (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6277)

```diff
-  * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
+  * Gets a database value that is saved per player.
+  * @param playerId
+  * @param key
```

#### 32. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6279-L6280` → after: `L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1982) · [Before (L6279-L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6279-L6280)

```diff
- type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;
- 
+ getPlayerDbValue(playerId: PlayerId, key: string): string | number | null
```

#### 33. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6282` → after: `L1984-L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1984-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1984-L1988) · [Before (L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6282)

```diff
-  * Removes the 'this' parameter from a function type.
+  * Sets a database value that is saved per player. For custom games this persists between sessions and
+  * between lobbies, and is shared across all of the game's variations (e.g. a hub and its sub-modes).
+  * @param playerId
+  * @param key
+  * @param value
```

#### 34. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6284-L6285` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1990) · [Before (L6284-L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6284-L6285)

```diff
- type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
- 
+ setPlayerDbValue(playerId: PlayerId, key: string, value: string | number): void
```

#### 35. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6287` → after: `L1992-L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1992-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1992-L1994) · [Before (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6287)

```diff
-  * Make all properties in T optional
+  * Deletes a database value that is saved per player.
+  * @param playerId
+  * @param key
```

#### 36. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6289-L6292` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1996) · [Before (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6289-L6292)

```diff
- type Partial<T> = {
-     [P in keyof T]?: T[P];
- };
- 
+ deletePlayerDbValue(playerId: PlayerId, key: string): void
```

#### 37. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6294` → after: `L1998-L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L1998-L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L1998-L1999) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6294)

```diff
-  * Make all properties in T required
+  * Deletes all database values that are saved per player, including persisted currencies.
+  * @param playerId
```

#### 38. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6296-L6299` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2001) · [Before (L6296-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6296-L6299)

```diff
- type Required<T> = {
-     [P in keyof T]-?: T[P];
- };
- 
+ deleteAllPlayerDbValues(playerId: PlayerId): void
```

#### 39. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6301` → after: `L2003-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2003-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2003-L2014) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6301)

```diff
-  * Make all properties in T readonly
+  * Dynamically define a currency for a player and show it on the HUD.
+  * Amounts will persist between sessions if \`persistent\` is set to true.
+  * Persistent currencies count towards db length limits.
+  *
+  * Example usage:
+  * \`\`\`js
+  * api.setCurrency(myId, "myCurrency", { amount: 100, icon: "coins", iconColour: "blue", persistent: true })
+  * \`\`\`
+  *
+  * @param playerId
+  * @param currencyId
+  * @param info - { amount, icon } are required (icon is an icon name such as "coins"); iconColour, persistent, hidden and subtext are optional
```

#### 40. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6303-L6306` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2016) · [Before (L6303-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6303-L6306)

```diff
- type Readonly<T> = {
-     readonly [P in keyof T]: T[P];
- };
- 
+ setCurrency(playerId: PlayerId, currencyId: string, info: UgcCurrencyInfo): void
```

#### 41. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6308` → after: `L2018-L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2018-L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2018-L2020) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6308)

```diff
-  * From T, pick a set of properties whose keys are in the union K
+  * Delete a currency from a player. This will make the currency unknown to the player.
+  * @param playerId
+  * @param currencyId
```

#### 42. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6310-L6313` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2022) · [Before (L6310-L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6310-L6313)

```diff
- type Pick<T, K extends keyof T> = {
-     [P in K]: T[P];
- };
- 
+ deleteCurrency(playerId: PlayerId, currencyId: string): void
```

#### 43. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6315` → after: `L2024-L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2024-L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2024-L2028) · [Before (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6315)

```diff
-  * Construct a type with a set of properties K of type T
+  * Set the amount of a currency a player has. For persistent currencies, amount/subtext count towards db length limits.
+  * @param playerId
+  * @param currencyId
+  * @param amount
+  * @param subtext
```

#### 44. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6317-L6320` → after: `L2030-L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2030-L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2030-L2134) · [Before (L6317-L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6317-L6320)

```diff
- type Record<K extends keyof any, T> = {
-     [P in K]: T;
- };
- 
+ setCurrencyAmount(playerId: PlayerId, currencyId: string, amount: number, subtext?: string | CustomTextStyling): void
+ /**
+  * Give a player an amount of currency. Can be negative to remove money.
+  * The currency must exist for the player first, or this throws: make it with setCurrency (with an icon), e.g. in onPlayerJoin.
+  * @param playerId
+  * @param currencyId
+  * @param amount
+  */
+ giveCurrencyAmount(playerId: PlayerId, currencyId: string, amount: number): void
+ /**
+  * Replace a world chunk with a chunk from a project schematic, including air and block data.
+  * Both positions are block coordinates selecting their containing 32-block chunk.
+  * Add schematics in the Code Editor. Missing paths or source chunks throw an error.
+  * @param schematicPath Project-relative path, including .bloxdschem.
+  * @param srcCoords Block coordinates in the schematic's chunk grid (including selection padding).
+  * @param destCoords Block coordinates in the world. Existing blocks are replaced without break drops.
+ ... (89 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6322` → after: `L2136-L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2136-L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2136-L2139) · [Before (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6322)

```diff
-  * Exclude from T those types that are assignable to U
+  * Get the status of a queued command.
+  *
+  * @param id The ID of the queued command to get the status of.
+  * @returns NOT_IN_QUEUE, WAITING_TO_RUN, or CURRENTLY_RUNNING.
```

#### 46. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6324-L6325` → after: `L2141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2141) · [Before (L6324-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6324-L6325)

```diff
- type Exclude<T, U> = T extends U ? never : T;
- 
+ getQueuedStatus(id: QueuedCommandId): QueuedStatusString
```

#### 47. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6327` → after: `L2143-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2143-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2143-L2145) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6327)

```diff
-  * Extract from T those types that are assignable to U
+  * Remove a queued command from the queue.
+  *
+  * @param id The ID of the queued command to remove.
```

#### 48. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6329-L6330` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2147) · [Before (L6329-L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6329-L6330)

```diff
- type Extract<T, U> = T extends U ? T : never;
- 
+ removeFromQueue(id: QueuedCommandId): void
```

#### 49. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6332` → after: `L2149-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2149-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2149-L2171) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6332)

```diff
-  * Construct a type with the properties of T except for those in type K.
+  * Add a request for the player to answer in the top right corner. E.g. accepting or denying a tprequest.
+  *
+  * Use onUiRequestResponded to handle the response.
+  *
+  * Example Usage:
+  * \`\`\`js
+  * const myRequestId = api.addUiRequest(playerId, {
+  *   type: "standard",
+  *   title: "Do you want to join the game?",
+  * }, 5000)
+  *
+  * onUiRequestResponded = (playerId, uiRequestId, response) => {
+  *   if (uiRequestId === myRequestId) {
+  *     api.log(response)
+  *   }
+  * }
+ ... (7 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6334-L6341` → after: `L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2173) · [Before (L6334-L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6334-L6341)

```diff
- type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
- 
- type ArrayBufferLike = ArrayBufferTypes[keyof ArrayBufferTypes];
- 
- declare var NaN: number;
- 
- declare var Infinity: number;
- 
+ addUiRequest(playerId: PlayerId, parameters: UiRequestClientParameters, timeoutAfterMs?: number): UiRequestId
```

#### 51. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6343` → after: `L2175-L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2175-L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2175-L2192) · [Before (L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6343)

```diff
-  * Provides functionality common to all JavaScript objects.
+  * Add a request for the player to answer in the form of a popup. This blocks the player from doing anything else until they respond.
+  *
+  * Use onUiRequestResponded to handle the response.
+  *
+  * Example Usage:
+  * \`\`\`js
+  * const myRequestId = api.addUiRequestPopup(playerId, "Do you want to join the game?")
+  *
+  * onUiRequestResponded = (playerId, uiRequestId, response) => {
+  *   if (uiRequestId === myRequestId) {
+  *     api.log(response)
+  *   }
+  * }
+  * \`\`\`
+  *
+  * @param playerId The ID of the player to add the request to.
+ ... (2 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6345-L6348` → after: `L2194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2194) · [Before (L6345-L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6345-L6348)

```diff
- declare var Object: ObjectConstructor;
- 
- declare var Function: FunctionConstructor;
- 
+ addUiRequestPopup(playerId: PlayerId, requestText: string): UiRequestId | null
```

#### 53. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6350` → after: `L2196-L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2196-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2196-L2200) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6350)

```diff
-  * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
+  * Matchmake a player into a sub-variation of the current custom game.
+  * Pass \`"default"\` for the default variation.
+  *
+  * @param playerId The player to matchmake
+  * @param varname Sub-variation name (\`[A-Za-z0-9_-]\`, 1-32 chars), or \`"default"\`
```

#### 54. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6352-L6365` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2202) · [Before (L6352-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6352-L6365)

```diff
- declare var String: StringConstructor;
- 
- declare var Boolean: BooleanConstructor;
- 
- /** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
- declare var Number: NumberConstructor;
- 
- /** An intrinsic object that provides basic mathematics functionality and constants. */
- declare var Math: Math;
- 
- declare var RegExp: RegExpConstructor;
- 
- declare var Error: ErrorConstructor;
- 
+ matchmakeToVariation(playerId: PlayerId, varname: string): void
```

#### 55. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6367` → after: `L2204-L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2204-L2205) · [Before (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6367)

```diff
-  * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
+  * Get the current sub-variation name.
+  * Returns \`"default"\` when there is no named sub-variation.
```

#### 56. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6369-L6390` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2207) · [Before (L6369-L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6369-L6390)

```diff
- declare var JSON: JSON;
- 
- declare var Array: ArrayConstructor;
- 
- declare var ArrayBuffer: ArrayBufferConstructor;
- 
- declare var Int8Array: Int8ArrayConstructor;
- 
- declare var Uint8Array: Uint8ArrayConstructor;
- 
- declare var Int16Array: Int16ArrayConstructor;
- 
- declare var Uint16Array: Uint16ArrayConstructor;
- 
- declare var Int32Array: Int32ArrayConstructor;
- 
- ... (6 more removed lines; see GitHub link above)
+ getVariation(): string
```

#### 57. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6392-L6393` → after: `L2209-L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2209-L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2209-L2212) · [Before (L6392-L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6392-L6393)

```diff
-  * Evaluates JavaScript code and executes it.
-  * @param x A String value that contains valid JavaScript code.
+  * Whether the player joined with this custom game's texture pack applied. False if they skipped applying it
+  * (kicking them shows the prompt again when they rejoin).
+  * Only published custom games prompt for their pack, so anywhere else this says so and returns true.
+  * @param playerId
```

#### 58. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6395-L6683` → after: `L2214-L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2214-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2214-L2218) · [Before (L6395-L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6395-L6683)

```diff
- declare function eval(x: string): any;
- 
- interface ErrorConstructor {
-     /**
-      * Indicates whether the argument provided is a built-in Error instance or not.
-      */
-     isError(error: unknown): error is Error;
- }
- 
- interface Math {
-     /**
-      * Returns the nearest half precision float representation of a number.
-      * @param x A numeric expression.
-      */
-     f16round(x: number): number;
- }`
- ... (273 more removed lines; see GitHub link above)
+ isUsingCustomGameTexturePack(playerId: PlayerId): boolean
+ /**
+  * Log a message to chat.
+ */
+ log(message: any): void
```

#### 59. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6685-L6695` → after: `L2220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2220) · [Before (L6685-L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6685-L6695)

```diff
- declare global {
- 	/** The ID of the player running the code.
- 	 *
- 	 * Lobby code usually has nobody running it, so this is null.
- 	 */
- 	const myId: string | null
- 	/** The position of the code block or press to code board */
- 	const thisPos: [number, number, number]
- 	/** The owner of the current custom lobby */
- 	const lobbyOwnerId: string | null
- 	const console: Console
+ 	}
```

#### 60. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L6697-L7197` → after: `L2222-L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2222-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2222-L2471) · [Before (L6697-L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L6697-L7197)

```diff
- 	const api: GameApi
- 
- 	/**
- 	 * Called every tick, 20 times per second
- 	 * @param ms - The fixed timestep, can be used as "milliseconds since last tick"
- 	 */
- 	var tick: (ms: number) => void
- 
- 	/**
- 	 * Called when the lobby is shutting down
- 	 * @param serverIsShuttingDown - Whether the server is shutting down
- 	 */
- 	var onClose: (serverIsShuttingDown: boolean) => void
- 
- 	/**
- 	 * Called when a player joins the lobby. A player shown an ad as they join holds their place in the lobby during it, but only joins, and is only in getPlayerIds, once it ends, unless the game turns that off (api.setJoinsWaitForAds)
- ... (485 more removed lines; see GitHub link above)
+ 	declare const api: GameApi;
+ type EntityId = string
+ type Pos = [number, number, number]
+ type LifeformId = EntityId
+ type PlayerId = LifeformId
+ type PlayerDbId = string
+ type LifeformBodyPart = (_TypeOf["lifeformBodyParts"])[number]
+ interface PlayerAttemptDamageOtherPlayerOpts {
+ 	eId: PlayerId
+ 	hitEId: PlayerId
+ 	attemptedDmgAmt: number
+ 	withItem: string
+ 	bodyPartHit?: LifeformBodyPart
+ 	attackDir?: number[]
+ 	showCritParticles?: boolean
+ 	reduceVerticalKbVelocity?: boolean
+ ... (234 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7199` → after: `L2473-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2473-L2475) · [Before (L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7199)

```diff
- 	 * Called when a player's thrown projectile hits the terrain
+ 	 * The entities and positions to keep in view. Entities the player is too far from to see, or that have left, are
+ 	 * left out. With none to frame, an empty list too, the camera holds where and how far it last framed, at this
+ 	 * camera's own angle, or frames the player if it has framed nothing yet.
```

#### 62. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7201-L7202` → after: `L2477-L2487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2477-L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2477-L2487) · [Before (L7201-L7202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7201-L7202)

```diff
- 	var onPlayerThrowableHitTerrain: (playerId: PlayerId, throwableName: ThrowableItem, thrownEntityId: EntityId) => void
- 
+ 	targets: CameraTarget[]
+ 	/** Compass direction the camera looks in, in degrees: 0 looks along +z, 90 along +x. Default 0. */
+ 	viewHeading?: number
+ 	/** Degrees the camera looks down, from 0 (level) to 90 (straight down). Default 45. */
+ 	viewElevation?: number
+ 	/** Blocks of space to keep around the targets. Default 2. */
+ 	padding?: number
+ 	/** Closest the camera comes to the middle of the targets, in blocks. Default 6, or furthestDistance if that is closer. */
+ 	closestDistance?: number
+ 	/** Furthest the camera goes from the middle of the targets, in blocks, even if some targets leave the view. Default 64, or closestDistance if that is further. */
+ 	furthestDistance?: number
```

#### 63. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7204-L7208` → after: `L2489-L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2489-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2489-L2490) · [Before (L7204-L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7204-L7208)

```diff
- 	 * Set client option \`touchscreenActionButton\` to take effect
- 	 * Called when a player presses the touchscreen action button
- 	 * Called for both touchDown and touchUp
- 	 * @param playerId - The id of the player pressing the touchscreen action button
- 	 * @param touchDown - Whether the touchscreen action button was pressed or released
+ 	 * Ease towards a new framing over about this many ms as the targets move, and round to a new angle from the frame
+ 	 * camera this one replaces. 0 sticks to them. Default 400.
```

#### 64. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7210-L7211` → after: `L2492-L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2492-L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2492-L2502) · [Before (L7210-L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7210-L7211)

```diff
- 	var onTouchscreenActionButton: (playerId: PlayerId, touchDown: boolean) => void
- 
+ 	smoothMs?: number
+ }
+ type CameraSettingsBase = {
+ 	/** Blend from the current view into this camera over this many ms. 0 cuts straight to it. */
+ 	blendInMs?: number
+ 	/** How the blend eases. Default "easeInOut". */
+ 	blendEasing?: CameraEasing
+ 	/** Fade into this camera through a colour instead, cutting to it under the colour: blendInMs is ignored. */
+ 	transition?: CameraTransition
+ 	/** Cinematic bars across the top and bottom of the screen while this camera is on. Presses on the bars do nothing in the world, and dragging on them doesn't turn the camera. */
+ 	letterbox?: boolean
```

#### 65. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7213-L7217` → after: `L2504-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2504-L2505) · [Before (L7213-L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7213-L7217)

```diff
- 	 * Called when a player claims a task
- 	 * @param playerId - The id of the player claiming the task
- 	 * @param taskId - The id of the task being claimed
- 	 * @param isPromoTask - Whether the task is a promo task
- 	 * @param claimedRewards - The rewards claimed by the player
+ 	 * Hide the HUD while this camera is on. Nametags, dialogue, the chat being typed in, the respawn and sleeping screens,
+ 	 * QTEs, UI requests, touch controls and the settings button on touch screens stay.
```

#### 66. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7219-L7220` → after: `L2507-L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2507-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2507-L2509) · [Before (L7219-L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7219-L7220)

```diff
- 	var onTaskClaimed: (playerId: string, taskId: any, isPromoTask: any, claimedRewards: any) => any
- 
+ 	hideHud?: boolean
+ 	/** Field of view in degrees. Omit to keep the player's own. */
+ 	fov?: number
```

#### 67. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7222-L7230` → after: `L2511-L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2511-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2511-L2514) · [Before (L7222-L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7222-L7230)

```diff
- 	 * Called when a chunk is first loaded
- 	 * API Methods that modify the chunk like setBlock cannot be used here to make
- 	 * persisted changes, and will introduce client-server desync most cases,
- 	 * but might have some creative uses if you know what you're doing.
- 	 * For most use cases, consider using another callback e.g. tick.
- 	 * @param chunkId - The id of the chunk being loaded
- 	 * @param chunk - The chunk being loaded, which can be modified by this callback
- 	 * For world code callbacks this value will always be null.
- 	 * @param wasPersistedChunk - Whether the chunk was persisted
+ 	 * Which way the player's body faces while this camera is on. Movement is always relative to the camera.
+ 	 * "movement" (default): turns to face where they walk. "camera": faces where the camera looks.
+ 	 * "cursor": shows the mouse cursor and faces what is under it, or what was last tapped on touch screens, aiming
+ 	 * blocks, hits and shots there; the mouse no longer turns the camera. For top-down and isometric games.
```

#### 68. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7232-L7233` → after: `L2516-L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2516-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2516-L2606) · [Before (L7232-L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7232-L7233)

```diff
- 	var onChunkLoaded: (chunkId: string, chunk: LoadedChunk, wasPersistedChunk: boolean) => void
- 
+ 	playerFacing?: CameraPlayerFacing
+ 	playerLook?: CameraPlayerLook
+ }
+ type CameraEasing = (_TypeOf["CAMERA_EASING_NAMES"])[number] | [number, number, number, number]
+ type CameraTransition = {
+ 	/** "#rrggbb". Default "#000000". A fade already showing keeps its colour until the screen clears. */
+ 	colour?: string
+ 	/** At least 200. */
+ 	outMs: number
+ 	/** Default 0. */
+ 	holdMs?: number
+ 	/** At least 200. */
+ 	inMs: number
+ }
+ type CameraPlayerFacing = (_TypeOf["CAMERA_PLAYER_FACINGS"])[number]
+ type CameraPlayerLook = {
+ ... (75 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7235` → after: `L2608-L2609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2608-L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2608-L2609) · [Before (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7235)

```diff
- 	 * Called when a player requests a chunk
+ 	 * The search box. \`item\` is the player's searched item; \`extra\` and \`excluded\` adjust the creative items it finds;
+ 	 * \`names\` holds the names this player sees for items a game renamed
```

#### 70. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7237-L7238` → after: `L2611-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2611-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2611-L2851) · [Before (L7237-L7238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7237-L7238)

```diff
- 	var onPlayerRequestChunk: (playerId: PlayerId, chunkX: number, chunkY: number, chunkZ: number, chunkId: string) => void
- 
+ 	| { kind: "search"; item: string | null; extra?: readonly string[]; excluded?: readonly string[]; names?: Readonly<Record<string, string>> }
+ 	/** A plain listing or order box for the searched item. \`owned\` is how many the player has */
+ 	| { kind: "creator"; item: string | null; step: "quantity" | "price"; owned: number; quantity?: number; fee?: SmpListingFeeRule }
+ 	/** A listing box for one enchanted copy, listed whole */
+ 	| { kind: "enchantedCreator"; item: string; quantity: number }
+ 	/** A market listing. \`seller\` is null for the player's own */
+ 	| { kind: "listing"; item: string; quantity: number; pricePerItem: number; seller: string | null; expiresAt: number }
+ 	/** An Instant Sell stack */
+ 	| { kind: "sell"; item: string; quantity: number; pricePerItem: number }
+ 	/** Gold from a sale, or items back from an expired listing */
+ 	| { kind: "collect"; type: "sold" | "expired"; item: string; quantity: number; pricePerItem: number }
+ 	/** One of the player's active listings */
+ 	| { kind: "myListing"; item: string; quantity: number; pricePerItem: number; expiresAt: number }
+ 	/** A buy order. \`creator\` is null for the player's own; \`owned\` is how many the player could deliver; \`processing\` while a delivery to it is on its way */
+ 	| { kind: "order"; item: string; wanted: number; delivered: number; pricePerItem: number; creator: string | null; owned: number; processing?: boolean }
+ 	/** One of the player's orders, or delivered items left over from one */
+ ... (225 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7240` → after: `L2853-L2854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2853-L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2853-L2854) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7240)

```diff
- 	 * Called when an item drop is created
+ 	 * Whether each frame fades into the next (Minecraft's \`interpolate\`), rather than cutting to it: one in-between frame
+ 	 * per pair, at half the interval, for intervals of 200 ms or more. Default true.
```

#### 72. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7242-L7243` → after: `L2856-L2894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2856-L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2856-L2894) · [Before (L7242-L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7242-L7243)

```diff
- 	var onItemDropCreated: (itemEId: EntityId, itemName: string, itemAmount: number, x: number, y: number, z: number) => void
- 
+ 	interpolateFrames?: boolean
+ }
+ type HarvestType = "granule" | "wood" | "rock" | "cuttable"
+ type BlockMetadataModelType =
+ 	| "CentreCross"
+ 	| "SquareSided"
+ 	| "CustomPlanes"
+ 	| "CustomModel"
+ 	| "Slab"
+ 	| "Stairs"
+ 	| "door"
+ 	| "trapdoor"
+ 	| "rotatableOffset"
+ 	| "rotatable"
+ 	| "fence"
+ 	| "fenceGate"
+ ... (23 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7245-L7247` → after: `L2896-L2897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2896-L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2896-L2897) · [Before (L7245-L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7245-L7247)

```diff
- 	 * Called when a player starts charging an item
- 	 * @param playerId - The id of the player charging the item
- 	 * @param itemName - The name of the item being charged
+ 	 * ms from equipping to the first shot. A game overriding fireRate, fireRateWithHeldTouch or cadenceMs without its own
+ 	 * equipDelay waits the fire interval less 0.9 of cadenceMs instead
```

#### 74. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7249-L7250` → after: `L2899-L3258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R2899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L2899-L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L2899-L3258) · [Before (L7249-L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7249-L7250)

```diff
- 	var onPlayerStartChargingItem: (playerId: PlayerId, itemName: string) => void | "preventCharge"
- 
+ 	equipDelay?: number
+ 	burstCount?: number
+ 	burstDelay?: number
+ 	damage: number
+ 	shotPelletCount?: number
+ 	reloadTime?: number
+ 	clipSize: number
+ 	reloadBulletsIndividually?: boolean
+ 	bulletReloadTime?: number
+ 	cockTime?: number
+ 	tagSpeedMult: number
+ 	subsequentTagSpeedReductionScalar: number
+ 	inaccuracyStanding: number
+ 	inaccuracyFromShot: number
+ 	inaccuracyMovement: number
+ 	yVelocityInaccuracy: number
+ ... (344 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7252` → after: `L3260-L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3260-L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3260-L3262) · [Before (L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7252)

```diff
- 	 * Called when a player finishes charging an item
+ 	 * Keep the mob in this state until you set another one: it never times out, ignores nearby players and doesn't
+ 	 * fight back when hit. It still leaves the state when the state ends itself, such as when its target leaves the
+ 	 * game or turns invisible, or when it is tamed. A charge can't be held: it lasts one leg as usual.
```

#### 76. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7254-L7255` → after: `L3264-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3264-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3264-L3491) · [Before (L7254-L7255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7254-L7255)

```diff
- 	var onPlayerFinishChargingItem: (playerId: PlayerId, used: boolean, itemName: string, duration: number) => void
- 
+ 	hold?: boolean
+ }
+ type MeshEntityType = keyof MeshEntityOpts
+ type MeshEntityOpts = {
+ 	Box: CommonMeshEntityOpts & {
+ 		width: number
+ 		height: number
+ 		depth: number
+ 		diffuseColor?: number[]
+ 		emissiveColor?: number[]
+ 		backFaceCulling?: boolean // Default true
+ 		texture?: string // Can be a blockname. Wraps every one block
+ 		faceUV?: number[][]
+ 		animateTexture?: boolean // If true, \`texture\` must be an animated block name (e.g. "Lava", "Red Portal") and the Box cycles through its frames.
+ 	}
+ 	BloxdBlock: CommonMeshEntityOpts & {
+ ... (212 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7257-L7260` → after: `L3493-L3495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3493-L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3493-L3495) · [Before (L7257-L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7257-L7260)

```diff
- 	 * Called once when a fishing hook first enters water. Coordinates are the bob's position at water entry.
- 	 * Return "preventFish" to cancel, or { caughtItemName?, biteDelayMs?, qte? } to select the fish and override the rod's bite delay
- 	 * and nine-second timed-click QTE. Default delays are Rusty 7–9 seconds, Sturdy 5–7, and Carbon/other rods 2–4.
- 	 * The selected fish is fixed for the attempt; omitting caughtItemName uses the engine's default fish selection.
+ 	 * How hard the rider pushes off the ground when jumping, compared to a normal jump. \`0\` = cannot jump.
+ 	 * Multiplies the \`jumpAmount\` client option rather than replacing it, and heavier types need a bigger
+ 	 * value to reach the same height.
```

#### 78. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7262-L7263` → after: `L3497-L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3497-L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3497-L3503) · [Before (L7262-L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7262-L7263)

```diff
- 	var onPlayerAttemptFish: (playerId: PlayerId, rodName: string, x: number, y: number, z: number) => void | FishingAttemptOptions | "preventFish"
- 
+ 	jumpMultiplier: number
+ 	/** An upward shove the moment the rider uses the vehicle, like a balloon lifting off. \`0\` = none. */
+ 	upwardImpulseOnUse: number
+ 	/** Whether it climbs one-block steps by itself, rather than the rider jumping them. */
+ 	canAutoStep: boolean
+ 	/** Overrides \`canAutoStep\` for particular blocks, by block name. Unlisted blocks use \`canAutoStep\`. */
+ 	canAutoStepByBlock: Readonly<Record<BlockName, boolean>>
```

#### 79. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7265-L7269` → after: `L3505-L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3505-L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3505-L3506) · [Before (L7265-L7269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7265-L7269)

```diff
- 	 * Called after the fishing QTE succeeds and the bob/session have been removed.
- 	 * Coordinates are the fishing position captured at water entry. caughtItemName is the item selected for the attempt.
- 	 * Returning nothing gives one of that item, or drops it if the inventory is full.
- 	 * Return "preventDrop" to suppress the default reward and award custom catches here instead.
- 	 * Return "preventItemGrant" to deliver the item yourself while keeping the default catch effects.
+ 	 * Where the rider sits, as \`[x, y, z]\` blocks from the middle of the vehicle. A rideable mob defaults
+ 	 * to its own ride height rather than to this type's value.
```

#### 80. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7271-L7272` → after: `L3508-L3510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3508-L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3508-L3510) · [Before (L7271-L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7271-L7272)

```diff
- 	var onPlayerSucceededFishCatch: (playerId: PlayerId, rodName: string, x: number, y: number, z: number, caughtItemName: ItemName) => void | "preventDrop" | "preventItemGrant"
- 
+ 	riderOffset: Pos
+ 	/** How the rider's body is posed while riding. */
+ 	pose: PlayerPose
```

#### 81. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7274-L7276` → after: `L3512-L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3512-L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3512-L3514) · [Before (L7274-L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7274-L7276)

```diff
- 	 * Called after the fishing QTE fails or its time window expires, after removing the bob/session.
- 	 * Coordinates are the fishing position captured at water entry. Retracting, switching rods, dying, and leaving cancel silently.
- 	 * caughtItemName is the item selected for the failed attempt; no reward is given.
+ 	 * A badge shown to the rider for as long as they ride. \`null\` = none. \`icon\` is an ingame icon or an
+ 	 * item name. \`name\` must be one that a physics type already uses, such as \`"Driving"\` or \`"Boating"\`,
+ 	 * because only those are cleared again when the rider gets off.
```

#### 82. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7278-L7282` → after: `L3516-L3526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3516-L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3516-L3526) · [Before (L7278-L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7278-L7282)

```diff
- 	var onPlayerFailedFishCatch: (playerId: PlayerId, rodName: string, x: number, y: number, z: number, caughtItemName: ItemName) => void
- 
- 	
- 	var onPlayerFinishQTE: (playerId: PlayerId, qteId: QTERequestId, result: boolean) => void
- 
+ 	effect: { name: string; icon: string; duration?: number } | null
+ 	/** How quickly it slows to a stop once the rider stops steering. Bigger = stops sooner. */
+ 	standingFriction: number
+ 	/** Its top speed, as a multiplier on normal walking speed. \`0\` = it cannot move. */
+ 	speedMultiplier: number
+ 	/** An extra speed multiplier used while on solid ground. */
+ 	landSpeedMultiplier: number
+ 	/** An extra speed multiplier used while in water or lava. */
+ 	fluidSpeedMultiplier: number
+ 	/** An extra speed multiplier used while in the air. */
+ 	airSpeedMultiplier: number
```

#### 83. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7284-L7286` → after: `L3528-L3530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3528-L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3528-L3530) · [Before (L7284-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7284-L7286)

```diff
- 	 * Called when a player opens or closes the shop menu
- 	 * @param playerId - The id of the player whose shop menu changed
- 	 * @param isOpen - Whether the shop menu is now open
+ 	 * Extra speed multipliers for the block underfoot, by block name. Solid ground only, and stacks with
+ 	 * \`speedMultiplier\` and the land/fluid/air multiplier. When several listed blocks are underfoot, the
+ 	 * value furthest from \`1\` wins.
```

#### 84. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7288-L7292` → after: `L3532-L3540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3532-L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3532-L3540) · [Before (L7288-L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7288-L7292)

```diff
- 	var onPlayerToggledShopMenu: (playerId: PlayerId, isOpen: boolean) => void
- 
- 	/** Called after a player plays an emote from the emote wheel. */
- 	var onPlayerPlayedEmote: (playerId: PlayerId, emoteId: string) => void
- 
+ 	speedMultiplierByBlock: Readonly<Record<BlockName, number>>
+ 	/** Caps how hard it is pushed while far below the speed it is aiming for, so it takes longer to get going. \`0\` = no cap. */
+ 	maxPushDistance: number
+ 	/** How hard steering pushes it. Bigger = it speeds up and changes direction more sharply. */
+ 	movementForceMultiplier: number
+ 	/** Turns off the usual steering-driven movement, as for a sleeping player. */
+ 	disableBaseMovement: boolean
+ 	/** Whether footstep sounds are silenced. */
+ 	disableFootstepSounds: boolean
```

#### 85. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7294-L7297` → after: `L3542-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3542-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3542-L3543) · [Before (L7294-L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7294-L7297)

```diff
- 	 * Called when a player enters a vehicle
- 	 * @param playerId - The id of the player that entered the vehicle
- 	 * @param vehicleType - The type of the vehicle
- 	 * @param vehicleEId - The id of the vehicle
+ 	 * How bouncy walls are: \`0\` stops dead, \`1\` keeps all its speed. Stacks with the \`bounciness\` client
+ 	 * option. Rebounds have a floor speed, so slow bumps come back faster than they arrived.
```

#### 86. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7299-L7300` → after: `L3545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3545) · [Before (L7299-L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7299-L7300)

```diff
- 	var onPlayerEnteredVehicle: (playerId: PlayerId, vehicleType: MeshEntityVehicleType, vehicleEId: EntityId) => void
- 
+ 	horizontalBounciness: number
```

#### 87. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7302-L7305` → after: `L3547-L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3547-L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3547-L3548) · [Before (L7302-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7302-L7305)

```diff
- 	 * Called when a player exits a vehicle
- 	 * @param playerId - The id of the player that exited the vehicle
- 	 * @param vehicleType - The type of the vehicle
- 	 * @param vehicleEId - The id of the vehicle
+ 	 * How bouncy the floor is: \`0\` lands flat, \`1\` bounces back as fast as it fell. Stacks with the
+ 	 * \`bounciness\` client option, and has the same rebound floor as \`horizontalBounciness\`.
```

#### 88. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7307-L7308` → after: `L3550-L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3550-L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3550-L3552) · [Before (L7307-L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7307-L7308)

```diff
- 	var onPlayerExitedVehicle: (playerId: PlayerId, vehicleType: MeshEntityVehicleType, vehicleEId: EntityId) => void
- 
+ 	verticalBounciness: number
+ 	/** How fast it must hit a wall, in blocks per second, before \`horizontalBounciness\` applies. \`0\` = any contact. */
+ 	minHorizontalSpeedToBounce: number
```

#### 89. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7310-L7315` → after: `L3554-L3555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3554-L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3554-L3555) · [Before (L7310-L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7310-L7315)

```diff
- 	 * Called after a player successfully buys a shop item
- 	 * @param playerId - The id of the player that bought the item
- 	 * @param categoryKey - The shop category key
- 	 * @param itemKey - The shop item key
- 	 * @param item - The resolved shop item (with per-player overrides applied, internal properties stripped)
- 	 * @param userInput - The user input provided, if the item has a userInput config
+ 	 * How fast it must be falling, in blocks per second, before \`verticalBounciness\` applies. \`0\` bounces
+ 	 * off any contact, leaving a bouncy vehicle jiggling in place.
```

#### 90. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7317-L7318` → after: `L3557-L3561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3557-L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3557-L3561) · [Before (L7317-L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7317-L7318)

```diff
- 	var onPlayerBoughtShopItem: (playerId: PlayerId, categoryKey: ShopCategoryKey, itemKey: ShopItemKey, item: BoughtShopItem, userInput?: string) => void
- 
+ 	minVerticalSpeedToBounce: number
+ 	/** Shakes the camera when it hits a wall hard enough; it need not bounce. \`null\` = no shake. See \`ImpactCameraShakeOpts\`. */
+ 	horizontalImpactCameraShake: ImpactCameraShakeOpts | null
+ 	/** Shakes the camera when it hits a floor or ceiling hard enough; it need not bounce. \`null\` = no shake. See \`ImpactCameraShakeOpts\`. */
+ 	verticalImpactCameraShake: ImpactCameraShakeOpts | null
```

#### 91. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7320-L7322` → after: `L3563-L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3563-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3563-L3564) · [Before (L7320-L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7320-L7322)

```diff
- 	 * Called when a player presses a custom button
- 	 * @param playerId - The id of the player pressing the button
- 	 * @param buttonId - The id of the button pressed
+ 	 * Makes it steer like a car: left and right turn it rather than sliding it sideways. \`null\` moves
+ 	 * freely in any direction, like a walking player. See \`SteeringOpts\`.
```

#### 92. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7324-L7325` → after: `L3566-L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3566-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3566-L3570) · [Before (L7324-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7324-L7325)

```diff
- 	var onPlayerPressedButton: (playerId: PlayerId, buttonId: string) => void
- 
+ 	steering: SteeringOpts | null
+ 	/** Locks the direction it faces, in radians, ignoring the camera. \`null\` = it faces wherever the camera or steering points. */
+ 	fixedHeading: number | null
+ 	/** Makes it skip across water like a stone once it is fast enough. \`null\` = it floats normally. See \`FluidSkipOpts\`. */
+ 	fluidSkip: FluidSkipOpts | null
```

#### 93. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7327-L7329` → after: `L3572-L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3572-L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3572-L3573) · [Before (L7327-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7327-L7329)

```diff
- 	 * Called when a player releases a custom button
- 	 * @param playerId - The id of the player releasing the button
- 	 * @param buttonId - The id of the button released
+ 	 * Lets it fly once mid-air and descending. Supported movement types: \`GLIDING\` and \`FLOATING\`.
+ 	 * \`null\` = it cannot fly. See \`AirborneModeOpts\`.
```

#### 94. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7331-L7332` → after: `L3575-L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3575-L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3575-L3577) · [Before (L7331-L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7331-L7332)

```diff
- 	var onPlayerReleasedButton: (playerId: PlayerId, buttonId: string) => void
- 
+ 	airborneMode: AirborneModeOpts | null
+ 	/** How it moves while flying. \`null\` = it steers the same way it does on the ground. See \`AirborneMovementOpts\`. */
+ 	airborneMovement: AirborneMovementOpts | null
```

#### 95. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7334-L7338` → after: `L3579-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3579-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3579-L3580) · [Before (L7334-L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7334-L7338)

```diff
- 	 * Called when a player responds to a UI request.
- 	 *
- 	 * @param playerId - The id of the player responding to the UI request.
- 	 * @param id - The id of the UI request.
- 	 * @param response - The response to the UI request.
+ 	 * Caps how fast it falls while flying. Only used when \`airborneMovement\` is \`"heading"\`.
+ 	 * \`null\` = it falls at full speed. See \`FallSpeedLimitOpts\`.
```

#### 96. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7340-L7341` → after: `L3582-L3608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3582-L3608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3582-L3608) · [Before (L7340-L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7340-L7341)

```diff
- 	var onUiRequestResponded: (playerId: PlayerId, id: UiRequestId, response: boolean) => void
- 
+ 	airborneFallSpeedLimit: FallSpeedLimitOpts | null
+ }>
+ type AllPhysicsSettings = {
+ 	[0]: {}
+ 	[1]: {}
+ 	[2]: {}
+ 	[3]: {}
+ 	[4]: {}
+ 	[5]: {}
+ 	[6]: {}
+ 	[7]: {}
+ }
+ type ImpactCameraShakeOpts = Readonly<{
+ 	/** The crash speed, in blocks per second, needed to shake at all, so small bumps are ignored. */
+ 	minSpeed: number
+ 	/** How much shake each extra block per second adds. Shake runs from \`0\` (still) to \`1\` (violent). */
+ ... (11 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7343-L7353` → after: `L3610-L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3610-L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3610-L3611) · [Before (L7343-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7343-L7353)

```diff
- 	 * Called every so often.
- 	 * You should save custom db values/s3 objects here.
- 	 * Persisted items ARE saved on graceful shutdown (e.g. uncaught error, update, etc),
- 	 * but this helps prevent large data-loss on non-graceful shutdowns.
- 	 */
- 	var doPeriodicSave: () => void
- 
- 	/** Load another world-code file by relative path (./ or ../).
- 	 * Does not work at runtime - Code is bundled before being run.
- 	 * index.js/index.ts cannot be required: they hold the callbacks the engine runs.
- 	 * No typing is available for the required file — use \`import\` and \`export\` syntax for full typing support.
+ 	 * How much it grips the ground. \`0\` slides sideways like a hovercraft on ice; bigger values make it
+ 	 * follow its nose round corners. Solid ground only, unless \`gripInFluid\` is on.
```

#### 98. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L7355-L7360` → after: `L3613-L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R3613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L3613-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/295.js#L3613-L4269) · [Before (L7355-L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/295.js#L7355-L7360)

```diff
- 	function require(id: string): any
- }
- 
- export {}
- `
-   }
+ 	gripStrength: number
+ 	/** Whether it also grips while floating in water, so a boat can corner like a kart. */
+ 	gripInFluid: boolean
+ }>
+ type FluidSkipOpts = Readonly<{
+ 	/** How fast it must be going, in blocks per second, to start skipping. */
+ 	minSpeed: number
+ 	/** How much of its speed above \`minSpeed\` becomes upward launch speed. Bigger = higher skips. */
+ 	launchSpeedFraction: number
+ 	/** How snappily it leaves the water. Bigger = a sharp pop; smaller = a slow heave. */
+ 	launchApproachRate: number
+ }>
+ type AirborneModeOpts = Readonly<{
+ 	/** Which movement type to switch to: \`GLIDING\` for gliders, \`FLOATING\` for balloons. */
+ 	activeMovementType: MovementType
+ 	/** How long the flying lasts, in milliseconds, before it drops the rider. \`null\` = no limit. */
+ ... (641 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/296.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/296.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486)

#### 1. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L4-L13` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/296.js#L4) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/296.js#L4-L13)

```diff
-   40957: (kk, ek, ik) => {
-     function Dk() {
-       return Dk = Object.assign ? Object.assign.bind() : function(kk) {
-         for (var ek = 1; ek < arguments.length; ek++) {
-           var ik = arguments[ek];
-           for (var Dk in ik)({}).hasOwnProperty.call(ik, Dk) && (kk[Dk] = ik[Dk])
-         }
-         return kk
-       }, Dk.apply(null, arguments)
-     }
+   41188: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L15-L16` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/296.js#L6) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/296.js#L15-L16)

```diff
-       e: () => xk,
-       g: () => rk
+       d: () => QC
```

#### 3. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L18-L230` → after: `L8-L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L8-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/296.js#L8-L7359) · [Before (L18-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/296.js#L18-L230)

```diff
-     var fk = !1;
-     try {
-       fk = "undefined" !== typeof localStorage
-     } catch (Uk) {}
-     var Sk = "undefined" !== typeof process,
-       bk = fk && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Sk && {
-         NODE_ENV: "production",
-         PUBLIC_URL: "",
-         WDS_SOCKET_HOST: void 0,
-         WDS_SOCKET_PATH: void 0,
-         WDS_SOCKET_PORT: void 0,
-         FAST_REFRESH: !0,
-         REACT_APP_DEV_URLS: "false"
-       }.DEBUG ? console.log : function(kk) {
-         return ""
-       };
- ... (197 more removed lines; see GitHub link above)
+     const QC = String.raw`interface Map<K, V> {
+     clear(): void;
+     /**
+      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
+      */
+     delete(key: K): boolean;
+     /**
+      * Executes a provided function once per each key/value pair in the Map, in insertion order.
+      */
+     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
+     /**
+      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
+      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
+      */
+     get(key: K): V | undefined;
+     /**
+ ... (7336 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/297.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/297.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3)

#### 1. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L4-L122489` → after: `L4-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L4-L32) · [Before (L4-L122489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L4-L122489)

```diff
-   40972: (kk, ek, ik) => {
-     var Dk = "/index.js",
-       fk = {};
-     (kk => {
-       var ek = Object.defineProperty,
-         fk = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (kk, ik) => {
-           for (var Dk in ik) ek(kk, Dk, {
-             get: ik[Dk],
-             enumerable: !0
-           })
-         }),
-         Sk = {};
-       fk(Sk, {
-         ANONYMOUS: () => Z8,
-         AccessFlags: () => KS,
-         AssertionLevel: () => Li,
- ... (122470 more removed lines; see GitHub link above)
+   41191: (CC, zC, ZC) => {
+     function QC() {
+       return QC = Object.assign ? Object.assign.bind() : function(CC) {
+         for (var zC = 1; zC < arguments.length; zC++) {
+           var ZC = arguments[zC];
+           for (var QC in ZC)({}).hasOwnProperty.call(ZC, QC) && (CC[QC] = ZC[QC])
+         }
+         return CC
+       }, QC.apply(null, arguments)
+     }
+     ZC.d(zC, {
+       e: () => NC,
+       h: () => fC
+     });
+     var wC = !1;
+     try {
+ ... (13 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L122492-L123061` → after: `L35-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L35-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L35-L48) · [Before (L122492-L123061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L122492-L123061)

```diff
-       function ICk(kk, ek) {
-         return {
-           seq: 0,
-           type: "event",
-           event: kk,
-           body: ek
-         }
-       }
- 
-       function zCk(kk) {
-         return ii((kk => {
-           let {
-             textSpan: ek
-           } = kk;
-           return ek.start + 100003 * ek.length
-         }), o2(kk))
- ... (554 more removed lines; see GitHub link above)
+     function fC(CC, zC, ZC, wC, bC) {
+       void 0 === wC && (wC = {});
+       var nC = QC({}, FC(ZC), wC),
+         fC = function(CC, zC, ZC, wC, bC) {
+           var nC = [].concat(zC),
+             fC = MC(CC, ZC, wC),
+             oC = fC.compilerHost,
+             qC = fC.updateFile,
+             FC = fC.deleteFile,
+             WC = new Map,
+             NC = 0,
+             gC = QC({}, oC, {
+               getProjectVersion: function() {
+                 return NC.toString()
```

#### 3. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L123063-L123371` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L50-L51) · [Before (L123063-L123371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L123063-L123371)

```diff
-               mk = () => {
-                 if (this.changeSeq !== fk) return;
-                 let ik, Sk = ek[bk];
-                 if (Si(Sk) ? Sk = this.toPendingErrorCheck(Sk) : "lw" in Sk && (ik = Sk.lw, Sk = this.toPendingErrorCheck(Sk.file)), !Sk) return rk();
-                 const {
-                   fileName: mk,
-                   project: Mk
-                 } = Sk;
-                 return bCk(Mk), Mk.containsFile(mk, Dk) && (this.syntacticCheck(mk, Mk), this.changeSeq === fk) ? 0 !== Mk.projectService.serverMode ? rk() : ik ? kk.immediate("regionSemanticCheck", (() => {
-                   const ek = this.projectService.getScriptInfoForNormalizedPath(mk);
-                   ek && this.regionSemanticCheck(mk, Mk, ik.map((kk => this.getRange({
-                     file: mk,
-                     ...kk
-                   }, ek)))), this.changeSeq === fk && kk.immediate("semanticCheck", (() => Pk(mk, Mk)))
-                 })) : void kk.immediate("semanticCheck", (() => Pk(mk, Mk))) : void 0
-               };
- ... (293 more removed lines; see GitHub link above)
+               getCompilationSettings: function() {
+                 return ZC
```

#### 4. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L123373-L123775` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L53-L54) · [Before (L123373-L123775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L123373-L123775)

```diff
-               end: {
-                 line: Sk.line + 1,
-                 offset: Sk.character + 1
-               }
-             }
-           }
-           toFileSpanWithContext(kk, ek, ik, Dk) {
-             const fk = this.toFileSpan(kk, ek, Dk),
-               Sk = ik && this.toFileSpan(kk, ik, Dk);
-             return Sk ? {
-               ...fk,
-               contextStart: Sk.start,
-               contextEnd: Sk.end
-             } : fk
-           }
-           getTypeDefinition(kk) {
- ... (387 more removed lines; see GitHub link above)
+               getCustomTransformers: function() {
+                 return bC
```

#### 5. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L123777-L124121` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L56-L57) · [Before (L123777-L124121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L123777-L124121)

```diff
-               bk = ECk(ik, this.getDefaultProject(kk), Sk, Sk, hCk, (kk => (this.logger.info(`Finding references to file ${Dk} in project ${kk.getProjectName()}`), kk.getLanguageService().getFileReferences(Dk))));
-             let rk;
-             if (Di(bk)) rk = bk;
-             else {
-               rk = [];
-               const kk = zCk(this.host.useCaseSensitiveFileNames);
-               bk.forEach((ek => {
-                 for (const ik of ek) kk.has(ik) || (rk.push(ik), kk.add(ik))
-               }))
-             }
-             if (!ek) return rk;
-             return {
-               refs: rk.map((kk => kAk(this.projectService, kk, fk))),
-               symbolName: `"${kk.file}"`
-             }
-           }
- ... (329 more removed lines; see GitHub link above)
+               getScriptFileNames: function() {
+                 return nC.slice()
```

#### 6. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L124123-L124872` → after: `L59-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L59-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L59-L114) · [Before (L124123-L124872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L124123-L124872)

```diff
-               eK: kk.insertString
-             })))
-           }
-           reload(kk) {
-             const ek = yYk(kk.file),
-               ik = void 0 === kk.tmpfile ? void 0 : yYk(kk.tmpfile),
-               Dk = this.projectService.getScriptInfoForNormalizedPath(ek);
-             Dk && (this.changeSeq++, Dk.reloadFromFile(ik))
-           }
-           saveToTmp(kk, ek) {
-             const ik = this.projectService.getScriptInfo(kk);
-             ik && ik.saveTo(ek)
-           }
-           closeClientFile(kk) {
-             if (!kk) return;
-             const ek = br(kk);
- ... (734 more removed lines; see GitHub link above)
+               getScriptSnapshot: function(zC) {
+                 var ZC = CC.readFile(zC);
+                 if (ZC && "string" === typeof ZC) return wC.ScriptSnapshot.fromString(ZC)
+               },
+               getScriptVersion: function(CC) {
+                 return WC.get(CC) || "0"
+               },
+               writeFile: CC.writeFile
+             }),
+             SC = {
+               languageServiceHost: gC,
+               updateFile: function(CC) {
+                 NC++, WC.set(CC.fileName, NC.toString()), nC.includes(CC.fileName) || nC.push(CC.fileName), qC(CC)
+               },
+               deleteFile: function(CC) {
+                 NC++, WC.set(CC.fileName, NC.toString());
+ ... (40 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L124876-L124899` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L119-L121) · [Before (L124876-L124899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L124876-L124899)

```diff
-       function kAk(kk, ek, ik) {
-         let {
-           fileName: Dk,
-           textSpan: fk,
-           contextSpan: Sk,
-           isWriteAccess: bk,
-           isDefinition: rk
-         } = ek, {
-           disableLineTextInReferences: Pk
-         } = ik;
-         const mk = YD.checkDefined(kk.getScriptInfo(Dk)),
-           Mk = NCk(fk, Sk, mk),
-           Kk = Pk ? void 0 : function(kk, ek) {
-             const ik = kk.lineToTextSpan(ek.start.line - 1);
-             return kk.getSnapshot().getText(ik.start, JP(ik)).replace(/\r|\n/g, "")
-           }(mk, Mk);
- ... (8 more removed lines; see GitHub link above)
+     function oC(CC) {
+       throw new Error("Method '" + CC + "' is not implemented.")
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L124901-L124949` → after: `L123-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L123-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L123-L148) · [Before (L124901-L124949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L124901-L124949)

```diff
-       function eAk(kk) {
-         return void 0 === kk || kk && "object" === typeof kk && "string" === typeof kk.exportName && (void 0 === kk.fileName || "string" === typeof kk.fileName) && (void 0 === kk.ambientModuleName || "string" === typeof kk.ambientModuleName && (void 0 === kk.isPackageJsonImport | … [truncated]
-       }
-       var iAk = (kk => (kk[kk.PreStart = 0] = "PreStart", kk[kk.Start = 1] = "Start", kk[kk.Entire = 2] = "Entire", kk[kk.Mid = 3] = "Mid", kk[kk.End = 4] = "End", kk[kk.PostEnd = 5] = "PostEnd", kk))(iAk || {}),
-         DAk = class {
-           constructor() {
-             this.goSubtree = !0, this.lineIndex = new PAk, this.endBranch = [], this.state = 2, this.initialText = "", this.trailingText = "", this.lineIndex.root = new mAk, this.startPath = [this.lineIndex.root], this.stack = [this.lineIndex.root]
-           }
-           get done() {
-             return !1
-           }
-           insertLines(kk, ek) {
-             ek && (this.trailingText = ""), kk = kk ? this.initialText + kk + this.trailingText : this.initialText + this.trailingText;
-             const ik = PAk.linesFromText(kk).lines;
-             let Dk, fk;
-             ik.length > 1 && "" === ik[ik.length - 1] && ik.pop();
- ... (33 more removed lines; see GitHub link above)
+     function qC(CC, zC) {
+       return function() {
+         for (var ZC = arguments.length, QC = new Array(ZC), wC = 0; wC < ZC; wC++) QC[wC] = arguments[wC];
+         var bC = zC.apply(void 0, QC),
+           fC = "string" === typeof bC ? bC.slice(0, 80) + "..." : bC;
+         return nC.apply(void 0, ["> " + CC].concat(QC)), nC("< " + fC), bC
+       }
+     }
+     var FC = function(CC) {
+         return QC({}, CC.getDefaultCompilerOptions(), {
+           jsx: CC.JsxEmit.React,
+           strict: !0,
+           esModuleInterop: !0,
+           module: CC.ModuleKind.ESNext,
+           suppressOutputPathCheck: !0,
+           skipLibCheck: !0,
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L124951-L124977` → after: `L150-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L150-L154) · [Before (L124951-L124977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L124951-L124977)

```diff
-             function rk(kk) {
-               return kk.isLeaf() ? new MAk("") : new mAk
-             }
-             switch (2 === this.state && 1 === fk && (this.state = 1, this.branchNode = Sk, this.lineCollectionAtBranch = ik), fk) {
-               case 0:
-                 this.goSubtree = !1, 4 !== this.state && Sk.add(ik);
-                 break;
-               case 1:
-                 4 === this.state ? this.goSubtree = !1 : (bk = rk(ik), Sk.add(bk), this.startPath.push(bk));
-                 break;
-               case 2:
-                 4 !== this.state ? (bk = rk(ik), Sk.add(bk), this.startPath.push(bk)) : ik.isLeaf() || (bk = rk(ik), Sk.add(bk), this.endBranch.push(bk));
-                 break;
-               case 3:
-                 this.goSubtree = !1;
-                 break;
- ... (11 more removed lines; see GitHub link above)
+     function NC(CC) {
+       return {
+         args: [],
+         createDirectory: function() {
+           return oC("createDirectory")
```

#### 10. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L124979-L124985` → after: `L156-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L156-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L156-L162) · [Before (L124979-L124985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L124979-L124985)

```diff
-         fAk = class {
-           constructor(kk, ek, ik) {
-             this.pos = kk, this.deleteLen = ek, this.insertedText = ik
-           }
-           getTextChangeRange() {
-             return ym(Hm(this.pos, this.deleteLen), this.insertedText ? this.insertedText.length : 0)
-           }
+         directoryExists: qC("directoryExists", (function(zC) {
+           return Array.from(CC.keys()).some((function(CC) {
+             return CC.startsWith(zC)
+           }))
+         })),
+         exit: function() {
+           return oC("exit")
```

#### 11. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L124987-L125069` → after: `L164-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L164-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L164-L168) · [Before (L124987-L125069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L124987-L125069)

```diff
-         SAk = class kk {
-           constructor() {
-             this.changes = [], this.versions = new Array(kk.maxVersions), this.minVersion = 0, this.currentVersion = 0
-           }
-           versionToIndex(ek) {
-             if (!(ek < this.minVersion || ek > this.currentVersion)) return ek % kk.maxVersions
-           }
-           currentVersionToIndex() {
-             return this.currentVersion % kk.maxVersions
-           }
-           edit(ek, ik, Dk) {
-             this.changes.push(new fAk(ek, ik, Dk)), (this.changes.length > kk.changeNumberThreshold || ik > kk.changeLengthThreshold || Dk && Dk.length > kk.changeLengthThreshold) && this.getSnapshot()
-           }
-           getSnapshot() {
-             return this._getSnapshot()
-           }
- ... (67 more removed lines; see GitHub link above)
+         fileExists: qC("fileExists", (function(zC) {
+           return CC.has(zC) || CC.has(WC(zC))
+         })),
+         getCurrentDirectory: function() {
+           return "/"
```

#### 12. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L125071-L125197` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L170-L171) · [Before (L125071-L125197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L125071-L125197)

```diff
-         PAk = class kk {
-           constructor() {
-             this.checkEdits = !1
-           }
-           absolutePositionOfStartOfLine(kk) {
-             return this.lineNumberToInfo(kk).absolutePosition
-           }
-           positionToLineOffset(kk) {
-             const {
-               oneBasedLine: ek,
-               zeroBasedColumn: ik
-             } = this.root.charOffsetToLineInfo(1, kk);
-             return {
-               line: ek,
-               offset: ik + 1
-             }
- ... (111 more removed lines; see GitHub link above)
+         getDirectories: function() {
+           return []
```

#### 13. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L125199-L125334` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L173-L174) · [Before (L125199-L125334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L125199-L125334)

```diff
-         mAk = class kk {
-           constructor() {
-             let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
-             this.children = kk, this.totalChars = 0, this.totalLines = 0, kk.length && this.updateCounts()
-           }
-           isLeaf() {
-             return !1
-           }
-           updateCounts() {
-             this.totalChars = 0, this.totalLines = 0;
-             for (const kk of this.children) this.totalChars += kk.charCount(), this.totalLines += kk.lineCount()
-           }
-           execWalk(kk, ek, ik, Dk, fk) {
-             return ik.pre && ik.pre(kk, ek, this.children[Dk], this, fk), ik.goSubtree ? (this.children[Dk].walk(kk, ek, ik), ik.post && ik.post(kk, ek, this.children[Dk], this, fk)) : ik.goSubtree = !0, ik.done
-           }
-           skipChild(kk, ek, ik, Dk, fk) {
- ... (120 more removed lines; see GitHub link above)
+         getExecutingFilePath: function() {
+           return oC("getExecutingFilePath")
```

#### 14. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L125336-L125351` → after: `L176-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L176-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L176-L184) · [Before (L125336-L125351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L125336-L125351)

```diff
-         MAk = class {
-           constructor(kk) {
-             this.text = kk
-           }
-           isLeaf() {
-             return !0
-           }
-           walk(kk, ek, ik) {
-             ik.leaf(kk, ek, this)
-           }
-           charCount() {
-             return this.text.length
-           }
-           lineCount() {
-             return 1
-           }
+         readDirectory: qC("readDirectory", (function(zC) {
+           return "/" === zC ? Array.from(CC.keys()) : []
+         })),
+         readFile: qC("readFile", (function(zC) {
+           var ZC;
+           return null != (ZC = CC.get(zC)) ? ZC : CC.get(WC(zC))
+         })),
+         resolvePath: function(CC) {
+           return CC
```

#### 15. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L125353-L125391` → after: `L186-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L186-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L186-L213) · [Before (L125353-L125391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L125353-L125391)

```diff
-         KAk = class kk {
-           constructor(kk, ek, ik, Dk, fk, Sk) {
-             this.telemetryEnabled = kk, this.logger = ek, this.host = ik, this.globalTypingsCacheLocation = Dk, this.event = fk, this.maxActiveRequestCount = Sk, this.activeRequestCount = 0, this.requestQueue = ei(), this.requestMap = new Map, this.requestedRegistry = !1, this.pa … [truncated]
-           }
-           isKnownTypesPackageName(kk) {
-             var ek;
-             return x4.validatePackageName(kk) === x4.NameValidationResult.Ok && (this.requestedRegistry || (this.requestedRegistry = !0, this.installer.send({
-               kind: "typesRegistry"
-             })), !!(null == (ek = this.typesRegistryCache) ? void 0 : ek.has(kk)))
-           }
-           installPackage(kk) {
-             this.packageInstallId++;
-             const ek = {
-                 kind: "installPackage",
-                 ...kk,
-                 id: this.packageInstallId
- ... (23 more removed lines; see GitHub link above)
+         newLine: "\n",
+         useCaseSensitiveFileNames: !0,
+         write: function() {
+           return oC("write")
+         },
+         writeFile: function(zC, ZC) {
+           CC.set(zC, ZC)
+         },
+         deleteFile: function(zC) {
+           CC.delete(zC)
+         }
+       }
+     }
+ 
+     function MC(CC, zC, ZC) {
+       var wC = new Map;
+ ... (12 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L125393-L125575` → after: `L215-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L215-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L215-L218) · [Before (L125393-L125575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L125393-L125575)

```diff
-             switch (this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Received response:${F4(kk)}`), kk.kind) {
-               case p4:
-                 this.typesRegistryCache = new Map(Object.entries(kk.typesRegistry));
-                 break;
-               case l4: {
-                 const Dk = null == (ek = this.packageInstalledPromise) ? void 0 : ek.get(kk.id);
-                 YD.assertIsDefined(Dk, "Should find the promise for package install"), null == (ik = this.packageInstalledPromise) || ik.delete(kk.id), kk.success ? Dk.resolve({
-                   successMessage: kk.message
-                 }) : Dk.reject(kk.message), this.projectService.updateTypingsForProject(kk), this.event(kk, "setTypings");
-                 break
-               }
-               case L4: {
-                 const ek = {
-                     message: kk.message
-                   },
-                   ik = "typesInstallerInitializationFailed";
- ... (167 more removed lines; see GitHub link above)
+             return wC.get(QC) || (fC = ZC.createSourceFile(QC, CC.readFile(QC), null != (nC = null != bC ? bC : zC.target) ? nC : FC(ZC).target, !1), wC.set(fC.fileName, fC), fC)
+           },
+           useCaseSensitiveFileNames: function() {
+             return CC.useCaseSensitiveFileNames
```

#### 17. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L125586` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/297.js#L230) · [Before (L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/297.js#L125586)

```diff
-     })
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 1. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4-L27` → after: `L4-L89110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4-L89110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/298.js#L4-L89110) · [Before (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/298.js#L4-L27)

```diff
-   41050: (kk, ek, ik) => {
-     ik.d(ek, {
-       collectImportedWorldCodePluginNames: () => mk
-     });
-     var Dk = ik(36463),
-       fk = ik(36454),
-       Sk = ik(40972),
-       bk = ik.n(Sk);
- 
-     function rk(kk) {
-       return bk().isImportDeclaration(kk) && bk().isStringLiteral(kk.moduleSpecifier) && function(kk) {
-         const ek = kk.importClause;
-         if (!ek) return !0;
-         if (ek.isTypeOnly) return !1;
-         const ik = ek.namedBindings;
-         return !(ik && !bk().isNamespaceImport(ik)) || !!ek.name || ik.elements.some((kk => !kk.isTypeOnly))
- ... (8 more removed lines; see GitHub link above)
+   41203: (CC, zC, ZC) => {
+     var QC = "/index.js",
+       wC = {};
+     (CC => {
+       var zC = Object.defineProperty,
+         wC = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (CC, ZC) => {
+           for (var QC in ZC) zC(CC, QC, {
+             get: ZC[QC],
+             enumerable: !0
+           })
+         }),
+         bC = {};
+       wC(bC, {
+         ANONYMOUS: () => j6,
+         AccessFlags: () => fb,
+         AssertionLevel: () => RZ,
+ ... (89091 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L29-L31` → after: `L89112-L121996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R89112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L89112-L121996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/298.js#L89112-L121996) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/298.js#L29-L31)

```diff
-       for (const Dk of fk)
-         if ("" !== Dk && "." !== Dk)
-           if (".." !== Dk) Sk.push(Dk);
+ 
+       function O_(CC, zC) {
+         T_ = zC, a_ = CC;
+         try {
+           return dC(function(CC) {
+             const zC = [];
+ 
+             function ZC(CC) {
+               if (QC(CC) && (zC.push(CC), CC.children))
+                 for (const zC of CC.children) ZC(zC)
+             }
+             return ZC(CC), zC;
+ 
+             function QC(CC) {
+               if (CC.children) return !0;
+               switch (z1(CC)) {
+ ... (32869 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L33-L57` → after: `L121998-L122198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R121998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L121998-L122198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/298.js#L121998-L122198) · [Before (L33-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/298.js#L33-L57)

```diff
-             if (0 === Sk.length) return;
-             Sk.pop()
-           } const bk = Sk.join("/");
-       for (const rk of [bk, `${bk}.ts`, `${bk}.js`])
-         if (rk in ik && !(0, Dk.t)(rk)) return rk
-     }
- 
-     function mk(kk) {
-       const ek = new Set,
-         ik = (0, fk.c)(kk);
-       if (!ik) return [];
-       const Dk = [ik],
-         Sk = new Set;
-       for (; Dk.length > 0;) {
-         const ik = Dk.pop();
-         if (!ik || Sk.has(ik)) continue;
- ... (9 more removed lines; see GitHub link above)
+             const zC = this.findExternalProjectByProjectName(CC);
+             zC && this.removeProject(zC)
+           }
+           zC && (this.cleanupConfiguredProjects(), this.printProjects())
+         }
+         openExternalProjects(CC) {
+           const zC = new Set(this.externalProjects.map((CC => CC.getProjectName())));
+           this.externalProjectToConfiguredProjectMap.forEach(((CC, ZC) => zC.add(ZC)));
+           for (const ZC of CC) this.openExternalProject(ZC, !1), zC.delete(ZC.projectFileName);
+           zC.forEach((CC => this.closeExternalProject(CC, !1))), this.cleanupConfiguredProjects(), this.printProjects()
+         }
+         static escapeFilenameForRegex(CC) {
+           return CC.replace(this.filenameEscapeRegexp, "\\$&")
+         }
+         resetSafeList() {
+           this.safelist = ExC
+ ... (185 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L59` → after: `L122200-L122424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R122200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L122200-L122424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/298.js#L122200-L122424) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/298.js#L59)

```diff
-             bk().forEachChild(mk, Mk)
+           }))
+         }
+         watchPackageJsonFile(CC, zC, ZC) {
+           PQ.assert(void 0 !== ZC);
+           let QC = (this.packageJsonFilesMap ?? (this.packageJsonFilesMap = new Map)).get(zC);
+           if (!QC) {
+             let ZC = this.watchFactory.watchFile(CC, ((CC, ZC) => {
+               switch (ZC) {
+                 case 0:
+                 case 1:
+                   this.packageJsonCache.addOrUpdate(CC, zC), this.onPackageJsonChange(QC);
+                   break;
+                 case 2:
+                   this.packageJsonCache.delete(zC), this.onPackageJsonChange(QC), QC.projects.clear(), QC.close()
+               }
+             }), 250, this.hostConfiguration.watchOptions, aO.PackageJson);
+ ... (209 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L61` → after: `L122426-L125584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R122426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L122426-L125584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/298.js#L122426-L125584) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/298.js#L61)

```diff
-         Mk(mk)
+         return zC ? {
+           ...fC,
+           fileName: CC.file && CC.file.fileName
+         } : fC
+       }
+       var YJC = EAC;
+ 
+       function dJC(CC, zC, ZC, QC) {
+         const wC = zC.hasLevel(3),
+           bC = JSON.stringify(CC);
+         wC && zC.info(`${CC.type}:${K7(CC)}`);
+         return `Content-Length: ${1+ZC(bC,"utf8")}\r\n\r\n${bC}${QC}`
+       }
+       var mJC = class {
+         constructor(CC) {
+           this.operationHost = CC
+ ... (3143 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L63-L79` → after: `L125586-L125587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R125586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L125586-L125587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/298.js#L125586-L125587) · [Before (L63-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/298.js#L63-L79)

```diff
-       return [...ek].sort()
-     }
-   },
-   41012: kk => {
-     function ek(kk) {
-       var ek = new Error("Cannot find module '" + kk + "'");
-       throw ek.code = "MODULE_NOT_FOUND", ek
-     }
-     ek.keys = () => [], ek.resolve = ek, ek.id = 41012, kk.exports = ek
-   },
-   40998: () => {},
-   40982: () => {},
-   41015: () => {},
-   40994: () => {},
-   40985: () => {},
-   40974: () => {},
- ... (1 more removed lines; see GitHub link above)
+     })
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/299.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/299.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8)

#### 1. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/299.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/299.js#L4-L6)

```diff
-   41027: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       default: () => Ck
+   41282: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       collectImportedWorldCodePluginNames: () => qC
```

#### 2. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L8-L18` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/299.js#L8-L11) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/299.js#L8-L18)

```diff
-     var Dk = ik(60),
-       fk = ik(4689),
-       Sk = ik(1648),
-       bk = ik(1021),
-       rk = ik.n(bk),
-       Pk = ik(1410),
-       mk = ik(1172),
-       Mk = ik(4659),
-       Kk = ik(4674),
-       xk = ik(4678),
-       nk = ik(1066);
+     var QC = ZC(36725),
+       wC = ZC(36721),
+       bC = ZC(41203),
+       nC = ZC.n(bC);
```

#### 3. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L21-L27` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/299.js#L14-L22) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/299.js#L21-L27)

```diff
-       return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
-     }
-     Mk.b.registerLanguage("javascript", Kk.d), Mk.b.registerLanguage("typescript", xk.c);
- 
-     function Hk(kk, ek) {
-       const ik = Uk(kk).replace(/"/g, "&quot;");
-       return `<button type="button" class="DocsCopyButton ${ek}" title="${ik}" aria-label="${ik}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+       return nC().isImportDeclaration(CC) && nC().isStringLiteral(CC.moduleSpecifier) && function(CC) {
+         const zC = CC.importClause;
+         if (!zC) return !0;
+         if (zC.isTypeOnly) return !1;
+         const ZC = zC.namedBindings;
+         return !(ZC && !nC().isNamespaceImport(ZC)) || !!zC.name || ZC.elements.some((CC => !CC.isTypeOnly))
+       }(CC) || nC().isExportDeclaration(CC) && CC.moduleSpecifier && nC().isStringLiteral(CC.moduleSpecifier) && function(CC) {
+         return !CC.isTypeOnly && (!CC.exportClause || !nC().isNamedExports(CC.exportClause) || 0 === CC.exportClause.elements.length || CC.exportClause.elements.some((CC => !CC.isTypeOnly)))
+       }(CC) ? CC.moduleSpecifier.text : nC().isImportEqualsDeclaration(CC) && !CC.isTypeOnly && nC().isExternalModuleReference(CC.moduleReference) && CC.moduleReference.expression && nC().isStringLiteral(CC.moduleReference.expression) ? CC.moduleReference.expression.text : nC().i … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L30-L44` → after: `L25-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L25-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/299.js#L25-L61) · [Before (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/299.js#L30-L44)

```diff
-     function wk(kk, ek) {
-       const ik = [],
-         Dk = kk.toLowerCase(),
-         fk = ek.toLowerCase();
-       let Sk = 0;
-       for (; Sk < kk.length;) {
-         const bk = Dk.indexOf(fk, Sk);
-         if (-1 === bk) {
-           ik.push(kk.slice(Sk));
-           break
-         }
-         bk > Sk && ik.push(kk.slice(Sk, bk)), ik.push((0, nk.jsx)("mark", {
-           className: "DocsHighlight",
-           children: kk.slice(bk, bk + ek.length)
-         }, bk)), Sk = bk + ek.length
+     function oC(CC, zC, ZC) {
+       if (!zC.startsWith("./") && !zC.startsWith("../")) return;
+       const wC = ((CC.includes("/") ? CC.slice(0, CC.lastIndexOf("/") + 1) : "") + zC).split("/"),
+         bC = [];
+       for (const QC of wC)
+         if ("" !== QC && "." !== QC)
+           if (".." !== QC) bC.push(QC);
+           else {
+             if (0 === bC.length) return;
+             bC.pop()
+           } const nC = bC.join("/");
+       for (const fC of [nC, `${nC}.ts`, `${nC}.js`])
+         if (fC in ZC && !(0, QC.q)(fC)) return fC
+     }
+ 
+     function qC(CC) {
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L46` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/299.js#L63) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/299.js#L46)

```diff
-       return ik
+       return [...zC].sort()
```

#### 6. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L48-L414` → after: `L65-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L65-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/299.js#L65-L79) · [Before (L48-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/299.js#L48-L414)

```diff
-     var lk = ik(1033),
-       pk = ik(1345),
-       yk = ik(36486),
-       Yk = ik(36489);
-     const Lk = {
-         clientOptions: {
-           tabStep: "docsClientOptionsTab",
-           tabText: "codeEditor:tutorialClientOptionsTab",
-           pageStep: "docsClientOptions",
-           pageText: "codeEditor:tutorialClientOptions"
-         },
-         apiReference: {
-           tabStep: "docsApiReferenceTab",
-           tabText: "codeEditor:tutorialApiReferenceTab",
-           pageStep: "docsApiReference",
-           pageText: "codeEditor:tutorialApiReference"
- ... (351 more removed lines; see GitHub link above)
+   },
+   41242: CC => {
+     function zC(CC) {
+       var zC = new Error("Cannot find module '" + CC + "'");
+       throw zC.code = "MODULE_NOT_FOUND", zC
+     }
+     zC.keys = () => [], zC.resolve = zC, zC.id = 41242, CC.exports = zC
+   },
+   41232: () => {},
+   41216: () => {},
+   41244: () => {},
+   41226: () => {},
+   41222: () => {},
+   41207: () => {},
+   41237: () => {}
```
