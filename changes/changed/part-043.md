# Changed — Bundle Modifications Report (Part 043 / 141)

- **Updated at**: `2026-11-24T14:21 JST`
- **Part**: `43 / 141` (**441** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 042](part-042.md) · [Part 044 →](part-044.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/234.js` (31kiid.1299b0d6 → mpd96o.85ad4551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/234.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7)

#### 25. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L198-L214` → after: `L198-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L198-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/234.js#L198-L214) · [Before (L198-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/234.js#L198-L214)

```diff
-       return Tk(kk) ? `vertexInputs.${Fk}` : Fk
-     }
- 
-     function Ek(kk, Fk) {
-       return Tk(kk) ? `vertexOutputs.${Fk}` : Fk
-     }
- 
-     function Ok(kk, Fk) {
-       return Tk(kk) ? `fragmentInputs.${Fk}` : Fk
-     }
- 
-     function nk(kk, Fk) {
-       return Tk(kk) ? `uniforms.${Fk}` : Fk
-     }
- 
-     function Gk(kk, Fk, Ik) {
- ... (1 more removed lines; see GitHub link above)
+       return Am(mm) ? `vertexInputs.${Tm}` : Tm
+     }
+ 
+     function km(mm, Tm) {
+       return Am(mm) ? `vertexOutputs.${Tm}` : Tm
+     }
+ 
+     function bm(mm, Tm) {
+       return Am(mm) ? `fragmentInputs.${Tm}` : Tm
+     }
+ 
+     function Sm(mm, Tm) {
+       return Am(mm) ? `uniforms.${Tm}` : Tm
+     }
+ 
+     function em(mm, Tm, fm) {
+ ... (1 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L234-L262` → after: `L234-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L234-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/234.js#L234-L262) · [Before (L234-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/234.js#L234-L262)

```diff
-       return Tk(kk) ? `dpdx(${Fk})` : `dFdx(${Fk})`
-     }
- 
-     function Ck(kk, Fk) {
-       return Tk(kk) ? `dpdy(${Fk})` : `dFdy(${Fk})`
-     }
- 
-     function Nk(kk, Fk) {
-       return Tk(kk) ? `inverseSqrt(${Fk})` : `inversesqrt(${Fk})`
-     }
- 
-     function ck(kk, Fk, Ik, Xk) {
-       return Tk(kk) ? `select(${Xk}, ${Ik}, ${Fk})` : `((${Fk}) ? (${Ik}) : (${Xk}))`
-     }
- 
-     function Wk(kk, Fk, Ik) {
- ... (13 more removed lines; see GitHub link above)
+       return Am(mm) ? `dpdx(${Tm})` : `dFdx(${Tm})`
+     }
+ 
+     function ym(mm, Tm) {
+       return Am(mm) ? `dpdy(${Tm})` : `dFdy(${Tm})`
+     }
+ 
+     function Cm(mm, Tm) {
+       return Am(mm) ? `inverseSqrt(${Tm})` : `inversesqrt(${Tm})`
+     }
+ 
+     function rm(mm, Tm, fm, hm) {
+       return Am(mm) ? `select(${hm}, ${fm}, ${Tm})` : `((${Tm}) ? (${fm}) : (${hm}))`
+     }
+ 
+     function sm(mm, Tm, fm) {
+ ... (13 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/234.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/234.js#L265)

```diff
-   39837: (kk, Fk, Ik) => {
+   39960: (mm, Tm, fm) => {
```

#### 28. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L267` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/234.js#L267) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/234.js#L267)

```diff
-       b: () => Xk
+       e: () => hm
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/235.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/235.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f)

#### 1. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/235.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/235.js#L4)

```diff
-   37327: (kk, Fk, Ik) => {
+   37330: (mm, Tm, fm) => {
```

#### 2. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/235.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/235.js#L6-L7)

```diff
-       Color3: () => Xk.e,
-       b: () => Xk.h
+       Color3: () => hm.b,
+       e: () => hm.c
```

#### 3. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/235.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/235.js#L9-L10)

```diff
-     var Xk = Ik(37331);
-     (0, Xk.i)()
+     var hm = fm(37336);
+     (0, hm.d)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/236.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/236.js` (64 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0)

#### 1. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L4)

```diff
-   41079: (kk, Fk, Ik) => {
+   41124: (mm, Tm, fm) => {
```

#### 2. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L8-L12` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L8-L12) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L8-L12)

```diff
-     var Xk = Ik(37592),
-       Tk = Ik(37578),
-       ik = Ik(2700),
-       yk = Ik(1665),
-       lk = Ik(40986);
+     var hm = fm(37630),
+       Am = fm(37610),
+       am = fm(2760),
+       xm = fm(1713),
+       wm = fm(41049);
```

#### 3. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L16)

```diff
-         Xw: Fk
+         qY: Tm
```

#### 4. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L24)

```diff
-         drawing: () => !kk.vx,
+         drawing: () => !mm.yI,
```

#### 5. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L36)

```diff
-     var qk = Ik(34044);
+     var im = fm(34163);
```

#### 6. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L48-L51` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L48-L51) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L48-L51)

```diff
-           const ek = (0, ik.e)();
-           if (ek.Xw.Tw) return "screenshot" !== kk || null !== tk ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Fk()) : void(0, lk.f)(ak(ek), qk, Lk).finally(Fk);
-           const wk = ek.Xw.engine,
-             Hk = ek.Xw.mG(),
+           const Om = (0, am.d)();
+           if (Om.qY.jY) return "screenshot" !== mm || null !== pm ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Tm()) : void(0, wm.f)(Dm(Om), im, Rm).finally(Tm);
+           const Ym = Om.qY.engine,
+             qm = Om.qY.wG(),
```

#### 7. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L54)

```diff
-           Promise.all([Promise.all([Ik.e(254), Ik.e(255), Ik.e(233)]).then((() => Ik(61268))), Promise.all([Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(255), Ik.e(252), Ik.e(256), Ik.e(259), Ik.e(311), Ik.e(237)]).then((() => Ik(61276))), Promise.all([Ik.e(232), Ik.e(231), Ik.e(254), I … [truncated]
+           Promise.all([Promise.all([fm.e(254), fm.e(255), fm.e(233)]).then((() => fm(61310))), Promise.all([fm.e(232), fm.e(231), fm.e(254), fm.e(255), fm.e(252), fm.e(256), fm.e(259), fm.e(311), fm.e(237)]).then((() => fm(61315))), Promise.all([fm.e(232), fm.e(231), fm.e(254), f … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L62)

```diff
-               Ge: Lk
+               WO: Rm
```

#### 9. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L71)

```diff
-               Qk && (Qk = !1, (0, Xk.f)(Hk.meshes, !1)), null === (kk = sk) || void 0 === kk || kk(), sk = null, Kk.forEach((kk => {
+               Qm && (Qm = !1, (0, hm.h)(qm.meshes, !1)), null === (mm = nm) || void 0 === mm || mm(), nm = null, Km.forEach((mm => {
```

#### 10. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L81)

```diff
-                   Tk = Ik.vR().boundingBox.center,
+                   Am = fm.DH().boundingBox.center,
```

#### 11. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L109)

```diff
-                 const ik = Xk.vR().boundingBox.center,
+                 const am = hm.DH().boundingBox.center,
```

#### 12. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L115)

```diff
-               Fk += .1 * Xk, Ik = Math.max(0, Ik - .1 * Xk), console.log(`Depth range: min=${Ik.toFixed(2)}, max=${Fk.toFixed(2)}, range=${Xk.toFixed(2)}`), Xk < 1 && (Fk = Ik + 10);
+               Tm += .1 * hm, fm = Math.max(0, fm - .1 * hm), console.log(`Depth range: min=${fm.toFixed(2)}, max=${Tm.toFixed(2)}, range=${hm.toFixed(2)}`), hm < 1 && (Tm = fm + 10);
```

#### 13. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L125-L127` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L125-L127) · [Before (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L125-L127)

```diff
-             if ((0, Xk.f)(Hk.meshes, !0), Qk = !0, "glb" === kk && (sk = (0, Tk.e)(Hk.meshes)), "screenshot" === kk) {
-               let kk = `bloxd-screenshot-${Jk}x${xk}-${Date.now()}.png`;
-               Zk ? kk = `bloxd-screenshot-normals-${Jk}x${xk}-${Date.now()}.png` : jk && (kk = `bloxd-screenshot-depth-${Jk}x${xk}-${Date.now()}.png`), lk(wk, Hk.activeCamera, {
+             if ((0, hm.h)(qm.meshes, !0), Qm = !0, "glb" === mm && (nm = (0, Am.c)(qm.meshes)), "screenshot" === mm) {
+               let mm = `bloxd-screenshot-${jm}x${Vm}-${Date.now()}.png`;
+               Em ? mm = `bloxd-screenshot-normals-${jm}x${Vm}-${Date.now()}.png` : om && (mm = `bloxd-screenshot-depth-${jm}x${Vm}-${Date.now()}.png`), wm(Ym, qm.activeCamera, {
```

#### 14. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L142)

```diff
-               let kk = "Yw";
+               let mm = "Aq";
```

#### 15. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L147)

```diff
-                   } = await Promise.all([Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(255), Ik.e(252), Ik.e(262), Ik.e(261), Ik.e(238)]).then((() => Ik(40269))), {
+                   } = await Promise.all([fm.e(232), fm.e(231), fm.e(254), fm.e(255), fm.e(252), fm.e(262), fm.e(261), fm.e(238)]).then((() => fm(40357))), {
```

#### 16. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L149)

```diff
-                   } = await Promise.all([Ik.e(232), Ik.e(235)]).then((() => Ik(37327))), Xk = [], Tk = [];
+                   } = await Promise.all([fm.e(232), fm.e(235)]).then((() => fm(37330))), hm = [], Am = [];
```

#### 17. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L152)

```diff
-                         Ik = kk.vR().boundingBox.center,
+                         fm = mm.DH().boundingBox.center,
```

#### 18. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L166)

```diff
-                       const yk = new kk(`vertexColorMat_${Xk}`, Hk);
+                       const xm = new mm(`vertexColorMat_${hm}`, qm);
```

#### 19. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L176)

```diff
-                       const lk = new kk(`whiteMat_${Xk}`, Hk);
+                       const wm = new mm(`whiteMat_${hm}`, qm);
```

#### 20. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L185)

```diff
-                       const Fk = kk.vR().boundingBox.center,
+                       const Tm = mm.DH().boundingBox.center,
```

#### 21. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L193)

```diff
-                         ak = Xk.vR().boundingBox.center,
+                         Dm = hm.DH().boundingBox.center,
```

#### 22. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L198)

```diff
-                           lk = new kk(`depthMat_${yk}`, Hk);
+                           wm = new mm(`depthMat_${xm}`, qm);
```

#### 23. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L203)

```diff
-                 })().then((() => Promise.all([Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(255), Ik.e(252), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(264), Ik.e(274), Ik.e(311), Ik.e(244), Ik.e(263), Ik.e(230)]).then((() => Ik(61293))))).then((Fk => Fk.GLTF2Export.GLBA … [truncated]
+                 })().then((() => Promise.all([fm.e(232), fm.e(231), fm.e(254), fm.e(255), fm.e(252), fm.e(262), fm.e(256), fm.e(261), fm.e(259), fm.e(251), fm.e(264), fm.e(274), fm.e(311), fm.e(244), fm.e(263), fm.e(230)]).then((() => fm(61344))))).then((Tm => Tm.GLTF2Export.GLBA … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L208)

```diff
-               }), 100) : Promise.all([Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(255), Ik.e(252), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(264), Ik.e(274), Ik.e(311), Ik.e(244), Ik.e(263), Ik.e(230)]).then((() => Ik(61293))).then((Ik => {
+               }), 100) : Promise.all([fm.e(232), fm.e(231), fm.e(254), fm.e(255), fm.e(252), fm.e(262), fm.e(256), fm.e(261), fm.e(259), fm.e(251), fm.e(264), fm.e(274), fm.e(311), fm.e(244), fm.e(263), fm.e(230)]).then((() => fm(61344))).then((fm => {
```

#### 25. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L236-L237` → after: `L236-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L236-L237) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L236-L237)

```diff
-         } = await Promise.all([Ik.e(232), Ik.e(235)]).then((() => Ik(37327)));
-         (0, ik.e)().Xw.mG().ambientColor = Fk.FromArray([kk, kk, kk])
+         } = await Promise.all([fm.e(232), fm.e(235)]).then((() => fm(37330)));
+         (0, am.d)().qY.wG().ambientColor = Tm.FromArray([mm, mm, mm])
```

#### 26. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L241-L242` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L241-L242) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L241-L242)

```diff
-           return (0, lk.c)(ak(kk), Fk, Ik, Xk)
-         }((0, ik.e)(), kk, Fk, Ik)
+           return (0, wm.d)(Dm(mm), Tm, fm, hm)
+         }((0, am.d)(), mm, Tm, fm)
```

#### 27. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L246)

```diff
-   40986: (kk, Fk, Ik) => {
+   41049: (mm, Tm, fm) => {
```

#### 28. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L248)

```diff
-       c: () => lk,
+       d: () => wm,
```

#### 29. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L251)

```diff
-     var Xk = Ik(1682);
+     var hm = fm(1730);
```

#### 30. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L310)

```diff
-         (0, Xk.c)(Tk.blob, `bloxd-screenshot-${Tk.width}x${Tk.height}-${Date.now()}.png`)
+         (0, hm.c)(Am.blob, `bloxd-screenshot-${Am.width}x${Am.height}-${Date.now()}.png`)
```

#### 31. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L316)

```diff
-   37592: (kk, Fk, Ik) => {
+   37630: (mm, Tm, fm) => {
```

#### 32. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L318-L319` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L318-L319) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L318-L319)

```diff
-       c: () => qk,
-       f: () => lk,
+       e: () => im,
+       h: () => wm,
```

#### 33. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L322-L323` → after: `L322-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L322-L323) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L322-L323)

```diff
-     var Xk = Ik(37586),
-       Tk = Ik(37600);
+     var hm = fm(37623),
+       Am = fm(37637);
```

#### 34. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L328-L329` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L328-L329) · [Before (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L328-L329)

```diff
-       Ik._noaFaceGroups = null !== Fk && void 0 !== Fk ? Fk : null, Ik._noaFaceEpoch = -1, Ik._noaFaceMask = -1, Ik._noaFaceCount = -1, Ik._noaFaceMaterial = null;
-       const Xk = kk.lK;
+       fm._noaFaceGroups = null !== Tm && void 0 !== Tm ? Tm : null, fm._noaFaceEpoch = -1, fm._noaFaceMask = -1, fm._noaFaceCount = -1, fm._noaFaceMaterial = null;
+       const hm = mm.jK;
```

#### 35. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L346)

```diff
-       for (let yk = 0; yk < Xk.g; yk++) {
+       for (let xm = 0; xm < hm.f; xm++) {
```

#### 36. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L355)

```diff
-         this.se = kk, this.engine = Fk, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+         this.MO = mm, this.engine = Tm, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
```

#### 37. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L365)

```diff
-           Lk = yk ? (0, Tk.d)(Ik, qk.getRenderWidth(), qk.getRenderHeight()) : 0;
+           Rm = xm ? (0, Am.b)(fm, im.getRenderWidth(), im.getRenderHeight()) : 0;
```

#### 38. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L370)

```diff
-         } = this, jk = this.se / 2, ek = jk * Math.sqrt(3), wk = kk.data, Hk = kk.length;
+         } = this, om = this.MO / 2, Om = om * Math.sqrt(3), Ym = mm.data, qm = mm.length;
```

#### 39. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L377)

```diff
-             const Ik = kk.lK,
+             const fm = mm.jK,
```

#### 40. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L380` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L380) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L380)

```diff
-             if (yk && ik && (0, Xk.t)(kk.material)) {
+             if (xm && am && (0, hm.s)(mm.material)) {
```

#### 41. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L389)

```diff
-               qk = (0, Tk.m)(Fk, Xk, ik, yk, (0, Tk.h)(wk, Lk))
+               im = (0, Am.k)(Tm, hm, am, xm, (0, Am.d)(Ym, Rm))
```

#### 42. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L394)

```diff
-                 Tk = Fk[Xk.g]; - 1 !== qk && (Tk = ak(Fk, qk, Zk), Ik = Zk[0]), kk._noaFaceCount = Tk, ik.indexStart = 6 * Ik, ik.indexCount = 6 * Tk, ik.setBoundingInfo(kk.vR())
+                 Am = Tm[hm.f]; - 1 !== im && (Am = Dm(Tm, im, Em), fm = Em[0]), mm._noaFaceCount = Am, am.indexStart = 6 * fm, am.indexCount = 6 * Am, am.setBoundingInfo(mm.DH())
```

#### 43. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L403` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L403) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L403)

```diff
-   37578: (kk, Fk, Ik) => {
+   37610: (mm, Tm, fm) => {
```

#### 44. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L405)

```diff
-       e: () => ak,
+       c: () => Dm,
```

#### 45. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L418)

```diff
-       (null !== (Fk = null === (Ik = kk.getBuffer()) || void 0 === Ik ? void 0 : Ik.St) && void 0 !== Fk ? Fk : 0) > 0 && (Xk.add(kk), 0 === Tk ? yk(kk, null) : ik.add(kk))
+       (null !== (Tm = null === (fm = mm.getBuffer()) || void 0 === fm ? void 0 : fm.yp) && void 0 !== Tm ? Tm : 0) > 0 && (hm.add(mm), 0 === Am ? xm(mm, null) : am.add(mm))
```

#### 46. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L427)

```diff
-             for (const Tk of Object.values(null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.getVertexBuffers()) && void 0 !== Ik ? Ik : {})) {
+             for (const Am of Object.values(null !== (fm = null === mm || void 0 === mm ? void 0 : mm.getVertexBuffers()) && void 0 !== fm ? fm : {})) {
```

#### 47. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L446)

```diff
-       if (!Fk || !(Fk.St > 0)) return;
+       if (!Tm || !(Tm.yp > 0)) return;
```

#### 48. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L448)

```diff
-         Xk = new Uint8Array(Fk.St);
+         hm = new Uint8Array(Tm.yp);
```

#### 49. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L452)

```diff
-   37586: (kk, Fk, Ik) => {
+   37623: (mm, Tm, fm) => {
```

#### 50. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L455-L456` → after: `L455-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L455-L456) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L455-L456)

```diff
-       g: () => ik,
-       i: () => ak,
+       f: () => am,
+       h: () => Dm,
```

#### 51. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L458-L460` → after: `L458-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L458-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L458-L460) · [Before (L458-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L458-L460)

```diff
-       o: () => lk,
-       p: () => Tk,
-       t: () => qk
+       m: () => wm,
+       q: () => Am,
+       s: () => im
```

#### 52. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L479)

```diff
-   37600: (kk, Fk, Ik) => {
+   37637: (mm, Tm, fm) => {
```

#### 53. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L482-L485` → after: `L483-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L483-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L483-L485) · [Before (L482-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L482-L485)

```diff
-       h: () => ak,
-       l: () => Lk,
-       m: () => qk,
-       n: () => ek
+       g: () => Rm,
+       k: () => im,
+       l: () => Om
```

#### 54. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L487)

```diff
-     var Xk = Ik(37586);
+     var hm = fm(37623);
```

#### 55. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L502` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L502) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L502)

```diff
-       const yk = Xk.o;
+       const xm = hm.m;
```

#### 56. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L511` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L511) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L511)

```diff
-         for (let Fk = 0; Fk < Xk.p.length; Fk++) {
+         for (let Tm = 0; Tm < hm.q.length; Tm++) {
```

#### 57. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L513-L514` → after: `L513-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L513-L514) · [Before (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L513-L514)

```diff
-           for (let Tk = Fk + 1; Tk <= Xk.p.length; Tk++) {
-             const ik = 1 << Xk.p[Tk - 1];
+           for (let Am = Tm + 1; Am <= hm.q.length; Am++) {
+             const am = 1 << hm.q[Am - 1];
```

#### 58. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L519` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L519) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L519)

```diff
-               YX: Ik
+               mA: fm
```

#### 59. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L528)

```diff
-       const Ik = Xk.i[Fk];
+       const fm = hm.h[Tm];
```

#### 60. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L536` → after: `L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L536) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L536)

```diff
-       if (Fk === Tk) return Ik[0] = 0, Ik[1] = kk[Xk.g], 1;
+       if (Tm === Am) return fm[0] = 0, fm[1] = mm[hm.f], 1;
```

#### 61. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L546` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L546) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L546)

```diff
-                 YX: kk,
+                 mA: mm,
```

#### 62. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L551-L552` → after: `L551-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L551-L552) · [Before (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L551-L552)

```diff
-             if ((ik.YX & kk) === kk && Xk(ik.YX, [ik.start, ik.end]), 0 !== (ik.YX & kk))
-               for (const Fk of tk) Fk.start < ik.end || 0 !== (ik.YX & Fk.YX) || 0 === (Fk.YX & kk) || ((ik.YX | Fk.YX) & kk) !== kk || Xk(ik.YX | Fk.YX, [ik.start, ik.end, Fk.start, Fk.end]);
+             if ((am.mA & mm) === mm && hm(am.mA, [am.start, am.end]), 0 !== (am.mA & mm))
+               for (const Tm of pm) Tm.start < am.end || 0 !== (am.mA & Tm.mA) || 0 === (Tm.mA & mm) || ((am.mA | Tm.mA) & mm) !== mm || hm(am.mA | Tm.mA, [am.start, am.end, Tm.start, Tm.end]);
```

#### 63. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L554)

```diff
-           return Fk = Tk.filter((kk => !Tk.some((Fk => Fk !== kk && (Fk.YX & kk.YX) === Fk.YX && Fk.windows.length <= kk.windows.length)))), Zk[kk] = Fk, Fk
+           return Tm = Am.filter((mm => !Am.some((Tm => Tm !== mm && (Tm.mA & mm.mA) === Tm.mA && Tm.windows.length <= mm.windows.length)))), Em[mm] = Tm, Tm
```

#### 64. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L557` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/236.js#L557) · [Before (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/236.js#L557)

```diff
-         const ak = qk.YX & ~Fk & Tk;
+         const Dm = im.mA & ~Tm & Am;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/237.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/237.js` (81 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3)

#### 1. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L4)

```diff
-   40259: (kk, Fk, Ik) => {
+   40347: (mm, Tm, fm) => {
```

#### 2. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L6-L7)

```diff
-       b: () => Lk,
-       e: () => Zk
+       e: () => Rm,
+       g: () => Em
```

#### 3. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L9-L15` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L9-L15) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L9-L15)

```diff
-     var Xk = Ik(40003),
-       Tk = Ik(40011),
-       ik = Ik(37153),
-       yk = Ik(37331),
-       lk = Ik(40265),
-       ak = Ik(40218),
-       qk = Ik(37201);
+     var hm = fm(40113),
+       Am = fm(40119),
+       am = fm(37185),
+       xm = fm(37336),
+       wm = fm(40355),
+       Dm = fm(40326),
+       im = fm(37224);
```

#### 4. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L18)

```diff
-         let Fk, Ik, ak = lk.b,
+         let Tm, fm, Dm = wm.e,
```

#### 5. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L25)

```diff
-             super(kk, Ik, Tk), this.groundColor = (0, Xk.n)(this, qk, new yk.e(0, 0, 0)), this.direction = ((0, Xk.n)(this, Lk), (0, Xk.n)(this, tk, void 0)), (0, Xk.n)(this, Zk), this.direction = Fk || ik.t.Up()
+             super(mm, fm, Am), this.groundColor = (0, hm.i)(this, im, new xm.b(0, 0, 0)), this.direction = ((0, hm.i)(this, Rm), (0, hm.i)(this, pm, void 0)), (0, hm.i)(this, Em), this.direction = Tm || am.p.Up()
```

#### 6. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L34)

```diff
-             return this.direction = ik.t.Normalize(kk.subtract(ik.t.Zero())), this.direction
+             return this.direction = am.p.Normalize(mm.subtract(am.p.Zero())), this.direction
```

#### 7. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L40)

```diff
-             const Ik = ik.t.Normalize(this.direction);
+             const fm = am.p.Normalize(this.direction);
```

#### 8. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L44)

```diff
-             const Ik = ik.t.Normalize(this.direction);
+             const fm = am.p.Normalize(this.direction);
```

#### 9. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L48)

```diff
-             return this._worldMatrix || (this._worldMatrix = ik.c.Identity()), this._worldMatrix
+             return this._worldMatrix || (this._worldMatrix = am.e.Identity()), this._worldMatrix
```

#### 10. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L51)

```diff
-             return lk.b.LIGHTTYPEID_HEMISPHERICLIGHT
+             return wm.e.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 11. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L58)

```diff
-           Fk = [(0, Tk.n)()], Ik = [(0, Tk.H)()], (0, Xk.j)(null, null, Fk, {
+           Tm = [(0, Am.k)()], fm = [(0, Am.F)()], (0, hm.g)(null, null, Tm, {
```

#### 12. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L71)

```diff
-           }, qk, Lk), (0, Xk.j)(null, null, Ik, {
+           }, im, Rm), (0, hm.g)(null, null, fm, {
```

#### 13. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L95)

```diff
-       tk || (tk = !0, ak.b.AddNodeConstructor("Light_Type_3", ((kk, Fk) => () => new Lk(kk, ik.t.Zero(), Fk))), (0, qk.f)("BABYLON.HemisphericLight", Lk))
+       pm || (pm = !0, Dm.c.AddNodeConstructor("Light_Type_3", ((mm, Tm) => () => new Rm(mm, am.p.Zero(), Tm))), (0, im.d)("BABYLON.HemisphericLight", Rm))
```

#### 14. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L98)

```diff
-   37780: (kk, Fk, Ik) => {
+   37813: (mm, Tm, fm) => {
```

#### 15. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L100)

```diff
-       b: () => Tk
+       c: () => Am
```

#### 16. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L102)

```diff
-     var Xk = Ik(37785);
+     var hm = fm(37821);
```

#### 17. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L106)

```diff
-         for (let Ik = 0; Ik < 6; Ik++) Fk.push(new Xk.e(0, 0, 0, 0));
+         for (let fm = 0; fm < 6; fm++) Tm.push(new hm.d(0, 0, 0, 0));
```

#### 18. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L143)

```diff
-   37785: (kk, Fk, Ik) => {
+   37821: (mm, Tm, fm) => {
```

#### 19. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L145)

```diff
-       e: () => Tk
+       d: () => Am
```

#### 20. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L147)

```diff
-     var Xk = Ik(37153);
+     var hm = fm(37185);
```

#### 21. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L150)

```diff
-         this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
+         this.normal = new hm.p(mm, Tm, fm), this.d = Am
```

#### 22. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L152)

```diff
-       iXk() {
+       ahm() {
```

#### 23. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L199)

```diff
-         return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
+         return om = 0 !== Em ? 1 / Em : 0, this.normal.x = im * om, this.normal.y = Rm * om, this.normal.z = pm * om, this.d = -(this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z), this
```

#### 24. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L202)

```diff
-         return Xk.t.Dot(this.normal, kk) <= Fk
+         return hm.p.Dot(this.normal, mm) <= Tm
```

#### 25. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L205)

```diff
-         return Xk.t.Dot(kk, this.normal) + this.d
+         return hm.p.Dot(mm, this.normal) + this.d
```

#### 26. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L219` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L219) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L219)

```diff
-         return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
+         return fm.normal.ZZ(Tm), fm.normal.normalize(), fm.d = -mm.dot(fm.normal), fm
```

#### 27. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L223)

```diff
-         return Xk.t.Dot(Ik, Fk) + Tk
+         return hm.p.Dot(fm, Tm) + Am
```

#### 28. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L226)

```diff
-     Tk._TmpMatrix = Xk.c.Identity()
+     Am._TmpMatrix = hm.e.Identity()
```

#### 29. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L228)

```diff
-   38099: (kk, Fk, Ik) => {
+   38151: (mm, Tm, fm) => {
```

#### 30. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L230)

```diff
-       c: () => Xk
+       b: () => hm
```

#### 31. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L247)

```diff
-   38666: (kk, Fk, Ik) => {
+   38764: (mm, Tm, fm) => {
```

#### 32. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L251)

```diff
-     var Xk = Ik(38674);
+     var hm = fm(38766);
```

#### 33. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L284)

```diff
-             Xk.e.Warn(ak.message)
+             hm.b.Warn(Dm.message)
```

#### 34. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L290)

```diff
-   37902: (kk, Fk, Ik) => {
+   37970: (mm, Tm, fm) => {
```

#### 35. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L294)

```diff
-         return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
+         return ("x" === mm ? Tm : 3 & Tm | 8).toString(16)
```

#### 36. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L298)

```diff
-       e: () => Xk
+       c: () => hm
```

#### 37. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L301)

```diff
-   38674: (kk, Fk, Ik) => {
+   38766: (mm, Tm, fm) => {
```

#### 38. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L303)

```diff
-       e: () => Xk
+       b: () => hm
```

#### 39. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L324)

```diff
-         const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
+         const Tm = mm => mm < 10 ? "0" + mm : "" + mm,
```

#### 40. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L339)

```diff
-         const ak = `<div style='color:${yk.color}'>${ik}</div><br>`;
+         const Dm = `<div style='color:${xm.color}'>${am}</div><br>`;
```

#### 41. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L372` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L372) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L372)

```diff
-   61276: (kk, Fk, Ik) => {
+   61315: (mm, Tm, fm) => {
```

#### 42. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L383-L390` → after: `L383-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L383-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L383-L390) · [Before (L383-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L383-L390)

```diff
-     var Xk = Ik(40489),
-       Tk = Ik(41815),
-       ik = Ik(41795),
-       yk = Ik(40021),
-       lk = Ik(41797),
-       ak = Ik(37178),
-       qk = Ik(37153);
-     class Lk extends lk.e {
+     var hm = fm(40585),
+       Am = fm(41834),
+       am = fm(41820),
+       xm = fm(40129),
+       wm = fm(41822),
+       Dm = fm(37201),
+       im = fm(37185);
+     class Rm extends wm.g {
```

#### 43. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L396)

```diff
-         kk ? (this._webGPUReady = !0, Fk.push(Promise.all([Ik.e(375).then((() => Ik(61491))), Ik.e(376).then((() => Ik(61498)))]))) : Fk.push(Promise.all([Ik.e(377).then((() => Ik(61503))), Ik.e(378).then((() => Ik(61507)))]))
+         mm ? (this._webGPUReady = !0, Tm.push(Promise.all([fm.e(375).then((() => fm(61582))), fm.e(376).then((() => fm(61591)))]))) : Tm.push(Promise.all([fm.e(377).then((() => fm(61597))), fm.e(378).then((() => fm(61606)))]))
```

#### 44. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L402` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L402) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L402)

```diff
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || ak.e.LastCreatedEngine,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Dm.c.LastCreatedEngine,
```

#### 45. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L412)

```diff
-         }), this.texelSize = new qk.p(0, 0)
+         }), this.texelSize = new im.l(0, 0)
```

#### 46. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L420)

```diff
-     class tk extends ik.e {
+     class pm extends am.b {
```

#### 47. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L432)

```diff
-           size: "number" === typeof Fk ? Fk : void 0,
+           size: "number" === typeof Tm ? Tm : void 0,
```

#### 48. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L434)

```diff
-           samplingMode: Tk || Xk.g.BILINEAR_SAMPLINGMODE,
+           samplingMode: Am || hm.f.BILINEAR_SAMPLINGMODE,
```

#### 49. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L448)

```diff
-         return yk.b.Parse((() => new tk(kk.name, kk.options, Fk, kk.renderTargetSamplingMode, Ik.Oe(), kk.reusable)), kk, Ik, Xk)
+         return xm.d.Parse((() => new pm(mm.name, mm.options, Tm, mm.renderTargetSamplingMode, fm.dO(), mm.reusable)), mm, fm, hm)
```

#### 50. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L451-L455` → after: `L451-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L451-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L451-L455) · [Before (L451-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L451-L455)

```diff
-     var Zk = Ik(38674),
-       jk = Ik(40097),
-       ek = Ik(41826),
-       wk = Ik(41809),
-       Hk = Ik(39878);
+     var Em = fm(38766),
+       om = fm(40203),
+       Om = fm(41846),
+       Ym = fm(41831),
+       qm = fm(40008);
```

#### 51. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L552)

```diff
-     var Qk = Ik(37187);
+     var Qm = fm(37203);
```

#### 52. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L585)

```diff
-         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Qk.e, this.onBeforeTaskExecute = new Qk.e, this.onAfterTaskExecute = new Qk.e, this.name = kk, this._frameGraph = Fk, this._reset()
+         this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Qm.c, this.onBeforeTaskExecute = new Qm.c, this.onAfterTaskExecute = new Qm.c, this.name = mm, this._frameGraph = Tm, this._reset()
```

#### 53. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L600)

```diff
-           if (Xk) throw new Error(`Pass "${lk.name}" is not valid. ${Xk}`);
+           if (hm) throw new Error(`Pass "${wm.name}" is not valid. ${hm}`);
```

#### 54. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L613)

```diff
-           if (kk) throw new Error(`Pass "${lk.name}" is not valid. ${kk}`);
+           if (mm) throw new Error(`Pass "${wm.name}" is not valid. ${mm}`);
```

#### 55. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L724)

```diff
-     var Sk = Ik(41822);
+     var zm = fm(41839);
```

#### 56. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L727)

```diff
-         super(kk, Fk, Ik || new Sk.g(kk, Fk.engine))
+         super(mm, Tm, fm || new zm.h(mm, Tm.engine))
```

#### 57. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L733-L737` → after: `L733-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L733-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L733-L737) · [Before (L733-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L733-L737)

```diff
-     var Ek = Ik(40090),
-       Ok = Ik(40169),
-       nk = Ik(40139),
-       Gk = Ik(40259),
-       pk = Ik(37331);
+     var km = fm(40199),
+       bm = fm(40283),
+       Sm = fm(40242),
+       em = fm(40347),
+       Nm = fm(37336);
```

#### 58. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L750)

```diff
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new Gk.b("shared gizmo light", new qk.t(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = pk.e.Gray()), this._sharedGizmoLight
+         return this._sharedGizmoLight || (this._sharedGizmoLight = new em.e("shared gizmo light", new im.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Nm.b.Gray()), this._sharedGizmoLight
```

#### 59. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L753)

```diff
-         return null == uk._DefaultUtilityLayer ? uk._CreateDefaultUtilityLayerFromScene(ak.e.LastCreatedScene) : uk._DefaultUtilityLayer
+         return null == Gm._DefaultUtilityLayer ? Gm._CreateDefaultUtilityLayerFromScene(Dm.c.LastCreatedScene) : Gm._DefaultUtilityLayer
```

#### 60. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L756` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L756) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L756)

```diff
-         return uk._DefaultUtilityLayer = new uk(kk), uk._DefaultUtilityLayer.originalScene.hG.addOnce((() => {
+         return Gm._DefaultUtilityLayer = new Gm(mm), Gm._DefaultUtilityLayer.originalScene.iG.addOnce((() => {
```

#### 61. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L761` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L761) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L761)

```diff
-         return null == uk._DefaultKeepDepthUtilityLayer ? uk._CreateDefaultKeepUtilityLayerFromScene(ak.e.LastCreatedScene) : uk._DefaultKeepDepthUtilityLayer
+         return null == Gm._DefaultKeepDepthUtilityLayer ? Gm._CreateDefaultKeepUtilityLayerFromScene(Dm.c.LastCreatedScene) : Gm._DefaultKeepDepthUtilityLayer
```

#### 62. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L764` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L764) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L764)

```diff
-         return uk._DefaultKeepDepthUtilityLayer = new uk(kk), uk._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, uk._DefaultKeepDepthUtilityLayer.originalScene.hG.addOnce((() => {
+         return Gm._DefaultKeepDepthUtilityLayer = new Gm(mm), Gm._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Gm._DefaultKeepDepthUtilityLayer.originalScene.iG.addOnce((() => {
```

#### 63. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L771)

```diff
-         this.originalScene = kk, this.handleEvents = Fk, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.process … [truncated]
+         this.originalScene = mm, this.handleEvents = Tm, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.process … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L777)

```diff
-           if (!this.processAllEvents && Fk.type !== Ok.d.POINTERMOVE && Fk.type !== Ok.d.POINTERUP && Fk.type !== Ok.d.POINTERDOWN && Fk.type !== Ok.d.POINTERDOUBLETAP) return;
+           if (!this.processAllEvents && Tm.type !== bm.c.POINTERMOVE && Tm.type !== bm.c.POINTERUP && Tm.type !== bm.c.POINTERDOWN && Tm.type !== bm.c.POINTERDOUBLETAP) return;
```

#### 65. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L783)

```diff
-               if (Fk.nearInteractionPickingInfo) Xk = Fk.nearInteractionPickingInfo.pickedMesh.mG() == Ik ? Fk.nearInteractionPickingInfo : new nk.b;
+               if (Tm.nearInteractionPickingInfo) hm = Tm.nearInteractionPickingInfo.pickedMesh.wG() == fm ? Tm.nearInteractionPickingInfo : new Sm.e;
```

#### 66. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L787)

```diff
-                 this._renderCamera && (Tk = Ik._activeCamera, Ik._activeCamera = this._renderCamera, Fk.ray = null), Xk = Fk.ray ? Ik.pickWithRay(Fk.ray) : Ik.rZ(kk.pointerX, kk.pointerY), Tk && (Ik._activeCamera = Tk)
+                 this._renderCamera && (Am = fm._activeCamera, fm._activeCamera = this._renderCamera, Tm.ray = null), hm = Tm.ray ? fm.pickWithRay(Tm.ray) : fm.Do(mm.pointerX, mm.pointerY), Am && (fm._activeCamera = Am)
```

#### 67. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L792-L793` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L792-L793) · [Before (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L792-L793)

```diff
-           if (!Fk.ray && Tk && (Fk.ray = Tk.ray), Fk.originalPickingInfo?.aimTransform && Tk && (Tk.aimTransform = Fk.originalPickingInfo.aimTransform, Tk.gripTransform = Fk.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Fk), thi … [truncated]
-           if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Tk && Tk.hit && (Fk.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Ok.j(Fk.type, Fk.event, Tk), Fk.type), Fk.skipOnPointerObservable = !0);
+           if (!Tm.ray && Am && (Tm.ray = Am.ray), Tm.originalPickingInfo?.aimTransform && Am && (Am.aimTransform = Tm.originalPickingInfo.aimTransform, Am.gripTransform = Tm.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Tm), thi … [truncated]
+           if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Am && Am.hit && (Tm.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new bm.f(Tm.type, Tm.event, Am), Tm.type), Tm.skipOnPointerObservable = !0);
```

#### 68. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L797)

```diff
-             Ik && Tk && (0 === Tk.distance && Ik.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Ik.pickedMesh) ? (this._notifyObservers(Fk, Ik, ik), Fk.skipOnPointerObservable = !0) : Fk.type === Ok.d.POINTERDOWN ? (this._pointerCaptures[ik.pointerI … [truncated]
+             fm && Am && (0 === Am.distance && fm.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(fm.pickedMesh) ? (this._notifyObservers(Tm, fm, am), Tm.skipOnPointerObservable = !0) : Tm.type === bm.c.POINTERDOWN ? (this._pointerCaptures[am.pointerI … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L801)

```diff
-         }))), this._sceneDisposeObserver = this.originalScene.hG.add((() => {
+         }))), this._sceneDisposeObserver = this.originalScene.iG.add((() => {
```

#### 70. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L806)

```diff
-         kk.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Ok.j(kk.type, kk.event, Fk), kk.type), this._lastPointerEvents[Ik.pointerId] = !0)
+         mm.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new bm.f(mm.type, mm.event, Tm), mm.type), this._lastPointerEvents[fm.pointerId] = !0)
```

#### 71. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L810` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L810) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L810)

```diff
-           const kk = this.utilityLayerScene.activeCamera.mG(),
+           const mm = this.utilityLayerScene.activeCamera.wG(),
```

#### 72. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L816` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L816) · [Before (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L816)

```diff
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.hG.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.iG.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
```

#### 73. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L832)

```diff
-         const Ik = kk.Yw,
+         const fm = mm.Aq,
```

#### 74. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L840)

```diff
-         return Xk.utilityLayerScene.hG.addOnce((() => {
+         return hm.utilityLayerScene.iG.addOnce((() => {
```

#### 75. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L857-L858` → after: `L857-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L857-L858) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L857-L858)

```diff
-       if (!qk || !Lk) return void Zk.e.Error("Invalid 'size' parameter !");
-       const tk = Fk.mG();
+       if (!im || !Rm) return void Em.b.Error("Invalid 'size' parameter !");
+       const pm = Tm.wG();
```

#### 76. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L873` → after: `L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L873) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L873)

```diff
-         if (!Fk || !Ik) return void Zk.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
+         if (!Tm || !fm) return void Em.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
```

#### 77. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L927` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L927) · [Before (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L927)

```diff
-       const zk = Fk.mG();
+       const cm = Tm.wG();
```

#### 78. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L940` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L940) · [Before (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L940)

```diff
-       if (!Sk || !vk) return void Zk.e.Error("Invalid 'size' parameter !");
+       if (!zm || !Zm) return void Em.b.Error("Invalid 'size' parameter !");
```

#### 79. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L949)

```diff
-       const uk = new Tk.c("screenShot", nk, zk, !1, !1, 0, !1, Xk.g.BILINEAR_SAMPLINGMODE, void 0, Jk, void 0, void 0, void 0, ak);
+       const Gm = new Am.c("screenShot", Sm, cm, !1, !1, 0, !1, hm.f.BILINEAR_SAMPLINGMODE, void 0, jm, void 0, void 0, void 0, Dm);
```

#### 80. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L953` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L953) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L953)

```diff
-           zk.incrementRenderId(), zk.resetCachedMaterial(), (0, Hk.h)((() => uk.isReadyForRendering() && Fk.isReady(!0)), (() => {
+           cm.incrementRenderId(), cm.resetCachedMaterial(), (0, qm.f)((() => Gm.isReadyForRendering() && Tm.isReady(!0)), (() => {
```

#### 81. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L957` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/237.js#L957) · [Before (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/237.js#L957)

```diff
-               })) : (kk.isWebGPU ? Ik.e(371).then((() => Ik(61438))) : Ik.e(372).then((() => Ik(61445)))).then((async () => await (0, wk.e)("pass", uk.getInternalTexture(), zk, void 0, void 0, void 0, Ek, Ok).then((Fk => {
+               })) : (mm.isWebGPU ? fm.e(371).then((() => fm(61516))) : fm.e(372).then((() => fm(61521)))).then((async () => await (0, Ym.d)("pass", Gm.getInternalTexture(), cm, void 0, void 0, void 0, km, bm).then((Tm => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/238.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/238.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf)

#### 1. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L4-L8` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L4-L8) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L4-L8)

```diff
-   37780: (kk, Fk, Ik) => {
-     Ik.d(Fk, {
-       b: () => Tk
-     });
-     var Xk = Ik(37785);
+   37813: (mm, Tm, fm) => {
+     fm.d(Tm, {
+       c: () => Am
+     });
+     var hm = fm(37821);
```

#### 2. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L12)

```diff
-         for (let Ik = 0; Ik < 6; Ik++) Fk.push(new Xk.e(0, 0, 0, 0));
+         for (let fm = 0; fm < 6; fm++) Tm.push(new hm.d(0, 0, 0, 0));
```

#### 3. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L49-L53` → after: `L49-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L49-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L49-L53) · [Before (L49-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L49-L53)

```diff
-   37785: (kk, Fk, Ik) => {
-     Ik.d(Fk, {
-       e: () => Tk
-     });
-     var Xk = Ik(37153);
+   37821: (mm, Tm, fm) => {
+     fm.d(Tm, {
+       d: () => Am
+     });
+     var hm = fm(37185);
```

#### 4. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L56-L58)

```diff
-         this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
-       }
-       iXk() {
+         this.normal = new hm.p(mm, Tm, fm), this.d = Am
+       }
+       ahm() {
```

#### 5. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L105)

```diff
-         return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
+         return om = 0 !== Em ? 1 / Em : 0, this.normal.x = im * om, this.normal.y = Rm * om, this.normal.z = pm * om, this.d = -(this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z), this
```

#### 6. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L108)

```diff
-         return Xk.t.Dot(this.normal, kk) <= Fk
+         return hm.p.Dot(this.normal, mm) <= Tm
```

#### 7. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L111)

```diff
-         return Xk.t.Dot(kk, this.normal) + this.d
+         return hm.p.Dot(mm, this.normal) + this.d
```

#### 8. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L125)

```diff
-         return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
+         return fm.normal.ZZ(Tm), fm.normal.normalize(), fm.d = -mm.dot(fm.normal), fm
```

#### 9. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L129-L134` → after: `L129-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L129-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L129-L134) · [Before (L129-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L129-L134)

```diff
-         return Xk.t.Dot(Ik, Fk) + Tk
-       }
-     }
-     Tk._TmpMatrix = Xk.c.Identity()
-   },
-   38666: (kk, Fk, Ik) => {
+         return hm.p.Dot(fm, Tm) + Am
+       }
+     }
+     Am._TmpMatrix = hm.e.Identity()
+   },
+   38764: (mm, Tm, fm) => {
```

#### 10. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L138)

```diff
-     var Xk = Ik(38674);
+     var hm = fm(38766);
```

#### 11. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L171)

```diff
-             Xk.e.Warn(ak.message)
+             hm.b.Warn(Dm.message)
```

#### 12. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L177)

```diff
-   37902: (kk, Fk, Ik) => {
+   37970: (mm, Tm, fm) => {
```

#### 13. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L181)

```diff
-         return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
+         return ("x" === mm ? Tm : 3 & Tm | 8).toString(16)
```

#### 14. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L185)

```diff
-       e: () => Xk
+       c: () => hm
```

#### 15. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L188-L190` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L188-L190) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L188-L190)

```diff
-   38674: (kk, Fk, Ik) => {
-     Ik.d(Fk, {
-       e: () => Xk
+   38766: (mm, Tm, fm) => {
+     fm.d(Tm, {
+       b: () => hm
```

#### 16. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L211)

```diff
-         const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
+         const Tm = mm => mm < 10 ? "0" + mm : "" + mm,
```

#### 17. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/238.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/238.js#L226)

```diff
-         const ak = `<div style='color:${yk.color}'>${ik}</div><br>`;
+         const Dm = `<div style='color:${xm.color}'>${am}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/239.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/239.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f)

#### 1. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L4)

```diff
-   61279: (kk, Fk, Ik) => {
+   61318: (mm, Tm, fm) => {
```

#### 2. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L7-L13` → after: `L7-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L7-L13) · [Before (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L7-L13)

```diff
-       ShaderMaterial: () => Xk.q,
-       ShaderMaterialCreateFromSnippetAsync: () => Xk.f,
-       ShaderMaterialParse: () => Xk.o,
-       ShaderMaterialParseFromFileAsync: () => Xk.i,
-       ShaderMaterialParseFromSnippetAsync: () => Xk.k
-     });
-     var Xk = Ik(40482);
+       ShaderMaterial: () => hm.n,
+       ShaderMaterialCreateFromSnippetAsync: () => hm.c,
+       ShaderMaterialParse: () => hm.j,
+       ShaderMaterialParseFromFileAsync: () => hm.g,
+       ShaderMaterialParseFromSnippetAsync: () => hm.i
+     });
+     var hm = fm(40577);
```

#### 3. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L16-L20` → after: `L16-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L16-L20) · [Before (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L16-L20)

```diff
-   37780: (kk, Fk, Ik) => {
-     Ik.d(Fk, {
-       b: () => Tk
-     });
-     var Xk = Ik(37785);
+   37813: (mm, Tm, fm) => {
+     fm.d(Tm, {
+       c: () => Am
+     });
+     var hm = fm(37821);
```

#### 4. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L24)

```diff
-         for (let Ik = 0; Ik < 6; Ik++) Fk.push(new Xk.e(0, 0, 0, 0));
+         for (let fm = 0; fm < 6; fm++) Tm.push(new hm.d(0, 0, 0, 0));
```

#### 5. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L61-L65` → after: `L61-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L61-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L61-L65) · [Before (L61-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L61-L65)

```diff
-   37785: (kk, Fk, Ik) => {
-     Ik.d(Fk, {
-       e: () => Tk
-     });
-     var Xk = Ik(37153);
+   37821: (mm, Tm, fm) => {
+     fm.d(Tm, {
+       d: () => Am
+     });
+     var hm = fm(37185);
```

#### 6. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L68-L70` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L68-L70) · [Before (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L68-L70)

```diff
-         this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
-       }
-       iXk() {
+         this.normal = new hm.p(mm, Tm, fm), this.d = Am
+       }
+       ahm() {
```

#### 7. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L117)

```diff
-         return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
+         return om = 0 !== Em ? 1 / Em : 0, this.normal.x = im * om, this.normal.y = Rm * om, this.normal.z = pm * om, this.d = -(this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z), this
```

#### 8. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L120)

```diff
-         return Xk.t.Dot(this.normal, kk) <= Fk
+         return hm.p.Dot(this.normal, mm) <= Tm
```

#### 9. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L123)

```diff
-         return Xk.t.Dot(kk, this.normal) + this.d
+         return hm.p.Dot(mm, this.normal) + this.d
```

#### 10. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L137)

```diff
-         return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
+         return fm.normal.ZZ(Tm), fm.normal.normalize(), fm.d = -mm.dot(fm.normal), fm
```

#### 11. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L141-L146` → after: `L141-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L141-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L141-L146) · [Before (L141-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L141-L146)

```diff
-         return Xk.t.Dot(Ik, Fk) + Tk
-       }
-     }
-     Tk._TmpMatrix = Xk.c.Identity()
-   },
-   38666: (kk, Fk, Ik) => {
+         return hm.p.Dot(fm, Tm) + Am
+       }
+     }
+     Am._TmpMatrix = hm.e.Identity()
+   },
+   38764: (mm, Tm, fm) => {
```

#### 12. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L150)

```diff
-     var Xk = Ik(38674);
+     var hm = fm(38766);
```

#### 13. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L183)

```diff
-             Xk.e.Warn(ak.message)
+             hm.b.Warn(Dm.message)
```

#### 14. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L189)

```diff
-   37902: (kk, Fk, Ik) => {
+   37970: (mm, Tm, fm) => {
```

#### 15. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L193)

```diff
-         return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
+         return ("x" === mm ? Tm : 3 & Tm | 8).toString(16)
```

#### 16. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L197)

```diff
-       e: () => Xk
+       c: () => hm
```

#### 17. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L200-L202` → after: `L200-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L200-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L200-L202) · [Before (L200-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L200-L202)

```diff
-   38674: (kk, Fk, Ik) => {
-     Ik.d(Fk, {
-       e: () => Xk
+   38766: (mm, Tm, fm) => {
+     fm.d(Tm, {
+       b: () => hm
```

#### 18. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L223)

```diff
-         const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
+         const Tm = mm => mm < 10 ? "0" + mm : "" + mm,
```

#### 19. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/239.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/239.js#L238)

```diff
-         const ak = `<div style='color:${yk.color}'>${ik}</div><br>`;
+         const Dm = `<div style='color:${xm.color}'>${am}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/240.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/240.js` (119 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1)

#### 1. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L4)

```diff
-   37811: (kk, Fk, Ik) => {
+   37858: (mm, Tm, fm) => {
```

#### 2. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L6-L7)

```diff
-       b: () => tk,
-       d: () => yk
+       c: () => pm,
+       f: () => xm
```

#### 3. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L9-L11)

```diff
-     var Xk = Ik(9210),
-       Tk = Ik(9183),
-       ik = Ik(337);
+     var hm = fm(9159),
+       Am = fm(9141),
+       am = fm(354);
```

#### 4. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3140` → after: `L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3140) · [Before (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3140)

```diff
-           [`${kk}|meta|rot2`]: {
+           [`${mm}|meta|rot2`]: {
```

#### 5. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3142` → after: `L3142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3142) · [Before (L3142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3142)

```diff
-               block: `${kk}|meta|rot2`,
+               block: `${mm}|meta|rot2`,
```

#### 6. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3168` → after: `L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3168) · [Before (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3168)

```diff
-           [`${kk}|meta|rot3`]: {
+           [`${mm}|meta|rot3`]: {
```

#### 7. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3170` → after: `L3170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3170) · [Before (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3170)

```diff
-               block: `${kk}|meta|rot3`,
+               block: `${mm}|meta|rot3`,
```

#### 8. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3196` → after: `L3196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3196) · [Before (L3196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3196)

```diff
-           [`${kk}|meta|rot4`]: {
+           [`${mm}|meta|rot4`]: {
```

#### 9. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3198` → after: `L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3198) · [Before (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3198)

```diff
-               block: `${kk}|meta|rot4`,
+               block: `${mm}|meta|rot4`,
```

#### 10. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3247-L3248` → after: `L3247-L3248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3247-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3247-L3248) · [Before (L3247-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3247-L3248)

```diff
-           const Tk = 1 === Ik ? "" : `|meta|rot${Ik}`;
-           Fk[`${Xk.b[0].block}${Tk}`] = {
+           const Am = 1 === fm ? "" : `|meta|rot${fm}`;
+           Tm[`${hm.b[0].block}${Am}`] = {
```

#### 11. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3256` → after: `L3256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3256) · [Before (L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3256)

```diff
-                 block: `${Xk}${Tk}`,
+                 block: `${hm}${Am}`,
```

#### 12. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3267-L3269` → after: `L3267-L3269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3267-L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3267-L3269) · [Before (L3267-L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3267-L3269)

```diff
-         for (let Fk = 1; Fk <= Xk.k; Fk++) {
-           const Ik = (0, Xk.ic)(Fk),
-             Tk = Xk.n[Fk - 1],
+         for (let Tm = 1; Tm <= hm.l; Tm++) {
+           const fm = (0, hm.dc)(Tm),
+             Am = hm.p[Tm - 1],
```

#### 13. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3276` → after: `L3276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3276) · [Before (L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3276)

```diff
-           for (const kk of Xk.f)
+           for (const mm of hm.h)
```

#### 14. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3282` → after: `L3282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3282) · [Before (L3282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3282)

```diff
-               } = Xk.j[kk];
+               } = hm.i[mm];
```

#### 15. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3284` → after: `L3284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3284) · [Before (L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3284)

```diff
-                 block: (0, Xk.gc)(kk, Fk),
+                 block: (0, hm.ac)(mm, Tm),
```

#### 16. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3410` → after: `L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3410) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3410)

```diff
-         [`${kk} Banner`]: {
+         [`${mm} Banner`]: {
```

#### 17. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3412` → after: `L3412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3412) · [Before (L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3412)

```diff
-             block: `${kk} Banner`,
+             block: `${mm} Banner`,
```

#### 18. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3417` → after: `L3417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3417) · [Before (L3417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3417)

```diff
-             block: `_${kk} Banner Flag|meta|rot1|bot`,
+             block: `_${mm} Banner Flag|meta|rot1|bot`,
```

#### 19. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3423` → after: `L3423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3423) · [Before (L3423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3423)

```diff
-         [`${kk} Banner|meta|rot2|bot`]: {
+         [`${mm} Banner|meta|rot2|bot`]: {
```

#### 20. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3425` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3425) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3425)

```diff
-             block: `${kk} Banner|meta|rot2|bot`,
+             block: `${mm} Banner|meta|rot2|bot`,
```

#### 21. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3430` → after: `L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3430) · [Before (L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3430)

```diff
-             block: `_${kk} Banner Flag|meta|rot2|bot`,
+             block: `_${mm} Banner Flag|meta|rot2|bot`,
```

#### 22. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3436` → after: `L3436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3436) · [Before (L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3436)

```diff
-         [`${kk} Banner|meta|rot3|bot`]: {
+         [`${mm} Banner|meta|rot3|bot`]: {
```

#### 23. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3438` → after: `L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3438) · [Before (L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3438)

```diff
-             block: `${kk} Banner|meta|rot3|bot`,
+             block: `${mm} Banner|meta|rot3|bot`,
```

#### 24. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3443` → after: `L3443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3443) · [Before (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3443)

```diff
-             block: `_${kk} Banner Flag|meta|rot3|bot`,
+             block: `_${mm} Banner Flag|meta|rot3|bot`,
```

#### 25. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3449` → after: `L3449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3449) · [Before (L3449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3449)

```diff
-         [`${kk} Banner|meta|rot4|bot`]: {
+         [`${mm} Banner|meta|rot4|bot`]: {
```

#### 26. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3451` → after: `L3451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3451) · [Before (L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3451)

```diff
-             block: `${kk} Banner|meta|rot4|bot`,
+             block: `${mm} Banner|meta|rot4|bot`,
```

#### 27. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3456` → after: `L3456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3456) · [Before (L3456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3456)

```diff
-             block: `_${kk} Banner Flag|meta|rot4|bot`,
+             block: `_${mm} Banner Flag|meta|rot4|bot`,
```

#### 28. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3462` → after: `L3462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3462) · [Before (L3462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3462)

```diff
-         [`${kk} Banner|meta|rot1|side`]: {
+         [`${mm} Banner|meta|rot1|side`]: {
```

#### 29. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3464` → after: `L3464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3464) · [Before (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3464)

```diff
-             block: `${kk} Banner|meta|rot1|side`,
+             block: `${mm} Banner|meta|rot1|side`,
```

#### 30. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3469` → after: `L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3469) · [Before (L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3469)

```diff
-             block: `_${kk} Banner Flag|meta|rot1|side`,
+             block: `_${mm} Banner Flag|meta|rot1|side`,
```

#### 31. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3475` → after: `L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3475) · [Before (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3475)

```diff
-         [`${kk} Banner|meta|rot2|side`]: {
+         [`${mm} Banner|meta|rot2|side`]: {
```

#### 32. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3477` → after: `L3477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3477) · [Before (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3477)

```diff
-             block: `${kk} Banner|meta|rot2|side`,
+             block: `${mm} Banner|meta|rot2|side`,
```

#### 33. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3482` → after: `L3482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3482) · [Before (L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3482)

```diff
-             block: `_${kk} Banner Flag|meta|rot2|side`,
+             block: `_${mm} Banner Flag|meta|rot2|side`,
```

#### 34. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3488` → after: `L3488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3488) · [Before (L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3488)

```diff
-         [`${kk} Banner|meta|rot3|side`]: {
+         [`${mm} Banner|meta|rot3|side`]: {
```

#### 35. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3490` → after: `L3490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3490) · [Before (L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3490)

```diff
-             block: `${kk} Banner|meta|rot3|side`,
+             block: `${mm} Banner|meta|rot3|side`,
```

#### 36. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3495` → after: `L3495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3495) · [Before (L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3495)

```diff
-             block: `_${kk} Banner Flag|meta|rot3|side`,
+             block: `_${mm} Banner Flag|meta|rot3|side`,
```

#### 37. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3501` → after: `L3501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3501) · [Before (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3501)

```diff
-         [`${kk} Banner|meta|rot4|side`]: {
+         [`${mm} Banner|meta|rot4|side`]: {
```

#### 38. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3503` → after: `L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3503) · [Before (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3503)

```diff
-             block: `${kk} Banner|meta|rot4|side`,
+             block: `${mm} Banner|meta|rot4|side`,
```

#### 39. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3508` → after: `L3508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3508) · [Before (L3508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3508)

```diff
-             block: `_${kk} Banner Flag|meta|rot4|side`,
+             block: `_${mm} Banner Flag|meta|rot4|side`,
```

#### 40. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3514` → after: `L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3514) · [Before (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3514)

```diff
-         [`${kk} Banner|meta|rot1|top`]: {
+         [`${mm} Banner|meta|rot1|top`]: {
```

#### 41. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3516` → after: `L3516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3516) · [Before (L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3516)

```diff
-             block: `${kk} Banner|meta|rot1|top`,
+             block: `${mm} Banner|meta|rot1|top`,
```

#### 42. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3521` → after: `L3521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3521) · [Before (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3521)

```diff
-             block: `_${kk} Banner Flag`,
+             block: `_${mm} Banner Flag`,
```

#### 43. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3527` → after: `L3527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3527) · [Before (L3527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3527)

```diff
-         [`${kk} Banner|meta|rot2|top`]: {
+         [`${mm} Banner|meta|rot2|top`]: {
```

#### 44. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3529` → after: `L3529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3529) · [Before (L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3529)

```diff
-             block: `${kk} Banner|meta|rot2|top`,
+             block: `${mm} Banner|meta|rot2|top`,
```

#### 45. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3534` → after: `L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3534) · [Before (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3534)

```diff
-             block: `_${kk} Banner Flag|meta|rot2|top`,
+             block: `_${mm} Banner Flag|meta|rot2|top`,
```

#### 46. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3540` → after: `L3540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3540) · [Before (L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3540)

```diff
-         [`${kk} Banner|meta|rot3|top`]: {
+         [`${mm} Banner|meta|rot3|top`]: {
```

#### 47. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3542` → after: `L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3542) · [Before (L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3542)

```diff
-             block: `${kk} Banner|meta|rot3|top`,
+             block: `${mm} Banner|meta|rot3|top`,
```

#### 48. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3547` → after: `L3547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3547) · [Before (L3547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3547)

```diff
-             block: `_${kk} Banner Flag|meta|rot3|top`,
+             block: `_${mm} Banner Flag|meta|rot3|top`,
```

#### 49. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3553` → after: `L3553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3553) · [Before (L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3553)

```diff
-         [`${kk} Banner|meta|rot4|top`]: {
+         [`${mm} Banner|meta|rot4|top`]: {
```

#### 50. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3555` → after: `L3555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3555) · [Before (L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3555)

```diff
-             block: `${kk} Banner|meta|rot4|top`,
+             block: `${mm} Banner|meta|rot4|top`,
```

#### 51. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3560` → after: `L3560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3560) · [Before (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3560)

```diff
-             block: `_${kk} Banner Flag|meta|rot4|top`,
+             block: `_${mm} Banner Flag|meta|rot4|top`,
```

#### 52. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3570` → after: `L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3570) · [Before (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3570)

```diff
-       const Fk = (0, ik.hc)(kk);
+       const Tm = (0, am.Tb)(mm);
```

#### 53. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3579` → after: `L3579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3579) · [Before (L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3579)

```diff
-             block: `_${Fk} Top Left`,
+             block: `_${Tm} Top Left`,
```

#### 54. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3584` → after: `L3584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3584) · [Before (L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3584)

```diff
-             block: `_${Fk} Top Right`,
+             block: `_${Tm} Top Right`,
```

#### 55. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3589` → after: `L3589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3589) · [Before (L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3589)

```diff
-             block: `_${Fk} Bottom Right`,
+             block: `_${Tm} Bottom Right`,
```

#### 56. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3595)

```diff
-         [`${Fk}|meta|rot2`]: {
+         [`${Tm}|meta|rot2`]: {
```

#### 57. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3597)

```diff
-             block: `${Fk}|meta|rot2`,
+             block: `${Tm}|meta|rot2`,
```

#### 58. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3602` → after: `L3602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3602) · [Before (L3602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3602)

```diff
-             block: `_${Fk} Top Left|meta|rot2`,
+             block: `_${Tm} Top Left|meta|rot2`,
```

#### 59. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3607` → after: `L3607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3607) · [Before (L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3607)

```diff
-             block: `_${Fk} Top Right|meta|rot2`,
+             block: `_${Tm} Top Right|meta|rot2`,
```

#### 60. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3612` → after: `L3612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3612) · [Before (L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3612)

```diff
-             block: `_${Fk} Bottom Right|meta|rot2`,
+             block: `_${Tm} Bottom Right|meta|rot2`,
```

#### 61. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3618` → after: `L3618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3618) · [Before (L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3618)

```diff
-         [`${Fk}|meta|rot3`]: {
+         [`${Tm}|meta|rot3`]: {
```

#### 62. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3620` → after: `L3620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3620) · [Before (L3620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3620)

```diff
-             block: `${Fk}|meta|rot3`,
+             block: `${Tm}|meta|rot3`,
```

#### 63. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3625` → after: `L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3625) · [Before (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3625)

```diff
-             block: `_${Fk} Top Left|meta|rot3`,
+             block: `_${Tm} Top Left|meta|rot3`,
```

#### 64. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3630` → after: `L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3630) · [Before (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3630)

```diff
-             block: `_${Fk} Top Right|meta|rot3`,
+             block: `_${Tm} Top Right|meta|rot3`,
```

#### 65. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3635` → after: `L3635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3635) · [Before (L3635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3635)

```diff
-             block: `_${Fk} Bottom Right|meta|rot3`,
+             block: `_${Tm} Bottom Right|meta|rot3`,
```

#### 66. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3641` → after: `L3641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3641) · [Before (L3641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3641)

```diff
-         [`${Fk}|meta|rot4`]: {
+         [`${Tm}|meta|rot4`]: {
```

#### 67. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3643` → after: `L3643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3643) · [Before (L3643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3643)

```diff
-             block: `${Fk}|meta|rot4`,
+             block: `${Tm}|meta|rot4`,
```

#### 68. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3648` → after: `L3648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3648) · [Before (L3648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3648)

```diff
-             block: `_${Fk} Top Left|meta|rot4`,
+             block: `_${Tm} Top Left|meta|rot4`,
```

#### 69. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3653` → after: `L3653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3653) · [Before (L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3653)

```diff
-             block: `_${Fk} Top Right|meta|rot4`,
+             block: `_${Tm} Top Right|meta|rot4`,
```

#### 70. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3658` → after: `L3658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3658) · [Before (L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3658)

```diff
-             block: `_${Fk} Bottom Right|meta|rot4`,
+             block: `_${Tm} Bottom Right|meta|rot4`,
```

#### 71. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3668-L3669` → after: `L3668-L3669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3668-L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3668-L3669) · [Before (L3668-L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3668-L3669)

```diff
-       const Fk = `_${kk} Back`,
-         Ik = `_${kk} Dish`;
+       const Tm = `_${mm} Back`,
+         fm = `_${mm} Dish`;
```

#### 72. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3689` → after: `L3689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3689) · [Before (L3689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3689)

```diff
-         [`${kk}|meta|rot2`]: {
+         [`${mm}|meta|rot2`]: {
```

#### 73. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3691` → after: `L3691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3691) · [Before (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3691)

```diff
-             block: `${kk}|meta|rot2`,
+             block: `${mm}|meta|rot2`,
```

#### 74. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3696` → after: `L3696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3696) · [Before (L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3696)

```diff
-             block: `${Fk}|meta|rot2`,
+             block: `${Tm}|meta|rot2`,
```

#### 75. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3701` → after: `L3701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3701) · [Before (L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3701)

```diff
-             block: `${Ik}|meta|rot2`,
+             block: `${fm}|meta|rot2`,
```

#### 76. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3707` → after: `L3707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3707) · [Before (L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3707)

```diff
-         [`${kk}|meta|rot3`]: {
+         [`${mm}|meta|rot3`]: {
```

#### 77. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3709` → after: `L3709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3709) · [Before (L3709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3709)

```diff
-             block: `${kk}|meta|rot3`,
+             block: `${mm}|meta|rot3`,
```

#### 78. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3714` → after: `L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3714) · [Before (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3714)

```diff
-             block: `${Fk}|meta|rot3`,
+             block: `${Tm}|meta|rot3`,
```

#### 79. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3719` → after: `L3719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3719) · [Before (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3719)

```diff
-             block: `${Ik}|meta|rot3`,
+             block: `${fm}|meta|rot3`,
```

#### 80. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3725` → after: `L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3725) · [Before (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3725)

```diff
-         [`${kk}|meta|rot4`]: {
+         [`${mm}|meta|rot4`]: {
```

#### 81. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3727` → after: `L3727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3727) · [Before (L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3727)

```diff
-             block: `${kk}|meta|rot4`,
+             block: `${mm}|meta|rot4`,
```

#### 82. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3732` → after: `L3732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3732) · [Before (L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3732)

```diff
-             block: `${Fk}|meta|rot4`,
+             block: `${Tm}|meta|rot4`,
```

#### 83. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3737` → after: `L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3737) · [Before (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3737)

```diff
-             block: `${Ik}|meta|rot4`,
+             block: `${fm}|meta|rot4`,
```

#### 84. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3747` → after: `L3747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3747) · [Before (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3747)

```diff
-       const Fk = `Small ${kk} Pod`;
+       const Tm = `Small ${mm} Pod`;
```

#### 85. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3756` → after: `L3756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3756) · [Before (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3756)

```diff
-             block: `_Small ${kk} Pod Mid`,
+             block: `_Small ${mm} Pod Mid`,
```

#### 86. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3761` → after: `L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3761) · [Before (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3761)

```diff
-             block: `_Small ${kk} Pod Top`,
+             block: `_Small ${mm} Pod Top`,
```

#### 87. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3771-L3772` → after: `L3771-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3771-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3771-L3772) · [Before (L3771-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3771-L3772)

```diff
-         if (kk.id = Tk.g[kk.block].id, Zk === kk.block && (0 !== kk.x || 0 !== kk.y || 0 !== kk.z)) throw new Error(`Multiblock "${Zk}" has main block "${kk.block}" at non-origin position (${kk.x}, ${kk.y}, ${kk.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       yk[Tk.g[Zk].id] = yk[Zk]
+         if (mm.id = Am.i[mm.block].id, Em === mm.block && (0 !== mm.x || 0 !== mm.y || 0 !== mm.z)) throw new Error(`Multiblock "${Em}" has main block "${mm.block}" at non-origin position (${mm.x}, ${mm.y}, ${mm.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       xm[Am.i[Em].id] = xm[Em]
```

#### 88. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3789` → after: `L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3789) · [Before (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3789)

```diff
-         tk[kk] = ik, tk[Tk.g[kk].id] = ik
+         pm[mm] = am, pm[Am.i[mm].id] = am
```

#### 89. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3792` → after: `L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3792) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3792)

```diff
-   38209: (kk, Fk, Ik) => {
+   38308: (mm, Tm, fm) => {
```

#### 90. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3794-L3795` → after: `L3794-L3795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3794-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3794-L3795) · [Before (L3794-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3794-L3795)

```diff
-       e: () => ak,
-       f: () => lk
+       b: () => Dm,
+       d: () => wm
```

#### 91. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3797-L3800` → after: `L3797-L3800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3797-L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3797-L3800) · [Before (L3797-L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3797-L3800)

```diff
-     var Xk = Ik(9183),
-       Tk = Ik(9241),
-       ik = Ik(9244);
-     const yk = Tk.m.map((kk => {
+     var hm = fm(9141),
+       Am = fm(9193),
+       am = fm(9199);
+     const xm = Am.q.map((mm => {
```

#### 92. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3809-L3810` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3809-L3810) · [Before (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3809-L3810)

```diff
-       const Fk = Xk.g[kk];
-       return !!Fk && kk !== Xk.d && !Fk.model && !Fk.qj && !1 !== Fk.solid && !Fk.Re
+       const Tm = hm.i[mm];
+       return !!Tm && mm !== hm.b && !Tm.model && !Tm.Qo && !1 !== Tm.solid && !Tm.AO
```

#### 93. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3817` → after: `L3817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3817) · [Before (L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3817)

```diff
-         const Fk = Xk.g[kk];
+         const Tm = hm.i[mm];
```

#### 94. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3821` → after: `L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3821) · [Before (L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3821)

```diff
-         return this.handles(kk) || lk(kk) || (0, ik.s)(Xk.g[kk])
+         return this.handles(mm) || wm(mm) || (0, am.z)(hm.i[mm])
```

#### 95. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3824-L3825` → after: `L3824-L3825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3824-L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3824-L3825) · [Before (L3824-L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3824-L3825)

```diff
-         let qk = this.handles(kk(Fk, Ik + 1, yk)) ? Tk.f : 0;
-         return Tk.m.forEach(((ak, Lk) => {
+         let im = this.handles(mm(Tm, fm + 1, xm)) ? Am.i : 0;
+         return Am.q.forEach(((Dm, Rm) => {
```

#### 96. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3832-L3833` → after: `L3832-L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3832-L3833) · [Before (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3832-L3833)

```diff
-             const Ik = Xk.g[kk];
-             return (0, ik.s)(Ik) && (0, ik.n)(Ik.meta.rot) === (0 !== Tk.m[Fk].dx)
+             const fm = hm.i[mm];
+             return (0, am.z)(fm) && (0, am.t)(fm.meta.rot) === (0 !== Am.q[Tm].dx)
```

#### 97. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3835` → after: `L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3835) · [Before (L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3835)

```diff
-         })), (0, Xk.j)((0, Tk.i)(Xk.g[ak].meta.rootName, qk))
+         })), (0, hm.k)((0, Am.k)(hm.i[Dm].meta.rootName, im))
```

#### 98. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3839` → after: `L3839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3839) · [Before (L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3839)

```diff
-   38e3: (kk, Fk, Ik) => {
+   38058: (mm, Tm, fm) => {
```

#### 99. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3843` → after: `L3843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3843) · [Before (L3843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3843)

```diff
-       const Xk = null !== (Ik = Fk.customAttributes) && void 0 !== Ik ? Ik : {};
+       const hm = null !== (fm = Tm.customAttributes) && void 0 !== fm ? fm : {};
```

#### 100. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3845` → after: `L3845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3845) · [Before (L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3845)

```diff
-       "Gun" === (null === kk || void 0 === kk ? void 0 : kk.type) && (Xk.shotsLeft = null !== (Tk = null !== (ik = Xk.shotsLeft) && void 0 !== ik ? ik : null === (yk = Xk.gunStats) || void 0 === yk ? void 0 : yk.clipSize) && void 0 !== Tk ? Tk : kk.clipSize);
+       "Gun" === (null === mm || void 0 === mm ? void 0 : mm.type) && (hm.shotsLeft = null !== (Am = null !== (am = hm.shotsLeft) && void 0 !== am ? am : null === (xm = hm.gunStats) || void 0 === xm ? void 0 : xm.clipSize) && void 0 !== Am ? Am : mm.clipSize);
```

#### 101. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3865-L3866` → after: `L3865-L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3865-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3865-L3866) · [Before (L3865-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3865-L3866)

```diff
-           if ("string" !== typeof Fk) Xk.enchantmentData[tk].icon = null !== (lk = null === Fk || void 0 === Fk || null === (ak = Fk.toString) || void 0 === ak ? void 0 : ak.call(Fk)) && void 0 !== lk ? lk : void 0;
-           if ("string" !== typeof Ik) Xk.enchantmentData[tk].description = null !== (qk = null === Ik || void 0 === Ik || null === (Lk = Ik.toString) || void 0 === Lk ? void 0 : Lk.call(Ik)) && void 0 !== qk ? qk : void 0
+           if ("string" !== typeof Tm) hm.enchantmentData[pm].icon = null !== (wm = null === Tm || void 0 === Tm || null === (Dm = Tm.toString) || void 0 === Dm ? void 0 : Dm.call(Tm)) && void 0 !== wm ? wm : void 0;
+           if ("string" !== typeof fm) hm.enchantmentData[pm].description = null !== (im = null === fm || void 0 === fm || null === (Rm = fm.toString) || void 0 === Rm ? void 0 : Rm.call(fm)) && void 0 !== im ? im : void 0
```

#### 102. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3871` → after: `L3871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3871) · [Before (L3871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3871)

```diff
-       b: () => Xk
+       c: () => hm
```

#### 103. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3874` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3874) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3874)

```diff
-   38204: (kk, Fk, Ik) => {
+   38306: (mm, Tm, fm) => {
```

#### 104. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3876-L3878` → after: `L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3876) · [Before (L3876-L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3876-L3878)

```diff
-       b: () => Vk,
-       d: () => Jk,
-       e: () => ak,
+       c: () => Jm,
```

#### 105. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3880` → after: `L3878-L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3878-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3878-L3880) · [Before (L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3880)

```diff
-       j: () => zk
+       k: () => Dm,
+       l: () => pm,
+       p: () => cm
```

#### 106. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3882-L3886` → after: `L3882-L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3882-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3882-L3886) · [Before (L3882-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3882-L3886)

```diff
-     var Xk = Ik(9183),
-       Tk = Ik(9223),
-       ik = Ik(38209);
-     const yk = (0, Xk.j)("Noticeboard"),
-       lk = (0, Xk.j)("Standing Noticeboard|meta|rot4|lrud");
+     var hm = fm(9141),
+       Am = fm(9167),
+       am = fm(38308);
+     const xm = (0, hm.k)("Noticeboard"),
+       wm = (0, hm.k)("Standing Noticeboard|meta|rot4|lrud");
```

#### 107. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3892` → after: `L3892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3892) · [Before (L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3892)

```diff
-     for (let Sk = yk; Sk <= lk; Sk++) qk[Sk - yk] = (0, Tk.r)(Xk.g[Sk].meta.metaStr);
+     for (let zm = xm; zm <= wm; zm++) im[zm - xm] = (0, Am.p)(hm.i[zm].meta.metaStr);
```

#### 108. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3908` → after: `L3908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3908) · [Before (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3908)

```diff
-       const [ik, , yk] = Tk.z[kk][jk];
+       const [am, , xm] = Am.t[mm][om];
```

#### 109. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3920-L3921` → after: `L3920-L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3920-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3920-L3921) · [Before (L3920-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3920-L3921)

```diff
-       const [tk, Zk, jk] = Tk.z[lk][Ik], ek = [Fk[0] + tk, Fk[1] + Zk, Fk[2] + jk], wk = kk(ek[0], ek[1], ek[2]), Hk = null === (ak = Xk.g[wk]) || void 0 === ak ? void 0 : ak.meta;
-       return (null === Hk || void 0 === Hk ? void 0 : Hk.rootId) === ik && Hk.rot === lk && qk[wk - yk] & 1 << (1 ^ Ik) ? ek : null
+       const [pm, Em, om] = Am.t[wm][fm], Om = [Tm[0] + pm, Tm[1] + Em, Tm[2] + om], Ym = mm(Om[0], Om[1], Om[2]), qm = null === (Dm = hm.i[Ym]) || void 0 === Dm ? void 0 : Dm.meta;
+       return (null === qm || void 0 === qm ? void 0 : qm.rootId) === am && qm.rot === wm && im[Ym - xm] & 1 << (1 ^ fm) ? Om : null
```

#### 110. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3930` → after: `L3930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3930) · [Before (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3930)

```diff
-       } = Xk.g[yk].meta, tk = (Fk, Ik) => {
+       } = hm.i[xm].meta, pm = (Tm, fm) => {
```

#### 111. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3938` → after: `L3938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3938) · [Before (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3938)

```diff
-       }, Hk = tk(tk([Fk, Ik, ik], Zk).end, ek).end, Jk = tk(Hk, jk).cells, [xk, , Pk] = Tk.z[qk][jk];
+       }, qm = pm(pm([Tm, fm, am], Em).end, Om).end, jm = pm(qm, om).cells, [Vm, , Im] = Am.t[im][om];
```

#### 112. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3940` → after: `L3940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3940) · [Before (L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3940)

```diff
-       kk: for (; Qk < Lk; Qk++)
+       mm: for (; Qm < Rm; Qm++)
```

#### 113. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3960` → after: `L3960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3960) · [Before (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3960)

```diff
-           const [yk, , lk] = Tk.z[Ik][jk], ak = [];
+           const [xm, , wm] = Am.t[fm][om], Dm = [];
```

#### 114. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3975` → after: `L3975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L3975) · [Before (L3975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L3975)

```diff
-       } = Xk.g[yk].meta, Lk = [
+       } = hm.i[xm].meta, Rm = [
```

#### 115. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4004-L4005` → after: `L4004-L4005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4004-L4005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L4004-L4005) · [Before (L4004-L4005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L4004-L4005)

```diff
-         } = Xk.g[Ik].meta;
-         if (Tk.z[Fk].some((kk => {
+         } = hm.i[fm].meta;
+         if (Am.t[Tm].some((mm => {
```

#### 116. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4015` → after: `L4015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L4015) · [Before (L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L4015)

```diff
-         root: (0, ik.f)(tk) ? Tk.F : Tk.C,
+         root: (0, am.d)(pm) ? Am.y : Am.v,
```

#### 117. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4020` → after: `L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L4020) · [Before (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L4020)

```diff
-   38213: (kk, Fk, Ik) => {
+   38311: (mm, Tm, fm) => {
```

#### 118. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4023-L4025` → after: `L4024-L4025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4024-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L4024-L4025) · [Before (L4023-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L4023-L4025)

```diff
-       i: () => yk,
-       k: () => Tk,
-       l: () => lk
+       h: () => Am,
+       j: () => wm
```

#### 119. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4027-L4028` → after: `L4027-L4028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4027-L4028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/240.js#L4027-L4028) · [Before (L4027-L4028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/240.js#L4027-L4028)

```diff
-     var Xk = Ik(346);
-     const Tk = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...Ik(621).s.map((kk => `${kk} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
+     var hm = fm(359);
+     const Am = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...fm(649).u.map((mm => `${mm} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/241.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/241.js` (68 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5)

#### 1. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L4)

```diff
-   38073: (kk, Fk, Ik) => {
+   38124: (mm, Tm, fm) => {
```

#### 2. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L6-L8)

```diff
-       b: () => qk,
-       c: () => Xk,
-       g: () => lk,
+       d: () => im,
+       h: () => hm,
```

#### 3. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L10-L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L11)

```diff
-       s: () => ik
+       p: () => xm,
+       q: () => am
```

#### 4. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L38)

```diff
-   38414: (kk, Fk, Ik) => {
+   38521: (mm, Tm, fm) => {
```

#### 5. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L40-L48` → after: `L40-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L40-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L40-L47) · [Before (L40-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L40-L48)

```diff
-       D: () => sk,
-       G: () => zk,
-       K: () => Qk,
-       O: () => Kk,
-       Q: () => Zk,
-       T: () => wk,
-       V: () => Jk,
-       Y: () => Tk,
-       c: () => Lk,
+       A: () => nm,
+       B: () => cm,
+       C: () => Qm,
+       E: () => Km,
+       F: () => Em,
+       I: () => Ym,
+       L: () => jm,
+       P: () => Am,
```

#### 6. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L51-L56` → after: `L51-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L51-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L51-L56) · [Before (L51-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L51-L56)

```diff
-       j: () => qk,
-       n: () => lk,
-       p: () => yk,
-       t: () => ik,
-       x: () => Vk,
-       z: () => jk
+       i: () => im,
+       m: () => wm,
+       o: () => xm,
+       s: () => am,
+       w: () => Jm,
+       x: () => om
```

#### 7. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L58)

```diff
-     var Xk = Ik(9267);
+     var hm = fm(9231);
```

#### 8. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L73)

```diff
-       return (0, Xk.i)(Fk) ? Fk === Xk.d ? "cryo" : "water" : null
+       return (0, hm.k)(Tm) ? Tm === hm.c ? "cryo" : "water" : null
```

#### 9. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L169)

```diff
-       return 1e3 * (null !== Fk && void 0 !== Fk ? Fk : 0) / kk.opMs
+       return 1e3 * (null !== Tm && void 0 !== Tm ? Tm : 0) / mm.opMs
```

#### 10. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L181)

```diff
-   38399: (kk, Fk, Ik) => {
+   38509: (mm, Tm, fm) => {
```

#### 11. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L184)

```diff
-       g: () => bk
+       i: () => Xm
```

#### 12. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L186-L187` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L186-L187) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L186-L187)

```diff
-     var Xk = Ik(9183),
-       Tk = Ik(9223);
+     var hm = fm(9141),
+       Am = fm(9167);
```

#### 13. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L196-L198` → after: `L196-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L196-L198) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L196-L198)

```diff
-     var yk = Ik(9241),
-       lk = Ik(38209),
-       ak = Ik(9237);
+     var xm = fm(9193),
+       wm = fm(38308),
+       Dm = fm(9184);
```

#### 14. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L224)

```diff
-     var ek = Ik(9264);
+     var Om = fm(9222);
```

#### 15. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L227)

```diff
-       return Fk < ek.n || Fk >= ek.n + ek.r || Math.floor(kk / ek.w) === Math.floor(Xk / ek.w) && Math.floor(Ik / ek.w) === Math.floor(Tk / ek.w)
+       return Tm < Om.k || Tm >= Om.k + Om.o || Math.floor(mm / Om.r) === Math.floor(hm / Om.r) && Math.floor(fm / Om.r) === Math.floor(Am / Om.r)
```

#### 16. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L231-L233` → after: `L231-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L231-L233) · [Before (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L231-L233)

```diff
-       xk = new Set(ek.I),
-       Pk = new Set([...ek.I, "Belt Loader", "Fast Loader", Jk]),
-       Kk = new Set(ek.t),
+       Vm = new Set(Om.F),
+       Im = new Set([...Om.F, "Belt Loader", "Fast Loader", jm]),
+       Km = new Set(Om.q),
```

#### 17. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L245-L252` → after: `L245-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L245-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L245-L252) · [Before (L245-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L245-L252)

```diff
-       return null !== (Fk = null === (Ik = Xk.g[kk]) || void 0 === Ik ? void 0 : Ik.meta.rootName) && void 0 !== Fk ? Fk : ""
-     }
- 
-     function Vk(kk) {
-       return sk(kk) === ek.e && (0, ek.O)(Xk.g[kk].name)
-     }
-     var zk = Ik(9230),
-       Sk = Ik(9250);
+       return null !== (Tm = null === (fm = hm.i[mm]) || void 0 === fm ? void 0 : fm.meta.rootName) && void 0 !== Tm ? Tm : ""
+     }
+ 
+     function Jm(mm) {
+       return nm(mm) === Om.e && (0, Om.M)(hm.i[mm].name)
+     }
+     var cm = fm(9176),
+       zm = fm(9208);
```

#### 18. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L262-L265` → after: `L262-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L262-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L262-L265) · [Before (L262-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L262-L265)

```diff
-       const Tk = null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.meta;
-       return (null === Tk || void 0 === Tk ? void 0 : Tk.rootName) !== Sk.l ? null : {
-         rot: null !== (Ik = Tk.rot) && void 0 !== Ik ? Ik : 1,
-         half: (0, Sk.e)(Tk.rootName, Tk.metaStr)
+       const Am = null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.meta;
+       return (null === Am || void 0 === Am ? void 0 : Am.rootName) !== zm.o ? null : {
+         rot: null !== (fm = Am.rot) && void 0 !== fm ? fm : 1,
+         half: (0, zm.g)(Am.rootName, Am.metaStr)
```

#### 19. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L278-L281` → after: `L278-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L278-L281) · [Before (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L278-L281)

```diff
-       const [lk, ak] = (0, Sk.j)(ik, yk), qk = Ok(kk, Fk + lk, Ik, Xk + ak);
-       return null !== qk && qk.rot === ik && qk.half === Sk.p[yk]
-     }
-     var Gk = Ik(38405);
+       const [wm, Dm] = (0, zm.k)(am, xm), im = bm(mm, Tm + wm, fm, hm + Dm);
+       return null !== im && im.rot === am && im.half === zm.q[xm]
+     }
+     var em = fm(38518);
```

#### 20. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L288)

```diff
-         return "Stairs" === (null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.model)
+         return "Stairs" === (null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.model)
```

#### 21. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L296-L297` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L296-L297) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L296-L297)

```diff
-           qk = yk.half === ak.d.top ? "top" : "bot";
-         return (0, Xk.j)(`${Xk.g[ik].meta.rootName}|meta|rot${yk.rot}|${qk}${null===lk?"":`|${lk}`}`)
+           im = xm.half === Dm.e.top ? "top" : "bot";
+         return (0, hm.k)(`${hm.i[am].meta.rootName}|meta|rot${xm.rot}|${im}${null===wm?"":`|${wm}`}`)
```

#### 22. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L303)

```diff
-         } = Xk.g[kk].meta;
+         } = hm.i[mm].meta;
```

#### 23. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L338)

```diff
-         this.reshapeOffsets = ik, this.rootIds = new Set(Tk.h.map((kk => (0, Xk.j)(kk))))
+         this.reshapeOffsets = am, this.rootIds = new Set(Am.h.map((mm => (0, hm.k)(mm))))
```

#### 24. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L342)

```diff
-         const Ik = null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.meta;
+         const fm = null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.meta;
```

#### 25. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L349)

```diff
-         return Xk.g[kk].meta.rootName === Tk.q ? null : Tk.q
+         return hm.i[mm].meta.rootName === Am.n ? null : Am.n
```

#### 26. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L356)

```diff
-         } = Xk.g[yk].meta;
+         } = hm.i[xm].meta;
```

#### 27. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L358)

```diff
-         return Tk.z[qk].forEach(((Tk, yk) => {
+         return Am.t[im].forEach(((Am, xm) => {
```

#### 28. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L361)

```diff
-           const ek = null === (ak = Xk.g[kk(Fk + tk, Ik + Zk, ik + jk)]) || void 0 === ak ? void 0 : ak.meta;
+           const Om = null === (Dm = hm.i[mm(Tm + pm, fm + Em, am + om)]) || void 0 === Dm ? void 0 : Dm.meta;
```

#### 29. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L363-L365` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L363-L365) · [Before (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L363-L365)

```diff
-         })), (0, Xk.j)((0, Tk.d)(ak, qk, Lk))
-       }
-     }, ...yk.c.map((kk => new lk.e(kk))), new class {
+         })), (0, hm.k)((0, Am.f)(Dm, im, Rm))
+       }
+     }, ...xm.d.map((mm => new wm.b(mm))), new class {
```

#### 30. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L375)

```diff
-         return Pk.has(Fk) || Kk.has(Fk) || Fk === Hk || Fk === ek.e || void 0 !== ek.b[Fk]
+         return Im.has(Tm) || Km.has(Tm) || Tm === qm || Tm === Om.e || void 0 !== Om.c[Tm]
```

#### 31. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L381-L382` → after: `L381-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L381-L382) · [Before (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L381-L382)

```diff
-         } = Xk.g[ik].meta;
-         return lk === ek.e ? yk ? ik : function(kk, Fk, Ik, Tk, ik) {
+         } = hm.i[am].meta;
+         return wm === Om.e ? xm ? am : function(mm, Tm, fm, Am, am) {
```

#### 32. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L384)

```diff
-           for (let ak = 1; ak <= ek.G; ak++) {
+           for (let Dm = 1; Dm <= Om.C; Dm++) {
```

#### 33. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L386)

```diff
-             if (sk(tk) === ek.e && Xk.g[tk].meta.rot === ik && wk(Fk, Ik, Tk, qk, Lk)) return (0, Xk.j)((0, ek.V)(ik, !Vk(tk)))
+             if (nm(pm) === Om.e && hm.i[pm].meta.rot === am && Ym(Tm, fm, Am, im, Rm)) return (0, hm.k)((0, Om.Q)(am, !Jm(pm)))
```

#### 34. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L388-L389` → after: `L388-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L388-L389) · [Before (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L388-L389)

```diff
-           return (0, Xk.j)((0, ek.V)(ik, !1))
-         }(kk, Fk, Ik, Tk, ak) : (0, Xk.j)((0, ek.K)(lk, ak, function(kk, Fk, Ik, Tk, ik) {
+           return (0, hm.k)((0, Om.Q)(am, !1))
+         }(mm, Tm, fm, Am, Dm) : (0, hm.k)((0, Om.I)(wm, Dm, function(mm, Tm, fm, Am, am) {
```

#### 35. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L392` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L392) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L392)

```diff
-             const ik = null === (Tk = Xk.g[kk]) || void 0 === Tk ? void 0 : Tk.meta;
+             const am = null === (Am = hm.i[mm]) || void 0 === Am ? void 0 : Am.meta;
```

#### 36. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L400-L401` → after: `L400-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L400-L401) · [Before (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L400-L401)

```diff
-             const Lk = Xk.g[kk].name;
-             return (yk === Hk ? (0, ek.U)(Lk, ak, qk) : yk === Jk ? [(0, ek.L)(Lk, ak, qk)] : []).some((kk => {
+             const Rm = hm.i[mm].name;
+             return (xm === qm ? (0, Om.O)(Rm, Dm, im) : xm === jm ? [(0, Om.J)(Rm, Dm, im)] : []).some((mm => {
```

#### 37. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L405)

```diff
-           }(kk(Fk + ik, Ik, Tk + yk), ik, yk), qk = kk(Fk - yk, Ik, Tk - lk), Lk = sk(qk) === Hk && Xk.g[qk].meta.rot === ik, tk = 1 === ek.b[sk(kk(Fk, Ik - 1, Tk))] || -1 === ek.b[sk(kk(Fk, Ik + 1, Tk))];
+           }(mm(Tm + am, fm, Am + xm), am, xm), im = mm(Tm - xm, fm, Am - wm), Rm = nm(im) === qm && hm.i[im].meta.rot === am, pm = 1 === Om.c[nm(mm(Tm, fm - 1, Am))] || -1 === Om.c[nm(mm(Tm, fm + 1, Am))];
```

#### 38. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L415)

```diff
-         this.reshapeOffsets = vk, this.rootId = (0, Xk.j)(Sk.l)
+         this.reshapeOffsets = Zm, this.rootId = (0, hm.k)(zm.o)
```

#### 39. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L419)

```diff
-         return (null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.meta.rootId) === this.rootId
+         return (null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.meta.rootId) === this.rootId
```

#### 40. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L426` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L426) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L426)

```diff
-         return (0, Xk.j)((ak = lk.rot, null !== (qk = yk ? this.reshapedHalf(kk, Fk, Ik, Tk, lk) : this.placedHalf(kk, Fk, Ik, Tk, lk.rot)) ? (0, Sk.c)(Sk.l, ak, qk) : 1 === ak ? Sk.l : `${Sk.l}|meta|rot${ak}`));
+         return (0, hm.k)((Dm = wm.rot, null !== (im = xm ? this.reshapedHalf(mm, Tm, fm, Am, wm) : this.placedHalf(mm, Tm, fm, Am, wm.rot)) ? (0, zm.d)(zm.o, Dm, im) : 1 === Dm ? zm.o : `${zm.o}|meta|rot${Dm}`));
```

#### 41. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L445-L446)

```diff
-           const [yk, lk] = (0, Sk.j)(Tk.rot, ik), ak = Ok(kk, Fk + yk, Ik, Xk + lk);
-           if (null !== ak && ak.rot === Tk.rot && ak.half === Sk.p[ik]) return ik
+           const [xm, wm] = (0, zm.k)(Am.rot, am), Dm = bm(mm, Tm + xm, fm, hm + wm);
+           if (null !== Dm && Dm.rot === Am.rot && Dm.half === zm.q[am]) return am
```

#### 42. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L450)

```diff
-     }, new Gk.c];
+     }, new em.d];
```

#### 43. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L462)

```diff
-         if (Xk.handles(kk)) return null !== (Fk = null === (Ik = Xk.placedBy) || void 0 === Ik ? void 0 : Ik.call(Xk, kk)) && void 0 !== Fk ? Fk : null
+         if (hm.handles(mm)) return null !== (Tm = null === (fm = hm.placedBy) || void 0 === fm ? void 0 : fm.call(hm, mm)) && void 0 !== Tm ? Tm : null
```

#### 44. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L467)

```diff
-   38405: (kk, Fk, Ik) => {
+   38518: (mm, Tm, fm) => {
```

#### 45. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L469-L471` → after: `L469-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L469-L471) · [Before (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L469-L471)

```diff
-       c: () => Sk,
-       g: () => Kk,
-       h: () => Pk
+       d: () => zm,
+       f: () => Km,
+       i: () => Im
```

#### 46. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L473-L480` → after: `L473-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L473-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L473-L480) · [Before (L473-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L473-L480)

```diff
-     var Xk = Ik(9183),
-       Tk = Ik(9210),
-       ik = Ik(9267),
-       yk = Ik(38414),
-       lk = Ik(9264);
-     const ak = (0, yk.T)("pipe"),
-       qk = (0, yk.T)("tank"),
-       Lk = (0, yk.T)("port"),
+     var hm = fm(9141),
+       Am = fm(9159),
+       am = fm(9231),
+       xm = fm(38521),
+       wm = fm(9222);
+     const Dm = (0, xm.I)("pipe"),
+       im = (0, xm.I)("tank"),
+       Rm = (0, xm.I)("port"),
```

#### 47. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L484)

```diff
-       const Xk = new Set([ik.f, ik.d, tk, ...Fk, ...Ik, ...kk ? [yk.j] : []]);
+       const hm = new Set([am.e, am.c, pm, ...Tm, ...fm, ...mm ? [xm.i] : []]);
```

#### 48. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L491-L492` → after: `L491-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L491-L492) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L491-L492)

```diff
-         water: Zk(!0, ["Condenser"], ["Centrifuge", "Synthesizer", yk.c]),
-         cryo: Zk(!1, [yk.c], [])
+         water: Em(!0, ["Condenser"], ["Centrifuge", "Synthesizer", xm.e]),
+         cryo: Em(!1, [xm.e], [])
```

#### 49. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L503` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L503) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L503)

```diff
-       Hk = Tk.d.map((kk => wk[kk])),
+       qm = Am.f.map((mm => Ym[mm])),
```

#### 50. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L506)

```diff
-         return yk.z.findIndex((kk => {
+         return xm.x.findIndex((mm => {
```

#### 51. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L514` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L514) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L514)

```diff
-       const Ik = Xk.g[kk],
+       const fm = hm.i[mm],
```

#### 52. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L518-L520` → after: `L518-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L518-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L518-L520) · [Before (L518-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L518-L520)

```diff
-       if ((0, ik.i)(Tk)) return (0, yk.Q)(Ik.name) === Fk ? ak : null;
-       if (Tk === yk.j) return qk;
-       if (Tk === tk) return Ik.name.endsWith("|Water") ? Lk : null;
+       if ((0, am.k)(Am)) return (0, xm.F)(fm.name) === Tm ? Dm : null;
+       if (Am === xm.i) return im;
+       if (Am === pm) return fm.name.endsWith("|Water") ? Rm : null;
```

#### 53. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L522)

```diff
-       return (0, yk.T)(Zk.makers.has(Tk) ? "maker" : "user", [-ek, 0, -wk])
+       return (0, xm.I)(Em.makers.has(Am) ? "maker" : "user", [-Om, 0, -Ym])
```

#### 54. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L535)

```diff
-         return null !== Pk && lk.has(null !== (tk = null === (Zk = Xk.g[Hk]) || void 0 === Zk ? void 0 : Zk.meta.rootName) && void 0 !== tk ? tk : "") && !(0, yk.V)(ak, Pk, Jk[Lk])
+         return null !== Im && wm.has(null !== (pm = null === (Em = hm.i[qm]) || void 0 === Em ? void 0 : Em.meta.rootName) && void 0 !== pm ? pm : "") && !(0, xm.L)(Dm, Im, jm[Rm])
```

#### 55. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L540-L541` → after: `L540-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L540-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L540-L541) · [Before (L540-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L540-L541)

```diff
-       const Fk = Xk.g[kk];
-       return Fk ? (0, yk.Q)(Fk.name) : null
+       const Tm = hm.i[mm];
+       return Tm ? (0, xm.F)(Tm.name) : null
```

#### 56. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L550-L551` → after: `L550-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L550-L551) · [Before (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L550-L551)

```diff
-             for (const Ik of [!1, !0]) Qk.set((0, ik.j)(kk, Fk, Ik), {
-               qj: kk,
+             for (const fm of [!1, !0]) Qm.set((0, am.l)(mm, Tm, fm), {
+               Qo: mm,
```

#### 57. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L560)

```diff
-     }, ((kk, Fk) => [(0, ik.m)(Fk), Fk])));
+     }, ((mm, Tm) => [(0, am.o)(Tm), Tm])));
```

#### 58. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L567)

```diff
-         const wk = null !== (qk = null === (Lk = Xk.g[kk(Fk + Zk, Ik + jk, Tk + ek)]) || void 0 === Lk ? void 0 : Lk.name) && void 0 !== qk ? qk : "",
+         const Ym = null !== (im = null === (Rm = hm.i[mm(Tm + Em, fm + om, Am + Om)]) || void 0 === Rm ? void 0 : Rm.name) && void 0 !== im ? im : "",
```

#### 59. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L569)

```diff
-         return Hk ? Hk.qj === ik && Hk.full : (null !== (tk = function(kk) {
+         return qm ? qm.Qo === am && qm.full : (null !== (pm = function(mm) {
```

#### 60. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L571-L572` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L571-L572) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L571-L572)

```diff
-           return null !== (Fk = Vk.get(kk)) && void 0 !== Fk ? Fk : null
-         }(wk)) && void 0 !== tk ? tk : 0) > 0
+           return null !== (Tm = Jm.get(mm)) && void 0 !== Tm ? Tm : null
+         }(Ym)) && void 0 !== pm ? pm : 0) > 0
```

#### 61. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L584)

```diff
-         return ek.has(null !== (Fk = null === (Ik = Xk.g[kk]) || void 0 === Ik ? void 0 : Ik.meta.rootName) && void 0 !== Fk ? Fk : "")
+         return Om.has(null !== (Tm = null === (fm = hm.i[mm]) || void 0 === fm ? void 0 : fm.meta.rootName) && void 0 !== Tm ? Tm : "")
```

#### 62. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L588)

```diff
-         return (null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.meta.rootName) === ik.d ? ik.f : null
+         return (null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.meta.rootName) === am.c ? am.e : null
```

#### 63. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L592-L593` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L592-L593) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L592-L593)

```diff
-         const jk = null !== (Lk = null === (tk = Xk.g[lk]) || void 0 === tk ? void 0 : tk.name) && void 0 !== Lk ? Lk : "",
-           ek = qk || jk !== ik.f ? null !== (Zk = (0, yk.Q)(jk)) && void 0 !== Zk ? Zk : "water" : function(kk, Fk, Ik, Xk) {
+         const om = null !== (Rm = null === (pm = hm.i[wm]) || void 0 === pm ? void 0 : pm.name) && void 0 !== Rm ? Rm : "",
+           Om = im || om !== am.e ? null !== (Em = (0, xm.F)(om)) && void 0 !== Em ? Em : "water" : function(mm, Tm, fm, hm) {
```

#### 64. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L597)

```diff
-               return null !== tk && "port" !== tk.kind && (0, yk.V)(ak, tk, Jk[ik])
+               return null !== pm && "port" !== pm.kind && (0, xm.L)(Dm, pm, jm[am])
```

#### 65. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L606` → after: `L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L606) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L606)

```diff
-               jk && (0, yk.V)(ak, jk, Jk[qk]) && (ik |= 1 << qk)
+               om && (0, xm.L)(Dm, om, jm[im]) && (am |= 1 << im)
```

#### 66. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L613)

```diff
-         return (0, Xk.j)((0, ik.j)(ek, wk, Pk))
+         return (0, hm.k)((0, am.l)(Om, Ym, Im))
```

#### 67. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L617)

```diff
-   38169: (kk, Fk, Ik) => {
+   38254: (mm, Tm, fm) => {
```

#### 68. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L619-L620` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/241.js#L619-L620) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/241.js#L619-L620)

```diff
-       c: () => Xk,
-       f: () => ik
+       e: () => hm,
+       g: () => am
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/242.js` (31kiid.1299b0d6 → mpd96o.85ad4551)

- **File**: `bundles/bloxd.io/chunks/js/242.js` (727 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee)

#### 1. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L4)

```diff
-   39109: (kk, Fk, Ik) => {
+   39237: (mm, Tm, fm) => {
```

#### 2. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L9)

```diff
-       b: () => Xk
+       c: () => hm
```

#### 3. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L12)

```diff
-   39087: (kk, Fk, Ik) => {
+   39209: (mm, Tm, fm) => {
```

#### 4. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L15)

```diff
-       f: () => yk
+       d: () => xm
```

#### 5. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L17)

```diff
-     var Xk = Ik(34);
+     var hm = fm(31);
```

#### 6. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L25)

```diff
-       Tk !== kk && (Tk = kk, Xk.g.GL("replayViewer|videoExportChanged"))
+       Am !== mm && (Am = mm, hm.j.gp("replayViewer|videoExportChanged"))
```

#### 7. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L28)

```diff
-   39011: (kk, Fk, Ik) => {
+   39140: (mm, Tm, fm) => {
```

#### 8. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L30)

```diff
-       d: () => ik
+       c: () => am
```

#### 9. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L32-L33)

```diff
-     var Xk = Ik(34),
-       Tk = Ik(1894);
+     var hm = fm(31),
+       Am = fm(1928);
```

#### 10. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L40-L41` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L40-L41) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L40-L41)

```diff
-       const Xk = Tk.e.get("_tasks");
-       null !== Xk && void 0 !== Xk && Xk[Fk] && Tk.e.apply({
+       const hm = Am.b.get("_tasks");
+       null !== hm && void 0 !== hm && hm[Tm] && Am.b.apply({
```

#### 11. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L51)

```diff
-     Xk.g.subscribe("clientTaskProgress", (kk => {
+     hm.j.subscribe("clientTaskProgress", (mm => {
```

#### 12. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L55)

```diff
-   39102: (kk, Fk, Ik) => {
+   39229: (mm, Tm, fm) => {
```

#### 13. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L58-L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L59) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L58-L59)

```diff
-       h: () => Qk,
-       j: () => Pk
+       g: () => Im
```

#### 14. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L61-L64` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L61-L64) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L61-L64)

```diff
-     var Xk = Ik(4799),
-       Tk = Ik(2744),
-       ik = Ik(1844);
-     const yk = new Map(Object.entries(Xk.k).map((kk => {
+     var hm = fm(4741),
+       Am = fm(2813),
+       am = fm(1877);
+     const xm = new Map(Object.entries(hm.m).map((mm => {
```

#### 15. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L70)

```diff
-       return (0, ik.A)(kk).toFixed(1)
+       return (0, am.F)(mm).toFixed(1)
```

#### 16. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L74)

```diff
-       return `camera set by ${yk.get(kk[Fk+1])}: heading ${`${lk(kk[Fk+2])} -> ${lk(kk[Fk+4])}`} deg, pitch ${`${lk(kk[Fk+3])} -> ${lk(kk[Fk+5])}`} deg, at ${kk[Fk].toFixed(1)} ms`
+       return `camera set by ${xm.get(mm[Tm+1])}: heading ${`${wm(mm[Tm+2])} -> ${wm(mm[Tm+4])}`} deg, pitch ${`${wm(mm[Tm+3])} -> ${wm(mm[Tm+5])}`} deg, at ${mm[Tm].toFixed(1)} ms`
```

#### 17. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L78)

```diff
-         this.width = kk, this.St = Fk, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(kk * Fk)
+         this.width = mm, this.yp = Tm, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(mm * Tm)
```

#### 18. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L84)

```diff
-         return this.next = (this.next + 1) % this.St, this.size = Math.min(this.size + 1, this.St), Ik
+         return this.next = (this.next + 1) % this.yp, this.size = Math.min(this.size + 1, this.yp), fm
```

#### 19. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L88)

```diff
-           Fk = (this.next - this.size + this.St) % this.St;
+           Tm = (this.next - this.size + this.yp) % this.yp;
```

#### 20. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L90)

```diff
-           const Xk = (Fk + Ik) % this.St * this.width;
+           const hm = (Tm + fm) % this.yp * this.width;
```

#### 21. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L110)

```diff
-         this.frames = 0, this.looked = 0, this.idle = 0, this.iW = 0, this.pastLimit = 0, this.lockSkips = 0, this.iH = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+         this.frames = 0, this.looked = 0, this.idle = 0, this.Fs = 0, this.pastLimit = 0, this.lockSkips = 0, this.jq = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L113)

```diff
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.iW > 0 || this.dropped > 0 || this.cameraSets > 0
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.Fs > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 23. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L116)

```diff
-         return this.iW > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+         return this.Fs > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 24. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L126)

```diff
-             case Lk:
+             case Rm:
```

#### 25. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L128-L131` → after: `L128-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L128-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L128-L131) · [Before (L128-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L128-L131)

```diff
-             case jk:
-               return void Pk.iH++;
-             case Zk:
-               return Pk.lockSkips++, void(0 === ik && 0 === yk || kk.outlier(`lock skip dropped raw (${ek(ik)}, ${ek(yk)}) at ${wk(Xk)} ms`))
+             case om:
+               return void Im.jq++;
+             case Em:
+               return Im.lockSkips++, void(0 === am && 0 === xm || mm.outlier(`lock skip dropped raw (${Om(am)}, ${Om(xm)}) at ${Ym(hm)} ms`))
```

#### 26. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L135-L136` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L135-L136) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L135-L136)

```diff
-             Qk = `raw (${ek(ik)}, ${ek(yk)}) over ${wk(Tk)} ms, limit ${ek(xk)}, filter v (${Hk.toFixed(3)}, ${Jk.toFixed(3)}) px/ms, at ${wk(Xk)} ms`;
-           qk === tk ? (Pk.iW++, kk.outlier(`spike put right: ${Qk} -> turned (${ek(lk)}, ${ek(ak)})`)) : Kk ? (Pk.pastLimit++, kk.outlier(`kept past limit: ${Qk}`)) : Tk > 50 && (Pk.longFrames++, kk.remote || kk.outlier(`long frame: ${Qk}, turned in full`))
+             Qm = `raw (${Om(am)}, ${Om(xm)}) over ${Ym(Am)} ms, limit ${Om(Vm)}, filter v (${qm.toFixed(3)}, ${jm.toFixed(3)}) px/ms, at ${Ym(hm)} ms`;
+           im === pm ? (Im.Fs++, mm.outlier(`spike put right: ${Qm} -> turned (${Om(wm)}, ${Om(Dm)})`)) : Km ? (Im.pastLimit++, mm.outlier(`kept past limit: ${Qm}`)) : Am > 50 && (Im.longFrames++, mm.remote || mm.outlier(`long frame: ${Qm}, turned in full`))
```

#### 27. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L148)

```diff
-           yk[0] = kk.timeStamp, yk[1] = Ik, yk[2] = Xk, yk[3] = ik ? 1 : 0, this.events.push(yk), Tk >= 200 && (Fk.bigEvents++, this.eventOutlier(`big mousemove (${Ik}, ${Xk}) at ${wk(kk.timeStamp)} ms, lock ${ik?"eq":"free"}`))
+           xm[0] = mm.timeStamp, xm[1] = fm, xm[2] = hm, xm[3] = am ? 1 : 0, this.events.push(xm), Am >= 200 && (Tm.bigEvents++, this.eventOutlier(`big mousemove (${fm}, ${hm}) at ${Ym(mm.timeStamp)} ms, lock ${am?"ni":"free"}`))
```

#### 28. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L151)

```diff
-           (0, Tk.g)("look", `pointer lock ${kk?`gained (${kk.tagName.toLowerCase()})`:"lost"} at ${wk(performance.now())} ms`)
+           (0, Am.g)("look", `pointer lock ${mm?`gained (${mm.tagName.toLowerCase()})`:"lost"} at ${Ym(performance.now())} ms`)
```

#### 29. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L153)

```diff
-           (0, Tk.g)("look", `pointer lock request failed at ${wk(performance.now())} ms`)
+           (0, Am.g)("look", `pointer lock request failed at ${Ym(performance.now())} ms`)
```

#### 30. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L155` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L155) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L155)

```diff
-           (0, Tk.g)("look", `page ${document.visibilityState} at ${wk(performance.now())} ms`)
+           (0, Am.g)("look", `page ${document.visibilityState} at ${Ym(performance.now())} ms`)
```

#### 31. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L161-L162` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L161-L162) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L161-L162)

```diff
-             Ik = [`${kk.frames} frames (${kk.looked} looked, ${kk.idle} idle${"wasm"===this.client?`, ${kk.iH} carried`:""})`, `dt avg ${wk(Fk)} min ${wk(kk.dtMin)} max ${wk(kk.dtMax)}, ${kk.longFrames} long`, `${kk.events} mousemoves (max ${ek(kk.eventMax)} px, ${kk.bigEvents} b … [truncated]
-           kk.dropped > 0 && Ik.push(`${kk.dropped} doubled spike copies dropped`), kk.cameraSets > 0 && Ik.push(`${kk.cameraSets} camera sets`), kk.cameraSetsLost > 0 && Ik.push(`${kk.cameraSetsLost} camera set records lost`), kk.lost > 0 && Ik.push(`${kk.lost} records lost`), kk … [truncated]
+             fm = [`${mm.frames} frames (${mm.looked} looked, ${mm.idle} idle${"wasm"===this.client?`, ${mm.jq} carried`:""})`, `dt avg ${Ym(Tm)} min ${Ym(mm.dtMin)} max ${Ym(mm.dtMax)}, ${mm.longFrames} long`, `${mm.events} mousemoves (max ${Om(mm.eventMax)} px, ${mm.bigEvents} b … [truncated]
+           mm.dropped > 0 && fm.push(`${mm.dropped} doubled spike copies dropped`), mm.cameraSets > 0 && fm.push(`${mm.cameraSets} camera sets`), mm.cameraSetsLost > 0 && fm.push(`${mm.cameraSetsLost} camera set records lost`), mm.lost > 0 && fm.push(`${mm.lost} records lost`), mm … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L170)

```diff
-         (0, Tk.g)("look", `start: ${kk} client, dpr ${window.devicePixelRatio}, screen ${Ik.width}x${Ik.height}, pointer lock ${document.pointerLockElement?"eq":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
+         (0, Am.g)("look", `start: ${mm} client, dpr ${window.devicePixelRatio}, screen ${fm.width}x${fm.height}, pointer lock ${document.pointerLockElement?"ni":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
```

#### 33. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L191)

```diff
-         if (Fk.length >= Xk.e) {
+         if (Tm.length >= hm.b) {
```

#### 34. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L193)

```diff
-           for (let kk = Xk.e; kk + Xk.f <= Fk.length; kk += Xk.f) this.tally.cameraSets++, this.outlier(ak(Fk, kk))
+           for (let mm = hm.b; mm + hm.e <= Tm.length; mm += hm.e) this.tally.cameraSets++, this.outlier(Dm(Tm, mm))
```

#### 35. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L220)

```diff
-   38945: (kk, Fk, Ik) => {
+   39079: (mm, Tm, fm) => {
```

#### 36. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L222)

```diff
-       b: () => kI,
+       e: () => mf,
```

#### 37. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L224)

```diff
-       j: () => MF
+       g: () => FT
```

#### 38. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L226-L234` → after: `L226-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L226-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L226-L234) · [Before (L226-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L226-L234)

```diff
-     var Xk = Ik(3631),
-       Tk = Ik(149),
-       ik = Ik(187),
-       yk = Ik(633),
-       lk = Ik(41),
-       ak = Ik(2700),
-       qk = Ik(3702),
-       Lk = Ik(3682),
-       tk = Ik(1217);
+     var hm = fm(3672),
+       Am = fm(168),
+       am = fm(198),
+       xm = fm(658),
+       wm = fm(37),
+       Dm = fm(2760),
+       im = fm(3729),
+       Rm = fm(3716),
+       pm = fm(1235);
```

#### 39. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L239` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L239) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L239)

```diff
-           vqk: !0
+           Nim: !0
```

#### 40. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L241-L242` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L241-L242) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L241-L242)

```diff
-         this.callbacks = Fk, this.options = Ik, this.sIk = void 0, this.sessionId = void 0, this.kE = [], this.Eqk = !1, this.ee = !1, this.Oqk = void 0, this.Dv = 0, this.PTk = 0, this.nqk = (kk, Fk) => {
-           if (this.ee) return;
+         this.callbacks = Tm, this.options = fm, this.nfm = void 0, this.sessionId = void 0, this.Yk = [], this.Gim = !1, this.PO = !1, this.Xim = void 0, this.Rk = 0, this.KAm = 0, this.Pim = (mm, Tm) => {
+           if (this.PO) return;
```

#### 41. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L244)

```diff
-           this.Eqk ? this.Gqk(Ik, Fk) : this.kE.push({
+           this.Gim ? this.Him(fm, Tm) : this.Yk.push({
```

#### 42. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L249-L250` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L249-L250) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L249-L250)

```diff
-           this.ee || (this.ee = !0, Zk.delete(this), this.kE.length = 0, this.Oqk())
-         }, this.sIk = kk, this.sessionId = kk.sessionId, Zk.set(this, []), this.Oqk = this.pqk()
+           this.PO || (this.PO = !0, Em.delete(this), this.Yk.length = 0, this.Xim())
+         }, this.nfm = mm, this.sessionId = mm.sessionId, Em.set(this, []), this.Xim = this.yim()
```

#### 43. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L252-L253` → after: `L252-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L252-L253) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L252-L253)

```diff
-       uqk(kk) {
-         this.Oqk(), this.sIk = kk, this.sessionId = kk.sessionId, this.Dv = 0, this.PTk = 0, this.Oqk = this.pqk()
+       Cim(mm) {
+         this.Xim(), this.nfm = mm, this.sessionId = mm.sessionId, this.Rk = 0, this.KAm = 0, this.Xim = this.yim()
```

#### 44. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L256)

```diff
-         return this.PTk
+         return this.KAm
```

#### 45. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L258-L260` → after: `L258-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L258-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L258-L260) · [Before (L258-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L258-L260)

```diff
-       pqk() {
-         const kk = this.sIk.bJ("*", this.nqk);
-         return this.options.vqk && this.sIk.NJ(this.dispose), kk
+       yim() {
+         const mm = this.nfm.lV("*", this.Pim);
+         return this.options.Nim && this.nfm.tV(this.dispose), mm
```

#### 46. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L262)

```diff
-       Gqk(kk, Fk) {
+       Him(mm, Tm) {
```

#### 47. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L264)

```diff
-           (0, qk.ac)(kk) && (Fk = (0, qk.b)(kk, Lk.je.from(Fk)));
+           (0, im.rc)(mm) && (Tm = (0, im.e)(mm, Rm.XO.from(Tm)));
```

#### 48. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L267-L268)

```diff
-             if (this.callbacks.bqk) return void this.callbacks.bqk(kk, Fk);
-             throw new Error(`No onMessage handler registered for message id ${kk}`)
+             if (this.callbacks.Mim) return void this.callbacks.Mim(mm, Tm);
+             throw new Error(`No onMessage handler registered for message id ${mm}`)
```

#### 49. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L272)

```diff
-           this.callbacks.Rqk(`Error in onMessage ${kk} with payload ${JSON.stringify(Fk)}`, Ik)
+           this.callbacks.uim(`Error in onMessage ${mm} with payload ${JSON.stringify(Tm)}`, fm)
```

#### 50. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L274)

```diff
-           this.Dv++
+           this.Rk++
```

#### 51. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L277)

```diff
-       Uqk() {
+       Bim() {
```

#### 52. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L282-L284` → after: `L282-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L282-L284) · [Before (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L282-L284)

```diff
-           of this.kE) {
-           if (this.ee) break;
-           this.Gqk(kk, Fk)
+           of this.Yk) {
+           if (this.PO) break;
+           this.Him(mm, Tm)
```

#### 53. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L286)

```diff
-         this.kE.length = 0
+         this.Yk.length = 0
```

#### 54. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L289)

```diff
-         return this.ee
+         return this.PO
```

#### 55. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L291-L292` → after: `L291-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L291-L292) · [Before (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L291-L292)

```diff
-       Cqk() {
-         if (this.Eqk || this.ee) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
+       Lim() {
+         if (this.Gim || this.PO) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
```

#### 56. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L294-L296` → after: `L294-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L294-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L294-L296) · [Before (L294-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L294-L296)

```diff
-           bJ: (kk, Fk) => {
-             if (this.Eqk || this.ee) throw new Error("Trying to call onMessage after registration finished");
-             this.bJ(kk, Fk)
+           lV: (mm, Tm) => {
+             if (this.Gim || this.PO) throw new Error("Trying to call onMessage after registration finished");
+             this.lV(mm, Tm)
```

#### 57. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L299-L300` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L299-L300) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L299-L300)

```diff
-             if (this.ee) throw new Error("Cannot finish message registration after disposal");
-             this.Eqk = !0, this.Uqk()
+             if (this.PO) throw new Error("Cannot finish message registration after disposal");
+             this.Gim = !0, this.Bim()
```

#### 58. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L306)

```diff
-         null === (Ik = (Xk = this.callbacks).Nqk) || void 0 === Ik || Ik.call(Xk);
+         null === (fm = (hm = this.callbacks).vim) || void 0 === fm || fm.call(hm);
```

#### 59. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L312)

```diff
-         this.cqk(), (0, tk.E)(Fk) ? this.sIk.aE(kk, Fk) : this.sIk.send(kk, Fk)
+         this.tim(), (0, pm.x)(Tm) ? this.nfm.Lk(mm, Tm) : this.nfm.send(mm, Tm)
```

#### 60. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L314)

```diff
-       cqk() {
+       tim() {
```

#### 61. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L316)

```diff
-         (this.PTk++, 5 === ek++) && (null === (kk = (Fk = this.callbacks).Nqk) || void 0 === kk || kk.call(Fk), ek = 0)
+         (this.KAm++, 5 === Om++) && (null === (mm = (Tm = this.callbacks).vim) || void 0 === mm || mm.call(Tm), Om = 0)
```

#### 62. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L319)

```diff
-         this.dispose(), this.sIk.qJ()
+         this.dispose(), this.nfm.YV()
```

#### 63. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L322)

```diff
-         this.dispose(), this.sIk.leave()
+         this.dispose(), this.nfm.leave()
```

#### 64. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L326)

```diff
-     var wk = Ik(3646);
+     var Ym = fm(3689);
```

#### 65. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L330-L331` → after: `L330-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L330-L331) · [Before (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L330-L331)

```diff
-           Nqk: () => {
-             (0, lk.o)(!0) && (0, Xk.Fv)()
+           vim: () => {
+             (0, wm.l)(!0) && (0, hm.sZ)()
```

#### 66. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/242.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/242.js#L333)

```diff
-           Rqk: (kk, Fk) => {
+           uim: (mm, Tm) => {
```
