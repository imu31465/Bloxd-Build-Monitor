# Changed — Bundle Modifications Report (Part 015 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `15 / 82` (**321** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 9. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L207` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L163) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L207)

```diff
-       e: () => be
+       b: () => FW
```

#### 10. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L209` → after: `L165-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L165-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L165-L187) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L209)

```diff
-     var ye = He(38590);
+     var mW = OW(25),
+       EW = OW(27),
+       NW = OW(4920),
+       PW = OW(327),
+       LW = OW(1729),
+       cW = OW(9379),
+       wW = OW(4948),
+       tW = OW(9942),
+       ZW = OW(9413),
+       xW = OW(9384),
+       lW = OW(9417),
+       AW = OW(1459),
+       bW = OW(1784),
+       jW = OW(9421),
+       UW = OW(9905),
+       kW = OW(10033),
+ ... (7 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L211-L230` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L189-L190) · [Before (L211-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L211-L230)

```diff
-       static GetPlanes(ee) {
-         const ie = [];
-         for (let He = 0; He < 6; He++) ie.push(new ye.c(0, 0, 0, 0));
-         return be.GetPlanesToRef(ee, ie), ie
-       }
-       static GetNearPlaneToRef(ee, ie) {
-         const He = ee.m;
-         ie.normal.x = He[3] + He[2], ie.normal.y = He[7] + He[6], ie.normal.z = He[11] + He[10], ie.d = He[15] + He[14], ie.normalize()
-       }
-       static GetFarPlaneToRef(ee, ie) {
-         const He = ee.m;
-         ie.normal.x = He[3] - He[2], ie.normal.y = He[7] - He[6], ie.normal.z = He[11] - He[10], ie.d = He[15] - He[14], ie.normalize()
-       }
-       static GetLeftPlaneToRef(ee, ie) {
-         const He = ee.m;
-         ie.normal.x = He[3] + He[0], ie.normal.y = He[7] + He[4], ie.normal.z = He[11] + He[8], ie.d = He[15] + He[12], ie.normalize()
- ... (4 more removed lines; see GitHub link above)
+       constructor() {
+         this.lostAtMs = null
```

#### 12. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L232-L234` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L192-L193) · [Before (L232-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L232-L234)

```diff
-       static GetTopPlaneToRef(ee, ie) {
-         const He = ee.m;
-         ie.normal.x = He[3] - He[1], ie.normal.y = He[7] - He[5], ie.normal.z = He[11] - He[9], ie.d = He[15] - He[13], ie.normalize()
+       update(WW, iW) {
+         return WW ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= iW, iW - this.lostAtMs >= 250)
```

#### 13. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L236-L246` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L195-L196) · [Before (L236-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L236-L246)

```diff
-       static GetBottomPlaneToRef(ee, ie) {
-         const He = ee.m;
-         ie.normal.x = He[3] + He[1], ie.normal.y = He[7] + He[5], ie.normal.z = He[11] + He[9], ie.d = He[15] + He[13], ie.normalize()
-       }
-       static GetPlanesToRef(ee, ie) {
-         be.GetNearPlaneToRef(ee, ie[0]), be.GetFarPlaneToRef(ee, ie[1]), be.GetLeftPlaneToRef(ee, ie[2]), be.GetRightPlaneToRef(ee, ie[3]), be.GetTopPlaneToRef(ee, ie[4]), be.GetBottomPlaneToRef(ee, ie[5])
-       }
-       static IsPointInFrustum(ee, ie) {
-         for (let He = 0; He < 6; He++)
-           if (ie[He].dotCoordinate(ee) < 0) return !1;
-         return !0
+       reset() {
+         this.lostAtMs = null
```

#### 14. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L256-L312` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L200-L201) · [Before (L256-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L256-L312)

```diff
-       constructor(ee, ie, He, be) {
-         this.normal = new ye.p(ee, ie, He), this.d = be
-       }
-       Qbe() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new be(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let ee = this.normal.getHashCode();
-         return ee = 397 * ee ^ this.d, ee
-       }
- ... (41 more removed lines; see GitHub link above)
+       constructor(WW, iW) {
+         this.press = WW, this.release = iW, this.downAtMs = null, this.token = null, this.latched = !1
```

#### 15. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L314-L315` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L203-L205) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L314-L315)

```diff
-       static FromArray(ee) {
-         return new be(ee[0], ee[1], ee[2], ee[3])
+       update(WW, iW, OW, mW) {
+         if (WW && null === this.downAtMs) return this.downAtMs = OW, this.latched = mW, void(this.token = this.press(mW));
+         null !== this.downAtMs && (this.latched ? WW && this.end() : !iW && OW - this.downAtMs >= 40 && this.end())
```

#### 16. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L317-L319` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L207-L208) · [Before (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L317-L319)

```diff
-       static FromPoints(ee, ie, He) {
-         const ye = new be(0, 0, 0, 0);
-         return ye.copyFromPoints(ee, ie, He), ye
+       isLatched() {
+         return null !== this.downAtMs && this.latched
```

#### 17. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L321-L323` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L210-L211) · [Before (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L321-L323)

```diff
-       static FromPositionAndNormal(ee, ie) {
-         const He = new be(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(ee, ie, He)
+       unlatch() {
+         this.latched = !1
```

#### 18. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L325-L326` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L213-L214) · [Before (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L325-L326)

```diff
-       static FromPositionAndNormalToRef(ee, ie, He) {
-         return He.normal.jD(ie), He.normal.normalize(), He.d = -ee.dot(He.normal), He
+       cancel() {
+         null !== this.downAtMs && this.end()
```

#### 19. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L328-L330` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L216-L218) · [Before (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L328-L330)

```diff
-       static SignedDistanceToPlaneFromPositionAndNormal(ee, ie, He) {
-         const be = -(ie.x * ee.x + ie.y * ee.y + ie.z * ee.z);
-         return ye.p.Dot(He, ie) + be
+       end() {
+         const WW = this.token;
+         this.downAtMs = null, this.token = null, this.latched = !1, this.release(WW)
```

#### 20. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L333-L351` → after: `L221-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L221-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L221-L302) · [Before (L333-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L333-L351)

```diff
-     be._TmpMatrix = ye.b.Identity()
-   },
-   37913: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       Matrix: () => ye.b,
-       Quaternion: () => ye.f,
-       RegisterMathVector: () => ye.h,
-       TmpVectors: () => ye.j,
-       Vector2: () => ye.n,
-       rf: () => ye.p,
-       Vector4: () => ye.s
-     });
-     var ye = He(37917);
-     (0, ye.h)()
-   },
-   38919: (ee, ie, He) => {
- ... (3 more removed lines; see GitHub link above)
+     const HW = {
+         kind: "specialAction",
+         action: "SpecialAction2"
+       },
+       nW = WW => {
+         let iW = null;
+         const OW = new TW.e,
+           mW = () => {
+             iW && (((WW, iW, OW) => {
+               switch (OW.kind) {
+                 case "reload":
+                   return void iW.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void iW.specialActionUp(OW.action);
+                 case "customButton":
+                   return void KW.gameBridge.send("pressCustomButton", {
+ ... (66 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L353-L354` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L304-L305) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L353-L354)

```diff
-       constructor(ee, ie, He, ye) {
-         this.x = ee, this.y = ie, this.width = He, this.height = ye
+       constructor(WW) {
+         this.bodies = WW, this.gesture = new TW.e, this.zoomBodies = null
```

#### 22. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L356-L357` → after: `L307-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L307-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L307-L311) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L356-L357)

```diff
-       toGlobal(ee, ie) {
-         return new ye(this.x * ee, this.y * ie, this.width * ee, this.height * ie)
+       update(WW, iW, OW, mW, EW) {
+         if (!EW) return this.release(), WW.wasPressed(iW);
+         if (null !== this.zoomBodies) return WW.isHeld(iW) || this.endZoom(), !1;
+         const NW = this.gesture.update(WW.wasPressed(iW), WW.isHeld(iW), OW, mW);
+         return "hold" === NW && WW.isHeld(iW) && (this.zoomBodies = this.bodies(), this.zoomBodies.zoom(!0)), "tap" === NW
```

#### 23. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L359-L360` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L313-L314) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L359-L360)

```diff
-       toGlobalToRef(ee, ie, He) {
-         return He.x = this.x * ee, He.y = this.y * ie, He.width = this.width * ee, He.height = this.height * ie, this
+       release() {
+         this.gesture.release(), this.endZoom()
```

#### 24. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L362-L363` → after: `L316-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L316-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L316-L318) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L362-L363)

```diff
-       clone() {
-         return new ye(this.x, this.y, this.width, this.height)
+       endZoom() {
+         var WW;
+         null === (WW = this.zoomBodies) || void 0 === WW || WW.zoom(!1), this.zoomBodies = null
```

#### 25. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L366-L425` → after: `L321-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L321-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L321-L513) · [Before (L366-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L366-L425)

```diff
-   },
-   41520: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Je
-     });
-     var ye = He(37917),
-       be = He(38022),
-       Me = He(41524),
-       Ke = He(41535),
-       Ue = He(41550);
- 
-     function Fe(ee) {
-       let ie = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const He = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         Me = [],
-         Fe = ee.width || ee.size || 1,
- ... (44 more removed lines; see GitHub link above)
+     var RW = OW(9908),
+       GW = OW(9957);
+     const IW = () => RW.d[(0, xW.m)().tapHoldTime].wheelMs,
+       aW = () => ((0, tW.e)(), (0, GW.e)("controllerMenuKey")),
+       rW = (WW, iW, OW) => new hW((OW => {
+         const mW = WW.bodies();
+         return {
+           bodies: mW,
+           press: iW(mW, OW)
+         }
+       }), (WW => {
+         let {
+           bodies: iW,
+           press: mW
+         } = WW;
+         OW(iW, mW)
+ ... (177 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L446` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L516) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L446)

```diff
-   41573: (ee, ie, He) => {
+   42078: (WW, iW, OW) => {
```

#### 27. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L448` → after: `L518-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L518-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L518-L520) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L448)

```diff
-       c: () => Re
+       e: () => AW,
+       i: () => jW,
+       j: () => lW
```

#### 28. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L450-L523` → after: `L522-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L522-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L522-L545) · [Before (L450-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L450-L523)

```diff
-     var ye = He(37917),
-       be = He(41524),
-       Me = He(41535),
-       Ke = He(41575),
-       Ue = He(41247),
-       Fe = He(39467);
- 
-     function Je(ee) {
-       const ie = [],
-         He = [],
-         ye = ee.lines,
-         be = ee.colors,
-         Ke = [];
-       let Ue = 0;
-       for (let Me = 0; Me < ye.length; Me++) {
-         const ee = ye[Me];
- ... (58 more removed lines; see GitHub link above)
+     var mW = OW(1294),
+       EW = OW(4920),
+       NW = OW(10025),
+       PW = OW(38079),
+       LW = OW(1822),
+       cW = OW(1167),
+       wW = OW(9421),
+       tW = OW(9952),
+       ZW = OW(10038);
+     const xW = {
+         emoteWheel: NW.f,
+         quickChatWheel: tW.e,
+         actionWheel: ZW.o
+       },
+       lW = Object.keys(xW),
+       AW = "dead",
+ ... (8 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L588` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L549) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L588)

```diff
-   41575: (ee, ie, He) => {
+   42075: (WW, iW, OW) => {
```

#### 30. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L591` → after: `L552-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L552-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L552-L558) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L591)

```diff
-       d: () => Te
+       f: () => cW,
+       g: () => LW,
+       k: () => tW,
+       o: () => PW,
+       p: () => NW,
+       t: () => wW,
+       u: () => ZW
```

#### 31. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L593-L640` → after: `L560-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L560-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L560-L571) · [Before (L593-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L593-L640)

```diff
-     var ye, be, Me = He(38022),
-       Ke = He(41247),
-       Ue = He(41524),
-       Fe = He(41581),
-       Je = He(41414),
-       oe = He(41585),
-       Re = He(40985);
-     class ke extends Ue.b {
-       _isShaderMaterial(ee) {
-         return !!ee && "ShaderMaterial" === ee.getClassName()
-       }
-       constructor(ee) {
-         let ie = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           ye = arguments.length > 5 ? arguments[5] : void 0,
-           be = arguments.length > 6 ? arguments[6] : void 0,
-           Ue = arguments.length > 7 ? arguments[7] : void 0;
- ... (32 more removed lines; see GitHub link above)
+     var mW = OW(9364);
+     class EW {
+       constructor() {
+         this.fullTiltSinceMs = null
+       }
+       update(WW, iW, OW) {
+         const EW = (0, mW.l)(WW, iW.lookDeadzone);
+         if (Math.hypot(EW.x, EW.y) < .9 || Math.abs(EW.x) < Math.abs(EW.y)) return this.fullTiltSinceMs = null, 1;
+         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = OW);
+         const NW = (PW = iW.lookSensitivityX, Math.min(1, 100 / PW));
+         var PW;
+         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (OW - this.fullTiltSinceMs - 250 * NW) / (200 * NW)))
```

#### 32. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L642-L643` → after: `L573-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L573-L574) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L642-L643)

```diff
-       get checkCollisions() {
-         return !1
+       reset() {
+         this.fullTiltSinceMs = null
```

#### 33. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L645-L655` → after: `L576-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L576-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L576-L603) · [Before (L645-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L645-L655)

```diff
-       set checkCollisions(ee) {}
-       _bind(ee, ie) {
-         if (!this._geometry) return this;
-         const He = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
-         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ie, He) : this._geometry._bind(ie, He, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
-           const {
-             r: ee,
-             g: ie,
-             b: He
-           } = this.color;
-           this._color4.set(ee, ie, He, this.alpha), this.material.setColor4("color", this._color4)
+     }
+     const NW = (WW, iW, OW, EW, NW) => {
+         let PW = 1;
+         return "boost" === OW.lookCurve ? PW = WW.update(iW, OW, NW) : WW.reset(),
+           function(WW, iW) {
+             let {
+               yawBoost: OW = 1,
+               aiming: EW = !1
+             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+             const NW = (0, mW.h)((0, mW.l)(WW, iW.lookDeadzone), iW.lookCurve),
+               PW = 220 * Math.PI / 180,
+               LW = EW ? iW.aimLookSensitivity / 100 : 1,
+               cW = iW.lookSensitivityX / 100 * LW,
+               wW = iW.lookSensitivityY / 100 * LW;
+             return {
+               yawRadPerSec: NW.x * PW * cW * OW * (iW.invertLookX ? -1 : 1),
+ ... (12 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L657-L673` → after: `L605-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L605-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L605-L621) · [Before (L657-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L657-L673)

```diff
-         return this
-       }
-       _draw(ee, ie, He) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const ye = this.Xx().Nf();
-         return this._unIndexed ? ye.drawArraysType(Je.e.LineListDrawMode, ee.verticesStart, ee.verticesCount, He) : ye.drawElementsType(Je.e.LineListDrawMode, ee.indexStart, ee.indexCount, He), this
-       }
-       dispose(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ie) && this.material?.dispose(!1, !1, !0), super.dispose(ee)
-       }
-       clone(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           He = arguments.length > 2 ? arguments[2] : void 0;
-         if (ie && void 0 === ie._addToSceneRootNodes) {
-           const He = ie;
- ... (1 more removed lines; see GitHub link above)
+       },
+       LW = (WW, iW) => iW ? {
+         move: WW.rightStick,
+         look: WW.leftStick
+       } : {
+         move: WW.leftStick,
+         look: WW.rightStick
+       },
+       cW = (WW, iW) => {
+         const OW = (0, mW.l)(WW, iW),
+           EW = Math.min(1, Math.hypot(OW.x, OW.y));
+         return {
+           magnitude: EW,
+           speed: Math.min(1, EW / .8),
+           headingOffset: 0 === EW ? 0 : Math.atan2(OW.x, -OW.y),
+           x: OW.x,
+ ... (1 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L675-L681` → after: `L623-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L623-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L623-L648) · [Before (L675-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L675-L681)

```diff
-         return new ke(ee, this.Xx(), ie, this, He)
-       }
-       createInstance(ee) {
-         const ie = new qe(ee, this);
-         if (this.pC) {
-           ie.pC = {};
-           for (const ee in this.pC) ie.pC[ee] = this.pC[ee]
+       },
+       wW = (WW, iW) => {
+         let {
+           sprintPressed: OW,
+           magnitude: mW,
+           autoSprint: EW,
+           nowMs: NW
+         } = iW;
+         const PW = OW ? NW : WW.latchedAtMs,
+           LW = (WW => {
+             let {
+               running: iW,
+               magnitude: OW,
+               sprintPressed: mW,
+               autoSprint: EW
+             } = WW;
+ ... (10 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L683-L706` → after: `L650-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L650-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L650-L658) · [Before (L683-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L683-L706)

```diff
-         return ie
-       }
-       serialize(ee) {
-         super.serialize(ee), ee.color = this.color.Qbe(), ee.alpha = this.alpha
-       }
-       static Parse(ee, ie) {
-         const He = new ke(ee.name, ie);
-         return He.color = Me.c.FromArray(ee.color), He.alpha = ee.alpha, He
-       }
-     }
-     ke.ForceGLSL = !1;
-     class qe extends Fe.c {
-       constructor(ee, ie) {
-         super(ee, ie), this.intersectionThreshold = ie.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+       },
+       tW = (WW, iW, OW) => OW && WW.gyroAiming && "button" === WW.gyroActivation && WW.gyroButton !== iW ? WW.gyroButton : null,
+       ZW = (WW, iW) => iW ? {
+         ...WW,
+         isHeld: OW => OW !== iW && WW.isHeld(OW),
+         wasPressed: OW => OW !== iW && WW.wasPressed(OW),
+         wasReleased: OW => OW !== iW && WW.wasReleased(OW),
+         value: OW => OW === iW ? 0 : WW.value(OW)
+       } : WW
```

#### 37. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L708` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L660) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L708)

```diff
-   39463: (ee, ie, He) => {
+   42089: (WW, iW, OW) => {
```

#### 38. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L710` → after: `L662-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L662-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L662-L663) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L710)

```diff
-       b: () => Me
+       c: () => EW,
+       f: () => mW
```

#### 39. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L712-L715` → after: `L665-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L665-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L665-L688) · [Before (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L712-L715)

```diff
-     var ye = He(39467);
-     const be = (ee, ie, He) => ee ? ee.getClassName && "Mesh" === ee.getClassName() ? null : !ee.getClassName || "SubMesh" !== ee.getClassName() && "PhysicsBody" !== ee.getClassName() ? ee.clone ? ee.clone() : Array.isArray(ee) ? ee.slice() : He && "object" === typeof ee ? {
-       ...ee
-     } : null : ee.clone(ie) : null;
+     const mW = WW => {
+       let {
+         mode: iW,
+         sneakHeld: OW,
+         sneakPressed: mW,
+         sneakTogglePressed: EW,
+         descending: NW,
+         canCrouch: PW,
+         toggled: LW
+       } = WW;
+       return PW ? NW ? {
+         crouchHeld: OW,
+         toggled: !1
+       } : "hold" === iW ? {
+         crouchHeld: OW,
+         toggled: EW ? !LW : LW
+ ... (8 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L717-L746` → after: `L690-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L690-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L690-L702) · [Before (L717-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L717-L746)

```diff
-       static DeepCopy(ee, ie, He, Me) {
-         let Ke = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const Ue = function(ee) {
-           const ie = [];
-           do {
-             const He = Object.getOwnPropertyNames(ee);
-             for (const ee of He) - 1 === ie.indexOf(ee) && ie.push(ee)
-           } while (ee = Object.getPrototypeOf(ee));
-           return ie
-         }(ee);
-         for (const Je of Ue) {
-           if ("_" === Je[0] && (!Me || -1 === Me.indexOf(Je))) continue;
-           if (Je.endsWith("Observable")) continue;
-           if (He && -1 !== He.indexOf(Je)) continue;
-           const Ue = ee[Je],
-             oe = typeof Ue;
- ... (14 more removed lines; see GitHub link above)
+       constructor() {
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+       }
+       lostToPadScreen() {
+         this.regainPending = !0
+       }
+       filter(WW, iW) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = iW, this.graceEndsMs = iW + 500);
+         const OW = iW < this.graceEndsMs;
+         return OW && (WW.sneakPressed || WW.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, iW + 300))), WW.sneakHeld ? OW && WW.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: WW.sneakHeld && !this.ignoringHeld,
+           sneakPressed: WW.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: WW.sneakTogglePressed && !OW
```

#### 41. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L751-L760` → after: `L707-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L707-L708) · [Before (L751-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L751-L760)

```diff
-   38745: (ee, ie, He) => {
-     function ye() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ee => {
-         const ie = 16 * Math.random() | 0;
-         return ("x" === ee ? ie : 3 & ie | 8).toString(16)
-       }))
-     }
-     He.d(ie, {
-       d: () => ye
-     })
+   42060: (WW, iW, OW) => {
+     OW(10079)
```

#### 42. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L762` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L710) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L762)

```diff
-   39467: (ee, ie, He) => {
+   42067: (WW, iW, OW) => {
```

#### 43. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L764` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L712) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L764)

```diff
-       e: () => ye
+       b: () => sW
```

#### 44. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L766-L815` → after: `L714-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L714-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/256.js#L714-L798) · [Before (L766-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/256.js#L766-L815)

```diff
-     class ye {
-       static _CheckLimit(ee, ie) {
-         let He = ye._LogLimitOutputs[ee];
-         return He ? He.current++ : (He = {
-           limit: ie,
-           current: 1
-         }, ye._LogLimitOutputs[ee] = He), He.current <= He.limit
-       }
-       static _GenerateLimitMessage(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const He = ye._LogLimitOutputs[ee];
-         if (!He || !ye.MessageLimitReached) return;
-         const be = this._Levels[ie];
-         He.current === He.limit && ye[be.name](ye.MessageLimitReached.replace(/%LIMIT%/g, "" + He.limit).replace(/%TYPE%/g, be.name ?? ""))
-       }
-       static _AddLogEntry(ee) {
- ... (34 more removed lines; see GitHub link above)
+     var mW = OW(27),
+       EW = OW(10025),
+       NW = OW(10031),
+       PW = OW(9379),
+       LW = OW(9413),
+       cW = OW(9384),
+       wW = OW(42075),
+       tW = OW(42078),
+       ZW = OW(9421),
+       xW = OW(9364),
+       lW = OW(9952),
+       AW = OW(10038);
+     const bW = [{
+         isOpen: EW.g,
+         openButton: () => (0, PW.h)("emoteWheel"),
+         aim: WW => {
+ ... (69 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L2)

```diff
- export const ids = [257, 262];
+ export const ids = [257];
```

#### 2. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L4)

```diff
-   45036: (ee, ie, He) => {
+   39661: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L6)

```diff
-       d: () => Ke
+       c: () => AW
```

#### 4. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8-L23` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L8-L15) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L8-L23)

```diff
-     var ye = He(44963),
-       be = He(41111);
-     let Me = !1;
- 
-     function Ke() {
-       Me || (Me = !0, be.c.prototype._sphericalPolynomialTargetSize = 0, be.c.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(be.c.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = ye.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = ee, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
+     var mW = OW(182),
+       EW = OW(38824);
+     const NW = 1.2,
+       PW = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
```

#### 5. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L25-L26` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L17-L19) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L25-L26)

```diff
-         set: function(ee) {
-           this._texture && (this._texture._sphericalPolynomial = ee)
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
```

#### 6. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L28-L83` → after: `L21-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L21-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L21-L610) · [Before (L28-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L28-L83)

```diff
-         enumerable: !0,
-         configurable: !0
-       }))
-     }
-   },
-   38020: (ee, ie, He) => {
-     He.d(ie, {
-       Color3: () => ye.c,
-       e: () => ye.g
-     });
-     var ye = He(38022);
-     (0, ye.h)()
-   },
-   38581: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => be
- ... (40 more removed lines; see GitHub link above)
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         FP: .5,
+         QiW: !1
+       },
+       LW = {
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 1.8,
+           height: 2.6
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+ ... (574 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L86` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L613) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L86)

```diff
-   38590: (ee, ie, He) => {
+   38214: (WW, iW, OW) => {
```

#### 8. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L90-L284` → after: `L617-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L617-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L617-L716) · [Before (L90-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L90-L284)

