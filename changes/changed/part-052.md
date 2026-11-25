# Changed — Bundle Modifications Report (Part 052 / 138)

- **Updated at**: `2026-11-25T13:06 JST`
- **Part**: `52 / 138` (**441** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 051](part-051.md) · [Part 053 →](part-053.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (igzsf.a0b73a5f → dz8ef.98c5e741 · continued)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (180 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 125. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1702-L1703` → after: `L1702-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1702-L1703) · [Before (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1702-L1703)

```diff
-             tt = tt || this.vI().meshes;
-             const Vt = Ht.d.MinMax(tt);
+             uu = uu || this.hV().meshes;
+             const ju = fu.e.MinMax(uu);
```

#### 126. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1705-L1706` → after: `L1705-L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1705-L1706) · [Before (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1705-L1706)

```diff
-             if (Ot = Math.max(Math.min(Ot, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Ot * this.zoomOnFactor, this.mode === Mt.c.ORTHOGRAPHIC_CAMERA) {
-               const tt = this.vI().Jf().getAspectRatio(this),
+             if (su = Math.max(Math.min(su, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = su * this.zoomOnFactor, this.mode === gu.e.ORTHOGRAPHIC_CAMERA) {
+               const uu = this.hV().wO().getAspectRatio(this),
```

#### 127. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1719-L1720` → after: `L1719-L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1719-L1720) · [Before (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1719-L1720)

```diff
-               const Ot = tt || this.vI().meshes;
-               et = Ht.d.MinMax(Ot), Vt = mt.n.Distance(et.min, et.max)
+               const su = uu || this.hV().meshes;
+               Eu = fu.e.MinMax(su), ju = Xu.t.Distance(Eu.min, Eu.max)
```

#### 128. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1724` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1724)

```diff
-             this.aT = Ht.d.Center(et), Ot || (this.maxZ = 2 * Vt)
+             this.bR = fu.e.Center(Eu), su || (this.maxZ = 2 * ju)
```

#### 129. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1729-L1733` → after: `L1729-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1729-L1733) · [Before (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1729-L1733)

```diff
-               case Mt.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case Mt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case Mt.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case Mt.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case Mt.c.RIG_MODE_VR:
+               case gu.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case gu.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case gu.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case gu.e.RIG_MODE_VR:
```

#### 130. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1736)

```diff
-               case Mt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 131. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1739)

```diff
-             const qt = new tt(et, this.alpha + Ot, this.beta, this.radius, this.aT, this.vI());
+             const Uu = new uu(Eu, this.alpha + su, this.beta, this.radius, this.bR, this.hV());
```

#### 132. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1746-L1750` → after: `L1746-L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1746-L1750) · [Before (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1746-L1750)

```diff
-               case Mt.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case Mt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case Mt.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case Mt.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case Mt.c.RIG_MODE_VR:
+               case gu.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case gu.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case gu.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case gu.e.RIG_MODE_VR:
```

#### 133. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1753)

```diff
-               case Mt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 134. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1760-L1761` → after: `L1760-L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1760-L1761) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1760-L1761)

```diff
-             const Ot = mt.n.Distance(tt, et),
-               qt = this.vI().Jf().getAspectRatio(this),
+             const su = Xu.t.Distance(uu, Eu),
+               Uu = this.hV().wO().getAspectRatio(this),
```

#### 135. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1777)

```diff
-           et = [(0, qt.P)()], Vt = [(0, qt.P)()], jt = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.M)("target")], ft = [(0, qt.B)("targetHost")], wt = [(0, qt.P)()], Jt = [(0, qt.P)()], ut = [(0, qt.P)()], Kt = [(0, qt.P)()], ht = [(0, qt.P)()], vt = [(0, qt.P)()], Wt = [(0,  … [truncated]
+           Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], qu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.A)("target")], Ou = [(0, Uu.u)("targetHost")], Yu = [(0, Uu.E)()], eu = [(0, Uu.E)()], pu = [(0, Uu.E)()], wu = [(0, Uu.E)()], Ju = [(0, Uu.E)()], du = [(0, Uu.E)()], au = [(0,  … [truncated]
```

#### 136. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1787)

```diff
-           }, null, xt), (0, Ot.l)(tt, null, Jt, {
+           }, null, Hu), (0, su.e)(uu, null, eu, {
```

#### 137. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1797)

```diff
-           }, null, xt), (0, Ot.l)(tt, null, ut, {
+           }, null, Hu), (0, su.e)(uu, null, pu, {
```

#### 138. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1807)

```diff
-           }, null, xt), (0, Ot.l)(tt, null, Gt, {
+           }, null, Hu), (0, su.e)(uu, null, iu, {
```

#### 139. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1817` → after: `L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1817) · [Before (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1817)

```diff
-           }, null, xt), (0, Ot.l)(tt, null, rt, {
+           }, null, Hu), (0, su.e)(uu, null, Iu, {
```

#### 140. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1827` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1827) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1827)

```diff
-           }, null, xt), (0, Ot.l)(null, null, et, {
+           }, null, Hu), (0, su.e)(null, null, Eu, {
```

#### 141. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1840)

```diff
-           }, Tt, gt), (0, Ot.l)(null, null, Vt, {
+           }, Au, nu), (0, su.e)(null, null, ju, {
```

#### 142. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1853` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1853) · [Before (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1853)

```diff
-           }, st, nt), (0, Ot.l)(null, null, jt, {
+           }, yu, zu), (0, su.e)(null, null, qu, {
```

#### 143. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1866` → after: `L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1866) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1866)

```diff
-           }, te, ee), (0, Ot.l)(null, null, Xt, {
+           }, Ru, uE), (0, su.e)(null, null, Cu, {
```

#### 144. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1879)

```diff
-           }, Ve, Oe), (0, Ot.l)(null, null, Qt, {
+           }, EE, jE), (0, su.e)(null, null, bu, {
```

#### 145. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1881)

```diff
-             name: "aT",
+             name: "bR",
```

#### 146. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1885-L1886` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1885-L1886) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1885-L1886)

```diff
-               has: tt => "aT" in tt,
-               get: tt => tt.aT,
+               has: uu => "bR" in uu,
+               get: uu => uu.bR,
```

#### 147. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1888)

```diff
-                 tt.aT = et
+                 uu.bR = Eu
```

#### 148. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1892` → after: `L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1892) · [Before (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1892)

```diff
-           }, qe, De), (0, Ot.l)(null, null, ft, {
+           }, sE, UE), (0, su.e)(null, null, Ou, {
```

#### 149. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1905` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1905) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1905)

```diff
-           }, me, de), (0, Ot.l)(null, null, Kt, {
+           }, ZE, XE), (0, su.e)(null, null, wu, {
```

#### 150. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1918)

```diff
-           }, je, He), (0, Ot.l)(null, null, ht, {
+           }, lE, qE), (0, su.e)(null, null, Ju, {
```

#### 151. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1931` → after: `L1931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1931) · [Before (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1931)

```diff
-           }, Xe, Qe), (0, Ot.l)(null, null, vt, {
+           }, fE, CE), (0, su.e)(null, null, du, {
```

#### 152. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1944` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1944) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1944)

```diff
-           }, le, Ee), (0, Ot.l)(null, null, Wt, {
+           }, bE, cE), (0, su.e)(null, null, au, {
```

#### 153. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1957)

```diff
-           }, fe, we), (0, Ot.l)(null, null, St, {
+           }, NE, OE), (0, su.e)(null, null, Pu, {
```

#### 154. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1970)

```diff
-           }, ye, Ne), (0, Ot.l)(null, null, ct, {
+           }, YE, hE), (0, su.e)(null, null, ou, {
```

#### 155. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1983` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1983) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1983)

```diff
-           }, ae, Me), (0, Ot.l)(null, null, Rt, {
+           }, DE, gE), (0, su.e)(null, null, ku, {
```

#### 156. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L1996)

```diff
-           }, be, Je), (0, Ot.l)(null, null, It, {
+           }, ME, eE), (0, su.e)(null, null, mu, {
```

#### 157. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2009` → after: `L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2009) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2009)

```diff
-           }, Ce, ue), (0, Ot.l)(null, null, Pt, {
+           }, GE, pE), (0, su.e)(null, null, vu, {
```

#### 158. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2022)

```diff
-           }, Ke, he), (0, Ot.l)(null, null, Zt, {
+           }, wE, JE), (0, su.e)(null, null, Ku, {
```

#### 159. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2035)

```diff
-           }, ve, We), (0, Ot.l)(null, null, Ft, {
+           }, dE, aE), (0, su.e)(null, null, ru, {
```

#### 160. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2048` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2048) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2048)

```diff
-           }, Se, ce), (0, Ot.l)(null, null, kt, {
+           }, PE, oE), (0, su.e)(null, null, Qu, {
```

#### 161. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2061` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2061) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2061)

```diff
-           }, Re, Ie), (0, Ot.l)(null, null, Ut, {
+           }, kE, mE), (0, su.e)(null, null, Fu, {
```

#### 162. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2074)

```diff
-           }, Pe, Ze), (0, Ot.l)(null, null, At, {
+           }, vE, KE), (0, su.e)(null, null, Bu, {
```

#### 163. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2087)

```diff
-           }, Le, Fe), (0, Ot.l)(null, null, it, {
+           }, VE, rE), (0, su.e)(null, null, Lu, {
```

#### 164. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2100)

```diff
-           }, ke, Ge), (0, Ot.l)(null, null, Yt, {
+           }, QE, iE), (0, su.e)(null, null, tu, {
```

#### 165. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2113)

```diff
-           }, ze, oe), (0, Ot.l)(null, null, Bt, {
+           }, WE, SE), (0, su.e)(null, null, xu, {
```

#### 166. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2135` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2135) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2135)

```diff
-     Ut || (Ut = !0, jt.d.AddNodeConstructor("ArcRotateCamera", ((tt, et) => () => new rt(tt, 0, 0, 1, mt.n.Zero(), et))), (0, Ft.i)("BABYLON.ArcRotateCamera", rt))
+     Fu || (Fu = !0, qu.c.AddNodeConstructor("ArcRotateCamera", ((uu, Eu) => () => new Iu(uu, 0, 0, 1, Xu.t.Zero(), Eu))), (0, ru.f)("BABYLON.ArcRotateCamera", Iu))
```

#### 167. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2137)

```diff
-   40433: (tt, et, Vt) => {
+   40503: (uu, Eu, ju) => {
```

#### 168. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2139)

```diff
-       c: () => Ot.b
+       c: () => su.e
```

#### 169. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2141` → after: `L2141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2141) · [Before (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2141)

```diff
-     var Ot = Vt(40438);
+     var su = ju(40506);
```

#### 170. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2144` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2144) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2144)

```diff
-   40438: (tt, et, Vt) => {
+   40506: (uu, Eu, ju) => {
```

#### 171. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2146)

```diff
-       b: () => Xt,
+       e: () => Cu,
```

#### 172. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2149-L2155` → after: `L2149-L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2149-L2155) · [Before (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2149-L2155)

```diff
-     var Ot = Vt(40211),
-       qt = Vt(40213),
-       Dt = Vt(37336),
-       mt = Vt(37513),
-       dt = Vt(40445),
-       jt = Vt(40415),
-       Ht = Vt(37390);
+     var su = ju(40255),
+       Uu = ju(40258),
+       Zu = ju(37494),
+       Xu = ju(37680),
+       lu = ju(40508),
+       qu = ju(40467),
+       fu = ju(37532);
```

#### 173. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2165)

```diff
-             super(tt, Vt, qt), this.groundColor = (0, Ot.m)(this, Ht, new mt.b(0, 0, 0)), this.direction = ((0, Ot.m)(this, Xt), (0, Ot.m)(this, Qt, void 0)), (0, Ot.m)(this, lt), this.direction = et || Dt.n.Up()
+             super(uu, ju, Uu), this.groundColor = (0, su.g)(this, fu, new Xu.c(0, 0, 0)), this.direction = ((0, su.g)(this, Cu), (0, su.g)(this, bu, void 0)), (0, su.g)(this, cu), this.direction = Eu || Zu.t.Up()
```

#### 174. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2174` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2174) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2174)

```diff
-             return this.direction = Dt.n.Normalize(tt.subtract(Dt.n.Zero())), this.direction
+             return this.direction = Zu.t.Normalize(uu.subtract(Zu.t.Zero())), this.direction
```

#### 175. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2180)

```diff
-             const Vt = Dt.n.Normalize(this.direction);
+             const ju = Zu.t.Normalize(this.direction);
```

#### 176. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2184` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2184) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2184)

```diff
-             const Vt = Dt.n.Normalize(this.direction);
+             const ju = Zu.t.Normalize(this.direction);
```

#### 177. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2188)

```diff
-             return this._worldMatrix || (this._worldMatrix = Dt.c.Identity()), this._worldMatrix
+             return this._worldMatrix || (this._worldMatrix = Zu.e.Identity()), this._worldMatrix
```

#### 178. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2198)

```diff
-           et = [(0, qt.t)()], Vt = [(0, qt.M)()], (0, Ot.l)(null, null, et, {
+           Eu = [(0, Uu.j)()], ju = [(0, Uu.A)()], (0, su.e)(null, null, Eu, {
```

#### 179. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2211)

```diff
-           }, Ht, Xt), (0, Ot.l)(null, null, Vt, {
+           }, fu, Cu), (0, su.e)(null, null, ju, {
```

#### 180. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/264.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/264.js#L2235)

