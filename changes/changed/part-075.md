# Changed — Bundle Modifications Report (Part 075 / 137)

- **Updated at**: `2026-11-24T07:07 JST`
- **Part**: `75 / 137` (**430** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 074](part-074.md) · [Part 076 →](part-076.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/75.js` (w4ddu.56408518 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/75.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82)

#### 18. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L294-L298` → after: `L294-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/75.js#L294-L298) · [Before (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/75.js#L294-L298)

```diff
-         1 !== mC && jC.push(`${vC(mC-1)} damage`);
-         1 !== HC && jC.push(`${iC(1/HC-1)} faster strikes`);
-         1 !== EC && jC.push(`${vC(EC-1)} knockback`);
-         lC > 0 && jC.push(`+${lC} reach`);
-         XC > 0 && jC.push(`${iC(XC)} less damage taken while held`);
+         1 !== pk && Ak.push(`${Sk(pk-1)} damage`);
+         1 !== uk && Ak.push(`${zk(1/uk-1)} faster strikes`);
+         1 !== bk && Ak.push(`${Sk(bk-1)} knockback`);
+         Rk > 0 && Ak.push(`+${Rk} reach`);
+         Uk > 0 && Ak.push(`${zk(Uk)} less damage taken while held`);
```

#### 19. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L300-L301` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/75.js#L300-L301) · [Before (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/75.js#L300-L301)

```diff
-         for (const bC of Object.keys(cC)) yC.push(`${MC[bC].name}: ${MC[bC].describe(cC[bC])}`);
-         null !== uC && yC.push(`${gC[uC].name}: ${gC[uC].description}`);
+         for (const ik of Object.keys(Ck)) gk.push(`${jk[ik].name}: ${jk[ik].describe(Ck[ik])}`);
+         null !== Nk && gk.push(`${ek[Nk].name}: ${ek[Nk].description}`);
```

#### 20. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/75.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/75.js#L322)

```diff
-       }(QC, null !== (zC = ZC[wC]) && void 0 !== zC ? zC : {});
+       }(Xk, null !== (Fk = Ik[Tk]) && void 0 !== Fk ? Fk : {});
```

#### 21. `bundles/bloxd.io/chunks/js/75.js` (Changed code · before: `L335-L339` → after: `L335-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-0438b61a378b0e59b169f78a1e16ed04d25bf5770e2f15f940df0eeddd0e3b82) · [After (L335-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/75.js#L335-L339) · [Before (L335-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/75.js#L335-L339)

```diff
-       return `${Math.round(100*CC)}%`
-     }
- 
-     function vC(CC) {
-       return `${CC>=0?"+":""}${iC(CC)}`
+       return `${Math.round(100*kk)}%`
+     }
+ 
+     function Sk(kk) {
+       return `${kk>=0?"+":""}${zk(kk)}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/76.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/76.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5)

#### 1. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L4)

