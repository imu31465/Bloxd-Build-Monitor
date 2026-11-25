# Changed — Bundle Modifications Report (Part 142 / 142)

- **Updated at**: `2026-11-25T16:44 JST`
- **Part**: `142 / 142` (**343** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 141](part-141.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (dz8ef.98c5e741 → wp3j0a.a13381cf · continued)

- **File**: `bundles/bloxd.io/main.js` (1171 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 829. `bundles/bloxd.io/main.js` (Changed code · before: `L17706-L17709` → after: `L17706-L17709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17706-L17709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17706-L17709) · [Before (L17706-L17709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17706-L17709)

```diff
-               deviceMemory: null !== (uu = navigator.deviceMemory) && void 0 !== uu ? uu : null,
-               cores: null !== (Eu = navigator.hardwareConcurrency) && void 0 !== Eu ? Eu : null,
-               jsHeapMiB: ju ? cE(ju.mD) : null,
-               jsHeapLimitMiB: ju ? cE(ju.KD) : null
+               deviceMemory: null !== (GG = navigator.deviceMemory) && void 0 !== GG ? GG : null,
+               cores: null !== (bG = navigator.hardwareConcurrency) && void 0 !== bG ? bG : null,
+               jsHeapMiB: ZG ? fb(ZG.vJ) : null,
+               jsHeapLimitMiB: ZG ? fb(ZG.aJ) : null
```

#### 830. `bundles/bloxd.io/main.js` (Changed code · before: `L17732` → after: `L17732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17732) · [Before (L17732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17732)

```diff
-             e: () => su
+             d: () => wG
```

#### 831. `bundles/bloxd.io/main.js` (Changed code · before: `L17738` → after: `L17738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17738) · [Before (L17738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17738)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , , , , , (GG, bG, ZG) => {
```

#### 832. `bundles/bloxd.io/main.js` (Changed code · before: `L17740` → after: `L17740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17740) · [Before (L17740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17740)

```diff
-             c: () => gu,
+             e: () => rG,
```

#### 833. `bundles/bloxd.io/main.js` (Changed code · before: `L17747-L17749` → after: `L17747-L17749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17747-L17749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17747-L17749) · [Before (L17747-L17749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17747-L17749)

```diff
-           var su = ju(692),
-             Uu = ju(709),
-             Zu = ju(31);
+           var wG = ZG(641),
+             SG = ZG(655),
+             LG = ZG(29);
```

#### 834. `bundles/bloxd.io/main.js` (Changed code · before: `L17770-L17773` → after: `L17770-L17773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17770-L17773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17770-L17773) · [Before (L17770-L17773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17770-L17773)

```diff
-             const Eu = (0, Uu.c)(uu, qu),
-               ju = null !== Eu && (0, Uu.g)(uu, qu),
-               Xu = ju ? Eu : (0, su.e)();
-             (0, Uu.m)(uu, qu, Xu);
+             const bG = (0, SG.e)(GG, UG),
+               ZG = null !== bG && (0, SG.f)(GG, UG),
+               yG = ZG ? bG : (0, wG.d)();
+             (0, SG.n)(GG, UG, yG);
```

#### 835. `bundles/bloxd.io/main.js` (Changed code · before: `L17786-L17787` → after: `L17786-L17787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17786-L17787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17786-L17787) · [Before (L17786-L17787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17786-L17787)

```diff
-             const Eu = (0, Uu.c)(uu, qu);
-             return null !== Eu && (0, Uu.g)(uu, qu) ? Eu : null
+             const bG = (0, SG.e)(GG, UG);
+             return null !== bG && (0, SG.f)(GG, UG) ? bG : null
```

#### 836. `bundles/bloxd.io/main.js` (Changed code · before: `L17794` → after: `L17794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17794) · [Before (L17794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17794)

```diff
-               uu() ? (0, Uu.g)(Eu, qu) ? (0, Uu.j)(Eu, qu) : Ou(Eu) : fu === ju && Du()
+               GG() ? (0, SG.f)(bG, UG) ? (0, SG.j)(bG, UG) : KG(bG) : YG === ZG && JG()
```

#### 837. `bundles/bloxd.io/main.js` (Changed code · before: `L17834-L17835` → after: `L17834-L17835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17834-L17835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17834-L17835) · [Before (L17834-L17835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17834-L17835)

```diff
-             c: () => Uu,
-             g: () => Zu,
+             e: () => SG,
+             f: () => LG,
```

#### 838. `bundles/bloxd.io/main.js` (Changed code · before: `L17837` → after: `L17837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17837) · [Before (L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17837)

```diff
-             m: () => lu
+             n: () => kG
```

#### 839. `bundles/bloxd.io/main.js` (Changed code · before: `L17839` → after: `L17839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17839) · [Before (L17839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17839)

```diff
-           var su = ju(349);
+           var wG = ZG(352);
```

#### 840. `bundles/bloxd.io/main.js` (Changed code · before: `L17843` → after: `L17843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17843) · [Before (L17843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17843)

```diff
-             return "string" === typeof ju && (0, su.Ic)(ju) ? ju : null
+             return "string" === typeof ZG && (0, wG.Oc)(ZG) ? ZG : null
```

#### 841. `bundles/bloxd.io/main.js` (Changed code · before: `L17858` → after: `L17858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17858) · [Before (L17858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17858)

```diff
-         }, , (uu, Eu, ju) => {
+         }, , , , , , , , (GG, bG, ZG) => {
```

#### 842. `bundles/bloxd.io/main.js` (Changed code · before: `L17860-L17863` → after: `L17860-L17863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17860-L17863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17860-L17863) · [Before (L17860-L17863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17860-L17863)

```diff
-             c: () => Zu,
-             f: () => lu,
-             j: () => Uu,
-             l: () => Xu
+             d: () => LG,
+             h: () => kG,
+             i: () => SG,
+             k: () => yG
```

#### 843. `bundles/bloxd.io/main.js` (Changed code · before: `L17865` → after: `L17865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17865) · [Before (L17865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17865)

```diff
-           var su = ju(656);
+           var wG = ZG(612);
```

#### 844. `bundles/bloxd.io/main.js` (Changed code · before: `L17870-L17871` → after: `L17870-L17871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17870-L17871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17870-L17871) · [Before (L17870-L17871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17870-L17871)

```diff
-             const [Zu, qu] = null !== (Eu = null === (ju = Xu(Uu, uu)) || void 0 === ju ? void 0 : ju.split(":")) && void 0 !== Eu ? Eu : [];
-             return Zu === String(su.b) && void 0 !== qu ? qu : null
+             const [LG, UG] = null !== (bG = null === (ZG = yG(SG, GG)) || void 0 === ZG ? void 0 : ZG.split(":")) && void 0 !== bG ? bG : [];
+             return LG === String(wG.e) && void 0 !== UG ? UG : null
```

#### 845. `bundles/bloxd.io/main.js` (Changed code · before: `L17877` → after: `L17877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17877) · [Before (L17877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17877)

```diff
-               null === ju || void 0 === ju || ju.setItem(uu, `${String(su.b)}:${Eu}`)
+               null === ZG || void 0 === ZG || ZG.setItem(GG, `${String(wG.e)}:${bG}`)
```

#### 846. `bundles/bloxd.io/main.js` (Changed code · before: `L17884` → after: `L17884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17884) · [Before (L17884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17884)

```diff
-               return null !== (ju = null === uu || void 0 === uu ? void 0 : uu.getItem(Eu)) && void 0 !== ju ? ju : null
+               return null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.getItem(bG)) && void 0 !== ZG ? ZG : null
```

#### 847. `bundles/bloxd.io/main.js` (Changed code · before: `L17897` → after: `L17897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17897) · [Before (L17897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17897)

```diff
-         }, , , , , , , , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 848. `bundles/bloxd.io/main.js` (Changed code · before: `L17899` → after: `L17899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17899) · [Before (L17899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17899)

```diff
-             B: () => Nu,
+             d: () => EG,
```

#### 849. `bundles/bloxd.io/main.js` (Changed code · before: `L17901` → after: `L17901-L17902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17901-L17902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17901-L17902) · [Before (L17901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17901)

```diff
-             g: () => gu,
+             f: () => dG,
+             i: () => JG,
```

#### 850. `bundles/bloxd.io/main.js` (Changed code · before: `L17903-L17904` → after: `L17904-L17905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17904-L17905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17904-L17905) · [Before (L17903-L17904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17903-L17904)

```diff
-             n: () => Du,
-             p: () => Mu,
+             o: () => pG,
+             r: () => VG,
```

#### 851. `bundles/bloxd.io/main.js` (Changed code · before: `L17906-L17908` → after: `L17907-L17908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17907-L17908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17907-L17908) · [Before (L17906-L17908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17906-L17908)

```diff
-             t: () => Cu,
-             x: () => Yu,
-             z: () => Ou
+             v: () => KG,
+             x: () => QG
```

#### 852. `bundles/bloxd.io/main.js` (Changed code · before: `L17910-L17913` → after: `L17910-L17913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17910-L17913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17910-L17913) · [Before (L17910-L17913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17910-L17913)

```diff
-           var su, Uu = ju(726),
-             Zu = ju(734),
-             Xu = ju(193),
-             lu = ju(711);
+           var wG, SG = ZG(670),
+             LG = ZG(679),
+             yG = ZG(171),
+             kG = ZG(663);
```

#### 853. `bundles/bloxd.io/main.js` (Changed code · before: `L17930` → after: `L17930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17930) · [Before (L17930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17930)

```diff
-             return null === qu || Eu >= qu.expMs || null !== Xu && "string" !== typeof Xu || null !== lu && !Zu.b.includes(lu) ? null : {
+             return null === UG || bG >= UG.expMs || null !== yG && "string" !== typeof yG || null !== kG && !LG.c.includes(kG) ? null : {
```

#### 854. `bundles/bloxd.io/main.js` (Changed code · before: `L17936-L17937` → after: `L17936-L17937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17936-L17937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17936-L17937) · [Before (L17936-L17937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17936-L17937)

```diff
-           const Cu = fu((0, lu.l)((0, lu.f)(), qu), Date.now()),
-             bu = null !== (su = null === Cu || void 0 === Cu ? void 0 : Cu.claim) && void 0 !== su ? su : null,
+           const VG = YG((0, kG.k)((0, kG.h)(), UG), Date.now()),
+             pG = null !== (wG = null === VG || void 0 === VG ? void 0 : VG.claim) && void 0 !== wG ? wG : null,
```

#### 855. `bundles/bloxd.io/main.js` (Changed code · before: `L17941` → after: `L17941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17941) · [Before (L17941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17941)

```diff
-             const Eu = (0, lu.f)();
+             const bG = (0, kG.h)();
```

#### 856. `bundles/bloxd.io/main.js` (Changed code · before: `L17950` → after: `L17950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17950) · [Before (L17950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17950)

```diff
-             return fu((0, lu.l)((0, lu.f)(), qu), Date.now())
+             return YG((0, kG.k)((0, kG.h)(), UG), Date.now())
```

#### 857. `bundles/bloxd.io/main.js` (Changed code · before: `L17972` → after: `L17972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17972) · [Before (L17972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17972)

```diff
-             return null !== (uu = null === Eu || void 0 === Eu ? void 0 : Eu.arm.renderer) && void 0 !== uu ? uu : null
+             return null !== (GG = null === bG || void 0 === bG ? void 0 : bG.arm.renderer) && void 0 !== GG ? GG : null
```

#### 858. `bundles/bloxd.io/main.js` (Changed code · before: `L17978` → after: `L17978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17978) · [Before (L17978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17978)

```diff
-             return null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.arm.clientOptions[uu]) && void 0 !== Eu ? Eu : null
+             return null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.arm.clientOptions[GG]) && void 0 !== bG ? bG : null
```

#### 859. `bundles/bloxd.io/main.js` (Changed code · before: `L17988` → after: `L17988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17988) · [Before (L17988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17988)

```diff
-               abTestName: Xu.wb.diagRule,
+               abTestName: yG.qb.diagRule,
```

#### 860. `bundles/bloxd.io/main.js` (Changed code · before: `L17991` → after: `L17991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17991) · [Before (L17991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17991)

```diff
-               abTestName: Xu.wb.diagArm,
+               abTestName: yG.qb.diagArm,
```

#### 861. `bundles/bloxd.io/main.js` (Changed code · before: `L17994` → after: `L17994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17994) · [Before (L17994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17994)

```diff
-               abTestName: Xu.wb.diagClaim,
+               abTestName: yG.qb.diagClaim,
```

#### 862. `bundles/bloxd.io/main.js` (Changed code · before: `L17998` → after: `L17998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R17998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L17998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L17998) · [Before (L17998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L17998)

```diff
-         }, , , , , , , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 863. `bundles/bloxd.io/main.js` (Changed code · before: `L18002-L18003` → after: `L18002-L18003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18002-L18003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18002-L18003) · [Before (L18002-L18003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18002-L18003)

```diff
-           var su = ju(182),
-             Uu = ju(186);
+           var wG = ZG(161),
+             SG = ZG(169);
```

#### 864. `bundles/bloxd.io/main.js` (Changed code · before: `L18017` → after: `L18017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18017) · [Before (L18017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18017)

```diff
-               this.errors.push(`${this.where}${uu}`)
+               this.errors.push(`${this.where}${GG}`)
```

#### 865. `bundles/bloxd.io/main.js` (Changed code · before: `L18020` → after: `L18020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18020) · [Before (L18020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18020)

```diff
-               for (const Eu of Object.keys(this.fields)) uu.includes(Eu) || this.fail(`unknown field ${JSON.stringify(Eu)}`)
+               for (const bG of Object.keys(this.fields)) GG.includes(bG) || this.fail(`unknown field ${JSON.stringify(bG)}`)
```

#### 866. `bundles/bloxd.io/main.js` (Changed code · before: `L18027-L18028` → after: `L18027-L18028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18027-L18028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18027-L18028) · [Before (L18027-L18028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18027-L18028)

```diff
-               const Uu = null !== (su = this.fields[uu]) && void 0 !== su ? su : ju;
-               return "string" === typeof Uu && Eu.test(Uu) ? Uu : (this.fail(`${uu} must be a string matching ${String(Eu)}`), "")
+               const SG = null !== (wG = this.fields[GG]) && void 0 !== wG ? wG : ZG;
+               return "string" === typeof SG && bG.test(SG) ? SG : (this.fail(`${GG} must be a string matching ${String(bG)}`), "")
```

#### 867. `bundles/bloxd.io/main.js` (Changed code · before: `L18032` → after: `L18032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18032) · [Before (L18032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18032)

```diff
-               const Zu = null !== (Uu = this.fields[uu]) && void 0 !== Uu ? Uu : su;
+               const LG = null !== (SG = this.fields[GG]) && void 0 !== SG ? SG : wG;
```

#### 868. `bundles/bloxd.io/main.js` (Changed code · before: `L18035` → after: `L18035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18035) · [Before (L18035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18035)

```diff
-               }(Zu, Eu, ju) ? Zu : (this.fail(`${uu} must be a whole number from ${Eu} to ${ju}`), Eu)
+               }(LG, bG, ZG) ? LG : (this.fail(`${GG} must be a whole number from ${bG} to ${ZG}`), bG)
```

#### 869. `bundles/bloxd.io/main.js` (Changed code · before: `L18039` → after: `L18039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18039) · [Before (L18039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18039)

```diff
-               return null === (null !== (su = this.fields[uu]) && void 0 !== su ? su : null) ? null : this.whole(uu, Eu, ju)
+               return null === (null !== (wG = this.fields[GG]) && void 0 !== wG ? wG : null) ? null : this.whole(GG, bG, ZG)
```

#### 870. `bundles/bloxd.io/main.js` (Changed code · before: `L18044` → after: `L18044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18044) · [Before (L18044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18044)

```diff
-               void 0 !== Eu && this.fail(`${uu} must be true or false`)
+               void 0 !== bG && this.fail(`${GG} must be true or false`)
```

#### 871. `bundles/bloxd.io/main.js` (Changed code · before: `L18049` → after: `L18049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18049) · [Before (L18049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18049)

```diff
-               return Xu(Eu, su) ? su : ((ju || void 0 !== su && null !== su) && this.fail(`${uu} must be one of ${Eu.join(", ")}`), null)
+               return yG(bG, wG) ? wG : ((ZG || void 0 !== wG && null !== wG) && this.fail(`${GG} must be one of ${bG.join(", ")}`), null)
```

#### 872. `bundles/bloxd.io/main.js` (Changed code · before: `L18058-L18059` → after: `L18058-L18059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18058-L18059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18058-L18059) · [Before (L18058-L18059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18058-L18059)

```diff
-                 const Uu = Eu instanceof RegExp ? `strings matching ${String(Eu)}` : `values from ${Eu.join(", ")}`;
-                 this.fail(`${uu} must be a list of ${su} to ${ju} distinct ${Uu}`)
+                 const SG = bG instanceof RegExp ? `strings matching ${String(bG)}` : `values from ${bG.join(", ")}`;
+                 this.fail(`${GG} must be a list of ${wG} to ${ZG} distinct ${SG}`)
```

#### 873. `bundles/bloxd.io/main.js` (Changed code · before: `L18075` → after: `L18075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18075) · [Before (L18075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18075)

```diff
-               this.fail(`${uu} must be {min?, max?}, numbers with min no more than max`)
+               this.fail(`${GG} must be {min?, max?}, numbers with min no more than max`)
```

#### 874. `bundles/bloxd.io/main.js` (Changed code · before: `L18080-L18081` → after: `L18080-L18081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18080-L18081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18080-L18081) · [Before (L18080-L18081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18080-L18081)

```diff
-               const su = null !== (Eu = this.fields[uu]) && void 0 !== Eu ? Eu : ju ? null : {};
-               return Zu(su) || this.fail(`${uu} must be an object`), new lu(Zu(su) ? su : {}, `${this.where}${uu}.`, this.errors)
+               const wG = null !== (bG = this.fields[GG]) && void 0 !== bG ? bG : ZG ? null : {};
+               return LG(wG) || this.fail(`${GG} must be an object`), new kG(LG(wG) ? wG : {}, `${this.where}${GG}.`, this.errors)
```

#### 875. `bundles/bloxd.io/main.js` (Changed code · before: `L18085` → after: `L18085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18085) · [Before (L18085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18085)

```diff
-               return !Array.isArray(su) || su.length < Eu || su.length > ju || !su.every(Zu) ? (this.fail(`${uu} must be a list of ${Eu} to ${ju} objects`), []) : su.map(((Eu, ju) => new lu(Eu, `${this.where}${uu}[${ju}].`, this.errors)))
+               return !Array.isArray(wG) || wG.length < bG || wG.length > ZG || !wG.every(LG) ? (this.fail(`${GG} must be a list of ${bG} to ${ZG} objects`), []) : wG.map(((bG, ZG) => new kG(bG, `${this.where}${GG}[${ZG}].`, this.errors)))
```

#### 876. `bundles/bloxd.io/main.js` (Changed code · before: `L18089` → after: `L18089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18089) · [Before (L18089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18089)

```diff
-           fu = su.p, fu.filter((uu => uu !== Uu.h));
+           YG = wG.l, YG.filter((GG => GG !== SG.i));
```

#### 877. `bundles/bloxd.io/main.js` (Changed code · before: `L18138` → after: `L18138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18138) · [Before (L18138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18138)

```diff
-               armId: null !== Eu && void 0 !== Eu ? Eu : uu.string("armId", hu),
+               armId: null !== bG && void 0 !== bG ? bG : GG.string("armId", dG),
```

#### 878. `bundles/bloxd.io/main.js` (Changed code · before: `L18140` → after: `L18140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18140) · [Before (L18140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18140)

```diff
-               topics: null !== (su = uu.list("topics", Cu, Cu.length, 0)) && void 0 !== su ? su : [],
+               topics: null !== (wG = GG.list("topics", VG, VG.length, 0)) && void 0 !== wG ? wG : [],
```

#### 879. `bundles/bloxd.io/main.js` (Changed code · before: `L18163` → after: `L18163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18163) · [Before (L18163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18163)

```diff
-         }, , , , , , , , (uu, Eu, ju) => {
+         }, , , , , , , , , (GG, bG, ZG) => {
```

#### 880. `bundles/bloxd.io/main.js` (Changed code · before: `L18165-L18166` → after: `L18165-L18166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18165-L18166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18165-L18166) · [Before (L18165-L18166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18165-L18166)

```diff
-             b: () => Uu,
-             d: () => su
+             c: () => SG,
+             f: () => wG
```

#### 881. `bundles/bloxd.io/main.js` (Changed code · before: `L18170` → after: `L18170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18170) · [Before (L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18170)

```diff
-         }, , , , , , (uu, Eu, ju) => {
+         }, , , , , , , , (GG, bG, ZG) => {
```

#### 882. `bundles/bloxd.io/main.js` (Changed code · before: `L18172` → after: `L18172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18172) · [Before (L18172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18172)

```diff
-             c: () => Zu
+             d: () => LG
```

#### 883. `bundles/bloxd.io/main.js` (Changed code · before: `L18174` → after: `L18174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18174) · [Before (L18174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18174)

```diff
-           var su = ju(193);
+           var wG = ZG(171);
```

#### 884. `bundles/bloxd.io/main.js` (Changed code · before: `L18179-L18180` → after: `L18179-L18180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18179-L18180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18179-L18180) · [Before (L18179-L18180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18179-L18180)

```diff
-               const uu = `ios_app_${parseInt(ju,10)}`;
-               if (su.h.test(uu)) return uu;
+               const GG = `ios_app_${parseInt(ZG,10)}`;
+               if (wG.i.test(GG)) return GG;
```

#### 885. `bundles/bloxd.io/main.js` (Changed code · before: `L18186` → after: `L18186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18186) · [Before (L18186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18186)

```diff
-             return su.h.test(Zu) ? Zu : null
+             return wG.i.test(LG) ? LG : null
```

#### 886. `bundles/bloxd.io/main.js` (Changed code · before: `L18188` → after: `L18188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18188) · [Before (L18188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18188)

```diff
-         }, , , , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 887. `bundles/bloxd.io/main.js` (Changed code · before: `L18193` → after: `L18193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18193) · [Before (L18193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18193)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 888. `bundles/bloxd.io/main.js` (Changed code · before: `L18195` → after: `L18195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18195) · [Before (L18195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18195)

```diff
-             c: () => su
+             b: () => wG
```

#### 889. `bundles/bloxd.io/main.js` (Changed code · before: `L18202` → after: `L18202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18202) · [Before (L18202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18202)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , , , , , , , (GG, bG, ZG) => {
```

#### 890. `bundles/bloxd.io/main.js` (Changed code · before: `L18206-L18207` → after: `L18207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18207) · [Before (L18206-L18207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18206-L18207)

```diff
-             i: () => Zu,
-             k: () => Uu
+             j: () => SG
```

#### 891. `bundles/bloxd.io/main.js` (Changed code · before: `L18213` → after: `L18213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18213) · [Before (L18213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18213)

```diff
-         }, , , , , , , , (uu, Eu, ju) => {
+         }, , (GG, bG, ZG) => {
```

#### 892. `bundles/bloxd.io/main.js` (Changed code · before: `L18215-L18216` → after: `L18215-L18216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18215-L18216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18215-L18216) · [Before (L18215-L18216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18215-L18216)

```diff
-             e: () => Cu,
-             i: () => Ou,
+             d: () => VG,
+             h: () => KG,
```

#### 893. `bundles/bloxd.io/main.js` (Changed code · before: `L18220-L18224` → after: `L18220-L18224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18220-L18224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18220-L18224) · [Before (L18220-L18224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18220-L18224)

```diff
-           var su = ju(337),
-             Uu = ju(775),
-             Zu = ju(785),
-             Xu = ju(284),
-             lu = ju(31);
+           var wG = ZG(333),
+             SG = ZG(708),
+             LG = ZG(717),
+             yG = ZG(283),
+             kG = ZG(29);
```

#### 894. `bundles/bloxd.io/main.js` (Changed code · before: `L18227` → after: `L18227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18227) · [Before (L18227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18227)

```diff
-             const uu = (0, Uu.e)();
+             const GG = (0, SG.c)();
```

#### 895. `bundles/bloxd.io/main.js` (Changed code · before: `L18233` → after: `L18233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18233) · [Before (L18233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18233)

```diff
-               cameraFOV: Zu.e,
+               cameraFOV: LG.c,
```

#### 896. `bundles/bloxd.io/main.js` (Changed code · before: `L18250` → after: `L18250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18250) · [Before (L18250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18250)

```diff
-             return Cu() ? cu : bu
+             return VG() ? fG : pG
```

#### 897. `bundles/bloxd.io/main.js` (Changed code · before: `L18258` → after: `L18258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18258) · [Before (L18258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18258)

```diff
-                 return [ju, null !== (Eu = lu.k.getItem(ju)) && void 0 !== Eu ? Eu : su]
+                 return [ZG, null !== (bG = kG.h.getItem(ZG)) && void 0 !== bG ? bG : wG]
```

#### 898. `bundles/bloxd.io/main.js` (Changed code · before: `L18260` → after: `L18260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18260) · [Before (L18260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18260)

```diff
-             return su.vb.includes(Eu.joystickMode) || (console.warn("Dropping stored joystick mode", Eu.joystickMode), lu.k.removeItem("joystickMode"), Eu.joystickMode = uu.joystickMode), Eu
+             return wG.Ub.includes(bG.joystickMode) || (console.warn("Dropping stored joystick mode", bG.joystickMode), kG.h.removeItem("joystickMode"), bG.joystickMode = GG.joystickMode), bG
```

#### 899. `bundles/bloxd.io/main.js` (Changed code · before: `L18265` → after: `L18265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18265) · [Before (L18265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18265)

```diff
-             for (const su of Object.keys(ju)) uu[su] !== Eu[su] && (uu[su] === ju[su] ? lu.k.removeItem(su) : lu.k.setItem(su, uu[su]))
+             for (const wG of Object.keys(ZG)) GG[wG] !== bG[wG] && (GG[wG] === ZG[wG] ? kG.h.removeItem(wG) : kG.h.setItem(wG, GG[wG]))
```

#### 900. `bundles/bloxd.io/main.js` (Changed code · before: `L18269` → after: `L18269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18269) · [Before (L18269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18269)

```diff
-             e: () => bu
+             c: () => pG
```

#### 901. `bundles/bloxd.io/main.js` (Changed code · before: `L18272-L18274` → after: `L18272-L18274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18272-L18274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18272-L18274) · [Before (L18272-L18274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18272-L18274)

```diff
-             Uu = ju(91),
-             Zu = ju(31),
-             Xu = ju(781);
+             SG = ZG(80),
+             LG = ZG(29),
+             yG = ZG(713);
```

#### 902. `bundles/bloxd.io/main.js` (Changed code · before: `L18281` → after: `L18281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18281) · [Before (L18281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18281)

```diff
-               const uu = parseFloat(Zu.k.getItem(qu));
+               const GG = parseFloat(LG.h.getItem(UG));
```

#### 903. `bundles/bloxd.io/main.js` (Changed code · before: `L18287` → after: `L18287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18287) · [Before (L18287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18287)

```diff
-             return null !== uu ? "on" === uu ? "kept_on" : "kept_off" : Xu.f && null === Zu.k.getItem("touchActionButtons") ? Uu.featureFlags.tellsNewPlayers ? "new" : "excluded" : "kept_off"
+             return null !== GG ? "on" === GG ? "kept_on" : "kept_off" : yG.g && null === LG.h.getItem("touchActionButtons") ? SG.featureFlags.tellsNewPlayers ? "new" : "excluded" : "kept_off"
```

#### 904. `bundles/bloxd.io/main.js` (Changed code · before: `L18292-L18293` → after: `L18292-L18293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18292-L18293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18292-L18293) · [Before (L18292-L18293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18292-L18293)

```diff
-               const Eu = Zu.k.getItem(lu);
-               fu = "new" === (uu = Eu) || "kept_on" === uu || "kept_off" === uu || "excluded" === uu ? Eu : Cu(), Eu === fu || Zu.k.setItem(lu, fu) || "new" !== fu || (fu = "excluded")
+               const bG = LG.h.getItem(kG);
+               YG = "new" === (GG = bG) || "kept_on" === GG || "kept_off" === GG || "excluded" === GG ? bG : VG(), bG === YG || LG.h.setItem(kG, YG) || "new" !== YG || (YG = "excluded")
```

#### 905. `bundles/bloxd.io/main.js` (Changed code · before: `L18298` → after: `L18298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18298) · [Before (L18298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18298)

```diff
-         }, , , , , , (uu, Eu, ju) => {
+         }, , , , , (GG, bG, ZG) => {
```

#### 906. `bundles/bloxd.io/main.js` (Changed code · before: `L18301-L18303` → after: `L18301-L18303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18301-L18303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18301-L18303) · [Before (L18301-L18303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18301-L18303)

```diff
-             f: () => bu,
-             i: () => Cu,
-             j: () => fu
+             g: () => pG,
+             h: () => VG,
+             i: () => YG
```

#### 907. `bundles/bloxd.io/main.js` (Changed code · before: `L18305-L18306` → after: `L18305-L18306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18305-L18306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18305-L18306) · [Before (L18305-L18306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18305-L18306)

```diff
-           var su = ju(91),
-             Uu = ju(31);
+           var wG = ZG(80),
+             SG = ZG(29);
```

#### 908. `bundles/bloxd.io/main.js` (Changed code · before: `L18311-L18312` → after: `L18311-L18312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18311-L18312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18311-L18312) · [Before (L18311-L18312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18311-L18312)

```diff
-             const uu = Uu.e.getItem(Zu);
-             return (0, Uu.r)(uu) ? uu : null
+             const GG = SG.c.getItem(LG);
+             return (0, SG.s)(GG) ? GG : null
```

#### 909. `bundles/bloxd.io/main.js` (Changed code · before: `L18317-L18319` → after: `L18317-L18319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18317-L18319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18317-L18319) · [Before (L18317-L18319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18317-L18319)

```diff
-             return null !== (uu = lu()) && void 0 !== uu ? uu : function() {
-               const uu = Uu.k.getItem(Xu);
-               return "string" === typeof uu ? uu : null
+             return null !== (GG = kG()) && void 0 !== GG ? GG : function() {
+               const GG = SG.h.getItem(yG);
+               return "string" === typeof GG ? GG : null
```

#### 910. `bundles/bloxd.io/main.js` (Changed code · before: `L18324` → after: `L18324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18324) · [Before (L18324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18324)

```diff
-             Uu.e.setItem(Zu, uu), (0, su.isMobileApp)() && Uu.k.setItem(Xu, uu)
+             SG.c.setItem(LG, GG), (0, wG.isMobileApp)() && SG.h.setItem(yG, GG)
```

#### 911. `bundles/bloxd.io/main.js` (Changed code · before: `L18328` → after: `L18328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18328) · [Before (L18328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18328)

```diff
-             Uu.e.removeItem(Zu), Uu.k.removeItem(Xu)
+             SG.c.removeItem(LG), SG.h.removeItem(yG)
```

#### 912. `bundles/bloxd.io/main.js` (Changed code · before: `L18334` → after: `L18334-L18335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18334-L18335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18334-L18335) · [Before (L18334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18334)

```diff
-             e: () => Zu,
+             c: () => LG,
+             d: () => SG,
```

#### 913. `bundles/bloxd.io/main.js` (Changed code · before: `L18338` → after: `L18338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18338) · [Before (L18338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18338)

```diff
-             o: () => lu
+             m: () => kG
```

#### 914. `bundles/bloxd.io/main.js` (Changed code · before: `L18355` → after: `L18355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18355) · [Before (L18355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18355)

```diff
-         }, , , , , (uu, Eu, ju) => {
+         }, , (GG, bG, ZG) => {
```

#### 915. `bundles/bloxd.io/main.js` (Changed code · before: `L18357-L18358` → after: `L18357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18357) · [Before (L18357-L18358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18357-L18358)

```diff
-             d: () => eu,
-             e: () => Gu,
+             c: () => EG,
```

#### 916. `bundles/bloxd.io/main.js` (Changed code · before: `L18360` → after: `L18359-L18360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18359-L18360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18359-L18360) · [Before (L18360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18360)

```diff
-             h: () => pu
+             i: () => zG,
+             m: () => XG
```

#### 917. `bundles/bloxd.io/main.js` (Changed code · before: `L18362-L18375` → after: `L18362-L18375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18362-L18375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18362-L18375) · [Before (L18362-L18375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18362-L18375)

```diff
-           var su = ju(1100),
-             Uu = ju(792),
-             Zu = ju(796),
-             Xu = ju(803),
-             lu = ju(811),
-             qu = ju(819),
-             fu = ju(822),
-             Cu = ju(1065),
-             bu = ju(1094),
-             cu = ju(131),
-             Nu = ju(216),
-             Ou = ju(649),
-             Yu = ju(337),
-             hu = ju(1069);
+           var wG = ZG(1003),
+             SG = ZG(722),
+             LG = ZG(729),
+             yG = ZG(736),
+             kG = ZG(739),
+             UG = ZG(743),
+             YG = ZG(751),
+             VG = ZG(973),
+             pG = ZG(999),
+             fG = ZG(116),
+             QG = ZG(209),
+             KG = ZG(604),
+             hG = ZG(333),
+             dG = ZG(982);
```

#### 918. `bundles/bloxd.io/main.js` (Changed code · before: `L18378` → after: `L18378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18378) · [Before (L18378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18378)

```diff
-               (0, Nu.h)() || (0, cu.isDiscordClient)() && ((0, Nu.d)() ? (console.log("Discord: in discord preprod, loading preprod"), uu = "preprod") : (console.log("Discord: in discord prod, loading bloxd.io"), uu = "bloxd.io"));
+               (0, QG.m)() || (0, fG.isDiscordClient)() && ((0, QG.h)() ? (console.log("Discord: in discord preprod, loading preprod"), GG = "preprod") : (console.log("Discord: in discord prod, loading bloxd.io"), GG = "bloxd.io"));
```

#### 919. `bundles/bloxd.io/main.js` (Changed code · before: `L18381` → after: `L18381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18381) · [Before (L18381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18381)

```diff
-                 coolmathgames: Zu.b,
+                 coolmathgames: LG.c,
```

#### 920. `bundles/bloxd.io/main.js` (Changed code · before: `L18383-L18384` → after: `L18383-L18384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18383-L18384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18383-L18384) · [Before (L18383-L18384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18383-L18384)

```diff
-                 staging: lu.b,
-                 "bloxd.io": qu.b
+                 staging: kG.c,
+                 "bloxd.io": UG.d
```

#### 921. `bundles/bloxd.io/main.js` (Changed code · before: `L18390` → after: `L18390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18390) · [Before (L18390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18390)

```diff
-                 } return console.log(`Aggregator is ${uu}`), Eu[uu]
+                 } return console.log(`Aggregator is ${GG}`), bG[GG]
```

#### 922. `bundles/bloxd.io/main.js` (Changed code · before: `L18395` → after: `L18395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18395) · [Before (L18395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18395)

```diff
-               const uu = fu.c[wu];
+               const GG = YG.d[uG];
```

#### 923. `bundles/bloxd.io/main.js` (Changed code · before: `L18405` → after: `L18405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18405) · [Before (L18405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18405)

```diff
-             const Eu = null !== (uu = Mu().availableGameNamesWithVariation.categoryGroup) && void 0 !== uu ? uu : [];
+             const bG = null !== (GG = zG().availableGameNamesWithVariation.categoryGroup) && void 0 !== GG ? GG : [];
```

#### 924. `bundles/bloxd.io/main.js` (Changed code · before: `L18411` → after: `L18411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18411) · [Before (L18411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18411)

```diff
-             return su.g.filter((Eu => uu.includes(Eu)))
+             return wG.i.filter((bG => GG.includes(bG)))
```

#### 925. `bundles/bloxd.io/main.js` (Changed code · before: `L18417` → after: `L18417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18417) · [Before (L18417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18417)

```diff
-             const su = new Set((0, Yu.ac)(ju));
+             const wG = new Set((0, hG.rc)(ZG));
```

#### 926. `bundles/bloxd.io/main.js` (Changed code · before: `L18419-L18421` → after: `L18419-L18421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18419-L18421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18419-L18421) · [Before (L18419-L18421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18419-L18421)

```diff
-               if ((0, hu.l)(uu)) return !1;
-               const Uu = fu.c[uu];
-               return !(0, Ou.H)(Uu) && (Eu(Uu.title).toLowerCase().includes(ju) || Eu(Uu.description).toLowerCase().includes(ju) || su.has(Uu.type))
+               if ((0, dG.h)(GG)) return !1;
+               const SG = YG.d[GG];
+               return !(0, KG.L)(SG) && (bG(SG.title).toLowerCase().includes(ZG) || bG(SG.description).toLowerCase().includes(ZG) || wG.has(SG.type))
```

#### 927. `bundles/bloxd.io/main.js` (Changed code · before: `L18424` → after: `L18424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18424) · [Before (L18424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18424)

```diff
-         }, , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 928. `bundles/bloxd.io/main.js` (Changed code · before: `L18445` → after: `L18445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18445) · [Before (L18445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18445)

```diff
-         }, , , , (uu, Eu, ju) => {
+         }, , , , , , , (GG, bG, ZG) => {
```

#### 929. `bundles/bloxd.io/main.js` (Changed code · before: `L18447` → after: `L18447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18447) · [Before (L18447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18447)

```diff
-             b: () => su
+             c: () => wG
```

#### 930. `bundles/bloxd.io/main.js` (Changed code · before: `L18494` → after: `L18494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18494) · [Before (L18494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18494)

```diff
-         }, , , , , , , , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 931. `bundles/bloxd.io/main.js` (Changed code · before: `L18496` → after: `L18496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18496) · [Before (L18496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18496)

```diff
-             b: () => su
+             c: () => wG
```

#### 932. `bundles/bloxd.io/main.js` (Changed code · before: `L18512` → after: `L18512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18512) · [Before (L18512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18512)

```diff
-         }, , , , , , , , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 933. `bundles/bloxd.io/main.js` (Changed code · before: `L18514` → after: `L18514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18514) · [Before (L18514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18514)

```diff
-             b: () => su
+             d: () => wG
```

#### 934. `bundles/bloxd.io/main.js` (Changed code · before: `L18531` → after: `L18531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18531) · [Before (L18531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18531)

```diff
-         }, , , (uu, Eu, ju) => {
+         }, , , , , , , , (GG, bG, ZG) => {
```

#### 935. `bundles/bloxd.io/main.js` (Changed code · before: `L18533-L18534` → after: `L18533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18533) · [Before (L18533-L18534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18533-L18534)

```diff
-             c: () => jE,
-             e: () => sE,
+             d: () => Zb,
```

#### 936. `bundles/bloxd.io/main.js` (Changed code · before: `L18536` → after: `L18535-L18536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18535-L18536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18535-L18536) · [Before (L18536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18536)

```diff
-             j: () => UE
+             l: () => Lb,
+             p: () => Sb
```

#### 937. `bundles/bloxd.io/main.js` (Changed code · before: `L18538-L18547` → after: `L18538-L18547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18538-L18547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18538-L18547) · [Before (L18538-L18547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18538-L18547)

```diff
-           var su = ju(207),
-             Uu = ju(824),
-             Zu = ju(828);
-           var Xu = ju(831),
-             lu = ju(837),
-             qu = ju(841),
-             fu = ju(850),
-             Cu = ju(856),
-             bu = ju(858),
-             cu = ju(867);
+           var wG = ZG(200),
+             SG = ZG(754),
+             LG = ZG(760);
+           var yG = ZG(768),
+             kG = ZG(773),
+             UG = ZG(776),
+             YG = ZG(779),
+             VG = ZG(784),
+             pG = ZG(789),
+             fG = ZG(791);
```

#### 938. `bundles/bloxd.io/main.js` (Changed code · before: `L18563-L18568` → after: `L18563-L18568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18563-L18568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18563-L18568) · [Before (L18563-L18568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18563-L18568)

```diff
-           var Ou = ju(883),
-             Yu = ju(886),
-             hu = ju(894),
-             Du = ju(898),
-             gu = ju(900),
-             Mu = ju(903);
+           var KG = ZG(803),
+             hG = ZG(805),
+             dG = ZG(812),
+             JG = ZG(817),
+             rG = ZG(821),
+             zG = ZG(824);
```

#### 939. `bundles/bloxd.io/main.js` (Changed code · before: `L18584` → after: `L18584-L18598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18584-L18598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18584-L18598) · [Before (L18584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18584)

```diff
-           var Gu = ju(905),
+           var oG = ZG(833),
+             XG = ZG(836),
+             uG = ZG(843),
+             iG = ZG(845),
+             CG = ZG(853),
+             WG = ZG(859),
+             mG = ZG(866),
+             IG = ZG(874),
+             FG = ZG(876),
+             vG = ZG(884),
+             aG = ZG(888),
+             cG = ZG(892),
+             lG = ZG(897),
+             jG = ZG(903),
+             PG = ZG(905),
```

#### 940. `bundles/bloxd.io/main.js` (Changed code · before: `L18586-L18589` → after: `L18600-L18603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18600-L18603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18600-L18603) · [Before (L18586-L18589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18586-L18589)

```diff
-             wu = ju(916),
-             Ju = ju(921),
-             du = ju(930),
-             au = ju(933),
+             AG = ZG(918),
+             sG = ZG(924),
+             qG = ZG(928),
+             nG = ZG(932),
```

#### 941. `bundles/bloxd.io/main.js` (Changed code · before: `L18591-L18609` → after: `L18605-L18609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18605-L18609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18605-L18609) · [Before (L18591-L18609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18591-L18609)

```diff
-             ou = ju(945),
-             ku = ju(947),
-             mu = ju(953),
-             vu = ju(957),
-             Ku = ju(964),
-             Vu = ju(970),
-             ru = ju(972),
-             Qu = ju(980),
-             iu = ju(983),
-             Wu = ju(988),
-             Su = ju(996),
-             Iu = ju(1001),
-             Fu = ju(1008),
-             Bu = ju(1014),
-             Lu = ju(1022),
-             tu = ju(1031),
- ... (3 more removed lines; see GitHub link above)
+             eG = ZG(938),
+             RG = ZG(940),
+             TG = ZG(942),
+             HG = ZG(951),
+             tG = ZG(954);
```

#### 942. `bundles/bloxd.io/main.js` (Changed code · before: `L18624-L18627` → after: `L18624-L18627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18624-L18627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18624-L18627) · [Before (L18624-L18627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18624-L18627)

```diff
-           var nu = ju(1046),
-             yu = ju(1050),
-             zu = ju(1058),
-             Ru = ju(204);
+           var NG = ZG(960),
+             OG = ZG(963),
+             xG = ZG(966),
+             BG = ZG(191);
```

#### 943. `bundles/bloxd.io/main.js` (Changed code · before: `L18632` → after: `L18632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18632) · [Before (L18632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18632)

```diff
-               fishing: Zu.b,
+               fishing: LG.e,
```

#### 944. `bundles/bloxd.io/main.js` (Changed code · before: `L18660` → after: `L18660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18660) · [Before (L18660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18660)

```diff
-               testGym: qu.c,
+               testGym: UG.b,
```

#### 945. `bundles/bloxd.io/main.js` (Changed code · before: `L18662-L18663` → after: `L18662-L18663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18662-L18663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18662-L18663) · [Before (L18662-L18663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18662-L18663)

```diff
-               eatToGrow: yu.b,
-               backrooms: zu.e,
+               eatToGrow: OG.e,
+               backrooms: xG.d,
```

#### 946. `bundles/bloxd.io/main.js` (Changed code · before: `L18665-L18666` → after: `L18665-L18666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18665-L18666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18665-L18666) · [Before (L18665-L18666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18665-L18666)

```diff
-               coreDefenders: Tu.e,
-               containmentBreach: Hu.b,
+               coreDefenders: HG.d,
+               containmentBreach: tG.c,
```

#### 947. `bundles/bloxd.io/main.js` (Changed code · before: `L18668` → after: `L18668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18668) · [Before (L18668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18668)

```diff
-                 ...Hu.b,
+                 ...tG.c,
```

#### 948. `bundles/bloxd.io/main.js` (Changed code · before: `L18672` → after: `L18672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18672) · [Before (L18672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18672)

```diff
-                 ...Hu.b,
+                 ...tG.c,
```

#### 949. `bundles/bloxd.io/main.js` (Changed code · before: `L18676` → after: `L18676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18676) · [Before (L18676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18676)

```diff
-                 ...Hu.b,
+                 ...tG.c,
```

#### 950. `bundles/bloxd.io/main.js` (Changed code · before: `L18684` → after: `L18684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18684) · [Before (L18684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18684)

```diff
-               shooting: fu.e,
+               shooting: YG.b,
```

#### 951. `bundles/bloxd.io/main.js` (Changed code · before: `L18686` → after: `L18686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18686) · [Before (L18686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18686)

```diff
-                 ...fu.e,
+                 ...YG.b,
```

#### 952. `bundles/bloxd.io/main.js` (Changed code · before: `L18695` → after: `L18695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18695) · [Before (L18695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18695)

```diff
-                 ...fu.e,
+                 ...YG.b,
```

#### 953. `bundles/bloxd.io/main.js` (Changed code · before: `L18704` → after: `L18704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18704) · [Before (L18704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18704)

```diff
-                 ...Wu.c
+                 ...AG.e
```

#### 954. `bundles/bloxd.io/main.js` (Changed code · before: `L18707` → after: `L18707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18707) · [Before (L18707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18707)

```diff
-                 ...Wu.c,
+                 ...AG.e,
```

#### 955. `bundles/bloxd.io/main.js` (Changed code · before: `L18711` → after: `L18711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18711) · [Before (L18711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18711)

```diff
-                 ...Wu.c,
+                 ...AG.e,
```

#### 956. `bundles/bloxd.io/main.js` (Changed code · before: `L18715` → after: `L18715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18715) · [Before (L18715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18715)

```diff
-                 ...Wu.c,
+                 ...AG.e,
```

#### 957. `bundles/bloxd.io/main.js` (Changed code · before: `L18719` → after: `L18719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18719) · [Before (L18719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18719)

```diff
-                 ...Wu.c,
+                 ...AG.e,
```

#### 958. `bundles/bloxd.io/main.js` (Changed code · before: `L18723-L18724` → after: `L18723-L18724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18723-L18724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18723-L18724) · [Before (L18723-L18724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18723-L18724)

```diff
-               oneBlock: bu.d,
-               skyblock: cu.e,
+               oneBlock: pG.c,
+               skyblock: fG.b,
```

#### 959. `bundles/bloxd.io/main.js` (Changed code · before: `L18727` → after: `L18727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18727) · [Before (L18727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18727)

```diff
-                 ...cu.e,
+                 ...fG.b,
```

#### 960. `bundles/bloxd.io/main.js` (Changed code · before: `L18735` → after: `L18735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18735) · [Before (L18735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18735)

```diff
-                 ...cu.e,
+                 ...fG.b,
```

#### 961. `bundles/bloxd.io/main.js` (Changed code · before: `L18740` → after: `L18740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18740) · [Before (L18740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18740)

```diff
-                 ...cu.e,
+                 ...fG.b,
```

#### 962. `bundles/bloxd.io/main.js` (Changed code · before: `L18745` → after: `L18745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18745) · [Before (L18745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18745)

```diff
-                 ...cu.e,
+                 ...fG.b,
```

#### 963. `bundles/bloxd.io/main.js` (Changed code · before: `L18750` → after: `L18750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18750) · [Before (L18750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18750)

```diff
-                 ...cu.e,
+                 ...fG.b,
```

#### 964. `bundles/bloxd.io/main.js` (Changed code · before: `L18755` → after: `L18755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18755) · [Before (L18755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18755)

```diff
-                 ...cu.e,
+                 ...fG.b,
```

#### 965. `bundles/bloxd.io/main.js` (Changed code · before: `L18760` → after: `L18760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18760) · [Before (L18760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18760)

```diff
-                 ...cu.e,
+                 ...fG.b,
```

#### 966. `bundles/bloxd.io/main.js` (Changed code · before: `L18764-L18765` → after: `L18764-L18765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18764-L18765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18764-L18765) · [Before (L18764-L18765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18764-L18765)

```diff
-               skywars: Ou.c,
-               plots: Yu.e,
+               skywars: KG.d,
+               plots: hG.c,
```

#### 967. `bundles/bloxd.io/main.js` (Changed code · before: `L18767-L18769` → after: `L18767-L18769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18767-L18769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18767-L18769) · [Before (L18767-L18769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18767-L18769)

```diff
-               rocketSpleef: Du.c,
-               luckyTowers: gu.e,
-               luckyBattlegrounds: Mu.b,
+               rocketSpleef: JG.d,
+               luckyTowers: rG.b,
+               luckyBattlegrounds: zG.d,
```

#### 968. `bundles/bloxd.io/main.js` (Changed code · before: `L18771-L18773` → after: `L18771-L18773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18771-L18773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18771-L18773) · [Before (L18771-L18773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18771-L18773)

```diff
-               simonSays: Su.e,
-               goalRush: tu.d,
-               doodle: Gu.e,
+               simonSays: sG.d,
+               goalRush: RG.e,
+               doodle: oG.b,
```

#### 969. `bundles/bloxd.io/main.js` (Changed code · before: `L18775` → after: `L18775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18775) · [Before (L18775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18775)

```diff
-                 ...Gu.e,
+                 ...oG.b,
```

#### 970. `bundles/bloxd.io/main.js` (Changed code · before: `L18779` → after: `L18779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18779) · [Before (L18779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18779)

```diff
-                 ...Gu.e,
+                 ...oG.b,
```

#### 971. `bundles/bloxd.io/main.js` (Changed code · before: `L18782` → after: `L18782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18782) · [Before (L18782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18782)

```diff
-               greenville: pu.d,
+               greenville: XG.b,
```

#### 972. `bundles/bloxd.io/main.js` (Changed code · before: `L18784` → after: `L18784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18784) · [Before (L18784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18784)

```diff
-                 ...pu.d,
+                 ...XG.b,
```

#### 973. `bundles/bloxd.io/main.js` (Changed code · before: `L18788` → after: `L18788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18788) · [Before (L18788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18788)

```diff
-                 ...pu.d,
+                 ...XG.b,
```

#### 974. `bundles/bloxd.io/main.js` (Changed code · before: `L18793` → after: `L18793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18793) · [Before (L18793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18793)

```diff
-                 ...wu.d,
+                 ...uG.c,
```

#### 975. `bundles/bloxd.io/main.js` (Changed code · before: `L18804` → after: `L18804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18804) · [Before (L18804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18804)

```diff
-                 ...wu.d,
+                 ...uG.c,
```

#### 976. `bundles/bloxd.io/main.js` (Changed code · before: `L18814` → after: `L18814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18814) · [Before (L18814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18814)

```diff
-                 ...wu.d,
+                 ...uG.c,
```

#### 977. `bundles/bloxd.io/main.js` (Changed code · before: `L18824` → after: `L18824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18824) · [Before (L18824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18824)

```diff
-                 ...wu.d,
+                 ...uG.c,
```

#### 978. `bundles/bloxd.io/main.js` (Changed code · before: `L18834` → after: `L18834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18834) · [Before (L18834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18834)

```diff
-                 ...wu.d,
+                 ...uG.c,
```

#### 979. `bundles/bloxd.io/main.js` (Changed code · before: `L18844` → after: `L18844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18844) · [Before (L18844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18844)

```diff
-                 ...wu.d,
+                 ...uG.c,
```

#### 980. `bundles/bloxd.io/main.js` (Changed code · before: `L18858` → after: `L18858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18858) · [Before (L18858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18858)

```diff
-                 ...wu.d,
+                 ...uG.c,
```

#### 981. `bundles/bloxd.io/main.js` (Changed code · before: `L18906` → after: `L18906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L18906) · [Before (L18906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L18906)

```diff
-               hideseek: du.e,
+               hideseek: CG.b,
```

#### 982. `bundles/bloxd.io/main.js` (Changed code · before: `L19112` → after: `L19112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19112) · [Before (L19112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19112)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 983. `bundles/bloxd.io/main.js` (Changed code · before: `L19116` → after: `L19116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19116) · [Before (L19116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19116)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 984. `bundles/bloxd.io/main.js` (Changed code · before: `L19120` → after: `L19120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19120) · [Before (L19120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19120)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 985. `bundles/bloxd.io/main.js` (Changed code · before: `L19124` → after: `L19124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19124) · [Before (L19124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19124)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 986. `bundles/bloxd.io/main.js` (Changed code · before: `L19128` → after: `L19128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19128) · [Before (L19128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19128)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 987. `bundles/bloxd.io/main.js` (Changed code · before: `L19132` → after: `L19132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19132) · [Before (L19132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19132)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 988. `bundles/bloxd.io/main.js` (Changed code · before: `L19136` → after: `L19136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19136) · [Before (L19136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19136)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 989. `bundles/bloxd.io/main.js` (Changed code · before: `L19140` → after: `L19140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19140) · [Before (L19140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19140)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 990. `bundles/bloxd.io/main.js` (Changed code · before: `L19144` → after: `L19144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19144) · [Before (L19144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19144)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 991. `bundles/bloxd.io/main.js` (Changed code · before: `L19148` → after: `L19148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19148) · [Before (L19148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19148)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 992. `bundles/bloxd.io/main.js` (Changed code · before: `L19152` → after: `L19152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19152) · [Before (L19152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19152)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 993. `bundles/bloxd.io/main.js` (Changed code · before: `L19156` → after: `L19156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19156) · [Before (L19156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19156)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 994. `bundles/bloxd.io/main.js` (Changed code · before: `L19160` → after: `L19160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19160) · [Before (L19160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19160)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 995. `bundles/bloxd.io/main.js` (Changed code · before: `L19164` → after: `L19164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19164) · [Before (L19164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19164)

```diff
-                 ...qu.c,
+                 ...UG.b,
```

#### 996. `bundles/bloxd.io/main.js` (Changed code · before: `L19179-L19180` → after: `L19179-L19180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19179-L19180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19179-L19180) · [Before (L19179-L19180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19179-L19180)

```diff
-               paintball: ou.b,
-               naturalDisaster: ku.e,
+               paintball: IG.c,
+               naturalDisaster: FG.d,
```

#### 997. `bundles/bloxd.io/main.js` (Changed code · before: `L19202` → after: `L19202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19202) · [Before (L19202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19202)

```diff
-               arcadeMode: Xu.b,
+               arcadeMode: yG.e,
```

#### 998. `bundles/bloxd.io/main.js` (Changed code · before: `L19204` → after: `L19204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19204) · [Before (L19204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19204)

```diff
-               tsunami: Qu.d,
+               tsunami: PG.b,
```

#### 999. `bundles/bloxd.io/main.js` (Changed code · before: `L19207` → after: `L19207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19207) · [Before (L19207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19207)

```diff
-               skyIslands: Lu.d,
+               skyIslands: eG.e,
```

#### 1000. `bundles/bloxd.io/main.js` (Changed code · before: `L19209` → after: `L19209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19209) · [Before (L19209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19209)

```diff
-                 ...Lu.d,
+                 ...eG.e,
```

#### 1001. `bundles/bloxd.io/main.js` (Changed code · before: `L19215` → after: `L19215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19215) · [Before (L19215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19215)

```diff
-                 ...Lu.d,
+                 ...eG.e,
```

#### 1002. `bundles/bloxd.io/main.js` (Changed code · before: `L19221` → after: `L19221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19221) · [Before (L19221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19221)

```diff
-                 ...Lu.d,
+                 ...eG.e,
```

#### 1003. `bundles/bloxd.io/main.js` (Changed code · before: `L19230` → after: `L19230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19230) · [Before (L19230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19230)

```diff
-                 ...Lu.d,
+                 ...eG.e,
```

#### 1004. `bundles/bloxd.io/main.js` (Changed code · before: `L19239` → after: `L19239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19239) · [Before (L19239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19239)

```diff
-               clutch: Fu.e,
+               clutch: nG.b,
```

#### 1005. `bundles/bloxd.io/main.js` (Changed code · before: `L19241` → after: `L19241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19241) · [Before (L19241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19241)

```diff
-                 ...Fu.e,
+                 ...nG.b,
```

#### 1006. `bundles/bloxd.io/main.js` (Changed code · before: `L19245` → after: `L19245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19245) · [Before (L19245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19245)

```diff
-                 ...Fu.e,
+                 ...nG.b,
```

#### 1007. `bundles/bloxd.io/main.js` (Changed code · before: `L19249` → after: `L19249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19249) · [Before (L19249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19249)

```diff
-                 ...Fu.e,
+                 ...nG.b,
```

#### 1008. `bundles/bloxd.io/main.js` (Changed code · before: `L19280` → after: `L19280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19280) · [Before (L19280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19280)

```diff
-           Ru.d.localGameName && void 0 === jE[Ru.d.localGameName] && (jE[Ru.d.localGameName] = {
+           BG.b.localGameName && void 0 === Zb[BG.b.localGameName] && (Zb[BG.b.localGameName] = {
```

#### 1009. `bundles/bloxd.io/main.js` (Changed code · before: `L19282` → after: `L19282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19282) · [Before (L19282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19282)

```diff
-             title: Ru.d.localGameName
+             title: BG.b.localGameName
```

#### 1010. `bundles/bloxd.io/main.js` (Changed code · before: `L19309` → after: `L19309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19309) · [Before (L19309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19309)

```diff
-             return null !== (Eu = (0, su.c)(jE, uu)) && void 0 !== Eu ? Eu : null
+             return null !== (bG = (0, wG.c)(Zb, GG)) && void 0 !== bG ? bG : null
```

#### 1011. `bundles/bloxd.io/main.js` (Changed code · before: `L19314` → after: `L19314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19314) · [Before (L19314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19314)

```diff
-             return null !== (Eu = null === (ju = UE(uu)) || void 0 === ju ? void 0 : ju.shaderPackPolicy) && void 0 !== Eu ? Eu : "strict"
+             return null !== (bG = null === (ZG = Sb(GG)) || void 0 === ZG ? void 0 : ZG.shaderPackPolicy) && void 0 !== bG ? bG : "strict"
```

#### 1012. `bundles/bloxd.io/main.js` (Changed code · before: `L19316` → after: `L19316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19316) · [Before (L19316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19316)

```diff
-         }, , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 1013. `bundles/bloxd.io/main.js` (Changed code · before: `L19341` → after: `L19341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19341) · [Before (L19341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19341)

```diff
-         }, , , , (uu, Eu, ju) => {
+         }, , , , , , (GG, bG, ZG) => {
```

#### 1014. `bundles/bloxd.io/main.js` (Changed code · before: `L19343` → after: `L19343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19343) · [Before (L19343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19343)

```diff
-             b: () => su
+             e: () => wG
```

#### 1015. `bundles/bloxd.io/main.js` (Changed code · before: `L19358` → after: `L19358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19358) · [Before (L19358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19358)

```diff
-         }, , , (uu, Eu, ju) => {
+         }, , , , , , , , (GG, bG, ZG) => {
```

#### 1016. `bundles/bloxd.io/main.js` (Changed code · before: `L19360` → after: `L19360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19360) · [Before (L19360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19360)

```diff
-             b: () => su
+             e: () => wG
```

#### 1017. `bundles/bloxd.io/main.js` (Changed code · before: `L19377` → after: `L19377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19377) · [Before (L19377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19377)

```diff
-         }, , , , , , (uu, Eu, ju) => {
+         }, , , , , (GG, bG, ZG) => {
```

#### 1018. `bundles/bloxd.io/main.js` (Changed code · before: `L19401` → after: `L19401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19401) · [Before (L19401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19401)

```diff
-         }, , , , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 1019. `bundles/bloxd.io/main.js` (Changed code · before: `L19403` → after: `L19403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19403) · [Before (L19403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19403)

```diff
-             c: () => su
+             b: () => wG
```

#### 1020. `bundles/bloxd.io/main.js` (Changed code · before: `L19427` → after: `L19427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19427) · [Before (L19427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19427)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 1021. `bundles/bloxd.io/main.js` (Changed code · before: `L19429` → after: `L19429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19429) · [Before (L19429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19429)

```diff
-             e: () => su
+             b: () => wG
```

#### 1022. `bundles/bloxd.io/main.js` (Changed code · before: `L19457` → after: `L19457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19457) · [Before (L19457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19457)

```diff
-         }, , , , , , (uu, Eu, ju) => {
+         }, , , , , (GG, bG, ZG) => {
```

#### 1023. `bundles/bloxd.io/main.js` (Changed code · before: `L19481` → after: `L19481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19481) · [Before (L19481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19481)

```diff
-         }, , (uu, Eu, ju) => {
+         }, , , , , (GG, bG, ZG) => {
```

#### 1024. `bundles/bloxd.io/main.js` (Changed code · before: `L19483` → after: `L19483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19483) · [Before (L19483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19483)

```diff
-             d: () => su
+             c: () => wG
```

#### 1025. `bundles/bloxd.io/main.js` (Changed code · before: `L19509` → after: `L19509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19509) · [Before (L19509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19509)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , (GG, bG, ZG) => {
```

#### 1026. `bundles/bloxd.io/main.js` (Changed code · before: `L19511` → after: `L19511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19511) · [Before (L19511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19511)

```diff
-             e: () => su
+             b: () => wG
```

#### 1027. `bundles/bloxd.io/main.js` (Changed code · before: `L19524` → after: `L19524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19524) · [Before (L19524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19524)

```diff
-               dateAdded: ju(874).c
+               dateAdded: ZG(800).g
```

#### 1028. `bundles/bloxd.io/main.js` (Changed code · before: `L19528` → after: `L19528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19528) · [Before (L19528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19528)

```diff
-         }, , , , , , , (uu, Eu, ju) => {
+         }, , , , , , , , , (GG, bG, ZG) => {
```

#### 1029. `bundles/bloxd.io/main.js` (Changed code · before: `L19530-L19531` → after: `L19530-L19531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19530-L19531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19530-L19531) · [Before (L19530-L19531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19530-L19531)

```diff
-             b: () => su,
-             c: () => Uu
+             e: () => wG,
+             g: () => SG
```

#### 1030. `bundles/bloxd.io/main.js` (Changed code · before: `L19536` → after: `L19536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19536) · [Before (L19536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19536)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 1031. `bundles/bloxd.io/main.js` (Changed code · before: `L19538` → after: `L19538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19538) · [Before (L19538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19538)

```diff
-             c: () => su
+             d: () => wG
```

#### 1032. `bundles/bloxd.io/main.js` (Changed code · before: `L19568` → after: `L19568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19568) · [Before (L19568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19568)

```diff
-         }, , , (uu, Eu, ju) => {
+         }, , (GG, bG, ZG) => {
```

#### 1033. `bundles/bloxd.io/main.js` (Changed code · before: `L19570` → after: `L19570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19570) · [Before (L19570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19570)

```diff
-             e: () => su
+             c: () => wG
```

#### 1034. `bundles/bloxd.io/main.js` (Changed code · before: `L19585` → after: `L19585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19585) · [Before (L19585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19585)

```diff
-         }, , , , , , , , (uu, Eu, ju) => {
+         }, , , , , , , (GG, bG, ZG) => {
```

#### 1035. `bundles/bloxd.io/main.js` (Changed code · before: `L19604` → after: `L19604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19604) · [Before (L19604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19604)

```diff
-         }, , , , (uu, Eu, ju) => {
+         }, , , , , (GG, bG, ZG) => {
```

#### 1036. `bundles/bloxd.io/main.js` (Changed code · before: `L19606` → after: `L19606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19606) · [Before (L19606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19606)

```diff
-             c: () => su
+             d: () => wG
```

#### 1037. `bundles/bloxd.io/main.js` (Changed code · before: `L19629` → after: `L19629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19629) · [Before (L19629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19629)

```diff
-         }, , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 1038. `bundles/bloxd.io/main.js` (Changed code · before: `L19631` → after: `L19631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19631) · [Before (L19631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19631)

```diff
-             e: () => su
+             b: () => wG
```

#### 1039. `bundles/bloxd.io/main.js` (Changed code · before: `L19648` → after: `L19648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19648) · [Before (L19648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19648)

```diff
-             b: () => su
+             d: () => wG
```

#### 1040. `bundles/bloxd.io/main.js` (Changed code · before: `L19664` → after: `L19664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19664) · [Before (L19664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19664)

```diff
-         }, , (uu, Eu, ju) => {
+         }, , , , , , , , , (GG, bG, ZG) => {
```

#### 1041. `bundles/bloxd.io/main.js` (Changed code · before: `L19666` → after: `L19666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19666) · [Before (L19666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19666)

```diff
-             e: () => su
+             b: () => wG
```

#### 1042. `bundles/bloxd.io/main.js` (Changed code · before: `L19692` → after: `L19692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19692) · [Before (L19692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19692)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 1043. `bundles/bloxd.io/main.js` (Changed code · before: `L19694` → after: `L19694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19694) · [Before (L19694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19694)

```diff
-             d: () => su
+             b: () => wG
```

#### 1044. `bundles/bloxd.io/main.js` (Changed code · before: `L19716` → after: `L19716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19716) · [Before (L19716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19716)

```diff
-         }, , (uu, Eu, ju) => {
+         }, , , , , , , (GG, bG, ZG) => {
```

#### 1045. `bundles/bloxd.io/main.js` (Changed code · before: `L19718` → after: `L19718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19718) · [Before (L19718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19718)

```diff
-             d: () => su
+             c: () => wG
```

#### 1046. `bundles/bloxd.io/main.js` (Changed code · before: `L19743` → after: `L19743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19743) · [Before (L19743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19743)

```diff
-         }, , , , , (uu, Eu, ju) => {
+         }, , (GG, bG, ZG) => {
```

#### 1047. `bundles/bloxd.io/main.js` (Changed code · before: `L19766` → after: `L19766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19766) · [Before (L19766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19766)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , , , , , , , (GG, bG, ZG) => {
```

#### 1048. `bundles/bloxd.io/main.js` (Changed code · before: `L19768` → after: `L19768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19768) · [Before (L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19768)

```diff
-             e: () => su
+             b: () => wG
```

#### 1049. `bundles/bloxd.io/main.js` (Changed code · before: `L19782` → after: `L19782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19782) · [Before (L19782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19782)

```diff
-         }, , , (uu, Eu, ju) => {
+         }, , , , , , (GG, bG, ZG) => {
```

#### 1050. `bundles/bloxd.io/main.js` (Changed code · before: `L19806` → after: `L19806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19806) · [Before (L19806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19806)

```diff
-         }, , , (uu, Eu, ju) => {
+         }, , , , , , , (GG, bG, ZG) => {
```

#### 1051. `bundles/bloxd.io/main.js` (Changed code · before: `L19823` → after: `L19823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19823) · [Before (L19823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19823)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , , , , , , , (GG, bG, ZG) => {
```

#### 1052. `bundles/bloxd.io/main.js` (Changed code · before: `L19825` → after: `L19825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19825) · [Before (L19825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19825)

```diff
-             b: () => su
+             c: () => wG
```

#### 1053. `bundles/bloxd.io/main.js` (Changed code · before: `L19841` → after: `L19841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19841) · [Before (L19841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19841)

```diff
-             e: () => su
+             d: () => wG
```

#### 1054. `bundles/bloxd.io/main.js` (Changed code · before: `L19867` → after: `L19867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19867) · [Before (L19867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19867)

```diff
-         }, , , , , , (uu, Eu, ju) => {
+         }, , , , , , , , (GG, bG, ZG) => {
```

#### 1055. `bundles/bloxd.io/main.js` (Changed code · before: `L19904` → after: `L19904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19904) · [Before (L19904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19904)

```diff
-         }, , , , , , , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 1056. `bundles/bloxd.io/main.js` (Changed code · before: `L19924` → after: `L19924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19924) · [Before (L19924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19924)

```diff
-         }, , , , , , (uu, Eu, ju) => {
+         }, , , , , (GG, bG, ZG) => {
```

#### 1057. `bundles/bloxd.io/main.js` (Changed code · before: `L19942` → after: `L19942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19942) · [Before (L19942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19942)

```diff
-         }, , (uu, Eu, ju) => {
+         }, , , , , , (GG, bG, ZG) => {
```

#### 1058. `bundles/bloxd.io/main.js` (Changed code · before: `L19964` → after: `L19964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19964) · [Before (L19964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19964)

```diff
-         }, , , , , , , , (uu, Eu, ju) => {
+         }, , (GG, bG, ZG) => {
```

#### 1059. `bundles/bloxd.io/main.js` (Changed code · before: `L19966` → after: `L19966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19966) · [Before (L19966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19966)

```diff
-             d: () => su
+             b: () => wG
```

#### 1060. `bundles/bloxd.io/main.js` (Changed code · before: `L19983` → after: `L19983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19983) · [Before (L19983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19983)

```diff
-         }, , , (uu, Eu, ju) => {
+         }, , , , , , , , , (GG, bG, ZG) => {
```

#### 1061. `bundles/bloxd.io/main.js` (Changed code · before: `L19999` → after: `L19999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L19999) · [Before (L19999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L19999)

```diff
-         }, , , , , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 1062. `bundles/bloxd.io/main.js` (Changed code · before: `L20001` → after: `L20001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20001) · [Before (L20001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20001)

```diff
-             c: () => su
+             e: () => wG
```

#### 1063. `bundles/bloxd.io/main.js` (Changed code · before: `L20019` → after: `L20019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20019) · [Before (L20019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20019)

```diff
-         }, , , , , , , , (uu, Eu, ju) => {
+         }, , , , , , (GG, bG, ZG) => {
```

#### 1064. `bundles/bloxd.io/main.js` (Changed code · before: `L20021` → after: `L20021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20021) · [Before (L20021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20021)

```diff
-             e: () => su
+             d: () => wG
```

#### 1065. `bundles/bloxd.io/main.js` (Changed code · before: `L20034` → after: `L20034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20034) · [Before (L20034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20034)

```diff
-         }, , , , , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 1066. `bundles/bloxd.io/main.js` (Changed code · before: `L20050` → after: `L20050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20050) · [Before (L20050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20050)

```diff
-         }, , , , , , , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 1067. `bundles/bloxd.io/main.js` (Changed code · before: `L20052` → after: `L20052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20052) · [Before (L20052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20052)

```diff
-             e: () => su
+             b: () => wG
```

#### 1068. `bundles/bloxd.io/main.js` (Changed code · before: `L20072` → after: `L20072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20072) · [Before (L20072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20072)

```diff
-         }, , , , , , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 1069. `bundles/bloxd.io/main.js` (Changed code · before: `L20088` → after: `L20088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20088) · [Before (L20088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20088)

```diff
-         }, , , , , , , , (uu, Eu, ju) => {
+         }, , (GG, bG, ZG) => {
```

#### 1070. `bundles/bloxd.io/main.js` (Changed code · before: `L20090` → after: `L20090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20090) · [Before (L20090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20090)

```diff
-             d: () => su
+             e: () => wG
```

#### 1071. `bundles/bloxd.io/main.js` (Changed code · before: `L20108` → after: `L20108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20108) · [Before (L20108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20108)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , (GG, bG, ZG) => {
```

#### 1072. `bundles/bloxd.io/main.js` (Changed code · before: `L20110` → after: `L20110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20110) · [Before (L20110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20110)

```diff
-             d: () => su
+             e: () => wG
```

#### 1073. `bundles/bloxd.io/main.js` (Changed code · before: `L20142` → after: `L20142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20142) · [Before (L20142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20142)

```diff
-         }, , , , , , , (uu, Eu, ju) => {
+         }, , , , , , , , , (GG, bG, ZG) => {
```

#### 1074. `bundles/bloxd.io/main.js` (Changed code · before: `L20144` → after: `L20144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20144) · [Before (L20144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20144)

```diff
-             e: () => su
+             d: () => wG
```

#### 1075. `bundles/bloxd.io/main.js` (Changed code · before: `L20163` → after: `L20163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20163) · [Before (L20163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20163)

```diff
-             b: () => su
+             c: () => wG
```

#### 1076. `bundles/bloxd.io/main.js` (Changed code · before: `L20178` → after: `L20178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20178) · [Before (L20178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20178)

```diff
-         }, , , (uu, Eu, ju) => {
+         }, , , , , , (GG, bG, ZG) => {
```

#### 1077. `bundles/bloxd.io/main.js` (Changed code · before: `L20195` → after: `L20195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20195) · [Before (L20195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20195)

```diff
-         }, , , , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 1078. `bundles/bloxd.io/main.js` (Changed code · before: `L20197` → after: `L20197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20197) · [Before (L20197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20197)

```diff
-             b: () => su
+             e: () => wG
```

#### 1079. `bundles/bloxd.io/main.js` (Changed code · before: `L20210` → after: `L20210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20210) · [Before (L20210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20210)

```diff
-         }, , , , , , , , (uu, Eu, ju) => {
+         }, , , (GG, bG, ZG) => {
```

#### 1080. `bundles/bloxd.io/main.js` (Changed code · before: `L20212` → after: `L20212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20212) · [Before (L20212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20212)

```diff
-             e: () => su
+             d: () => wG
```

#### 1081. `bundles/bloxd.io/main.js` (Changed code · before: `L20232-L20237` → after: `L20232-L20237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20232-L20237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20232-L20237) · [Before (L20232-L20237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20232-L20237)

```diff
-           var su = ju(1069),
-             Uu = ju(1079),
-             Zu = ju(1088),
-             Xu = ju(1072),
-             lu = ju(822);
-           const qu = new Set([...Zu.f, Xu.l]);
+           var wG = ZG(982),
+             SG = ZG(988),
+             LG = ZG(993),
+             yG = ZG(984),
+             kG = ZG(751);
+           const UG = new Set([...LG.c, yG.k]);
```

#### 1082. `bundles/bloxd.io/main.js` (Changed code · before: `L20241` → after: `L20241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20241) · [Before (L20241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20241)

```diff
-             for (const ju of Object.keys(lu.c)) {
+             for (const ZG of Object.keys(kG.d)) {
```

#### 1083. `bundles/bloxd.io/main.js` (Changed code · before: `L20243-L20244` → after: `L20243-L20244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20243-L20244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20243-L20244) · [Before (L20243-L20244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20243-L20244)

```diff
-               if (!qu.has(ju) || (0, su.l)(Zu)) continue;
-               const Xu = (0, Uu.i)(Zu, !0);
+               if (!UG.has(ZG) || (0, wG.h)(LG)) continue;
+               const yG = (0, SG.d)(LG, !0);
```

#### 1084. `bundles/bloxd.io/main.js` (Changed code · before: `L20257` → after: `L20257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20257) · [Before (L20257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20257)

```diff
-             return null !== (Eu = fu.find((Eu => Eu === uu))) && void 0 !== Eu ? Eu : null
+             return null !== (bG = YG.find((bG => bG === GG))) && void 0 !== bG ? bG : null
```

#### 1085. `bundles/bloxd.io/main.js` (Changed code · before: `L20268` → after: `L20268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20268) · [Before (L20268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20268)

```diff
-         }, , , , (uu, Eu, ju) => {
+         }, , , , , , , , , (GG, bG, ZG) => {
```

#### 1086. `bundles/bloxd.io/main.js` (Changed code · before: `L20270-L20271` → after: `L20270-L20272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20270-L20272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20270-L20272) · [Before (L20270-L20271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20270-L20271)

```diff
-             e: () => cu,
-             f: () => Zu,
+             c: () => fG,
+             d: () => LG,
+             g: () => dG,
```

#### 1087. `bundles/bloxd.io/main.js` (Changed code · before: `L20273` → after: `L20274-L20275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20274-L20275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20274-L20275) · [Before (L20273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20273)

```diff
-             l: () => lu,
+             i: () => hG,
+             j: () => VG,
```

#### 1088. `bundles/bloxd.io/main.js` (Changed code · before: `L20275-L20277` → after: `L20277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20277) · [Before (L20275-L20277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20275-L20277)

```diff
-             q: () => Cu,
-             s: () => Ou,
-             w: () => Nu
+             n: () => QG
```

#### 1089. `bundles/bloxd.io/main.js` (Changed code · before: `L20279-L20280` → after: `L20279-L20280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20279-L20280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20279-L20280) · [Before (L20279-L20280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20279-L20280)

```diff
-           var su = ju(1072),
-             Uu = ju(349);
+           var wG = ZG(984),
+             SG = ZG(352);
```

#### 1090. `bundles/bloxd.io/main.js` (Changed code · before: `L20285` → after: `L20285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20285) · [Before (L20285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20285)

```diff
-             return qu((0, Uu.Qb)(uu))
+             return UG((0, SG.Vb)(GG))
```

#### 1091. `bundles/bloxd.io/main.js` (Changed code · before: `L20290` → after: `L20290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20290) · [Before (L20290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20290)

```diff
-             return null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.startsWith(su.f)) && void 0 !== Eu && Eu
+             return null !== (bG = null === GG || void 0 === GG ? void 0 : GG.startsWith(wG.e)) && void 0 !== bG && bG
```

#### 1092. `bundles/bloxd.io/main.js` (Changed code · before: `L20298` → after: `L20298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20298) · [Before (L20298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20298)

```diff
-             return fu((0, Uu.Qb)(uu))
+             return YG((0, SG.Vb)(GG))
```

#### 1093. `bundles/bloxd.io/main.js` (Changed code · before: `L20302` → after: `L20302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20302) · [Before (L20302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20302)

```diff
-             return Eu && Eu !== Zu ? `${su.f}|${uu}|${Eu}` : `${su.f}|${uu}`
+             return bG && bG !== LG ? `${wG.e}|${GG}|${bG}` : `${wG.e}|${GG}`
```

#### 1094. `bundles/bloxd.io/main.js` (Changed code · before: `L20306` → after: `L20306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20306) · [Before (L20306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20306)

```diff
-             return `classic_${bu(uu,Eu)}`
+             return `classic_${pG(GG,bG)}`
```

#### 1095. `bundles/bloxd.io/main.js` (Changed code · before: `L20320` → after: `L20320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20320) · [Before (L20320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20320)

```diff
-               const ju = (0, Uu.Qb)(uu);
+               const ZG = (0, SG.Vb)(GG);
```

#### 1096. `bundles/bloxd.io/main.js` (Changed code · before: `L20328` → after: `L20328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20328) · [Before (L20328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20328)

```diff
-             return su && su !== Zu ? su : null
+             return wG && wG !== LG ? wG : null
```

#### 1097. `bundles/bloxd.io/main.js` (Changed code · before: `L20332` → after: `L20332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20332) · [Before (L20332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20332)

```diff
-             return `${uu}|${Eu&&Eu!==Zu?Eu:Zu}|${ju}`
+             return `${GG}|${bG&&bG!==LG?bG:LG}|${ZG}`
```

#### 1098. `bundles/bloxd.io/main.js` (Changed code · before: `L20334` → after: `L20334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20334) · [Before (L20334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20334)

```diff
-         }, , , (uu, Eu, ju) => {
+         }, , (GG, bG, ZG) => {
```

#### 1099. `bundles/bloxd.io/main.js` (Changed code · before: `L20337-L20339` → after: `L20338-L20339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20338-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20338-L20339) · [Before (L20337-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20337-L20339)

```diff
-             f: () => su,
-             h: () => Zu,
-             l: () => Uu
+             g: () => LG,
+             k: () => SG
```

#### 1100. `bundles/bloxd.io/main.js` (Changed code · before: `L20347` → after: `L20347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20347) · [Before (L20347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20347)

```diff
-         }, , , , , , , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 1101. `bundles/bloxd.io/main.js` (Changed code · before: `L20349-L20351` → after: `L20349-L20351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20349-L20351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20349-L20351) · [Before (L20349-L20351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20349-L20351)

```diff
-             e: () => qu,
-             i: () => lu,
-             k: () => fu
+             b: () => UG,
+             d: () => kG,
+             h: () => YG
```

#### 1102. `bundles/bloxd.io/main.js` (Changed code · before: `L20353-L20355` → after: `L20353-L20355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20353-L20355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20353-L20355) · [Before (L20353-L20355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20353-L20355)

```diff
-           var su = ju(1069),
-             Uu = ju(349),
-             Zu = ju(1072);
+           var wG = ZG(982),
+             SG = ZG(352),
+             LG = ZG(984);
```

#### 1103. `bundles/bloxd.io/main.js` (Changed code · before: `L20359` → after: `L20359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20359) · [Before (L20359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20359)

```diff
-             return (0, su.l)(uu) ? qu((0, su.q)(uu)) : uu !== Zu.h || Eu ? Xu.includes(uu) ? "classic_survivalFactory" : "classic" === (0, Uu.Vb)(uu) ? uu : (0, Uu.Vb)(uu) : "classic_worlds"
+             return (0, wG.h)(GG) ? UG((0, wG.j)(GG)) : GG !== LG.g || bG ? yG.includes(GG) ? "classic_survivalFactory" : "classic" === (0, SG.Yb)(GG) ? GG : (0, SG.Yb)(GG) : "classic_worlds"
```

#### 1104. `bundles/bloxd.io/main.js` (Changed code · before: `L20363` → after: `L20363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20363) · [Before (L20363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20363)

```diff
-             return (0, su.w)(uu)
+             return (0, wG.n)(GG)
```

#### 1105. `bundles/bloxd.io/main.js` (Changed code · before: `L20367-L20368` → after: `L20367-L20368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20367-L20368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20367-L20368) · [Before (L20367-L20368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20367-L20368)

```diff
-             const Eu = (0, su.q)(uu);
-             return Eu && (0, Uu.Ic)(Eu) ? Eu : null
+             const bG = (0, wG.j)(GG);
+             return bG && (0, SG.Oc)(bG) ? bG : null
```

#### 1106. `bundles/bloxd.io/main.js` (Changed code · before: `L20370` → after: `L20370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20370) · [Before (L20370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20370)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , , , , (GG, bG, ZG) => {
```

#### 1107. `bundles/bloxd.io/main.js` (Changed code · before: `L20372-L20373` → after: `L20372-L20373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20372-L20373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20372-L20373) · [Before (L20372-L20373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20372-L20373)

```diff
-             e: () => Uu,
-             f: () => su
+             b: () => SG,
+             c: () => wG
```

#### 1108. `bundles/bloxd.io/main.js` (Changed code · before: `L20391` → after: `L20391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20391) · [Before (L20391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20391)

```diff
-         }, , , , , , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 1109. `bundles/bloxd.io/main.js` (Changed code · before: `L20393-L20394` → after: `L20393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20393) · [Before (L20393-L20394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20393-L20394)

```diff
-             d: () => lu,
-             g: () => su,
+             e: () => kG,
```

#### 1110. `bundles/bloxd.io/main.js` (Changed code · before: `L20456` → after: `L20456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20456) · [Before (L20456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20456)

```diff
-         }, , , , , (uu, Eu) => {
+         }, , , (GG, bG) => {
```

#### 1111. `bundles/bloxd.io/main.js` (Changed code · before: `L20484` → after: `L20484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20484) · [Before (L20484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20484)

```diff
-         }, , , , , , , , , (uu, Eu, ju) => {
+         }, , , , , , (GG, bG, ZG) => {
```

#### 1112. `bundles/bloxd.io/main.js` (Changed code · before: `L20486` → after: `L20486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20486) · [Before (L20486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20486)

```diff
-             c: () => Xu
+             d: () => yG
```

#### 1113. `bundles/bloxd.io/main.js` (Changed code · before: `L20488-L20490` → after: `L20488-L20490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20488-L20490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20488-L20490) · [Before (L20488-L20490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20488-L20490)

```diff
-           var su = ju(58),
-             Uu = ju(1116),
-             Zu = ju(1154);
+           var wG = ZG(51),
+             SG = ZG(1016),
+             LG = ZG(1067);
```

#### 1114. `bundles/bloxd.io/main.js` (Changed code · before: `L20512` → after: `L20512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20512) · [Before (L20512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20512)

```diff
-               className: `IconShower IconShowerAnimation${Xu} ${null!==qu&&void 0!==qu?qu:""}`,
+               className: `IconShower IconShowerAnimation${yG} ${null!==UG&&void 0!==UG?UG:""}`,
```

#### 1115. `bundles/bloxd.io/main.js` (Changed code · before: `L20514` → after: `L20514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20514) · [Before (L20514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20514)

```diff
-                 className: `Icon IconGroup${uu}`,
+                 className: `Icon IconGroup${GG}`,
```

#### 1116. `bundles/bloxd.io/main.js` (Changed code · before: `L20519` → after: `L20519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20519) · [Before (L20519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20519)

```diff
-                 children: (0, Zu.jsx)(Uu.e, {
+                 children: (0, LG.jsx)(SG.c, {
```

#### 1117. `bundles/bloxd.io/main.js` (Changed code · before: `L20525` → after: `L20525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20525) · [Before (L20525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20525)

```diff
-         }, , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 1118. `bundles/bloxd.io/main.js` (Changed code · before: `L20527-L20528` → after: `L20527-L20528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20527-L20528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20527-L20528) · [Before (L20527-L20528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20527-L20528)

```diff
-             e: () => Ou,
-             i: () => qu.e
+             c: () => KG,
+             g: () => UG.n
```

#### 1119. `bundles/bloxd.io/main.js` (Changed code · before: `L20530-L20531` → after: `L20530-L20531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20530-L20531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20530-L20531) · [Before (L20530-L20531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20530-L20531)

```diff
-           var su = ju(58),
-             Uu = ju(1105),
+           var wG = ZG(51),
+             SG = ZG(1006),
```

#### 1120. `bundles/bloxd.io/main.js` (Changed code · before: `L20533-L20537` → after: `L20533-L20537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20533-L20537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20533-L20537) · [Before (L20533-L20537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20533-L20537)

```diff
-             Xu = ju(349),
-             lu = ju(1121),
-             qu = ju(1125),
-             fu = ju(1154);
-           const Cu = lu.e;
+             yG = ZG(352),
+             kG = ZG(1021),
+             UG = ZG(1025),
+             YG = ZG(1067);
+           const VG = kG.f;
```

#### 1121. `bundles/bloxd.io/main.js` (Changed code · before: `L20541` → after: `L20541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20541) · [Before (L20541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20541)

```diff
-             const su = (0, qu.q)((() => {
+             const wG = (0, UG.z)((() => {
```

#### 1122. `bundles/bloxd.io/main.js` (Changed code · before: `L20557-L20558` → after: `L20557-L20558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20557-L20558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20557-L20558) · [Before (L20557-L20558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20557-L20558)

```diff
-             } = (0, qu.m)(ju || "", Uu), Yu = function(uu, Eu, ju) {
-               const [, Uu] = (0, su.useState)(0), Zu = ju ? (0, qu.d)(Eu) : void 0;
+             } = (0, UG.w)(ZG || "", SG), hG = function(GG, bG, ZG) {
+               const [, SG] = (0, wG.useState)(0), LG = ZG ? (0, UG.j)(bG) : void 0;
```

#### 1123. `bundles/bloxd.io/main.js` (Changed code · before: `L20560` → after: `L20560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20560) · [Before (L20560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20560)

```diff
-                   if (ju && !Zu) return bu((() => void 0 !== (0, qu.d)(Eu)), (() => (0, qu.j)(Eu)), (() => {
+                   if (ZG && !LG) return pG((() => void 0 !== (0, UG.j)(bG)), (() => (0, UG.s)(bG)), (() => {
```

#### 1124. `bundles/bloxd.io/main.js` (Changed code · before: `L20565` → after: `L20565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20565) · [Before (L20565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20565)

```diff
-               return Xu || (console.warn(`Unknown icon "${uu}" (kit "${Eu}") \u2014 not in the bundled Font Awesome subset.`), Cu)
+               return yG || (console.warn(`Unknown icon "${GG}" (kit "${bG}") \u2014 not in the bundled Font Awesome subset.`), VG)
```

#### 1125. `bundles/bloxd.io/main.js` (Changed code · before: `L20568` → after: `L20568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20568) · [Before (L20568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20568)

```diff
-               const [, Eu] = (0, su.useState)(0), ju = (0, qu.c)();
+               const [, bG] = (0, wG.useState)(0), ZG = (0, UG.h)();
```

#### 1126. `bundles/bloxd.io/main.js` (Changed code · before: `L20570` → after: `L20570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20570) · [Before (L20570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20570)

```diff
-                 if (!ju) return bu((() => void 0 !== (0, qu.c)()), qu.g, (() => {
+                 if (!ZG) return pG((() => void 0 !== (0, UG.h)()), UG.r, (() => {
```

#### 1127. `bundles/bloxd.io/main.js` (Changed code · before: `L20573` → after: `L20573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20573) · [Before (L20573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20573)

```diff
-               }), [ju]), null !== (uu = null === ju || void 0 === ju ? void 0 : ju.FontAwesomeIcon) && void 0 !== uu ? uu : null
+               }), [ZG]), null !== (GG = null === ZG || void 0 === ZG ? void 0 : ZG.FontAwesomeIcon) && void 0 !== GG ? GG : null
```

#### 1128. `bundles/bloxd.io/main.js` (Changed code · before: `L20586` → after: `L20586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20586) · [Before (L20586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20586)

```diff
-             const Du = Zu()(`fa-${cu}`, Ou, Xu);
+             const JG = LG()(`fa-${fG}`, KG, yG);
```

#### 1129. `bundles/bloxd.io/main.js` (Changed code · before: `L20603` → after: `L20603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20603) · [Before (L20603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20603)

```diff
-             return (0, Xu.he)(su, Zu) && (0, Xu.he)(ju, Uu)
+             return (0, yG.ze)(wG, LG) && (0, yG.ze)(ZG, SG)
```

#### 1130. `bundles/bloxd.io/main.js` (Changed code · before: `L20615` → after: `L20615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20615) · [Before (L20615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20615)

```diff
-           }, Eu.e = Eu.d
+           }, bG.f = bG.d
```

#### 1131. `bundles/bloxd.io/main.js` (Changed code · before: `L20618-L20625` → after: `L20618-L20625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20618-L20625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20618-L20625) · [Before (L20618-L20625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20618-L20625)

```diff
-             b: () => Zu.i,
-             c: () => bu,
-             d: () => Zu.k,
-             e: () => Zu.m,
-             g: () => Cu,
-             j: () => Zu.o,
-             m: () => cu,
-             q: () => Zu.u
+             d: () => LG.f,
+             h: () => pG,
+             j: () => LG.i,
+             n: () => LG.l,
+             r: () => VG,
+             s: () => LG.p,
+             w: () => fG,
+             z: () => LG.w
```

#### 1132. `bundles/bloxd.io/main.js` (Changed code · before: `L20627-L20629` → after: `L20627-L20629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20627-L20629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20627-L20629) · [Before (L20627-L20629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20627-L20629)

```diff
-           var su = ju(65),
-             Uu = ju(1128),
-             Zu = ju(1149);
+           var wG = ZG(59),
+             SG = ZG(1032),
+             LG = ZG(1060);
```

#### 1133. `bundles/bloxd.io/main.js` (Changed code · before: `L20650` → after: `L20650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20650) · [Before (L20650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20650)

```diff
-             const uu = Promise.all([ju.e(32).then((() => ju(6876))), ju.e(32).then((() => ju(6884)))]).then((uu => {
+             const GG = Promise.all([ZG.e(32).then((() => ZG(6685))), ZG.e(32).then((() => ZG(6689)))]).then((GG => {
```

#### 1134. `bundles/bloxd.io/main.js` (Changed code · before: `L20659` → after: `L20659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20659) · [Before (L20659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20659)

```diff
-               console.warn("Failed to load the icon renderer", uu), (0, Uu.YY)(uu), (0, Zu.e)("renderer", (() => {
+               console.warn("Failed to load the icon renderer", GG), (0, SG.rh)(GG), (0, LG.c)("renderer", (() => {
```

#### 1135. `bundles/bloxd.io/main.js` (Changed code · before: `L20676` → after: `L20676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20676) · [Before (L20676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20676)

```diff
-                 let Uu = Eu.find((uu => !ju(uu) && null !== (0, Zu.i)(lu(uu), su)));
+                 let SG = bG.find((GG => !ZG(GG) && null !== (0, LG.f)(kG(GG), wG)));
```

#### 1136. `bundles/bloxd.io/main.js` (Changed code · before: `L20701` → after: `L20701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20701) · [Before (L20701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20701)

```diff
-         }, , , (uu, Eu, ju) => {
+         }, , , , , , , (GG, bG, ZG) => {
```

#### 1137. `bundles/bloxd.io/main.js` (Changed code · before: `L20706` → after: `L20706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20706) · [Before (L20706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20706)

```diff
-             YY: () => tu,
+             rh: () => RG,
```

#### 1138. `bundles/bloxd.io/main.js` (Changed code · before: `L20716-L20723` → after: `L20716-L20723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20716-L20723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20716-L20723) · [Before (L20716-L20723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20716-L20723)

```diff
-           var su = ju(216),
-             Uu = ju(656),
-             Zu = ju(1135),
-             Xu = ju(719),
-             lu = ju(131),
-             qu = ju(1140),
-             fu = ju(701),
-             Cu = ju(1145);
+           var wG = ZG(209),
+             SG = ZG(612),
+             LG = ZG(1036),
+             yG = ZG(666),
+             kG = ZG(116),
+             UG = ZG(1045),
+             YG = ZG(647),
+             VG = ZG(1053);
```

#### 1139. `bundles/bloxd.io/main.js` (Changed code · before: `L20732` → after: `L20732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20732) · [Before (L20732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20732)

```diff
-             return !(0, su.h)()
+             return !(0, wG.m)()
```

#### 1140. `bundles/bloxd.io/main.js` (Changed code · before: `L20737` → after: `L20737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20737) · [Before (L20737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20737)

```diff
-             return Du() && ((0, su.d)() || uu() < cu)
+             return JG() && ((0, wG.h)() || GG() < fG)
```

#### 1141. `bundles/bloxd.io/main.js` (Changed code · before: `L20739-L20740` → after: `L20739-L20740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20739-L20740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20739-L20740) · [Before (L20739-L20740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20739-L20740)

```diff
-           const Mu = gu() || Du() && (0, Xu.p)(),
-             eu = null === Xu.s ? 10 : 50,
+           const zG = rG() || JG() && (0, yG.k)(),
+             EG = null === yG.o ? 10 : 50,
```

#### 1142. `bundles/bloxd.io/main.js` (Changed code · before: `L20755` → after: `L20755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20755) · [Before (L20755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20755)

```diff
-             const ju = null !== (Eu = uu.toLowerCase().split("/")[1]) && void 0 !== Eu ? Eu : "";
+             const ZG = null !== (bG = GG.toLowerCase().split("/")[1]) && void 0 !== bG ? bG : "";
```

#### 1143. `bundles/bloxd.io/main.js` (Changed code · before: `L20773` → after: `L20773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20773) · [Before (L20773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20773)

```diff
-                   filename: `app:///wasm/${su[1]}`,
+                   filename: `app:///wasm/${wG[1]}`,
```

#### 1144. `bundles/bloxd.io/main.js` (Changed code · before: `L20779` → after: `L20779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20779) · [Before (L20779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20779)

```diff
-                   filename: `app:///${uu.filename.slice(Eu.length).split(/[?#]/)[0]}`
+                   filename: `app:///${GG.filename.slice(bG.length).split(/[?#]/)[0]}`
```

#### 1145. `bundles/bloxd.io/main.js` (Changed code · before: `L20804` → after: `L20804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20804) · [Before (L20804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20804)

```diff
-                 const uu = (null !== (Eu = null === Uu || void 0 === Uu ? void 0 : Uu.frames) && void 0 !== Eu ? Eu : []).find((uu => Ou.test(uu.filename)));
+                 const GG = (null !== (bG = null === SG || void 0 === SG ? void 0 : SG.frames) && void 0 !== bG ? bG : []).find((GG => KG.test(GG.filename)));
```

#### 1146. `bundles/bloxd.io/main.js` (Changed code · before: `L20828` → after: `L20828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20828) · [Before (L20828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20828)

```diff
-               su && (ju.longest_script_source_url = (0, Cu.r)(su));
+               wG && (ZG.longest_script_source_url = (0, VG.p)(wG));
```

#### 1147. `bundles/bloxd.io/main.js` (Changed code · before: `L20830` → after: `L20830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20830) · [Before (L20830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20830)

```diff
-               Xu && (ju.longest_script_source_function_name = (0, Cu.h)(Xu));
+               yG && (ZG.longest_script_source_function_name = (0, VG.j)(yG));
```

#### 1148. `bundles/bloxd.io/main.js` (Changed code · before: `L20875-L20876` → after: `L20875-L20876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20875-L20876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20875-L20876) · [Before (L20875-L20876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20875-L20876)

```diff
-             (au ??= ju.e(31).then((() => ju(6899))).then((uu => uu.initializeFaro({
-               url: (0, lu.isDiscordClient)() ? `https://${Zu.e.discordDomain}/jotunn/r` : bu,
+             (WG ??= ZG.e(31).then((() => ZG(6703))).then((GG => GG.initializeFaro({
+               url: (0, kG.isDiscordClient)() ? `https://${LG.c.discordDomain}/jotunn/r` : pG,
```

#### 1149. `bundles/bloxd.io/main.js` (Changed code · before: `L20879-L20881` → after: `L20879-L20881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20879-L20881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20879-L20881) · [Before (L20879-L20881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20879-L20881)

```diff
-                 version: String(Uu.b),
-                 release: String(Uu.b),
-                 environment: (0, su.d)() ? "preprod" : "prod"
+                 version: String(SG.e),
+                 release: String(SG.e),
+                 environment: (0, wG.h)() ? "preprod" : "prod"
```

#### 1150. `bundles/bloxd.io/main.js` (Changed code · before: `L20899` → after: `L20899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20899) · [Before (L20899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20899)

```diff
-                   Zu = null !== (Eu = (0, fu.peekVisitSessionId)()) && void 0 !== Eu ? Eu : null === Uu || void 0 === Uu ? void 0 : Uu.id;
+                   LG = null !== (bG = (0, YG.peekVisitSessionId)()) && void 0 !== bG ? bG : null === SG || void 0 === SG ? void 0 : SG.id;
```

#### 1151. `bundles/bloxd.io/main.js` (Changed code · before: `L20959` → after: `L20959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20959) · [Before (L20959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20959)

```diff
-                   return uu instanceof Error ? uu : new Error("string" === typeof uu ? uu : String(uu))
+                   return GG instanceof Error ? GG : new Error("string" === typeof GG ? GG : String(GG))
```

#### 1152. `bundles/bloxd.io/main.js` (Changed code · before: `L20961-L20963` → after: `L20961-L20963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20961-L20963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20961-L20963) · [Before (L20961-L20963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20961-L20963)

```diff
-                 su = `${ju.name}: ${ju.message}`;
-               if ((0, qu.e)(su)) return;
-               const Uu = `${su}|${JSON.stringify(Eu)}`,
+                 wG = `${ZG.name}: ${ZG.message}`;
+               if ((0, UG.f)(wG)) return;
+               const SG = `${wG}|${JSON.stringify(bG)}`,
```

#### 1153. `bundles/bloxd.io/main.js` (Changed code · before: `L20975` → after: `L20975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20975) · [Before (L20975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20975)

```diff
-         }, , , , , , , (uu, Eu, ju) => {
+         }, , , , (GG, bG, ZG) => {
```

#### 1154. `bundles/bloxd.io/main.js` (Changed code · before: `L20977` → after: `L20977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20977) · [Before (L20977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20977)

```diff
-             e: () => fu
+             c: () => YG
```

#### 1155. `bundles/bloxd.io/main.js` (Changed code · before: `L20979-L20982` → after: `L20979-L20982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20979-L20982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20979-L20982) · [Before (L20979-L20982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20979-L20982)

```diff
-           var su = ju(337),
-             Uu = ju(202),
-             Zu = ju(204),
-             Xu = ju(216);
+           var wG = ZG(333),
+             SG = ZG(188),
+             LG = ZG(191),
+             yG = ZG(209);
```

#### 1156. `bundles/bloxd.io/main.js` (Changed code · before: `L20984` → after: `L20984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20984) · [Before (L20984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20984)

```diff
-           var qu = ju(131);
+           var UG = ZG(116);
```

#### 1157. `bundles/bloxd.io/main.js` (Changed code · before: `L20987` → after: `L20987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20987) · [Before (L20987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20987)

```diff
-               this.AY = uu, this.clientEnvironment = void 0, this.discordClientID = void 0, this.discordEmojiId = void 0, this.discordDomain = void 0, this.urls = void 0, this.discordRoutePrefix = ".proxy", this.clientEnvironment = this.getClientEnvironment(), this.discordClientI … [truncated]
+               this.Gd = GG, this.clientEnvironment = void 0, this.discordClientID = void 0, this.discordEmojiId = void 0, this.discordDomain = void 0, this.urls = void 0, this.discordRoutePrefix = ".proxy", this.clientEnvironment = this.getClientEnvironment(), this.discordClientI … [truncated]
```

#### 1158. `bundles/bloxd.io/main.js` (Changed code · before: `L20996` → after: `L20996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L20996) · [Before (L20996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L20996)

```diff
-               return lu ? su.d.LOCAL : this.AY.isPreprod ? su.d.PREPROD : su.d.PRODUCTION
+               return kG ? wG.e.LOCAL : this.Gd.isPreprod ? wG.e.PREPROD : wG.e.PRODUCTION
```

#### 1159. `bundles/bloxd.io/main.js` (Changed code · before: `L21000` → after: `L21000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21000) · [Before (L21000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21000)

```diff
-               return null !== (uu = this.AY.client) && void 0 !== uu && uu.isDiscord ? `https://${this.discordDomain}/index` : Xu.c ? "https://bloxd.io" : (0, Xu.h)() ? `http://${Zu.d.localDomain}:${Xu.g.indexServerPort}` : this.AY.urls.productionIndexUrl()
+               return null !== (GG = this.Gd.client) && void 0 !== GG && GG.isDiscord ? `https://${this.discordDomain}/index` : yG.d ? "https://bloxd.io" : (0, yG.m)() ? `http://${LG.b.localDomain}:${yG.j.indexServerPort}` : this.Gd.urls.productionIndexUrl()
```

#### 1160. `bundles/bloxd.io/main.js` (Changed code · before: `L21004` → after: `L21004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21004) · [Before (L21004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21004)

```diff
-               return null !== (Eu = this.AY.client) && void 0 !== Eu && Eu.isDiscord ? `https://${this.discordDomain}/s3` : lu && Zu.d.useLocalDatabase ? `${uu}/local-s3/bloxdhop` : "https://cdn.bloxd.io"
+               return null !== (bG = this.Gd.client) && void 0 !== bG && bG.isDiscord ? `https://${this.discordDomain}/s3` : kG && LG.b.useLocalDatabase ? `${GG}/local-s3/bloxdhop` : "https://cdn.bloxd.io"
```

#### 1161. `bundles/bloxd.io/main.js` (Changed code · before: `L21020-L21021` → after: `L21020-L21021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21020-L21021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21020-L21021) · [Before (L21020-L21021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21020-L21021)

```diff
-                   console.warn(`The ${uu} environment variable is improperly formatted in production mode. Any Discord integrations will break as a consequence.`)
-                 } else console.warn(`The ${uu} environment variable is missing in production mode. Any Discord integrations will break as a consequence.`);
+                   console.warn(`The ${GG} environment variable is improperly formatted in production mode. Any Discord integrations will break as a consequence.`)
+                 } else console.warn(`The ${GG} environment variable is missing in production mode. Any Discord integrations will break as a consequence.`);
```

#### 1162. `bundles/bloxd.io/main.js` (Changed code · before: `L21024` → after: `L21024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21024) · [Before (L21024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21024)

```diff
-               return this.AY.isPreprod ? Uu.e.discordPreprodId : Uu.e.discordProductionId
+               return this.Gd.isPreprod ? SG.d.discordPreprodId : SG.d.discordProductionId
```

#### 1163. `bundles/bloxd.io/main.js` (Changed code · before: `L21030` → after: `L21030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21030) · [Before (L21030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21030)

```diff
-             isPreprod: (0, Xu.d)(),
+             isPreprod: (0, yG.h)(),
```

#### 1164. `bundles/bloxd.io/main.js` (Changed code · before: `L21038` → after: `L21038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21038) · [Before (L21038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21038)

```diff
-         }, , , , , (uu, Eu, ju) => {
+         }, , , , , , , , , (GG, bG, ZG) => {
```

#### 1165. `bundles/bloxd.io/main.js` (Changed code · before: `L21041-L21042` → after: `L21041-L21042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21041-L21042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21041-L21042) · [Before (L21041-L21042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21041-L21042)

```diff
-             e: () => Xu,
-             i: () => Zu
+             f: () => yG,
+             j: () => LG
```

#### 1166. `bundles/bloxd.io/main.js` (Changed code · before: `L21054` → after: `L21054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21054) · [Before (L21054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21054)

```diff
-         }, , , , , (uu, Eu, ju) => {
+         }, , , , , , , , (GG, bG, ZG) => {
```

#### 1167. `bundles/bloxd.io/main.js` (Changed code · before: `L21056-L21057` → after: `L21056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21056) · [Before (L21056-L21057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21056-L21057)

```diff
-             c: () => su,
-             d: () => fu,
+             e: () => wG,
```

#### 1168. `bundles/bloxd.io/main.js` (Changed code · before: `L21060-L21061` → after: `L21060-L21061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21060-L21061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21060-L21061) · [Before (L21060-L21061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21060-L21061)

```diff
-             o: () => Zu,
-             r: () => Xu
+             m: () => LG,
+             p: () => yG
```

#### 1169. `bundles/bloxd.io/main.js` (Changed code · before: `L21080` → after: `L21080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21080) · [Before (L21080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21080)

```diff
-             return "data:" === Eu.protocol ? "data:" : "blob:" === Eu.protocol ? `blob:${Eu.origin}` : `${Eu.protocol}//${Eu.host}${Eu.pathname}`.slice(0, Uu)
+             return "data:" === bG.protocol ? "data:" : "blob:" === bG.protocol ? `blob:${bG.origin}` : `${bG.protocol}//${bG.host}${bG.pathname}`.slice(0, SG)
```

#### 1170. `bundles/bloxd.io/main.js` (Changed code · before: `L21084` → after: `L21084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21084) · [Before (L21084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21084)

```diff
-             return "classic-script" === Eu || "module-script" === Eu ? Xu(uu) : uu.replace(/(\[src=)(.*)(\][^\]]*)$/, ((uu, Eu, ju, su) => `${Eu}${function(uu){let Eu;try{Eu=new URL(uu)}catch{return""}return""===Eu.host?"":`
+             return "classic-script" === bG || "module-script" === bG ? yG(GG) : GG.replace(/(\[src=)(.*)(\][^\]]*)$/, ((GG, bG, ZG, wG) => `${bG}${function(GG){let bG;try{bG=new URL(GG)}catch{return""}return""===bG.host?"":`
```

#### 1171. `bundles/bloxd.io/main.js` (Changed code · before: `L21087` → after: `L21087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R21087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L21087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/main.js#L21087) · [Before (L21087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/main.js#L21087)

```diff
-                   } //${Eu.host}`}(ju)}${su}`)).slice(0,Uu)}function qu(uu){return uu.slice(0,Uu)}class fu{constructor(uu,Eu){this.client=uu,this.send=Eu,this.worst=null,this.longFrameCount=0,this.sent=!0,this.windowWorst=null,this.windowLongFrameCount=0}onEntry(uu){this.windowLo … [truncated]
+                   } //${bG.host}`}(ZG)}${wG}`)).slice(0,SG)}function UG(GG){return GG.slice(0,SG)}class YG{constructor(GG,bG){this.client=GG,this.send=bG,this.worst=null,this.longFrameCount=0,this.sent=!0,this.windowWorst=null,this.windowLongFrameCount=0}onEntry(GG){this.windowLo … [truncated]
```