```diff
-       Qt || (Qt = !0, jt.d.AddNodeConstructor("Light_Type_3", ((tt, et) => () => new Xt(tt, Dt.n.Zero(), et))), (0, Ht.i)("BABYLON.HemisphericLight", Xt))
+       bu || (bu = !0, qu.c.AddNodeConstructor("Light_Type_3", ((uu, Eu) => () => new Cu(uu, Zu.t.Zero(), Eu))), (0, fu.f)("BABYLON.HemisphericLight", Cu))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (277 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L4)

```diff
-   40592: (tt, et, Vt) => {
+   40650: (uu, Eu, ju) => {
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L6)

```diff
-       c: () => qt
+       e: () => Uu
```

#### 3. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L8)

```diff
-     var Ot = Vt(40215);
+     var su = ju(40264);
```

#### 4. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L19)

```diff
-           const et = (0, Ot.c)(tt[Symbol.metadata]);
+           const Eu = (0, su.b)(uu[Symbol.metadata]);
```

#### 5. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L32)

```diff
-           tt !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !tt && this.vI ? this._imageProcessingConfiguration = this.v … [truncated]
+           uu !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !uu && this.hV ? this._imageProcessingConfiguration = this.h … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L81)

```diff
-   40463: (tt, et, Vt) => {
+   40535: (uu, Eu, ju) => {
```

#### 7. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L84)

```diff
-       e: () => qt
+       f: () => Uu
```

#### 8. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L86)

```diff
-     var Ot = Vt(40466);
+     var su = ju(40543);
```

#### 9. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L95)

```diff
-     class Dt extends Ot.e {
+     class Zu extends su.c {
```

#### 10. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L101)

```diff
-   40546: (tt, et, Vt) => {
+   40614: (uu, Eu, ju) => {
```

#### 11. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L103)

```diff
-       e: () => Qt
+       b: () => bu
```

#### 12. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L105-L112` → after: `L105-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L105-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L105-L112) · [Before (L105-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L105-L112)

```diff
-     var Ot = Vt(40211),
-       qt = Vt(40474),
-       Dt = Vt(40213),
-       mt = Vt(40525),
-       dt = Vt(40466),
-       jt = Vt(40551),
-       Ht = Vt(40514);
-     class Xt extends dt.e {
+     var su = ju(40255),
+       Uu = ju(40552),
+       Zu = ju(40258),
+       Xu = ju(40598),
+       lu = ju(40543),
+       qu = ju(40622),
+       fu = ju(40592);
+     class Cu extends lu.c {
```

#### 13. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L119)

```diff
-       let Qt, lt, Et, ft, wt, yt, Nt = jt.e,
+       let bu, cu, Nu, Ou, Yu, hu, Du = qu.b,
```

#### 14. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L134)

```diff
-           return (0, Ot.e)(this, et, "f")
+           return (0, su.b)(this, Eu, "f")
```

#### 15. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L137)

```diff
-           (0, Ot.i)(this, et, tt, "f")
+           (0, su.d)(this, Eu, uu, "f")
```

#### 16. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L140) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L140)

```diff
-           return (0, Ot.e)(this, Vt, "f")
+           return (0, su.b)(this, ju, "f")
```

#### 17. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L143)

```diff
-           (0, Ot.i)(this, Vt, tt, "f")
+           (0, su.d)(this, ju, uu, "f")
```

#### 18. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L146)

```diff
-           return (0, Ot.e)(this, dt, "f")
+           return (0, su.b)(this, lu, "f")
```

#### 19. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L149)

```diff
-           (0, Ot.i)(this, dt, tt, "f")
+           (0, su.d)(this, lu, uu, "f")
```

#### 20. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L159)

```diff
-           super(tt, "DetailMap", 140, new Xt, Dt), this._texture = null, et.set(this, (0, Ot.m)(this, Mt, void 0)), this.diffuseBlendLevel = ((0, Ot.m)(this, bt), (0, Ot.m)(this, Jt, 1)), this.roughnessBlendLevel = ((0, Ot.m)(this, Ct), (0, Ot.m)(this, ut, 1)), this.bumpLevel = ( … [truncated]
+           super(uu, "DetailMap", 140, new Cu, Zu), this._texture = null, Eu.set(this, (0, su.g)(this, gu, void 0)), this.diffuseBlendLevel = ((0, su.g)(this, Mu), (0, su.g)(this, eu, 1)), this.roughnessBlendLevel = ((0, su.g)(this, Gu), (0, su.g)(this, pu, 1)), this.bumpLevel = ( … [truncated]
```

#### 21. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L162)

```diff
-           return !this._isEnabled || !(tt._areTexturesDirty && et.texturesEnabled && Vt.getCaps().standardDerivatives && this._texture && mt.e.DetailTextureEnabled && !this._texture.isReady())
+           return !this._isEnabled || !(uu._areTexturesDirty && Eu.texturesEnabled && ju.getCaps().standardDerivatives && this._texture && Xu.d.DetailTextureEnabled && !this._texture.isReady())
```

#### 22. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L167-L168` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L167-L168) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L167-L168)

```diff
-             const Vt = et.Jf();
-             tt._areTexturesDirty && (Vt.getCaps().standardDerivatives && this._texture && mt.e.DetailTextureEnabled && this._isEnabled ? ((0, Ht.ab)(this._texture, tt, "DETAIL"), tt.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : tt.DETAIL = !1)
+             const ju = Eu.wO();
+             uu._areTexturesDirty && (ju.getCaps().standardDerivatives && this._texture && Xu.d.DetailTextureEnabled && this._isEnabled ? ((0, fu.jb)(this._texture, uu, "DETAIL"), uu.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : uu.DETAIL = !1)
```

#### 23. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L174)

```diff
-           tt.useUbo && Vt && tt.isSync || this._texture && mt.e.DetailTextureEnabled && (tt.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Ht.w)(this._texture, tt, "detail")), et.texturesEnabled  … [truncated]
+           uu.useUbo && ju && uu.isSync || this._texture && Xu.d.DetailTextureEnabled && (uu.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, fu.E)(this._texture, uu, "detail")), Eu.texturesEnabled  … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L209)

```diff
-         Qt = [(0, Dt.E)("detailTexture"), (0, Dt.i)("_markAllSubMeshesAsTexturesDirty")], lt = [(0, Dt.P)()], Et = [(0, Dt.P)()], ft = [(0, Dt.P)()], wt = [(0, Dt.P)(), (0, Dt.i)("_markAllSubMeshesAsTexturesDirty")], yt = [(0, Dt.P)(), (0, Dt.i)("_markAllSubMeshesAsTexturesDirty" … [truncated]
+         bu = [(0, Zu.y)("detailTexture"), (0, Zu.e)("_markAllSubMeshesAsTexturesDirty")], cu = [(0, Zu.E)()], Nu = [(0, Zu.E)()], Ou = [(0, Zu.E)()], Yu = [(0, Zu.E)(), (0, Zu.e)("_markAllSubMeshesAsTexturesDirty")], hu = [(0, Zu.E)(), (0, Zu.e)("_markAllSubMeshesAsTexturesDirty" … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L222)

```diff
-         }, Mt, bt), (0, Ot.l)(tt, null, wt, {
+         }, gu, Mu), (0, su.e)(uu, null, Yu, {
```

#### 26. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L235)

```diff
-         }, Wt, St), (0, Ot.l)(tt, null, yt, {
+         }, au, Pu), (0, su.e)(uu, null, hu, {
```

#### 27. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L248)

```diff
-         }, ct, Rt), (0, Ot.l)(null, null, lt, {
+         }, ou, ku), (0, su.e)(null, null, cu, {
```

#### 28. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L261)

```diff
-         }, Jt, Ct), (0, Ot.l)(null, null, Et, {
+         }, eu, Gu), (0, su.e)(null, null, Nu, {
```

#### 29. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L274)

```diff
-         }, ut, Kt), (0, Ot.l)(null, null, ft, {
+         }, pu, wu), (0, su.e)(null, null, Ou, {
```

#### 30. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L296)

```diff
-   40466: (tt, et, Vt) => {
+   40543: (uu, Eu, ju) => {
```

#### 31. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L298)

```diff
-       e: () => Ot
+       c: () => su
```

#### 32. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L395)

```diff
-   40575: (tt, et, Vt) => {
+   40634: (uu, Eu, ju) => {
```

#### 33. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L398)

```diff
-       e: () => mt,
+       d: () => Xu,
```

#### 34. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L401)

```diff
-     var Ot, qt = Vt(37336);
+     var su, Uu = ju(37494);
```

#### 35. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L406)

```diff
-       if (!Number.isInteger(Ot) || Ot < 0 || Ot > Vt) throw new Error(`Invalid geometry object ID ${Ot} for mesh "${tt.name}". Object IDs must be integers between 0 and 0x${Vt.toString(16).toUpperCase()}.`);
+       if (!Number.isInteger(su) || su < 0 || su > ju) throw new Error(`Invalid geometry object ID ${su} for mesh "${uu.name}". Object IDs must be integers between 0 and 0x${ju.toString(16).toUpperCase()}.`);
```

#### 36. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L412)

```diff
-       if (!Number.isInteger(Vt) || Vt < 0 || Vt > 255 || 0 !== Vt && 0 === (63 & Vt)) throw new Error(`Invalid geometry mesh-blending tag ${Vt} for mesh "${tt.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
+       if (!Number.isInteger(ju) || ju < 0 || ju > 255 || 0 !== ju && 0 === (63 & ju)) throw new Error(`Invalid geometry mesh-blending tag ${ju} for mesh "${uu.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
```

#### 37. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L422-L423)

```diff
-           previousViewProjection: qt.c.Zero(),
-           currentViewProjection: qt.c.Zero(),
+           previousViewProjection: Uu.e.Zero(),
+           currentViewProjection: Uu.e.Zero(),
```

#### 38. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L443)

```diff
-           void 0 !== tt && (qt += `#define ${Dt.define}\n#define ${Dt.defineIndex} ${tt}\n`)
+           void 0 !== uu && (Uu += `#define ${Zu.define}\n#define ${Zu.defineIndex} ${uu}\n`)
```

#### 39. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L445)

```diff
-         Ot.objectIdIsRedFormat && (qt += "#define PREPASS_OBJECT_ID_R8\n"), Ot._defines = qt + `#define SCENE_MRT_COUNT ${et.length}\n`
+         su.objectIdIsRedFormat && (Uu += "#define PREPASS_OBJECT_ID_R8\n"), su._defines = Uu + `#define SCENE_MRT_COUNT ${Eu.length}\n`
```

#### 40. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L479-L480` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L479-L480) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L479-L480)

```diff
-           if (Vt.vJ)
-             for (const et of Vt.vJ) et._removeDrawWrapper(tt)
+           if (ju.iG)
+             for (const Eu of ju.iG) Eu._removeDrawWrapper(uu)
```

#### 41. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L500-L501` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L500-L501) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L500-L501)

```diff
-         const Ht = Vt.vI(),
-           Xt = Ht.Jf();
+         const fu = ju.hV(),
+           Cu = fu.wO();
```

#### 42. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L506)

```diff
-           else if (Ot > tt) throw new Error(`Invalid geometry object ID ${Ot} for mesh "${Vt.name}". Object IDs must be integers between 0 and 0x${tt.toString(16).toUpperCase()}.`);
+           else if (su > uu) throw new Error(`Invalid geometry object ID ${su} for mesh "${ju.name}". Object IDs must be integers between 0 and 0x${uu.toString(16).toUpperCase()}.`);
```

#### 43. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L516)

```diff
-           if (tt[Vt.uniqueId] || (tt[Vt.uniqueId] = Ot.clone(), jt.previousWorldMatrices[Vt.uniqueId] = Ot.clone()), qt[Vt.uniqueId] !== Xt.frameId && (jt.previousWorldMatrices[Vt.uniqueId].rK(tt[Vt.uniqueId]), qt[Vt.uniqueId] = Xt.frameId), tt[Vt.uniqueId].rK(Ot), -1 === jt.last … [truncated]
+           if (uu[ju.uniqueId] || (uu[ju.uniqueId] = su.clone(), qu.previousWorldMatrices[ju.uniqueId] = su.clone()), Uu[ju.uniqueId] !== Cu.frameId && (qu.previousWorldMatrices[ju.uniqueId].yJ(uu[ju.uniqueId]), Uu[ju.uniqueId] = Cu.frameId), uu[ju.uniqueId].yJ(su), -1 === qu.last … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L630)

```diff
-   40551: (tt, et, Vt) => {
+   40622: (uu, Eu, ju) => {
```

#### 45. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L632-L633` → after: `L632-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L632-L633) · [Before (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L632-L633)

```diff
-       e: () => lt,
-       h: () => ft
+       b: () => cu,
+       d: () => Ou
```

#### 46. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L635-L638` → after: `L635-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L635-L638) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L635-L638)

```diff
-     var Ot = Vt(40211),
-       qt = Vt(40213),
-       Dt = Vt(40082),
-       mt = Vt(40061);
+     var su = ju(40255),
+       Uu = ju(40258),
+       Zu = ju(40160),
+       Xu = ju(40127);
```

#### 47. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L642)

```diff
-         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = tt, this._scene = tt.vI(), this._engine = this._scene.Jf()
+         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = uu, this._scene = uu.hV(), this._engine = this._scene.wO()
```

#### 48. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L647)

```diff
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !tt.isCompatible(this._material.shaderLanguage)) throw `The plugin "${tt.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
+         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !uu.isCompatible(this._material.shaderLanguage)) throw `The plugin "${uu.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L747)

```diff
-                             tt = `${et.type}f`
+                             uu = `${Eu.type}f`
```

#### 50. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L749-L750` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L749-L750) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L749-L750)

```diff
-                         this._uboDeclaration += Ot > 0 ? `uniform ${et.name}: array<${tt}, ${Ot}>;\n` : `uniform ${et.name}: ${tt};\n`
-                       } else this._uboDeclaration += `${et.type} ${et.name}${Ot>0?`[${Ot}]`:""};\n`
+                         this._uboDeclaration += su > 0 ? `uniform ${Eu.name}: array<${uu}, ${su}>;\n` : `uniform ${Eu.name}: ${uu};\n`
+                       } else this._uboDeclaration += `${Eu.type} ${Eu.name}${su>0?`[${su}]`:""};\n`
```

#### 51. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L790` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L790) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L790)

```diff
-                 LOt: this._engine.LOt,
+                 bsu: this._engine.bsu,
```

#### 52. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L792)

```diff
-               }), jt.isFragment = "fragment" === Vt, (0, Dt.h)(Ht, jt, (tt => Ht = tt))), qt += Ht + "\n")
+               }), qu.isFragment = "fragment" === ju, (0, Zu.l)(fu, qu, (uu => fu = uu))), Uu += fu + "\n")
```

#### 53. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L829-L830)

```diff
-     var Xt = Vt(40230),
-       Qt = Vt(37390);
+     var Cu = ju(40272),
+       bu = ju(37532);
```

#### 54. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L852)

```diff
-             this.name = (0, Ot.m)(this, dt, void 0), this.priority = ((0, Ot.m)(this, Ht), (0, Ot.m)(this, Qt, 500)), this.resolveIncludes = ((0, Ot.m)(this, lt), (0, Ot.m)(this, Et, !1)), this.registerForExtraEvents = ((0, Ot.m)(this, ft), (0, Ot.m)(this, wt, !1)), this.doNotSer … [truncated]
+             this.name = (0, su.g)(this, lu, void 0), this.priority = ((0, su.g)(this, fu), (0, su.g)(this, bu, 500)), this.resolveIncludes = ((0, su.g)(this, cu), (0, su.g)(this, Nu, !1)), this.registerForExtraEvents = ((0, su.g)(this, Ou), (0, su.g)(this, Yu, !1)), this.doNotSer … [truncated]
```

#### 55. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L900)

```diff
-             Xt.d.Clone((() => tt), this)
+             Cu.e.Clone((() => uu), this)
```

#### 56. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L903)

```diff
-             return Xt.d.Serialize(this)
+             return Cu.e.Serialize(this)
```

#### 57. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L906)

```diff
-             Xt.d.Parse((() => this), tt, et, Vt)
+             Cu.e.Parse((() => this), uu, Eu, ju)
```

#### 58. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L910)

```diff
-           et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], mt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
+           Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], Xu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
```

#### 59. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L923)

```diff
-           }, dt, Ht), (0, Ot.l)(null, null, Vt, {
+           }, lu, fu), (0, su.e)(null, null, ju, {
```

#### 60. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L936)

```diff
-           }, Qt, lt), (0, Ot.l)(null, null, Dt, {
+           }, bu, cu), (0, su.e)(null, null, Zu, {
```

#### 61. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L949)

```diff
-           }, Et, ft), (0, Ot.l)(null, null, mt, {
+           }, Nu, Ou), (0, su.e)(null, null, Xu, {
```

#### 62. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L973)

```diff
-       Et || (Et = !0, (0, Qt.i)("BABYLON.MaterialPluginBase", lt))
+       Nu || (Nu = !0, (0, bu.f)("BABYLON.MaterialPluginBase", cu))
```

#### 63. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L976)

```diff
-   40461: (tt, et, Vt) => {
+   40529: (uu, Eu, ju) => {
```

#### 64. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L978)

```diff
-       b: () => Ot
+       e: () => su
```

#### 65. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L991-L992` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L991-L992) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L991-L992)

```diff
-           const qt = et.Jf();
-           this.currentViewProjection.updateFlag !== et.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = qt.frameId, this.previousViewProjection.rK(this.currentViewProjection), this.currentViewProjection.rK(et.getTransformMatrix())) : this._lastUpdateFrameId !== qt.fra … [truncated]
+           const Uu = Eu.wO();
+           this.currentViewProjection.updateFlag !== Eu.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Uu.frameId, this.previousViewProjection.yJ(this.currentViewProjection), this.currentViewProjection.yJ(Eu.getTransformMatrix())) : this._lastUpdateFrameId !== Uu.fra … [truncated]
```

#### 66. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L997)

```diff
-   40587: (tt, et, Vt) => {
+   40648: (uu, Eu, ju) => {
```

#### 67. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1009)

```diff
-   40452: (tt, et, Vt) => {
+   40514: (uu, Eu, ju) => {
```

#### 68. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1011)

```diff
-       StandardMaterial: () => Ot.d
+       StandardMaterial: () => su.e
```

#### 69. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1013-L1014` → after: `L1013-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1013-L1014) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1013-L1014)

```diff
-     var Ot = Vt(40456);
-     (0, Ot.b)()
+     var su = ju(40522);
+     (0, su.c)()
```

#### 70. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1016)

```diff
-   40456: (tt, et, Vt) => {
+   40522: (uu, Eu, ju) => {
```

#### 71. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1018-L1019` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1018-L1019) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1018-L1019)

```diff
-       b: () => kt,
-       d: () => Lt
+       c: () => Qu,
+       e: () => Vu
```

#### 72. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1021-L1043` → after: `L1021-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1021-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1021-L1037) · [Before (L1021-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1021-L1043)

```diff
-     var Ot = Vt(40211),
-       qt = Vt(40213),
-       Dt = Vt(40311),
-       mt = Vt(40296),
-       dt = Vt(37513),
-       jt = Vt(40343),
-       Ht = Vt(40461),
-       Xt = Vt(40463),
-       Qt = Vt(40313),
-       lt = Vt(40474),
-       Et = Vt(40466),
-       ft = Vt(40531),
-       wt = Vt(40525),
-       yt = Vt(40540),
-       Nt = Vt(40546),
-       Mt = Vt(40520),
- ... (7 more removed lines; see GitHub link above)
+     var su = ju(40255),
+       Uu = ju(40258),
+       Zu = ju(40366),
+       Xu = ju(40350),
+       lu = ju(37680),
+       qu = ju(40399),
+       fu = ju(40529),
+       Cu = ju(40535),
+       bu = ju(40373),
+       cu = ju(40552),
+       Nu = ju(40543),
+       Ou = ju(40604),
+       Yu = ju(40598),
+       hu = ju(40610),
+       Du = ju(40614),
+       gu = ju(40596),
+ ... (1 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1045-L1046` → after: `L1039-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1039-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1039-L1046) · [Before (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1045-L1046)

```diff
-       St = Vt(37390),
-       ct = Vt(40080);
+       Gu = ju(40272),
+       pu = ju(40628),
+       wu = ju(40634),
+       Ju = ju(40640),
+       du = ju(40648),
+       au = ju(40650),
+       Pu = ju(37532),
+       ou = ju(40153);
```

#### 74. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1051-L1052` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1051-L1052) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1051-L1052)

```diff
-     class It extends((0, vt.b)((0, ht.e)(Et.e))) {}
-     class Pt extends((0, Xt.e)(It)) {
+     class mu extends((0, du.b)((0, Ju.c)(Nu.c))) {}
+     class vu extends((0, Cu.f)(mu)) {
```

#### 75. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1057` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1057) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1057)

```diff
-     class Zt extends((0, Wt.c)(ft.e)) {}
+     class Ku extends((0, au.e)(Ou.c)) {}
```

#### 76. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1111` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1111) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1111)

```diff
-           hO = [],
+           as = [],
```

#### 77. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1209` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1209) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1209)

```diff
-             return (0, Ot.e)(this, et, "f")
+             return (0, su.b)(this, Eu, "f")
```

#### 78. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1212` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1212) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1212)

```diff
-             (0, Ot.i)(this, et, tt, "f")
+             (0, su.d)(this, Eu, uu, "f")
```

#### 79. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1215` → after: `L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1215) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1215)

```diff
-             return (0, Ot.e)(this, Xt, "f")
+             return (0, su.b)(this, Cu, "f")
```

#### 80. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1218)

```diff
-             (0, Ot.i)(this, Xt, tt, "f")
+             (0, su.d)(this, Cu, uu, "f")
```

#### 81. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1221)

```diff
-             return (0, Ot.e)(this, Et, "f")
+             return (0, su.b)(this, Nu, "f")
```

#### 82. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1224` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1224) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1224)

```diff
-             (0, Ot.i)(this, Et, tt, "f")
+             (0, su.d)(this, Nu, uu, "f")
```

#### 83. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1227)

```diff
-             return (0, Ot.e)(this, ht, "f")
+             return (0, su.b)(this, Ju, "f")
```

#### 84. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1230` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1230) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1230)

```diff
-             (0, Ot.i)(this, ht, tt, "f")
+             (0, su.d)(this, Ju, uu, "f")
```

#### 85. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1233` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1233) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1233)

```diff
-             return (0, Ot.e)(this, vt, "f")
+             return (0, su.b)(this, du, "f")
```

#### 86. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1236)

```diff
-             (0, Ot.i)(this, vt, tt, "f")
+             (0, su.d)(this, du, uu, "f")
```

#### 87. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1239)

```diff
-             return (0, Ot.e)(this, Wt, "f")
+             return (0, su.b)(this, au, "f")
```

#### 88. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1242` → after: `L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1242) · [Before (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1242)

```diff
-             (0, Ot.i)(this, Wt, tt, "f")
+             (0, su.d)(this, au, uu, "f")
```

#### 89. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1245)

```diff
-             return (0, Ot.e)(this, St, "f")
+             return (0, su.b)(this, Pu, "f")
```

#### 90. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1248` → after: `L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1248) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1248)

```diff
-             (0, Ot.i)(this, St, tt, "f")
+             (0, su.d)(this, Pu, uu, "f")
```

#### 91. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1251)

```diff
-             return (0, Ot.e)(this, ct, "f")
+             return (0, su.b)(this, ou, "f")
```

#### 92. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1254)

```diff
-             (0, Ot.i)(this, ct, tt, "f")
+             (0, su.d)(this, ou, uu, "f")
```

#### 93. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1257)

```diff
-             return (0, Ot.e)(this, It, "f")
+             return (0, su.b)(this, mu, "f")
```

#### 94. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1260)

```diff
-             (0, Ot.i)(this, It, tt, "f")
+             (0, su.d)(this, mu, uu, "f")
```

#### 95. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1263` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1263) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1263)

```diff
-             return (0, Ot.e)(this, Lt, "f")
+             return (0, su.b)(this, Vu, "f")
```

#### 96. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1266)

```diff
-             (0, Ot.i)(this, Lt, tt, "f")
+             (0, su.d)(this, Vu, uu, "f")
```

#### 97. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1269` → after: `L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1269) · [Before (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1269)

```diff
-             return (0, Ot.e)(this, Ft, "f")
+             return (0, su.b)(this, ru, "f")
```

#### 98. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1272` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1272) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1272)

```diff
-             (0, Ot.i)(this, Ft, tt, "f")
+             (0, su.d)(this, ru, uu, "f")
```

#### 99. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1275` → after: `L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1275) · [Before (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1275)

```diff
-             return (0, Ot.e)(this, kt, "f")
+             return (0, su.b)(this, Qu, "f")
```

#### 100. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1278` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1278) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1278)

```diff
-             (0, Ot.i)(this, kt, tt, "f")
+             (0, su.d)(this, Qu, uu, "f")
```

#### 101. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1281)

```diff
-             return (0, Ot.e)(this, Gt, "f")
+             return (0, su.b)(this, iu, "f")
```

#### 102. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1284)

```diff
-             (0, Ot.i)(this, Gt, tt, "f")
+             (0, su.d)(this, iu, uu, "f")
```

#### 103. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1287` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1287) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1287)

```diff
-             return (0, Ot.e)(this, zt, "f")
+             return (0, su.b)(this, Wu, "f")
```

#### 104. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1290` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1290) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1290)

```diff
-             (0, Ot.i)(this, zt, tt, "f")
+             (0, su.d)(this, Wu, uu, "f")
```

#### 105. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1293` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1293) · [Before (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1293)

```diff
-             return (0, Ot.e)(this, ot, "f")
+             return (0, su.b)(this, Su, "f")
```

#### 106. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1296)

```diff
-             (0, Ot.i)(this, ot, tt, "f")
+             (0, su.d)(this, Su, uu, "f")
```

#### 107. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1299)

```diff
-             return (0, Ot.e)(this, rt, "f")
+             return (0, su.b)(this, Iu, "f")
```

#### 108. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1302)

```diff
-             (0, Ot.i)(this, rt, tt, "f")
+             (0, su.d)(this, Iu, uu, "f")
```

#### 109. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1305)

```diff
-             return (0, Ot.e)(this, Ut, "f")
+             return (0, su.b)(this, Fu, "f")
```

#### 110. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1308` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1308) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1308)

```diff
-             (0, Ot.i)(this, Ut, tt, "f")
+             (0, su.d)(this, Fu, uu, "f")
```

#### 111. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1311)

```diff
-             return (0, Ot.e)(this, At, "f")
+             return (0, su.b)(this, Bu, "f")
```

#### 112. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1314)

```diff
-             (0, Ot.i)(this, At, tt, "f")
+             (0, su.d)(this, Bu, uu, "f")
```

#### 113. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1317)

```diff
-             return (0, Ot.e)(this, it, "f")
+             return (0, su.b)(this, Lu, "f")
```

#### 114. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1320` → after: `L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1320) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1320)

```diff
-             (0, Ot.i)(this, it, tt, "f")
+             (0, su.d)(this, Lu, uu, "f")
```

#### 115. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1323` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1323) · [Before (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1323)

```diff
-             return (0, Ot.e)(this, Yt, "f")
+             return (0, su.b)(this, tu, "f")
```

#### 116. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1326)

```diff
-             (0, Ot.i)(this, Yt, tt, "f")
+             (0, su.d)(this, tu, uu, "f")
```

#### 117. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1329)

```diff
-             return (0, Ot.e)(this, Bt, "f")
+             return (0, su.b)(this, xu, "f")
```

#### 118. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1332)

```diff
-             (0, Ot.i)(this, Bt, tt, "f")
+             (0, su.d)(this, xu, uu, "f")
```

#### 119. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1335)

```diff
-             return (0, Ot.e)(this, pt, "f")
+             return (0, su.b)(this, Tu, "f")
```

#### 120. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1338)

```diff
-             (0, Ot.i)(this, pt, tt, "f")
+             (0, su.d)(this, Tu, uu, "f")
```

#### 121. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1341)

```diff
-             return (0, Ot.e)(this, xt, "f")
+             return (0, su.b)(this, Hu, "f")
```

#### 122. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1344)

```diff
-             (0, Ot.i)(this, xt, tt, "f")
+             (0, su.d)(this, Hu, uu, "f")
```

#### 123. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1347` → after: `L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1347) · [Before (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1347)

```diff
-             return (0, Ot.e)(this, Tt, "f")
+             return (0, su.b)(this, Au, "f")
```

#### 124. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1350)

```diff
-             (0, Ot.i)(this, Tt, tt, "f")
+             (0, su.d)(this, Au, uu, "f")
```

#### 125. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1353` → after: `L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1353) · [Before (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1353)

```diff
-             return (0, Ot.e)(this, gt, "f")
+             return (0, su.b)(this, nu, "f")
```

#### 126. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1356)

```diff
-             (0, Ot.i)(this, gt, tt, "f")
+             (0, su.d)(this, nu, uu, "f")
```

#### 127. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1359)

```diff
-             return (0, Ot.e)(this, st, "f")
+             return (0, su.b)(this, yu, "f")
```

#### 128. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1362)

```diff
-             (0, Ot.i)(this, st, tt, "f")
+             (0, su.d)(this, yu, uu, "f")
```

#### 129. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1365` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1365) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1365)

```diff
-             return (0, Ot.e)(this, nt, "f")
+             return (0, su.b)(this, zu, "f")
```

#### 130. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1368)

```diff
-             (0, Ot.i)(this, nt, tt, "f")
+             (0, su.d)(this, zu, uu, "f")
```

#### 131. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1371` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1371) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1371)

```diff
-             return (0, Ot.e)(this, te, "f")
+             return (0, su.b)(this, Ru, "f")
```

#### 132. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1374)

```diff
-             (0, Ot.i)(this, te, tt, "f")
+             (0, su.d)(this, Ru, uu, "f")
```

#### 133. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1377` → after: `L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1377) · [Before (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1377)

```diff
-             return (0, Ot.e)(this, ee, "f")
+             return (0, su.b)(this, uE, "f")
```

#### 134. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1380)

```diff
-             (0, Ot.i)(this, ee, tt, "f")
+             (0, su.d)(this, uE, uu, "f")
```

#### 135. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1383` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1383) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1383)

```diff
-             return (0, Ot.e)(this, Ve, "f")
+             return (0, su.b)(this, EE, "f")
```

#### 136. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1386)

```diff
-             (0, Ot.i)(this, Ve, tt, "f")
+             (0, su.d)(this, EE, uu, "f")
```

#### 137. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1389` → after: `L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1389) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1389)

```diff
-             return (0, Ot.e)(this, Oe, "f")
+             return (0, su.b)(this, jE, "f")
```

#### 138. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1392` → after: `L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1392) · [Before (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1392)

```diff
-             (0, Ot.i)(this, Oe, tt, "f")
+             (0, su.d)(this, jE, uu, "f")
```

#### 139. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1395)

```diff
-             return (0, Ot.e)(this, qe, "f")
+             return (0, su.b)(this, sE, "f")
```

#### 140. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1398` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1398) · [Before (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1398)

```diff
-             (0, Ot.i)(this, qe, tt, "f")
+             (0, su.d)(this, sE, uu, "f")
```

#### 141. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1407` → after: `L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1407) · [Before (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1407)

```diff
-             super(Vt, qt, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || tt.ForceGLSL), this._diffuseTexture = (0, Ot.m)(this, WV, null), et.set(this, ((0, Ot.m)(this, SV), (0, Ot.m)(this, cV, void 0))), this._ambientTexture = ((0, Ot.m)(this, RV), (0, … [truncated]
+             super(ju, Uu, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || uu.ForceGLSL), this._diffuseTexture = (0, su.g)(this, aj, null), Eu.set(this, ((0, su.g)(this, Pj), (0, su.g)(this, oj, void 0))), this._ambientTexture = ((0, su.g)(this, kj), (0, … [truncated]
```

#### 142. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1419` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1419) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1419)

```diff
-             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === lt.c.MATERIAL_ALPHATEST)
+             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === cu.b.MATERIAL_ALPHATEST)
```

#### 143. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1422)

```diff
-             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== lt.c.MATERIAL_OPAQUE
+             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== cu.b.MATERIAL_OPAQUE
```

#### 144. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1436)

```diff
-             const Dt = this.vI(),
+             const Zu = this.hV(),
```

#### 145. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1439-L1443` → after: `L1439-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1439-L1443) · [Before (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1439-L1443)

```diff
-             const dt = Dt.Jf();
-             if (mt._needNormals = (0, Jt.Y)(Dt, et, mt, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Jt.e)(Dt, et, this._maxSimultaneousLights, this._disableLighting)) return !1;
-             (0, Jt.gb)(Dt, mt);
-             const Xt = this.needAlphaBlendingForMesh(et) && this.vI().useOrderIndependentTransparency;
-             if ((0, Jt.jb)(Dt, mt, this.canRenderToMRT && !Xt), (0, Jt.ib)(Dt, mt, Xt), Kt.c.PrepareDefines(dt.currentRenderPassId, et, mt), mt._areTexturesDirty) {
+             const lu = Zu.wO();
+             if (Xu._needNormals = (0, eu.fb)(Zu, Eu, Xu, !0, this._maxSimultaneousLights, this._disableLighting), !(0, eu.d)(Zu, Eu, this._maxSimultaneousLights, this._disableLighting)) return !1;
+             (0, eu.lb)(Zu, Xu);
+             const Cu = this.needAlphaBlendingForMesh(Eu) && this.hV().useOrderIndependentTransparency;
+             if ((0, eu.qb)(Zu, Xu, this.canRenderToMRT && !Cu), (0, eu.mb)(Zu, Xu, Cu), wu.c.PrepareDefines(lu.currentRenderPassId, Eu, Xu), Xu._areTexturesDirty) {
```

#### 146. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1449)

```diff
-                   (0, Jt.ab)(this._diffuseTexture, mt, "DIFFUSE")
+                   (0, eu.jb)(this._diffuseTexture, Xu, "DIFFUSE")
```

#### 147. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1453` → after: `L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1453) · [Before (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1453)

```diff
-                   (0, Jt.ab)(this._ambientTexture, mt, "AMBIENT")
+                   (0, eu.jb)(this._ambientTexture, Xu, "AMBIENT")
```

#### 148. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1457` → after: `L1457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1457) · [Before (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1457)

```diff
-                   (0, Jt.ab)(this._opacityTexture, mt, "OPACITY"), mt.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
+                   (0, eu.jb)(this._opacityTexture, Xu, "OPACITY"), Xu.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
```

#### 149. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1459)

```diff
-                 if (this._reflectionTexture && tt.ReflectionTextureEnabled ? (mt.ROUGHNESS = this._roughness > 0, mt.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (mt.ROUGHNESS = !1, mt.REFLECTIONOVERALPHA = !1), !(0, Jt.X)(Dt, this._reflectionTexture, mt)) return !1;
+                 if (this._reflectionTexture && uu.ReflectionTextureEnabled ? (Xu.ROUGHNESS = this._roughness > 0, Xu.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Xu.ROUGHNESS = !1, Xu.REFLECTIONOVERALPHA = !1), !(0, eu.eb)(Zu, this._reflectionTexture, Xu)) return !1;
```

#### 150. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1462)

```diff
-                   (0, Jt.ab)(this._emissiveTexture, mt, "EMISSIVE")
+                   (0, eu.jb)(this._emissiveTexture, Xu, "EMISSIVE")
```

#### 151. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1466` → after: `L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1466) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1466)

```diff
-                   (0, Jt.ab)(this._lightmapTexture, mt, "LIGHTMAP"), mt.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, mt.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
+                   (0, eu.jb)(this._lightmapTexture, Xu, "LIGHTMAP"), Xu.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Xu.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
```

#### 152. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1470)

```diff
-                   (0, Jt.ab)(this._specularTexture, mt, "SPECULAR"), mt.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
+                   (0, eu.jb)(this._specularTexture, Xu, "SPECULAR"), Xu.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
```

#### 153. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1472)

```diff
-                 if (Dt.Jf().getCaps().standardDerivatives && this._bumpTexture && tt.BumpTextureEnabled) {
+                 if (Zu.wO().getCaps().standardDerivatives && this._bumpTexture && uu.BumpTextureEnabled) {
```

#### 154. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1474)

```diff
-                   (0, Jt.ab)(this._bumpTexture, mt, "BUMP"), mt.PARALLAX = this._useParallax, mt.PARALLAX_RHS = Dt.useRightHandedSystem, mt.PARALLAXOCCLUSION = this._useParallaxOcclusion, mt.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
+                   (0, eu.jb)(this._bumpTexture, Xu, "BUMP"), Xu.PARALLAX = this._useParallax, Xu.PARALLAX_RHS = Zu.useRightHandedSystem, Xu.PARALLAXOCCLUSION = this._useParallaxOcclusion, Xu.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
```

#### 155. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1492)

```diff
-             (0, Jt.eb)(et, Dt, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(et), mt, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Vt.getRenderingMesh(), this._isVertexOutputInvariant), (0, Jt.V)(Dt, dt, this, mt, Ot, nul … [truncated]
+             (0, eu.kb)(Eu, Zu, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Eu), Xu, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ju.getRenderingMesh(), this._isVertexOutputInvariant), (0, eu.ab)(Zu, lu, this, Xu, su, nu … [truncated]
```

#### 156. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1497-L1502` → after: `L1497-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1497-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1497-L1502) · [Before (L1497-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1497-L1502)

```diff
-               const qt = new yt.b;
-               mt.REFLECTION && qt.addFallback(0, "REFLECTION"), mt.SPECULAR && qt.addFallback(0, "SPECULAR"), mt.BUMP && qt.addFallback(0, "BUMP"), mt.PARALLAX && qt.addFallback(1, "PARALLAX"), mt.PARALLAX_RHS && qt.addFallback(1, "PARALLAX_RHS"), mt.PARALLAXOCCLUSION && qt.addFa … [truncated]
-               const Xt = [jt.m.PositionKind];
-               mt.NORMAL && Xt.push(jt.m.NormalKind), mt.TANGENT && Xt.push(jt.m.TangentKind);
-               for (let tt = 1; tt <= 6; ++tt) mt["UV" + tt] && Xt.push(`uv${1===tt?"":tt}`);
-               mt.VERTEXCOLOR && Xt.push(jt.m.ColorKind), (0, Jt.H)(Xt, et, mt, qt), (0, Jt.L)(Xt, mt), (0, Jt.M)(Xt, et, mt), (0, Jt.D)(Xt, et, mt);
+               const Uu = new hu.e;
+               Xu.REFLECTION && Uu.addFallback(0, "REFLECTION"), Xu.SPECULAR && Uu.addFallback(0, "SPECULAR"), Xu.BUMP && Uu.addFallback(0, "BUMP"), Xu.PARALLAX && Uu.addFallback(1, "PARALLAX"), Xu.PARALLAX_RHS && Uu.addFallback(1, "PARALLAX_RHS"), Xu.PARALLAXOCCLUSION && Uu.addFa … [truncated]
+               const Cu = [qu.j.PositionKind];
+               Xu.NORMAL && Cu.push(qu.j.NormalKind), Xu.TANGENT && Cu.push(qu.j.TangentKind);
+               for (let uu = 1; uu <= 6; ++uu) Xu["UV" + uu] && Cu.push(`uv${1===uu?"":uu}`);
+               Xu.VERTEXCOLOR && Cu.push(qu.j.ColorKind), (0, eu.P)(Cu, Eu, Xu, Uu), (0, eu.S)(Cu, Xu), (0, eu.U)(Cu, Eu, Xu), (0, eu.L)(Cu, Eu, Xu);
```

#### 157. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1506` → after: `L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1506) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1506)

```diff
-               (0, Jt.lb)(ft, wt, !1);
+               (0, eu.ub)(Ou, Yu, !1);
```

#### 158. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1512)

```diff
-               if (this._eventInfo.fallbacks = qt, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = mt, this._eventInfo.uniforms = ft, this._eventInfo.attributes = Xt, this._eventInfo.samplers = wt, this._eventInfo.uniformBuffersNames = Nt, this._eventInfo.customCode =  … [truncated]
+               if (this._eventInfo.fallbacks = Uu, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Xu, this._eventInfo.uniforms = Ou, this._eventInfo.attributes = Cu, this._eventInfo.samplers = Yu, this._eventInfo.uniformBuffersNames = Du, this._eventInfo.customCode =  … [truncated]
```

#### 159. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1522-L1523` → after: `L1522-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1522-L1523) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1522-L1523)

```diff
-                 et && (this._vertexPullingMetadata = (0, bt.h)(et), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((tt, et) => {
-                   ft.push(`vp_${et}_info`)
+                 Eu && (this._vertexPullingMetadata = (0, Mu.f)(Eu), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((uu, Eu) => {
+                   Ou.push(`vp_${Eu}_info`)
```

#### 160. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1530)

```diff
-                 Wt = Dt.Jf().createEffect(Et, {
+                 au = Zu.wO().createEffect(Nu, {
```

#### 161. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1555)

```diff
-             tt.addUniform("diffuseLeftColor", 4), tt.addUniform("diffuseRightColor", 4), tt.addUniform("opacityParts", 4), tt.addUniform("reflectionLeftColor", 4), tt.addUniform("reflectionRightColor", 4), tt.addUniform("refractionLeftColor", 4), tt.addUniform("refractionRightCol … [truncated]
+             uu.addUniform("diffuseLeftColor", 4), uu.addUniform("diffuseRightColor", 4), uu.addUniform("opacityParts", 4), uu.addUniform("reflectionLeftColor", 4), uu.addUniform("reflectionRightColor", 4), uu.addUniform("refractionLeftColor", 4), uu.addUniform("refractionRightCol … [truncated]
```

#### 162. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1558)

```diff
-             const qt = this.vI(),
+             const Uu = this.hV(),
```

#### 163. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1563)

```diff
-             this._activeEffect = jt, Vt.getMeshUniformBuffer().bindToEffect(jt, "Mesh"), Vt.transferToEffect(et), this._uniformBuffer.bindToEffect(jt, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, qt, Vt, et, this.isFrozen), Kt.c.Bind(qt.Jf().currentRe … [truncated]
+             this._activeEffect = qu, ju.getMeshUniformBuffer().bindToEffect(qu, "Mesh"), ju.transferToEffect(Eu), this._uniformBuffer.bindToEffect(qu, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Uu, ju, Eu, this.isFrozen), wu.c.Bind(Uu.wO().currentRe … [truncated]
```

#### 164. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1569-L1570` → after: `L1569-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1569-L1570) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1569-L1570)

```diff
-               lt = qt.Jf()._features.needToAlwaysBindUniformBuffers;
-             (0, Jt.f)(Vt, jt), this._vertexPullingMetadata && (0, bt.d)(jt, this._vertexPullingMetadata);
+               cu = Uu.wO()._features.needToAlwaysBindUniformBuffers;
+             (0, eu.h)(ju, qu), this._vertexPullingMetadata && (0, Mu.e)(qu, this._vertexPullingMetadata);
```

#### 165. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1576)

```diff
-                     const tt = dt.f.Color3[0];
+                     const uu = lu.m.Color3[0];
```

#### 166. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1581)

```diff
-                 if (Dt.ALPHATEST && Et.updateFloat("alphaCutOff", this.alphaCutOff), qt.texturesEnabled && (this._diffuseTexture && tt.DiffuseTextureEnabled && (Et.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Jt.w)(this._di … [truncated]
+                 if (Zu.ALPHATEST && Nu.updateFloat("alphaCutOff", this.alphaCutOff), Uu.texturesEnabled && (this._diffuseTexture && uu.DiffuseTextureEnabled && (Nu.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, eu.E)(this._di … [truncated]
```

#### 167. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1583` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1583) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1583)

```diff
-                   if (this._refractionTexture.isCube || (Et.x_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (tt = this._refractionTexture.depth)), Et.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
+                   if (this._refractionTexture.isCube || (Nu.y_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (uu = this._refractionTexture.depth)), Nu.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
```

#### 168. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1588` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1588) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1588)

```diff
-                 this.pointsCloud && Et.updateFloat("pointSize", this.pointSize), Et.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Et.updateColor3("vEmissiveColor", tt.EmissiveTextureEnabled ? this.emissiveColor : dt.b.BlackReadOnly), Et.updateColor4("vDi … [truncated]
+                 this.pointsCloud && Nu.updateFloat("pointSize", this.pointSize), Nu.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Nu.updateColor3("vEmissiveColor", uu.EmissiveTextureEnabled ? this.emissiveColor : lu.c.BlackReadOnly), Nu.updateColor4("vDi … [truncated]
```

#### 169. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1590)

```diff
-               qt.texturesEnabled && (this._diffuseTexture && tt.DiffuseTextureEnabled && jt.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && tt.AmbientTextureEnabled && jt.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && tt.Op … [truncated]
+               Uu.texturesEnabled && (this._diffuseTexture && uu.DiffuseTextureEnabled && qu.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && uu.AmbientTextureEnabled && qu.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && uu.Op … [truncated]
```

#### 170. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1592)

```diff
-             !Qt && this.isFrozen && !lt || !qt.lightsEnabled || this._disableLighting || (0, Jt.o)(qt, Vt, jt, Dt, this._maxSimultaneousLights), !Qt && this.isFrozen || ((qt.fogEnabled && Vt.applyFog && qt.fogMode !== mt.d.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
+             !bu && this.isFrozen && !cu || !Uu.lightsEnabled || this._disableLighting || (0, eu.r)(Uu, ju, qu, Zu, this._maxSimultaneousLights), !bu && this.isFrozen || ((Uu.fogEnabled && ju.applyFog && Uu.fogMode !== Xu.f.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
```

#### 171. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1596` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1596) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1596)

```diff
-             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === tt.prototype.isReadyForSubMesh && this.bindForSubMesh === tt.prototype.bindForSubMesh && this._mustRebind === ft.e.prototy … [truncated]
+             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === uu.prototype.isReadyForSubMesh && this.bindForSubMesh === uu.prototype.bindForSubMesh && this._mustRebind === Ou.c.prototy … [truncated]
```

#### 172. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1624` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1624) · [Before (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1624)

```diff
-             const qt = Ct.d.Clone((() => new tt(et, this.vI())), this, {
+             const Uu = Gu.e.Clone((() => new uu(Eu, this.hV())), this, {
```

#### 173. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1630-L1631` → after: `L1630-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1630-L1631) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1630-L1631)

```diff
-             const qt = Ct.d.Parse((() => new tt(et.name, Vt)), et, Vt, Ot);
-             return et.stencil && qt.stencil.parse(et.stencil, Vt, Ot), lt.c._ParsePlugins(et, qt, Vt, Ot), qt
+             const Uu = Gu.e.Parse((() => new uu(Eu.name, ju)), Eu, ju, su);
+             return Eu.stencil && Uu.stencil.parse(Eu.stencil, ju, su), cu.b._ParsePlugins(Eu, Uu, ju, su), Uu
```

#### 174. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1634` → after: `L1634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1634) · [Before (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1634)

```diff
-             return wt.e.DiffuseTextureEnabled
+             return Yu.d.DiffuseTextureEnabled
```

#### 175. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1637` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1637) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1637)

```diff
-             wt.e.DiffuseTextureEnabled = tt
+             Yu.d.DiffuseTextureEnabled = uu
```

#### 176. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1640)

```diff
-             return wt.e.DetailTextureEnabled
+             return Yu.d.DetailTextureEnabled
```

#### 177. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1643)

```diff
-             wt.e.DetailTextureEnabled = tt
+             Yu.d.DetailTextureEnabled = uu
```

#### 178. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1646)

```diff
-             return wt.e.AmbientTextureEnabled
+             return Yu.d.AmbientTextureEnabled
```

#### 179. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1649` → after: `L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1649) · [Before (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1649)

```diff
-             wt.e.AmbientTextureEnabled = tt
+             Yu.d.AmbientTextureEnabled = uu
```

#### 180. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1652` → after: `L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1652) · [Before (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1652)

```diff
-             return wt.e.OpacityTextureEnabled
+             return Yu.d.OpacityTextureEnabled
```

#### 181. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1655)

```diff
-             wt.e.OpacityTextureEnabled = tt
+             Yu.d.OpacityTextureEnabled = uu
```

#### 182. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1658` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1658) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1658)

```diff
-             return wt.e.ReflectionTextureEnabled
+             return Yu.d.ReflectionTextureEnabled
```

#### 183. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1661` → after: `L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1661) · [Before (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1661)

```diff
-             wt.e.ReflectionTextureEnabled = tt
+             Yu.d.ReflectionTextureEnabled = uu
```

#### 184. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1664)

```diff
-             return wt.e.EmissiveTextureEnabled
+             return Yu.d.EmissiveTextureEnabled
```

#### 185. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1667)

```diff
-             wt.e.EmissiveTextureEnabled = tt
+             Yu.d.EmissiveTextureEnabled = uu
```

#### 186. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1670` → after: `L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1670) · [Before (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1670)

```diff
-             return wt.e.SpecularTextureEnabled
+             return Yu.d.SpecularTextureEnabled
```

#### 187. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1673` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1673) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1673)

```diff
-             wt.e.SpecularTextureEnabled = tt
+             Yu.d.SpecularTextureEnabled = uu
```

#### 188. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1676)

```diff
-             return wt.e.BumpTextureEnabled
+             return Yu.d.BumpTextureEnabled
```

#### 189. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1679)

```diff
-             wt.e.BumpTextureEnabled = tt
+             Yu.d.BumpTextureEnabled = uu
```

#### 190. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1682` → after: `L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1682) · [Before (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1682)

```diff
-             return wt.e.LightmapTextureEnabled
+             return Yu.d.LightmapTextureEnabled
```

#### 191. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1685` → after: `L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1685) · [Before (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1685)

```diff
-             wt.e.LightmapTextureEnabled = tt
+             Yu.d.LightmapTextureEnabled = uu
```

#### 192. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1688` → after: `L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1688) · [Before (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1688)

```diff
-             return wt.e.RefractionTextureEnabled
+             return Yu.d.RefractionTextureEnabled
```

#### 193. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1691` → after: `L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1691) · [Before (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1691)

```diff
-             wt.e.RefractionTextureEnabled = tt
+             Yu.d.RefractionTextureEnabled = uu
```

#### 194. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1694)

```diff
-             return wt.e.ColorGradingTextureEnabled
+             return Yu.d.ColorGradingTextureEnabled
```

#### 195. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1697` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1697) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1697)

```diff
-             wt.e.ColorGradingTextureEnabled = tt
+             Yu.d.ColorGradingTextureEnabled = uu
```

#### 196. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1700` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1700) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1700)

```diff
-             return wt.e.FresnelEnabled
+             return Yu.d.FresnelEnabled
```

#### 197. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1703` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1703) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1703)

```diff
-             wt.e.FresnelEnabled = tt
+             Yu.d.FresnelEnabled = uu
```

#### 198. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1707)

```diff
-           De = [(0, qt.E)("diffuseTexture")], me = [(0, qt.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], de = [(0, qt.E)("ambientTexture")], je = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], He = [(0, qt.E)("opacityTexture")], Xe = [(0, qt.i)("_markAllSubMeshesAsTexturesAnd … [truncated]
+           UE = [(0, Uu.y)("diffuseTexture")], ZE = [(0, Uu.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], XE = [(0, Uu.y)("ambientTexture")], lE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], qE = [(0, Uu.y)("opacityTexture")], fE = [(0, Uu.e)("_markAllSubMeshesAsTexturesAnd … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1717)

```diff
-           })], Re = [(0, qt.P)("useEmissiveAsIllumination")], Ie = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Pe = [(0, qt.P)("linkEmissiveWithDiffuse")], Ze = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Le = [(0, qt.P)("useSpecularOverAlpha")], Fe = [(0, qt.i)("_markA … [truncated]
+           })], kE = [(0, Uu.E)("useEmissiveAsIllumination")], mE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], vE = [(0, Uu.E)("linkEmissiveWithDiffuse")], KE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], VE = [(0, Uu.E)("useSpecularOverAlpha")], rE = [(0, Uu.e)("_markA … [truncated]
```

#### 200. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1730` → after: `L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1730) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1730)

```diff
-           }, cV, RV), (0, Ot.l)(tt, null, je, {
+           }, oj, kj), (0, su.e)(uu, null, lE, {
```

#### 201. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1743)

```diff
-           }, ZV, LV), (0, Ot.l)(tt, null, Xe, {
+           }, Kj, Vj), (0, su.e)(uu, null, fE, {
```

#### 202. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1756` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1756) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1756)

```diff
-           }, GV, zV), (0, Ot.l)(tt, null, le, {
+           }, ij, Wj), (0, su.e)(uu, null, bE, {
```

#### 203. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1769` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1769) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1769)

```diff
-           }, UV, AV), (0, Ot.l)(tt, null, fe, {
+           }, Fj, Bj), (0, su.e)(uu, null, NE, {
```

#### 204. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1782` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1782) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1782)

```diff
-           }, BV, pV), (0, Ot.l)(tt, null, ye, {
+           }, xj, Tj), (0, su.e)(uu, null, YE, {
```

#### 205. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1795)

```diff
-           }, gV, sV), (0, Ot.l)(tt, null, ae, {
+           }, nj, yj), (0, su.e)(uu, null, DE, {
```

#### 206. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1808` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1808) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1808)

```diff
-           }, eO, VO), (0, Ot.l)(tt, null, be, {
+           }, us, Es), (0, su.e)(uu, null, ME, {
```

#### 207. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1821` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1821) · [Before (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1821)

```diff
-           }, DO, mO), (0, Ot.l)(tt, null, Ce, {
+           }, Zs, Xs), (0, su.e)(uu, null, GE, {
```

#### 208. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1834)

```diff
-           }, HO, XO), (0, Ot.l)(tt, null, ce, {
+           }, fs, Cs), (0, su.e)(uu, null, oE, {
```

#### 209. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1847)

```diff
-           }, uO, KO), (0, Ot.l)(tt, null, Ie, {
+           }, ws, ds), (0, su.e)(uu, null, mE, {
```

#### 210. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1860)

```diff
-           }, WO, SO), (0, Ot.l)(tt, null, Ze, {
+           }, os, ks), (0, su.e)(uu, null, KE, {
```

#### 211. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1873)

```diff
-           }, IO, PO), (0, Ot.l)(tt, null, Fe, {
+           }, Ks, Vs), (0, su.e)(uu, null, rE, {
```

#### 212. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1886` → after: `L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1886) · [Before (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1886)

```diff
-           }, FO, kO), (0, Ot.l)(tt, null, Ge, {
+           }, is, Ws), (0, su.e)(uu, null, iE, {
```

#### 213. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1899` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1899) · [Before (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1899)

```diff
-           }, oO, rO), (0, Ot.l)(tt, null, oe, {
+           }, Fs, Bs), (0, su.e)(uu, null, SE, {
```

#### 214. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1912)

```diff
-           }, iO, YO), (0, Ot.l)(tt, null, Ue, {
+           }, xs, Ts), (0, su.e)(uu, null, FE, {
```

#### 215. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1925` → after: `L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1925) · [Before (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1925)

```diff
-           }, xO, TO), (0, Ot.l)(tt, null, ie, {
+           }, ns, ys), (0, su.e)(uu, null, LE, {
```

#### 216. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1938` → after: `L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1938) · [Before (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1938)

```diff
-           }, nO, tq), (0, Ot.l)(tt, null, Be, {
+           }, uU, EU), (0, su.e)(uu, null, xE, {
```

#### 217. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1951` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1951) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1951)

```diff
-           }, Oq, qq), (0, Ot.l)(tt, null, Te, {
+           }, UU, ZU), (0, su.e)(uu, null, AE, {
```

#### 218. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1964)

```diff
-           }, Hq, Xq), (0, Ot.l)(tt, null, eV, {
+           }, CU, bU), (0, su.e)(uu, null, uj, {
```

#### 219. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1977)

```diff
-           }, Mq, bq), (0, Ot.l)(tt, null, OV, {
+           }, eU, GU), (0, su.e)(uu, null, jj, {
```

#### 220. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L1990)

```diff
-           }, uq, Kq), (0, Ot.l)(tt, null, DV, {
+           }, JU, dU), (0, su.e)(uu, null, Uj, {
```

#### 221. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2003` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2003) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2003)

```diff
-           }, Wq, Sq), (0, Ot.l)(tt, null, dV, {
+           }, oU, kU), (0, su.e)(uu, null, Xj, {
```

#### 222. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2016)

```diff
-           }, Iq, Pq), (0, Ot.l)(tt, null, HV, {
+           }, KU, VU), (0, su.e)(uu, null, qj, {
```

#### 223. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2029)

```diff
-           }, Fq, kq), (0, Ot.l)(tt, null, QV, {
+           }, iU, WU), (0, su.e)(uu, null, Cj, {
```

#### 224. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2042` → after: `L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2042) · [Before (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2042)

```diff
-           }, oq, rq), (0, Ot.l)(tt, null, EV, {
+           }, FU, BU), (0, su.e)(uu, null, cj, {
```

#### 225. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2055)

```diff
-           }, iq, Yq), (0, Ot.l)(tt, null, wV, {
+           }, xU, TU), (0, su.e)(uu, null, Oj, {
```

#### 226. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2068` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2068) · [Before (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2068)

```diff
-           }, xq, Tq), (0, Ot.l)(tt, null, NV, {
+           }, nU, yU), (0, su.e)(uu, null, hj, {
```

#### 227. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2081` → after: `L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2081) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2081)

```diff
-           }, nq, tD), (0, Ot.l)(tt, null, MV, {
+           }, uZ, EZ), (0, su.e)(uu, null, gj, {
```

#### 228. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2094` → after: `L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2094) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2094)

```diff
-           }, OD, qD), (0, Ot.l)(tt, null, JV, {
+           }, UZ, ZZ), (0, su.e)(uu, null, ej, {
```

#### 229. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2107)

```diff
-           }, dD, jD), (0, Ot.l)(tt, null, uV, {
+           }, qZ, fZ), (0, su.e)(uu, null, pj, {
```

#### 230. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2120` → after: `L2120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2120) · [Before (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2120)

```diff
-           }, QD, lD), (0, Ot.l)(tt, null, hV, {
+           }, cZ, NZ), (0, su.e)(uu, null, Jj, {
```

#### 231. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2133` → after: `L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2133) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2133)

```diff
-           }, wD, yD), (0, Ot.l)(null, null, De, {
+           }, hZ, DZ), (0, su.e)(null, null, UE, {
```

#### 232. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2146)

```diff
-           }, WV, SV), (0, Ot.l)(null, null, de, {
+           }, aj, Pj), (0, su.e)(null, null, XE, {
```

#### 233. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2159` → after: `L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2159) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2159)

```diff
-           }, IV, PV), (0, Ot.l)(null, null, He, {
+           }, mj, vj), (0, su.e)(null, null, qE, {
```

#### 234. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2172` → after: `L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2172) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2172)

```diff
-           }, FV, kV), (0, Ot.l)(null, null, Qe, {
+           }, rj, Qj), (0, su.e)(null, null, CE, {
```

#### 235. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2185)

```diff
-           }, oV, rV), (0, Ot.l)(null, null, Ee, {
+           }, Sj, Ij), (0, su.e)(null, null, cE, {
```

#### 236. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2198)

```diff
-           }, iV, YV), (0, Ot.l)(null, null, we, {
+           }, Lj, tj), (0, su.e)(null, null, OE, {
```

#### 237. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2211)

```diff
-           }, xV, TV), (0, Ot.l)(null, null, Ne, {
+           }, Hj, Aj), (0, su.e)(null, null, hE, {
```

#### 238. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2224)

```diff
-           }, nV, tO), (0, Ot.l)(null, null, Me, {
+           }, zj, Rj), (0, su.e)(null, null, gE, {
```

#### 239. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2237` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2237) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2237)

```diff
-           }, OO, qO), (0, Ot.l)(null, null, Je, {
+           }, ss, Us), (0, su.e)(null, null, eE, {
```

#### 240. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2250)

```diff
-           }, dO, jO), (0, Ot.l)(null, null, ue, {
+           }, ls, qs), (0, su.e)(null, null, pE, {
```

#### 241. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2263)

```diff
-           }, QO, lO), (0, Ot.l)(null, null, Ke, {
+           }, bs, cs), (0, su.e)(null, null, wE, {
```

#### 242. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2276` → after: `L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2276) · [Before (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2276)

```diff
-           }, EO, fO), (0, Ot.l)(null, null, he, {
+           }, Ns, Os), (0, su.e)(null, null, JE, {
```

#### 243. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2289` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2289) · [Before (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2289)

```diff
-           }, wO, yO), (0, Ot.l)(null, null, ve, {
+           }, Ys, hs), (0, su.e)(null, null, dE, {
```

#### 244. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2302)

```diff
-           }, NO, aO), (0, Ot.l)(null, null, We, {
+           }, Ds, gs), (0, su.e)(null, null, aE, {
```

#### 245. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2315` → after: `L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2315) · [Before (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2315)

```diff
-           }, MO, bO), (0, Ot.l)(null, null, Se, {
+           }, Ms, es), (0, su.e)(null, null, PE, {
```

#### 246. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2328` → after: `L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2328) · [Before (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2328)

```diff
-           }, JO, CO), (0, Ot.l)(null, null, Re, {
+           }, Gs, ps), (0, su.e)(null, null, kE, {
```

#### 247. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2341` → after: `L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2341) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2341)

```diff
-           }, hO, vO), (0, Ot.l)(null, null, Pe, {
+           }, as, Ps), (0, su.e)(null, null, vE, {
```

#### 248. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2354` → after: `L2354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2354) · [Before (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2354)

```diff
-           }, cO, RO), (0, Ot.l)(null, null, Le, {
+           }, ms, vs), (0, su.e)(null, null, VE, {
```

#### 249. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2367)

```diff
-           }, ZO, LO), (0, Ot.l)(null, null, ke, {
+           }, rs, Qs), (0, su.e)(null, null, QE, {
```

#### 250. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2380` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2380) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2380)

```diff
-           }, GO, zO), (0, Ot.l)(null, null, ze, {
+           }, Ss, Is), (0, su.e)(null, null, WE, {
```

#### 251. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2393` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2393) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2393)

```diff
-           }, UO, AO), (0, Ot.l)(null, null, re, {
+           }, Ls, ts), (0, su.e)(null, null, IE, {
```

#### 252. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2406` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2406) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2406)

```diff
-           }, BO, pO), (0, Ot.l)(null, null, Ae, {
+           }, Hs, As), (0, su.e)(null, null, BE, {
```

#### 253. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2419` → after: `L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2419) · [Before (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2419)

```diff
-           }, gO, sO), (0, Ot.l)(null, null, Ye, {
+           }, zs, Rs), (0, su.e)(null, null, tE, {
```

#### 254. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2432` → after: `L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2432) · [Before (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2432)

```diff
-           }, eq, Vq), (0, Ot.l)(null, null, pe, {
+           }, jU, sU), (0, su.e)(null, null, TE, {
```

#### 255. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2445` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2445) · [Before (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2445)

```diff
-           }, Dq, mq), (0, Ot.l)(null, null, xe, {
+           }, XU, lU), (0, su.e)(null, null, HE, {
```

#### 256. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2458` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2458)

```diff
-           }, dq, jq), (0, Ot.l)(null, null, ge, {
+           }, qU, fU), (0, su.e)(null, null, nE, {
```

#### 257. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2471` → after: `L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2471) · [Before (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2471)

```diff
-           }, Qq, lq), (0, Ot.l)(null, null, se, {
+           }, cU, NU), (0, su.e)(null, null, yE, {
```

#### 258. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2484` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2484) · [Before (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2484)

```diff
-           }, Eq, fq), (0, Ot.l)(null, null, ne, {
+           }, OU, YU), (0, su.e)(null, null, zE, {
```

#### 259. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2497)

```diff
-           }, wq, yq), (0, Ot.l)(null, null, tV, {
+           }, hU, DU), (0, su.e)(null, null, RE, {
```

#### 260. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2510` → after: `L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2510) · [Before (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2510)

```diff
-           }, Nq, aq), (0, Ot.l)(null, null, VV, {
+           }, gU, MU), (0, su.e)(null, null, Ej, {
```

#### 261. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2523)

```diff
-           }, Jq, Cq), (0, Ot.l)(null, null, qV, {
+           }, pU, wU), (0, su.e)(null, null, sj, {
```

#### 262. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2536` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2536) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2536)

```diff
-           }, hq, vq), (0, Ot.l)(null, null, mV, {
+           }, aU, PU), (0, su.e)(null, null, Zj, {
```

#### 263. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2549` → after: `L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2549) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2549)

```diff
-           }, cq, Rq), (0, Ot.l)(null, null, jV, {
+           }, mU, vU), (0, su.e)(null, null, lj, {
```

#### 264. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2562` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2562) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2562)

```diff
-           }, Zq, Lq), (0, Ot.l)(null, null, XV, {
+           }, rU, QU), (0, su.e)(null, null, fj, {
```

#### 265. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2575)

```diff
-           }, Gq, zq), (0, Ot.l)(null, null, lV, {
+           }, SU, IU), (0, su.e)(null, null, bj, {
```

#### 266. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2588` → after: `L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2588) · [Before (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2588)

```diff
-           }, Uq, Aq), (0, Ot.l)(null, null, fV, {
+           }, LU, tU), (0, su.e)(null, null, Nj, {
```

#### 267. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2601` → after: `L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2601) · [Before (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2601)

```diff
-           }, Bq, pq), (0, Ot.l)(null, null, yV, {
+           }, HU, AU), (0, su.e)(null, null, Yj, {
```

#### 268. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2614)

```diff
-           }, gq, sq), (0, Ot.l)(null, null, aV, {
+           }, zU, RU), (0, su.e)(null, null, Dj, {
```

#### 269. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2627` → after: `L2627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2627) · [Before (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2627)

```diff
-           }, eD, VD), (0, Ot.l)(null, null, bV, {
+           }, jZ, sZ), (0, su.e)(null, null, Mj, {
```

#### 270. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2640` → after: `L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2640) · [Before (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2640)

```diff
-           }, DD, mD), (0, Ot.l)(null, null, CV, {
+           }, XZ, lZ), (0, su.e)(null, null, Gj, {
```

#### 271. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2653` → after: `L2653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2653) · [Before (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2653)

```diff
-           }, HD, XD), (0, Ot.l)(null, null, KV, {
+           }, CZ, bZ), (0, su.e)(null, null, wj, {
```

#### 272. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2672` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2672) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2672)

```diff
-         })(), tt.ForceGLSL = !1, tt._ShaderLoader = new ut.b((() => [Promise.all([Vt.e(322), Vt.e(321)]).then((() => Vt(42120))), Promise.all([Vt.e(327), Vt.e(323), Vt.e(336), Vt.e(326)]).then((() => Vt(42314)))]), (() => [Promise.all([Vt.e(343), Vt.e(338)]).then((() => Vt(42438) … [truncated]
+         })(), uu.ForceGLSL = !1, uu._ShaderLoader = new pu.b((() => [Promise.all([ju.e(322), ju.e(321)]).then((() => ju(42148))), Promise.all([ju.e(327), ju.e(323), ju.e(336), ju.e(326)]).then((() => ju(42348)))]), (() => [Promise.all([ju.e(343), ju.e(338)]).then((() => ju(42506) … [truncated]
```

#### 273. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2677` → after: `L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2677) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2677)

```diff
-       Ft || (Ft = !0, (0, Qt.c)(), (0, St.i)("BABYLON.StandardMaterial", Lt), mt.d.DefaultMaterialFactory = tt => new Lt("default material", tt))
+       ru || (ru = !0, (0, bu.g)(), (0, Pu.f)("BABYLON.StandardMaterial", Vu), Xu.f.DefaultMaterialFactory = uu => new Vu("default material", uu))
```

#### 274. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2679` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2679) · [Before (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2679)

```diff
-     Object.getOwnPropertyDescriptor(Lt.prototype, "decalMap") || Object.defineProperty(Lt.prototype, "decalMap", (0, ct.c)("StandardMaterial", "decalMap"))
+     Object.getOwnPropertyDescriptor(Vu.prototype, "decalMap") || Object.defineProperty(Vu.prototype, "decalMap", (0, ou.d)("StandardMaterial", "decalMap"))
```

#### 275. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2681)

```diff
-   40582: (tt, et, Vt) => {
+   40640: (uu, Eu, ju) => {
```

#### 276. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2690)

```diff
-       e: () => Ot
+       c: () => su
```

#### 277. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2693` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/265.js#L2693) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/265.js#L2693)

```diff
-   40566: (tt, et, Vt) => {
+   40628: (uu, Eu, ju) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (225 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L4)

```diff
-   40482: (tt, et, Vt) => {
+   40565: (uu, Eu, ju) => {
```

#### 2. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L6)

```diff
-       d: () => Ot
+       c: () => su
```

#### 3. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L14)

```diff
-   40497: (tt, et, Vt) => {
+   40581: (uu, Eu, ju) => {
```

#### 4. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L18-L20` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L18-L20) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L18-L20)

```diff
-     var Ot = Vt(37350),
-       qt = Vt(37336),
-       Dt = Vt(37342);
+     var su = ju(37498),
+       Uu = ju(37494),
+       Zu = ju(37496);
```

#### 5. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L23)

```diff
-         this.vectors = (0, Ot.c)(8, qt.n.Zero), this.center = qt.n.Zero(), this.centerWorld = qt.n.Zero(), this.extendSize = qt.n.Zero(), this.extendSizeWorld = qt.n.Zero(), this.directions = (0, Ot.c)(3, qt.n.Zero), this.vectorsWorld = (0, Ot.c)(8, qt.n.Zero), this.minimumWorld  … [truncated]
+         this.vectors = (0, su.e)(8, Uu.t.Zero), this.center = Uu.t.Zero(), this.centerWorld = Uu.t.Zero(), this.extendSize = Uu.t.Zero(), this.extendSizeWorld = Uu.t.Zero(), this.directions = (0, su.e)(3, Uu.t.Zero), this.vectorsWorld = (0, su.e)(8, Uu.t.Zero), this.minimumWorld  … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L33)

```diff
-         this.minimum.W9(Ot, Dt, mt), this.maximum.W9(dt, jt, Ht), Xt[0].W9(Ot, Dt, mt), Xt[1].W9(dt, jt, Ht), Xt[2].W9(dt, Dt, mt), Xt[3].W9(Ot, jt, mt), Xt[4].W9(Ot, Dt, Ht), Xt[5].W9(dt, jt, mt), Xt[6].W9(Ot, jt, Ht), Xt[7].W9(dt, Dt, Ht), et.addToRef(tt, this.center).scaleInPl … [truncated]
+         this.minimum.T6(su, Zu, Xu), this.maximum.T6(lu, qu, fu), Cu[0].T6(su, Zu, Xu), Cu[1].T6(lu, qu, fu), Cu[2].T6(lu, Zu, Xu), Cu[3].T6(su, qu, Xu), Cu[4].T6(su, Zu, fu), Cu[5].T6(lu, qu, Xu), Cu[6].T6(su, qu, fu), Cu[7].T6(lu, Zu, fu), Eu.addToRef(uu, this.center).scaleInPl … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L56-L58)

```diff
-           et.rK(this.minimum), Vt.rK(this.maximum);
-           for (let tt = 0; tt < 8; ++tt) Dt[tt].rK(mt[tt]);
-           this.extendSizeWorld.rK(this.extendSize), this.centerWorld.rK(this.center)
+           Eu.yJ(this.minimum), ju.yJ(this.maximum);
+           for (let uu = 0; uu < 8; ++uu) Zu[uu].yJ(Xu[uu]);
+           this.extendSizeWorld.yJ(this.extendSize), this.centerWorld.yJ(this.center)
```

#### 8. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L60)

```diff
-           et.S_(Number.MAX_VALUE), Vt.S_(-Number.MAX_VALUE);
+           Eu.k_(Number.MAX_VALUE), ju.k_(-Number.MAX_VALUE);
```

#### 9. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L63)

```diff
-             qt.n.TransformCoordinatesToRef(mt[Ot], tt, dt), et.minimizeInPlace(dt), Vt.maximizeInPlace(dt)
+             Uu.t.TransformCoordinatesToRef(Xu[su], uu, lu), Eu.minimizeInPlace(lu), ju.maximizeInPlace(lu)
```

#### 10. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L67)

```diff
-         qt.n.FromArrayToRef(tt.m, 0, Ot[0]), qt.n.FromArrayToRef(tt.m, 4, Ot[1]), qt.n.FromArrayToRef(tt.m, 8, Ot[2]), this._worldMatrix = tt
+         Uu.t.FromArrayToRef(uu.m, 0, su[0]), Uu.t.FromArrayToRef(uu.m, 4, su[1]), Uu.t.FromArrayToRef(uu.m, 8, su[2]), this._worldMatrix = uu
```

#### 11. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L87)

```diff
-           Et = -Dt.e;
+           Nu = -Zu.c;
```

#### 12. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L118-L119)

```diff
-         qt.n.ClampToRef(Vt, tt, et, Dt);
-         return qt.n.DistanceSquared(Vt, Dt) <= Ot * Ot
+         Uu.t.ClampToRef(ju, uu, Eu, Zu);
+         return Uu.t.DistanceSquared(ju, Zu) <= su * su
```

#### 13. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L142)

```diff
-     mt._TmpVector3 = (0, Ot.c)(3, qt.n.Zero)
+     Xu._TmpVector3 = (0, su.e)(3, Uu.t.Zero)
```

#### 14. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L144)

```diff
-   40490: (tt, et, Vt) => {
+   40574: (uu, Eu, ju) => {
```

#### 15. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L148-L150` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L148-L150) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L148-L150)

```diff
-     var Ot = Vt(37350),
-       qt = Vt(37336),
-       Dt = Vt(40497);
+     var su = ju(37498),
+       Uu = ju(37494),
+       Zu = ju(40581);
```

#### 16. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L153)

```diff
-         this.center = qt.n.Zero(), this.centerWorld = qt.n.Zero(), this.minimum = qt.n.Zero(), this.maximum = qt.n.Zero(), this.reConstruct(tt, et, Vt)
+         this.center = Uu.t.Zero(), this.centerWorld = Uu.t.Zero(), this.minimum = Uu.t.Zero(), this.maximum = Uu.t.Zero(), this.reConstruct(uu, Eu, ju)
```

#### 17. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L156-L158` → after: `L156-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L156-L158) · [Before (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L156-L158)

```diff
-         this.minimum.rK(tt), this.maximum.rK(et);
-         const Ot = qt.n.Distance(tt, et);
-         et.addToRef(tt, this.center).scaleInPlace(.5), this.radius = .5 * Ot, this._update(Vt || qt.c.IdentityReadOnly)
+         this.minimum.yJ(uu), this.maximum.yJ(Eu);
+         const su = Uu.t.Distance(uu, Eu);
+         Eu.addToRef(uu, this.center).scaleInPlace(.5), this.radius = .5 * su, this._update(ju || Uu.e.IdentityReadOnly)
```

#### 18. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L175)

```diff
-         if (tt.isIdentity()) this.centerWorld.rK(this.center), this.radiusWorld = this.radius;
+         if (uu.isIdentity()) this.centerWorld.yJ(this.center), this.radiusWorld = this.radius;
```

#### 19. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L177)

```diff
-           qt.n.TransformCoordinatesToRef(this.center, tt, this.centerWorld);
+           Uu.t.TransformCoordinatesToRef(this.center, uu, this.centerWorld);
```

#### 20. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L179)

```diff
-           qt.n.TransformNormalFromFloatsToRef(1, 1, 1, tt, et), this.radiusWorld = Math.max(Math.abs(et.x), Math.abs(et.y), Math.abs(et.z)) * this.radius
+           Uu.t.TransformNormalFromFloatsToRef(1, 1, 1, uu, Eu), this.radiusWorld = Math.max(Math.abs(Eu.x), Math.abs(Eu.y), Math.abs(Eu.z)) * this.radius
```

#### 21. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L196)

```diff
-         const et = qt.n.DistanceSquared(this.centerWorld, tt);
+         const Eu = Uu.t.DistanceSquared(this.centerWorld, uu);
```

#### 22. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L200)

```diff
-         const Vt = qt.n.DistanceSquared(tt.centerWorld, et.centerWorld),
+         const ju = Uu.t.DistanceSquared(uu.centerWorld, Eu.centerWorld),
```

#### 23. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L205)

```diff
-         this._TmpVector3[0].rK(tt), this._TmpVector3[1].W9(0, 0, et), this._TmpVector3[2].rK(tt), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].qqt(this._TmpVector3[1]);
+         this._TmpVector3[0].yJ(uu), this._TmpVector3[1].T6(0, 0, Eu), this._TmpVector3[2].yJ(uu), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].Qsu(this._TmpVector3[1]);
```

#### 24. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L207)

```diff
-         return Ot._worldMatrix = Vt || qt.c.Identity(), Ot
+         return su._worldMatrix = ju || Uu.e.Identity(), su
```

#### 25. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L210)

```diff
-     mt._TmpVector3 = (0, Ot.c)(3, qt.n.Zero);
+     Xu._TmpVector3 = (0, su.e)(3, Uu.t.Zero);
```

#### 26. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L220-L221` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L220-L221) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L220-L221)

```diff
-         const Ot = qt.n.Dot(et.centerWorld, tt),
-           Dt = Math.abs(qt.n.Dot(et.directions[0], tt)) * et.extendSize.x + Math.abs(qt.n.Dot(et.directions[1], tt)) * et.extendSize.y + Math.abs(qt.n.Dot(et.directions[2], tt)) * et.extendSize.z;
+         const su = Uu.t.Dot(Eu.centerWorld, uu),
+           Zu = Math.abs(Uu.t.Dot(Eu.directions[0], uu)) * Eu.extendSize.x + Math.abs(Uu.t.Dot(Eu.directions[1], uu)) * Eu.extendSize.y + Math.abs(Uu.t.Dot(Eu.directions[2], uu)) * Eu.extendSize.z;
```

#### 27. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L227)

```diff
-         this._isLocked = !1, this.boundingBox = new Dt.e(tt, et, Vt), this.jqt = new mt(tt, et, Vt)
+         this._isLocked = !1, this.boundingBox = new Zu.e(uu, Eu, ju), this.Isu = new Xu(uu, Eu, ju)
```

#### 28. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L230)

```diff
-         this.boundingBox.reConstruct(tt, et, Vt), this.jqt.reConstruct(tt, et, Vt)
+         this.boundingBox.reConstruct(uu, Eu, ju), this.Isu.reConstruct(uu, Eu, ju)
```

#### 29. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L245)

```diff
-         this._isLocked || (this.boundingBox._update(tt), this.jqt._update(tt))
+         this._isLocked || (this.boundingBox._update(uu), this.Isu._update(uu))
```

#### 30. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L248-L250` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L248-L250) · [Before (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L248-L250)

```diff
-         const Vt = Qt._TmpVector3[0].rK(tt).qqt(et),
-           Ot = Qt._TmpVector3[1].rK(tt).addInPlace(et);
-         return this.boundingBox.reConstruct(Vt, Ot, this.boundingBox.getWorldMatrix()), this.jqt.reConstruct(Vt, Ot, this.boundingBox.getWorldMatrix()), this
+         const ju = bu._TmpVector3[0].yJ(uu).Qsu(Eu),
+           su = bu._TmpVector3[1].yJ(uu).addInPlace(Eu);
+         return this.boundingBox.reConstruct(ju, su, this.boundingBox.getWorldMatrix()), this.Isu.reConstruct(ju, su, this.boundingBox.getWorldMatrix()), this
```

#### 31. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L253-L254)

```diff
-         const et = qt.n.Minimize(this.minimum, tt),
-           Vt = qt.n.Maximize(this.maximum, tt);
+         const Eu = Uu.t.Minimize(this.minimum, uu),
+           ju = Uu.t.Maximize(this.maximum, uu);
```

#### 32. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L258)

```diff
-         const et = qt.k.Matrix[0];
+         const Eu = Uu.m.Matrix[0];
```

#### 33. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L260-L261` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L260-L261) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L260-L261)

```diff
-         const Vt = qt.k.uf[0];
-         return qt.n.TransformCoordinatesToRef(tt.boundingBox.minimumWorld, et, Vt), this.encapsulate(Vt), qt.n.TransformCoordinatesToRef(tt.boundingBox.maximumWorld, et, Vt), this.encapsulate(Vt), this
+         const ju = Uu.m.dO[0];
+         return Uu.t.TransformCoordinatesToRef(uu.boundingBox.minimumWorld, Eu, ju), this.encapsulate(ju), Uu.t.TransformCoordinatesToRef(uu.boundingBox.maximumWorld, Eu, ju), this.encapsulate(ju), this
```

#### 34. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L264)

```diff
-         return this.boundingBox.scale(tt), this.jqt.scale(tt), this
+         return this.boundingBox.scale(uu), this.Isu.scale(uu), this
```

#### 35. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L268-L269)

```diff
-         if ((2 === et || 3 === et) && this.jqt.isCenterInFrustum(tt)) return !0;
-         if (!this.jqt.isInFrustum(tt)) return !1;
+         if ((2 === Eu || 3 === Eu) && this.Isu.isCenterInFrustum(uu)) return !0;
+         if (!this.Isu.isInFrustum(uu)) return !1;
```

#### 36. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L280)

```diff
-         return tt._canDoCollision(this.jqt.centerWorld, this.jqt.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
+         return uu._canDoCollision(this.Isu.centerWorld, this.Isu.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
```

#### 37. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L283)

```diff
-         return !!this.jqt.centerWorld && (!!this.jqt.intersectsPoint(tt) && !!this.boundingBox.intersectsPoint(tt))
+         return !!this.Isu.centerWorld && (!!this.Isu.intersectsPoint(uu) && !!this.boundingBox.intersectsPoint(uu))
```

#### 38. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L286)

```diff
-         if (!mt.Intersects(this.jqt, tt.jqt)) return !1;
+         if (!Xu.Intersects(this.Isu, uu.Isu)) return !1;
```

#### 39. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L291)

```diff
-         return !!Xt(Vt.directions[0], Vt, Ot) && (!!Xt(Vt.directions[1], Vt, Ot) && (!!Xt(Vt.directions[2], Vt, Ot) && (!!Xt(Ot.directions[0], Vt, Ot) && (!!Xt(Ot.directions[1], Vt, Ot) && (!!Xt(Ot.directions[2], Vt, Ot) && (!!Xt(qt.n.Cross(Vt.directions[0], Ot.directions[0]), Vt … [truncated]
+         return !!Cu(ju.directions[0], ju, su) && (!!Cu(ju.directions[1], ju, su) && (!!Cu(ju.directions[2], ju, su) && (!!Cu(su.directions[0], ju, su) && (!!Cu(su.directions[1], ju, su) && (!!Cu(su.directions[2], ju, su) && (!!Cu(Uu.t.Cross(ju.directions[0], su.directions[0]), ju … [truncated]
```

#### 40. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L294)

```diff
-     Qt._TmpVector3 = (0, Ot.c)(2, qt.n.Zero)
+     bu._TmpVector3 = (0, su.e)(2, Uu.t.Zero)
```

#### 41. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L296)

```diff
-   40520: (tt, et, Vt) => {
+   40596: (uu, Eu, ju) => {
```

#### 42. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L300-L301` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L300-L301) · [Before (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L300-L301)

```diff
-       i: () => dt,
-       j: () => mt
+       g: () => lu,
+       k: () => Xu
```

#### 43. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L303-L304)

```diff
-     var Ot = Vt(40354),
-       qt = Vt(37336);
+     var su = ju(40412),
+       Uu = ju(37494);
```

#### 44. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L338-L339)

```diff
-         const Dt = Ot.b.vI()?.floatingOriginOffset || qt.n.ZeroReadOnly;
-         tt.setFloat4(et, Vt.normal.x, Vt.normal.y, Vt.normal.z, Vt.d + qt.n.Dot(Vt.normal, Dt))
+         const Zu = su.b.hV()?.floatingOriginOffset || Uu.t.ZeroReadOnly;
+         uu.setFloat4(Eu, ju.normal.x, ju.normal.y, ju.normal.z, ju.d + Uu.t.Dot(ju.normal, Zu))
```

#### 45. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L343)

```diff
-   40540: (tt, et, Vt) => {
+   40610: (uu, Eu, ju) => {
```

#### 46. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L345)

```diff
-       b: () => Ot
+       e: () => su
```

#### 47. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L366)

```diff
-           const Vt = this._mesh.vI();
+           const ju = this._mesh.hV();
```

#### 48. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L372-L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L372-L373) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L372-L373)

```diff
-                 else if (Ot.vJ)
-                 for (const tt of Ot.vJ) {
+                 else if (su.iG)
+                 for (const uu of su.iG) {
```

#### 49. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L391)

```diff
-   40474: (tt, et, Vt) => {
+   40552: (uu, Eu, ju) => {
```

#### 50. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L393)

```diff
-       c: () => Mt
+       b: () => gu
```

#### 51. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L395-L405` → after: `L395-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L395-L405) · [Before (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L395-L405)

```diff
-     var Ot = Vt(40211),
-       qt = Vt(40213),
-       Dt = Vt(40300),
-       mt = Vt(37367),
-       dt = Vt(37359),
-       jt = Vt(40476),
-       Ht = Vt(40337),
-       Xt = Vt(38899),
-       Qt = Vt(38016),
-       lt = Vt(40512),
-       Et = Vt(40230);
+     var su = ju(40255),
+       Uu = ju(40258),
+       Zu = ju(40356),
+       Xu = ju(37514),
+       lu = ju(37506),
+       qu = ju(40556),
+       fu = ju(40390),
+       Cu = ju(39032),
+       bu = ju(38154),
+       cu = ju(40589),
+       Nu = ju(40272);
```

#### 52. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L411)

```diff
-           this._func = (0, Ot.m)(this, yt), this.reset()
+           this._func = (0, su.g)(this, hu), this.reset()
```

#### 53. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L492)

```diff
-           Et.d.Clone((() => tt), this)
+           Nu.e.Clone((() => uu), this)
```

#### 54. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L495)

```diff
-           return Et.d.Serialize(this)
+           return Nu.e.Serialize(this)
```

#### 55. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L498)

```diff
-           Et.d.Parse((() => this), tt, et, Vt)
+           Nu.e.Parse((() => this), uu, Eu, ju)
```

#### 56. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L502` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L502) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L502)

```diff
-         et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], mt = [(0, qt.P)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.P)()], lt = [(0, qt.P)()], ft = [(0, qt.P)()], wt = [(0, qt.P)()], (0, Ot.l)(tt, null, et, {
+         Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], Xu = [(0, Uu.E)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], fu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.E)()], cu = [(0, Uu.E)()], Ou = [(0, Uu.E)()], Yu = [(0, Uu.E)()], (0, su.e)(uu, null, Eu, {
```

#### 57. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L512)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, Vt, {
+         }, null, hu), (0, su.e)(uu, null, ju, {
```

#### 58. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L522)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, Dt, {
+         }, null, hu), (0, su.e)(uu, null, Zu, {
```

#### 59. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L532)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, mt, {
+         }, null, hu), (0, su.e)(uu, null, Xu, {
```

#### 60. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L542)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, dt, {
+         }, null, hu), (0, su.e)(uu, null, lu, {
```

#### 61. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L552)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, jt, {
+         }, null, hu), (0, su.e)(uu, null, qu, {
```

#### 62. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L562)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, Ht, {
+         }, null, hu), (0, su.e)(uu, null, fu, {
```

#### 63. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L572)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, Xt, {
+         }, null, hu), (0, su.e)(uu, null, Cu, {
```

#### 64. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L582)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, Qt, {
+         }, null, hu), (0, su.e)(uu, null, bu, {
```

#### 65. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L592)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, lt, {
+         }, null, hu), (0, su.e)(uu, null, cu, {
```

#### 66. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L602)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, ft, {
+         }, null, hu), (0, su.e)(uu, null, Ou, {
```

#### 67. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L612)

```diff
-         }, null, yt), (0, Ot.l)(tt, null, wt, {
+         }, null, hu), (0, su.e)(uu, null, Yu, {
```

#### 68. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L630-L632` → after: `L630-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L630-L632) · [Before (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L630-L632)

```diff
-     var wt = Vt(40514),
-       yt = Vt(40112),
-       Nt = Vt(40080);
+     var Yu = ju(40592),
+       hu = ju(40179),
+       Du = ju(40153);
```

#### 69. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L691)

```diff
-           this._useVertexPulling !== et && (this._useVertexPulling = et, this.fVt(tt.MiscDirtyFlag))
+           this._useVertexPulling !== Eu && (this._useVertexPulling = Eu, this.tEu(uu.MiscDirtyFlag))
```

#### 70. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L706)

```diff
-           this._alpha = et, 1 !== Vt && 1 !== et || this.fVt(tt.MiscDirtyFlag + tt.PrePassDirtyFlag)
+           this._alpha = Eu, 1 !== ju && 1 !== Eu || this.tEu(uu.MiscDirtyFlag + uu.PrePassDirtyFlag)
```

#### 71. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L712)

```diff
-           this._backFaceCulling !== et && (this._backFaceCulling = et, this.fVt(tt.TextureDirtyFlag))
+           this._backFaceCulling !== Eu && (this._backFaceCulling = Eu, this.tEu(uu.TextureDirtyFlag))
```

#### 72. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L719)

```diff
-           this._textureRepetitionMode !== Vt && (this._textureRepetitionMode = Vt, this.fVt(tt.TextureDirtyFlag))
+           this._textureRepetitionMode !== ju && (this._textureRepetitionMode = ju, this.tEu(uu.TextureDirtyFlag))
```

#### 73. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L725)

```diff
-           this._cullBackFaces !== et && (this._cullBackFaces = et, this.fVt(tt.TextureDirtyFlag))
+           this._cullBackFaces !== Eu && (this._cullBackFaces = Eu, this.tEu(uu.TextureDirtyFlag))
```

#### 74. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L748)

```diff
-           this._onDisposeObserver && this.ZI.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZI.add(tt)
+           this._onDisposeObserver && this.wV.remove(this._onDisposeObserver), this._onDisposeObserver = this.wV.add(uu)
```

#### 75. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L751)

```diff
-           return this._onBindObservable || (this._onBindObservable = new mt.c), this._onBindObservable
+           return this._onBindObservable || (this._onBindObservable = new Xu.d), this._onBindObservable
```

#### 76. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L757` → after: `L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L757) · [Before (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L757)

```diff
-           return this._onUnBindObservable || (this._onUnBindObservable = new mt.c), this._onUnBindObservable
+           return this._onUnBindObservable || (this._onUnBindObservable = new Xu.d), this._onUnBindObservable
```

#### 77. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L760) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L760)

```diff
-           return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new mt.c), this._onEffectCreatedObservable
+           return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Xu.d), this._onEffectCreatedObservable
```

#### 78. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L773` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L773) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L773)

```diff
-           this._alphaMode[Vt] !== et && (this._alphaMode[Vt] = et, this.fVt(tt.TextureDirtyFlag))
+           this._alphaMode[ju] !== Eu && (this._alphaMode[ju] = Eu, this.tEu(uu.TextureDirtyFlag))
```

#### 79. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L785)

```diff
-           this._fogEnabled !== et && (this._fogEnabled = et, this.fVt(tt.MiscDirtyFlag))
+           this._fogEnabled !== Eu && (this._fogEnabled = Eu, this.tEu(uu.MiscDirtyFlag))
```

#### 80. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L818` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L818) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L818)

```diff
-           this._fillMode !== et && (this._fillMode = et, this.fVt(tt.MiscDirtyFlag))
+           this._fillMode !== Eu && (this._fillMode = Eu, this.tEu(uu.MiscDirtyFlag))
```

#### 81. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L824-L825` → after: `L824-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L824-L825) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L824-L825)

```diff
-           const et = this.vI().Jf().getCaps().fragmentDepthSupported;
-           tt && !et && Xt.d.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = tt && et, this._markAllSubMeshesAsMiscDirty()
+           const Eu = this.hV().wO().getCaps().fragmentDepthSupported;
+           uu && !Eu && Cu.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = uu && Eu, this._markAllSubMeshesAsMiscDirty()
```

#### 82. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L841-L843)

```diff
-           this.customShaderNameResolve = (0, Ot.m)(this, Bt), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Ot.m)(this, pt, void 0), this.uniqueId = ((0, Ot.m)(this, xt) … [truncated]
-           const Xt = Vt || dt.d.LastCreatedScene;
-           Xt && (this._scene = Xt, this._dirtyCallbacks = {}, this._forceGLSL = jt, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMesh … [truncated]
+           this.customShaderNameResolve = (0, su.g)(this, xu), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, su.g)(this, Tu, void 0), this.uniqueId = ((0, su.g)(this, Hu) … [truncated]
+           const Cu = ju || lu.b.LastCreatedScene;
+           Cu && (this._scene = Cu, this._dirtyCallbacks = {}, this._forceGLSL = qu, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMesh … [truncated]
```

#### 83. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L846-L847` → after: `L846-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L846-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L846-L847) · [Before (L846-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L846-L847)

```diff
-           const tt = this.vI().Jf();
-           this._uniformBuffer?.dispose(), tt.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Ht.c(tt, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Ht.c(this._scene.Jf(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt  … [truncated]
+           const uu = this.hV().wO();
+           this._uniformBuffer?.dispose(), uu.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new fu.d(uu, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new fu.d(this._scene.wO(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt  … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L918)

```diff
-           const Vt = this.vI().meshes;
+           const ju = this.hV().meshes;
```

#### 85. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L920-L922` → after: `L920-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L920-L922) · [Before (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L920-L922)

```diff
-             if (tt.vJ)
-               for (const Vt of tt.vJ)
-                 if (Vt.vf() === this)
+             if (uu.iG)
+               for (const ju of uu.iG)
+                 if (ju.oO() === this)
```

#### 86. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L924)

```diff
-           et && this.fVt(tt.AllDirtyFlag)
+           Eu && this.tEu(uu.AllDirtyFlag)
```

#### 87. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L928)

```diff
-           const Ot = this._scene.Jf(),
+           const su = this._scene.wO(),
```

#### 88. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L931)

```diff
-           return (0, yt.c)(Dt) && Dt.materialContext && (Dt.materialContext.useVertexPulling = this.useVertexPulling), Ot.enableEffect(Dt), Ot.setState(this.backFaceCulling, this.zOffset, !1, qt, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this … [truncated]
+           return (0, hu.e)(Zu) && Zu.materialContext && (Zu.materialContext.useVertexPulling = this.useVertexPulling), su.enableEffect(Zu), su.setState(this.backFaceCulling, this.zOffset, !1, Uu, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this … [truncated]
```

#### 89. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L944)

```diff
-           this._useUBO ? this._needToBindSceneUbo = !0 : tt.setMatrix("view", this.vI().getViewMatrix())
+           this._useUBO ? this._needToBindSceneUbo = !0 : uu.setMatrix("view", this.hV().getViewMatrix())
```

#### 90. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L947)

```diff
-           this._useUBO ? this._needToBindSceneUbo = !0 : (tt.setMatrix("viewProjection", this.vI().getTransformMatrix()), tt.setMatrix("projection", this.vI().getProjectionMatrix()), tt.setMatrix("inverseProjection", this.vI().getInverseProjectionMatrix()))
+           this._useUBO ? this._needToBindSceneUbo = !0 : (uu.setMatrix("viewProjection", this.hV().getTransformMatrix()), uu.setMatrix("projection", this.hV().getProjectionMatrix()), uu.setMatrix("inverseProjection", this.hV().getInverseProjectionMatrix()))
```

#### 91. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L954-L955` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L954-L955) · [Before (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L954-L955)

```diff
-           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && et && (this._needToBindSceneUbo = !1, (0, wt.t)(et, this.vI().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = tt ? tt.visibility : 1, this._onBindObservable && … [truncated]
-             const tt = this._scene.Jf();
+           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Eu && (this._needToBindSceneUbo = !1, (0, Yu.B)(Eu, this.hV().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = uu ? uu.visibility : 1, this._onBindObservable && … [truncated]
+             const uu = this._scene.wO();
```

#### 92. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L959)

```diff
-             const tt = this._scene.Jf();
+             const uu = this._scene.wO();
```

#### 93. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L963)

```diff
-             const tt = this._scene.Jf();
+             const uu = this._scene.wO();
```

#### 94. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L969)

```diff
-             this._scene.Jf().setDepthFunction(this._cachedDepthFunctionState)
+             this._scene.wO().setDepthFunction(this._cachedDepthFunctionState)
```

#### 95. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L972)

```diff
-             this._scene.Jf().setDepthWrite(this._cachedDepthWriteState)
+             this._scene.wO().setDepthWrite(this._cachedDepthWriteState)
```

#### 96. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L975)

```diff
-             this._scene.Jf().setColorWrite(this._cachedColorWriteState)
+             this._scene.wO().setColorWrite(this._cachedColorWriteState)
```

#### 97. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1015)

```diff
-             Dt = this.vI(),
+             Zu = this.hV(),
```

#### 98. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1019)

```diff
-             if (!this._scene || !this._scene.Jf()) return;
+             if (!this._scene || !this._scene.wO()) return;
```

#### 99. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1021)

```diff
-             if (qt.clipPlane && (Dt.clipPlane = new Qt.b(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
+             if (Uu.clipPlane && (Zu.clipPlane = new bu.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
```

#### 100. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1024-L1025` → after: `L1024-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1024-L1025) · [Before (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1024-L1025)

```diff
-               if (tt.vJ) {
-                 const et = new jt.d(0, 0, 0, 0, 0, tt, void 0, !1, !1);
+               if (uu.iG) {
+                 const Eu = new qu.e(0, 0, 0, 0, 0, uu, void 0, !1, !1);
```

#### 101. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1043-L1044` → after: `L1043-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1043-L1044) · [Before (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1043-L1044)

```diff
-         fVt(et) {
-           this.vI().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (tt._DirtyCallbackArray.length = 0, et & tt.ImageProcessingDirtyFlag && tt._DirtyCallbackArray.push(tt._ImageProcessingDirtyCallBack), et & tt.TextureDirtyFlag && tt._DirtyCallbackArray.push(tt._Textu … [truncated]
+         tEu(Eu) {
+           this.hV().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (uu._DirtyCallbackArray.length = 0, Eu & uu.ImageProcessingDirtyFlag && uu._DirtyCallbackArray.push(uu._ImageProcessingDirtyCallBack), Eu & uu.TextureDirtyFlag && uu._DirtyCallbackArray.push(uu._Textu … [truncated]
```

#### 102. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1047)

```diff
-           const tt = this.vI().meshes;
+           const uu = this.hV().meshes;
```

#### 103. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1049-L1050` → after: `L1049-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1049-L1050) · [Before (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1049-L1050)

```diff
-             if (et.vJ)
-               for (const tt of et.vJ) tt.vf() === this && tt.resetDrawCache()
+             if (Eu.iG)
+               for (const uu of Eu.iG) uu.oO() === this && uu.resetDrawCache()
```

#### 104. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1053` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1053) · [Before (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1053)

```diff
-           const et = this.vI();
+           const Eu = this.hV();
```

#### 105. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1057-L1059` → after: `L1057-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1057-L1059) · [Before (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1057-L1059)

```diff
-             if (Ot.vJ)
-               for (const Vt of Ot.vJ) {
-                 if ((Vt.vf() || (et._hasDefaultMaterial ? et.defaultMaterial : null)) === this)
+             if (su.iG)
+               for (const ju of su.iG) {
+                 if ((ju.oO() || (Eu._hasDefaultMaterial ? Eu.defaultMaterial : null)) === this)
```

#### 106. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1064-L1066` → after: `L1064-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1064-L1066) · [Before (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1064-L1066)

```diff
-           if (this.vI().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
-           const tt = this.vI().enablePrePassRenderer();
-           tt && tt.fVt()
+           if (this.hV().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
+           const uu = this.hV().enablePrePassRenderer();
+           uu && uu.tEu()
```

#### 107. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1104)

```diff
-             this.ZI.add((() => {
+             this.wV.add((() => {
```

#### 108. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1113` → after: `L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/266.js#L1113) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/266.js#L1113)

```diff
-           const Ot = this.vI();
+           const su = this.hV();
```
