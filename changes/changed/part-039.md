# Changed — Bundle Modifications Report (Part 039 / 138)

- **Updated at**: `2026-11-25T13:06 JST`
- **Part**: `39 / 138` (**425** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 038](part-038.md) · [Part 040 →](part-040.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (igzsf.a0b73a5f → dz8ef.98c5e741 · continued)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 15. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L659)

```diff
-       for (let Ht = 0; Ht < 3; Ht++) Dt = et + 1 / 3 * -(Ht - 1), Dt < 0 && Dt++, Dt > 1 && Dt--, mt = 6 * Dt < 1 ? dt + 6 * (qt - dt) * Dt : 2 * Dt < 1 ? qt : 3 * Dt < 2 ? dt + (qt - dt) * (2 / 3 - Dt) * 6 : dt, jt[Ht] = 255 * mt;
+       for (let fu = 0; fu < 3; fu++) Zu = Eu + 1 / 3 * -(fu - 1), Zu < 0 && Zu++, Zu > 1 && Zu--, Xu = 6 * Zu < 1 ? lu + 6 * (Uu - lu) * Zu : 2 * Zu < 1 ? Uu : 3 * Zu < 2 ? lu + (Uu - lu) * (2 / 3 - Zu) * 6 : lu, qu[fu] = 255 * Xu;
```

#### 16. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L667` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L667) · [Before (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L667)

```diff
-       Ot *= 2, Vt *= Ot <= 1 ? Ot : 2 - Ot, qt *= Dt <= 1 ? Dt : 2 - Dt;
+       su *= 2, ju *= su <= 1 ? su : 2 - su, Uu *= Zu <= 1 ? Zu : 2 - Zu;
```

#### 17. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L700)

```diff
-       return Dt = Vt * qt, Dt /= dt <= 1 ? dt : 2 - dt, Dt = Dt || 0, mt /= 2, [et, 100 * Dt, 100 * mt]
+       return Zu = ju * Uu, Zu /= lu <= 1 ? lu : 2 - lu, Zu = Zu || 0, Xu /= 2, [Eu, 100 * Zu, 100 * Xu]
```

#### 18. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L759)

```diff
-       return Vt = qt > .008856 ? qt : (Vt - 16 / 116) / 7.787, et = Dt > .008856 ? Dt : (et - 16 / 116) / 7.787, Ot = mt > .008856 ? mt : (Ot - 16 / 116) / 7.787, et *= 95.047, Vt *= 100, Ot *= 108.883, [et, Vt, Ot]
+       return ju = Uu > .008856 ? Uu : (ju - 16 / 116) / 7.787, Eu = Zu > .008856 ? Zu : (Eu - 16 / 116) / 7.787, su = Xu > .008856 ? Xu : (su - 16 / 116) / 7.787, Eu *= 95.047, ju *= 100, su *= 108.883, [Eu, ju, su]
```

#### 19. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L818` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L818) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L818)

```diff
-       return dt = mt < 1 ? Dt / (1 - mt) : 0, jt = mt <= 0 ? 0 : qt === et ? (Vt - Ot) / mt % 6 : qt === Vt ? 2 + (Ot - et) / mt : 4 + (et - Vt) / mt, jt /= 6, jt %= 1, [360 * jt, 100 * mt, 100 * dt]
+       return lu = Xu < 1 ? Zu / (1 - Xu) : 0, qu = Xu <= 0 ? 0 : Uu === Eu ? (ju - su) / Xu % 6 : Uu === ju ? 2 + (su - Eu) / Xu : 4 + (Eu - ju) / Xu, qu /= 6, qu %= 1, [360 * qu, 100 * Xu, 100 * lu]
```

#### 20. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L822)

```diff
-         Ot = Vt < .5 ? 2 * et * Vt : 2 * et * (1 - Vt);
+         su = ju < .5 ? 2 * Eu * ju : 2 * Eu * (1 - ju);
```

#### 21. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L903-L905` → after: `L903-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L903-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L903-L905) · [Before (L903-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L903-L905)

```diff
-   36913: (tt, et, Vt) => {
-     const Ot = Vt(36918),
-       qt = Vt(36923),
+   37034: (uu, Eu, ju) => {
+     const su = ju(37036),
+       Uu = ju(37053),
```

#### 22. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L932` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L932) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L932)

```diff
-             return void 0 === qt || null === qt ? qt : (qt.length > 1 && (Vt = qt), tt(Vt))
+             return void 0 === Uu || null === Uu ? Uu : (Uu.length > 1 && (ju = Uu), uu(ju))
```

#### 23. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L939-L940` → after: `L939-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L939-L940) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L939-L940)

```diff
-   36923: (tt, et, Vt) => {
-     const Ot = Vt(36918);
+   37053: (uu, Eu, ju) => {
+     const su = ju(37036);
```

#### 24. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L988` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L988) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L988)

```diff
-   36921: tt => {
+   37044: uu => {
```

#### 25. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1140-L1141` → after: `L1140-L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L1140-L1141) · [Before (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L1140-L1141)

```diff
-   36902: (tt, et, Vt) => {
-     var Ot = Vt(36905),
+   37027: (uu, Eu, ju) => {
+     var su = ju(37032),
```

#### 26. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/226.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/226.js#L1157)