```diff
-   4630: (CC, zC, ZC) => {
+   4684: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L8-L11)

```diff
-     var QC = ZC(20),
-       wC = ZC(28),
-       bC = ZC(1240),
-       nC = ZC(2800);
+     var Xk = Ik(25),
+       Tk = Ik(34),
+       ik = Ik(1270),
+       yk = Ik(2744);
```

#### 3. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L16-L20` → after: `L16-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L16-L20) · [Before (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L16-L20)

```diff
-       return "visible" === document.visibilityState && "inGame" === QC.b.get("gameState") && (0, bC.x)()
-     }
- 
-     function FC(CC, zC) {
-       (0, nC.l)() || function(CC, zC, ZC) {
+       return "visible" === document.visibilityState && "inGame" === Xk.d.get("gameState") && (0, ik.n)()
+     }
+ 
+     function Lk(kk, Fk) {
+       (0, yk.p)() || function(kk, Fk, Ik) {
```

#### 4. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L27)

```diff
-           CC(`saved for the player after ${fC/1e3} s of play`), (0, nC.t)(), wC.o.bp("chat", {
+           kk(`saved for the player after ${lk/1e3} s of play`), (0, yk.y)(), Tk.g.GL("chat", {
```

#### 5. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L39)

```diff
-   34014: (CC, zC, ZC) => {
+   34020: (kk, Fk, Ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L49)

```diff
-       e: () => QC
+       d: () => Xk
```

#### 7. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L52-L54` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L52-L53) · [Before (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L52-L54)

```diff
-   37778: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => qC,
+   37939: (kk, Fk, Ik) => {
+     Ik.d(Fk, {
```

#### 8. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L56-L58` → after: `L55-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L55-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L55-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L56-L58)

```diff
-       f: () => AC,
-       i: () => RC,
-       l: () => GC
+       h: () => Lk,
+       j: () => Kk,
+       m: () => Pk,
+       n: () => xk
```

#### 9. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L60-L62` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L60-L62) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L60-L62)

```diff
-     var QC = ZC(4630),
-       wC = ZC(34014),
-       bC = ZC(2800);
+     var Xk = Ik(4684),
+       Tk = Ik(34020),
+       ik = Ik(2744);
```

#### 10. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L64)

```diff
-       fC = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "HW", "jobMs"];
+       lk = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "St", "jobMs"];
```

#### 11. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L72)

```diff
-       return `${CC},${zC},${ZC}`
+       return `${kk},${Fk},${Ik}`
```

#### 12. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L80)

```diff
-         const QC = null !== (ZC = this.pending.get(CC)) && void 0 !== ZC ? ZC : [];
+         const Xk = null !== (Ik = this.pending.get(kk)) && void 0 !== Ik ? Ik : [];
```

#### 13. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L95)

```diff
-           HW: wC,
+           St: Tk,
```

#### 14. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L98)

```diff
-         for (const oC of null !== (fC = this.pending.get(CC)) && void 0 !== fC ? fC : []) {
+         for (const ak of null !== (lk = this.pending.get(kk)) && void 0 !== lk ? lk : []) {
```

#### 15. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L112)

```diff
-         for (const wC of null !== (QC = this.pending.get(CC)) && void 0 !== QC ? QC : []) {
+         for (const Tk of null !== (Xk = this.pending.get(kk)) && void 0 !== Xk ? Xk : []) {
```

#### 16. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L127)

```diff
-           HW: 0,
+           St: 0,
```

#### 17. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L149)

```diff
-           HW: ZC.HW,
+           St: Ik.St,
```

#### 18. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L152)

```diff
-         if (this.edits[this.nextEdit] = wC, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(wC.totalMs), this.Cg(1), wC.totalMs < 100 || ++this.outliers > 5) return;
+         if (this.edits[this.nextEdit] = Tk, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Tk.totalMs), this.Mj(1), Tk.totalMs < 100 || ++this.outliers > 5) return;
```

#### 19. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L154)

```diff
-         (0, bC.i)("remesh", `slow edit (${CC}) shown in ${nC(wC.totalMs)} ms: slot ${nC(wC.slotMs)}, worker ${nC(wC.workerMs)} (${wC.ahead} ahead, ${wC.inFlight}/${wC.HW} in flight; job ${nC(wC.jobMs)}), apply ${nC(wC.applyMs)}`)
+         (0, ik.g)("remesh", `slow edit (${kk}) shown in ${yk(Tk.totalMs)} ms: slot ${yk(Tk.slotMs)}, worker ${yk(Tk.workerMs)} (${Tk.ahead} ahead, ${Tk.inFlight}/${Tk.St} in flight; job ${yk(Tk.jobMs)}), apply ${yk(Tk.applyMs)}`)
```

#### 20. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L160)

```diff
-           this.gaveUp += QC.length - zC.length, this.Cg(QC.length - zC.length), zC.length > 0 ? this.pending.set(ZC, zC) : this.pending.delete(ZC)
+           this.gaveUp += Xk.length - Fk.length, this.Mj(Xk.length - Fk.length), Fk.length > 0 ? this.pending.set(Ik, Fk) : this.pending.delete(Ik)
```

#### 21. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L167)

```diff
-           (0, bC.i)("remesh", `${Math.round(this.frames/zC)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,wC.e)(CC,.5))} max ${Math.round((0,wC … [truncated]
+           (0, ik.g)("remesh", `${Math.round(this.frames/Fk)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Tk.d)(kk,.5))} max ${Math.round((0,Tk … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L174)

```diff
-           return `${CC}: p50 ${Math.round((0,wC.e)(zC,.5))} p90 ${Math.round((0,wC.e)(zC,.9))} max ${Math.round((0,wC.e)(zC,1))}`
+           return `${kk}: p50 ${Math.round((0,Tk.d)(Fk,.5))} p90 ${Math.round((0,Tk.d)(Fk,.9))} max ${Math.round((0,Tk.d)(Fk,1))}`
```

#### 23. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L185)

```diff
-         this.log = CC, this.MN = zC
+         this.log = kk, this.qZ = Fk
```

#### 24. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L188-L189` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L188-L189) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L188-L189)

```diff
-         const [QC, wC, bC] = this.MN.fN.kQC(CC, zC, ZC), nC = this.MN.fN.PS.GS(QC, wC, bC);
-         nC && nC.SS && this.log.edit(FC(QC, wC, bC), performance.now())
+         const [Xk, Tk, ik] = this.qZ.XZ.kTk(kk, Fk, Ik), yk = this.qZ.XZ.Qw.sw(Xk, Tk, ik);
+         yk && yk.Pw && this.log.edit(Lk(Xk, Tk, ik), performance.now())
```

#### 25. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L217)

```diff
-       return MC = CC, (0, bC.e)("remesh", (() => CC.dump())), (0, bC.b)("remeshStats", (() => {
+       return jk = kk, (0, ik.f)("remesh", (() => kk.dump())), (0, ik.b)("remeshStats", (() => {
```

#### 26. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L220)

```diff
-         (0, bC.i)("remesh", CC)
+         (0, ik.g)("remesh", kk)
```

#### 27. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L226)

```diff
-       pC = new NC(zC, CC), CC.JA.meshProbe = pC, CC.on("beforeRender", (() => {
+       Hk = new Zk(Fk, kk), kk.Bx.meshProbe = Hk, kk.on("beforeRender", (() => {
```

#### 28. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L236-L238` → after: `L236-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L236-L238) · [Before (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L236-L238)

```diff
-   37525: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => QC
+   37718: (kk, Fk, Ik) => {
+     Ik.d(Fk, {
+       b: () => Xk
```

#### 29. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L247)

```diff
-   37568: (CC, zC, ZC) => {
+   37760: (kk, Fk, Ik) => {
```

#### 30. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L256` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L253-L254) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L256)

```diff
-       f: () => JC,
+       g: () => sk,
+       i: () => Qk,
```

#### 31. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L260-L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L261) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L260-L261)

```diff
-       u: () => nC,
-       y: () => bC
+       t: () => wk
```

#### 32. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L285)

```diff
-       return `~${function(CC){return CC.length<2?CC:":"===CC[1]?CC[0]:CC[0]+CC[1]}(zC)}~${CC}`
+       return `~${function(kk){return kk.length<2?kk:":"===kk[1]?kk[0]:kk[0]+kk[1]}(Fk)}~${kk}`
```

#### 33. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L331` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L331) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L331)

```diff
-       if (ZC <= zC) return `t ${CC}`;
+       if (Ik <= Fk) return `t ${kk}`;
```

#### 34. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L365)

```diff
-   37814: CC => {
+   37984: kk => {
```

#### 35. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L368)

```diff
-   37802: CC => {
+   37968: kk => {
```

#### 36. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L371)

```diff
-   37816: CC => {
+   37990: kk => {
```

#### 37. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L374` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L374) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L374)

```diff
-   37793: CC => {
+   37960: kk => {
```

#### 38. `bundles/bloxd.io/chunks/js/76.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-a258f24b8c8557ec28002f6d59c1dbe9a79fa317974ca1cba13c7d95bfd58bc5) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/76.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/76.js#L377)

```diff
-   37808: CC => {
+   37975: kk => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 1. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L4)

```diff
-   4635: (CC, zC, ZC) => {
+   4692: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L6-L7)

```diff
-       e: () => Tz,
-       h: () => WZ,
+       b: () => fF,
+       f: () => ZI,
```

#### 3. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L9-L12` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L9-L11) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L9-L12)

```diff
-       k: () => zZ,
-       l: () => Lz,
-       o: () => kz,
-       s: () => cz,
+       m: () => II,
+       p: () => mF,
+       q: () => MF,
```

#### 4. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L14-L16` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L13-L14) · [Before (L14-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L14-L16)

```diff
-       v: () => Kz,
-       w: () => FZ,
-       A: () => qZ,
+       x: () => YF,
+       z: () => OF,
```

#### 5. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L18` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L16-L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L18)

```diff
-       E: () => Xz
+       F: () => LI,
+       I: () => AF,
+       L: () => UF
```

#### 6. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L20)

```diff
-     var QC = ZC(2848);
+     var Xk = Ik(2801);
```

#### 7. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L59)

```diff
-       return CC === `function ${zC}() { [native code] }` || CC === `function ${zC}() {\n    [native code]\n}`
+       return kk === `function ${Fk}() { [native code] }` || kk === `function ${Fk}() {\n    [native code]\n}`
```

#### 8. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L113)

```diff
-       HC = CC >= 3 ? mC : nC, dC = CC % 3
+       uk = kk >= 3 ? pk : yk, Gk = kk % 3
```

#### 9. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L136-L137` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L136-L137) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L136-L137)

```diff
-         QC = ZC.length > BC ? BC : ZC.length,
-         wC = `#${function(CC,zC){const ZC=HC(sC,yC,[zC]);if(null===ZC)return"s";const QC=ZC[1];if("ProxyObject"===QC)return"p";if(""!==QC)return HC(aC,QC,["bound "])?"b":"n";try{const zC=uC(CC,"name"),ZC=void 0!==zC&&HC(rC,zC,["value"])?zC.value:void 0;return"string"===typeof ZC& … [truncated]
+         Xk = Ik.length > rk ? rk : Ik.length,
+         Tk = `#${function(kk,Fk){const Ik=uk(Wk,gk,[Fk]);if(null===Ik)return"s";const Xk=Ik[1];if("ProxyObject"===Xk)return"p";if(""!==Xk)return uk(Bk,Xk,["bound "])?"b":"n";try{const Fk=Nk(kk,"name"),Ik=void 0!==Fk&&uk(ck,Fk,["value"])?Fk.value:void 0;return"string"===typeof Ik& … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L143-L145` → after: `L143-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L143-L145) · [Before (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L143-L145)

```diff
-       return null === zC ? CC : zC[1]
-     }
-     var zz = ZC(2871);
+       return null === Fk ? kk : Fk[1]
+     }
+     var IF = Ik(2809);
```

#### 11. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L163)

```diff
-         native: new RegExp(`^function (get )?${ZC}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
+         native: new RegExp(`^function (get )?${Ik}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
```

#### 12. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L279)

```diff
-         return CZ(ZC, CC) ? dz(CC, !0) : `${dz(CC,!1)}${VC(ZC??zC)}`
+         return FI(Ik, kk) ? GF(kk, !0) : `${GF(kk,!1)}${kF(Ik??Fk)}`
```

#### 13. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L281)

```diff
-         return `${dz(CC,!1)}${VC(void 0)}`
+         return `${GF(kk,!1)}${kF(void 0)}`
```

#### 14. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L290)

```diff
-       return `wh:${ZC}${zC?"-dbg":""}:${QC}`
+       return `wh:${Ik}${Fk?"-dbg":""}:${Xk}`
```

#### 15. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L318)

```diff
-       return new Set(Az.filter((zC => zC.tier === CC)).map((CC => `wh:${CC.code}`)))
+       return new Set(QF.filter((Fk => Fk.tier === kk)).map((kk => `wh:${kk.code}`)))
```

#### 16. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L322)

```diff
-       az = new Set(zz.c),
+       BF = new Set(IF.d),
```

#### 17. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L441)

```diff
-       const zC = `wh:${CC.code}`;
+       const Fk = `wh:${kk.code}`;
```

#### 18. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L444)

```diff
-         return `${zC}${VC(fZ(CC))}`
+         return `${Fk}${kF(aI(kk))}`
```

#### 19. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L446)

```diff
-         return `${zC}${VC(void 0)}`
+         return `${Fk}${kF(void 0)}`
```

#### 20. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L481)

```diff
-             zC((0, zz.l)());
+             Fk((0, IF.p)());
```

#### 21. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L503-L504` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/77.js#L503-L504) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/77.js#L503-L504)

```diff
-       const CC = (0, QC.q)();
-       return null === CC ? null : `wn:${CC}`
+       const kk = (0, Xk.n)();
+       return null === kk ? null : `wn:${kk}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/78.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/78.js` (405 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521)

#### 1. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4)

```diff
-     4760: (CC, zC, ZC) => {
+     4829: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6-L7)

```diff
-         c: () => pC,
-         d: () => PC
+         e: () => Hk,
+         h: () => Jk
```

#### 3. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L9)

```diff
-       var QC = ZC(1002),
+       var Xk = Ik(1055),
```

#### 4. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L11-L17` → after: `L11-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L11-L17) · [Before (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L11-L17)

```diff
-         bC = ZC(48),
-         nC = ZC(1143),
-         fC = ZC(4769),
-         oC = ZC(1811),
-         qC = ZC(2369),
-         FC = ZC(4775),
-         WC = ZC(1056);
+         ik = Ik(58),
+         yk = Ik(1179),
+         lk = Ik(4833),
+         ak = Ik(1849),
+         qk = Ik(2349),
+         Lk = Ik(4837),
+         tk = Ik(1096);
```

#### 5. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L35)

```diff
-             "--word-delay": `${zC.delayMs}ms`
+             "--word-delay": `${Fk.delayMs}ms`
```

#### 6. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L37-L38` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L37-L38) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L37-L38)

```diff
-           children: (0, WC.jsx)(fC.e, {
-             text: "icon" === zC.kind ? `[[${zC.icon}]]` : zC.text
+           children: (0, tk.jsx)(lk.b, {
+             text: "icon" === Fk.kind ? `[[${Fk.icon}]]` : Fk.text
```

#### 7. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L49)

```diff
-         } = (0, nC.y)(), QC = (0, bC.useMemo)((() => (0, FC.c)((0, FC.f)(zC).plan.pieces)), [zC, ZC.code]);
+         } = (0, yk.y)(), Xk = (0, ik.useMemo)((() => (0, Lk.d)((0, Lk.e)(Fk).plan.pieces)), [Fk, Ik.code]);
```

#### 8. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L54)

```diff
-           children: [zC.speakerName && (0, WC.jsx)(oC.e, {
+           children: [Fk.speakerName && (0, tk.jsx)(ak.c, {
```

#### 9. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L69)

```diff
-         const CC = (0, qC.h)("dialogue");
+         const kk = (0, qk.j)("dialogue");
```

#### 10. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L82)

```diff
-     4648: (CC, zC, ZC) => {
+     4707: (kk, Fk, Ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L86-L87` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L86-L87) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L86-L87)

```diff
-         var QC = ZC(48),
-           wC = ZC(1002),
+         var Xk = Ik(58),
+           Tk = Ik(1055),
```

#### 12. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L89-L97` → after: `L89-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L89-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L89-L97) · [Before (L89-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L89-L97)

```diff
-           nC = ZC(1455),
-           fC = ZC(1463),
-           oC = ZC(20),
-           qC = ZC(60),
-           FC = ZC(4657),
-           WC = ZC(4668),
-           NC = ZC(4672),
-           MC = ZC(4296),
-           gC = ZC(1056);
+           yk = Ik(1481),
+           lk = Ik(1485),
+           ak = Ik(25),
+           qk = Ik(74),
+           Lk = Ik(4714),
+           tk = Ik(4729),
+           Zk = Ik(4731),
+           jk = Ik(4335),
+           ek = Ik(1096);
```

#### 13. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L107)

```diff
-           const nC = `${SC}/${zC}.png`;
+           const yk = `${wk}/${Fk}.png`;
```

#### 14. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L115-L116` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L115-L116) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L115-L116)

```diff
-                 maskImage: `url("${nC}")`,
-                 WebkitMaskImage: `url("${nC}")`
+                 maskImage: `url("${yk}")`,
+                 WebkitMaskImage: `url("${yk}")`
```

#### 15. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L144)

```diff
-             (0, MC.e)(CC).then((() => {
+             (0, jk.b)(kk).then((() => {
```

#### 16. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L170-L171` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L170-L171) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L170-L171)

```diff
-             title: `Copy ${zC.length>40?"to clipboard":zC}`,
-             "aria-label": ZC ? void 0 : `Copy ${zC}`,
+             title: `Copy ${Fk.length>40?"to clipboard":Fk}`,
+             "aria-label": Ik ? void 0 : `Copy ${Fk}`,
```

#### 17. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L182)

```diff
-         FC.c.registerLanguage("javascript", WC.b), FC.c.registerLanguage("typescript", NC.b);
+         Lk.c.registerLanguage("javascript", tk.b), Lk.c.registerLanguage("typescript", Zk.d);
```

#### 18. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L241)

```diff
-               }), qC ? "Show less" : `Show all ${fC} lines`]
+               }), qk ? "Show less" : `Show all ${lk} lines`]
```

#### 19. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L245-L246` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L245-L246) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L245-L246)

```diff
-         var iC = ZC(4674);
-         var vC = ZC(4679);
+         var zk = Ik(4739);
+         var Sk = Ik(4745);
```

#### 20. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L305)

```diff
-               setterSnippet: (CC, zC) => `api.setClientOption(playerId, "${CC}", ${zC})`
+               setterSnippet: (kk, Fk) => `api.setClientOption(playerId, "${kk}", ${Fk})`
```

#### 21. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L311)

```diff
-               setterSnippet: (CC, zC) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${CC}", ${zC})`
+               setterSnippet: (kk, Fk) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${kk}", ${Fk})`
```

#### 22. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L317)

```diff
-               setterSnippet: (CC, zC) => `api.setMobSetting(mobId, "${CC}", ${zC})`
+               setterSnippet: (kk, Fk) => `api.setMobSetting(mobId, "${kk}", ${Fk})`
```

#### 23. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L323)

```diff
-               setterSnippet: (CC, zC) => `api.setVehicleSetting(vehicleId, "${CC}", ${zC})`
+               setterSnippet: (kk, Fk) => `api.setVehicleSetting(vehicleId, "${kk}", ${Fk})`
```

#### 24. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L428` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L428) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L428)

```diff
-           }, ...vC.c.flatMap((CC => {
+           }, ...Sk.d.flatMap((kk => {
```

#### 25. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L440` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L440) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L440)

```diff
-               if (-1 === zC || -1 === ZC || -1 === QC) throw new Error(`Getting started has no "${lC}" section with a code block`);
+               if (-1 === Fk || -1 === Ik || -1 === Xk) throw new Error(`Getting started has no "${Rk}" section with a code block`);
```

#### 26. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L444)

```diff
-                   return `## ${zC}\n\n\`\`\`ts\n${ZC}\n\`\`\`\n`
+                   return `## ${Fk}\n\n\`\`\`ts\n${Ik}\n\`\`\`\n`
```

#### 27. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L449)

```diff
-                 markdown: `${CC.markdown.slice(0,zC)}${nC}`
+                 markdown: `${kk.markdown.slice(0,Fk)}${yk}`
```

#### 28. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L457` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L457) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L457)

```diff
-                 markdown: `# Types\n\n${wC}\n\n${bC.join("\n")}`
+                 markdown: `# Types\n\n${Tk}\n\n${ik.join("\n")}`
```

#### 29. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L475)

```diff
-                   const oC = null !== (bC = dC[ZC]) && void 0 !== bC ? bC : {
+                   const ak = null !== (ik = Gk[Ik]) && void 0 !== ik ? ik : {
```

#### 30. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L477)

```diff
-                     summary: `How to use ${ZC.toLowerCase()} in World Code.`
+                     summary: `How to use ${Ik.toLowerCase()} in World Code.`
```

#### 31. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L480-L481` → after: `L480-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L480-L481) · [Before (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L480-L481)

```diff
-                     id: `${CC.id}${ZC.split(/[^A-Za-z0-9]+/).map((CC=>CC.charAt(0).toUpperCase()+CC.slice(1))).join("")}`,
-                     slug: `${CC.slug}-${mC(ZC)}`,
+                     id: `${kk.id}${Ik.split(/[^A-Za-z0-9]+/).map((kk=>kk.charAt(0).toUpperCase()+kk.slice(1))).join("")}`,
+                     slug: `${kk.slug}-${pk(Ik)}`,
```

#### 32. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L484-L485` → after: `L484-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L484-L485) · [Before (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L484-L485)

```diff
-                     sourceAnchor: (0, iC.p)(ZC),
-                     markdown: `# ${ZC}\n\n${HC(fC)}`,
+                     sourceAnchor: (0, zk.t)(Ik),
+                     markdown: `# ${Ik}\n\n${uk(lk)}`,
```

#### 33. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L529)

```diff
-           return zC || (zC = (0, iC.s)(CC.markdown, "changelog" === CC.layout ? 3 : 2), rC.set(CC.id, zC)), zC
+           return Fk || (Fk = (0, zk.w)(kk.markdown, "changelog" === kk.layout ? 3 : 2), ck.set(kk.id, Fk)), Fk
```

#### 34. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L539-L540` → after: `L539-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L539-L540) · [Before (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L539-L540)

```diff
-           const wC = ZC.length > 0 ? (0, iC.p)(ZC.join("-")) : "";
-           for (const nC of null !== (bC = QC.childPageIds) && void 0 !== bC ? bC : []) {
+           const Tk = Ik.length > 0 ? (0, zk.t)(Ik.join("-")) : "";
+           for (const yk of null !== (ik = Xk.childPageIds) && void 0 !== ik ? ik : []) {
```

#### 35. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L574-L575` → after: `L574-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L574-L575) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L574-L575)

```diff
-           const QC = zC.slug ? `${CC}/${zC.slug}` : CC;
-           return ZC ? `${QC}#${ZC}` : QC
+           const Xk = Fk.slug ? `${kk}/${Fk.slug}` : kk;
+           return Ik ? `${Xk}#${Ik}` : Xk
```

#### 36. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L577)

```diff
-         var jC = ZC(4696);
+         var Ak = Ik(4761);
```

#### 37. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L609)

```diff
-           let wC = OC(ZC.slice(0, null !== (zC = QC[0]) && void 0 !== zC ? zC : ZC.length)).doc;
+           let Tk = Dk(Ik.slice(0, null !== (Fk = Xk[0]) && void 0 !== Fk ? Fk : Ik.length)).doc;
```

#### 38. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L612)

```diff
-             const nC = OC(ZC.slice(CC, null !== (bC = QC[zC + 1]) && void 0 !== bC ? bC : ZC.length)),
+             const yk = Dk(Ik.slice(kk, null !== (ik = Xk[Fk + 1]) && void 0 !== ik ? ik : Ik.length)),
```

#### 39. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L625)

```diff
-           return ZC ? null !== (zC = ZC[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== zC ? zC : [] : null
+           return Ik ? null !== (Fk = Ik[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Fk ? Fk : [] : null
```

#### 40. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L636` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L636) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L636)

```diff
-               ZC && (zC.keys.push(ZC[1].startsWith('"') ? ZC[1] : `"${ZC[1]}"`), zC.values.push(ZC[2].trim()))
+               Ik && (Fk.keys.push(Ik[1].startsWith('"') ? Ik[1] : `"${Ik[1]}"`), Fk.values.push(Ik[2].trim()))
```

#### 41. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L645)

```diff
-           return CC.length > UC ? `\n\t| ${CC.join("\n\t| ")}` : CC.join(" | ")
+           return kk.length > hk ? `\n\t| ${kk.join("\n\t| ")}` : kk.join(" | ")
```

#### 42. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L668` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L668) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L668)

```diff
-               return null !== (QC = null === (wC = zC.get(ZC)) || void 0 === wC ? void 0 : wC.text) && void 0 !== QC ? QC : CC
+               return null !== (Xk = null === (Tk = Fk.get(Ik)) || void 0 === Tk ? void 0 : Tk.text) && void 0 !== Xk ? Xk : kk
```

#### 43. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L723)

```diff
-                 CC ? (nC = CC[1].trim(), oC = "deprecation") : ZC.startsWith("@") ? (oC = "otherTag", qC = !0) : "" === ZC.trim() ? qC || (oC = "description", fC.push(ZC)) : "deprecation" !== oC || /^[A-Z]/.test(ZC.trim()) ? "otherTag" !== oC && (oC = "description", fC.push(ZC))  … [truncated]
+                 kk ? (yk = kk[1].trim(), ak = "deprecation") : Ik.startsWith("@") ? (ak = "otherTag", qk = !0) : "" === Ik.trim() ? qk || (ak = "description", lk.push(Ik)) : "deprecation" !== ak || /^[A-Z]/.test(Ik.trim()) ? "otherTag" !== ak && (ak = "description", lk.push(Ik))  … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L738-L739` → after: `L738-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L738-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L738-L739) · [Before (L738-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L738-L739)

```diff
-               const zC = (0, iC.r)(sC(CC)).flatMap((CC => CC.blocks));
-               for (const CC of (0, iC.h)(zC))
+               const Fk = (0, zk.u)(Wk(kk)).flatMap((kk => kk.blocks));
+               for (const kk of (0, zk.n)(Fk))
```

#### 45. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L823)

```diff
-             if (CC) return (0, gC.jsx)(nC.d, {
+             if (kk) return (0, ek.jsx)(yk.e, {
```

#### 46. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L855)

```diff
-           if (wC) return (0, gC.jsx)(nC.d, {
+           if (Tk) return (0, ek.jsx)(yk.e, {
```

#### 47. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L875` → after: `L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L875) · [Before (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L875)

```diff
-           for (const QC of zC.matchAll(iC.e)) {
+           for (const Xk of Fk.matchAll(zk.h)) {
```

#### 48. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L879` → after: `L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L879) · [Before (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L879)

```diff
-               code: (0, iC.j)(CC, bC)
+               code: (0, zk.p)(kk, ik)
```

#### 49. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L983)

```diff
-               top: wC ? CC.bottom + hz : Math.max(16, CC.top - hz - zC)
+               top: Tk ? kk.bottom + EF : Math.max(16, kk.top - EF - Fk)
```

#### 50. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L991)

```diff
-               "aria-describedby": WC ? RC : void 0,
+               "aria-describedby": tk ? Pk : void 0,
```

#### 51. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1022` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1022) · [Before (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1022)

```diff
-                 }), bC && (0, gC.jsxs)(nC.d, {
+                 }), ik && (0, ek.jsxs)(yk.e, {
```

#### 52. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1049` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1049) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1049)

```diff
-             }), null !== GC && void 0 !== GC ? GC : document.body)]
+             }), null !== xk && void 0 !== xk ? xk : document.body)]
```

#### 53. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1052-L1055` → after: `L1052-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1052-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1052-L1055) · [Before (L1052-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1052-L1055)

```diff
-         var mz = ZC(184),
-           Hz = ZC(4698),
-           Ez = ZC(4701),
-           lz = ZC(4706);
+         var pF = Ik(187),
+           uF = Ik(4767),
+           bF = Ik(4775),
+           RF = Ik(4784);
```

#### 54. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1058-L1061` → after: `L1058-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1058-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1058-L1061) · [Before (L1058-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1058-L1061)

```diff
-             iZ: 30,
-             vZ: .075,
-             eZ: 5,
-             hZ: !1,
+             SI: 30,
+             oI: .075,
+             vI: 5,
+             EI: !1,
```

#### 55. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1065` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1065) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1065)

```diff
-             dZ: "fa-solid fa-computer-mouse",
+             GI: "fa-solid fa-computer-mouse",
```

#### 56. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1070` → after: `L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1070) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1070)

```diff
-             HZ: 3e3,
+             uI: 3e3,
```

#### 57. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1075` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1075) · [Before (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1075)

```diff
-             EZ: !0,
+             bI: !0,
```

#### 58. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1078` → after: `L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1078) · [Before (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1078)

```diff
-             lZ: !1
+             RI: !1
```

#### 59. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1081-L1084` → after: `L1081-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1081-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1081-L1084) · [Before (L1081-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1081-L1084)

```diff
-             iZ: 30,
-             cZ: .25,
-             uZ: 3,
-             rZ: .8,
+             SI: 30,
+             CI: .25,
+             NI: 3,
+             cI: .8,
```

#### 60. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1086-L1089` → after: `L1086-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1086-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1086-L1089) · [Before (L1086-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1086-L1089)

```diff
-             sZ: 1.5,
-             TZ: 8,
-             aZ: 4,
-             hZ: !1,
+             WI: 1.5,
+             fI: 8,
+             BI: 4,
+             EI: !1,
```

#### 61. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1097` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1097) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1097)

```diff
-             DZ: .15,
+             YI: .15,
```

#### 62. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1106-L1109` → after: `L1106-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1106-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1106-L1109) · [Before (L1106-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1106-L1109)

```diff
-             yZ: 5,
-             LZ: 1200,
-             UZ: .15,
-             BZ: 3,
+             gI: 5,
+             mI: 1200,
+             hI: .15,
+             rI: 3,
```

#### 63. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1116-L1117` → after: `L1116-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1116-L1117) · [Before (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1116-L1117)

```diff
-         var cz = ZC(310),
-           uz = ZC(1894);
+         var CF = Ik(318),
+           NF = Ik(1926);
```

#### 64. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1145)

```diff
-           return "string" === typeof CC ? "text" : "entityName" in CC || "translationKey" in CC ? "other" : (0, cz.ub)(CC) ? "progressBar" : (0, cz.tb)(CC) ? "keyBinding" : "icon" in CC ? "icon" : "str" in CC && "string" === typeof CC.str ? "text" : "other"
+           return "string" === typeof kk ? "text" : "entityName" in kk || "translationKey" in kk ? "other" : (0, CF.Db)(kk) ? "progressBar" : (0, CF.Ab)(kk) ? "keyBinding" : "icon" in kk ? "icon" : "str" in kk && "string" === typeof kk.str ? "text" : "other"
```

#### 65. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1265` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1265) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1265)

```diff
-                 options: uz.o
+                 options: NF.l
```

#### 66. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1292)

```diff
-             const oC = QC(null !== (bC = CC[nC]) && void 0 !== bC ? bC : {}, wC + 1);
+             const ak = Xk(null !== (ik = kk[yk]) && void 0 !== ik ? ik : {}, Tk + 1);
```

#### 67. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1315` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1315) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1315)

```diff
-               return `${Math.round(100*Number(yz(CC,["progress"])))}%`;
+               return `${Math.round(100*Number(gF(kk,["progress"])))}%`;
```

#### 68. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1325)

```diff
-           if (Array.isArray(CC)) return `[${CC.map(kz).join(", ")}]`;
+           if (Array.isArray(kk)) return `[${kk.map(MF).join(", ")}]`;
```

#### 69. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1329)

```diff
-               return `${Oz.test(zC)?zC:JSON.stringify(zC)}: ${kz(ZC)}`
+               return `${DF.test(Fk)?Fk:JSON.stringify(Fk)}: ${MF(Ik)}`
```

#### 70. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1331` → after: `L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1331) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1331)

```diff
-             return 0 === zC.length ? "{}" : `{ ${zC.join(", ")} }`
+             return 0 === Fk.length ? "{}" : `{ ${Fk.join(", ")} }`
```

#### 71. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1338-L1339` → after: `L1338-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1338-L1339) · [Before (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1338-L1339)

```diff
-             ZC = `[${zC.join(", ")}]`;
-           return ZC.length <= 60 ? ZC : `[\n${zC.map((CC=>`    ${CC},`)).join("\n")}\n]`
+             Ik = `[${Fk.join(", ")}]`;
+           return Ik.length <= 60 ? Ik : `[\n${Fk.map((kk=>`    ${kk},`)).join("\n")}\n]`
```

#### 72. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1353` → after: `L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1353) · [Before (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1353)

```diff
-               const QC = null !== (ZC = CC[wC + 1]) && void 0 !== ZC ? ZC : "";
+               const Xk = null !== (Ik = kk[Tk + 1]) && void 0 !== Ik ? Ik : "";
```

#### 73. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1358` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1358) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1358)

```diff
-               zC += null !== (QC = CZ[bC]) && void 0 !== QC ? QC : bC
+               Fk += null !== (Xk = FI[ik]) && void 0 !== Xk ? Xk : ik
```

#### 74. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1361)

```diff
-           return `"${zC}"`
+           return `"${Fk}"`
```

#### 75. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1368)

```diff
-           return "ProgressBar" === zC.type ? "number" === typeof zC.progress : "StyledKeyBinding" === zC.type ? uz.o.includes(zC.action) : "string" === typeof zC.icon || "string" === typeof zC.str || "string" === typeof zC.entityName || "string" === typeof zC.translationKey
+           return "ProgressBar" === Fk.type ? "number" === typeof Fk.progress : "StyledKeyBinding" === Fk.type ? NF.l.includes(Fk.action) : "string" === typeof Fk.icon || "string" === typeof Fk.str || "string" === typeof Fk.entityName || "string" === typeof Fk.translationKey
```

#### 76. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1417` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1417) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1417)

```diff
-             error: `Part ${ZC+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
+             error: `Part ${Ik+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
```

#### 77. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1432` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1432) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1432)

```diff
-             progressBar: Xz.progressBar.dZ,
+             progressBar: UF.progressBar.GI,
```

#### 78. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1446` → after: `L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1446) · [Before (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1446)

```diff
-               return null !== (CC = null === (zC = NC.current) || void 0 === zC ? void 0 : zC.getState()) && void 0 !== CC ? CC : nZ
+               return null !== (kk = null === (Fk = Zk.current) || void 0 === Fk ? void 0 : Fk.getState()) && void 0 !== kk ? kk : lI
```

#### 79. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1466` → after: `L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1466) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1466)

```diff
-             const bC = new lz.f[zC](Xz[zC], (CC => {
+             const ik = new RF.c[Fk](UF[Fk], (kk => {
```

#### 80. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1504` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1504) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1504)

```diff
-               "aria-label": "playing" === ZC ? `${zC} quick time event: click or press Space` : void 0,
+               "aria-label": "playing" === Ik ? `${Fk} quick time event: click or press Space` : void 0,
```

#### 81. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1527` → after: `L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1527) · [Before (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1527)

```diff
-                   transform: `scale(${nC})`
+                   transform: `scale(${yk})`
```

#### 82. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1529` → after: `L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1529) · [Before (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1529)

```diff
-                 children: "playing" === ZC && (0, gC.jsx)(Ez.b.Provider, {
+                 children: "playing" === Ik && (0, ek.jsx)(bF.d.Provider, {
```

#### 83. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1531` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1531) · [Before (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1531)

```diff
-                   children: (0, gC.jsx)(Hz.d, {
+                   children: (0, ek.jsx)(uF.b, {
```

#### 84. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1558)

```diff
-                     children: "ready" === ZC ? `Try ${zC}` : "Play again"
+                     children: "ready" === Ik ? `Try ${Fk}` : "Play again"
```

#### 85. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1578` → after: `L1578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1578) · [Before (L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1578)

```diff
-           const nC = `h${Math.min(zC,6)}`;
+           const yk = `h${Math.min(Fk,6)}`;
```

#### 86. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1586-L1587` → after: `L1586-L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1586-L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1586-L1587) · [Before (L1586-L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1586-L1587)

```diff
-                         href: `#${QC}`,
-                         "aria-label": `Link to ${ZC.replace(/`/g,"")}`,children:"#"})]})}function FZ(CC){let{items:zC,ordered:ZC}=CC;const QC=ZC?"ol":"ul";return(0,gC.jsx)(QC,{className:"DocsList",children:zC.map(((CC,zC)=>(0,gC.jsxs)("li",{children:[(0,gC.jsx)(Jz,{text:CC.text}) … [truncated]
+                         href: `#${Xk}`,
+                         "aria-label": `Link to ${Ik.replace(/`/g,"")}`,children:"#"})]})}function tI(kk){let{items:Fk,ordered:Ik}=kk;const Xk=Ik?"ol":"ul";return(0,ek.jsx)(Xk,{className:"DocsList",children:Fk.map(((kk,Fk)=>(0,ek.jsxs)("li",{children:[(0,ek.jsx)(VF,{text:kk.text}) … [truncated]
```

#### 87. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1590)

```diff
-                         })\ s * ([ ^ `]+?)\s*\1$/);return zC?zC[2]:null}function JZ(CC){return"paragraph"===CC.kind&&""===CC.text.trim()}function IZ(CC){const zC={name:CC.heading.text,description:[],params:[],returns:null};let ZC="description";for(const wC of CC.blocks)if(!JZ(wC) … [truncated]
+                         })\ s * ([ ^ `]+?)\s*\1$/);return Fk?Fk[2]:null}function VI(kk){return"paragraph"===kk.kind&&""===kk.text.trim()}function zI(kk){const Fk={name:kk.heading.text,description:[],params:[],returns:null};let Ik="description";for(const Tk of kk.blocks)if(!VI(Tk) … [truncated]
```

#### 88. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1628` → after: `L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1628) · [Before (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1628)

```diff
-                             return `${dZ[CC]}-${(0,iC.p)(zC)}`
+                             return `${GI[kk]}-${(0,zk.t)(Fk)}`
```

#### 89. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1637` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1637) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1637)

```diff
-                               for (const wC of (0, iC.r)(zC)) {
+                               for (const Tk of (0, zk.u)(Fk)) {
```

#### 90. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1646)

```diff
-                                       for (let CC = 2; ZC.has(fC); CC++) fC = `${nC}-${CC}`;
+                                       for (let kk = 2; Ik.has(lk); kk++) lk = `${yk}-${kk}`;
```

#### 91. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1650` → after: `L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1650) · [Before (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1650)

```diff
-                                         heading: null !== (QC = null === (bC = wC.heading) || void 0 === bC ? void 0 : bC.text) && void 0 !== QC ? QC : ""
+                                         heading: null !== (Xk = null === (ik = Tk.heading) || void 0 === ik ? void 0 : ik.text) && void 0 !== Xk ? Xk : ""
```

#### 92. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1672-L1673` → after: `L1672-L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1672-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1672-L1673) · [Before (L1672-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1672-L1673)

```diff
-                           var cZ = ZC(4166),
-                             uZ = ZC(4179);
+                           var CI = Ik(4196),
+                             NI = Ik(4210);
```

#### 93. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1676)

```diff
-                             return Object.hasOwn(cZ.e, CC) ? cZ.e[CC] : null
+                             return Object.hasOwn(CI.g, kk) ? CI.g[kk] : null
```

#### 94. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1733` → after: `L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1733) · [Before (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1733)

```diff
-                                 nC = null !== (ZC = CC.maxColor) && void 0 !== ZC ? ZC : bC,
+                                 yk = null !== (Ik = kk.maxColor) && void 0 !== Ik ? Ik : ik,
```

#### 95. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1735` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1735) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1735)

```diff
-                                 oC = [aZ(bC[0], nC[0], fC) / 255, aZ(bC[1], nC[1], fC) / 255, aZ(bC[2], nC[2], fC) / 255, aZ(null !== (QC = bC[3]) && void 0 !== QC ? QC : 1, null !== (wC = nC[3]) && void 0 !== wC ? wC : 1, fC)];
+                                 ak = [BI(ik[0], yk[0], lk) / 255, BI(ik[1], yk[1], lk) / 255, BI(ik[2], yk[2], lk) / 255, BI(null !== (Xk = ik[3]) && void 0 !== Xk ? Xk : 1, null !== (Tk = yk[3]) && void 0 !== Tk ? Tk : 1, lk)];
```

#### 96. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1766` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1766) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1766)

```diff
-                                 return QC(ZC(wC), ZC(wC + 1), bC > 0 ? (zC - CC[wC].at) / bC : 1)
+                                 return Xk(Ik(Tk), Ik(Tk + 1), ik > 0 ? (Fk - kk[Tk].at) / ik : 1)
```

#### 97. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1781)

```diff
-                               CC.pos[bC] += CC.dir[bC] * QC, CC.dir[bC] += (null !== (wC = zC[bC]) && void 0 !== wC ? wC : 0) * ZC
+                               kk.pos[ik] += kk.dir[ik] * Xk, kk.dir[ik] += (null !== (Tk = Fk[ik]) && void 0 !== Tk ? Tk : 0) * Ik
```

#### 98. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1791)

```diff
-                             return `[${CC.map(BZ).join(", ")}]`
+                             return `[${kk.map(rI).join(", ")}]`
```

#### 99. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1795-L1796` → after: `L1795-L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1795-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1795-L1796) · [Before (L1795-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1795-L1796)

```diff
-                             const ZC = `${zC}    `;
-                             return `[\n${(tZ(CC)?CC.map((CC=>{const zC=[`${ZC}    timeFraction: ${BZ(CC.timeFraction)},`,`${ZC}    minColor: ${OZ(CC.minColor)},`];return CC.maxColor&&zC.push(`${ZC}    maxColor: ${OZ(CC.maxColor)},`),`${ZC}{\n${zC.join("\n")}\n${ZC}},`})):CC.map(( … [truncated]
+                             const Ik = `${Fk}    `;
+                             return `[\n${(dI(kk)?kk.map((kk=>{const Fk=[`${Ik}    timeFraction: ${rI(kk.timeFraction)},`,`${Ik}    minColor: ${DI(kk.minColor)},`];return kk.maxColor&&Fk.push(`${Ik}    maxColor: ${DI(kk.maxColor)},`),`${Ik}{\n${Fk.join("\n")}\n${Ik}},`})):kk.map(( … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1803` → after: `L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1803) · [Before (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1803)

```diff
-                             }, `))).join("\n")}\n${zC}]`
+                             }, `))).join("\n")}\n${Fk}]`
```

#### 101. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1810)

```diff
-                             return `${zC?"song":"sound"}:${CC}`
+                             return `${Fk?"song":"sound"}:${kk}`
```

#### 102. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1872` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1872) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1872)

```diff
-                             }), Promise.all([ZC.e(222), ZC.e(249)]).then((() => ZC(39621))).then((ZC => {
+                             }), Promise.all([Ik.e(222), Ik.e(249)]).then((() => Ik(39792))).then((Ik => {
```

#### 103. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1887` → after: `L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1887) · [Before (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1887)

```diff
-                                   }) : (nQ = null !== (zC = null === (ZC = QQ.track) || void 0 === ZC ? void 0 : ZC.duration) && void 0 !== zC ? zC : 0, qQ({
+                                   }) : (lX = null !== (Fk = null === (Ik = TX.track) || void 0 === Ik ? void 0 : Ik.duration) && void 0 !== Fk ? Fk : 0, LX({
```

#### 104. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1893` → after: `L1893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1893) · [Before (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1893)

```diff
-                               console.error(`Could not play docs sound ${CC}`, zC), wC === bQ && oQ({
+                               console.error(`Could not play docs sound ${kk}`, Fk), Tk === yX && qX({
```

#### 105. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1904` → after: `L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1904) · [Before (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1904)

```diff
-                             if ("playing" === CC.status && wQ) return nQ = wQ.yG(), wQ.pause(), void qQ({
+                             if ("playing" === kk.status && iX) return lX = iX.OJ(), iX.pause(), void LX({
```

#### 106. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1917` → after: `L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1917) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1917)

```diff
-                             return wQ && "playing" === (null === (CC = QQ.track) || void 0 === CC ? void 0 : CC.status) ? wQ.yG() : nQ
+                             return iX && "playing" === (null === (kk = TX.track) || void 0 === kk ? void 0 : kk.status) ? iX.OJ() : lX
```

#### 107. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1939)

```diff
-                               return GQ ??= Promise.all([ZC.e(72), ZC.e(75), ZC.e(74), ZC.e(73), ZC.e(186), ZC.e(98), ZC.e(226)]).then((() => ZC(39617))), GQ.then((ZC => {
+                               return PX ??= Promise.all([Ik.e(72), Ik.e(75), Ik.e(74), Ik.e(73), Ik.e(186), Ik.e(98), Ik.e(226)]).then((() => Ik(39784))), PX.then((Ik => {
```

#### 108. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1955` → after: `L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1955) · [Before (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1955)

```diff
-                                 return `${CC}-${zC}`
+                                 return `${kk}-${Fk}`
```

#### 109. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1958` → after: `L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1958) · [Before (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1958)

```diff
-                             return null === ZC ? null : `${lZ}/${ZC}.webp`
+                             return null === Ik ? null : `${RI}/${Ik}.webp`
```

#### 110. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1971` → after: `L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1971) · [Before (L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1971)

```diff
-                             if ("icons" === zC && rz(fC)) return (0, gC.jsx)(AZ.c, {
+                             if ("icons" === Fk && cF(lk)) return (0, ek.jsx)(QI.e, {
```

#### 111. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1977)

```diff
-                             if ("icons" === zC) FC = null !== (WC = null === wC || void 0 === wC ? void 0 : wC.getIngameIconUrl(fC)) && void 0 !== WC ? WC : null;
+                             if ("icons" === Fk) Lk = null !== (tk = null === Tk || void 0 === Tk ? void 0 : Tk.getIngameIconUrl(lk)) && void 0 !== tk ? tk : null;
```

#### 112. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1980-L1981` → after: `L1980-L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1980-L1981) · [Before (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1980-L1981)

```diff
-                               FC = null !== (NC = null === wC || void 0 === wC ? void 0 : wC.getParticleTextureUrl(null !== (MC = null === (SC = rZ(fC)) || void 0 === SC ? void 0 : SC.texture) && void 0 !== MC ? MC : fC)) && void 0 !== NC ? NC : null
-                             } else "skins" === zC && (FC = null !== nC && void 0 !== nC ? nC : xQ.test(fC) ? `/textures/charSkins/previews/${fC}_preview.png` : null);
+                               Lk = null !== (Zk = null === Tk || void 0 === Tk ? void 0 : Tk.getParticleTextureUrl(null !== (jk = null === (wk = cI(lk)) || void 0 === wk ? void 0 : wk.texture) && void 0 !== jk ? jk : lk)) && void 0 !== Zk ? Zk : null
+                             } else "skins" === Fk && (Lk = null !== yk && void 0 !== yk ? yk : sX.test(lk) ? `/textures/charSkins/previews/${lk}_preview.png` : null);
```

#### 113. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1990)

```diff
-                               srcSet: FC === nC ? `${FC} 2x` : void 0,
+                               srcSet: Lk === yk ? `${Lk} 2x` : void 0,
```

#### 114. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L1994` → after: `L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L1994) · [Before (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L1994)

```diff
-                                 console.warn(`Docs gallery: could not load ${FC}`), qC(!0)
+                                 console.warn(`Docs gallery: could not load ${Lk}`), qk(!0)
```

#### 115. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2018` → after: `L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2018) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2018)

```diff
-                               "aria-label": wC ? `Pause ${zC.name}` : `Play ${zC.name}`,
+                               "aria-label": Tk ? `Pause ${Fk.name}` : `Play ${Fk.name}`,
```

#### 116. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2055)

```diff
-                                 placeholder: `Filter ${ZC.length} names\u2026`,
+                                 placeholder: `Filter ${Ik.length} names\u2026`,
```

#### 117. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2063` → after: `L2063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2063) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2063)

```diff
-                                 className: bC()("DocsGalleryGrid", `Kind-${zC}`, {
+                                 className: ik()("DocsGalleryGrid", `Kind-${Fk}`, {
```

#### 118. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2077)

```diff
-                                     title: `Play "${CC.name}" in the playground and copy its name`,
+                                     title: `Play "${kk.name}" in the playground and copy its name`,
```

#### 119. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2106` → after: `L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2106) · [Before (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2106)

```diff
-                                     title: `Copy "${CC.name}"`,
+                                     title: `Copy "${kk.name}"`,
```

#### 120. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2179` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2179) · [Before (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2179)

```diff
-                                 return (0, gC.jsxs)(nC.d, {
+                                 return (0, ek.jsxs)(yk.e, {
```

#### 121. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2213` → after: `L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2213) · [Before (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2213)

```diff
-                                   backgroundImage: `url("${zC.top}")`
+                                   backgroundImage: `url("${Fk.top}")`
```

#### 122. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2218` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2218) · [Before (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2218)

```diff
-                                   backgroundImage: `url("${zC.left}")`
+                                   backgroundImage: `url("${Fk.left}")`
```

#### 123. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2223` → after: `L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2223) · [Before (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2223)

```diff
-                                   backgroundImage: `url("${zC.right}")`
+                                   backgroundImage: `url("${Fk.right}")`
```

#### 124. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2239` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2239) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2239)

```diff
-                                 console.warn(`Docs catalogue: could not load ${zC}`), wC(!0)
+                                 console.warn(`Docs catalogue: could not load ${Fk}`), Tk(!0)
```

#### 125. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2250)

```diff
-                               nC = (0, fC.v)(),
+                               yk = (0, lk.q)(),
```

#### 126. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2258` → after: `L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2258) · [Before (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2258)

```diff
-                               const CC = (0, iC.n)(nC.hash),
+                               const kk = (0, zk.s)(yk.hash),
```

#### 127. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2302)

```diff
-                                           title: `Show only ${zC} with ${CC.meaning} variants`,
+                                           title: `Show only ${Fk} with ${kk.meaning} variants`,
```

#### 128. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2325-L2326` → after: `L2325-L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2325-L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2325-L2326) · [Before (L2325-L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2325-L2326)

```diff
-                                 placeholder: `Search ${ZC.entries.length} ${zC}\u2026`,
-                                 label: `Search ${zC}`,
+                                 placeholder: `Search ${Ik.entries.length} ${Fk}\u2026`,
+                                 label: `Search ${Fk}`,
```

#### 129. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2388-L2390` → after: `L2388-L2390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2388-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2388-L2390) · [Before (L2388-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2388-L2390)

```diff
-                           var EQ = ZC(4755),
-                             lQ = ZC(1520);
-                           const XQ = .95 * EQ.b;
+                           var bX = Ik(4821),
+                             RX = Ik(1534);
+                           const UX = .95 * bX.d;
```

#### 130. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2406` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2406) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2406)

```diff
-                             const ZC = `${"#".repeat(zC)} `,
+                             const Ik = `${"#".repeat(Fk)} `,
```

#### 131. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2409` → after: `L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2409) · [Before (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2409)

```diff
-                             for (const bC of CC.split("\n")) cQ(bC) ? wC = !wC : !wC && bC.startsWith(ZC) && QC.push(bC.slice(ZC.length).trim());
+                             for (const ik of kk.split("\n")) CX(ik) ? Tk = !Tk : !Tk && ik.startsWith(Ik) && Xk.push(ik.slice(Ik.length).trim());
```

#### 132. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2434` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2434) · [Before (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2434)

```diff
-                                       const QC = null !== (ZC = rQ(CC, 2)[0]) && void 0 !== ZC ? ZC : "";
+                                       const Xk = null !== (Ik = cX(kk, 2)[0]) && void 0 !== Ik ? Ik : "";
```

#### 133. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2448` → after: `L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2448) · [Before (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2448)

```diff
-                                         return bC = null !== (zC = ZC.at(-1)) && void 0 !== zC ? zC : bC, {
+                                         return ik = null !== (Fk = Ik.at(-1)) && void 0 !== Fk ? Fk : ik, {
```

#### 134. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2457` → after: `L2457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2457) · [Before (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2457)

```diff
-                                   groups: ZC.length > 1 ? ZC : []
+                                   groups: Ik.length > 1 ? Ik : []
```

#### 135. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2467` → after: `L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2467) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2467)

```diff
-                                   const CC = `${QC.id}#${(0,iC.p)(wC)}`;
+                                   const kk = `${Xk.id}#${(0,zk.t)(Tk)}`;
```

#### 136. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2478-L2479` → after: `L2478-L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2478-L2479) · [Before (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2478-L2479)

```diff
-                                   path: (0, EQ.p)(zC.slug),
-                                   markdown: `# ${zC.title}\n\n${this.resolveLinks(zC,sQ(zC))}\n`,
+                                   path: (0, bX.r)(Fk.slug),
+                                   markdown: `# ${Fk.title}\n\n${this.resolveLinks(Fk,WX(Fk))}\n`,
```

#### 137. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2485` → after: `L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2485) · [Before (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2485)

```diff
-                               return `${this.origin}${CC}`
+                               return `${this.origin}${kk}`
```

#### 138. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2495` → after: `L2495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2495) · [Before (L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2495)

```diff
-                               }]).filter((CC => CC.markdown.length > EQ.b))))
+                               }]).filter((kk => kk.markdown.length > bX.d))))
```

#### 139. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2498-L2499` → after: `L2498-L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2498-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2498-L2499) · [Before (L2498-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2498-L2499)

```diff
-                               const ZC = zC && this.partPaths.get(`${CC.id}#${zC}`) || (0, EQ.p)(CC.slug);
-                               return this.url(zC ? `${ZC}#${zC}` : ZC)
+                               const Ik = Fk && this.partPaths.get(`${kk.id}#${Fk}`) || (0, bX.r)(kk.slug);
+                               return this.url(Fk ? `${Ik}#${Fk}` : Ik)
```

#### 140. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2504-L2505` → after: `L2504-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2504-L2505) · [Before (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2504-L2505)

```diff
-                                 const wC = null !== (QC = aC(ZC)) && void 0 !== QC ? QC : this.samePageTarget(CC, ZC);
-                                 return wC ? `](${this.markdownUrl(wC.page,wC.anchor)})` : zC
+                                 const Tk = null !== (Xk = Bk(Ik)) && void 0 !== Xk ? Xk : this.samePageTarget(kk, Ik);
+                                 return Tk ? `](${this.markdownUrl(Tk.page,Tk.anchor)})` : Fk
```

#### 141. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2509` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2509) · [Before (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2509)

```diff
-                               const ZC = (0, iC.p)(zC.slice(1));
+                               const Ik = (0, zk.t)(Fk.slice(1));
```

#### 142. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2521)

```diff
-                                   return ZC === QC ? ZC : `${ZC} to ${QC}`
+                                   return Ik === Xk ? Ik : `${Ik} to ${Xk}`
```

#### 143. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2524-L2525` → after: `L2524-L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2524-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2524-L2525) · [Before (L2524-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2524-L2525)

```diff
-                                 nC = wC ? `It covers ${wC}. ` : "",
-                                 fC = `Part ${ZC+1} of ${QC} of [${CC.title}](${this.url((0,EQ.p)(CC.slug))}). ${nC}[llms.txt](${this.url(EQ.g)}) lists every part.`;
+                                 yk = Tk ? `It covers ${Tk}. ` : "",
+                                 lk = `Part ${Ik+1} of ${Xk} of [${kk.title}](${this.url((0,bX.r)(kk.slug))}). ${yk}[llms.txt](${this.url(bX.g)}) lists every part.`;
```

#### 144. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2529` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2529) · [Before (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2529)

```diff
-                                 markdown: `# ${CC.title}, part ${ZC+1} of ${QC}\n\n${fC}\n\n${this.resolveLinks(CC,bC)}\n`
+                                 markdown: `# ${kk.title}, part ${Ik+1} of ${Xk}\n\n${lk}\n\n${this.resolveLinks(kk,ik)}\n`
```

#### 145. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2533)

```diff
-                               const zC = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that … [truncated]
+                               const Fk = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that … [truncated]
```

#### 146. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2535` → after: `L2535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2535) · [Before (L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2535)

```diff
-                                 zC.push("", `## ${ZC.title}`, "");
+                                 Fk.push("", `## ${Ik.title}`, "");
```

#### 147. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2542-L2544` → after: `L2542-L2544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2542-L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2542-L2544) · [Before (L2542-L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2542-L2544)

```diff
-                                     bC = `About ${aQ(ZC.markdown.length)} tokens${wC.length>0?`, in ${wC.length} parts:`:"."}`;
-                                   zC.push(`- [${QC.title}](${this.url(ZC.path)}): ${QC.summary} ${bC}`), wC.forEach(((CC, ZC) => {
-                                     zC.push(`  - [Part ${ZC+1}${CC.label?`: ${CC.label}`:""}](${this.url(CC.path)})`)
+                                     ik = `About ${BX(Ik.markdown.length)} tokens${Tk.length>0?`, in ${Tk.length} parts:`:"."}`;
+                                   Fk.push(`- [${Xk.title}](${this.url(Ik.path)}): ${Xk.summary} ${ik}`), Tk.forEach(((kk, Ik) => {
+                                     Fk.push(`  - [Part ${Ik+1}${kk.label?`: ${kk.label}`:""}](${this.url(kk.path)})`)
```

#### 148. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2548)

```diff
-                               return zC.push("", "## Optional", "", `- [Every page in one file](${this.url(EQ.d)}): About ${aQ(CC.length)} tokens, for a model with a large context window.`, ""), zC.join("\n")
+                               return Fk.push("", "## Optional", "", `- [Every page in one file](${this.url(bX.f)}): About ${BX(kk.length)} tokens, for a model with a large context window.`, ""), Fk.join("\n")
```

#### 149. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2557` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2557) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2557)

```diff
-                                   [EQ.m, zC],
+                                   [bX.k, Fk],
```

#### 150. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2559` → after: `L2559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2559) · [Before (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2559)

```diff
-                                   [EQ.d, CC]
+                                   [bX.f, kk]
```

#### 151. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2570` → after: `L2570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2570) · [Before (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2570)

```diff
-                             return `${Math.max(1,Math.round(CC/4e3))}K`
+                             return `${Math.max(1,Math.round(kk/4e3))}K`
```

#### 152. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2575)

```diff
-                             return tQ ??= new TQ(XC, lQ.d), tQ
+                             return dX ??= new fX(Uk, RX.b), dX
```

#### 153. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2586` → after: `L2586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2586) · [Before (L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2586)

```diff
-                             return DQ().getPage(CC.id).parts.length > 0 ? `Read ${EQ.k}, then the parts of the Bloxd Code API's ${CC.title} page it lists, so I can ask questions about it.` : `Read ${lQ.d}${(0,EQ.p)(CC.slug)} so I can ask questions about it. ${EQ.k} lists every pa … [truncated]
+                             return YX().getPage(kk.id).parts.length > 0 ? `Read ${bX.h}, then the parts of the Bloxd Code API's ${kk.title} page it lists, so I can ask questions about it.` : `Read ${RX.b}${(0,bX.r)(kk.slug)} so I can ask questions about it. ${bX.h} lists every pa … [truncated]
```

#### 154. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2609` → after: `L2609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2609) · [Before (L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2609)

```diff
-                                 href: `${CC.url}${encodeURIComponent(yQ(zC))}`,
+                                 href: `${kk.url}${encodeURIComponent(gX(Fk))}`,
```

#### 155. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2622` → after: `L2622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2622) · [Before (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2622)

```diff
-                             return `#${[0,1,2].map((zC=>Math.round(Math.min(255,Math.max(0,CC[zC]))).toString(16).padStart(2,"0"))).join("")}`
+                             return `#${[0,1,2].map((Fk=>Math.round(Math.min(255,Math.max(0,kk[Fk]))).toString(16).padStart(2,"0"))).join("")}`
```

#### 156. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2647` → after: `L2647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2647) · [Before (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2647)

```diff
-                                   children: bC === nC ? bC : `${bC}\u2013${nC}`
+                                   children: ik === yk ? ik : `${ik}\u2013${yk}`
```

#### 157. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2657` → after: `L2657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2657) · [Before (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2657)

```diff
-                                   "aria-label": `Minimum ${zC.toLowerCase()}`,
+                                   "aria-label": `Minimum ${Fk.toLowerCase()}`,
```

#### 158. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2668` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2668) · [Before (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2668)

```diff
-                                   "aria-label": `Maximum ${zC.toLowerCase()}`,
+                                   "aria-label": `Maximum ${Fk.toLowerCase()}`,
```

#### 159. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2730` → after: `L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2730) · [Before (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2730)

```diff
-                                   "aria-label": `Colour ${zC+1}`,
+                                   "aria-label": `Colour ${Fk+1}`,
```

#### 160. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2756` → after: `L2756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2756) · [Before (L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2756)

```diff
-                                 const QC = null !== (ZC = CC.maxColor) && void 0 !== ZC ? ZC : CC.minColor;
+                                 const Xk = null !== (Ik = kk.maxColor) && void 0 !== Ik ? Ik : kk.minColor;
```

#### 161. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2765` → after: `L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2765) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2765)

```diff
-                                       background: `linear-gradient(90deg, ${UQ(CC.minColor)}, ${UQ(QC)})`
+                                       background: `linear-gradient(90deg, ${hX(kk.minColor)}, ${hX(Xk)})`
```

#### 162. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2770` → after: `L2770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2770) · [Before (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2770)

```diff
-                                     "aria-label": `Minimum colour at ${Math.round(100*CC.timeFraction)}%`,
+                                     "aria-label": `Minimum colour at ${Math.round(100*kk.timeFraction)}%`,
```

#### 163. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2780` → after: `L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2780) · [Before (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2780)

```diff
-                                     "aria-label": `Maximum colour at ${Math.round(100*CC.timeFraction)}%`,
+                                     "aria-label": `Maximum colour at ${Math.round(100*kk.timeFraction)}%`,
```

#### 164. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2802` → after: `L2802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2802) · [Before (L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2802)

```diff
-                                 fC = `${wC}|${bC}|${nC}`;
+                                 lk = `${Tk}|${ik}|${yk}`;
```

#### 165. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2809` → after: `L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2809) · [Before (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2809)

```diff
-                               return FC ? (FC.imageSmoothingEnabled = !1, FC.drawImage(CC, 0, 0, qC.width, qC.height), FC.globalCompositeOperation = "multiply", FC.fillStyle = `rgb(${wC/31*255}, ${bC/31*255}, ${nC/31*255})`, FC.fillRect(0, 0, qC.width, qC.height), FC.globalCompos … [truncated]
+                               return Lk ? (Lk.imageSmoothingEnabled = !1, Lk.drawImage(kk, 0, 0, qk.width, qk.height), Lk.globalCompositeOperation = "multiply", Lk.fillStyle = `rgb(${Tk/31*255}, ${ik/31*255}, ${yk/31*255})`, Lk.fillRect(0, 0, qk.width, qk.height), Lk.globalCompos … [truncated]
```

#### 166. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2847` → after: `L2847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2847) · [Before (L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2847)

```diff
-                                 console.warn(`Particle preview: could not load the texture ${ZC}`)
+                                 console.warn(`Particle preview: could not load the texture ${Ik}`)
```

#### 167. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L2973` → after: `L2973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L2973) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L2973)

```diff
-                                     zC.globalAlpha = CC.usesAlpha ? Math.min(1, Math.max(0, oC)) : 1, vC ? zC.drawImage(ZC.get(vC, bC, nC, fC), wC.x - qC / 2, wC.y - qC / 2, qC, qC) : (zC.fillStyle = `rgb(${255*bC}, ${255*nC}, ${255*fC})`, zC.fillRect(wC.x - qC / 2, wC.y - qC / 2 … [truncated]
+                                     Fk.globalAlpha = kk.usesAlpha ? Math.min(1, Math.max(0, ak)) : 1, Sk ? Fk.drawImage(Ik.get(Sk, ik, yk, lk), Tk.x - qk / 2, Tk.y - qk / 2, qk, qk) : (Fk.fillStyle = `rgb(${255*ik}, ${255*yk}, ${255*lk})`, Fk.fillRect(Tk.x - qk / 2, Tk.y - qk / 2 … [truncated]
```

#### 168. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3000` → after: `L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3000) · [Before (L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3000)

```diff
-                               "aria-label": `Preview of a ${zC.texture} particle effect. Drag to turn the view.`
+                               "aria-label": `Preview of a ${Fk.texture} particle effect. Drag to turn the view.`
```

#### 169. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3032` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3032) · [Before (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3032)

```diff
-                                   const zC = "example" === CC ? sZ : rZ(CC);
+                                   const Fk = "example" === kk ? WI : cI(kk);
```

#### 170. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3051-L3054` → after: `L3051-L3054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3051-L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3051-L3054) · [Before (L3051-L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3051-L3054)

```diff
-                                   if (null !== zC) return `${VZ}    presetId: "${zC}",\n${CQ}\n})`;
-                                   const ZC = CC.velocityGradients.map((CC => `        {\n            timeFraction: ${BZ(CC.timeFraction)},\n            factor: ${BZ(CC.factor)},\n            factor2: ${BZ(CC.factor2)},\n        },`)),
-                                     QC = [`    dir1: ${OZ(CC.dir1)},`, `    dir2: ${OZ(CC.dir2)},`, CQ, `    texture: "${CC.texture}",`, `    minLifeTime: ${BZ(CC.minLifeTime)},`, `    maxLifeTime: ${BZ(CC.maxLifeTime)},`, `    minEmitPower: ${BZ(CC.minEmitPower)},`, `    maxEmit … [truncated]
-                                   return void 0 !== CC.hideDist && QC.push(`    hideDist: ${BZ(CC.hideDist)},`), `${VZ}${QC.join("\n")}\n})`
+                                   if (null !== Fk) return `${kX}    presetId: "${Fk}",\n${FX}\n})`;
+                                   const Ik = kk.velocityGradients.map((kk => `        {\n            timeFraction: ${rI(kk.timeFraction)},\n            factor: ${rI(kk.factor)},\n            factor2: ${rI(kk.factor2)},\n        },`)),
+                                     Xk = [`    dir1: ${DI(kk.dir1)},`, `    dir2: ${DI(kk.dir2)},`, FX, `    texture: "${kk.texture}",`, `    minLifeTime: ${rI(kk.minLifeTime)},`, `    maxLifeTime: ${rI(kk.maxLifeTime)},`, `    minEmitPower: ${rI(kk.minEmitPower)},`, `    maxEmit … [truncated]
+                                   return void 0 !== kk.hideDist && Xk.push(`    hideDist: ${rI(kk.hideDist)},`), `${kX}${Xk.join("\n")}\n})`
```

#### 171. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3056` → after: `L3056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3056) · [Before (L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3056)

```diff
-                                 iC = nC.includes(qC.texture) ? nC : [...nC, qC.texture];
+                                 zk = yk.includes(qk.texture) ? yk : [...yk, qk.texture];
```

#### 172. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3097` → after: `L3097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3097) · [Before (L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3097)

```diff
-                                     value: null !== WC && void 0 !== WC ? WC : "custom",
+                                     value: null !== tk && void 0 !== tk ? tk : "custom",
```

#### 173. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3108` → after: `L3108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3108) · [Before (L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3108)

```diff
-                                     }), cZ.b.map((CC => (0, gC.jsx)("option", {
+                                     }), CI.e.map((kk => (0, ek.jsx)("option", {
```

#### 174. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3119` → after: `L3119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3119) · [Before (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3119)

```diff
-                                       textureUrl: null !== (ZC = null === fC || void 0 === fC ? void 0 : fC.getParticleTextureUrl(qC.texture)) && void 0 !== ZC ? ZC : null,
+                                       textureUrl: null !== (Ik = null === lk || void 0 === lk ? void 0 : lk.getParticleTextureUrl(qk.texture)) && void 0 !== Ik ? Ik : null,
```

#### 175. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3165` → after: `L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3165) · [Before (L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3165)

```diff
-                                           const ZC = null !== (zC = null === fC || void 0 === fC ? void 0 : fC.getParticleTextureUrl(CC)) && void 0 !== zC ? zC : null;
+                                           const Ik = null !== (Fk = null === lk || void 0 === lk ? void 0 : lk.getParticleTextureUrl(kk)) && void 0 !== Fk ? Fk : null;
```

#### 176. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3243` → after: `L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3243) · [Before (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3243)

```diff
-                                       value: null !== (wC = qC.gravity[1]) && void 0 !== wC ? wC : 0,
+                                       value: null !== (Tk = qk.gravity[1]) && void 0 !== Tk ? Tk : 0,
```

#### 177. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3247` → after: `L3247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3247) · [Before (L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3247)

```diff
-                                           gravity: [null !== (zC = qC.gravity[0]) && void 0 !== zC ? zC : 0, CC, null !== (ZC = qC.gravity[2]) && void 0 !== ZC ? ZC : 0]
+                                           gravity: [null !== (Fk = qk.gravity[0]) && void 0 !== Fk ? Fk : 0, kk, null !== (Ik = qk.gravity[2]) && void 0 !== Ik ? Ik : 0]
```

#### 178. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3292-L3293` → after: `L3292-L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3292-L3293) · [Before (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3292-L3293)

```diff
-                           var ow = ZC(4397),
-                             qw = ZC(1811);
+                           var qT = Ik(4466),
+                             LT = Ik(1849);
```

#### 179. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3306-L3307` → after: `L3306-L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3306-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3306-L3307) · [Before (L3306-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3306-L3307)

```diff
-                               oC = null !== (zC = null === (ZC = wC.style) || void 0 === ZC ? void 0 : ZC.fontSize) && void 0 !== zC ? zC : "1.8em",
-                               qC = (0, cz.Wb)(wC.style);
+                               ak = null !== (Fk = null === (Ik = Tk.style) || void 0 === Ik ? void 0 : Ik.fontSize) && void 0 !== Fk ? Fk : "1.8em",
+                               qk = (0, CF.fc)(Tk.style);
```

#### 180. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3317` → after: `L3317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3317) · [Before (L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3317)

```diff
-                               title: fC ? void 0 : `No Bloxd icon, item or block is called "${wC.icon}"`,
+                               title: lk ? void 0 : `No Bloxd icon, item or block is called "${Tk.icon}"`,
```

#### 181. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3322-L3323` → after: `L3322-L3323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3322-L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3322-L3323) · [Before (L3322-L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3322-L3323)

```diff
-                                   maskImage: `url("${fC}")`,
-                                   WebkitMaskImage: `url("${fC}")`
+                                   maskImage: `url("${lk}")`,
+                                   WebkitMaskImage: `url("${lk}")`
```

#### 182. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3346` → after: `L3346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3346) · [Before (L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3346)

```diff
-                               nC.length > 0 && (wC.push((0, gC.jsx)(qw.e, {
+                               yk.length > 0 && (Tk.push((0, ek.jsx)(LT.c, {
```

#### 183. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3348` → after: `L3348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3348) · [Before (L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3348)

```diff
-                               }, `run-${CC}`)), nC = [])
+                               }, `run-${kk}`)), yk = [])
```

#### 184. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3354` → after: `L3354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3354) · [Before (L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3354)

```diff
-                               }, `icon-${zC}`)))
+                               }, `icon-${Fk}`)))
```

#### 185. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3367` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3367) · [Before (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3367)

```diff
-                             return zC.startsWith("#") ? zC : "#000000"
+                             return Fk.startsWith("#") ? Fk : "#000000"
```

#### 186. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3381` → after: `L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3381) · [Before (L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3381)

```diff
-                                 "aria-label": `${ZC} picker`,
+                                 "aria-label": `${Ik} picker`,
```

#### 187. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3437` → after: `L3437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3437) · [Before (L3437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3437)

```diff
-                                     children: "bloxd" === CC ? `Bloxd icons (${ow.c.length})` : `Font Awesome (${ZC.length})`
+                                     children: "bloxd" === kk ? `Bloxd icons (${qT.c.length})` : `Font Awesome (${Ik.length})`
```

#### 188. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3464` → after: `L3464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3464) · [Before (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3464)

```diff
-                                     children: "fontAwesome" === fC ? (0, gC.jsx)(AZ.c, {
+                                     children: "fontAwesome" === lk ? (0, ek.jsx)(QI.e, {
```

#### 189. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3491` → after: `L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3491) · [Before (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3491)

```diff
-                             } = zC, fC = CC => "" !== CC || zC.isRequired ? CC : void 0;
+                             } = Fk, lk = kk => "" !== kk || Fk.isRequired ? kk : void 0;
```

#### 190. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3495` → after: `L3495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3495) · [Before (L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3495)

```diff
-                                   value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
+                                   value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
```

#### 191. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3503` → after: `L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3503) · [Before (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3503)

```diff
-                                   value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
+                                   value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
```

#### 192. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3512` → after: `L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3512) · [Before (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3512)

```diff
-                                   value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
+                                   value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
```

#### 193. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3523` → after: `L3523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3523) · [Before (L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3523)

```diff
-                                   value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
+                                   value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
```

#### 194. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3530` → after: `L3530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3530) · [Before (L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3530)

```diff
-                                 const CC = Array.isArray(ZC) ? ZC : [],
+                                 const kk = Array.isArray(Ik) ? Ik : [],
```

#### 195. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3532` → after: `L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3532) · [Before (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3532)

```diff
-                                     wC(CC.length > 0 ? CC : void 0)
+                                     Tk(kk.length > 0 ? kk : void 0)
```

#### 196. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3540` → after: `L3540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3540) · [Before (L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3540)

```diff
-                                       label: `${nC} ${QC+1}`,
+                                       label: `${yk} ${Xk+1}`,
```

#### 197. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3542` → after: `L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3542) · [Before (L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3542)

```diff
-                                         zC(CC.map(((CC, zC) => zC === QC ? ZC : CC)))
+                                         Fk(kk.map(((kk, Fk) => Fk === Xk ? Ik : kk)))
```

#### 198. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3547` → after: `L3547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3547) · [Before (L3547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3547)

```diff
-                                       "aria-label": `Remove colour ${QC+1}`,
+                                       "aria-label": `Remove colour ${Xk+1}`,
```

#### 199. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3560` → after: `L3560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3560) · [Before (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3560)

```diff
-                                       zC([...CC, null !== (ZC = CC.at(-1)) && void 0 !== ZC ? ZC : "#ffffff"])
+                                       Fk([...kk, null !== (Ik = kk.at(-1)) && void 0 !== Ik ? Ik : "#ffffff"])
```

#### 200. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3570` → after: `L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3570) · [Before (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3570)

```diff
-                                 const CC = "number" === typeof ZC ? ZC : Number(null !== (oC = zC.defaultText) && void 0 !== oC ? oC : 0);
+                                 const kk = "number" === typeof Ik ? Ik : Number(null !== (ak = Fk.defaultText) && void 0 !== ak ? ak : 0);
```

#### 201. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3590` → after: `L3590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3590) · [Before (L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3590)

```diff
-                                   value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
+                                   value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
```

#### 202. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3605` → after: `L3605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3605) · [Before (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3605)

```diff
-                                   value: String(null !== ZC && void 0 !== ZC ? ZC : ""),
+                                   value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
```

#### 203. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3619` → after: `L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3619) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3619)

```diff
-                                 error: `Not valid JSON yet: ${ZC.message}`
+                                 error: `Not valid JSON yet: ${Ik.message}`
```

#### 204. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3637` → after: `L3637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3637) · [Before (L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3637)

```diff
-                               lY: nC,
+                               iG: yk,
```

#### 205. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3660` → after: `L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3660) · [Before (L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3660)

```diff
-                                 "aria-label": `Edit part ${ZC+1}: ${sz[NC]}`,
+                                 "aria-label": `Edit part ${Ik+1}: ${WF[Zk]}`,
```

#### 206. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3728` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3728) · [Before (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3728)

```diff
-                                           "aria-label": `Reset ${CC.label.toLowerCase()} to default`,
+                                           "aria-label": `Reset ${kk.label.toLowerCase()} to default`,
```

#### 207. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3830` → after: `L3830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3830) · [Before (L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3830)

```diff
-                                   return null === (zC = AC.current) || void 0 === zC ? void 0 : zC.querySelector(`[data-focus-key="${CC}"]`)
+                                   return null === (Fk = Kk.current) || void 0 === Fk ? void 0 : Fk.querySelector(`[data-focus-key="${kk}"]`)
```

#### 208. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3833` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3833) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3833)

```diff
-                               null === (CC = ZC && !ZC.disabled ? ZC : zC(GC.fallback)) || void 0 === CC || CC.focus(), RC(null)
+                               null === (kk = Ik && !Ik.disabled ? Ik : Fk(xk.fallback)) || void 0 === kk || kk.focus(), Pk(null)
```

#### 209. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3840` → after: `L3840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3840) · [Before (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3840)

```diff
-                                   key: `edit-${Math.min(CC,ZC.length-2)}`,
+                                   key: `edit-${Math.min(kk,Ik.length-2)}`,
```

#### 210. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3849-L3850` → after: `L3849-L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3849-L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3849-L3850) · [Before (L3849-L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3849-L3850)

```diff
-                                   key: `${zC<0?"up":"down"}-${CC+zC}`,
-                                   fallback: `edit-${CC+zC}`
+                                   key: `${Fk<0?"up":"down"}-${kk+Fk}`,
+                                   fallback: `edit-${kk+Fk}`
```

#### 211. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3899-L3900` → after: `L3899-L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3899-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3899-L3900) · [Before (L3899-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3899-L3900)

```diff
-                                           "data-focus-key": `edit-${zC}`,
-                                           "aria-label": `Edit part ${zC+1}, ${sz[QC]}`,
+                                           "data-focus-key": `edit-${Fk}`,
+                                           "aria-label": `Edit part ${Fk+1}, ${WF[Xk]}`,
```

#### 212. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3919-L3920` → after: `L3919-L3920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3919-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3919-L3920) · [Before (L3919-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3919-L3920)

```diff
-                                             "aria-label": `Move part ${zC+1} up`,
-                                             "data-focus-key": `up-${zC}`,
+                                             "aria-label": `Move part ${Fk+1} up`,
+                                             "data-focus-key": `up-${Fk}`,
```

#### 213. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3931-L3932` → after: `L3931-L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3931-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3931-L3932) · [Before (L3931-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3931-L3932)

```diff
-                                             "aria-label": `Move part ${zC+1} down`,
-                                             "data-focus-key": `down-${zC}`,
+                                             "aria-label": `Move part ${Fk+1} down`,
+                                             "data-focus-key": `down-${Fk}`,
```

#### 214. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L3943` → after: `L3943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R3943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L3943) · [Before (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L3943)

```diff
-                                             "aria-label": `Remove part ${zC+1}`,
+                                             "aria-label": `Remove part ${Fk+1}`,
```

#### 215. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4027` → after: `L4027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4027) · [Before (L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4027)

```diff
-                                     code: `api.sendMessage(playerId, ${xC})`
+                                     code: `api.sendMessage(playerId, ${Qk})`
```

#### 216. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4036` → after: `L4036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4036) · [Before (L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4036)

```diff
-                                     JC(ZC.map(((ZC, QC) => QC === CC ? zC : ZC)))
+                                     sk(Ik.map(((Ik, Xk) => Xk === kk ? Fk : Ik)))
```

#### 217. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4039` → after: `L4039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4039) · [Before (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4039)

```diff
-                                 lY: () => {
+                                 iG: () => {
```

#### 218. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4044` → after: `L4044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4044) · [Before (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4044)

```diff
-                                     key: `edit-${NC}`,
+                                     key: `edit-${Zk}`,
```

#### 219. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4051-L4054` → after: `L4051-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4051-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4051-L4054) · [Before (L4051-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4051-L4054)

```diff
-                           var iw = ZC(4783),
-                             vw = ZC(4760),
-                             ew = ZC(4775),
-                             hw = ZC(4788);
+                           var ST = Ik(4843),
+                             oT = Ik(4829),
+                             vT = Ik(4837),
+                             ET = Ik(4850);
```

#### 220. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4070)

```diff
-                             return `${CC} ms`
+                             return `${kk} ms`
```

#### 221. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4074` → after: `L4074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4074) · [Before (L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4074)

```diff
-                             return `${CC} st`
+                             return `${kk} st`
```

#### 222. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4099` → after: `L4099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4099) · [Before (L4099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4099)

```diff
-                             const QC = (0, iw.m)(zC);
+                             const Xk = (0, ST.k)(Fk);
```

#### 223. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4116` → after: `L4116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4116) · [Before (L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4116)

```diff
-                                     children: iw.f.map((CC => (0, gC.jsx)("button", {
+                                     children: ST.d.map((kk => (0, ek.jsx)("button", {
```

#### 224. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4136` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4136) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4136)

```diff
-                                   format: () => `${zC.pitchHz} Hz`,
+                                   format: () => `${Fk.pitchHz} Hz`,
```

#### 225. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4226` → after: `L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4226) · [Before (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4226)

```diff
-                                         lowpassHz: CC.target.checked ? Hw : null
+                                         lowpassHz: kk.target.checked ? uT : null
```

#### 226. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4238` → after: `L4238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4238) · [Before (L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4238)

```diff
-                                   format: () => `${zC.lowpassHz} Hz`,
+                                   format: () => `${Fk.lowpassHz} Hz`,
```

#### 227. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4276` → after: `L4276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4276) · [Before (L4276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4276)

```diff
-                           const Tw = Object.keys(iw.i),
+                           const WT = Object.keys(ST.g),
```

#### 228. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4281-L4282` → after: `L4281-L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4281-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4281-L4282) · [Before (L4281-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4281-L4282)

```diff
-                             const ZC = JSON.stringify((0, iw.m)(CC));
-                             return null !== (zC = Tw.find((CC => JSON.stringify((0, iw.m)(iw.i[CC])) === ZC))) && void 0 !== zC ? zC : null
+                             const Ik = JSON.stringify((0, ST.k)(kk));
+                             return null !== (Fk = WT.find((kk => JSON.stringify((0, ST.k)(ST.g[kk])) === Ik))) && void 0 !== Fk ? Fk : null
```

#### 229. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4288` → after: `L4288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4288) · [Before (L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4288)

```diff
-                             return `{\n${Object.entries(CC).map((CC=>{let[ZC,QC]=CC;return`${zC}    ${ZC}: ${Dw(QC,`${zC}    `)},`})).join("\n")}\n${zC}}`
+                             return `{\n${Object.entries(kk).map((kk=>{let[Ik,Xk]=kk;return`${Fk}    ${Ik}: ${dT(Xk,`${Fk}    `)},`})).join("\n")}\n${Fk}}`
```

#### 230. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4293-L4294` → after: `L4293-L4294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4293-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4293-L4294) · [Before (L4293-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4293-L4294)

```diff
-                               wC = [`    line: ${JSON.stringify(zC)},`];
-                             return ZC && wC.push(`    speakerName: ${JSON.stringify(ZC)},`), wC.push("    voice,"), `const voice = ${QC?JSON.stringify(QC):Dw((0,iw.m)(CC))}\n\napi.setClientOption(playerId, "dialogue", {\n${wC.join("\n")}\n})`
+                               Tk = [`    line: ${JSON.stringify(Fk)},`];
+                             return Ik && Tk.push(`    speakerName: ${JSON.stringify(Ik)},`), Tk.push("    voice,"), `const voice = ${Xk?JSON.stringify(Xk):dT((0,ST.k)(kk))}\n\napi.setClientOption(playerId, "dialogue", {\n${Tk.join("\n")}\n})`
```

#### 231. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4301` → after: `L4301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4301) · [Before (L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4301)

```diff
-                             return Uw ??= new AudioContext, Uw.resume(), (0, hw.b)(Uw, Uw.destination, CC, zC, ZC, (() => {}))
+                             return mT ??= new AudioContext, mT.resume(), (0, ET.e)(mT, mT.destination, kk, Fk, Ik, (() => {}))
```

#### 232. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4305` → after: `L4305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4305) · [Before (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4305)

```diff
-                             const [CC, zC] = (0, QC.useState)(iw.i.regular), [ZC, wC] = (0, QC.useState)(aw[0]), [nC, fC] = (0, QC.useState)("Innkeeper"), [oC, qC] = (0, QC.useState)(0), FC = FQ((CC => CC.volume)), WC = (0, QC.useRef)(null), NC = (0, QC.useRef)(0), MC = (0, QC.us … [truncated]
+                             const [kk, Fk] = (0, Xk.useState)(ST.g.regular), [Ik, Tk] = (0, Xk.useState)(fT[0]), [yk, lk] = (0, Xk.useState)("Innkeeper"), [ak, qk] = (0, Xk.useState)(0), Lk = tX((kk => kk.volume)), tk = (0, Xk.useRef)(null), Zk = (0, Xk.useRef)(0), jk = (0, Xk.us … [truncated]
```

#### 233. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4326` → after: `L4326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4326) · [Before (L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4326)

```diff
-                                 } = (0, ew.f)(CC);
+                                 } = (0, vT.e)(kk);
```

#### 234. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4357` → after: `L4357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4357) · [Before (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4357)

```diff
-                                       const ZC = iw.i[CC];
+                                       const Ik = ST.g[kk];
```

#### 235. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4375` → after: `L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4375) · [Before (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4375)

```diff
-                                     children: (0, gC.jsx)(vw.c, {
+                                     children: (0, ek.jsx)(oT.e, {
```

#### 236. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4442-L4443` → after: `L4442-L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4442-L4443) · [Before (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4442-L4443)

```diff
-                                       const CC = (0, ew.f)(wC).plan.blips[0];
-                                       CC && (WC.current = Bw((0, iw.m)(QC), [{
+                                       const kk = (0, vT.e)(Tk).plan.blips[0];
+                                       kk && (tk.current = hT((0, ST.k)(Xk), [{
```

#### 237. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4459` → after: `L4459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4459) · [Before (L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4459)

```diff
-                           var kw = ZC(4804);
+                           var DT = Ik(4866);
```

#### 238. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4463` → after: `L4463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4463) · [Before (L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4463)

```diff
-                               [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Cb}`, "g"), kw.n],
+                               [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${ki}`, "g"), DT.l],
```

#### 239. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4465` → after: `L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4465) · [Before (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4465)

```diff
-                               [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, kw.n]
+                               [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, DT.l]
```

#### 240. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4469` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4469) · [Before (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4469)

```diff
-                             return `${CC.pageId}#${CC.anchor}`
+                             return `${kk.pageId}#${kk.anchor}`
```

#### 241. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4474` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4474) · [Before (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4474)

```diff
-                             const zC = (0, iC.g)(CC),
+                             const Fk = (0, zk.l)(kk),
```

#### 242. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4476` → after: `L4476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4476) · [Before (L4476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4476)

```diff
-                             for (const [, , QC] of zC.matchAll(iC.b)) {
+                             for (const [, , Xk] of Fk.matchAll(zk.d)) {
```

#### 243. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4501` → after: `L4501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4501) · [Before (L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4501)

```diff
-                               for (const [, CC] of(0, kw.f)(QC, wC, bC)) zC.has(CC) && ZC.add(CC);
+                               for (const [, kk] of(0, DT.e)(Xk, Tk, ik)) Fk.has(kk) && Ik.add(kk);
```

#### 244. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4517` → after: `L4517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4517) · [Before (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4517)

```diff
-                             return zC ? `${CC.name} = (${ZC}) => {\n\t\n}` : `api.${CC.name}(${ZC})`
+                             return Fk ? `${kk.name} = (${Ik}) => {\n\t\n}` : `api.${kk.name}(${Ik})`
```

#### 245. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4554` → after: `L4554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4554) · [Before (L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4554)

```diff
-                                     href: `#${zC.name}-${Fb(CC)}`,
+                                     href: `#${Fk.name}-${Li(kk)}`,
```

#### 246. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4587` → after: `L4587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4587) · [Before (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4587)

```diff
-                               }), ZC.map((CC => (0, gC.jsx)(nC.d, {
+                               }), Ik.map((kk => (0, ek.jsx)(yk.e, {
```

#### 247. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4590` → after: `L4590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4590) · [Before (L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4590)

```diff
-                               }, `${CC.pageId}#${CC.anchor}`)))]
+                               }, `${kk.pageId}#${kk.anchor}`)))]
```

#### 248. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4610` → after: `L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4610) · [Before (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4610)

```diff
-                                       for (const bC of (0, iC.r)(sC(wC)))
+                                       for (const ik of (0, zk.u)(Wk(Tk)))
```

#### 249. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4614` → after: `L4614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4614) · [Before (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4614)

```diff
-                                           of(0, iC.h)(bC.blocks))
+                                           of(0, zk.n)(ik.blocks))
```

#### 250. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4621-L4622` → after: `L4621-L4622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4621-L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4621-L4622) · [Before (L4621-L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4621-L4622)

```diff
-                                                 anchor: null !== (CC = null === (zC = bC.heading) || void 0 === zC ? void 0 : zC.anchor) && void 0 !== CC ? CC : "",
-                                                 label: null !== (ZC = wC.navTitle) && void 0 !== ZC ? ZC : wC.title
+                                                 anchor: null !== (kk = null === (Fk = ik.heading) || void 0 === Fk ? void 0 : Fk.anchor) && void 0 !== kk ? kk : "",
+                                                 label: null !== (Ik = Tk.navTitle) && void 0 !== Ik ? Ik : Tk.title
```

#### 251. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4629` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4629) · [Before (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4629)

```diff
-                               }().get(bC)) && void 0 !== zC ? zC : [],
+                               }().get(ik)) && void 0 !== Fk ? Fk : [],
```

#### 252. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4647` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4647) · [Before (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4647)

```diff
-                               }().get(bC)) && void 0 !== ZC ? ZC : [];
+                               }().get(ik)) && void 0 !== Ik ? Ik : [];
```

#### 253. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4668` → after: `L4668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4668) · [Before (L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4668)

```diff
-                               nC = zC.description.length > 0 || null === bC || void 0 === bC || !bC.description ? zC.description : (0, iC.u)(bC.description);
+                               yk = Fk.description.length > 0 || null === ik || void 0 === ik || !ik.description ? Fk.description : (0, zk.A)(ik.description);
```

#### 254. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4692` → after: `L4692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4692) · [Before (L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4692)

```diff
-                                     text: (fC = bC.deprecation, (0, kw.v)(fC, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, kw.l)("`\\w"), (CC => {
+                                     text: (lk = ik.deprecation, (0, DT.s)(lk, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, DT.j)("`\\w"), (kk => {
```

#### 255. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4694` → after: `L4694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4694) · [Before (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4694)

```diff
-                                       return Wz().has(zC) ? `\`${zC}\`` : zC
+                                       return ZF().has(Fk) ? `\`${Fk}\`` : Fk
```

#### 256. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4711` → after: `L4711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4711) · [Before (L4711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4711)

```diff
-                                     id: `${zC.name}-${Fb(CC)}`,
+                                     id: `${Fk.name}-${Li(kk)}`,
```

#### 257. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4753` → after: `L4753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4753) · [Before (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4753)

```diff
-                             return null !== CC.defaultValue && "undefined" !== CC.defaultValue ? CC.defaultValue : null !== (zC = CC.example) && void 0 !== zC ? zC : "value"
+                             return null !== kk.defaultValue && "undefined" !== kk.defaultValue ? kk.defaultValue : null !== (Fk = kk.example) && void 0 !== Fk ? Fk : "value"
```

#### 258. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4893-L4894` → after: `L4893-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4893-L4894) · [Before (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4893-L4894)

```diff
-                                   const wC = null !== (ZC = xZ(CC[2])) && void 0 !== ZC ? ZC : CC[2];
-                                   "Type" === CC[1] ? zC.type = wC : "Default" === CC[1] ? zC.defaultValue = wC : "" !== wC && (zC.example = wC)
+                                   const Tk = null !== (Ik = sI(kk[2])) && void 0 !== Ik ? Ik : kk[2];
+                                   "Type" === kk[1] ? Fk.type = Tk : "Default" === kk[1] ? Fk.defaultValue = Tk : "" !== Tk && (Fk.example = Tk)
```

#### 259. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4896` → after: `L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4896) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4896)

```diff
-                                 return zC.type ? zC : null
+                                 return Fk.type ? Fk : null
```

#### 260. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4963` → after: `L4963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4963) · [Before (L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4963)

```diff
-                                   return (null !== (zC = KZ(CC)) && void 0 !== zC ? zC : []).flatMap((CC => rz(CC.name) ? [CC.name] : []))
+                                   return (null !== (Fk = OI(kk)) && void 0 !== Fk ? Fk : []).flatMap((kk => cF(kk.name) ? [kk.name] : []))
```

#### 261. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L4968` → after: `L4968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L4968) · [Before (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L4968)

```diff
-                                 return !!CC.heading.text.toLowerCase().includes(zC) || CC.blocks.some((CC => (0, iC.g)(CC).toLowerCase().includes(zC)))
+                                 return !!kk.heading.text.toLowerCase().includes(Fk) || kk.blocks.some((kk => (0, zk.l)(kk).toLowerCase().includes(Fk)))
```

#### 262. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5018` → after: `L5018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5018) · [Before (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5018)

```diff
-                                   value: zC.hasParticlePlayground ? NC : null,
+                                   value: Fk.hasParticlePlayground ? Zk : null,
```

#### 263. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5037-L5038` → after: `L5037-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5037-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5037-L5038) · [Before (L5037-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5037-L5038)

```diff
-                                 placeholder: `Filter ${wC.sections.length} ${Ab[zC.layout]}\u2026`,
-                                 label: `Filter ${Ab[zC.layout]}`,
+                                 placeholder: `Filter ${Tk.sections.length} ${Ki[Fk.layout]}\u2026`,
+                                 label: `Filter ${Ki[Fk.layout]}`,
```

#### 264. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5045` → after: `L5045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5045) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5045)

```diff
-                                 className: `DocsSections Layout-${zC.layout}`,
+                                 className: `DocsSections Layout-${Fk.layout}`,
```

#### 265. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5067` → after: `L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5067) · [Before (L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5067)

```diff
-                               href: `#${zC.anchor}`,
+                               href: `#${Fk.anchor}`,
```

#### 266. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5069` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5069) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5069)

```diff
-                               className: bC()(`Level${zC.level}`, {
+                               className: ik()(`Level${Fk.level}`, {
```

#### 267. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5113` → after: `L5113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5113) · [Before (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5113)

```diff
-                                     month: `${zC[2]} ${zC[3]}`
+                                     month: `${Fk[2]} ${Fk[3]}`
```

#### 268. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5116` → after: `L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5116) · [Before (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5116)

```diff
-                                 nC = null !== (ZC = null === bC || void 0 === bC ? void 0 : bC.month) && void 0 !== ZC ? ZC : null;
+                                 yk = null !== (Ik = null === ik || void 0 === ik ? void 0 : ik.month) && void 0 !== Ik ? Ik : null;
```

#### 269. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5122` → after: `L5122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5122) · [Before (L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5122)

```diff
-                                 day: null !== (wC = null === bC || void 0 === bC ? void 0 : bC.day) && void 0 !== wC ? wC : null,
+                                 day: null !== (Tk = null === ik || void 0 === ik ? void 0 : ik.day) && void 0 !== Tk ? Tk : null,
```

#### 270. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5157` → after: `L5157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5157) · [Before (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5157)

```diff
-                                             children: null !== ZC && void 0 !== ZC ? ZC : zC.text
+                                             children: null !== Ik && void 0 !== Ik ? Ik : Fk.text
```

#### 271. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5231-L5232` → after: `L5231-L5232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5231-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5231-L5232) · [Before (L5231-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5231-L5232)

```diff
-                             return (0, iC.r)(ZC).flatMap((QC => {
-                               const wC = QC.heading ? `${CC.title} \u203a ${QC.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : CC.title;
+                             return (0, zk.u)(Ik).flatMap((Xk => {
+                               const Tk = Xk.heading ? `${kk.title} \u203a ${Xk.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : kk.title;
```

#### 272. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5258` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5258) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5258)

```diff
-                             return wC - Math.min(QC.length / 10, 9) + ("Page" === CC.kind ? 8 : "Method" === CC.kind ? 3 : 0) - (CC.listedUnder ? Yb : 0)
+                             return Tk - Math.min(Xk.length / 10, 9) + ("Page" === kk.kind ? 8 : "Method" === kk.kind ? 3 : 0) - (kk.listedUnder ? Oi : 0)
```

#### 273. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5264` → after: `L5264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5264) · [Before (L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5264)

```diff
-                             return `${QC>0?"\u2026":""}${CC.slice(QC,QC+Hb)}${QC+Hb<CC.length?"\u2026":""}`
+                             return `${Xk>0?"\u2026":""}${kk.slice(Xk,Xk+ui)}${Xk+ui<kk.length?"\u2026":""}`
```

#### 274. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5287` → after: `L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5287) · [Before (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5287)

```diff
-                             const wC = (0, fC.w)(),
+                             const Tk = (0, lk.u)(),
```

#### 275. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5303` → after: `L5303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5303) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5303)

```diff
-                                     const ZC = zC.blocks.filter((CC => "paragraph" === CC.kind)).map(iC.g).join(" ").replace(/[`*]/g, ""),
+                                     const Ik = Fk.blocks.filter((kk => "paragraph" === kk.kind)).map(zk.l).join(" ").replace(/[`*]/g, ""),
```

#### 276. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5376` → after: `L5376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5376) · [Before (L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5376)

```diff
-                                     "aria-activedescendant": SC.length > 0 ? `DocsSearchResult-${qC}` : void 0,
+                                     "aria-activedescendant": wk.length > 0 ? `DocsSearchResult-${qk}` : void 0,
```

#### 277. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5401` → after: `L5401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5401) · [Before (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5401)

```diff
-                                       id: `DocsSearchResult-${zC}`,
+                                       id: `DocsSearchResult-${Fk}`,
```

#### 278. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5432` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5432) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5432)

```diff
-                                         children: "Page" === CC.kind ? "Page" : null !== (ZC = CC.listedUnder) && void 0 !== ZC ? ZC : `${CC.kind} \xb7 ${CC.page.title}`
+                                         children: "Page" === kk.kind ? "Page" : null !== (Ik = kk.listedUnder) && void 0 !== Ik ? Ik : `${kk.kind} \xb7 ${kk.page.title}`
```

#### 279. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5434` → after: `L5434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5434) · [Before (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5434)

```diff
-                                     }, `${CC.page.id}#${CC.anchor}`)
+                                     }, `${kk.page.id}#${kk.anchor}`)
```

#### 280. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5445` → after: `L5445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5445) · [Before (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5445)

```diff
-                             if (zC < 10) return `${CC.toFixed(1)}s`;
+                             if (Fk < 10) return `${kk.toFixed(1)}s`;
```

#### 281. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5447` → after: `L5447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5447) · [Before (L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5447)

```diff
-                             return `${Math.floor(ZC/60)}:${String(ZC%60).padStart(2,"0")}`
+                             return `${Math.floor(Ik/60)}:${String(Ik%60).padStart(2,"0")}`
```

#### 282. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5476` → after: `L5476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5476) · [Before (L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5476)

```diff
-                                   "aria-label": fC ? `Pause ${CC.name}` : `Play ${CC.name}`,
+                                   "aria-label": lk ? `Pause ${kk.name}` : `Play ${kk.name}`,
```

#### 283. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5502` → after: `L5502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5502) · [Before (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5502)

```diff
-                                       "aria-valuetext": `${sb(oC,CC.duration)} of ${sb(CC.duration,CC.duration)}`,
+                                       "aria-valuetext": `${Wi(ak,kk.duration)} of ${Wi(kk.duration,kk.duration)}`,
```

#### 284. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5545` → after: `L5545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5545) · [Before (L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5545)

```diff
-                                     null === (zC = document.querySelector(`[data-docs-track="${CSS.escape(ZQ(CC.name,CC.isSong))}"]`)) || void 0 === zC || zC.focus(), pQ()
+                                     null === (Fk = document.querySelector(`[data-docs-track="${CSS.escape(XX(kk.name,kk.isSong))}"]`)) || void 0 === Fk || Fk.focus(), JX()
```

#### 285. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5554` → after: `L5554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5554) · [Before (L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5554)

```diff
-                           var ab = ZC(38);
+                           var Bi = Ik(41);
```

#### 286. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5567-L5568` → after: `L5567-L5568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5567-L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5567-L5568) · [Before (L5567-L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5567-L5568)

```diff
-                               "aria-label": `Switch to ${QC} theme`,
-                               title: `Switch to ${QC} theme`,
+                               "aria-label": `Switch to ${Xk} theme`,
+                               title: `Switch to ${Xk} theme`,
```

#### 287. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5599` → after: `L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5599) · [Before (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5599)

```diff
-                                   return (0, gC.jsxs)(nC.d, {
+                                   return (0, ek.jsxs)(yk.e, {
```

#### 288. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5609` → after: `L5609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5609) · [Before (L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5609)

```diff
-                                       children: null !== (wC = fC.navTitle) && void 0 !== wC ? wC : fC.title
+                                       children: null !== (Tk = lk.navTitle) && void 0 !== Tk ? Tk : lk.title
```

#### 289. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5629` → after: `L5629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5629) · [Before (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5629)

```diff
-                               children: [bC ? (0, gC.jsxs)(nC.d, {
+                               children: [ik ? (0, ek.jsxs)(yk.e, {
```

#### 290. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5639` → after: `L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5639) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5639)

```diff
-                               }) : (0, gC.jsx)("span", {}), fC && (0, gC.jsxs)(nC.d, {
+                               }) : (0, ek.jsx)("span", {}), lk && (0, ek.jsxs)(yk.e, {
```

#### 291. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5660` → after: `L5660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5660) · [Before (L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5660)

```diff
-                             } = (0, fC.C)(), qC = (0, fC.v)(), FC = (0, fC.w)(), WC = (NC = wC, XC.find((CC => CC.slug === NC)));
+                             } = (0, lk.A)(), qk = (0, lk.q)(), Lk = (0, lk.u)(), tk = (Zk = Tk, Uk.find((kk => kk.slug === Zk)));
```

#### 292. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5664-L5665` → after: `L5664-L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5664-L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5664-L5665) · [Before (L5664-L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5664-L5665)

```diff
-                                 const CC = ab.i.getItem(tb);
-                                 return "dark" === CC || "light" === CC ? CC : null
+                                 const kk = Bi.j.getItem(di);
+                                 return "dark" === kk || "light" === kk ? kk : null
```

#### 293. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5674-L5675` → after: `L5674-L5675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5674-L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5674-L5675) · [Before (L5674-L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5674-L5675)

```diff
-                               }), []), [null !== CC && void 0 !== CC ? CC : ZC, CC => {
-                                 ab.i.setItem(tb, CC), zC(CC)
+                               }), []), [null !== kk && void 0 !== kk ? kk : Ik, kk => {
+                                 Bi.j.setItem(di, kk), Fk(kk)
```

#### 294. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5686` → after: `L5686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5686) · [Before (L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5686)

```diff
-                                     let fC = null !== (QC = null === (bC = CC[0]) || void 0 === bC ? void 0 : bC.anchor) && void 0 !== QC ? QC : "";
+                                     let lk = null !== (Xk = null === (ik = kk[0]) || void 0 === ik ? void 0 : ik.anchor) && void 0 !== Xk ? Xk : "";
```

#### 295. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5703` → after: `L5703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5703) · [Before (L5703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5703)

```diff
-                               const zC = (0, iC.n)(CC);
+                               const Fk = (0, zk.s)(kk);
```

#### 296. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5714` → after: `L5714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5714) · [Before (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5714)

```diff
-                               } : aC(`#${zC}`)
+                               } : Bk(`#${Fk}`)
```

#### 297. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5716` → after: `L5716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5716) · [Before (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5716)

```diff
-                             (0, QC.useEffect)((() => (oC.b.set({
+                             (0, Xk.useEffect)((() => (ak.d.set({
```

#### 298. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5719` → after: `L5719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5719) · [Before (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5719)

```diff
-                               oC.b.set({
+                               ak.d.set({
```

#### 299. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5739` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5739) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5739)

```diff
-                               const QC = (0, iC.n)(qC.hash),
+                               const Xk = (0, zk.s)(qk.hash),
```

#### 300. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5744` → after: `L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5744) · [Before (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5744)

```diff
-                                 (null !== (bC = wC.closest(".DocsChangelogEntry")) && void 0 !== bC ? bC : wC).scrollIntoView({
+                                 (null !== (ik = Tk.closest(".DocsChangelogEntry")) && void 0 !== ik ? ik : Tk).scrollIntoView({
```

#### 301. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5760` → after: `L5760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5760) · [Before (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5760)

```diff
-                             if (hC) return (0, gC.jsx)(fC.e, {
+                             if (Ek) return (0, ek.jsx)(lk.d, {
```

#### 302. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5764` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5764) · [Before (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5764)

```diff
-                             if (!WC) return (0, gC.jsx)(fC.e, {
+                             if (!tk) return (0, ek.jsx)(lk.d, {
```

#### 303. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5793` → after: `L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5793) · [Before (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5793)

```diff
-                                     }), (0, gC.jsxs)(nC.d, {
+                                     }), (0, ek.jsxs)(yk.e, {
```

#### 304. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5844` → after: `L5844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5844) · [Before (L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5844)

```diff
-                                       }), !ZC && (0, gC.jsxs)(nC.d, {
+                                       }), !Ik && (0, ek.jsxs)(yk.e, {
```

#### 305. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5900` → after: `L5900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5900) · [Before (L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5900)

```diff
-                         }, 4674: (CC, zC, ZC) => {
+                         }, 4739: (kk, Fk, Ik) => {
```

#### 306. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5902-L5904` → after: `L5902-L5903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5902-L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5902-L5903) · [Before (L5902-L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5902-L5904)

```diff
-                             b: () => QC,
-                             e: () => nC,
-                             g: () => pC,
+                             A: () => Zk,
+                             d: () => Xk,
```

#### 307. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5906` → after: `L5905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5905) · [Before (L5906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5906)

```diff
-                             j: () => fC,
+                             l: () => Hk,
```

#### 308. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5911` → after: `L5909-L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5909-L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5909-L5911) · [Before (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5911)

```diff
-                             u: () => NC
+                             t: () => ik,
+                             u: () => ek,
+                             w: () => jk
```

#### 309. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5926` → after: `L5926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5926) · [Before (L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5926)

```diff
-                           const nC = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${QC.source}`, "g");
+                           const yk = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Xk.source}`, "g");
```

#### 310. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5938` → after: `L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5938) · [Before (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5938)

```diff
-                             for (const ZC of CC.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) zC.length > 0 && zC[zC.length - 1].endsWith("\\") ? zC[zC.length - 1] += `|${ZC}` : zC.push(ZC);
+                             for (const Ik of kk.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Fk.length > 0 && Fk[Fk.length - 1].endsWith("\\") ? Fk[Fk.length - 1] += `|${Ik}` : Fk.push(Ik);
```

#### 311. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L5953` → after: `L5953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R5953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L5953) · [Before (L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L5953)

```diff
-                                 QC && (QC.text += ` ${wC.trim()}`);
+                                 Xk && (Xk.text += ` ${Tk.trim()}`);
```

#### 312. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6058-L6059` → after: `L6058-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6058-L6059) · [Before (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6058-L6059)

```diff
-                                 const CC = (null !== (fC = nC.get(qC.anchor)) && void 0 !== fC ? fC : 0) + 1;
-                                 nC.set(qC.anchor, CC), CC > 1 && (qC.anchor = `${qC.anchor}-${CC}`)
+                                 const kk = (null !== (lk = yk.get(qk.anchor)) && void 0 !== lk ? lk : 0) + 1;
+                                 yk.set(qk.anchor, kk), kk > 1 && (qk.anchor = `${qk.anchor}-${kk}`)
```

#### 313. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6115` → after: `L6115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6115) · [Before (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6115)

```diff
-                                 const zC = CC => CC.map((CC => `${CC.text} ${zC(CC.children)}`)).join(" ");
+                                 const Fk = kk => kk.map((kk => `${kk.text} ${Fk(kk.children)}`)).join(" ");
```

#### 314. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6124` → after: `L6124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6124) · [Before (L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6124)

```diff
-                         }, 4769: (CC, zC, ZC) => {
+                         }, 4833: (kk, Fk, Ik) => {
```

#### 315. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6126` → after: `L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6126) · [Before (L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6126)

```diff
-                             e: () => fC
+                             b: () => lk
```

#### 316. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6128-L6131` → after: `L6128-L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6128-L6131) · [Before (L6128-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6128-L6131)

```diff
-                           var QC = ZC(48),
-                             wC = ZC(310),
-                             bC = ZC(1822),
-                             nC = ZC(1056);
+                           var Xk = Ik(58),
+                             Tk = Ik(318),
+                             ik = Ik(1864),
+                             yk = Ik(1096);
```

#### 317. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6139-L6140` → after: `L6139-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6139-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6139-L6140) · [Before (L6139-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6139-L6140)

```diff
-                             return (0, wC.dc)(zC).forEach(((CC, zC) => {
-                               if ("string" === typeof CC || !(0, bC.h)(CC.icon)) return void(fC += "string" === typeof CC ? CC : CC.icon);
+                             return (0, Tk.oc)(Fk).forEach(((kk, Fk) => {
+                               if ("string" === typeof kk || !(0, ik.e)(kk.icon)) return void(lk += "string" === typeof kk ? kk : kk.icon);
```

#### 318. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6149` → after: `L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6149) · [Before (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6149)

```diff
-                                     children: (0, nC.jsx)(bC.e, {
+                                     children: (0, yk.jsx)(ik.d, {
```

#### 319. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6160` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6160) · [Before (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6160)

```diff
-                         }, 4698: (CC, zC, ZC) => {
+                         }, 4767: (kk, Fk, Ik) => {
```

#### 320. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6162-L6163` → after: `L6162-L6163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6162-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6162-L6163) · [Before (L6162-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6162-L6163)

```diff
-                             e: () => GC,
-                             d: () => PC
+                             d: () => xk,
+                             b: () => Jk
```

#### 321. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6165-L6169` → after: `L6165-L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6165-L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6165-L6169) · [Before (L6165-L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6165-L6169)

```diff
-                           var QC = ZC(48),
-                             wC = ZC(1383),
-                             bC = ZC(1811),
-                             nC = ZC(4701),
-                             fC = ZC(1056);
+                           var Xk = Ik(58),
+                             Tk = Ik(1402),
+                             ik = Ik(1849),
+                             yk = Ik(4775),
+                             lk = Ik(1096);
```

#### 322. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6179` → after: `L6179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6179) · [Before (L6179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6179)

```diff
-                               WC = zC.dZ,
+                               tk = Fk.GI,
```

#### 323. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6183-L6184` → after: `L6183-L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6183-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6183-L6184) · [Before (L6183-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6183-L6184)

```diff
-                               } = null !== zC && void 0 !== zC ? zC : {},
-                               gC = (0, nC.f)();
+                               } = null !== Fk && void 0 !== Fk ? Fk : {},
+                               ek = (0, yk.g)();
```

#### 324. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6209` → after: `L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6209) · [Before (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6209)

```diff
-                                     "--rotation": `${MC}deg`
+                                     "--rotation": `${jk}deg`
```

#### 325. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6220` → after: `L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6220) · [Before (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6220)

```diff
-                                   children: (0, fC.jsx)(bC.e, {
+                                   children: (0, lk.jsx)(ik.c, {
```

#### 326. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6227` → after: `L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6227) · [Before (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6227)

```diff
-                                   children: (0, fC.jsx)(bC.e, {
+                                   children: (0, lk.jsx)(ik.c, {
```

#### 327. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6234` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6234) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6234)

```diff
-                           var qC = ZC(1002),
+                           var qk = Ik(1055),
```

#### 328. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6246` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6246) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6246)

```diff
-                                 MC = zC.EZ,
+                                 jk = Fk.bI,
```

#### 329. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6250-L6252` → after: `L6250-L6252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6250-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6250-L6252) · [Before (L6250-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6250-L6252)

```diff
-                                   lZ: pC
-                                 } = null !== zC && void 0 !== zC ? zC : {},
-                                 PC = (0, nC.f)();
+                                   RI: Hk
+                                 } = null !== Fk && void 0 !== Fk ? Fk : {},
+                                 Jk = (0, yk.g)();
```

#### 330. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6259-L6260` → after: `L6259-L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6259-L6260) · [Before (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6259-L6260)

```diff
-                                     nC = null !== (CC = bC.timeRemaining) && void 0 !== CC ? CC : 0,
-                                     fC = null !== (zC = bC.HZ) && void 0 !== zC ? zC : 1,
+                                     yk = null !== (kk = ik.timeRemaining) && void 0 !== kk ? kk : 0,
+                                     lk = null !== (Fk = ik.uI) && void 0 !== Fk ? Fk : 1,
```

#### 331. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6262` → after: `L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6262) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6262)

```diff
-                                   wC.current.style.strokeDashoffset = `${qC}`, ZC.current && (ZC.current.style.opacity = nC > 0 ? "1" : "0"), oC.current && MC && (oC.current.textContent = `${(nC/1e3).toFixed(1)}s`)
+                                   Tk.current.style.strokeDashoffset = `${qk}`, Ik.current && (Ik.current.style.opacity = yk > 0 ? "1" : "0"), ak.current && jk && (ak.current.textContent = `${(yk/1e3).toFixed(1)}s`)
```

#### 332. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6275` → after: `L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6275) · [Before (L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6275)

```diff
-                                     "--rotation": `${SC}deg`
+                                     "--rotation": `${wk}deg`
```

#### 333. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6303` → after: `L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6303) · [Before (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6303)

```diff
-                                     children: (0, fC.jsx)(bC.e, {
+                                     children: (0, lk.jsx)(ik.c, {
```

#### 334. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6314` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6314) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6314)

```diff
-                                   children: [(0, fC.jsx)(bC.e, {
+                                   children: [(0, lk.jsx)(ik.c, {
```

#### 335. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6334` → after: `L6334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6334) · [Before (L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6334)

```diff
-                                 NC = (0, nC.f)();
+                                 Zk = (0, yk.g)();
```

#### 336. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6341-L6342` → after: `L6341-L6342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6341-L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6341-L6342) · [Before (L6341-L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6341-L6342)

```diff
-                                     const CC = 100 * (zC.catchZonePosition - zC.cZ / 2);
-                                     ZC.current.style.left = `${CC}%`, ZC.current.style.width = 100 * zC.cZ + "%", zC.isCatching !== qC.current && (qC.current = zC.isCatching, zC.isCatching ? ZC.current.classList.add("catching") : ZC.current.classList.remove("catching"))
+                                     const kk = 100 * (Fk.catchZonePosition - Fk.CI / 2);
+                                     Ik.current.style.left = `${kk}%`, Ik.current.style.width = 100 * Fk.CI + "%", Fk.isCatching !== qk.current && (qk.current = Fk.isCatching, Fk.isCatching ? Ik.current.classList.add("catching") : Ik.current.classList.remove("catching"))
```

#### 337. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6353` → after: `L6353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6353) · [Before (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6353)

```diff
-                                   children: (0, fC.jsx)(bC.e, {
+                                   children: (0, lk.jsx)(ik.c, {
```

#### 338. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6369` → after: `L6369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6369) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6369)

```diff
-                                       children: WC && (0, fC.jsx)(bC.e, {
+                                       children: tk && (0, lk.jsx)(ik.c, {
```

#### 339. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6382` → after: `L6382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6382) · [Before (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6382)

```diff
-                           var gC = ZC(600);
+                           var ek = Ik(628);
```

#### 340. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6389` → after: `L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6389) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6389)

```diff
-                                 oC = zC.DZ,
+                                 ak = Fk.YI,
```

#### 341. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6394` → after: `L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6394) · [Before (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6394)

```diff
-                                 } = null !== zC && void 0 !== zC ? zC : {},
+                                 } = null !== Fk && void 0 !== Fk ? Fk : {},
```

#### 342. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6397` → after: `L6397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6397) · [Before (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6397)

```diff
-                                 SC = (0, nC.f)();
+                                 wk = (0, yk.g)();
```

#### 343. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6411` → after: `L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6411) · [Before (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6411)

```diff
-                                   ...!(0, gC.H)(FC) && {
+                                   ...!(0, ek.Q)(Lk) && {
```

#### 344. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6414-L6415` → after: `L6414-L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6414-L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6414-L6415) · [Before (L6414-L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6414-L6415)

```diff
-                                   ...!(0, gC.H)(WC) && {
-                                     "--rotation": `${WC}deg`
+                                   ...!(0, ek.Q)(tk) && {
+                                     "--rotation": `${tk}deg`
```

#### 345. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6418` → after: `L6418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6418) · [Before (L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6418)

```diff
-                                 children: [qC && (0, fC.jsx)(bC.e, {
+                                 children: [qk && (0, lk.jsx)(ik.c, {
```

#### 346. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6428-L6429` → after: `L6428-L6429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6428-L6429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6428-L6429) · [Before (L6428-L6429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6428-L6429)

```diff
-                                       left: `${NC}%`,
-                                       width: `${MC}%`
+                                       left: `${Zk}%`,
+                                       width: `${jk}%`
```

#### 347. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6437` → after: `L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6437) · [Before (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6437)

```diff
-                                   children: (0, fC.jsx)(bC.e, {
+                                   children: (0, lk.jsx)(ik.c, {
```

#### 348. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6448` → after: `L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6448) · [Before (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6448)

```diff
-                                 [wC, oC] = (0, QC.useState)((() => new Array(zC.yZ).fill("pending"))),
+                                 [Tk, ak] = (0, Xk.useState)((() => new Array(Fk.gI).fill("pending"))),
```

#### 349. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6450-L6451` → after: `L6450-L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6450-L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6450-L6451) · [Before (L6450-L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6450-L6451)

```diff
-                                   const CC = zC.BZ;
-                                   return (0, gC.H)(CC) || CC <= 0 ? [] : new Array(CC).fill("pending")
+                                   const kk = Fk.rI;
+                                   return (0, ek.Q)(kk) || kk <= 0 ? [] : new Array(kk).fill("pending")
```

#### 350. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6460` → after: `L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6460) · [Before (L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6460)

```diff
-                                 PC = (0, nC.f)();
+                                 Jk = (0, yk.g)();
```

#### 351. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6484` → after: `L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6484) · [Before (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6484)

```diff
-                                     for (let QC = 0; QC < zC.yZ; QC++) ZC[QC] = QC < zC.successes ? "success" : "pending";
+                                     for (let Xk = 0; Xk < Fk.gI; Xk++) Ik[Xk] = Xk < Fk.successes ? "success" : "pending";
```

#### 352. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6524` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6524) · [Before (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6524)

```diff
-                                     children: (0, fC.jsx)(bC.e, {
+                                     children: (0, lk.jsx)(ik.c, {
```

#### 353. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6538` → after: `L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6538) · [Before (L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6538)

```diff
-                                   children: (0, fC.jsx)(bC.e, {
+                                   children: (0, lk.jsx)(ik.c, {
```

#### 354. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6581` → after: `L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6581) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6581)

```diff
-                             return (0, wC.c)("qteStateUpdated", (CC => {
+                             return (0, Tk.d)("qteStateUpdated", (kk => {
```

#### 355. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6591` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6591) · [Before (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6591)

```diff
-                         }, 4701: (CC, zC, ZC) => {
+                         }, 4775: (kk, Fk, Ik) => {
```

#### 356. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6593-L6594` → after: `L6593-L6594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6593-L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6593-L6594) · [Before (L6593-L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6593-L6594)

```diff
-                             b: () => fC,
-                             f: () => oC
+                             d: () => lk,
+                             g: () => ak
```

#### 357. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6596-L6598` → after: `L6596-L6598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6596-L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6596-L6598) · [Before (L6596-L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6596-L6598)

```diff
-                           var QC = ZC(48),
-                             wC = ZC(1257),
-                             bC = ZC(4706);
+                           var Xk = Ik(58),
+                             Tk = Ik(1276),
+                             ik = Ik(4784);
```

#### 358. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6600-L6601` → after: `L6600-L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6600-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6600-L6601) · [Before (L6600-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6600-L6601)

```diff
-                               getState: () => bC.c.getCurrentState(),
-                               onFrame: wC.r
+                               getState: () => ik.b.getCurrentState(),
+                               onFrame: Tk.u
```

#### 359. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6608` → after: `L6608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6608) · [Before (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6608)

```diff
-                         }, 4775: (CC, zC, ZC) => {
+                         }, 4837: (kk, Fk, Ik) => {
```

#### 360. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6610-L6611` → after: `L6610-L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6610-L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6610-L6611) · [Before (L6610-L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6610-L6611)

```diff
-                             c: () => EC,
-                             f: () => HC
+                             d: () => bk,
+                             e: () => uk
```

#### 361. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6613-L6614` → after: `L6613-L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6613-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6613-L6614) · [Before (L6613-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6613-L6614)

```diff
-                           var QC = ZC(4783),
-                             wC = ZC(310);
+                           var Xk = Ik(4843),
+                             Tk = Ik(318);
```

#### 362. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6625-L6627` → after: `L6625-L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6625-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6625-L6627) · [Before (L6625-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6625-L6627)

```diff
-                             SC = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${gC}$`),
-                             pC = new RegExp(`[?\uff1f]${gC}$`),
-                             PC = new RegExp(`[!\uff01]${gC}$`),
+                             wk = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ek}$`),
+                             Hk = new RegExp(`[?\uff1f]${ek}$`),
+                             Jk = new RegExp(`[!\uff01]${ek}$`),
```

#### 363. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6630-L6631` → after: `L6630-L6631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6630-L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6630-L6631) · [Before (L6630-L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6630-L6631)

```diff
-                             AC = new RegExp(`[${RC}]`),
-                             xC = new RegExp(`[${RC}]|[^${RC}]+`, "g"),
+                             Kk = new RegExp(`[${Pk}]`),
+                             Qk = new RegExp(`[${Pk}]|[^${Pk}]+`, "g"),
```

#### 364. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6646` → after: `L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6646) · [Before (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6646)

```diff
-                             const wC = null !== (zC = ZC.match(JC)) && void 0 !== zC ? zC : [];
+                             const Tk = null !== (Fk = Ik.match(sk)) && void 0 !== Fk ? Fk : [];
```

#### 365. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6649` → after: `L6649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6649) · [Before (L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6649)

```diff
-                               const CC = null !== (bC = null === (nC = ZC.match(/\p{L}/gu)) || void 0 === nC ? void 0 : nC.length) && void 0 !== bC ? bC : 0;
+                               const kk = null !== (ik = null === (yk = Ik.match(/\p{L}/gu)) || void 0 === yk ? void 0 : yk.length) && void 0 !== ik ? ik : 0;
```

#### 366. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6668-L6669` → after: `L6668-L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6668-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6668-L6669) · [Before (L6668-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6668-L6669)

```diff
-                             const MC = zC && (0, QC.m)(zC),
-                               gC = null !== (ZC = null === MC || void 0 === MC ? void 0 : MC.syllableMs) && void 0 !== ZC ? ZC : QC.b,
+                             const jk = Fk && (0, Xk.k)(Fk),
+                               ek = null !== (Ik = null === jk || void 0 === jk ? void 0 : jk.syllableMs) && void 0 !== Ik ? Ik : Xk.b,
```

#### 367. `bundles/bloxd.io/chunks/js/78.js` (Changed code · before: `L6672` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521R6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-80fbe062637581b0749bcb9c46b5b2ca08540d2e350c5242a298f5aaaabac521) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/78.js#L6672) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/78.js#L6672)

```diff
-                                 for (const QC of (0, wC.dc)(CC))
+                                 for (const Xk of (0, Tk.oc)(kk))
```