```diff
-     var ye = He(37917);
-     class be {
-       constructor(ee, ie, He, be) {
-         this.normal = new ye.p(ee, ie, He), this.d = be
-       }
-       Qbe() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new be(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let ee = this.normal.getHashCode();
- ... (179 more removed lines; see GitHub link above)
+     const mW = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (84 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L286-L303` → after: `L718-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L718-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L718-L733) · [Before (L286-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L286-L303)

```diff
-         if (ee instanceof Float32Array) return Ke;
-         const Je = new(0, ee.constructor)(Me);
-         for (let oe = 0; oe < Me; oe++) Je[oe] = Ke[oe] + .5 | 0;
-         return Je
-       }
-       static ConvertCubeMapToSphericalPolynomial(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const He = ie > 0 ? this._NearestPow2Floor(ie) : 0;
-         if (He > 0 && ee.size > He) {
-           const ie = 5 === ee.format ? 4 : 3,
-             ye = ["right", "left", "up", "down", "front", "back"],
-             be = {};
-           for (const Me of ye) be[Me] = this._DownsampleFace(ee[Me], ee.size, He, ie);
-           ee = {
-             ...ee,
-             ...be,
- ... (2 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
```

#### 10. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L305-L338` → after: `L735-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L735-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L735-L744) · [Before (L305-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L305-L338)

```diff
-         const ye = new Me.c;
-         let Fe = 0;
-         const Je = 2 / ee.size,
-           oe = Je,
-           Re = .5 * Je,
-           ke = Re - 1;
-         for (let Me = 0; Me < 6; Me++) {
-           const ie = this._FileFaces[Me],
-             He = ee[ie.name];
-           let qe = ke;
-           const fe = 5 === ee.format ? 4 : 3;
-           for (let Me = 0; Me < ee.size; Me++) {
-             let Te = ke;
-             for (let oe = 0; oe < ee.size; oe++) {
-               const ke = ie.worldAxisForFileX.scale(Te).add(ie.worldAxisForFileY.scale(qe)).add(ie.worldAxisForNormal);
-               ke.normalize();
- ... (18 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:gold-moonstone-gold": {
+         name: "Midas Moon",
+         lore: "Mobs it fells seem to rattle with coins.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .92,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2,
+           bossBane: .6
```

#### 11. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L340-L406` → after: `L746-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L746-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L746-L773) · [Before (L340-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L340-L406)

```diff
-         const qe = 6 * (4 * Math.PI) / 6 / Fe;
-         return ye.scaleInPlace(qe), ye.convertIncidentRadianceToIrradiance(), ye.convertIrradianceToLambertianRadiance(), Me.e.FromHarmonics(ye)
-       }
-     }
-     Je._FileFaces = [new Fe("right", new ye.p(1, 0, 0), new ye.p(0, 0, -1), new ye.p(0, -1, 0)), new Fe("left", new ye.p(-1, 0, 0), new ye.p(0, 0, 1), new ye.p(0, -1, 0)), new Fe("up", new ye.p(0, 1, 0), new ye.p(1, 0, 0), new ye.p(0, 0, 1)), new Fe("down", new ye.p(0, -1, 0), ne … [truncated]
-   },
-   44824: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => ye.i,
-       i: () => ye.r
-     });
-     var ye = He(41159);
-     (0, ye.u)()
-   },
-   38745: (ee, ie, He) => {
-     function ye() {
- ... (51 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:iron-iron-iron": {
+         name: "Old Faithful",
+         lore: "It has never let anyone down. It never will.",
+         damageMultiplier: 1.15,
+         cooldownMultiplier: .94,
+         ability: "warcry"
+       },
+       "skyblock:forged:iron-wood-wood": {
+         name: "Militia Blade",
+         lore: "Handed out at the outpost gate when the rift first opened.",
+         damageMultiplier: 1.09,
+         cooldownMultiplier: .97,
+         ability: "warcry"
+       },
+       "skyblock:forged:stone-stone-stone": {
+ ... (12 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L410-L420` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L777) · [Before (L410-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L410-L420)

```diff
-   63809: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       AsyncLoop: () => ye.c,
-       RegisterTools: () => ye.g,
-       Tools: () => ye.h,
-       className: () => ye.k
-     });
-     var ye = He(41203);
-     (0, ye.g)()
-   },
-   45055: (ee, ie, He) => {
+   38831: (WW, iW, OW) => {
```

#### 13. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L424-L479` → after: `L781-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L781-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L781-L965) · [Before (L424-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L424-L479)

```diff
-     class ye {
-       constructor(ee) {
-         this._pendingActions = new Array, this._workerInfos = ee.map((ee => ({
-           workerPromise: Promise.resolve(ee),
-           idle: !0
-         })))
-       }
-       dispose() {
-         for (const ee of this._workerInfos) ee.workerPromise.then((ee => {
-           ee.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
-       }
-       push(ee) {
-         this._executeOnIdleWorker(ee) || this._pendingActions.push(ee)
-       }
- ... (40 more removed lines; see GitHub link above)
+     var mW = OW(352),
+       EW = OW.n(mW),
+       NW = OW(2012);
+     let PW;
+     var LW, cW, wW, tW, ZW, xW, lW, AW, bW;
+     const jW = [2, 0, 1, "c", "a", 9, 140, 5, "f", 122, 8, 255, "length", "b", 3, 61, "undefined", void 0, 225, "d", 119, 193, 63, 6, "fromCodePoint", 7, 12, "push", 131, 110, 91, 73, 8191, 88, 13, 14, 4, 236, 139, 160, !1, 79, !0, 84, 104, 115, 123, "e", 178, 248, 74, "g", 179,  … [truncated]
+ 
+     function UW(...WW) {
+       return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = function(...WW) {
+         for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = '5R(_qs*mnEz@fa>7`Le:gDTdNYt^w!vV{puO&bkl#)1WAB6xy/ZQ[XP<IGo2+]?=cMrC3hF8"0,}$%KH94|Sj~;.JiU', WW[jW[0]] = "" + (WW[jW[1]] || ""), WW[jW[3]] = WW[jW[0]].length, WW[-jW[9]] = [], WW[jW[7]] = jW[1], WW[jW[8]] = jW[1], WW[-jW[6]] = -jW … [truncated]
+           if (WW[jW[5]] = WW[jW[4]].indexOf(WW[jW[0]][WW[-jW[2]]]), WW[jW[5]] !== -jW[2])
+             if (WW[-jW[6]] < jW[1]) WW[-jW[6]] = WW[jW[5]];
+             else {
+               HW(WW[-jW[6]] += WW[jW[5]] * jW[30], WW[jW[7]] |= WW[-jW[6]] << WW[jW[8]], WW[jW[8]] += (WW[-jW[6]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
+               do {
+                 HW(WW[-jW[9]].push(WW[jW[7]] & jW[11]), WW[jW[7]] >>= jW[10], WW[jW[8]] -= jW[10])
+ ... (169 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L481-L631` → after: `L967-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L967-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L967-L1026) · [Before (L481-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L481-L631)

```diff
-     }
-     be.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
-     }
-   },
-   63844: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       AbstractThreeMfSerializer: () => IU,
-       BVHExporter: () => wK,
-       ContentTypeFileName: () => TU,
-       DefaultXmlSerializerFormatOptions: () => SK,
-       DefaultXmlSerializerNumberOptions: () => lK,
-       EXT_lights_area: () => zb,
-       EXT_mesh_gpu_instancing: () => uy,
-       EXT_texture_avif: () => KK,
-       EXT_texture_webp: () => HK,
- ... (135 more removed lines; see GitHub link above)
+       const tW = yW;
+       if (HW(EW()[iW(141)](tW, MW, JW), tW[jW[2]] = jW[1], WW[jW[3]] = EW()[iW(142)](tW)), !wW) {
+         function dW(...WW) {
+           function OW(...WW) {
+             return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = function(...WW) {
+               for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = ';qOUtWhkdC,K~0/f_XuTe?|[)Jv@3N*Ra<V8pYmo=>r15#gbzQBHlxPwF4{!9D(EA&"^Gi.M:26}sc$y7]+`ISLZjn%', WW[jW[81]] = "" + (WW[jW[1]] || ""), WW[jW[3]] = WW[jW[81]].length, WW[jW[83]] = [], WW[jW[47]] = jW[1], WW[jW[8]] = jW[1], WW[jW[5 … [truncated]
+                 if (WW[-jW[73]] = WW[jW[4]].indexOf(WW[jW[81]][WW[-jW[82]]]), WW[-jW[73]] !== -jW[2])
+                   if (WW[jW[51]] < jW[1]) WW[jW[51]] = WW[-jW[73]];
+                   else {
+                     HW(WW[jW[51]] += WW[-jW[73]] * jW[30], WW[jW[47]] |= WW[jW[51]] << WW[jW[8]], WW[jW[8]] += (WW[jW[51]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
+                     do {
+                       HW(WW[jW[83]].push(WW[jW[47]] & jW[11]), WW[jW[47]] >>= jW[10], WW[jW[8]] -= jW[10])
+                     } while (WW[jW[8]] > jW[25]);
+                     WW[jW[51]] = -jW[2]
+                   } return WW[jW[51]] > -jW[2] && WW[jW[83]].push((WW[jW[47]] | WW[jW[51]] << WW[jW[8]]) & jW[11]), kW(WW[jW[83]])
+             }(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
+ ... (44 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L633-L635` → after: `L1028-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1028-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L1028-L1030) · [Before (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L633-L635)

```diff
-           if (ie) {
-             const ee = He.material;
-             ee && Ue.push("usemtl " + ee.id)
+ 
+           function fW(...WW) {
+             return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = pW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
```

#### 16. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L637-L640` → after: `L1032-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1032-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L1032-L1046) · [Before (L637-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L637-L640)

```diff
-           const qe = He.geometry;
-           if (!qe) {
-             be.Tools.Warn("No geometry is present on the mesh");
-             continue
+           DW *= WW[jW[0]][fW(170) + fW(jW[89])]
+         }
+         let VW = WW[jW[0]][vW(172) + vW(173) + "ss"] * xW;
+         if (xW < .3) {
+           function CW(...WW) {
+             for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = ';IEWPRFDblVCX5QwqUB6m$>j+x7KYohTzg%@8!#GsLkv~JO92/_,dZec)[SnM3uy<:r"=]H&A}N|4tf{*p(`1.i0?a^', WW[-jW[88]] = "" + (WW[jW[1]] || ""), WW[jW[14]] = WW[-jW[88]].length, WW[jW[19]] = [], WW[jW[7]] = jW[1], WW[jW[8]] = jW[1], WW[-jW[ … [truncated]
+               if (WW[jW[5]] = WW[jW[4]].indexOf(WW[-jW[88]][WW[jW[10]]]), WW[jW[5]] !== -jW[2])
+                 if (WW[-jW[89]] < jW[1]) WW[-jW[89]] = WW[jW[5]];
+                 else {
+                   HW(WW[-jW[89]] += WW[jW[5]] * jW[30], WW[jW[7]] |= WW[-jW[89]] << WW[jW[8]], WW[jW[8]] += (WW[-jW[89]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
+                   do {
+                     HW(WW[jW[19]].push(WW[jW[7]] & jW[11]), WW[jW[7]] >>= jW[10], WW[jW[8]] -= jW[10])
+                   } while (WW[jW[8]] > jW[25]);
+                   WW[-jW[89]] = -jW[2]
+                 } return WW[-jW[89]] > -jW[2] && WW[jW[19]].push((WW[jW[7]] | WW[-jW[89]] << WW[jW[8]]) & jW[11]), kW(WW[jW[19]])
```

#### 17. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L642-L650` → after: `L1048-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1048-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L1048-L1050) · [Before (L642-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L642-L650)

```diff
-           const fe = qe.getVerticesData("position"),
-             Te = qe.getVerticesData("normal"),
-             pe = qe.getVerticesData("uv"),
-             Xe = qe.eMe();
-           let ze = 0,
-             Be = 0;
-           if (!fe || !Xe) {
-             be.Tools.Warn("There are no position vertices or indices on the mesh!");
-             continue
+ 
+           function XW(...WW) {
+             return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = CW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
```

#### 18. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L652-L667` → after: `L1052-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1052-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L1052-L1058) · [Before (L652-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L652-L667)

```diff
-           const Ee = ee[0].Xx().useRightHandedSystem ? 1 : -1;
-           for (let ee = 0; ee < fe.length; ee += 3) Ue.push("v " + fe[ee] * Ee + " " + fe[ee + 1] + " " + fe[ee + 2]), ze++;
-           if (null != Te)
-             for (let ee = 0; ee < Te.length; ee += 3) Ue.push("vn " + Te[ee] * Ee + " " + Te[ee + 1] + " " + Te[ee + 2]);
-           if (null != pe)
-             for (let ee = 0; ee < pe.length; ee += 2) Ue.push("vt " + pe[ee] + " " + pe[ee + 1]), Be++;
-           const ge = ["", "", ""],
-             Oe = (He.material || He.Xx().defaultMaterial)._getEffectiveOrientation(He),
-             [de, We] = Oe === Me.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
-           for (let ee = 0; ee < Xe.length; ee += 3) {
-             const ie = [String(Xe[ee] + Fe), String(Xe[ee + de] + Fe), String(Xe[ee + We] + Fe)],
-               He = [String(Xe[ee] + Je), String(Xe[ee + de] + Je), String(Xe[ee + We] + Je)],
-               ye = ie,
-               be = null != pe ? He : ge,
-               Me = null != Te ? ie : ge;
-             Ue.push("f " + ye[0] + "/" + be[0] + "/" + Me[0] + " " + ye[1] + "/" + be[1] + "/" + Me[1] + " " + ye[2] + "/" + be[2] + "/" + Me[2])
+ 
+           function BW(...WW) {
+             function iW() {}
+             WW[jW[12]] = jW[1], HW(WW[-jW[21]] = function(...WW) {
+               for (HW(WW[jW[12]] = jW[0], WW[jW[0]] = jW[1], WW[jW[92]] = jW[1], WW[-jW[90]] = new iW(jW[1]), WW[-jW[93]] = WW[-jW[90]], WW[jW[91]] = WW[jW[1]], WW[jW[25]] = WW[jW[2]]); WW[jW[91]] !== jW[59] || WW[jW[25]] !== jW[59];) HW(WW[jW[92]] = (WW[jW[91]] ? WW[jW[91]].val  … [truncated]
+               return WW[jW[0]] && (WW[-jW[93]].next = new iW(WW[jW[0]])), WW[-jW[90]].next
+             }, console.log(WW[-jW[21]]))
```

#### 19. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L669-L697` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L1060) · [Before (L669-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L669-L697)

```diff
-           Ke && ke && He.bakeTransformIntoVertices(ke), Fe += ze, Je += Be
-         }
-         return Ue.join("\n")
-       }
-       static MTL(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
-         const He = [],
-           ye = ee.material;
-         He.push("newmtl " + ie), He.push("  Ns " + ye.specularPower.toFixed(4)), He.push("  Ni 1.5000"), He.push("  d " + ye.alpha.toFixed(4)), He.push("  Tr 0.0000"), He.push("  Tf 1.0000 1.0000 1.0000"), He.push("  illum 2"), He.push("  Ka " + ye.ambientColor.r.toFixed(4) + " " … [truncated]
-         ye.ambientTexture && He.push("  map_Ka " + ye.ambientTexture.name), ye.diffuseTexture && He.push("  map_Kd " + ye.diffuseTexture.name), ye.specularTexture && He.push("  map_Ks " + ye.specularTexture.name), ye.bumpTexture && He.push("  map_bump -imfchan z " + ye.bumpTextur … [truncated]
-         return He.join("\n")
-       }
-     }
-     var Ue = 0,
-       Fe = He(44824);
-     class Je {
- ... (13 more removed lines; see GitHub link above)
+           XW(174) + "s" in sW && BW(), VW *= xW
```

#### 20. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L701-L709` → after: `L1066-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1066-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L1066-L1075) · [Before (L701-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L701-L709)

```diff
-     var oe = He(42233),
-       Re = He(42177),
-       ke = He(44815),
-       qe = He(42193),
-       fe = He(40913),
-       Te = He(37929),
-       pe = He(38020),
-       Xe = He(37938);
-     const ze = Xe.HighestCommonFactor,
+   },
+   38824: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW,
+       e: () => LW
+     });
+     var mW = OW(38831),
+       EW = OW(2012);
+     const NW = 2,
+       PW = 1,
```

#### 21. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L711-L715` → after: `L1077-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1077-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L1077-L1113) · [Before (L711-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L711-L715)

```diff
-         ...Xe,
-         TwoPi: 2 * Math.PI,
-         Sign: Math.sign,
-         Log2: Math.log2,
-         HCF: ze
+         FP: 1,
+         fluidDrag: -1,
+         fluidDragHorizontal: -1,
+         fluidDragVertical: -1,
+         gravityMultiplier: 2,
+         width: .5,
+         height: 1.8,
+         canRun: !0,
+         jumpMultiplier: 1,
+         upwardImpulseOnUse: 0,
+         canAutoStep: !0,
+         canAutoStepByBlock: {},
+         riderOffset: [0, 0, 0],
+         pose: "standing",
+         effect: null,
+         standingFriction: 5,
+ ... (21 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L14366-L16192` → after: `L1116-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L1116-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/257.js#L1116-L1126) · [Before (L14366-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/257.js#L14366-L16192)

```diff
-     function GK(ee) {
-       return "number" === typeof ee || "boolean" === typeof ee || "bigint" === typeof ee || IK(ee)
-     }
-     class rK {
-       constructor(ee, ie) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = ee, this._format = jK(ie), this._nFmt = new sK(this._format)
-       }
-       withNamespace() {
-         for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
-         for (const ye of ie) this._assignNamespace(ye);
-         return this
-       }
-       serialize(ee, ie) {
-         if (!(ie = ie ?? CK(ee))) throw new Error("can not find name for given object");
-         const He = uK(ie);
-         He.ns && this._assignNamespace(He.ns, "xmlns"), this._gatherNamespaces(ee, new WeakSet);
- ... (1811 more removed lines; see GitHub link above)
+     function cW(WW, iW, OW, LW, cW, wW, tW) {
+       if (cW.speed) return (0, mW.c)(iW, OW, LW, cW, wW, tW, WW), void(cW.ticksToReachMaxIdleFriction = NW);
+       const ZW = LW.isOnGround(),
+         xW = iW.bloxd.getSyncedClientOptions(iW.bloxd.getPlayerReader(OW)),
+         lW = null === xW ? iW.bloxd.getClientPredictedOption(OW, "groundFrictionScale") : xW.groundFrictionScale,
+         AW = null === xW ? iW.bloxd.getClientPredictedOption(OW, "airFrictionScale") : xW.airFrictionScale,
+         bW = ZW ? lW : AW,
+         jW = Math.max(PW, bW),
+         UW = cW.ticksToReachMaxIdleFriction / NW,
+         kW = (0, EW.v)(jW, bW, UW);
+       wW.friction = WW.standingFriction * ((null === xW ? iW.bloxd.getClientPredictedOption(OW, "airMomentumConservation") : xW.airMomentumConservation) ? kW : bW), cW.ticksToReachMaxIdleFriction > 0 && cW.ticksToReachMaxIdleFriction--
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L4-L6)

```diff
-   37929: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => be
+   41327: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       getBlockFaces: () => xW,
+       getIngameIconUrl: () => bW,
+       getItemIconUrl: () => AW,
+       getItemTextureUrl: () => lW,
+       getParticleTextureUrl: () => jW
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L8-L15` → after: `L12-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L12-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L12-L23) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L8-L15)

```diff
-     var ye = He(37931);
-     class be {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
+     var mW = OW(5174),
+       EW = OW(38195),
+       NW = OW(10484),
+       PW = OW(4344);
+     const LW = new Set,
+       cW = new Set;
+     let wW = null;
+ 
+     function tW(WW) {
+       LW.has(WW) || (LW.add(WW), cW.add(WW), wW ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${cW.size} names`, [...cW]), cW.clear(), wW = null
+       }), 1e3))
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L17-L32` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L25-L30) · [Before (L17-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L17-L32)

```diff
-     be.Instances = [], be.OnEnginesDisposedObservable = new ye.d, be._LastCreatedScene = null, be.UseFallbackTexture = !0, be.FallbackTexture = ""
-   },
-   37927: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => ye
-     });
-     class ye {
-       static SetMatrixPrecision(ee) {
-         if (ye.MatrixTrackPrecisionChange = !1, ee && !ye.MatrixUse64Bits && ye.MatrixTrackedMatrices)
-           for (let ie = 0; ie < ye.MatrixTrackedMatrices.length; ++ie) {
-             const ee = ye.MatrixTrackedMatrices[ie],
-               He = ee._m;
-             ee._m = new Array(16);
-             for (let ie = 0; ie < 16; ++ie) ee._m[ie] = He[ie]
-           }
-         ye.MatrixUse64Bits = ee, ye.MatrixCurrentType = ye.MatrixUse64Bits ? Array : Float32Array, ye.MatrixTrackedMatrices = null
+ 
+     function ZW(WW, iW) {
+       try {
+         return (0, NW.getDefaultTexture)(WW, iW).url
+       } catch {
+         return tW(WW), null
```

#### 4. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L49-L88` → after: `L35-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L35-L49) · [Before (L49-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L49-L88)

```diff
-       ee.updateFlag = ye._UpdateFlagSeed++
-     }
- 
-     function Me(ee, ie, He) {
-       let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const be = ee.Qbe(),
-         Me = ie.Qbe(),
-         Ke = be[0],
-         Ue = be[1],
-         Fe = be[2],
-         Je = be[3],
-         oe = be[4],
-         Re = be[5],
-         ke = be[6],
-         qe = be[7],
-         fe = be[8],
- ... (24 more removed lines; see GitHub link above)
+       var iW, OW;
+       const NW = EW.n[WW];
+       if (!NW || NW.itemTexture || !NW.textureInfo) return null;
+       const {
+         textureInfo: LW,
+         texturePerSide: cW
+       } = NW, wW = WW => {
+         return "string" === typeof(iW = cW && Array.isArray(LW) ? LW[cW[WW]] : LW) ? ZW(iW, PW.g.BLOCK) : iW && "object" === typeof iW && "animTextures" in iW ? ZW((0, mW.l)(iW), PW.g.BLOCK) : null;
+         var iW
+       }, tW = wW(2);
+       return tW ? {
+         top: tW,
+         left: null !== (iW = wW(4)) && void 0 !== iW ? iW : tW,
+         right: null !== (OW = wW(0)) && void 0 !== OW ? OW : tW
+       } : null
```

#### 5. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L91-L93` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L52-L55) · [Before (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L91-L93)

```diff
-     function Ke(ee, ie, He) {
-       let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       Me(ee, ie, He.Qbe(), ye), be(He)
+     function lW(WW) {
+       var iW;
+       const OW = EW.n[WW];
+       return ZW(null !== (iW = null === OW || void 0 === OW ? void 0 : OW.itemTexture) && void 0 !== iW ? iW : "string" === typeof(null === OW || void 0 === OW ? void 0 : OW.textureInfo) ? OW.textureInfo : WW, PW.g.ITEM)
```

#### 6. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L96-L99` → after: `L58-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L58-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L58-L60) · [Before (L96-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L96-L99)

```diff
-     function Ue(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const ye = ee.Qbe();
-       ie[He] = ye[0], ie[He + 1] = ye[1], ie[He + 2] = ye[2], ie[He + 3] = ye[3], ie[He + 4] = ye[4], ie[He + 5] = ye[5], ie[He + 6] = ye[6], ie[He + 7] = ye[7], ie[He + 8] = ye[8], ie[He + 9] = ye[9], ie[He + 10] = ye[10], ie[He + 11] = ye[11], ie[He + 12] = ye[12], ie[He + 13]  … [truncated]
+     function AW(WW) {
+       var iW, OW;
+       return EW.n[WW] ? null !== (iW = null === (OW = xW(WW)) || void 0 === OW ? void 0 : OW.top) && void 0 !== iW ? iW : lW(WW) : null
```

#### 7. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L102-L104` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L63-L64) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L102-L104)

```diff
-     function Fe(ee, ie) {
-       const He = Je(ee, ie.Qbe());
-       return He && be(ie), He
+     function bW(WW) {
+       return ZW(WW, PW.g.ICON)
```

#### 8. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L107-L162` → after: `L67-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L67-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L67-L72) · [Before (L107-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L107-L162)

```diff
-     function Je(ee, ie) {
-       const He = ee.Qbe(),
-         ye = He[0],
-         be = He[1],
-         Me = He[2],
-         Ke = He[3],
-         Ue = He[4],
-         Fe = He[5],
-         Je = He[6],
-         oe = He[7],
-         Re = He[8],
-         ke = He[9],
-         qe = He[10],
-         fe = He[11],
-         Te = He[12],
-         pe = He[13],
- ... (40 more removed lines; see GitHub link above)
+     function jW(WW) {
+       try {
+         return OW(4478)(`./${WW}.png`)
+       } catch {
+         return tW(WW), null
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L166` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L75) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L166)

```diff
-   37917: (ee, ie, He) => {
+   38214: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L168-L174` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L77) · [Before (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L168-L174)

```diff
-       b: () => Te,
-       f: () => fe,
-       h: () => Ee,
-       j: () => Xe,
-       n: () => Re,
-       p: () => ke,
-       s: () => qe
+       c: () => mW
```

#### 11. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L176-L629` → after: `L79-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L79-L178) · [Before (L176-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L176-L629)

```diff
-     var ye = He(37920),
-       be = He(37925),
-       Me = He(37927),
-       Ke = He(37929),
-       Ue = He(37938),
-       Fe = He(37946),
-       Je = He(37949);
-     const oe = ee => parseInt(ee.toString().replace(/\W/g, ""));
-     class Re {
-       constructor() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = ee, this.y = ie
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
- ... (438 more removed lines; see GitHub link above)
+     const mW = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (84 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L631-L1653` → after: `L180-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L180-L195) · [Before (L631-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L631-L1653)

```diff
-         return He
-       }
-       equals(ee) {
-         return ee && this._x === ee._x && this._y === ee._y && this._z === ee._z
-       }
-       equalsWithEpsilon(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye.b;
-         return ee && (0, Ue.WithinEpsilon)(this._x, ee._x, ie) && (0, Ue.WithinEpsilon)(this._y, ee._y, ie) && (0, Ue.WithinEpsilon)(this._z, ee._z, ie)
-       }
-       wFe(ee, ie, He) {
-         return this._x === ee && this._y === ie && this._z === He
-       }
-       multiplyInPlace(ee) {
-         return this._x *= ee._x, this._y *= ee._y, this._z *= ee._z, this._isDirty = !0, this
-       }
-       multiply(ee) {
- ... (1007 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
```

#### 13. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1655-L1684` → after: `L197-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L197-L206) · [Before (L1655-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L1655-L1684)

```diff
-         return ee
-       }
-       toAlphaBetaGammaToRef(ee) {
-         const ie = this._z,
-           He = this._x,
-           ye = this._y,
-           be = this._w,
-           Me = Math.sqrt(He * He + ye * ye),
-           Ke = Math.sqrt(ie * ie + be * be),
-           Ue = 2 * Math.atan2(Me, Ke),
-           Fe = 2 * Math.atan2(ie, be),
-           Je = 2 * Math.atan2(ye, He),
-           oe = (Fe + Je) / 2,
-           Re = (Fe - Je) / 2;
-         return ee.set(Re, Ue, oe), ee
-       }
- ... (14 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:gold-moonstone-gold": {
+         name: "Midas Moon",
+         lore: "Mobs it fells seem to rattle with coins.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .92,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2,
+           bossBane: .6
```

#### 14. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1686-L2915` → after: `L208-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L208-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/258.js#L208-L235) · [Before (L1686-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/258.js#L1686-L2915)

```diff
-       }
-       toAxisAngleToRef(ee) {
-         let ie;
-         const He = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           ye = this._w;
-         return He > 0 ? (ie = 2 * Math.atan2(He, ye), ee.set(this._x / He, this._y / He, this._z / He)) : (ie = 0, ee.set(1, 0, 0)), ie
-       }
-       static FromRotationMatrix(ee) {
-         const ie = new fe;
-         return fe.FromRotationMatrixToRef(ee, ie), ie
-       }
-       static FromRotationMatrixToRef(ee, ie) {
-         const He = ee.m,
-           ye = He[0],
-           be = He[4],
-           Me = He[8],
- ... (1214 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:iron-iron-iron": {
+         name: "Old Faithful",
+         lore: "It has never let anyone down. It never will.",
+         damageMultiplier: 1.15,
+         cooldownMultiplier: .94,
+         ability: "warcry"
+       },
+       "skyblock:forged:iron-wood-wood": {
+         name: "Militia Blade",
+         lore: "Handed out at the outpost gate when the rift first opened.",
+         damageMultiplier: 1.09,
+         cooldownMultiplier: .97,
+         ability: "warcry"
+       },
+       "skyblock:forged:stone-stone-stone": {
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   38022: (ee, ie, He) => {
+   38249: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L6-L7)

```diff
-       c: () => Re,
-       g: () => ke,
+       e: () => NW,
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L9-L594` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L8) · [Before (L9-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L9-L594)

```diff
-       j: () => qe
-     });
-     var ye = He(37925),
-       be = He(37920),
-       Me = He(37938),
-       Ke = He(37949);
- 
-     function Ue(ee) {
-       return Math.pow(ee, be.h)
-     }
- 
-     function Fe(ee) {
-       return ee <= .04045 ? .0773993808 * ee : Math.pow(.947867299 * (ee + .055), 2.4)
-     }
- 
-     function Je(ee) {
- ... (570 more removed lines; see GitHub link above)
+       i: () => EW
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L601` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L15) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L601)

```diff
-   37938: (ee, ie, He) => {
+   38285: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L617` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L31) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L617)

```diff
-       return ee === ie ? ee : Math.random() * (ie - ee) + ee
+       return WW === iW ? WW : Math.random() * (iW - WW) + WW
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L702` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L116) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L702)

```diff
-       return ye = Math.abs(ie - ee) <= He ? ie : ee + Math.sign(ie - ee) * He, ye
+       return mW = Math.abs(iW - WW) <= OW ? iW : WW + Math.sign(iW - WW) * OW, mW
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L708` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L122) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L708)

```diff
-       return be = -He < ye && ye < He ? ie : Oe(ee, ie = ee + ye, He), be
+       return EW = -OW < mW && mW < OW ? iW : SW(WW, iW = WW + mW, OW), EW
```

#### 8. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L721` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L135) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L721)

```diff
-       return 0 === He ? ie : Ze(ie, He)
+       return 0 === OW ? iW : JW(iW, OW)
```

#### 9. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L750` → after: `L164-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L164-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L164-L177) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L750)

```diff
-   37925: (ee, ie, He) => {
+   38235: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       Matrix: () => mW.d,
+       Quaternion: () => mW.g,
+       RegisterMathVector: () => mW.j,
+       TmpVectors: () => mW.l,
+       Vector2: () => mW.m,
+       fA: () => mW.q,
+       Vector4: () => mW.r
+     });
+     var mW = OW(38241);
+     (0, mW.j)()
+   },
+   38253: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L762` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L189) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L762)

```diff
-       g: () => be,
+       f: () => EW,
```

#### 11. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L788` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L215) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L788)

```diff
-   37949: (ee, ie, He) => {
+   38299: (WW, iW, OW) => {
```

#### 12. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L790-L791` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/259.js#L217-L218) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/259.js#L790-L791)

```diff
-       c: () => Me,
-       e: () => be
+       d: () => NW,
+       h: () => EW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L2)

```diff
- export const ids = [260];
+ export const ids = [260, 267];
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4-L6` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L5-L25) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L4-L6)

```diff
-   37929: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => be
+   39459: WW => {
+     WW.exports = function(WW) {
+       return null != WW && null != WW.constructor && "function" === typeof WW.constructor.isBuffer && WW.constructor.isBuffer(WW)
+     }
+   },
+   39443: (WW, iW, OW) => {
+     var mW = OW(39452),
+       EW = OW(39456),
+       NW = OW(39459);
+     OW.g.__TYPEDARRAY_POOL || (OW.g.__TYPEDARRAY_POOL = {
+       UINT8: EW([32, 0]),
+       UINT16: EW([32, 0]),
+       UINT32: EW([32, 0]),
+       INT8: EW([32, 0]),
+       INT16: EW([32, 0]),
+       INT32: EW([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L8-L11` → after: `L27-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L27-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L27-L37) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L8-L11)

```diff
-     var ye = He(37931);
-     class be {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+     var PW = "undefined" !== typeof Uint8ClampedArray,
+       LW = OW.g.__TYPEDARRAY_POOL;
+     LW.UINT8C || (LW.UINT8C = EW([32, 0])), LW.BUFFER || (LW.BUFFER = EW([32, 0]));
+     var cW = LW.DATA,
+       wW = LW.BUFFER;
+ 
+     function tW(WW) {
+       if (WW) {
+         var iW = WW.length || WW.byteLength,
+           OW = mW.log2(iW);
+         cW[OW].push(WW)
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L13-L14` → after: `L39-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L39-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L39-L93) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L13-L14)

```diff
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
+     }
+ 
+     function ZW(WW) {
+       WW = mW.nextPow2(WW);
+       var iW = mW.log2(WW),
+         OW = cW[iW];
+       return OW.length > 0 ? OW.pop() : new ArrayBuffer(WW)
+     }
+ 
+     function xW(WW) {
+       return new Uint8Array(ZW(WW), 0, WW)
+     }
+ 
+     function lW(WW) {
+       return new Uint16Array(ZW(2 * WW), 0, WW)
+     }
+ ... (39 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L19-L35` → after: `L135-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L135-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L135-L242) · [Before (L19-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L19-L35)

```diff
-   39463: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Me
-     });
-     var ye = He(39467);
-     const be = (ee, ie, He) => ee ? ee.getClassName && "Mesh" === ee.getClassName() ? null : !ee.getClassName || "SubMesh" !== ee.getClassName() && "PhysicsBody" !== ee.getClassName() ? ee.clone ? ee.clone() : Array.isArray(ee) ? ee.slice() : He && "object" === typeof ee ? {
-       ...ee
-     } : null : ee.clone(ie) : null;
-     class Me {
-       static DeepCopy(ee, ie, He, Me) {
-         let Ke = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const Ue = function(ee) {
-           const ie = [];
-           do {
-             const He = Object.getOwnPropertyNames(ee);
-             for (const ee of He) - 1 === ie.indexOf(ee) && ie.push(ee)
- ... (1 more removed lines; see GitHub link above)
+   39452: (WW, iW) => {
+     function OW(WW) {
+       var iW = 32;
+       return (WW &= -WW) && iW--, 65535 & WW && (iW -= 16), 16711935 & WW && (iW -= 8), 252645135 & WW && (iW -= 4), 858993459 & WW && (iW -= 2), 1431655765 & WW && (iW -= 1), iW
+     }
+     iW.INT_BITS = 32, iW.INT_MAX = 2147483647, iW.INT_MIN = -1 << 31, iW.sign = function(WW) {
+       return (WW > 0) - (WW < 0)
+     }, iW.abs = function(WW) {
+       var iW = WW >> 31;
+       return (WW ^ iW) - iW
+     }, iW.min = function(WW, iW) {
+       return iW ^ (WW ^ iW) & -(WW < iW)
+     }, iW.max = function(WW, iW) {
+       return WW ^ (WW ^ iW) & -(WW < iW)
+     }, iW.isPow2 = function(WW) {
+       return !(WW & WW - 1) && !!WW
+ ... (92 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L37-L56` → after: `L244-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L244-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L244-L432) · [Before (L37-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L37-L56)

```diff
-         }(ee);
-         for (const Je of Ue) {
-           if ("_" === Je[0] && (!Me || -1 === Me.indexOf(Je))) continue;
-           if (Je.endsWith("Observable")) continue;
-           if (He && -1 !== He.indexOf(Je)) continue;
-           const Ue = ee[Je],
-             oe = typeof Ue;
-           if ("function" !== oe) try {
-             if ("object" === oe)
-               if (Ue instanceof Uint8Array) ie[Je] = Uint8Array.from(Ue);
-               else if (Ue instanceof Array) {
-               if (ie[Je] = [], Ue.length > 0)
-                 if ("object" == typeof Ue[0])
-                   for (let ee = 0; ee < Ue.length; ee++) {
-                     const He = be(Ue[ee], ie, Ke); - 1 === ie[Je].indexOf(He) && ie[Je].push(He)
-                   } else ie[Je] = Ue.slice(0)
- ... (4 more removed lines; see GitHub link above)
+         }
+       }
+     }
+ 
+     function tW(WW, iW) {
+       mW.push([WW, iW])
+     }
+   },
+   39485: (WW, iW) => {
+     var OW = "d",
+       mW = "ax",
+       EW = "fp",
+       NW = "es",
+       PW = "rs",
+       LW = "re",
+       cW = "rb",
+ ... (173 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L62-L67` → after: `L438-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L438-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L438-L1175) · [Before (L62-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L62-L67)

```diff
-   38745: (ee, ie, He) => {
-     function ye() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ee => {
-         const ie = 16 * Math.random() | 0;
-         return ("x" === ee ? ie : 3 & ie | 8).toString(16)
-       }))
+   39487: (WW, iW, OW) => {
+     WW.exports = function(WW, iW, OW, PW, LW, cW) {
+       if (PW <= OW + 1) return OW;
+       var wW = OW,
+         tW = PW,
+         ZW = PW + OW >>> 1,
+         xW = 2 * WW,
+         lW = ZW,
+         AW = LW[xW * ZW + iW];
+       for (; wW < tW;) {
+         if (tW - wW < EW) {
+           NW(WW, iW, wW, tW, LW, cW), AW = LW[xW * ZW + iW];
+           break
+         }
+         var bW = tW - wW,
+           jW = Math.random() * bW + wW | 0,
+ ... (722 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L70-L71` → after: `L1609-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1609-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1609-L1613) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L70-L71)

```diff
-       d: () => ye
-     })
+       Color3: () => mW.b,
+       c: () => mW.d
+     });
+     var mW = OW(38372);
+     (0, mW.f)()
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L73` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1615) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L73)

```diff
-   39467: (ee, ie, He) => {
+   38937: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L78-L127` → after: `L1621-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1621-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1621-L1656) · [Before (L78-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L78-L127)

```diff
-       static _CheckLimit(ee, ie) {
-         let He = ye._LogLimitOutputs[ee];
-         return He ? He.current++ : (He = {
-           limit: ie,
-           current: 1
-         }, ye._LogLimitOutputs[ee] = He), He.current <= He.limit
-       }
-       static _GenerateLimitMessage(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const He = ye._LogLimitOutputs[ee];
-         if (!He || !ye.MessageLimitReached) return;
-         const be = this._Levels[ie];
-         He.current === He.limit && ye[be.name](ye.MessageLimitReached.replace(/%LIMIT%/g, "" + He.limit).replace(/%TYPE%/g, be.name ?? ""))
-       }
-       static _AddLogEntry(ee) {
-         ye._LogCache = ee + ye._LogCache, ye.OnNewCacheEntry && ye.OnNewCacheEntry(ee)
- ... (34 more removed lines; see GitHub link above)
+       static GetPlanes(WW) {
+         const iW = [];
+         for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
+         return EW.GetPlanesToRef(WW, iW), iW
+       }
+       static GetNearPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
+       }
+       static GetFarPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
+       }
+       static GetLeftPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
+ ... (20 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L144` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1660) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L144)

```diff
-   37931: (ee, ie, He) => {
+   38939: (WW, iW, OW) => {
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L146` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1662) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L146)

```diff
-       d: () => Ke
+       c: () => EW
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L148` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1664) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L148)

```diff
-     const ye = "undefined" !== typeof WeakRef;
+     var mW = OW(38241);
```

#### 14. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L150-L154` → after: `L1666-L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1666-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1666-L1667) · [Before (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L150-L154)

```diff
-       constructor(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           He = arguments.length > 2 ? arguments[2] : void 0,
-           ye = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(ee, ie, He, ye)
+       constructor(WW, iW, OW, EW) {
+         this.normal = new mW.q(WW, iW, OW), this.d = EW
```

#### 15. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L156-L160` → after: `L1669-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1669-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1669-L1670) · [Before (L156-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L156-L160)

```diff
-       initialize(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           He = arguments.length > 2 ? arguments[2] : void 0,
-           ye = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = ee, this.skipNextObservers = ie, this.target = He, this.currentTarget = ye, this
+       wEW() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 16. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L162-L166` → after: `L1672-L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1672-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1672-L1673) · [Before (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L162-L166)

```diff
-     }
-     class Me {
-       constructor(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = ee, this.mask = ie, this.scope = He, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
+       clone() {
+         return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 17. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L168-L170` → after: `L1675-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1675-L1676) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L168-L170)

```diff
-       remove() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(ee)
+       getClassName() {
+         return "Plane"
```

#### 18. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L172-L181` → after: `L1678-L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1678-L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1678-L1680) · [Before (L172-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L172-L181)

```diff
-     }
-     class Ke {
-       static FromPromise(ee, ie) {
-         const He = new Ke;
-         return ee.then((ee => {
-           He.notifyObservers(ee)
-         })).catch((ee => {
-           if (!ie) throw ee;
-           ie.notifyObservers(ee)
-         })), He
+       getHashCode() {
+         let WW = this.normal.getHashCode();
+         return WW = 397 * WW ^ this.d, WW
```

#### 19. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L183-L203` → after: `L1682-L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1682-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1682-L1685) · [Before (L183-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L183-L203)

```diff
-       get observers() {
-         return this._observers
-       }
-       constructor(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = ie, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new be(0), ee && (this._onObserverAdded = ee)
-       }
-       add(ee) {
-         let ie = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           He = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (!ee) return null;
-         const be = new Me(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
-         be.unregisterOnNextCall = He, ie ? this._observers.unshift(be) : this._observers.push(be), this._onObserverAdded && this._onObserverAdded(be), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(be, this._lastNotifiedValue);
-         const Ke = ye ? new WeakRef(this) : {
-           deref: () => this
-         };
- ... (5 more removed lines; see GitHub link above)
+       normalize() {
+         const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let iW = 0;
+         return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
```

#### 20. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L205-L206` → after: `L1687-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1687-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1687-L1699) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L205-L206)

```diff
-       addOnce(ee) {
-         return this.add(ee, void 0, void 0, void 0, !0)
+       transform(WW) {
+         const iW = EW._TmpMatrix;
+         WW.invertToRef(iW);
+         const OW = iW.m,
+           mW = this.normal.x,
+           NW = this.normal.y,
+           PW = this.normal.z,
+           LW = this.d,
+           cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
+           wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
+           tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
+           ZW = mW * OW[12] + NW * OW[13] + PW * OW[14] + LW * OW[15];
+         return new EW(cW, wW, tW, ZW)
```

#### 21. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L208-L247` → after: `L1701-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1701-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1701-L1702) · [Before (L208-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L208-L247)

```diff
-       remove(ee) {
-         if (!ee) return !1;
-         ee._remove = null;
-         return -1 !== this._observers.indexOf(ee) && (this._deferUnregister(ee), !0)
-       }
-       removeCallback(ee, ie) {
-         for (let He = 0; He < this._observers.length; He++) {
-           const ye = this._observers[He];
-           if (!ye._willBeUnregistered && (ye.callback === ee && (!ie || ie === ye.scope))) return this._deferUnregister(ye), !0
-         }
-         return !1
-       }
-       _deferUnregister(ee) {
-         ee._willBeUnregistered || (this._numObserversMarkedAsDeleted++, ee.unregisterOnNextCall = !1, ee._willBeUnregistered = !0, setTimeout((() => {
-           this._remove(ee)
-         }), 0))
- ... (24 more removed lines; see GitHub link above)
+       dotCoordinate(WW) {
+         return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
```

#### 22. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L249-L253` → after: `L1704-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1704-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1704-L1716) · [Before (L249-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L249-L253)

```diff
-       notifyObserver(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
-         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ie), ee._willBeUnregistered) return;
-         const ye = this._eventState;
-         ye.mask = He, ye.skipNextObservers = !1, ee.unregisterOnNextCall && this._deferUnregister(ee), ee.callback(ie, ye)
+       copyFromPoints(WW, iW, OW) {
+         const mW = iW.x - WW.x,
+           EW = iW.y - WW.y,
+           NW = iW.z - WW.z,
+           PW = OW.x - WW.x,
+           LW = OW.y - WW.y,
+           cW = OW.z - WW.z,
+           wW = EW * cW - NW * LW,
+           tW = NW * PW - mW * cW,
+           ZW = mW * LW - EW * PW,
+           xW = Math.sqrt(wW * wW + tW * tW + ZW * ZW);
+         let lW;
+         return lW = 0 !== xW ? 1 / xW : 0, this.normal.x = wW * lW, this.normal.y = tW * lW, this.normal.z = ZW * lW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
```

#### 23. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L255-L256` → after: `L1718-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1718-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1718-L1719) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L255-L256)

```diff
-       hasObservers() {
-         return this._observers.length - this._numObserversMarkedAsDeleted > 0
+       isFrontFacingTo(WW, iW) {
+         return mW.q.Dot(this.normal, WW) <= iW
```

#### 24. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L258-L263` → after: `L1721-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1721-L1722) · [Before (L258-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L258-L263)

```diff
-       clear() {
-         for (; this._observers.length;) {
-           const ee = this._observers.pop();
-           ee && (ee._remove = null)
-         }
-         this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
+       signedDistanceTo(WW) {
+         return mW.q.Dot(WW, this.normal) + this.d
```

#### 25. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L265-L266` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1724-L1725) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L265-L266)

```diff
-       cleanLastNotifiedState() {
-         this._hasNotified = !1, this._lastNotifiedValue = void 0
+       static FromArray(WW) {
+         return new EW(WW[0], WW[1], WW[2], WW[3])
```

#### 26. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L268-L270` → after: `L1727-L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1727-L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1727-L1736) · [Before (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L268-L270)

```diff
-       clone() {
-         const ee = new Ke;
-         return ee._observers = this._observers.slice(0), ee
+       static FromPoints(WW, iW, OW) {
+         const mW = new EW(0, 0, 0, 0);
+         return mW.copyFromPoints(WW, iW, OW), mW
+       }
+       static FromPositionAndNormal(WW, iW) {
+         const OW = new EW(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(WW, iW, OW)
+       }
+       static FromPositionAndNormalToRef(WW, iW, OW) {
+         return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
```

#### 27. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L272-L276` → after: `L1738-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1738-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1738-L1740) · [Before (L272-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L272-L276)

```diff
-       hasSpecificMask() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const ie of this._observers)
-           if (ie.mask & ee || ie.mask === ee) return !0;
-         return !1
+       static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
+         const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
+         return mW.q.Dot(OW, iW) + EW
```

#### 28. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L280` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1745) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L280)

```diff
-   63809: (ee, ie, He) => {
+   38235: (WW, iW, OW) => {
```

#### 29. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L282-L285` → after: `L1747-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1747-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1747-L1753) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L282-L285)

```diff
-       AsyncLoop: () => ye.c,
-       RegisterTools: () => ye.g,
-       Tools: () => ye.h,
-       className: () => ye.k
+       Matrix: () => mW.d,
+       Quaternion: () => mW.g,
+       RegisterMathVector: () => mW.j,
+       TmpVectors: () => mW.l,
+       Vector2: () => mW.m,
+       fA: () => mW.q,
+       Vector4: () => mW.r
```

#### 30. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L287-L288` → after: `L1755-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1755-L1756) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L287-L288)

```diff
-     var ye = He(41203);
-     (0, ye.g)()
+     var mW = OW(38241);
+     (0, mW.j)()
```

#### 31. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L290` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1758) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L290)

```diff
-   37949: (ee, ie, He) => {
+   39271: (WW, iW, OW) => {
```

#### 32. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L295-L298` → after: `L1762-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1762-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1762-L1774) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L295-L298)

```diff
-     const ye = {};
- 
-     function be(ee, ie) {
-       ye[ee] = ie
+     class mW {
+       constructor(WW, iW, OW, mW) {
+         this.x = WW, this.y = iW, this.width = OW, this.height = mW
+       }
+       toGlobal(WW, iW) {
+         return new mW(this.x * WW, this.y * iW, this.width * WW, this.height * iW)
+       }
+       toGlobalToRef(WW, iW, OW) {
+         return OW.x = this.x * WW, OW.y = this.y * iW, OW.width = this.width * WW, OW.height = this.height * iW, this
+       }
+       clone() {
+         return new mW(this.x, this.y, this.width, this.height)
+       }
```

#### 33. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L300-L302` → after: `L1776-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1776-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/260.js#L1776-L1782) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/260.js#L300-L302)

```diff
- 
-     function Me(ee) {
-       return ye[ee]
+   },
+   39088: (WW, iW, OW) => {
+     function mW() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
+         const iW = 16 * Math.random() | 0;
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+       }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L2)

```diff
- export const ids = [261];
+ export const ids = [261, 267, 272];
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   37977: (ee, ie, He) => {
+   41753: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7-L8` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L7) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L7-L8)

```diff
-       h: () => Ke,
-       j: () => be
+       f: () => LW
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L10-L12` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L9-L12) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L10-L12)

```diff
-     const ye = 1024,
-       be = 16,
-       Me = 36e4;
+     var mW = OW(39911),
+       EW = OW(41538),
+       NW = OW(41723),
+       PW = {};
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L15-L25` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L15) · [Before (L15-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L15-L25)

```diff
-         this.boneCount = ee, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * ee), this.position = new Float64Array(3 * ee), this.scale = new Float64Array(3 * ee).fill(1), this.touched = new Uint8Arra … [truncated]
-       }
-       clampToLimits() {
-         for (let ee = 0; ee < this.boneCount; ee++)
-           if (0 !== this.touched[ee])
-             for (let ie = 3 * ee; ie < 3 * ee + 3; ie++) {
-               const ee = this.rotation[ie],
-                 He = this.position[ie],
-                 Ke = this.scale[ie];
-               ee >= -36e4 && ee <= Me || (this.rotation[ie] = Fe(ee, Me)), He >= -1024 && He <= ye || (this.position[ie] = Fe(He, ye)), Ke >= -be && Ke <= be || (this.scale[ie] = Fe(Ke, be, 1))
-             }
+         this.attachedToElement = !1, this.attached = {}, this.camera = WW, this.checkInputs = () => {}
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L27-L32` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L17-L19) · [Before (L27-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L27-L32)

```diff
-       reset() {
-         for (let ee = 0; ee < this.boneCount; ee++)
-           if (0 !== this.touched[ee]) {
-             this.touched[ee] = 0;
-             for (let ie = 3 * ee; ie < 3 * ee + 3; ie++) this.rotation[ie] = 0, this.position[ie] = 0, this.scale[ie] = 1
-           }
+       add(WW) {
+         const iW = WW.getSimpleName();
+         this.attached[iW] ? mW.b.Warn("camera input of type " + iW + " already exists on camera") : (this.attached[iW] = WW, WW.camera = this.camera, WW.checkInputs && (this.checkInputs = this._addCheckInputs(WW.checkInputs.bind(WW))), this.attachedToElement && WW.attachControl(t … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L34-L54` → after: `L21-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L21-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L21-L58) · [Before (L34-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L34-L54)

```diff
-     }
-     class Ue {
-       constructor(ee) {
-         this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * ee), this.position = new Float64Arra … [truncated]
-       }
-       touch(ee, ie, He) {
-         0 === this.touched[ee] && (this.touched[ee] = 1, this.touchedBones[this.touchedCount++] = ee), this.boneWeight[ee] += ie, He && (this.overrides[ee] = 1)
-       }
-       applyTo(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         for (let be = 0; be < this.touchedCount; be++) {
-           const Me = this.touchedBones[be],
-             Ke = this.boneWeight[Me];
-           if (He || 1 === this.overrides[Me]) {
-             const He = ie * Math.min(1, Ke);
-             for (let ie = 3 * Me; ie < 3 * Me + 3; ie++) ee.rotation[ie] += (this.rotation[ie] / Ke - ee.rotation[ie]) * He, ee.position[ie] += (this.position[ie] / Ke - ee.position[ie]) * He, ee.scale[ie] += (1 + this.scaleDelta[ie] / Ke - ee.scale[ie]) * He
- ... (5 more removed lines; see GitHub link above)
+       remove(WW) {
+         for (const iW in this.attached) {
+           const OW = this.attached[iW];
+           if (OW === WW) return OW.detachControl(), OW.camera = null, delete this.attached[iW], void this.rebuildInputCheck()
+         }
+       }
+       removeByType(WW) {
+         for (const iW in this.attached) {
+           const OW = this.attached[iW];
+           OW.getClassName() === WW && (OW.detachControl(), OW.camera = null, delete this.attached[iW], this.rebuildInputCheck())
+         }
+       }
+       _addCheckInputs(WW) {
+         const iW = this.checkInputs;
+         return () => {
+           iW(), WW()
+ ... (22 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L58-L61` → after: `L62-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L62-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L62-L69) · [Before (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L58-L61)

```diff
-         for (let ee = 0; ee < this.touchedCount; ee++) {
-           const ie = this.touchedBones[ee];
-           this.touched[ie] = 0, this.overrides[ie] = 0, this.boneWeight[ie] = 0;
-           for (let ee = 3 * ie; ee < 3 * ie + 3; ee++) this.rotation[ee] = 0, this.position[ee] = 0, this.scaleDelta[ee] = 0
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       }
+       serialize(WW) {
+         const iW = {};
+         for (const OW in this.attached) {
+           const WW = this.attached[OW],
+             mW = EW.d.Serialize(WW);
+           iW[WW.getClassName()] = mW
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L63` → after: `L71-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L71-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L71-L92) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L63)

```diff
-         this.touchedCount = 0
+         WW.inputsmgr = iW
+       }
+       parse(WW) {
+         const iW = WW.inputsmgr;
+         if (iW) {
+           this.clear();
+           for (const WW in iW) {
+             const OW = PW[WW];
+             if (OW) {
+               const mW = iW[WW],
+                 NW = EW.d.Parse((() => new OW), mW, null);
+               this.add(NW)
+             }
+           }
+         } else
+           for (const OW in this.attached) {
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L72` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L96) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L72)

```diff
-   37971: (ee, ie, He) => {
+   41760: (WW, iW, OW) => {
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L74` → after: `L98-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L98-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L98-L105) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L74)

```diff
-       b: () => Fe,
+       b: () => mW.c
+     });
+     var mW = OW(41765);
+     (0, mW.e)()
+   },
+   41765: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => tW,
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L77-L85` → after: `L108-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L108-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L108-L191) · [Before (L77-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L77-L85)

```diff
-     var ye = He(37963),
-       be = He(347),
-       Me = He(1952),
-       Ke = He(37977);
- 
-     function Ue(ee) {
-       if ("WH" in ee) return te.createAnimationScript(ee);
-       return new oe(ee).createAnimationScript()
-     }
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(38241),
+       PW = OW(38372),
+       LW = OW(41773),
+       cW = OW(41732),
+       wW = OW(38299);
+     let tW = (() => {
+         var WW;
+         let iW, OW, cW = LW.b,
+           wW = [],
+           tW = [],
+           ZW = [],
+           xW = [];
+         return WW = class extends cW {
+           constructor(WW, iW, OW, EW) {
+ ... (68 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L87-L89` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L193-L194) · [Before (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L87-L89)

```diff
-     function Fe(ee, ie, He, be) {
-       const Me = ee.WH <= 0 ? 1 : ie + He * Math.max(0, be) / ee.WH;
-       return ee.tH === ye.i.LoopOnLastFrame ? Me % 1 : ee.tH === ye.i.NoLoop && Me >= 1 ? null : Math.min(1, Me)
+     function xW() {
+       ZW || (ZW = !0, cW.d.AddNodeConstructor("Light_Type_3", ((WW, iW) => () => new tW(WW, NW.q.Zero(), iW))), (0, wW.h)("BABYLON.HemisphericLight", tW))
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L92-L102` → after: `L211-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L211-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L211-L214) · [Before (L92-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L92-L102)

```diff
-       createAnimationScript(ee) {
-         const {
-           WH: ie,
-           loop: He,
-           ZH: ye
-         } = ee;
-         return {
-           WH: Math.round(ie),
-           tH: this.createLoopMode(null !== He && void 0 !== He && He),
-           ZH: this.createNodeSkeletonAnimationScript(null !== ye && void 0 !== ye ? ye : null)
-         }
+       static GetPlanes(WW) {
+         const iW = [];
+         for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
+         return EW.GetPlanesToRef(WW, iW), iW
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L104-L113` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L216-L218) · [Before (L104-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L104-L113)

```diff
-       createLoopMode(ee) {
-         switch (ee) {
-           case !1:
-             return ye.i.NoLoop;
-           case !0:
-             return ye.i.LoopOnLastFrame;
-           case "hold-on-last-frame":
-             return ye.i.HoldOnLastFrame
-         }
-         throw new Error(`Invalid loop mode schema: ${ee}`)
+       static GetNearPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L115-L122` → after: `L220-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L220-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L220-L222) · [Before (L115-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L115-L122)

```diff
-       createNodeSkeletonAnimationScript(ee) {
-         if (null === ee) return null;
-         const ie = {};
-         for (const He in ee) {
-           const ye = ee[He];
-           ie[He] = this.createNodeAnimationScript(ye)
-         }
-         return ie
+       static GetFarPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L124-L132` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L224-L226) · [Before (L124-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L124-L132)

```diff
-       createNodeAnimationScript(ee) {
-         const {
-           timeline: ie
-         } = ee, He = ie.filter((ee => Number.isFinite(ee.timeFraction)));
-         return He.sort(((ee, ie) => ee.timeFraction - ie.timeFraction)), {
-           rotation: this.createTimelineFromKeyframes(He, "rotation", qe),
-           position: this.createTimelineFromKeyframes(He, "position", Te),
-           scale: this.createTimelineFromKeyframes(He, "scale", Te, Xe)
-         }
+       static GetLeftPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L134-L156` → after: `L228-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L228-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L228-L230) · [Before (L134-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L134-L156)

```diff
-       createTimelineFromKeyframes(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee => ee;
-         const be = [];
-         for (const Je of ee) {
-           const ee = Je[ie];
-           if (ee) {
-             const ie = this.createAnimationFrameWithoutPrecomputes(Je.timeFraction, ee, ye);
-             Re(ie) && be.push(ie)
-           }
-         }
-         const Me = [];
-         for (let Je = 0; Je < be.length; Je++) {
-           var Ke, Ue, Fe;
-           const ee = be[Je],
-             ie = null !== (Ke = be[Je - 1]) && void 0 !== Ke ? Ke : ee,
-             ye = null !== (Ue = be[Je + 1]) && void 0 !== Ue ? Ue : ee,
- ... (7 more removed lines; see GitHub link above)
+       static GetRightPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L158-L171` → after: `L232-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L232-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L232-L238) · [Before (L158-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L158-L171)

```diff
-       createAnimationFrameWithoutPrecomputes(ee, ie, He) {
-         let ye, be, Me = null;
-         var Ke;
-         if ("object" === typeof ie && "point" in ie) Me = null !== (Ke = ie.PH) && void 0 !== Ke ? Ke : null, ye = ie.point, be = ie.point;
-         else if ("object" === typeof ie && "pre" in ie) {
-           var Ue;
-           Me = null !== (Ue = ie.PH) && void 0 !== Ue ? Ue : null, ye = ie.pre, be = ie.post
-         } else ye = ie, be = ie;
-         return {
-           timeFraction: ee,
-           PH: this.createLerpMode(Me),
-           pre: He(ye),
-           post: He(be)
-         }
+       static GetTopPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
+       }
+       static GetBottomPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L173-L174` → after: `L240-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L240-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L240-L246) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L173-L174)

```diff
-       createLerpMode(ee) {
-         return null === ee ? ye.f.Linear : Je.LERP_MODE_SCHEMA_MAPPING[ee]
+       static GetPlanesToRef(WW, iW) {
+         EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
+       }
+       static IsPointInFrustum(WW, iW) {
+         for (let OW = 0; OW < 6; OW++)
+           if (iW[OW].dotCoordinate(WW) < 0) return !1;
+         return !0
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L177-L180` → after: `L249-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L249-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L249-L254) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L177-L180)

```diff
-     Je.LERP_MODE_SCHEMA_MAPPING = {
-       linear: ye.f.Linear,
-       "catmull-rom-spline": ye.f.CatmullRomSpline
-     };
+   },
+   38939: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => EW
+     });
+     var mW = OW(38241);
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L182-L195` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L256-L257) · [Before (L182-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L182-L195)

```diff
-       constructor(ee) {
-         this.animationSchema = ee
-       }
-       createAnimationScript() {
-         const {
-           animation_length: ee,
-           loop: ie,
-           bones: He
-         } = this.animationSchema;
-         return {
-           WH: Math.round(1e3 * ee),
-           tH: this.createLoopMode(null !== ie && void 0 !== ie && ie),
-           ZH: this.createNodeSkeletonAnimationScript(null !== He && void 0 !== He ? He : null)
-         }
+       constructor(WW, iW, OW, EW) {
+         this.normal = new mW.q(WW, iW, OW), this.d = EW
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L197-L206` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L259-L260) · [Before (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L197-L206)

```diff
-       createLoopMode(ee) {
-         switch (ee) {
-           case !1:
-             return ye.i.NoLoop;
-           case !0:
-             return ye.i.LoopOnLastFrame;
-           case "hold_on_last_frame":
-             return ye.i.HoldOnLastFrame
-         }
-         throw new Error(`Invalid Blockbench loop mode schema: ${ee}`)
+       wEW() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L208-L215` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L262-L263) · [Before (L208-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L208-L215)

```diff
-       createNodeSkeletonAnimationScript(ee) {
-         if (null === ee) return null;
-         const ie = {};
-         for (const He in ee) {
-           const ye = ee[He];
-           ie[He] = this.createNodeAnimationScript(ye)
-         }
-         return ie
+       clone() {
+         return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L217-L227` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L265-L266) · [Before (L217-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L217-L227)

```diff
-       createNodeAnimationScript(ee) {
-         const {
-           rotation: ie,
-           position: He,
-           scale: ye
-         } = ee;
-         return {
-           rotation: this.createAnimationTimeline(null !== ie && void 0 !== ie ? ie : null, Be, qe, !0),
-           position: this.createAnimationTimeline(null !== He && void 0 !== He ? He : null, ge, Te, !1),
-           scale: this.createAnimationTimeline(null !== ye && void 0 !== ye ? ye : null, pe, Te, !1)
-         }
+       getClassName() {
+         return "Plane"
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L229-L265` → after: `L268-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L268-L270) · [Before (L229-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L229-L265)

```diff
-       createAnimationTimeline(ee, ie, He, ye) {
-         if (null === ee) return [];
-         (Array.isArray(ee) || "number" === typeof ee) && (ee = {
-           "0.0": ee
-         });
-         const be = Object.entries(ee).map((ee => {
-           let [He, ye] = ee;
-           const be = Number(He) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(be, ye, ie)
-         })).filter(Re);
-         be.sort(((ee, ie) => ee.timeFraction - ie.timeFraction)), ye && function(ee) {
-           for (let ie = 1; ie < ee.length; ie++) {
-             const He = ee[ie - 1].post,
-               ye = ee[ie],
-               be = Oe(ye.pre),
-               Me = Oe(ye.post),
- ... (21 more removed lines; see GitHub link above)
+       getHashCode() {
+         let WW = this.normal.getHashCode();
+         return WW = 397 * WW ^ this.d, WW
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L267-L281` → after: `L272-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L272-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L272-L315) · [Before (L267-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L267-L281)

```diff
-       createAnimationFrameWithoutPrecomputes(ee, ie, He) {
-         let ye, be, Me = null;
-         if ("object" === typeof ie && "post" in ie) {
-           var Ke;
-           Me = null !== (Ke = ie.lerp_mode) && void 0 !== Ke ? Ke : null, be = He(ie.post), ye = void 0 !== ie.pre ? He(ie.pre) : be
-         } else {
-           const ee = He(ie);
-           be = ee, ye = ee
-         }
-         return {
-           timeFraction: ee,
-           PH: this.createLerpMode(Me),
-           pre: ye,
-           post: be
-         }
+       normalize() {
+         const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let iW = 0;
+         return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
+       }
+       transform(WW) {
+         const iW = EW._TmpMatrix;
+         WW.invertToRef(iW);
+         const OW = iW.m,
+           mW = this.normal.x,
+           NW = this.normal.y,
+           PW = this.normal.z,
+           LW = this.d,
+           cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
+           wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
+           tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
+ ... (28 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L283-L284` → after: `L317-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L317-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L317-L363) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L283-L284)

```diff
-       createLerpMode(ee) {
-         return null === ee ? ye.f.Linear : oe.LERP_MODE_SCHEMA_MAPPING[ee]
+       static FromPoints(WW, iW, OW) {
+         const mW = new EW(0, 0, 0, 0);
+         return mW.copyFromPoints(WW, iW, OW), mW
+       }
+       static FromPositionAndNormal(WW, iW) {
+         const OW = new EW(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(WW, iW, OW)
+       }
+       static FromPositionAndNormalToRef(WW, iW, OW) {
+         return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
+         const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
+         return mW.q.Dot(OW, iW) + EW
+       }
+     }
+ ... (31 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L289` → after: `L378-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L378-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L378-L427) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L289)

```diff
-       return Number.isFinite(ee.timeFraction) && ke(ee.pre) && ke(ee.post)
+       let iW = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const OW = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         NW = [],
+         cW = WW.width || WW.size || 1,
+         wW = WW.height || WW.size || 1,
+         tW = WW.depth || WW.size || 1,
+         ZW = WW.wrap || !1;
+       let xW = void 0 === WW.topBaseAt ? 1 : WW.topBaseAt,
+         lW = void 0 === WW.bottomBaseAt ? 0 : WW.bottomBaseAt;
+       xW = (xW + 4) % 4, lW = (lW + 4) % 4;
+       let AW = [2, 0, 3, 1][xW],
+         bW = [2, 0, 1, 3][lW],
+         jW = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
+       if (ZW) {
+         iW = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], jW = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
+         let WW = [
+ ... (34 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L293` → after: `L431-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L431-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L431-L435) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L293)

```diff
-       return Number.isFinite(ee[0]) && Number.isFinite(ee[1]) && Number.isFinite(ee[2])
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const mW = new NW.e(WW, OW);
+       iW.sideOrientation = NW.e._GetDefaultSideOrientation(iW.sideOrientation), mW._originalBuilderSideOrientation = iW.sideOrientation;
+       return cW(iW).applyToMesh(mW, iW.updatable), mW
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L296-L304` → after: `L457-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L457-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L457-L483) · [Before (L296-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L296-L304)

```diff
-     function qe(ee, ie, He, ye, be, Me, Ke, Ue) {
-       const Fe = Me - ie,
-         Je = Me - ye,
-         oe = Ue - ye,
-         Re = [null, null, null];
-       for (let ke = 0; ke < Re.length; ke++) Re[ke] = fe(ee[ke], He[ke], be[ke], Ke[ke], Fe, oe);
-       return {
-         AH: Je,
-         YH: Re
+     function wW(WW) {
+       const iW = [],
+         OW = [],
+         mW = WW.lines,
+         EW = WW.colors,
+         PW = [];
+       let LW = 0;
+       for (let NW = 0; NW < mW.length; NW++) {
+         const WW = mW[NW];
+         for (let mW = 0; mW < WW.length; mW++) {
+           const {
+             x: cW,
+             y: wW,
+             z: tW
+           } = WW[mW];
+           if (OW.push(cW, wW, tW), EW) {
+ ... (11 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L308-L312` → after: `L489-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L489-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L489-L504) · [Before (L308-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L308-L312)

```diff
-     function fe(ee, ie, He, ye, Me, Ke) {
-       return {
-         aH: be.c.computeShortestRotation(ee, He) / Me,
-         cH: be.c.computeShortestRotation(ie, ye) / Ke,
-         delta: be.c.computeShortestRotation(ie, He)
+     function tW(WW) {
+       const iW = WW.dashSize || 3,
+         OW = WW.gapSize || 1,
+         EW = WW.dashNb || 200,
+         PW = WW.points,
+         LW = [],
+         cW = [],
+         wW = mW.q.Zero();
+       let tW, ZW, xW, lW = 0,
+         AW = 0;
+       for (xW = 0; xW < PW.length - 1; xW++) PW[xW + 1].subtractToRef(PW[xW], wW), lW += wW.length();
+       const bW = lW / EW,
+         jW = iW * bW / (iW + OW);
+       for (xW = 0; xW < PW.length - 1; xW++) {
+         PW[xW + 1].subtractToRef(PW[xW], wW), tW = Math.floor(wW.length() / bW), wW.normalize();
+         for (let WW = 0; WW < tW; WW++) ZW = bW * WW, LW.push(PW[xW].x + ZW * wW.x, PW[xW].y + ZW * wW.y, PW[xW].z + ZW * wW.z), LW.push(PW[xW].x + (ZW + jW) * wW.x, PW[xW].y + (ZW + jW) * wW.y, PW[xW].z + (ZW + jW) * wW.z), cW.push(AW, AW + 1), AW += 2
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L316-L328` → after: `L510-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L510-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L510-L525) · [Before (L316-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L316-L328)

```diff
-     function Te(ee, ie, He, ye, be, Me, Ke, Ue) {
-       const Fe = Me - ie,
-         Je = Me - ye,
-         oe = Ue - ye,
-         Re = [null, null, null];
-       for (let ke = 0; ke < Re.length; ke++) Re[ke] = {
-         aH: (be[ke] - ee[ke]) / Fe,
-         cH: (Ke[ke] - He[ke]) / oe,
-         delta: be[ke] - He[ke]
-       };
-       return {
-         AH: Je,
-         YH: Re
+     function ZW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const mW = iW.instance,
+         EW = iW.lines,
+         NW = iW.colors;
+       if (mW) {
+         const WW = mW.getVerticesData(LW.k.PositionKind);
+         let iW, OW;
+         NW && (iW = mW.getVerticesData(LW.k.ColorKind));
+         let PW = 0,
+           cW = 0;
+         for (let mW = 0; mW < EW.length; mW++) {
+           const LW = EW[mW];
+           for (let EW = 0; EW < LW.length; EW++) WW[PW] = LW[EW].x, WW[PW + 1] = LW[EW].y, WW[PW + 2] = LW[EW].z, NW && iW && (OW = NW[mW], iW[cW] = OW[EW].r, iW[cW + 1] = OW[EW].g, iW[cW + 2] = OW[EW].b, iW[cW + 3] = OW[EW].a, cW += 4), PW += 3
+         }
+         return mW.updateVerticesData(LW.k.PositionKind, WW, !1, !1), NW && iW && mW.updateVerticesData(LW.k.ColorKind, iW, !1, !1), mW.refreshBoundingInfo(), mW
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L332-L337` → after: `L532-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L532-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L532-L542) · [Before (L332-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L332-L337)

```diff
-     function pe(ee) {
-       return Xe("number" === typeof ee ? [ee, ee, ee] : ee)
-     }
- 
-     function Xe(ee) {
-       return [ze(ee[0]), ze(ee[1]), ze(ee[2])]
+     function xW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const mW = iW.colors ? [iW.colors] : null;
+       return ZW(WW, {
+         lines: [iW.points],
+         updatable: iW.updatable,
+         instance: iW.instance,
+         colors: mW,
+         useVertexAlpha: iW.useVertexAlpha,
+         material: iW.material
+       }, OW)
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L340-L341` → after: `L545-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L545-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L545-L568) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L340-L341)

```diff
-     function ze(ee) {
-       return Number.isFinite(ee) ? Math.min(Ke.j, Math.max(-Ke.j, ee)) : ee
+     function lW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const NW = iW.points,
+         LW = iW.instance,
+         wW = iW.gapSize || 1,
+         ZW = iW.dashSize || 3;
+       if (LW) {
+         const WW = WW => {
+           const iW = mW.q.Zero(),
+             OW = WW.length / 6;
+           let EW, PW, cW, wW, tW = 0,
+             ZW = 0;
+           for (cW = 0; cW < NW.length - 1; cW++) NW[cW + 1].subtractToRef(NW[cW], iW), tW += iW.length();
+           const xW = tW / OW,
+             lW = LW._creationDataStorage.dashSize,
+             AW = lW * xW / (lW + LW._creationDataStorage.gapSize);
+ ... (8 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L343-L346` → after: `L570-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L570-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L570-L691) · [Before (L343-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L343-L346)

```diff
- 
-     function Be(ee) {
-       const [ie, He, ye] = ee, Ke = -(0, Me.f)(ie), Ue = -(0, Me.f)(He), Fe = (0, Me.f)(ye), Je = be.c.quaternionFromEulerZYX(Ke, Ue, Fe);
-       return be.c.eulerYXZFromQuaternion(Je)
+     let AW = !1;
+     AW || (AW = !0, NW.c.CreateLineSystem = wW, NW.c.CreateDashedLines = tW, EW.e.CreateLines = function(WW, iW) {
+       return xW(WW, {
+         points: iW,
+         updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     }, EW.e.CreateDashedLines = function(WW, iW, OW, mW, EW) {
+       return lW(WW, {
+         points: iW,
+         dashSize: OW,
+         gapSize: mW,
+         dashNb: EW,
+         updatable: arguments.length > 6 ? arguments[6] : void 0,
+         instance: arguments.length > 7 ? arguments[7] : void 0
+       }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
+ ... (106 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L348-L355` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L693-L700) · [Before (L348-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L348-L355)

```diff
-     oe.LERP_MODE_SCHEMA_MAPPING = {
-       linear: ye.f.Linear,
-       catmullrom: ye.f.CatmullRomSpline
-     };
-     const Ee = 1 / 16;
- 
-     function ge(ee) {
-       return [-ee[0] * Ee, ee[1] * Ee, ee[2] * Ee]
+     xW.ForceGLSL = !1;
+     class lW extends cW.e {
+       constructor(WW, iW) {
+         super(WW, iW), this.intersectionThreshold = iW.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L358-L360` → after: `L704-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L704-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L704-L748) · [Before (L358-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L358-L360)

```diff
-     function Oe(ee) {
-       const [ie, He, ye] = ee;
-       return [ie >= 0 ? Math.PI - ie : -Math.PI - ie, de(He + Math.PI), de(ye + Math.PI)]
+     function bW() {
+       AW || (AW = !0, LW.e._LinesMeshParser = (WW, iW) => xW.Parse(WW, iW))
+     }(mW = xW.prototype).enableEdgesRendering ?? (mW.enableEdgesRendering = (0, ZW.k)("LinesMesh", "enableEdgesRendering")), (EW = lW.prototype).enableEdgesRendering ?? (EW.enableEdgesRendering = (0, ZW.k)("InstancedLinesMesh", "enableEdgesRendering"))
+   },
+   39908: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW
+     });
+     var mW = OW(39911);
+     const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
+       ...WW
+     } : null : WW.clone(iW) : null;
+     class NW {
+       static DeepCopy(WW, iW, OW, NW) {
+         let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const LW = function(WW) {
+ ... (29 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L362-L364` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L750-L756) · [Before (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L362-L364)

```diff
- 
-     function de(ee) {
-       return be.c.mod(ee + Math.PI, 2 * Math.PI) - Math.PI
+   },
+   39088: (WW, iW, OW) => {
+     function mW() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
+         const iW = 16 * Math.random() | 0;
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+       }))
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L366-L368` → after: `L758-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L758-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L758-L817) · [Before (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L366-L368)

```diff
- 
-     function We(ee, ie) {
-       return Math.abs(be.c.computeShortestRotation(ee[0], ie[0])) + Math.abs(be.c.computeShortestRotation(ee[1], ie[1])) + Math.abs(be.c.computeShortestRotation(ee[2], ie[2]))
+     OW.d(iW, {
+       b: () => mW
+     })
+   },
+   39911: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW
+     });
+     class mW {
+       static _CheckLimit(WW, iW) {
+         let OW = mW._LogLimitOutputs[WW];
+         return OW ? OW.current++ : (OW = {
+           limit: iW,
+           current: 1
+         }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
+       }
+ ... (44 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L370` → after: `L819-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L819-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L819-L831) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L370)

```diff
-     const te = new Je
+     mW.NoneLogLevel = 0, mW.MessageLogLevel = 1, mW.WarningLogLevel = 2, mW.ErrorLogLevel = 4, mW.AllLogLevel = 7, mW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", mW._LogCache = "", mW._LogLimitOutputs = {}, mW._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], mW.errorsCount = 0, mW.Log = mW._LogEnabled.bind(mW, mW.MessageLogLevel), mW.Warn = mW._LogEnabled.bind(mW, mW.WarningLogLevel), mW.Error = mW._LogEnabled.bind(mW, mW.ErrorLogLevel)
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L372` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L833) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L372)

```diff
-   37963: (ee, ie, He) => {
+   41604: (WW, iW, OW) => {
```

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L374-L377` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L835) · [Before (L374-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L374-L377)

```diff
-       b: () => Ke,
-       c: () => Me,
-       f: () => ye,
-       i: () => be
+       c: () => mW.i
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L379-L390` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/261.js#L837-L838) · [Before (L379-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/261.js#L379-L390)

```diff
-     let ye = function(ee) {
-         return ee[ee.Linear = 0] = "Linear", ee[ee.CatmullRomSpline = 1] = "CatmullRomSpline", ee
-       }({}),
-       be = function(ee) {
-         return ee[ee.NoLoop = 0] = "NoLoop", ee[ee.LoopOnLastFrame = 1] = "LoopOnLastFrame", ee[ee.HoldOnLastFrame = 2] = "HoldOnLastFrame", ee
-       }({}),
-       Me = function(ee) {
-         return ee[ee.Movement = 0] = "Movement", ee[ee.Action = 1] = "Action", ee[ee.Emote = 2] = "Emote", ee[ee.Custom = 3] = "Custom", ee
-       }({}),
-       Ke = function(ee) {
-         return ee[ee.Start = 0] = "Start", ee[ee.Stop = 1] = "Stop", ee
-       }({})
+     var mW = OW(41612);
+     (0, mW.e)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/262.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/262.js#L2)

```diff
- export const ids = [262];
+ export const ids = [262, 267];
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   38020: (ee, ie, He) => {
+   54015: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/262.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/262.js#L6-L7)

```diff
-       Color3: () => ye.c,
-       e: () => ye.g
+       c: () => PW
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L9-L10` → after: `L8-L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/262.js#L8-L16197) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/262.js#L9-L10)

```diff
-     var ye = He(38022);
-     (0, ye.h)()
+     var mW = OW(53951),
+       EW = OW(41511);
+     let NW = !1;
+ 
+     function PW() {
+       NW || (NW = !0, EW.c.prototype._sphericalPolynomialTargetSize = 0, EW.c.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(EW.c.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = mW.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = WW, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+ ... (16174 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L4-L7)

```diff
-   63840: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       DEVTOOLS_SHADERS: () => Me,
-       registerDevtoolsShader: () => Ke
+   38270: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => EW
```

#### 2. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L9-L28` → after: `L8-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L8-L32) · [Before (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L9-L28)

```diff
-     var ye = He(40954),
-       be = He(38034);
-     const Me = {
-       devtoolsNormal: function(ee) {
-         return {
-           vertex: `\n\t\t\t${(0,be.f)(ee,"position","vec3")}\n\t\t\t${(0,be.f)(ee,"normal","vec3")}\n\t\t\t${(0,be.yb)(ee,"worldViewProjection","mat4")}\n\t\t\t${(0,be.yb)(ee,"world","mat4")}\n\t\t\t${(0,be.Cb)(ee,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,be.Eb)(ee,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,be.Cb)(ee,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,be.Q)(ee,`\n\t\t\t\t\n\t\t\t\t${(0,be.C)(ee,"vec3","normalColor",`abs(${(0,be.S)(ee,"vNormal")})`)}\n\t\t\t\t${(0,be.L)(ee)} = ${(0,be.o)(ee,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsWhite: function(ee) {
-         return {
-           vertex: `\n\t\t\t${(0,be.f)(ee,"position","vec3")}\n\t\t\t${(0,be.yb)(ee,"worldViewProjection","mat4")}\n\n\t\t\t${(0,be.Eb)(ee,`\n\t\t\t\t${(0,be.m)(ee)} = ${(0,be.zb)(ee,"worldViewProjection")} * ${(0,be.o)(ee,"vec4",(0,be.Fb)(ee,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,be.Q)(ee,`\n\t\t\t\t${(0,be.L)(ee)} = ${(0,be.o)(ee,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsDepth: function(ee) {
- ... (4 more removed lines; see GitHub link above)
+     var mW = OW(38276);
+     class EW {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     EW.Instances = [], EW.OnEnginesDisposedObservable = new mW.e, EW._LastCreatedScene = null, EW.UseFallbackTexture = !0, EW.FallbackTexture = ""
+   },
+   38262: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW
+     });
+     class mW {
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L40` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L37) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L40)

```diff
-   38034: (ee, ie, He) => {
+   38291: (WW, iW, OW) => {
```

#### 4. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L42-L60` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L39) · [Before (L42-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L42-L60)

```diff
-       C: () => oe,
-       Cb: () => pe,
-       Eb: () => Be,
-       F: () => We,
-       Fb: () => Ze,
-       I: () => Ye,
-       Ib: () => we,
-       J: () => Me,
-       L: () => ce,
-       P: () => ae,
-       Q: () => Ee,
-       S: () => De,
-       V: () => Ae,
-       X: () => Ce,
-       Z: () => be,
-       _: () => Ve,
- ... (3 more removed lines; see GitHub link above)
+       d: () => LW,
```

#### 5. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L64-L65` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L42) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L64-L65)

```diff
-       ib: () => Oe,
-       jb: () => me,
+       k: () => mW,
```

#### 6. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L67-L78` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L44) · [Before (L67-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L67-L78)

```diff
-       mb: () => Se,
-       o: () => Fe,
-       p: () => xe,
-       pb: () => ve,
-       r: () => Le,
-       tb: () => ge,
-       u: () => ke,
-       v: () => qe,
-       xb: () => Je,
-       y: () => Re,
-       yb: () => Xe,
-       zb: () => Pe
+       o: () => PW
```

#### 7. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L80-L83` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L46) · [Before (L80-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L80-L83)

```diff
-     const ye = {
-       GLSL: 0,
-       WGSL: 1
-     };
+     class mW {}
```

#### 8. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L86` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L49) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L86)

```diff
-       return ee === ye.WGSL
+       WW.updateFlag = mW._UpdateFlagSeed++
```

#### 9. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L90-L120` → after: `L53-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L53-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L53-L88) · [Before (L90-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L90-L120)

```diff
-       return be(ee) ? He : ie
-     }
-     const Ke = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
-       ["vec3", "vec3f"],
-       ["vec4", "vec4f"],
-       ["mat2", "mat2x2f"],
-       ["mat3", "mat3x3f"],
-       ["mat4", "mat4x4f"]
-     ]);
- 
-     function Ue(ee, ie) {
-       if (!be(ee)) return ie;
-       const He = Ke.get(ie);
- ... (15 more removed lines; see GitHub link above)
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const EW = WW.wEW(),
+         NW = iW.wEW(),
+         PW = EW[0],
+         LW = EW[1],
+         cW = EW[2],
+         wW = EW[3],
+         tW = EW[4],
+         ZW = EW[5],
+         xW = EW[6],
+         lW = EW[7],
+         AW = EW[8],
+         bW = EW[9],
+         jW = EW[10],
+         UW = EW[11],
+         kW = EW[12],
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L124-L135` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L92-L93) · [Before (L124-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L124-L135)

```diff
-       return be(ee) ? `var ${He}: ${Ue(ee,ie)};` : `${ie} ${He};`
-     }
- 
-     function ke(ee, ie, He, ye) {
-       return be(ee) ? `const ${He}: ${Ue(ee,ie)} = ${ye};` : `const ${ie} ${He} = ${ye};`
-     }
- 
-     function qe(ee, ie, He, ye, Me) {
-       if (be(ee)) {
-         return `fn ${He}(${ye.map((ie=>`${ie.name}: ${Ue(ee,ie.type)}`)).join(", ")}) -> ${Ue(ee,ie)} {${Me}}`
-       }
-       return `${ie} ${He}(${ye.map((ee=>`${ee.type} ${ee.name}`)).join(", ")}) {${Me}}`
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       NW(WW, iW, OW.wEW(), mW), EW(OW)
```

#### 11. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L139-L155` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L97-L99) · [Before (L139-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L139-L155)

```diff
-       return !ie || be(ee) ? "" : `${ie} `
-     }
- 
-     function Te(ee, ie, He, ye) {
-       return be(ee) ? `attribute ${ie}: ${Ue(ee,He)};` : `attribute ${fe(ee,ye)}${He} ${ie};`
-     }
- 
-     function pe(ee, ie, He, ye) {
-       return be(ee) ? `varying ${ie}: ${Ue(ee,He)};` : `varying ${fe(ee,ye)}${He} ${ie};`
-     }
- 
-     function Xe(ee, ie, He) {
-       return be(ee) ? `uniform ${ie}: ${Ue(ee,He)};` : `uniform ${He} ${ie};`
-     }
- 
-     function ze(ee) {
- ... (1 more removed lines; see GitHub link above)
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const mW = WW.wEW();
+       iW[OW] = mW[0], iW[OW + 1] = mW[1], iW[OW + 2] = mW[2], iW[OW + 3] = mW[3], iW[OW + 4] = mW[4], iW[OW + 5] = mW[5], iW[OW + 6] = mW[6], iW[OW + 7] = mW[7], iW[OW + 8] = mW[8], iW[OW + 9] = mW[9], iW[OW + 10] = mW[10], iW[OW + 11] = mW[11], iW[OW + 12] = mW[12], iW[OW + 13]  … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L159` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L103-L104) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L159)

```diff
-       return be(ee) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ie}}` : `void main() {${ie}}`
+       const OW = wW(WW, iW.wEW());
+       return OW && EW(iW), OW
```

#### 13. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L163` → after: `L108-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L108-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L108-L162) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L163)

```diff
-       return be(ee) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ie}}` : `void main() {${ie}}`
+       const OW = WW.wEW(),
+         mW = OW[0],
+         EW = OW[1],
+         NW = OW[2],
+         PW = OW[3],
+         LW = OW[4],
+         cW = OW[5],
+         wW = OW[6],
+         tW = OW[7],
+         ZW = OW[8],
+         xW = OW[9],
+         lW = OW[10],
+         AW = OW[11],
+         bW = OW[12],
+         jW = OW[13],
+         UW = OW[14],
+ ... (39 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L165-L168` → after: `L164-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L164-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L164-L188) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L165-L168)

```diff
- 
-     function ge(ee, ie, He) {
-       if (be(ee)) {
-         return [`var ${ie}Sampler: sampler;`, `var ${ie}: ${"2dArray"===He?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+     mW._UpdateFlagSeed = 0
+   },
+   38241: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => bW,
+       g: () => AW,
+       j: () => MW,
+       l: () => UW,
+       m: () => ZW,
+       q: () => xW,
+       r: () => lW
+     });
+     var mW = OW(38249),
+       EW = OW(38253),
+       NW = OW(38262),
+       PW = OW(38270),
+ ... (9 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L170-L179` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L190-L191) · [Before (L170-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L170-L179)

```diff
-       return `uniform highp ${"2dArray"===He?"sampler2DArray":"sampler2D"} ${ie};`
-     }
- 
-     function Oe(ee, ie, He) {
-       return be(ee) ? `textureSample(${ie}, ${ie}Sampler, ${He})` : `texture2D(${ie}, ${He})`
-     }
- 
-     function de(ee, ie, He, ye, Me) {
-       if (be(ee)) {
-         return `${Me?"textureSampleLevel":"textureSample"}(${ie}, ${ie}Sampler, ${He}, ${Je(ee,`round(${ye})`)}${Me?`, ${Me}`:""})`
+       toString() {
+         return `{X: ${this.x} Y: ${this.y}}`
```

#### 16. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L181-L193` → after: `L193-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L193-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L193-L486) · [Before (L181-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L181-L193)

```diff
-       const Ke = Fe(ee, "vec3", He, ye);
-       return Me ? `textureLod(${ie}, ${Ke}, ${Me})` : `texture(${ie}, ${Ke})`
-     }
- 
-     function We(ee) {
-       return be(ee) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
-     }
- 
-     function te(ee) {
-       return be(ee) ? {
-         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
-       } : {
-         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
+       getClassName() {
+         return "Vector2"
+       }
+       getHashCode() {
+         let WW = tW(this.x);
+         return WW = 397 * WW ^ tW(this.y), WW
+       }
+       toArray(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return WW[iW] = this.x, WW[iW + 1] = this.y, this
+       }
+       mZ(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return ZW.FromArrayToRef(WW, iW, this), this
+       }
+       wEW() {
+ ... (278 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L196-L268` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L489) · [Before (L196-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L196-L268)

```diff
- 
-     function Ze(ee, ie) {
-       return be(ee) ? `vertexInputs.${ie}` : ie
-     }
- 
-     function we(ee, ie) {
-       return be(ee) ? `vertexOutputs.${ie}` : ie
-     }
- 
-     function De(ee, ie) {
-       return be(ee) ? `fragmentInputs.${ie}` : ie
-     }
- 
-     function Pe(ee, ie) {
-       return be(ee) ? `uniforms.${ie}` : ie
-     }
- ... (57 more removed lines; see GitHub link above)
+     ZW._V8PerformanceHack = new ZW(.5, .5), ZW._ZeroReadOnly = ZW.Zero();
```

#### 18. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L270-L271` → after: `L491-L2905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L491-L2905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L491-L2905) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L270-L271)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.ShadersRepository : ye.ShadersRepositoryWGSL
+       get x() {
+         return this._x
+       }
+       set x(WW) {
+         this._x = WW, this._isDirty = !0
+       }
+       get y() {
+         return this._y
+       }
+       set y(WW) {
+         this._y = WW, this._isDirty = !0
+       }
+       get z() {
+         return this._z
+       }
+       set z(WW) {
+ ... (2399 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L273-L274` → after: `L2907-L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R2907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L2907-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L2907-L2909) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L273-L274)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.ShadersStore : ye.ShadersStoreWGSL
+       clone() {
+         const WW = new PW;
+         return WW._observers = this._observers.slice(0), WW
```

#### 20. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L276-L277` → after: `L2911-L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L2911-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/263.js#L2911-L2915) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/263.js#L276-L277)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.IncludesShadersStore : ye.IncludesShadersStoreWGSL
+       hasSpecificMask() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
+         for (const iW of this._observers)
+           if (iW.mask & WW || iW.mask === WW) return !0;
+         return !1
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L4)

```diff
-   42142: (ee, ie, He) => {
+   38372: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L6)

```diff
-       noaDevTools: () => Re
+       b: () => ZW,
+       d: () => xW,
+       f: () => bW,
+       j: () => lW
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L8-L12` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L11-L14) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L8-L12)

```diff
-     var ye = He(38265),
-       be = He(38247),
-       Me = He(2969),
-       Ke = He(1768),
-       Ue = He(42065);
+     var mW = OW(38253),
+       EW = OW(38249),
+       NW = OW(38285),
+       PW = OW(38299);
```

#### 4. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L15-L39` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L17) · [Before (L15-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L15-L39)

```diff
-       const {
-         PR: ie
-       } = ee, He = ie.engine, ye = {
-         width: He.getRenderWidth(),
-         height: He.getRenderHeight()
-       };
-       return {
-         canvas: He.getRenderingCanvas(),
-         maxTextureSize: He.getCaps().maxTextureSize,
-         tR: () => !ee.AR,
-         resize: (ee, ie) => {
-           He.setSize(ee, ie)
-         },
-         restoreSize: () => {
-           He.setSize(ye.width, ye.height), ie.resize()
-         },
- ... (9 more removed lines; see GitHub link above)
+       return Math.pow(WW, EW.i)
```

#### 5. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L43-L229` → after: `L20-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L20-L25) · [Before (L43-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L43-L229)

```diff
-     function oe(ee, ie) {
-       let {
-         width: Je,
-         height: oe,
-         colouring: Re
-       } = ie;
-       const ke = "normals" === Re,
-         qe = "depth" === Re;
-       return new Promise((ie => {
-         try {
-           const fe = (0, Me.h)();
-           if (fe.PR.pT) return "screenshot" !== ee || null !== Re ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void ie()) : void(0, Ue.f)(Fe(fe), Je, oe).finally(ie);
-           const Te = fe.PR.engine,
-             pe = fe.PR.Xx(),
-             Xe = Je,
-             ze = oe;
- ... (171 more removed lines; see GitHub link above)
+     function cW(WW) {
+       return WW <= .04045 ? .0773993808 * WW : Math.pow(.947867299 * (WW + .055), 2.4)
+     }
+ 
+     function wW(WW) {
+       return Math.pow(WW, EW.h)
```

#### 6. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L231` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L27-L31) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L231)

```diff
-     const Re = new class {
+ 
+     function tW(WW) {
+       return WW <= .0031308 ? 12.92 * WW : 1.055 * Math.pow(WW, .41666) - .055
+     }
+     class ZW {
```

#### 7. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L233` → after: `L33-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L33-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L33-L200) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L233)

```diff
-         this.tools = Je.ALL_DEV_TOOLS
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.r = WW, this.g = iW, this.b = OW
+       }
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
+       }
+       getClassName() {
+         return "Color3"
+       }
+       getHashCode() {
+         let WW = 255 * this.r | 0;
+         return WW = 397 * WW ^ 255 * this.g, WW = 397 * WW ^ 255 * this.b, WW
+       }
+       toArray(WW) {
+ ... (152 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L235-L236` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L202-L203) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L235-L236)

```diff
-       downloadScene(ee, ie) {
-         return oe(ee, ie)
+       toHSV() {
+         return this.toHSVToRef(new ZW)
```

#### 9. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L238-L242` → after: `L205-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L205-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L205-L215) · [Before (L238-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L238-L242)

```diff
-       async setAmbientLightIntensity(ee) {
-         const {
-           Color3: ie
-         } = await Promise.all([He.e(259), He.e(262)]).then((() => He(38020)));
-         (0, Me.h)().PR.Xx().ambientColor = ie.FromArray([ee, ee, ee])
+       toHSVToRef(WW) {
+         const iW = this.r,
+           OW = this.g,
+           mW = this.b,
+           EW = Math.max(iW, OW, mW),
+           NW = Math.min(iW, OW, mW);
+         let PW = 0,
+           LW = 0;
+         const cW = EW,
+           wW = EW - NW;
+         return 0 !== EW && (LW = wW / EW), EW != NW && (EW == iW ? (PW = (OW - mW) / wW, OW < mW && (PW += 6)) : EW == OW ? PW = (mW - iW) / wW + 2 : EW == mW && (PW = (iW - OW) / wW + 4), PW *= 60), WW.r = PW, WW.g = LW, WW.b = cW, WW
```

#### 10. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L244-L247` → after: `L217-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L217-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L217-L324) · [Before (L244-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L244-L247)

```diff
-       capturePhoto(ee, ie, He) {
-         return function(ee, ie, He, ye) {
-           return (0, Ue.d)(Fe(ee), ie, He, ye)
-         }((0, Me.h)(), ee, ie, He)
+       toLinearSpace() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const iW = new ZW;
+         return this.toLinearSpaceToRef(iW, WW), iW
+       }
+       toLinearSpaceToRef(WW) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = cW(this.r), WW.g = cW(this.g), WW.b = cW(this.b)) : (WW.r = LW(this.r), WW.g = LW(this.g), WW.b = LW(this.b)), this
+       }
+       toGammaSpace() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const iW = new ZW;
+         return this.toGammaSpaceToRef(iW, WW), iW
+       }
+       toGammaSpaceToRef(WW) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = tW(this.r), WW.g = tW(this.g), WW.b = tW(this.b)) : (WW.r = wW(this.r), WW.g = wW(this.g), WW.b = wW(this.b)), this
+       }
+ ... (92 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L250-L277` → after: `L327-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L327-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L327-L560) · [Before (L250-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L250-L277)

```diff
-   },
-   42065: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ue,
-       f: () => Fe
-     });
-     var ye = He(1790);
-     const be = 33177600,
-       Me = 3e4;
-     let Ke = !1;
- 
-     function Ue(ee, ie, He) {
-       let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const {
-         scale: Ue = 1,
-         type: Fe = "image/png",
- ... (12 more removed lines; see GitHub link above)
+     ZW._V8PerformanceHack = new ZW(.5, .5, .5), ZW._BlackReadOnly = ZW.Black();
+     class xW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         this.r = WW, this.g = iW, this.b = OW, this.a = mW
+       }
+       wEW() {
+         return [this.r, this.g, this.b, this.a]
+       }
+       toArray(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return WW[iW] = this.r, WW[iW + 1] = this.g, WW[iW + 2] = this.b, WW[iW + 3] = this.a, this
+       }
+ ... (218 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L279-L295` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L562) · [Before (L279-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L279-L295)

```diff
-         };
-         Re = setTimeout((() => {
-           fe(), oe(new Error("No frame was drawn to capture"))
-         }), Me);
-         try {
-           const ye = function(ee, ie, He) {
-             const ye = Math.max(1, ee),
-               Me = Math.max(1, ie),
-               Ke = Math.min(1, He / Math.max(ye, Me), Math.sqrt(be / (ye * Me)));
-             return {
-               width: Math.max(1, Math.floor(ye * Ke)),
-               height: Math.max(1, Math.floor(Me * Ke))
-             }
-           }(ie, He, ee.maxTextureSize);
-           ee.resize(ye.width, ye.height, Ue * ye.width / Math.max(1, ie))
-         } catch (Te) {
- ... (1 more removed lines; see GitHub link above)
+           return iW
```

#### 13. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L297-L325` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L564) · [Before (L297-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L297-L325)

```diff
-         qe = ee.onFrameDrawn((() => {
-           if (ke--, ke > 0) return;
-           const {
-             canvas: ie
-           } = ee, He = {
-             width: ie.width,
-             height: ie.height
-           };
-           try {
-             ie.toBlob((ee => {
-               ee ? ye({
-                 blob: ee,
-                 ...He
-               }) : oe(new Error("The canvas gave no image"))
-             }), Fe, Je)
-           } catch (Te) {
- ... (13 more removed lines; see GitHub link above)
+         return WW
```

#### 14. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L329` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L590) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L329)

```diff
-   38265: (ee, ie, He) => {
+   38249: (WW, iW, OW) => {
```

#### 15. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L331-L333` → after: `L592-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L592-L594) · [Before (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L331-L333)

```diff
-       c: () => Je,
-       d: () => Ue,
-       e: () => Ke
+       e: () => NW,
+       h: () => mW,
+       i: () => EW
```

#### 16. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L335-L337` → after: `L596-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L596-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L596-L604) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L335-L337)

```diff
-     var ye = He(38258),
-       be = He(38273);
-     let Me = 0;
+     const mW = 1 / 2.2,
+       EW = 2.2;
+     Math.sqrt(5);
+     let NW = .001
+   },
+   38285: (WW, iW, OW) => {
+     function mW(WW) {
+       return parseInt(WW.toString().replace(/\W/g, ""))
+     }
```

#### 17. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L340-L343` → after: `L607-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L607-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L607-L613) · [Before (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L340-L343)

```diff
-       const He = ee;
-       He._noaFaceGroups = null !== ie && void 0 !== ie ? ie : null, He._noaFaceEpoch = -1, He._noaFaceMask = -1, He._noaFaceCount = -1, He._noaFaceMaterial = null;
-       const ye = ee.pW;
-       ye && 1 === ye.length && (ye[0].indexStart = 0, ye[0].indexCount = ee.getTotalIndices())
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(WW - iW) <= OW
+     }
+ 
+     function NW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return WW < iW - mW || WW > OW + mW
```

#### 18. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L347-L353` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L617) · [Before (L347-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L347-L353)

```diff
-       if (ie) {
-         Me++;
-         for (const ie of ee) {
-           const ee = ie._noaFaceGroups;
-           ee && Ke(ie, ee)
-         }
-       } else Me = Math.max(0, Me - 1)
+       return WW === iW ? WW : Math.random() * (iW - WW) + WW
```

#### 19. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L357-L364` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L621) · [Before (L357-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L357-L364)

```diff
-       let be = -1,
-         Me = 0;
-       for (let Ke = 0; Ke < ye.g; Ke++) {
-         const He = ee[Ke],
-           Ue = ee[Ke + 1];
-         Ue > He && ie & 1 << ye.c[Ke] && (be < 0 && (be = He), Me = Ue)
-       }
-       return be < 0 ? (He[0] = 0, He[1] = 0, 0) : (He[0] = be, He[1] = Me - be, Me - be)
+       return WW + (iW - WW) * OW
```

#### 20. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L366-L413` → after: `L623-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L623-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L623-L626) · [Before (L366-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L366-L413)

```diff
-     class Je {
-       constructor(ee, ie) {
-         this.BR = ee, this.engine = ie, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
-       }
-       apply(ee, ie) {
-         if (!ie) return;
-         const He = ie.getProjectionMatrix().m,
-           Ke = 0 === Me && 0 === He[15],
-           Ue = ie.globalPosition,
-           {
-             engine: Je
-           } = this,
-           oe = Ke ? (0, be.c)(He, Je.getRenderWidth(), Je.getRenderHeight()) : 0;
-         Ue.x === this.eyeX && Ue.y === this.eyeY && Ue.z === this.eyeZ && oe === this.focalPx && Ke === this.culling || (this.epoch++, this.eyeX = Ue.x, this.eyeY = Ue.y, this.eyeZ = Ue.z, this.focalPx = oe, this.culling = Ke);
-         const {
-           epoch: Re,
- ... (32 more removed lines; see GitHub link above)
+ 
+     function cW(WW, iW, OW) {
+       let mW = jW(iW - WW, 360);
+       return mW > 180 && (mW -= 360), WW + mW * xW(OW)
```

#### 21. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L425-L426` → after: `L629-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L629-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L629-L642) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L425-L426)

```diff
-     function Ke(ee, ie) {
-       ee._data = ie
+     function wW(WW, iW, OW) {
+       let mW;
+       return mW = WW != iW ? xW((OW - WW) / (iW - WW)) : 0, mW
+     }
+ 
+     function tW(WW, iW, OW, mW, EW) {
+       const NW = EW * EW,
+         PW = EW * NW;
+       return WW * (2 * PW - 3 * NW + 1) + OW * (-2 * PW + 3 * NW) + iW * (PW - 2 * NW + EW) + mW * (PW - NW)
+     }
+ 
+     function ZW(WW, iW, OW, mW, EW) {
+       const NW = EW * EW;
+       return 6 * (NW - EW) * WW + (3 * NW - 4 * EW + 1) * iW + 6 * (-NW + EW) * OW + (3 * NW - 2 * EW) * mW
```

#### 22. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L430-L431` → after: `L646-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L646-L648) · [Before (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L430-L431)

```diff
-       var ie, He;
-       (null !== (ie = null === (He = ee.getBuffer()) || void 0 === He ? void 0 : He.bk) && void 0 !== ie ? ie : 0) > 0 && (ye.add(ee), 0 === be ? Ke(ee, null) : Me.add(ee))
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       return Math.min(OW, Math.max(iW, WW))
```

#### 23. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L435-L454` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L652) · [Before (L435-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L435-L454)

```diff
-       be++;
-       for (const He of function(ee) {
-           const ie = new Set;
-           for (const be of ee) {
-             const ee = be.geometry;
-             for (const be of Object.values(null !== (He = null === ee || void 0 === ee ? void 0 : ee.getVertexBuffers()) && void 0 !== He ? He : {})) {
-               var He;
-               const ee = be.getWrapperBuffer();
-               ye.has(ee) && ie.add(ee)
-             }
-           }
-           return ie
-         }(ee)) He.getData() || Je(He), Me.add(He);
-       let ie = !0;
-       return () => {
-         if (ie && (ie = !1, be--, 0 === be)) {
- ... (4 more removed lines; see GitHub link above)
+       return WW -= 2 * Math.PI * Math.floor((WW + Math.PI) / (2 * Math.PI))
```

#### 24. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L458-L462` → after: `L656-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L656-L657) · [Before (L458-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L458-L462)

```diff
-       const ie = ee.getBuffer();
-       if (!ie || !(ie.bk > 0)) return;
-       const He = ee._engine,
-         ye = new Uint8Array(ie.bk);
-       He.bindArrayBuffer(ie), He._gl.getBufferSubData(He._gl.ARRAY_BUFFER, 0, ye), He._resetVertexBufferBinding(), Ke(ee, ye)
+       const iW = WW.toString(16);
+       return WW <= 15 ? ("0" + iW).toUpperCase() : iW.toUpperCase()
```

#### 25. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L489` → after: `L661-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L661-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L661-L674) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L489)

```diff
-       return !!ee && ee.backFaceCulling && (0 === ee.transparencyMode || 1 === ee.transparencyMode)
+       if (Math.log2) return Math.floor(Math.log2(WW));
+       if (WW < 0) return NaN;
+       if (0 === WW) return -1 / 0;
+       let iW = 0;
+       if (WW < 1) {
+         for (; WW < 1;) iW++, WW *= 2;
+         iW = -iW
+       } else if (WW > 1)
+         for (; WW > 1;) iW++, WW = Math.floor(WW / 2);
+       return iW
+     }
+ 
+     function jW(WW, iW) {
+       return WW - Math.floor(WW / iW) * iW
```

#### 26. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L507` → after: `L678-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L678-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L678-L682) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L507)

```diff
-       return Math.min(Math.abs(ee[0] * ie), Math.abs(ee[5] * He)) / 2
+       return (WW - iW) / (OW - iW)
+     }
+ 
+     function kW(WW, iW, OW) {
+       return WW * (OW - iW) + iW
```

#### 27. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L511` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L686-L687) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L511)

```diff
-       return be + Me * ee * ee / ie
+       let OW = jW(iW - WW, 360);
+       return OW > 180 && (OW -= 360), OW
```

#### 28. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L514-L534` → after: `L690-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L690-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L690-L780) · [Before (L514-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L514-L534)

```diff
-     function Je(ee, ie, He, be, Me) {
-       const Ke = ye.n;
-       return oe(ee[Ke], ee[Ke + 1], ee[Ke + 2], ee[Ke + 3], ee[Ke + 4], ee[Ke + 5], ie, He, be, Me)
-     }
- 
-     function oe(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
-       return (Ke <= ee - Je ? 0 : 1) | (Ke >= ie + Je ? 0 : 2) | (Ue <= He - Je ? 0 : 4) | (Ue >= ye + Je ? 0 : 8) | (Fe <= be - Je ? 0 : 16) | (Fe >= Me + Je ? 0 : 32)
-     }
-     const Re = (() => {
-         const ee = [];
-         for (let ie = 0; ie < ye.r.length; ie++) {
-           let He = 0;
-           for (let be = ie + 1; be <= ye.r.length; be++) {
-             const Me = 1 << ye.r[be - 1];
-             if (He & Me) break;
-             He |= Me, ee.push({
- ... (5 more removed lines; see GitHub link above)
+     function MW(WW, iW) {
+       const OW = jW(WW, 2 * iW);
+       return iW - Math.abs(OW - iW)
+     }
+ 
+     function KW(WW, iW, OW) {
+       let mW = xW(OW);
+       return mW = -2 * mW * mW * mW + 3 * mW * mW, iW * mW + WW * (1 - mW)
+     }
+ 
+     function SW(WW, iW, OW) {
+       let mW;
+       return mW = Math.abs(iW - WW) <= OW ? iW : WW + Math.sign(iW - WW) * OW, mW
+     }
+ 
+     function YW(WW, iW, OW) {
+ ... (75 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L536-L538` → after: `L782-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L782-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L782-L793) · [Before (L536-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L536-L538)

```diff
-         return ee
-       })(),
-       ke = [];
+       }(WW, OW, iW)));
+       return () => {
+         for (const WW of OW) WW?.()
+       }
+     }
+   },
+   38299: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => NW,
+       h: () => EW
+     });
+     const mW = {};
```

#### 30. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L541-L542` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L796) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L541-L542)

```diff
-       const He = ye.j[ie];
-       return ee[He + 1] - ee[He]
+       mW[WW] = iW
```

#### 31. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L545-L579` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/264.js#L799-L800) · [Before (L545-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/264.js#L545-L579)

```diff
-     function fe(ee, ie, He) {
-       let be = 0;
-       for (let Ke = 0; Ke < ye.m; Ke++) qe(ee, Ke) > 0 && (be |= 1 << Ke);
-       if (0 === (ie &= be)) return 0;
-       if (ie === be) return He[0] = 0, He[1] = ee[ye.g], 1;
-       let Me = null,
-         Ue = 1 / 0;
-       for (const Je of function(ee) {
-           let ie = ke[ee];
-           if (ie) return ie;
-           const He = new Map,
-             ye = (ee, ie) => {
-               const ye = 4 * ee + ie.length / 2;
-               He.has(ye) || He.set(ye, {
-                 Pe: ee,
-                 windows: ie
- ... (19 more removed lines; see GitHub link above)
+     function NW(WW) {
+       return mW[WW]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L2)

```diff
- export const ids = [265, 266];
+ export const ids = [265];
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4-L228` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L4) · [Before (L4-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L4-L228)

```diff
-   41366: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => oe,
-       f: () => ke
-     });
-     var ye = He(41113),
-       be = He(41121),
-       Me = He(37917),
-       Ke = He(38022),
-       Ue = He(41374),
-       Fe = He(41323),
-       Je = He(37949);
-     let oe = (() => {
-         var ee;
-         let ie, He, Fe = Ue.e,
-           Je = [],
- ... (209 more removed lines; see GitHub link above)
+   38270: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L233-L234` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L10-L11) · [Before (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L233-L234)

```diff
-       constructor(ee, ie, He, ye) {
-         this.x = ee, this.y = ie, this.width = He, this.height = ye
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
```

#### 4. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L236-L243` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L13-L14) · [Before (L236-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L236-L243)

```diff
-       toGlobal(ee, ie) {
-         return new ye(this.x * ee, this.y * ie, this.width * ee, this.height * ie)
-       }
-       toGlobalToRef(ee, ie, He) {
-         return He.x = this.x * ee, He.y = this.y * ie, He.width = this.width * ee, He.height = this.height * ie, this
-       }
-       clone() {
-         return new ye(this.x, this.y, this.width, this.height)
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
```

#### 5. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L247` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L19) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L247)

```diff
-   39463: (ee, ie, He) => {
+   39908: (WW, iW, OW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L249` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L21) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L249)

```diff
-       b: () => Me
+       c: () => NW
```

#### 7. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L251` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L23) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L251)

```diff
-     var ye = He(39467);
+     var mW = OW(39911);
```

#### 8. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L284` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L56) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L284)

```diff
-             ye.e.Warn(Fe.message)
+             mW.b.Warn(cW.message)
```

#### 9. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L290` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L62) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L290)

```diff
-   38745: (ee, ie, He) => {
+   39088: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L294` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L66) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L294)

```diff
-         return ("x" === ee ? ie : 3 & ie | 8).toString(16)
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
```

#### 11. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L298` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L70) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L298)

```diff
-       d: () => ye
+       b: () => mW
```

#### 12. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L301` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L73) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L301)

```diff
-   39467: (ee, ie, He) => {
+   39911: (WW, iW, OW) => {
```

#### 13. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L303` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L75) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L303)

```diff
-       e: () => ye
+       b: () => mW
```

#### 14. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L324` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L96) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L324)

```diff
-         const ie = ee => ee < 10 ? "0" + ee : "" + ee,
+         const iW = WW => WW < 10 ? "0" + WW : "" + WW,
```

#### 15. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L339` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L111) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L339)

```diff
-         const Fe = `<div style='color:${Ke.color}'>${Me}</div><br>`;
+         const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
```

#### 16. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L372-L381` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L144-L146) · [Before (L372-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L372-L381)

```diff
-   63814: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       CreateScreenshot: () => xe,
-       CreateScreenshotAsync: () => Le,
-       CreateScreenshotForFrameGraphAsync: () => me,
-       CreateScreenshotUsingRenderTarget: () => ve,
-       CreateScreenshotUsingRenderTargetAsync: () => ue,
-       CreateScreenshotWithResizeAsync: () => Ce,
-       RegisterScreenshotTools: () => je,
-       ScreenshotTools: () => Se
+   38276: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
```

#### 17. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L383-L456` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L148) · [Before (L383-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L383-L456)

```diff
-     var ye = He(41593),
-       be = He(45019),
-       Me = He(44998),
-       Ke = He(41141),
-       Ue = He(45006),
-       Fe = He(37929),
-       Je = He(37917);
-     class oe extends Ue.f {
-       static _GetDefines(ee) {
-         if (!ee) return null;
-         return ee.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
-       }
-       _gatherImports(ee, ie) {
-         ee ? (this._webGPUReady = !0, ie.push(Promise.all([He.e(683).then((() => He(64060))), He.e(684).then((() => He(64065)))]))) : ie.push(Promise.all([He.e(685).then((() => He(64069))), He.e(686).then((() => He(64076)))]))
-       }
-       constructor(ee) {
- ... (58 more removed lines; see GitHub link above)
+     const mW = "undefined" !== typeof WeakRef;
```

#### 18. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L458-L546` → after: `L150-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L150-L154) · [Before (L458-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L458-L546)

```diff
-       constructor(ee, ie, He) {
-         this.name = ee, this._parentTask = ie, this._context = He, this.disabled = !1
-       }
-       setInitializeFunc(ee) {
-         this._initFunc = ee
-       }
-       setExecuteFunc(ee) {
-         this._executeFunc = ee
-       }
-       _execute() {
-         this.disabled || this._executeFunc(this._context)
-       }
-       _initialize() {
-         this._initFunc?.(this._context)
-       }
-       _isValid() {
- ... (73 more removed lines; see GitHub link above)
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 ? arguments[2] : void 0,
+           mW = arguments.length > 3 ? arguments[3] : void 0;
+         this.initialize(WW, iW, OW, mW)
```

#### 19. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L548-L549` → after: `L156-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L156-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L156-L160) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L548-L549)

```diff
-       _dispose() {
-         this._frameGraphRenderTarget?.dispose()
+       initialize(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 ? arguments[2] : void 0,
+           mW = arguments.length > 3 ? arguments[3] : void 0;
+         return this.mask = WW, this.skipNextObservers = iW, this.target = OW, this.currentTarget = mW, this
```

#### 20. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L585-L593` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L165-L166) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L585-L593)

```diff
-         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new ge.d, this.onBeforeTaskExecute = new ge.d, this.onAfterTaskExecute = new ge.d, this.name = ee, this._frameGraph = ie, this._reset()
-       }
-       _reset() {
-         for (const ee of this._passes) ee._dispose();
-         for (const ee of this._passesDisabled) ee._dispose();
-         this._passes.length = 0, this._passesDisabled.length = 0
-       }
-       _addPass(ee, ie) {
-         ie ? this._passesDisabled.push(ee) : this._passes.push(ee)
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         this.callback = WW, this.mask = iW, this.scope = OW, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
```

#### 21. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L595-L706` → after: `L168-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L168-L170) · [Before (L595-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L595-L706)

```diff
-       _checkTask() {
-         let ee, ie = null,
-           He = null;
-         for (const Ue of this._passes) {
-           const ye = Ue._isValid();
-           if (ye) throw new Error(`Pass "${Ue.name}" is not valid. ${ye}`);
-           if (Ee.IsRenderPass(Ue)) {
-             const ee = Array.isArray(Ue.renderTarget) ? Ue.renderTarget : [Ue.renderTarget];
-             ie = [];
-             for (const He of ee) void 0 !== He && ie.push(this._frameGraph.textureManager.getTextureFromHandle(He));
-             He = void 0 !== Ue.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Ue.renderTargetDepth) : null
-           } else Be.IsObjectListPass(Ue) && (ee = Ue.objectList)
-         }
-         let ye, be = null,
-           Me = [],
-           Ke = null;
- ... (96 more removed lines; see GitHub link above)
+       remove() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._remove && this._remove(WW)
```

#### 22. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L709-L721` → after: `L173-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L173-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L173-L181) · [Before (L709-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L709-L721)

```diff
-     class We extends de {
-       constructor(ee, ie, He) {
-         super(ee, ie, He || new oe(ee, ie.engine))
-       }
-       getClassName() {
-         return "FrameGraphFXAATask"
-       }
-       record() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           ie = arguments.length > 1 ? arguments[1] : void 0,
-           He = arguments.length > 2 ? arguments[2] : void 0;
-         const ye = super.record(ee, ie, He);
-         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, ye
+     class PW {
+       static FromPromise(WW, iW) {
+         const OW = new PW;
+         return WW.then((WW => {
+           OW.notifyObservers(WW)
+         })).catch((WW => {
+           if (!iW) throw WW;
+           iW.notifyObservers(WW)
+         })), OW
```

#### 23. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L723-L727` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L183-L184) · [Before (L723-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L723-L727)

```diff
-     }
-     var te = He(45023);
-     class Ze extends de {
-       constructor(ee, ie, He) {
-         super(ee, ie, He || new te.d(ee, ie.engine))
+       get observers() {
+         return this._observers
```

#### 24. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L729-L730` → after: `L186-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L186-L188) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L729-L730)

```diff
-       getClassName() {
-         return "FrameGraphPassTask"
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.notifyIfTriggered = iW, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new EW(0), WW && (this._onObserverAdded = WW)
```

#### 25. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L732-L743` → after: `L190-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L190-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L190-L216) · [Before (L732-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L732-L743)

```diff
-     }
-     var we = He(41199),
-       De = He(41286),
-       Pe = He(41242),
-       Ae = He(41366),
-       Ye = He(38022);
-     class Ve {
-       getRenderCamera(ee) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let ie;
-           return ie = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, ee && ie && ie.isRigCamera ? ie.rigParent : ie
+       add(WW) {
+         let iW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           OW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if (!WW) return null;
+         const EW = new NW(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
+         EW.unregisterOnNextCall = OW, iW ? this._observers.unshift(EW) : this._observers.push(EW), this._onObserverAdded && this._onObserverAdded(EW), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(EW, this._lastNotifiedValue);
+         const PW = mW ? new WeakRef(this) : {
+           deref: () => this
+         };
+         return EW._remove = function() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           const iW = PW.deref();
+           iW && (WW ? iW.remove(EW) : iW._remove(EW))
+         }, EW
+       }
+       addOnce(WW) {
+ ... (11 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L746-L747` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L220-L223) · [Before (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L746-L747)

```diff
-       setRenderCamera(ee) {
-         this._renderCamera = ee
+       _deferUnregister(WW) {
+         WW._willBeUnregistered || (this._numObserversMarkedAsDeleted++, WW.unregisterOnNextCall = !1, WW._willBeUnregistered = !0, setTimeout((() => {
+           this._remove(WW)
+         }), 0))
```

#### 27. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L749-L753` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L225-L229) · [Before (L749-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L749-L753)

```diff
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new Ae.d("shared gizmo light", new Je.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Ye.c.Gray()), this._sharedGizmoLight
-       }
-       static get DefaultUtilityLayer() {
-         return null == Ve._DefaultUtilityLayer ? Ve._CreateDefaultUtilityLayerFromScene(Fe.b.LastCreatedScene) : Ve._DefaultUtilityLayer
+       _remove(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!WW) return !1;
+         const OW = this._observers.indexOf(WW);
+         return -1 !== OW && (iW && this._numObserversMarkedAsDeleted--, this._observers.splice(OW, 1), !0)
```

#### 28. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L755-L758` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L231-L232) · [Before (L755-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L755-L758)

```diff
-       static _CreateDefaultUtilityLayerFromScene(ee) {
-         return Ve._DefaultUtilityLayer = new Ve(ee), Ve._DefaultUtilityLayer.originalScene.Bx.addOnce((() => {
-           Ve._DefaultUtilityLayer = null
-         })), Ve._DefaultUtilityLayer
+       makeObserverTopPriority(WW) {
+         this._remove(WW, !1), this._observers.unshift(WW)
```

#### 29. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L760-L761` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L234-L235) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L760-L761)

```diff
-       static get DefaultKeepDepthUtilityLayer() {
-         return null == Ve._DefaultKeepDepthUtilityLayer ? Ve._CreateDefaultKeepUtilityLayerFromScene(Fe.b.LastCreatedScene) : Ve._DefaultKeepDepthUtilityLayer
+       makeObserverBottomPriority(WW) {
+         this._remove(WW, !1), this._observers.push(WW)
```

#### 30. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L763-L766` → after: `L237-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L237-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L237-L247) · [Before (L763-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L763-L766)

```diff
-       static _CreateDefaultKeepUtilityLayerFromScene(ee) {
-         return Ve._DefaultKeepDepthUtilityLayer = new Ve(ee), Ve._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Ve._DefaultKeepDepthUtilityLayer.originalScene.Bx.addOnce((() => {
-           Ve._DefaultKeepDepthUtilityLayer = null
-         })), Ve._DefaultKeepDepthUtilityLayer
+       notifyObservers(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
+           OW = arguments.length > 2 ? arguments[2] : void 0,
+           mW = arguments.length > 3 ? arguments[3] : void 0,
+           EW = arguments.length > 4 ? arguments[4] : void 0;
+         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WW), !this._observers.length) return !0;
+         const NW = this._eventState;
+         NW.mask = iW, NW.target = OW, NW.currentTarget = mW, NW.skipNextObservers = !1, NW.lastReturnValue = WW, NW.userInfo = EW;
+         for (const PW of this._observers)
+           if (!PW._willBeUnregistered && (PW.mask & iW && (PW.unregisterOnNextCall && this._deferUnregister(PW), PW.scope ? NW.lastReturnValue = PW.callback.apply(PW.scope, [WW, NW]) : NW.lastReturnValue = PW.callback(WW, NW)), NW.skipNextObservers)) return !1;
+         return !0
```

#### 31. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L768-L803` → after: `L249-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L249-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L249-L253) · [Before (L768-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L768-L803)

```diff
-       constructor(ee) {
-         let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this.originalScene = ee, this.handleEvents = ie, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.process … [truncated]
-           virtual: !0,
-           useFloatingOrigin: ee.floatingOriginMode
-         }), this.utilityLayerScene.useRightHandedSystem = ee.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), ie && (this._originalPointerObserver = ee.onPrePoi … [truncated]
-           if (!this.utilityLayerScene.activeCamera) return;
-           if (!this.pickingEnabled) return;
-           if (!this.processAllEvents && ie.type !== De.c.POINTERMOVE && ie.type !== De.c.POINTERUP && ie.type !== De.c.POINTERDOWN && ie.type !== De.c.POINTERDOUBLETAP) return;
-           this.utilityLayerScene.pointerX = ee.pointerX, this.utilityLayerScene.pointerY = ee.pointerY;
-           const He = ie.event;
-           if (ee.isPointerCaptured(He.pointerId)) return void(this._pointerCaptures[He.pointerId] = !1);
-           const ye = He => {
-               let ye;
-               if (ie.nearInteractionPickingInfo) ye = ie.nearInteractionPickingInfo.pickedMesh.Xx() == He ? ie.nearInteractionPickingInfo : new Pe.e;
- ... (20 more removed lines; see GitHub link above)
+       notifyObserver(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = iW), WW._willBeUnregistered) return;
+         const mW = this._eventState;
+         mW.mask = OW, mW.skipNextObservers = !1, WW.unregisterOnNextCall && this._deferUnregister(WW), WW.callback(iW, mW)
```

#### 32. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L805-L806` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L255-L256) · [Before (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L805-L806)

```diff
-       _notifyObservers(ee, ie, He) {
-         ee.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new De.i(ee.type, ee.event, ie), ee.type), this._lastPointerEvents[He.pointerId] = !0)
+       hasObservers() {
+         return this._observers.length - this._numObserversMarkedAsDeleted > 0
```

#### 33. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L808-L812` → after: `L258-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L258-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L258-L261) · [Before (L808-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L808-L812)

```diff
-       render() {
-         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
-           const ee = this.utilityLayerScene.activeCamera.Xx(),
-             ie = this.utilityLayerScene.activeCamera;
-           ie._scene = this.utilityLayerScene, ie.leftCamera && (ie.leftCamera._scene = this.utilityLayerScene), ie.rightCamera && (ie.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), ie._scene = ee, ie.leftCamera && (ie.leftCamera._scene = ee), ie. … [truncated]
+       clear() {
+         for (; this._observers.length;) {
+           const WW = this._observers.pop();
+           WW && (WW._remove = null)
```

#### 34. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L815-L862` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L265-L266) · [Before (L815-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L815-L862)

```diff
-       dispose() {
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Bx.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
-       }
-       _updateCamera() {
-         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
-       }
-     }
-     Ve._DefaultUtilityLayer = null, Ve._DefaultKeepDepthUtilityLayer = null;
-     const ae = {
-       FindMainCamera: function(ee) {
-         return ee.findMainCamera()
-       },
-       FindMainObjectRenderer: function(ee) {
-         return ee.findMainObjectRenderer()
-       },
-       CreateUtilityLayerRenderer: function(ee) {
- ... (32 more removed lines; see GitHub link above)
+       cleanLastNotifiedState() {
+         this._hasNotified = !1, this._lastNotifiedValue = void 0
```

#### 35. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L864-L1059` → after: `L268-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L268-L270) · [Before (L864-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L864-L1059)

```diff
-       fe ? ve(ee, ie, He, (ee => {
-         if (Me) {
-           const ie = new Blob([ee]);
-           qe.h.DownloadBlob(ie), ye && ye("")
-         } else ye && ye(ee)
-       }), be, 1, ee.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Ke) : ee.onEndFrameObservable.addOnce((() => {
-         ce || (ce = document.createElement("canvas")), ce.width = oe, ce.height = Je;
-         const ie = ce.getContext("2d"),
-           He = ee.getRenderingCanvas();
-         if (!ie || !He) return void ke.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
-         const fe = He.width,
-           Te = He.height,
-           pe = ce.width,
-           Xe = ce.height,
-           ze = pe / fe,
-           Be = Xe / Te,
- ... (180 more removed lines; see GitHub link above)
+       clone() {
+         const WW = new PW;
+         return WW._observers = this._observers.slice(0), WW
```

#### 36. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1061-L1077` → after: `L272-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L272-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L272-L276) · [Before (L1061-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L1061-L1077)

```diff
-       if (pe !== Te || ze !== qe) {
-         const ie = new Ze("pass", ee);
-         ie.sourceTexture = we, ie.targetTexture = ee.textureManager.createRenderTargetTexture("pass_output", {
-           size: {
-             width: pe,
-             height: ze
-           },
-           options: {
-             createMipMaps: !1,
-             types: [0],
-             formats: [5],
-             samples: 1,
-             labels: ["screenshot_final_texture"],
-             useSRGBBuffers: [!1]
-           },
-           sizeIsPercentage: !1
- ... (1 more removed lines; see GitHub link above)
+       hasSpecificMask() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
+         for (const iW of this._observers)
+           if (iW.mask & WW || iW.mask === WW) return !0;
+         return !1
```

#### 37. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1095-L1109` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L297-L298) · [Before (L1095-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L1095-L1109)

```diff
-     function le(ee, ie, He) {
-       let ye = 0,
-         be = 0,
-         Me = 0,
-         Ke = 0;
-       if ("object" === typeof He) {
-         const Ue = He.precision ? Math.abs(He.precision) : 1;
-         He.width && He.height ? (ye = He.height * Ue, be = He.width * Ue) : He.width && !He.height ? (be = He.width * Ue, ye = Math.round(be / ee.getAspectRatio(ie))) : He.height && !He.width ? (ye = He.height * Ue, be = Math.round(ye * ee.getAspectRatio(ie))) : (be = Math.round( … [truncated]
-       } else isNaN(He) || (ye = He, be = He, Me = He, Ke = He);
-       return be && (be = Math.floor(be)), ye && (ye = Math.floor(ye)), Me && (Me = Math.floor(Me)), Ke && (Ke = Math.floor(Ke)), {
-         height: 0 | ye,
-         width: 0 | be,
-         finalWidth: 0 | Me,
-         finalHeight: 0 | Ke
-       }
+     function EW(WW, iW) {
+       mW[WW] = iW
```

#### 38. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1121-L1124` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/265.js#L301-L302) · [Before (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/265.js#L1121-L1124)

```diff
-     function je() {
-       if (ne) return;
-       ne = !0;
-       qe.h.CreateScreenshot = xe, qe.h.CreateScreenshotAsync = Le, qe.h.CreateScreenshotUsingRenderTarget = ve, qe.h.CreateScreenshotUsingRenderTargetAsync = ue
+     function NW(WW) {
+       return mW[WW]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/266.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/266.js#L4)

```diff
-   38581: (ee, ie, He) => {
+   38323: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/266.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/266.js#L6)

```diff
-       e: () => be
+       c: () => LW,
+       g: () => PW,
+       i: () => EW
```

#### 3. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/266.js#L10-L12) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/266.js#L8)

```diff
-     var ye = He(38590);
+     const mW = 1024,
+       EW = 16,
+       NW = 36e4;
```

#### 4. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L10` → after: `L14-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L14-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/266.js#L14-L135) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/266.js#L10)

```diff
-       static GetPlanes(ee) {
+       constructor(WW) {
+         this.boneCount = WW, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * WW), this.position = new Float64Array(3 * WW), this.scale = new Float64Array(3 * WW).fill(1), this.touched = new Uint8Arra … [truncated]
+       }
+       clampToLimits() {
+         for (let WW = 0; WW < this.boneCount; WW++)
+           if (0 !== this.touched[WW])
+             for (let iW = 3 * WW; iW < 3 * WW + 3; iW++) {
+               const WW = this.rotation[iW],
+                 OW = this.position[iW],
+                 PW = this.scale[iW];
+               WW >= -36e4 && WW <= NW || (this.rotation[iW] = cW(WW, NW)), OW >= -1024 && OW <= mW || (this.position[iW] = cW(OW, mW)), PW >= -EW && PW <= EW || (this.scale[iW] = cW(PW, EW, 1))
+             }
+       }
+       reset() {
+         for (let WW = 0; WW < this.boneCount; WW++)
+           if (0 !== this.touched[WW]) {
+ ... (106 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L12-L47` → after: `L137-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L137-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/266.js#L137-L370) · [Before (L12-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/266.js#L12-L47)

```diff
-         for (let He = 0; He < 6; He++) ie.push(new ye.c(0, 0, 0, 0));
-         return be.GetPlanesToRef(ee, ie), ie
-       }
-       static GetNearPlaneToRef(ee, ie) {
-         const He = ee.m;
-         ie.normal.x = He[3] + He[2], ie.normal.y = He[7] + He[6], ie.normal.z = He[11] + He[10], ie.d = He[15] + He[14], ie.normalize()
-       }
-       static GetFarPlaneToRef(ee, ie) {
-         const He = ee.m;
-         ie.normal.x = He[3] - He[2], ie.normal.y = He[7] - He[6], ie.normal.z = He[11] - He[10], ie.d = He[15] - He[14], ie.normalize()
-       }
-       static GetLeftPlaneToRef(ee, ie) {
-         const He = ee.m;
-         ie.normal.x = He[3] + He[0], ie.normal.y = He[7] + He[4], ie.normal.z = He[11] + He[8], ie.d = He[15] + He[12], ie.normalize()
-       }
-       static GetRightPlaneToRef(ee, ie) {
- ... (20 more removed lines; see GitHub link above)
+         for (const wW of WW) {
+           const WW = wW[iW];
+           if (WW) {
+             const iW = this.createAnimationFrameWithoutPrecomputes(wW.timeFraction, WW, mW);
+             ZW(iW) && EW.push(iW)
+           }
+         }
+         const NW = [];
+         for (let wW = 0; wW < EW.length; wW++) {
+           var PW, LW, cW;
+           const WW = EW[wW],
+             iW = null !== (PW = EW[wW - 1]) && void 0 !== PW ? PW : WW,
+             mW = null !== (LW = EW[wW + 1]) && void 0 !== LW ? LW : WW,
+             tW = null !== (cW = EW[wW + 2]) && void 0 !== cW ? cW : mW;
+           NW.push({
+             ...WW,
+ ... (218 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L49` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/266.js#L372) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/266.js#L49)

```diff
-   38590: (ee, ie, He) => {
+   38307: (WW, iW, OW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L51` → after: `L374-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L374-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/266.js#L374-L377) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/266.js#L51)

```diff
-       c: () => be
+       b: () => PW,
+       d: () => NW,
+       f: () => mW,
+       i: () => EW
```

#### 8. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L53-L257` → after: `L379-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L379-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/266.js#L379-L390) · [Before (L53-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/266.js#L53-L257)

```diff
-     var ye = He(37917);
-     class be {
-       constructor(ee, ie, He, be) {
-         this.normal = new ye.p(ee, ie, He), this.d = be
-       }
-       Qbe() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new be(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let ee = this.normal.getHashCode();
- ... (189 more removed lines; see GitHub link above)
+     let mW = function(WW) {
+         return WW[WW.Linear = 0] = "Linear", WW[WW.CatmullRomSpline = 1] = "CatmullRomSpline", WW
+       }({}),
+       EW = function(WW) {
+         return WW[WW.NoLoop = 0] = "NoLoop", WW[WW.LoopOnLastFrame = 1] = "LoopOnLastFrame", WW[WW.HoldOnLastFrame = 2] = "HoldOnLastFrame", WW
+       }({}),
+       NW = function(WW) {
+         return WW[WW.Movement = 0] = "Movement", WW[WW.Action = 1] = "Action", WW[WW.Emote = 2] = "Emote", WW[WW.Custom = 3] = "Custom", WW
+       }({}),
+       PW = function(WW) {
+         return WW[WW.Start = 0] = "Start", WW[WW.Stop = 1] = "Stop", WW
+       }({})
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 1. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/267.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/267.js#L2)

```diff
- export const ids = [266, 267];
+ export const ids = [267];
```

#### 2. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L4-L11` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/267.js#L4-L7) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/267.js#L4-L11)

```diff
-   63819: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       RegisterShaderMaterial: () => ye.e,
-       ShaderMaterial: () => ye.o,
-       ShaderMaterialCreateFromSnippetAsync: () => ye.g,
-       ShaderMaterialParse: () => ye.m,
-       ShaderMaterialParseFromFileAsync: () => ye.h,
-       ShaderMaterialParseFromSnippetAsync: () => ye.i
+   38369: (WW, iW, OW) => {
+     OW.d(iW, {
+       Color3: () => mW.b,
+       c: () => mW.d
```

#### 3. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L13-L269` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/267.js#L9-L10) · [Before (L13-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/267.js#L13-L269)

```diff
-     var ye = He(41585);
-     (0, ye.e)()
-   },
-   38581: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => be
-     });
-     var ye = He(38590);
-     class be {
-       static GetPlanes(ee) {
-         const ie = [];
-         for (let He = 0; He < 6; He++) ie.push(new ye.c(0, 0, 0, 0));
-         return be.GetPlanesToRef(ee, ie), ie
-       }
-       static GetNearPlaneToRef(ee, ie) {
-         const He = ee.m;
- ... (241 more removed lines; see GitHub link above)
+     var mW = OW(38372);
+     (0, mW.f)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/268.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/268.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658)

#### 1. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4-L7)

```diff
-   38639: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Re,
-       g: () => Ke
+   64410: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       DEVTOOLS_SHADERS: () => NW,
+       registerDevtoolsShader: () => PW
```

#### 2. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L9-L11` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L9-L10) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L9-L11)

```diff
-     var ye = He(9985),
-       be = He(9961),
-       Me = He(347);
+     var mW = OW(41392),
+       EW = OW(38388);
```

#### 3. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L13-L3110` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L12) · [Before (L13-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L13-L3110)

```diff
-       "Maple Door": {
-         positions: [{
-           block: "Maple Door",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Maple Door Top",
-           x: 0,
-           y: 1,
-           z: 0
-         }]
-       },
-       "Maple Door|meta|rot1|open": {
-         positions: [{
-           block: "Maple Door|meta|rot1|open",
- ... (3082 more removed lines; see GitHub link above)
+       devtoolsNormal: function(WW) {
```

#### 4. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3112-L3223` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L14-L15) · [Before (L3112-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3112-L3223)

```diff
-           [ee]: {
-             positions: [{
-               block: ee,
-               x: 0,
-               y: 0,
-               z: 0
-             }, {
-               block: "_Lunite Auto Miner Body",
-               x: 0,
-               y: 1,
-               z: -1
-             }, {
-               block: "_Lunite Auto Miner Drill Front",
-               x: 0,
-               y: 1,
-               z: -2
- ... (96 more removed lines; see GitHub link above)
+           vertex: `\n\t\t\t${(0,EW.g)(WW,"position","vec3")}\n\t\t\t${(0,EW.g)(WW,"normal","vec3")}\n\t\t\t${(0,EW.Eb)(WW,"worldViewProjection","mat4")}\n\t\t\t${(0,EW.Eb)(WW,"world","mat4")}\n\t\t\t${(0,EW.Kb)(WW,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,EW.Ob)(WW,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,EW.Kb)(WW,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,EW.V)(WW,`\n\t\t\t\t\n\t\t\t\t${(0,EW.B)(WW,"vec3","normalColor",`abs(${(0,EW.W)(WW,"vNormal")})`)}\n\t\t\t\t${(0,EW.O)(WW)} = ${(0,EW.m)(WW,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
```

#### 5. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3342-L3386` → after: `L18-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L18-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L18-L22) · [Before (L3342-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3342-L3386)

```diff
-       "Solar Panel|meta|rot3": {
-         positions: [{
-           block: "Solar Panel|meta|rot3",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Solar Panel SE|meta|rot3",
-           x: -1,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Solar Panel NW|meta|rot3",
-           x: 0,
-           y: 0,
-           z: 1
- ... (29 more removed lines; see GitHub link above)
+       devtoolsWhite: function(WW) {
+         return {
+           vertex: `\n\t\t\t${(0,EW.g)(WW,"position","vec3")}\n\t\t\t${(0,EW.Eb)(WW,"worldViewProjection","mat4")}\n\n\t\t\t${(0,EW.Ob)(WW,`\n\t\t\t\t${(0,EW.l)(WW)} = ${(0,EW.Ib)(WW,"worldViewProjection")} * ${(0,EW.m)(WW,"vec4",(0,EW.Pb)(WW,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
+           fragment: `\n\t\t\t${(0,EW.V)(WW,`\n\t\t\t\t${(0,EW.O)(WW)} = ${(0,EW.m)(WW,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+         }
```

#### 6. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3388-L3404` → after: `L24-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L24-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L24-L28) · [Before (L3388-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3388-L3404)

```diff
-       "Homestead Core": {
-         positions: [{
-           block: "Homestead Core",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Homestead Core Mid",
-           x: 0,
-           y: 1,
-           z: 0
-         }, {
-           block: "_Homestead Core Top",
-           x: 0,
-           y: 2,
-           z: 0
- ... (1 more removed lines; see GitHub link above)
+       devtoolsDepth: function(WW) {
+         return {
+           vertex: `\n\t\t\t${(0,EW.g)(WW,"position","vec3")}\n\t\t\t${(0,EW.Eb)(WW,"worldViewProjection","mat4")}\n\t\t\t${(0,EW.Eb)(WW,"world","mat4")}\n\t\t\t${(0,EW.Eb)(WW,"cameraPosition","vec3")}\n\t\t\t${(0,EW.Kb)(WW,"vDepth","float","mediump")}\n\n\t\t\t${(0,EW.Ob)(WW,`\n\ … [truncated]
+           fragment: `\n\t\t\t${(0,EW.Kb)(WW,"vDepth","float","mediump")}\n\t\t\t${(0,EW.Eb)(WW,"maxDepth","float")}\n\t\t\t${(0,EW.Eb)(WW,"minDepth","float")}\n\n\t\t\t${(0,EW.V)(WW,`\n\t\t\t\t\n\t\t\t\t${(0,EW.B)(WW,"float","normalizedDepth",`clamp((${(0,EW.W)(WW,"vDepth")} - ${ … [truncated]
+         }
```

#### 7. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3408-L3566` → after: `L32-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L32-L37) · [Before (L3408-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3408-L3566)

```diff
-     function Ue(ee) {
-       return {
-         [`${ee} Banner`]: {
-           positions: [{
-             block: `${ee} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${ee} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
-         },
-         [`${ee} Banner|meta|rot2|bot`]: {
- ... (143 more removed lines; see GitHub link above)
+     function PW(WW, iW) {
+       const {
+         vertex: OW,
+         fragment: EW
+       } = NW[WW](iW), PW = mW.c.GetShadersStore(iW);
+       PW[`${WW}VertexShader`] = OW, PW[`${WW}FragmentShader`] = EW
```

#### 8. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3570-L3664` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L86) · [Before (L3570-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3570-L3664)

```diff
-       const ie = (0, Me._b)(ee);
-       return {
-         [ie]: {
-           positions: [{
-             block: ie,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${ie} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_${ie} Top Right`,
-             x: -1,
- ... (79 more removed lines; see GitHub link above)
+       return WW === mW.WGSL
```

#### 9. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3667-L3743` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L89-L90) · [Before (L3667-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3667-L3743)

```diff
-     function Je(ee) {
-       const ie = `_${ee} Back`,
-         He = `_${ee} Dish`;
-       return {
-         [ee]: {
-           positions: [{
-             block: ee,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: ie,
-             x: 0,
-             y: 0,
-             z: -1
-           }, {
- ... (61 more removed lines; see GitHub link above)
+     function NW(WW, iW, OW) {
+       return EW(WW) ? OW : iW
```

#### 10. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3746-L3767` → after: `L103-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L103-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L103-L112) · [Before (L3746-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3746-L3767)

```diff
-     function oe(ee) {
-       const ie = `Small ${ee} Pod`;
-       return {
-         [ie]: {
-           positions: [{
-             block: ie,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${ee} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_Small ${ee} Pod Top`,
- ... (6 more removed lines; see GitHub link above)
+     function LW(WW, iW) {
+       if (!EW(WW)) return iW;
+       const OW = PW.get(iW);
+       if (!OW) throw new Error(`No WGSL name for shader type "${iW}"`);
+       return OW
+     }
+ 
+     function cW(WW, iW) {
+       for (var OW = arguments.length, mW = new Array(OW > 2 ? OW - 2 : 0), EW = 2; EW < OW; EW++) mW[EW - 2] = arguments[EW];
+       return `${LW(WW,iW)}(${mW.join(", ")})`
```

#### 11. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3769-L3772` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L114-L116) · [Before (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3769-L3772)

```diff
-     for (const ke in Ke) {
-       for (const ee of Ke[ke].positions)
-         if (ee.id = be.i[ee.block].id, ke === ee.block && (0 !== ee.x || 0 !== ee.y || 0 !== ee.z)) throw new Error(`Multiblock "${ke}" has main block "${ee.block}" at non-origin position (${ee.x}, ${ee.y}, ${ee.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       Ke[be.i[ke].id] = Ke[ke]
+ 
+     function wW(WW, iW) {
+       return cW(WW, "int", iW)
```

#### 12. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3808-L3810` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L119-L120) · [Before (L3808-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3808-L3810)

```diff
-     function Ue(ee) {
-       const ie = ye.i[ee];
-       return !!ie && ee !== ye.b && !ie.model && !ie.Lq && !1 !== ie.solid && !ie.Bp
+     function tW(WW, iW, OW, mW, NW) {
+       return EW(WW) ? `var ${OW}: ${LW(WW,iW)} = ${mW};` : `${AW(WW,NW)}${iW} ${OW} = ${mW};`
```

#### 13. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3812-L3835` → after: `L122-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L122-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L122-L133) · [Before (L3812-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3812-L3835)

```diff
-     class Fe {
-       constructor(ee) {
-         this.model = ee, this.reshapeOffsets = [...Ke, [0, -1, 0]]
-       }
-       handles(ee) {
-         const ie = ye.i[ee];
-         return (null === ie || void 0 === ie ? void 0 : ie.model) === this.model && void 0 !== ie.attachedTop
-       }
-       affects(ee) {
-         return this.handles(ee) || Ue(ee) || (0, Me.z)(ye.i[ee])
-       }
-       shape(ee, ie, He, Ke, Fe) {
-         let Je = this.handles(ee(ie, He + 1, Ke)) ? be.m : 0;
-         return be.y.forEach(((Fe, oe) => {
-           let {
-             dx: Re,
- ... (8 more removed lines; see GitHub link above)
+ 
+     function ZW(WW, iW, OW) {
+       return EW(WW) ? `var ${OW}: ${LW(WW,iW)};` : `${iW} ${OW};`
+     }
+ 
+     function xW(WW, iW, OW, mW) {
+       return EW(WW) ? `const ${OW}: ${LW(WW,iW)} = ${mW};` : `const ${iW} ${OW} = ${mW};`
+     }
+ 
+     function lW(WW, iW, OW, mW, NW) {
+       if (EW(WW)) {
+         return `fn ${OW}(${mW.map((iW=>`${iW.name}: ${LW(WW,iW.type)}`)).join(", ")}) -> ${LW(WW,iW)} {${NW}}`
```

#### 14. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3838-L3839` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L137) · [Before (L3838-L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3838-L3839)

```diff
-   },
-   38835: (ee, ie, He) => {
+ 
```

#### 15. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3841-L3868` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L139) · [Before (L3841-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3841-L3868)

```diff
-       var He;
-       ie || (ie = {});
-       const ye = null !== (He = ie.customAttributes) && void 0 !== He ? He : {};
-       var be, Me, Ke;
-       "Gun" === (null === ee || void 0 === ee ? void 0 : ee.type) && (ye.shotsLeft = null !== (be = null !== (Me = ye.shotsLeft) && void 0 !== Me ? Me : null === (Ke = ye.gunStats) || void 0 === Ke ? void 0 : Ke.clipSize) && void 0 !== be ? be : ee.clipSize);
-       if (ye.enchantmentTier && (ye.enchantmentTier = ye.enchantmentTier.toString()), ye.enchantments)
-         for (const Re in ye.enchantments) {
-           const ee = ye.enchantments[Re];
-           if ("number" !== typeof ee) {
-             const ie = parseInt(ee);
-             isNaN(ie) || ie < 0 ? ye.enchantments[Re] = void 0 : ye.enchantments[Re] = ie > 1e9 ? 1e9 : ie
-           }
-         }
-       if (ye.enchantmentData)
-         for (const Re in ye.enchantmentData) {
-           const ee = ye.enchantmentData[Re];
- ... (12 more removed lines; see GitHub link above)
+       return !iW || EW(WW) ? "" : `${iW} `
```

#### 16. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3888-L3889` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L142-L143) · [Before (L3888-L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3888-L3889)

```diff
-     function Fe(ee) {
-       return Ke <= ee && ee <= Ue
+     function bW(WW, iW, OW, mW) {
+       return EW(WW) ? `attribute ${iW}: ${LW(WW,OW)};` : `attribute ${AW(WW,mW)}${OW} ${iW};`
```

#### 17. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3897-L3899` → after: `L146-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L146-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L146-L151) · [Before (L3897-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3897-L3899)

```diff
-     function pe(ee) {
-       var ie, He;
-       return "string" === typeof(null === ee || void 0 === ee || null === (ie = ee.persisted) || void 0 === ie || null === (He = ie.shared) || void 0 === He ? void 0 : He.text)
+     function jW(WW, iW, OW, mW) {
+       return EW(WW) ? `varying ${iW}: ${LW(WW,OW)};` : `varying ${AW(WW,mW)}${OW} ${iW};`
+     }
+ 
+     function UW(WW, iW, OW) {
+       return EW(WW) ? `uniform ${iW}: ${LW(WW,OW)};` : `uniform ${OW} ${iW};`
```

#### 18. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3903` → after: `L155-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L155-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L155-L159) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3903)

```diff
-       return pe(ee) && "" !== ee.persisted.shared.text.trim()
+       return EW(WW) ? "vertexOutputs.position" : "gl_Position"
+     }
+ 
+     function sW(WW, iW) {
+       return EW(WW) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${iW}}` : `void main() {${iW}}`
```

#### 19. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3907-L3909` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L163) · [Before (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3907-L3909)

```diff
-       let [He, , ye] = ie;
-       const [Me, , Ke] = be.s[ee][qe];
-       return He * Me + ye * Ke
+       return EW(WW) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${iW}}` : `void main() {${iW}}`
```

#### 20. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3913` → after: `L167-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L167-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L167-L170) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3913)

```diff
-       return He[1] - ie[1] || ze(ee, ie) - ze(ee, He)
+       if (EW(WW)) {
+         return [`var ${iW}Sampler: sampler;`, `var ${iW}: ${"2dArray"===OW?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+       }
+       return `uniform highp ${"2dArray"===OW?"sampler2DArray":"sampler2D"} ${iW};`
```

#### 21. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3916-L3921` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L173-L174) · [Before (L3916-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3916-L3921)

```diff
-     function Ee(ee, ie, He, Me, Ue) {
-       var Fe;
-       let oe = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ee(ie[0], ie[1], ie[2]);
-       if (!(Je[oe - Ke] & 1 << He)) return null;
-       const [Re, ke, qe] = be.s[Ue][He], fe = [ie[0] + Re, ie[1] + ke, ie[2] + qe], Te = ee(fe[0], fe[1], fe[2]), pe = null === (Fe = ye.i[Te]) || void 0 === Fe ? void 0 : Fe.meta;
-       return (null === pe || void 0 === pe ? void 0 : pe.rootId) === Me && pe.rot === Ue && Je[Te - Ke] & 1 << (1 ^ He) ? fe : null
+     function SW(WW, iW, OW) {
+       return EW(WW) ? `textureSample(${iW}, ${iW}Sampler, ${OW})` : `texture2D(${iW}, ${OW})`
```

#### 22. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3924-L3948` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L177-L179) · [Before (L3924-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3924-L3948)

```diff
-     function ge(ee, ie, He, Me) {
-       const Ke = ee(ie, He, Me);
-       if (!Fe(Ke)) return null;
-       const {
-         rootId: Ue,
-         rot: Je
-       } = ye.i[Ke].meta, Re = (ie, He) => {
-         let ye = ie,
-           be = 1;
-         for (let Me = Ee(ee, ye, He, Ue, Je); Me && be < oe; Me = Ee(ee, ye, He, Ue, Je)) ye = Me, be++;
-         return {
-           end: ye,
-           cells: be
-         }
-       }, pe = Re(Re([ie, He, Me], ke).end, fe).end, Xe = Re(pe, qe).cells, [ze, , Be] = be.s[Je][qe];
-       let ge = 1;
- ... (9 more removed lines; see GitHub link above)
+     function YW(WW, iW, OW, mW, NW) {
+       if (EW(WW)) {
+         return `${NW?"textureSampleLevel":"textureSample"}(${iW}, ${iW}Sampler, ${OW}, ${wW(WW,`round(${mW})`)}${NW?`, ${NW}`:""})`
```

#### 23. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3952-L3966` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L185-L186) · [Before (L3952-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3952-L3966)

```diff
-     function Oe(ee, ie) {
-       for (const He of function(ee) {
-           let {
-             anchor: ie,
-             rot: He,
-             width: ye,
-             height: Me
-           } = ee;
-           const [Ke, , Ue] = be.s[He][qe], Fe = [];
-           for (let be = 0; be < Me; be++)
-             for (let ee = 0; ee < ye; ee++) Fe.push([ie[0] + Ke * ee, ie[1] - be, ie[2] + Ue * ee]);
-           return Fe
-         }(ee))
-         if (pe(ie(He[0], He[1], He[2]))) return He;
-       return null
+     function yW(WW) {
+       return EW(WW) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
```

#### 24. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3969-L3995` → after: `L189-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L189-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L189-L193) · [Before (L3969-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3969-L3995)

```diff
-     function de(ee, ie, He, be, Me) {
-       const Ke = ee(He, be, Me);
-       if (!Fe(Ke)) return null;
-       const {
-         rootId: Ue,
-         rot: Je
-       } = ye.i[Ke].meta, oe = [
-         [He, be, Me]
-       ], ke = new Set([oe[0].join()]);
-       let qe = oe[0],
-         fe = null;
-       for (let ye = 0; ye < oe.length; ye++) {
-         const He = oe[ye];
-         if (Be(Je, He, qe) < 0 && (qe = He), pe(ie(He[0], He[1], He[2]))) {
-           const ie = ge(ee, He[0], He[1], He[2]);
-           (!fe || Be(Je, ie.anchor, fe.anchor) < 0) && (fe = ie)
- ... (11 more removed lines; see GitHub link above)
+     function TW(WW) {
+       return EW(WW) ? {
+         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
+       } : {
+         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
```

#### 25. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3999-L4017` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L197-L198) · [Before (L3999-L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L3999-L4017)

```diff
-     function We(ee, ie, He, Ke, Ue) {
-       if (null !== He && Fe(He)) {
-         const {
-           rootName: ee,
-           rot: ie
-         } = ye.i[He].meta;
-         if (be.s[ie].some((ee => {
-             let [ie, He, ye] = ee;
-             return ie === Ke[0] && He === Ke[1] && ye === Ke[2]
-           }))) return {
-           root: ee,
-           rot: ie
-         }
-       }
-       const [Je, oe] = be.j[Ue], Re = ee(ie[0] - Je, ie[1], ie[2] - oe);
-       return {
- ... (3 more removed lines; see GitHub link above)
+     function JW(WW, iW) {
+       return EW(WW) ? `vertexInputs.${iW}` : iW
```

#### 26. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4241-L4244` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L201-L202) · [Before (L4241-L4244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4241-L4244)

```diff
-     function qe(ee) {
-       for (const ie of be.d)
-         if (Re[ie].meshItemName === ee) return ie;
-       return null
+     function hW(WW, iW) {
+       return EW(WW) ? `vertexOutputs.${iW}` : iW
```

#### 27. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4248-L4253` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L206) · [Before (L4248-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4248-L4253)

```diff
-       const He = ee.validBlockIds;
-       if (Array.isArray(He)) return He.includes(ie);
-       if (ie === Fe) return !1;
-       if ("solidBlocks" === He) return !0 !== Me.i[ie].Lq;
-       if ("solidBlocksOrFluid" === He) return !0;
-       throw new Error(`Unsupported validBlockIds for ${ie}: ${JSON.stringify(He)}`)
+       return EW(WW) ? `fragmentInputs.${iW}` : iW
```

#### 28. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4377-L4379` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L209-L210) · [Before (L4377-L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4377-L4379)

```diff
-     function Xe(ee) {
-       var ie;
-       return null === ee || void 0 === ee ? null : null !== (ie = pe[ee]) && void 0 !== ie ? ie : null
+     function nW(WW, iW) {
+       return EW(WW) ? `uniforms.${iW}` : iW
```

#### 29. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4419-L4421` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L213-L214) · [Before (L4419-L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4419-L4421)

```diff
-     function Ee(ee) {
-       var ie;
-       return null === ee || void 0 === ee ? null : null !== (ie = Be[ee]) && void 0 !== ie ? ie : null
+     function uW(WW, iW, OW) {
+       return EW(WW) ? `frame.${iW}` : OW
```

#### 30. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4427` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L218) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4427)

```diff
-       return ge.has(ee)
+       return EW(WW) ? "scene.vEyePosition" : "vEyePosition"
```

#### 31. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4431` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L222) · [Before (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4431)

```diff
-       return Oe.has(ee)
+       return EW(WW) ? "mesh.visibility" : "visibility"
```

#### 32. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4435-L4437` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L226) · [Before (L4435-L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4435-L4437)

```diff
-       return ee === ye.s.DEFAULT || function(ee) {
-         return ge.has(ee) || Oe.has(ee)
-       }(ee)
+       return EW(WW) ? "fragmentInputs.position" : "gl_FragCoord"
```

#### 33. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4441` → after: `L230-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L230-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L230-L262) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4441)

```diff
-       return !te(ee) && ee !== ye.s.SLEEPING
+       return EW(WW) ? "fragmentOutputs.color" : "gl_FragColor"
+     }
+ 
+     function gW(WW, iW) {
+       return EW(WW) ? `dpdx(${iW})` : `dFdx(${iW})`
+     }
+ 
+     function DW(WW, iW) {
+       return EW(WW) ? `dpdy(${iW})` : `dFdy(${iW})`
+     }
+ 
+     function VW(WW, iW) {
+       return EW(WW) ? `inverseSqrt(${iW})` : `inversesqrt(${iW})`
+     }
+ 
+     function pW(WW, iW, OW, mW) {
+ ... (17 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4444` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L265) · [Before (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4444)

```diff
-   39037: (ee, ie, He) => {
+   41392: (WW, iW, OW) => {
```

#### 35. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4446-L4449` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L267) · [Before (L4446-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4446-L4449)

```diff
-       c: () => Me,
-       e: () => Ke,
-       i: () => be,
-       l: () => Ue
+       c: () => mW
```

#### 36. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4451-L4462` → after: `L269-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L269-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L269-L277) · [Before (L4451-L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4451-L4462)

```diff
-     var ye = He(349);
-     const be = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...He(608).r.map((ee => `${ee} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
-       Me = ["Obby RPG"];
- 
-     function Ke(ee) {
-       const ie = ee.indexOf("|");
-       return -1 === ie ? {
-         item: ee,
-         clientPredictedThrower: null
-       } : {
-         item: ee.slice(0, ie),
-         clientPredictedThrower: ee.slice(ie + 1)
+     class mW {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersRepository : mW.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersStore : mW.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.IncludesShadersStore : mW.IncludesShadersStoreWGSL
```

#### 37. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4465` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/268.js#L280) · [Before (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/268.js#L4465)

```diff
-     const Ue = [...be, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regener … [truncated]
+     mW.ShadersRepository = "src/Shaders/", mW.ShadersStore = {}, mW.IncludesShadersStore = {}, mW.ShadersRepositoryWGSL = "src/ShadersWGSL/", mW.ShadersStoreWGSL = {}, mW.IncludesShadersStoreWGSL = {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 1. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L4)

```diff
-   38891: (ee, ie, He) => {
+   42543: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L6-L11)

```diff
-       b: () => Je,
-       e: () => ye,
-       i: () => Ue,
-       k: () => be,
-       n: () => Ke,
-       p: () => Me
+       noaDevTools: () => ZW
```

#### 3. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L13-L18` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L8-L12) · [Before (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L13-L18)

```diff
-     const ye = 1.001,
-       be = .501,
-       Me = .025,
-       Ke = .75,
-       Ue = .08,
-       Fe = 4;
+     var mW = OW(38626),
+       EW = OW(38612),
+       NW = OW(2365),
+       PW = OW(1856),
+       LW = OW(42471);
```

#### 4. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L20-L30` → after: `L14-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L14-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L14-L36) · [Before (L20-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L20-L30)

```diff
-     function Je() {
-       const ee = be,
-         ie = Me,
-         He = ee - ie / 2,
-         ye = (2 * ee - 2 * ie) / (2 * Fe - 1),
-         Ke = [];
-       for (const be of [-He, He])
-         for (const Me of [-He, He])
-           for (let He = 0; He < Fe; He++) {
-             const Ue = -ee + ie + ye * (2 * He + .5);
-             Ke.push([ye, ie, ie, Ue, be, Me]), Ke.push([ie, ye, ie, be, Ue, Me]), Ke.push([ie, ie, ye, be, Me, Ue])
+     function cW(WW) {
+       const {
+         TZ: iW
+       } = WW, OW = iW.engine, mW = {
+         width: OW.getRenderWidth(),
+         height: OW.getRenderHeight()
+       };
+       return {
+         canvas: OW.getRenderingCanvas(),
+         maxTextureSize: OW.getCaps().maxTextureSize,
+         KZ: () => !WW.JZ,
+         resize: (WW, iW) => {
+           OW.setSize(WW, iW)
+         },
+         restoreSize: () => {
+           OW.setSize(mW.width, mW.height), iW.resize()
+ ... (7 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L32-L35` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L38-L39) · [Before (L32-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L32-L35)

```diff
-       for (const be of [-He, He])
-         for (const ee of [-He, He])
-           for (const ye of [-He, He]) Ke.push([ie, ie, ie, be, ee, ye]);
-       return Ke
+         }
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L37-L58` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L41) · [Before (L37-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L37-L58)

```diff
-   },
-   39214: (ee, ie, He) => {
-     He.d(ie, {
-       A: () => Oe,
-       E: () => We,
-       H: () => ge,
-       I: () => Ee,
-       L: () => ke,
-       P: () => Te,
-       T: () => Xe,
-       V: () => be,
-       e: () => oe,
-       f: () => Fe,
-       j: () => Be,
-       l: () => Je,
-       o: () => Ue,
- ... (6 more removed lines; see GitHub link above)
+     var wW = OW(35114);
```

#### 7. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L60-L69` → after: `L43-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L43-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L43-L72) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L60-L69)

```diff
-     function be(ee) {
-       return Math.floor(ee).toLocaleString("en-US")
-     }
-     const Me = 2e3,
-       Ke = .005,
-       Ue = .001,
-       Fe = 2,
-       Je = "Fluid Tank",
-       oe = "Coolant Mixer",
-       Re = 144;
+     function tW(WW, iW) {
+       let {
+         width: wW,
+         height: tW,
+         colouring: ZW
+       } = iW;
+       const xW = "normals" === ZW,
+         lW = "depth" === ZW;
+       return new Promise((iW => {
+         try {
+           const AW = (0, NW.h)();
+           if (AW.TZ.Lb) return "screenshot" !== WW || null !== ZW ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void iW()) : void(0, LW.f)(cW(AW), wW, tW).finally(iW);
+           const bW = AW.TZ.engine,
+             jW = AW.TZ.bD(),
+             UW = wW,
+             kW = tW;
+ ... (14 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L71-L73` → after: `L74-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L74-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L74-L229) · [Before (L71-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L71-L73)

```diff
-     function ke(ee) {
-       const ie = ee.split("|")[0];
-       return (0, ye.n)(ie) ? ie === ye.e ? "cryo" : "water" : null
+             function YW() {
+               var WW;
+               KW && (KW = !1, (0, mW.g)(jW.meshes, !1)), null === (WW = SW) || void 0 === WW || WW(), SW = null, MW.forEach((WW => {
+                 const iW = sW.get(WW);
+                 iW && (WW.material = iW)
+               }))
+             }
+             if (xW) {
+               const WW = [],
+                 iW = [];
+               MW.forEach((OW => {
+                 const mW = OW.name.toLowerCase(),
+                   EW = OW.KV().boundingBox.center,
+                   NW = jW.activeCamera.position.subtract(EW).length();
+                 mW.includes("sky") || mW.includes("background") || mW.includes("environment") || NW > 1e3 ? iW.push(OW) : WW.push(OW)
+               })), ZW("devtoolsNormal", AW);
+ ... (140 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L75-L102` → after: `L231-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L231-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L231-L247) · [Before (L75-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L75-L102)

```diff
-     const qe = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 1, 0],
-         [0, -1, 0],
-         [0, 0, 1],
-         [0, 0, -1]
-       ],
-       fe = 63;
- 
-     function Te(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const He = ie ? function(ee, ie, He) {
-         const ye = qe.findIndex((ye => {
-           let [be, Me, Ke] = ye;
-           return be === ee && Me === ie && Ke === He
- ... (12 more removed lines; see GitHub link above)
+     const ZW = new class {
+       constructor() {
+         this.tools = wW.ALL_DEV_TOOLS
+       }
+       downloadScene(WW, iW) {
+         return tW(WW, iW)
+       }
+       async setAmbientLightIntensity(WW) {
+         const {
+           Color3: iW
+         } = await Promise.all([OW.e(264), OW.e(267)]).then((() => OW(38369)));
+         (0, NW.h)().TZ.bD().ambientColor = iW.FromArray([WW, WW, WW])
+       }
+       capturePhoto(WW, iW, OW) {
+         return function(WW, iW, OW, mW) {
+           return (0, LW.d)(cW(WW), iW, OW, mW)
+ ... (1 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L105-L108` → after: `L250-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L250-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L250-L259) · [Before (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L105-L108)

```diff
- 
-     function pe(ee) {
-       return "pipe" === ee || "tank" === ee || "maker" === ee
-     }
+   },
+   42471: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => LW,
+       f: () => cW
+     });
+     var mW = OW(1876);
+     const EW = 33177600,
+       NW = 3e4;
+     let PW = !1;
```

#### 11. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L111-L164` → after: `L262-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L262-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L262-L295) · [Before (L111-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L111-L164)

```diff
-       return 0 !== (ee.faces & 1 << He) && 0 !== (ie.faces & 1 << (1 ^ He)) && (pe(ee.kind) || pe(ie.kind))
-     }
-     const ze = (ee, ie, He, ye) => ({
-         input: ee,
-         inputAmount: ye,
-         output: ie,
-         outputAmount: He
-       }),
-       Be = {
-         Condenser: {
-           kind: "Condenser",
-           opMs: 2e3,
-           inputSlot: null,
-           fuelSlot: null,
-           outputSlots: [],
-           recipes: [],
- ... (38 more removed lines; see GitHub link above)
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const {
+         scale: LW = 1,
+         type: cW = "image/png",
+         quality: wW
+       } = mW;
+       return WW.KZ() ? PW ? Promise.reject(new Error("A screenshot is already being taken")) : (PW = !0, new Promise(((mW, tW) => {
+         let ZW, xW = 2,
+           lW = null;
+         const AW = () => {
+           var iW;
+           PW = !1, null === (iW = lW) || void 0 === iW || iW(), clearTimeout(ZW);
+           try {
+             WW.restoreSize()
+           } catch (OW) {
+             console.error("A screenshot couldn't size the canvas back", OW)
+ ... (18 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L166-L169` → after: `L297-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L297-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L297-L318) · [Before (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L166-L169)

```diff
-       };
- 
-     function Ee(ee, ie) {
-       return 1e3 * (null !== ie && void 0 !== ie ? ie : 0) / ee.opMs
+         lW = WW.onFrameDrawn((() => {
+           if (xW--, xW > 0) return;
+           const {
+             canvas: iW
+           } = WW, OW = {
+             width: iW.width,
+             height: iW.height
+           };
+           try {
+             iW.toBlob((WW => {
+               WW ? mW({
+                 blob: WW,
+                 ...OW
+               }) : tW(new Error("The canvas gave no image"))
+             }), cW, wW)
+           } catch (bW) {
+ ... (6 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L171-L175` → after: `L320-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L320-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L320-L326) · [Before (L171-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L171-L175)

```diff
- 
-     function ge(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       const He = Ee(Be["Coolant Mixer"], Re) * ie;
-       return ee <= 0 ? 0 : Math.ceil(ee / He - 1e-9)
+     async function cW(WW, iW, OW) {
+       try {
+         const EW = await LW(WW, iW, OW);
+         (0, mW.e)(EW.blob, `bloxd-screenshot-${EW.width}x${EW.height}-${Date.now()}.png`)
+       } catch (EW) {
+         console.error("Error taking screenshot:", EW)
+       }
```

#### 14. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L181` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L329) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L181)

```diff
-   39208: (ee, ie, He) => {
+   38626: (WW, iW, OW) => {
```

#### 15. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L183-L184` → after: `L331-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L331-L333) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L183-L184)

```diff
-       b: () => Ve,
-       e: () => ae
+       d: () => wW,
+       g: () => LW,
+       i: () => PW
```

#### 16. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L186-L209` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L335-L337) · [Before (L186-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L186-L209)

```diff
-     var ye = He(9961),
-       be = He(1e4);
-     const Me = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1],
-       [0, 1, 0],
-       [0, -1, 0]
-     ];
-     var Ke = He(10012),
-       Ue = He(39031),
-       Fe = He(10008);
-     const Je = {
-       1: [0, -1],
-       2: [-1, 0],
- ... (8 more removed lines; see GitHub link above)
+     var mW = OW(38623),
+       EW = OW(38631);
+     let NW = 0;
```

#### 17. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L212` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L340-L343) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L212)

```diff
-       return ee[0] === ie[0] && ee[1] === ie[1]
+       const OW = WW;
+       OW._noaFaceGroups = null !== iW && void 0 !== iW ? iW : null, OW._noaFaceEpoch = -1, OW._noaFaceMask = -1, OW._noaFaceCount = -1, OW._noaFaceMaterial = null;
+       const mW = WW.hY;
+       mW && 1 === mW.length && (mW[0].indexStart = 0, mW[0].indexCount = WW.getTotalIndices())
```

#### 18. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L216` → after: `L347-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L347-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L347-L353) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L216)

```diff
-       return ee[0] * ie[0] + ee[1] * ie[1] === 0
+       if (iW) {
+         NW++;
+         for (const iW of WW) {
+           const WW = iW._noaFaceGroups;
+           WW && PW(iW, WW)
+         }
+       } else NW = Math.max(0, NW - 1)
```

#### 19. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L226-L227` → after: `L356-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L356-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/269.js#L356-L364) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/269.js#L226-L227)

```diff
-     function Te(ee, ie, He, ye, be) {
-       return ie < fe.o || ie >= fe.o + fe.p || Math.floor(ee / fe.v) === Math.floor(ye / fe.v) && Math.floor(He / fe.v) === Math.floor(be / fe.v)
+     function cW(WW, iW, OW) {
+       let EW = -1,
+         NW = 0;
+       for (let PW = 0; PW < mW.f; PW++) {
+         const OW = WW[PW],
+           LW = WW[PW + 1];
+         LW > OW && iW & 1 << mW.d[PW] && (EW < 0 && (EW = OW), NW = LW)
+       }
+       return EW < 0 ? (OW[0] = 0, OW[1] = 0, 0) : (OW[0] = EW, OW[1] = NW - EW, NW - EW)
```
