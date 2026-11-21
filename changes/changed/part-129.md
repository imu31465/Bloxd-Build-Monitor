# Changed — Bundle Modifications Report (Part 129 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `129 / 132` (**422** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 128](part-128.md) · [Part 130 →](part-130.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1026 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 765. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9577` → after: `L9577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9577) · [Before (L9577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9577)

```diff
-             for (const Ob of bb.biomeSelector.DG) Ob.biome.treeMinDist && (Lb = Math.min(Lb, Ob.biome.treeMinDist), Sb = Math.max(Sb, Ob.biome.treeMinDist));
+             for (const Nd of dd.biomeSelector.mW) Nd.biome.treeMinDist && (Zd = Math.min(Zd, Nd.biome.treeMinDist), Cd = Math.max(Cd, Nd.biome.treeMinDist));
```

#### 766. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9586-L9587` → after: `L9586-L9587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9586-L9587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9586-L9587) · [Before (L9586-L9587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9586-L9587)

```diff
-             for (let wb = bb - this.maxTreeRadius; wb < bb + this.bX + this.maxTreeRadius; wb++)
-               for (let bb = ub - this.maxTreeRadius; bb < ub + this.bX + this.maxTreeRadius; bb++) {
+             for (let ld = dd - this.maxTreeRadius; ld < dd + this.KL + this.maxTreeRadius; ld++)
+               for (let dd = Jd - this.maxTreeRadius; dd < Jd + this.KL + this.maxTreeRadius; dd++) {
```

#### 767. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9595-L9596` → after: `L9595-L9596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9595-L9596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9595-L9596) · [Before (L9595-L9596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9595-L9596)

```diff
-                   if (sb.d.isNearFixedPointPrefab(wb, bb, ab)) continue;
-                   const Zb = new Sb.h(`${wb}${bb}${this.seed}treeHeight`),
+                   if (nd.e.isNearFixedPointPrefab(ld, dd, Kd)) continue;
+                   const Qd = new Cd.j(`${ld}${dd}${this.seed}treeHeight`),
```

#### 768. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9602` → after: `L9602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602) · [Before (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602)

```diff
-                   if (Xb === Yb.v.FallenLog) {
+                   if (Ld === gd.u.FallenLog) {
```

#### 769. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9605` → after: `L9605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9605) · [Before (L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9605)

```diff
-                       if (hb.getOrGenerate(0 === Ab ? wb + ub : wb, 0 === Ab ? bb : bb + ub, Gb.e.GroundHeight) !== Bb) {
+                       if (kd.getOrGenerate(0 === Rd ? ld + Jd : ld, 0 === Rd ? dd : dd + Jd, Wd.e.GroundHeight) !== pd) {
```

#### 770. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9626-L9627` → after: `L9626-L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9626-L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9626-L9627) · [Before (L9626-L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9626-L9627)

```diff
-               Gb = null !== (hb = Ob.minHeight) && void 0 !== hb ? hb : this.minTreeHeight,
-               Ub = null !== (Bb = Ob.maxHeight) && void 0 !== Bb ? Bb : this.maxTreeHeight;
+               Wd = null !== (kd = Nd.minHeight) && void 0 !== kd ? kd : this.minTreeHeight,
+               Pd = null !== (pd = Nd.maxHeight) && void 0 !== pd ? pd : this.maxTreeHeight;
```

#### 771. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9642-L9643` → after: `L9642-L9643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9642-L9643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9642-L9643) · [Before (L9642-L9643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9642-L9643)

```diff
-               const Ob = new Sb.h(`${Gb.treeX}|${Gb.treeZ}|${Gb.trunkBase}|tree`);
-               if (Gb.treeType === Yb.v.Dead || Gb.treeType === Yb.v.FallenLog) {
+               const Nd = new Cd.j(`${Wd.treeX}|${Wd.treeZ}|${Wd.trunkBase}|tree`);
+               if (Wd.treeType === gd.u.Dead || Wd.treeType === gd.u.FallenLog) {
```

#### 772. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9660` → after: `L9660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9660) · [Before (L9660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9660)

```diff
-                 Ob >= ub && Ob < ub + this.bX && Gb >= hb && Gb < hb + this.bX && Lb >= Bb && Lb < Bb + this.bX && bb.set(Ob - ub, Gb - hb, Lb - Bb, Ub)
+                 Nd >= Jd && Nd < Jd + this.KL && Wd >= kd && Wd < kd + this.KL && Zd >= pd && Zd < pd + this.KL && dd.set(Nd - Jd, Wd - kd, Zd - pd, Pd)
```

#### 773. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9662` → after: `L9662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9662) · [Before (L9662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9662)

```diff
-             if (Ob.treeType === Yb.v.FallenLog) {
+             if (Nd.treeType === gd.u.FallenLog) {
```

#### 774. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9664` → after: `L9664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9664) · [Before (L9664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9664)

```diff
-               for (let bb = -1; bb < Hb - 1; bb++) wb(0 === Ob.vineDir ? Lb + bb : Lb, ab, 0 === Ob.vineDir ? Sb : Sb + bb);
+               for (let dd = -1; dd < od - 1; dd++) ld(0 === Nd.vineDir ? Zd + dd : Zd, Kd, 0 === Nd.vineDir ? Cd : Cd + dd);
```

#### 775. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689)

```diff
-               pb = Math.min(Zb, hb + this.bX - 1);
+               Od = Math.min(Qd, kd + this.KL - 1);
```

#### 776. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9692` → after: `L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9692) · [Before (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9692)

```diff
-               Ab = Math.min(Ub + Hb.radius, ub + this.bX - 1);
+               Rd = Math.min(Pd + od.radius, Jd + this.KL - 1);
```

#### 777. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9695` → after: `L9695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9695) · [Before (L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9695)

```diff
-               Kb = Math.min(Lb + Hb.radius, Bb + this.bX - 1);
+               Gd = Math.min(Zd + od.radius, pd + this.KL - 1);
```

#### 778. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9770` → after: `L9770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9770) · [Before (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9770)

