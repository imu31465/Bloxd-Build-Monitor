# Changed — Bundle Modifications Report (Part 064 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `64 / 67` (**417** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 063](part-063.md) · [Part 065 →](part-065.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1045 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 871. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10498-L10500` → after: `L10498-L10500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10498-L10500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498-L10500) · [Before (L10498-L10500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498-L10500)

```diff
-             if (rz - 4 >= sz && this.oreGenerator.addOresToChunk(zz, tz, sz, Wz, 4, oz, Nz), rz >= sz && (gz.addCavesToChunk(zz, tz, sz, Wz, oz, uz), ft.addCaveDecorationsToChunk(zz, tz, sz, Wz, this.pw, Dz)), Oz.o.bedrockLevel >= sz && Oz.o.bedrockLevel < sz + this.pw)
-               for (let Fz = tz; Fz < tz + this.pw; Fz++)
-                 for (let Xz = Wz; Xz < Wz + this.pw; Xz++) zz.set(Fz - tz, Oz.o.bedrockLevel - sz, Xz - Wz, this.bedrockId);
+             if (mv - 4 >= Pv && this.oreGenerator.addOresToChunk(vv, zv, Pv, Sv, 4, pv, Wv), mv >= Pv && (Cv.addCavesToChunk(vv, zv, Pv, Sv, pv, Tv), kz.addCaveDecorationsToChunk(vv, zv, Pv, Sv, this.aa, sv)), gv.u.bedrockLevel >= Pv && gv.u.bedrockLevel < Pv + this.aa)
+               for (let hv = zv; hv < zv + this.aa; hv++)
+                 for (let ev = Sv; ev < Sv + this.aa; ev++) vv.set(hv - zv, gv.u.bedrockLevel - Pv, ev - Sv, this.bedrockId);
```

#### 872. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10503-L10505` → after: `L10503-L10505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10503-L10505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10503-L10505) · [Before (L10503-L10505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10503-L10505)

```diff
-               for (let Xz = tz; Xz < tz + this.pw; Xz++)
-                 for (let Oz = sz; Oz < sz + this.pw; Oz++)
-                   for (let oz = Wz; oz < Wz + this.pw; oz++) {
+               for (let ev = zv; ev < zv + this.aa; ev++)
+                 for (let gv = Pv; gv < Pv + this.aa; gv++)
+                   for (let pv = Sv; pv < Sv + this.aa; pv++) {
```

#### 873. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10516-L10517` → after: `L10516-L10517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10516-L10517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10517) · [Before (L10516-L10517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10517)

```diff
-               for (let sz = Math.max(Xz, 0); sz < Math.min(Oz, this.pw); sz++) zz.set(tz, sz, Wz, this.waterId);
-               Oz >= 0 && Oz < this.pw && zz.set(tz, Oz, Wz, Jz[Fz + 4])
+               for (let Pv = Math.max(ev, 0); Pv < Math.min(gv, this.aa); Pv++) vv.set(zv, Pv, Sv, this.waterId);
+               gv >= 0 && gv < this.aa && vv.set(zv, gv, Sv, Yv[hv + 4])
```

#### 874. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10520-L10525` → after: `L10520-L10525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10520-L10525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10520-L10525) · [Before (L10520-L10525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10520-L10525)

```diff
-             if (this.addSurfaceBlocks(zz, sz, Hz.lilyPads), Yz && rz >= sz && Pz < sz + this.pw)
-               for (let gz = tz; gz < tz + this.pw; gz++)
-                 for (let vz = Wz; vz < Wz + this.pw; vz++) {
-                   const Kz = oz.get(gz, vz, Xz.e.WaterHeight),
-                     uz = oz.get(gz, vz, Xz.e.GroundHeight);
-                   if (Kz !== Oz.l && uz >= sz && uz < sz + this.pw)
+             if (this.addSurfaceBlocks(vv, Pv, iv.lilyPads), jv && mv >= Pv && Gv < Pv + this.aa)
+               for (let Cv = zv; Cv < zv + this.aa; Cv++)
+                 for (let dv = Sv; dv < Sv + this.aa; dv++) {
+                   const lv = pv.get(Cv, dv, ev.h.WaterHeight),
+                     Tv = pv.get(Cv, dv, ev.h.GroundHeight);
+                   if (lv !== gv.r && Tv >= Pv && Tv < Pv + this.aa)
```

#### 875. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10529` → after: `L10529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10529) · [Before (L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10529)

```diff
-                       if ((0, Fz.F)(Xz, gz, vz) < 100) Iz === Xz[0] && Cz === Xz[1] || (Iz = Xz[0], Cz = Xz[1], ez = new Uz.k(`${this.seed}${Iz}${Cz}`).next() < .3 ? this.chalkId : this.clayId), zz.set(gz - tz, uz - sz, vz - Wz, ez), uz - 1 >= sz && zz.set(gz - tz, uz - 1 - sz, v … [truncated]
+                       if ((0, hv.K)(ev, Cv, dv) < 100) nv === ev[0] && Ov === ev[1] || (nv = ev[0], Ov = ev[1], Dv = new Nv.l(`${this.seed}${nv}${Ov}`).next() < .3 ? this.chalkId : this.clayId), vv.set(Cv - zv, Tv - Pv, dv - Sv, Dv), Tv - 1 >= Pv && vv.set(Cv - zv, Tv - 1 - Pv, d … [truncated]
```

#### 876. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10538-L10541` → after: `L10538-L10541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10538-L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10541) · [Before (L10538-L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10541)

```diff
-               for (let Xz = tz; Xz < tz + this.pw; Xz++)
-                 for (let Oz = sz; Oz < sz + this.pw; Oz++)
-                   for (let oz = Wz; oz < Wz + this.pw; oz++) {
-                     const vz = dz.c.getBlockFromFixedPointPrefab(Xz, Oz, oz, Fz);
+               for (let ev = zv; ev < zv + this.aa; ev++)
+                 for (let gv = Pv; gv < Pv + this.aa; gv++)
+                   for (let pv = Sv; pv < Sv + this.aa; pv++) {
+                     const dv = Qv.e.getBlockFromFixedPointPrefab(ev, gv, pv, hv);
```

#### 877. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10562` → after: `L10562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10562) · [Before (L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10562)

```diff
-               Wz >= 0 && Wz < this.pw && zz.set(sz[Fz], Wz, sz[Fz + 2], sz[Fz + 3])
+               Sv >= 0 && Sv < this.aa && vv.set(Pv[hv], Sv, Pv[hv + 2], Pv[hv + 3])
```

#### 878. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10576` → after: `L10576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10576) · [Before (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10576)

```diff
-             this.pw = zz, this.biomeSelector = tz, this.seed = sz, this.random = new Uz.k(""), this.lilyPadId = void 0, this.lilyPadId = Fz["Lily Pad"].id
+             this.aa = vv, this.biomeSelector = zv, this.seed = Pv, this.random = new Nv.l(""), this.lilyPadId = void 0, this.lilyPadId = hv["Lily Pad"].id
```

#### 879. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10586-L10587` → after: `L10586-L10587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10586-L10587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10586-L10587) · [Before (L10586-L10587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10586-L10587)

```diff
-             for (let Dz = zz; Dz < zz + this.pw; Dz++)
-               for (let Hz = tz; Hz < tz + this.pw; Hz++) {
+             for (let sv = vv; sv < vv + this.aa; sv++)
+               for (let iv = zv; iv < zv + this.aa; iv++) {
```

#### 880. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10589-L10590` → after: `L10589-L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10589-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10589-L10590) · [Before (L10589-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10589-L10590)

```diff
-                   Pz = sz.getOrGenerate(Dz, Hz, Xz.e.GroundHeight),
-                   rz = sz.getOrGenerate(Dz, Hz, Xz.e.WaterHeight);
+                   Gv = Pv.getOrGenerate(sv, iv, ev.h.GroundHeight),
+                   mv = Pv.getOrGenerate(sv, iv, ev.h.WaterHeight);
```

#### 881. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10594-L10595` → after: `L10594-L10595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10594-L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10594-L10595) · [Before (L10594-L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10594-L10595)

