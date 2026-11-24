# Changed — Bundle Modifications Report (Part 023 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `23 / 69` (**318** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 022](part-022.md) · [Part 024 →](part-024.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/298.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/298.js` (867 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f)

#### 724. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13108-L13118` → after: `L14321-L14327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14321-L14327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14321-L14327) · [Before (L13108-L13118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13108-L13118)

```diff
- 
-       function Ip(CC) {
-         switch (CC.kind) {
-           case 175:
-           case 174:
-           case 177:
-           case 178:
-           case 179:
-           case 263:
-           case 219:
-             return !0
+       enterUnfinishedNodesBefore(pp) {
+         let ip = this.childBefore(pp),
+           cp = this;
+         for (; ip;) {
+           let pp = ip.lastChild;
+           if (!pp || pp.to != ip.to) break;
+           pp.type.isError && pp.from == pp.to ? (cp = ip, ip = pp.prevSibling) : ip = pp
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13120` → after: `L14329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14329) · [Before (L13120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13120)

```diff
-         return !1
+         return cp
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13122-L13127` → after: `L14331-L14332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14331-L14332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14331-L14332) · [Before (L13122-L13127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13122-L13127)

```diff
- 
-       function ip(CC, zC) {
-         for (;;) {
-           if (zC && zC(CC), 257 !== CC.statement.kind) return CC.statement;
-           CC = CC.statement
-         }
+       get node() {
+         return this
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13129-L13131` → after: `L14334-L14335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14334-L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14334-L14335) · [Before (L13129-L13131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13129-L13131)

```diff
- 
-       function vp(CC) {
-         return CC && 242 === CC.kind && lW(CC.parent)
+       get next() {
+         return this.parent
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13133-L13135` → after: `L14337-L14340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14337-L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14337-L14340) · [Before (L13133-L13135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13133-L13135)

```diff
- 
-       function ep(CC) {
-         return CC && 175 === CC.kind && 211 === CC.parent.kind
+     }
+     class dp extends Hp {
+       constructor(pp, ip, cp, Op) {
+         super(), this._tree = pp, this.from = ip, this.index = cp, this._parent = Op
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13137-L13143` → after: `L14342-L14343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14342-L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14342-L14343) · [Before (L13137-L13143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13137-L13143)

```diff
- 
-       function hp(CC) {
-         return (175 === CC.kind || 178 === CC.kind || 179 === CC.kind) && (211 === CC.parent.kind || 232 === CC.parent.kind)
-       }
- 
-       function Kp(CC) {
-         return CC && 1 === CC.kind
+       get type() {
+         return this._tree.type
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13145-L13147` → after: `L14345-L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14345-L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14345-L14346) · [Before (L13145-L13147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13145-L13147)

```diff
- 
-       function Yp(CC) {
-         return CC && 0 === CC.kind
+       get name() {
+         return this._tree.type.name
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13149-L13155` → after: `L14348-L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14348-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14348-L14349) · [Before (L13149-L13155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13149-L13155)

```diff
- 
-       function dp(CC, zC, ZC, QC) {
-         return NC(null == CC ? void 0 : CC.properties, (CC => {
-           if (!YE(CC)) return;
-           const wC = AS(CC.name);
-           return zC === wC || QC && QC === wC ? ZC(CC) : void 0
-         }))
+       get to() {
+         return this.from + this._tree.length
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13157-L13160` → after: `L14351-L14373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14351-L14373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14351-L14373) · [Before (L13157-L13160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13157-L13160)

```diff
- 
-       function mp(CC) {
-         if (CC && CC.statements.length) {
-           return nZ(CC.statements[0].expression, Em)
+       nextChild(pp, ip, cp, Op) {
+         let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         for (let Ip = this;;) {
+           for (let {
+               children: Sp,
+               positions: Lp
+             } = Ip._tree, Yp = ip > 0 ? Sp.length : -1; pp != Yp; pp += ip) {
+             let Yp, Dp = Sp[pp],
+               Ap = Lp[pp] + Ip.from;
+             if (op & Wp.EnterBracketed && Dp instanceof yp && (Yp = xp.get(Dp)) && !Yp.overlay && Yp.bracketed && cp >= Ap && cp <= Ap + Dp.length || vp(Op, cp, Ap, Ap + Dp.length))
+               if (Dp instanceof wp) {
+                 if (op & Wp.ExcludeBuffers) continue;
+                 let Sp = Dp.findChild(0, Dp.buffer.length, ip, cp - Ap, Op);
+                 if (Sp > -1) return new mp(new kp(Ip, Dp, pp, Ap), null, Sp)
+               } else if (op & Wp.IncludeAnonymous || !Dp.type.isAnonymous || Cp(Dp)) {
+               let Sp;
+ ... (7 more added lines; see GitHub link above)
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13163-L13165` → after: `L14376-L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14376-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14376-L14377) · [Before (L13163-L13165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13163-L13165)

```diff
- 
-       function Hp(CC, zC, ZC) {
-         return Ep(CC, zC, (CC => Hm(CC.initializer) ? AC(CC.initializer.elements, (CC => fd(CC) && CC.text === ZC)) : void 0))
+       get firstChild() {
+         return this.nextChild(0, 1, 0, 4)
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13167-L13169` → after: `L14379-L14380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14379-L14380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14379-L14380) · [Before (L13167-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13167-L13169)

```diff
- 
-       function Ep(CC, zC, ZC) {
-         return dp(mp(CC), zC, ZC)
+       get lastChild() {
+         return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13171-L13173` → after: `L14382-L14383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14382-L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14382-L14383) · [Before (L13171-L13173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13171-L13173)

```diff
- 
-       function lp(CC) {
-         return rq(CC.parent, lW)
+       childAfter(pp) {
+         return this.nextChild(0, 1, pp, 2)
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13175-L13177` → after: `L14385-L14386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14385-L14386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14385-L14386) · [Before (L13175-L13177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13175-L13177)

```diff
- 
-       function Xp(CC) {
-         return rq(CC.parent, cW)
+       childBefore(pp) {
+         return this.nextChild(this._tree.children.length - 1, -1, pp, -2)
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13179-L13181` → after: `L14388-L14389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14388-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14388-L14389) · [Before (L13179-L13181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13179-L13181)

```diff
- 
-       function cp(CC) {
-         return rq(CC.parent, tW)
+       prop(pp) {
+         return this._tree.prop(pp)
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13183-L13185` → after: `L14391-L14403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14391-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14391-L14403) · [Before (L13183-L13185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13183-L13185)

```diff
- 
-       function rp(CC) {
-         return rq(CC.parent, (CC => tW(CC) || lW(CC) ? "quit" : Od(CC)))
+       enter(pp, ip) {
+         let cp, Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (!(Op & Wp.IgnoreOverlays) && (cp = xp.get(this._tree)) && cp.overlay) {
+           let op = pp - this.from,
+             Ip = Op & Wp.EnterBracketed && cp.bracketed;
+           for (let {
+               from: pp,
+               to: Op
+             }
+             of cp.overlay)
+             if ((ip > 0 || Ip ? pp <= op : pp < op) && (ip < 0 || Ip ? Op >= op : Op > op)) return new dp(cp.tree, cp.overlay[0].from + this.from, -1, this)
+         }
+         return this.nextChild(0, 1, pp, ip, Op)
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13187-L13189` → after: `L14405-L14408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14405-L14408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14405-L14408) · [Before (L13187-L13189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13187-L13189)

```diff
- 
-       function sp(CC) {
-         return rq(CC.parent, XW)
+       nextSignificantParent() {
+         let pp = this;
+         for (; pp.type.isAnonymous && pp._parent;) pp = pp._parent;
+         return pp
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13191-L13194` → after: `L14410-L14411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14410-L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14410-L14411) · [Before (L13191-L13194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13191-L13194)

```diff
- 
-       function Tp(CC) {
-         const zC = rq(CC.parent, (CC => tW(CC) ? "quit" : jd(CC)));
-         return zC && tW(zC.parent) ? cp(zC.parent) : cp(zC ?? CC)
+       get parent() {
+         return this._parent ? this._parent.nextSignificantParent() : null
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13196-L13228` → after: `L14413-L14414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14413-L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14413-L14414) · [Before (L13196-L13228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13196-L13228)

```diff
- 
-       function ap(CC, zC, ZC) {
-         for (PQ.assert(308 !== CC.kind);;) {
-           if (!(CC = CC.parent)) return PQ.fail();
-           switch (CC.kind) {
-             case 168:
-               if (ZC && tW(CC.parent.parent)) return CC;
-               CC = CC.parent.parent;
-               break;
-             case 171:
-               170 === CC.parent.kind && aW(CC.parent.parent) ? CC = CC.parent.parent : aW(CC.parent) && (CC = CC.parent);
-               break;
-             case 220:
-               if (!zC) continue;
-             case 263:
-             case 219:
- ... (17 more removed lines; see GitHub link above)
+       get nextSibling() {
+         return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13230-L13250` → after: `L14416-L14417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14416-L14417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14416-L14417) · [Before (L13230-L13250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13230-L13250)

```diff
- 
-       function tp(CC) {
-         switch (CC.kind) {
-           case 220:
-           case 263:
-           case 219:
-           case 173:
-             return !0;
-           case 242:
-             switch (CC.parent.kind) {
-               case 177:
-               case 175:
-               case 178:
-               case 179:
-                 return !0;
-               default:
- ... (5 more removed lines; see GitHub link above)
+       get prevSibling() {
+         return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13252-L13255` → after: `L14419-L14420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14419-L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14419-L14420) · [Before (L13252-L13255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13252-L13255)

```diff
- 
-       function Dp(CC) {
-         vd(CC) && (cH(CC.parent) || XH(CC.parent)) && CC.parent.name === CC && (CC = CC.parent);
-         return EE(ap(CC, !0, !1))
+       get tree() {
+         return this._tree
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13257-L13265` → after: `L14422-L14423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14422-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14422-L14423) · [Before (L13257-L13265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13257-L13265)

```diff
- 
-       function jp(CC) {
-         const zC = ap(CC, !1, !1);
-         if (zC) switch (zC.kind) {
-           case 177:
-           case 263:
-           case 219:
-             return zC
-         }
+       toTree() {
+         return this._tree
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13267-L13291` → after: `L14425-L14426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14425-L14426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14425-L14426) · [Before (L13267-L13291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13267-L13291)

```diff
- 
-       function yp(CC, zC) {
-         for (;;) {
-           if (!(CC = CC.parent)) return;
-           switch (CC.kind) {
-             case 168:
-               CC = CC.parent;
-               break;
-             case 263:
-             case 219:
-             case 220:
-               if (!zC) continue;
-             case 173:
-             case 172:
-             case 175:
-             case 174:
- ... (9 more removed lines; see GitHub link above)
+       toString() {
+         return this._tree.toString()
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13294-L13299` → after: `L14430-L14449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14430-L14449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14430-L14449) · [Before (L13294-L13299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13294-L13299)

```diff
-       function Lp(CC) {
-         if (219 === CC.kind || 220 === CC.kind) {
-           let zC = CC,
-             ZC = CC.parent;
-           for (; 218 === ZC.kind;) zC = ZC, ZC = ZC.parent;
-           if (214 === ZC.kind && ZC.expression === zC) return ZC
+     function ep(pp, ip, cp, Op) {
+       let op = pp.cursor(),
+         Ip = [];
+       if (!op.firstChild()) return Ip;
+       if (null != cp)
+         for (let Sp = !1; !Sp;)
+           if (Sp = op.type.is(cp), !op.nextSibling()) return Ip;
+       for (;;) {
+         if (null != Op && op.type.is(Op)) return Ip;
+         if (op.type.is(ip) && Ip.push(op.node), !op.nextSibling()) return null == Op ? Ip : []
+       }
+     }
+ 
+     function jp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip.length - 1;
+       for (let Op = pp; cp >= 0; Op = Op.parent) {
+ ... (4 more added lines; see GitHub link above)
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13302-L13305` → after: `L14452-L14456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14452-L14456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14452-L14456) · [Before (L13302-L13305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13302-L13305)

```diff
- 
-       function Up(CC) {
-         const zC = CC.kind;
-         return (212 === zC || 213 === zC) && 108 === CC.expression.kind
+       return !0
+     }
+     class kp {
+       constructor(pp, ip, cp, Op) {
+         this.parent = pp, this.buffer = ip, this.index = cp, this.start = Op
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13307-L13310` → after: `L14458-L14461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14458-L14461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14458-L14461) · [Before (L13307-L13310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13307-L13310)

```diff
- 
-       function Bp(CC) {
-         const zC = CC.kind;
-         return (212 === zC || 213 === zC) && 110 === CC.expression.kind
+     }
+     class mp extends Hp {
+       get name() {
+         return this.type.name
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13312-L13315` → after: `L14463-L14464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14463-L14464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14463-L14464) · [Before (L13312-L13315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13312-L13315)

```diff
- 
-       function Op(CC) {
-         var zC;
-         return !!CC && EH(CC) && 110 === (null == (zC = CC.initializer) ? void 0 : zC.kind)
+       get from() {
+         return this.context.start + this.context.buffer.buffer[this.index + 1]
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13317-L13319` → after: `L14466-L14467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14466-L14467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14466-L14467) · [Before (L13317-L13319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13317-L13319)

```diff
- 
-       function kp(CC) {
-         return !!CC && (dE(CC) || YE(CC)) && Om(CC.parent.parent) && 64 === CC.parent.parent.operatorToken.kind && 110 === CC.parent.parent.right.kind
+       get to() {
+         return this.context.start + this.context.buffer.buffer[this.index + 2]
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13321-L13331` → after: `L14469-L14470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14469-L14470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14469-L14470) · [Before (L13321-L13331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13321-L13331)

```diff
- 
-       function Vp(CC) {
-         switch (CC.kind) {
-           case 184:
-             return CC.typeName;
-           case 234:
-             return nJ(CC.expression) ? CC.expression : void 0;
-           case 80:
-           case 167:
-             return CC
-         }
+       constructor(pp, ip, cp) {
+         super(), this.context = pp, this._parent = ip, this.index = cp, this.type = pp.buffer.set.types[pp.buffer.buffer[cp]]
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13333-L13347` → after: `L14472-L14476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14472-L14476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14472-L14476) · [Before (L13333-L13347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13333-L13347)

```diff
- 
-       function CP(CC) {
-         switch (CC.kind) {
-           case 216:
-             return CC.tag;
-           case 287:
-           case 286:
-             return CC.tagName;
-           case 227:
-             return CC.right;
-           case 290:
-             return CC;
-           default:
-             return CC.expression
-         }
+       child(pp, ip, cp) {
+         let {
+           buffer: Op
+         } = this.context, op = Op.findChild(this.index + 4, Op.buffer[this.index + 3], pp, ip - this.context.start, cp);
+         return op < 0 ? null : new mp(this.context, this, op)
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13349-L13366` → after: `L14478-L14479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14478-L14479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14478-L14479) · [Before (L13349-L13366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13349-L13366)

```diff
- 
-       function zP(CC, zC, ZC, QC) {
-         if (CC && kq(zC) && ed(zC.name)) return !1;
-         switch (zC.kind) {
-           case 264:
-             return !0;
-           case 232:
-             return !CC;
-           case 173:
-             return void 0 !== ZC && (CC ? cH(ZC) : tW(ZC) && !Yx(zC) && !dx(zC));
-           case 178:
-           case 179:
-           case 175:
-             return void 0 !== zC.body && void 0 !== ZC && (CC ? cH(ZC) : tW(ZC));
-           case 170:
-             return !!CC && (void 0 !== ZC && void 0 !== ZC.body && (177 === ZC.kind || 175 === ZC.kind || 179 === ZC.kind) && wx(ZC) !== zC && void 0 !== QC && 264 === QC.kind)
- ... (2 more removed lines; see GitHub link above)
+       get firstChild() {
+         return this.child(1, 0, 4)
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13368-L13370` → after: `L14481-L14482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14481-L14482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14481-L14482) · [Before (L13368-L13370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13368-L13370)

```diff
- 
-       function ZP(CC, zC, ZC, QC) {
-         return Ex(zC) && zP(CC, zC, ZC, QC)
+       get lastChild() {
+         return this.child(-1, 0, 4)
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13372-L13374` → after: `L14484-L14485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14484-L14485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14484-L14485) · [Before (L13372-L13374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13372-L13374)

```diff
- 
-       function QP(CC, zC, ZC, QC) {
-         return ZP(CC, zC, ZC, QC) || wP(CC, zC, ZC)
+       childAfter(pp) {
+         return this.child(1, pp, 2)
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13376-L13389` → after: `L14487-L14488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14487-L14488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14487-L14488) · [Before (L13376-L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13376-L13389)

```diff
- 
-       function wP(CC, zC, ZC) {
-         switch (zC.kind) {
-           case 264:
-             return LC(zC.members, (QC => QP(CC, QC, zC, ZC)));
-           case 232:
-             return !CC && LC(zC.members, (QC => QP(CC, QC, zC, ZC)));
-           case 175:
-           case 179:
-           case 177:
-             return LC(zC.parameters, (QC => ZP(CC, QC, zC, ZC)));
-           default:
-             return !1
-         }
+       childBefore(pp) {
+         return this.child(-1, pp, -2)
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13391-L13395` → after: `L14490-L14491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14490-L14491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14490-L14491) · [Before (L13391-L13395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13391-L13395)

```diff
- 
-       function bP(CC, zC) {
-         if (ZP(CC, zC)) return !0;
-         const ZC = zx(zC);
-         return !!ZC && wP(CC, ZC, zC)
+       prop(pp) {
+         return this.type.prop(pp)
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13397-L13413` → after: `L14493-L14498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14493-L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14493-L14498) · [Before (L13397-L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13397-L13413)

```diff
- 
-       function nP(CC, zC, ZC) {
-         let QC;
-         if (DW(zC)) {
-           const {
-             firstAccessor: CC,
-             secondAccessor: wC,
-             setAccessor: bC
-           } = Fx(ZC.members, zC), nC = Ex(CC) ? CC : wC && Ex(wC) ? wC : void 0;
-           if (!nC || zC !== nC) return !1;
-           QC = null == bC ? void 0 : bC.parameters
-         } else Bd(zC) && (QC = zC.parameters);
-         if (ZP(CC, zC, ZC)) return !0;
-         if (QC)
-           for (const wC of QC)
-             if (!bx(wC) && ZP(CC, wC, zC, ZC)) return !0;
- ... (1 more removed lines; see GitHub link above)
+       enter(pp, ip) {
+         if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Wp.ExcludeBuffers) return null;
+         let {
+           buffer: cp
+         } = this.context, Op = cp.findChild(this.index + 4, cp.buffer[this.index + 3], ip > 0 ? 1 : -1, pp - this.context.start, ip);
+         return Op < 0 ? null : new mp(this.context, this, Op)
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13415-L13426` → after: `L14500-L14501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14500-L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14500-L14501) · [Before (L13415-L13426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13415-L13426)

```diff
- 
-       function fP(CC) {
-         if (CC.textSourceNode) {
-           switch (CC.textSourceNode.kind) {
-             case 11:
-               return fP(CC.textSourceNode);
-             case 15:
-               return "" === CC.text
-           }
-           return !1
-         }
-         return "" === CC.text
+       get parent() {
+         return this._parent || this.context.parent.nextSignificantParent()
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13428-L13433` → after: `L14503-L14504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14503-L14504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14503-L14504) · [Before (L13428-L13433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13428-L13433)

```diff
- 
-       function oP(CC) {
-         const {
-           parent: zC
-         } = CC;
-         return (287 === zC.kind || 286 === zC.kind || 288 === zC.kind) && zC.tagName === CC
+       externalSibling(pp) {
+         return this._parent ? null : this.context.parent.nextChild(this.context.index + pp, pp, 0, 4)
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13435-L13496` → after: `L14506-L14510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14506-L14510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14506-L14510) · [Before (L13435-L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13435-L13496)

```diff
- 
-       function qP(CC) {
-         switch (CC.kind) {
-           case 108:
-           case 106:
-           case 112:
-           case 97:
-           case 14:
-           case 210:
-           case 211:
-           case 212:
-           case 213:
-           case 214:
-           case 215:
-           case 216:
-           case 235:
- ... (46 more removed lines; see GitHub link above)
+       get nextSibling() {
+         let {
+           buffer: pp
+         } = this.context, ip = pp.buffer[this.index + 3];
+         return ip < (this._parent ? pp.buffer[this._parent.index + 3] : pp.buffer.length) ? new mp(this.context, this._parent, ip) : this.externalSibling(1)
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13498-L13546` → after: `L14512-L14516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14512-L14516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14512-L14516) · [Before (L13498-L13546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13498-L13546)

```diff
- 
-       function FP(CC) {
-         const {
-           parent: zC
-         } = CC;
-         switch (zC.kind) {
-           case 261:
-           case 170:
-           case 173:
-           case 172:
-           case 307:
-           case 304:
-           case 209:
-             return zC.initializer === CC;
-           case 245:
-           case 246:
- ... (33 more removed lines; see GitHub link above)
+       get prevSibling() {
+         let {
+           buffer: pp
+         } = this.context, ip = this._parent ? this._parent.index + 4 : 0;
+         return this.index == ip ? this.externalSibling(-1) : new mp(this.context, this._parent, pp.findChild(ip, this.index, -1, 0, 4))
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13548-L13551` → after: `L14518-L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14518-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14518-L14519) · [Before (L13548-L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13548-L13551)

```diff
- 
-       function WP(CC) {
-         for (; 167 === CC.kind || 80 === CC.kind;) CC = CC.parent;
-         return 187 === CC.kind
+       get tree() {
+         return null
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13553-L13555` → after: `L14521-L14546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14521-L14546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14521-L14546) · [Before (L13553-L13555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13553-L13555)

```diff
- 
-       function NP(CC) {
-         return zE(CC) && !!CC.parent.moduleSpecifier
+       toTree() {
+         let pp = [],
+           ip = [],
+           {
+             buffer: cp
+           } = this.context,
+           Op = this.index + 4,
+           op = cp.buffer[this.index + 3];
+         if (op > Op) {
+           let Ip = cp.buffer[this.index + 1];
+           pp.push(cp.slice(Op, op, Ip)), ip.push(0)
+         }
+         return new yp(this.type, pp, ip, this.to - this.from)
+       }
+       toString() {
+         return this.context.buffer.childString(this.index)
+ ... (10 more added lines; see GitHub link above)
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13557-L13559` → after: `L14548-L14554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14548-L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14548-L14554) · [Before (L13557-L13559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13557-L13559)

```diff
- 
-       function MP(CC) {
-         return 272 === CC.kind && 284 === CC.moduleReference.kind
+       let Op = cp instanceof dp && cp.index < 0 ? null : cp.parent,
+         op = pp.slice();
+       return Op ? op[ip] = Op : op.splice(ip, 1), new qp(op, cp)
+     }
+     class qp {
+       constructor(pp, ip) {
+         this.heads = pp, this.node = ip
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13561-L13563` → after: `L14556-L14557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14556-L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14556-L14557) · [Before (L13561-L13563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13561-L13563)

```diff
- 
-       function gP(CC) {
-         return PQ.assert(MP(CC)), CC.moduleReference.expression
+       get next() {
+         return Rp(this.heads)
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13565-L13567` → after: `L14559-L14562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14559-L14562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14559-L14562) · [Before (L13565-L13567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13565-L13567)

```diff
- 
-       function SP(CC) {
-         return eP(CC) && KI(CC.initializer).arguments[0]
+     }
+     class Mp {
+       get name() {
+         return this.type.name
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13569-L13571` → after: `L14564-L14571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14564-L14571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14564-L14571) · [Before (L13569-L13571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13569-L13571)

```diff
- 
-       function pP(CC) {
-         return 272 === CC.kind && 284 !== CC.moduleReference.kind
+       constructor(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = ip & ~Wp.EnterBracketed, pp instanceof dp) this.yieldNode(pp);
+         else {
+           this._tree = pp.context.parent, this.buffer = pp.context;
+           for (let ip = pp._parent; ip; ip = ip._parent) this.stack.unshift(ip.index);
+           this.bufferNode = pp, this.yieldBuf(pp.index)
+         }
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13573-L13575` → after: `L14573-L14574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14573-L14574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14573-L14574) · [Before (L13573-L13575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13573-L13575)

```diff
- 
-       function PP(CC) {
-         return 308 === (null == CC ? void 0 : CC.kind)
+       yieldNode(pp) {
+         return !!pp && (this._tree = pp, this.type = pp.type, this.from = pp.from, this.to = pp.to, !0)
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13577-L13579` → after: `L14576-L14582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14576-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14576-L14582) · [Before (L13577-L13579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13577-L13579)

```diff
- 
-       function GP(CC) {
-         return RP(CC)
+       yieldBuf(pp, ip) {
+         this.index = pp;
+         let {
+           start: cp,
+           buffer: Op
+         } = this.buffer;
+         return this.type = ip || Op.set.types[Op.buffer[pp]], this.from = cp + Op.buffer[pp + 1], this.to = cp + Op.buffer[pp + 2], !0
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13581-L13583` → after: `L14584-L14585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14584-L14585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14584-L14585) · [Before (L13581-L13583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13581-L13583)

```diff
- 
-       function RP(CC) {
-         return !!CC && !!(524288 & CC.flags)
+       yield(pp) {
+         return !!pp && (pp instanceof dp ? (this.buffer = null, this.yieldNode(pp)) : (this.buffer = pp.context, this.yieldBuf(pp.index, pp.type)))
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13585-L13587` → after: `L14587-L14588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14587-L14588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14587-L14588) · [Before (L13585-L13587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13585-L13587)

```diff
- 
-       function AP(CC) {
-         return !!CC && !!(134217728 & CC.flags)
+       toString() {
+         return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13589-L13591` → after: `L14590-L14595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14590-L14595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14590-L14595) · [Before (L13589-L13591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13589-L13591)

```diff
- 
-       function xP(CC) {
-         return !sS(CC)
+       enterChild(pp, ip, cp) {
+         if (!this.buffer) return this.yield(this._tree.nextChild(pp < 0 ? this._tree._tree.children.length - 1 : 0, pp, ip, cp, this.mode));
+         let {
+           buffer: Op
+         } = this.buffer, op = Op.findChild(this.index + 4, Op.buffer[this.index + 3], pp, ip - this.buffer.start, cp);
+         return !(op < 0) && (this.stack.push(this.index), this.yieldBuf(op))
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13593-L13595` → after: `L14597-L14598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14597-L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14597-L14598) · [Before (L13593-L13595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13593-L13595)

```diff
- 
-       function JP(CC) {
-         return !!CC && !!(16777216 & CC.flags)
+       firstChild() {
+         return this.enterChild(1, 0, 4)
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13597-L13599` → after: `L14600-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14600-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14600-L14601) · [Before (L13597-L13599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13597-L13599)

```diff
- 
-       function IP(CC) {
-         return bm(CC) && vd(CC.typeName) && "Object" === CC.typeName.escapedText && CC.typeArguments && 2 === CC.typeArguments.length && (154 === CC.typeArguments[0].kind || 150 === CC.typeArguments[0].kind)
+       lastChild() {
+         return this.enterChild(-1, 0, 4)
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13601-L13611` → after: `L14603-L14604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14603-L14604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14603-L14604) · [Before (L13601-L13611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13601-L13611)

```diff
- 
-       function iP(CC, zC) {
-         if (214 !== CC.kind) return !1;
-         const {
-           expression: ZC,
-           arguments: QC
-         } = CC;
-         if (80 !== ZC.kind || "require" !== ZC.escapedText) return !1;
-         if (1 !== QC.length) return !1;
-         const wC = QC[0];
-         return !zC || PM(wC)
+       childAfter(pp) {
+         return this.enterChild(1, pp, 2)
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13613-L13615` → after: `L14606-L14607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14606-L14607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14606-L14607) · [Before (L13613-L13615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13613-L13615)

```diff
- 
-       function vP(CC) {
-         return KP(CC, !1)
+       childBefore(pp) {
+         return this.enterChild(-1, pp, -2)
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13617-L13619` → after: `L14609-L14611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14609-L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14609-L14611) · [Before (L13617-L13619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13617-L13619)

```diff
- 
-       function eP(CC) {
-         return KP(CC, !0)
+       enter(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
+         return this.buffer ? !(cp & Wp.ExcludeBuffers) && this.enterChild(1, pp, ip) : this.yield(this._tree.enter(pp, ip, cp))
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13621-L13623` → after: `L14613-L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14613-L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14613-L14617) · [Before (L13621-L13623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13621-L13623)

```diff
- 
-       function hP(CC) {
-         return mm(CC) && eP(CC.parent.parent)
+       parent() {
+         if (!this.buffer) return this.yieldNode(this.mode & Wp.IncludeAnonymous ? this._tree._parent : this._tree.parent);
+         if (this.stack.length) return this.yieldBuf(this.stack.pop());
+         let pp = this.mode & Wp.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
+         return this.buffer = null, this.yieldNode(pp)
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13625-L13627` → after: `L14619-L14631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14619-L14631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14619-L14631) · [Before (L13625-L13627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13625-L13627)

```diff
- 
-       function KP(CC, zC) {
-         return EH(CC) && !!CC.initializer && iP(zC ? KI(CC.initializer) : CC.initializer, !0)
+       sibling(pp) {
+         if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + pp, pp, 0, 4, this.mode));
+         let {
+           buffer: ip
+         } = this.buffer, cp = this.stack.length - 1;
+         if (pp < 0) {
+           let pp = cp < 0 ? 0 : this.stack[cp] + 4;
+           if (this.index != pp) return this.yieldBuf(ip.findChild(pp, this.index, -1, 0, 4))
+         } else {
+           let pp = ip.buffer[this.index + 3];
+           if (pp < (cp < 0 ? ip.buffer.length : ip.buffer[this.stack[cp] + 3])) return this.yieldBuf(pp)
+         }
+         return cp < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + pp, pp, 0, 4, this.mode))
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13629-L13631` → after: `L14633-L14634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14633-L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14633-L14634) · [Before (L13629-L13631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13629-L13631)

```diff
- 
-       function YP(CC) {
-         return SH(CC) && CC.declarationList.declarations.length > 0 && RC(CC.declarationList.declarations, (CC => vP(CC)))
+       nextSibling() {
+         return this.sibling(1)
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13633-L13635` → after: `L14636-L14637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14636-L14637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14636-L14637) · [Before (L13633-L13635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13633-L13635)

```diff
- 
-       function dP(CC) {
-         return 39 === CC || 34 === CC
+       prevSibling() {
+         return this.sibling(-1)
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13637-L13639` → after: `L14639-L14667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14639-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14639-L14667) · [Before (L13637-L13639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13637-L13639)

```diff
- 
-       function mP(CC, zC) {
-         return 34 === hg(zC, CC).charCodeAt(0)
+       atLastNode(pp) {
+         let ip, cp, {
+           buffer: Op
+         } = this;
+         if (Op) {
+           if (pp > 0) {
+             if (this.index < Op.buffer.buffer.length) return !1
+           } else
+             for (let pp = 0; pp < this.index; pp++)
+               if (Op.buffer.buffer[pp + 3] < this.index) return !1;
+           ({
+             index: ip,
+             parent: cp
+           } = Op)
+         } else({
+           index: ip,
+ ... (13 more added lines; see GitHub link above)
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13641-L13643` → after: `L14669-L14674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14669-L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14669-L14674) · [Before (L13641-L13643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13641-L13643)

```diff
- 
-       function HP(CC) {
-         return Om(CC) || vI(CC) || vd(CC) || cm(CC)
+       move(pp, ip) {
+         if (ip && this.enterChild(pp, 0, 4)) return !0;
+         for (;;) {
+           if (this.sibling(pp)) return !0;
+           if (this.atLastNode(pp) || !this.parent()) return !1
+         }
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13645-L13647` → after: `L14676-L14678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14676-L14678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14676-L14678) · [Before (L13645-L13647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13645-L13647)

```diff
- 
-       function EP(CC) {
-         return RP(CC) && CC.initializer && Om(CC.initializer) && (57 === CC.initializer.operatorToken.kind || 61 === CC.initializer.operatorToken.kind) && CC.name && nJ(CC.name) && sP(CC.name, CC.initializer.left) ? CC.initializer.right : CC.initializer
+       next() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return this.move(1, pp)
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13649-L13652` → after: `L14680-L14682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14680-L14682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14680-L14682) · [Before (L13649-L13652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13649-L13652)

```diff
- 
-       function lP(CC) {
-         const zC = EP(CC);
-         return zC && cP(zC, WJ(CC.name))
+       prev() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return this.move(-1, pp)
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13654-L13661` → after: `L14684-L14702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14684-L14702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14684-L14702) · [Before (L13654-L13661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13654-L13661)

```diff
- 
-       function XP(CC) {
-         if (CC && CC.parent && Om(CC.parent) && 64 === CC.parent.operatorToken.kind) {
-           const zC = WJ(CC.parent.left);
-           return cP(CC.parent.right, zC) || function(CC, zC, ZC) {
-             const QC = Om(zC) && (57 === zC.operatorToken.kind || 61 === zC.operatorToken.kind) && cP(zC.right, ZC);
-             if (QC && sP(CC, zC.left)) return QC
-           }(CC.parent.left, CC.parent.right, zC)
+       moveTo(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         for (;
+           (this.from == this.to || (ip < 1 ? this.from >= pp : this.from > pp) || (ip > -1 ? this.to <= pp : this.to < pp)) && this.parent(););
+         for (; this.enterChild(1, pp, ip););
+         return this
+       }
+       get node() {
+         if (!this.buffer) return this._tree;
+         let pp = this.bufferNode,
+           ip = null,
+           cp = 0;
+         if (pp && pp.context == this.buffer) pp: for (let Op = this.index, op = this.stack.length; op >= 0;) {
+           for (let Ip = pp; Ip; Ip = Ip._parent)
+             if (Ip.index == Op) {
+               if (Op == this.index) return Ip;
+ ... (3 more added lines; see GitHub link above)
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13663-L13667` → after: `L14704-L14724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14704-L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14704-L14724) · [Before (L13663-L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13663-L13667)

```diff
-         if (CC && cm(CC) && yP(CC)) {
-           const zC = function(CC, zC) {
-             return NC(CC.properties, (CC => YE(CC) && vd(CC.name) && "value" === CC.name.escapedText && CC.initializer && cP(CC.initializer, zC)))
-           }(CC.arguments[2], "prototype" === CC.arguments[1].text);
-           if (zC) return zC
+         for (let Op = cp; Op < this.stack.length; Op++) ip = new mp(this.buffer, ip, this.stack[Op]);
+         return this.bufferNode = new mp(this.buffer, ip, this.index)
+       }
+       get tree() {
+         return this.buffer ? null : this._tree._tree
+       }
+       iterate(pp, ip) {
+         for (let cp = 0;;) {
+           let Op = !1;
+           if (this.type.isAnonymous || !1 !== pp(this)) {
+             if (this.firstChild()) {
+               cp++;
+               continue
+             }
+             this.type.isAnonymous || (Op = !0)
+           }
+ ... (5 more added lines; see GitHub link above)
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13670-L13674` → after: `L14727-L14740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14727-L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14727-L14740) · [Before (L13670-L13674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13670-L13674)

```diff
- 
-       function cP(CC, zC) {
-         if (cm(CC)) {
-           const zC = VG(CC.expression);
-           return 219 === zC.kind || 220 === zC.kind ? CC : void 0
+       matchContext(pp) {
+         if (!this.buffer) return jp(this.node.parent, pp);
+         let {
+           buffer: ip
+         } = this.buffer, {
+           types: cp
+         } = ip.set;
+         for (let Op = pp.length - 1, op = this.stack.length - 1; Op >= 0; op--) {
+           if (op < 0) return jp(this._tree, pp, Op);
+           let Ip = cp[ip.buffer[this.stack[op]]];
+           if (!Ip.isAnonymous) {
+             if (pp[Op] && pp[Op] != Ip.name) return !1;
+             Op--
+           }
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13676` → after: `L14742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14742) · [Before (L13676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13676)

```diff
-         return 219 === CC.kind || 232 === CC.kind || 220 === CC.kind || Em(CC) && (0 === CC.properties.length || zC) ? CC : void 0
+         return !0
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13679-L13682` → after: `L14746-L14749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14746-L14749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14746-L14749) · [Before (L13679-L13682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13679-L13682)

```diff
-       function uP(CC) {
-         const zC = EH(CC.parent) ? CC.parent.name : Om(CC.parent) && 64 === CC.parent.operatorToken.kind ? CC.parent.left : void 0;
-         return zC && cP(CC.right, WJ(zC)) && nJ(zC) && sP(zC, CC.left)
-       }
+     function Cp(pp) {
+       return pp.children.some((pp => pp instanceof wp || !pp.type.isAnonymous || Cp(pp)))
+     }
+     const Ep = new WeakMap;
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13684-L13688` → after: `L14751-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14751-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14751-L14763) · [Before (L13684-L13688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13684-L13688)

```diff
-       function rP(CC) {
-         if (Om(CC.parent)) {
-           const zC = 57 !== CC.parent.operatorToken.kind && 61 !== CC.parent.operatorToken.kind || !Om(CC.parent.parent) ? CC.parent : CC.parent.parent;
-           if (64 === zC.operatorToken.kind && vd(zC.left)) return zC.left
-         } else if (EH(CC.parent)) return CC.parent.name
+     function Xp(pp, ip) {
+       if (!pp.isAnonymous || ip instanceof wp || ip.type != pp) return 1;
+       let cp = Ep.get(ip);
+       if (null == cp) {
+         cp = 1;
+         for (let Op of ip.children) {
+           if (Op.type != pp || !(Op instanceof yp)) {
+             cp = 1;
+             break
+           }
+           cp += Xp(pp, Op)
+         }
+         Ep.set(ip, cp)
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13691-L13692` → after: `L14768-L14801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14768-L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14768-L14801) · [Before (L13691-L13692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13691-L13692)

```diff
-       function sP(CC, zC) {
-         return lR(CC) && lR(zC) ? XR(CC) === XR(zC) : aF(CC) && LP(zC) && (110 === zC.expression.kind || vd(zC.expression) && ("window" === zC.expression.escapedText || "self" === zC.expression.escapedText || "global" === zC.expression.escapedText)) ? sP(CC, VP(zC)) : !(!LP(CC) | … [truncated]
+     function lp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
+       let Yp = 0;
+       for (let Wp = Op; Wp < op; Wp++) Yp += Xp(pp, ip[Wp]);
+       let Dp = Math.ceil(1.5 * Yp / 8),
+         Ap = [],
+         Pp = [];
+       return function ip(cp, Op, op, Sp, xp) {
+         for (let Yp = op; Yp < Sp;) {
+           let op = Yp,
+             Wp = Op[Yp],
+             yp = Xp(pp, cp[Yp]);
+           for (Yp++; Yp < Sp; Yp++) {
+             let ip = Xp(pp, cp[Yp]);
+             if (yp + ip >= Dp) break;
+             yp += ip
+           }
+ ... (18 more added lines; see GitHub link above)
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13694-L13697` → after: `L14803-L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14803-L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14803-L14805) · [Before (L13694-L13697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13694-L13697)

```diff
- 
-       function TP(CC) {
-         for (; QJ(CC, !0);) CC = CC.right;
-         return CC
+       setBuffer(pp, ip, cp) {
+         let Op = this.map.get(pp);
+         Op || this.map.set(pp, Op = new Map), Op.set(ip, cp)
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13699-L13701` → after: `L14807-L14809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14807-L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14807-L14809) · [Before (L13699-L13701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13699-L13701)

```diff
- 
-       function aP(CC) {
-         return vd(CC) && "exports" === CC.escapedText
+       getBuffer(pp, ip) {
+         let cp = this.map.get(pp);
+         return cp && cp.get(ip)
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13703-L13705` → after: `L14811-L14812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14811-L14812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14811-L14812) · [Before (L13703-L13705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13703-L13705)

```diff
- 
-       function tP(CC) {
-         return vd(CC) && "module" === CC.escapedText
+       set(pp, ip) {
+         pp instanceof mp ? this.setBuffer(pp.context.buffer, pp.index, ip) : pp instanceof dp && this.map.set(pp.tree, ip)
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13707-L13709` → after: `L14814-L14815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14814-L14815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14814-L14815) · [Before (L13707-L13709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13707-L13709)

```diff
- 
-       function DP(CC) {
-         return (lm(CC) || UP(CC)) && tP(CC.expression) && "exports" === zG(CC)
+       get(pp) {
+         return pp instanceof mp ? this.getBuffer(pp.context.buffer, pp.index) : pp instanceof dp ? this.map.get(pp.tree) : void 0
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13711-L13724` → after: `L14817-L14818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14817-L14818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14817-L14818) · [Before (L13711-L13724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13711-L13724)

```diff
- 
-       function jP(CC) {
-         const zC = function(CC) {
-           if (cm(CC)) {
-             if (!yP(CC)) return 0;
-             const zC = CC.arguments[0];
-             return aP(zC) || DP(zC) ? 8 : BP(zC) && "prototype" === zG(zC) ? 9 : 7
-           }
-           if (64 !== CC.operatorToken.kind || !vI(CC.left) || (zC = TP(CC), ym(zC) && bd(zC.expression) && "0" === zC.expression.text)) return 0;
-           var zC;
-           if (kP(CC.left.expression, !0) && "prototype" === zG(CC.left) && Em(QG(CC))) return 6;
-           return ZG(CC.left)
-         }(CC);
-         return 5 === zC || RP(CC) ? zC : 0
+       cursorSet(pp, ip) {
+         pp.buffer ? this.setBuffer(pp.buffer.buffer, pp.index, ip) : this.map.set(pp.tree, ip)
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13726-L13728` → after: `L14820-L14821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14820-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14820-L14821) · [Before (L13726-L13728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13726-L13728)

```diff
- 
-       function yP(CC) {
-         return 3 === WC(CC.arguments) && lm(CC.expression) && vd(CC.expression.expression) && "Object" === Dq(CC.expression.expression) && "defineProperty" === Dq(CC.expression.name) && YR(CC.arguments[1]) && kP(CC.arguments[0], !0)
+       cursorGet(pp) {
+         return pp.buffer ? this.getBuffer(pp.buffer.buffer, pp.index) : this.map.get(pp.tree)
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13730-L13732` → after: `L14823-L14828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14823-L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14823-L14828) · [Before (L13730-L13732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13730-L13732)

```diff
- 
-       function LP(CC) {
-         return lm(CC) || UP(CC)
+     }
+     class Jp {
+       constructor(pp, ip, cp, Op) {
+         let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         this.from = pp, this.to = ip, this.tree = cp, this.offset = Op, this.open = (op ? 1 : 0) | (Ip ? 2 : 0)
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13734-L13736` → after: `L14830-L14831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14830-L14831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14830-L14831) · [Before (L13734-L13736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13734-L13736)

```diff
- 
-       function UP(CC) {
-         return Xm(CC) && YR(CC.argumentExpression)
+       get openStart() {
+         return (1 & this.open) > 0
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13738-L13740` → after: `L14833-L14834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14833-L14834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14833-L14834) · [Before (L13738-L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13738-L13740)

```diff
- 
-       function BP(CC, zC) {
-         return lm(CC) && (!zC && 110 === CC.expression.kind || vd(CC.name) && kP(CC.expression, !0)) || OP(CC, zC)
+       get openEnd() {
+         return (2 & this.open) > 0
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13742-L13744` → after: `L14836-L14841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14836-L14841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14836-L14841) · [Before (L13742-L13744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13742-L13744)

```diff
- 
-       function OP(CC, zC) {
-         return UP(CC) && (!zC && 110 === CC.expression.kind || nJ(CC.expression) || BP(CC.expression, !0))
+       static addTree(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = [new Jp(0, pp.length, pp, 0, !1, cp)];
+         for (let op of ip) op.to > pp.length && Op.push(op);
+         return Op
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13746-L13778` → after: `L14843-L14864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14843-L14864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14843-L14864) · [Before (L13746-L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13746-L13778)

```diff
- 
-       function kP(CC, zC) {
-         return nJ(CC) || BP(CC, zC)
-       }
- 
-       function VP(CC) {
-         return lm(CC) ? CC.name : CC.argumentExpression
-       }
- 
-       function CG(CC) {
-         if (lm(CC)) return CC.name;
-         const zC = VG(CC.argumentExpression);
-         return bd(zC) || PM(zC) ? zC : CC
-       }
- 
-       function zG(CC) {
- ... (17 more removed lines; see GitHub link above)
+       static applyChanges(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
+         if (!ip.length) return pp;
+         let Op = [],
+           op = 1,
+           Ip = pp.length ? pp[0] : null;
+         for (let Sp = 0, xp = 0, Lp = 0;; Sp++) {
+           let Yp = Sp < ip.length ? ip[Sp] : null,
+             Dp = Yp ? Yp.fromA : 1e9;
+           if (Dp - xp >= cp)
+             for (; Ip && Ip.from < Dp;) {
+               let ip = Ip;
+               if (xp >= ip.from || Dp <= ip.to || Lp) {
+                 let pp = Math.max(ip.from, xp) - Lp,
+                   cp = Math.min(ip.to, Dp) - Lp;
+                 ip = pp >= cp ? null : new Jp(pp, cp, ip.tree, ip.offset + Lp, Sp > 0, !!Yp)
+ ... (6 more added lines; see GitHub link above)
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13780` → after: `L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14866) · [Before (L13780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13780)

```diff
-         return 0
+         return Op
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13782-L13785` → after: `L14868-L14871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14868-L14871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14868-L14871) · [Before (L13782-L13785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13782-L13785)

```diff
- 
-       function QG(CC) {
-         for (; Om(CC.right);) CC = CC.right;
-         return CC.right
+     }
+     class Bp {
+       startParse(pp, ip, cp) {
+         return "string" == typeof pp && (pp = new Np(pp)), cp = cp ? cp.length ? cp.map((pp => new Ip(pp.from, pp.to))) : [new Ip(0, 0)] : [new Ip(0, pp.length)], this.createParse(pp, ip || [], cp)
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13787-L13789` → after: `L14873-L14878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14873-L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14873-L14878) · [Before (L13787-L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13787-L13789)

```diff
- 
-       function wG(CC) {
-         return Om(CC) && 3 === jP(CC)
+       parse(pp, ip, cp) {
+         let Op = this.startParse(pp, ip, cp);
+         for (;;) {
+           let pp = Op.advance();
+           if (pp) return pp
+         }
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13791-L13793` → after: `L14880-L14883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14880-L14883) · [Before (L13791-L13793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13791-L13793)

```diff
- 
-       function bG(CC) {
-         return RP(CC) && CC.parent && 245 === CC.parent.kind && (!Xm(CC) || UP(CC)) && !!dF(CC.parent)
+     }
+     class Np {
+       constructor(pp) {
+         this.string = pp
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13795-L13802` → after: `L14885-L14886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14885-L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14885-L14886) · [Before (L13795-L13802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13795-L13802)

```diff
- 
-       function nG(CC, zC) {
-         const {
-           valueDeclaration: ZC
-         } = CC;
-         (!ZC || (!(33554432 & zC.flags) || RP(zC) || 33554432 & ZC.flags) && HP(ZC) && !HP(zC) || ZC.kind !== zC.kind && function(CC) {
-           return TH(CC) || vd(CC)
-         }(ZC)) && (CC.valueDeclaration = zC)
+       get length() {
+         return this.string.length
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13804-L13808` → after: `L14888-L14889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14888-L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14888-L14889) · [Before (L13804-L13808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13804-L13808)

```diff
- 
-       function fG(CC) {
-         if (!CC || !CC.valueDeclaration) return !1;
-         const zC = CC.valueDeclaration;
-         return 263 === zC.kind || EH(zC) && zC.initializer && lW(zC.initializer)
+       chunk(pp) {
+         return this.string.slice(pp)
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13810-L13825` → after: `L14891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14891) · [Before (L13810-L13825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13810-L13825)

```diff
- 
-       function oG(CC) {
-         switch (null == CC ? void 0 : CC.kind) {
-           case 261:
-           case 209:
-           case 273:
-           case 279:
-           case 272:
-           case 274:
-           case 281:
-           case 275:
-           case 282:
-           case 277:
-           case 206:
-             return !0
-         }
+       get lineChunks() {
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13828-L13853` → after: `L14894-L14895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14894-L14895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14894-L14895) · [Before (L13828-L13853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13828-L13853)

```diff
- 
-       function qG(CC) {
-         var zC, ZC;
-         switch (CC.kind) {
-           case 261:
-           case 209:
-             return null == (zC = rq(CC.initializer, (CC => iP(CC, !0)))) ? void 0 : zC.arguments[0];
-           case 273:
-           case 279:
-           case 352:
-             return nZ(CC.moduleSpecifier, PM);
-           case 272:
-             return nZ(null == (ZC = nZ(CC.moduleReference, NE)) ? void 0 : ZC.expression, PM);
-           case 274:
-           case 281:
-             return nZ(CC.parent.moduleSpecifier, PM);
- ... (10 more removed lines; see GitHub link above)
+       read(pp, ip) {
+         return this.string.slice(pp, ip)
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13855-L13857` → after: `L14897-L14920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14897-L14920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14897-L14920) · [Before (L13855-L13857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13855-L13857)

```diff
- 
-       function FG(CC) {
-         return WG(CC) || PQ.failBadSyntaxKind(CC.parent)
+     }
+     new Sp({
+       perNode: !0
+     })
+   },
+   41583: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Pp,
+       e: () => Lp,
+       i: () => Ap,
+       l: () => Ep
+     });
+     var Op = cp(41575);
+     let op = 0;
+     class Ip {
+       constructor(pp, ip, cp, Op) {
+ ... (8 more added lines; see GitHub link above)
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13859-L13875` → after: `L14922-L14928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14922-L14928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14922-L14928) · [Before (L13859-L13875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13859-L13875)

```diff
- 
-       function WG(CC) {
-         switch (CC.parent.kind) {
-           case 273:
-           case 279:
-           case 352:
-             return CC.parent;
-           case 284:
-             return CC.parent.parent;
-           case 214:
-             return BS(CC.parent) || iP(CC.parent, !1) ? CC.parent : void 0;
-           case 202:
-             if (!fd(CC)) break;
-             return nZ(CC.parent.parent, em);
-           default:
-             return
- ... (1 more removed lines; see GitHub link above)
+       static define(pp, ip) {
+         let cp = "string" == typeof pp ? pp : "?";
+         if (pp instanceof Ip && (ip = pp), null === ip || void 0 === ip ? void 0 : ip.base) throw new Error("Can not derive from a modified tag");
+         let Op = new Ip(cp, [], null, []);
+         if (Op.set.push(Op), ip)
+           for (let op of ip.set) Op.set.push(op);
+         return Op
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13877-L13879` → after: `L14930-L14932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14930-L14932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14930-L14932) · [Before (L13877-L13879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13877-L13879)

```diff
- 
-       function NG(CC, zC) {
-         return !!zC.rewriteRelativeImportExtensions && cn(CC) && !Lc(CC) && Dv(CC)
+       static defineModifier(pp) {
+         let ip = new xp(pp);
+         return pp => pp.modified.indexOf(ip) > -1 ? pp : xp.get(pp.base || pp, pp.modified.concat(ip).sort(((pp, ip) => pp.id - ip.id)))
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13881-L13898` → after: `L14934-L14938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14934-L14938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14934-L14938) · [Before (L13881-L13898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13881-L13898)

```diff
- 
-       function MG(CC) {
-         switch (CC.kind) {
-           case 273:
-           case 279:
-           case 352:
-             return CC.moduleSpecifier;
-           case 272:
-             return 284 === CC.moduleReference.kind ? CC.moduleReference.expression : void 0;
-           case 206:
-             return kS(CC) ? CC.argument.literal : void 0;
-           case 214:
-             return CC.arguments[0];
-           case 268:
-             return 11 === CC.name.kind ? CC.name : void 0;
-           default:
- ... (2 more removed lines; see GitHub link above)
+     }
+     let Sp = 0;
+     class xp {
+       constructor(pp) {
+         this.name = pp, this.instances = [], this.id = Sp++
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13900-L13911` → after: `L14940-L14961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14940-L14961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14940-L14961) · [Before (L13900-L13911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13900-L13911)

```diff
- 
-       function gG(CC) {
-         switch (CC.kind) {
-           case 273:
-             return CC.importClause && nZ(CC.importClause.namedBindings, CE);
-           case 272:
-             return CC;
-           case 279:
-             return CC.exportClause && nZ(CC.exportClause, zE);
-           default:
-             return PQ.assertNever(CC)
-         }
+       static get(pp, ip) {
+         if (!ip.length) return pp;
+         let cp = ip[0].instances.find((cp => {
+           return cp.base == pp && (Op = ip, op = cp.modified, Op.length == op.length && Op.every(((pp, ip) => pp == op[ip])));
+           var Op, op
+         }));
+         if (cp) return cp;
+         let Op = [],
+           op = new Ip(pp.name, Op, pp, ip);
+         for (let Ip of ip) Ip.instances.push(op);
+         let Sp = function(pp) {
+           let ip = [
+             []
+           ];
+           for (let cp = 0; cp < pp.length; cp++)
+             for (let Op = 0, op = ip.length; Op < op; Op++) ip.push(ip[Op].concat(pp[cp]));
+ ... (6 more added lines; see GitHub link above)
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13914-L13915` → after: `L14965-L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14965-L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14965-L14996) · [Before (L13914-L13915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13914-L13915)

```diff
-       function SG(CC) {
-         return (273 === CC.kind || 352 === CC.kind) && !!CC.importClause && !!CC.importClause.name
+     function Lp(pp) {
+       let ip = Object.create(null);
+       for (let cp in pp) {
+         let Op = pp[cp];
+         Array.isArray(Op) || (Op = [Op]);
+         for (let pp of cp.split(" "))
+           if (pp) {
+             let cp = [],
+               op = 2,
+               Ip = pp;
+             for (let ip = 0;;) {
+               if ("..." == Ip && ip > 0 && ip + 3 == pp.length) {
+                 op = 1;
+                 break
+               }
+               let Op = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Ip);
+ ... (16 more added lines; see GitHub link above)
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13917-L13925` → after: `L14998-L15006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14998-L15006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L14998-L15006) · [Before (L13917-L13925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13917-L13925)

```diff
- 
-       function pG(CC, zC) {
-         if (CC.name) {
-           const ZC = zC(CC);
-           if (ZC) return ZC
-         }
-         if (CC.namedBindings) {
-           const ZC = CE(CC.namedBindings) ? zC(CC.namedBindings) : NC(CC.namedBindings.elements, zC);
-           if (ZC) return ZC
+       return Yp.add(ip)
+     }
+     const Yp = new Op.j({
+       combine(pp, ip) {
+         let cp, Op, op;
+         for (; pp || ip;) {
+           if (!pp || ip && pp.depth >= ip.depth ? (op = ip, ip = ip.next) : (op = pp, pp = pp.next), cp && cp.mode == op.mode && !op.context && !cp.context) continue;
+           let Ip = new Dp(op.tags, op.mode, op.context);
+           cp ? cp.next = Ip : Op = Ip, cp = Ip
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13928-L13940` → after: `L15010-L15052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15010-L15052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15010-L15052) · [Before (L13928-L13940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13928-L13940)

```diff
- 
-       function PG(CC) {
-         switch (CC.kind) {
-           case 170:
-           case 175:
-           case 174:
-           case 305:
-           case 304:
-           case 173:
-           case 172:
-             return void 0 !== CC.questionToken
-         }
-         return !1
+     });
+     class Dp {
+       constructor(pp, ip, cp, Op) {
+         this.tags = pp, this.mode = ip, this.context = cp, this.next = Op
+       }
+       get opaque() {
+         return 0 == this.mode
+       }
+       get inherit() {
+         return 1 == this.mode
+       }
+       sort(pp) {
+         return !pp || pp.depth < this.depth ? (this.next = pp, this) : (pp.next = this.sort(pp.next), pp)
+       }
+       get depth() {
+         return this.context ? this.context.length : 0
+ ... (27 more added lines; see GitHub link above)
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13943-L13946` → after: `L15056-L15065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15056-L15065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15056-L15065) · [Before (L13943-L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13943-L13946)

```diff
-       function GG(CC) {
-         const zC = LE(CC) ? Pz(CC.parameters) : void 0,
-           ZC = nZ(zC && zC.name, vd);
-         return !!ZC && "new" === ZC.escapedText
+     function Pp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pp.length,
+         Ip = new Wp(Op, Array.isArray(ip) ? ip : [ip], cp);
+       Ip.highlightRange(pp.cursor(), Op, op, "", Ip.highlighters), Ip.flush(op)
+     }
+     Dp.empty = new Dp([], 2, null);
+     class Wp {
+       constructor(pp, ip, cp) {
+         this.at = pp, this.highlighters = ip, this.span = cp, this.class = ""
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13948-L13950` → after: `L15067-L15068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15067-L15068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15067-L15068) · [Before (L13948-L13950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13948-L13950)

```diff
- 
-       function RG(CC) {
-         return 347 === CC.kind || 339 === CC.kind || 341 === CC.kind
+       startSpan(pp, ip) {
+         ip != this.class && (this.flush(pp), pp > this.at && (this.at = pp), this.class = ip)
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13952-L13954` → after: `L15070-L15071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15070-L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15070-L15071) · [Before (L13952-L13954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13952-L13954)

```diff
- 
-       function AG(CC) {
-         return RG(CC) || rH(CC)
+       flush(pp) {
+         pp > this.at && this.class && this.span(this.at, pp, this.class)
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13956-L13958` → after: `L15073-L15348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15073-L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15073-L15348) · [Before (L13956-L13958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13956-L13958)

```diff
- 
-       function xG(CC) {
-         return PH(CC) && Om(CC.expression) && 0 !== jP(CC.expression) && Om(CC.expression.right) && (57 === CC.expression.right.operatorToken.kind || 61 === CC.expression.right.operatorToken.kind) ? CC.expression.right.right : void 0
+       highlightRange(pp, ip, cp, op, Ip) {
+         let {
+           type: Sp,
+           from: xp,
+           to: Lp
+         } = pp;
+         if (xp >= cp || Lp <= ip) return;
+         Sp.isTop && (Ip = this.highlighters.filter((pp => !pp.scope || pp.scope(Sp))));
+         let Ap = op,
+           Pp = function(pp) {
+             let ip = pp.type.prop(Yp);
+             for (; ip && ip.context && !pp.matchContext(ip.context);) ip = ip.next;
+             return ip || null
+           }(pp) || Dp.empty,
+           Wp = function(pp, ip) {
+             let cp = null;
+ ... (260 more added lines; see GitHub link above)
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13960-L13968` → after: `L15350-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15350-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15350-L15363) · [Before (L13960-L13968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13960-L13968)

```diff
- 
-       function JG(CC) {
-         switch (CC.kind) {
-           case 244:
-             const zC = IG(CC);
-             return zC && zC.initializer;
-           case 173:
-           case 304:
-             return CC.initializer
+     }
+     const Ap = Dp(vp, 0),
+       Pp = Dp(wp, 0),
+       Wp = Dp(((pp, ip) => wp(pp, ip, function(pp) {
+         let ip = [];
+         for (let cp of pp.selection.By) {
+           let Op = pp.doc.lineAt(cp.from),
+             op = cp.to <= Op.to ? Op : pp.doc.lineAt(cp.to);
+           op.from > Op.from && op.from == cp.to && (op = cp.to == Op.to + 1 ? Op : pp.doc.lineAt(cp.to - 1));
+           let Ip = ip.length - 1;
+           Ip >= 0 && ip[Ip].to > Op.from ? ip[Ip].to = op.to : ip.push({
+             from: Op.from + /^\s*/.exec(Op.text)[0].length,
+             to: op.to
+           })
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L13970-L13998` → after: `L15365-L15439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15365-L15439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15365-L15439) · [Before (L13970-L13998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L13970-L13998)

```diff
-       }
- 
-       function IG(CC) {
-         return SH(CC) ? Pz(CC.declarationList.declarations) : void 0
-       }
- 
-       function iG(CC) {
-         return TH(CC) && CC.body && 268 === CC.body.kind ? CC.body : void 0
-       }
- 
-       function vG(CC) {
-         if (CC.kind >= 244 && CC.kind <= 260) return !0;
-         switch (CC.kind) {
-           case 80:
-           case 110:
-           case 108:
- ... (13 more removed lines; see GitHub link above)
+         return ip
+       }(ip))), 0);
+ 
+     function yp(pp, ip) {
+       let cp = pp.languageDataAt("commentTokens", ip, 1);
+       return cp.length ? cp[0] : {}
+     }
+     const Up = 50;
+ 
+     function wp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip.selection.By,
+         Op = cp.map((pp => yp(ip, pp.from).block));
+       if (!Op.every((pp => pp))) return null;
+       let op = cp.map(((pp, cp) => function(pp, ip, cp, Op) {
+         let op, Ip, {
+             open: Sp,
+ ... (59 more added lines; see GitHub link above)
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14002-L14072` → after: `L15445-L15473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15445-L15473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15445-L15473) · [Before (L14002-L14072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14002-L14072)

```diff
-       function eG(CC) {
-         switch (CC.kind) {
-           case 220:
-           case 227:
-           case 242:
-           case 253:
-           case 180:
-           case 297:
-           case 264:
-           case 232:
-           case 176:
-           case 177:
-           case 186:
-           case 181:
-           case 252:
-           case 260:
- ... (55 more removed lines; see GitHub link above)
+     function vp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip.selection.By,
+         Op = [],
+         op = -1;
+       pp: for (let {
+           from: Ip,
+           to: Sp
+         }
+         of cp) {
+         let pp, cp = Op.length,
+           xp = 1e9;
+         for (let Lp = Ip; Lp <= Sp;) {
+           let cp = ip.doc.lineAt(Lp);
+           if (void 0 == pp && (pp = yp(ip, cp.from).line, !pp)) continue pp;
+           if (cp.from > op && (Ip == Sp || Sp > cp.from)) {
+             op = cp.from;
+ ... (13 more added lines; see GitHub link above)
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14075-L14087` → after: `L15479-L15486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15479-L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15479-L15486) · [Before (L14075-L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14075-L14087)

```diff
- 
-       function hG(CC, zC) {
-         let ZC;
-         Gp(CC) && WM(CC) && qM(CC.initializer) && (ZC = Fz(ZC, KG(CC, CC.initializer.jsDoc)));
-         let QC = CC;
-         for (; QC && QC.parent;) {
-           if (qM(QC) && (ZC = Fz(ZC, KG(CC, QC.jsDoc))), 170 === QC.kind) {
-             ZC = Fz(ZC, (zC ? nF : bF)(QC));
-             break
-           }
-           if (169 === QC.kind) {
-             ZC = Fz(ZC, (zC ? qF : oF)(QC));
-             break
+       if (2 != pp && Op.some((pp => pp.comment < 0 && (!pp.empty || pp.single)))) {
+         let pp = [];
+         for (let {
+             line: ip,
+             token: op,
+             indent: Ip,
+             empty: Sp,
+             single: xp
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14089` → after: `L15488-L15495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15488-L15495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15488-L15495) · [Before (L14089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14089)

```diff
-           QC = YG(QC)
+           of Op) !xp && Sp || pp.push({
+           from: ip.from + Ip,
+           insert: op + " "
+         });
+         let cp = ip.changes(pp);
+         return {
+           changes: cp,
+           selection: ip.selection.map(cp, 1)
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14093-L14101` → after: `L15498-L15503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15498-L15503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15498-L15503) · [Before (L14093-L14101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14093-L14101)

```diff
- 
-       function KG(CC, zC) {
-         const ZC = Jz(zC);
-         return lC(zC, (zC => {
-           if (zC === ZC) {
-             const ZC = hC(zC.tags, (zC => function(CC, zC) {
-               return !(pl(zC) || Jl(zC)) || !zC.parent || !OE(zC.parent) || !Tm(zC.parent.parent) || zC.parent.parent === CC
-             }(CC, zC)));
-             return zC.tags === ZC ? [zC] : ZC
+       if (1 != pp && Op.some((pp => pp.comment >= 0))) {
+         let pp = [];
+         for (let {
+             line: ip,
+             comment: cp,
+             token: op
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14103-L14105` → after: `L15505-L15556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15505-L15556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15505-L15556) · [Before (L14103-L14105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14103-L14105)

```diff
-           return hC(zC.tags, ql)
-         }))
-       }
+           of Op)
+           if (cp >= 0) {
+             let Op = ip.from + cp,
+               Ip = Op + op.length;
+             " " == ip.text[Ip - ip.from] && Ip++, pp.push({
+               from: Op,
+               to: Ip
+             })
+           } return {
+           changes: pp
+         }
+       }
+       return null
+     }
+     const tp = Sp.c.define(),
+       Hp = Sp.c.define(),
+ ... (36 more added lines; see GitHub link above)
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14107-L14109` → after: `L15558-L15589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15558-L15589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15558-L15589) · [Before (L14107-L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14107-L14109)

```diff
-       function YG(CC) {
-         const zC = CC.parent;
-         return 304 === zC.kind || 278 === zC.kind || 173 === zC.kind || 245 === zC.kind && 212 === CC.kind || 254 === zC.kind || iG(zC) || QJ(CC) ? zC : zC.parent && (IG(zC.parent) === CC || QJ(zC)) ? zC.parent : zC.parent && zC.parent.parent && (IG(zC.parent.parent) || JG(zC.par … [truncated]
+     function kp(pp, ip) {
+       return function(cp) {
+         let {
+           state: Op,
+           dispatch: op
+         } = cp;
+         if (!ip && Op.readOnly) return !1;
+         let Ip = Op.field(jp, !1);
+         if (!Ip) return !1;
+         let Sp = Ip.pop(pp, Op, ip);
+         return !!Sp && (op(Sp), !0)
+       }
+     }
+     const mp = kp(0, !1),
+       Rp = kp(1, !1),
+       qp = kp(0, !0),
+ ... (16 more added lines; see GitHub link above)
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14111-L14119` → after: `L15591-L15592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15591-L15592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15591-L15592) · [Before (L14111-L14119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14111-L14119)

```diff
- 
-       function dG(CC) {
-         if (CC.symbol) return CC.symbol;
-         if (!vd(CC.name)) return;
-         const zC = CC.name.escapedText,
-           ZC = EG(CC);
-         if (!ZC) return;
-         const QC = AC(ZC.parameters, (CC => 80 === CC.name.kind && CC.name.escapedText === zC));
-         return QC && QC.symbol
+       static fromJSON(pp) {
+         return new Cp(pp.changes && Sp.ChangeSet.fromJSON(pp.changes), [], pp.mapped && Sp.f.fromJSON(pp.mapped), pp.startSelection && Sp.l.fromJSON(pp.startSelection), pp.selectionsAfter.map(Sp.l.fromJSON))
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14121-L14125` → after: `L15594-L15598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15594-L15598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15594-L15598) · [Before (L14121-L14125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14121-L14125)

```diff
- 
-       function mG(CC) {
-         if (OE(CC.parent) && CC.parent.tags) {
-           const zC = AC(CC.parent.tags, RG);
-           if (zC) return zC
+       static fromTransaction(pp, ip) {
+         let cp = lp;
+         for (let Op of pp.startState.facet(dp)) {
+           let ip = Op(pp);
+           ip.length && (cp = cp.concat(ip))
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14127` → after: `L15600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15600) · [Before (L14127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14127)

```diff
-         return EG(CC)
+         return !cp.length && pp.changes.empty ? null : new Cp(pp.changes.invert(pp.startState.doc), cp, void 0, ip || pp.startState.selection, lp)
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14129-L14131` → after: `L15602-L15603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15602-L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15602-L15603) · [Before (L14129-L14131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14129-L14131)

```diff
- 
-       function HG(CC) {
-         return cF(CC, ql)
+       static selection(pp) {
+         return new Cp(void 0, lp, void 0, void 0, pp)
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14134-L14137` → after: `L15607-L15611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15607-L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15607-L15611) · [Before (L14134-L14137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14134-L14137)

```diff
-       function EG(CC) {
-         const zC = lG(CC);
-         if (zC) return yd(zC) && zC.type && lW(zC.type) ? zC.type : lW(zC) ? zC : void 0
-       }
+     function Ep(pp, ip, cp, Op) {
+       let op = ip + 1 > cp + 20 ? ip - cp - 1 : 0,
+         Ip = pp.slice(op, ip);
+       return Ip.push(Op), Ip
+     }
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14139-L14144` → after: `L15613-L15617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15613-L15617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15613-L15617) · [Before (L14139-L14144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14139-L14144)

```diff
-       function lG(CC) {
-         const zC = XG(CC);
-         if (zC) return xG(zC) || function(CC) {
-           return PH(CC) && Om(CC.expression) && 64 === CC.expression.operatorToken.kind ? TP(CC.expression) : void 0
-         }(zC) || JG(zC) || IG(zC) || iG(zC) || zC
-       }
+     function Xp(pp, ip) {
+       return pp.length ? ip.length ? pp.concat(ip) : pp : ip
+     }
+     const lp = [],
+       Qp = 200;
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14146-L14150` → after: `L15619-L15623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15619-L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15619-L15623) · [Before (L14146-L14150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14146-L14150)

```diff
-       function XG(CC) {
-         const zC = cG(CC);
-         if (!zC) return;
-         const ZC = zC.parent;
-         return ZC && ZC.jsDoc && zC === xz(ZC.jsDoc) ? ZC : void 0
+     function Jp(pp, ip) {
+       if (pp.length) {
+         let cp = pp[pp.length - 1],
+           Op = cp.selectionsAfter.slice(Math.max(0, cp.selectionsAfter.length - Qp));
+         return Op.length && Op[Op.length - 1].eq(ip) ? pp : (Op.push(ip), Ep(pp, pp.length - 1, 1e9, cp.setSelAfter(Op)))
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14153-L14155` → after: `L15628-L15632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15628-L15632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15628-L15632) · [Before (L14153-L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14153-L14155)

```diff
-       function cG(CC) {
-         return rq(CC.parent, OE)
-       }
+     function Bp(pp) {
+       let ip = pp[pp.length - 1],
+         cp = pp.slice();
+       return cp[pp.length - 1] = ip.setSelAfter(ip.selectionsAfter.slice(0, ip.selectionsAfter.length - 1)), cp
+     }
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14157-L14162` → after: `L15634-L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15634-L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15634-L15662) · [Before (L14157-L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14157-L14162)

```diff
-       function uG(CC) {
-         const zC = CC.name.escapedText,
-           {
-             typeParameters: ZC
-           } = CC.parent.parent.parent;
-         return ZC && AC(ZC, (CC => CC.name.escapedText === zC))
+     function Np(pp, ip) {
+       if (!pp.length) return pp;
+       let cp = pp.length,
+         Op = lp;
+       for (; cp;) {
+         let op = Tp(pp[cp - 1], ip, Op);
+         if (op.changes && !op.changes.empty || op.effects.length) {
+           let ip = pp.slice(0, cp);
+           return ip[cp - 1] = op, ip
+         }
+         ip = op.mapped, cp--, Op = op.selectionsAfter
+       }
+       return Op.length ? [Cp.selection(Op)] : lp
+     }
+ 
+     function Tp(pp, ip, cp) {
+ ... (13 more added lines; see GitHub link above)
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14164-L14166` → after: `L15664-L15665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15664-L15665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15664-L15665) · [Before (L14164-L14166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14164-L14166)

```diff
- 
-       function rG(CC) {
-         return !!CC.typeArguments
+       isolate() {
+         return this.prevTime ? new bp(this.done, this.undone) : this
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14168-L14207` → after: `L15667-L15680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15667-L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15667-L15680) · [Before (L14168-L14207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14168-L14207)

```diff
-       var sG = (CC => (CC[CC.None = 0] = "None", CC[CC.Definite = 1] = "Definite", CC[CC.Compound = 2] = "Compound", CC))(sG || {});
- 
-       function TG(CC) {
-         let zC = CC.parent;
-         for (;;) {
-           switch (zC.kind) {
-             case 227:
-               const ZC = zC;
-               return CJ(ZC.operatorToken.kind) && ZC.left === CC ? ZC : void 0;
-             case 225:
-             case 226:
-               const QC = zC,
-                 wC = QC.operator;
-               return 46 === wC || 47 === wC ? QC : void 0;
-             case 250:
-             case 251:
- ... (24 more removed lines; see GitHub link above)
+       addChanges(pp, ip, cp, Op, op) {
+         let Ip = this.done,
+           xp = Ip[Ip.length - 1];
+         return Ip = xp && xp.changes && !xp.changes.empty && pp.changes && (!cp || fp.test(cp)) && (!xp.selectionsAfter.length && ip - this.prevTime < Op.newGroupDelay && Op.joinToEvent(op, function(pp, ip) {
+           let cp = [],
+             Op = !1;
+           return pp.iterChangedRanges(((pp, ip) => cp.push(pp, ip))), ip.iterChangedRanges(((pp, ip, op, Ip) => {
+             for (let Sp = 0; Sp < cp.length;) {
+               let pp = cp[Sp++],
+                 ip = cp[Sp++];
+               Ip >= pp && op <= ip && (Op = !0)
+             }
+           })), Op
+         }(xp.changes, pp.changes)) || "input.type.compose" == cp) ? Ep(Ip, Ip.length - 1, Op.minDepth, new Cp(pp.changes.compose(xp.changes), Xp(Sp.C.mapEffects(pp.effects, xp.changes), xp.effects), xp.mapped, xp.startSelection, lp)) : Ep(Ip, Ip.length, Op.minDepth, pp), new bp(I … [truncated]
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14209-L14222` → after: `L15682-L15822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15682-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15682-L15822) · [Before (L14209-L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14209-L14222)

```diff
- 
-       function aG(CC) {
-         const zC = TG(CC);
-         if (!zC) return 0;
-         switch (zC.kind) {
-           case 227:
-             const CC = zC.operatorToken.kind;
-             return 64 === CC || Bx(CC) ? 1 : 2;
-           case 225:
-           case 226:
-             return 2;
-           case 250:
-           case 251:
-             return 1
+       addSelection(pp, ip, cp, Op) {
+         let op = this.done.length ? this.done[this.done.length - 1].selectionsAfter : lp;
+         return op.length > 0 && ip - this.prevTime < Op && cp == this.prevUserEvent && cp && /^select($|\.)/.test(cp) && (Ip = op[op.length - 1], Sp = pp, Ip.By.length == Sp.By.length && 0 === Ip.By.filter(((pp, ip) => pp.empty != Sp.By[ip].empty)).length) ? this : new bp(Jp(this … [truncated]
+         var Ip, Sp
+       }
+       addMapping(pp) {
+         return new bp(Np(this.done, pp), Np(this.undone, pp), this.prevTime, this.prevUserEvent)
+       }
+       pop(pp, ip, cp) {
+         let Op = 0 == pp ? this.done : this.undone;
+         if (0 == Op.length) return null;
+         let op = Op[Op.length - 1],
+           Ip = op.selectionsAfter[0] || (op.startSelection ? op.startSelection.map(op.changes.invertedDesc, 1) : ip.selection);
+         if (cp && op.selectionsAfter.length) return ip.update({
+           selection: op.selectionsAfter[op.selectionsAfter.length - 1],
+           annotations: tp.of({
+ ... (125 more added lines; see GitHub link above)
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14226-L14235` → after: `L15834-L15849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15834-L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15834-L15849) · [Before (L14226-L14235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14226-L14235)

```diff
-       function tG(CC) {
-         return !!TG(CC)
-       }
- 
-       function DG(CC) {
-         const zC = TG(CC);
-         return !!zC && QJ(zC, !0) && function(CC) {
-           const zC = VG(CC.right);
-           return 227 === zC.kind && YX(zC.operatorToken.kind)
-         }(zC)
+     function Ii(pp, ip) {
+       let cp, Op = oi(pp),
+         {
+           state: op
+         } = pp,
+         Ip = ap(op.selection, (cp => cp.empty ? pp.moveVertically(cp, ip, Op.height) : gp(cp, ip)));
+       if (Ip.eq(op.selection)) return !1;
+       if (Op.selfScroll) {
+         let ip = pp.coordsAtPos(op.selection.main.head),
+           Sp = pp.scrollDOM.getBoundingClientRect(),
+           Lp = Sp.top + Op.marginTop,
+           Yp = Sp.bottom - Op.marginBottom;
+         ip && ip.top > Lp && ip.bottom < Yp && (cp = xp.f.scrollIntoView(Ip.main.head, {
+           y: "start",
+           yMargin: ip.top - Lp
+         }))
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14238-L14259` → after: `L15880-L15946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15880-L15946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15880-L15946) · [Before (L14238-L14259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14238-L14259)

```diff
-       function jG(CC) {
-         switch (CC.kind) {
-           case 242:
-           case 244:
-           case 255:
-           case 246:
-           case 256:
-           case 270:
-           case 297:
-           case 298:
-           case 257:
-           case 249:
-           case 250:
-           case 251:
-           case 247:
-           case 248:
- ... (6 more removed lines; see GitHub link above)
+     function Di(pp, ip) {
+       let cp = ap(pp.state.selection, (pp => {
+         let cp = ip(pp);
+         return Sp.l.range(pp.anchor, cp.head, cp.goalColumn, cp.bidiLevel || void 0, cp.assoc)
+       }));
+       return !cp.eq(pp.state.selection) && (pp.dispatch(np(pp.state, cp)), !0)
+     }
+ 
+     function Ai(pp, ip) {
+       return Di(pp, (cp => pp.moveByChar(cp, ip)))
+     }
+     const Pi = pp => Ai(pp, !rp(pp)),
+       Wi = pp => Ai(pp, rp(pp));
+ 
+     function yi(pp, ip) {
+       return Di(pp, (cp => pp.moveByGroup(cp, ip)))
+ ... (51 more added lines; see GitHub link above)
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14261-L14262` → after: `L15948-L15963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15948-L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15948-L15963) · [Before (L14261-L14262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14261-L14262)

```diff
-       function yG(CC) {
-         return am(CC) || tm(CC) || LW(CC) || XH(CC) || kd(CC)
+     function mi(pp, ip) {
+       let {
+         state: cp
+       } = pp, Op = cp.selection, op = cp.selection.By.slice();
+       for (let Ip of cp.selection.By) {
+         let Op = cp.doc.lineAt(Ip.head);
+         if (ip ? Op.to < pp.state.doc.length : Op.from > 0)
+           for (let cp = Ip;;) {
+             let Ip = pp.moveVertically(cp, ip);
+             if (Ip.head < Op.from || Ip.head > Op.to) {
+               op.some((pp => pp.head == Ip.head)) || op.push(Ip);
+               break
+             }
+             if (Ip.head == cp.head) break;
+             cp = Ip
+           }
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14265-L14266` → after: `L15968-L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR15968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L15968-L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L15968-L16018) · [Before (L14265-L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14265-L14266)

```diff
-       function LG(CC, zC) {
-         for (; CC && CC.kind === zC;) CC = CC.parent;
+     function Ri(pp, ip) {
+       if (pp.state.readOnly) return !1;
+       let cp = "delete.selection",
+         {
+           state: Op
+         } = pp,
+         op = Op.changeByRange((Op => {
+           let {
+             from: op,
+             to: Ip
+           } = Op;
+           if (op == Ip) {
+             let Sp = ip(Op);
+             Sp < op ? (cp = "delete.backward", Sp = qi(pp, Sp, !1)) : Sp > op && (cp = "delete.forward", Sp = qi(pp, Sp, !0)), op = Math.min(op, Sp), Ip = Math.max(Ip, Sp)
+           } else op = qi(pp, op, !1), Ip = qi(pp, Ip, !0);
+           return op == Ip ? {
+ ... (35 more added lines; see GitHub link above)
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14268-L14285` → after: `L16020-L16040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16020-L16040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16020-L16040) · [Before (L14268-L14285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14268-L14285)

```diff
-       }
- 
-       function UG(CC) {
-         return LG(CC, 197)
-       }
- 
-       function BG(CC) {
-         return LG(CC, 218)
-       }
- 
-       function OG(CC) {
-         let zC;
-         for (; CC && 197 === CC.kind;) zC = CC, CC = CC.parent;
-         return [zC, CC]
-       }
- 
- ... (2 more removed lines; see GitHub link above)
+       })),
+       Ci = pp => Mi(pp, !1, !0),
+       Ei = pp => Mi(pp, !0, !1),
+       Xi = (pp, ip) => Ri(pp, (cp => {
+         let Op = cp.head,
+           {
+             state: op
+           } = pp,
+           Ip = op.doc.lineAt(Op),
+           xp = op.charCategorizer(Op);
+         for (let pp = null;;) {
+           if (Op == (ip ? Ip.to : Ip.from)) {
+             Op == cp.head && Ip.number != (ip ? op.doc.lines : 1) && (Op += ip ? 1 : -1);
+             break
+           }
+           let Lp = (0, Sp.S)(Ip.text, Op - Ip.from, ip) + Ip.from,
+ ... (5 more added lines; see GitHub link above)
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14289-L14294` → after: `L16064-L16168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16064-L16168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16064-L16168) · [Before (L14289-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14289-L14294)

```diff
-       function VG(CC, zC) {
-         return QX(CC, zC ? -2147483647 : 1)
-       }
- 
-       function CR(CC) {
-         return (212 === CC.kind || 213 === CC.kind) && ((CC = BG(CC.parent)) && 221 === CC.kind)
+     function Ji(pp, ip, cp) {
+       if (pp.readOnly) return !1;
+       let Op = [],
+         op = [];
+       for (let Ip of Qi(pp)) {
+         if (cp ? Ip.to == pp.doc.length : 0 == Ip.from) continue;
+         let ip = pp.doc.lineAt(cp ? Ip.to + 1 : Ip.from - 1),
+           xp = ip.length + 1;
+         if (cp) {
+           Op.push({
+             from: Ip.to,
+             to: ip.to
+           }, {
+             from: Ip.from,
+             insert: ip.text + pp.lineBreak
+           });
+ ... (89 more added lines; see GitHub link above)
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14297-L14300` → after: `L16172-L16178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16172-L16178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16172-L16178) · [Before (L14297-L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14297-L14300)

```diff
-       function zR(CC, zC) {
-         for (; CC;) {
-           if (CC === zC) return !0;
-           CC = CC.parent
+     function fi(pp, ip) {
+       let cp = -1;
+       return pp.changeByRange((Op => {
+         let op = [];
+         for (let Sp = Op.from; Sp <= Op.to;) {
+           let Ip = pp.doc.lineAt(Sp);
+           Ip.number > cp && (Op.empty || Op.to > Ip.from) && (ip(Ip, op, Op), cp = Ip.number), Sp = Ip.to + 1
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14302-L14323` → after: `L16180-L16322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16180-L16322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16180-L16322) · [Before (L14302-L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14302-L14323)

```diff
-         return !1
-       }
- 
-       function ZR(CC) {
-         return !EE(CC) && !zN(CC) && DN(CC.parent) && CC.parent.name === CC
-       }
- 
-       function QR(CC) {
-         const zC = CC.parent;
-         switch (CC.kind) {
-           case 11:
-           case 15:
-           case 9:
-             if (ad(zC)) return zC.parent;
-           case 80:
-             if (DN(zC)) return zC.name === CC ? zC : void 0;
- ... (6 more removed lines; see GitHub link above)
+         let Ip = pp.changes(op);
+         return {
+           changes: op,
+           range: Sp.l.range(Ip.mapPos(Op.anchor, 1), Ip.mapPos(Op.head, 1))
+         }
+       }))
+     }
+     const bi = pp => {
+         let {
+           state: ip,
+           dispatch: cp
+         } = pp;
+         return !ip.readOnly && (cp(ip.update(fi(ip, ((pp, cp) => {
+           cp.push({
+             from: pp.from,
+             insert: ip.facet(Lp.W)
+ ... (127 more added lines; see GitHub link above)
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14325-L14328` → after: `L16324-L16395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16324-L16395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16324-L16395) · [Before (L14325-L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14325-L14328)

```diff
-           case 81:
-             return DN(zC) && zC.name === CC ? zC : void 0;
-           default:
-             return
+             return pp
+           }));
+           return !Op.eq(ip.selection) && (cp(np(ip, Op)), !0)
+         },
+         preventDefault: !0
+       }, {
+         key: "Mod-[",
+         run: ai
+       }, {
+         key: "Mod-]",
+         run: bi
+       }, {
+         key: "Mod-Alt-\\",
+         run: pp => {
+           let {
+             state: ip,
+ ... (56 more added lines; see GitHub link above)
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14330-L14359` → after: `L16397-L16404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16397-L16404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16397-L16404) · [Before (L14330-L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14330-L14359)

```diff
-       }
- 
-       function wR(CC) {
-         return YR(CC) && 168 === CC.parent.kind && DN(CC.parent.parent)
-       }
- 
-       function bR(CC) {
-         const zC = CC.parent;
-         switch (zC.kind) {
-           case 173:
-           case 172:
-           case 175:
-           case 174:
-           case 178:
-           case 179:
-           case 307:
- ... (14 more removed lines; see GitHub link above)
+       }, {
+         key: "Shift-Mod-\\",
+         run: pp => {
+           let {
+             state: ip,
+             dispatch: cp
+           } = pp;
+           return Yi(ip, cp, !1)
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14361-L14378` → after: `L16406-L16847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16406-L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16406-L16847) · [Before (L14361-L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14361-L14378)

```diff
-         return !1
-       }
- 
-       function nR(CC) {
-         switch (CC.parent.kind) {
-           case 274:
-           case 277:
-           case 275:
-           case 282:
-           case 278:
-           case 272:
-           case 281:
-             return CC.parent;
-           case 167:
-             do {
-               CC = CC.parent
- ... (2 more removed lines; see GitHub link above)
+       }, {
+         key: "Mod-/",
+         run: pp => {
+           let {
+             state: ip
+           } = pp, cp = ip.doc.lineAt(ip.selection.main.from), Op = yp(pp.state, cp.from);
+           return Op.line ? Ap(pp) : !!Op.block && Wp(pp)
+         }
+       }, {
+         key: "Alt-A",
+         run: Pp
+       }, {
+         key: "Ctrl-m",
+         mac: "Shift-Alt-m",
+         run: pp => (pp.setTabFocusMode(), !0)
+       }].concat([{
+ ... (426 more added lines; see GitHub link above)
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14381-L14383` → after: `L16850-L16851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16850-L16851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16850-L16851) · [Before (L14381-L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14381-L14383)

```diff
- 
-       function fR(CC) {
-         return nJ(CC) || ZH(CC)
+       cancel() {
+         this.isCancelled = !0, this.callbacks.length = 0
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14385-L14387` → after: `L16853-L16854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16853-L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16853-L16854) · [Before (L14385-L14387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14385-L14387)

```diff
- 
-       function oR(CC) {
-         return fR(qR(CC))
+       reset() {
+         this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14389-L14391` → after: `L16856-L16857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16856-L16857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16856-L16857) · [Before (L14389-L14391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14389-L14391)

```diff
- 
-       function qR(CC) {
-         return wE(CC) ? CC.expression : CC.right
+       get isDone() {
+         return this.isCancelled || this.isTimeExhausted
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14393-L14395` → after: `L16859-L16862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16859-L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16859-L16862) · [Before (L14393-L14395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14393-L14395)

```diff
- 
-       function FR(CC) {
-         return 305 === CC.kind ? CC.name : 304 === CC.kind ? CC.initializer : CC.parent.right
+     }
+     class tc {
+       constructor() {
+         this.interval = null, this.latches = new Set
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14397-L14404` → after: `L16864-L16865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16864-L16865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16864-L16865) · [Before (L14397-L14404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14397-L14404)

```diff
- 
-       function WR(CC) {
-         const zC = NR(CC);
-         if (zC && RP(CC)) {
-           const zC = WF(CC);
-           if (zC) return zC.class
-         }
-         return zC
+       add(pp) {
+         this.latches.add(pp), this.start()
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14406-L14409` → after: `L16867-L16868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR16867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L16867-L16868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L16867-L16868) · [Before (L14406-L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14406-L14409)

```diff
- 
-       function NR(CC) {
-         const zC = pR(CC.heritageClauses, 96);
-         return zC && zC.types.length > 0 ? zC.types[0] : void 0
+       remove(pp) {
+         this.latches.delete(pp), 0 === this.latches.size && this.stop()
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14412-L14416` → after: `L17156-L17157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR17156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L17156-L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L17156-L17157) · [Before (L14412-L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14412-L14416)

```diff
-       function MR(CC) {
-         if (RP(CC)) return NF(CC).map((CC => CC.class));
-         {
-           const zC = pR(CC.heritageClauses, 119);
-           return null == zC ? void 0 : zC.types
+         function Op(pp) {
+           return /^@/.test(pp) ? [pp] : pp.split(/,\s*/)
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14420-L14853` → after: `L17160-L17199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR17160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L17160-L17199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L17160-L17199) · [Before (L14420-L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14420-L14853)

```diff
-       function gR(CC) {
-         return uH(CC) ? SR(CC) || qC : tW(CC) && BC(FQ(WR(CC)), MR(CC)) || qC
-       }
- 
-       function SR(CC) {
-         const zC = pR(CC.heritageClauses, 96);
-         return zC ? zC.types : void 0
-       }
- 
-       function pR(CC, zC) {
-         if (CC)
-           for (const ZC of CC)
-             if (ZC.token === zC) return ZC
-       }
- 
-       function PR(CC, zC) {
- ... (418 more removed lines; see GitHub link above)
+         function op(pp, ip, Ip, Sp) {
+           let xp = [],
+             Lp = /^@(\w+)\b/.exec(pp[0]),
+             Yp = Lp && "keyframes" == Lp[1];
+           if (Lp && null == ip) return Ip.push(pp[0] + ";");
+           for (let cp in ip) {
+             let Sp = ip[cp];
+             if (/&/.test(cp)) op(cp.split(/,\s*/).map((ip => pp.map((pp => ip.replace(/&/, pp))))).reduce(((pp, ip) => pp.concat(ip))), Sp, Ip);
+             else if (Sp && "object" == typeof Sp) {
+               if (!Lp) throw new RangeError("The value of a property (" + cp + ") should be a primitive value.");
+               op(Op(cp), Sp, xp, Yp)
+             } else null != Sp && xp.push(cp.replace(/_.*/, "").replace(/[A-Z]/g, (pp => "-" + pp.toLowerCase())) + ": " + Sp + ";")
+           }(xp.length || Yp) && Ip.push((!cp || Lp || Sp ? pp : pp.map(cp)).join(", ") + " {" + xp.join(" ") + "}")
+         }
+         for (let Ip in pp) op(Op(Ip), pp[Ip], this.rules)
+       }
+ ... (24 more added lines; see GitHub link above)
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14855-L14883` → after: `L17201-L17213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR17201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L17201-L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L17201-L17213) · [Before (L14855-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14855-L14883)

```diff
- 
-       function bA() {
-         let CC = [];
-         const zC = [],
-           ZC = new Map;
-         let QC = !1;
-         return {
-           add: function(wC) {
-             let bC;
-             wC.file ? (bC = ZC.get(wC.file.fileName), bC || (bC = [], ZC.set(wC.file.fileName, bC), Zz(zC, wC.file.fileName, dZ))) : (QC && (QC = !1, CC = CC.slice()), bC = CC);
-             Zz(bC, wC, fi, Fi)
-           },
-           lookup: function(zC) {
-             let QC;
-             QC = zC.file ? ZC.get(zC.file.fileName) : CC;
-             if (!QC) return;
- ... (13 more removed lines; see GitHub link above)
+       mount(pp, ip) {
+         let cp = this.sheet,
+           Op = 0,
+           op = 0;
+         for (let Ip = 0; Ip < pp.length; Ip++) {
+           let ip = pp[Ip],
+             Sp = this.modules.indexOf(ip);
+           if (Sp < op && Sp > -1 && (this.modules.splice(Sp, 1), op--, Sp = -1), -1 == Sp) {
+             if (this.modules.splice(op++, 0, ip), cp)
+               for (let pp = 0; pp < ip.rules.length; pp++) cp.insertRule(ip.rules[pp], Op++)
+           } else {
+             for (; op < Sp;) Op += this.modules[op++].rules.length;
+             Op += ip.rules.length, op++
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L14886-L15035` → after: `L17216-L17222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR17216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L17216-L17222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L17216-L17222) · [Before (L14886-L15035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L14886-L15035)

```diff
-       }
-       var nA = /\$\{/g;
- 
-       function fA(CC) {
-         return CC.replace(nA, "\\${")
-       }
- 
-       function oA(CC) {
-         return !!(2048 & (CC.templateFlags || 0))
-       }
- 
-       function qA(CC) {
-         return CC && !!(Fd(CC) ? oA(CC) : oA(CC.head) || LC(CC.templateSpans, (CC => oA(CC.literal))))
-       }
-       var FA = /[\\"\u0000-\u001f\u2028\u2029\u0085]/g,
-         WA = /[\\'\u0000-\u001f\u2028\u2029\u0085]/g,
- ... (134 more removed lines; see GitHub link above)
+         if (cp) ip.adoptedStyleSheets.indexOf(this.sheet) < 0 && (ip.adoptedStyleSheets = [this.sheet, ...ip.adoptedStyleSheets]);
+         else {
+           let pp = "";
+           for (let ip = 0; ip < this.modules.length; ip++) pp += this.modules[ip].getRules() + "\n";
+           this.styleTag.textContent = pp;
+           let cp = ip.head || ip;
+           this.styleTag.parentNode != cp && cp.insertBefore(this.styleTag, cp.firstChild)
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L15038-L15089` → after: `L17225-L17226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR17225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L17225-L17226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L17225-L17226) · [Before (L15038-L15089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L15038-L15089)

```diff
- 
-       function dA(CC) {
-         let zC = !1;
- 
-         function ZC() {
-           zC && (CC.writeTrailingSemicolon(";"), zC = !1)
-         }
-         return {
-           ...CC,
-           writeTrailingSemicolon() {
-             zC = !0
-           },
-           writeLiteral(zC) {
-             ZC(), CC.writeLiteral(zC)
-           },
-           writeStringLiteral(zC) {
- ... (36 more removed lines; see GitHub link above)
+       setNonce(pp) {
+         this.styleTag && this.styleTag.getAttribute("nonce") != pp && this.styleTag.setAttribute("nonce", pp)
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L15091-L125586` → after: `L17228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR17228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L17228) · [Before (L15091-L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L15091-L125586)

```diff
- 
-       function mA(CC) {
-         return !!CC.useCaseSensitiveFileNames && CC.useCaseSensitiveFileNames()
-       }
- 
-       function HA(CC) {
-         return kZ(mA(CC))
-       }
- 
-       function EA(CC, zC, ZC) {
-         return zC.moduleName || cA(CC, zC.fileName, ZC && ZC.fileName)
-       }
- 
-       function lA(CC, zC) {
-         return CC.getCanonicalFileName(wf(zC, CC.getCurrentDirectory()))
-       }
- ... (110480 more removed lines; see GitHub link above)
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/299.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/299.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L4)

```diff
-   41282: (CC, zC, ZC) => {
+   41548: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L6` → after: `L6-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L6-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L6-L28) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L6)

```diff
-       collectImportedWorldCodePluginNames: () => qC
+       c: () => di,
+       f: () => lp,
+       ChangeSet: () => Qp,
+       i: () => Xi,
+       l: () => ap,
+       n: () => Bi,
+       o: () => gp,
+       r: () => Xp,
+       u: () => Si,
+       A: () => Fi,
+       w: () => gi,
+       B: () => Ti,
+       C: () => ji,
+       E: () => Vp,
+       F: () => Up,
+       I: () => ki,
+ ... (7 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L8-L11` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L30-L31) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L8-L11)

```diff
-     var QC = ZC(36725),
-       wC = ZC(36721),
-       bC = ZC(41203),
-       nC = ZC.n(bC);
+     let Op = [],
+       op = [];
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L14-L22` → after: `L34-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L34-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L34-L55) · [Before (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L14-L22)

```diff
-       return nC().isImportDeclaration(CC) && nC().isStringLiteral(CC.moduleSpecifier) && function(CC) {
-         const zC = CC.importClause;
-         if (!zC) return !0;
-         if (zC.isTypeOnly) return !1;
-         const ZC = zC.namedBindings;
-         return !(ZC && !nC().isNamespaceImport(ZC)) || !!zC.name || ZC.elements.some((CC => !CC.isTypeOnly))
-       }(CC) || nC().isExportDeclaration(CC) && CC.moduleSpecifier && nC().isStringLiteral(CC.moduleSpecifier) && function(CC) {
-         return !CC.isTypeOnly && (!CC.exportClause || !nC().isNamedExports(CC.exportClause) || 0 === CC.exportClause.elements.length || CC.exportClause.elements.some((CC => !CC.isTypeOnly)))
-       }(CC) ? CC.moduleSpecifier.text : nC().isImportEqualsDeclaration(CC) && !CC.isTypeOnly && nC().isExternalModuleReference(CC.moduleReference) && CC.moduleReference.expression && nC().isStringLiteral(CC.moduleReference.expression) ? CC.moduleReference.expression.text : nC().i … [truncated]
+       if (pp < 768) return !1;
+       for (let ip = 0, cp = Op.length;;) {
+         let Ip = ip + cp >> 1;
+         if (pp < Op[Ip]) cp = Ip;
+         else {
+           if (!(pp >= op[Ip])) return !0;
+           ip = Ip + 1
+         }
+         if (ip == cp) return !1
+       }
+     }
+ 
+     function Sp(pp) {
+       return pp >= 127462 && pp <= 127487
+     }(() => {
+       let pp = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7, … [truncated]
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L26-L31` → after: `L59-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L59-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L59-L199) · [Before (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L26-L31)

```diff
-       if (!zC.startsWith("./") && !zC.startsWith("../")) return;
-       const wC = ((CC.includes("/") ? CC.slice(0, CC.lastIndexOf("/") + 1) : "") + zC).split("/"),
-         bC = [];
-       for (const QC of wC)
-         if ("" !== QC && "." !== QC)
-           if (".." !== QC) bC.push(QC);
+       if (ip == pp.length) return ip;
+       ip && Pp(pp.charCodeAt(ip)) && Wp(pp.charCodeAt(ip - 1)) && ip--;
+       let Op = Ap(pp, ip);
+       for (ip += yp(Op); ip < pp.length;) {
+         let op = Ap(pp, ip);
+         if (Op == xp || op == xp || cp && Ip(op)) ip += yp(op), Op = op;
+         else {
+           if (!Sp(op)) break;
+           {
+             let cp = 0,
+               Op = ip - 2;
+             for (; Op >= 0 && Sp(Ap(pp, Op));) cp++, Op -= 2;
+             if (cp % 2 == 0) break;
+             ip += 2
+           }
+         }
+ ... (125 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L33-L37` → after: `L201-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L201-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L201-L456) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L33-L37)

```diff
-             if (0 === bC.length) return;
-             bC.pop()
-           } const nC = bC.join("/");
-       for (const fC of [nC, `${nC}.ts`, `${nC}.js`])
-         if (fC in ZC && !(0, QC.q)(fC)) return fC
+             let pp = ip.length >> 1;
+             cp.push(new wp(ip.slice(0, pp)), new wp(ip.slice(pp)))
+           }
+         } else cp.push(op)
+       }
+       replace(pp, ip, cp) {
+         if (!(cp instanceof wp)) return super.replace(pp, ip, cp);
+         [pp, ip] = mp(this, pp, ip);
+         let Op = tp(this.text, tp(cp.text, Hp(this.text, 0, pp)), ip),
+           op = this.length + cp.length - (ip - pp);
+         return Op.length <= 32 ? new wp(Op, op) : vp.from(wp.split(Op, []), op)
+       }
+       sliceString(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
+         [pp, ip] = mp(this, pp, ip);
+ ... (240 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L41-L57` → after: `L460-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L460-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L460-L689) · [Before (L41-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L41-L57)

```diff
-       const zC = new Set,
-         ZC = (0, wC.b)(CC);
-       if (!ZC) return [];
-       const QC = [ZC],
-         bC = new Set;
-       for (; QC.length > 0;) {
-         const ZC = QC.pop();
-         if (!ZC || bC.has(ZC)) continue;
-         bC.add(ZC);
-         const qC = nC().createSourceFile(ZC, CC[ZC], nC().ScriptTarget.Latest, !1),
-           FC = qC => {
-             const WC = fC(qC),
-               NC = WC ? (0, wC.p)(WC) : null;
-             if (NC) zC.add(NC);
-             else if (WC) {
-               const zC = oC(ZC, WC, CC);
- ... (1 more removed lines; see GitHub link above)
+       return pp <= 65535 ? String.fromCharCode(pp) : (pp -= 65536, String.fromCharCode(55296 + (pp >> 10), 56320 + (1023 & pp)))
+     }
+ 
+     function Cp(pp) {
+       return pp < 65536 ? 1 : 2
+     }
+     const Ep = /\r\n?|\n/;
+     var Xp = function(pp) {
+       return pp[pp.Simple = 0] = "Simple", pp[pp.TrackDel = 1] = "TrackDel", pp[pp.TrackBefore = 2] = "TrackBefore", pp[pp.TrackAfter = 3] = "TrackAfter", pp
+     }(Xp || (Xp = {}));
+     class lp {
+       constructor(pp) {
+         this.sections = pp
+       }
+       get length() {
+         let pp = 0;
+ ... (214 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L59-L61` → after: `L691-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L691-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L691-L693) · [Before (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L59-L61)

```diff
-             nC().forEachChild(qC, FC)
-           };
-         FC(qC)
+           }
+         }
+         return new Qp(ip, cp)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L63` → after: `L695-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L695-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L695-L704) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L63)

```diff
-       return [...zC].sort()
+       static createSet(pp, ip) {
+         return new Qp(pp, ip)
+       }
+     }
+ 
+     function Jp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (0 == ip && cp <= 0) return;
+       let op = pp.length - 2;
+       op >= 0 && cp <= 0 && cp == pp[op + 1] ? pp[op] += ip : op >= 0 && 0 == ip && 0 == pp[op] ? pp[op + 1] += cp : Op ? (pp[op] += ip, pp[op + 1] += cp) : pp.push(ip, cp)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L65-L66` → after: `L706-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L706-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L706-L1134) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L65-L66)

```diff
-   },
-   41242: CC => {
+ 
+     function Bp(pp, ip, cp) {
+       if (0 == cp.length) return;
+       let Op = ip.length - 2 >> 1;
+       if (Op < pp.length) pp[pp.length - 1] = pp[pp.length - 1].append(cp);
+       else {
+         for (; pp.length < Op;) pp.push(Up.empty);
+         pp.push(cp)
+       }
+     }
+ 
+     function Np(pp, ip, cp) {
+       let Op = pp.inserted;
+       for (let op = 0, Ip = 0, Sp = 0; Sp < pp.sections.length;) {
+         let xp = pp.sections[Sp++],
+           Lp = pp.sections[Sp++];
+ ... (413 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L68-L79` → after: `L1136-L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L1136-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/299.js#L1136-L2147) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/299.js#L68-L79)

```diff
-       var zC = new Error("Cannot find module '" + CC + "'");
-       throw zC.code = "MODULE_NOT_FOUND", zC
-     }
-     zC.keys = () => [], zC.resolve = zC, zC.id = 41242, CC.exports = zC
-   },
-   41232: () => {},
-   41216: () => {},
-   41244: () => {},
-   41226: () => {},
-   41222: () => {},
-   41207: () => {},
-   41237: () => {}
+       return ip => new xi(ip, pp)
+     }
+     const Si = {
+       highest: Ii(0),
+       high: Ii(oi),
+       default: Ii(Oi),
+       low: Ii(ci),
+       lowest: Ii(ii)
+     };
+     class xi {
+       constructor(pp, ip) {
+         this.inner = pp, this.prec = ip
+       }
+     }
+     class Li {
+       of(pp) {
+ ... (996 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/300.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/300.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03)

#### 1. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L4-L19` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/300.js#L4) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/300.js#L4-L19)

```diff
-   41260: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       default: () => JC
-     });
-     var QC = ZC(48),
-       wC = ZC(4679),
-       bC = ZC(1593),
-       nC = ZC(1002),
-       fC = ZC.n(nC),
-       oC = ZC(1388),
-       qC = ZC(1143),
-       FC = ZC(4657),
-       WC = ZC(4668),
-       NC = ZC(4672),
-       MC = ZC(1056);
- 
+   41644: pp => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L21` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/300.js#L6-L7) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/300.js#L21)

```diff
-       return CC.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+       var ip = new Error("Cannot find module '" + pp + "'");
+       throw ip.code = "MODULE_NOT_FOUND", ip
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L23` → after: `L9-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/300.js#L9-L35) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/300.js#L23)

```diff
-     FC.c.registerLanguage("javascript", WC.b), FC.c.registerLanguage("typescript", NC.b);
+     ip.keys = () => [], ip.resolve = ip, ip.id = 41644, pp.exports = ip
+   },
+   41707: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op,
+       f: () => op
+     });
+     const Op = "Sends one question to the AI",
+       op = {
+         title: Op,
+         "data-asks-ai": !0
+       }
+   },
+   41612: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op
+ ... (11 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L25-L28` → after: `L37-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L37-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/300.js#L37-L41) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/300.js#L25-L28)

```diff
-     function SC(CC, zC) {
-       const ZC = gC(CC).replace(/"/g, "&quot;");
-       return `<button type="button" class="DocsCopyButton ${zC}" title="${ZC}" aria-label="${ZC}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
-     }
+ 	interface Console {
+ 		/** Log a message to chat. */
+ 		log(message: any): void
+ 	}
+ 	declare const console: Console
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L30-L46` → after: `L43-L4264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L43-L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/300.js#L43-L4264) · [Before (L30-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/300.js#L30-L46)

```diff
-     function pC(CC, zC) {
-       const ZC = [],
-         QC = CC.toLowerCase(),
-         wC = zC.toLowerCase();
-       let bC = 0;
-       for (; bC < CC.length;) {
-         const nC = QC.indexOf(wC, bC);
-         if (-1 === nC) {
-           ZC.push(CC.slice(bC));
-           break
-         }
-         nC > bC && ZC.push(CC.slice(bC, nC)), ZC.push((0, MC.jsx)("mark", {
-           className: "DocsHighlight",
-           children: CC.slice(nC, nC + zC.length)
-         }, nC)), bC = nC + zC.length
-       }
- ... (1 more removed lines; see GitHub link above)
+ 	interface GameApi {
+ 		/** The ID of the player running the code.
+ 		 *
+ 		 * Lobby code usually has nobody running it, so this is null.
+ 		 */
+ 		myId: string | null
+ 		/** The position of the code block or press to code board */
+ 		thisPos: [number, number, number]
+ 		/** The owner of the current custom lobby */
+ 		lobbyOwnerId: string | null
+ 		/**
+  * Get position of a player / entity.
+  * @param entityId
+  */
+ getPosition(entityId: EntityId): Pos
+ /**
+ ... (4206 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L48-L414` → after: `L4266-L4275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R4266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L4266-L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/300.js#L4266-L4275) · [Before (L48-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/300.js#L48-L414)

```diff
-     var PC = ZC(1013),
-       GC = ZC(1321),
-       RC = ZC(36747),
-       AC = ZC(36750);
-     const xC = {
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
+     ip.keys = () => [], ip.resolve = ip, ip.id = 41688, pp.exports = ip
+   },
+   41639: () => {},
+   41672: () => {},
+   41659: () => {},
+   41695: () => {},
+   41666: () => {},
+   41661: () => {},
+   41653: () => {},
+   41681: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/301.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/301.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/301.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/301.js#L4)

```diff
-   41289: (CC, zC, ZC) => {
+   41630: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/301.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/301.js#L6)

```diff
-       ensureLocalBloxdTypes: () => PC
+       b: () => Op
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L108` → after: `L8-L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/301.js#L8-L7359) · [Before (L8-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/301.js#L8-L108)

```diff
-     var QC = ZC(4696),
-       wC = ZC(41188),
-       bC = ZC(41179),
-       nC = ZC(36714),
-       fC = ZC(36721),
-       oC = ZC(36735);
-     const qC = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
- 
-     function FC(CC) {
-       return CC.replace(/^\//, "")
-     }
- 
-     function WC(CC) {
- ... (85 more removed lines; see GitHub link above)
+     const Op = String.raw`interface Map<K, V> {
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/302.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/302.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L4-L6` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/302.js#L4-L16) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/302.js#L4-L6)

```diff
-   41347: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       installImageBitmapTextureLoader: () => qC
+   41637: (pp, ip, cp) => {
+     function Op() {
+       return Op = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp)({}).hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, Op.apply(null, arguments)
+     }
+     cp.d(ip, {
+       d: () => Pp,
+       e: () => xp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L8-L10` → after: `L18-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L18-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/302.js#L18-L121) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/302.js#L8-L10)

```diff
-     var QC = ZC(39692),
-       wC = ZC(41349),
-       bC = ZC(3188);
+     var op = !1;
+     try {
+       op = "undefined" !== typeof localStorage
+     } catch (yp) {}
+     var Ip = "undefined" !== typeof process,
+       Sp = op && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Ip && {
+         NODE_ENV: "production",
+         PUBLIC_URL: "",
+         WDS_SOCKET_HOST: void 0,
+         WDS_SOCKET_PATH: void 0,
+         WDS_SOCKET_PORT: void 0,
+         FAST_REFRESH: !0,
+         REACT_APP_DEV_URLS: "false"
+       }.DEBUG ? console.log : function(pp) {
+         return ""
+       };
+ ... (88 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L13-L72` → after: `L124-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L124-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/302.js#L124-L230) · [Before (L13-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/302.js#L13-L72)

```diff
-       if ("string" === typeof CC) {
-         const ZC = (0, bC.e)(CC);
-         return ZC ? new Blob([(0, bC.c)(ZC.base64)], {
-           type: ZC.mimeType || zC
-         }) : null
-       }
-       return CC instanceof Blob ? CC : new Blob([CC], {
-         type: zC
-       })
-     }
-     const fC = function(CC, zC, ZC, QC) {
-       let bC, fC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
-         oC = arguments.length > 5 ? arguments[5] : void 0,
-         qC = arguments.length > 6 ? arguments[6] : void 0;
-       try {
-         bC = nC(CC, fC)
- ... (44 more removed lines; see GitHub link above)
+       return function() {
+         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+         var Ip = ip.apply(void 0, Op),
+           xp = "string" === typeof Ip ? Ip.slice(0, 80) + "..." : Ip;
+         return Sp.apply(void 0, ["> " + pp].concat(Op)), Sp("< " + xp), Ip
+       }
+     }
+     var Dp = function(pp) {
+         return Op({}, pp.getDefaultCompilerOptions(), {
+           jsx: pp.JsxEmit.React,
+           strict: !0,
+           esModuleInterop: !0,
+           module: pp.ModuleKind.ESNext,
+           suppressOutputPathCheck: !0,
+           skipLibCheck: !0,
+           skipDefaultLibCheck: !0
+ ... (91 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/303.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/303.js` (222 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405)

#### 1. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4-L96` → after: `L4-L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4-L2269) · [Before (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L4-L96)

```diff
-   41422: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => bC
-     });
-     var QC = ZC(39925),
-       wC = ZC(41429);
-     class bC {
-       constructor(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = ZC, this.gQC = [], this._maxBlockCapacity = zC || 64, this._selectionContent = new QC.e(1024), this._creationFunc = CC
-       }
-       update(CC, zC, ZC) {
-         wC.b._CreateBlocks(CC, zC, ZC, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       zQC(CC) {
-         for (let zC = 0; zC < this.blocks.length; zC++) {
- ... (77 more removed lines; see GitHub link above)
+   41647: (pp, ip, cp) => {
+     var Op = "/index.js",
+       op = {};
+     (pp => {
+       var ip = Object.defineProperty,
+         op = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (pp, cp) => {
+           for (var Op in cp) ip(pp, Op, {
+             get: cp[Op],
+             enumerable: !0
+           })
+         }),
+         Ip = {};
+       op(Ip, {
+         ANONYMOUS: () => r8,
+         AccessFlags: () => AI,
+         AssertionLevel: () => uc,
+ ... (2250 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L98-L104` → after: `L2271-L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2271-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2271-L2276) · [Before (L98-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L98-L104)

```diff
-       select(CC, zC, ZC) {
-         if (wC.b.IsInFrustum(this.SQC, CC)) {
-           if (this.blocks) {
-             for (let QC = 0; QC < this.blocks.length; QC++) {
-               this.blocks[QC].select(CC, zC, ZC)
-             }
-             return
+ 
+       function Pp(pp, ip) {
+         if (void 0 !== pp)
+           for (let cp = 0; cp < pp.length; cp++) {
+             const Op = ip(pp[cp], cp);
+             if (Op) return Op
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L109-L115` → after: `L2279-L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2279-L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2279-L2284) · [Before (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L109-L115)

```diff
-       intersects(CC, zC, ZC, QC) {
-         if (wC.b.IntersectsSphere(this._minPoint, this._maxPoint, CC, zC)) {
-           if (this.blocks) {
-             for (let wC = 0; wC < this.blocks.length; wC++) {
-               this.blocks[wC].intersects(CC, zC, ZC, QC)
-             }
-             return
+ 
+       function Wp(pp, ip) {
+         if (void 0 !== pp)
+           for (let cp = pp.length - 1; cp >= 0; cp--) {
+             const Op = ip(pp[cp], cp);
+             if (Op) return Op
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L120-L126` → after: `L2287-L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2287-L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2287-L2292) · [Before (L120-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L120-L126)

```diff
-       intersectsRay(CC, zC) {
-         if (CC.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
-           if (this.blocks) {
-             for (let ZC = 0; ZC < this.blocks.length; ZC++) {
-               this.blocks[ZC].intersectsRay(CC, zC)
-             }
-             return
+ 
+       function yp(pp, ip) {
+         if (void 0 !== pp)
+           for (let cp = 0; cp < pp.length; cp++) {
+             const Op = ip(pp[cp], cp);
+             if (void 0 !== Op) return Op
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L277-L334` → after: `L2295-L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2295-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2295-L2299) · [Before (L277-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L277-L334)

```diff
-       intersectsSphere(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const ZC = CC.center.x - this.origin.x,
-           QC = CC.center.y - this.origin.y,
-           wC = CC.center.z - this.origin.z,
-           bC = ZC * ZC + QC * QC + wC * wC,
-           nC = CC.radius + zC,
-           fC = nC * nC;
-         if (bC <= fC) return !0;
-         const oC = ZC * this.direction.x + QC * this.direction.y + wC * this.direction.z;
-         if (oC < 0) return !1;
-         return bC - oC * oC <= fC
-       }
-       intersectsTriangle(CC, zC, ZC) {
-         const QC = WC._TmpVector3[0],
-           bC = WC._TmpVector3[1],
- ... (42 more removed lines; see GitHub link above)
+ 
+       function Up(pp, ip) {
+         for (const cp of pp) {
+           const pp = ip(cp);
+           if (void 0 !== pp) return pp
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L337-L517` → after: `L2302-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2302-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2302-L2304) · [Before (L337-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L337-L517)

```diff
-       sQC(CC, zC, ZC) {
-         let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           bC = arguments.length > 4 ? arguments[4] : void 0,
-           nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         const fC = wC.j.Matrix[0];
-         return CC.getWorldMatrix().invertToRef(fC), this._tmpRay ? WC.TransformToRef(this, fC, this._tmpRay) : this._tmpRay = WC.Transform(this, fC), CC.intersects(this._tmpRay, zC, ZC, QC, bC, nC)
-       }
-       intersectsMeshes(CC, zC, ZC) {
-         ZC ? ZC.length = 0 : ZC = [];
-         for (let QC = 0; QC < CC.length; QC++) {
-           const wC = this.sQC(CC[QC], zC);
-           wC.hit && ZC.push(wC)
-         }
-         return ZC.sort(this._comparePickingInfo), ZC
-       }
-       _comparePickingInfo(CC, zC) {
- ... (165 more removed lines; see GitHub link above)
+ 
+       function wp(pp, ip, cp) {
+         let Op = cp;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L519-L547` → after: `L2306-L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2306-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2306-L2307) · [Before (L519-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L519-L547)

```diff
-           if (!ZC(FC, -1)) continue
-         } else if (!FC.isEnabled() || !FC.isVisible || !FC.tS) continue;
-         const gC = qC && FC.isWorldMatrixCameraDependent(),
-           SC = FC.computeWorldMatrix(gC, WC);
-         if (FC.hasThinInstances && FC.AzC) {
-           const CC = NC(oC, zC, FC, SC, !0, !0, nC);
-           if (CC) {
-             if (bC) return CC;
-             const {
-               rawBoundingInfo: fC,
-               intersectionThreshold: qC
-             } = RC(FC), WC = FC._thinInstanceDataStorage.matrixData;
-             if (WC) {
-               const CC = wC.j.Matrix[0],
-                 gC = wC.j.Matrix[1],
-                 pC = Math.min(FC.N_, WC.length >> 4);
- ... (13 more removed lines; see GitHub link above)
+           let cp = 0;
+           for (const op of pp) Op = ip(Op, op, cp), cp++
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L553-L1051` → after: `L2312-L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2312-L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2312-L2316) · [Before (L553-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L553-L1051)

```diff
-     function JC(CC, zC, ZC, QC) {
-       if (!fC.c) return null;
-       const bC = [],
-         nC = !!(CC.activeCameras && CC.activeCameras.length > 1 && CC.cameraToUseForPointers !== CC.activeCamera),
-         oC = CC.cameraToUseForPointers || CC.activeCamera,
-         qC = FC.internalPickerForMesh || pC,
-         WC = qC === pC;
-       for (let fC = 0; fC < CC.meshes.length; fC++) {
-         const FC = CC.meshes[fC];
-         if (ZC) {
-           if (!ZC(FC, -1)) continue
-         } else if (!FC.isEnabled() || !FC.isVisible || !FC.tS) continue;
-         const NC = nC && FC.isWorldMatrixCameraDependent(),
-           MC = FC.computeWorldMatrix(NC, oC);
-         if (FC.hasThinInstances && FC.AzC) {
-           if (qC(null, zC, FC, MC, !0, !0, QC)) {
- ... (483 more removed lines; see GitHub link above)
+       function vp(pp, ip, cp) {
+         const Op = [];
+         dO.assertEqual(pp.length, ip.length);
+         for (let op = 0; op < pp.length; op++) Op.push(cp(pp[op], ip[op], op));
+         return Op
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1053-L1059` → after: `L2318-L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2318-L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2318-L2323) · [Before (L1053-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1053-L1059)

```diff
-     }
-     class PC extends pC {
-       constructor() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new bC.r(0, 1, 0),
-           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0);
-         super(CC), this.direction1 = zC, this.direction2 = ZC
+ 
+       function tp(pp, ip) {
+         if (pp.length <= 1) return pp;
+         const cp = [];
+         for (let Op = 0, op = pp.length; Op < op; Op++) 0 !== Op && cp.push(ip), cp.push(pp[Op]);
+         return cp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1061-L1065` → after: `L2325-L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2325-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2325-L2330) · [Before (L1061-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1061-L1065)

```diff
-       startDirectionFunction(CC, zC, ZC, QC) {
-         const wC = (0, MC.RandomRange)(this.direction1.x, this.direction2.x),
-           nC = (0, MC.RandomRange)(this.direction1.y, this.direction2.y),
-           fC = (0, MC.RandomRange)(this.direction1.z, this.direction2.z);
-         QC ? zC.L_(wC, nC, fC) : bC.r.TransformNormalFromFloatsToRef(wC, nC, fC, CC, zC)
+ 
+       function Hp(pp, ip) {
+         if (void 0 !== pp)
+           for (let cp = 0; cp < pp.length; cp++)
+             if (!ip(pp[cp], cp)) return !1;
+         return !0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1067-L1069` → after: `L2332-L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2332-L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2332-L2338) · [Before (L1067-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1067-L1069)

```diff
-       clone() {
-         const CC = new PC(this.radius, this.direction1, this.direction2);
-         return NC.e.DeepCopy(this, CC), CC
+ 
+       function dp(pp, ip, cp) {
+         if (void 0 !== pp)
+           for (let Op = cp ?? 0; Op < pp.length; Op++) {
+             const cp = pp[Op];
+             if (ip(cp, Op)) return cp
+           }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1071-L1072` → after: `L2340-L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2340-L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2340-L2346) · [Before (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1071-L1072)

```diff
-       applyToShader(CC) {
-         CC.setFloat("radius", this.radius), CC.setFloat("radiusRange", this.radiusRange), CC.setVector3("direction1", this.direction1), CC.setVector3("direction2", this.direction2)
+ 
+       function ep(pp, ip, cp) {
+         if (void 0 !== pp)
+           for (let Op = cp ?? pp.length - 1; Op >= 0; Op--) {
+             const cp = pp[Op];
+             if (ip(cp, Op)) return cp
+           }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1074-L1075` → after: `L2348-L2353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2348-L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2348-L2353) · [Before (L1074-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1074-L1075)

```diff
-       buildUniformLayout(CC) {
-         CC.addUniform("radius", 1), CC.addUniform("radiusRange", 1), CC.addUniform("direction1", 3), CC.addUniform("direction2", 3)
+ 
+       function jp(pp, ip, cp) {
+         if (void 0 === pp) return -1;
+         for (let Op = cp ?? 0; Op < pp.length; Op++)
+           if (ip(pp[Op], Op)) return Op;
+         return -1
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1077-L1078` → after: `L2355-L2360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2355-L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2355-L2360) · [Before (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1077-L1078)

```diff
-       getEffectDefines() {
-         return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
+ 
+       function kp(pp, ip, cp) {
+         if (void 0 === pp) return -1;
+         for (let Op = cp ?? pp.length - 1; Op >= 0; Op--)
+           if (ip(pp[Op], Op)) return Op;
+         return -1
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1080-L1081` → after: `L2362-L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2362-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2362-L2368) · [Before (L1080-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1080-L1081)

```diff
-       getClassName() {
-         return "SphereDirectedParticleEmitter"
+ 
+       function mp(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++)
+             if (cp(pp[Op], ip)) return !0;
+         return !1
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1083-L1085` → after: `L2370-L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2370-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2370-L2374) · [Before (L1083-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1083-L1085)

```diff
-       serialize() {
-         const CC = super.serialize();
-         return CC.direction1 = this.direction1.VZC(), CC.direction2 = this.direction2.VZC(), CC
+ 
+       function Rp(pp, ip, cp) {
+         for (let Op = cp ?? 0; Op < pp.length; Op++)
+           if (mp(ip, pp.charCodeAt(Op))) return Op;
+         return -1
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1087-L1088` → after: `L2376-L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2376-L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2376-L2383) · [Before (L1087-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1087-L1088)

```diff
-       parse(CC) {
-         super.parse(CC), bC.r.FromArrayToRef(CC.direction1, 0, this.direction1), bC.r.FromArrayToRef(CC.direction2, 0, this.direction2)
+ 
+       function qp(pp, ip) {
+         let cp = 0;
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             ip(pp[Op], Op) && cp++
+           }
+         return cp
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1090-L1094` → after: `L2385-L2400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2385-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2385-L2400) · [Before (L1090-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1090-L1094)

```diff
-     }
-     var GC = ZC(38497);
-     class RC {
-       get radius() {
-         return this._radius
+ 
+       function Mp(pp, ip) {
+         if (void 0 !== pp) {
+           const cp = pp.length;
+           let Op = 0;
+           for (; Op < cp && ip(pp[Op]);) Op++;
+           if (Op < cp) {
+             const op = pp.slice(0, Op);
+             for (Op++; Op < cp;) {
+               const cp = pp[Op];
+               ip(cp) && op.push(cp), Op++
+             }
+             return op
+           }
+         }
+         return pp
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1096-L1097` → after: `L2402-L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2402-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2402-L2406) · [Before (L1096-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1096-L1097)

```diff
-       set radius(CC) {
-         this._radius = CC, this._buildHeight()
+ 
+       function Cp(pp, ip) {
+         let cp = 0;
+         for (let Op = 0; Op < pp.length; Op++) ip(pp[Op], Op, pp) && (pp[cp] = pp[Op], cp++);
+         pp.length = cp
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1099-L1100` → after: `L2408-L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2408-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2408-L2410) · [Before (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1099-L1100)

```diff
-       get angle() {
-         return this._angle
+ 
+       function Ep(pp) {
+         pp.length = 0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1102-L1103` → after: `L2412-L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2412-L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2412-L2419) · [Before (L1102-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1102-L1103)

```diff
-       set angle(CC) {
-         this._angle = CC, this._buildHeight()
+ 
+       function Xp(pp, ip) {
+         let cp;
+         if (void 0 !== pp) {
+           cp = [];
+           for (let Op = 0; Op < pp.length; Op++) cp.push(ip(pp[Op], Op))
+         }
+         return cp
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1105-L1106` → after: `L2421-L2423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2421-L2423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2421-L2423) · [Before (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1105-L1106)

```diff
-       _buildHeight() {
-         0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
+ 
+       function* lp(pp, ip) {
+         for (const cp of pp) yield ip(cp)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1108-L1112` → after: `L2425-L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2425-L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2425-L2437) · [Before (L1108-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1108-L1112)

```diff
-       constructor() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
-           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.directionRandomizer = ZC, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = zC, this.radius = CC
+ 
+       function Qp(pp, ip) {
+         if (void 0 !== pp)
+           for (let cp = 0; cp < pp.length; cp++) {
+             const Op = pp[cp],
+               op = ip(Op, cp);
+             if (Op !== op) {
+               const Op = pp.slice(0, cp);
+               for (Op.push(op), cp++; cp < pp.length; cp++) Op.push(ip(pp[cp], cp));
+               return Op
+             }
+           }
+         return pp
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1114-L1119` → after: `L2439-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2439-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2439-L2446) · [Before (L1114-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1114-L1119)

```diff
-       startDirectionFunction(CC, zC, ZC, QC) {
-         const wC = ZC.position.subtract(CC.getTranslation()).normalize(),
-           nC = (0, MC.RandomRange)(0, this.directionRandomizer),
-           fC = (0, MC.RandomRange)(0, this.directionRandomizer),
-           oC = (0, MC.RandomRange)(0, this.directionRandomizer);
-         wC.x += nC, wC.y += fC, wC.z += oC, wC.normalize(), QC ? zC.Av(wC) : bC.r.TransformNormalFromFloatsToRef(wC.x, wC.y, wC.z, CC, zC)
+ 
+       function Jp(pp) {
+         const ip = [];
+         for (let cp = 0; cp < pp.length; cp++) {
+           const Op = pp[cp];
+           Op && (Ic(Op) ? Pi(ip, Op) : ip.push(Op))
+         }
+         return ip
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1121-L1122` → after: `L2448-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2448-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2448-L2449) · [Before (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1121-L1122)

```diff
-       startPositionFunction(CC, zC, ZC, QC) {
-         const wC = (0, MC.RandomRange)(0, 2 * Math.PI);
+ 
+       function Bp(pp, ip) {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1124-L1131` → after: `L2451-L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2451-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2451-L2456) · [Before (L1124-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1124-L1131)

```diff
-         this.emitFromSpawnPointOnly ? nC = 1e-4 : (nC = (0, MC.RandomRange)(0, this.heightRange), nC = 1 - nC * nC);
-         let fC = this._radius - (0, MC.RandomRange)(0, this._radius * this.radiusRange);
-         fC *= nC;
-         const oC = fC * Math.sin(wC),
-           qC = fC * Math.cos(wC),
-           FC = nC * this._height;
-         if (QC) return zC.x = oC, zC.y = FC, void(zC.z = qC);
-         bC.r.TransformCoordinatesFromFloatsToRef(oC, FC, qC, CC, zC)
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             const op = ip(pp[Op], Op);
+             op && (cp = Ic(op) ? Pi(cp, op) : Yi(cp, op))
+           }
+         return cp ?? Yp
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1133-L1135` → after: `L2458-L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2458-L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2458-L2466) · [Before (L1133-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1133-L1135)

```diff
-       clone() {
-         const CC = new RC(this._radius, this._angle, this.directionRandomizer);
-         return NC.e.DeepCopy(this, CC), CC
+ 
+       function Np(pp, ip) {
+         const cp = [];
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             const op = ip(pp[Op], Op);
+             op && (Ic(op) ? Pi(cp, op) : cp.push(op))
+           }
+         return cp
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1137-L1138` → after: `L2468-L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2468-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2468-L2473) · [Before (L1137-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1137-L1138)

```diff
-       applyToShader(CC) {
-         CC.setFloat2("radius", this._radius, this.radiusRange), CC.setFloat("coneAngle", this._angle), CC.setFloat2("height", this._height, this.heightRange), CC.setFloat("directionRandomizer", this.directionRandomizer)
+ 
+       function* Tp(pp, ip) {
+         for (const cp of pp) {
+           const pp = ip(cp);
+           pp && (yield* pp)
+         }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1140-L1141` → after: `L2475-L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2475-L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2475-L2484) · [Before (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1140-L1141)

```diff
-       buildUniformLayout(CC) {
-         CC.addUniform("radius", 2), CC.addUniform("coneAngle", 1), CC.addUniform("height", 2), CC.addUniform("directionRandomizer", 1)
+ 
+       function fp(pp, ip) {
+         let cp;
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             const op = pp[Op],
+               Ip = ip(op, Op);
+             (cp || op !== Ip || Ic(Ip)) && (cp || (cp = pp.slice(0, Op)), Ic(Ip) ? Pi(cp, Ip) : cp.push(Ip))
+           }
+         return cp ?? pp
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1143-L1145` → after: `L2486-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2486-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2486-L2494) · [Before (L1143-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1143-L1145)

```diff
-       getEffectDefines() {
-         let CC = "#define CONEEMITTER";
-         return this.emitFromSpawnPointOnly && (CC += "\n#define CONEEMITTERSPAWNPOINT"), CC
+ 
+       function bp(pp, ip) {
+         const cp = [];
+         for (let Op = 0; Op < pp.length; Op++) {
+           const op = ip(pp[Op], Op);
+           if (void 0 === op) return;
+           cp.push(op)
+         }
+         return cp
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1147-L1148` → after: `L2496-L2504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2496-L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2496-L2504) · [Before (L1147-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1147-L1148)

```diff
-       getClassName() {
-         return "ConeParticleEmitter"
+ 
+       function hp(pp, ip) {
+         const cp = [];
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             const op = ip(pp[Op], Op);
+             void 0 !== op && cp.push(op)
+           }
+         return cp
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1150-L1240` → after: `L2506-L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2506-L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2506-L2511) · [Before (L1150-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1150-L1240)

```diff
-       serialize() {
-         const CC = {};
-         return CC.type = this.getClassName(), CC.radius = this._radius, CC.angle = this._angle, CC.directionRandomizer = this.directionRandomizer, CC.radiusRange = this.radiusRange, CC.heightRange = this.heightRange, CC.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, CC
-       }
-       parse(CC) {
-         this.radius = CC.radius, this.angle = CC.angle, this.directionRandomizer = CC.directionRandomizer, this.radiusRange = void 0 !== CC.radiusRange ? CC.radiusRange : 1, this.heightRange = void 0 !== CC.heightRange ? CC.heightRange : 1, this.emitFromSpawnPointOnly = void 0 != … [truncated]
-       }
-     }
-     class AC extends RC {
-       constructor() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
-           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0),
-           QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bC.r(0, 1, 0);
-         super(CC, zC), this.direction1 = ZC, this.direction2 = QC
-       }
- ... (75 more removed lines; see GitHub link above)
+ 
+       function* ap(pp, ip) {
+         for (const cp of pp) {
+           const pp = ip(cp);
+           void 0 !== pp && (yield pp)
+         }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1242-L1243` → after: `L2513-L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2513-L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2513-L2517) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1242-L1243)

```diff
-       getClassName() {
-         return "MeshParticleEmitter"
+ 
+       function np(pp, ip, cp) {
+         if (pp.has(ip)) return pp.get(ip);
+         const Op = cp();
+         return pp.set(ip, Op), Op
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1245-L1247` → after: `L2519-L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2519-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2519-L2521) · [Before (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1245-L1247)

```diff
-       serialize() {
-         const CC = {};
-         return CC.type = this.getClassName(), CC.direction1 = this.direction1.VZC(), CC.direction2 = this.direction2.VZC(), CC.meshId = this.mesh?.id, CC.useMeshNormalsForDirection = this.useMeshNormalsForDirection, CC
+ 
+       function Fp(pp, ip) {
+         return !pp.has(ip) && (pp.add(ip), !0)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1249-L1250` → after: `L2523-L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2523-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2523-L2525) · [Before (L1249-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1249-L1250)

```diff
-       parse(CC, zC) {
-         bC.r.FromArrayToRef(CC.direction1, 0, this.direction1), bC.r.FromArrayToRef(CC.direction2, 0, this.direction2), CC.meshId && zC && (this.mesh = zC.getLastMeshById(CC.meshId)), this.useMeshNormalsForDirection = CC.useMeshNormalsForDirection
+ 
+       function* gp(pp) {
+         yield pp
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1252-L1255` → after: `L2527-L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2527-L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2527-L2548) · [Before (L1252-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1252-L1255)

```diff
-     }
-     class JC {
-       get targetStopDuration() {
-         return this._targetStopDuration
+ 
+       function Gp(pp, ip, cp) {
+         let Op;
+         if (void 0 !== pp) {
+           Op = [];
+           const op = pp.length;
+           let Ip, Sp, xp = 0,
+             Lp = 0;
+           for (; xp < op;) {
+             for (; Lp < op;) {
+               if (Sp = ip(pp[Lp], Lp), 0 === Lp) Ip = Sp;
+               else if (Sp !== Ip) break;
+               Lp++
+             }
+             if (xp < Lp) {
+               const ip = cp(pp.slice(xp, Lp), Ip, xp, Lp);
+ ... (6 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1257-L1258` → after: `L2550-L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2550-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2550-L2557) · [Before (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1257-L1258)

```diff
-       set targetStopDuration(CC) {
-         this._targetStopDuration !== CC && (this._targetStopDuration = CC)
+ 
+       function rp(pp, ip) {
+         if (void 0 === pp) return;
+         const cp = new Map;
+         return pp.forEach(((pp, Op) => {
+           const [op, Ip] = ip(Op, pp);
+           cp.set(op, Ip)
+         })), cp
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1260` → after: `L2559-L2565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2559-L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2559-L2565) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1260)

```diff
-       get isNodeGenerated() {
+ 
+       function Zp(pp, ip) {
+         if (void 0 !== pp) {
+           if (void 0 === ip) return pp.length > 0;
+           for (let cp = 0; cp < pp.length; cp++)
+             if (ip(pp[cp])) return !0
+         }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1263-L1264` → after: `L2568-L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2568-L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2568-L2572) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1263-L1264)

```diff
-       get noiseTexture() {
-         return this._noiseTexture
+ 
+       function zp(pp, ip, cp) {
+         let Op;
+         for (let op = 0; op < pp.length; op++) ip(pp[op]) ? Op = void 0 === Op ? op : Op : void 0 !== Op && (cp(Op, op), Op = void 0);
+         void 0 !== Op && cp(Op, pp.length)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1266-L1267` → after: `L2574-L2576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2574-L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2574-L2576) · [Before (L1266-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1266-L1267)

```diff
-       set noiseTexture(CC) {
-         this._noiseTexture !== CC && (this._noiseTexture = CC, this._reset())
+ 
+       function sp(pp, ip) {
+         return void 0 === ip || 0 === ip.length ? pp : void 0 === pp || 0 === pp.length ? ip : [...pp, ...ip]
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1269-L1270` → after: `L2578-L2580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2578-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2578-L2580) · [Before (L1269-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1269-L1270)

```diff
-       get attractors() {
-         return this._attractors.slice(0)
+ 
+       function Kp(pp, ip) {
+         return ip
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1272-L1273` → after: `L2582-L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2582-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2582-L2584) · [Before (L1272-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1272-L1273)

```diff
-       addAttractor(CC) {
-         this._attractors.push(CC)
+ 
+       function Vp(pp) {
+         return pp.map(Kp)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1275-L1276` → after: `L2586-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2586-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2586-L2599) · [Before (L1275-L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1275-L1276)

```diff
-       removeAttractor(CC) {
-         const zC = this._attractors.indexOf(CC); - 1 !== zC && this._attractors.splice(zC, 1)
+ 
+       function ii(pp, ip, cp) {
+         const Op = Vp(pp);
+         ! function(pp, ip, cp) {
+           ip.sort(((ip, Op) => cp(pp[ip], pp[Op]) || qc(ip, Op)))
+         }(pp, Op, cp);
+         let op = pp[Op[0]];
+         const Ip = [Op[0]];
+         for (let Sp = 1; Sp < Op.length; Sp++) {
+           const cp = Op[Sp],
+             xp = pp[cp];
+           ip(op, xp) || (Ip.push(cp), op = xp)
+         }
+         return Ip.sort(), Ip.map((ip => pp[ip]))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1278-L1279` → after: `L2601-L2607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2601-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2601-L2607) · [Before (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1278-L1279)

```diff
-       get _isAnimationSheetEnabled() {
-         return this._animationSheetEnabled
+ 
+       function ci(pp, ip, cp) {
+         return 0 === pp.length ? [] : 1 === pp.length ? pp.slice() : cp ? ii(pp, ip, cp) : function(pp, ip) {
+           const cp = [];
+           for (let Op = 0; Op < pp.length; Op++) Wi(cp, pp[Op], ip);
+           return cp
+         }(pp, ip)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1281-L1282` → after: `L2609-L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2609-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2609-L2611) · [Before (L1281-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1281-L1282)

```diff
-       set _isAnimationSheetEnabled(CC) {
-         this._animationSheetEnabled !== CC && (this._animationSheetEnabled = CC)
+ 
+       function Oi() {
+         return []
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1284-L1285` → after: `L2613-L2625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2613-L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2613-L2625) · [Before (L1284-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1284-L1285)

```diff
-       get isAnimationSheetEnabled() {
-         return this._isAnimationSheetEnabled
+ 
+       function oi(pp, ip, cp, Op, op) {
+         if (0 === pp.length) return pp.push(ip), !0;
+         const Ip = Ci(pp, ip, Uc, cp);
+         if (Ip < 0) {
+           if (Op && !op) {
+             const cp = ~Ip;
+             if (cp > 0 && Op(ip, pp[cp - 1])) return !1;
+             if (cp < pp.length && Op(ip, pp[cp])) return pp.splice(cp, 1, ip), !0
+           }
+           return pp.splice(~Ip, 0, ip), !0
+         }
+         return !!op && (pp.splice(Ip, 0, ip), !0)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1287-L1288` → after: `L2627-L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2627-L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2627-L2645) · [Before (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1287-L1288)

```diff
-       set isAnimationSheetEnabled(CC) {
-         this._isAnimationSheetEnabled != CC && (this._isAnimationSheetEnabled = CC, this._reset())
+ 
+       function Ii(pp, ip, cp) {
+         return function(pp, ip) {
+           if (0 === pp.length) return Yp;
+           let cp = pp[0];
+           const Op = [cp];
+           for (let op = 1; op < pp.length; op++) {
+             const Ip = pp[op];
+             switch (ip(Ip, cp)) {
+               case !0:
+               case 0:
+                 continue;
+               case -1:
+                 return dO.fail("Array is unsorted.")
+             }
+             Op.push(cp = Ip)
+ ... (3 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1290-L1291` → after: `L2647-L2654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2647-L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2647-L2654) · [Before (L1290-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1290-L1291)

```diff
-       get useLogarithmicDepth() {
-         return this._useLogarithmicDepth
+ 
+       function Si(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
+         if (void 0 === pp || void 0 === ip) return pp === ip;
+         if (pp.length !== ip.length) return !1;
+         for (let Op = 0; Op < pp.length; Op++)
+           if (!cp(pp[Op], ip[Op], Op)) return !1;
+         return !0
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1293-L1294` → after: `L2656-L2664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2656-L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2656-L2664) · [Before (L1293-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1293-L1294)

```diff
-       set useLogarithmicDepth(CC) {
-         this._useLogarithmicDepth = CC && this.Km().mg().getCaps().fragmentDepthSupported
+ 
+       function xi(pp) {
+         let ip;
+         if (void 0 !== pp)
+           for (let cp = 0; cp < pp.length; cp++) {
+             const Op = pp[cp];
+             (ip ?? !Op) && (ip ?? (ip = pp.slice(0, cp)), Op && ip.push(Op))
+           }
+         return ip ?? pp
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1296-L1297` → after: `L2666-L2682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2666-L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2666-L2682) · [Before (L1296-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1296-L1297)

```diff
-       Km() {
-         return this._scene
+ 
+       function Li(pp, ip, cp) {
+         if (!ip || !pp || 0 === ip.length || 0 === pp.length) return ip;
+         const Op = [];
+         pp: for (let op = 0, Ip = 0; Ip < ip.length; Ip++) {
+           Ip > 0 && dO.assertGreaterThanOrEqual(cp(ip[Ip], ip[Ip - 1]), 0);
+           ip: for (const Sp = op; op < pp.length; op++) switch (op > Sp && dO.assertGreaterThanOrEqual(cp(pp[op], pp[op - 1]), 0), cp(ip[Ip], pp[op])) {
+             case -1:
+               Op.push(ip[Ip]);
+               continue pp;
+             case 0:
+               continue pp;
+             case 1:
+               continue ip
+           }
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1299-L1300` → after: `L2684-L2686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2684-L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2684-L2686) · [Before (L1299-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1299-L1300)

```diff
-       _hasTargetStopDurationDependantGradient() {
-         return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
+ 
+       function Yi(pp, ip) {
+         return void 0 === ip ? pp : void 0 === pp ? [ip] : (pp.push(ip), pp)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1302-L1321` → after: `L2688-L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2688-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2688-L2690) · [Before (L1302-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1302-L1321)

```diff
-       _setEngineBasedOnBlendMode(CC) {
-         switch (CC) {
-           case JC.BLENDMODE_MULTIPLYADD:
-             return;
-           case JC.BLENDMODE_ADD:
-             CC = 1;
-             break;
-           case JC.BLENDMODE_ONEONE:
-             CC = 6;
-             break;
-           case JC.BLENDMODE_STANDARD:
-             CC = 2;
-             break;
-           case JC.BLENDMODE_MULTIPLY:
-             CC = 4;
-             break;
- ... (4 more removed lines; see GitHub link above)
+ 
+       function Di(pp, ip) {
+         return void 0 === pp ? ip : void 0 === ip ? pp : Ic(pp) ? Ic(ip) ? sp(pp, ip) : Yi(pp, ip) : Ic(ip) ? Yi(ip, pp) : [pp, ip]
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1323-L1324` → after: `L2692-L2694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2692-L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2692-L2694) · [Before (L1323-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1323-L1324)

```diff
-       getDragGradients() {
-         return this._dragGradients
+ 
+       function Ai(pp, ip) {
+         return ip < 0 ? pp.length + ip : ip
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1326-L1327` → after: `L2696-L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2696-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2696-L2702) · [Before (L1326-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1326-L1327)

```diff
-       getLimitVelocityGradients() {
-         return this._limitVelocityGradients
+ 
+       function Pi(pp, ip, cp, Op) {
+         if (void 0 === ip || 0 === ip.length) return pp;
+         if (void 0 === pp) return ip.slice(cp, Op);
+         cp = void 0 === cp ? 0 : Ai(ip, cp), Op = void 0 === Op ? ip.length : Ai(ip, Op);
+         for (let op = cp; op < Op && op < ip.length; op++) void 0 !== ip[op] && pp.push(ip[op]);
+         return pp
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1329-L1330` → after: `L2704-L2706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2704-L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2704-L2706) · [Before (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1329-L1330)

```diff
-       getColorGradients() {
-         return this._colorGradients
+ 
+       function Wi(pp, ip, cp) {
+         return !mp(pp, ip, cp) && (pp.push(ip), !0)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1332-L1333` → after: `L2708-L2710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2708-L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2708-L2710) · [Before (L1332-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1332-L1333)

```diff
-       getSizeGradients() {
-         return this._sizeGradients
+ 
+       function yi(pp, ip, cp) {
+         return void 0 !== pp ? (Wi(pp, ip, cp), pp) : [ip]
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1335-L1336` → after: `L2712-L2714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2712-L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2712-L2714) · [Before (L1335-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1335-L1336)

```diff
-       getColorRemapGradients() {
-         return this._colorRemapGradients
+ 
+       function Ui(pp, ip) {
+         return 0 === pp.length ? Yp : pp.slice().sort(ip)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1338-L1339` → after: `L2716-L2718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2716-L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2716-L2718) · [Before (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1338-L1339)

```diff
-       getAlphaRemapGradients() {
-         return this._alphaRemapGradients
+ 
+       function* wi(pp) {
+         for (let ip = pp.length - 1; ip >= 0; ip--) yield pp[ip]
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1341-L1342` → after: `L2720-L2726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2720-L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2720-L2726) · [Before (L1341-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1341-L1342)

```diff
-       getLifeTimeGradients() {
-         return this._lifeTimeGradients
+ 
+       function vi(pp, ip, cp, Op) {
+         for (; cp < Op;) {
+           if (pp[cp] !== ip[cp]) return !1;
+           cp++
+         }
+         return !0
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1344-L1345` → after: `L2728-L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2728-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2728-L2733) · [Before (L1344-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1344-L1345)

```diff
-       getAngularSpeedGradients() {
-         return this._angularSpeedGradients
+       var ti = Array.prototype.at ? (pp, ip) => null == pp ? void 0 : pp.at(ip) : (pp, ip) => {
+         if (void 0 !== pp && (ip = Ai(pp, ip)) < pp.length) return pp[ip]
+       };
+ 
+       function Hi(pp) {
+         return void 0 === pp || 0 === pp.length ? void 0 : pp[0]
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1347-L1348` → after: `L2735-L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2735-L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2735-L2738) · [Before (L1347-L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1347-L1348)

```diff
-       getVelocityGradients() {
-         return this._velocityGradients
+ 
+       function di(pp) {
+         if (void 0 !== pp)
+           for (const ip of pp) return ip
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1350-L1351` → after: `L2740-L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2740-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2740-L2742) · [Before (L1350-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1350-L1351)

```diff
-       getStartSizeGradients() {
-         return this._startSizeGradients
+ 
+       function ei(pp) {
+         return dO.assert(0 !== pp.length), pp[0]
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1353-L1354` → after: `L2744-L2747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2744-L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2744-L2747) · [Before (L1353-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1353-L1354)

```diff
-       getEmitRateGradients() {
-         return this._emitRateGradients
+ 
+       function ui(pp) {
+         for (const ip of pp) return ip;
+         dO.fail("iterator is empty")
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1356-L1357` → after: `L2749-L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2749-L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2749-L2751) · [Before (L1356-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1356-L1357)

```diff
-       addEmitRateGradient(CC, zC, ZC) {
-         return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, CC, zC, ZC), this
+ 
+       function ji(pp) {
+         return void 0 === pp || 0 === pp.length ? void 0 : pp[pp.length - 1]
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1359-L1360` → after: `L2753-L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2753-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2753-L2755) · [Before (L1359-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1359-L1360)

```diff
-       removeEmitRateGradient(CC) {
-         return this._removeFactorGradient(this._emitRateGradients, CC), this
+ 
+       function ki(pp) {
+         return dO.assert(0 !== pp.length), pp[pp.length - 1]
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1362-L1363` → after: `L2757-L2759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2757-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2757-L2759) · [Before (L1362-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1362-L1363)

```diff
-       get direction1() {
-         return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : bC.r.Zero()
+ 
+       function mi(pp) {
+         return void 0 !== pp && 1 === pp.length ? pp[0] : void 0
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1365-L1366` → after: `L2761-L2763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2761-L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2761-L2763) · [Before (L1365-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1365-L1366)

```diff
-       set direction1(CC) {
-         this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = CC)
+ 
+       function Ri(pp) {
+         return dO.checkDefined(mi(pp))
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1368-L1369` → after: `L2765-L2767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2765-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2765-L2767) · [Before (L1368-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1368-L1369)

```diff
-       get direction2() {
-         return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : bC.r.Zero()
+ 
+       function qi(pp) {
+         return void 0 !== pp && 1 === pp.length ? pp[0] : pp
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1371-L1372` → after: `L2769-L2772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2769-L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2769-L2772) · [Before (L1371-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1371-L1372)

```diff
-       set direction2(CC) {
-         this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = CC)
+ 
+       function Mi(pp, ip, cp) {
+         const Op = pp.slice(0);
+         return Op[ip] = cp, Op
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1374-L1375` → after: `L2774-L2776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2774-L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2774-L2776) · [Before (L1374-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1374-L1375)

```diff
-       get minEmitBox() {
-         return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : bC.r.Zero()
+ 
+       function Ci(pp, ip, cp, Op, op) {
+         return Ei(pp, cp(ip), cp, Op, op)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1377-L1378` → after: `L2778-L2795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2778-L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2778-L2795) · [Before (L1377-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1377-L1378)

```diff
-       set minEmitBox(CC) {
-         this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = CC)
+ 
+       function Ei(pp, ip, cp, Op, op) {
+         if (!Zp(pp)) return -1;
+         let Ip = op ?? 0,
+           Sp = pp.length - 1;
+         for (; Ip <= Sp;) {
+           const op = Ip + (Sp - Ip >> 1);
+           switch (Op(cp(pp[op], op), ip)) {
+             case -1:
+               Ip = op + 1;
+               break;
+             case 0:
+               return op;
+             case 1:
+               Sp = op - 1
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1380-L1381` → after: `L2797-L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2797-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2797-L2809) · [Before (L1380-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1380-L1381)

```diff
-       get maxEmitBox() {
-         return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : bC.r.Zero()
+ 
+       function Xi(pp, ip, cp, Op, op) {
+         if (pp && pp.length > 0) {
+           const Ip = pp.length;
+           if (Ip > 0) {
+             let Sp = void 0 === Op || Op < 0 ? 0 : Op;
+             const xp = void 0 === op || Sp + op > Ip - 1 ? Ip - 1 : Sp + op;
+             let Lp;
+             for (arguments.length <= 2 ? (Lp = pp[Sp], Sp++) : Lp = cp; Sp <= xp;) Lp = ip(Lp, pp[Sp], Sp), Sp++;
+             return Lp
+           }
+         }
+         return cp
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1383-L1384` → after: `L2811-L2814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2811-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2811-L2814) · [Before (L1383-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1383-L1384)

```diff
-       set maxEmitBox(CC) {
-         this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = CC)
+       var li = Object.prototype.hasOwnProperty;
+ 
+       function Qi(pp, ip) {
+         return li.call(pp, ip)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1386-L1387` → after: `L2816-L2818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2816-L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2816-L2818) · [Before (L1386-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1386-L1387)

```diff
-       get billboardMode() {
-         return this._billboardMode
+ 
+       function Ji(pp, ip) {
+         return li.call(pp, ip) ? pp[ip] : void 0
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1389-L1390` → after: `L2820-L2824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2820-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2820-L2824) · [Before (L1389-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1389-L1390)

```diff
-       set billboardMode(CC) {
-         this._billboardMode !== CC && (this._billboardMode = CC, this._reset())
+ 
+       function Bi(pp) {
+         const ip = [];
+         for (const cp in pp) li.call(pp, cp) && ip.push(cp);
+         return ip
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1392-L1393` → after: `L2826-L2833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2826-L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2826-L2833) · [Before (L1392-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1392-L1393)

```diff
-       get isBillboardBased() {
-         return this._isBillboardBased
+ 
+       function Ni(pp) {
+         const ip = [];
+         do {
+           const cp = Object.getOwnPropertyNames(pp);
+           for (const pp of cp) Wi(ip, pp)
+         } while (pp = Object.getPrototypeOf(pp));
+         return ip
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1395-L1396` → after: `L2835-L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2835-L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2835-L2839) · [Before (L1395-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1395-L1396)

```diff
-       set isBillboardBased(CC) {
-         this._isBillboardBased !== CC && (this._isBillboardBased = CC, this._reset())
+ 
+       function Ti(pp) {
+         const ip = [];
+         for (const cp in pp) li.call(pp, cp) && ip.push(pp[cp]);
+         return ip
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1398-L1399` → after: `L2841-L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2841-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2841-L2845) · [Before (L1398-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1398-L1399)

```diff
-       get imageProcessingConfiguration() {
-         return this._imageProcessingConfiguration
+ 
+       function fi(pp, ip) {
+         const cp = new Array(pp);
+         for (let Op = 0; Op < pp; Op++) cp[Op] = ip(Op);
+         return cp
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1401-L1402` → after: `L2847-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2847-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2847-L2851) · [Before (L1401-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1401-L1402)

```diff
-       set imageProcessingConfiguration(CC) {
-         this._attachImageProcessingConfiguration(CC)
+ 
+       function bi(pp, ip) {
+         const cp = [];
+         for (const Op of pp) cp.push(ip ? ip(Op) : Op);
+         return cp
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1404-L1405` → after: `L2853-L2859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2853-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2853-L2859) · [Before (L1404-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1404-L1405)

```diff
-       _attachImageProcessingConfiguration(CC) {
-         CC !== this._imageProcessingConfiguration && (!CC && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = CC)
+ 
+       function ai(pp) {
+         for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
+         for (const op of cp)
+           if (void 0 !== op)
+             for (const ip in op) Qi(op, ip) && (pp[ip] = op[ip]);
+         return pp
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1407-L1410` → after: `L2861-L2872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2861-L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2861-L2872) · [Before (L1407-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1407-L1410)

```diff
-       _reset() {}
-       _addFactorGradient(CC, zC, ZC, wC) {
-         const bC = new QC.g(zC, ZC, wC);
-         CC.push(bC), CC.sort(((CC, zC) => CC.gradient < zC.gradient ? -1 : CC.gradient > zC.gradient ? 1 : 0))
+ 
+       function ni(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
+         if (pp === ip) return !0;
+         if (!pp || !ip) return !1;
+         for (const Op in pp)
+           if (li.call(pp, Op)) {
+             if (!li.call(ip, Op)) return !1;
+             if (!cp(pp[Op], ip[Op])) return !1
+           } for (const Op in ip)
+           if (li.call(ip, Op) && !li.call(pp, Op)) return !1;
+         return !0
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1412-L1420` → after: `L2874-L2881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2874-L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2874-L2881) · [Before (L1412-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1412-L1420)

```diff
-       _removeFactorGradient(CC, zC) {
-         if (!CC) return;
-         let ZC = 0;
-         for (const QC of CC) {
-           if (QC.gradient === zC) {
-             CC.splice(ZC, 1);
-             break
-           }
-           ZC++
+ 
+       function Fi(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
+         const Op = new Map;
+         for (let op = 0; op < pp.length; op++) {
+           const Ip = pp[op],
+             Sp = ip(Ip);
+           void 0 !== Sp && Op.set(Sp, cp(Ip))
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1423-L1431` → after: `L2885-L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2885-L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2885-L2891) · [Before (L1423-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1423-L1431)

```diff
-       _removeGradientAndTexture(CC, zC, ZC) {
-         if (!zC) return this;
-         let QC = 0;
-         for (const wC of zC) {
-           if (wC.gradient === CC) {
-             zC.splice(QC, 1);
-             break
-           }
-           QC++
+ 
+       function gi(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
+         const Op = [];
+         for (let op = 0; op < pp.length; op++) {
+           const Ip = pp[op];
+           Op[ip(Ip)] = cp(Ip)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1433-L1443` → after: `L2893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2893) · [Before (L1433-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1433-L1443)

```diff
-         return ZC && ZC.dispose(), this
-       }
-       constructor(CC) {
-         this.animations = [], this.renderingGroupId = 0, this.emitter = bC.r.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, t … [truncated]
-       }
-       createPointEmitter(CC, zC) {
-         const ZC = function(CC, zC) {
-           const ZC = new gC;
-           return ZC.direction1 = CC, ZC.direction2 = zC, ZC
-         }(CC, zC);
-         return this.particleEmitterType = ZC, ZC
+         return Op
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1445-L1449` → after: `L2895-L2903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2895-L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2895-L2903) · [Before (L1445-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1445-L1449)

```diff
-       createHemisphericEmitter() {
-         const CC = function() {
-           return new SC(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
-         return this.particleEmitterType = CC, CC
+ 
+       function Gi(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
+         const Op = pc();
+         for (let op = 0; op < pp.length; op++) {
+           const Ip = pp[op];
+           Op.add(ip(Ip), cp(Ip))
+         }
+         return Op
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1451-L1455` → after: `L2905-L2908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2905-L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2905-L2908) · [Before (L1451-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1451-L1455)

```diff
-       createSphereEmitter() {
-         const CC = function() {
-           return new pC(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
-         return this.particleEmitterType = CC, CC
+ 
+       function ri(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
+         return bi(Gi(pp, ip).values(), cp)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1457-L1493` → after: `L2910-L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2910-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2910-L2919) · [Before (L1457-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1457-L1493)

```diff
-       createDirectedSphereEmitter() {
-         const CC = function() {
-           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-             zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new bC.r(0, 1, 0),
-             ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0);
-           return new PC(CC, zC, ZC)
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new bC.r(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0));
-         return this.particleEmitterType = CC, CC
-       }
-       createCylinderEmitter() {
-         const CC = function() {
-           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-             zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-             ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-             QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-           return new GC.i(CC, zC, ZC, QC)
- ... (21 more removed lines; see GitHub link above)
+ 
+       function Zi(pp, ip) {
+         const cp = {};
+         if (void 0 !== pp)
+           for (let Op = 0; Op < pp.length; Op++) {
+             const op = pp[Op],
+               Ip = `${ip(op)}`;
+             (cp[Ip] ?? (cp[Ip] = [])).push(op)
+           }
+         return cp
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1495-L1538` → after: `L2921-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2921-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2921-L2925) · [Before (L1495-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1495-L1538)

```diff
-       createDirectedConeEmitter() {
-         const CC = function() {
-           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-             zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
-             ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0),
-             QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bC.r(0, 1, 0);
-           return new AC(CC, zC, ZC, QC)
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0), arguments.length > 3 && void 0 !== argum … [truncated]
-         return this.particleEmitterType = CC, CC
-       }
-       createBoxEmitter(CC, zC, ZC, QC) {
-         const wC = new WC.c;
-         return this.particleEmitterType = wC, this.direction1 = CC, this.direction2 = zC, this.minEmitBox = ZC, this.maxEmitBox = QC, wC
-       }
-       createMeshEmitter() {
-         const CC = function() {
- ... (28 more removed lines; see GitHub link above)
+ 
+       function zi(pp) {
+         const ip = {};
+         for (const cp in pp) li.call(pp, cp) && (ip[cp] = pp[cp]);
+         return ip
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1540-L1550` → after: `L2927-L2932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2927-L2932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2927-L2932) · [Before (L1540-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1540-L1550)

```diff
-       _inheritParticleInfoToSubEmitter(CC) {
-         if (CC.particleSystem.emitter.position) {
-           const zC = CC.particleSystem.emitter;
-           if (zC.position.Av(this.position), CC.inheritDirection) {
-             const CC = bC.j.Eg[0];
-             this.direction.normalizeToRef(CC), zC.setDirection(CC, 0, Math.PI / 2)
-           }
-         } else {
-           CC.particleSystem.emitter.Av(this.position)
-         }
-         this.direction.scaleToRef(CC.inheritedVelocityAmount / 2, bC.j.Eg[0]), CC.particleSystem._inheritedVelocityOffset.Av(bC.j.Eg[0])
+ 
+       function si(pp, ip) {
+         const cp = {};
+         for (const Op in ip) li.call(ip, Op) && (cp[Op] = ip[Op]);
+         for (const Op in pp) li.call(pp, Op) && (cp[Op] = pp[Op]);
+         return cp
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1552-L1554` → after: `L2934-L2936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2934-L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2934-L2936) · [Before (L1552-L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1552-L1554)

```diff
-       _inheritParticleInfoToSubEmitters() {
-         if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
-           for (const CC of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(CC)
+ 
+       function Ki(pp, ip) {
+         for (const cp in ip) li.call(ip, cp) && (pp[cp] = ip[cp])
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1556-L1557` → after: `L2938-L2940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2938-L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2938-L2940) · [Before (L1556-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1556-L1557)

```diff
-       _reset() {
-         this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = iC._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
+ 
+       function Vi(pp, ip) {
+         return null == ip ? void 0 : ip.bind(pp)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1559-L1560` → after: `L2942-L2945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2942-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2942-L2945) · [Before (L1559-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1559-L1560)

```diff
-       copyTo(CC) {
-         CC.position.Av(this.position), this._properties.initialDirection ? CC._properties.initialDirection ? CC._properties.initialDirection.Av(this._properties.initialDirection) : CC._properties.initialDirection = this._properties.initialDirection.clone() : CC._properties.initia … [truncated]
+ 
+       function pc() {
+         const pp = new Map;
+         return pp.add = ic, pp.remove = cc, pp
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1562-L1567` → after: `L2947-L2950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2947-L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2947-L2950) · [Before (L1562-L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1562-L1567)

```diff
-     }
-     iC._Count = 0;
-     var vC = ZC(40934);
-     class eC {
-       get currentFrame() {
-         return this._currentFrame
+ 
+       function ic(pp, ip) {
+         let cp = this.get(pp);
+         return void 0 !== cp ? cp.push(ip) : this.set(pp, cp = [ip]), cp
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1569-L1570` → after: `L2952-L2955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2952-L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2952-L2955) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1569-L1570)

```diff
-       get _evaluatedFrom() {
-         return this._playbackFrom
+ 
+       function cc(pp, ip) {
+         const cp = this.get(pp);
+         void 0 !== cp && (pO(cp, ip), cp.length || this.delete(pp))
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1572-L1573` → after: `L2957-L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2957-L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2957-L2979) · [Before (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1572-L1573)

```diff
-       get _evaluatedTo() {
-         return this._playbackTo
+ 
+       function Oc(pp) {
+         const ip = (null == pp ? void 0 : pp.slice()) ?? [];
+         let cp = 0;
+ 
+         function Op() {
+           return cp === ip.length
+         }
+         return {
+           enqueue: function() {
+             ip.push(...arguments)
+           },
+           dequeue: function() {
+             if (Op()) throw new Error("Queue is empty");
+             const pp = ip[cp];
+             if (ip[cp] = void 0, cp++, cp > 100 && cp > ip.length >> 1) {
+ ... (7 more added lines; see GitHub link above)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1575-L1576` → after: `L2981-L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L2981-L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L2981-L3042) · [Before (L1575-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1575-L1576)

```diff
-       get _evaluatedProgress() {
-         return this._playbackProgress
+ 
+       function oc(pp, ip) {
+         const cp = new Map;
+         let Op = 0;
+ 
+         function* op() {
+           for (const pp of cp.values()) Ic(pp) ? yield* pp: yield pp
+         }
+         const Ip = {
+           has(Op) {
+             const op = pp(Op);
+             if (!cp.has(op)) return !1;
+             const Ip = cp.get(op);
+             return Ic(Ip) ? mp(Ip, Op, ip) : ip(Ip, Op)
+           },
+           add(op) {
+ ... (46 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1578-L1579` → after: `L3044-L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3044-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3044-L3046) · [Before (L1578-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1578-L1579)

```diff
-       get _evaluatedSyncRoot() {
-         return this._playbackSyncRoot
+ 
+       function Ic(pp) {
+         return Array.isArray(pp)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1581-L1582` → after: `L3048-L3050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3048-L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3048-L3050) · [Before (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1581-L1582)

```diff
-       get _evaluatedJump() {
-         return this._playbackJumped
+ 
+       function Sc(pp) {
+         return Ic(pp) ? pp : [pp]
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1584-L1585` → after: `L3052-L3054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3052-L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3052-L3054) · [Before (L1584-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1584-L1585)

```diff
-       get weight() {
-         return this._weight
+ 
+       function xc(pp) {
+         return "string" === typeof pp
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1587-L1588` → after: `L3056-L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3056-L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3056-L3058) · [Before (L1587-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1587-L1588)

```diff
-       get currentValue() {
-         return this._currentValue
+ 
+       function Lc(pp) {
+         return "number" === typeof pp
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1590-L1591` → after: `L3060-L3062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3060-L3062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3060-L3062) · [Before (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1590-L1591)

```diff
-       get targetPath() {
-         return this._targetPath
+ 
+       function Yc(pp, ip) {
+         return void 0 !== pp && ip(pp) ? pp : void 0
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1593-L1594` → after: `L3064-L3066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3064-L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3064-L3066) · [Before (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1593-L1594)

```diff
-       get target() {
-         return this._currentActiveTarget
+ 
+       function Dc(pp, ip) {
+         return void 0 !== pp && ip(pp) ? pp : dO.fail(`Invalid cast. The supplied value ${pp} did not pass the test '${dO.getFunctionName(ip)}'.`)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1596-L1597` → after: `L3068-L3072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3068-L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3068-L3072) · [Before (L1596-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1596-L1597)

```diff
-       get isAdditive() {
-         return this._host && this._host.isAdditive
+ 
+       function Ac(pp) {}
+ 
+       function Pc() {
+         return !1
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1599-L1619` → after: `L3074-L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3074-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3074-L3076) · [Before (L1599-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1599-L1619)

```diff
-       constructor(CC, zC, ZC, QC) {
-         if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget  … [truncated]
-             key: 0,
-             repeatCount: 0,
-             zb: this._getCorrectLoopMode()
-           }, this._animation.dataType === vC.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = bC.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
-           const CC = {
-             frame: 0,
-             value: this._keys[0].value
-           };
-           this._keys.splice(0, 0, CC)
-         }
-         if (this.wV instanceof Array) {
-           let CC = 0;
-           for (const zC of this.wV) this._preparePath(zC, CC), this._getOriginalValues(CC), CC++;
-           this._targetIsArray = !0
- ... (5 more removed lines; see GitHub link above)
+ 
+       function Wc() {
+         return !0
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1621-L1632` → after: `L3078-L3082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3078-L3082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3078-L3082) · [Before (L1621-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1621-L1632)

```diff
-       _preparePath(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const ZC = this._animation.targetPropertyPath;
-         if (ZC.length > 1) {
-           let QC = CC;
-           for (let CC = 0; CC < ZC.length - 1; CC++) {
-             const zC = ZC[CC];
-             if (QC = QC[zC], void 0 === QC) throw new Error(`Invalid property (${zC}) in property path (${ZC.join(".")})`)
-           }
-           this._targetPath = ZC[ZC.length - 1], this._activeTargets[zC] = QC
-         } else this._targetPath = ZC[0], this._activeTargets[zC] = CC;
-         if (void 0 === this._activeTargets[zC][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${ZC.join(".")})`)
+ 
+       function yc() {}
+ 
+       function Uc(pp) {
+         return pp
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1634-L1635` → after: `L3084-L3086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3084-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3084-L3086) · [Before (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1634-L1635)

```diff
-       get animation() {
-         return this._animation
+ 
+       function wc(pp) {
+         return pp.toLowerCase()
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1637-L1675` → after: `L3088-L3091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3088-L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3088-L3091) · [Before (L1637-L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1637-L1675)

```diff
-       reset() {
-         if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
-           if (this.wV instanceof Array) {
-             let CC = 0;
-             for (const zC of this.wV) void 0 !== this._originalValue[CC] && this._setValue(zC, this._activeTargets[CC], this._originalValue[CC], -1, CC), CC++
-           } else void 0 !== this._originalValue[0] && this._setValue(this.wV, this._directTarget, this._originalValue[0], -1, 0);
-         this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
-         for (let CC = 0; CC < this._events.length; CC++) this._events[CC].isDone = !1
-       }
-       isStopped() {
-         return this._stopped
-       }
-       dispose() {
-         const CC = this._animation.runtimeAnimations.indexOf(this);
-         CC > -1 && this._animation.runtimeAnimations.splice(CC, 1)
-       }
- ... (23 more removed lines; see GitHub link above)
+       var vc = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g;
+ 
+       function tc(pp) {
+         return vc.test(pp) ? pp.replace(vc, wc) : pp
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1677-L1685` → after: `L3093-L3095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3093-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3093-L3095) · [Before (L1677-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1677-L1685)

```diff
-       _registerTargetForLateAnimationBinding(CC, zC) {
-         const ZC = CC.target;
-         this._scene._registeredForLateAnimationBindings.pushNoDuplicate(ZC), ZC._lateAnimationHolders || (ZC._lateAnimationHolders = {}), ZC._lateAnimationHolders[CC.targetPath] || (ZC._lateAnimationHolders[CC.targetPath] = {
-           totalWeight: 0,
-           totalAdditiveWeight: 0,
-           animations: [],
-           additiveAnimations: [],
-           originalValue: zC
-         }), CC.isAdditive ? (ZC._lateAnimationHolders[CC.targetPath].additiveAnimations.push(CC), ZC._lateAnimationHolders[CC.targetPath].totalAdditiveWeight += CC.weight) : (ZC._lateAnimationHolders[CC.targetPath].animations.push(CC), ZC._lateAnimationHolders[CC.targetPath].tota … [truncated]
+ 
+       function Hc() {
+         throw new Error("Not implemented")
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1687-L1735` → after: `L3097-L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3097-L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3097-L3098) · [Before (L1687-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1687-L1735)

```diff
-       _setValue(CC, zC, ZC, QC, wC) {
-         const nC = this._scene._animationWrites,
-           fC = this._scene._animationWriteCount++;
-         let oC = nC[fC];
-         if (oC || (oC = nC[fC] = {
-             runtimeAnimation: this,
-             target: CC,
-             weight: QC,
-             additive: !1,
-             blendingFactor: 1,
-             Mp: !1
-           }), oC.runtimeAnimation = this, oC.target = CC, oC.weight = QC, oC.additive = this.isAdditive, oC.Mp = !1, this._currentActiveTarget = zC, this._weight = QC, this._enableBlending && this._blendingFactor <= 1) {
-           if (!this._originalBlendValue) {
-             const CC = zC[this._targetPath];
-             CC.clone ? this._originalBlendValue = CC.clone() : this._originalBlendValue = CC
-           }
- ... (33 more removed lines; see GitHub link above)
+ 
+       function dc(pp) {
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1737-L1827` → after: `L3100-L3108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3100-L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3100-L3108) · [Before (L1737-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1737-L1827)

```diff
-         if (this._coreRuntimeAnimation) WC = ZC - zC, oC = this._coreRuntimeAnimation.currentFrame, this._currentFrame = oC, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation … [truncated]
-         else {
-           let bC;
-           (zC < this._minFrame || zC > this._maxFrame) && (zC = this._minFrame), (ZC < this._minFrame || ZC > this._maxFrame) && (ZC = this._maxFrame), WC = ZC - zC;
-           let fC = CC * (nC.framePerSecond * wC) / 1e3 + this._absoluteFrameOffset,
-             NC = 0,
-             MC = !1;
-           const gC = QC && this._animationState.zb === vC.b.ANIMATIONLOOPMODE_YOYO;
-           if (gC) {
-             const CC = (fC - zC) / WC,
-               ZC = Math.sin(CC * Math.PI);
-             fC = Math.abs(ZC) * WC + zC;
-             const QC = ZC >= 0 ? 1 : -1;
-             this._yoyoDirection !== QC && (MC = !0), this._yoyoDirection = QC
-           }
-           if (this._previousElapsedTime = CC, this._previousAbsoluteFrame = fC, !QC && ZC >= zC && (fC >= WC && wC > 0 || fC <= 0 && wC < 0)) qC = !1, NC = nC.evaluate(ZC);
- ... (75 more removed lines; see GitHub link above)
+         return () => (pp && (ip = pp(), pp = void 0), ip)
+       }
+ 
+       function ec(pp) {
+         const ip = new Map;
+         return cp => {
+           const Op = `${typeof cp}:${cp}`;
+           let op = ip.get(Op);
+           return void 0 !== op || ip.has(Op) || (op = pp(cp), ip.set(Op, op)), op
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1837-L1841` → after: `L3111-L3114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3111-L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3111-L3114) · [Before (L1837-L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1837-L1841)

```diff
-     }
-     var hC = ZC(39730);
-     class KC {
-       get syncRoot() {
-         return this._syncRoot
+       var uc = (pp => (pp[pp.None = 0] = "None", pp[pp.Normal = 1] = "Normal", pp[pp.Aggressive = 2] = "Aggressive", pp[pp.VeryAggressive = 3] = "VeryAggressive", pp))(uc || {});
+ 
+       function jc(pp, ip) {
+         return pp === ip
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1843-L1844` → after: `L3116-L3118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3116-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3116-L3118) · [Before (L1843-L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1843-L1844)

```diff
-       get masterFrame() {
-         return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
+ 
+       function kc(pp, ip) {
+         return pp === ip || void 0 !== pp && void 0 !== ip && pp.toUpperCase() === ip.toUpperCase()
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1846-L1847` → after: `L3120-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3120-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3120-L3122) · [Before (L1846-L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1846-L1847)

```diff
-       get weight() {
-         return this._weight
+ 
+       function mc(pp, ip) {
+         return jc(pp, ip)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1849-L1850` → after: `L3124-L3126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3124-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3124-L3126) · [Before (L1849-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1849-L1850)

```diff
-       set weight(CC) {
-         this._weight = -1 !== CC ? Math.min(Math.max(CC, 0), 1) : -1
+ 
+       function Rc(pp, ip) {
+         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : pp < ip ? -1 : 1
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1852-L1853` → after: `L3128-L3130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3128-L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3128-L3130) · [Before (L1852-L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1852-L1853)

```diff
-       get speedRatio() {
-         return this._speedRatio
+ 
+       function qc(pp, ip) {
+         return Rc(pp, ip)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1855-L1859` → after: `L3132-L3134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3132-L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3132-L3134) · [Before (L1855-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1855-L1859)

```diff
-       set speedRatio(CC) {
-         for (let zC = 0; zC < this._runtimeAnimations.length; zC++) {
-           this._runtimeAnimations[zC]._prepareForSpeedRatioChange(CC)
-         }
-         this._speedRatio = CC, null !== this._goToFrame && this.goToFrame(this._goToFrame)
+ 
+       function Mc(pp, ip) {
+         return qc(null == pp ? void 0 : pp.start, null == ip ? void 0 : ip.start) || qc(null == pp ? void 0 : pp.length, null == ip ? void 0 : ip.length)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1861-L1862` → after: `L3136-L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3136-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3136-L3139) · [Before (L1861-L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1861-L1862)

```diff
-       get elapsedTime() {
-         return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
+ 
+       function Cc(pp, ip, cp) {
+         for (let Op = 0; Op < pp.length; Op++) ip = Math.max(ip, cp(pp[Op]));
+         return ip
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1864-L1874` → after: `L3141-L3143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3141-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3141-L3143) · [Before (L1864-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1864-L1874)

```diff
-       constructor(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
-           bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-           fC = arguments.length > 6 ? arguments[6] : void 0,
-           oC = arguments.length > 7 ? arguments[7] : void 0,
-           qC = arguments.length > 8 ? arguments[8] : void 0,
-           FC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-           WC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
-         this.target = zC, this.fromFrame = ZC, this.toFrame = QC, this.loopAnimation = bC, this.onAnimationEnd = fC, this.onAnimationLoop = qC, this.isAdditive = FC, this.playOrder = WC, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._ … [truncated]
+ 
+       function Ec(pp, ip) {
+         return Xi(pp, ((pp, cp) => -1 === ip(pp, cp) ? pp : cp))
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1876-L1881` → after: `L3145-L3147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3145-L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3145-L3147) · [Before (L1876-L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1876-L1881)

```diff
-       syncWith(CC) {
-         if (this._syncRoot = CC, CC) {
-           const CC = this._scene._activeAnimatables.indexOf(this);
-           CC > -1 && (this._scene._activeAnimatables.splice(CC, 1), this._scene._activeAnimatables.push(this))
-         }
-         return this
+ 
+       function Xc(pp, ip) {
+         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : (pp = pp.toUpperCase()) < (ip = ip.toUpperCase()) ? -1 : pp > ip ? 1 : 0
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1883-L1884` → after: `L3149-L3151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3149-L3151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3149-L3151) · [Before (L1883-L1884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1883-L1884)

```diff
-       getAnimations() {
-         return this._runtimeAnimations
+ 
+       function lc(pp, ip) {
+         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : (pp = pp.toLowerCase()) < (ip = ip.toLowerCase()) ? -1 : pp > ip ? 1 : 0
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1886-L1893` → after: `L3153-L3155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3153-L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3153-L3155) · [Before (L1886-L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1886-L1893)

```diff
-       appendAnimations(CC, zC) {
-         for (let ZC = 0; ZC < zC.length; ZC++) {
-           const QC = zC[ZC],
-             wC = new eC(CC, QC, this._scene, this);
-           wC._onLoop = () => {
-             this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
-           }, this._runtimeAnimations.push(wC)
-         }
+ 
+       function Qc(pp, ip) {
+         return Rc(pp, ip)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1895-L1899` → after: `L3157-L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3157-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3157-L3159) · [Before (L1895-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1895-L1899)

```diff
-       getAnimationByTargetProperty(CC) {
-         const zC = this._runtimeAnimations;
-         for (let ZC = 0; ZC < zC.length; ZC++)
-           if (zC[ZC].animation.targetProperty === CC) return zC[ZC].animation;
-         return null
+ 
+       function Jc(pp) {
+         return pp ? Xc : Qc
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1901-L1905` → after: `L3161-L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3161-L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3161-L3177) · [Before (L1901-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1901-L1905)

```diff
-       getRuntimeAnimationByTargetProperty(CC) {
-         const zC = this._runtimeAnimations;
-         for (let ZC = 0; ZC < zC.length; ZC++)
-           if (zC[ZC].animation.targetProperty === CC) return zC[ZC];
-         return null
+       var Bc, Nc, Tc = (() => function(pp) {
+         const ip = new Intl.Collator(pp, {
+           usage: "sort",
+           sensitivity: "variant",
+           numeric: !0
+         }).compare;
+         return (pp, cp) => function(pp, ip, cp) {
+           if (pp === ip) return 0;
+           if (void 0 === pp) return -1;
+           if (void 0 === ip) return 1;
+           const Op = cp(pp, ip);
+           return Op < 0 ? -1 : Op > 0 ? 1 : 0
+         }(pp, cp, ip)
+       })();
+ 
+       function fc() {
+ ... (1 more added lines; see GitHub link above)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1907-L1910` → after: `L3179-L3181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3179-L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3179-L3181) · [Before (L1907-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1907-L1910)

```diff
-       reset() {
-         const CC = this._runtimeAnimations;
-         for (let zC = 0; zC < CC.length; zC++) CC[zC].reset(!0);
-         this._localDelayOffset = null, this._pausedDelay = null
+ 
+       function bc(pp) {
+         Nc !== pp && (Nc = pp, Bc = void 0)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1912-L1914` → after: `L3183-L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3183-L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3183-L3185) · [Before (L1912-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1912-L1914)

```diff
-       enableBlending(CC) {
-         const zC = this._runtimeAnimations;
-         for (let ZC = 0; ZC < zC.length; ZC++) zC[ZC].animation.enableBlending = !0, zC[ZC].animation.blendingSpeed = CC
+ 
+       function hc(pp, ip) {
+         return Bc ?? (Bc = Tc(Nc)), Bc(pp, ip)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1916-L1918` → after: `L3187-L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3187-L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3187-L3189) · [Before (L1916-L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1916-L1918)

```diff
-       disableBlending() {
-         const CC = this._runtimeAnimations;
-         for (let zC = 0; zC < CC.length; zC++) CC[zC].animation.enableBlending = !1
+ 
+       function ac(pp, ip, cp, Op) {
+         return pp === ip ? 0 : void 0 === pp ? -1 : void 0 === ip ? 1 : Op(pp[cp], ip[cp])
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1920-L1927` → after: `L3191-L3207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3191-L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3191-L3207) · [Before (L1920-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1920-L1927)

```diff
-       goToFrame(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const ZC = this._runtimeAnimations;
-         if (ZC[0]) {
-           const zC = ZC[0].animation.framePerSecond;
-           this._frameToSyncFromJump = this._frameToSyncFromJump ?? ZC[0].currentFrame;
-           const QC = 0 === this.speedRatio ? 0 : (CC - this._frameToSyncFromJump) / zC * 1e3 / this.speedRatio;
-           this._manualJumpDelay = -QC
+ 
+       function nc(pp, ip) {
+         return qc(pp ? 1 : 0, ip ? 1 : 0)
+       }
+ 
+       function Fc(pp, ip, cp) {
+         const Op = Math.max(2, Math.floor(.34 * pp.length));
+         let op, Ip = Math.floor(.4 * pp.length) + 1;
+         for (const Sp of ip) {
+           const ip = cp(Sp);
+           if (void 0 !== ip && Math.abs(ip.length - pp.length) <= Op) {
+             if (ip === pp) continue;
+             if (ip.length < 3 && ip.toLowerCase() !== pp.toLowerCase()) continue;
+             const cp = gc(pp, ip, Ip - .1);
+             if (void 0 === cp) continue;
+             dO.assert(cp < Ip), Ip = cp, op = Sp
+ ... (1 more added lines; see GitHub link above)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1929-L1930` → after: `L3209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3209) · [Before (L1929-L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1929-L1930)

```diff
-         for (let QC = 0; QC < ZC.length; QC++) ZC[QC].goToFrame(CC, zC ? this._weight : -1);
-         this._goToFrame = CC
+         return op
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1932-L1933` → after: `L3211-L3235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3211-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3211-L3235) · [Before (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1932-L1933)

```diff
-       get paused() {
-         return this.kR
+ 
+       function gc(pp, ip, cp) {
+         let Op = new Array(ip.length + 1),
+           op = new Array(ip.length + 1);
+         const Ip = cp + .01;
+         for (let xp = 0; xp <= ip.length; xp++) Op[xp] = xp;
+         for (let xp = 1; xp <= pp.length; xp++) {
+           const Sp = pp.charCodeAt(xp - 1),
+             Lp = Math.ceil(xp > cp ? xp - cp : 1),
+             Yp = Math.floor(ip.length > cp + xp ? cp + xp : ip.length);
+           op[0] = xp;
+           let Dp = xp;
+           for (let pp = 1; pp < Lp; pp++) op[pp] = Ip;
+           for (let cp = Lp; cp <= Yp; cp++) {
+             const Ip = pp[xp - 1].toLowerCase() === ip[cp - 1].toLowerCase() ? Op[cp - 1] + .1 : Op[cp - 1] + 2,
+               Lp = Sp === ip.charCodeAt(cp - 1) ? Op[cp - 1] : Math.min(Op[cp] + 1, op[cp - 1] + 1, Ip);
+ ... (9 more added lines; see GitHub link above)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1935-L1936` → after: `L3237-L3240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3237-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3237-L3240) · [Before (L1935-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1935-L1936)

```diff
-       pause() {
-         this.kR || (this.kR = !0)
+ 
+       function Gc(pp, ip, cp) {
+         const Op = pp.length - ip.length;
+         return Op >= 0 && (cp ? kc(pp.slice(Op), ip) : pp.indexOf(ip, Op) === Op)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1938-L1939` → after: `L3242-L3244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3242-L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3242-L3244) · [Before (L1938-L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1938-L1939)

```diff
-       restart() {
-         this.kR = !1
+ 
+       function rc(pp, ip) {
+         return Gc(pp, ip) ? pp.slice(0, pp.length - ip.length) : pp
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1941-L1942` → after: `L3246-L3248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3246-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3246-L3248) · [Before (L1941-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1941-L1942)

```diff
-       _raiseOnAnimationEnd() {
-         this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
+ 
+       function Zc(pp, ip) {
+         return Gc(pp, ip) ? pp.slice(0, pp.length - ip.length) : void 0
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1944-L1955` → after: `L3250-L3263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3250-L3263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3250-L3263) · [Before (L1944-L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1944-L1955)

```diff
-       stop(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         if (CC || zC) {
-           const wC = this._scene._activeAnimatables.indexOf(this);
-           if (wC > -1) {
-             const bC = this._runtimeAnimations;
-             for (let ZC = bC.length - 1; ZC >= 0; ZC--) {
-               const QC = bC[ZC];
-               CC && QC.animation.name != CC || (zC && !zC(QC.target) || (QC.dispose(), bC.splice(ZC, 1)))
-             }
-             0 == bC.length && (ZC || this._scene._activeAnimatables.splice(wC, 1), QC || this._raiseOnAnimationEnd())
+ 
+       function zc(pp) {
+         let ip = pp.length;
+         for (let cp = ip - 1; cp > 0; cp--) {
+           let Op = pp.charCodeAt(cp);
+           if (Op >= 48 && Op <= 57)
+             do {
+               --cp, Op = pp.charCodeAt(cp)
+             } while (cp > 0 && Op >= 48 && Op <= 57);
+           else {
+             if (!(cp > 4) || 110 !== Op && 78 !== Op) break;
+             if (--cp, Op = pp.charCodeAt(cp), 105 !== Op && 73 !== Op) break;
+             if (--cp, Op = pp.charCodeAt(cp), 109 !== Op && 77 !== Op) break;
+             --cp, Op = pp.charCodeAt(cp)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L1957-L2008` → after: `L3265-L3266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3265-L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3265-L3266) · [Before (L1957-L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L1957-L2008)

```diff
-         } else {
-           const CC = this._scene._activeAnimatables.indexOf(this);
-           if (CC > -1) {
-             ZC || this._scene._activeAnimatables.splice(CC, 1);
-             const zC = this._runtimeAnimations;
-             for (let CC = 0; CC < zC.length; CC++) zC[CC].dispose();
-             this._runtimeAnimations.length = 0, QC || this._raiseOnAnimationEnd()
-           }
-         }
-       }
-       async waitAsync() {
-         return await new Promise((CC => {
-           this.onAnimationEndObservable.add((() => {
-             CC(this)
-           }), void 0, void 0, this, !0)
-         }))
- ... (36 more removed lines; see GitHub link above)
+           if (45 !== Op && 46 !== Op) break;
+           ip = cp
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2010-L2059` → after: `L3268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3268) · [Before (L2010-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2010-L2059)

```diff
-         fC.currentValue.decompose(QC, wC, ZC)
-       }
-       if (!FC) {
-         QC.scaleInPlace(qC), ZC.scaleInPlace(qC), wC.scaleInPlace(qC);
-         for (let fC = nC; fC < CC.animations.length; fC++) {
-           const nC = CC.animations[fC];
-           if (0 === nC.weight) continue;
-           qC = nC.weight / zC;
-           const oC = bC.j.Eg[2],
-             FC = bC.j.Eg[3],
-             WC = bC.j.Quaternion[1];
-           nC.currentValue.decompose(FC, WC, oC), FC.scaleAndAddToRef(qC, QC), WC.scaleAndAddToRef(bC.f.Dot(wC, WC) > 0 ? qC : -qC, wC), oC.scaleAndAddToRef(qC, ZC)
-         }
-         wC.normalize()
-       }
-       for (let NC = 0; NC < CC.additiveAnimations.length; NC++) {
- ... (34 more removed lines; see GitHub link above)
+         return ip === pp.length ? pp : pp.slice(0, ip)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2068-L2257` → after: `L3271-L3274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3271-L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3271-L3274) · [Before (L2068-L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2068-L2257)

```diff
-     function mC(CC, zC) {
-       zC && (zC.prototype.copyAnimationRange = function(CC, zC, ZC) {
-         let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-         0 === this.animations.length && (this.animations.push(new vC.b(this.name, "_matrix", CC.animations[0].framePerSecond, vC.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
-         const bC = CC.animations[0].getRange(zC);
-         if (!bC) return !1;
-         const nC = bC.from,
-           fC = bC.to,
-           oC = CC.animations[0].getKeys(),
-           qC = CC.length,
-           FC = CC.getParent(),
-           WC = this.getParent(),
-           NC = QC && FC && qC && this.length && qC !== this.length,
-           MC = NC && WC && FC ? WC.length / FC.length : 1,
-           gC = QC && !WC && wC && (1 !== wC.x || 1 !== wC.y || 1 !== wC.z),
- ... (174 more removed lines; see GitHub link above)
+       function sc(pp, ip) {
+         for (let cp = 0; cp < pp.length; cp++)
+           if (pp[cp] === ip) return Kc(pp, cp), !0;
+         return !1
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2259-L2260` → after: `L3276-L3279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3276-L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3276-L3279) · [Before (L2259-L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2259-L2260)

```diff
-       getSkeleton() {
-         return this._skeleton
+ 
+       function Kc(pp, ip) {
+         for (let cp = ip; cp < pp.length - 1; cp++) pp[cp] = pp[cp + 1];
+         pp.pop()
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2262-L2263` → after: `L3281-L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3281-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3281-L3283) · [Before (L2262-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2262-L2263)

```diff
-       get parent() {
-         return this._parentNode
+ 
+       function Vc(pp, ip) {
+         pp[ip] = pp[pp.length - 1], pp.pop()
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2265-L2266` → after: `L3285-L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3285-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3285-L3291) · [Before (L2265-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2265-L2266)

```diff
-       getParent() {
-         return this.parent
+ 
+       function pO(pp, ip) {
+         return function(pp, ip) {
+           for (let cp = 0; cp < pp.length; cp++)
+             if (ip(pp[cp])) return Vc(pp, cp), !0;
+           return !1
+         }(pp, (pp => pp === ip))
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2268-L2269` → after: `L3293-L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3293-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3293-L3295) · [Before (L2268-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2268-L2269)

```diff
-       getChildren() {
-         return this.children
+ 
+       function iO(pp) {
+         return pp ? Uc : tc
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2271-L2272` → after: `L3297-L3303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3297-L3303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3297-L3303) · [Before (L2271-L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2271-L2272)

```diff
-       getIndex() {
-         return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
+ 
+       function cO(pp) {
+         let {
+           prefix: ip,
+           suffix: cp
+         } = pp;
+         return `${ip}*${cp}`
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2274-L2275` → after: `L3305-L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3305-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3305-L3307) · [Before (L2274-L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2274-L2275)

```diff
-       set parent(CC) {
-         this.setParent(CC)
+ 
+       function OO(pp, ip) {
+         return dO.assert(LO(pp, ip)), ip.substring(pp.prefix.length, ip.length - pp.suffix.length)
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2277-L2283` → after: `L3309-L3315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3309-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3309-L3315) · [Before (L2277-L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2277-L2283)

```diff
-       setParent(CC) {
-         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (this.parent !== CC) {
-           if (this.parent) {
-             const CC = this.parent.children.indexOf(this); - 1 !== CC && this.parent.children.splice(CC, 1)
-           }
-           this._parentNode = CC, this.parent && this.parent.children.push(this), zC && this._updateAbsoluteBindMatrices(), this.YzC()
+ 
+       function oO(pp, ip, cp) {
+         let Op, op = -1;
+         for (let Ip = 0; Ip < pp.length; Ip++) {
+           const Sp = pp[Ip],
+             xp = ip(Sp);
+           xp.prefix.length > op && LO(xp, cp) && (op = xp.prefix.length, Op = Sp)
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2286-L2384` → after: `L3319-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3319-L3321) · [Before (L2286-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2286-L2384)

```diff
-       getLocalMatrix() {
-         return this._compose(), this._localMatrix
-       }
-       getBindMatrix() {
-         return this._bindMatrix
-       }
-       getBaseMatrix() {
-         return this.getBindMatrix()
-       }
-       getRestMatrix() {
-         return this._restMatrix
-       }
-       getRestPose() {
-         return this.getRestMatrix()
-       }
-       setRestMatrix(CC) {
- ... (83 more removed lines; see GitHub link above)
+ 
+       function IO(pp, ip, cp) {
+         return cp ? kc(pp.slice(0, ip.length), ip) : 0 === pp.lastIndexOf(ip, 0)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2386-L2390` → after: `L3323-L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3323-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3323-L3325) · [Before (L2386-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2386-L2390)

```diff
-       _updateAbsoluteBindMatrices(CC) {
-         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (CC || (CC = this._bindMatrix), this.parent ? CC.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Av(CC), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), zC)
-           for (let ZC = 0; ZC < this.children.length; ZC++) this.children[ZC]._updateAbsoluteBindMatrices();
-         this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
+ 
+       function SO(pp, ip) {
+         return IO(pp, ip) ? pp.substr(ip.length) : pp
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2392-L2393` → after: `L3327-L3330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3327-L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3327-L3330) · [Before (L2392-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2392-L2393)

```diff
-       YzC() {
-         return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
+ 
+       function xO(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uc;
+         return IO(cp(pp), cp(ip)) ? pp.substring(ip.length) : void 0
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2395-L2396` → after: `L3332-L3338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3332-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3332-L3338) · [Before (L2395-L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2395-L2396)

```diff
-       _markAsDirtyAndCompose() {
-         this.YzC(), this._needToCompose = !0
+ 
+       function LO(pp, ip) {
+         let {
+           prefix: cp,
+           suffix: Op
+         } = pp;
+         return ip.length >= cp.length + Op.length && IO(ip, cp) && Gc(ip, Op)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2398-L2399` → after: `L3340-L3342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3340-L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3340-L3342) · [Before (L2398-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2398-L2399)

```diff
-       _markAsDirtyAndDecompose() {
-         this.YzC(), this._needToDecompose = !0
+ 
+       function YO(pp, ip) {
+         return cp => pp(cp) && ip(cp)
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2401-L2410` → after: `L3344-L3351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3344-L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3344-L3351) · [Before (L2401-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2401-L2410)

```diff
-       _updatePosition(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           ZC = arguments.length > 2 ? arguments[2] : void 0,
-           QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const wC = this.getLocalMatrix();
-         if (0 == zC) QC ? (wC.addAtIndex(12, CC.x), wC.addAtIndex(13, CC.y), wC.addAtIndex(14, CC.z)) : wC.setTranslationFromFloats(CC.x, CC.y, CC.z);
-         else {
-           const zC = cC._TmpMats[0],
-             nC = cC._TmpVecs[0];
-           this.parent ? (zC.Av(this.parent.getAbsoluteMatrix()), ZC && zC.multiplyToRef(ZC.getWorldMatrix(), zC)) : bC.b.IdentityToRef(zC), QC && zC.setTranslationFromFloats(0, 0, 0), zC.invert(), bC.r.TransformCoordinatesToRef(CC, zC, nC), QC ? (wC.addAtIndex(12, nC.x), wC.addAt … [truncated]
+ 
+       function DO() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         return function() {
+           let pp;
+           for (const cp of ip)
+             if (pp = cp(...arguments), pp) return pp;
+           return pp
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2427-L2434` → after: `L3354-L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3354-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3354-L3357) · [Before (L2427-L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2427-L2434)

```diff
-       scale(CC, zC, ZC) {
-         let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const wC = this.getLocalMatrix(),
-           nC = cC._TmpMats[0];
-         bC.b.ScalingToRef(CC, zC, ZC, nC), nC.multiplyToRef(wC, wC), nC.invert();
-         for (const bC of this.children) {
-           const QC = bC.getLocalMatrix();
-           QC.multiplyToRef(nC, QC), QC.multiplyAtIndex(12, CC), QC.multiplyAtIndex(13, zC), QC.multiplyAtIndex(14, ZC), bC._markAsDirtyAndDecompose()
+ 
+       function AO(pp) {
+         return function() {
+           return !pp(...arguments)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2439-L2446` → after: `L3360-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3360-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3360-L3364) · [Before (L2439-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2439-L2446)

```diff
-       setScale(CC) {
-         this._decompose(), this._localScaling.Av(CC), this._markAsDirtyAndCompose()
-       }
-       getScale() {
-         return this._decompose(), this._localScaling
-       }
-       getScaleToRef(CC) {
-         this._decompose(), CC.Av(this._localScaling)
+ 
+       function PO(pp) {}
+ 
+       function WO(pp) {
+         return void 0 === pp ? void 0 : [pp]
```