```diff
-               if (pb !== du.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${pb}`);
+               if (Od !== qJ.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${Od}`);
```

#### 779. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9777-L9779` → after: `L9777-L9779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9777-L9779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9777-L9779) · [Before (L9777-L9779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9777-L9779)

```diff
-             const Ub = ub + this.bX,
-               Lb = hb + this.bX,
-               Yb = Bb + this.bX,
+             const Pd = Jd + this.KL,
+               Zd = kd + this.KL,
+               gd = pd + this.KL,
```

#### 780. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9805` → after: `L9805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9805) · [Before (L9805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9805)

```diff
-             const ub = this.bX >> 1,
+             const Jd = this.KL >> 1,
```

#### 781. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9830` → after: `L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830) · [Before (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830)

```diff
-             this.biomeSelector = bb, this.noWaterHeightmapGenerator = ub, this.hydrology = hb, this.lakeRadiusNoiseModifier = Gb, this.seed = Ub, this.needOutsideWaterDist = Yb, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = dd, this.noWaterHeightmapGenerator = Jd, this.hydrology = kd, this.lakeRadiusNoiseModifier = Wd, this.seed = Pd, this.needOutsideWaterDist = gd, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 782. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9840` → after: `L9840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9840) · [Before (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9840)

```diff
-               if ((0, Bb.H)(Hb, bb, ub) > Gb) continue;
+               if ((0, pd.R)(od, dd, Jd) > Wd) continue;
```

#### 783. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9844` → after: `L9844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9844) · [Before (L9844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9844)

```diff
-               const Ob = (0, Bb.F)(hb.origin, bb, ub),
+               const Nd = (0, pd.N)(kd.origin, dd, Jd),
```

#### 784. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9861` → after: `L9861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9861) · [Before (L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9861)

```diff
-             if (!(0, Yb.J)(ub)) return ub.lake;
+             if (!(0, gd.I)(Jd)) return Jd.lake;
```

#### 785. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9874` → after: `L9874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9874) · [Before (L9874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9874)

```diff
-             } = this, Gb = new Sb.h(`${bb[0]}|${bb[1]}${this.seed}oasisLake`), Ub = this.hydrology.getHydrologyWaterGenInfo(bb[0], bb[1]), Lb = Math.floor(Ub.distFromWater - Ub.waterRadius - Ob);
+             } = this, Wd = new Cd.j(`${dd[0]}|${dd[1]}${this.seed}oasisLake`), Pd = this.hydrology.getHydrologyWaterGenInfo(dd[0], dd[1]), Zd = Math.floor(Pd.distFromWater - Pd.waterRadius - Nd);
```

#### 786. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9894` → after: `L9894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9894) · [Before (L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9894)

```diff
-             this.biomeSelector = bb, this.noWaterHeightmapGenerator = ub, this.needOutsideWaterBodyDist = Ub, this.SG = Yb, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = dd, this.noWaterHeightmapGenerator = Jd, this.needOutsideWaterBodyDist = Pd, this.QW = gd, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 787. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9906` → after: `L9906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9906) · [Before (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9906)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, zu || (zu = new Hb.d("water cells", Lb ? 800 : 60, 6e4)), this.waterBodyInfos = zu.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, FJ || (FJ = new od.c("water cells", Zd ? 800 : 60, 6e4)), this.waterBodyInfos = FJ.partition();
```

#### 788. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9908` → after: `L9908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9908) · [Before (L9908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9908)

```diff
-             this.cellCenterMaxOffset = this.gridSize / 2 - Sb, this.seed = hb, this.lakeRadiusNoiseModifier = new Bb.e([{
+             this.cellCenterMaxOffset = this.gridSize / 2 - Cd, this.seed = kd, this.lakeRadiusNoiseModifier = new pd.l([{
```

#### 789. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9914` → after: `L9914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9914) · [Before (L9914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9914)

```diff
-             }], `${hb}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, Bb.y)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new Du(bb, ub, this, this.lakeRadiusNoiseModifier, hb, Ob, Ub, Lb)
+             }], `${kd}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, pd.E)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new aJ(dd, Jd, this, this.lakeRadiusNoiseModifier, kd, Nd, Pd, Zd)
```

#### 790. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9918` → after: `L9918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9918) · [Before (L9918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9918)

```diff
-             if (!this.SG) return vu(this.needOutsideWaterBodyDist);
+             if (!this.QW) return bJ(this.needOutsideWaterBodyDist);
```

#### 791. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9922` → after: `L9922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9922) · [Before (L9922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9922)

```diff
-             return null === Ob || iu(Bb) <= iu(Ob) ? Bb : Ob
+             return null === Nd || mJ(pd) <= mJ(Nd) ? pd : Nd
```

#### 792. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9948` → after: `L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948) · [Before (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948)

```diff
-                 GU: bb,
+                 gP: dd,
```

#### 793. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9951` → after: `L9951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9951) · [Before (L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9951)

```diff
-               } = (0, Bb.x)(hb, Ob.origin, Ob.downhill.origin);
+               } = (0, pd.A)(kd, Nd.origin, Nd.downhill.origin);
```

#### 794. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9963` → after: `L9963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9963) · [Before (L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9963)

```diff
-                 GU: bb,
+                 gP: dd,
```

#### 795. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9966` → after: `L9966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9966) · [Before (L9966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9966)

```diff
-               } = (0, Bb.x)(hb, wb.origin, Ob.origin), Xb = Math.floor(bb);
+               } = (0, pd.A)(kd, ld.origin, Nd.origin), Ld = Math.floor(dd);
```

#### 796. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9987` → after: `L9987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9987) · [Before (L9987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9987)

```diff
-                 Ub *= Gb.lakeRadius / this.lakeSettings.maxRadius, wb = Gb.lakeRadius - Ub, hb = (0, Bb.F)(Ob.origin, bb, ub) - wb
+                 Pd *= Wd.lakeRadius / this.lakeSettings.maxRadius, ld = Wd.lakeRadius - Pd, kd = (0, pd.N)(Nd.origin, dd, Jd) - ld
```

#### 797. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10001` → after: `L10001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10001) · [Before (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10001)

```diff
-                 const hb = (0, Bb.F)(Ob.origin, bb, ub),
+                 const kd = (0, pd.N)(Nd.origin, dd, Jd),
```

#### 798. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10028` → after: `L10028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10028) · [Before (L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10028)

```diff
-             if (!(0, Yb.J)(hb)) return this.lastReadInfo.cellX = bb, this.lastReadInfo.cellZ = ub, this.lastReadInfo.info = hb, hb;
+             if (!(0, gd.I)(kd)) return this.lastReadInfo.cellX = dd, this.lastReadInfo.cellZ = Jd, this.lastReadInfo.info = kd, kd;
```

#### 799. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10092` → after: `L10092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10092) · [Before (L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10092)

```diff
-             return -1 !== Ob ? Bb : null
+             return -1 !== Nd ? pd : null
```

#### 800. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10097` → after: `L10097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10097) · [Before (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10097)

```diff
-               Ob = new Sb.h(`${bb}${ub}${this.seed}riverCell`);
+               Nd = new Cd.j(`${dd}${Jd}${this.seed}riverCell`);
```

#### 801. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10137-L10140` → after: `L10137-L10140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10137-L10140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10137-L10140) · [Before (L10137-L10140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10137-L10140)

```diff
-           eG: 40,
-           UG: -85,
-           LG: -85,
-           NG: .5
+           yW: 40,
+           KW: -85,
+           oW: -85,
+           DW: .5
```

#### 802. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10144-L10147` → after: `L10144-L10147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10144-L10147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10144-L10147) · [Before (L10144-L10147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10144-L10147)

```diff
-           eG: 13,
-           UG: -100,
-           LG: -85,
-           NG: .28
+           yW: 13,
+           KW: -100,
+           oW: -85,
+           DW: .28
```

#### 803. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10151-L10154` → after: `L10151-L10154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10151-L10154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10151-L10154) · [Before (L10151-L10154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10151-L10154)

```diff
-           eG: 10,
-           UG: -100,
-           LG: -75,
-           NG: .4
+           yW: 10,
+           KW: -100,
+           oW: -75,
+           DW: .4
```

#### 804. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10158-L10161` → after: `L10158-L10161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10158-L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10158-L10161) · [Before (L10158-L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10158-L10161)

```diff
-           eG: 5,
-           UG: -80,
-           LG: 15,
-           NG: .5
+           yW: 5,
+           KW: -80,
+           oW: 15,
+           DW: .5
```

#### 805. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10165-L10168` → after: `L10165-L10168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10165-L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10165-L10168) · [Before (L10165-L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10165-L10168)

```diff
-           eG: 4,
-           UG: -60,
-           LG: 40,
-           NG: .5
+           yW: 4,
+           KW: -60,
+           oW: 40,
+           DW: .5
```

#### 806. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10172-L10173` → after: `L10172-L10173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10172-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10172-L10173) · [Before (L10172-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10172-L10173)

```diff
-             this.seed = ub, this.bX = hb, this.tG = void 0, this.tG = Bb.map((Bb => {
-               const Gb = new Ob.e("ore", Bb.eG, !1, !0, `${ub}${Bb.blockName}`, 20, hb, null, !0);
+             this.seed = Jd, this.KL = kd, this.nW = void 0, this.nW = pd.map((pd => {
+               const Wd = new Nd.e("ore", pd.yW, !1, !0, `${Jd}${pd.blockName}`, 20, kd, null, !0);
```

#### 807. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10175` → after: `L10175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10175) · [Before (L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10175)

```diff
-                 bS: (0, Yb.F)(Bb.blockName, bb),
+                 NC: (0, gd.D)(pd.blockName, dd),
```

#### 808. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10177-L10180` → after: `L10177-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180) · [Before (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180)

```diff
-                 eG: Bb.eG,
-                 UG: Bb.UG,
-                 LG: Bb.LG,
-                 NG: Bb.NG,
+                 yW: pd.yW,
+                 KW: pd.KW,
+                 oW: pd.oW,
+                 DW: pd.DW,
```

#### 809. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10187-L10190` → after: `L10187-L10190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10187-L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10187-L10190) · [Before (L10187-L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10187-L10190)

```diff
-               Ob = new Sb.h(`${bb}${ub}${this.seed}oreExists`);
-             for (const Gb of this.tG) {
-               const Ub = Gb.pointGenerator.getPointsAroundPoint(bb + this.bX / 2, ub + this.bX / 2),
-                 Lb = bb + this.bX + Gb.radius,
+               Nd = new Cd.j(`${dd}${Jd}${this.seed}oreExists`);
+             for (const Wd of this.nW) {
+               const Pd = Wd.pointGenerator.getPointsAroundPoint(dd + this.KL / 2, Jd + this.KL / 2),
+                 Zd = dd + this.KL + Wd.radius,
```

#### 810. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10192` → after: `L10192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10192) · [Before (L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10192)

```diff
-                 ab = ub + this.bX + Gb.radius,
+                 Kd = Jd + this.KL + Wd.radius,
```

#### 811. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10196-L10197` → after: `L10196-L10197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10196-L10197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10196-L10197) · [Before (L10196-L10197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10196-L10197)

```diff
-                 const Ub = new Sb.h(`${wb[0]}${wb[1]}${this.seed}ore`),
-                   Zb = Math.floor(Ub.next() * (Gb.LG + 1 - Gb.UG)) + Gb.UG,
+                 const Pd = new Cd.j(`${ld[0]}${ld[1]}${this.seed}ore`),
+                   Qd = Math.floor(Pd.next() * (Wd.oW + 1 - Wd.KW)) + Wd.KW,
```

#### 812. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10199` → after: `L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10199) · [Before (L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10199)

```diff
-                   pb = Math.min(bb + this.bX - 1, wb[0] + Gb.radius),
+                   Od = Math.min(dd + this.KL - 1, ld[0] + Wd.radius),
```

#### 813. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10201` → after: `L10201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201)

```diff
-                   Ab = Math.min(ub + this.bX - 1, wb[1] + Gb.radius);
+                   Rd = Math.min(Jd + this.KL - 1, ld[1] + Wd.radius);
```

#### 814. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10204` → after: `L10204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10204) · [Before (L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10204)

```diff
-                     (0, Bb.A)(wb, bb, ub) > Gb.radius || (Ob.next() >= Gb.NG || hb.push(bb, Zb, ub, Gb.bS))
+                     (0, pd.H)(ld, dd, Jd) > Wd.radius || (Nd.next() >= Wd.DW || kd.push(dd, Qd, Jd, Wd.NC))
```

#### 815. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10211` → after: `L10211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10211) · [Before (L10211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10211)

```diff
-             const Yb = hb + this.bX,
+             const gd = kd + this.KL,
```

#### 816. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10225` → after: `L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225)

```diff
-         var eu = hb(60819);
+         var XJ = kd(61090);
```

#### 817. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10235-L10236` → after: `L10235-L10236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10235-L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10235-L10236) · [Before (L10235-L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10235-L10236)

```diff
-             lG: hb,
-             rG: Bb,
+             qW: kd,
+             MW: pd,
```

#### 818. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10246` → after: `L10246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10246) · [Before (L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10246)

```diff
-           return hb.pG && Bb.push({
+           return kd.GW && pd.push({
```

#### 819. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10248-L10249` → after: `L10248-L10249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10248-L10249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10248-L10249) · [Before (L10248-L10249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10248-L10249)

```diff
-             bS: bb[ub].id
-           }), hb.oG && Bb.push({
+             NC: dd[Jd].id
+           }), kd.vW && pd.push({
```

#### 820. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10251` → after: `L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251)

```diff
-             bS: bb[`${ub}|meta|rot2|side`].id
+             NC: dd[`${Jd}|meta|rot2|side`].id
```

#### 821. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10254` → after: `L10254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10254) · [Before (L10254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10254)

```diff
-             bS: bb[`${ub}|meta|rot4|side`].id
+             NC: dd[`${Jd}|meta|rot4|side`].id
```

#### 822. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10257` → after: `L10257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10257) · [Before (L10257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10257)

```diff
-             bS: bb[`${ub}|meta|rot1|side`].id
+             NC: dd[`${Jd}|meta|rot1|side`].id
```

#### 823. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10260-L10261` → after: `L10260-L10261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10260-L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10260-L10261) · [Before (L10260-L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10260-L10261)

```diff
-             bS: bb[`${ub}|meta|rot3|side`].id
-           }), hb.AG && Bb.push({
+             NC: dd[`${Jd}|meta|rot3|side`].id
+           }), kd.xW && pd.push({
```

#### 824. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10263` → after: `L10263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10263) · [Before (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10263)

```diff
-             bS: bb[`${ub}|meta|rot1|top`].id
+             NC: dd[`${Jd}|meta|rot1|top`].id
```

#### 825. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10272-L10274` → after: `L10272-L10274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10272-L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272-L10274) · [Before (L10272-L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272-L10274)

```diff
-                 pG: !0,
-                 oG: !0,
-                 AG: !0
+                 GW: !0,
+                 vW: !0,
+                 xW: !0
```

#### 826. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10277-L10280` → after: `L10277-L10280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10277-L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277-L10280) · [Before (L10277-L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277-L10280)

```diff
-               KG: .8,
-               WG: 0,
-               lG: .12,
-               rG: .25,
+               BW: .8,
+               sW: 0,
+               qW: .12,
+               MW: .25,
```

#### 827. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10286-L10288` → after: `L10286-L10288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10286-L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10288) · [Before (L10286-L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10288)

```diff
-                 pG: !0,
-                 oG: !0,
-                 AG: !1
+                 GW: !0,
+                 vW: !0,
+                 xW: !1
```

#### 828. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10291-L10293` → after: `L10291-L10293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10291-L10293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10291-L10293) · [Before (L10291-L10293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10291-L10293)

```diff
-               KG: .7,
-               WG: 2,
-               lG: .58
+               BW: .7,
+               sW: 2,
+               qW: .58
```

#### 829. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10296` → after: `L10296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10296) · [Before (L10296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10296)

```diff
-             const hb = ub.CG;
+             const kd = Jd.iW;
```

#### 830. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10300-L10302` → after: `L10300-L10302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10300-L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10300-L10302) · [Before (L10300-L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10300-L10302)

```diff
-                 pG: ub.pG,
-                 oG: ub.oG,
-                 AG: ub.AG
+                 GW: Jd.GW,
+                 vW: Jd.vW,
+                 xW: Jd.xW
```

#### 831. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10305-L10310` → after: `L10305-L10310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10305-L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10305-L10310) · [Before (L10305-L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10305-L10310)

```diff
-               KG: ub.KG,
-               WG: ub.WG,
-               lG: ub.lG,
-               rG: null === hb || void 0 === hb ? void 0 : hb.rG,
-               shallowClusterY: null === hb || void 0 === hb ? void 0 : hb.jG,
-               deepClusterY: null === hb || void 0 === hb ? void 0 : hb.nG
+               BW: Jd.BW,
+               sW: Jd.sW,
+               qW: Jd.qW,
+               MW: null === kd || void 0 === kd ? void 0 : kd.MW,
+               shallowClusterY: null === kd || void 0 === kd ? void 0 : kd.FW,
+               deepClusterY: null === kd || void 0 === kd ? void 0 : kd.YW
```

#### 832. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10336` → after: `L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10336) · [Before (L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10336)

```diff
-               bb - Gb.floorY + 1 < Ob || Ub.push(bb === Gb.ceilingY ? Gb : {
+               dd - Wd.floorY + 1 < Nd || Pd.push(dd === Wd.ceilingY ? Wd : {
```

#### 833. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10346` → after: `L10346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10346) · [Before (L10346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10346)

```diff
-             this.heightmapVals = bb, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new Bb.k(new Vu(ub)), this.decoratableCavesCache = new Bb.k(new Fu(ub, bb, hb, Ob))
+             this.heightmapVals = dd, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new pd.r(new rJ(Jd)), this.decoratableCavesCache = new pd.r(new uJ(Jd, dd, kd, Nd))
```

#### 834. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10371` → after: `L10371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10371) · [Before (L10371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10371)

```diff
-             ku(bb + Yb.offset[0], ub + Yb.offset[1], hb + Yb.offset[2], Gb) && (Yb.offset === Nu ? Ub = Yb : Lb.push(Yb))
+             VJ(dd + gd.offset[0], Jd + gd.offset[1], kd + gd.offset[2], Wd) && (gd.offset === fJ ? Pd = gd : Zd.push(gd))
```

#### 835. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10373` → after: `L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10373) · [Before (L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10373)

```diff
-           return null !== Ub ? Ub : 0 === Lb.length ? null : Lb[Math.floor(Ob * Lb.length)]
+           return null !== Pd ? Pd : 0 === Zd.length ? null : Zd[Math.floor(Nd * Zd.length)]
```

#### 836. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10378` → after: `L10378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378) · [Before (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378)

```diff
-             this.bX = ub, this.seed = hb, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.KL = Jd, this.seed = kd, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 837. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10384` → after: `L10384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10384) · [Before (L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10384)

```diff
-               if (!Number.isInteger(Ob.clusterBoxSize) || Ob.clusterBoxSize < 2 || Ob.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${Ob.seedPrefix}" has invalid clusterBoxSize (${Ob.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(Nd.clusterBoxSize) || Nd.clusterBoxSize < 2 || Nd.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${Nd.seedPrefix}" has invalid clusterBoxSize (${Nd.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 838. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10386` → after: `L10386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10386) · [Before (L10386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10386)

```diff
-               bb > Ub && (Ub = bb), Lb += Math.max(Ob.lG, null !== (Yb = Ob.rG) && void 0 !== Yb ? Yb : Ob.lG)
+               dd > Pd && (Pd = dd), Zd += Math.max(Nd.qW, null !== (gd = Nd.MW) && void 0 !== gd ? gd : Nd.qW)
```

#### 839. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10388` → after: `L10388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10388) · [Before (L10388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10388)

```diff
-             if (Lb > 1) throw new Error(`Cave decoration cluster chances sum to ${Lb} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             if (Zd > 1) throw new Error(`Cave decoration cluster chances sum to ${Zd} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
```

#### 840. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10393` → after: `L10393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10393) · [Before (L10393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10393)

```diff
-               Gb = this.bX,
+               Wd = this.KL,
```

#### 841. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10410` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410)

```diff
-             for (const Lb of Gb) Lb.y >= hb && Lb.y < Ub && bb.set(Lb.x - ub, Lb.y - hb, Lb.z - Bb, Lb.bS)
+             for (const Zd of Wd) Zd.y >= kd && Zd.y < Pd && dd.set(Zd.x - Jd, Zd.y - kd, Zd.z - pd, Zd.NC)
```

#### 842. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10415` → after: `L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10415) · [Before (L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10415)

```diff
-             const ab = new Sb.h(`${this.seed}|${bb}|${ub}|cluster`),
+             const Kd = new Cd.j(`${this.seed}|${dd}|${Jd}|cluster`),
```

#### 843. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10429` → after: `L10429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10429) · [Before (L10429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10429)

```diff
-             if (this.scatterClusterCells(bb, pb, ub, Ab, Ub, ab, lb), !(lb.length < Ab.WG))
+             if (this.scatterClusterCells(dd, Od, Jd, Rd, Pd, Kd, Id), !(Id.length < Rd.sW))
```

#### 844. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10435` → after: `L10435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10435) · [Before (L10435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10435)

```diff
-               KG: Yb,
+               BW: gd,
```

#### 845. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10455` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455)

```diff
-                     bS: lb.bS
+                     NC: Id.NC
```

#### 846. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10469` → after: `L10469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10469) · [Before (L10469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10469)

```diff
-             this.prefabGenerator = Bb, this.seed = void 0, this.bX = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = pd, this.seed = void 0, this.KL = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 847. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10472` → after: `L10472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10472) · [Before (L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10472)

```diff
-             if (hb + this.bX <= Ub.r.bedrockLevel) return {
+             if (kd + this.KL <= Pd.p.bedrockLevel) return {
```

#### 848. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10479-L10481` → after: `L10479-L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10479-L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10479-L10481) · [Before (L10479-L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10479-L10481)

```diff
-             if (Wb >= hb && Kb < hb + this.bX)
-               for (let Bb = ub; Bb < ub + this.bX; Bb++)
-                 for (let Yb = Ob; Yb < Ob + this.bX; Yb++) {
+             if (vd >= kd && Gd < kd + this.KL)
+               for (let pd = Jd; pd < Jd + this.KL; pd++)
+                 for (let gd = Nd; gd < Nd + this.KL; gd++) {
```

#### 849. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10485-L10486` → after: `L10485-L10486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10485-L10486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10485-L10486) · [Before (L10485-L10486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10485-L10486)

```diff
-                   if (Hb >= hb && Hb < hb + this.bX) {
-                     const Sb = Lb.get(Bb, Yb, Gb.e.IsLake) === Ub.e ? ab.getDryBedBlock(Bb, Hb, Yb) : ab.getTopsoilBlock(Bb, Hb, Yb);
+                   if (od >= kd && od < kd + this.KL) {
+                     const Cd = Zd.get(pd, gd, Wd.e.IsLake) === Pd.g ? Kd.getDryBedBlock(pd, od, gd) : Kd.getTopsoilBlock(pd, od, gd);
```

#### 850. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10490-L10492` → after: `L10490-L10492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10490-L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10490-L10492) · [Before (L10490-L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10490-L10492)

```diff
-             if (Wb + 1 >= hb && Kb - 4 < hb + this.bX)
-               for (let Bb = ub; Bb < ub + this.bX; Bb++)
-                 for (let Ub = Ob; Ub < Ob + this.bX; Ub++) {
+             if (vd + 1 >= kd && Gd - 4 < kd + this.KL)
+               for (let pd = Jd; pd < Jd + this.KL; pd++)
+                 for (let Pd = Nd; Pd < Nd + this.KL; Pd++) {
```

#### 851. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10496` → after: `L10496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10496) · [Before (L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10496)

```diff
-                     Hb = Math.min(ab, hb + this.bX);
+                     od = Math.min(Kd, kd + this.KL);
```

#### 852. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10504-L10505` → after: `L10504-L10505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10504-L10505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10504-L10505) · [Before (L10504-L10505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10504-L10505)

```diff
-               for (let hb = Math.max(Ob - 4, 0); hb < Math.min(Ob, this.bX); hb++) bb.set(ub, hb, Gb, this.dirtId);
-               Ob >= 0 && Ob < this.bX && bb.set(ub, Ob, Gb, this.grassBlockId)
+               for (let kd = Math.max(Nd - 4, 0); kd < Math.min(Nd, this.KL); kd++) dd.set(Jd, kd, Wd, this.dirtId);
+               Nd >= 0 && Nd < this.KL && dd.set(Jd, Nd, Wd, this.grassBlockId)
```

#### 853. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10509-L10510` → after: `L10509-L10510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10509-L10510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10509-L10510) · [Before (L10509-L10510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10509-L10510)

```diff
-               for (let Ub = ub; Ub < ub + this.bX; Ub++)
-                 for (let Yb = Ob; Yb < Ob + this.bX; Yb++) {
+               for (let Pd = Jd; Pd < Jd + this.KL; Pd++)
+                 for (let gd = Nd; gd < Nd + this.KL; gd++) {
```

#### 854. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10513` → after: `L10513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10513) · [Before (L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10513)

```diff
-                     Hb = Math.min(ab - 4, hb + this.bX),
+                     od = Math.min(Kd - 4, kd + this.KL),
```

#### 855. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10518` → after: `L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10518) · [Before (L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10518)

```diff
-                     bb.set(Ub - ub, Bb - hb, Yb - Ob, 0 !== Gb ? Gb : Sb)
+                     dd.set(Pd - Jd, pd - kd, gd - Nd, 0 !== Wd ? Wd : Cd)
```

#### 856. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10522-L10524` → after: `L10522-L10524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10522-L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10522-L10524) · [Before (L10522-L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10522-L10524)

```diff
-             if (Wb - 4 >= hb && this.oreGenerator.addOresToChunk(bb, ub, hb, Ob, 4, Lb, wb), Wb >= hb && (ob.addCavesToChunk(bb, ub, hb, Ob, Lb, Hb), cu.addCaveDecorationsToChunk(bb, ub, hb, Ob, this.bX, pb)), Ub.r.bedrockLevel >= hb && Ub.r.bedrockLevel < hb + this.bX)
-               for (let Bb = ub; Bb < ub + this.bX; Bb++)
-                 for (let Gb = Ob; Gb < Ob + this.bX; Gb++) bb.set(Bb - ub, Ub.r.bedrockLevel - hb, Gb - Ob, this.bedrockId);
+             if (vd - 4 >= kd && this.oreGenerator.addOresToChunk(dd, Jd, kd, Nd, 4, Zd, ld), vd >= kd && (ed.addCavesToChunk(dd, Jd, kd, Nd, Zd, od), HJ.addCaveDecorationsToChunk(dd, Jd, kd, Nd, this.KL, Od)), Pd.p.bedrockLevel >= kd && Pd.p.bedrockLevel < kd + this.KL)
+               for (let pd = Jd; pd < Jd + this.KL; pd++)
+                 for (let Wd = Nd; Wd < Nd + this.KL; Wd++) dd.set(pd - Jd, Pd.p.bedrockLevel - kd, Wd - Nd, this.bedrockId);
```

#### 857. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10527-L10529` → after: `L10527-L10529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10527-L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10527-L10529) · [Before (L10527-L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10527-L10529)

```diff
-               for (let Gb = ub; Gb < ub + this.bX; Gb++)
-                 for (let Ub = hb; Ub < hb + this.bX; Ub++)
-                   for (let Lb = Ob; Lb < Ob + this.bX; Lb++) {
+               for (let Wd = Jd; Wd < Jd + this.KL; Wd++)
+                 for (let Pd = kd; Pd < kd + this.KL; Pd++)
+                   for (let Zd = Nd; Zd < Nd + this.KL; Zd++) {
```

#### 858. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10540-L10541` → after: `L10540-L10541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10540-L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10540-L10541) · [Before (L10540-L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10540-L10541)

```diff
-               for (let hb = Math.max(Gb, 0); hb < Math.min(Ub, this.bX); hb++) bb.set(ub, hb, Ob, this.waterId);
-               Ub >= 0 && Ub < this.bX && bb.set(ub, Ub, Ob, jb[Bb + 4])
+               for (let kd = Math.max(Wd, 0); kd < Math.min(Pd, this.KL); kd++) dd.set(Jd, kd, Nd, this.waterId);
+               Pd >= 0 && Pd < this.KL && dd.set(Jd, Pd, Nd, sd[pd + 4])
```

#### 859. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10544-L10546` → after: `L10544-L10546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10544-L10546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544-L10546) · [Before (L10544-L10546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544-L10546)

```diff
-             if (this.addSurfaceBlocks(bb, hb, Ab.lilyPads), Cb && Wb >= hb && Kb < hb + this.bX)
-               for (let ob = ub; ob < ub + this.bX; ob++)
-                 for (let Yb = Ob; Yb < Ob + this.bX; Yb++) {
+             if (this.addSurfaceBlocks(dd, kd, Rd.lilyPads), xd && vd >= kd && Gd < kd + this.KL)
+               for (let ed = Jd; ed < Jd + this.KL; ed++)
+                 for (let gd = Nd; gd < Nd + this.KL; gd++) {
```

#### 860. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10549` → after: `L10549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10549) · [Before (L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10549)

```diff
-                   if (ab !== Ub.n && Hb >= hb && Hb < hb + this.bX)
+                   if (Kd !== Pd.n && od >= kd && od < kd + this.KL)
```

#### 861. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10553` → after: `L10553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553) · [Before (L10553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553)

```diff
-                       if ((0, Bb.H)(Gb, ob, Yb) < 100) nb === Gb[0] && Db === Gb[1] || (nb = Gb[0], Db = Gb[1], xb = new Sb.h(`${this.seed}${nb}${Db}`).next() < .3 ? this.chalkId : this.clayId), bb.set(ob - ub, Hb - hb, Yb - Ob, xb), Hb - 1 >= hb && bb.set(ob - ub, Hb - 1 - hb, Y … [truncated]
+                       if ((0, pd.R)(Wd, ed, gd) < 100) id === Wd[0] && ad === Wd[1] || (id = Wd[0], ad = Wd[1], Md = new Cd.j(`${this.seed}${id}${ad}`).next() < .3 ? this.chalkId : this.clayId), dd.set(ed - Jd, od - kd, gd - Nd, Md), od - 1 >= kd && dd.set(ed - Jd, od - 1 - kd, g … [truncated]
```

#### 862. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10562-L10565` → after: `L10562-L10565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10562-L10565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10562-L10565) · [Before (L10562-L10565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10562-L10565)

```diff
-               for (let Gb = ub; Gb < ub + this.bX; Gb++)
-                 for (let Ub = hb; Ub < hb + this.bX; Ub++)
-                   for (let Lb = Ob; Lb < Ob + this.bX; Lb++) {
-                     const Yb = sb.d.getBlockFromFixedPointPrefab(Gb, Ub, Lb, Bb);
+               for (let Wd = Jd; Wd < Jd + this.KL; Wd++)
+                 for (let Pd = kd; Pd < kd + this.KL; Pd++)
+                   for (let Zd = Nd; Zd < Nd + this.KL; Zd++) {
+                     const gd = nd.e.getBlockFromFixedPointPrefab(Wd, Pd, Zd, pd);
```

#### 863. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10586` → after: `L10586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10586) · [Before (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10586)

```diff
-               Ob >= 0 && Ob < this.bX && bb.set(hb[Bb], Ob, hb[Bb + 2], hb[Bb + 3])
+               Nd >= 0 && Nd < this.KL && dd.set(kd[pd], Nd, kd[pd + 2], kd[pd + 3])
```

#### 864. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10600` → after: `L10600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10600) · [Before (L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10600)

```diff
-             this.bX = bb, this.biomeSelector = ub, this.seed = hb, this.random = new Sb.h(""), this.lilyPadId = void 0, this.lilyPadId = Bb["Lily Pad"].id
+             this.KL = dd, this.biomeSelector = Jd, this.seed = kd, this.random = new Cd.j(""), this.lilyPadId = void 0, this.lilyPadId = pd["Lily Pad"].id
```

#### 865. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10610-L10611` → after: `L10610-L10611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10610-L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10610-L10611) · [Before (L10610-L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10610-L10611)

```diff
-             for (let pb = bb; pb < bb + this.bX; pb++)
-               for (let Ab = ub; Ab < ub + this.bX; Ab++) {
+             for (let Od = dd; Od < dd + this.KL; Od++)
+               for (let Rd = Jd; Rd < Jd + this.KL; Rd++) {
```

#### 866. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10619` → after: `L10619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10619) · [Before (L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10619)

```diff
-                   Xb = !0, Kb < Wb && Yb.push(Cb, db, Kb + 1, Wb, lb.topwaterBlockType), lb.hasScatteredLakes && 1 === hb.getOrGenerate(pb, Ab, Gb.e.IsLake) && (this.random.reseed(`${pb}|${Ab}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(pb, Ab, hb) && ab … [truncated]
+                   Ld = !0, Gd < vd && gd.push(xd, qd, Gd + 1, vd, Id.topwaterBlockType), Id.hasScatteredLakes && 1 === kd.getOrGenerate(Od, Rd, Wd.e.IsLake) && (this.random.reseed(`${Od}|${Rd}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(Od, Rd, kd) && Kd … [truncated]
```

#### 867. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10623-L10624` → after: `L10623-L10624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10623-L10624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10623-L10624) · [Before (L10623-L10624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10623-L10624)

```diff
-                 if (lb.hasScatteredLakes && this.isBesideLake(pb, Ab, hb) && (this.random.reseed(`${pb}|${Ab}|${this.seed}oasisShore`), this.random.next() < .85 && (Sb.push(Cb, Kb, db), rb = this.biomeSelector.baseBiome.floraGenerator)), !ob.isInCave(pb, Kb, Ab, Bb) && !sb.d.isWi … [truncated]
-                   for (let hb = Kb + 1; hb <= Kb + lb.maxFloraHeight; hb += this.bX) Hb.startY = hb, rb.addBiomeFloraToColumn(Hb, bb, ub, pb, hb, Ab, Kb)
+                 if (Id.hasScatteredLakes && this.isBesideLake(Od, Rd, kd) && (this.random.reseed(`${Od}|${Rd}|${this.seed}oasisShore`), this.random.next() < .85 && (Cd.push(xd, Gd, qd), Bd = this.biomeSelector.baseBiome.floraGenerator)), !ed.isInCave(Od, Gd, Rd, pd) && !nd.e.isWi … [truncated]
+                   for (let kd = Gd + 1; kd <= Gd + Id.maxFloraHeight; kd += this.KL) od.startY = kd, Bd.addBiomeFloraToColumn(od, dd, Jd, Od, kd, Rd, Gd)
```

#### 868. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10646` → after: `L10646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10646) · [Before (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10646)

```diff
-         var hh = hb(60724);
+         var kk = kd(60999);
```

#### 869. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10651` → after: `L10651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10651) · [Before (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10651)

```diff
-             if (this.bX = bb, this.hashChunkContents = ab, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.KL = dd, this.hashChunkContents = Kd, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 870. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10653` → after: `L10653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10653) · [Before (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10653)

```diff
-               Bh = new Hb.d("chunk columns", bb, 4e4)
+               pk = new od.c("chunk columns", dd, 4e4)
```

#### 871. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10655-L10656` → after: `L10655-L10656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10655-L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10655-L10656) · [Before (L10655-L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10655-L10656)

```diff
-             this.chunkColumnInfos = Bh.partition(), this.caveGenerator = new ob(Ob, bb, ub, null !== (wb = null === Yb || void 0 === Yb ? void 0 : Yb.aG.wG) && void 0 !== wb ? wb : "Lava");
-             const Wb = new Ju(ub, Ob, bb, null !== (Zb = null === Yb || void 0 === Yb ? void 0 : Yb.tG) && void 0 !== Zb ? Zb : [...tu, ...null !== (Xb = null === Sb || void 0 === Sb ? void 0 : Sb.PG) && void 0 !== Xb ? Xb : []]),
+             this.chunkColumnInfos = pk.partition(), this.caveGenerator = new ed(Nd, dd, Jd, null !== (ld = null === gd || void 0 === gd ? void 0 : gd.LW.eW) && void 0 !== ld ? ld : "Lava");
+             const vd = new jJ(Jd, Nd, dd, null !== (Qd = null === gd || void 0 === gd ? void 0 : gd.nW) && void 0 !== Qd ? Qd : [...SJ, ...null !== (Ld = null === Cd || void 0 === Cd ? void 0 : Cd.rW) && void 0 !== Ld ? Ld : []]),
```

#### 872. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10658` → after: `L10658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10658) · [Before (L10658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10658)

```diff
-                 bX: bb,
+                 KL: dd,
```

#### 873. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10666-L10669` → after: `L10666-L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10666-L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10666-L10669) · [Before (L10666-L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10666-L10669)

```diff
-               db = null !== (pb = null === Yb || void 0 === Yb ? void 0 : Yb.DG) && void 0 !== pb ? pb : null,
-               rb = null !== (Ab = null === Sb || void 0 === Sb ? void 0 : Sb.buildBiomes) && void 0 !== Ab ? Ab : null,
-               jb = null !== db ? (0, eu.i)(db, Cb) : null !== rb ? this.buildTerrainBiomes(rb, Cb) : (0, eu.m)(Cb);
-             this.biomeSelector = new eu.e(this, Wb, Ob, bb, ub, jb), this.treeGenerator = new ru(this, this.biomeSelector, bb, Ob, ub), this.fixedPointPrefabTracker = new sb.d(Lb, bb), this.prefabGenerator = new Xu({
+               qd = null !== (Od = null === gd || void 0 === gd ? void 0 : gd.mW) && void 0 !== Od ? Od : null,
+               Bd = null !== (Rd = null === Cd || void 0 === Cd ? void 0 : Cd.buildBiomes) && void 0 !== Rd ? Rd : null,
+               sd = null !== qd ? (0, XJ.e)(qd, xd) : null !== Bd ? this.buildTerrainBiomes(Bd, xd) : (0, XJ.g)(xd);
+             this.biomeSelector = new XJ.d(this, vd, Nd, dd, Jd, sd), this.treeGenerator = new BJ(this, this.biomeSelector, dd, Nd, Jd), this.fixedPointPrefabTracker = new nd.e(Zd, dd), this.prefabGenerator = new LJ({
```

#### 874. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10671` → after: `L10671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10671) · [Before (L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10671)

```diff
-               bX: bb,
+               KL: dd,
```

#### 875. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10675` → after: `L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10675) · [Before (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10675)

```diff
-                 [Gb.n.SURFACE]: {
+                 [Wd.j.SURFACE]: {
```

#### 876. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-                     [Gb.k.MEDIUM]: {
+                     [Wd.h.MEDIUM]: {
```

#### 877. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10680` → after: `L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10680) · [Before (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10680)

```diff
-                     [Gb.k.HIGH]: {
+                     [Wd.h.HIGH]: {
```

#### 878. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10683` → after: `L10683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10683) · [Before (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10683)

```diff
-                     [Gb.k.VERY_HIGH]: {
+                     [Wd.h.VERY_HIGH]: {
```

#### 879. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10688` → after: `L10688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10688) · [Before (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10688)

```diff
-                 [Gb.n.UNDERGROUND]: {
+                 [Wd.j.UNDERGROUND]: {
```

#### 880. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10690` → after: `L10690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10690) · [Before (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10690)

```diff
-                     [Gb.k.MEDIUM]: {
+                     [Wd.h.MEDIUM]: {
```

#### 881. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10693-L10694` → after: `L10693-L10694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10693-L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10693-L10694) · [Before (L10693-L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10693-L10694)

```diff
-                     [Gb.k.HIGH]: null,
-                     [Gb.k.VERY_HIGH]: null
+                     [Wd.h.HIGH]: null,
+                     [Wd.h.VERY_HIGH]: null
```

#### 882. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10699` → after: `L10699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10699) · [Before (L10699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10699)

```diff
-             }), this.noWaterHeightmapGenerator = new hh.e((0, hh.i)(Ob)), this.heightmapPerturb = new Bb.e([{
+             }), this.noWaterHeightmapGenerator = new kk.h((0, kk.j)(Nd)), this.heightmapPerturb = new pd.l([{
```

#### 883. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10708` → after: `L10708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10708) · [Before (L10708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10708)

```diff
-             }], `${Ob}HeightmapPerturb`);
+             }], `${Nd}HeightmapPerturb`);
```

#### 884. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-             this.waterBodyGenerator = new gu(this.biomeSelector, this.noWaterHeightmapGenerator, Ob, bb, nb, this.needOutsideWaterDist, Ub, null === (lb = null === Yb || void 0 === Yb ? void 0 : Yb.SG) || void 0 === lb || lb), this.caveDecorationGenerator = new cu(ub, bb, Ob, nul … [truncated]
+             this.waterBodyGenerator = new YJ(this.biomeSelector, this.noWaterHeightmapGenerator, Nd, dd, id, this.needOutsideWaterDist, Pd, null === (Id = null === gd || void 0 === gd ? void 0 : gd.QW) || void 0 === Id || Id), this.caveDecorationGenerator = new HJ(Jd, dd, Nd, nul … [truncated]
```

#### 885. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10733` → after: `L10733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10733) · [Before (L10733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10733)

```diff
-             const hb = this.bX,
+             const kd = this.KL,
```

#### 886. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10751` → after: `L10751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10751) · [Before (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10751)

```diff
-               if ((null !== (Ob = Bb.get(Gb.key)) && void 0 !== Ob ? Ob : Gb) !== Gb) throw new Error(`A world-gen terrain built two biomes keyed "${Gb.key}"`);
+               if ((null !== (Nd = pd.get(Wd.key)) && void 0 !== Nd ? Nd : Wd) !== Wd) throw new Error(`A world-gen terrain built two biomes keyed "${Wd.key}"`);
```

#### 887. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10761-L10762` → after: `L10761-L10762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10761-L10762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10761-L10762) · [Before (L10761-L10762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10761-L10762)

```diff
-               const bb = `${Math.floor(Yb.x/this.bX)}|${Math.floor(Yb.z/this.bX)}`,
-                 ub = null !== (Ub = Gb.get(bb)) && void 0 !== Ub ? Ub : [];
+               const dd = `${Math.floor(gd.x/this.KL)}|${Math.floor(gd.z/this.KL)}`,
+                 Jd = null !== (Pd = Wd.get(dd)) && void 0 !== Pd ? Pd : [];
```

#### 888. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10767-L10768` → after: `L10767-L10768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10767-L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10767-L10768) · [Before (L10767-L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10767-L10768)

```diff
-               const bb = Math.floor(Yb[0].x / this.bX) * this.bX,
-                 ub = Math.floor(Yb[0].z / this.bX) * this.bX,
+               const dd = Math.floor(gd[0].x / this.KL) * this.KL,
+                 Jd = Math.floor(gd[0].z / this.KL) * this.KL,
```

#### 889. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10789` → after: `L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10789) · [Before (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10789)

```diff
-                   hG: Sb.prefab.name
+                   WW: Cd.prefab.name
```

#### 890. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10822` → after: `L10822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10822) · [Before (L10822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10822)

```diff
-               ab = Bb.getOrGenerate(bb + Math.floor(this.bX / 2), ub + Math.floor(this.bX / 2))[0].biome.oreGenerator.getOreBlocksForChunk(bb, ub),
+               Kd = pd.getOrGenerate(dd + Math.floor(this.KL / 2), Jd + Math.floor(this.KL / 2))[0].biome.oreGenerator.getOreBlocksForChunk(dd, Jd),
```

#### 891. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10840` → after: `L10840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10840) · [Before (L10840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10840)

```diff
-             return Bb.s.create(this.bX, [bb, ub], this.biomeSelector)
+             return pd.u.create(this.KL, [dd, Jd], this.biomeSelector)
```

#### 892. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10844` → after: `L10844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10844) · [Before (L10844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10844)

```diff
-             return Bb.o.create(this.bX, [bb, ub], Gb.e.NumFields, Ub)
+             return pd.s.create(this.KL, [dd, Jd], Wd.e.NumFields, Pd)
```

#### 893. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-       60728: (bb, ub, hb) => {
+       61001: (dd, Jd, kd) => {
```

#### 894. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10850-L10855` → after: `L10850-L10854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10850-L10854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10850-L10854) · [Before (L10850-L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10850-L10855)

```diff
-           b: () => mb,
-           c: () => nb,
-           e: () => rb,
-           g: () => jb,
-           k: () => ib,
-           o: () => eb,
+           d: () => yd,
+           h: () => id,
+           l: () => Bd,
+           p: () => sd,
+           r: () => md,
```

#### 895. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10862-L10863` → after: `L10860-L10863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10860-L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10860-L10863) · [Before (L10862-L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10862-L10863)

```diff
-           F: () => lb,
-           H: () => Ab
+           H: () => Od,
+           J: () => xd,
+           N: () => Id,
+           R: () => Rd
```

#### 896. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10865` → after: `L10865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10865) · [Before (L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10865)

```diff
-         var Bb = hb(2653),
+         var pd = kd(2736),
```

#### 897. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10878` → after: `L10878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10878) · [Before (L10878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10878)

```diff
-             const ub = "function" == typeof bb ? bb : function(bb) {
+             const Jd = "function" == typeof dd ? dd : function(dd) {
```

#### 898. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11087` → after: `L11087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11087) · [Before (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11087)

```diff
-         var Xb = hb(60734);
+         var Ld = kd(61009);
```

#### 899. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11116` → after: `L11116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11116) · [Before (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11116)

```diff
-             GU: lb(bb, Gb, Ub),
+             gP: Id(dd, Wd, Pd),
```

#### 900. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11147` → after: `L11147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11147) · [Before (L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11147)

```diff
-             for (let hb = 0; hb < bb.length; hb++) this._simplexes.push(new Zb(`${ub}${hb}`))
+             for (let kd = 0; kd < dd.length; kd++) this._simplexes.push(new Qd(`${Jd}${kd}`))
```

#### 901. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11172` → after: `L11172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11172) · [Before (L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11172)

```diff
-             for (let Ob = 0; Ob < bb.length; Ob++) this._simplexes.push(new Zb(`${hb}${Ob}`));
+             for (let Nd = 0; Nd < dd.length; Nd++) this._simplexes.push(new Qd(`${kd}${Nd}`));
```

#### 902. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11180` → after: `L11180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11180) · [Before (L11180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11180)

```diff
-               if (hb - this.remainingAmplitudes[Bb] > this.threshold.high || hb + this.remainingAmplitudes[Bb] < this.threshold.low) return Xb.b;
+               if (kd - this.remainingAmplitudes[pd] > this.threshold.high || kd + this.remainingAmplitudes[pd] < this.threshold.low) return Ld.d;
```

#### 903. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11308` → after: `L11308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11308) · [Before (L11308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11308)

```diff
-             if (void 0 === Bb) throw new Error(`Number not found for x=${bb}, z=${ub}, thirdIndex=${hb}`);
+             if (void 0 === pd) throw new Error(`Number not found for x=${dd}, z=${Jd}, thirdIndex=${kd}`);
```

#### 904. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11357` → after: `L11357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11357) · [Before (L11357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11357)

```diff
-             if (void 0 === Ob) throw new Error(`Number not found for x=${bb}, z=${ub}, thirdIndex=${hb}, fourthIndex=${Bb}`);
+             if (void 0 === Nd) throw new Error(`Number not found for x=${dd}, z=${Jd}, thirdIndex=${kd}, fourthIndex=${pd}`);
```

#### 905. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11387` → after: `L11387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11387) · [Before (L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11387)

```diff
-       60734: (bb, ub, hb) => {
+       61009: (dd, Jd, kd) => {
```

#### 906. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11389-L11390` → after: `L11389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11389) · [Before (L11389-L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11389-L11390)

```diff
-           b: () => Yb,
-           c: () => Ub,
+           d: () => gd,
```

#### 907. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11393` → after: `L11392-L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11392-L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11392-L11393) · [Before (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11393)

```diff
-           k: () => Lb,
+           h: () => Wd,
+           l: () => Zd,
```

#### 908. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11395` → after: `L11395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11395) · [Before (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11395)

```diff
-           r: () => Bb
+           p: () => pd
```

#### 909. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11408` → after: `L11408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11408) · [Before (L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11408)

```diff
-       60743: (bb, ub, hb) => {
+       61013: (dd, Jd, kd) => {
```

#### 910. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11410` → after: `L11410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11410) · [Before (L11410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11410)

```diff
-           d: () => Ob,
+           c: () => Nd,
```

#### 911. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11412-L11415` → after: `L11412-L11415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11412-L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11412-L11415) · [Before (L11412-L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11412-L11415)

```diff
-           g: () => Yb,
-           k: () => Lb,
-           n: () => Ub,
-           q: () => Gb
+           f: () => gd,
+           h: () => Zd,
+           j: () => Pd,
+           m: () => Wd
```

#### 912. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       4024: (bb, ub, hb) => {
+       4099: (dd, Jd, kd) => {
```

#### 913. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11439` → after: `L11438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11438) · [Before (L11439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11439)

```diff
-           k: () => Lb,
+           j: () => pd,
```

#### 914. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11441` → after: `L11440-L11441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11440-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11440-L11441) · [Before (L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11441)

```diff
-           p: () => Ob
+           m: () => Pd,
+           n: () => Nd
```

#### 915. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11467` → after: `L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11467) · [Before (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11467)

```diff
-             if (this.distribution = void 0, bb.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(bb)}`);
+             if (this.distribution = void 0, dd.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(dd)}`);
```

#### 916. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11472` → after: `L11472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11472) · [Before (L11472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11472)

```diff
-               if (ub.has(Bb)) throw new Error(`Values must be unique: ${JSON.stringify(bb)}`);
+               if (Jd.has(pd)) throw new Error(`Values must be unique: ${JSON.stringify(dd)}`);
```

#### 917. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11475` → after: `L11475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11475) · [Before (L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11475)

```diff
-               if (Gb <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(bb)}`);
+               if (Wd <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(dd)}`);
```

#### 918. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11500` → after: `L11500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11500) · [Before (L11500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11500)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, bb > ub) throw new Error(`Min must be less than or equal to Max, but Min=${bb} and Max=${ub}`);
+             if (this.offset = void 0, this.multiplier = void 0, dd > Jd) throw new Error(`Min must be less than or equal to Max, but Min=${dd} and Max=${Jd}`);
```

#### 919. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11510` → after: `L11510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11510) · [Before (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11510)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new Ub(bb, ub, hb), !Number.isInteger(bb) || !Number.isInteger(ub)) throw new Error(`Min and Max must be integers, but Min=${bb} and Max=${ub}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new Pd(dd, Jd, kd), !Number.isInteger(dd) || !Number.isInteger(Jd)) throw new Error(`Min and Max must be integers, but Min=${dd} and Max=${Jd}`)
```

#### 920. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-       588: (bb, ub, hb) => {
+       610: (dd, Jd, kd) => {
```

#### 921. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11528` → after: `L11528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11528) · [Before (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11528)

```diff
-           A: () => Sb,
+           B: () => Qd,
```

#### 922. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11530-L11531` → after: `L11530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11530) · [Before (L11530-L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11530-L11531)

```diff
-           F: () => Xb,
-           J: () => Yb,
+           I: () => gd,
```

#### 923. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11533-L11535` → after: `L11532-L11535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11532-L11535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11532-L11535) · [Before (L11533-L11535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11533-L11535)

```diff
-           b: () => Lb,
-           h: () => Ub,
-           l: () => Ob,
+           e: () => Zd,
+           j: () => Pd,
+           n: () => Nd,
+           u: () => Wd,
```

#### 924. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11537` → after: `L11537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11537) · [Before (L11537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11537)

```diff
-           y: () => wb
+           x: () => Cd
```

#### 925. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11539` → after: `L11539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11539) · [Before (L11539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11539)

```diff
-         var Bb = hb(595);
+         var pd = kd(614);
```

#### 926. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11569` → after: `L11569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11569) · [Before (L11569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11569)

```diff
-         Bb.b, Number(atob("NQ==")), Number(atob("MTM="));
+         pd.c, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 927. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11577` → after: `L11577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11577) · [Before (L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11577)

```diff
-       595: (bb, ub, hb) => {
+       614: (dd, Jd, kd) => {
```

#### 928. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11579` → after: `L11579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11579) · [Before (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11579)

```diff
-           b: () => Bb
+           c: () => pd
```

#### 929. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11604-L11609` → after: `L11604-L11609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11604-L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11604-L11609) · [Before (L11604-L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11604-L11609)

```diff
-   }, hb.f = {}, hb.e = bb => Promise.all(Object.keys(hb.f).reduce(((ub, Bb) => (hb.f[Bb](bb, ub), ub)), [])), hb.u = bb => "static/js/halsg." + (67 === bb ? "worldgenTables" : bb) + "." + {
-     67: "b4c0b7ab",
-     70: "0e45f7f1",
-     71: "24d611ce",
-     72: "e6ad2da4",
-     73: "dec73912"
+   }, kd.f = {}, kd.e = dd => Promise.all(Object.keys(kd.f).reduce(((Jd, pd) => (kd.f[pd](dd, Jd), Jd)), [])), kd.u = dd => "static/js/x17cru." + (67 === dd ? "worldgenTables" : dd) + "." + {
+     67: "573cb49c",
+     70: "950e4097",
+     71: "a96b9d44",
+     72: "7ec90d0f",
+     73: "b8ac58ab"
```

#### 930. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11680` → after: `L11680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11680) · [Before (L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11680)

```diff
-       hb = ub < 0 ? this.length + ub : ub;
+       kd = Jd < 0 ? this.length + Jd : Jd;
```

#### 931. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11695-L11697` → after: `L11695-L11697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11695-L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11695-L11697) · [Before (L11695-L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11695-L11697)

```diff
-     Uo: () => Mb,
-     Lo: () => mb,
-     Ea: () => Ib,
+     ge: () => Ud,
+     Ce: () => yd,
+     hK: () => Dd,
```

#### 932. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11700-L11710` → after: `L11700-L11710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11700-L11710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11700-L11710) · [Before (L11700-L11710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11700-L11710)

```diff
-     ya: () => Pb,
-     Va: () => qb,
-     Fa: () => Eb,
-     fa: () => yb,
-     ka: () => Vb,
-     Ta: () => Fb,
-     ca: () => fb,
-     Qa: () => kb,
-     hH: () => Tb,
-     OH: () => cb,
-     GH: () => Qb
+     rK: () => Td,
+     uK: () => Ed,
+     tK: () => cd,
+     VK: () => hd,
+     zK: () => rd,
+     HK: () => ud,
+     wK: () => td,
+     AK: () => Vd,
+     Wo: () => zd,
+     Zo: () => Hd,
+     Co: () => wd
```

#### 933. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11715` → after: `L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11715) · [Before (L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11715)

```diff
-   var Sb = hb(2653),
+   var Cd = kd(2736),
```

#### 934. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11750` → after: `L11750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11750) · [Before (L11750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11750)

```diff
-     return null === pb ? "not failed" : `${pb}: ${(bb=ob)instanceof Error?`${bb.name}: ${bb.message}`:String(bb)}`;
+     return null === Od ? "not failed" : `${Od}: ${(dd=ed)instanceof Error?`${dd.name}: ${dd.message}`:String(dd)}`;
```

#### 935. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11755` → after: `L11755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11755) · [Before (L11755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11755)

```diff
-     if (!nb()) throw new Error(`Bloxd wasm is not ready (${Db()}): check isBloxdWasmReady() first`);
+     if (!id()) throw new Error(`Bloxd wasm is not ready (${ad()}): check isBloxdWasmReady() first`);
```

#### 936. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11793` → after: `L11793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11793) · [Before (L11793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11793)

```diff
-       hH: Ob
+       Wo: Nd
```

#### 937. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11814` → after: `L11814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11814) · [Before (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11814)

```diff
-     Xb = "failed", pb = ub, ob = bb, console.error(`Bloxd wasm failed (${ub}):`, bb);
+     Ld = "failed", Od = Jd, ed = dd, console.error(`Bloxd wasm failed (${Jd}):`, dd);
```

#### 938. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11833-L11834` → after: `L11833-L11834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11833-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11833-L11834) · [Before (L11833-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11833-L11834)

```diff
-       reserveUpFront: ub => bb().fa(ub),
-       reserveAhead: ub => bb().Fa(ub),
+       reserveUpFront: Jd => dd().VK(Jd),
+       reserveAhead: Jd => dd().tK(Jd),
```

#### 939. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11836` → after: `L11836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11836) · [Before (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11836)

```diff
-         bb().ka(ub)
+         dd().zK(Jd)
```

#### 940. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11838` → after: `L11838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11838) · [Before (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11838)

```diff
-       lowWater: () => Nb[bb().Va()] ?? "none",
+       lowWater: () => fd[dd().uK()] ?? "none",
```

#### 941. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11861-L11863` → after: `L11861-L11863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11861-L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11861-L11863) · [Before (L11861-L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11861-L11863)

```diff
-       }(bb().Ta()),
-       takeBallast: () => bb().ca(),
-       takePressure: () => bb().Qa()
+       }(dd().HK()),
+       takeBallast: () => dd().wK(),
+       takePressure: () => dd().AK()
```

#### 942. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11873` → after: `L11873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11873) · [Before (L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11873)

```diff
-       Au.yNDJ(bb, 0)
+       RJ.MMMD(dd, 0)
```

#### 943. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11876` → after: `L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11876) · [Before (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11876)

```diff
-       const ub = Su(bb, Au.uGog, Au.wwi4),
+       const Jd = CJ(dd, RJ.hxPX, RJ.uYkD),
```

#### 944. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11878` → after: `L11878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11878) · [Before (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11878)

```diff
-       Au.wuj2(this.__wbg_ptr, ub, hb)
+       RJ.mJHD(this.__wbg_ptr, Jd, kd)
```

#### 945. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11881` → after: `L11881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11881) · [Before (L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11881)

```diff
-       return Au.dt4k(this.__wbg_ptr) >>> 0
+       return RJ.x67g(this.__wbg_ptr) >>> 0
```

#### 946. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11884` → after: `L11884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11884) · [Before (L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11884)

```diff
-       const bb = Au.Qrzu();
+       const dd = RJ.NImr();
```

#### 947. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11888` → after: `L11888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11888) · [Before (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11888)

```diff
-       return Au.oVn8(this.__wbg_ptr) >>> 0
+       return RJ.ooy1(this.__wbg_ptr) >>> 0
```

#### 948. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11891` → after: `L11891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11891) · [Before (L11891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11891)

```diff
-       return Au.Y3oK(this.__wbg_ptr) >>> 0
+       return RJ.WjJ3(this.__wbg_ptr) >>> 0
```

#### 949. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11894` → after: `L11894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11894) · [Before (L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11894)

```diff
-       return Au.mrTs(this.__wbg_ptr) >>> 0
+       return RJ.Gnna(this.__wbg_ptr) >>> 0
```

#### 950. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11905` → after: `L11905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11905) · [Before (L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11905)

```diff
-       Au.rcTu(bb, 0)
+       RJ.PHdR(dd, 0)
```

#### 951. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11908` → after: `L11908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11908) · [Before (L11908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11908)

```diff
-       return Au.accN(this.__wbg_ptr, bb) >>> 0
+       return RJ.pask(this.__wbg_ptr, dd) >>> 0
```

#### 952. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11911` → after: `L11911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11911) · [Before (L11911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11911)

```diff
-       return Au.ZQgd(this.__wbg_ptr, bb) >>> 0
+       return RJ.BfG9(this.__wbg_ptr, dd) >>> 0
```

#### 953. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11914` → after: `L11914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11914) · [Before (L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11914)

```diff
-       const bb = Au.srb6();
+       const dd = RJ.DqWW();
```

#### 954. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11918` → after: `L11918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11918) · [Before (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11918)

```diff
-       return Au.egZA(this.__wbg_ptr) >>> 0
+       return RJ.Da14(this.__wbg_ptr) >>> 0
```

#### 955. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11921` → after: `L11921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11921) · [Before (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11921)

```diff
-       return Au.R17C(this.__wbg_ptr) >>> 0
+       return RJ.ONOC(this.__wbg_ptr) >>> 0
```

#### 956. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11924` → after: `L11924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11924) · [Before (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11924)

```diff
-       return Au.s7PH(this.__wbg_ptr, bb) >>> 0
+       return RJ.cyND(this.__wbg_ptr, dd) >>> 0
```

#### 957. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11929` → after: `L11929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11929) · [Before (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11929)

```diff
-     const hb = Su(bb, Au.uGog, Au.wwi4),
+     const kd = CJ(dd, RJ.hxPX, RJ.uYkD),
```

#### 958. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11931` → after: `L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11931) · [Before (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11931)

```diff
-       Ob = Au.e9oI(hb, Bb, ub);
+       Nd = RJ.Z0fd(kd, pd, Jd);
```

#### 959. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11936` → after: `L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11936) · [Before (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11936)

```diff
-     Au.P0po()
+     RJ.mxTM()
```

#### 960. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11940` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11940) · [Before (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11940)

```diff
-     return Au.QBo4() >>> 0
+     return RJ.gG1T() >>> 0
```

#### 961. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11944` → after: `L11944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944)

```diff
-     return 0 !== Au.VZjN(bb)
+     return 0 !== RJ.z8l8(dd)
```

#### 962. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11948` → after: `L11948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11948) · [Before (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11948)

```diff
-     return 0 !== Au.TAjP(bb)
+     return 0 !== RJ.LiXQ(dd)
```

#### 963. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11952` → after: `L11952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11952) · [Before (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11952)

```diff
-     Au.FciX(bb)
+     RJ.CePG(dd)
```

#### 964. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11956` → after: `L11956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11956) · [Before (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11956)

```diff
-     return Au.rsAC() >>> 0
+     return RJ.xpAM() >>> 0
```

#### 965. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11960` → after: `L11960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11960) · [Before (L11960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11960)

```diff
-     return Au.i0It() >>> 0
+     return RJ.b39H() >>> 0
```

#### 966. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11964` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964)

```diff
-     return 0 !== Au.FD6w()
+     return 0 !== RJ.gdv5()
```

#### 967. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11968` → after: `L11968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11968) · [Before (L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11968)

```diff
-     return Au.JUIc() >>> 0
+     return RJ.XjDD() >>> 0
```

#### 968. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11974` → after: `L11974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11974) · [Before (L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11974)

```diff
-       const hb = Au.Vhs3();
+       const kd = RJ.DtnT();
```

#### 969. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11977` → after: `L11977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11977) · [Before (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11977)

```diff
-       Au.Ouxd(bb, ub, 1)
+       RJ.ISbC(dd, Jd, 1)
```

#### 970. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11982` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11982) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11982)

```diff
-     Au.uubb(hu(bb))
+     RJ.IJuX(kJ(dd))
```

#### 971. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11988` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988)

```diff
-       Cxb8: {
+       LIbi: {
```

#### 972. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11990` → after: `L11990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11990) · [Before (L11990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11990)

```diff
-         chkf: function(bb, ub) {
+         arTe: function(dd, Jd) {
```

#### 973. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11993` → after: `L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11993) · [Before (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11993)

```diff
-         EbpM: function(bb, ub) {
+         NNPK: function(dd, Jd) {
```

#### 974. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11996` → after: `L11996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11996) · [Before (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11996)

```diff
-         lhBv: function(bb) {
+         b2UC: function(dd) {
```

#### 975. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11999` → after: `L11999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11999) · [Before (L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11999)

```diff
-         sU9i: function(bb, ub) {
+         uNie: function(dd, Jd) {
```

#### 976. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12002` → after: `L12002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12002) · [Before (L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12002)

```diff
-         LWwN: function(bb) {
+         Vye2: function(dd) {
```

#### 977. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12012` → after: `L12012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12012) · [Before (L12012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12012)

```diff
-     } : new FinalizationRegistry((bb => Au.yNDJ(bb, 1))),
+     } : new FinalizationRegistry((dd => RJ.MMMD(dd, 1))),
```

#### 978. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12016` → after: `L12016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12016) · [Before (L12016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12016)

```diff
-     } : new FinalizationRegistry((bb => Au.rcTu(bb, 1)));
+     } : new FinalizationRegistry((dd => RJ.PHdR(dd, 1)));
```

#### 979. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12093` → after: `L12093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12093) · [Before (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12093)

```diff
-     return ou = bb, Au = bb.exports, pu = ub, Ou = null, Au.KSjC(), Au
+     return eJ = dd, RJ = dd.exports, OJ = Jd, NJ = null, RJ.Lfn5(), RJ
```

#### 980. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12117` → after: `L12117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12117) · [Before (L12117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12117)

```diff
-         if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
+         if (!dd.ok) throw new Error(`failed to fetch Wasm: ${dd.status} ${dd.statusText} fetching '${dd.url}'`);
```

#### 981. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12147-L12148` → after: `L12147-L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12147-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12147-L12148) · [Before (L12147-L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12147-L12148)

```diff
-       if (!nb()) throw new Error(`Bloxd wasm is not ready (${Db()}): check isBloxdWasmReady() first`);
-       if (Wb !== bb) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${ub}`)
+       if (!id()) throw new Error(`Bloxd wasm is not ready (${ad()}): check isBloxdWasmReady() first`);
+       if (vd !== dd) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${Jd}`)
```

#### 982. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12151` → after: `L12151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12151) · [Before (L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12151)

```diff
-   var ru = hb(588);
+   var BJ = kd(610);
```

#### 983. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12158` → after: `L12158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12158) · [Before (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12158)

```diff
-       } = hb(60824), Zb = function(bb, ub, hb) {
+       } = kd(61098), Qd = function(dd, Jd, kd) {
```

#### 984. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12160` → after: `L12160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12160) · [Before (L12160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12160)

```diff
-         for (const Lb of bb.PG) iu(Lb, hb);
+         for (const Zd of dd.rW) mJ(Zd, kd);
```

#### 985. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12163` → after: `L12163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12163) · [Before (L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12163)

```diff
-           PG: bb.PG,
+           rW: dd.rW,
```

#### 986. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12169` → after: `L12169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12169) · [Before (L12169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12169)

```diff
-           throw new Error(`Custom world-gen terrain "${Bb.name}" is not in this generator's catalogue (${bb.length>0?bb.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${pd.name}" is not in this generator's catalogue (${dd.length>0?dd.join(", "):"empty"})`)
```

#### 987. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12174` → after: `L12174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12174) · [Before (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12174)

```diff
-               if (null !== bb.IG) throw new Error(`Custom world-gen terrain "${bb.name}" takes no options`);
+               if (null !== dd.hW) throw new Error(`Custom world-gen terrain "${dd.name}" takes no options`);
```

#### 988. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12178-L12179` → after: `L12178-L12179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12178-L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12178-L12179) · [Before (L12178-L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12178-L12179)

```diff
-             if (null !== bb.IG) try {
-               hb = JSON.parse(bb.IG)
+             if (null !== dd.hW) try {
+               kd = JSON.parse(dd.hW)
```

#### 989. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12181` → after: `L12181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12181) · [Before (L12181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12181)

```diff
-               throw new Error(`Custom world-gen terrain "${bb.name}" has invalid optionsJson: ${String(Bb)}`, {
+               throw new Error(`Custom world-gen terrain "${dd.name}" has invalid optionsJson: ${String(pd)}`, {
```

#### 990. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12188` → after: `L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12188) · [Before (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12188)

```diff
-           PG: bb.PG,
+           rW: dd.rW,
```

#### 991. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12191` → after: `L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12191) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12191)

```diff
-       }(null !== (ab = null === Lb || void 0 === Lb ? void 0 : Lb.sG) && void 0 !== ab ? ab : null, Yb, ub);
+       }(null !== (Kd = null === Zd || void 0 === Zd ? void 0 : Zd.TW) && void 0 !== Kd ? Kd : null, gd, Jd);
```

#### 992. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12193` → after: `L12193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12193) · [Before (L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12193)

```diff
-       const Xb = null !== (Hb = null === Lb || void 0 === Lb ? void 0 : Lb.layers) && void 0 !== Hb ? Hb : [];
+       const Ld = null !== (od = null === Zd || void 0 === Zd ? void 0 : Zd.layers) && void 0 !== od ? od : [];
```

#### 993. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12196` → after: `L12196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12196) · [Before (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12196)

```diff
-         const hb = [...bb].sort(((bb, ub) => bb.UG - ub.UG));
+         const kd = [...dd].sort(((dd, Jd) => dd.KW - Jd.KW));
```

#### 994. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12198` → after: `L12198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12198) · [Before (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12198)

```diff
-           if (hb[Bb].UG < hb[Bb - 1].LG) throw new Error(`Custom world-gen layers overlap: [${hb[Bb-1].UG}, ${hb[Bb-1].LG}) and [${hb[Bb].UG}, ${hb[Bb].LG})`)
+           if (kd[pd].KW < kd[pd - 1].oW) throw new Error(`Custom world-gen layers overlap: [${kd[pd-1].KW}, ${kd[pd-1].oW}) and [${kd[pd].KW}, ${kd[pd].oW})`)
```

#### 995. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12210` → after: `L12210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12210) · [Before (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12210)

```diff
-         if (hb >= Ob.UG && hb < Ob.LG) return Gb.getChunk(bb, ub, hb - Ob.YG, Bb);
+         if (kd >= Nd.KW && kd < Nd.oW) return Wd.getChunk(dd, Jd, kd - Nd.lW, pd);
```

#### 996. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12228-L12229` → after: `L12228-L12229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12228-L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12228-L12229) · [Before (L12228-L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12228-L12229)

```diff
-     if (bb.UG >= bb.LG) throw new Error(`Custom world-gen layer has minY (${bb.UG}) >= maxY (${bb.LG})`);
-     if (bb.UG % ru.A !== 0 || bb.LG % ru.A !== 0 || bb.YG % ru.A !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${ru.A}); got minY=${bb.UG}, maxY=${bb.LG}, groundY=${bb.YG}`);
+     if (dd.KW >= dd.oW) throw new Error(`Custom world-gen layer has minY (${dd.KW}) >= maxY (${dd.oW})`);
+     if (dd.KW % BJ.x !== 0 || dd.oW % BJ.x !== 0 || dd.lW % BJ.x !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${BJ.x}); got minY=${dd.KW}, maxY=${dd.oW}, groundY=${dd.lW}`);
```

#### 997. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12231-L12234` → after: `L12231-L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12231-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12231-L12234) · [Before (L12231-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12231-L12234)

```diff
-         if (void 0 === (0, ru.F)(bb.wG, ub)) throw new Error(`Custom world-gen caves lavaPitBlock "${bb.wG}" not found in blockMetadata`);
-         if (bb.ZG)
-           for (const hb of bb.ZG) Du(hb, ub)
-       }(bb.aG, ub), 0 === bb.DG.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, BJ.D)(dd.eW, Jd)) throw new Error(`Custom world-gen caves lavaPitBlock "${dd.eW}" not found in blockMetadata`);
+         if (dd.RW)
+           for (const kd of dd.RW) aJ(kd, Jd)
+       }(dd.LW, Jd), 0 === dd.mW.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 998. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12236` → after: `L12236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12236) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12236)

```diff
-     for (const Bb of bb.DG) gu(Bb, ub), hb += Bb.frequency;
+     for (const pd of dd.mW) YJ(pd, Jd), kd += pd.frequency;
```

#### 999. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12238` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12238) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12238)

```diff
-     for (const Bb of bb.tG) iu(Bb, ub)
+     for (const pd of dd.nW) mJ(pd, Jd)
```

#### 1000. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12244-L12246` → after: `L12244-L12246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12244-L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12244-L12246) · [Before (L12244-L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12244-L12246)

```diff
-       pG: Bb,
-       oG: Ob,
-       AG: Gb
+       GW: pd,
+       vW: Nd,
+       xW: Wd
```

#### 1001. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12248-L12249` → after: `L12248-L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12248-L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12248-L12249) · [Before (L12248-L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12248-L12249)

```diff
-     if (void 0 === (0, ru.F)(hb, ub)) throw new Error(`Custom world-gen cave decoration blockName "${hb}" not found in blockMetadata`);
-     if (!Bb && !Ob && !Gb) throw new Error(`Custom world-gen cave decoration "${hb}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, BJ.D)(kd, Jd)) throw new Error(`Custom world-gen cave decoration blockName "${kd}" not found in blockMetadata`);
+     if (!pd && !Nd && !Wd) throw new Error(`Custom world-gen cave decoration "${kd}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1002. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12252-L12253` → after: `L12252-L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12252-L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12252-L12253) · [Before (L12252-L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12252-L12253)

```diff
-     if (Gb && xu(hb, "meta|rot1|top", ub), zu(bb.lG, hb, "lG"), zu(bb.KG, hb, "KG"), !Number.isInteger(bb.WG) || bb.WG < 0) throw new Error(`Custom world-gen cave decoration "${hb}" minPlacements must be a non-negative integer, got ${bb.WG}`);
-     if (!(0, ru.J)(bb.CG) && (zu(bb.CG.rG, hb, "depthRamp.deepClusterChance"), bb.CG.jG <= bb.CG.nG)) throw new Error(`Custom world-gen cave decoration "${hb}" deepY must be strictly smaller than shallowY, but ${bb.CG.jG} <= ${bb.CG.nG} `)
+     if (Wd && MJ(kd, "meta|rot1|top", Jd), FJ(dd.qW, kd, "qW"), FJ(dd.BW, kd, "BW"), !Number.isInteger(dd.sW) || dd.sW < 0) throw new Error(`Custom world-gen cave decoration "${kd}" minPlacements must be a non-negative integer, got ${dd.sW}`);
+     if (!(0, BJ.I)(dd.iW) && (FJ(dd.iW.MW, kd, "depthRamp.deepClusterChance"), dd.iW.FW <= dd.iW.YW)) throw new Error(`Custom world-gen cave decoration "${kd}" deepY must be strictly smaller than shallowY, but ${dd.iW.FW} <= ${dd.iW.YW} `)
```

#### 1003. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12257-L12258` → after: `L12257-L12258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12257-L12258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12257-L12258) · [Before (L12257-L12258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12257-L12258)

```diff
-     const Bb = `${bb}|${ub}`;
-     if (void 0 === (0, ru.F)(Bb, hb)) throw new Error(`Custom world-gen cave decoration "${bb}" is missing directional variant "${Bb}" required for wall/ceiling anchoring`)
+     const pd = `${dd}|${Jd}`;
+     if (void 0 === (0, BJ.D)(pd, kd)) throw new Error(`Custom world-gen cave decoration "${dd}" is missing directional variant "${pd}" required for wall/ceiling anchoring`)
```

#### 1004. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12262` → after: `L12262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12262) · [Before (L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12262)

```diff
-     if (bb < 0 || bb > 1) throw new Error(`Custom world-gen cave decoration "${ub}" ${hb} must be in [0, 1], got ${bb}`)
+     if (dd < 0 || dd > 1) throw new Error(`Custom world-gen cave decoration "${Jd}" ${kd} must be in [0, 1], got ${dd}`)
```

#### 1005. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12266-L12272` → after: `L12266-L12272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12266-L12272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12266-L12272) · [Before (L12266-L12272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12266-L12272)

```diff
-     if (bb.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${bb.frequency}`);
-     if (void 0 === (0, ru.F)(bb.zG, ub)) throw new Error(`Custom world-gen biome topsoilBlock "${bb.zG}" not found in blockMetadata`);
-     if (void 0 === (0, ru.F)(bb.gG, ub)) throw new Error(`Custom world-gen biome lowsoilBlock "${bb.gG}" not found in blockMetadata`);
-     if (0 === bb.iG.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const hb of bb.iG) {
-       if (hb.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${hb.frequency}`);
-       if (void 0 === (0, ru.F)(hb.blockName, ub)) throw new Error(`Custom world-gen biome stoneType blockName "${hb.blockName}" not found in blockMetadata`)
+     if (dd.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${dd.frequency}`);
+     if (void 0 === (0, BJ.D)(dd.SW, Jd)) throw new Error(`Custom world-gen biome topsoilBlock "${dd.SW}" not found in blockMetadata`);
+     if (void 0 === (0, BJ.D)(dd.jW, Jd)) throw new Error(`Custom world-gen biome lowsoilBlock "${dd.jW}" not found in blockMetadata`);
+     if (0 === dd.XW.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const kd of dd.XW) {
+       if (kd.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${kd.frequency}`);
+       if (void 0 === (0, BJ.D)(kd.blockName, Jd)) throw new Error(`Custom world-gen biome stoneType blockName "${kd.blockName}" not found in blockMetadata`)
```

#### 1006. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12277-L12281` → after: `L12277-L12281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12277-L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12277-L12281) · [Before (L12277-L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12277-L12281)

```diff
-     if (void 0 === (0, ru.F)(bb.blockName, ub)) throw new Error(`Custom world-gen ore blockName "${bb.blockName}" not found in blockMetadata`);
-     if (bb.radius < 0) throw new Error(`Custom world-gen ore "${bb.blockName}" radius must be >= 0, got ${bb.radius}`);
-     if (bb.eG <= 0) throw new Error(`Custom world-gen ore "${bb.blockName}" minDistBetweenDeposits must be > 0, got ${bb.eG}`);
-     if (bb.UG > bb.LG) throw new Error(`Custom world-gen ore "${bb.blockName}" minY (${bb.UG}) must be <= maxY (${bb.LG})`);
-     if (bb.NG < 0 || bb.NG > 1) throw new Error(`Custom world-gen ore "${bb.blockName}" spawnChance must be in [0, 1], got ${bb.NG}`)
+     if (void 0 === (0, BJ.D)(dd.blockName, Jd)) throw new Error(`Custom world-gen ore blockName "${dd.blockName}" not found in blockMetadata`);
+     if (dd.radius < 0) throw new Error(`Custom world-gen ore "${dd.blockName}" radius must be >= 0, got ${dd.radius}`);
+     if (dd.yW <= 0) throw new Error(`Custom world-gen ore "${dd.blockName}" minDistBetweenDeposits must be > 0, got ${dd.yW}`);
+     if (dd.KW > dd.oW) throw new Error(`Custom world-gen ore "${dd.blockName}" minY (${dd.KW}) must be <= maxY (${dd.oW})`);
+     if (dd.DW < 0 || dd.DW > 1) throw new Error(`Custom world-gen ore "${dd.blockName}" spawnChance must be in [0, 1], got ${dd.DW}`)
```

#### 1007. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12287-L12290` → after: `L12287-L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12287-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12287-L12290) · [Before (L12287-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12287-L12290)

```diff
-       eG: 10,
-       UG: -98,
-       LG: -78,
-       NG: .4
+       yW: 10,
+       KW: -98,
+       oW: -78,
+       DW: .4
```

#### 1008. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12295-L12298` → after: `L12295-L12298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12295-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12295-L12298) · [Before (L12295-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12295-L12298)

```diff
-       eG: 6,
-       UG: -40,
-       LG: 20,
-       NG: .6
+       yW: 6,
+       KW: -40,
+       oW: 20,
+       DW: .6
```

#### 1009. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12302-L12305` → after: `L12302-L12305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12302-L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12302-L12305) · [Before (L12302-L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12302-L12305)

```diff
-       eG: 10,
-       UG: -75,
-       LG: -55,
-       NG: .4
+       yW: 10,
+       KW: -75,
+       oW: -55,
+       DW: .4
```

#### 1010. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12309` → after: `L12309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12309) · [Before (L12309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12309)

```diff
-       IG: null
+       hW: null
```

#### 1011. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12312` → after: `L12312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12312) · [Before (L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12312)

```diff
-     [vu]: () => hb(60720).b
+     [bJ]: () => kd(60995).d
```

#### 1012. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12335` → after: `L12335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12335) · [Before (L12335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12335)

```diff
-     const bb = Promise.all([hb.e(70), hb.e(73), hb.e(72), hb.e(71), hb.e(67)]).then((() => hb(61319))).then((bb => {
+     const dd = Promise.all([kd.e(70), kd.e(73), kd.e(72), kd.e(71), kd.e(67)]).then((() => kd(61623))).then((dd => {
```

#### 1013. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12378` → after: `L12378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12378) · [Before (L12378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12378)

```diff
-               reason: `its memory stats trapped (${String(ub)})`
+               reason: `its memory stats trapped (${String(Jd)})`
```

#### 1014. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12384` → after: `L12384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12384) · [Before (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12384)

```diff
-               const hb = Yb.Yo();
+               const kd = gd.Ke();
```

#### 1015. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12387` → after: `L12387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12387) · [Before (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12387)

```diff
-                 return String.fromCharCode(...new Uint8Array(gb().buffer, bb.ao(), 32))
+                 return String.fromCharCode(...new Uint8Array(Yd().buffer, dd.oe(), 32))
```

#### 1016. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12400` → after: `L12400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12400) · [Before (L12400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12400)

```diff
-               Ub = ob.bX, Hb = new Uint16Array(Ub * Ub * Ub),
+               Pd = ed.KL, od = new Uint16Array(Pd * Pd * Pd),
```

#### 1017. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12409` → after: `L12409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12409) · [Before (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12409)

```diff
-                           reason: `the memory ceiling was not set (${String(Bb)})`
+                           reason: `the memory ceiling was not set (${String(pd)})`
```

#### 1018. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12413` → after: `L12413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12413) · [Before (L12413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12413)

```diff
-                         Yb = new(du().Uo)
+                         gd = new(qJ().ge)
```

#### 1019. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12417` → after: `L12417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12417) · [Before (L12417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12417)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(Bb)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(pd)})`
```

#### 1020. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12427` → after: `L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12427) · [Before (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12427)

```diff
-                           reason: `the block and item tables did not load (${String(ub)})`
+                           reason: `the block and item tables did not load (${String(Jd)})`
```

#### 1021. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12432` → after: `L12432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12432) · [Before (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12432)

```diff
-                       reason: `wasm did not start (${xb()})`
+                       reason: `wasm did not start (${Md()})`
```

#### 1022. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12436)

```diff
-                     reason: `chunk size ${Ub} is not the encoder's 32`
+                     reason: `chunk size ${Pd} is not the encoder's 32`
```

#### 1023. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12447` → after: `L12447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12447) · [Before (L12447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12447)

```diff
-                 Sb = new ju(Ub, Lb.blockMetadata, Lb.itemMetadata, bb.bG, !1, bb.uG, bb.BG, Bb, pb)
+                 Cd = new sJ(Pd, Zd.blockMetadata, Zd.itemMetadata, dd.pW, !1, dd.NW, dd.PW, pd, Od)
```

#### 1024. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12472` → after: `L12472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12472) · [Before (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12472)

```diff
-                     const hb = bb.Ho(),
+                     const kd = dd.le(),
```

#### 1025. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12474` → after: `L12474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12474) · [Before (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12474)

```diff
-                       Ob = ub.byteLength >= Bb ? ub : new ArrayBuffer(Bb),
+                       Nd = Jd.byteLength >= pd ? Jd : new ArrayBuffer(pd),
```

#### 1026. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12477` → after: `L12477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12477) · [Before (L12477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12477)

```diff
-                     return Ub.set(new Uint8Array(Gb, bb.ao(), Iu)), Ub.set(new Uint8Array(Gb, bb.wo(), hb), Iu), {
+                     return Pd.set(new Uint8Array(Wd, dd.oe(), DJ)), Pd.set(new Uint8Array(Wd, dd.Qe(), kd), DJ), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   36018: (bb, ub, hb) => {
+   36564: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L40)

```diff
-           if (ub > 0 && hb.searchParams.set("cache-bust", `${Date.now()}-${ub}`), await this.fetchWhole(hb, bb)) return void(this.scriptUrl = hb);
+           if (Jd > 0 && kd.searchParams.set("cache-bust", `${Date.now()}-${Jd}`), await this.fetchWhole(kd, dd)) return void(this.scriptUrl = kd);
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L82)

```diff
-   42750: (bb, ub, hb) => {
+   43268: (dd, Jd, kd) => {
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L89)

```diff
-     const Bb = new(hb(36018).c)(new URL(hb.p + hb.u(68), hb.b), {
+     const pd = new(kd(36564).c)(new URL(kd.p + kd.u(68), kd.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/main.js` (1075 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see halsg.main.2bd74967.js.LICENSE.txt */
+ /*! For license information please see x17cru.main.159bd7ce.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L3)

```diff
-     var bb = [, , , , , , (bb, ub, hb) => {
+     var dd = [, , , , , , , , , , (dd, Jd, kd) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L6-L8)

```diff
-             B: () => Hb,
-             D: () => zb,
-             E: () => Db,
+             C: () => Nd,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L11-L14` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L10-L13) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L11-L14)

```diff
-             M: () => wb,
-             Q: () => gb,
-             S: () => ab,
-             W: () => tb,
+             L: () => ad,
+             O: () => Ud,
+             R: () => xd,
+             U: () => ld,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L18)

```diff
-             e: () => ob,
+             f: () => ed,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L20` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L20-L22) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L20)

```diff
-             i: () => Ab,
+             ib: () => Cd,
+             j: () => Rd,
+             lb: () => pd,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L22-L27` → after: `L24-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L24-L27) · [Before (L22-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L22-L27)

```diff
-             n: () => Lb,
-             p: () => Yb,
-             r: () => lb,
-             t: () => mb,
-             w: () => Ob,
-             y: () => Zb
+             q: () => Zd,
+             s: () => gd,
+             v: () => Id,
+             z: () => yd
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L126)

```diff
-         }, , , , (bb, ub, hb) => {
+         }, , , , , (dd, Jd, kd) => {
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L128)

```diff
-             b: () => Ub
+             c: () => Pd
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L130)

```diff
-           var Bb = hb(13);
+           var pd = kd(22);
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L159)

```diff
-         }, , , (bb, ub, hb) => {
+         }, , , , , , , (dd, Jd, kd) => {
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L166-L171` → after: `L166-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L166-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L166-L171) · [Before (L166-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L166-L171)

```diff
-           var Bb = hb(16),
-             Ob = hb(298),
-             Gb = hb(314),
-             Ub = hb(29),
-             Lb = hb(41),
-             Yb = hb(24),
+           var pd = kd(29),
+             Nd = kd(300),
+             Wd = kd(313),
+             Pd = kd(33),
+             Zd = kd(53),
+             gd = kd(31),
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L173-L185` → after: `L173-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L173-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L173-L185) · [Before (L173-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L173-L185)

```diff
-             ab = hb(49),
-             Hb = hb(65),
-             wb = hb(86),
-             Zb = hb(256),
-             Xb = hb(266),
-             pb = hb(270),
-             ob = hb(104),
-             Ab = hb(597),
-             lb = hb(599),
-             Kb = hb(665),
-             Wb = hb(668),
-             Cb = hb(670),
-             db = hb(275);
+             Kd = kd(56),
+             od = kd(72),
+             ld = kd(95),
+             Qd = kd(260),
+             Ld = kd(277),
+             Od = kd(282),
+             ed = kd(111),
+             Rd = kd(618),
+             Id = kd(626),
+             Gd = kd(699),
+             vd = kd(708),
+             xd = kd(710),
+             qd = kd(284);
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L195)

```diff
-               cameraFOV: "mobile" === (0, wb.getPlatformType)() ? rb[db.b.mobile_fov_v2] : Cb.d,
+               cameraFOV: "mobile" === (0, ld.getPlatformType)() ? Bd[qd.c.mobile_fov_v2] : xd.c,
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L197-L198` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L197-L198) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L197-L198)

```diff
-               touchSpeedCurve: "curve" === db.b.mobile_move_assist_v1,
-               touchActionButtons: "on" === db.b.mobile_action_buttons_v1,
+               touchSpeedCurve: "curve" === qd.c.mobile_move_assist_v1,
+               touchActionButtons: "on" === qd.c.mobile_action_buttons_v1,
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L200)

```diff
-               jumpLock: "on" === db.b.mobile_jump_lock_v1
+               jumpLock: "on" === qd.c.mobile_jump_lock_v1
```

#### 17. `bundles/bloxd.io/main.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L207)

```diff
-             return Ab.f ? "webgl_holdback" : !0 === Ub.j.getItem(ob.J) ? "old_intel_driver" : Ab.j && !0 === Ub.j.getItem(ob.H) ? "intel_gen9" : lb.o && (0, Ab.c)(Ub.j.getItem(ob.F)) ? "gpu_class_webgl" : !lb.o && Ab.n && (0, Ab.m)(navigator.userAgent) ? "safari_26" : (0, pb.w)() … [truncated]
+             return Rd.h ? "webgl_holdback" : !0 === Pd.i.getItem(ed.D) ? "old_intel_driver" : Rd.j && !0 === Pd.i.getItem(ed.z) ? "intel_gen9" : Id.x && (0, Rd.e)(Pd.i.getItem(ed.x)) ? "gpu_class_webgl" : !Id.x && Rd.m && (0, Rd.l)(navigator.userAgent) ? "safari_26" : (0, Od.z)() … [truncated]
```

#### 18. `bundles/bloxd.io/main.js` (Changed code · before: `L210-L211` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L210-L211) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L210-L211)

```diff
-             Hu = Ab.r && null === au;
-           let wu = null === Ub.j.getItem(Ob.tc);
+             oJ = Rd.o && null === KJ;
+           let lJ = null === Pd.i.getItem(Nd._b);
```

#### 19. `bundles/bloxd.io/main.js` (Changed code · before: `L223-L224` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L223-L224) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L223-L224)

```diff
-             soundVolume: (0, Lb.e)(),
-             musicVolume: null !== (Db = Ub.j.getItem("musicVol")) && void 0 !== Db ? Db : .5,
+             soundVolume: (0, Zd.b)(),
+             musicVolume: null !== (ad = Pd.i.getItem("musicVol")) && void 0 !== ad ? ad : .5,
```

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L237-L238)

```diff
-               const bb = Ub.j.getItem("showDistantNametags");
-               return "boolean" === typeof bb ? bb : null
+               const dd = Pd.i.getItem("showDistantNametags");
+               return "boolean" === typeof dd ? dd : null
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L251-L252` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L251-L252) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L251-L252)

```diff
-             showDebugOverlay: null !== (xb = Ub.j.getItem("showDebugOverlay")) && void 0 !== xb && xb,
-             enabledDebugFeatures: null !== (zb = Ub.j.getItem("enabledDebugFeatures")) && void 0 !== zb ? zb : {},
+             showDebugOverlay: null !== (Md = Pd.i.getItem("showDebugOverlay")) && void 0 !== Md && Md,
+             enabledDebugFeatures: null !== (Fd = Pd.i.getItem("enabledDebugFeatures")) && void 0 !== Fd ? Fd : {},
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L260-L263` → after: `L260-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L260-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L260-L263) · [Before (L260-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L260-L263)

```diff
-               useProfanityFilter: null === (gb = Ub.j.getItem("UseProfanityFilter")) || void 0 === gb || gb,
-               showChat: null === (ib = Ub.j.getItem("showChat")) || void 0 === ib || ib,
-               showNewItemIndicator: null === (vb = Ub.j.getItem("showNewItemIndicator")) || void 0 === vb || vb,
-               showFriendOnlineToasts: null === (tb = Ub.j.getItem("showFriendOnlineToasts")) || void 0 === tb || tb,
+               useProfanityFilter: null === (Yd = Pd.i.getItem("UseProfanityFilter")) || void 0 === Yd || Yd,
+               showChat: null === (md = Pd.i.getItem("showChat")) || void 0 === md || md,
+               showNewItemIndicator: null === (bd = Pd.i.getItem("showNewItemIndicator")) || void 0 === bd || bd,
+               showFriendOnlineToasts: null === (Sd = Pd.i.getItem("showFriendOnlineToasts")) || void 0 === Sd || Sd,
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L266-L267` → after: `L266-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L266-L267) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L266-L267)

```diff
-                 const ub = Ub.j.getItem("friendRequestNotifications");
-                 return null !== (bb = Kb.e.find((bb => bb === ub))) && void 0 !== bb ? bb : "toastAndTray"
+                 const Jd = Pd.i.getItem("friendRequestNotifications");
+                 return null !== (dd = Gd.e.find((dd => dd === Jd))) && void 0 !== dd ? dd : "toastAndTray"
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L269-L287` → after: `L269-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L269-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L269-L287) · [Before (L269-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L269-L287)

```diff
-               touchscreenSensitivity: null !== (Jb = Ub.j.getItem("touchscreenSensitivity")) && void 0 !== Jb ? Jb : 150,
-               mouseSensitivity: null !== (eb = Ub.j.getItem("mouseSensitivity")) && void 0 !== eb ? eb : 15,
-               showCoordinates: null !== (Nb = Ub.j.getItem("showCoordinates")) && void 0 !== Nb && Nb,
-               showChunkCoordinates: null !== (sb = Ub.j.getItem("showChunkCoordinates")) && void 0 !== sb && sb,
-               showFPS: null !== (Mb = Ub.j.getItem("showFPS")) && void 0 !== Mb && Mb,
-               disableBunnyHopping: null !== (mb = Ub.j.getItem("disableBunnyHopping")) && void 0 !== mb && mb,
-               disableTexAtlas: null !== (Ib = Ub.j.getItem("disableTexAtlas")) && void 0 !== Ib && Ib,
-               disableFullscreen: null !== (Pb = Ub.j.getItem("disableFullscreen")) && void 0 !== Pb && Pb,
-               ezBridging: null === (qb = Ub.j.getItem("ezBridging")) || void 0 === qb || qb,
-               ezTowering: null === (Eb = Ub.j.getItem("ezTowering")) || void 0 === Eb || Eb,
-               crouchIsToggle: null !== (yb = Ub.j.getItem("crouchIsToggle")) && void 0 !== yb && yb,
-               vibration: null === (Vb = Ub.j.getItem("vibration")) || void 0 === Vb || Vb,
-               hideUiIsToggle: null !== (Fb = Ub.j.getItem("hideUiIsToggle")) && void 0 !== Fb && Fb,
-               enableLighting: null !== (fb = Ub.j.getItem("enableLighting")) && void 0 !== fb && fb,
-               showFog: null !== (kb = Ub.j.getItem("showFog")) && void 0 !== kb && kb,
-               fogChunkDistance: null !== (Tb = Ub.j.getItem("fogChunkDistance")) && void 0 !== Tb ? Tb : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (jd = Pd.i.getItem("touchscreenSensitivity")) && void 0 !== jd ? jd : 150,
+               mouseSensitivity: null !== (Xd = Pd.i.getItem("mouseSensitivity")) && void 0 !== Xd ? Xd : 15,
+               showCoordinates: null !== (fd = Pd.i.getItem("showCoordinates")) && void 0 !== fd && fd,
+               showChunkCoordinates: null !== (nd = Pd.i.getItem("showChunkCoordinates")) && void 0 !== nd && nd,
+               showFPS: null !== (Ud = Pd.i.getItem("showFPS")) && void 0 !== Ud && Ud,
+               disableBunnyHopping: null !== (yd = Pd.i.getItem("disableBunnyHopping")) && void 0 !== yd && yd,
+               disableTexAtlas: null !== (Dd = Pd.i.getItem("disableTexAtlas")) && void 0 !== Dd && Dd,
+               disableFullscreen: null !== (Td = Pd.i.getItem("disableFullscreen")) && void 0 !== Td && Td,
+               ezBridging: null === (Ed = Pd.i.getItem("ezBridging")) || void 0 === Ed || Ed,
+               ezTowering: null === (cd = Pd.i.getItem("ezTowering")) || void 0 === cd || cd,
+               crouchIsToggle: null !== (hd = Pd.i.getItem("crouchIsToggle")) && void 0 !== hd && hd,
+               vibration: null === (rd = Pd.i.getItem("vibration")) || void 0 === rd || rd,
+               hideUiIsToggle: null !== (ud = Pd.i.getItem("hideUiIsToggle")) && void 0 !== ud && ud,
+               enableLighting: null !== (td = Pd.i.getItem("enableLighting")) && void 0 !== td && td,
+               showFog: null !== (Vd = Pd.i.getItem("showFog")) && void 0 !== Vd && Vd,
+               fogChunkDistance: null !== (zd = Pd.i.getItem("fogChunkDistance")) && void 0 !== zd ? zd : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L291-L298` → after: `L291-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L291-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L291-L298) · [Before (L291-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L291-L298)

```diff
-               useWebGpu: null !== (bu = Ub.j.getItem(Ob.tc)) && void 0 !== bu ? bu : Hu,
-               pixelScale: null !== (uu = Ub.j.getItem("pixelScale")) && void 0 !== uu ? uu : (0, wb.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (hu = Ub.j.getItem("pixelSmoothing")) || void 0 === hu || hu,
-               showChunkBorders: null !== (Bu = Ub.j.getItem("showChunkBorders")) && void 0 !== Bu && Bu,
-               showWeaponRaycasts: null !== (Ou = Ub.j.getItem("showWeaponRaycasts")) && void 0 !== Ou && Ou,
-               chunkFadeIn: null === (Gu = Ub.j.getItem("chunkFadeIn")) || void 0 === Gu || Gu,
-               enableClipping: null !== (Uu = Ub.j.getItem("enableClipping")) && void 0 !== Uu && Uu,
-               clipDurationSeconds: null !== (Lu = Ub.j.getItem("clipDurationSeconds")) && void 0 !== Lu ? Lu : Wb.e,
+               useWebGpu: null !== (dJ = Pd.i.getItem(Nd._b)) && void 0 !== dJ ? dJ : oJ,
+               pixelScale: null !== (JJ = Pd.i.getItem("pixelScale")) && void 0 !== JJ ? JJ : (0, ld.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (kJ = Pd.i.getItem("pixelSmoothing")) || void 0 === kJ || kJ,
+               showChunkBorders: null !== (pJ = Pd.i.getItem("showChunkBorders")) && void 0 !== pJ && pJ,
+               showWeaponRaycasts: null !== (NJ = Pd.i.getItem("showWeaponRaycasts")) && void 0 !== NJ && NJ,
+               chunkFadeIn: null === (WJ = Pd.i.getItem("chunkFadeIn")) || void 0 === WJ || WJ,
+               enableClipping: null !== (PJ = Pd.i.getItem("enableClipping")) && void 0 !== PJ && PJ,
+               clipDurationSeconds: null !== (ZJ = Pd.i.getItem("clipDurationSeconds")) && void 0 !== ZJ ? ZJ : vd.h,
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L300)

```diff
-                 null === Ub.j.getItem(jb) && (120 === Ub.j.getItem("cameraFOV") && Ub.j.removeItem("cameraFOV"), Ub.j.setItem(jb, !0));
+                 null === Pd.i.getItem(sd) && (120 === Pd.i.getItem("cameraFOV") && Pd.i.removeItem("cameraFOV"), Pd.i.setItem(sd, !0));
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L305)

```diff
-                     return [hb, null !== (ub = Ub.j.getItem(hb)) && void 0 !== ub ? ub : Bb]
+                     return [kd, null !== (Jd = Pd.i.getItem(kd)) && void 0 !== Jd ? Jd : pd]
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L307)

```diff
-                 return Ob.Eb.includes(ub.joystickMode) || (console.warn("Dropping stored joystick mode", ub.joystickMode), Ub.j.removeItem("joystickMode"), ub.joystickMode = bb.joystickMode), ub
+                 return Nd.ub.includes(Jd.joystickMode) || (console.warn("Dropping stored joystick mode", Jd.joystickMode), Pd.i.removeItem("joystickMode"), Jd.joystickMode = dd.joystickMode), Jd
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L315)

```diff
-             const hb = null !== (ub = Ub.j.getItem(Xb.e)) && void 0 !== ub ? ub : (0, Zb.j)();
+             const kd = null !== (Jd = Pd.i.getItem(Ld.e)) && void 0 !== Jd ? Jd : (0, Qd.e)();
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L325)

```diff
-             return null !== Ub.j.getItem(Xb.e)
+             return null !== Pd.i.getItem(Ld.e)
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L331` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L331) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L331)

```diff
-               for (const ub in bb) Bb.i.vp(`appManagerUpdated|${ub}`, bb[ub])
+               for (const Jd in dd) pd.j.nO(`appManagerUpdated|${Jd}`, dd[Jd])
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L339)

```diff
-               for (const Ob in bb)(0, Gb.Xd)(Zu[Ob], bb[Ob]) || (ub[Ob] = bb[Ob], hb = !0);
+               for (const Nd in dd)(0, Wd.le)(QJ[Nd], dd[Nd]) || (Jd[Nd] = dd[Nd], kd = !0);
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L346)

```diff
-                 Ub.j.setItem("UseProfanityFilter", bb.useProfanityFilter), Ub.j.setItem("showChat", bb.showChat), Ub.j.setItem("showNewItemIndicator", bb.showNewItemIndicator), Ub.j.setItem("showFriendOnlineToasts", bb.showFriendOnlineToasts), Ub.j.setItem("friendRequestNotificat … [truncated]
+                 Pd.i.setItem("UseProfanityFilter", dd.useProfanityFilter), Pd.i.setItem("showChat", dd.showChat), Pd.i.setItem("showNewItemIndicator", dd.showNewItemIndicator), Pd.i.setItem("showFriendOnlineToasts", dd.showFriendOnlineToasts), Pd.i.setItem("friendRequestNotificat … [truncated]
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L349)

```diff
-                     for (const Bb of Object.keys(hb)) bb[Bb] !== ub[Bb] && (bb[Bb] === hb[Bb] ? Ub.j.removeItem(Bb) : Ub.j.setItem(Bb, bb[Bb]))
+                     for (const pd of Object.keys(kd)) dd[pd] !== Jd[pd] && (dd[pd] === kd[pd] ? Pd.i.removeItem(pd) : Pd.i.setItem(pd, dd[pd]))
```

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L352)

```diff
-               void 0 !== ub.soundVolume && Ub.j.setItem("soundVol", ub.soundVolume), void 0 !== ub.musicVolume && Ub.j.setItem("musicVol", ub.musicVolume), void 0 !== ub.showDistantNametags && Ub.j.setItem("showDistantNametags", ub.showDistantNametags), void 0 !== ub.showDebugOve … [truncated]
+               void 0 !== Jd.soundVolume && Pd.i.setItem("soundVol", Jd.soundVolume), void 0 !== Jd.musicVolume && Pd.i.setItem("musicVol", Jd.musicVolume), void 0 !== Jd.showDistantNametags && Pd.i.setItem("showDistantNametags", Jd.showDistantNametags), void 0 !== Jd.showDebugOve … [truncated]
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L363-L364` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L363-L364) · [Before (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L363-L364)

```diff
-               const ub = pu() ? null : (0, Zb.e)(bb);
-               return null !== ub && void 0 !== ub ? ub : Zu.clientEscMenuOptions.antiAliasing
+               const Jd = OJ() ? null : (0, Qd.b)(dd);
+               return null !== Jd && void 0 !== Jd ? Jd : QJ.clientEscMenuOptions.antiAliasing
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L367-L368` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L367-L368) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L367-L368)

```diff
-               (0, Zb.i)(bb);
-               const ub = pu() ? Zu.clientEscMenuOptions.antiAliasing : (0, Zb.j)();
+               (0, Qd.d)(dd);
+               const Jd = OJ() ? QJ.clientEscMenuOptions.antiAliasing : (0, Qd.e)();
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L382-L384` → after: `L382-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L382-L384) · [Before (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L382-L384)

```diff
-               let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pb.j)();
-               const ub = (0, pb.q)(bb);
-               return (0, pb.w)() && !0 === Ub.j.getItem(Ob.tc) && Ub.j.removeItem(Ob.tc), ub
+               let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Od.l)();
+               const Jd = (0, Od.t)(dd);
+               return (0, Od.z)() && !0 === Pd.i.getItem(Nd._b) && Pd.i.removeItem(Nd._b), Jd
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L387` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L387) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L387)

```diff
-               return (0, pb.A)() || !0 === Ub.j.getItem(ob.J)
+               return (0, Od.G)() || !0 === Pd.i.getItem(ed.D)
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L390)

```diff
-               return (0, pb.w)()
+               return (0, Od.z)()
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L393)

```diff
-               return wu ? au : null
+               return lJ ? KJ : null
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L396)

```diff
-               !0 === Ub.j.getItem(ob.J) && (0, wb.hasUsableWebGpuAdapter)()
+               !0 === Pd.i.getItem(ed.D) && (0, ld.hasUsableWebGpuAdapter)()
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L436)

```diff
-         }, , , (bb, ub, hb) => {
+         }, , , , , , , (dd, Jd, kd) => {
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L438-L440` → after: `L438-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L438-L439) · [Before (L438-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L438-L440)

```diff
-             c: () => Lb,
-             d: () => Gb,
-             f: () => ab,
+             e: () => Zd,
+             h: () => Wd,
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L442` → after: `L441-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L441-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L441-L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L442)

```diff
-             l: () => Hb
+             j: () => Cd,
+             n: () => od
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L444)

```diff
-           var Bb = hb(24),
+           var pd = kd(31),
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L454)

```diff
-               super(...arguments), this.hA = !1, this.HA = [], this.rA = {}
+               super(...arguments), this.JR = !1, this.kR = [], this.pR = {}
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L458)

```diff
-               this.hA || !hb ? this.emit(bb, ub) : this.HA.push({
+               this.JR || !kd ? this.emit(dd, Jd) : this.kR.push({
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L465-L466` → after: `L465-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L465-L466) · [Before (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L465-L466)

```diff
-               const Bb = this.JA(bb, ub);
-               return this.on(bb, Bb), this.rA[bb] = (null !== (hb = this.rA[bb]) && void 0 !== hb ? hb : 0) + 1, {
+               const pd = this.gR(dd, Jd);
+               return this.on(dd, pd), this.pR[dd] = (null !== (kd = this.pR[dd]) && void 0 !== kd ? kd : 0) + 1, {
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L475)

```diff
-               const hb = this.JA(bb, ub);
+               const kd = this.gR(dd, Jd);
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L482)

```diff
-               this.off(null === bb || void 0 === bb ? void 0 : bb.event, null === bb || void 0 === bb ? void 0 : bb.listener), "noaTick" !== (null === bb || void 0 === bb ? void 0 : bb.event) && "initInfoReceived" !== (null === bb || void 0 === bb ? void 0 : bb.event) || Gb--, th … [truncated]
+               this.off(null === dd || void 0 === dd ? void 0 : dd.event, null === dd || void 0 === dd ? void 0 : dd.listener), "noaTick" !== (null === dd || void 0 === dd ? void 0 : dd.event) && "initInfoReceived" !== (null === dd || void 0 === dd ? void 0 : dd.event) || Wd--, th … [truncated]
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L489` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L489) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L489)

```diff
-                   console.error(`Error in PubSub listener for event ${bb}:`, Bb)
+                   console.error(`Error in PubSub listener for event ${dd}:`, pd)
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L494)

```diff
-               this.hA = bb, bb && (this.HA.forEach((bb => {
+               this.JR = dd, dd && (this.kR.forEach((dd => {
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L499-L500` → after: `L499-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L499-L500) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L499-L500)

```diff
-                 this.vp(ub, hb)
-               })), this.HA = [])
+                 this.nO(Jd, kd)
+               })), this.kR = [])
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L506)

```diff
-             Sb.Bl(!0)
+             Cd.vR(!0)
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L515` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L515) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L515)

```diff
-         }, , , , , , , , bb => {
+         }, , dd => {
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L522)

```diff
-             this.JZ = bb, this.context = ub, this.once = hb || !1
+             this.hQ = dd, this.context = Jd, this.once = kd || !1
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L528-L529` → after: `L528-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L528-L529) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L528-L529)

```diff
-               Yb = hb ? hb + ub : ub;
-             return bb._events[Yb] ? bb._events[Yb].JZ ? bb._events[Yb] = [bb._events[Yb], Lb] : bb._events[Yb].push(Lb) : (bb._events[Yb] = Lb, bb._eventsCount++), bb
+               gd = kd ? kd + Jd : Jd;
+             return dd._events[gd] ? dd._events[gd].hQ ? dd._events[gd] = [dd._events[gd], Zd] : dd._events[gd].push(Zd) : (dd._events[gd] = Zd, dd._eventsCount++), dd
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L533)

```diff
-             0 === --bb._eventsCount ? bb._events = new Bb : delete bb._events[ub]
+             0 === --dd._eventsCount ? dd._events = new pd : delete dd._events[Jd]
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L545)

```diff
-             var ub = hb ? hb + bb : bb,
+             var Jd = kd ? kd + dd : dd,
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L548-L549` → after: `L548-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L548-L549) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L548-L549)

```diff
-             if (Bb.JZ) return [Bb.JZ];
-             for (var Ob = 0, Gb = Bb.length, Ub = new Array(Gb); Ob < Gb; Ob++) Ub[Ob] = Bb[Ob].JZ;
+             if (pd.hQ) return [pd.hQ];
+             for (var Nd = 0, Wd = pd.length, Pd = new Array(Wd); Nd < Wd; Nd++) Pd[Nd] = pd[Nd].hQ;
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L552)

```diff
-             var ub = hb ? hb + bb : bb,
+             var Jd = kd ? kd + dd : dd,
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L554)

```diff
-             return Bb ? Bb.JZ ? 1 : Bb.length : 0
+             return pd ? pd.hQ ? 1 : pd.length : 0
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L556)

```diff
-             var Lb = hb ? hb + bb : bb;
+             var Zd = kd ? kd + dd : dd;
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L560-L561` → after: `L560-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L560-L561) · [Before (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L560-L561)

```diff
-             if (ab.JZ) {
-               switch (ab.once && this.removeListener(bb, ab.JZ, void 0, !0), Hb) {
+             if (Kd.hQ) {
+               switch (Kd.once && this.removeListener(dd, Kd.hQ, void 0, !0), od) {
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L563)

```diff
-                   return ab.JZ.call(ab.context), !0;
+                   return Kd.hQ.call(Kd.context), !0;
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L565)

```diff
-                   return ab.JZ.call(ab.context, ub), !0;
+                   return Kd.hQ.call(Kd.context, Jd), !0;
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L567)

```diff
-                   return ab.JZ.call(ab.context, ub, Bb), !0;
+                   return Kd.hQ.call(Kd.context, Jd, pd), !0;
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L569)

```diff
-                   return ab.JZ.call(ab.context, ub, Bb, Ob), !0;
+                   return Kd.hQ.call(Kd.context, Jd, pd, Nd), !0;
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L571)

```diff
-                   return ab.JZ.call(ab.context, ub, Bb, Ob, Gb), !0;
+                   return Kd.hQ.call(Kd.context, Jd, pd, Nd, Wd), !0;
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L573)

```diff
-                   return ab.JZ.call(ab.context, ub, Bb, Ob, Gb, Ub), !0
+                   return Kd.hQ.call(Kd.context, Jd, pd, Nd, Wd, Pd), !0
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L576)

```diff
-               ab.JZ.apply(ab.context, Yb)
+               Kd.hQ.apply(Kd.context, gd)
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L579)

```diff
-               for (Sb = 0; Sb < Zb; Sb++) switch (ab[Sb].once && this.removeListener(bb, ab[Sb].JZ, void 0, !0), Hb) {
+               for (Cd = 0; Cd < Qd; Cd++) switch (Kd[Cd].once && this.removeListener(dd, Kd[Cd].hQ, void 0, !0), od) {
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L581` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L581) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L581)

```diff
-                   ab[Sb].JZ.call(ab[Sb].context);
+                   Kd[Cd].hQ.call(Kd[Cd].context);
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L584)

```diff
-                   ab[Sb].JZ.call(ab[Sb].context, ub);
+                   Kd[Cd].hQ.call(Kd[Cd].context, Jd);
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L587` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L587) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L587)

```diff
-                   ab[Sb].JZ.call(ab[Sb].context, ub, Bb);
+                   Kd[Cd].hQ.call(Kd[Cd].context, Jd, pd);
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L590)

```diff
-                   ab[Sb].JZ.call(ab[Sb].context, ub, Bb, Ob);
+                   Kd[Cd].hQ.call(Kd[Cd].context, Jd, pd, Nd);
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L595)

```diff
-                   ab[Sb].JZ.apply(ab[Sb].context, Yb)
+                   Kd[Cd].hQ.apply(Kd[Cd].context, gd)
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L604)

```diff
-             var Gb = hb ? hb + bb : bb;
+             var Wd = kd ? kd + dd : dd;
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L608` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L608) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L608)

```diff
-             if (Lb.JZ) Lb.JZ !== ub || Ob && !Lb.once || Bb && Lb.context !== Bb || Ub(this, Gb);
+             if (Zd.hQ) Zd.hQ !== Jd || Nd && !Zd.once || pd && Zd.context !== pd || Pd(this, Wd);
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L610-L611` → after: `L610-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L610-L611) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L610-L611)

```diff
-               for (var Yb = 0, Sb = [], ab = Lb.length; Yb < ab; Yb++)(Lb[Yb].JZ !== ub || Ob && !Lb[Yb].once || Bb && Lb[Yb].context !== Bb) && Sb.push(Lb[Yb]);
-               Sb.length ? this._events[Gb] = 1 === Sb.length ? Sb[0] : Sb : Ub(this, Gb)
+               for (var gd = 0, Cd = [], Kd = Zd.length; gd < Kd; gd++)(Zd[gd].hQ !== Jd || Nd && !Zd[gd].once || pd && Zd[gd].context !== pd) && Cd.push(Zd[gd]);
+               Cd.length ? this._events[Wd] = 1 === Cd.length ? Cd[0] : Cd : Pd(this, Wd)
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L614` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L614) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L614)

```diff
-           }, Lb.prototype.Gl = function(bb) {
+           }, Zd.prototype.xR = function(dd) {
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L616)

```diff
-             return bb ? (ub = hb ? hb + bb : bb, this._events[ub] && Ub(this, ub)) : (this._events = new Bb, this._eventsCount = 0), this
+             return dd ? (Jd = kd ? kd + dd : dd, this._events[Jd] && Pd(this, Jd)) : (this._events = new pd, this._eventsCount = 0), this
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L618)

```diff
-         }, , , , , (bb, ub, hb) => {
+         }, , (dd, Jd, kd) => {
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L620) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L620)

```diff
-             c: () => ab,
+             d: () => Kd,
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L622-L625` → after: `L622-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L622-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L622-L625) · [Before (L622-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L622-L625)

```diff
-             j: () => Hb,
-             m: () => wb,
-             p: () => Xb,
-             s: () => Sb
+             i: () => od,
+             k: () => ld,
+             o: () => Ld,
+             p: () => Cd
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L627)

```diff
-           var Bb = hb(35),
+           var pd = kd(39),
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L629)

```diff
-             Gb = hb(37),
+             Wd = kd(48),
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L633)

```diff
-               return `bloxd-${bb}`
+               return `bloxd-${dd}`
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L664` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L664) · [Before (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L664)

```diff
-                 return console.error("Caught error", hb, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (ub = this._cachedVals[bb]) && void 0 !== ub ? ub : null
+                 return console.error("Caught error", kd, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (Jd = this._cachedVals[dd]) && void 0 !== Jd ? Jd : null
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L698)

```diff
-                 return console.error("Caught error", hb, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", kd, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L729)

```diff
-                 return console.error("Caught error", hb, "when attempting to read from sessionStorage."), null !== (ub = this._cachedVals[bb]) && void 0 !== ub ? ub : null
+                 return console.error("Caught error", kd, "when attempting to read from sessionStorage."), null !== (Jd = this._cachedVals[dd]) && void 0 !== Jd ? Jd : null
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L756` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L756) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L756)

```diff
-                 return null !== (Bb = this._cachedVals[bb]) && void 0 !== Bb ? Bb : null
+                 return null !== (pd = this._cachedVals[dd]) && void 0 !== pd ? pd : null
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L778` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L778) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L778)

```diff
-                   for (let Bb, Ob, Gb = 0, Ub = 0; Ob = bb.charAt(Ub++); ~Ob && (Bb = Gb % 4 ? 64 * Bb + Ob : Ob, Gb++ % 4) ? ub += String.fromCharCode(255 & Bb >> (-2 * Gb & 6)) : 0) Ob = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(Ob);
+                   for (let pd, Nd, Wd = 0, Pd = 0; Nd = dd.charAt(Pd++); ~Nd && (pd = Wd % 4 ? 64 * pd + Nd : Nd, Wd++ % 4) ? Jd += String.fromCharCode(255 & pd >> (-2 * Wd & 6)) : 0) Nd = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(Nd);
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L785)

```diff
-               return Ub ? Ob = Ub : (Ob = pb.FZAkcO(Ob), bb[Gb] = Ob), Ob
+               return Pd ? Nd = Pd : (Nd = Od.FZAkcO(Nd), dd[Wd] = Nd), Nd
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L959)

```diff
-                 return bb instanceof this ? bb : Gb.resolve(new this(Ob), bb)
+                 return dd instanceof this ? dd : Wd.resolve(new this(Nd), dd)
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L1008` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1008) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1008)

```diff
-                 return this.state !== Yb ? Hb(hb, this.state === Lb ? bb : ub, this.outcome) : this.queue.push(new ab(hb, bb, ub)), hb
+                 return this.state !== gd ? od(kd, this.state === Zd ? dd : Jd, this.outcome) : this.queue.push(new Kd(kd, dd, Jd)), kd
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L1381` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1381) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1381)

```diff
-                       return bb ? ub : ib(ub)
+                       return dd ? Jd : md(Jd)
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1657)

```diff
-                   bb instanceof ArrayBuffer ? (Bb = bb, Ob += hu) : (Bb = bb.buffer, "[object Int8Array]" === hb ? Ob += Ou : "[object Uint8Array]" === hb ? Ob += Gu : "[object Uint8ClampedArray]" === hb ? Ob += Uu : "[object Int16Array]" === hb ? Ob += Lu : "[object Uint16Array] … [truncated]
+                   dd instanceof ArrayBuffer ? (pd = dd, Nd += kJ) : (pd = dd.buffer, "[object Int8Array]" === kd ? Nd += NJ : "[object Uint8Array]" === kd ? Nd += WJ : "[object Uint8ClampedArray]" === kd ? Nd += PJ : "[object Int16Array]" === kd ? Nd += ZJ : "[object Uint16Array] … [truncated]
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1681` → after: `L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1681) · [Before (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1681)

```diff
-                   case hu:
+                   case kJ:
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1683)

```diff
-                   case Bu:
+                   case pJ:
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1687` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1687) · [Before (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1687)

```diff
-                   case Ou:
+                   case NJ:
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1689` → after: `L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1689) · [Before (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1689)

```diff
-                   case Gu:
+                   case WJ:
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1691` → after: `L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1691) · [Before (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1691)

```diff
-                   case Uu:
+                   case PJ:
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1693` → after: `L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1693) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1693)

```diff
-                   case Lu:
+                   case ZJ:
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1695` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1695) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1695)

```diff
-                   case Su:
+                   case CJ:
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1697` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1697) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1697)

```diff
-                   case Yu:
+                   case gJ:
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1699` → after: `L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1699) · [Before (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1699)

```diff
-                   case au:
+                   case KJ:
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1701` → after: `L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1701) · [Before (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1701)

```diff
-                   case Hu:
+                   case oJ:
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1703` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1703) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1703)

```diff
-                   case wu:
+                   case lJ:
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1741` → after: `L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1741) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1741)

```diff
-                 return hb.Ul = Ku, Ob
+                 return kd.bR = GJ, Nd
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1763` → after: `L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1763) · [Before (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1763)

```diff
-                         Bb && (Bb = Ob.Ul.deserialize(Bb)), ub(Bb)
+                         pd && (pd = Nd.bR.deserialize(pd)), Jd(pd)
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1783` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1783) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1783)

```diff
-                             if (Sb && (Sb = Ob.Ul.deserialize(Sb)), void 0 !== (Sb = bb(Sb, Yb.key, Lb + 1))) return void ub(Sb)
+                             if (Cd && (Cd = Nd.bR.deserialize(Cd)), void 0 !== (Cd = dd(Cd, gd.key, Zd + 1))) return void Jd(Cd)
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L1803` → after: `L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L1803) · [Before (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L1803)

```diff
-                     Yb.Ul.serialize(ub, (function(ub, Sb) {
+                     gd.bR.serialize(Jd, (function(Jd, Cd) {
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L2014` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2014) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2014)

```diff
-                 return hb.keyPrefix = su(bb, ub._defaultConfig), mu() ? (ub._dbInfo = hb, hb.Ul = Ku, Sb.resolve()) : Sb.reject()
+                 return kd.keyPrefix = nJ(dd, Jd._defaultConfig), yJ() ? (Jd._dbInfo = kd, kd.bR = GJ, Cd.resolve()) : Cd.reject()
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L2034` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2034) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2034)

```diff
-                   return Bb && (Bb = ub.Ul.deserialize(Bb)), Bb
+                   return pd && (pd = Jd.bR.deserialize(pd)), pd
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L2046` → after: `L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2046) · [Before (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2046)

```diff
-                         if (Sb && (Sb = ub.Ul.deserialize(Sb)), void 0 !== (Sb = bb(Sb, Yb.substring(Ob), Ub++))) return Sb
+                         if (Cd && (Cd = Jd.bR.deserialize(Cd)), void 0 !== (Cd = dd(Cd, gd.substring(Nd), Pd++))) return Cd
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L2104` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2104) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2104)

```diff
-                     Ub.Ul.serialize(ub, (function(ub, Bb) {
+                     Pd.bR.serialize(Jd, (function(Jd, pd) {
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L2324` → after: `L2324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2324) · [Before (L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2324)

```diff
-         }, , (bb, ub, hb) => {
+         }, , , , , , , , , (dd, Jd, kd) => {
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2393` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2393) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2393)

```diff
-         }, , , , (bb, ub, hb) => {
+         }, , , , , (dd, Jd, kd) => {
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2395` → after: `L2395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2395) · [Before (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2395)

```diff
-             e: () => Ob
+             b: () => Nd
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2397` → after: `L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2397) · [Before (L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2397)

```diff
-           var Bb = hb(29);
+           var pd = kd(33);
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2401` → after: `L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2401) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2401)

```diff
-             return null !== (bb = Bb.j.getItem("soundVol")) && void 0 !== bb ? bb : .5
+             return null !== (dd = pd.i.getItem("soundVol")) && void 0 !== dd ? dd : .5
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2406` → after: `L2404-L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2404-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2404-L2406) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2406)

```diff
-           var Bb = hb(60),
+           dd.exports = kd(58)
+         }, , (dd, Jd, kd) => {
+           var pd = kd(63),
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2517-L2518` → after: `L2517-L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2517-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2517-L2518) · [Before (L2517-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2517-L2518)

```diff
-                   case Ob:
-                   case Gb:
+                   case Nd:
+                   case Wd:
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2539` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2539) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2539)

```diff
-                   return null === bb || "object" !== typeof bb ? null : "function" === typeof(bb = wb && bb[wb] || bb["@@iterator"]) ? bb : null
+                   return null === dd || "object" !== typeof dd ? null : "function" === typeof(dd = ld && dd[ld] || dd["@@iterator"]) ? dd : null
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2693` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2693) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2693)

```diff
-         }, , , , , , , , bb => {
+         }, , , , , dd => {
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L2726` → after: `L2726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2726) · [Before (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2726)

```diff
-         }, , , , , (bb, ub, hb) => {
+         }, , , , , , , , , (dd, Jd, kd) => {
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L2733-L2737` → after: `L2733-L2737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2733-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2733-L2737) · [Before (L2733-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2733-L2737)

```diff
-           }(), bb.exports = hb(72)
-         }, , , , , , , (bb, ub, hb) => {
-           var Bb = hb(49),
-             Ob = hb(60),
-             Gb = hb(75);
+           }(), dd.exports = kd(76)
+         }, , , , (dd, Jd, kd) => {
+           var pd = kd(56),
+             Nd = kd(63),
+             Wd = kd(84);
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L2824` → after: `L2824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2824) · [Before (L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2824)

```diff
-             }(ub) && (null === hb ? bb.removeAttribute(ub) : bb.setAttribute(ub, "" + hb)) : Ob.mustUseProperty ? bb[Ob.propertyName] = null === hb ? 3 !== Ob.type && "" : hb : (ub = Ob.attributeName, Bb = Ob.attributeNamespace, null === hb ? bb.removeAttribute(ub) : (hb = 3 ===  … [truncated]
+             }(Jd) && (null === kd ? dd.removeAttribute(Jd) : dd.setAttribute(Jd, "" + kd)) : Nd.mustUseProperty ? dd[Nd.propertyName] = null === kd ? 3 !== Nd.type && "" : kd : (Jd = Nd.attributeName, pd = Nd.attributeNamespace, null === kd ? dd.removeAttribute(Jd) : (kd = 3 ===  … [truncated]
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L2865` → after: `L2865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2865) · [Before (L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2865)

```diff
-             return null === bb || "object" !== typeof bb ? null : "function" === typeof(bb = qb && bb[qb] || bb["@@iterator"]) ? bb : null
+             return null === dd || "object" !== typeof dd ? null : "function" === typeof(dd = Ed && dd[Ed] || dd["@@iterator"]) ? dd : null
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L2963` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2963) · [Before (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2963)

```diff
-               case jb:
+               case sd:
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L2965` → after: `L2965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2965) · [Before (L2965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2965)

```diff
-               case rb:
+               case Bd:
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L2967` → after: `L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2967) · [Before (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2967)

```diff
-               case Db:
+               case ad:
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L2969` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2969) · [Before (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2969)

```diff
-               case nb:
+               case id:
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L2971` → after: `L2971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2971) · [Before (L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2971)

```diff
-               case ib:
+               case md:
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L2973` → after: `L2973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2973) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2973)

```diff
-               case vb:
+               case bd:
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L2977` → after: `L2977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2977) · [Before (L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2977)

```diff
-               case zb:
+               case Fd:
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L2979` → after: `L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2979) · [Before (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2979)

```diff
-               case xb:
+               case Md:
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L2981` → after: `L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2981) · [Before (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2981)

```diff
-               case gb:
+               case Yd:
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L2984` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2984) · [Before (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2984)

```diff
-               case tb:
+               case Sd:
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L2986` → after: `L2986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2986) · [Before (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2986)

```diff
-               case eb:
+               case Xd:
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L2988` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L2988) · [Before (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L2988)

```diff
-               case Jb:
+               case jd:
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L3072` → after: `L3072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L3072) · [Before (L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L3072)

```diff
-               checked: null != hb ? hb : bb._wrapperState.initialChecked
+               checked: null != kd ? kd : dd._wrapperState.initialChecked
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L3372)

```diff
-             bb: switch (ub) {
+             dd: switch (Jd) {
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L3438` → after: `L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L3438) · [Before (L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L3438)

```diff
-             return 3 === ub.tag ? hb : null
+             return 3 === Jd.tag ? kd : null
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L3510` → after: `L3510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L3510) · [Before (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L3510)

```diff
-                 return hb.stateNode.current === hb ? bb : ub
+                 return kd.stateNode.current === kd ? dd : Jd
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L3722` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L3722) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L3722)

```diff
-             return 0 !== (bb = -1073741825 & bb.pendingLanes) ? bb : 1073741824 & bb ? 1073741824 : 0
+             return 0 !== (dd = -1073741825 & dd.pendingLanes) ? dd : 1073741824 & dd ? 1073741824 : 0
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L3846` → after: `L3846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L3846) · [Before (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L3846)

```diff
-             return YB = Ob.slice(bb, 1 < ub ? 1 - ub : void 0)
+             return Cp = Nd.slice(dd, 1 < Jd ? 1 - Jd : void 0)
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L3851` → after: `L3851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L3851) · [Before (L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L3851)

```diff
-             return "charCode" in bb ? 0 === (bb = bb.charCode) && 13 === ub && (bb = 13) : bb = ub, 10 === bb && (bb = 13), 32 <= bb || 13 === bb ? bb : 0
+             return "charCode" in dd ? 0 === (dd = dd.charCode) && 13 === Jd && (dd = 13) : dd = Jd, 10 === dd && (dd = 13), 32 <= dd || 13 === dd ? dd : 0
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L3865` → after: `L3865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L3865) · [Before (L3865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L3865)

```diff
-               return this.isDefaultPrevented = (null != Ob.defaultPrevented ? Ob.defaultPrevented : !1 === Ob.returnValue) ? HB : wB, this.isPropagationStopped = wB, this
+               return this.isDefaultPrevented = (null != Nd.defaultPrevented ? Nd.defaultPrevented : !1 === Nd.returnValue) ? lp : Qp, this.isPropagationStopped = Qp, this
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L4225` → after: `L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L4225) · [Before (L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L4225)

```diff
-               bb: {
+               dd: {
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L4267` → after: `L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L4267) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L4267)

```diff
-             var Bb = hb.window === hb ? hb.document : 9 === hb.nodeType ? hb : hb.ownerDocument;
+             var pd = kd.window === kd ? kd.document : 9 === kd.nodeType ? kd : kd.ownerDocument;
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L4305` → after: `L4305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L4305) · [Before (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L4305)

```diff
-               bb: {
+               dd: {
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L4371` → after: `L4371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L4371) · [Before (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L4371)

```diff
-             if (0 === (1 & ub) && 0 === (2 & ub) && null !== Bb) bb: for (;;) {
+             if (0 === (1 & Jd) && 0 === (2 & Jd) && null !== pd) dd: for (;;) {
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L4405` → after: `L4405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/main.js#L4405) · [Before (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/main.js#L4405)

```diff
-               bb: {
+               dd: {
```