```diff
-                 if (rz !== Oz.l) {
-                   wz = !0, Pz < rz && vz.push(Yz, xz, Pz + 1, rz, Bz.topwaterBlockType), Bz.hasScatteredLakes && 1 === sz.getOrGenerate(Dz, Hz, Xz.e.IsLake) && (this.random.reseed(`${Dz}|${Hz}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(Dz, Hz, sz) && Kz … [truncated]
+                 if (mv !== gv.r) {
+                   av = !0, Gv < mv && dv.push(jv, fv, Gv + 1, mv, cv.topwaterBlockType), cv.hasScatteredLakes && 1 === Pv.getOrGenerate(sv, iv, ev.h.IsLake) && (this.random.reseed(`${sv}|${iv}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(sv, iv, Pv) && lv … [truncated]
```

#### 882. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10599-L10600` → after: `L10599-L10600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10599-L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10599-L10600) · [Before (L10599-L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10599-L10600)

```diff
-                 if (Bz.hasScatteredLakes && this.isBesideLake(Dz, Hz, sz) && (this.random.reseed(`${Dz}|${Hz}|${this.seed}oasisShore`), this.random.next() < .85 && (Uz.push(Yz, Pz, xz), mz = this.biomeSelector.baseBiome.floraGenerator)), !gz.isInCave(Dz, Pz, Hz, Fz) && !dz.c.isWi … [truncated]
-                   for (let sz = Pz + 1; sz <= Pz + Bz.maxFloraHeight; sz += this.pw) uz.startY = sz, mz.addBiomeFloraToColumn(uz, zz, tz, Dz, sz, Hz, Pz)
+                 if (cv.hasScatteredLakes && this.isBesideLake(sv, iv, Pv) && (this.random.reseed(`${sv}|${iv}|${this.seed}oasisShore`), this.random.next() < .85 && (Nv.push(jv, Gv, fv), Fv = this.biomeSelector.baseBiome.floraGenerator)), !Cv.isInCave(sv, Gv, iv, hv) && !Qv.e.isWi … [truncated]
+                   for (let Pv = Gv + 1; Pv <= Gv + cv.maxFloraHeight; Pv += this.aa) Tv.startY = Pv, Fv.addBiomeFloraToColumn(Tv, vv, zv, sv, Pv, iv, Gv)
```

#### 883. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10613` → after: `L10613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10613) · [Before (L10613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10613)

```diff
-             return sz.getOrGenerate(zz + 1, tz, Xz.e.WaterHeight) !== Oz.l && sz.getOrGenerate(zz - 1, tz, Xz.e.WaterHeight) !== Oz.l && sz.getOrGenerate(zz, tz + 1, Xz.e.WaterHeight) !== Oz.l && sz.getOrGenerate(zz, tz - 1, Xz.e.WaterHeight) !== Oz.l
+             return Pv.getOrGenerate(vv + 1, zv, ev.h.WaterHeight) !== gv.r && Pv.getOrGenerate(vv - 1, zv, ev.h.WaterHeight) !== gv.r && Pv.getOrGenerate(vv, zv + 1, ev.h.WaterHeight) !== gv.r && Pv.getOrGenerate(vv, zv - 1, ev.h.WaterHeight) !== gv.r
```

#### 884. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10619` → after: `L10619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10619) · [Before (L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10619)

```diff
-             return sz.getOrGenerate(zz, tz, Xz.e.WaterHeight) !== Oz.l && 1 === sz.getOrGenerate(zz, tz, Xz.e.IsLake)
+             return Pv.getOrGenerate(vv, zv, ev.h.WaterHeight) !== gv.r && 1 === Pv.getOrGenerate(vv, zv, ev.h.IsLake)
```

#### 885. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10622` → after: `L10622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10622) · [Before (L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10622)

```diff
-         var Fs = sz(60450);
+         var PP = Pv(60716);
```

#### 886. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10627` → after: `L10627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10627) · [Before (L10627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10627)

```diff
-             if (this.pw = zz, this.hashChunkContents = Kz, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.aa = vv, this.hashChunkContents = lv, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 887. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10631-L10632` → after: `L10631-L10632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10631-L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10631-L10632) · [Before (L10631-L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10631-L10632)

```diff
-             this.chunkColumnInfos = Ws.partition(), this.caveGenerator = new gz(Wz, zz, tz, null !== (Nz = null === vz || void 0 === vz ? void 0 : vz.EF.tW) && void 0 !== Nz ? Nz : "Lava");
-             const rz = new At(tz, Wz, zz, null !== (bz = null === vz || void 0 === vz ? void 0 : vz.YW) && void 0 !== bz ? bz : [...jt, ...null !== (wz = null === Uz || void 0 === Uz ? void 0 : Uz.TW) && void 0 !== wz ? wz : []]),
+             this.chunkColumnInfos = hP.partition(), this.caveGenerator = new Cv(Sv, vv, zv, null !== (Wv = null === dv || void 0 === dv ? void 0 : dv.Se.pe) && void 0 !== Wv ? Wv : "Lava");
+             const mv = new tz(zv, Sv, vv, null !== (wv = null === dv || void 0 === dv ? void 0 : dv.Ue) && void 0 !== wv ? wv : [...xz, ...null !== (av = null === Nv || void 0 === Nv ? void 0 : Nv.Le) && void 0 !== av ? av : []]),
```

#### 888. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10634` → after: `L10634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10634) · [Before (L10634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10634)

```diff
-                 pw: zz,
+                 aa: vv,
```

#### 889. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10642-L10645` → after: `L10642-L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10642-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10642-L10645) · [Before (L10642-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10642-L10645)

```diff
-               xz = null !== (Dz = null === vz || void 0 === vz ? void 0 : vz.DW) && void 0 !== Dz ? Dz : null,
-               mz = null !== (Hz = null === Uz || void 0 === Uz ? void 0 : Uz.buildBiomes) && void 0 !== Hz ? Hz : null,
-               Jz = null !== xz ? (0, yt.d)(xz, Yz) : null !== mz ? this.buildTerrainBiomes(mz, Yz) : (0, yt.f)(Yz);
-             this.biomeSelector = new yt.c(this, rz, Wz, zz, tz, Jz), this.treeGenerator = new mt(this, this.biomeSelector, zz, Wz, tz), this.fixedPointPrefabTracker = new dz.c(oz, zz), this.prefabGenerator = new wt({
+               fv = null !== (sv = null === dv || void 0 === dv ? void 0 : dv.Ye) && void 0 !== sv ? sv : null,
+               Fv = null !== (iv = null === Nv || void 0 === Nv ? void 0 : Nv.buildBiomes) && void 0 !== iv ? iv : null,
+               Yv = null !== fv ? (0, qz.g)(fv, jv) : null !== Fv ? this.buildTerrainBiomes(Fv, jv) : (0, qz.j)(jv);
+             this.biomeSelector = new qz.c(this, mv, Sv, vv, zv, Yv), this.treeGenerator = new Fz(this, this.biomeSelector, vv, Sv, zv), this.fixedPointPrefabTracker = new Qv.e(pv, vv), this.prefabGenerator = new az({
```

#### 890. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10647` → after: `L10647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10647) · [Before (L10647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10647)

```diff
-               pw: zz,
+               aa: vv,
```

#### 891. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10651` → after: `L10651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10651) · [Before (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10651)

```diff
-                 [Xz.l.SURFACE]: {
+                 [ev.r.SURFACE]: {
```

#### 892. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10653` → after: `L10653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10653) · [Before (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10653)

```diff
-                     [Xz.k.MEDIUM]: {
+                     [ev.n.MEDIUM]: {
```

#### 893. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10656` → after: `L10656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10656) · [Before (L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10656)

```diff
-                     [Xz.k.HIGH]: {
+                     [ev.n.HIGH]: {
```

#### 894. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10659` → after: `L10659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10659) · [Before (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10659)

```diff
-                     [Xz.k.VERY_HIGH]: {
+                     [ev.n.VERY_HIGH]: {
```

#### 895. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10664` → after: `L10664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10664) · [Before (L10664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10664)

```diff
-                 [Xz.l.UNDERGROUND]: {
+                 [ev.r.UNDERGROUND]: {
```

#### 896. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10666` → after: `L10666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10666) · [Before (L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10666)

```diff
-                     [Xz.k.MEDIUM]: {
+                     [ev.n.MEDIUM]: {
```

#### 897. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10669-L10670` → after: `L10669-L10670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10669-L10670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669-L10670) · [Before (L10669-L10670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669-L10670)

```diff
-                     [Xz.k.HIGH]: null,
-                     [Xz.k.VERY_HIGH]: null
+                     [ev.n.HIGH]: null,
+                     [ev.n.VERY_HIGH]: null
```

#### 898. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10675` → after: `L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10675) · [Before (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10675)

```diff
-             }), this.noWaterHeightmapGenerator = new Fs.g((0, Fs.i)(Wz)), this.heightmapPerturb = new Fz.h([{
+             }), this.noWaterHeightmapGenerator = new PP.h((0, PP.j)(Sv)), this.heightmapPerturb = new hv.i([{
```

#### 899. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10684` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684)

```diff
-             }], `${Wz}HeightmapPerturb`);
+             }], `${Sv}HeightmapPerturb`);
```

#### 900. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10690` → after: `L10690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10690) · [Before (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10690)

```diff
-             this.waterBodyGenerator = new Gt(this.biomeSelector, this.noWaterHeightmapGenerator, Wz, zz, Iz, this.needOutsideWaterDist, Oz, null === (Bz = null === vz || void 0 === vz ? void 0 : vz.fF) || void 0 === Bz || Bz), this.caveDecorationGenerator = new ft(tz, zz, Wz, nul … [truncated]
+             this.waterBodyGenerator = new Vz(this.biomeSelector, this.noWaterHeightmapGenerator, Sv, vv, nv, this.needOutsideWaterDist, gv, null === (cv = null === dv || void 0 === dv ? void 0 : dv.he) || void 0 === cv || cv), this.caveDecorationGenerator = new kz(zv, vv, Sv, nul … [truncated]
```

#### 901. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10709` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709)

```diff
-             const sz = this.pw,
+             const Pv = this.aa,
```

#### 902. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10727` → after: `L10727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10727) · [Before (L10727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10727)

```diff
-               if ((null !== (Wz = Fz.get(Xz.key)) && void 0 !== Wz ? Wz : Xz) !== Xz) throw new Error(`A world-gen terrain built two biomes keyed "${Xz.key}"`);
+               if ((null !== (Sv = hv.get(ev.key)) && void 0 !== Sv ? Sv : ev) !== ev) throw new Error(`A world-gen terrain built two biomes keyed "${ev.key}"`);
```

#### 903. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10737-L10738` → after: `L10737-L10738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10737-L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10737-L10738) · [Before (L10737-L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10737-L10738)

```diff
-               const zz = `${Math.floor(vz.x/this.pw)}|${Math.floor(vz.z/this.pw)}`,
-                 tz = null !== (Oz = Xz.get(zz)) && void 0 !== Oz ? Oz : [];
+               const vv = `${Math.floor(dv.x/this.aa)}|${Math.floor(dv.z/this.aa)}`,
+                 zv = null !== (gv = ev.get(vv)) && void 0 !== gv ? gv : [];
```

#### 904. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10743-L10744` → after: `L10743-L10744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10743-L10744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10743-L10744) · [Before (L10743-L10744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10743-L10744)

```diff
-               const zz = Math.floor(vz[0].x / this.pw) * this.pw,
-                 tz = Math.floor(vz[0].z / this.pw) * this.pw,
+               const vv = Math.floor(dv[0].x / this.aa) * this.aa,
+                 zv = Math.floor(dv[0].z / this.aa) * this.aa,
```

#### 905. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10765` → after: `L10765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10765) · [Before (L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10765)

```diff
-                   nF: Uz.prefab.name
+                   rS: Nv.prefab.name
```

#### 906. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10798` → after: `L10798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10798) · [Before (L10798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10798)

```diff
-               Kz = Fz.getOrGenerate(zz + Math.floor(this.pw / 2), tz + Math.floor(this.pw / 2))[0].biome.oreGenerator.getOreBlocksForChunk(zz, tz),
+               lv = hv.getOrGenerate(vv + Math.floor(this.aa / 2), zv + Math.floor(this.aa / 2))[0].biome.oreGenerator.getOreBlocksForChunk(vv, zv),
```

#### 907. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10816` → after: `L10816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10816) · [Before (L10816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10816)

```diff
-             return Fz.p.create(this.pw, [zz, tz], this.biomeSelector)
+             return hv.q.create(this.aa, [vv, zv], this.biomeSelector)
```

#### 908. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10820` → after: `L10820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10820) · [Before (L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10820)

```diff
-             return Fz.o.create(this.pw, [zz, tz], Xz.e.NumFields, Oz)
+             return hv.o.create(this.aa, [vv, zv], ev.h.NumFields, gv)
```

#### 909. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10824` → after: `L10824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10824) · [Before (L10824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10824)

```diff
-       60458: (zz, tz, sz) => {
+       60724: (vv, zv, Pv) => {
```

#### 910. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10826` → after: `L10826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10826) · [Before (L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10826)

```diff
-           d: () => Qz,
+           c: () => Av,
```

#### 911. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10828-L10829` → after: `L10828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10828) · [Before (L10828-L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10828-L10829)

```diff
-           h: () => mz,
-           j: () => Jz,
+           i: () => Fv,
```

#### 912. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10832` → after: `L10832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10832) · [Before (L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10832)

```diff
-           p: () => Gz,
+           q: () => Vv,
```

#### 913. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10834-L10839` → after: `L10834-L10839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10834-L10839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10834-L10839) · [Before (L10834-L10839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10834-L10839)

```diff
-           u: () => Pz,
-           v: () => xz,
-           x: () => Dz,
-           z: () => Yz,
-           C: () => Bz,
-           F: () => Hz
+           w: () => Gv,
+           A: () => fv,
+           E: () => sv,
+           H: () => jv,
+           J: () => cv,
+           K: () => iv
```

#### 914. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10841` → after: `L10841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10841) · [Before (L10841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10841)

```diff
-         var Fz = sz(37133),
+         var hv = Pv(37234),
```

#### 915. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10854` → after: `L10854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10854) · [Before (L10854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10854)

```diff
-             const tz = "function" == typeof zz ? zz : function(zz) {
+             const zv = "function" == typeof vv ? vv : function(vv) {
```

#### 916. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11063` → after: `L11063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11063) · [Before (L11063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11063)

```diff
-         var wz = sz(60464);
+         var av = Pv(60726);
```

#### 917. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11092` → after: `L11092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11092) · [Before (L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11092)

```diff
-             xo: Bz(zz, Xz, Oz),
+             Mg: cv(vv, ev, gv),
```

#### 918. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11123` → after: `L11123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11123) · [Before (L11123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11123)

```diff
-             for (let sz = 0; sz < zz.length; sz++) this._simplexes.push(new bz(`${tz}${sz}`))
+             for (let Pv = 0; Pv < vv.length; Pv++) this._simplexes.push(new wv(`${zv}${Pv}`))
```

#### 919. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11148` → after: `L11148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11148) · [Before (L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11148)

```diff
-             for (let Wz = 0; Wz < zz.length; Wz++) this._simplexes.push(new bz(`${sz}${Wz}`));
+             for (let Sv = 0; Sv < vv.length; Sv++) this._simplexes.push(new wv(`${Pv}${Sv}`));
```

#### 920. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11156` → after: `L11156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11156) · [Before (L11156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11156)

```diff
-               if (sz - this.remainingAmplitudes[Fz] > this.threshold.high || sz + this.remainingAmplitudes[Fz] < this.threshold.low) return wz.b;
+               if (Pv - this.remainingAmplitudes[hv] > this.threshold.high || Pv + this.remainingAmplitudes[hv] < this.threshold.low) return av.c;
```

#### 921. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11284` → after: `L11284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11284) · [Before (L11284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11284)

```diff
-             if (void 0 === Fz) throw new Error(`Number not found for x=${zz}, z=${tz}, thirdIndex=${sz}`);
+             if (void 0 === hv) throw new Error(`Number not found for x=${vv}, z=${zv}, thirdIndex=${Pv}`);
```

#### 922. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11333` → after: `L11333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11333) · [Before (L11333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11333)

```diff
-             if (void 0 === Wz) throw new Error(`Number not found for x=${zz}, z=${tz}, thirdIndex=${sz}, fourthIndex=${Fz}`);
+             if (void 0 === Sv) throw new Error(`Number not found for x=${vv}, z=${zv}, thirdIndex=${Pv}, fourthIndex=${hv}`);
```

#### 923. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11363` → after: `L11363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11363) · [Before (L11363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11363)

```diff
-       60464: (zz, tz, sz) => {
+       60726: (vv, zv, Pv) => {
```

#### 924. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11365-L11366` → after: `L11365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11365) · [Before (L11365-L11366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11365-L11366)

```diff
-           b: () => vz,
-           e: () => Oz,
+           c: () => dv,
```

#### 925. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11368-L11371` → after: `L11367-L11371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11367-L11371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11367-L11371) · [Before (L11368-L11371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11368-L11371)

```diff
-           j: () => Xz,
-           k: () => oz,
-           l: () => Wz,
-           o: () => Fz
+           i: () => Nv,
+           m: () => ev,
+           p: () => pv,
+           r: () => Sv,
+           u: () => hv
```

#### 926. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11384` → after: `L11384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11384) · [Before (L11384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11384)

```diff
-       60472: (zz, tz, sz) => {
+       60730: (vv, zv, Pv) => {
```

#### 927. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11388` → after: `L11387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11387) · [Before (L11388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11388)

```diff
-           g: () => vz,
+           h: () => hv,
```

#### 928. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11390-L11391` → after: `L11389-L11391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11389-L11391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11389-L11391) · [Before (L11390-L11391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11390-L11391)

```diff
-           l: () => Oz,
-           p: () => Xz
+           n: () => pv,
+           r: () => gv,
+           t: () => ev
```

#### 929. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11410` → after: `L11410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11410) · [Before (L11410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11410)

```diff
-       3939: (zz, tz, sz) => {
+       4028: (vv, zv, Pv) => {
```

#### 930. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413-L11414` → after: `L11413-L11414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11413-L11414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413-L11414) · [Before (L11413-L11414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413-L11414)

```diff
-           g: () => Xz,
-           k: () => Fz,
+           i: () => ev,
+           l: () => hv,
```

#### 931. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11416-L11417` → after: `L11416-L11417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11416-L11417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11416-L11417) · [Before (L11416-L11417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11416-L11417)

```diff
-           q: () => Oz,
-           u: () => Wz
+           p: () => gv,
+           s: () => Sv
```

#### 932. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11443` → after: `L11443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11443) · [Before (L11443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11443)

```diff
-             if (this.distribution = void 0, zz.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(zz)}`);
+             if (this.distribution = void 0, vv.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(vv)}`);
```

#### 933. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11448` → after: `L11448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11448) · [Before (L11448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11448)

```diff
-               if (tz.has(Fz)) throw new Error(`Values must be unique: ${JSON.stringify(zz)}`);
+               if (zv.has(hv)) throw new Error(`Values must be unique: ${JSON.stringify(vv)}`);
```

#### 934. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11451` → after: `L11451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11451) · [Before (L11451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11451)

```diff
-               if (Xz <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(zz)}`);
+               if (ev <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(vv)}`);
```

#### 935. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11476` → after: `L11476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11476) · [Before (L11476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11476)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, zz > tz) throw new Error(`Min must be less than or equal to Max, but Min=${zz} and Max=${tz}`);
+             if (this.offset = void 0, this.multiplier = void 0, vv > zv) throw new Error(`Min must be less than or equal to Max, but Min=${vv} and Max=${zv}`);
```

#### 936. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11486` → after: `L11486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11486) · [Before (L11486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11486)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new Oz(zz, tz, sz), !Number.isInteger(zz) || !Number.isInteger(tz)) throw new Error(`Min and Max must be integers, but Min=${zz} and Max=${tz}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new gv(vv, zv, Pv), !Number.isInteger(vv) || !Number.isInteger(zv)) throw new Error(`Min and Max must be integers, but Min=${vv} and Max=${zv}`)
```

#### 937. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11502` → after: `L11502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11502) · [Before (L11502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11502)

```diff
-       580: (zz, tz, sz) => {
+       626: (vv, zv, Pv) => {
```

#### 938. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11505` → after: `L11505-L11506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11505-L11506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11505-L11506) · [Before (L11505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11505)

```diff
-           G: () => vz,
+           D: () => wv,
+           H: () => av,
```

#### 939. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11507-L11511` → after: `L11508-L11511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11508-L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11508-L11511) · [Before (L11507-L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11507-L11511)

```diff
-           c: () => oz,
-           g: () => Oz,
-           j: () => Wz,
-           r: () => Xz,
-           s: () => Nz,
+           Y: () => Tv,
+           d: () => pv,
+           i: () => gv,
+           k: () => Sv,
```

#### 940. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11513` → after: `L11513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11513) · [Before (L11513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11513)

```diff
-           w: () => bz
+           x: () => Wv
```

#### 941. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11515` → after: `L11515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11515) · [Before (L11515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11515)

```diff
-         var Fz = sz(585);
+         var hv = Pv(628);
```

#### 942. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11545` → after: `L11545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11545) · [Before (L11545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11545)

```diff
-         Fz.e, Number(atob("NQ==")), Number(atob("MTM="));
+         hv.c, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 943. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11553` → after: `L11553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11553) · [Before (L11553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11553)

```diff
-       585: (zz, tz, sz) => {
+       628: (vv, zv, Pv) => {
```

#### 944. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11555` → after: `L11555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11555) · [Before (L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11555)

```diff
-           e: () => Fz
+           c: () => hv
```

#### 945. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11557` → after: `L11557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11557) · [Before (L11557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11557)

```diff
-         const Fz = 867
+         const hv = 868
```

#### 946. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11580-L11585` → after: `L11580-L11585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11580-L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11580-L11585) · [Before (L11580-L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11580-L11585)

```diff
-   }, sz.f = {}, sz.e = zz => Promise.all(Object.keys(sz.f).reduce(((tz, Fz) => (sz.f[Fz](zz, tz), tz)), [])), sz.u = zz => "static/js/7rj44." + (66 === zz ? "worldgenTables" : zz) + "." + {
-     66: "2730afc9",
-     69: "04baf3b5",
-     70: "a02f6aa6",
-     71: "9df162c0",
-     72: "75dd15af"
+   }, Pv.f = {}, Pv.e = vv => Promise.all(Object.keys(Pv.f).reduce(((zv, hv) => (Pv.f[hv](vv, zv), zv)), [])), Pv.u = vv => "static/js/qepqb8." + (67 === vv ? "worldgenTables" : vv) + "." + {
+     67: "ffba08a1",
+     70: "12eb6475",
+     71: "abdb6502",
+     72: "98b453ab",
+     73: "7a1c2871"
```

#### 947. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11592` → after: `L11592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11592) · [Before (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11592)

```diff
-   }, sz.j = 67, sz.p = "/", (() => {
+   }, Pv.j = 68, Pv.p = "/", (() => {
```

#### 948. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11621` → after: `L11621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11621) · [Before (L11621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11621)

```diff
-         67: 0
+         68: 0
```

#### 949. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11656` → after: `L11656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11656) · [Before (L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11656)

```diff
-       sz = tz < 0 ? this.length + tz : tz;
+       Pv = zv < 0 ? this.length + zv : zv;
```

#### 950. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11671-L11673` → after: `L11671-L11673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11671-L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11671-L11673) · [Before (L11671-L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11671-L11673)

```diff
-     hw: () => hz,
-     ID: () => Qz,
-     Iu: () => kz,
+     sC: () => Zv,
+     CC: () => Av,
+     PT: () => Lv,
```

#### 951. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11676-L11686` → after: `L11676-L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11676-L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11676-L11686) · [Before (L11676-L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11676-L11686)

```diff
-     Cu: () => iz,
-     eu: () => Lz,
-     Zu: () => lz,
-     Gu: () => nz,
-     Tu: () => az,
-     cu: () => qz,
-     ju: () => Sz,
-     Au: () => Vz,
-     ku: () => Rz,
-     Lu: () => pz,
-     lu: () => fz
+     hT: () => Hv,
+     ST: () => Mv,
+     eT: () => yv,
+     gT: () => Bv,
+     pT: () => Jv,
+     dT: () => Ev,
+     NT: () => ov,
+     lT: () => bv,
+     aT: () => rv,
+     CT: () => kv,
+     iT: () => Xv
```

#### 952. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11691` → after: `L11691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11691) · [Before (L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11691)

```diff
-   var Uz = sz(37133),
+   var Nv = Pv(37234),
```

#### 953. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11726` → after: `L11726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11726) · [Before (L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11726)

```diff
-     return null === Dz ? "not failed" : `${Dz}: ${(zz=gz)instanceof Error?`${zz.name}: ${zz.message}`:String(zz)}`;
+     return null === sv ? "not failed" : `${sv}: ${(vv=Cv)instanceof Error?`${vv.name}: ${vv.message}`:String(vv)}`;
```

#### 954. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11731` → after: `L11731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11731) · [Before (L11731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11731)

```diff
-     if (!Iz()) throw new Error(`Bloxd wasm is not ready (${Cz()}): check isBloxdWasmReady() first`);
+     if (!nv()) throw new Error(`Bloxd wasm is not ready (${Ov()}): check isBloxdWasmReady() first`);
```

#### 955. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11769` → after: `L11769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11769) · [Before (L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11769)

```diff
-       ku: Wz
+       aT: Sv
```

#### 956. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11790` → after: `L11790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11790) · [Before (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11790)

```diff
-     wz = "failed", Dz = tz, gz = zz, console.error(`Bloxd wasm failed (${tz}):`, zz);
+     av = "failed", sv = zv, Cv = vv, console.error(`Bloxd wasm failed (${zv}):`, vv);
```

#### 957. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11809-L11810` → after: `L11809-L11810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11809-L11810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11809-L11810) · [Before (L11809-L11810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11809-L11810)

```diff
-       reserveUpFront: tz => zz().Gu(tz),
-       reserveAhead: tz => zz().Zu(tz),
+       reserveUpFront: zv => vv().gT(zv),
+       reserveAhead: zv => vv().eT(zv),
```

#### 958. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11812` → after: `L11812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11812) · [Before (L11812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11812)

```diff
-         zz().Tu(tz)
+         vv().pT(zv)
```

#### 959. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11814` → after: `L11814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11814) · [Before (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11814)

```diff
-       lowWater: () => Mz[zz().eu()] ?? "none",
+       lowWater: () => Iv[vv().ST()] ?? "none",
```

#### 960. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11837-L11839` → after: `L11837-L11839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11837-L11839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11837-L11839) · [Before (L11837-L11839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11837-L11839)

```diff
-       }(zz().cu()),
-       takeBallast: () => zz().ju(),
-       takePressure: () => zz().Au()
+       }(vv().dT()),
+       takeBallast: () => vv().NT(),
+       takePressure: () => vv().lT()
```

#### 961. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11849` → after: `L11849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11849) · [Before (L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11849)

```diff
-       Ht.zdSb(zz, 0)
+       iz.M29G(vv, 0)
```

#### 962. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11852` → after: `L11852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11852) · [Before (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11852)

```diff
-       const tz = Ut(zz, Ht.C50X, Ht.OFwF),
+       const zv = Nz(vv, iz.Sriy, iz.WSdJ),
```

#### 963. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11854` → after: `L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11854) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11854)

```diff
-       Ht.aXrx(this.__wbg_ptr, tz, sz)
+       iz.IA4r(this.__wbg_ptr, zv, Pv)
```

#### 964. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11857` → after: `L11857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11857) · [Before (L11857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11857)

```diff
-       return Ht.Fe5f(this.__wbg_ptr) >>> 0
+       return iz.NXQy(this.__wbg_ptr) >>> 0
```

#### 965. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11860` → after: `L11860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11860) · [Before (L11860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11860)

```diff
-       const zz = Ht.J8Xi();
+       const vv = iz.cret();
```

#### 966. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11864` → after: `L11864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11864) · [Before (L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11864)

```diff
-       return Ht.eIUd(this.__wbg_ptr) >>> 0
+       return iz.rsf2(this.__wbg_ptr) >>> 0
```

#### 967. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11867` → after: `L11867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11867) · [Before (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11867)

```diff
-       return Ht.nFph(this.__wbg_ptr) >>> 0
+       return iz.EKyB(this.__wbg_ptr) >>> 0
```

#### 968. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11870` → after: `L11870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11870) · [Before (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11870)

```diff
-       return Ht.nLh3(this.__wbg_ptr) >>> 0
+       return iz.ePgF(this.__wbg_ptr) >>> 0
```

#### 969. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11881` → after: `L11881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11881) · [Before (L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11881)

```diff
-       Ht.VPlC(zz, 0)
+       iz.AGUf(vv, 0)
```

#### 970. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11884` → after: `L11884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11884) · [Before (L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11884)

```diff
-       return Ht.UaTH(this.__wbg_ptr, zz) >>> 0
+       return iz.Mu6o(this.__wbg_ptr, vv) >>> 0
```

#### 971. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11887` → after: `L11887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11887) · [Before (L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11887)

```diff
-       return Ht.xuVU(this.__wbg_ptr, zz) >>> 0
+       return iz.gt8j(this.__wbg_ptr, vv) >>> 0
```

#### 972. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11890` → after: `L11890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11890) · [Before (L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11890)

```diff
-       const zz = Ht.zUjI();
+       const vv = iz.NE0V();
```

#### 973. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11894` → after: `L11894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11894) · [Before (L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11894)

```diff
-       return Ht.AuYx(this.__wbg_ptr) >>> 0
+       return iz.fw0Q(this.__wbg_ptr) >>> 0
```

#### 974. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11897` → after: `L11897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11897) · [Before (L11897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11897)

```diff
-       return Ht.Y9by(this.__wbg_ptr) >>> 0
+       return iz.EEnD(this.__wbg_ptr) >>> 0
```

#### 975. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11900` → after: `L11900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11900) · [Before (L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11900)

```diff
-       return Ht.vcj9(this.__wbg_ptr, zz) >>> 0
+       return iz.saUQ(this.__wbg_ptr, vv) >>> 0
```

#### 976. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11905` → after: `L11905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11905) · [Before (L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11905)

```diff
-     const sz = Ut(zz, Ht.C50X, Ht.OFwF),
+     const Pv = Nz(vv, iz.Sriy, iz.WSdJ),
```

#### 977. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11907` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11907) · [Before (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11907)

```diff
-       Wz = Ht.dcBb(sz, Fz, tz);
+       Sv = iz.JoLL(Pv, hv, zv);
```

#### 978. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11912` → after: `L11912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11912) · [Before (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11912)

```diff
-     Ht.Tcye()
+     iz.CCon()
```

#### 979. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11916` → after: `L11916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11916) · [Before (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11916)

```diff
-     return Ht.SpJI() >>> 0
+     return iz.fN2y() >>> 0
```

#### 980. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11920` → after: `L11920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11920) · [Before (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11920)

```diff
-     return 0 !== Ht.Fw3V(zz)
+     return 0 !== iz.P0zM(vv)
```

#### 981. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11924` → after: `L11924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11924) · [Before (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11924)

```diff
-     return 0 !== Ht.JvT5(zz)
+     return 0 !== iz.hXhK(vv)
```

#### 982. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11928` → after: `L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11928) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11928)

```diff
-     Ht.RXW5(zz)
+     iz.ZKX7(vv)
```

#### 983. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11932` → after: `L11932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11932) · [Before (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11932)

```diff
-     return Ht.hS2r() >>> 0
+     return iz.WieO() >>> 0
```

#### 984. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11936` → after: `L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11936) · [Before (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11936)

```diff
-     return Ht.Wz0y() >>> 0
+     return iz.OaPr() >>> 0
```

#### 985. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11940` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11940) · [Before (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11940)

```diff
-     return 0 !== Ht.F2z5()
+     return 0 !== iz.kbxx()
```

#### 986. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11944` → after: `L11944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944)

```diff
-     return Ht.ueyJ() >>> 0
+     return iz.aycX() >>> 0
```

#### 987. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11950` → after: `L11950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11950) · [Before (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11950)

```diff
-       const sz = Ht.iv9X();
+       const Pv = iz.uAdi();
```

#### 988. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11953` → after: `L11953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11953) · [Before (L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11953)

```diff
-       Ht.kAi4(zz, tz, 1)
+       iz.UbXH(vv, zv, 1)
```

#### 989. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11958` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11958) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11958)

```diff
-     Ht.Y77B(st(zz))
+     iz.GUBO(Pz(vv))
```

#### 990. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11964` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964)

```diff
-       oWL3: {
+       Yk4J: {
```

#### 991. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11966` → after: `L11966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11966) · [Before (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11966)

```diff
-         aGu3: function(zz, tz) {
+         Qv3Y: function(vv, zv) {
```

#### 992. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11969` → after: `L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11969) · [Before (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11969)

```diff
-         syTx: function(zz, tz) {
+         h4sD: function(vv, zv) {
```

#### 993. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11972` → after: `L11972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11972) · [Before (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11972)

```diff
-         MwvT: function(zz) {
+         PiuI: function(vv) {
```

#### 994. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11975` → after: `L11975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11975) · [Before (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11975)

```diff
-         SeiU: function(zz, tz) {
+         qlMe: function(vv, zv) {
```

#### 995. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11978` → after: `L11978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11978) · [Before (L11978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11978)

```diff
-         Bdnf: function(zz) {
+         EnU5: function(vv) {
```

#### 996. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11988` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988)

```diff
-     } : new FinalizationRegistry((zz => Ht.zdSb(zz, 1))),
+     } : new FinalizationRegistry((vv => iz.M29G(vv, 1))),
```

#### 997. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11992` → after: `L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11992) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11992)

```diff
-     } : new FinalizationRegistry((zz => Ht.VPlC(zz, 1)));
+     } : new FinalizationRegistry((vv => iz.AGUf(vv, 1)));
```

#### 998. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12069` → after: `L12069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12069) · [Before (L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12069)

```diff
-     return gt = zz, Ht = zz.exports, Dt = tz, Wt = null, Ht.j7cE(), Ht
+     return Cz = vv, iz = vv.exports, sz = zv, Sz = null, iz.AfKG(), iz
```

#### 999. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12093` → after: `L12093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12093) · [Before (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12093)

```diff
-         if (!zz.ok) throw new Error(`failed to fetch Wasm: ${zz.status} ${zz.statusText} fetching '${zz.url}'`);
+         if (!vv.ok) throw new Error(`failed to fetch Wasm: ${vv.status} ${vv.statusText} fetching '${vv.url}'`);
```

#### 1000. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12123-L12124` → after: `L12123-L12124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12123-L12124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12123-L12124) · [Before (L12123-L12124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12123-L12124)

```diff
-       if (!Iz()) throw new Error(`Bloxd wasm is not ready (${Cz()}): check isBloxdWasmReady() first`);
-       if (rz !== zz) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${tz}`)
+       if (!nv()) throw new Error(`Bloxd wasm is not ready (${Ov()}): check isBloxdWasmReady() first`);
+       if (mv !== vv) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${zv}`)
```

#### 1001. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12127` → after: `L12127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12127) · [Before (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12127)

```diff
-   var mt = sz(580);
+   var Fz = Pv(626);
```

#### 1002. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12134` → after: `L12134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12134) · [Before (L12134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12134)

```diff
-       } = sz(60541), bz = function(zz, tz, sz) {
+       } = Pv(60795), wv = function(vv, zv, Pv) {
```

#### 1003. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12136` → after: `L12136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12136) · [Before (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12136)

```diff
-         for (const oz of zz.TW) Tt(oz, sz);
+         for (const pv of vv.Le) Uz(pv, Pv);
```

#### 1004. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12139` → after: `L12139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12139) · [Before (L12139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12139)

```diff
-           TW: zz.TW,
+           Le: vv.Le,
```

#### 1005. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12145` → after: `L12145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12145) · [Before (L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12145)

```diff
-           throw new Error(`Custom world-gen terrain "${Fz.name}" is not in this generator's catalogue (${zz.length>0?zz.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${hv.name}" is not in this generator's catalogue (${vv.length>0?vv.join(", "):"empty"})`)
```

#### 1006. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12150` → after: `L12150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12150) · [Before (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12150)

```diff
-               if (null !== zz.GW) throw new Error(`Custom world-gen terrain "${zz.name}" takes no options`);
+               if (null !== vv.Ae) throw new Error(`Custom world-gen terrain "${vv.name}" takes no options`);
```

#### 1007. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12154-L12155` → after: `L12154-L12155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12154-L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12154-L12155) · [Before (L12154-L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12154-L12155)

```diff
-             if (null !== zz.GW) try {
-               sz = JSON.parse(zz.GW)
+             if (null !== vv.Ae) try {
+               Pv = JSON.parse(vv.Ae)
```

#### 1008. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12157` → after: `L12157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12157) · [Before (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12157)

```diff
-               throw new Error(`Custom world-gen terrain "${zz.name}" has invalid optionsJson: ${String(Fz)}`, {
+               throw new Error(`Custom world-gen terrain "${vv.name}" has invalid optionsJson: ${String(hv)}`, {
```

#### 1009. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12164` → after: `L12164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12164) · [Before (L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12164)

```diff
-           TW: zz.TW,
+           Le: vv.Le,
```

#### 1010. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12167` → after: `L12167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12167) · [Before (L12167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12167)

```diff
-       }(null !== (Kz = null === oz || void 0 === oz ? void 0 : oz.IW) && void 0 !== Kz ? Kz : null, vz, tz);
+       }(null !== (lv = null === pv || void 0 === pv ? void 0 : pv.Ie) && void 0 !== lv ? lv : null, dv, zv);
```

#### 1011. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12169` → after: `L12169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12169) · [Before (L12169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12169)

```diff
-       const wz = null !== (uz = null === oz || void 0 === oz ? void 0 : oz.layers) && void 0 !== uz ? uz : [];
+       const av = null !== (Tv = null === pv || void 0 === pv ? void 0 : pv.layers) && void 0 !== Tv ? Tv : [];
```

#### 1012. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12172` → after: `L12172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12172) · [Before (L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12172)

```diff
-         const sz = [...zz].sort(((zz, tz) => zz.VF - tz.VF));
+         const Pv = [...vv].sort(((vv, zv) => vv.ve - zv.ve));
```

#### 1013. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12174` → after: `L12174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12174) · [Before (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12174)

```diff
-           if (sz[Fz].VF < sz[Fz - 1].RF) throw new Error(`Custom world-gen layers overlap: [${sz[Fz-1].VF}, ${sz[Fz-1].RF}) and [${sz[Fz].VF}, ${sz[Fz].RF})`)
+           if (Pv[hv].ve < Pv[hv - 1].ze) throw new Error(`Custom world-gen layers overlap: [${Pv[hv-1].ve}, ${Pv[hv-1].ze}) and [${Pv[hv].ve}, ${Pv[hv].ze})`)
```

#### 1014. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12186` → after: `L12186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12186) · [Before (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12186)

```diff
-         if (sz >= Wz.VF && sz < Wz.RF) return Xz.getChunk(zz, tz, sz - Wz.pF, Fz);
+         if (Pv >= Sv.ve && Pv < Sv.ze) return ev.getChunk(vv, zv, Pv - Sv.Pe, hv);
```

#### 1015. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12204-L12205` → after: `L12204-L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12204-L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12204-L12205) · [Before (L12204-L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12204-L12205)

```diff
-     if (zz.VF >= zz.RF) throw new Error(`Custom world-gen layer has minY (${zz.VF}) >= maxY (${zz.RF})`);
-     if (zz.VF % mt.t !== 0 || zz.RF % mt.t !== 0 || zz.pF % mt.t !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${mt.t}); got minY=${zz.VF}, maxY=${zz.RF}, groundY=${zz.pF}`);
+     if (vv.ve >= vv.ze) throw new Error(`Custom world-gen layer has minY (${vv.ve}) >= maxY (${vv.ze})`);
+     if (vv.ve % Fz.A !== 0 || vv.ze % Fz.A !== 0 || vv.Pe % Fz.A !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${Fz.A}); got minY=${vv.ve}, maxY=${vv.ze}, groundY=${vv.Pe}`);
```

#### 1016. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12207-L12210` → after: `L12207-L12210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12207-L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12207-L12210) · [Before (L12207-L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12207-L12210)

```diff
-         if (void 0 === (0, mt.A)(zz.tW, tz)) throw new Error(`Custom world-gen caves lavaPitBlock "${zz.tW}" not found in blockMetadata`);
-         if (zz.sW)
-           for (const sz of zz.sW) Ct(sz, tz)
-       }(zz.EF, tz), 0 === zz.DW.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, Fz.H)(vv.pe, zv)) throw new Error(`Custom world-gen caves lavaPitBlock "${vv.pe}" not found in blockMetadata`);
+         if (vv.de)
+           for (const Pv of vv.de) Oz(Pv, zv)
+       }(vv.Se, zv), 0 === vv.Ye.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1017. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12212` → after: `L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12212) · [Before (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12212)

```diff
-     for (const Fz of zz.DW) Gt(Fz, tz), sz += Fz.frequency;
+     for (const hv of vv.Ye) Vz(hv, zv), Pv += hv.frequency;
```

#### 1018. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12214` → after: `L12214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12214) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12214)

```diff
-     for (const Fz of zz.YW) Tt(Fz, tz)
+     for (const hv of vv.Ue) Uz(hv, zv)
```

#### 1019. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12220-L12222` → after: `L12220-L12222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12220-L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12220-L12222) · [Before (L12220-L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12220-L12222)

```diff
-       WW: Fz,
-       XW: Wz,
-       OW: Xz
+       le: hv,
+       Te: Sv,
+       ae: ev
```

#### 1020. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12224-L12225` → after: `L12224-L12225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12224-L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12224-L12225) · [Before (L12224-L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12224-L12225)

```diff
-     if (void 0 === (0, mt.A)(sz, tz)) throw new Error(`Custom world-gen cave decoration blockName "${sz}" not found in blockMetadata`);
-     if (!Fz && !Wz && !Xz) throw new Error(`Custom world-gen cave decoration "${sz}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, Fz.H)(Pv, zv)) throw new Error(`Custom world-gen cave decoration blockName "${Pv}" not found in blockMetadata`);
+     if (!hv && !Sv && !ev) throw new Error(`Custom world-gen cave decoration "${Pv}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1021. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12228-L12229` → after: `L12228-L12229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12228-L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12228-L12229) · [Before (L12228-L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12228-L12229)

```diff
-     if (Xz && et(sz, "meta|rot1|top", tz), Zt(zz.oW, sz, "oW"), Zt(zz.vW, sz, "vW"), !Number.isInteger(zz.UW) || zz.UW < 0) throw new Error(`Custom world-gen cave decoration "${sz}" minPlacements must be a non-negative integer, got ${zz.UW}`);
-     if (!(0, mt.G)(zz.KW) && (Zt(zz.KW.NW, sz, "depthRamp.deepClusterChance"), zz.KW.bW <= zz.KW.wW)) throw new Error(`Custom world-gen cave decoration "${sz}" deepY must be strictly smaller than shallowY, but ${zz.KW.bW} <= ${zz.KW.wW} `)
+     if (ev && Dz(Pv, "meta|rot1|top", zv), Kz(vv.se, Pv, "se"), Kz(vv.Ce, Pv, "Ce"), !Number.isInteger(vv.ie) || vv.ie < 0) throw new Error(`Custom world-gen cave decoration "${Pv}" minPlacements must be a non-negative integer, got ${vv.ie}`);
+     if (!(0, Fz.N)(vv.ce) && (Kz(vv.ce.je, Pv, "depthRamp.deepClusterChance"), vv.ce.fe <= vv.ce.Fe)) throw new Error(`Custom world-gen cave decoration "${Pv}" deepY must be strictly smaller than shallowY, but ${vv.ce.fe} <= ${vv.ce.Fe} `)
```

#### 1022. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12233-L12234` → after: `L12233-L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12233-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12233-L12234) · [Before (L12233-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12233-L12234)

```diff
-     const Fz = `${zz}|${tz}`;
-     if (void 0 === (0, mt.A)(Fz, sz)) throw new Error(`Custom world-gen cave decoration "${zz}" is missing directional variant "${Fz}" required for wall/ceiling anchoring`)
+     const hv = `${vv}|${zv}`;
+     if (void 0 === (0, Fz.H)(hv, Pv)) throw new Error(`Custom world-gen cave decoration "${vv}" is missing directional variant "${hv}" required for wall/ceiling anchoring`)
```

#### 1023. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12238` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12238) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12238)

```diff
-     if (zz < 0 || zz > 1) throw new Error(`Custom world-gen cave decoration "${tz}" ${sz} must be in [0, 1], got ${zz}`)
+     if (vv < 0 || vv > 1) throw new Error(`Custom world-gen cave decoration "${zv}" ${Pv} must be in [0, 1], got ${vv}`)
```

#### 1024. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12242-L12248` → after: `L12242-L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12242-L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12242-L12248) · [Before (L12242-L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12242-L12248)

```diff
-     if (zz.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${zz.frequency}`);
-     if (void 0 === (0, mt.A)(zz.HW, tz)) throw new Error(`Custom world-gen biome topsoilBlock "${zz.HW}" not found in blockMetadata`);
-     if (void 0 === (0, mt.A)(zz.BW, tz)) throw new Error(`Custom world-gen biome lowsoilBlock "${zz.BW}" not found in blockMetadata`);
-     if (0 === zz.PW.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const sz of zz.PW) {
-       if (sz.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${sz.frequency}`);
-       if (void 0 === (0, mt.A)(sz.blockName, tz)) throw new Error(`Custom world-gen biome stoneType blockName "${sz.blockName}" not found in blockMetadata`)
+     if (vv.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${vv.frequency}`);
+     if (void 0 === (0, Fz.H)(vv.Oe, zv)) throw new Error(`Custom world-gen biome topsoilBlock "${vv.Oe}" not found in blockMetadata`);
+     if (void 0 === (0, Fz.H)(vv.De, zv)) throw new Error(`Custom world-gen biome lowsoilBlock "${vv.De}" not found in blockMetadata`);
+     if (0 === vv.Ke.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const Pv of vv.Ke) {
+       if (Pv.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${Pv.frequency}`);
+       if (void 0 === (0, Fz.H)(Pv.blockName, zv)) throw new Error(`Custom world-gen biome stoneType blockName "${Pv.blockName}" not found in blockMetadata`)
```

#### 1025. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12253-L12257` → after: `L12253-L12257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12253-L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12253-L12257) · [Before (L12253-L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12253-L12257)

```diff
-     if (void 0 === (0, mt.A)(zz.blockName, tz)) throw new Error(`Custom world-gen ore blockName "${zz.blockName}" not found in blockMetadata`);
-     if (zz.radius < 0) throw new Error(`Custom world-gen ore "${zz.blockName}" radius must be >= 0, got ${zz.radius}`);
-     if (zz.mW <= 0) throw new Error(`Custom world-gen ore "${zz.blockName}" minDistBetweenDeposits must be > 0, got ${zz.mW}`);
-     if (zz.VF > zz.RF) throw new Error(`Custom world-gen ore "${zz.blockName}" minY (${zz.VF}) must be <= maxY (${zz.RF})`);
-     if (zz.JW < 0 || zz.JW > 1) throw new Error(`Custom world-gen ore "${zz.blockName}" spawnChance must be in [0, 1], got ${zz.JW}`)
+     if (void 0 === (0, Fz.H)(vv.blockName, zv)) throw new Error(`Custom world-gen ore blockName "${vv.blockName}" not found in blockMetadata`);
+     if (vv.radius < 0) throw new Error(`Custom world-gen ore "${vv.blockName}" radius must be >= 0, got ${vv.radius}`);
+     if (vv.te <= 0) throw new Error(`Custom world-gen ore "${vv.blockName}" minDistBetweenDeposits must be > 0, got ${vv.te}`);
+     if (vv.ve > vv.ze) throw new Error(`Custom world-gen ore "${vv.blockName}" minY (${vv.ve}) must be <= maxY (${vv.ze})`);
+     if (vv.qe < 0 || vv.qe > 1) throw new Error(`Custom world-gen ore "${vv.blockName}" spawnChance must be in [0, 1], got ${vv.qe}`)
```

#### 1026. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12263-L12266` → after: `L12263-L12266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12263-L12266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12263-L12266) · [Before (L12263-L12266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12263-L12266)

```diff
-       mW: 10,
-       VF: -98,
-       RF: -78,
-       JW: .4
+       te: 10,
+       ve: -98,
+       ze: -78,
+       qe: .4
```

#### 1027. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12271-L12274` → after: `L12271-L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12271-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12271-L12274) · [Before (L12271-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12271-L12274)

```diff
-       mW: 6,
-       VF: -40,
-       RF: 20,
-       JW: .6
+       te: 6,
+       ve: -40,
+       ze: 20,
+       qe: .6
```

#### 1028. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12278-L12281` → after: `L12278-L12281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12278-L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12278-L12281) · [Before (L12278-L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12278-L12281)

```diff
-       mW: 10,
-       VF: -75,
-       RF: -55,
-       JW: .4
+       te: 10,
+       ve: -75,
+       ze: -55,
+       qe: .4
```

#### 1029. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12285` → after: `L12285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12285) · [Before (L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12285)

```diff
-       GW: null
+       Ae: null
```

#### 1030. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12288` → after: `L12288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12288) · [Before (L12288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12288)

```diff
-     [ct]: () => sz(60442).b
+     [Rz]: () => Pv(60707).c
```

#### 1031. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12311` → after: `L12311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12311) · [Before (L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12311)

```diff
-     const zz = Promise.all([sz.e(69), sz.e(72), sz.e(71), sz.e(70), sz.e(66)]).then((() => sz(61041))).then((zz => {
+     const vv = Promise.all([Pv.e(70), Pv.e(73), Pv.e(72), Pv.e(71), Pv.e(67)]).then((() => Pv(61333))).then((vv => {
```

#### 1032. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12354` → after: `L12354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12354) · [Before (L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12354)

```diff
-               reason: `its memory stats trapped (${String(tz)})`
+               reason: `its memory stats trapped (${String(zv)})`
```

#### 1033. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12360` → after: `L12360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12360) · [Before (L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12360)

```diff
-               const sz = vz.xg();
+               const Pv = dv.iC();
```

#### 1034. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12363` → after: `L12363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12363) · [Before (L12363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12363)

```diff
-                 return String.fromCharCode(...new Uint8Array(Gz().buffer, zz.mg(), 32))
+                 return String.fromCharCode(...new Uint8Array(Vv().buffer, vv.cC(), 32))
```

#### 1035. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12376` → after: `L12376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12376) · [Before (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12376)

```diff
-               Oz = gz.pw, uz = new Uint16Array(Oz * Oz * Oz),
+               gv = Cv.aa, Tv = new Uint16Array(gv * gv * gv),
```

#### 1036. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12385` → after: `L12385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12385) · [Before (L12385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12385)

```diff
-                           reason: `the memory ceiling was not set (${String(Fz)})`
+                           reason: `the memory ceiling was not set (${String(hv)})`
```

#### 1037. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12389` → after: `L12389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12389) · [Before (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12389)

```diff
-                         vz = new(xt().hw)
+                         dv = new(fz().sC)
```

#### 1038. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12393` → after: `L12393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12393) · [Before (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12393)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(Fz)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(hv)})`
```

#### 1039. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12403` → after: `L12403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12403) · [Before (L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12403)

```diff
-                           reason: `the block and item tables did not load (${String(tz)})`
+                           reason: `the block and item tables did not load (${String(zv)})`
```

#### 1040. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12408` → after: `L12408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12408) · [Before (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12408)

```diff
-                       reason: `wasm did not start (${ez()})`
+                       reason: `wasm did not start (${Dv()})`
```

#### 1041. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12412` → after: `L12412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12412) · [Before (L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12412)

```diff
-                     reason: `chunk size ${Oz} is not the encoder's 32`
+                     reason: `chunk size ${gv} is not the encoder's 32`
```

#### 1042. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12423` → after: `L12423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12423) · [Before (L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12423)

```diff
-                 Uz = new Jt(Oz, oz.blockMetadata, oz.itemMetadata, zz.LF, !1, zz.lF, zz.aF, Fz, Dz)
+                 Nv = new Yz(gv, pv.blockMetadata, pv.itemMetadata, vv.oS, !1, vv.bS, vv.kS, hv, sv)
```

#### 1043. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12448` → after: `L12448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12448) · [Before (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12448)

```diff
-                     const sz = zz.Jg(),
+                     const Pv = vv.mC(),
```

#### 1044. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12450` → after: `L12450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12450) · [Before (L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12450)

```diff
-                       Wz = tz.byteLength >= Fz ? tz : new ArrayBuffer(Fz),
+                       Sv = zv.byteLength >= hv ? zv : new ArrayBuffer(hv),
```

#### 1045. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12453` → after: `L12453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12453) · [Before (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12453)

```diff
-                     return Oz.set(new Uint8Array(Xz, zz.mg(), kt)), Oz.set(new Uint8Array(Xz, zz.Ig(), sz), kt), {
+                     return gv.set(new Uint8Array(ev, vv.cC(), Lz)), gv.set(new Uint8Array(ev, vv.jC(), Pv), Lz), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L1-L2)

```diff
- export const id = 68;
- export const ids = [68];
+ export const id = 69;
+ export const ids = [69];
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   35917: (zz, tz, sz) => {
+   35944: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6)

```diff
-       d: () => Wz
+       e: () => Sv
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L40)

```diff
-           if (tz > 0 && sz.searchParams.set("cache-bust", `${Date.now()}-${tz}`), await this.fetchWhole(sz, zz)) return void(this.scriptUrl = sz);
+           if (zv > 0 && Pv.searchParams.set("cache-bust", `${Date.now()}-${zv}`), await this.fetchWhole(Pv, vv)) return void(this.scriptUrl = Pv);
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L82)

```diff
-   42398: (zz, tz, sz) => {
+   42740: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L89)

```diff
-     const Fz = new(sz(35917).d)(new URL(sz.p + sz.u(67), sz.b), {
+     const hv = new(Pv(35944).e)(new URL(Pv.p + Pv.u(68), Pv.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.css` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/main.css` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1)

#### 1. `bundles/bloxd.io/main.css` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L60)

```diff
-   overflow-x: visible;
+   overflow-x: hidden;
```

#### 2. `bundles/bloxd.io/main.css` (Changed code · before: `L835-L847` → after: `L835-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L835-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L835-L836) · [Before (L835-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L835-L847)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .DiscordMobileHeaderRightContainer {
-   padding-bottom: 1rem;
-   padding-right: 3rem;
-   padding-top: 3rem
- }
- 
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount {
-   align-items: stretch;
-   display: flex;
-   gap: .5rem;
-   height: 3.5rem;
-   justify-content: flex-start;
-   width: calc(50% - var(--logo-size)/2)
+ .HomeHeader .HomeHeaderInner .HomeHeaderTop.HomeHeaderTopPortrait.HomeHeaderTopWithStore .TitleContainer {
+   font-size: min(3.4rem, (100vw - 17.75rem)/5.3)
```

#### 3. `bundles/bloxd.io/main.css` (Changed code · before: `L850-L853` → after: `L839-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L839-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L839-L840) · [Before (L850-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L850-L853)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount.HomeHeaderAccountLandscape {
-   box-sizing: border-box;
-   min-width: 0;
-   padding-right: 1.5rem
+ .HomeHeader .HomeHeaderInner .HomeHeaderTop.HomeHeaderTopPortrait.HomeHeaderTopWithStore .HomeHeaderRightContainer .HomeHeaderRight {
+   padding: 0 .25rem
```

#### 4. `bundles/bloxd.io/main.css` (Changed code · before: `L856` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L843) · [Before (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L856)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .HomeHeaderAccountButton {
+ .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccountButton {
```

#### 5. `bundles/bloxd.io/main.css` (Changed code · before: `L884` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L871) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L884)

```diff
-   .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .HomeHeaderAccountButton:before {
+   .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccountButton:before {
```

#### 6. `bundles/bloxd.io/main.css` (Changed code · before: `L892` → after: `L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L879) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L892)

```diff
-   .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .HomeHeaderAccountButton:hover {
+   .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccountButton:hover {
```

#### 7. `bundles/bloxd.io/main.css` (Changed code · before: `L897` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L884) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L897)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .HomeHeaderAccountButton.pad-focused {
+ .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccountButton.pad-focused {
```

#### 8. `bundles/bloxd.io/main.css` (Changed code · before: `L901` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L888) · [Before (L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L901)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .HomeHeaderAccountButton[data-pressing] {
+ .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccountButton[data-pressing] {
```

#### 9. `bundles/bloxd.io/main.css` (Changed code · before: `L908` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L895) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L908)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .HomeHeaderAccountButton .SocialCountBadge {
+ .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccountButton .SocialCountBadge {
```

#### 10. `bundles/bloxd.io/main.css` (Changed code · before: `L914` → after: `L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L901) · [Before (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L914)

```diff
- .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccount .HomeHeaderAccountButton .SocialCountBadge.SocialCountBadgeRequests {
+ .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderAccountButton .SocialCountBadge.SocialCountBadgeRequests {
```

#### 11. `bundles/bloxd.io/main.css` (Changed code · before: `L1108` → after: `L1133-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L1133-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L1133-L1134) · [Before (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L1108)

```diff
-   flex-shrink: 0
+   flex-shrink: 0;
+   gap: var(--home-link-gap, .5rem)
```

#### 12. `bundles/bloxd.io/main.css` (Changed code · before: `L1112` → after: `L1138-L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L1138-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L1138-L1147) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L1112)

```diff
-   flex: 0 0 3rem
+   flex: 0 0 3rem;
+   position: relative
+ }
+ 
+ @media(pointer:coarse) {
+   .HomeHeader .HomeHeaderInner .HomeHeaderTop .HomeHeaderRightContainer .HomeLinkButtons .HomeLinkButton:before {
+     content: "";
+     inset: min(0px, (100% - 44px)/2) max(var(--home-link-gap, .5rem)/-2, min(0px, (100% - 44px)/2));
+     position: absolute
+   }
```

#### 13. `bundles/bloxd.io/main.css` (Changed code · before: `L1388-L1390` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L1428) · [Before (L1388-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L1388-L1390)

```diff
-   font-size: .25em;
-   font-weight: 800;
-   height: calc(70% - var(--border-size)*2*.7);
+   height: calc(70% - var(--border-size)*3*.7);
```

#### 14. `bundles/bloxd.io/main.css` (Changed code · before: `L1395` → after: `L1433-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R1433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L1433-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L1433-L1439) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L1395)

```diff
-   width: calc(70% - var(--border-size)*2*.7)
+   width: calc(70% - var(--border-size)*3*.7)
+ }
+ 
+ .LogoLoader .LogoLoaderProgressBar .LogoLoaderProgressBarText .LogoLoaderProgressBarPercent {
+   color: var(--border-color-2);
+   font-size: .25em;
+   font-weight: 800
```

#### 15. `bundles/bloxd.io/main.css` (Changed code · before: `L1408` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L1452) · [Before (L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L1408)

```diff
-   height: calc(70% - var(--border-size)*2*.7);
+   height: calc(70% - var(--border-size)*3*.7);
```

#### 16. `bundles/bloxd.io/main.css` (Changed code · before: `L1411` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L1455) · [Before (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L1411)

```diff
-   width: calc(70% - var(--border-size)*2*.7)
+   width: calc(70% - var(--border-size)*3*.7)
```

#### 17. `bundles/bloxd.io/main.css` (Changed code · before: `L2145-L2146` → after: `L2194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L2194) · [Before (L2145-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L2145-L2146)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 18. `bundles/bloxd.io/main.css` (Changed code · before: `L2159-L2160` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L2212) · [Before (L2159-L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L2159-L2160)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 19. `bundles/bloxd.io/main.css` (Changed code · before: `L2313-L2314` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L2380) · [Before (L2313-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L2313-L2314)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 20. `bundles/bloxd.io/main.css` (Changed code · before: `L2426-L2427` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L2497) · [Before (L2426-L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L2426-L2427)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 21. `bundles/bloxd.io/main.css` (Changed code · before: `L3402` → after: `L3472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L3472) · [Before (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L3402)

```diff
-     inset: min(0px, (100% - 44px)/2) max(1.25rem/-2, min(0px, (100% - 44px)/2));
+     inset: min(0px, (100% - 44px)/2) max(var(--header-icon-gap, 1.25rem)/-2, min(0px, (100% - 44px)/2));
```

#### 22. `bundles/bloxd.io/main.css` (Changed code · before: `L3528-L3529` → after: `L3617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L3617) · [Before (L3528-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L3528-L3529)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 23. `bundles/bloxd.io/main.css` (Changed code · before: `L3635-L3636` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L3728) · [Before (L3635-L3636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L3635-L3636)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 24. `bundles/bloxd.io/main.css` (Changed code · before: `L3731-L3732` → after: `L3828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L3828) · [Before (L3731-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L3731-L3732)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 25. `bundles/bloxd.io/main.css` (Changed code · before: `L3827-L3828` → after: `L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L3928) · [Before (L3827-L3828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L3827-L3828)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 26. `bundles/bloxd.io/main.css` (Changed code · before: `L3923-L3924` → after: `L4028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L4028) · [Before (L3923-L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L3923-L3924)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 27. `bundles/bloxd.io/main.css` (Changed code · before: `L4019-L4020` → after: `L4128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L4128) · [Before (L4019-L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L4019-L4020)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 28. `bundles/bloxd.io/main.css` (Changed code · before: `L4115-L4116` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L4228) · [Before (L4115-L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L4115-L4116)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 29. `bundles/bloxd.io/main.css` (Changed code · before: `L5887-L5888` → after: `L6004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L6004) · [Before (L5887-L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L5887-L5888)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 30. `bundles/bloxd.io/main.css` (Changed code · before: `L6162-L6163` → after: `L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L6271) · [Before (L6162-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L6162-L6163)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 31. `bundles/bloxd.io/main.css` (Changed code · before: `L6474-L6475` → after: `L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L6587) · [Before (L6474-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L6474-L6475)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 32. `bundles/bloxd.io/main.css` (Changed code · before: `L8022-L8023` → after: `L8139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L8139) · [Before (L8022-L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L8022-L8023)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 33. `bundles/bloxd.io/main.css` (Changed code · before: `L8711-L8712` → after: `L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L8923) · [Before (L8711-L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L8711-L8712)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 34. `bundles/bloxd.io/main.css` (Changed code · before: `L8857-L8862` → after: `L9091-L9139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9091-L9139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L9091-L9139) · [Before (L8857-L8862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L8857-L8862)

```diff
-   -webkit-text-fill-color: transparent;
-   animation: cosmeticPackAdPremiumNameShimmer 3s linear infinite;
-   background: linear-gradient(90deg, #b388ff, #64ffda, #ffb914, #b388ff);
-   -webkit-background-clip: text;
-   background-clip: text;
-   background-size: 300% 100%
+   -webkit-text-fill-color: transparent
+ }
+ 
+ @supports(-webkit-mask-clip:text) and (overflow-x:clip) {
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle {
+     margin-inline-end: auto;
+     min-width: min-content;
+     overflow-x: clip;
+     position: relative
+   }
+ 
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdItemCountInner,
+   .AdBannerContainer .AdBanner.CosmeticPackAd.CosmeticPackAdLegendary .CosmeticPackAdOverlay .CosmeticPackAdTitle .CosmeticPackAdName {
+     -webkit-mask-clip: text;
+     -webkit-mask-image: linear-gradient(#000, #000)
+   }
+ ... (33 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/main.css` (Changed code · before: `L8905` → after: `L9182-L9183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9182-L9183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L9182-L9183) · [Before (L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L8905)

```diff
-   flex-wrap: wrap
+   flex-wrap: wrap;
+   min-height: 0
```

#### 36. `bundles/bloxd.io/main.css` (Changed code · before: `L8909` → after: `L9187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L9187) · [Before (L8909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L8909)

```diff
-   height: 200px;
+   height: min(200px, 50% - 5px);
```

#### 37. `bundles/bloxd.io/main.css` (Changed code · before: `L9138-L9139` → after: `L9395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L9395) · [Before (L9138-L9139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L9138-L9139)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 38. `bundles/bloxd.io/main.css` (Changed code · before: `L9236-L9237` → after: `L9497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R9497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L9497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L9497) · [Before (L9236-L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L9236-L9237)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 39. `bundles/bloxd.io/main.css` (Changed code · before: `L10075-L10076` → after: `L10340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L10340) · [Before (L10075-L10076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L10075-L10076)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 40. `bundles/bloxd.io/main.css` (Changed code · before: `L10249-L10250` → after: `L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L10518) · [Before (L10249-L10250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L10249-L10250)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 41. `bundles/bloxd.io/main.css` (Changed code · before: `L10374-L10375` → after: `L10647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R10647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L10647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L10647) · [Before (L10374-L10375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L10374-L10375)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 42. `bundles/bloxd.io/main.css` (Changed code · before: `L11954` → after: `L12235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L12235) · [Before (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L11954)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardConfirmRemoveOverlay {
+ .ProfileCardHost .ProfileCard .ProfileCardConfirmOverlay {
```

#### 43. `bundles/bloxd.io/main.css` (Changed code · before: `L11965` → after: `L12246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L12246) · [Before (L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L11965)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardConfirmRemoveOverlay .ProfileCardConfirmRemove {
+ .ProfileCardHost .ProfileCard .ProfileCardConfirmOverlay .ProfileCardConfirm {
```

#### 44. `bundles/bloxd.io/main.css` (Changed code · before: `L11976` → after: `L12257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L12257) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L11976)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardConfirmRemoveOverlay .ProfileCardConfirmRemove .ProfileCardConfirmRemoveText {
+ .ProfileCardHost .ProfileCard .ProfileCardConfirmOverlay .ProfileCardConfirm .ProfileCardConfirmText {
```

#### 45. `bundles/bloxd.io/main.css` (Changed code · before: `L11981` → after: `L12262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L12262) · [Before (L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L11981)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardConfirmRemoveOverlay .ProfileCardConfirmRemove .ProfileCardConfirmRemoveButtons {
+ .ProfileCardHost .ProfileCard .ProfileCardConfirmOverlay .ProfileCardConfirm .ProfileCardConfirmButtons {
```

#### 46. `bundles/bloxd.io/main.css` (Changed code · before: `L11986` → after: `L12267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R12267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L12267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L12267) · [Before (L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L11986)

```diff
- .ProfileCardHost .ProfileCard .ProfileCardConfirmRemoveOverlay .ProfileCardConfirmRemove .ProfileCardConfirmRemoveButtons>* {
+ .ProfileCardHost .ProfileCard .ProfileCardConfirmOverlay .ProfileCardConfirm .ProfileCardConfirmButtons>* {
```

#### 47. `bundles/bloxd.io/main.css` (Changed code · before: `L14265-L14266` → after: `L14572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R14572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L14572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L14572) · [Before (L14265-L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L14265-L14266)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 48. `bundles/bloxd.io/main.css` (Changed code · before: `L14845-L14846` → after: `L15156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L15156) · [Before (L14845-L14846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L14845-L14846)

```diff
-   stroke-linejoin: round;
-   paint-order: stroke fill
+   stroke-linejoin: round
```

#### 49. `bundles/bloxd.io/main.css` (Changed code · before: `L15486` → after: `L15797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L15797) · [Before (L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L15486)

```diff
-   grid-template-columns: repeat(var(--youtube-video-slot-count), 1fr);
+   grid-template-columns: repeat(var(--youtube-video-slot-count), minmax(0, 1fr));
```

#### 50. `bundles/bloxd.io/main.css` (Changed code · before: `L15506` → after: `L15817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L15817) · [Before (L15506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L15506)

```diff
-   grid-template-columns: repeat(var(--youtube-shorts-slot-count), 1fr);
+   grid-template-columns: repeat(var(--youtube-shorts-slot-count), minmax(0, 1fr));
```

#### 51. `bundles/bloxd.io/main.css` (Changed code · before: `L15523-L15533` → after: `L15830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1R15830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-316a0473a44b49d5a95b079fe9d97ec6f6da59b7edcad895ae0da7c34febb4b1) · [After (L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.css#L15830) · [Before (L15523-L15533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.css#L15523-L15533)

```diff
-   flex: none;
-   width: 100%
- }
- 
- .YoutubeHomepageSection.Portrait .YoutubeLiveColumnTiles {
-   flex-direction: row
- }
- 
- .YoutubeHomepageSection.Portrait .YoutubeLiveColumnTiles .YoutubeTile {
-   flex: 1 1;
-   min-width: 0
+   flex: none
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/main.js` (1091 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see 7rj44.main.0704ff61.js.LICENSE.txt */
+ /*! For license information please see qepqb8.main.0352199c.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3)

```diff
-     var zz = [, , , , , , , , , , , , , , , , , (zz, tz, sz) => {
+     var vv = [, , , , , , , , , , , (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L5-L9` → after: `L5-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5-L9) · [Before (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5-L9)

```diff
-             C: () => Cz,
-             E: () => hz,
-             F: () => Yz,
-             J: () => Nz,
-             M: () => Kz,
+             D: () => wv,
+             H: () => Tv,
+             I: () => Kv,
+             L: () => Ov,
+             O: () => Zv,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L12-L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L13) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L12-L13)

```diff
-             X: () => rz,
-             _: () => Uz,
+             Y: () => lv,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L16-L18` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L16-L18) · [Before (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L16-L18)

```diff
-             e: () => gz,
-             g: () => Hz,
-             i: () => Dz,
+             eb: () => Gv,
+             f: () => Cv,
+             ib: () => mv,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L21` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L22-L23) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L21)

```diff
-             q: () => Bz,
+             ob: () => hv,
+             p: () => pv,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L125` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L126) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L125)

```diff
-         }, , , , , (zz, tz, sz) => {
+         }, , , , , , , , (vv, zv, Pv) => {
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L127` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L128) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L127)

```diff
-             e: () => Oz
+             b: () => gv
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L129` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L130) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L129)

```diff
-           var Fz = sz(30);
+           var hv = Pv(22);
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L151` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L152) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L151)

```diff
-             (Fz.b.set({
+             (hv.c.set({
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L158` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L159) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L158)

```diff
-         }, , , , , , , , (zz, tz, sz) => {
+         }, , , (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L160` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L161) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L160)

```diff
-             b: () => Ht,
+             c: () => iz,
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L162-L163` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L163-L164) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L162-L163)

```diff
-             e: () => Bt,
-             h: () => rt
+             g: () => cz,
+             i: () => mz
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L165-L170` → after: `L166-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L166-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L166-L171) · [Before (L165-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L165-L170)

```diff
-           var Fz = sz(34),
-             Wz = sz(308),
-             Xz = sz(321),
-             Oz = sz(44),
-             oz = sz(62),
-             vz = sz(41),
+           var hv = Pv(26),
+             Sv = Pv(302),
+             ev = Pv(312),
+             gv = Pv(39),
+             pv = Pv(49),
+             dv = Pv(35),
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L172-L184` → after: `L173-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L173-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L173-L185) · [Before (L172-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L172-L184)

```diff
-             Kz = sz(65),
-             uz = sz(78),
-             Nz = sz(106),
-             bz = sz(268),
-             wz = sz(283),
-             Dz = sz(290),
-             gz = sz(123),
-             Hz = sz(593),
-             Bz = sz(601),
-             Pz = sz(686),
-             rz = sz(689),
-             Yz = sz(695),
-             xz = sz(292);
+             lv = Pv(52),
+             Tv = Pv(62),
+             Wv = Pv(73),
+             wv = Pv(258),
+             av = Pv(273),
+             sv = Pv(278),
+             Cv = Pv(90),
+             iv = Pv(630),
+             cv = Pv(635),
+             Gv = Pv(707),
+             mv = Pv(713),
+             jv = Pv(716),
+             fv = Pv(284);
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L194` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L195) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L194)

```diff
-               cameraFOV: "mobile" === (0, Nz.getPlatformType)() ? mz[xz.b.mobile_fov_v2] : Yz.e,
+               cameraFOV: "mobile" === (0, Wv.getPlatformType)() ? Fv[fv.d.mobile_fov_v2] : jv.b,
```

#### 17. `bundles/bloxd.io/main.js` (Changed code · before: `L196-L197` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L197-L198) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L196-L197)

```diff
-               touchSpeedCurve: "curve" === xz.b.mobile_move_assist_v1,
-               touchActionButtons: "on" === xz.b.mobile_action_buttons_v1,
+               touchSpeedCurve: "curve" === fv.d.mobile_move_assist_v1,
+               touchActionButtons: "on" === fv.d.mobile_action_buttons_v1,
```

#### 18. `bundles/bloxd.io/main.js` (Changed code · before: `L199` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L200) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L199)

```diff
-               jumpLock: "on" === xz.b.mobile_jump_lock_v1
+               jumpLock: "on" === fv.d.mobile_jump_lock_v1
```

#### 19. `bundles/bloxd.io/main.js` (Changed code · before: `L206` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L207) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L206)

```diff
-             return Hz.g ? "webgl_holdback" : !0 === Oz.f.getItem(gz.D) ? "old_intel_driver" : Hz.k && !0 === Oz.f.getItem(gz.z) ? "intel_gen9" : Bz.p && (0, Hz.e)(Oz.f.getItem(gz.v)) ? "gpu_class_webgl" : (0, Dz.v)() ? "off_after_loss" : null
+             return iv.i ? "webgl_holdback" : !0 === gv.h.getItem(Cv.A) ? "old_intel_driver" : iv.k && !0 === gv.h.getItem(Cv.w) ? "intel_gen9" : cv.r && (0, iv.e)(gv.h.getItem(Cv.t)) ? "gpu_class_webgl" : !cv.r && iv.n && (0, iv.m)(navigator.userAgent) ? "safari_26" : (0, sv.w)() … [truncated]
```

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L209-L210` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L210-L211) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L209-L210)

```diff
-             ut = Hz.m && null === Kt;
-           let Nt = null === Oz.f.getItem(Wz.ec);
+             Tz = iv.p && null === lz;
+           let Wz = null === gv.h.getItem(Sv.bc);
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L222-L223` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L223-L224) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L222-L223)

```diff
-             soundVolume: (0, oz.c)(),
-             musicVolume: null !== (Cz = Oz.f.getItem("musicVol")) && void 0 !== Cz ? Cz : .5,
+             soundVolume: (0, pv.b)(),
+             musicVolume: null !== (Ov = gv.h.getItem("musicVol")) && void 0 !== Ov ? Ov : .5,
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L236-L237` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L237-L238) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L236-L237)

```diff
-               const zz = Oz.f.getItem("showDistantNametags");
-               return "boolean" === typeof zz ? zz : null
+               const vv = gv.h.getItem("showDistantNametags");
+               return "boolean" === typeof vv ? vv : null
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L250-L251` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L251-L252) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L250-L251)

```diff
-             showDebugOverlay: null !== (ez = Oz.f.getItem("showDebugOverlay")) && void 0 !== ez && ez,
-             enabledDebugFeatures: null !== (Zz = Oz.f.getItem("enabledDebugFeatures")) && void 0 !== Zz ? Zz : {},
+             showDebugOverlay: null !== (Dv = gv.h.getItem("showDebugOverlay")) && void 0 !== Dv && Dv,
+             enabledDebugFeatures: null !== (Kv = gv.h.getItem("enabledDebugFeatures")) && void 0 !== Kv ? Kv : {},
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L259-L262` → after: `L260-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L260-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L260-L263) · [Before (L259-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L259-L262)

```diff
-               useProfanityFilter: null === (Gz = Oz.f.getItem("UseProfanityFilter")) || void 0 === Gz || Gz,
-               showChat: null === (Tz = Oz.f.getItem("showChat")) || void 0 === Tz || Tz,
-               showNewItemIndicator: null === (cz = Oz.f.getItem("showNewItemIndicator")) || void 0 === cz || cz,
-               showFriendOnlineToasts: null === (jz = Oz.f.getItem("showFriendOnlineToasts")) || void 0 === jz || jz,
+               useProfanityFilter: null === (Vv = gv.h.getItem("UseProfanityFilter")) || void 0 === Vv || Vv,
+               showChat: null === (Uv = gv.h.getItem("showChat")) || void 0 === Uv || Uv,
+               showNewItemIndicator: null === (Rv = gv.h.getItem("showNewItemIndicator")) || void 0 === Rv || Rv,
+               showFriendOnlineToasts: null === (xv = gv.h.getItem("showFriendOnlineToasts")) || void 0 === xv || xv,
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L265-L266` → after: `L266-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L266-L267) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L265-L266)

```diff
-                 const tz = Oz.f.getItem("friendRequestNotifications");
-                 return null !== (zz = Pz.b.find((zz => zz === tz))) && void 0 !== zz ? zz : "toastAndTray"
+                 const zv = gv.h.getItem("friendRequestNotifications");
+                 return null !== (vv = Gv.c.find((vv => vv === zv))) && void 0 !== vv ? vv : "toastAndTray"
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L268-L286` → after: `L269-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L269-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L269-L287) · [Before (L268-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L268-L286)

```diff
-               touchscreenSensitivity: null !== (Az = Oz.f.getItem("touchscreenSensitivity")) && void 0 !== Az ? Az : 150,
-               mouseSensitivity: null !== (yz = Oz.f.getItem("mouseSensitivity")) && void 0 !== yz ? yz : 15,
-               showCoordinates: null !== (Mz = Oz.f.getItem("showCoordinates")) && void 0 !== Mz && Mz,
-               showChunkCoordinates: null !== (dz = Oz.f.getItem("showChunkCoordinates")) && void 0 !== dz && dz,
-               showFPS: null !== (hz = Oz.f.getItem("showFPS")) && void 0 !== hz && hz,
-               disableBunnyHopping: null !== (Qz = Oz.f.getItem("disableBunnyHopping")) && void 0 !== Qz && Qz,
-               disableTexAtlas: null !== (kz = Oz.f.getItem("disableTexAtlas")) && void 0 !== kz && kz,
-               disableFullscreen: null !== (iz = Oz.f.getItem("disableFullscreen")) && void 0 !== iz && iz,
-               ezBridging: null === (Lz = Oz.f.getItem("ezBridging")) || void 0 === Lz || Lz,
-               ezTowering: null === (lz = Oz.f.getItem("ezTowering")) || void 0 === lz || lz,
-               crouchIsToggle: null !== (nz = Oz.f.getItem("crouchIsToggle")) && void 0 !== nz && nz,
-               vibration: null === (az = Oz.f.getItem("vibration")) || void 0 === az || az,
-               hideUiIsToggle: null !== (qz = Oz.f.getItem("hideUiIsToggle")) && void 0 !== qz && qz,
-               enableLighting: null !== (Sz = Oz.f.getItem("enableLighting")) && void 0 !== Sz && Sz,
-               showFog: null !== (Vz = Oz.f.getItem("showFog")) && void 0 !== Vz && Vz,
-               fogChunkDistance: null !== (Rz = Oz.f.getItem("fogChunkDistance")) && void 0 !== Rz ? Rz : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (tv = gv.h.getItem("touchscreenSensitivity")) && void 0 !== tv ? tv : 150,
+               mouseSensitivity: null !== (qv = gv.h.getItem("mouseSensitivity")) && void 0 !== qv ? qv : 15,
+               showCoordinates: null !== (Iv = gv.h.getItem("showCoordinates")) && void 0 !== Iv && Iv,
+               showChunkCoordinates: null !== (Qv = gv.h.getItem("showChunkCoordinates")) && void 0 !== Qv && Qv,
+               showFPS: null !== (Zv = gv.h.getItem("showFPS")) && void 0 !== Zv && Zv,
+               disableBunnyHopping: null !== (Av = gv.h.getItem("disableBunnyHopping")) && void 0 !== Av && Av,
+               disableTexAtlas: null !== (Lv = gv.h.getItem("disableTexAtlas")) && void 0 !== Lv && Lv,
+               disableFullscreen: null !== (Hv = gv.h.getItem("disableFullscreen")) && void 0 !== Hv && Hv,
+               ezBridging: null === (Mv = gv.h.getItem("ezBridging")) || void 0 === Mv || Mv,
+               ezTowering: null === (yv = gv.h.getItem("ezTowering")) || void 0 === yv || yv,
+               crouchIsToggle: null !== (Bv = gv.h.getItem("crouchIsToggle")) && void 0 !== Bv && Bv,
+               vibration: null === (Jv = gv.h.getItem("vibration")) || void 0 === Jv || Jv,
+               hideUiIsToggle: null !== (Ev = gv.h.getItem("hideUiIsToggle")) && void 0 !== Ev && Ev,
+               enableLighting: null !== (ov = gv.h.getItem("enableLighting")) && void 0 !== ov && ov,
+               showFog: null !== (bv = gv.h.getItem("showFog")) && void 0 !== bv && bv,
+               fogChunkDistance: null !== (rv = gv.h.getItem("fogChunkDistance")) && void 0 !== rv ? rv : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L290-L297` → after: `L291-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L291-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L291-L298) · [Before (L290-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L290-L297)

```diff
-               useWebGpu: null !== (zt = Oz.f.getItem(Wz.ec)) && void 0 !== zt ? zt : ut,
-               pixelScale: null !== (tt = Oz.f.getItem("pixelScale")) && void 0 !== tt ? tt : (0, Nz.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (st = Oz.f.getItem("pixelSmoothing")) || void 0 === st || st,
-               showChunkBorders: null !== (Ft = Oz.f.getItem("showChunkBorders")) && void 0 !== Ft && Ft,
-               showWeaponRaycasts: null !== (Wt = Oz.f.getItem("showWeaponRaycasts")) && void 0 !== Wt && Wt,
-               chunkFadeIn: null === (Xt = Oz.f.getItem("chunkFadeIn")) || void 0 === Xt || Xt,
-               enableClipping: null !== (Ot = Oz.f.getItem("enableClipping")) && void 0 !== Ot && Ot,
-               clipDurationSeconds: null !== (ot = Oz.f.getItem("clipDurationSeconds")) && void 0 !== ot ? ot : rz.e,
+               useWebGpu: null !== (vz = gv.h.getItem(Sv.bc)) && void 0 !== vz ? vz : Tz,
+               pixelScale: null !== (zz = gv.h.getItem("pixelScale")) && void 0 !== zz ? zz : (0, Wv.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (Pz = gv.h.getItem("pixelSmoothing")) || void 0 === Pz || Pz,
+               showChunkBorders: null !== (hz = gv.h.getItem("showChunkBorders")) && void 0 !== hz && hz,
+               showWeaponRaycasts: null !== (Sz = gv.h.getItem("showWeaponRaycasts")) && void 0 !== Sz && Sz,
+               chunkFadeIn: null === (ez = gv.h.getItem("chunkFadeIn")) || void 0 === ez || ez,
+               enableClipping: null !== (gz = gv.h.getItem("enableClipping")) && void 0 !== gz && gz,
+               clipDurationSeconds: null !== (pz = gv.h.getItem("clipDurationSeconds")) && void 0 !== pz ? pz : mv.i,
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L299` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L300) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L299)

```diff
-                 null === Oz.f.getItem(Jz) && (120 === Oz.f.getItem("cameraFOV") && Oz.f.removeItem("cameraFOV"), Oz.f.setItem(Jz, !0));
+                 null === gv.h.getItem(Yv) && (120 === gv.h.getItem("cameraFOV") && gv.h.removeItem("cameraFOV"), gv.h.setItem(Yv, !0));
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L304` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L305) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L304)

```diff
-                     return [sz, null !== (tz = Oz.f.getItem(sz)) && void 0 !== tz ? tz : Fz]
+                     return [Pv, null !== (zv = gv.h.getItem(Pv)) && void 0 !== zv ? zv : hv]
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L306` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L307) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L306)

```diff
-                 return Wz.zb.includes(tz.joystickMode) || (console.warn("Dropping stored joystick mode", tz.joystickMode), Oz.f.removeItem("joystickMode"), tz.joystickMode = zz.joystickMode), tz
+                 return Sv.sb.includes(zv.joystickMode) || (console.warn("Dropping stored joystick mode", zv.joystickMode), gv.h.removeItem("joystickMode"), zv.joystickMode = vv.joystickMode), zv
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L314` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L315) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L314)

```diff
-             const sz = null !== (tz = Oz.f.getItem(wz.b)) && void 0 !== tz ? tz : (0, bz.g)();
+             const Pv = null !== (zv = gv.h.getItem(av.d)) && void 0 !== zv ? zv : (0, wv.j)();
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L324` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L325) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L324)

```diff
-             return null !== Oz.f.getItem(wz.b)
+             return null !== gv.h.getItem(av.d)
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L330` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L331) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L330)

```diff
-               for (const tz in zz) Fz.o.Yg(`appManagerUpdated|${tz}`, zz[tz])
+               for (const zv in vv) hv.j.zC(`appManagerUpdated|${zv}`, vv[zv])
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L338` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L339) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L338)

```diff
-               for (const Wz in zz)(0, Xz.Zd)(bt[Wz], zz[Wz]) || (tz[Wz] = zz[Wz], sz = !0);
+               for (const Sv in vv)(0, ev.Ud)(wz[Sv], vv[Sv]) || (zv[Sv] = vv[Sv], Pv = !0);
```

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L345` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L346) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L345)

```diff
-                 Oz.f.setItem("UseProfanityFilter", zz.useProfanityFilter), Oz.f.setItem("showChat", zz.showChat), Oz.f.setItem("showNewItemIndicator", zz.showNewItemIndicator), Oz.f.setItem("showFriendOnlineToasts", zz.showFriendOnlineToasts), Oz.f.setItem("friendRequestNotificat … [truncated]
+                 gv.h.setItem("UseProfanityFilter", vv.useProfanityFilter), gv.h.setItem("showChat", vv.showChat), gv.h.setItem("showNewItemIndicator", vv.showNewItemIndicator), gv.h.setItem("showFriendOnlineToasts", vv.showFriendOnlineToasts), gv.h.setItem("friendRequestNotificat … [truncated]
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L348` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L349) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L348)

```diff
-                     for (const Fz of Object.keys(sz)) zz[Fz] !== tz[Fz] && (zz[Fz] === sz[Fz] ? Oz.f.removeItem(Fz) : Oz.f.setItem(Fz, zz[Fz]))
+                     for (const hv of Object.keys(Pv)) vv[hv] !== zv[hv] && (vv[hv] === Pv[hv] ? gv.h.removeItem(hv) : gv.h.setItem(hv, vv[hv]))
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L351` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L352) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L351)

```diff
-               void 0 !== tz.soundVolume && Oz.f.setItem("soundVol", tz.soundVolume), void 0 !== tz.musicVolume && Oz.f.setItem("musicVol", tz.musicVolume), void 0 !== tz.showDistantNametags && Oz.f.setItem("showDistantNametags", tz.showDistantNametags), void 0 !== tz.showDebugOve … [truncated]
+               void 0 !== zv.soundVolume && gv.h.setItem("soundVol", zv.soundVolume), void 0 !== zv.musicVolume && gv.h.setItem("musicVol", zv.musicVolume), void 0 !== zv.showDistantNametags && gv.h.setItem("showDistantNametags", zv.showDistantNametags), void 0 !== zv.showDebugOve … [truncated]
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L363` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L364) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L363)

```diff
-               return null !== tz && void 0 !== tz ? tz : bt.clientEscMenuOptions.antiAliasing
+               return null !== zv && void 0 !== zv ? zv : wz.clientEscMenuOptions.antiAliasing
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L367` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L368) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L367)

```diff
-               const tz = Dt() ? bt.clientEscMenuOptions.antiAliasing : (0, bz.g)();
+               const zv = sz() ? wz.clientEscMenuOptions.antiAliasing : (0, wv.j)();
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L381-L383` → after: `L382-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L382-L384) · [Before (L381-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L381-L383)

```diff
-               let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dz.i)();
-               const tz = (0, Dz.o)(zz);
-               return (0, Dz.v)() && !0 === Oz.f.getItem(Wz.ec) && Oz.f.removeItem(Wz.ec), tz
+               let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, sv.k)();
+               const zv = (0, sv.p)(vv);
+               return (0, sv.w)() && !0 === gv.h.getItem(Sv.bc) && gv.h.removeItem(Sv.bc), zv
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L386` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L387) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L386)

```diff
-               return (0, Dz.z)() || !0 === Oz.f.getItem(gz.D)
+               return (0, sv.C)() || !0 === gv.h.getItem(Cv.A)
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L389` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L390) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L389)

```diff
-               return (0, Dz.v)()
+               return (0, sv.w)()
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L392` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L393) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L392)

```diff
-               return Nt ? Kt : null
+               return Wz ? lz : null
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L395` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L396) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L395)

```diff
-               !0 === Oz.f.getItem(gz.D) && (0, Nz.hasUsableWebGpuAdapter)()
+               !0 === gv.h.getItem(Cv.A) && (0, Wv.hasUsableWebGpuAdapter)()
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L438-L441` → after: `L440-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L440-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L440-L442) · [Before (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L438-L441)

```diff
-             i: () => Xz,
-             l: () => Kz,
-             o: () => Uz,
-             q: () => uz
+             f: () => lv,
+             j: () => Nv,
+             l: () => Tv
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L443` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L444) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L443)

```diff
-           var Fz = sz(41),
+           var hv = Pv(35),
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L453` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L454) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L453)

```diff
-               super(...arguments), this.sH = !1, this.WH = [], this.UH = {}
+               super(...arguments), this.RC = !1, this.tC = [], this.ZC = {}
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L457` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L458) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L457)

```diff
-               this.sH || !sz ? this.emit(zz, tz) : this.WH.push({
+               this.RC || !Pv ? this.emit(vv, zv) : this.tC.push({
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L464-L465` → after: `L465-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L465-L466) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L464-L465)

```diff
-               const Fz = this.uH(zz, tz);
-               return this.on(zz, Fz), this.UH[zz] = (null !== (sz = this.UH[zz]) && void 0 !== sz ? sz : 0) + 1, {
+               const hv = this.yC(vv, zv);
+               return this.on(vv, hv), this.ZC[vv] = (null !== (Pv = this.ZC[vv]) && void 0 !== Pv ? Pv : 0) + 1, {
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L474` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L475) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L474)

```diff
-               const sz = this.uH(zz, tz);
+               const Pv = this.yC(vv, zv);
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L481` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L482) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L481)

```diff
-               this.off(null === zz || void 0 === zz ? void 0 : zz.event, null === zz || void 0 === zz ? void 0 : zz.listener), "noaTick" !== (null === zz || void 0 === zz ? void 0 : zz.event) && "initInfoReceived" !== (null === zz || void 0 === zz ? void 0 : zz.event) || Xz--, th … [truncated]
+               this.off(null === vv || void 0 === vv ? void 0 : vv.event, null === vv || void 0 === vv ? void 0 : vv.listener), "noaTick" !== (null === vv || void 0 === vv ? void 0 : vv.event) && "initInfoReceived" !== (null === vv || void 0 === vv ? void 0 : vv.event) || ev--, th … [truncated]
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L488` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L489) · [Before (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L488)

```diff
-                   console.error(`Error in PubSub listener for event ${zz}:`, Fz)
+                   console.error(`Error in PubSub listener for event ${vv}:`, hv)
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L493` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L494) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L493)

```diff
-               this.sH = zz, zz && (this.WH.forEach((zz => {
+               this.RC = vv, vv && (this.tC.forEach((vv => {
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L498-L499` → after: `L499-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L499-L500) · [Before (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L498-L499)

```diff
-                 this.Yg(tz, sz)
-               })), this.WH = [])
+                 this.zC(zv, Pv)
+               })), this.tC = [])
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L505` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L506) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L505)

```diff
-             Uz.gH(!0)
+             Nv.bC(!0)
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L514` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L515) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L514)

```diff
-         }, , , , , , , zz => {
+         }, , , , , , , , , vv => {
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L521` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L522) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L521)

```diff
-             this.Zw = zz, this.context = tz, this.once = sz || !1
+             this.Ew = vv, this.context = zv, this.once = Pv || !1
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L527-L528` → after: `L528-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L528-L529) · [Before (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L527-L528)

```diff
-               vz = sz ? sz + tz : tz;
-             return zz._events[vz] ? zz._events[vz].Zw ? zz._events[vz] = [zz._events[vz], oz] : zz._events[vz].push(oz) : (zz._events[vz] = oz, zz._eventsCount++), zz
+               dv = Pv ? Pv + zv : zv;
+             return vv._events[dv] ? vv._events[dv].Ew ? vv._events[dv] = [vv._events[dv], pv] : vv._events[dv].push(pv) : (vv._events[dv] = pv, vv._eventsCount++), vv
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L532` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L533) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L532)

```diff
-             0 === --zz._eventsCount ? zz._events = new Fz : delete zz._events[tz]
+             0 === --vv._eventsCount ? vv._events = new hv : delete vv._events[zv]
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L544` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L545) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L544)

```diff
-             var tz = sz ? sz + zz : zz,
+             var zv = Pv ? Pv + vv : vv,
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L547-L548` → after: `L548-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L548-L549) · [Before (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L547-L548)

```diff
-             if (Fz.Zw) return [Fz.Zw];
-             for (var Wz = 0, Xz = Fz.length, Oz = new Array(Xz); Wz < Xz; Wz++) Oz[Wz] = Fz[Wz].Zw;
+             if (hv.Ew) return [hv.Ew];
+             for (var Sv = 0, ev = hv.length, gv = new Array(ev); Sv < ev; Sv++) gv[Sv] = hv[Sv].Ew;
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L551` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L552) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L551)

```diff
-             var tz = sz ? sz + zz : zz,
+             var zv = Pv ? Pv + vv : vv,
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L553` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L554) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L553)

```diff
-             return Fz ? Fz.Zw ? 1 : Fz.length : 0
+             return hv ? hv.Ew ? 1 : hv.length : 0
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L555` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L556) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L555)

```diff
-             var oz = sz ? sz + zz : zz;
+             var pv = Pv ? Pv + vv : vv;
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L559-L560` → after: `L560-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L560-L561) · [Before (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L559-L560)

```diff
-             if (Kz.Zw) {
-               switch (Kz.once && this.removeListener(zz, Kz.Zw, void 0, !0), uz) {
+             if (lv.Ew) {
+               switch (lv.once && this.removeListener(vv, lv.Ew, void 0, !0), Tv) {
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L562` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L563) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L562)

```diff
-                   return Kz.Zw.call(Kz.context), !0;
+                   return lv.Ew.call(lv.context), !0;
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L564` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L565) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L564)

```diff
-                   return Kz.Zw.call(Kz.context, tz), !0;
+                   return lv.Ew.call(lv.context, zv), !0;
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L566` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L567) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L566)

```diff
-                   return Kz.Zw.call(Kz.context, tz, Fz), !0;
+                   return lv.Ew.call(lv.context, zv, hv), !0;
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L568` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L569) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L568)

```diff
-                   return Kz.Zw.call(Kz.context, tz, Fz, Wz), !0;
+                   return lv.Ew.call(lv.context, zv, hv, Sv), !0;
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L570` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L571) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L570)

```diff
-                   return Kz.Zw.call(Kz.context, tz, Fz, Wz, Xz), !0;
+                   return lv.Ew.call(lv.context, zv, hv, Sv, ev), !0;
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L572` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L573) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L572)

```diff
-                   return Kz.Zw.call(Kz.context, tz, Fz, Wz, Xz, Oz), !0
+                   return lv.Ew.call(lv.context, zv, hv, Sv, ev, gv), !0
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L575` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L576) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L575)

```diff
-               Kz.Zw.apply(Kz.context, vz)
+               lv.Ew.apply(lv.context, dv)
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L578` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L579) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L578)

```diff
-               for (Uz = 0; Uz < bz; Uz++) switch (Kz[Uz].once && this.removeListener(zz, Kz[Uz].Zw, void 0, !0), uz) {
+               for (Nv = 0; Nv < wv; Nv++) switch (lv[Nv].once && this.removeListener(vv, lv[Nv].Ew, void 0, !0), Tv) {
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L580` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L581) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L580)

```diff
-                   Kz[Uz].Zw.call(Kz[Uz].context);
+                   lv[Nv].Ew.call(lv[Nv].context);
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L583` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L584) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L583)

```diff
-                   Kz[Uz].Zw.call(Kz[Uz].context, tz);
+                   lv[Nv].Ew.call(lv[Nv].context, zv);
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L586` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L587) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L586)

```diff
-                   Kz[Uz].Zw.call(Kz[Uz].context, tz, Fz);
+                   lv[Nv].Ew.call(lv[Nv].context, zv, hv);
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L589` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L590) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L589)

```diff
-                   Kz[Uz].Zw.call(Kz[Uz].context, tz, Fz, Wz);
+                   lv[Nv].Ew.call(lv[Nv].context, zv, hv, Sv);
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L594` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L595) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L594)

```diff
-                   Kz[Uz].Zw.apply(Kz[Uz].context, vz)
+                   lv[Nv].Ew.apply(lv[Nv].context, dv)
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L603` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L604) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L603)

```diff
-             var Xz = sz ? sz + zz : zz;
+             var ev = Pv ? Pv + vv : vv;
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L607` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L608) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L607)

```diff
-             if (oz.Zw) oz.Zw !== tz || Wz && !oz.once || Fz && oz.context !== Fz || Oz(this, Xz);
+             if (pv.Ew) pv.Ew !== zv || Sv && !pv.once || hv && pv.context !== hv || gv(this, ev);
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L609-L610` → after: `L610-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L610-L611) · [Before (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L609-L610)

```diff
-               for (var vz = 0, Uz = [], Kz = oz.length; vz < Kz; vz++)(oz[vz].Zw !== tz || Wz && !oz[vz].once || Fz && oz[vz].context !== Fz) && Uz.push(oz[vz]);
-               Uz.length ? this._events[Xz] = 1 === Uz.length ? Uz[0] : Uz : Oz(this, Xz)
+               for (var dv = 0, Nv = [], lv = pv.length; dv < lv; dv++)(pv[dv].Ew !== zv || Sv && !pv[dv].once || hv && pv[dv].context !== hv) && Nv.push(pv[dv]);
+               Nv.length ? this._events[ev] = 1 === Nv.length ? Nv[0] : Nv : gv(this, ev)
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L613` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L614) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L613)

```diff
-           }, oz.prototype.YH = function(zz) {
+           }, pv.prototype.rC = function(vv) {
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L615` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L616) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L615)

```diff
-             return zz ? (tz = sz ? sz + zz : zz, this._events[tz] && Oz(this, tz)) : (this._events = new Fz, this._eventsCount = 0), this
+             return vv ? (zv = Pv ? Pv + vv : vv, this._events[zv] && gv(this, zv)) : (this._events = new hv, this._eventsCount = 0), this
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L617` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L618) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L617)

```diff
-         }, , , (zz, tz, sz) => {
+         }, , , , (vv, zv, Pv) => {
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L619-L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L620) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L619-L620)

```diff
-             d: () => Kz,
-             e: () => bz,
+             b: () => lv,
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L622)

```diff
-             j: () => Nz,
+             h: () => Tv,
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L624` → after: `L624-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L624-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L624-L625) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L624)

```diff
-             m: () => Uz
+             m: () => av,
+             o: () => Nv
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L626` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L627) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L626)

```diff
-           var Fz = sz(50),
+           var hv = Pv(44),
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L628` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L629) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L628)

```diff
-             Xz = sz(54),
+             ev = Pv(46),
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L632` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L633) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L632)

```diff
-               return `bloxd-${zz}`
+               return `bloxd-${vv}`
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L663` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L664) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L663)

```diff
-                 return console.error("Caught error", sz, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (tz = this._cachedVals[zz]) && void 0 !== tz ? tz : null
+                 return console.error("Caught error", Pv, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (zv = this._cachedVals[vv]) && void 0 !== zv ? zv : null
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L697` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L698) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L697)

```diff
-                 return console.error("Caught error", sz, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", Pv, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L728` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L729) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L728)

```diff
-                 return console.error("Caught error", sz, "when attempting to read from sessionStorage."), null !== (tz = this._cachedVals[zz]) && void 0 !== tz ? tz : null
+                 return console.error("Caught error", Pv, "when attempting to read from sessionStorage."), null !== (zv = this._cachedVals[vv]) && void 0 !== zv ? zv : null
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L755` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L756) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L755)

```diff
-                 return null !== (Fz = this._cachedVals[zz]) && void 0 !== Fz ? Fz : null
+                 return null !== (hv = this._cachedVals[vv]) && void 0 !== hv ? hv : null
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L777` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L778) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L777)

```diff
-                   for (let Fz, Wz, Xz = 0, Oz = 0; Wz = zz.charAt(Oz++); ~Wz && (Fz = Xz % 4 ? 64 * Fz + Wz : Wz, Xz++ % 4) ? tz += String.fromCharCode(255 & Fz >> (-2 * Xz & 6)) : 0) Wz = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(Wz);
+                   for (let hv, Sv, ev = 0, gv = 0; Sv = vv.charAt(gv++); ~Sv && (hv = ev % 4 ? 64 * hv + Sv : Sv, ev++ % 4) ? zv += String.fromCharCode(255 & hv >> (-2 * ev & 6)) : 0) Sv = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(Sv);
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L784` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L785) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L784)

```diff
-               return Oz ? Wz = Oz : (Wz = Dz.FZAkcO(Wz), zz[Xz] = Wz), Wz
+               return gv ? Sv = gv : (Sv = sv.FZAkcO(Sv), vv[ev] = Sv), Sv
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L826` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L827) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L826)

```diff
-         }, , , , , , (zz, tz, sz) => {
+         }, , , , , (vv, zv, Pv) => {
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L958` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L959) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L958)

```diff
-                 return zz instanceof this ? zz : Xz.resolve(new this(Wz), zz)
+                 return vv instanceof this ? vv : ev.resolve(new this(Sv), vv)
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L1007` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1008) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1007)

```diff
-                 return this.state !== vz ? uz(sz, this.state === oz ? zz : tz, this.outcome) : this.queue.push(new Kz(sz, zz, tz)), sz
+                 return this.state !== dv ? Tv(Pv, this.state === pv ? vv : zv, this.outcome) : this.queue.push(new lv(Pv, vv, zv)), Pv
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1380` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1381) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1380)

```diff
-                       return zz ? tz : Tz(tz)
+                       return vv ? zv : Uv(zv)
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1656` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1657) · [Before (L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1656)

```diff
-                   zz instanceof ArrayBuffer ? (Fz = zz, Wz += st) : (Fz = zz.buffer, "[object Int8Array]" === sz ? Wz += Wt : "[object Uint8Array]" === sz ? Wz += Xt : "[object Uint8ClampedArray]" === sz ? Wz += Ot : "[object Int16Array]" === sz ? Wz += ot : "[object Uint16Array] … [truncated]
+                   vv instanceof ArrayBuffer ? (hv = vv, Sv += Pz) : (hv = vv.buffer, "[object Int8Array]" === Pv ? Sv += Sz : "[object Uint8Array]" === Pv ? Sv += ez : "[object Uint8ClampedArray]" === Pv ? Sv += gz : "[object Int16Array]" === Pv ? Sv += pz : "[object Uint16Array] … [truncated]
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1680` → after: `L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1681) · [Before (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1680)

```diff
-                   case st:
+                   case Pz:
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1682` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1683) · [Before (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1682)

```diff
-                   case Ft:
+                   case hz:
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1686` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1687) · [Before (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1686)

```diff
-                   case Wt:
+                   case Sz:
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1688` → after: `L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1689) · [Before (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1688)

```diff
-                   case Xt:
+                   case ez:
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1690` → after: `L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1691) · [Before (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1690)

```diff
-                   case Ot:
+                   case gz:
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1692` → after: `L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1693) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1692)

```diff
-                   case ot:
+                   case pz:
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1694` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1695) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1694)

```diff
-                   case Ut:
+                   case Nz:
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1696` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1697) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1696)

```diff
-                   case vt:
+                   case dz:
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1698` → after: `L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1699) · [Before (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1698)

```diff
-                   case Kt:
+                   case lz:
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1700` → after: `L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1701) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1700)

```diff
-                   case ut:
+                   case Tz:
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1702` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1703) · [Before (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1702)

```diff
-                   case Nt:
+                   case Wz:
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1740` → after: `L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1741) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1740)

```diff
-                 return sz.xH = Pt, Wz
+                 return Pv.uC = Gz, Sv
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L1762` → after: `L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1763) · [Before (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1762)

```diff
-                         Fz && (Fz = Wz.xH.deserialize(Fz)), tz(Fz)
+                         hv && (hv = Sv.uC.deserialize(hv)), zv(hv)
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L1782` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1783) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1782)

```diff
-                             if (Uz && (Uz = Wz.xH.deserialize(Uz)), void 0 !== (Uz = zz(Uz, vz.key, oz + 1))) return void tz(Uz)
+                             if (Nv && (Nv = Sv.uC.deserialize(Nv)), void 0 !== (Nv = vv(Nv, dv.key, pv + 1))) return void zv(Nv)
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L1802` → after: `L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L1803) · [Before (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L1802)

```diff
-                     vz.xH.serialize(tz, (function(tz, Uz) {
+                     dv.uC.serialize(zv, (function(zv, Nv) {
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L2013` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2014) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2013)

```diff
-                 return sz.keyPrefix = dt(zz, tz._defaultConfig), Qt() ? (tz._dbInfo = sz, sz.xH = Pt, Uz.resolve()) : Uz.reject()
+                 return Pv.keyPrefix = Qz(vv, zv._defaultConfig), Az() ? (zv._dbInfo = Pv, Pv.uC = Gz, Nv.resolve()) : Nv.reject()
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L2033` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2034) · [Before (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2033)

```diff
-                   return Fz && (Fz = tz.xH.deserialize(Fz)), Fz
+                   return hv && (hv = zv.uC.deserialize(hv)), hv
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L2045` → after: `L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2046) · [Before (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2045)

```diff
-                         if (Uz && (Uz = tz.xH.deserialize(Uz)), void 0 !== (Uz = zz(Uz, vz.substring(Wz), Oz++))) return Uz
+                         if (Nv && (Nv = zv.uC.deserialize(Nv)), void 0 !== (Nv = vv(Nv, dv.substring(Sv), gv++))) return Nv
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2103` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2104) · [Before (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2103)

```diff
-                     Oz.xH.serialize(tz, (function(tz, Fz) {
+                     gv.uC.serialize(zv, (function(zv, hv) {
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2323` → after: `L2324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2324) · [Before (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2323)

```diff
-         }, , , , (zz, tz, sz) => {
+         }, , (vv, zv, Pv) => {
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2392` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2393) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2392)

```diff
-         }, , , , , , , , (zz, tz, sz) => {
+         }, , , (vv, zv, Pv) => {
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2394` → after: `L2395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2395) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2394)

```diff
-             c: () => Wz
+             b: () => Sv
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2396` → after: `L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2397) · [Before (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2396)

```diff
-           var Fz = sz(44);
+           var hv = Pv(39);
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2400` → after: `L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2401) · [Before (L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2400)

```diff
-             return null !== (zz = Fz.f.getItem("soundVol")) && void 0 !== zz ? zz : .5
+             return null !== (vv = hv.h.getItem("soundVol")) && void 0 !== vv ? vv : .5
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2403-L2405` → after: `L2404-L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2404-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2404-L2406) · [Before (L2403-L2405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2403-L2405)

```diff
-           zz.exports = sz(72)
-         }, , , , , , , (zz, tz, sz) => {
-           var Fz = sz(75),
+           vv.exports = Pv(54)
+         }, , (vv, zv, Pv) => {
+           var hv = Pv(57),
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2516-L2517` → after: `L2517-L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2517-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2517-L2518) · [Before (L2516-L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2516-L2517)

```diff
-                   case Wz:
-                   case Xz:
+                   case Sv:
+                   case ev:
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L2538` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2539) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2538)

```diff
-                   return null === zz || "object" !== typeof zz ? null : "function" === typeof(zz = Nz && zz[Nz] || zz["@@iterator"]) ? zz : null
+                   return null === vv || "object" !== typeof vv ? null : "function" === typeof(vv = Wv && vv[Wv] || vv["@@iterator"]) ? vv : null
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L2725` → after: `L2726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2726) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2725)

```diff
-         }, , , (zz, tz, sz) => {
+         }, , , , , (vv, zv, Pv) => {
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L2732-L2736` → after: `L2733-L2737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2733-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2733-L2737) · [Before (L2732-L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2732-L2736)

```diff
-           }(), zz.exports = sz(87)
-         }, , , , , , , , , (zz, tz, sz) => {
-           var Fz = sz(65),
-             Wz = sz(75),
-             Xz = sz(92);
+           }(), vv.exports = Pv(65)
+         }, , , (vv, zv, Pv) => {
+           var hv = Pv(52),
+             Sv = Pv(57),
+             ev = Pv(69);
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L2823` → after: `L2824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2824) · [Before (L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2823)

```diff
-             }(tz) && (null === sz ? zz.removeAttribute(tz) : zz.setAttribute(tz, "" + sz)) : Wz.mustUseProperty ? zz[Wz.propertyName] = null === sz ? 3 !== Wz.type && "" : sz : (tz = Wz.attributeName, Fz = Wz.attributeNamespace, null === sz ? zz.removeAttribute(tz) : (sz = 3 ===  … [truncated]
+             }(zv) && (null === Pv ? vv.removeAttribute(zv) : vv.setAttribute(zv, "" + Pv)) : Sv.mustUseProperty ? vv[Sv.propertyName] = null === Pv ? 3 !== Sv.type && "" : Pv : (zv = Sv.attributeName, hv = Sv.attributeNamespace, null === Pv ? vv.removeAttribute(zv) : (Pv = 3 ===  … [truncated]
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L2864` → after: `L2865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2865) · [Before (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2864)

```diff
-             return null === zz || "object" !== typeof zz ? null : "function" === typeof(zz = Lz && zz[Lz] || zz["@@iterator"]) ? zz : null
+             return null === vv || "object" !== typeof vv ? null : "function" === typeof(vv = Mv && vv[Mv] || vv["@@iterator"]) ? vv : null
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L2962` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2963) · [Before (L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2962)

```diff
-               case Jz:
+               case Yv:
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L2964` → after: `L2965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2965) · [Before (L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2964)

```diff
-               case mz:
+               case Fv:
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L2966` → after: `L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2967) · [Before (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2966)

```diff
-               case Cz:
+               case Ov:
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L2968` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2969) · [Before (L2968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2968)

```diff
-               case Iz:
+               case nv:
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L2970` → after: `L2971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2971) · [Before (L2970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2970)

```diff
-               case Tz:
+               case Uv:
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L2972` → after: `L2973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2973) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2972)

```diff
-               case cz:
+               case Rv:
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L2976` → after: `L2977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2977) · [Before (L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2976)

```diff
-               case Zz:
+               case Kv:
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L2978` → after: `L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2979) · [Before (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2978)

```diff
-               case ez:
+               case Dv:
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L2980` → after: `L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2981) · [Before (L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2980)

```diff
-               case Gz:
+               case Vv:
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L2983` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2984) · [Before (L2983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2983)

```diff
-               case jz:
+               case xv:
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L2985` → after: `L2986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2986) · [Before (L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2985)

```diff
-               case yz:
+               case qv:
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L2987` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L2988) · [Before (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L2987)

```diff
-               case Az:
+               case tv:
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L3071` → after: `L3072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3072) · [Before (L3071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3071)

```diff
-               checked: null != sz ? sz : zz._wrapperState.initialChecked
+               checked: null != Pv ? Pv : vv._wrapperState.initialChecked
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L3371` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3372) · [Before (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3371)

```diff
-             zz: switch (tz) {
+             vv: switch (zv) {
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L3437` → after: `L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3438) · [Before (L3437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3437)

```diff
-             return 3 === tz.tag ? sz : null
+             return 3 === zv.tag ? Pv : null
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L3509` → after: `L3510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3510) · [Before (L3509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3509)

```diff
-                 return sz.stateNode.current === sz ? zz : tz
+                 return Pv.stateNode.current === Pv ? vv : zv
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L3689` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3690) · [Before (L3689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3689)

```diff
-           function as(zz) {
+           function MP(vv) {
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L3708-L3709` → after: `L3709-L3710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3709-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3709-L3710) · [Before (L3708-L3709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3708-L3709)

```diff
-               0 !== vz ? (Fz = as(vz), Wz = ns) : 0 !== (oz &= Xz) && (Fz = as(oz), Wz = ns)
-             } else 0 !== (Xz = sz & ~Oz) ? (Fz = as(Xz), Wz = ns) : 0 !== oz && (Fz = as(oz), Wz = ns);
+               0 !== dv ? (hv = MP(dv), Sv = HP) : 0 !== (pv &= ev) && (hv = MP(pv), Sv = HP)
+             } else 0 !== (ev = Pv & ~gv) ? (hv = MP(ev), Sv = HP) : 0 !== pv && (hv = MP(pv), Sv = HP);
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L3712` → after: `L3713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3713) · [Before (L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3712)

```diff
-               if (as(tz), Wz <= ns) return tz;
+               if (MP(zv), Sv <= HP) return zv;
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L3721` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3722) · [Before (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3721)

```diff
-             return 0 !== (zz = -1073741825 & zz.pendingLanes) ? zz : 1073741824 & zz ? 1073741824 : 0
+             return 0 !== (vv = -1073741825 & vv.pendingLanes) ? vv : 1073741824 & vv ? 1073741824 : 0
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L3845` → after: `L3846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3846) · [Before (L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3845)

```diff
-             return uF = Wz.slice(zz, 1 < tz ? 1 - tz : void 0)
+             return dh = Sv.slice(vv, 1 < zv ? 1 - zv : void 0)
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L3850` → after: `L3851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3851) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3850)

```diff
-             return "charCode" in zz ? 0 === (zz = zz.charCode) && 13 === tz && (zz = 13) : zz = tz, 10 === zz && (zz = 13), 32 <= zz || 13 === zz ? zz : 0
+             return "charCode" in vv ? 0 === (vv = vv.charCode) && 13 === zv && (vv = 13) : vv = zv, 10 === vv && (vv = 13), 32 <= vv || 13 === vv ? vv : 0
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L3864` → after: `L3865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L3865) · [Before (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L3864)

```diff
-               return this.isDefaultPrevented = (null != Wz.defaultPrevented ? Wz.defaultPrevented : !1 === Wz.returnValue) ? wF : DF, this.isPropagationStopped = DF, this
+               return this.isDefaultPrevented = (null != Sv.defaultPrevented ? Sv.defaultPrevented : !1 === Sv.returnValue) ? Th : Wh, this.isPropagationStopped = Wh, this
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L4224` → after: `L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4225) · [Before (L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4224)

```diff
-               zz: {
+               vv: {
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L4266` → after: `L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4267) · [Before (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4266)

```diff
-             var Fz = sz.window === sz ? sz.document : 9 === sz.nodeType ? sz : sz.ownerDocument;
+             var hv = Pv.window === Pv ? Pv.document : 9 === Pv.nodeType ? Pv : Pv.ownerDocument;
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L4304` → after: `L4305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4305) · [Before (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4304)

```diff
-               zz: {
+               vv: {
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L4370` → after: `L4371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4371) · [Before (L4370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4370)

```diff
-             if (0 === (1 & tz) && 0 === (2 & tz) && null !== Fz) zz: for (;;) {
+             if (0 === (1 & zv) && 0 === (2 & zv) && null !== hv) vv: for (;;) {
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L4404` → after: `L4405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4405) · [Before (L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4404)

```diff
-               zz: {
+               vv: {
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L4454-L4456` → after: `L4455-L4457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4455-L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4455-L4457) · [Before (L4454-L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4454-L4456)

```diff
-                     case Ms:
-                     case ds:
-                     case hs:
+                     case xP:
+                     case tP:
+                     case qP:
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L4459` → after: `L4460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4460) · [Before (L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4459)

```diff
-                     case Qs:
+                     case IP:
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L4499-L4500` → after: `L4500-L4501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4500-L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4500-L4501) · [Before (L4499-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4499-L4500)

```diff
-                 if (vz = "mouseout" === zz || "pointerout" === zz, (!(oz = "mouseover" === zz || "pointerover" === zz) || 0 !== (16 & tz) || !(Uz = sz.relatedTarget || sz.fromElement) || !wX(Uz) && !Uz[NX]) && (vz || oz) && (oz = Wz.window === Wz ? Wz : (oz = Wz.ownerDocument) ?  … [truncated]
-                   if (Kz = IF, Dz = "onMouseLeave", Nz = "onMouseEnter", wz = "mouse", "pointerout" !== zz && "pointerover" !== zz || (Kz = kF, Dz = "onPointerLeave", Nz = "onPointerEnter", wz = "pointer"), uz = null == vz ? oz : gX(vz), bz = null == Uz ? oz : gX(Uz), (oz = new K … [truncated]
+                 if (dv = "mouseout" === vv || "pointerout" === vv, (!(pv = "mouseover" === vv || "pointerover" === vv) || 0 !== (16 & zv) || !(Nv = Pv.relatedTarget || Pv.fromElement) || !Te(Nv) && !Nv[Ne]) && (dv || pv) && (pv = Sv.window === Sv ? Sv : (pv = Sv.ownerDocument) ?  … [truncated]
+                   if (lv = fh, sv = "onMouseLeave", Wv = "onMouseEnter", av = "mouse", "pointerout" !== vv && "pointerover" !== vv || (lv = Qh, sv = "onPointerLeave", Wv = "onPointerEnter", av = "pointer"), Tv = null == dv ? pv : we(dv), wv = null == Nv ? pv : we(Nv), (pv = new l … [truncated]
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L4546` → after: `L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4547) · [Before (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4546)

```diff
-                 if (qF) zz: {
+                 if (yh) vv: {
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L4564` → after: `L4565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4565) · [Before (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4564)

```diff
-                 }), Bz ? Pz.data = Bz : null !== (Bz = zW(sz)) && (Pz.data = Bz))), (Bz = VF ? function(zz, tz) {
+                 }), cv ? Gv.data = cv : null !== (cv = kh(Pv)) && (Gv.data = cv))), (cv = Jh ? function(vv, zv) {
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L4802` → after: `L4803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4803) · [Before (L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4802)

```diff
-             fX = void 0 !== LX ? LX : function() {},
+             be = void 0 !== Ae ? Ae : function() {},
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L4807` → after: `L4808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4808) · [Before (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4807)

```diff
-             FO = 1e4 > sO ? lX : function() {
+             vg = 1e4 > ue ? Le : function() {
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L4813` → after: `L4814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4814) · [Before (L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4813)

```diff
-               case aX:
+               case Me:
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L4815` → after: `L4816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4816) · [Before (L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4815)

```diff
-               case qX:
+               case ye:
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L4817` → after: `L4818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4818) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4817)

```diff
-               case SX:
+               case Be:
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L4819` → after: `L4820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4820) · [Before (L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4819)

```diff
-               case VX:
+               case Je:
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L4821` → after: `L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4822) · [Before (L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4821)

```diff
-               case RX:
+               case Ee:
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L4974` → after: `L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4975) · [Before (L4974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4974)

```diff
-               null === sz ? tz.next = tz : (tz.next = sz.next, sz.next = tz), zz.pending = tz
+               null === Pv ? zv.next = zv : (zv.next = Pv.next, Pv.next = zv), vv.pending = zv
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L4994` → after: `L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4995) · [Before (L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4994)

```diff
-                   null === Xz ? Wz = Xz = Oz : Xz = Xz.next = Oz, sz = sz.next
+                   null === ev ? Sv = ev = gv : ev = ev.next = gv, Pv = Pv.next
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L4996` → after: `L4997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L4997) · [Before (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L4996)

```diff
-                 null === Xz ? Wz = Xz = tz : Xz = Xz.next = tz
+                 null === ev ? Sv = ev = zv : ev = ev.next = zv
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L5006` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5007) · [Before (L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5006)

```diff
-             null === (zz = sz.lastBaseUpdate) ? sz.firstBaseUpdate = tz : zz.next = tz, sz.lastBaseUpdate = tz
+             null === (vv = Pv.lastBaseUpdate) ? Pv.firstBaseUpdate = zv : vv.next = zv, Pv.lastBaseUpdate = zv
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L5019` → after: `L5020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5020) · [Before (L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5019)

```diff
-               Uz.next = null, null === oz ? Oz = Kz : oz.next = Kz, oz = Uz;
+               Nv.next = null, null === pv ? gv = lv : pv.next = lv, pv = Nv;
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L5023` → after: `L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5024) · [Before (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5023)

```diff
-                 Nz !== oz && (null === Nz ? uz.firstBaseUpdate = Kz : Nz.next = Kz, uz.lastBaseUpdate = Uz)
+                 Wv !== pv && (null === Wv ? Tv.firstBaseUpdate = lv : Wv.next = lv, Tv.lastBaseUpdate = Nv)
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L5039` → after: `L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5040) · [Before (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5039)

```diff
-                   zz: {
+                   vv: {
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L5092` → after: `L5093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5093) · [Before (L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5092)

```diff
-             sz = null === (sz = sz(Fz, tz = zz.memoizedState)) || void 0 === sz ? tz : Wz({}, tz, sz), zz.memoizedState = sz, 0 === zz.lanes && (zz.updateQueue.baseState = sz)
+             Pv = null === (Pv = Pv(hv, zv = vv.memoizedState)) || void 0 === Pv ? zv : Sv({}, zv, Pv), vv.memoizedState = Pv, 0 === vv.lanes && (vv.updateQueue.baseState = Pv)
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L5129` → after: `L5130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5130) · [Before (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5129)

```diff
-             return "object" === typeof Xz && null !== Xz ? Xz = rO(Xz) : (Wz = GX(tz) ? eX : IX.current, Xz = (Fz = null !== (Fz = tz.contextTypes) && void 0 !== Fz) ? ZX(zz, Wz) : JX), tz = new tz(sz, Xz), zz.memoizedState = null !== tz.state && void 0 !== tz.state ? tz.state :  … [truncated]
+             return "object" === typeof ev && null !== ev ? ev = ig(ev) : (Sv = Oe(zv) ? Ye : fe.current, ev = (hv = null !== (hv = zv.contextTypes) && void 0 !== hv) ? ne(vv, Sv) : je), zv = new zv(Pv, ev), vv.memoizedState = null !== zv.state && void 0 !== zv.state ? zv.state :  … [truncated]
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L5140` → after: `L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5141) · [Before (L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5140)

```diff
-             "object" === typeof Xz && null !== Xz ? Wz.context = rO(Xz) : (Xz = GX(tz) ? eX : IX.current, Wz.context = ZX(zz, Xz)), eO(zz, sz, Wz, Fz), Wz.state = zz.memoizedState, "function" === typeof(Xz = tz.getDerivedStateFromProps) && (TO(zz, tz, Xz, sz), Wz.state = zz.memoi … [truncated]
+             "object" === typeof ev && null !== ev ? Sv.context = ig(ev) : (ev = Oe(zv) ? Ye : fe.current, Sv.context = ne(vv, ev)), Yg(vv, Pv, Sv, hv), Sv.state = vv.memoizedState, "function" === typeof(ev = zv.getDerivedStateFromProps) && (Dg(vv, zv, ev, Pv), Sv.state = vv.memoi … [truncated]
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L5192` → after: `L5193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5193) · [Before (L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5192)

```diff
-               return tz.index = Fz, zz ? null !== (Fz = tz.alternate) ? (Fz = Fz.index) < sz ? (tz.flags = 2, sz) : Fz : (tz.flags = 2, sz) : sz
+               return zv.index = hv, vv ? null !== (hv = zv.alternate) ? (hv = hv.index) < Pv ? (zv.flags = 2, Pv) : hv : (zv.flags = 2, Pv) : Pv
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L5219` → after: `L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5220) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5219)

```diff
-                   case xz:
+                   case fv:
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L5221` → after: `L5222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/main.js#L5222) · [Before (L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/main.js#L5221)

```diff
-                   case mz:
+                   case Fv:
```