```diff
-   36905: tt => {
+   37032: uu => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 1. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/227.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/227.js#L4)

```diff
-   36996: (tt, et, Vt) => {
+   37151: (uu, Eu, ju) => {
```

#### 2. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L8-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/227.js#L9-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/227.js#L8-L10)

```diff
-       k: () => le,
-       o: () => Xe,
-       r: () => Qe
+       j: () => fE,
+       l: () => CE
```

#### 3. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/227.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/227.js#L64)

```diff
-     var qe = Vt(1293);
+     var sE = ju(1255);
```

#### 4. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/227.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/227.js#L127)

```diff
-         if (de[et]) throw new Error(`duplicate sound name ${et} in ${de[et]} and ${fe}`);
+         if (XE[Eu]) throw new Error(`duplicate sound name ${Eu} in ${XE[Eu]} and ${NE}`);
```

#### 5. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/227.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/227.js#L149)

```diff
-       if (void 0 === et) throw new Error(`Invalid sound name ${tt} (not in any sprite sheet)`);
+       if (void 0 === Eu) throw new Error(`Invalid sound name ${uu} (not in any sprite sheet)`);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/228.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/228.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba)

#### 1. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L4)

```diff
-   39850: (tt, et, Vt) => {
+   39933: (uu, Eu, ju) => {
```

#### 2. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L7)

```diff
-       h: () => qt
+       f: () => Uu
```

#### 3. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L12)

```diff
-   39316: (tt, et, Vt) => {
+   39416: (uu, Eu, ju) => {
```

#### 4. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L17)

```diff
-       d: () => Ot
+       c: () => su
```

#### 5. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L20)

```diff
-   37044: (tt, et, Vt) => {
+   37208: (uu, Eu, ju) => {
```

#### 6. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L23)

```diff
-       h: () => qt
+       e: () => Uu
```

#### 7. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L35)

```diff
-   40785: (tt, et, Vt) => {
+   40856: (uu, Eu, ju) => {
```

#### 8. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L38-L40` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L38-L40) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L38-L40)

```diff
-       i: () => bt,
-       m: () => Mt,
-       p: () => yt
+       h: () => Mu,
+       k: () => gu,
+       m: () => hu
```

#### 9. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L42-L48` → after: `L42-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L42-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L42-L48) · [Before (L42-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L42-L48)

```diff
-     var Ot = Vt(31),
-       qt = Vt(40792),
-       Dt = Vt(40769),
-       mt = Vt(40797),
-       dt = Vt(40777),
-       jt = Vt(40804),
-       Ht = Vt(40824);
+     var su = ju(24),
+       Uu = ju(40860),
+       Zu = ju(40847),
+       Xu = ju(40864),
+       lu = ju(40854),
+       qu = ju(40873),
+       fu = ju(40889);
```

#### 10. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L52)

```diff
-       const Ot = (0, Dt.g)();
+       const su = (0, Zu.l)();
```

#### 11. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L57)

```diff
-       return `${tt[0]},${tt[1]},${tt[2]}`
+       return `${uu[0]},${uu[1]},${uu[2]}`
```

#### 12. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L77)

```diff
-           Rd: null !== et && void 0 !== et ? et : [0, 0, 0, 0],
+           wl: null !== Eu && void 0 !== Eu ? Eu : [0, 0, 0, 0],
```

#### 13. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L96)

```diff
-           return qt ? qt.lastOpened < (null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.passkeyLastUpdated) && void 0 !== et ? et : 0) ? (lt.delete(Ot), null) : [...qt.Rd] : null
+           return Uu ? Uu.lastOpened < (null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.passkeyLastUpdated) && void 0 !== Eu ? Eu : 0) ? (cu.delete(su), null) : [...Uu.wl] : null
```

#### 14. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L104-L108` → after: `L104-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L104-L108) · [Before (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L104-L108)

```diff
-     }(0, Ht.j)(mt.d, (tt => {
-       const et = (0, jt.h)(mt.d, tt);
-       if (!(0, jt.d)(et) || et.tD) return;
-       if (ft++, !et.Bq || null === et.Tq) return void(Et = null);
-       const Vt = Qt(et.Tq);
+     }(0, fu.n)(Xu.b, (uu => {
+       const Eu = (0, qu.g)(Xu.b, uu);
+       if (!(0, qu.e)(Eu) || Eu.EZ) return;
+       if (Ou++, !Eu.nU || null === Eu.RU) return void(Nu = null);
+       const ju = bu(Eu.RU);
```

#### 15. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L111-L113` → after: `L111-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L111-L113) · [Before (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L111-L113)

```diff
-         type: et.xq
-       }, null !== et.nq && lt.set(Vt, {
-         Rd: [...et.nq],
+         type: Eu.zU
+       }, null !== Eu.uZ && cu.set(ju, {
+         wl: [...Eu.uZ],
```

#### 16. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L116)

```diff
-     })), (0, Ht.f)((() => {
+     })), (0, fu.i)((() => {
```

#### 17. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L118-L119)

```diff
-     })), (0, Ht.g)((() => {
-       null !== Et && (Et = null, ft++, Ot.j.sw("chestToggleFromServer", !1, !0))
+     })), (0, fu.k)((() => {
+       null !== Nu && (Nu = null, Ou++, su.h.TY("chestToggleFromServer", !1, !0))
```

#### 18. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L123)

```diff
-           watch: tt => (0, Ot.n)("EditBoard", (et => {
+           watch: uu => (0, su.l)("EditBoard", (Eu => {
```

#### 19. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L128-L129` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L128-L129) · [Before (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L128-L129)

```diff
-             const Ot = (0, Dt.g)(),
-               qt = (0, Dt.q)();
+             const su = (0, Zu.l)(),
+               Uu = (0, Zu.w)();
```

#### 20. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L134)

```diff
-           watch: tt => (0, Ot.n)("OpenIronChest", (et => {
+           watch: uu => (0, su.l)("OpenIronChest", (Eu => {
```

#### 21. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L155-L158` → after: `L155-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L155-L158) · [Before (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L155-L158)

```diff
-           null === (et = (0, Dt.g)()) || void 0 === et || et.send(dt.c.UpdateBoard, (0, dt.S)({
-             Rj: Vt,
-             Ij: Ot,
-             Pj: qt
+           null === (Eu = (0, Zu.l)()) || void 0 === Eu || Eu.send(lu.c.UpdateBoard, (0, lu.X)({
+             eq: ju,
+             Gq: su,
+             pq: Uu
```

#### 22. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L168-L171` → after: `L168-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L168-L171) · [Before (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L168-L171)

```diff
-           null === (et = (0, Dt.g)()) || void 0 === et || et.send(dt.c.UpdateBook, (0, dt.T)({
-             nm: Vt,
-             td: Ot,
-             Vd: qt
+           null === (Eu = (0, Zu.l)()) || void 0 === Eu || Eu.send(lu.c.UpdateBook, (0, lu._)({
+             AX: ju,
+             yX: su,
+             zX: Uu
```

#### 23. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L176)

```diff
-           null === (et = (0, Dt.g)()) || void 0 === et || et.send(dt.c.UpdateNameTag, tt)
+           null === (Eu = (0, Zu.l)()) || void 0 === Eu || Eu.send(lu.c.UpdateNameTag, uu)
```

#### 24. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L183-L187` → after: `L183-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L183-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L183-L187) · [Before (L183-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L183-L187)

```diff
-           const Ot = (0, Dt.q)(),
-             qt = (0, Dt.g)();
-           Ot && qt && qt.send(dt.c.SetCustomLobbyBlock, (0, dt.I)({
-             qd: Ot.blockIdOf(Vt),
-             Od: et
+           const su = (0, Zu.w)(),
+             Uu = (0, Zu.l)();
+           su && Uu && Uu.send(lu.c.SetCustomLobbyBlock, (0, lu.H)({
+             ul: su.blockIdOf(ju),
+             RX: Eu
```

#### 25. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L192` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L192) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L192)

```diff
-   40845: (tt, et, Vt) => {
+   40904: (uu, Eu, ju) => {
```

#### 26. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L196` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L195-L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L196)

```diff
-       d: () => dt
+       e: () => Xu,
+       g: () => lu
```

#### 27. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L198-L200` → after: `L198-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L198-L200) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L198-L200)

```diff
-     var Ot = Vt(40761),
-       qt = Vt(4951),
-       Dt = Vt(40769);
+     var su = ju(40833),
+       Uu = ju(4962),
+       Zu = ju(40847);
```

#### 28. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L204-L205` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L204-L205) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L204-L205)

```diff
-       const et = null === (tt = (0, Dt.g)()) || void 0 === tt ? void 0 : tt.api.localId;
-       return void 0 === et || et === Ot.hd ? null : String(et)
+       const Eu = null === (uu = (0, Zu.l)()) || void 0 === uu ? void 0 : uu.api.localId;
+       return void 0 === Eu || Eu === su.Pc ? null : String(Eu)
```

#### 29. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L209)

```diff
-       const et = (0, Dt.g)();
+       const Eu = (0, Zu.l)();
```

#### 30. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L212-L213` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L212-L213) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L212-L213)

```diff
-       const Ot = (0, qt.o)((() => {
-         const et = (0, Dt.g)();
+       const su = (0, Uu.t)((() => {
+         const Eu = (0, Zu.l)();
```

#### 31. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L225-L226` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L225-L226) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L225-L226)

```diff
-           const Vt = (0, Dt.g)();
-           return null === Vt ? et : tt(Vt)()
+           const ju = (0, Zu.l)();
+           return null === ju ? Eu : uu(ju)()
```

#### 32. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L239` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L239) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L239)

```diff
-   40840: (tt, et, Vt) => {
+   40901: (uu, Eu, ju) => {
```

#### 33. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L243-L245` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L243-L245) · [Before (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L243-L245)

```diff
-     var Ot = Vt(40769),
-       qt = Vt(40845),
-       Dt = Vt(40853);
+     var su = ju(40847),
+       Uu = ju(40904),
+       Zu = ju(40912);
```

#### 34. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L249)

```diff
-       return null !== (tt = null === (et = (0, Ot.g)()) || void 0 === et ? void 0 : et.itemBridgeSources) && void 0 !== tt ? tt : Dt.e
+       return null !== (uu = null === (Eu = (0, su.l)()) || void 0 === Eu ? void 0 : Eu.itemBridgeSources) && void 0 !== uu ? uu : Zu.d
```

#### 35. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L255)

```diff
-         watch: et => (0, qt.d)((Vt => {
+         watch: Eu => (0, Uu.g)((ju => {
```

#### 36. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L264)

```diff
-         watch: et => (0, qt.d)((Vt => Vt.itemBridgeSources.events[tt].watch(et)))
+         watch: Eu => (0, Uu.g)((ju => ju.itemBridgeSources.events[uu].watch(Eu)))
```

#### 37. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L301)

```diff
-   40853: (tt, et, Vt) => {
+   40912: (uu, Eu, ju) => {
```

#### 38. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L303)

```diff
-       e: () => dt
+       d: () => lu
```

#### 39. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L305)

```diff
-     var Ot = Vt(39850);
+     var su = ju(39933);
```

#### 40. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L464-L465` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L464-L465) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L464-L465)

```diff
-             cX: 0,
-             jj: null,
+             aC: 0,
+             yl: null,
```

#### 41. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L527)

```diff
-           worldCodeAiGameState: () => Ot.h
+           worldCodeAiGameState: () => su.f
```

#### 42. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L548` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L548) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L548)

```diff
-   40767: (tt, et, Vt) => {
+   40840: (uu, Eu, ju) => {
```

#### 43. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L551-L554` → after: `L551-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L551-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L551-L554) · [Before (L551-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L551-L554)

```diff
-       f: () => ht,
-       h: () => Wt,
-       k: () => Kt,
-       n: () => Ct
+       i: () => Ju,
+       j: () => au,
+       l: () => wu,
+       p: () => Gu
```

#### 44. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L556-L568` → after: `L556-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L556-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L556-L568) · [Before (L556-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L556-L568)

```diff
-     var Ot = Vt(39441),
-       qt = Vt(1308),
-       Dt = Vt(2043),
-       mt = Vt(2054),
-       dt = Vt(3346),
-       jt = Vt(37044),
-       Ht = Vt(1423),
-       Xt = Vt(40769),
-       Qt = Vt(4980),
-       lt = Vt(2458),
-       Et = Vt(40777),
-       ft = Vt(40785),
-       wt = Vt(40840);
+     var su = ju(39547),
+       Uu = ju(1278),
+       Zu = ju(2011),
+       Xu = ju(2019),
+       lu = ju(3475),
+       qu = ju(37208),
+       fu = ju(1369),
+       Cu = ju(40847),
+       bu = ju(4986),
+       cu = ju(2516),
+       Nu = ju(40854),
+       Ou = ju(40856),
+       Yu = ju(40901);
```

#### 45. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L586)

```diff
-       return void 0 !== et && (0, dt.e)(et) === tt
+       return void 0 !== Eu && (0, lu.c)(Eu) === uu
```

#### 46. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L591)

```diff
-       const Vt = null === (et = (0, Xt.g)()) || void 0 === et ? void 0 : et.tables;
+       const ju = null === (Eu = (0, Cu.l)()) || void 0 === Eu ? void 0 : Eu.tables;
```

#### 47. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L604)

```diff
-     }(0, Xt.r)((tt => {
+     }(0, Cu.A)((uu => {
```

#### 48. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L607)

```diff
-     const Jt = (0, mt.g)("DisplayName", "Description");
+     const eu = (0, Xu.i)("DisplayName", "Description");
```

#### 49. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L610)

```diff
-       return Boolean(Dt.b.get("useInventory") && Dt.b.get("useFullInventory"))
+       return Boolean(Zu.e.get("useInventory") && Zu.e.get("useFullInventory"))
```

#### 50. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L619)

```diff
-             return null === tt.chest ? tt : ((null === (Vt = et) || void 0 === Vt ? void 0 : Vt.from) === tt && et.chestVersion === (0, ft.e)() || (et = {
+             return null === uu.chest ? uu : ((null === (ju = Eu) || void 0 === ju ? void 0 : ju.from) === uu && Eu.chestVersion === (0, Ou.e)() || (Eu = {
```

#### 51. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L624` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L624) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L624)

```diff
-                 chest: (0, ft.p)(tt.chest)
+                 chest: (0, Ou.m)(uu.chest)
```

#### 52. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L639-L640` → after: `L639-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L639-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L639-L640) · [Before (L639-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L639-L640)

```diff
-             return (null === (tt = ut) || void 0 === tt ? void 0 : tt.namesVersion) !== (0, dt.h)() && (ut = {
-               namesVersion: (0, dt.h)(),
+             return (null === (uu = pu) || void 0 === uu ? void 0 : uu.namesVersion) !== (0, lu.g)() && (pu = {
+               namesVersion: (0, lu.g)(),
```

#### 53. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L656-L657` → after: `L656-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L656-L657) · [Before (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L656-L657)

```diff
-             return (null === (et = tt) || void 0 === et ? void 0 : et.namesVersion) !== (0, dt.h)() && (tt = {
-               namesVersion: (0, dt.h)(),
+             return (null === (Eu = uu) || void 0 === Eu ? void 0 : Eu.namesVersion) !== (0, lu.g)() && (uu = {
+               namesVersion: (0, lu.g)(),
```

#### 54. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L670)

```diff
-           for (const qt of null !== (et = null === (Vt = yt) || void 0 === Vt ? void 0 : Vt.creativeItemIds()) && void 0 !== et ? et : []) {
+           for (const Uu of null !== (Eu = null === (ju = hu) || void 0 === ju ? void 0 : ju.creativeItemIds()) && void 0 !== Eu ? Eu : []) {
```

#### 55. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L672` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L672) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L672)

```diff
-             const Ht = (0, dt.e)(qt);
+             const fu = (0, lu.c)(Uu);
```

#### 56. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L674` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L674) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L674)

```diff
-             const Xt = null !== (mt = Dt.b.get((0, Ot.h)(Ht, "showInCreativeInven"))) && void 0 !== mt ? mt : null === (jt = yt) || void 0 === jt ? void 0 : jt.showInCreativeInvenOf(qt);
+             const Cu = null !== (Xu = Zu.e.get((0, su.g)(fu, "showInCreativeInven"))) && void 0 !== Xu ? Xu : null === (qu = hu) || void 0 === qu ? void 0 : qu.showInCreativeInvenOf(Uu);
```

#### 57. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L678` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L678) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L678)

```diff
-             publicLobby: (0, qt.P)((0, Ht.c)().lobbyName),
+             publicLobby: (0, Uu.N)((0, fu.b)().lobbyName),
```

#### 58. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L681` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L681) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L681)

```diff
-         }), ["connectedGameChanged"], (0, mt.g)("ShowInCreativeInven")),
+         }), ["connectedGameChanged"], (0, Xu.i)("ShowInCreativeInven")),
```

#### 59. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L698)

```diff
-           (0, Qt.g)(lt.u.InventoryOpen, tt ? lt.u.InventoryOpen : 0)
+           (0, bu.g)(cu.x.InventoryOpen, uu ? cu.x.InventoryOpen : 0)
```

#### 60. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L708` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L708) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L708)

```diff
-             Rd: Ot
+             wl: su
```

#### 61. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L710-L712` → after: `L710-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L710-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L710-L712) · [Before (L710-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L710-L712)

```diff
-           null === (et = (0, Xt.g)()) || void 0 === et || et.send(Et.c.ChangeIronChestPasskey, (0, Et.j)({
-             Tq: Vt,
-             Rd: Ot
+           null === (Eu = (0, Cu.l)()) || void 0 === Eu || Eu.send(Nu.c.ChangeIronChestPasskey, (0, Nu.k)({
+             RU: ju,
+             wl: su
```

#### 62. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L719)

```diff
-             Rd: Ot
+             wl: su
```

#### 63. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L721-L723` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L721-L723) · [Before (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L721-L723)

```diff
-           null === (et = (0, Xt.g)()) || void 0 === et || et.send(Et.c.OpenIronChest, (0, Et.z)({
-             Tq: Vt,
-             Rd: Ot
+           null === (Eu = (0, Cu.l)()) || void 0 === Eu || Eu.send(Nu.c.OpenIronChest, (0, Nu.B)({
+             RU: ju,
+             wl: su
```

#### 64. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L731)

```diff
-   40831: (tt, et, Vt) => {
+   40897: (uu, Eu, ju) => {
```

#### 65. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L737-L738` → after: `L736-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L736-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L736-L738) · [Before (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L737-L738)

```diff
-       n: () => dt,
-       o: () => Ht
+       l: () => Uu,
+       p: () => lu,
+       r: () => fu
```

#### 66. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L753)

```diff
-       return tt instanceof WebAssembly.RuntimeError || tt instanceof Ot || qt(tt) && Dt.test(null !== (et = tt.stack) && void 0 !== et ? et : "")
+       return uu instanceof WebAssembly.RuntimeError || uu instanceof su || Uu(uu) && Zu.test(null !== (Eu = uu.stack) && void 0 !== Eu ? Eu : "")
```

#### 67. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L762` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L762) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L762)

```diff
-       if (et % qt !== 0 || et + Vt > tt.byteLength) throw new Ot(`${Dt}: ${Vt} bytes at ${et}, ${qt}-aligned, outside ${tt.byteLength} bytes of memory`)
+       if (Eu % Uu !== 0 || Eu + ju > uu.byteLength) throw new su(`${Zu}: ${ju} bytes at ${Eu}, ${Uu}-aligned, outside ${uu.byteLength} bytes of memory`)
```

#### 68. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L773` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L773) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L773)

```diff
-   40769: (tt, et, Vt) => {
+   40847: (uu, Eu, ju) => {
```

#### 69. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L775` → after: `L775-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L775-L776) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L775)

```diff
-       d: () => Ot,
+       A: () => bu,
+       B: () => Ou,
```

#### 70. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L777-L778` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L778-L779) · [Before (L777-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L777-L778)

```diff
-       g: () => wt,
-       k: () => yt,
+       i: () => Du,
+       l: () => Yu,
```

#### 71. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L780-L783` → after: `L781-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L781-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L781-L783) · [Before (L780-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L780-L783)

```diff
-       n: () => Et,
-       q: () => Xt,
-       r: () => Qt,
-       u: () => ft
+       p: () => cu,
+       s: () => Nu,
+       w: () => Cu
```

#### 72. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L787)

```diff
-         super(`the join's code did not load: ${tt instanceof Error?tt.message:String(tt)}`, {
+         super(`the join's code did not load: ${uu instanceof Error?uu.message:String(uu)}`, {
```

#### 73. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L815` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/228.js#L815) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/228.js#L815)

```diff
-       return qt ??= Promise.all([Vt.e(73), Vt.e(98), Vt.e(226), Vt.e(78), Vt.e(227), Vt.e(201), Vt.e(97), Vt.e(246), Vt.e(273), Vt.e(199), Vt.e(214), Vt.e(191), Vt.e(198), Vt.e(193), Vt.e(144), Vt.e(88), Vt.e(122), Vt.e(252), Vt.e(57)]).then((() => Vt(42820))).then((et => {
+       return Uu ??= Promise.all([ju.e(73), ju.e(98), ju.e(226), ju.e(78), ju.e(227), ju.e(201), ju.e(97), ju.e(246), ju.e(273), ju.e(199), ju.e(214), ju.e(191), ju.e(198), ju.e(193), ju.e(144), ju.e(88), ju.e(122), ju.e(252), ju.e(57)]).then((() => ju(42862))).then((Eu => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (102 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 1. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L4)

```diff
-   37155: (tt, et, Vt) => {
+   37322: (uu, Eu, ju) => {
```

#### 2. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L7)

```diff
-       f: () => Jt
+       c: () => eu
```

#### 3. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L9-L20` → after: `L9-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L9-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L9-L20) · [Before (L9-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L9-L20)

```diff
-     var Ot = Vt(4354),
-       qt = Vt(1554),
-       Dt = Vt(63),
-       mt = Vt(6667),
-       dt = Vt(4345),
-       jt = Vt(1387),
-       Ht = Vt(2024),
-       Xt = Vt(2001),
-       Qt = Vt(1556),
-       lt = Vt(1286),
-       Et = Vt(37164),
-       ft = Vt(1140),
+     var su = ju(4437),
+       Uu = ju(1499),
+       Zu = ju(58),
+       Xu = ju(6677),
+       lu = ju(4430),
+       qu = ju(1343),
+       fu = ju(1986),
+       Cu = ju(1964),
+       bu = ju(1506),
+       cu = ju(1244),
+       Nu = ju(37328),
+       Ou = ju(1105),
```

#### 4. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L22-L25` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L22-L25) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L22-L25)

```diff
-       yt = Vt(1410),
-       Nt = Vt(1152),
-       Mt = Vt(1371),
-       bt = Vt(1188);
+       hu = ju(1362),
+       Du = ju(1116),
+       gu = ju(1330),
+       Mu = ju(1154);
```

#### 5. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L31)

```diff
-       } = (0, lt.H)(), [et, Vt] = (0, Dt.useState)(!1), [ft, Ct] = (0, Dt.useState)(null), [Kt, ht] = (0, Dt.useState)(1), [vt, Wt] = (0, Dt.useState)(!1), [St, ct] = (0, Dt.useState)(!1), Rt = (0, Dt.useRef)(0), It = (0, Dt.useRef)(!1), Pt = (0, Dt.useRef)(!1), Zt = (0, Dt.useRe … [truncated]
+       } = (0, cu.A)(), [Eu, ju] = (0, Zu.useState)(!1), [Ou, Gu] = (0, Zu.useState)(null), [wu, Ju] = (0, Zu.useState)(1), [du, au] = (0, Zu.useState)(!1), [Pu, ou] = (0, Zu.useState)(!1), ku = (0, Zu.useRef)(0), mu = (0, Zu.useRef)(!1), vu = (0, Zu.useRef)(!1), Ku = (0, Zu.useRe … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L34-L35)

```diff
-         const tt = null !== ft && void 0 !== ft ? ft : "Rested Speed";
-         Ht.gameBridge.send("wakeUp", St ? tt : null), Lt.current = null, Vt(!1), Ct(null), ht(1), Wt(!1), ct(!1)
+         const uu = null !== Ou && void 0 !== Ou ? Ou : "Rested Speed";
+         fu.gameBridge.send("wakeUp", Pu ? uu : null), Vu.current = null, ju(!1), Gu(null), Ju(1), au(!1), ou(!1)
```

#### 7. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L42)

```diff
-         tt !== Lt.current && (Lt.current = tt, tt === mt.n.SLEEPING ? (Pt.current || (Rt.current = Ht.gameBridge.lookup("cameraZoom", null), Pt.current = !0), It.current = !0, Ht.gameBridge.send("setCameraZoom", 3), Vt(!0), ht(function() {
+         uu !== Vu.current && (Vu.current = uu, uu === Xu.v.SLEEPING ? (vu.current || (ku.current = fu.gameBridge.lookup("cameraZoom", null), vu.current = !0), mu.current = !0, fu.gameBridge.send("setCameraZoom", 3), ju(!0), Ju(function() {
```

#### 8. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L44-L46` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L44-L46) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L44-L46)

```diff
-             if (Et.b.leafBeds.includes(tt)) return console.log(`Found leaf bed: ${tt}`), 1;
-             if (Et.b.woolBeds.includes(tt)) return console.log(`Found woold bed: ${tt}`), 2;
-             if (Et.b.strongBeds.includes(tt)) return console.log(`Found strong bed ${tt}`), 3
+             if (Nu.b.leafBeds.includes(uu)) return console.log(`Found leaf bed: ${uu}`), 1;
+             if (Nu.b.woolBeds.includes(uu)) return console.log(`Found woold bed: ${uu}`), 2;
+             if (Nu.b.strongBeds.includes(uu)) return console.log(`Found strong bed ${uu}`), 3
```

#### 9. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L51)

```diff
-         (0, jt.m)(Jt)
+         (0, qu.q)(eu)
```

#### 10. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L53-L54` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L53-L54) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L53-L54)

```diff
-         et ? (0, jt.p)(Jt) : ((0, jt.m)(Jt), It.current && (Ht.gameBridge.send("setCameraZoom", Rt.current), It.current = !1))
-       }), [et]), (0, Mt.w)("overlay", Zt, kt, et), (0, bt.jsx)(Ot.b, {
+         Eu ? (0, qu.t)(eu) : ((0, qu.q)(eu), mu.current && (fu.gameBridge.send("setCameraZoom", ku.current), mu.current = !1))
+       }), [Eu]), (0, gu.w)("overlay", Ku, Qu, Eu), (0, Mu.jsx)(su.d, {
```

#### 11. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L70)

```diff
-               children: dt.h.map((et => (0, bt.jsxs)(ut, {
+               children: lu.j.map((Eu => (0, Mu.jsxs)(pu, {
```

#### 12. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L72)

```diff
-                 Zj: ft,
+                 wq: Ou,
```

#### 13. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L76)

```diff
-                   children: [(0, bt.jsx)(Xt.e, {
+                   children: [(0, Mu.jsx)(Cu.d, {
```

#### 14. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L80)

```diff
-                   }), dt.f[et].shortName]
+                   }), lu.i[Eu].shortName]
```

#### 15. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L83-L84` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L83-L84) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L83-L84)

```diff
-                   children: tt(dt.f[et].description, {
-                     time: dt.f[et].effectLevelDurations[Kt] / 6e4
+                   children: uu(lu.i[Eu].description, {
+                     time: lu.i[Eu].effectLevelDurations[wu] / 6e4
```

#### 16. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L95)

```diff
-                   St ? Ft() : (Wt(!0), (0, yt.$)((() => {
+                   Pu ? ru() : (au(!0), (0, hu.O)((() => {
```

#### 17. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L101)

```diff
-                   children: [(0, bt.jsx)(Nt.b, {
+                   children: [(0, Mu.jsx)(Du.e, {
```

#### 18. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L111)

```diff
-                   children: (0, bt.jsx)(Xt.e, {
+                   children: (0, Mu.jsx)(Cu.d, {
```

#### 19. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L120)

```diff
-                   children: (0, bt.jsx)(Xt.e, {
+                   children: (0, Mu.jsx)(Cu.d, {
```

#### 20. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L129)

```diff
-                   children: (0, bt.jsx)(Xt.e, {
+                   children: (0, Mu.jsx)(Cu.d, {
```

#### 21. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L145)

```diff
-         Zj: Ot,
+         wq: su,
```

#### 22. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L148)

```diff
-       return Vt === Ot ? (0, bt.jsx)(Qt.m, {
+       return ju === su ? (0, Mu.jsx)(bu.p, {
```

#### 23. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L153)

```diff
-       }) : (0, bt.jsx)(Qt.g, {
+       }) : (0, Mu.jsx)(bu.i, {
```

#### 24. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L161)

```diff
-   40745: (tt, et, Vt) => {
+   40819: (uu, Eu, ju) => {
```

#### 25. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L163)

```diff
-       d: () => gt
+       e: () => nu
```

#### 26. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L165-L187` → after: `L165-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L165-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L165-L187) · [Before (L165-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L165-L187)

```diff
-     var Ot = Vt(26),
-       qt = Vt(31),
-       Dt = Vt(4376),
-       mt = Vt(377),
-       dt = Vt(1732),
-       jt = Vt(8390),
-       Ht = Vt(4392),
-       Xt = Vt(8919),
-       Qt = Vt(8414),
-       lt = Vt(8397),
-       Et = Vt(8420),
-       ft = Vt(1492),
-       wt = Vt(1779),
-       yt = Vt(8426),
-       Nt = Vt(8861),
-       Mt = Vt(9037),
- ... (7 more removed lines; see GitHub link above)
+     var su = ju(22),
+       Uu = ju(24),
+       Zu = ju(4452),
+       Xu = ju(337),
+       lu = ju(1687),
+       qu = ju(8398),
+       fu = ju(4460),
+       Cu = ju(8922),
+       bu = ju(8437),
+       cu = ju(8411),
+       Nu = ju(8443),
+       Ou = ju(1443),
+       Yu = ju(1727),
+       hu = ju(8447),
+       Du = ju(8876),
+       gu = ju(9015),
+ ... (7 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L227)

```diff
-         const Vt = new vt.b,
+         const ju = new du.e,
```

#### 28. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L270-L272` → after: `L270-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L270-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L270-L272) · [Before (L270-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L270-L272)

```diff
-             const Et = (0, Kt.m)(tt.contextActionInputs()),
-               ft = null !== (lt = Et[0]) && void 0 !== lt ? lt : ct;
-             (0, ht.e)((0, Kt.g)(ft) ? ft : null);
+             const Nu = (0, wu.g)(uu.contextActionInputs()),
+               Ou = null !== (cu = Nu[0]) && void 0 !== cu ? cu : ou;
+             (0, Ju.e)((0, wu.e)(Ou) ? Ou : null);
```

#### 29. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L274)

```diff
-             (0, ht.h)(wt);
+             (0, Ju.g)(Yu);
```

#### 30. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L278)

```diff
-               "tap" === tt ? Dt(mt, ft, [yt], Ht) : "hold" === tt && (Qt.c.consumeButton(yt), qt.j.sw(Jt.i, Et))
+               "tap" === uu ? Zu(Xu, Ou, [hu], fu) : "hold" === uu && (bu.d.consumeButton(hu), Uu.h.TY(eu.l, Nu))
```

#### 31. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L280)

```diff
-             et && Ht - et.atMs >= 40 && !et.heldBy.some((tt => (0, ut.J)(dt.frame.values, tt))) && Ot()
+             Eu && fu - Eu.atMs >= 40 && !Eu.heldBy.some((uu => (0, pu.L)(lu.frame.values, uu))) && su()
```

#### 32. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L286)

```diff
-             Vt.release(), Ot(), (0, ht.e)(null), (0, ht.h)(!1)
+             ju.release(), su(), (0, Ju.e)(null), (0, Ju.g)(!1)
```

#### 33. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L290-L291` → after: `L290-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L290-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L290-L299) · [Before (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L290-L291)

```diff
-     var It = Vt(8375);
-     var Pt = Vt(40741),
+     var mu = ju(8378);
+     var vu = ju(40815),
+       Ku = ju(8973),
+       Vu = ju(8430),
+       ru = ju(9047);
+     var Qu = ju(40810),
+       iu = ju(9056),
+       Wu = ju(40826),
+       Su = ju(9034),
+       Iu = ju(8977),
```

#### 34. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L293-L305` → after: `L301-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L301-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L301-L305) · [Before (L293-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L293-L305)

```diff
-       Lt = Vt(8411),
-       Ft = Vt(9065);
-     var kt = Vt(40735),
-       Gt = Vt(9068),
-       zt = Vt(40752),
-       ot = Vt(9052),
-       rt = Vt(8982),
-       Ut = Vt(8989),
-       At = Vt(8998),
-       it = Vt(8868),
-       Yt = Vt(8943);
-     const Bt = () => it.b[(0, lt.i)().tapHoldTime].wheelMs,
-       pt = () => ((0, Xt.c)(), (0, Yt.b)("controllerMenuKey")),
+       Bu = ju(8988),
+       Lu = ju(8881),
+       tu = ju(8944);
+     const xu = () => Lu.b[(0, cu.f)().tapHoldTime].wheelMs,
+       Tu = () => ((0, Cu.d)(), (0, tu.b)("controllerMenuKey")),
```

#### 35. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L336)

```diff
-           Ct = qt.j.subscribe("appManagerUpdated|activeInputDevice", (et => {
+           Gu = Uu.h.subscribe("appManagerUpdated|activeInputDevice", (Eu => {
```

#### 36. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L342)

```diff
-           Kt = null, (0, rt.d)(null)
+           wu = null, (0, Iu.g)(null)
```

#### 37. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L347-L348` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L347-L348) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L347-L348)

```diff
-           st = new vt.b,
-           nt = new vt.b,
+           yu = new du.e,
+           zu = new du.e,
```

#### 38. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L350)

```diff
-           ee = qt.j.subscribe(Jt.l, (et => {
+           uE = Uu.h.subscribe(eu.n, (Eu => {
```

#### 39. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L362-L364` → after: `L362-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L362-L364) · [Before (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L362-L364)

```diff
-         const de = (0, Nt.c)(ut._),
-           je = (0, Nt.c)(ut._),
-           He = new vt.b;
+         const XE = (0, Du.b)(pu.eb),
+           lE = (0, Du.b)(pu.eb),
+           qE = new du.e;
```

#### 40. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L367)

```diff
-             de.reset(), je.reset(), He.release(), (0, At.d)(!1), gt.release(), Ve.cancel(), (0, Ut.h)(!1), Oe.cancel(), te.release(), st.release(), nt.release(), St()
+             XE.reset(), lE.reset(), qE.release(), (0, Bu.e)(!1), nu.release(), EE.cancel(), (0, Fu.h)(!1), jE.cancel(), Ru.release(), yu.release(), zu.release(), Pu()
```

#### 41. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L387-L388` → after: `L387-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L387-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L387-L388) · [Before (L387-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L387-L388)

```diff
-             const dt = (0, lt.i)(),
-               Ht = (0, kt.e)(qt, dt.moveDeadzone),
+             const lu = (0, cu.f)(),
+               fu = (0, Qu.h)(Uu, lu.moveDeadzone),
```

#### 42. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L390)

```diff
-             Vt = (0, kt.l)(Vt, {
+             ju = (0, Qu.v)(ju, {
```

#### 43. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L411)

```diff
-             if ("off" === (0, lt.i)().quickChat) return void(tt.wasPressed(Vt) && (Qt.c.consumeButton(Vt), qt.j.sw(Zt.b)));
+             if ("off" === (0, cu.f)().quickChat) return void(uu.wasPressed(ju) && (bu.d.consumeButton(ju), Uu.h.TY(Ku.e)));
```

#### 44. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L413)

```diff
-             "tap" === Ot || "hold" === Ot && null === (0, wt.d)() ? qt.j.sw(Zt.b) : "hold" === Ot && (Qt.c.consumeButton(Vt), qt.j.sw(bt.j))
+             "tap" === su || "hold" === su && null === (0, Yu.c)() ? Uu.h.TY(Ku.e) : "hold" === su && (bu.d.consumeButton(ju), Uu.h.TY(Mu.k))
```

#### 45. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L417)

```diff
-               const Vt = (0, Mt.d)(),
+               const ju = (0, gu.e)(),
```

#### 46. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L419)

```diff
-               if ("wheel" === (0, lt.i)().emoteButton) return tt.wasPressed(Ot) && (Qt.c.consumeButton(Ot), qt.j.sw("requestEmoteWheelPadOpen", !0)), (0, Mt.d)() !== Vt;
+               if ("wheel" === (0, cu.f)().emoteButton) return uu.wasPressed(su) && (bu.d.consumeButton(su), Uu.h.TY("requestEmoteWheelPadOpen", !0)), (0, gu.e)() !== ju;
```

#### 47. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L421-L424` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L421-L424) · [Before (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L421-L424)

```diff
-               return "tap" === Dt ? qt.j.sw("requestEmoteRepeatLast") : "hold" === Dt && (Qt.c.consumeButton(Ot), qt.j.sw("requestEmoteWheelPadOpen", !1)), (0, Mt.d)() !== Vt
-             })(et, Vt) || we(et, Vt), et.wasPressed((0, jt.i)("inventory")) && (Qt.c.consumeButton((0, jt.i)("inventory")), (0, dt.C)(pt(), "inventory", tt.hasFullInventory())), et.wasPressed((0, jt.i)("pause")) && (Qt.c.consumeButton((0, jt.i)("pause")), (0, Ht.b)() === mt.o.SOC … [truncated]
-               if ("shop" === (0, Lt.b)()) return qt.j.sw(Ft.j), void(0, dt.y)(tt, mt.o.SHOP, !0);
-               (0, dt.y)(tt, mt.o.LOBBY_LEADERBOARD, et)
+               return "tap" === Zu ? Uu.h.TY("requestEmoteRepeatLast") : "hold" === Zu && (bu.d.consumeButton(su), Uu.h.TY("requestEmoteWheelPadOpen", !1)), (0, gu.e)() !== ju
+             })(Eu, ju) || OE(Eu, ju), Eu.wasPressed((0, qu.i)("inventory")) && (bu.d.consumeButton((0, qu.i)("inventory")), (0, lu.z)(Tu(), "inventory", uu.hasFullInventory())), Eu.wasPressed((0, qu.i)("pause")) && (bu.d.consumeButton((0, qu.i)("pause")), (0, fu.e)() === Xu.o.SOC … [truncated]
+               if ("shop" === (0, Vu.c)()) return Uu.h.TY(ru.k), void(0, lu.x)(uu, Xu.o.SHOP, !0);
+               (0, lu.x)(uu, Xu.o.LOBBY_LEADERBOARD, Eu)
```

#### 48. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L432)

```diff
-               qt && !Ve.isLatched() && (ct = tt.targetsBlock()), Ve.update(qt, et.isHeld(Ot), Vt, "toggle" === (0, lt.i)().attackMode), Ve.isLatched() && ct ? Yt.update(tt.targetsBlock(), Vt) && Ve.unlatch() : Yt.reset(), (0, Ut.h)(Ve.isLatched())
+               Uu && !EE.isLatched() && (ou = uu.targetsBlock()), EE.update(Uu, Eu.isHeld(su), ju, "toggle" === (0, cu.f)().attackMode), EE.isLatched() && ou ? tu.update(uu.targetsBlock(), ju) && EE.unlatch() : tu.reset(), (0, Fu.h)(EE.isLatched())
```

#### 49. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L437` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L437) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L437)

```diff
-               (0, At.d)(mt && !Xe && tt.targetsBlock());
+               (0, Bu.e)(Xu && !fE && uu.targetsBlock());
```

#### 50. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L439)

```diff
-                 Vt.pickBlock() && (Xe = !0, (0, At.d)(!1))
+                 ju.pickBlock() && (fE = !0, (0, Bu.e)(!1))
```

#### 51. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L448-L449` → after: `L448-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L448-L449) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L448-L449)

```diff
-                 const tt = (0, lt.i)();
-                 "off" !== tt.buttonRepeat && (Kt = Ot, ht = it.b[tt.tapHoldTime].dropStackMs, (0, rt.d)(ht))
+                 const uu = (0, cu.f)();
+                 "off" !== uu.buttonRepeat && (wu = su, Ju = Lu.b[uu.tapHoldTime].dropStackMs, (0, Iu.g)(Ju))
```

#### 52. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L454)

```diff
-           ae = Qt.c.register({
+           DE = bu.d.register({
```

#### 53. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L457-L459` → after: `L457-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L457-L459) · [Before (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L457-L459)

```diff
-               const et = qe && "keyboardMouse" === Ot.b.get("activeInputDevice") && !(0, Et.H)(),
-                 Vt = (0, Et.k)() ? [Pt.c] : [];
-               return ((0, Et.k)() || et) && (0, yt.e)(Vt) && tt.hasPlayer()
+               const Eu = sE && "keyboardMouse" === su.d.get("activeInputDevice") && !(0, Nu.F)(),
+                 ju = (0, Nu.l)() ? [vu.d] : [];
+               return ((0, Nu.l)() || Eu) && (0, hu.h)(ju) && uu.hasPlayer()
```

#### 54. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L463-L466` → after: `L463-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L463-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L463-L466) · [Before (L463-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L463-L466)

```diff
-                 Vt = (0, lt.i)(),
-                 Ot = (0, kt.o)(tt, (0, kt.h)(Vt, (0, jt.i)("pause"), (0, Gt.c)().isSupported())),
-                 qt = (0, kt.f)(Ot, Vt.swapSticks);
-               return (0, Et.k)() ? (De = !1, (0, yt.e)() ? (me = !1, gt.update(qt.look, Vt, Ot.isHeld((0, jt.i)("use"))), fe(Ot, qt.move, et), void Ne(Ot, et)) : (me || (me = !0, Xt.lostToPadScreen(), le()), void we(Ot, et))) : (De || (Qe(), De = !0), void fe(Ot, qt.move, et))
+                 ju = (0, cu.f)(),
+                 su = (0, Qu.z)(uu, (0, Qu.l)(ju, (0, qu.i)("pause"), (0, iu.b)().isSupported())),
+                 Uu = (0, Qu.k)(su, ju.swapSticks);
+               return (0, Nu.l)() ? (UE = !1, (0, hu.h)() ? (ZE = !1, nu.update(Uu.look, ju, su.isHeld((0, qu.i)("use"))), NE(su, Uu.move, Eu), void hE(su, Eu)) : (ZE || (ZE = !0, Cu.lostToPadScreen(), bE()), void OE(su, Eu))) : (UE || (CE(), UE = !0), void NE(su, Uu.move, Eu))
```

#### 55. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L469)

```diff
-               (0, Et.k)() && Xt.lostToPadScreen(), le(tt)
+               (0, Nu.l)() && Cu.lostToPadScreen(), bE(uu)
```

#### 56. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L472)

```diff
-               (0, Et.k)() && (0, yt.e)(Pt.g) && tt.hasPlayer() ? fe(et, (0, kt.f)(et, (0, lt.i)().swapSticks).move, performance.now(), !0) : le()
+               (0, Nu.l)() && (0, hu.h)(vu.l) && uu.hasPlayer() ? NE(Eu, (0, Qu.k)(Eu, (0, cu.f)().swapSticks).move, performance.now(), !0) : bE()
```

#### 57. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L475)

```diff
-           Me = (0, Pt.d)(tt),
+           gE = (0, vu.h)(uu),
```

#### 58. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L477-L478` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L477-L478) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L477-L478)

```diff
-             const tt = qt.j.subscribe(It.d, (tt => {
-               !tt && (0, Et.k)() && "inGame" === Ot.b.get("gameState") && qt.j.sw("showBottomMessage", {
+             const uu = Uu.h.subscribe(mu.c, (uu => {
+               !uu && (0, Nu.l)() && "inGame" === su.d.get("gameState") && Uu.h.TY("showBottomMessage", {
```

#### 59. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L487)

```diff
-               qt.j.unsubscribe(tt)
+               Uu.h.unsubscribe(uu)
```

#### 60. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L491)

```diff
-           le(), tt.uninstall(), (0, ot.d)(!1), (0, At.d)(!1), qt.j.unsubscribe(Ct), qt.j.unsubscribe(ee), ae(), Me(), be(), gt.uninstall()
+           bE(), uu.uninstall(), (0, Su.g)(!1), (0, Bu.e)(!1), Uu.h.unsubscribe(Gu), Uu.h.unsubscribe(uE), DE(), gE(), ME(), nu.uninstall()
```

#### 61. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L495)

```diff
-   40741: (tt, et, Vt) => {
+   40815: (uu, Eu, ju) => {
```

#### 62. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L499` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L498-L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L499)

```diff
-       g: () => Et
+       h: () => hu,
+       l: () => Nu
```

#### 63. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L501-L509` → after: `L501-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L501-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L501-L509) · [Before (L501-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L501-L509)

```diff
-     var Ot = Vt(1387),
-       qt = Vt(4376),
-       Dt = Vt(9023),
-       mt = Vt(37155),
-       dt = Vt(1820),
-       jt = Vt(1277),
-       Ht = Vt(8426),
-       Xt = Vt(8929),
-       Qt = Vt(9039);
+     var su = ju(1343),
+       Uu = ju(4452),
+       Zu = ju(8997),
+       Xu = ju(37322),
+       lu = ju(1767),
+       qu = ju(1236),
+       fu = ju(8447),
+       Cu = ju(8933),
+       bu = ju(9017);
```

#### 64. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L511-L512` → after: `L511-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L511-L512) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L511-L512)

```diff
-         emoteWheel: Dt.e,
-         quickChatWheel: Xt.b,
+         emoteWheel: Zu.h,
+         quickChatWheel: Cu.d,
```

#### 65. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L517)

```diff
-       wt = tt => (0, Ot.k)().includes(tt),
+       Yu = uu => (0, su.p)().includes(uu),
```

#### 66. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L519` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L519) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L519)

```diff
-         const et = [(0, Ht.i)(ft, (() => tt.hasPlayer() && tt.isPlayerDead())), (0, Ht.i)("sleeping", (() => wt(mt.f))), (0, Ht.i)("turnstile", (() => wt(jt.h))), (0, Ht.i)("videoAd", dt.h), (0, Ht.i)("replay", (() => (0, qt.e)() || tt.isReplayMode())), (0, Ht.i)("freeCamera", (( … [truncated]
+         const Eu = [(0, fu.p)(Ou, (() => uu.hasPlayer() && uu.isPlayerDead())), (0, fu.p)("sleeping", (() => Yu(Xu.c))), (0, fu.p)("turnstile", (() => Yu(qu.d))), (0, fu.p)("videoAd", lu.d), (0, fu.p)("replay", (() => (0, Uu.f)() || uu.isReplayMode())), (0, fu.p)("freeCamera", (( … [truncated]
```

#### 67. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L521)

```diff
-           return (0, Ht.i)(et, Vt)
+           return (0, fu.p)(Eu, ju)
```

#### 68. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L528)

```diff
-   40735: (tt, et, Vt) => {
+   40810: (uu, Eu, ju) => {
```

#### 69. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L537` → after: `L534-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L534-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L534-L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L537)

```diff
-       o: () => Qt
+       o: () => Xu,
+       r: () => Zu,
+       v: () => fu,
+       z: () => bu
```

#### 70. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L539)

```diff
-     var Ot = Vt(8377);
+     var su = ju(8383);
```

#### 71. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L545)

```diff
-         const qt = (0, Ot.k)(tt, et.lookDeadzone);
+         const Uu = (0, su.i)(uu, Eu.lookDeadzone);
```

#### 72. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L564` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L564) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L564)

```diff
-             const Dt = (0, Ot.i)((0, Ot.k)(tt, et.lookDeadzone), et.lookCurve),
+             const Zu = (0, su.f)((0, su.i)(uu, Eu.lookDeadzone), Eu.lookCurve),
```

#### 73. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L581-L582)

```diff
-           JR: tt.yawRadPerSec * Vt,
-           uR: tt.pitchRadPerSec * Vt
+           hK: uu.yawRadPerSec * ju,
+           VK: uu.pitchRadPerSec * ju
```

#### 74. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L593)

```diff
-         const Vt = (0, Ot.k)(tt, et),
+         const ju = (0, su.i)(uu, Eu),
```

#### 75. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L610)

```diff
-         const mt = Vt ? Dt : tt.latchedAtMs,
+         const Xu = ju ? Zu : uu.latchedAtMs,
```

#### 76. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L639` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L639) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L639)

```diff
-   40752: (tt, et, Vt) => {
+   40826: (uu, Eu, ju) => {
```

#### 77. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L659)

```diff
-         toggled: qt ? !dt : dt
+         toggled: Uu ? !lu : lu
```

#### 78. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L662)

```diff
-         toggled: Ot || qt ? !dt : dt
+         toggled: su || Uu ? !lu : lu
```

#### 79. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L686-L687` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L686-L687) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L686-L687)

```diff
-   40724: (tt, et, Vt) => {
-     Vt(9068)
+   40798: (uu, Eu, ju) => {
+     ju(9056)
```

#### 80. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L689)

```diff
-   40730: (tt, et, Vt) => {
+   40806: (uu, Eu, ju) => {
```

#### 81. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L691)

```diff
-       b: () => bt
+       d: () => Mu
```

#### 82. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L693-L704` → after: `L693-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L693-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L693-L704) · [Before (L693-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L693-L704)

```diff
-     var Ot = Vt(31),
-       qt = Vt(9023),
-       Dt = Vt(9035),
-       mt = Vt(8390),
-       dt = Vt(8414),
-       jt = Vt(8397),
-       Ht = Vt(40735),
-       Xt = Vt(40741),
-       Qt = Vt(8426),
-       lt = Vt(8377),
-       Et = Vt(8929),
-       ft = Vt(9039);
+     var su = ju(24),
+       Uu = ju(8997),
+       Zu = ju(9013),
+       Xu = ju(8398),
+       lu = ju(8437),
+       qu = ju(8411),
+       fu = ju(40810),
+       Cu = ju(40815),
+       bu = ju(8447),
+       cu = ju(8383),
+       Nu = ju(8933),
+       Ou = ju(9017);
```

#### 83. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L706)

```diff
-         isOpen: qt.h,
+         isOpen: Uu.i,
```

#### 84. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L709)

```diff
-           Ot.j.sw("emoteWheelPadAim", tt)
+           su.h.TY("emoteWheelPadAim", uu)
```

#### 85. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L712)

```diff
-           Ot.j.sw("requestEmoteWheelPadCommit", tt)
+           su.h.TY("requestEmoteWheelPadCommit", uu)
```

#### 86. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L715)

```diff
-           Ot.j.sw("requestEmoteWheelClose")
+           su.h.TY("requestEmoteWheelClose")
```

#### 87. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L718` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L718) · [Before (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L718)

```diff
-         isOpen: Et.b,
+         isOpen: Nu.d,
```

#### 88. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L721)

```diff
-           Ot.j.sw(Et.d, tt)
+           su.h.TY(Nu.f, uu)
```

#### 89. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L724)

```diff
-           Ot.j.sw(Et.g, tt)
+           su.h.TY(Nu.h, uu)
```

#### 90. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L727)

```diff
-           Ot.j.sw(Et.e)
+           su.h.TY(Nu.g)
```

#### 91. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L729)

```diff
-         keptOpenBy: [Xt.c]
+         keptOpenBy: [Cu.d]
```

#### 92. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L734` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L734) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L734)

```diff
-           Ot.j.sw(ft.d, tt)
+           su.h.TY(Ou.e, uu)
```

#### 93. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L737` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L737) · [Before (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L737)

```diff
-           Ot.j.sw(ft.h, tt)
+           su.h.TY(Ou.h, uu)
```

#### 94. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L740)

```diff
-           Ot.j.sw(ft.g)
+           su.h.TY(Ou.f)
```

#### 95. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L745)

```diff
-         return null !== (tt = wt.find((tt => tt.isOpen()))) && void 0 !== tt ? tt : null
+         return null !== (uu = Yu.find((uu => uu.isOpen()))) && void 0 !== uu ? uu : null
```

#### 96. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L747-L748` → after: `L747-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L747-L748) · [Before (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L747-L748)

```diff
-       Nt = tt => (0, mt.O)(tt.openButton()),
-       Mt = (tt, et) => !(0, lt.J)(tt.frame.values, et),
+       Du = uu => (0, Xu.G)(uu.openButton()),
+       gu = (uu, Eu) => !(0, cu.L)(uu.frame.values, Eu),
```

#### 97. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L753)

```diff
-         return dt.c.register({
+         return lu.d.register({
```

#### 98. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L760) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L760)

```diff
-               stick: (0, jt.i)().swapSticks ? "right" : "left"
+               stick: (0, qu.f)().swapSticks ? "right" : "left"
```

#### 99. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L767)

```diff
-             if (null !== (0, Qt.d)([...Xt.g, ...null !== (qt = lt.keptOpenBy) && void 0 !== qt ? qt : []])) return void lt.close();
+             if (null !== (0, bu.d)([...Cu.l, ...null !== (Uu = cu.keptOpenBy) && void 0 !== Uu ? Uu : []])) return void cu.close();
```

#### 100. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L769` → after: `L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L769) · [Before (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L769)

```diff
-               ft = (0, Ht.f)(Ot.frame, (0, jt.i)().swapSticks),
+               Ou = (0, fu.k)(su.frame, (0, qu.f)().swapSticks),
```

#### 101. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L771)

```diff
-             tt !== lt ? (tt = lt, et = !Mt(Ot, Et) || Math.hypot(wt.x, wt.y) >= Dt.B, Vt = !1) : Vt && (Vt = !1, Mt(Ot, Et) && (et = !1)), lt.aim(wt);
+             uu !== cu ? (uu = cu, Eu = !gu(su, Nu) || Math.hypot(Yu.x, Yu.y) >= Zu.w, ju = !1) : ju && (ju = !1, gu(su, Nu) && (Eu = !1)), cu.aim(Yu);
```

#### 102. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/229.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/229.js#L774)

```diff
-             return Ot.wasPressed(Jt) ? (dt.c.consumeButton(Jt), void lt.close()) : Ot.wasPressed(bt) || Ot.wasPressed(Et) ? (dt.c.consumeButton(bt), dt.c.consumeButton(Et), void lt.commit(!1)) : void(et && Mt(Ot, Et) && (et = !1, lt.commit(!0)))
+             return su.wasPressed(eu) ? (lu.d.consumeButton(eu), void cu.close()) : su.wasPressed(Mu) || su.wasPressed(Nu) ? (lu.d.consumeButton(Mu), lu.d.consumeButton(Nu), void cu.commit(!1)) : void(Eu && gu(su, Nu) && (Eu = !1, cu.commit(!0)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (111 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L4)

```diff
-   38690: (tt, et, Vt) => {
+   38795: (uu, Eu, ju) => {
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L6)

```diff
-       c: () => ft
+       b: () => Ou
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L8-L9)

```diff
-     var Ot = Vt(229),
-       qt = Vt(37917);
+     var su = ju(202),
+       Uu = ju(38043);
```

#### 4. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L23-L24)

```diff
-         Sd: .5,
-         VVt: !1
+         pl: .5,
+         vEu: !1
```

#### 5. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L37-L38` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L37-L38) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L37-L38)

```diff
-         Sd: .5,
-         VVt: !1
+         pl: .5,
+         vEu: !1
```

#### 6. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L42-L43` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L42-L43) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L42-L43)

```diff
-           width: Ot.e.iy,
-           height: Ot.e.Yy
+           width: su.e.Sh,
+           height: su.e.Ih
```

#### 7. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L46-L47)

```diff
-           width: Ot.e.iy + .4,
-           height: Ot.e.Yy + .6
+           width: su.e.Sh + .4,
+           height: su.e.Ih + .6
```

#### 8. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L49-L52` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L49-L52) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L49-L52)

```diff
-         eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
-         rideHeight: Ot.e.Yy - .3,
-         Sd: .5,
-         VVt: !1
+         eyeHeight: su.e.Ih * su.e.playerEyeToHeightRatio,
+         rideHeight: su.e.Ih - .3,
+         pl: .5,
+         vEu: !1
```

#### 9. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L65-L66)

```diff
-         Sd: .5,
-         VVt: !1
+         pl: .5,
+         vEu: !1
```

#### 10. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L79-L80` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L79-L80) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L79-L80)

```diff
-         Sd: .5,
-         VVt: !1
+         pl: .5,
+         vEu: !1
```

#### 11. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L93-L94)

```diff
-         Sd: .5,
-         VVt: !1
+         pl: .5,
+         vEu: !1
```

#### 12. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L107-L108)

```diff
-         Sd: .5,
-         VVt: !1
+         pl: .5,
+         vEu: !1
```

#### 13. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L114-L115` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L114-L115) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L114-L115)

```diff
-             width: Ot.e.iy,
-             height: Ot.e.Yy
+             width: su.e.Sh,
+             height: su.e.Ih
```

#### 14. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L118-L119)

```diff
-             width: Ot.e.iy + .4,
-             height: Ot.e.Yy + .6
+             width: su.e.Sh + .4,
+             height: su.e.Ih + .6
```

#### 15. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L121-L124` → after: `L121-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L121-L124) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L121-L124)

```diff
-           eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
-           rideHeight: Ot.e.Yy - .1,
-           Sd: qt.d.Sd,
-           VVt: !0
+           eyeHeight: su.e.Ih * su.e.playerEyeToHeightRatio,
+           rideHeight: su.e.Ih - .1,
+           pl: Uu.d.pl,
+           vEu: !0
```

#### 16. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L140-L141)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 17. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L154-L155` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L154-L155) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L154-L155)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 18. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L168-L169` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L168-L169) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L168-L169)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 19. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L182-L183` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L182-L183) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L182-L183)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 20. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L197-L198` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L197-L198) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L197-L198)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 21. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L211-L212)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 22. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L228-L229` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L228-L229) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L228-L229)

```diff
-             width: Ot.e.iy,
-             height: Ot.e.Yy
+             width: su.e.Sh,
+             height: su.e.Ih
```

#### 23. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L232)

```diff
-             width: Ot.e.iy + .4,
+             width: su.e.Sh + .4,
```

#### 24. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L237-L238)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 25. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L253-L254)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 26. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L268-L269)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 27. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L283-L284` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L283-L284) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L283-L284)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 28. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L304-L305` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L304-L305) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L304-L305)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 29. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L319-L320` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L319-L320) · [Before (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L319-L320)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 30. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L333-L334` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L333-L334) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L333-L334)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 31. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L338-L339)

```diff
-             width: Ot.e.iy,
-             height: Ot.e.Yy
+             width: su.e.Sh,
+             height: su.e.Ih
```

#### 32. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L342-L343` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L342-L343) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L342-L343)

```diff
-             width: Ot.e.iy + .4,
-             height: Ot.e.Yy + .6
+             width: su.e.Sh + .4,
+             height: su.e.Ih + .6
```

#### 33. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L345-L348` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L345-L348) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L345-L348)

```diff
-           eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
-           rideHeight: Ot.e.Yy - .1,
-           Sd: .5,
-           VVt: !1
+           eyeHeight: su.e.Ih * su.e.playerEyeToHeightRatio,
+           rideHeight: su.e.Ih - .1,
+           pl: .5,
+           vEu: !1
```

#### 34. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L361-L362` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L361-L362) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L361-L362)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 35. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L366-L367` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L366-L367) · [Before (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L366-L367)

```diff
-             width: Ot.e.iy,
-             height: Ot.e.Yy
+             width: su.e.Sh,
+             height: su.e.Ih
```

#### 36. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L370-L371` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L370-L371) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L370-L371)

```diff
-             width: Ot.e.iy + .4,
-             height: Ot.e.Yy + .6
+             width: su.e.Sh + .4,
+             height: su.e.Ih + .6
```

#### 37. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L373-L376` → after: `L373-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L373-L376) · [Before (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L373-L376)

```diff
-           eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
-           rideHeight: Ot.e.Yy - .1,
-           Sd: .5,
-           VVt: !1
+           eyeHeight: su.e.Ih * su.e.playerEyeToHeightRatio,
+           rideHeight: su.e.Ih - .1,
+           pl: .5,
+           vEu: !1
```

#### 38. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L389-L390` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L389-L390) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L389-L390)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 39. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L403-L404` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L403-L404) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L403-L404)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 40. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L417-L418` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L417-L418) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L417-L418)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 41. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L431-L432` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L431-L432) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L431-L432)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 42. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L445-L446)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 43. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L459-L460)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 44. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L473-L474` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L473-L474) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L473-L474)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 45. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L487-L488` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L487-L488) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L487-L488)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 46. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L510-L511` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L510-L511) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L510-L511)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 47. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L524-L525` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L524-L525) · [Before (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L524-L525)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 48. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L538-L539` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L538-L539) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L538-L539)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 49. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L552-L553` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L552-L553) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L552-L553)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 50. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L566-L567` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L566-L567) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L566-L567)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 51. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L581-L582)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 52. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L604-L605` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L604-L605) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L604-L605)

```diff
-           Sd: .5,
-           VVt: !1
+           pl: .5,
+           vEu: !1
```

#### 53. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L613)

```diff
-   37306: (tt, et, Vt) => {
+   37467: (uu, Eu, ju) => {
```

#### 54. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L777)

```diff
-   37922: (tt, et, Vt) => {
+   38048: (uu, Eu, ju) => {
```

#### 55. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L779)

```diff
-       b: () => mt
+       d: () => Xu
```

#### 56. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L781)

```diff
-     var Ot = Vt(404),
+     var su = ju(366),
```

#### 57. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L783)

```diff
-       Dt = Vt(1993);
+       Zu = ju(1955);
```

#### 58. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L786)

```diff
-     const yt = [0, 1, 8, 255, "length", 46, 69, 3, 242, "e", "undefined", void 0, 177, "d", "c", 96, 63, 6, "fromCodePoint", 7, 12, "push", "a", 91, 8191, 88, 13, 14, 2, 9, "g", 5, "f", 82, 152, 93, 149, 16, 4, "6", 512, "b", 20, 90, 106, 162, 15, 232, 10, 187, 202, 28, 1023, 127 … [truncated]
+     const hu = [103, 0, 1, 8, 3, "a", 9, 7, "e", 6, 4, 255, "length", 177, 201, 2, 156, "undefined", void 0, 140, 131, 63, "fromCodePoint", 12, "push", 209, 171, "b", 91, 5, "f", 8191, 88, 13, 14, 41, "c", 92, 240, 35, 228, 205, 102, "d", !1, !0, 44, 223, "h", 87, 52, "g", 93, 24 … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L789-L794` → after: `L789-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L789-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L789-L792) · [Before (L789-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L789-L794)

```diff
-       return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(tt) {
-         var et, Vt, Ot, qt, Dt, mt, dt;
-         for (ct(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = yt[0], Dt = yt[0], mt = -yt[1]), dt = yt[0]; dt < Vt; dt++) {
-           var jt = ':18u*p2ANcX3?(G0&x>Z~F@J[=]^Wz$IaDK<fjV#tBk.e`/qhvwi};54brOolELm%"U,HQC6RYn{|gPd+TsM!y)S79_'.indexOf(et[dt]);
-           if (jt !== -yt[1])
-             if (mt < yt[0]) mt = jt;
+       return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = function(...uu) {
+         for (ou(uu[hu[12]] = hu[2], uu[hu[5]] = 'wnpEJZUfC.8+L=:c"7Y$BI%Rz`X5bWygV,<T6/3A[Pj{t1D0qx|&;OFosN(4@_Ki*^vH!>S)m9GM}?#ud]h~Qerlka2', uu[-hu[0]] = "" + (uu[hu[1]] || ""), uu[hu[4]] = uu[-hu[0]].length, uu[hu[10]] = [], uu[hu[8]] = hu[1], uu[hu[9]] = hu[1], uu[hu[7]] = -h … [truncated]
+           if (uu[hu[6]] = uu[hu[5]].indexOf(uu[-hu[0]][uu[hu[3]]]), uu[hu[6]] !== -hu[2])
+             if (uu[hu[7]] < hu[1]) uu[hu[7]] = uu[hu[6]];
```

#### 60. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L796` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L794) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L796)

```diff
-               ct(mt += jt * yt[23], qt |= mt << Dt, Dt += (mt & yt[24]) > yt[25] ? yt[26] : yt[27]);
+               ou(uu[hu[7]] += uu[hu[6]] * hu[28], uu[hu[8]] |= uu[hu[7]] << uu[hu[9]], uu[hu[9]] += (uu[hu[7]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
```

#### 61. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L798-L804` → after: `L796-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L796-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L796-L800) · [Before (L798-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L798-L804)

```diff
-                 ct(Ot.push(qt & yt[3]), qt >>= yt[2], Dt -= yt[2])
-               } while (Dt > yt[19]);
-               mt = -yt[1]
-             }
-         }
-         return mt > -yt[1] && Ot.push((qt | mt << Dt) & yt[3]), Mt(Ot)
-       }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
+                 ou(uu[hu[10]].push(uu[hu[8]] & hu[11]), uu[hu[8]] >>= hu[3], uu[hu[9]] -= hu[3])
+               } while (uu[hu[9]] > hu[7]);
+               uu[hu[7]] = -hu[2]
+             } return uu[hu[7]] > -hu[2] && uu[hu[10]].push((uu[hu[8]] | uu[hu[7]] << uu[hu[9]]) & hu[11]), gu(uu[hu[10]])
+       }(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
```

#### 62. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L808` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L804) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L808)

```diff
-       return tt[yt[4]] = yt[1], typeof Xt !== yt[10] && Xt ? (new Xt).decode(new Qt(tt[yt[0]])) : typeof lt !== yt[10] && lt ? lt.from(tt[yt[0]]).toString("utf-8") : wt(tt[yt[0]])
+       return uu[hu[12]] = hu[2], typeof Cu !== hu[17] && Cu ? (new Cu).decode(new bu(uu[hu[1]])) : typeof cu !== hu[17] && cu ? cu.from(uu[hu[1]]).toString("utf-8") : Yu(uu[hu[1]])
```

#### 63. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L812-L813` → after: `L808-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L808-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L808-L809) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L812-L813)

```diff
-     ct(dt = {}, jt = ["0vYaEg%>`3?RIsX", 'w`EA;i}OIm6<yljjwK/Iy6}no"DQKGoz', '{"fIRfk}J%]O_Tz<?>^a@V:', '[c)Wl!Yzo"|+*hE<26T5Vjx=D0^u=*7z`?ZaBE:kdmXRP]JB:502[}yzD?LW1', "ouA})PzqoNhIT+Tt_;(Iv#s?|3b=9+1IbcB{`ggQ3oR*XjbKLWB2/sCH|LV", "|Ksat+P>HZ", "h]Q4,dAZ+;*JA]V>>cRv*/i19G9,WR1.a … [truncated]
-       ct(tt[yt[4]] = yt[0], tt[yt[8]] = [function() {
+     ou(lu = {}, qu = ['^FhZs<+`E@}n5|r"ugc.s@ZnisU.7mW6`VE', "m!{8X}LSGK2G>qf3XDyJ`0tYlBVu50d5aO~W&Dd<#+`oESf$4)gxA9~n", "JiUoe1,Wa7Juc)q<fYWgVT]f2+gfJ5h5D!c}@@w", '?4+G@@3(HN[9#:dXCWUf;DU*zBP}P`KT"FNU{hnlk(5f(]<z!bQZ', "o!dFxS[z]F;9(SUY*bvVjS>&9:m+h`JgFRo.a}T=3*xz#>>`,&R#k,In",  … [truncated]
+       ou(uu[hu[12]] = hu[1], uu[hu[15]] = [function() {
```

#### 64. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L821` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L817) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L821)

```diff
-       }], tt[yt[5]] = yt[11], tt[yt[6]] = []);
+       }], uu[-hu[13]] = hu[18], uu[hu[8]] = []);
```

#### 65. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L823` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L819) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L823)

```diff
-         ct(tt[yt[5]] = Object, tt[yt[6]][yt[21]]("".__proto__.constructor.name))
+         ou(uu[-hu[13]] = Object, uu[hu[8]][hu[24]]("".__proto__.constructor.name))
```

#### 66. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L825-L828` → after: `L821-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L821-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L821-L824) · [Before (L825-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L825-L828)

```diff
-       tt: for (tt[yt[7]] = yt[0]; tt[yt[7]] < tt[yt[8]][yt[4]]; tt[yt[7]]++) try {
-         for (tt[yt[5]] = tt[yt[8]][tt[yt[7]]](), tt[yt[9]] = yt[0]; tt[yt[9]] < tt[yt[6]][yt[4]]; tt[yt[9]]++)
-           if (typeof tt[yt[5]][tt[yt[6]][tt[yt[9]]]] === yt[10]) continue tt;
-         return tt[yt[5]]
+       uu: for (uu[hu[14]] = hu[1]; uu[hu[14]] < uu[hu[15]][hu[12]]; uu[hu[14]]++) try {
+         for (uu[-hu[13]] = uu[hu[15]][uu[hu[14]]](), uu[hu[16]] = hu[1]; uu[hu[16]] < uu[hu[8]][hu[12]]; uu[hu[16]]++)
+           if (typeof uu[-hu[13]][uu[hu[8]][uu[hu[16]]]] === hu[17]) continue uu;
+         return uu[-hu[13]]
```

#### 67. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L830-L832` → after: `L826-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L826-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L826-L828) · [Before (L830-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L830-L832)

```diff
-       return tt[yt[5]] || this
-     }() || {}, Xt = Ht.TextDecoder, Qt = Ht.Uint8Array, lt = Ht.mf, Et = Ht.String || String, ft = Ht.Array || Array, wt = function(...tt) {
-       return ct(tt[yt[4]] = yt[0], tt[yt[22]] = new ft(yt[55]), tt[yt[1]] = Et[yt[18]] || Et.fromCharCode, tt[-yt[12]] = []),
+       return uu[-hu[13]] || this
+     }() || {}, Cu = fu.TextDecoder, bu = fu.Uint8Array, cu = fu.qO, Nu = fu.String || String, Ou = fu.Array || Array, Yu = function(...uu) {
+       return ou(uu[hu[12]] = hu[1], uu[hu[25]] = new Ou(hu[70]), uu[-hu[26]] = Nu[hu[22]] || Nu.fromCharCode, uu[hu[15]] = []),
```

#### 68. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L834-L835` → after: `L830-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L830-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L830-L831) · [Before (L834-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L834-L835)

```diff
-           for (ct(et[yt[4]] = yt[1], et[yt[1]] = yt[11], et[yt[15]] = yt[11], et[yt[14]] = et[yt[0]][yt[4]], tt[-yt[12]][yt[4]] = yt[0]), et[yt[13]] = yt[0]; et[yt[13]] < et[yt[14]];) ct(et[yt[15]] = et[yt[0]][et[yt[13]]++], et[yt[15]] <= yt[53] ? et[yt[1]] = et[yt[15]] : et[yt[1 … [truncated]
-           return tt[-yt[12]].join("")
+           for (ou(Eu[hu[12]] = hu[2], Eu[hu[2]] = hu[18], Eu[hu[20]] = hu[18], Eu[hu[4]] = Eu[hu[1]][hu[12]], uu[hu[15]][hu[12]] = hu[1]), Eu[-hu[19]] = hu[1]; Eu[-hu[19]] < Eu[hu[4]];) ou(Eu[hu[20]] = Eu[hu[1]][Eu[-hu[19]]++], Eu[hu[20]] <= hu[69] ? Eu[hu[2]] = Eu[hu[20]] : Eu[h … [truncated]
+           return uu[hu[15]].join("")
```

#### 69. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L837-L844` → after: `L833-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L833-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L833-L858) · [Before (L837-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L837-L844)

```diff
-     }());
-     const Jt = qt()[Nt(yt[62])](),
-       Ct = qt()[Nt(yt[62])](),
-       ut = qt()[Nt(yt[62])](),
-       Kt = qt()[Nt(yt[62])](),
-       ht = qt()[Nt(yt[62])](),
-       vt = qt()[Nt(yt[62])](),
-       Wt = qt()[Nt(yt[62])](),
+     }()), Du(hu[89]) + hu[48] in Mu && function(...uu) {
+       function Eu(...uu) {
+         for (ou(uu[hu[12]] = hu[2], uu[hu[2]] = 'e"pM{sC/m)xou,HLTJngj:h7.cb0E&Bq634V;|91yIz^lS5=@N8Y%i#~aPDUAZv+[?XW$d<!]FrfG*`wKtkR_O2}(>Q', uu[hu[27]] = "" + (uu[hu[1]] || ""), uu[hu[4]] = uu[hu[27]].length, uu[-hu[35]] = [], uu[hu[29]] = hu[1], uu[hu[30]] = hu[1], uu[hu[7]] = … [truncated]
+           if (uu[hu[6]] = uu[hu[2]].indexOf(uu[hu[27]][uu[hu[3]]]), uu[hu[6]] !== -hu[2])
+             if (uu[hu[7]] < hu[1]) uu[hu[7]] = uu[hu[6]];
+             else {
+               ou(uu[hu[7]] += uu[hu[6]] * hu[28], uu[hu[29]] |= uu[hu[7]] << uu[hu[30]], uu[hu[30]] += (uu[hu[7]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
+               do {
+                 ou(uu[-hu[35]].push(uu[hu[29]] & hu[11]), uu[hu[29]] >>= hu[3], uu[hu[30]] -= hu[3])
+               } while (uu[hu[30]] > hu[7]);
+               uu[hu[7]] = -hu[2]
+             } return uu[hu[7]] > -hu[2] && uu[-hu[35]].push((uu[hu[29]] | uu[hu[7]] << uu[hu[30]]) & hu[11]), gu(uu[-hu[35]])
+       }
+ 
+       function ju(...uu) {
+         return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = Eu(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
+ ... (10 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L847-L850` → after: `L861-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L861-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L861-L864) · [Before (L847-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L847-L850)

```diff
-           return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(...tt) {
-             for (ct(tt[yt[4]] = yt[1], tt[yt[1]] = 'r1NH?A7v#nX^%!)jKTB/9,@fW:cu+O$&wVC2}{.(*G[Zga>oRDM]YPLslxF_ebqUmiy"~58;=Q|d<`403h6zpSJkEtI', tt[yt[28]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[28]].length, tt[yt[63]] = [], tt[yt[31]] = yt[0], tt[yt[17]] = yt[0], tt[yt[30] … [truncated]
-               if (tt[yt[65]] = tt[yt[1]].indexOf(tt[yt[28]][tt[yt[64]]]), tt[yt[65]] !== -yt[1])
-                 if (tt[yt[30]] < yt[0]) tt[yt[30]] = tt[yt[65]];
+           return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = function(...uu) {
+             for (ou(uu[hu[12]] = hu[2], uu[hu[39]] = 'gHLkcMBQ=Zxsrv*D7>695]a_0~,`u?Xj#z[@&./4+w^<2$ymI!b;3)T1WpVli}S"e:%|GUJtnfACPNKRhoEFYdOq8{(', uu[hu[15]] = "" + (uu[hu[1]] || ""), uu[hu[36]] = uu[hu[15]].length, uu[hu[43]] = [], uu[hu[41]] = hu[1], uu[hu[42]] = hu[1], uu[hu[ … [truncated]
+               if (uu[hu[6]] = uu[hu[39]].indexOf(uu[hu[15]][uu[-hu[38]]]), uu[hu[6]] !== -hu[2])
+                 if (uu[hu[40]] < hu[1]) uu[hu[40]] = uu[hu[6]];
```

#### 71. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L852` → after: `L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L866) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L852)

```diff
-                   ct(tt[yt[30]] += tt[yt[65]] * yt[23], tt[yt[31]] |= tt[yt[30]] << tt[yt[17]], tt[yt[17]] += (tt[yt[30]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
+                   ou(uu[hu[40]] += uu[hu[6]] * hu[28], uu[hu[41]] |= uu[hu[40]] << uu[hu[42]], uu[hu[42]] += (uu[hu[40]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
```

#### 72. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L854-L858` → after: `L868-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L868-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L868-L872) · [Before (L854-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L854-L858)

```diff
-                     ct(tt[yt[63]].push(tt[yt[31]] & yt[3]), tt[yt[31]] >>= yt[2], tt[yt[17]] -= yt[2])
-                   } while (tt[yt[17]] > yt[19]);
-                   tt[yt[30]] = -yt[1]
-                 } return tt[yt[30]] > -yt[1] && tt[yt[63]].push((tt[yt[31]] | tt[yt[30]] << tt[yt[17]]) & yt[3]), Mt(tt[yt[63]])
-           }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
+                     ou(uu[hu[43]].push(uu[hu[41]] & hu[11]), uu[hu[41]] >>= hu[3], uu[hu[42]] -= hu[3])
+                   } while (uu[hu[42]] > hu[7]);
+                   uu[hu[40]] = -hu[2]
+                 } return uu[hu[40]] > -hu[2] && uu[hu[43]].push((uu[hu[41]] | uu[hu[40]] << uu[hu[42]]) & hu[11]), gu(uu[hu[43]])
+           }(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
```

#### 73. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L860` → after: `L874-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L874-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L874-L887) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L860)

```diff
-         tt[yt[4]] = yt[7];
+         uu[hu[12]] = hu[4], Eu(hu[52]) in Mu && function(...uu) {
+           ou(uu[hu[12]] = hu[1], uu[hu[46]] = function(...Eu) {
+             return Eu[hu[12]] = hu[15], uu[hu[43]]({}, Eu[hu[1]], Eu[hu[2]])
+           }, uu[hu[43]] = function(...Eu) {
+             if (ou(Eu[hu[12]] = hu[4], Eu[hu[4]] = {}), Eu[hu[1]][Eu[hu[2]] + Eu[hu[15]]] !== hu[18]) return Eu[hu[1]][Eu[hu[2]] + Eu[hu[15]]];
+             if (Eu[hu[2]] === Eu[hu[15]]) return hu[45];
+             for (Eu[hu[27]] = hu[1]; Eu[hu[27]] < Eu[hu[2]].length; Eu[hu[27]]++) Eu[hu[4]][Eu[hu[2]][Eu[hu[27]]]] === hu[18] && (Eu[hu[4]][Eu[hu[2]][Eu[hu[27]]]] = hu[1]), Eu[hu[4]][Eu[hu[15]][Eu[hu[27]]]] === hu[18] && (Eu[hu[4]][Eu[hu[15]][Eu[hu[27]]]] = hu[1]), ou(Eu[hu[4]][E … [truncated]
+             for (Eu[hu[29]] in Eu[hu[4]])
+               if (Eu[hu[4]][Eu[hu[29]]] !== hu[1]) return Eu[hu[1]][Eu[hu[2]] + Eu[hu[15]]] = hu[44], hu[44];
+             for (Eu[hu[9]] = hu[2]; Eu[hu[9]] < Eu[hu[2]].length; Eu[hu[9]]++)
+               if (uu[hu[43]](Eu[hu[1]], Eu[hu[2]].substr(hu[1], Eu[hu[9]]), Eu[hu[15]].substr(hu[1], Eu[hu[9]])) && uu[hu[43]](Eu[hu[1]], Eu[hu[2]].substr(Eu[hu[9]]), Eu[hu[15]].substr(Eu[hu[9]])) || uu[hu[43]](Eu[hu[1]], Eu[hu[2]].substr(hu[1], Eu[hu[9]]), Eu[hu[15]].substr(Eu[h … [truncated]
+             return Eu[hu[1]][Eu[hu[2]] + Eu[hu[15]]] = hu[44], hu[44]
+           }, console.log(uu[hu[46]]))
+         }();
```

#### 74. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L862` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L889) · [Before (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L862)

```diff
-         return qt()[et(101) + et(102)](Vt, tt[yt[28]]), qt()[et(103)](tt[yt[0]], Vt, qt()[et(104)](Vt, tt[yt[1]]))
+         return Uu()[Eu(94) + Eu(95)](ju, uu[hu[15]]), Uu()[Eu(96)](uu[hu[1]], ju, Uu()[Eu(97)](ju, uu[hu[2]]))
```

#### 75. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L870-L873` → after: `L897-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L897-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L897-L900) · [Before (L870-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L870-L873)

```diff
-         return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(...tt) {
-           for (ct(tt[yt[4]] = yt[1], tt[yt[33]] = 'Gu")@A1`,p=92vyr4KQ!d&Si^D{(okxX<+}a|sOjW0]Yn.#NPTJ;*%36>g_:Z?b5Vzm8lLFq/weM~U$7[hIHEtfBRcC', tt[-yt[66]] = "" + (tt[yt[0]] || ""), tt[yt[14]] = tt[-yt[66]].length, tt[yt[38]] = [], tt[-yt[69]] = yt[0], tt[yt[32]] = yt[0], tt[yt[ … [truncated]
-             if (tt[yt[67]] = tt[yt[33]].indexOf(tt[-yt[66]][tt[yt[2]]]), tt[yt[67]] !== -yt[1])
-               if (tt[yt[68]] < yt[0]) tt[yt[68]] = tt[yt[67]];
+         return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = function(...uu) {
+           for (ou(uu[hu[12]] = hu[2], uu[hu[50]] = 'R,=1)Z;NoHM}f%dYS8qV*Ka/z$PCty!BxsA^j35hObUn7Ik{gwQE9v|#_J0.lG6`D[2uFeW+@mri>L":4]T~Xp&(<c?', uu[hu[15]] = "" + (uu[hu[1]] || ""), uu[hu[36]] = uu[hu[15]].length, uu[hu[4]] = [], uu[hu[47]] = hu[1], uu[hu[30]] = hu[1], uu[hu[51] … [truncated]
+             if (uu[hu[49]] = uu[hu[50]].indexOf(uu[hu[15]][uu[hu[48]]]), uu[hu[49]] !== -hu[2])
+               if (uu[hu[51]] < hu[1]) uu[hu[51]] = uu[hu[49]];
```

#### 76. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L875` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L902) · [Before (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L875)

```diff
-                 ct(tt[yt[68]] += tt[yt[67]] * yt[23], tt[-yt[69]] |= tt[yt[68]] << tt[yt[32]], tt[yt[32]] += (tt[yt[68]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
+                 ou(uu[hu[51]] += uu[hu[49]] * hu[28], uu[hu[47]] |= uu[hu[51]] << uu[hu[30]], uu[hu[30]] += (uu[hu[51]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
```

#### 77. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L877-L881` → after: `L904-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L904-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L904-L908) · [Before (L877-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L877-L881)

```diff
-                   ct(tt[yt[38]].push(tt[-yt[69]] & yt[3]), tt[-yt[69]] >>= yt[2], tt[yt[32]] -= yt[2])
-                 } while (tt[yt[32]] > yt[19]);
-                 tt[yt[68]] = -yt[1]
-               } return tt[yt[68]] > -yt[1] && tt[yt[38]].push((tt[-yt[69]] | tt[yt[68]] << tt[yt[32]]) & yt[3]), Mt(tt[yt[38]])
-         }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
+                   ou(uu[hu[4]].push(uu[hu[47]] & hu[11]), uu[hu[47]] >>= hu[3], uu[hu[30]] -= hu[3])
+                 } while (uu[hu[30]] > hu[7]);
+                 uu[hu[51]] = -hu[2]
+               } return uu[hu[51]] > -hu[2] && uu[hu[4]].push((uu[hu[47]] | uu[hu[51]] << uu[hu[30]]) & hu[11]), gu(uu[hu[4]])
+         }(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
```

#### 78. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L883-L890` → after: `L910-L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L910-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L910-L931) · [Before (L883-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L883-L890)

```diff
-       tt[yt[4]] = yt[2];
-       const Vt = tt[yt[0]][et(yt[70])][et(yt[44]) + et(yt[69]) + et(yt[97])](tt[yt[1]]);
-       tt[yt[2]] = tt[yt[0]][et(yt[70])][et(109) + et(110) + et(111) + et(112)](Vt);
-       const Ot = tt[yt[2]] === yt[74] ? tt[yt[0]][et(yt[70])][et(yt[78]) + et(yt[79]) + et(yt[80]) + et(yt[81])](tt[yt[1]], et(yt[71]) + et(yt[72]) + et(yt[73]) + yt[9]) : tt[yt[2]][et(yt[71]) + et(yt[72]) + et(yt[73]) + yt[9]],
-         mt = tt[yt[2]] === yt[74] ? tt[yt[0]][et(yt[70])][et(120) + et(121) + et(122)](tt[yt[1]], et(yt[75]) + et(yt[76]) + et(yt[77])) : tt[yt[2]][et(yt[75]) + et(yt[76]) + et(yt[77])];
-       ct(qt()[et(126)](Jt, yt[0], yt[0], tt[yt[31]]), qt().tm(Jt, Jt, qt()[et(yt[53])], tt[yt[7]].heading), qt()[et(yt[55])](Wt, tt[yt[38]].Dy), Wt[yt[1]] = yt[0]);
-       const Ht = tt[yt[28]][et(129) + et(130)]();
-       if (ct(tt[yt[2]] = tt[yt[0]][et(yt[70])][et(131) + et(132) + et(133) + "s"](Vt), tt[-yt[86]] = tt[yt[2]] === yt[74] ? tt[yt[0]][et(yt[70])][et(yt[78]) + et(yt[79]) + et(yt[80]) + et(yt[81])](tt[yt[1]], et(yt[82]) + et(yt[83])) : tt[yt[2]][et(yt[82]) + et(yt[83])]), !Ht && q … [truncated]
+       uu[hu[12]] = hu[3], Eu(hu[93]) in Mu && function(...uu) {
+         ou(uu[hu[12]] = hu[1], uu[hu[5]] = function(...uu) {
+           for (ou(uu[hu[12]] = hu[2], uu[-hu[54]] = uu[hu[1]].length, uu[-hu[52]] = [], uu[hu[36]] = hu[1], uu[hu[43]] = hu[1], uu[hu[1]].sort(((uu, Eu) => uu - Eu))), uu[hu[53]] = hu[1]; uu[hu[53]] < uu[-hu[54]]; uu[hu[53]]++)
+             if (!(uu[hu[53]] > hu[1] && uu[hu[1]][uu[hu[53]]] === uu[hu[1]][uu[hu[53]] - hu[2]]))
+               for (ou(uu[hu[36]] = uu[hu[53]] + hu[2], uu[hu[43]] = uu[-hu[54]] - hu[2]); uu[hu[36]] < uu[hu[43]];)
+                 if (uu[hu[1]][uu[hu[53]]] + uu[hu[1]][uu[hu[36]]] + uu[hu[1]][uu[hu[43]]] < hu[1]) uu[hu[36]]++;
+                 else if (uu[hu[1]][uu[hu[53]]] + uu[hu[1]][uu[hu[36]]] + uu[hu[1]][uu[hu[43]]] > hu[1]) uu[hu[43]]--;
+           else {
+             for (uu[-hu[52]].push([uu[hu[1]][uu[hu[53]]], uu[hu[1]][uu[hu[36]]], uu[hu[1]][uu[hu[43]]]]); uu[hu[36]] < uu[hu[43]] && uu[hu[1]][uu[hu[36]]] === uu[hu[1]][uu[hu[36]] + hu[2]];) uu[hu[36]]++;
+             for (; uu[hu[36]] < uu[hu[43]] && uu[hu[1]][uu[hu[43]]] === uu[hu[1]][uu[hu[43]] - hu[2]];) uu[hu[43]]--;
+             ou(uu[hu[36]]++, uu[hu[43]]--)
+           }
+           return uu[-hu[52]]
+         }, console.log(uu[hu[5]]))
+       }();
+       const ju = uu[hu[1]][Eu(hu[55])][Eu(hu[80]) + Eu(101) + Eu(hu[42])](uu[hu[2]]);
+ ... (6 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L892-L894` → after: `L933-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L933-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L933-L935) · [Before (L892-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L892-L894)

```diff
-           for (ct(tt[yt[4]] = yt[1], tt[yt[22]] = 'lwBVv~k^M%te20au_O>f(5YAsD7G+Q`i@Tr$89/64PjoWd)|KN*{&ycH![CF:Ih;XU?Jn13LRm#]"x<gE=Zbp,z.qS}', tt[yt[28]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[28]].length, tt[yt[38]] = [], tt[yt[31]] = yt[0], tt[yt[32]] = yt[0], tt[yt[30]] … [truncated]
-             if (tt[yt[71]] = tt[yt[22]].indexOf(tt[yt[28]][tt[yt[84]]]), tt[yt[71]] !== -yt[1])
-               if (tt[yt[30]] < yt[0]) tt[yt[30]] = tt[yt[71]];
+           for (ou(uu[hu[12]] = hu[2], uu[hu[5]] = '@iYUmgDNfqlCsVbLJIcHe:Q1,^[`p!~)2?EBxARw={u(;oy7TPzXS3M%4jd&Z#"OrF}K6$<G|_v09W]*>k+nhat/.58', uu[hu[27]] = "" + (uu[hu[1]] || ""), uu[hu[36]] = uu[hu[27]].length, uu[hu[74]] = [], uu[hu[29]] = hu[1], uu[hu[9]] = hu[1], uu[hu[51]] … [truncated]
+             if (uu[hu[6]] = uu[hu[5]].indexOf(uu[hu[27]][uu[-hu[73]]]), uu[hu[6]] !== -hu[2])
+               if (uu[hu[51]] < hu[1]) uu[hu[51]] = uu[hu[6]];
```

#### 80. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L896` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L937) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L896)

```diff
-                 ct(tt[yt[30]] += tt[yt[71]] * yt[23], tt[yt[31]] |= tt[yt[30]] << tt[yt[32]], tt[yt[32]] += (tt[yt[30]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
+                 ou(uu[hu[51]] += uu[hu[6]] * hu[28], uu[hu[29]] |= uu[hu[51]] << uu[hu[9]], uu[hu[9]] += (uu[hu[51]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
```

#### 81. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L898-L901` → after: `L939-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L939-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L939-L942) · [Before (L898-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L898-L901)

```diff
-                   ct(tt[yt[38]].push(tt[yt[31]] & yt[3]), tt[yt[31]] >>= yt[2], tt[yt[32]] -= yt[2])
-                 } while (tt[yt[32]] > yt[19]);
-                 tt[yt[30]] = -yt[1]
-               } return tt[yt[30]] > -yt[1] && tt[yt[38]].push((tt[yt[31]] | tt[yt[30]] << tt[yt[32]]) & yt[3]), Mt(tt[yt[38]])
+                   ou(uu[hu[74]].push(uu[hu[29]] & hu[11]), uu[hu[29]] >>= hu[3], uu[hu[9]] -= hu[3])
+                 } while (uu[hu[9]] > hu[7]);
+                 uu[hu[51]] = -hu[2]
+               } return uu[hu[51]] > -hu[2] && uu[hu[74]].push((uu[hu[29]] | uu[hu[51]] << uu[hu[9]]) & hu[11]), gu(uu[hu[74]])
```

#### 82. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L905` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L946) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L905)

```diff
-           return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = ft(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
+           return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = Ou(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
```

#### 83. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L907-L911` → after: `L948-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L948-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L948-L1025) · [Before (L907-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L907-L911)

```diff
-         ct(St(Ct, Jt, Wt), St(ut, Wt, Jt), qt()[et(yt[88])](Kt, Wt, ut));
-         const Nt = qt()[wt(144)](Wt),
-           vt = qt()[wt(145)](Jt, Wt) / tt[yt[31]] / Nt,
-           Rt = Math[wt(yt[87])](vt, yt[0]) + yt[1];
-         tt[yt[31]] * tt[yt[31]] < qt()[yt[85]](ut) && qt()[wt(147)](Jt, Jt, ut, Rt), ct(tt[-yt[86]] = (0, Dt.A)(tt[-yt[86]], 1, Math[wt(yt[87])](yt[1], Math[wt(148)](yt[0], -vt, yt[1] - Nt / tt[yt[31]]))), qt()[wt(yt[36])](Jt, Jt, Kt))
+ 
+         function Du(...uu) {
+           uu[hu[12]] = hu[1]
+         }
+         Yu(hu[20]) in Mu && Du(), ou(Pu(Gu, eu, au), Pu(pu, au, eu), Uu()[Yu(132)](wu, au, pu));
+         const du = Uu()[Yu(133)](au),
+           ku = Uu()[Yu(134)](eu, au) / uu[hu[29]] / du,
+           mu = Math[Yu(hu[81])](ku, hu[1]) + hu[2];
+         if (uu[hu[29]] * uu[hu[29]] < Uu()[hu[77]](pu)) {
+           function vu(...uu) {
+             for (ou(uu[hu[12]] = hu[2], uu[hu[2]] = 'CH#L[PAjFDiuQfhVvy@J}1:(bT5G"?IWq!4*p,9]6^R<mN~`./_g3Ed|xBrXSwe+KYlacUz%=tk;O&2)n0M8Zo7$>{s', uu[hu[27]] = "" + (uu[hu[1]] || ""), uu[hu[4]] = uu[hu[27]].length, uu[hu[10]] = [], uu[hu[8]] = hu[1], uu[-hu[78]] = hu[1], uu[hu[51 … [truncated]
+               if (uu[hu[6]] = uu[hu[2]].indexOf(uu[hu[27]][uu[hu[3]]]), uu[hu[6]] !== -hu[2])
+                 if (uu[hu[51]] < hu[1]) uu[hu[51]] = uu[hu[6]];
+                 else {
+                   ou(uu[hu[51]] += uu[hu[6]] * hu[28], uu[hu[8]] |= uu[hu[51]] << uu[-hu[78]], uu[-hu[78]] += (uu[hu[51]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
+                   do {
+ ... (62 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L914-L923` → after: `L1028-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1028-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1028-L1039) · [Before (L914-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L914-L923)

```diff
-       ct(qt()[et(yt[88])](Xt, Jt, Wt), Xt[yt[1]] = yt[0], tt[yt[14]] = qt()[et(150)](Xt)), Ht || (tt[yt[14]] *= tt[-yt[86]]);
-       const Qt = tt[yt[17]][et(151) + et(yt[34]) + et(yt[86])],
-         lt = Qt ? Math[et(154)](Qt, tt[yt[14]]) : tt[yt[14]];
-       qt()[et(155) + et(156)](Xt, Xt);
-       const Et = tt[yt[19]] !== yt[74] && void 0 !== tt[yt[19]] ? tt[yt[19]] : tt[yt[17]][et(157) + et(yt[66]) + et(159) + et(160)];
-       if (lt > yt[0]) {
-         function It(...tt) {
-           for (ct(tt[yt[4]] = yt[1], tt[yt[22]] = '@QHjnoXGdpmtOgPeblMNF<rEz]sDyf$&"*6_!=4#{(%7[0/}3u?+^8v1VCaIRKZ|.5ck,J2~L9wqW:hBYSU`)iA;>Tx', tt[-yt[89]] = "" + (tt[yt[0]] || ""), tt[yt[90]] = tt[-yt[89]].length, tt[yt[13]] = [], tt[yt[17]] = yt[0], tt[yt[92]] = yt[0], tt[-yt[ … [truncated]
-             if (tt[yt[91]] = tt[yt[22]].indexOf(tt[-yt[89]][tt[yt[64]]]), tt[yt[91]] !== -yt[1])
-               if (tt[-yt[8]] < yt[0]) tt[-yt[8]] = tt[yt[91]];
+       ou(Uu()[Eu(hu[19])](Cu, eu, au), Cu[hu[2]] = hu[1], uu[hu[82]] = Uu()[Eu(141)](Cu)), fu || (uu[hu[82]] *= uu[hu[27]]);
+       const bu = uu[hu[9]][Eu(142) + Eu(143) + Eu(hu[73])],
+         cu = bu ? Math[Eu(145)](bu, uu[hu[82]]) : uu[hu[82]];
+       Uu()[Eu(146) + Eu(147)](Cu, Cu);
+       const Nu = uu[hu[7]] !== hu[59] && uu[hu[7]] !== void hu[1] ? uu[hu[7]] : uu[hu[9]][Eu(148) + Eu(149) + Eu(150)];
+       if (cu > hu[1]) {
+         function ru(uu) {
+           var Eu, ju, su, Uu, Zu, Xu, lu;
+           for (ou(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = hu[1], Zu = hu[1], Xu = -hu[2]), lu = hu[1]; lu < ju; lu++) {
+             var qu = 'vz4@w}0!.9]q?K>YObQC&2raI7X`;^kyDHF%Gx:8m3j~6ic(PT=LBUdR,Es{<*u)Ao|5#NVJg$M1fSph[tnZ+/lW"e_'.indexOf(Eu[lu]);
+             if (qu !== -hu[2])
+               if (Xu < hu[1]) Xu = qu;
```

#### 85. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L925` → after: `L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1041) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L925)

```diff
-                 ct(tt[-yt[8]] += tt[yt[91]] * yt[23], tt[yt[17]] |= tt[-yt[8]] << tt[yt[92]], tt[yt[92]] += (tt[-yt[8]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
+                 ou(Xu += qu * hu[28], Uu |= Xu << Zu, Zu += (Xu & hu[31]) > hu[32] ? hu[33] : hu[34]);
```

#### 86. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L927-L930` → after: `L1043-L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1043-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1043-L1048) · [Before (L927-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L927-L930)

```diff
-                   ct(tt[yt[13]].push(tt[yt[17]] & yt[3]), tt[yt[17]] >>= yt[2], tt[yt[92]] -= yt[2])
-                 } while (tt[yt[92]] > yt[19]);
-                 tt[-yt[8]] = -yt[1]
-               } return tt[-yt[8]] > -yt[1] && tt[yt[13]].push((tt[yt[17]] | tt[-yt[8]] << tt[yt[92]]) & yt[3]), Mt(tt[yt[13]])
+                   ou(su.push(Uu & hu[11]), Uu >>= hu[3], Zu -= hu[3])
+                 } while (Zu > hu[7]);
+                 Xu = -hu[2]
+               }
+           }
+           return Xu > -hu[2] && su.push((Uu | Xu << Zu) & hu[11]), gu(su)
```

#### 87. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L933-L934` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1051-L1052) · [Before (L933-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L933-L934)

```diff
-         function Pt(tt) {
-           return typeof dt[tt] === yt[10] ? dt[tt] = It(jt[tt]) : dt[tt]
+         function Qu(...uu) {
+           return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = ru(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
```

#### 88. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L938-L952` → after: `L1056-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1056-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1056-L1065) · [Before (L938-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L938-L952)

```diff
-           ct(tt[yt[4]] = yt[0], tt[yt[22]] = function(...et) {
-             return ct(et[yt[4]] = yt[1], et[yt[22]] = []), (et[yt[0]] === yt[1] || et[yt[0]] >= yt[38]) && tt[yt[1]](et[yt[22]], [], et[yt[0]], yt[0]), et[yt[22]]
-           }, tt[yt[1]] = function(...et) {
-             for (et[yt[4]] = yt[38], et[yt[38]] = et[yt[7]]; et[yt[38]] < et[yt[28]]; et[yt[38]]++) {
-               if (et[yt[1]].length !== et[yt[38]]) return;
-               for (et[yt[41]] = yt[0]; et[yt[41]] < et[yt[28]]; et[yt[41]]++) tt[-yt[95]](et[yt[1]], [et[yt[38]], et[yt[41]]]) && (ct(et[yt[1]].push([et[yt[38]], et[yt[41]]]), tt[yt[1]](et[yt[0]], et[yt[1]], et[yt[28]], et[yt[38]] + yt[1])), et[yt[1]].length === et[yt[28]] && et[ … [truncated]
-             }
-           }, tt[yt[72]] = function(...tt) {
-             for (ct(tt[yt[4]] = yt[1], tt[yt[94]] = [], tt[yt[28]] = tt[yt[0]].length), tt[-yt[93]] = yt[0]; tt[-yt[93]] < tt[yt[28]]; tt[-yt[93]]++)
-               for (tt[yt[94]][tt[-yt[93]]] = "", tt[yt[38]] = yt[0]; tt[yt[38]] < tt[yt[28]]; tt[yt[38]]++) tt[yt[94]][tt[-yt[93]]] += tt[yt[0]][tt[-yt[93]]][yt[1]] === tt[yt[38]] ? "Q" : ".";
-             return tt[yt[94]]
-           }, tt[-yt[95]] = function(...tt) {
-             for (ct(tt[yt[4]] = yt[28], tt[yt[28]] = tt[yt[0]].length), tt[yt[7]] = yt[0]; tt[yt[7]] < tt[yt[28]]; tt[yt[7]]++) {
-               if (tt[yt[0]][tt[yt[7]]][yt[0]] === tt[yt[1]][yt[0]] || tt[yt[0]][tt[yt[7]]][yt[1]] === tt[yt[1]][yt[1]]) return yt[96];
-               if (Math.abs((tt[yt[0]][tt[yt[7]]][yt[0]] - tt[yt[1]][yt[0]]) / (tt[yt[0]][tt[yt[7]]][yt[1]] - tt[yt[1]][yt[1]])) === yt[1]) return yt[96]
+           ou(uu[hu[12]] = hu[1], uu[hu[27]] = function(...uu) {
+             for (ou(uu[hu[12]] = hu[2], uu[hu[83]] = uu[hu[1]].length, uu[hu[81]] = [], uu[-hu[39]] = hu[1], uu[hu[43]] = hu[1], uu[hu[1]].sort(((uu, Eu) => uu - Eu))), uu[hu[29]] = hu[1]; uu[hu[29]] < uu[hu[83]]; uu[hu[29]]++)
+               if (!(uu[hu[29]] > hu[1] && uu[hu[1]][uu[hu[29]]] === uu[hu[1]][uu[hu[29]] - hu[2]]))
+                 for (ou(uu[-hu[39]] = uu[hu[29]] + hu[2], uu[hu[43]] = uu[hu[83]] - hu[2]); uu[-hu[39]] < uu[hu[43]];)
+                   if (uu[hu[1]][uu[hu[29]]] + uu[hu[1]][uu[-hu[39]]] + uu[hu[1]][uu[hu[43]]] < hu[1]) uu[-hu[39]]++;
+                   else if (uu[hu[1]][uu[hu[29]]] + uu[hu[1]][uu[-hu[39]]] + uu[hu[1]][uu[hu[43]]] > hu[1]) uu[hu[43]]--;
+             else {
+               for (uu[hu[81]].push([uu[hu[1]][uu[hu[29]]], uu[hu[1]][uu[-hu[39]]], uu[hu[1]][uu[hu[43]]]]); uu[-hu[39]] < uu[hu[43]] && uu[hu[1]][uu[-hu[39]]] === uu[hu[1]][uu[-hu[39]] + hu[2]];) uu[-hu[39]]++;
+               for (; uu[-hu[39]] < uu[hu[43]] && uu[hu[1]][uu[hu[43]]] === uu[hu[1]][uu[hu[43]] - hu[2]];) uu[hu[43]]--;
+               ou(uu[-hu[39]]++, uu[hu[43]]--)
```

#### 89. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L954-L955` → after: `L1067-L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1067-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1067-L1068) · [Before (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L954-L955)

```diff
-             return yt[104]
-           }, console.log(tt[yt[22]]))
+             return uu[hu[81]]
+           }, console.log(uu[hu[27]]))
```

#### 90. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L957-L958` → after: `L1070-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1070-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1070-L1071) · [Before (L957-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L957-L958)

```diff
-         Pt(161) in bt && Zt();
-         let Lt = tt[yt[28]][Pt(yt[45]) + Pt(yt[98])] * Et;
+         Qu(151) in Mu && iu();
+         let Wu = uu[hu[15]][Qu(hu[79]) + Qu(153)] * Nu;
```

#### 91. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L961-L963` → after: `L1074-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1074-L1076) · [Before (L961-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L961-L963)

```diff
-             for (ct(tt[yt[4]] = yt[1], tt[-yt[97]] = '67^)1#9;=<zHlXLPCQB(Dqwyc2JhrtK$*3U8}GxE"|gIf0ve4_%`/Z!>SYk[Wu.?{dj+&b~pR:NFAiTMa@m5nos,V]O', tt[yt[41]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[41]].length, tt[yt[38]] = [], tt[yt[98]] = yt[0], tt[yt[32]] = yt[0], tt[yt[1 … [truncated]
-               if (tt[yt[99]] = tt[-yt[97]].indexOf(tt[yt[41]][tt[yt[2]]]), tt[yt[99]] !== -yt[1])
-                 if (tt[yt[19]] < yt[0]) tt[yt[19]] = tt[yt[99]];
+             for (ou(uu[hu[12]] = hu[2], uu[hu[2]] = 'zx4&jKonbd8~5m>pTc)lwMkR,_ODQf<Je[^qL3Ag!a=@CHZ}]V"IS9vNy*rUFi;172uB+P%|YGh/`06XE?:$t#s({W.', uu[hu[84]] = "" + (uu[hu[1]] || ""), uu[hu[85]] = uu[hu[84]].length, uu[hu[10]] = [], uu[hu[8]] = hu[1], uu[hu[9]] = hu[1], uu[-hu[86 … [truncated]
+               if (uu[hu[54]] = uu[hu[2]].indexOf(uu[hu[84]][uu[hu[3]]]), uu[hu[54]] !== -hu[2])
+                 if (uu[-hu[86]] < hu[1]) uu[-hu[86]] = uu[hu[54]];
```

#### 92. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L965` → after: `L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1078) · [Before (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L965)

```diff
-                   ct(tt[yt[19]] += tt[yt[99]] * yt[23], tt[yt[98]] |= tt[yt[19]] << tt[yt[32]], tt[yt[32]] += (tt[yt[19]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
+                   ou(uu[-hu[86]] += uu[hu[54]] * hu[28], uu[hu[8]] |= uu[-hu[86]] << uu[hu[9]], uu[hu[9]] += (uu[-hu[86]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
```

#### 93. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L967-L970` → after: `L1080-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1080-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1080-L1087) · [Before (L967-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L967-L970)

```diff
-                     ct(tt[yt[38]].push(tt[yt[98]] & yt[3]), tt[yt[98]] >>= yt[2], tt[yt[32]] -= yt[2])
-                   } while (tt[yt[32]] > yt[19]);
-                   tt[yt[19]] = -yt[1]
-                 } return tt[yt[19]] > -yt[1] && tt[yt[38]].push((tt[yt[98]] | tt[yt[19]] << tt[yt[32]]) & yt[3]), Mt(tt[yt[38]])
+                     ou(uu[hu[10]].push(uu[hu[8]] & hu[11]), uu[hu[8]] >>= hu[3], uu[hu[9]] -= hu[3])
+                   } while (uu[hu[9]] > hu[7]);
+                   uu[-hu[86]] = -hu[2]
+                 } return uu[-hu[86]] > -hu[2] && uu[hu[10]].push((uu[hu[8]] | uu[-hu[86]] << uu[hu[9]]) & hu[11]), gu(uu[hu[10]])
+           }
+ 
+           function Fu(...uu) {
+             return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = Iu(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
```

#### 94. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L974` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1091) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L974)

```diff
-             return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = kt(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
+             uu[hu[12]] = hu[1]
```

#### 95. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L976` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1093) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L976)

```diff
-           Lt *= tt[yt[28]][Gt(164) + Gt(165)]
+           Fu(154) + "r" in Mu && Bu(), Wu *= uu[hu[15]][Fu(155) + Fu(hu[16])]
```

#### 96. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L978-L979` → after: `L1095-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1095-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1095-L1096) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L978-L979)

```diff
-         let Ft = tt[yt[28]][Pt(yt[94]) + Pt(167) + "ss"] * lt;
-         if (lt < .3 && (Ft *= lt), Lt > Ft) {
+         let Su = uu[hu[15]][Qu(157) + Qu(158) + "ss"] * cu;
+         if (cu < .3) {
```

#### 97. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L981-L983` → after: `L1098-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1098-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1098-L1100) · [Before (L981-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L981-L983)

```diff
-             for (ct(tt[yt[4]] = yt[1], tt[yt[22]] = 'Qfe?:x.,b[u6;{G7>PJ<Op=@]MH4t}kIFnZ#_U~EKVjvDh31oCic2SBa&rygqdw)L9TR+0mAs"|(Yl^$!zN*8W5X`%/', tt[yt[41]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[41]].length, tt[yt[38]] = [], tt[-yt[100]] = yt[0], tt[yt[17]] = yt[0], tt[yt[ … [truncated]
-               if (tt[-yt[49]] = tt[yt[22]].indexOf(tt[yt[41]][tt[yt[2]]]), tt[-yt[49]] !== -yt[1])
-                 if (tt[yt[19]] < yt[0]) tt[yt[19]] = tt[-yt[49]];
+             for (ou(uu[hu[12]] = hu[2], uu[hu[87]] = '.ENUHSlkKBrm7z8d@;1O*CbJvxX|>,M~ft?35{yhP)(i:$DgT"29jFAqR[eV]Yuoa6/wZ<=!`Q_I+WG4c}0%&sn^p#L', uu[hu[27]] = "" + (uu[hu[1]] || ""), uu[hu[4]] = uu[hu[27]].length, uu[hu[10]] = [], uu[hu[14]] = hu[1], uu[hu[30]] = hu[1], uu[-hu[ … [truncated]
+               if (uu[hu[6]] = uu[hu[87]].indexOf(uu[hu[27]][uu[hu[89]]]), uu[hu[6]] !== -hu[2])
+                 if (uu[-hu[88]] < hu[1]) uu[-hu[88]] = uu[hu[6]];
```

#### 98. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L985` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1102) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L985)

```diff
-                   ct(tt[yt[19]] += tt[-yt[49]] * yt[23], tt[-yt[100]] |= tt[yt[19]] << tt[yt[17]], tt[yt[17]] += (tt[yt[19]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
+                   ou(uu[-hu[88]] += uu[hu[6]] * hu[28], uu[hu[14]] |= uu[-hu[88]] << uu[hu[30]], uu[hu[30]] += (uu[-hu[88]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
```

#### 99. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L987-L990` → after: `L1104-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1104-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1104-L1107) · [Before (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L987-L990)

```diff
-                     ct(tt[yt[38]].push(tt[-yt[100]] & yt[3]), tt[-yt[100]] >>= yt[2], tt[yt[17]] -= yt[2])
-                   } while (tt[yt[17]] > yt[19]);
-                   tt[yt[19]] = -yt[1]
-                 } return tt[yt[19]] > -yt[1] && tt[yt[38]].push((tt[-yt[100]] | tt[yt[19]] << tt[yt[17]]) & yt[3]), Mt(tt[yt[38]])
+                     ou(uu[hu[10]].push(uu[hu[14]] & hu[11]), uu[hu[14]] >>= hu[3], uu[hu[30]] -= hu[3])
+                   } while (uu[hu[30]] > hu[7]);
+                   uu[-hu[88]] = -hu[2]
+                 } return uu[-hu[88]] > -hu[2] && uu[hu[10]].push((uu[hu[14]] | uu[-hu[88]] << uu[hu[30]]) & hu[11]), gu(uu[hu[10]])
```

#### 100. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L994` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1111) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L994)

```diff
-             return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = zt(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
+             return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = Lu(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
```

#### 101. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L997-L1017` → after: `L1114-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1114-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1114-L1128) · [Before (L997-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L997-L1017)

```diff
-           function rt() {
-             module.exports = async (tt = (...tt) => {
-               throw tt[yt[4]] = yt[0], new Error(function(...tt) {
-                 return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(...tt) {
-                   for (ct(tt[yt[4]] = yt[1], tt[yt[1]] = ',dcZekV[]j7?:aEM@x5L`K}{8A6%qo#S"1l(*IUJv~Cfg>bm/&t)<3XGQ4i|Bh9^zu;0NswF2WrP.=Yy$R!np+D_HTO', tt[yt[41]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[41]].length, tt[-yt[101]] = [], tt[-yt[103]] = yt[0], tt[yt[32]] = yt[0], … [truncated]
-                     if (tt[yt[102]] = tt[yt[1]].indexOf(tt[yt[41]][tt[yt[2]]]), tt[yt[102]] !== -yt[1])
-                       if (tt[yt[30]] < yt[0]) tt[yt[30]] = tt[yt[102]];
-                       else {
-                         ct(tt[yt[30]] += tt[yt[102]] * yt[23], tt[-yt[103]] |= tt[yt[30]] << tt[yt[32]], tt[yt[32]] += (tt[yt[30]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
-                         do {
-                           ct(tt[-yt[101]].push(tt[-yt[103]] & yt[3]), tt[-yt[103]] >>= yt[2], tt[yt[32]] -= yt[2])
-                         } while (tt[yt[32]] > yt[19]);
-                         tt[yt[30]] = -yt[1]
-                       } return tt[yt[30]] > -yt[1] && tt[-yt[101]].push((tt[-yt[103]] | tt[yt[30]] << tt[yt[32]]) & yt[3]), Mt(tt[-yt[101]])
-                 }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
-               }(169))
- ... (5 more removed lines; see GitHub link above)
+           function xu(...uu) {
+             function Eu(...uu) {
+               return uu[hu[12]] = hu[2], uu[hu[1]][hu[2]] * hu[91] + (uu[hu[1]][hu[1]] < hu[1] ? hu[90] | uu[hu[1]][hu[1]] : uu[hu[1]][hu[1]])
+             }
+ 
+             function ju(uu) {
+               switch (((uu & hu[90]) !== hu[1]) * hu[2] + (uu < hu[1]) * hu[15]) {
+                 case hu[1]:
+                   return [uu % hu[90], Math.trunc(uu / hu[91])];
+                 case hu[2]:
+                   return [uu % hu[90] - hu[90], Math.trunc(uu / hu[91]) + hu[2]];
+                 case hu[15]:
+                   return [((uu + hu[90]) % hu[90] + hu[90]) % hu[90], Math.round(uu / hu[91])];
+                 case hu[4]:
+                   return [uu % hu[90], Math.trunc(uu / hu[91])]
```

#### 102. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1038` → after: `L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1168) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L1038)

```diff
-           ot(168) in bt && rt(), Lt = Ft
+           Hu(160) in Mu && Au(), Wu = Su
```

#### 103. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1040` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1170) · [Before (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L1040)

```diff
-         ct(qt()[Pt(174)](Xt, Xt, Lt), tt[yt[38]][Pt(175) + Pt(176)](Xt))
+         ou(Uu()[Qu(161)](Cu, Cu, Wu), uu[hu[10]][Qu(162) + Qu(163)](Cu))
```

#### 104. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1042` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1172) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L1042)

```diff
-       tt[yt[38]][et(yt[12]) + yt[105]] = tt[yt[28]][et(178) + et(yt[72]) + yt[105]] * (Ht ? Ot : mt)
+       uu[hu[10]][Eu(164) + hu[97]] = uu[hu[15]][Eu(165) + Eu(hu[57]) + hu[97]] * (fu ? su : Xu)
```

#### 105. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1045` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1175) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L1045)

```diff
-   37917: (tt, et, Vt) => {
+   38043: (uu, Eu, ju) => {
```

#### 106. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1047` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1177) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L1047)

```diff
-       b: () => jt,
+       c: () => qu,
```

#### 107. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1050-L1051` → after: `L1180-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1180-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1180-L1181) · [Before (L1050-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L1050-L1051)

```diff
-     var Ot = Vt(37922),
-       qt = Vt(1993);
+     var su = ju(38048),
+       Uu = ju(1955);
```

#### 108. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1055` → after: `L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1185) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L1055)

```diff
-         Sd: 1,
+         pl: 1,
```

#### 109. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1095` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1225) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L1095)

```diff
-       if (jt.speed) return (0, Ot.b)(et, Vt, dt, jt, Ht, Xt, tt), void(jt.ticksToReachMaxIdleFriction = Dt);
+       if (qu.speed) return (0, su.d)(Eu, ju, lu, qu, fu, Cu, uu), void(qu.ticksToReachMaxIdleFriction = Zu);
```

#### 110. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1100` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1230) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L1100)

```diff
-         wt = Qt ? Et : ft,
+         Yu = bu ? Nu : Ou,
```

#### 111. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1103-L1104` → after: `L1233-L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1233-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/230.js#L1233-L1234) · [Before (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/230.js#L1103-L1104)

```diff
-         Mt = (0, qt.A)(yt, wt, Nt);
-       Ht.friction = tt.standingFriction * ((null === lt ? et.bloxd.getClientPredictedOption(Vt, "airMomentumConservation") : lt.airMomentumConservation) ? Mt : wt), jt.ticksToReachMaxIdleFriction > 0 && jt.ticksToReachMaxIdleFriction--
+         gu = (0, Uu.u)(hu, Yu, Du);
+       fu.friction = uu.standingFriction * ((null === cu ? Eu.bloxd.getClientPredictedOption(ju, "airMomentumConservation") : cu.airMomentumConservation) ? gu : Yu), qu.ticksToReachMaxIdleFriction > 0 && qu.ticksToReachMaxIdleFriction--
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/231.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/231.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26)

#### 1. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/231.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/231.js#L4)

```diff
-   40001: (tt, et, Vt) => {
+   40070: (uu, Eu, ju) => {
```

#### 2. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L12-L15` → after: `L12-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/231.js#L12-L15) · [Before (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/231.js#L12-L15)

```diff
-     var Ot = Vt(4599),
-       qt = Vt(37273),
-       Dt = Vt(9416),
-       mt = Vt(3219);
+     var su = ju(4643),
+       Uu = ju(37428),
+       Zu = ju(9406),
+       Xu = ju(3340);
```

#### 3. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/231.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/231.js#L22)

```diff
-         console.warn(`Docs gallery: no default texture for ${jt.size} names`, [...jt]), jt.clear(), Ht = null
+         console.warn(`Docs gallery: no default texture for ${qu.size} names`, [...qu]), qu.clear(), fu = null
```

#### 4. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/231.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/231.js#L36)

```diff
-       const Dt = qt.o[tt];
+       const Zu = Uu.l[uu];
```

#### 5. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/231.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/231.js#L42)

```diff
-         return "string" === typeof(et = jt && Array.isArray(dt) ? dt[jt[tt]] : dt) ? Qt(et, mt.k.BLOCK) : et && "object" === typeof et && "animTextures" in et ? Qt((0, Ot.k)(et), mt.k.BLOCK) : null;
+         return "string" === typeof(Eu = qu && Array.isArray(lu) ? lu[qu[uu]] : lu) ? bu(Eu, Xu.i.BLOCK) : Eu && "object" === typeof Eu && "animTextures" in Eu ? bu((0, su.o)(Eu), Xu.i.BLOCK) : null;
```

#### 6. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L47-L48` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/231.js#L47-L48) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/231.js#L47-L48)

```diff
-         left: null !== (et = Ht(4)) && void 0 !== et ? et : Xt,
-         right: null !== (Vt = Ht(0)) && void 0 !== Vt ? Vt : Xt
+         left: null !== (Eu = fu(4)) && void 0 !== Eu ? Eu : Cu,
+         right: null !== (ju = fu(0)) && void 0 !== ju ? ju : Cu
```

#### 7. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L54-L55` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/231.js#L54-L55) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/231.js#L54-L55)

```diff
-       const Vt = qt.o[tt];
-       return Qt(null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.itemTexture) && void 0 !== et ? et : "string" === typeof(null === Vt || void 0 === Vt ? void 0 : Vt.textureInfo) ? Vt.textureInfo : tt, mt.k.ITEM)
+       const ju = Uu.l[uu];
+       return bu(null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.itemTexture) && void 0 !== Eu ? Eu : "string" === typeof(null === ju || void 0 === ju ? void 0 : ju.textureInfo) ? ju.textureInfo : uu, Xu.i.ITEM)
```

#### 8. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L60-L64` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/231.js#L60-L64) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/231.js#L60-L64)

```diff
-       return qt.o[tt] ? null !== (et = null === (Vt = lt(tt)) || void 0 === Vt ? void 0 : Vt.top) && void 0 !== et ? et : Et(tt) : null
-     }
- 
-     function wt(tt) {
-       return Qt(tt, mt.k.ICON)
+       return Uu.l[uu] ? null !== (Eu = null === (ju = cu(uu)) || void 0 === ju ? void 0 : ju.top) && void 0 !== Eu ? Eu : Nu(uu) : null
+     }
+ 
+     function Yu(uu) {
+       return bu(uu, Xu.i.ICON)
```

#### 9. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/231.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/231.js#L69)

```diff
-         return Vt(3375)(`./${tt}.png`)
+         return ju(3505)(`./${uu}.png`)
```

#### 10. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/231.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/231.js#L75)

```diff
-   37306: (tt, et, Vt) => {
+   37467: (uu, Eu, ju) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/232.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/232.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608)

#### 1. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L4)

```diff
-   37342: (tt, et, Vt) => {
+   37496: (uu, Eu, ju) => {
```

#### 2. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L15)

```diff
-   37372: (tt, et, Vt) => {
+   37519: (uu, Eu, ju) => {
```

#### 3. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L31)

```diff
-       return tt === et ? tt : Math.random() * (et - tt) + tt
+       return uu === Eu ? uu : Math.random() * (Eu - uu) + uu
```

#### 4. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L116)

```diff
-       return Ot = Math.abs(et - tt) <= Vt ? et : tt + Math.sign(et - tt) * Vt, Ot
+       return su = Math.abs(Eu - uu) <= ju ? Eu : uu + Math.sign(Eu - uu) * ju, su
```

#### 5. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L122)

```diff
-       return qt = -Vt < Ot && Ot < Vt ? et : ut(tt, et = tt + Ot, Vt), qt
+       return Uu = -ju < su && su < ju ? Eu : pu(uu, Eu = uu + su, ju), Uu
```

#### 6. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L135)

```diff
-       return 0 === Vt ? et : Wt(et, Vt)
+       return 0 === ju ? Eu : au(Eu, ju)
```

#### 7. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L164)

```diff
-   37331: (tt, et, Vt) => {
+   37488: (uu, Eu, ju) => {
```

#### 8. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L166-L177` → after: `L166-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L166-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L166-L177) · [Before (L166-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L166-L177)

```diff
-       Matrix: () => Ot.c,
-       Quaternion: () => Ot.e,
-       RegisterMathVector: () => Ot.h,
-       TmpVectors: () => Ot.k,
-       Vector2: () => Ot.m,
-       uf: () => Ot.n,
-       Vector4: () => Ot.r
-     });
-     var Ot = Vt(37336);
-     (0, Ot.h)()
-   },
-   37350: (tt, et, Vt) => {
+       Matrix: () => su.e,
+       Quaternion: () => su.i,
+       RegisterMathVector: () => su.l,
+       TmpVectors: () => su.m,
+       Vector2: () => su.p,
+       dO: () => su.t,
+       Vector4: () => su.u
+     });
+     var su = ju(37494);
+     (0, su.l)()
+   },
+   37498: (uu, Eu, ju) => {
```

#### 9. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L188-L190` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L188-L190) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L188-L190)

```diff
-       c: () => Ot,
-       d: () => qt,
-       e: () => mt
+       e: () => su,
+       h: () => Uu,
+       k: () => Xu
```

#### 10. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L215)

```diff
-   37390: (tt, et, Vt) => {
+   37532: (uu, Eu, ju) => {
```

#### 11. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L217-L218` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/232.js#L217-L218) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/232.js#L217-L218)

```diff
-       e: () => Dt,
-       i: () => qt
+       d: () => Zu,
+       f: () => Uu
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/233.js` (igzsf.a0b73a5f → dz8ef.98c5e741)

- **File**: `bundles/bloxd.io/chunks/js/233.js` (109 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c)

#### 1. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1)

```diff
- /*! For license information please see igzsf.233.88f71f3b.chunk.js.LICENSE.txt */
+ /*! For license information please see dz8ef.233.d1674e71.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L5)

```diff
-   38537: tt => {
+   38646: uu => {
```

#### 3. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L10-L13` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L10-L13) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L10-L13)

```diff
-   38520: (tt, et, Vt) => {
-     var Ot = Vt(38523),
-       qt = Vt(38530),
-       Dt = Vt(38537);
+   38633: (uu, Eu, ju) => {
+     var su = ju(38636),
+       Uu = ju(38639),
+       Zu = ju(38646);
```

#### 4. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L135)

```diff
-   38523: (tt, et) => {
+   38636: (uu, Eu) => {
```

#### 5. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L189)

```diff
-   38516: (tt, et, Vt) => {
+   38631: (uu, Eu, ju) => {
```

#### 6. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L205-L207` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L205-L207) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L205-L207)

```diff
-     var Ot, qt = Vt(38520),
-       Dt = Vt(38546),
-       mt = Vt(38553);
+     var su, Uu = ju(38633),
+       Zu = ju(38651),
+       Xu = ju(38656);
```

#### 7. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L252)

```diff
-   38555: (tt, et) => {
+   38663: (uu, Eu) => {
```

#### 8. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L291)

```diff
-   38553: (tt, et, Vt) => {
+   38656: (uu, Eu, ju) => {
```

#### 9. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L367-L369` → after: `L367-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L367-L369) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L367-L369)

```diff
-     var Ot = Vt(38520),
-       qt = Vt(38523),
-       Dt = Vt(38555),
+     var su = ju(38633),
+       Uu = ju(38636),
+       Zu = ju(38663),
```

#### 10. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L372-L374` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L372-L374) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L372-L374)

```diff
-       jt = Vt(38546),
-       Ht = Vt(38557),
-       Xt = Vt(38566),
+       qu = ju(38651),
+       fu = ju(38665),
+       Cu = ju(38673),
```

#### 11. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L400)

```diff
-       tt: for (var ft = qt, wt = qt * Qt; ft < Dt; ++ft, wt += Qt) {
+       uu: for (var Ou = Uu, Yu = Uu * bu; Ou < Zu; ++Ou, Yu += bu) {
```

#### 12. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L419)

```diff
-       tt: for (var Et = Ot, ft = Ot * Xt; Et < qt; ++Et, ft += Xt) {
+       uu: for (var Nu = su, Ou = su * Cu; Nu < Uu; ++Nu, Ou += Cu) {
```

#### 13. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L438)

```diff
-   38557: (tt, et, Vt) => {
+   38665: (uu, Eu, ju) => {
```

#### 14. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L481)

```diff
-     var Ot = Vt(38566)("lo<p0", ["p0"]),
+     var su = ju(38673)("lo<p0", ["p0"]),
```

#### 15. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L496)

```diff
-   38566: tt => {
+   38673: uu => {
```

#### 16. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L506)

```diff
-   38550: tt => {
+   38653: uu => {
```

#### 17. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L595)

```diff
-   38546: (tt, et, Vt) => {
+   38651: (uu, Eu, ju) => {
```

#### 18. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L689)

```diff
-         Ot ? ht = mt : Kt = mt;
+         su ? Ju = Xu : wu = Xu;
```

#### 19. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L713)

```diff
-               tt: for (var zt = 0; zt < It; ++zt) {
+               uu: for (var Wu = 0; Wu < mu; ++Wu) {
```

#### 20. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L750)

```diff
-               tt: for (var It = 0; It < ht; ++It) {
+               uu: for (var mu = 0; mu < Ju; ++mu) {
```

#### 21. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L773-L775` → after: `L773-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L773-L775) · [Before (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L773-L775)

```diff
-     var Ot = Vt(38520),
-       qt = Vt(38523),
-       Dt = Vt(38550),
+     var su = ju(38633),
+       Uu = ju(38636),
+       Zu = ju(38653),
```

#### 22. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L796)

```diff
-   38530: tt => {
+   38639: uu => {
```

#### 23. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L822)

```diff
-   38480: (tt, et, Vt) => {
+   38599: (uu, Eu, ju) => {
```

#### 24. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L841-L843)

```diff
-         mt && (Dt.remove(tt), Ot.nS && (Ot.multi ? (mt.forEach((et => {
-           et && Ot.nS(tt, et)
-         })), mt.length = 0) : Ot.nS(tt, mt)), dt.removals.push(Dt), Ht())
+         Xu && (Zu.remove(uu), su.jK && (su.multi ? (Xu.forEach((Eu => {
+           Eu && su.jK(uu, Eu)
+         })), Xu.length = 0) : su.jK(uu, Xu)), lu.removals.push(Zu), fu())
```

#### 25. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L874)

```diff
-       this.lw = qt, this._systems = Dt, this._renderSystems = mt, this.vY = function(et) {
+       this.CY = Uu, this._systems = Zu, this._renderSystems = Xu, this.pT = function(Eu) {
```

#### 26. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L876)

```diff
-         return Array.isArray(et) && et.forEach((et => tt.RZ(Ot, et))), Ot
+         return Array.isArray(Eu) && Eu.forEach((Eu => uu.yV(su, Eu))), su
```

#### 27. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L881)

```diff
-       }, this.NVt = function(tt) {
+       }, this.HEu = function(uu) {
```

#### 28. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L887` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L887) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L887)

```diff
-         if (qt[Vt]) throw new Error(`Component ${Vt} already exists.`);
+         if (Uu[ju]) throw new Error(`Component ${ju} already exists.`);
```

#### 29. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L889` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L889) · [Before (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L889)

```diff
-         return dt.name = Vt, dt.multi = !!tt.multi, dt.order = isNaN(tt.order) ? 99 : tt.order, dt.stateConstructor = tt.stateConstructor || null, dt.state = tt.state || {}, dt.qJ = tt.qJ || null, dt.nS = tt.nS || null, dt.system = tt.system || null, dt.dJ = tt.dJ || null, et[Vt] … [truncated]
+         return lu.name = ju, lu.multi = !!uu.multi, lu.order = isNaN(uu.order) ? 99 : uu.order, lu.stateConstructor = uu.stateConstructor || null, lu.state = uu.state || {}, lu.lG = uu.lG || null, lu.jK = uu.jK || null, lu.system = uu.system || null, lu.hG = uu.hG || null, Eu[ju] … [truncated]
```

#### 30. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L892)

```diff
-         if (!Ot) throw new Error(`Unknown component: ${tt}`);
+         if (!su) throw new Error(`Unknown component: ${uu}`);
```

#### 31. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L896)

```diff
-         dt.name = tt, dt.multi = !!Vt.multi, dt.order = isNaN(Vt.order) ? 99 : Vt.order, dt.state = Vt.state || {}, dt.qJ = Vt.qJ || null, dt.nS = Vt.nS || null, dt.system = Vt.system || null, dt.dJ = Vt.dJ || null, et[tt] = dt, qt[tt]._pendingMultiCleanup = !1, qt[tt]._multiClea … [truncated]
+         lu.name = uu, lu.multi = !!ju.multi, lu.order = isNaN(ju.order) ? 99 : ju.order, lu.state = ju.state || {}, lu.lG = ju.lG || null, lu.jK = ju.jK || null, lu.system = ju.system || null, lu.hG = ju.hG || null, Eu[uu] = lu, Uu[uu]._pendingMultiCleanup = !1, Uu[uu]._multiClea … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L900)

```diff
-         dt.dJ && Ht < 0 && mt.push(tt), !dt.dJ && Ht >= 0 && mt.splice(Ht, 1), mt.sort(((tt, Vt) => et[tt].order - et[Vt].order));
+         lu.hG && fu < 0 && Xu.push(uu), !lu.hG && fu >= 0 && Xu.splice(fu, 1), Xu.sort(((uu, ju) => Eu[uu].order - Eu[ju].order));
```

#### 33. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L902)

```diff
-         return this.bZ(tt).forEach((tt => {
+         return this.xV(uu).forEach((uu => {
```

#### 34. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L904)

```diff
-           dt.qJ && dt.qJ(tt.uZ, tt)
+           lu.lG && lu.lG(uu.HV, uu)
```

#### 35. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L908)

```diff
-         if (!Ot) throw new Error(`Unknown component: ${Vt}`);
+         if (!su) throw new Error(`Unknown component: ${ju}`);
```

#### 36. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L910)

```diff
-           tt && jt(tt.uZ || tt[0].uZ, Vt)
+           uu && qu(uu.HV || uu[0].HV, ju)
```

#### 37. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L915)

```diff
-       }, this.RZ = function(tt, Vt, Ot) {
+       }, this.yV = function(uu, ju, su) {
```

#### 38. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L918-L919` → after: `L918-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L918-L919) · [Before (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L918-L919)

```diff
-         if (!dt) throw new Error(`Unknown component: ${Vt}.`);
-         if (dt.hash[tt] && !mt.multi) throw new Error(`Entity ${tt} already has component: ${Vt}.`);
+         if (!lu) throw new Error(`Unknown component: ${ju}.`);
+         if (lu.hash[uu] && !Xu.multi) throw new Error(`Entity ${uu} already has component: ${ju}.`);
```

#### 39. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L921` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L921) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L921)

```diff
-           if (!(Dt = new mt.stateConstructor).hasOwnProperty("uZ")) throw new Error(`Component ${mt.name} stateConstructor type does not have property __id`);
+           if (!(Zu = new Xu.stateConstructor).hasOwnProperty("HV")) throw new Error(`Component ${Xu.name} stateConstructor type does not have property __id`);
```

#### 40. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L924)

```diff
-           uZ: tt,
+           HV: uu,
```

#### 41. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L928)

```diff
-         if (Dt.uZ = tt, mt.multi) {
+         if (Zu.HV = uu, Xu.multi) {
```

#### 42. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L932-L933` → after: `L932-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L932-L933) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L932-L933)

```diff
-         return mt.qJ && mt.qJ(tt, Dt), this
-       }, this.ptt = function(tt, et) {
+         return Xu.lG && Xu.lG(uu, Zu), this
+       }, this.xuu = function(uu, Eu) {
```

#### 43. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L935` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L935) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L935)

```diff
-         if (!Vt) throw new Error(`Unknown component: ${et}.`);
+         if (!ju) throw new Error(`Unknown component: ${Eu}.`);
```

#### 44. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L937-L938` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L937-L938) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L937-L938)

```diff
-       }, this.ZZ = function(et, Vt) {
-         if (!qt[Vt]) throw new Error(`Unknown component: ${Vt}.`);
+       }, this.zV = function(Eu, ju) {
+         if (!Uu[ju]) throw new Error(`Unknown component: ${ju}.`);
```

#### 45. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L942)

```diff
-         if (!Vt) throw new Error(`Unknown component: ${et}.`);
+         if (!ju) throw new Error(`Unknown component: ${Eu}.`);
```

#### 46. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L944)

```diff
-       }, this.bZ = function(tt) {
+       }, this.xV = function(uu) {
```

#### 47. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L946)

```diff
-         if (!et) throw new Error(`Unknown component: ${tt}.`);
+         if (!Eu) throw new Error(`Unknown component: ${uu}.`);
```

#### 48. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L948-L949` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L948-L949) · [Before (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L948-L949)

```diff
-       }, this.Bet = function(tt) {
-         if (!qt[tt]) throw new Error(`Unknown component: ${tt}.`);
+       }, this.aEu = function(uu) {
+         if (!Uu[uu]) throw new Error(`Unknown component: ${uu}.`);
```

#### 49. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L952-L953` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L952-L953) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L952-L953)

```diff
-       }, this.OVt = function(tt) {
-         if (!qt[tt]) throw new Error(`Unknown component: ${tt}.`);
+       }, this.KEu = function(uu) {
+         if (!Uu[uu]) throw new Error(`Unknown component: ${uu}.`);
```

#### 50. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L956` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L956) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L956)

```diff
-       }, this.BQ = function(Vt) {
+       }, this.Tb = function(ju) {
```

#### 51. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L971` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L971) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L971)

```diff
-           dt.dJ(Vt, jt.list), Qt()
+           lu.hG(ju, qu.list), bu()
```

#### 52. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L977)

```diff
-         if (!jt) throw new Error(`Unknown component: ${Ot}.`);
+         if (!qu) throw new Error(`Unknown component: ${su}.`);
```

#### 53. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L983)

```diff
-             Dt && (qt[Ot] = null, et.nS && et.nS(tt, Dt), dt.multiComps.push({
+             Zu && (Uu[su] = null, Eu.jK && Eu.jK(uu, Zu), lu.multiComps.push({
```

#### 54. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L991)

```diff
-     var Ot = Vt(38486)
+     var su = ju(38606)
```

#### 55. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L993)

```diff
-   38486: tt => {
+   38606: uu => {
```

#### 56. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1030` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1030) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1030)

```diff
-   38295: (tt, et, Vt) => {
+   38423: (uu, Eu, ju) => {
```

#### 57. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1121)

```diff
-         return tt ? "Symbol(src)_1." + tt : ""
+         return uu ? "Symbol(src)_1." + uu : ""
```

#### 58. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1127)

```diff
-       De = rt ? Gt.mf : void 0,
+       UE = Iu ? iu.qO : void 0,
```

#### 59. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1237` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1237) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1237)

```diff
-           if (Yt(tt)) return Et ? tt : {};
+           if (tu(uu)) return Nu ? uu : {};
```

#### 60. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1247` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1247) · [Before (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1247)

```diff
-           if (!Lt[Ft]) return Et ? tt : {};
+           if (!Vu[ru]) return Nu ? uu : {};
```

#### 61. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1251)

```diff
-               case bt:
+               case Mu:
```

#### 62. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1253-L1254` → after: `L1253-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1253-L1254) · [Before (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1253-L1254)

```diff
-               case mt:
-               case dt:
+               case Xu:
+               case lu:
```

#### 63. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1256` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1256) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1256)

```diff
-               case Jt:
+               case eu:
```

#### 64. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1261-L1269` → after: `L1261-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1261-L1269) · [Before (L1261-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1261-L1269)

```diff
-               case Ct:
-               case ut:
-               case Kt:
-               case ht:
-               case vt:
-               case Wt:
-               case St:
-               case ct:
-               case Rt:
+               case Gu:
+               case pu:
+               case wu:
+               case Ju:
+               case du:
+               case au:
+               case Pu:
+               case ou:
+               case ku:
```

#### 65. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1274` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1274) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1274)

```diff
-               case Xt:
+               case Cu:
```

#### 66. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1279-L1280` → after: `L1279-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1279-L1280) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1279-L1280)

```diff
-               case Qt:
-               case yt:
+               case bu:
+               case hu:
```

#### 67. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1282` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1282) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1282)

```diff
-               case ft:
+               case Ou:
```

#### 68. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1287` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1287) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1287)

```diff
-               case wt:
+               case Yu:
```

#### 69. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1292)

```diff
-               case Nt:
+               case Du:
```

#### 70. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1305)

```diff
-           return xe(tt) ? Ot : function(tt, et) {
+           return HE(uu) ? su : function(uu, Eu) {
```

#### 71. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1319)

```diff
-       return !(!ne(tt) || (et = tt, te && te in et)) && (se(tt) || Yt(tt) ? qe : Pt).test(Be(tt));
+       return !(!zE(uu) || (Eu = uu, Ru && Ru in Eu)) && (yE(uu) || tu(uu) ? sE : vu).test(xE(uu));
```

#### 72. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1342)

```diff
-         return "string" == et || "number" == et || "symbol" == et || "boolean" == et ? "__proto__" !== tt : null === tt
+         return "string" == Eu || "number" == Eu || "symbol" == Eu || "boolean" == Eu ? "__proto__" !== uu : null === uu
```

#### 73. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1350)

```diff
-       return ke(Vt) ? Vt : void 0
+       return QE(ju) ? ju : void 0
```

#### 74. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1367)

```diff
-       return this.__data__[tt] = be && void 0 === et ? Ot : et, this
+       return this.__data__[uu] = ME && void 0 === Eu ? su : Eu, this
```

#### 75. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1423` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1423) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1423)

```diff
-       return !!(et = null == et ? qt : et) && ("number" == typeof tt || Zt.test(tt)) && tt > -1 && tt % 1 == 0 && tt < et
+       return !!(Eu = null == Eu ? Uu : Eu) && ("number" == typeof uu || Ku.test(uu)) && uu > -1 && uu % 1 == 0 && uu < Eu
```

#### 76. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1450)

```diff
-         case Je:
+         case eE:
```

#### 77. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1452)

```diff
-         case Ce:
+         case GE:
```

#### 78. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1454)

```diff
-         case ue:
+         case pE:
```

#### 79. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1456` → after: `L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1456) · [Before (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1456)

```diff
-         case Ke:
+         case wE:
```

#### 80. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1458)

```diff
-         case he:
+         case JE:
```

#### 81. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1496` → after: `L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1496) · [Before (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1496)

```diff
-   38670: tt => {
+   38772: uu => {
```

#### 82. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1520-L1521` → after: `L1520-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1520-L1521) · [Before (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1520-L1521)

```diff
-   37980: (tt, et, Vt) => {
-     var Ot = Vt(37982);
+   38123: (uu, Eu, ju) => {
+     var su = ju(38126);
```

#### 83. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1553` → after: `L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1553) · [Before (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1553)

```diff
-   37982: (tt, et) => {
+   38126: (uu, Eu) => {
```

#### 84. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1607)

```diff
-   37510: (tt, et, Vt) => {
+   37671: (uu, Eu, ju) => {
```

#### 85. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1609-L1610` → after: `L1609-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1609-L1610) · [Before (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1609-L1610)

```diff
-       Color3: () => Ot.b,
-       e: () => Ot.c
+       Color3: () => su.c,
+       b: () => su.g
```

#### 86. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1612-L1613` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1612-L1613) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1612-L1613)

```diff
-     var Ot = Vt(37513);
-     (0, Ot.e)()
+     var su = ju(37680);
+     (0, su.i)()
```

#### 87. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1615)

```diff
-   38009: (tt, et, Vt) => {
+   38152: (uu, Eu, ju) => {
```

#### 88. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1617)

```diff
-       e: () => qt
+       d: () => Uu
```

#### 89. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1619` → after: `L1619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1619) · [Before (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1619)

```diff
-     var Ot = Vt(38016);
+     var su = ju(38154);
```

#### 90. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1623` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1623) · [Before (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1623)

```diff
-         for (let Vt = 0; Vt < 6; Vt++) et.push(new Ot.b(0, 0, 0, 0));
+         for (let ju = 0; ju < 6; ju++) Eu.push(new su.d(0, 0, 0, 0));
```

#### 91. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1660)

```diff
-   38016: (tt, et, Vt) => {
+   38154: (uu, Eu, ju) => {
```

#### 92. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1662` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1662) · [Before (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1662)

```diff
-       b: () => qt
+       d: () => Uu
```

#### 93. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1664)

```diff
-     var Ot = Vt(37336);
+     var su = ju(37494);
```

#### 94. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1667)

```diff
-         this.normal = new Ot.n(tt, et, Vt), this.d = qt
+         this.normal = new su.t(uu, Eu, ju), this.d = Uu
```

#### 95. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1669)

```diff
-       GOt() {
+       Osu() {
```

#### 96. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1716)

```diff
-         return Et = 0 !== lt ? 1 / lt : 0, this.normal.x = Ht * Et, this.normal.y = Xt * Et, this.normal.z = Qt * Et, this.d = -(this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z), this
+         return Nu = 0 !== cu ? 1 / cu : 0, this.normal.x = fu * Nu, this.normal.y = Cu * Nu, this.normal.z = bu * Nu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
```

#### 97. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1719` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1719) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1719)

```diff
-         return Ot.n.Dot(this.normal, tt) <= et
+         return su.t.Dot(this.normal, uu) <= Eu
```

#### 98. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1722)

```diff
-         return Ot.n.Dot(tt, this.normal) + this.d
+         return su.t.Dot(uu, this.normal) + this.d
```

#### 99. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1736)

```diff
-         return Vt.normal.rK(et), Vt.normal.normalize(), Vt.d = -tt.dot(Vt.normal), Vt
+         return ju.normal.yJ(Eu), ju.normal.normalize(), ju.d = -uu.dot(ju.normal), ju
```

#### 100. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1740` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1740) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1740)

```diff
-         return Ot.n.Dot(Vt, et) + qt
+         return su.t.Dot(ju, Eu) + Uu
```

#### 101. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/233.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/233.js#L1743)

```diff
-     qt._TmpMatrix = Ot.c.Identity()
+     Uu._TmpMatrix = su.e.Identity()
```
