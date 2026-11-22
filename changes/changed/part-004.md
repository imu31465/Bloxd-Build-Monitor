# Changed — Bundle Modifications Report (Part 004 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `4 / 47` (**303** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 003](part-003.md) · [Part 005 →](part-005.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/128.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/128.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf)

#### 3. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L16-L48` → after: `L29-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L29-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/128.js#L29-L140) · [Before (L16-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/128.js#L16-L48)

```diff
-   6481: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       forgetShaderPackActiveHint: () => sQ,
-       isOtherApiVersion: () => iQ,
-       isShaderPackActive: () => pQ,
-       isShaderPackChangePending: () => SQ,
-       markShaderPackChangePending: () => CQ,
-       pageShaderPackValidationVersion: () => WQ,
-       reconcileStoredShaderPackHint: () => OQ,
-       removeShaderPack: () => GQ,
-       replaceShaderPack: () => tQ,
-       saveShaderPack: () => AQ,
-       shaderPackNeedsCheck: () => RQ,
-       storedPackOutcome: () => cQ,
-       storedShaderPackFiles: () => bQ,
-       toStoredShaderPack: () => HQ
- ... (17 more removed lines; see GitHub link above)
+   6421: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => mk
+     });
+     var Dk = ik(1021),
+       fk = ik.n(Dk),
+       Sk = ik(6396),
+       bk = ik(1172),
+       rk = ik(6393),
+       Pk = ik(1066);
+ 
+     function mk(kk) {
+       let {
+         selected: ek,
+         onSelect: ik,
+         imageUrl: Dk
+ ... (96 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L52-L67` → after: `L144-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L144-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/128.js#L144-L341) · [Before (L52-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/128.js#L52-L67)

```diff
- 
-     function bQ(QQ) {
-       return Object.keys(QQ.files).map((FQ => ({
-         path: FQ,
-         source: QQ.files[FQ]
-       })))
-     }
-     let YQ = Promise.resolve();
- 
-     function xQ(QQ) {
-       const FQ = YQ.then(QQ);
-       return YQ = FQ.catch((() => {})), FQ
-     }
- 
-     function AQ(QQ, FQ) {
-       return xQ((() => eQ(QQ, FQ)))
+   },
+   6393: (kk, ek, ik) => {
+     ik.d(ek, {
+       B: () => Ik,
+       D: () => Wk,
+       E: () => Uk,
+       F: () => lk,
+       I: () => Vk,
+       L: () => Mk,
+       M: () => uk,
+       N: () => Hk,
+       O: () => ak,
+       P: () => Ek,
+       S: () => bk,
+       V: () => hk,
+       Y: () => Pk,
+ ... (182 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L71-L173` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/128.js#L345) · [Before (L71-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/128.js#L71-L173)

```diff
-       return xQ((async () => JSON.stringify(await (0, kQ.f)()) === JSON.stringify(QQ) && (null === FQ ? (await MQ(), !0) : eQ(FQ, wQ))))
-     }
-     async function eQ(QQ, FQ) {
-       const wQ = await oQ.h.setItem(kQ.d, QQ);
-       return wQ && rQ(QQ, FQ), wQ
-     }
-     async function MQ() {
-       await oQ.h.removeItem(kQ.d), oQ.i.removeItem(DQ.d)
-     }
- 
-     function GQ() {
-       return xQ(MQ)
-     }
- 
-     function pQ(QQ, FQ) {
-       return "active" === cQ(QQ, FQ).kind
- ... (87 more removed lines; see GitHub link above)
+       return kk instanceof fk.d && kk.errorMessageForUser ? kk.errorMessageForUser : ek(ik)
```

#### 6. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L178-L179` → after: `L350-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L350-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/128.js#L350-L374) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/128.js#L178-L179)

```diff
-       b: () => DQ,
-       f: () => oQ,
+       e: () => Sk
+     });
+     var Dk = ik(60),
+       fk = ik(38);
+ 
+     function Sk(kk, ek) {
+       var ik;
+       const [Sk, bk] = (0, Dk.useState)(null !== (ik = fk.f.getItem(kk)) && void 0 !== ik ? ik : ek);
+       return [Sk, ek => {
+         fk.f.setItem(kk, ek), bk(ek)
+       }]
+     }
+   },
+   6396: (kk, ek, ik) => {
+     ik.d(ek, {
+       C: () => Sk,
+ ... (9 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L185-L239` → after: `L379-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L379-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/128.js#L379-L396) · [Before (L185-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/128.js#L185-L239)

```diff
-       r: () => mQ,
-       v: () => HQ
-     });
-     const LQ = 5;
- 
-     function qQ(QQ) {
-       return QQ === LQ
-     }
-     const oQ = 262144,
-       DQ = 256,
-       kQ = 256;
- 
-     function vQ(QQ) {
-       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
-       const FQ = [];
-       for (const [wQ, LQ] of Object.entries(QQ)) {
- ... (39 more removed lines; see GitHub link above)
+       t: () => Ck,
+       v: () => Pk,
+       x: () => fk,
+       y: () => Lk
+     });
+     const Dk = ["forest", "desert", "water", "night", "cave"];
+     const fk = {
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+           height: 1080
+         },
+         thumb: {
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/128.js` (Changed code · before: `L241-L350` → after: `L398-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edfR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a902da99aada7d3ea6b9a0551b78ef0d042e14a088ebc56afb353f86de0e7edf) · [After (L398-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/128.js#L398-L439) · [Before (L241-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/128.js#L241-L350)

```diff
-         of QQ) wQ += FQ.encode(LQ).byteLength;
-       return wQ
-     }
- 
-     function bQ(QQ) {
-       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
-       if (QQ.length > kQ) return `A file path is over ${kQ} characters.`;
-       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
-       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
-     }
-     const YQ = /^(.*)\[rot\[([1-4])$/;
- 
-     function xQ(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const LQ = new Map;
-       FQ.forEach(((QQ, FQ) => {
- ... (94 more removed lines; see GitHub link above)
+       },
+       Sk = ["popular", "updated", "newest"],
+       bk = 3,
+       rk = 32,
+       Pk = 300;
+ 
+     function mk(kk, ek) {
+       return kk.slice(0, ek).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const Mk = 64,
+       Kk = 512,
+       xk = 18e5;
+ 
+     function nk(kk) {
+       const ek = kk,
+         ik = null === ek || void 0 === ek ? void 0 : ek.files;
+ ... (26 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/129.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/129.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15)

#### 1. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/129.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/129.js#L2)

```diff
- export const ids = [128, 129, 131];
+ export const ids = [129];
```

#### 2. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L4` → after: `L4-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L4-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/129.js#L4-L237) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/129.js#L4)

```diff
-   6429: (QQ, FQ, wQ) => {
+   40661: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       ShaderPackCategory: () => Ik
+     });
+     var Dk = ik(60),
+       fk = ik(1496),
+       Sk = ik(1410),
+       bk = ik(1479),
+       rk = ik(1172),
+       Pk = ik(99),
+       mk = ik(22),
+       Mk = ik(1614),
+       Kk = ik(6451),
+       xk = ik(280),
+       nk = ik(6498),
+       Uk = ik(6493),
+ ... (218 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L6-L8` → after: `L239-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L239-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/129.js#L239-L263) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/129.js#L6-L8)

```diff
-       e: () => LQ.h,
-       i: () => qQ,
-       m: () => LQ.m
+       B: () => Ik,
+       D: () => Wk,
+       E: () => Uk,
+       F: () => lk,
+       I: () => Vk,
+       L: () => Mk,
+       M: () => uk,
+       N: () => Hk,
+       O: () => ak,
+       P: () => Ek,
+       S: () => bk,
+       V: () => hk,
+       Y: () => Pk,
+       ab: () => rk,
+       c: () => pk,
+       eb: () => Qk,
+ ... (9 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L10-L14` → after: `L265-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L265-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/129.js#L265-L438) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/129.js#L10-L14)

```diff
-     var LQ = wQ(6414);
-     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((FQ => ({
-       strict: QQ,
-       program: FQ
-     })))))
+     var Dk = ik(6396),
+       fk = ik(165),
+       Sk = ik(4505);
+     const bk = "/shader-packs",
+       rk = `${bk}/publish`;
+ 
+     function Pk(kk) {
+       return `${bk}/${encodeURIComponent(kk)}`
+     }
+     let mk = null;
+ 
+     function Mk(kk) {
+       mk = kk
+     }
+ 
+     function Kk() {
+ ... (158 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L16-L151` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/129.js#L440) · [Before (L16-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/129.js#L16-L151)

```diff
-   6481: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       forgetShaderPackActiveHint: () => sQ,
-       isOtherApiVersion: () => iQ,
-       isShaderPackActive: () => pQ,
-       isShaderPackChangePending: () => SQ,
-       markShaderPackChangePending: () => CQ,
-       pageShaderPackValidationVersion: () => WQ,
-       reconcileStoredShaderPackHint: () => OQ,
-       removeShaderPack: () => GQ,
-       replaceShaderPack: () => tQ,
-       saveShaderPack: () => AQ,
-       shaderPackNeedsCheck: () => RQ,
-       storedPackOutcome: () => cQ,
-       storedShaderPackFiles: () => bQ,
-       toStoredShaderPack: () => HQ
- ... (120 more removed lines; see GitHub link above)
+   6396: (kk, ek, ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L153-L192` → after: `L442-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L442-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/129.js#L442-L451) · [Before (L153-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/129.js#L153-L192)

```diff
-       d: () => qQ,
-       f: () => oQ
-     });
-     var LQ = wQ(27);
-     const qQ = "shaderPack";
-     async function oQ() {
-       var QQ;
-       let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (QQ = await LQ.h.getItem(qQ, FQ)) && void 0 !== QQ ? QQ : null
-     }
-   },
-   6460: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       loadShaderPackTextures: () => DQ,
-       shaderPackTextures: () => kQ
-     });
- ... (24 more removed lines; see GitHub link above)
+       C: () => Sk,
+       F: () => rk,
+       G: () => bk,
+       H: () => Dk,
+       K: () => xk,
+       N: () => Mk,
+       Q: () => Yk,
+       R: () => Kk,
+       V: () => mk,
+       e: () => Uk,
```

#### 7. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L198-L199` → after: `L456-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L456-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/129.js#L456-L459) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/129.js#L198-L199)

```diff
-       r: () => mQ,
-       v: () => HQ
+       t: () => Ck,
+       v: () => Pk,
+       x: () => fk,
+       y: () => Lk
```

#### 8. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L201-L252` → after: `L461-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L461-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/129.js#L461-L473) · [Before (L201-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/129.js#L201-L252)

```diff
-     const LQ = 5;
- 
-     function qQ(QQ) {
-       return QQ === LQ
-     }
-     const oQ = 262144,
-       DQ = 256,
-       kQ = 256;
- 
-     function vQ(QQ) {
-       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
-       const FQ = [];
-       for (const [wQ, LQ] of Object.entries(QQ)) {
-         if ("string" !== typeof LQ) return `${wQ} isn't text.`;
-         FQ.push({
-           path: wQ,
- ... (36 more removed lines; see GitHub link above)
+     const Dk = ["forest", "desert", "water", "night", "cave"];
+     const fk = {
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+           height: 1080
+         },
+         thumb: {
+           width: 640,
+           height: 360
```

#### 9. `bundles/bloxd.io/chunks/js/129.js` (Changed code · before: `L254-L363` → after: `L475-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-15fdfb9dcde36dc4ffc9dac97475d62bfd3a97319bb5250162bea44784266e15) · [After (L475-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/129.js#L475-L516) · [Before (L254-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/129.js#L254-L363)

```diff
-         of QQ) wQ += FQ.encode(LQ).byteLength;
-       return wQ
-     }
- 
-     function bQ(QQ) {
-       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
-       if (QQ.length > kQ) return `A file path is over ${kQ} characters.`;
-       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
-       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
-     }
-     const YQ = /^(.*)\[rot\[([1-4])$/;
- 
-     function xQ(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const LQ = new Map;
-       FQ.forEach(((QQ, FQ) => {
- ... (94 more removed lines; see GitHub link above)
+       },
+       Sk = ["popular", "updated", "newest"],
+       bk = 3,
+       rk = 32,
+       Pk = 300;
+ 
+     function mk(kk, ek) {
+       return kk.slice(0, ek).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const Mk = 64,
+       Kk = 512,
+       xk = 18e5;
+ 
+     function nk(kk) {
+       const ek = kk,
+         ik = null === ek || void 0 === ek ? void 0 : ek.files;
+ ... (26 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/130.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/130.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a)

#### 1. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L2)

```diff
- export const ids = [130, 131];
+ export const ids = [130, 135, 136];
```

#### 2. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L4)

```diff
-   6429: (QQ, FQ, wQ) => {
+   40066: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L6-L8)

```diff
-       e: () => LQ.h,
-       i: () => qQ,
-       m: () => LQ.m
+       e: () => Kk,
+       installListedShaderPack: () => Mk
```

#### 4. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L10-L14` → after: `L9-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L9-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L9-L82) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L10-L14)

```diff
-     var LQ = wQ(6414);
-     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((FQ => ({
-       strict: QQ,
-       program: FQ
-     })))))
+     var Dk = ik(6396),
+       fk = ik(4965),
+       Sk = ik(1177),
+       bk = ik(6451),
+       rk = ik(4961),
+       Pk = ik(6498),
+       mk = ik(6493);
+     async function Mk(kk) {
+       const ek = await (0, bk.loadPageShaderPackCompiler)();
+       if (null === ek) return {
+         kind: "failed",
+         reason: "compiler"
+       };
+       const ik = await Kk(kk, ek);
+       return "failed" === ik.kind ? ik : await (0, Pk.saveShaderPack)(ik.stored, ek) ? ((0, Pk.markShaderPackChangePending)(), ik) : {
+         kind: "failed",
+ ... (58 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L16` → after: `L84-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L84-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L84-L180) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L16)

```diff
-   38741: (QQ, FQ, wQ) => {
+   40861: (kk, ek, ik) => {
+     ik.d(ek, {
+       followListingUpdates: () => xk
+     });
+     var Dk = ik(197),
+       fk = ik(22),
+       Sk = ik(1459),
+       bk = ik(1104),
+       rk = ik(6451),
+       Pk = ik(4961),
+       mk = ik(40066),
+       Mk = ik(6498);
+     const Kk = ["apiVersion", "invalid", "errors"];
+     async function xk(kk, ek) {
+       const ik = await bk.userContextManager.getCurrentUserContext(),
+         xk = await Sk.b.getShaderPackVersions(ik, [ek.packId]),
+ ... (81 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L18-L21` → after: `L182-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L182-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L182-L195) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L18-L21)

```diff
-       ShaderPackPage: () => vQ,
-       harnessShaderPackMode: () => bQ,
-       setHarnessUrlShaderPack: () => HQ,
-       shaderPackPage: () => uQ
+       forgetShaderPackActiveHint: () => Fk,
+       isOtherApiVersion: () => jk,
+       isShaderPackActive: () => Yk,
+       isShaderPackChangePending: () => Ak,
+       markShaderPackChangePending: () => Ck,
+       pageShaderPackValidationVersion: () => sk,
+       reconcileStoredShaderPackHint: () => Vk,
+       removeShaderPack: () => yk,
+       replaceShaderPack: () => wk,
+       saveShaderPack: () => Hk,
+       shaderPackNeedsCheck: () => dk,
+       storedPackOutcome: () => Lk,
+       storedShaderPackFiles: () => xk,
+       toStoredShaderPack: () => Kk
```

#### 7. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L23-L33` → after: `L197-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L197-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L197-L213) · [Before (L23-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L23-L33)

```diff
-     var LQ = wQ(96),
-       qQ = wQ(27),
-       oQ = (wQ(3325), wQ(6429), wQ(3318)),
-       DQ = wQ(6485);
-     wQ(6460);
-     const kQ = {
-       status: "none"
-     };
-     class vQ {
-       constructor() {
-         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
+     var Dk = ik(4965),
+       fk = ik(4961),
+       Sk = ik(38),
+       bk = ik(3419),
+       rk = ik(6505),
+       Pk = ik(6477);
+     const mk = "shaderPackChangePending";
+     let Mk = null;
+ 
+     function Kk(kk, ek, ik) {
+       return {
+         manifest: kk.manifest,
+         files: (0, Dk.t)(kk.files),
+         validation: ek,
+         ...ik && {
+           listing: ik
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L35-L42` → after: `L215-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L215-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L215-L274) · [Before (L35-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L35-L42)

```diff
-       preload() {
-         if (null === this.stored) {
-           if ((0, oQ.h)(LQ.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), mQ().then((QQ => {
-             QQ && qQ.i.removeItem(oQ.d)
-           })), this.stored;
-           this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
-         }
-         return this.stored
+     }
+ 
+     function xk(kk) {
+       return Object.keys(kk.files).map((ek => ({
+         path: ek,
+         source: kk.files[ek]
+       })))
+     }
+     let nk = Promise.resolve();
+ 
+     function Uk(kk) {
+       const ek = nk.then(kk);
+       return nk = ek.catch((() => {})), ek
+     }
+ 
+     function Hk(kk, ek) {
+ ... (44 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L44-L90` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L276) · [Before (L44-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L44-L90)

```diff
-       prefetchHint() {
-         return (0, oQ.f)(LQ.featureFlags.settings.canUseShaderPacks)
-       }
-       async loadActive() {
-         const QQ = await this.load();
-         return "active" === QQ.status ? QQ.pack : null
-       }
-       load() {
-         return this.pagePack ??= this.read().catch((QQ => (console.error("Failed to load the shader pack", QQ), kQ))).then((QQ => (this.resolved ??= QQ, QQ))), this.pagePack
-       }
-       hasNone() {
-         var QQ;
-         return "none" === (null === (QQ = this.resolved) || void 0 === QQ ? void 0 : QQ.status)
-       }
-       block(QQ) {
-         this.resolved = {
- ... (31 more removed lines; see GitHub link above)
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L93` → after: `L279-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L279-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L279-L312) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L93)

```diff
-       return null
+       Sk.g.setItem(mk, performance.timeOrigin)
+     }
+ 
+     function Ak() {
+       return Sk.g.getItem(mk) === performance.timeOrigin
+     }
+ 
+     function jk(kk) {
+       return !(0, fk.g)(kk.manifest.apiVersion)
+     }
+ 
+     function sk(kk) {
+       return Mk ??= kk.jF((0, Pk.shaderPackTextures)()), Mk
+     }
+ 
+     function dk(kk, ek) {
+ ... (18 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L96-L109` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L315) · [Before (L96-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L96-L109)

```diff
-   6485: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ,
-       f: () => oQ
-     });
-     var LQ = wQ(27);
-     const qQ = "shaderPack";
-     async function oQ() {
-       var QQ;
-       let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (QQ = await LQ.h.getItem(qQ, FQ)) && void 0 !== QQ ? QQ : null
-     }
-   },
-   6460: (QQ, FQ, wQ) => {
+   6477: (kk, ek, ik) => {
```

#### 12. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L114` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L320) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L114)

```diff
-     var LQ = wQ(6414);
+     var Dk = ik(4965);
```

#### 13. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L119` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L325) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L119)

```diff
-       return oQ ??= Promise.all([wQ.e(70), wQ.e(199)]).then((() => wQ(39913))).then((QQ => {
+       return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
```

#### 14. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L125` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L331) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L125)

```diff
-         return qQ ??= (0, LQ.i)(wQ, oQ, FQ), qQ
+         return fk ??= (0, Dk.h)(ik, Sk, ek), fk
```

#### 15. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L134` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L340) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L134)

```diff
-   6414: (QQ, FQ, wQ) => {
+   6493: (kk, ek, ik) => {
```

#### 16. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L137` → after: `L343-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L343-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L343-L432) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L137)

```diff
-       f: () => oQ,
+       c: () => rk
+     });
+     var Dk = ik(6498),
+       fk = ik(6477),
+       Sk = ik(115);
+     const bk = 100;
+     async function rk(kk, ek) {
+       var ik;
+       let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ik = navigator.gpu) && void 0 !== ik ? ik : null;
+       const bk = kk.B5(ek, (0, fk.shaderPackTextures)());
+       if (bk.errors.length > 0) return mk(kk, bk.errors, bk.offInStrict);
+       const rk = await async function(kk) {
+         if (!kk) return null;
+         try {
+           const ek = await (0, Sk.t)(kk);
+           return ek ? await ek.requestDevice() : null
+ ... (74 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L143-L144` → after: `L437-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L437-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L437-L440) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L143-L144)

```diff
-       r: () => mQ,
-       v: () => HQ
+       t: () => Ck,
+       v: () => Pk,
+       x: () => fk,
+       y: () => Lk
```

#### 18. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L146-L197` → after: `L442-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L442-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L442-L454) · [Before (L146-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L146-L197)

```diff
-     const LQ = 5;
- 
-     function qQ(QQ) {
-       return QQ === LQ
-     }
-     const oQ = 262144,
-       DQ = 256,
-       kQ = 256;
- 
-     function vQ(QQ) {
-       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
-       const FQ = [];
-       for (const [wQ, LQ] of Object.entries(QQ)) {
-         if ("string" !== typeof LQ) return `${wQ} isn't text.`;
-         FQ.push({
-           path: wQ,
- ... (36 more removed lines; see GitHub link above)
+     const Dk = ["forest", "desert", "water", "night", "cave"];
+     const fk = {
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+           height: 1080
+         },
+         thumb: {
+           width: 640,
+           height: 360
```

#### 19. `bundles/bloxd.io/chunks/js/130.js` (Changed code · before: `L199-L308` → after: `L456-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342aR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8f0f1e057e1be787e4d6d02f477e2613d5d3a87410b4b8031a99b4909004342a) · [After (L456-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/130.js#L456-L497) · [Before (L199-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/130.js#L199-L308)

```diff
-         of QQ) wQ += FQ.encode(LQ).byteLength;
-       return wQ
-     }
- 
-     function bQ(QQ) {
-       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
-       if (QQ.length > kQ) return `A file path is over ${kQ} characters.`;
-       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
-       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
-     }
-     const YQ = /^(.*)\[rot\[([1-4])$/;
- 
-     function xQ(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const LQ = new Map;
-       FQ.forEach(((QQ, FQ) => {
- ... (94 more removed lines; see GitHub link above)
+       },
+       Sk = ["popular", "updated", "newest"],
+       bk = 3,
+       rk = 32,
+       Pk = 300;
+ 
+     function mk(kk, ek) {
+       return kk.slice(0, ek).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const Mk = 64,
+       Kk = 512,
+       xk = 18e5;
+ 
+     function nk(kk) {
+       const ek = kk,
+         ik = null === ek || void 0 === ek ? void 0 : ek.files;
+ ... (26 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/131.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/131.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430)

#### 1. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L4` → after: `L4-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L4-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L4-L89) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L4)

```diff
-   6460: (QQ, FQ, wQ) => {
+   41328: (kk, ek, ik) => {
+     ik.d(ek, {
+       startHarnessShaderPack: () => Kk
+     });
+     var Dk = ik(6396),
+       fk = ik(4965),
+       Sk = ik(6484),
+       bk = ik(6451),
+       rk = ik(4961),
+       Pk = ik(38787),
+       mk = ik(6477),
+       Mk = ik(6493);
+     async function Kk(kk, ek) {
+       const {
+         stored: ik,
+         info: Kk
+ ... (70 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L6-L7` → after: `L91-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L91-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L91-L104) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L6-L7)

```diff
-       loadShaderPackTextures: () => DQ,
-       shaderPackTextures: () => kQ
+       forgetShaderPackActiveHint: () => Fk,
+       isOtherApiVersion: () => jk,
+       isShaderPackActive: () => Yk,
+       isShaderPackChangePending: () => Ak,
+       markShaderPackChangePending: () => Ck,
+       pageShaderPackValidationVersion: () => sk,
+       reconcileStoredShaderPackHint: () => Vk,
+       removeShaderPack: () => yk,
+       replaceShaderPack: () => wk,
+       saveShaderPack: () => Hk,
+       shaderPackNeedsCheck: () => dk,
+       storedPackOutcome: () => Lk,
+       storedShaderPackFiles: () => xk,
+       toStoredShaderPack: () => Kk
```

#### 3. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L9-L11` → after: `L106-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L106-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L106-L152) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L9-L11)

```diff
-     var LQ = wQ(6414);
-     let qQ = null,
-       oQ = null;
+     var Dk = ik(4965),
+       fk = ik(4961),
+       Sk = ik(38),
+       bk = ik(3419),
+       rk = ik(6505),
+       Pk = ik(6477);
+     const mk = "shaderPackChangePending";
+     let Mk = null;
+ 
+     function Kk(kk, ek, ik) {
+       return {
+         manifest: kk.manifest,
+         files: (0, Dk.t)(kk.files),
+         validation: ek,
+         ...ik && {
+           listing: ik
+ ... (31 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L14-L21` → after: `L155-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L155-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L155-L184) · [Before (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L14-L21)

```diff
-       return oQ ??= Promise.all([wQ.e(70), wQ.e(199)]).then((() => wQ(39913))).then((QQ => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: FQ,
-           textureNameToIndex: wQ,
-           textureAnimationData: oQ
-         } = QQ;
-         return qQ ??= (0, LQ.i)(wQ, oQ, FQ), qQ
-       })), oQ
+       return Uk(pk)
+     }
+ 
+     function Yk(kk, ek) {
+       return "active" === Lk(kk, ek).kind
+     }
+ 
+     function Lk(kk, ek) {
+       var ik;
+       return null === kk ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : jk(kk) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) || kk.validation.fromRecheck ? null === ek ? {
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L25-L26` → after: `L188-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L188-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L188-L221) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L25-L26)

```diff
-       if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return qQ
+       Sk.g.setItem(mk, performance.timeOrigin)
+     }
+ 
+     function Ak() {
+       return Sk.g.getItem(mk) === performance.timeOrigin
+     }
+ 
+     function jk(kk) {
+       return !(0, fk.g)(kk.manifest.apiVersion)
+     }
+ 
+     function sk(kk) {
+       return Mk ??= kk.jF((0, Pk.shaderPackTextures)()), Mk
+     }
+ 
+     function dk(kk, ek) {
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L29` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L224) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L29)

```diff
-   6414: (QQ, FQ, wQ) => {
+   6493: (kk, ek, ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L32` → after: `L227-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L227-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L227-L316) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L32)

```diff
-       f: () => oQ,
+       c: () => rk
+     });
+     var Dk = ik(6498),
+       fk = ik(6477),
+       Sk = ik(115);
+     const bk = 100;
+     async function rk(kk, ek) {
+       var ik;
+       let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ik = navigator.gpu) && void 0 !== ik ? ik : null;
+       const bk = kk.B5(ek, (0, fk.shaderPackTextures)());
+       if (bk.errors.length > 0) return mk(kk, bk.errors, bk.offInStrict);
+       const rk = await async function(kk) {
+         if (!kk) return null;
+         try {
+           const ek = await (0, Sk.t)(kk);
+           return ek ? await ek.requestDevice() : null
+ ... (74 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L38-L39` → after: `L321-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L321-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L321-L324) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L38-L39)

```diff
-       r: () => mQ,
-       v: () => HQ
+       t: () => Ck,
+       v: () => Pk,
+       x: () => fk,
+       y: () => Lk
```

#### 9. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L41-L127` → after: `L326-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L326-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L326-L330) · [Before (L41-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L41-L127)

```diff
-     const LQ = 5;
- 
-     function qQ(QQ) {
-       return QQ === LQ
-     }
-     const oQ = 262144,
-       DQ = 256,
-       kQ = 256;
- 
-     function vQ(QQ) {
-       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
-       const FQ = [];
-       for (const [wQ, LQ] of Object.entries(QQ)) {
-         if ("string" !== typeof LQ) return `${wQ} isn't text.`;
-         FQ.push({
-           path: wQ,
- ... (71 more removed lines; see GitHub link above)
+     const Dk = ["forest", "desert", "water", "night", "cave"];
+     const fk = {
+         full: {
+           width: 3840,
+           height: 2160
```

#### 10. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L129-L135` → after: `L332-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L332-L334) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L129-L135)

```diff
-         kQ = new Set(qQ.map((QQ => {
-           let [FQ] = QQ;
-           return DQ(FQ)?.root ?? FQ
-         }))),
-         vQ = (QQ, wQ) => {
-           const LQ = QQ.replace(/_?0$/, "");
-           return (FQ[wQ]?.numAnimStates ?? 0) > 1 && !kQ.has(LQ) ? LQ : QQ
+         large: {
+           width: 1920,
+           height: 1080
```

#### 11. `bundles/bloxd.io/chunks/js/131.js` (Changed code · before: `L137-L203` → after: `L336-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d66a62ddfd3b656aef7bbc61e993a002e9260ef98c60ef5b5f6bb5a25313b430) · [After (L336-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/131.js#L336-L381) · [Before (L137-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/131.js#L137-L203)

```diff
-         mQ = new Map;
-       for (const [YQ, AQ] of qQ) mQ.set(AQ, vQ(DQ(YQ)?.root ?? YQ, AQ));
-       const uQ = qQ.reduce(((QQ, FQ) => {
-           let [, wQ] = FQ;
-           return Math.max(QQ, wQ + 1)
-         }), 0),
-         HQ = Array.from({
-           length: uQ
-         }, ((QQ, FQ) => ({
-           id: FQ + 1,
-           rotation: 0
-         }))),
-         bQ = new Map,
-         xQ = new Map;
-       for (const [YQ, AQ] of qQ) {
-         const QQ = DQ(YQ),
- ... (51 more removed lines; see GitHub link above)
+         thumb: {
+           width: 640,
+           height: 360
+         }
+       },
+       Sk = ["popular", "updated", "newest"],
+       bk = 3,
+       rk = 32,
+       Pk = 300;
+ 
+     function mk(kk, ek) {
+       return kk.slice(0, ek).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const Mk = 64,
+       Kk = 512,
+       xk = 18e5;
+ ... (30 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/132.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/132.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f)

#### 1. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L2)

```diff
- export const ids = [132];
+ export const ids = [132, 135, 136];
```

#### 2. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L4-L6)

```diff
-   6438: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       loadPageShaderPackCompiler: () => bF
+   6436: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L8-L23` → after: `L8-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L8-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L8-L55) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L8-L23)

```diff
-     var LQ = {};
-     wQ.r(LQ), wQ.d(LQ, {
-       RqQ: () => qQ,
-       tQQ: () => oQ,
-       default: () => JQ,
-       OqQ: () => DQ,
-       sqQ: () => kQ,
-       initSync: () => hQ,
-       wH: () => vQ,
-       uLQ: () => mQ,
-       rqQ: () => uQ,
-       IqQ: () => HQ,
-       vN: () => bQ,
-       UqQ: () => YQ,
-       kN: () => xQ,
-       NqQ: () => AQ
+     var Dk = ik(4959),
+       fk = ik(1066);
+     const Sk = {
+       strict: "shaderPack:variantStrict",
+       nonStrict: "shaderPack:variantNonStrict",
+       terrain: "shaderPack:variantTerrain",
+       liquid: "shaderPack:variantLiquid",
+       model: "shaderPack:variantModel"
+     };
+ 
+     function bk(kk) {
+       let {
+         diagnostics: ek,
+         more: ik = 0,
+         t: bk
+       } = kk;
+ ... (32 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L25-L142` → after: `L57-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L57-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L57-L174) · [Before (L25-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L25-L142)

```diff
-     class qQ {
-       static __wrap(QQ) {
-         const FQ = Object.create(qQ.prototype);
-         return FQ.__wbg_ptr = QQ, eQ.register(FQ, FQ.__wbg_ptr, FQ), FQ
-       }
-       __destroy_into_raw() {
-         const QQ = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, eQ.unregister(this), QQ
-       }
-       free() {
-         const QQ = this.__destroy_into_raw();
-         XQ.Vic3(QQ, 0)
-       }
-       get errorsJson() {
-         let QQ, FQ;
-         try {
- ... (102 more removed lines; see GitHub link above)
+     var Dk = ik(60),
+       fk = ik(1021),
+       Sk = ik.n(fk),
+       bk = ik(4888),
+       rk = ik(1327),
+       Pk = ik(1033),
+       mk = ik(1172),
+       Mk = ik(4965),
+       Kk = ik(4961),
+       xk = ik(3131);
+     const nk = 33554432,
+       Uk = 1024,
+       Hk = 65536;
+     async function wk(kk) {
+       const ek = (0, xk.l)(kk);
+       if (ek) {
+ ... (102 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L144-L234` → after: `L176-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L176-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L176-L243) · [Before (L144-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L144-L234)

```diff
-         const mQ = UQ(QQ, XQ.OR0q),
-           uQ = fQ,
-           HQ = IQ(FQ, XQ.OR0q),
-           bQ = fQ,
-           YQ = UQ(wQ, XQ.OR0q),
-           xQ = fQ,
-           AQ = IQ(LQ, XQ.OR0q),
-           tQ = fQ,
-           eQ = function(QQ, FQ) {
-             const wQ = FQ(1 * QQ.length, 1) >>> 0;
-             return RQ().set(QQ, wQ / 1), fQ = QQ.length, wQ
-           }(qQ, XQ.OR0q),
-           MQ = fQ,
-           GQ = XQ.YbmF(mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ);
-         var kQ = GQ[0],
-           vQ = GQ[1];
- ... (75 more removed lines; see GitHub link above)
+         return new TextDecoder("utf-8", {
+           fatal: !0
+         }).decode(kk)
+       } catch (ik) {
+         throw new xk.c("shaderPack:loadNotUtf8", {
+           path: ek
+         }, {
+           cause: ik
+         })
+       }
+     }
+     var yk = ik(4959),
+       Yk = ik(4970),
+       Lk = ik(1066);
+ 
+     function Ck(kk) {
+ ... (52 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L236-L292` → after: `L245-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L245-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L245-L257) · [Before (L236-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L236-L292)

```diff
-         __proto__: null,
-         IlkP: {
-           __proto__: null,
-           V2Ln: function(QQ, FQ) {
-             return MQ(Error(SQ(QQ, FQ)))
-           },
-           CzgM: function(QQ) {
-             return null === OQ(QQ)
-           },
-           h9k8: function(QQ) {
-             return "string" === typeof OQ(QQ)
-           },
-           hidU: function(QQ, FQ) {
-             const wQ = OQ(FQ),
-               LQ = "string" === typeof wQ ? wQ : void 0;
-             var qQ, oQ = void 0 === (qQ = LQ) || null === qQ ? 0 : function(QQ, FQ, wQ) {
- ... (41 more removed lines; see GitHub link above)
+         loading: ik,
+         error: Sk,
+         setError: bk,
+         onFiles: async function(ik) {
+           if (!rk.current) {
+             rk.current = !0, fk(!0), bk(null);
+             try {
+               await kk(await wk(ik))
+             } catch (Dk) {
+               Dk instanceof xk.c ? bk((0, yk.j)(ek, Dk.translationKey, Dk.params)) : (console.error("Failed to load the shader pack", Dk), bk(ek("shaderPack:unexpectedError")))
+             } finally {
+               rk.current = !1, fk(!1)
+             }
```

#### 7. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L297-L306` → after: `L262-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L262-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L262-L310) · [Before (L297-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L297-L306)

```diff
-     Symbol.dispose && (qQ.prototype[Symbol.dispose] = qQ.prototype.free);
-     const eQ = "undefined" === typeof FinalizationRegistry ? {
-       register: () => {},
-       unregister: () => {}
-     } : new FinalizationRegistry((QQ => XQ.Vic3(QQ, 1)));
- 
-     function MQ(QQ) {
-       rQ === sQ.length && sQ.push(sQ.length + 1);
-       const FQ = rQ;
-       return rQ = sQ[FQ], sQ[FQ] = QQ, FQ
+   },
+   6498: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       forgetShaderPackActiveHint: () => Fk,
+       isOtherApiVersion: () => jk,
+       isShaderPackActive: () => Yk,
+       isShaderPackChangePending: () => Ak,
+       markShaderPackChangePending: () => Ck,
+       pageShaderPackValidationVersion: () => sk,
+       reconcileStoredShaderPackHint: () => Vk,
+       removeShaderPack: () => yk,
+       replaceShaderPack: () => wk,
+       saveShaderPack: () => Hk,
+       shaderPackNeedsCheck: () => dk,
+       storedPackOutcome: () => Lk,
+       storedShaderPackFiles: () => xk,
+ ... (33 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L310-L314` → after: `L314-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L314-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L314-L329) · [Before (L310-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L310-L314)

```diff
-       QQ >>>= 0;
-       const wQ = CQ(),
-         LQ = [];
-       for (let qQ = QQ; qQ < QQ + 4 * FQ; qQ += 4) LQ.push(NQ(wQ.getUint32(qQ, !0)));
-       return LQ
+       return Uk((() => lk(kk, ek)))
+     }
+ 
+     function wk(kk, ek, ik) {
+       return Uk((async () => JSON.stringify(await (0, rk.f)()) === JSON.stringify(kk) && (null === ek ? (await pk(), !0) : lk(ek, ik))))
+     }
+     async function lk(kk, ek) {
+       const ik = await Sk.e.setItem(rk.c, kk);
+       return ik && uk(kk, ek), ik
+     }
+     async function pk() {
+       await Sk.e.removeItem(rk.c), Sk.f.removeItem(bk.e)
+     }
+ 
+     function yk() {
+       return Uk(pk)
```

#### 9. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L318-L320` → after: `L333-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L333-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L333-L359) · [Before (L318-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L318-L320)

```diff
-       return QQ >>>= 0, RQ().subarray(QQ / 1, QQ / 1 + FQ)
-     }
-     let cQ = null;
+       return "active" === Lk(kk, ek).kind
+     }
+ 
+     function Lk(kk, ek) {
+       var ik;
+       return null === kk ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : jk(kk) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) || kk.validation.fromRecheck ? null === ek ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : dk(kk, ek) ? {
+         kind: "blocked",
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L323` → after: `L362-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L362-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L362-L374) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L323)

```diff
-       return (null === cQ || !0 === cQ.buffer.detached || void 0 === cQ.buffer.detached && cQ.buffer !== XQ.memory.buffer) && (cQ = new DataView(XQ.memory.buffer)), cQ
+       Sk.g.setItem(mk, performance.timeOrigin)
+     }
+ 
+     function Ak() {
+       return Sk.g.getItem(mk) === performance.timeOrigin
+     }
+ 
+     function jk(kk) {
+       return !(0, fk.g)(kk.manifest.apiVersion)
+     }
+ 
+     function sk(kk) {
+       return Mk ??= kk.jF((0, Pk.shaderPackTextures)()), Mk
```

#### 11. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L327-L336` → after: `L378-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L378-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L378-L386) · [Before (L327-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L327-L336)

```diff
-       return function(QQ, FQ) {
-         zQ += FQ, zQ >= KQ && (TQ = new TextDecoder("utf-8", {
-           ignoreBOM: !0,
-           fatal: !0
-         }), TQ.decode(), zQ = FQ);
-         return TQ.decode(RQ().subarray(QQ, QQ + FQ))
-       }(QQ >>> 0, FQ)
-     }
-     let iQ = null;
-     let WQ = null;
+       var ik;
+       return (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.headerVersion) !== sk(ek)
+     }
+ 
+     function Vk(kk) {
+       return Uk((async () => {
+         uk(await (0, rk.f)(!0), kk)
+       }))
+     }
```

#### 12. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L339-L347` → after: `L389-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L389-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L389-L392) · [Before (L339-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L339-L347)

```diff
-       return null !== WQ && 0 !== WQ.byteLength || (WQ = new Uint8Array(XQ.memory.buffer)), WQ
-     }
- 
-     function OQ(QQ) {
-       return sQ[QQ]
-     }
-     let sQ = new Array(1024).fill(void 0);
-     sQ.push(void 0, null, !0, !1);
-     let rQ = sQ.length;
+       return Uk((async () => {
+         Sk.f.removeItem(bk.e)
+       }))
+     }
```

#### 13. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L350-L369` → after: `L395-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L395-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L395-L401) · [Before (L350-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L350-L369)

```diff
-       const wQ = FQ(4 * QQ.length, 4) >>> 0;
-       return (null !== iQ && 0 !== iQ.byteLength || (iQ = new Uint32Array(XQ.memory.buffer)), iQ).set(QQ, wQ / 4), fQ = QQ.length, wQ
-     }
- 
-     function UQ(QQ, FQ) {
-       const wQ = FQ(4 * QQ.length, 4) >>> 0,
-         LQ = CQ();
-       for (let qQ = 0; qQ < QQ.length; qQ++) LQ.setUint32(wQ + 4 * qQ, MQ(QQ[qQ]), !0);
-       return fQ = QQ.length, wQ
-     }
- 
-     function NQ(QQ) {
-       const FQ = OQ(QQ);
-       return function(QQ) {
-         QQ < 1028 || (sQ[QQ] = rQ, rQ = QQ)
-       }(QQ), FQ
- ... (4 more removed lines; see GitHub link above)
+       Yk(kk, ek) ? Sk.f.setItem(bk.e, !0) : Sk.f.removeItem(bk.e)
+     }
+   },
+   6477: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       loadShaderPackTextures: () => bk,
+       shaderPackTextures: () => rk
```

#### 14. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L371-L445` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L403) · [Before (L371-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L371-L445)

```diff
-     TQ.decode();
-     const KQ = 2146435072;
-     let zQ = 0;
-     const lQ = new TextEncoder;
-     "encodeInto" in lQ || (lQ.encodeInto = function(QQ, FQ) {
-       const wQ = lQ.encode(QQ);
-       return FQ.set(wQ), {
-         read: QQ.length,
-         written: wQ.length
-       }
-     });
-     let jQ, aQ, XQ, fQ = 0;
- 
-     function VQ(QQ, FQ) {
-       return aQ = QQ, XQ = QQ.exports, jQ = FQ, cQ = null, iQ = null, WQ = null, XQ.F2Nn(), XQ
-     }
- ... (59 more removed lines; see GitHub link above)
+     var Dk = ik(4965);
```

#### 15. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L450-L451` → after: `L408-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L408-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L408-L438) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L450-L451)

```diff
-       return PQ ? Promise.resolve(PQ) : (ZQ || (ZQ = async function() {
-         let QQ;
+       return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: ek,
+           textureNameToIndex: ik,
+           textureAnimationData: Sk
+         } = kk;
+         return fk ??= (0, Dk.h)(ik, Sk, ek), fk
+       })), Sk
+     }
+ 
+     function rk() {
+       if (null === fk) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return fk
+     }
+   },
+   6493: (kk, ek, ik) => {
+ ... (15 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L453` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L440-L441) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L453)

```diff
-           QQ = await (0, EQ.R)(new wQ.U(wQ(6453)), (0, nQ.e)("bloxd_wasm_shader_pack"))
+           const ek = await (0, Sk.t)(kk);
+           return ek ? await ek.requestDevice() : null
```

#### 17. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L455` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L443) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L455)

```diff
-           throw new gQ((0, EQ.X)(FQ), FQ)
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", ek), null
```

#### 18. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L457-L498` → after: `L445-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L445-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L445-L450) · [Before (L457-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L457-L498)

```diff
-         try {
-           await JQ({
-             module_or_path: QQ
-           })
-         } catch (FQ) {
-           throw new gQ("instantiate", FQ)
-         }
-         return PQ = LQ, PQ
-       }(), ZQ.then(void 0, (() => {
-         ZQ = null
-       }))), ZQ)
-     }
-     var BQ = wQ(6467);
- 
-     function dQ(QQ) {
-       let [FQ, wQ, LQ, qQ] = QQ;
- ... (26 more removed lines; see GitHub link above)
+       }(Dk);
+       if (!rk) return null;
+       let Pk = !1;
+       rk.lost.then((() => {
+         Pk = !0
+       }));
```

#### 19. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L500` → after: `L452-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L452-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L452-L471) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L500)

```diff
-         return FQ()
+         const ek = await Promise.all(bk.validationModules.map((ek => async function(kk, ek, ik) {
+           ek.pushErrorScope("validation");
+           const Dk = ek.createShaderModule({
+               code: ik.code
+             }),
+             fk = ek.popErrorScope(),
+             {
+               messages: Sk
+             } = await Dk.getCompilationInfo(),
+             bk = Sk.filter((kk => "error" === kk.type)).map((ek => kk.mapValidationMessage(ik, ek))),
+             rk = await fk;
+           rk && 0 === bk.length && bk.push({
+             file: null,
+             line: 0,
+             message: rk.message,
+             variants: [ik.key]
+ ... (4 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L502-L509` → after: `L473-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L473-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L473-L483) · [Before (L502-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L502-L509)

```diff
-         throw wQ instanceof WebAssembly.RuntimeError && oF.add(QQ), wQ
-       }
-     }
- 
-     function kF(QQ) {
-       let FQ = qF.get(QQ);
-       if (!FQ) {
-         let wQ, LQ;
+         return console.error("Couldn't validate the shader pack on WebGPU.", Mk), null
+       } finally {
+         rk.destroy()
+       }
+     }
+     async function Pk(kk, ek) {
+       var ik;
+       if (!(0, Dk.shaderPackNeedsCheck)(kk, ek) || (0, Dk.isOtherApiVersion)(kk)) return kk;
+       const fk = await rk(ek, (0, Dk.storedShaderPackFiles)(kk));
+       if (!fk) return kk;
+       const Sk = !1 === (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) && !kk.validation.fromRecheck,
```

#### 21. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L511-L664` → after: `L485-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L485-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L485-L494) · [Before (L511-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L511-L664)

```diff
-           tQQ: (FQ, wQ) => DF(QQ, (() => function(QQ, FQ, wQ) {
-             const LQ = QQ.tQQ(FQ.map((QQ => QQ.path)), FQ.map((QQ => QQ.source)), ...wF(wQ), wQ.aliases.map((QQ => QQ.name)), wQ.aliases.map((QQ => QQ.texture)), wQ.aliases.map((QQ => QQ.kind)));
-             let qQ = !1;
-             try {
-               const QQ = LQ.validationModuleCodes,
-                 FQ = Array.from(LQ.validationModuleKeys, ((FQ, wQ) => ({
-                   key: (0, BQ.l)(FQ),
-                   code: QQ[wQ]
-                 }))),
-                 wQ = {
-                   errors: QF(LQ.errorsJson),
-                   offInStrict: QF(LQ.offInStrictJson),
-                   variants: (0, BQ.g)(LQ),
-                   validationModules: FQ,
-                   features: LQ.features
-                 };
- ... (138 more removed lines; see GitHub link above)
+           ...kk,
+           validation: Sk ? fk : {
+             ...fk,
+             fromRecheck: !0
+           }
+         };
+       return await (0, Dk.replaceShaderPack)(kk, bk, ek) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), bk
+     }
+ 
+     function mk(kk, ek, ik) {
```

#### 22. `bundles/bloxd.io/chunks/js/132.js` (Changed code · before: `L666-L752` → after: `L496-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1fR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b974de3787d04c0098fcc64814ba9044aff61ba65b5c844e7791fdc1e1138c1f) · [After (L496-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/132.js#L496-L501) · [Before (L666-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/132.js#L666-L752)

```diff
-         strict: QQ >= FQ,
-         program: LQ.d[QQ % FQ]
-       }
-     }
- 
-     function MQ(QQ) {
-       return Number(QQ.strict) * LQ.d.length + LQ.d.indexOf(QQ.program)
-     }
- 
-     function GQ(QQ) {
-       return "" === QQ ? [] : QQ.split(" ")
-     }
- 
-     function pQ(QQ) {
-       const FQ = {
-         variantFlags: new Uint8Array(qQ),
- ... (71 more removed lines; see GitHub link above)
+         headerVersion: (0, Dk.pageShaderPackValidationVersion)(kk),
+         ok: 0 === ek.length,
+         errors: ek.slice(0, bk),
+         moreErrors: Math.max(0, ek.length - bk),
+         offInStrict: ik
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/133.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/133.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934)

#### 1. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L4-L9` → after: `L4-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L4-L23) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L4-L9)

```diff
-   35943: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => kQ,
-       e: () => mQ,
-       h: () => DQ,
-       k: () => HQ
+   6451: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       loadPageShaderPackCompiler: () => ne
+     });
+     var Dk = {};
+     ik.r(Dk), ik.d(Dk, {
+       BDk: () => fk,
+       B5: () => Sk,
+       default: () => Tk,
+       cDk: () => bk,
+       TDk: () => rk,
+       initSync: () => ck,
+       pK: () => Pk,
+       uik: () => mk,
+       oDk: () => Mk,
+       ZDk: () => Kk,
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L11-L13` → after: `L25-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L25-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L25-L103) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L11-L13)

```diff
-     var LQ = wQ(35929),
-       qQ = wQ(5);
-     const oQ = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
+     class fk {
+       static __wrap(kk) {
+         const ek = Object.create(fk.prototype);
+         return ek.__wbg_ptr = kk, lk.register(ek, ek.__wbg_ptr, ek), ek
+       }
+       __destroy_into_raw() {
+         const kk = this.__wbg_ptr;
+         return this.__wbg_ptr = 0, lk.unregister(this), kk
+       }
+       free() {
+         const kk = this.__destroy_into_raw();
+         tk.yxVu(kk, 0)
+       }
+       get errorsJson() {
+         let kk, ek;
+         try {
+ ... (63 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L15-L18` → after: `L105-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L105-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L105-L122) · [Before (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L15-L18)

```diff
-     function DQ(QQ) {
-       if (QQ instanceof WebAssembly.RuntimeError) return !0;
-       const FQ = QQ instanceof Error ? QQ.stack : void 0;
-       return "string" === typeof FQ && oQ.test(FQ)
+     function Sk(kk, ek, ik, Dk, Sk, bk, rk) {
+       const Pk = Ik(kk, tk.ohRF),
+         mk = Xk,
+         Mk = Ik(ek, tk.ohRF),
+         Kk = Xk,
+         xk = Ik(ik, tk.ohRF),
+         nk = Xk,
+         Uk = qk(Dk, tk.ohRF),
+         Hk = Xk,
+         wk = Ik(Sk, tk.ohRF),
+         lk = Xk,
+         pk = Ik(bk, tk.ohRF),
+         yk = Xk,
+         Yk = Ik(rk, tk.ohRF),
+         Lk = Xk,
+         Ck = tk.jRro(Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk);
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L21-L28` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L125-L128) · [Before (L21-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L21-L28)

```diff
-     function kQ(QQ, FQ, wQ) {
-       var qQ;
-       const DQ = QQ instanceof Error ? QQ.name : "thrown",
-         kQ = (QQ instanceof Error && null !== (qQ = QQ.stack) && void 0 !== qQ ? qQ : "").split("\n").filter((QQ => oQ.test(QQ))).slice(0, 8).map((QQ => QQ.trim())),
-         vQ = null === FQ ? "wasm memory unknown" : `wasm memory ${Math.round(FQ/2**20)} MB`,
-         mQ = null === wQ.panic ? "" : `, panic: ${(0,LQ.k)(wQ.panic)}`,
-         uQ = `${DQ}: ${QQ instanceof Error?QQ.message:String(QQ)}`;
-       return `${(0,LQ.o)(wQ.kind,wQ.refusedBytes)} ${uQ} (${vQ})${mQ}${kQ.length>0?` | ${kQ.join(" < ")}`:""}`
+     function bk() {
+       const kk = tk.ef4m();
+       var ek = yk(kk[0], kk[1]);
+       return tk.DXat(kk[0], 4 * kk[1], 4), ek
```

#### 5. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L32-L41` → after: `L131-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L131-L134) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L32-L41)

```diff
-     function mQ(QQ) {
-       var FQ;
-       let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(QQ instanceof Error) || !vQ.test(QQ.message)) return {};
-       if (!("detached" in wQ)) return {
-         arrayBufferDetached: "absent"
-       };
-       return {
-         arrayBufferDetached: (0, qQ.P)(null === (FQ = (0, qQ.K)(wQ, "detached")) || void 0 === FQ ? void 0 : FQ.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
-       }
+     function rk() {
+       const kk = tk.lHky();
+       var ek = yk(kk[0], kk[1]);
+       return tk.DXat(kk[0], 4 * kk[1], 4), ek
```

#### 6. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L45-L50` → after: `L137-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L137-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L137-L142) · [Before (L45-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L45-L50)

```diff
-     function HQ(QQ) {
-       let FQ = "[object Object]";
-       try {
-         FQ = String(QQ)
-       } catch {}
-       if ("[object Object]" !== FQ) return FQ;
+     function Pk() {
+       tk.JzMG()
+     }
+ 
+     function mk(kk, ek, ik, Dk, fk) {
+       let Sk, bk;
```

#### 7. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L52-L55` → after: `L144-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L144-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L144-L163) · [Before (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L52-L55)

```diff
-         var wQ, LQ;
-         return null !== (wQ = null === (LQ = JSON.stringify(QQ)) || void 0 === LQ ? void 0 : LQ.slice(0, uQ)) && void 0 !== wQ ? wQ : FQ
-       } catch {
-         return FQ
+         const mk = Ik(kk, tk.ohRF),
+           Mk = Xk,
+           Kk = qk(ek, tk.ohRF),
+           xk = Xk,
+           nk = Ik(ik, tk.ohRF),
+           Uk = Xk,
+           Hk = qk(Dk, tk.ohRF),
+           wk = Xk,
+           lk = function(kk, ek) {
+             const ik = ek(1 * kk.length, 1) >>> 0;
+             return dk().set(kk, ik / 1), Xk = kk.length, ik
+           }(fk, tk.ohRF),
+           pk = Xk,
+           yk = tk.yY7q(mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk);
+         var rk = yk[0],
+           Pk = yk[1];
+ ... (4 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L75-L76` → after: `L167-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L167-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L167-L174) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L75-L76)

```diff
-     function HQ(QQ) {
-       return QQ.pathname.slice(QQ.pathname.lastIndexOf("/") + 1)
+     function Mk() {
+       let kk, ek;
+       try {
+         const ik = tk.B2tr();
+         return kk = ik[0], ek = ik[1], Ak(ik[0], ik[1])
+       } finally {
+         tk.DXat(kk, ek, 1)
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L79` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L177-L178) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L79)

```diff
-     function bQ() {
+     function Kk(kk) {
+       let ek, ik;
```

#### 10. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L81-L85` → after: `L180-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L180-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L180-L186) · [Before (L81-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L81-L85)

```diff
-         if ("undefined" === typeof localStorage) return null;
-         const QQ = JSON.parse(localStorage.getItem(mQ) ?? "[]");
-         return Array.isArray(QQ) ? QQ.filter((QQ => "string" === typeof QQ)) : []
-       } catch (QQ) {
-         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", QQ), null
+         const Sk = tk.L0Ce(kk);
+         var Dk = Sk[0],
+           fk = Sk[1];
+         if (Sk[3]) throw Dk = 0, fk = 0, zk(Sk[2]);
+         return ek = Dk, ik = fk, Ak(Dk, fk)
+       } finally {
+         tk.DXat(ek, ik, 1)
```

#### 11. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L105` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L191) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L105)

```diff
-       return pQ && !cQ
+       return tk.FCRf() >>> 0
```

#### 12. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L107-L126` → after: `L193-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L193-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L193-L200) · [Before (L107-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L107-L126)

```diff
-     class SQ {
-       worker = null;
-       failed = !1;
-       constructor() {
-         if (CQ()) try {
-           this.worker = WQ(), YQ(eQ, this.worker, ["error", () => {
-             this.failed = !0
-           }])
-         } catch {
-           this.stop()
-         }
-       }
-       take() {
-         const QQ = this.worker;
-         if (this.worker = null, null !== QQ && this.failed) throw YQ(tQ, QQ, []), new Error("it did not run");
-         return QQ
- ... (4 more removed lines; see GitHub link above)
+ 
+     function nk() {
+       let kk, ek;
+       try {
+         const ik = tk.qO95();
+         return kk = ik[0], ek = ik[1], Ak(ik[0], ik[1])
+       } finally {
+         tk.DXat(kk, ek, 1)
```

#### 13. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L129-L176` → after: `L203-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L203-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L203-L217) · [Before (L129-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L129-L176)

```diff
-     class iQ {
-       decoded;
-       worker;
-       reject;
-       constructor(QQ, FQ, wQ, LQ, oQ) {
-         try {
-           this.worker = oQ?.take() ?? WQ()
-         } catch (mQ) {
-           throw cQ = !0, new Error(`The zstd decoder's worker did not start: ${(0,kQ.d)(mQ)}`)
-         }
-         const DQ = this.worker;
-         this.decoded = (0, qQ.h)(((FQ, qQ) => {
-           this.reject = qQ;
-           const oQ = (QQ, FQ) => {
-             YQ(eQ, DQ, [QQ, FQ])
-           };
- ... (32 more removed lines; see GitHub link above)
+ 
+     function Uk(kk, ek) {
+       let ik, Dk;
+       try {
+         const bk = Ik(kk, tk.ohRF),
+           rk = Xk,
+           Pk = qk(ek, tk.ohRF),
+           mk = Xk,
+           Mk = tk.GrdO(bk, rk, Pk, mk);
+         var fk = Mk[0],
+           Sk = Mk[1];
+         if (Mk[3]) throw fk = 0, Sk = 0, zk(Mk[2]);
+         return ik = fk, Dk = Sk, Ak(fk, Sk)
+       } finally {
+         tk.DXat(ik, Dk, 1)
```

#### 14. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L178-L179` → after: `L219-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L219-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L219-L230) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L178-L179)

```diff
-       terminate() {
-         YQ(tQ, this.worker, [])
+     }
+ 
+     function Hk(kk) {
+       let ek, ik;
+       try {
+         const Sk = tk.RLBX(pk(kk));
+         var Dk = Sk[0],
+           fk = Sk[1];
+         if (Sk[3]) throw Dk = 0, fk = 0, zk(Sk[2]);
+         return ek = Dk, ik = fk, Ak(Dk, fk)
+       } finally {
+         tk.DXat(ek, ik, 1)
```

#### 15. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L184-L196` → after: `L235-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L235-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L235-L237) · [Before (L184-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L184-L196)

```diff
-       if (globalThis.Worker !== xQ) throw new Error("Worker is not the one the page loaded with");
-       return new Worker(new URL(wQ.p + wQ.u(65), wQ.b), {
-         name: "wasmZstdDecoder",
-         type: "module"
-       })
-     }
-     const RQ = Reflect.apply,
-       OQ = ArrayBuffer,
-       sQ = "undefined" === typeof Response ? void 0 : Response,
-       rQ = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
-       IQ = function() {
-         let QQ;
-         void 0 !== rQ && new rQ({
+       return {
+         __proto__: null,
+         k3P0: {
```

#### 16. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L198-L233` → after: `L239-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L239-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L239-L255) · [Before (L198-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L198-L233)

```diff
-           start(FQ) {
-             const {
-               enqueue: wQ,
-               close: LQ,
-               error: qQ
-             } = Object.getPrototypeOf(FQ);
-             QQ = {
-               enqueue: wQ,
-               close: LQ,
-               error: qQ
-             }
-           }
-         }, {
-           __proto__: null
-         });
-         return QQ
- ... (20 more removed lines; see GitHub link above)
+           wygH: function(kk, ek) {
+             return pk(Error(Ak(kk, ek)))
+           },
+           Hwtb: function(kk) {
+             return null === Vk(kk)
+           },
+           Nsse: function(kk) {
+             return "string" === typeof Vk(kk)
+           },
+           fM67: function(kk, ek) {
+             const ik = Vk(ek),
+               Dk = "string" === typeof ik ? ik : void 0;
+             var fk, Sk = void 0 === (fk = Dk) || null === fk ? 0 : function(kk, ek, ik) {
+                 if (void 0 === ik) {
+                   const ik = hk.encode(kk),
+                     Dk = ek(ik.length, 1) >>> 0;
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L235-L242` → after: `L257-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L257-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L257-L264) · [Before (L235-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L235-L242)

```diff
-               }, {
-                 __proto__: null
-               }),
-               wQ = new sQ(FQ, {
-                 __proto__: null,
-                 headers: {
-                   __proto__: null,
-                   "Content-Type": "application/wasm"
+                 let Dk = kk.length,
+                   fk = ek(Dk, 1) >>> 0;
+                 const Sk = dk();
+                 let bk = 0;
+                 for (; bk < Dk; bk++) {
+                   const ek = kk.charCodeAt(bk);
+                   if (ek > 127) break;
+                   Sk[fk + bk] = ek
```

#### 18. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L244-L327` → after: `L266-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L266-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L266-L292) · [Before (L244-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L244-L327)

```diff
-               });
-             return {
-               controller: QQ,
-               compiled: (0, vQ.hb)((0, vQ.J)((0, vQ.wb)(wQ)))
-             }
-           } catch (FQ) {
-             throw new Error(`${QQ} could not be streamed into a compile: ${(0,kQ.d)(FQ)}`)
-           }
-         }(QQ),
-         {
-           enqueue: YQ,
-           close: xQ,
-           error: AQ
-         } = IQ,
-         tQ = QQ => {
-           try {
- ... (68 more removed lines; see GitHub link above)
+                 if (bk !== Dk) {
+                   0 !== bk && (kk = kk.slice(bk)), fk = ik(fk, Dk, Dk = bk + 3 * kk.length, 1) >>> 0;
+                   const ek = dk().subarray(fk + bk, fk + Dk);
+                   bk += hk.encodeInto(kk, ek).written, fk = ik(fk, Dk, bk, 1) >>> 0
+                 }
+                 return Xk = bk, fk
+               }(Dk, tk.ohRF, tk.LMB8),
+               bk = Xk;
+             Ck().setInt32(kk + 4, bk, !0), Ck().setInt32(kk + 0, Sk, !0)
+           },
+           jLqx: function(kk, ek) {
+             throw new Error(Ak(kk, ek))
+           },
+           jPUq: function(kk, ek) {
+             return Vk(kk).charCodeAt(ek >>> 0)
+           },
+ ... (11 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L348-L350` → after: `L304-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L304-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L304-L333) · [Before (L348-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L348-L350)

```diff
-       try {
-         (0, vQ.hb)(QQ.cancel())
-       } catch {}
+       uk === Fk.length && Fk.push(Fk.length + 1);
+       const ek = uk;
+       return uk = Fk[ek], Fk[ek] = kk, ek
+     }
+ 
+     function yk(kk, ek) {
+       kk >>>= 0;
+       const ik = Ck(),
+         Dk = [];
+       for (let fk = kk; fk < kk + 4 * ek; fk += 4) Dk.push(zk(ik.getUint32(fk, !0)));
+       return Dk
+     }
+ 
+     function Yk(kk, ek) {
+       return kk >>>= 0, dk().subarray(kk / 1, kk / 1 + ek)
+     }
+ ... (14 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L357-L416` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L343) · [Before (L357-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L357-L416)

```diff
-       return lQ ??= function() {
-         const QQ = new Map,
-           FQ = "bloxd_wasm_webgpu:5006327,bloxd_wasm_webgl:5369983,bloxd_wasm_webgl1:4770278,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3672186";
-         for (const wQ of FQ?.split(",") ?? []) {
-           const [FQ = "", LQ] = wQ.split(":"), qQ = Number(LQ);
-           Number.isInteger(qQ) && qQ > 0 && QQ.set(FQ, qQ)
-         }
-         return QQ
-       }(), lQ.get(QQ)
-     }
-     async function aQ(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const LQ = jQ(QQ.name);
-       if (void 0 === LQ) return XQ(await fQ(QQ, FQ, wQ), "cold-wasm");
-       const oQ = UQ ? new SQ : null;
-       let DQ;
- ... (44 more removed lines; see GitHub link above)
+       return Fk[kk]
```

#### 21. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L420-L423` → after: `L350-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L350-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L350-L379) · [Before (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L420-L423)

```diff
-       return {
-         __proto__: null,
-         module: QQ,
-         path: FQ
+       const ik = ek(4 * kk.length, 4) >>> 0;
+       return (null !== jk && 0 !== jk.byteLength || (jk = new Uint32Array(tk.memory.buffer)), jk).set(kk, ik / 4), Xk = kk.length, ik
+     }
+ 
+     function Ik(kk, ek) {
+       const ik = ek(4 * kk.length, 4) >>> 0,
+         Dk = Ck();
+       for (let fk = 0; fk < kk.length; fk++) Dk.setUint32(ik + 4 * fk, pk(kk[fk]), !0);
+       return Xk = kk.length, ik
+     }
+ 
+     function zk(kk) {
+       const ek = Vk(kk);
+       return function(kk) {
+         kk < 1028 || (Fk[kk] = uk, uk = kk)
+       }(kk), ek
+ ... (14 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L427-L443` → after: `L388-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L388-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L388-L431) · [Before (L427-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L427-L443)

```diff
-     function fQ(QQ, FQ, wQ) {
-       return void 0 === jQ(QQ.name) ? (0, vQ.R)(QQ.url(), FQ, wQ) : (0, vQ.R)(QQ.url(), FQ, {
-         ...wQ,
-         hideThen: !0,
-         onDownloaded: () => {
-           ! function(QQ) {
-             const FQ = bQ();
-             if (null === FQ) return;
-             const wQ = HQ(QQ),
-               LQ = FQ.filter((QQ => QQ !== wQ));
-             LQ.push(wQ);
-             try {
-               localStorage.setItem(mQ, JSON.stringify(LQ.slice(-uQ)))
-             } catch (qQ) {
-               console.warn(`Bloxd wasm: ${wQ} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, qQ)
-             }
- ... (1 more removed lines; see GitHub link above)
+     function ck(kk) {
+       if (void 0 !== tk) return tk;
+       void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
+         module: kk
+       } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
+       const ek = wk();
+       kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
+       return Bk(new WebAssembly.Instance(kk, ek), kk)
+     }
+     async function Tk(kk) {
+       if (void 0 !== tk) return tk;
+       void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
+         module_or_path: kk
+       } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
+       const ek = wk();
+       ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
+ ... (28 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L445` → after: `L433-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L433-L434) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L445)

```diff
-       })
+       }(await kk, ek);
+       return Bk(ik, Dk)
```

#### 24. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L447-L454` → after: `L436-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L436-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L436-L443) · [Before (L447-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L447-L454)

```diff
-     async function VQ(QQ, FQ, wQ, LQ) {
-       if (!UQ || !CQ()) return null;
-       const qQ = QQ.url(),
-         oQ = `${qQ.href}${KQ}`;
-       try {
-         return await (0, vQ.ub)(oQ, ((QQ, qQ, DQ) => NQ(oQ, FQ, QQ, qQ, DQ, wQ, LQ)))
-       } catch (DQ) {
-         return console.warn(`${(0,kQ.d)(DQ)}: loading ${qQ.href} instead`), null
+     var Zk = ik(2823),
+       Ok = ik(6459);
+     class gk extends Error {
+       stage;
+       constructor(kk, ek) {
+         super((0, Zk.E)(kk, ek), {
+           cause: ek
+         }), this.name = "BloxdShaderPackWasmLoadError", this.stage = kk
```

#### 25. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L458-L460` → after: `L447-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L447-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L447-L469) · [Before (L458-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L458-L460)

```diff
-       JQ = !1;
-     const EQ = new Map,
-       nQ = new Map;
+       Nk = null;
+ 
+     function Rk() {
+       return Gk ? Promise.resolve(Gk) : (Nk || (Nk = async function() {
+         let kk;
+         try {
+           kk = await (0, Zk.I)(new ik.U(ik(6468)), (0, Ok.d)("bloxd_wasm_shader_pack"))
+         } catch (ek) {
+           throw new gk((0, Zk.N)(ek), ek)
+         }
+         try {
+           await Tk({
+             module_or_path: kk
+           })
+         } catch (ek) {
+           throw new gk("instantiate", ek)
+ ... (7 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L462-L463` → after: `L471-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L471-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L471-L478) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L462-L463)

```diff
-     function gQ(QQ, FQ, wQ) {
-       return null === hQ ? hQ = ZQ(QQ, FQ) : QQ !== hQ.build ? console.warn(`Bloxd wasm: ${QQ.name} was asked for after ${hQ.build.name} started loading, which this thread keeps`) : FQ.name !== hQ.workers.name && console.warn(`Bloxd wasm: ${FQ.name} was asked for workers after ${ … [truncated]
+     function ke(kk) {
+       let [ek, ik, Dk, fk] = kk;
+       const Sk = {
+         file: ek,
+         line: ik,
+         message: Dk
+       };
+       return fk && (Sk.variants = fk.map(Jk.n)), Sk
```

#### 27. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L466-L494` → after: `L481-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L481-L482) · [Before (L466-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L466-L494)

```diff
-     function PQ(QQ, FQ) {
-       if (null !== hQ) return (0, qQ.e)([]);
-       const wQ = QQ.filter((QQ => !EQ.has(QQ.name))).map((QQ => {
-         const wQ = new AbortController,
-           LQ = {
-             compiled: fQ(QQ, (0, oQ.e)(QQ.name), {
-               priority: FQ,
-               wF: wQ.signal,
-               onDownloaded: () => {
-                 LQ.downloaded = !0
-               },
-               retries: {
-                 onRetry: () => {
-                   LQ.downloaded = !1, null !== hQ && wQ.abort()
-                 }
-               }
- ... (13 more removed lines; see GitHub link above)
+     function ee(kk) {
+       return JSON.parse(kk).map(ke)
```

#### 28. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L498-L518` → after: `L486-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L486-L487) · [Before (L498-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L498-L518)

```diff
-       const wQ = (0, LQ.E)((async () => {
-         (0, DQ.q)(), nQ.clear();
-         const wQ = BQ(QQ),
-           LQ = FQ.name === QQ.name ? wQ : BQ(FQ);
-         for (const {
-             cancel: QQ
-           }
-           of EQ.values()) QQ.abort();
-         EQ.clear(), await (0, qQ.e)([wQ, LQ]);
-         const oQ = await wQ,
-           kQ = await LQ;
-         return (0, DQ.q)(), {
-           module: oQ,
-           workerModule: kQ
-         }
-       }), QQ);
- ... (5 more removed lines; see GitHub link above)
+       if (!Number.isInteger(kk) || kk < 0 || kk > 4294967295) throw new Error(`${ek} ${kk} is not a whole number from 0 to 4294967295`);
+       return kk
```

#### 29. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L522` → after: `L491-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L491-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L491-L503) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L522)

```diff
-       return nQ.get(QQ)
+       return [kk.named.map((kk => kk.name)), Uint32Array.from(kk.named, (kk => ie(kk.id, "Texture ID")))]
+     }
+     const fe = new WeakMap;
+     const Se = new WeakMap,
+       be = new WeakSet;
+ 
+     function re(kk, ek) {
+       if (be.has(kk)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
+       try {
+         return ek()
+       } catch (ik) {
+         throw ik instanceof WebAssembly.RuntimeError && be.add(kk), ik
+       }
```

#### 30. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L526-L535` → after: `L507-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L507-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L507-L540) · [Before (L526-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L526-L535)

```diff
-       const FQ = performance.now(),
-         wQ = EQ.get(QQ.name);
-       EQ.delete(QQ.name);
-       const LQ = !0 === wQ?.downloaded ? wQ : void 0;
-       return void 0 !== wQ && void 0 === LQ && wQ.cancel.abort(), (0, qQ.h)(((wQ, oQ) => {
-         const DQ = (LQ, qQ) => {
-             nQ.set(QQ.name, {
-               path: qQ,
-               ms: performance.now() - FQ
-             }), wQ(LQ)
+       let ek = Se.get(kk);
+       if (!ek) {
+         let ik, Dk;
+         ek = {
+           B5: (ek, ik) => re(kk, (() => function(kk, ek, ik) {
+             const Dk = kk.B5(ek.map((kk => kk.path)), ek.map((kk => kk.source)), ...De(ik), ik.aliases.map((kk => kk.name)), ik.aliases.map((kk => kk.texture)), ik.aliases.map((kk => kk.kind)));
+             let fk = !1;
+             try {
+               const kk = Dk.validationModuleCodes,
+                 ek = Array.from(Dk.validationModuleKeys, ((ek, ik) => ({
+                   key: (0, Jk.n)(ek),
+                   code: kk[ik]
+                 }))),
+                 ik = {
+                   errors: ee(Dk.errorsJson),
+                   offInStrict: ee(Dk.offInStrictJson),
+ ... (18 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L537-L556` → after: `L542-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L542-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L542-L567) · [Before (L537-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L537-L556)

```diff
-           kQ = () => {
-             (0, qQ.p)(QF(QQ), (QQ => {
-               let {
-                 module: FQ,
-                 path: wQ
-               } = QQ;
-               DQ(FQ, wQ)
-             }), oQ)
-           };
-         void 0 === LQ ? kQ() : (0, qQ.p)(LQ.compiled, (QQ => {
-           DQ(QQ, "ahead")
-         }), kQ)
-       }))
-     }
-     async function dQ(QQ, FQ) {
-       const {
- ... (4 more removed lines; see GitHub link above)
+           uik: ek => re(kk, (() => function(kk, ek) {
+             const ik = new Int32Array(ek.length),
+               Dk = [];
+             return ek.forEach(((kk, ek) => {
+               ik[ek] = kk.variants ? kk.variants.length : -1;
+               for (const ik of kk.variants ?? []) Dk.push((0, Jk.j)(ik))
+             })), ee(kk.uik(ek.map((kk => kk.file)), Uint32Array.from(ek, (kk => ie(kk.line, "Diagnostic line"))), ek.map((kk => kk.message)), ik, Uint8Array.from(Dk)))
+           }(kk, ek))),
+           jF: ek => re(kk, (() => kk.jF(...De(ek)))),
+           get SHADER_PACK_HEADER_VERSION() {
+             return ik ??= re(kk, (() => kk.ODk())), ik
+           },
+           get DEFAULT_SHADER_PACK_FILES() {
+             return Dk ??= re(kk, (() => {
+               const ek = kk.TDk();
+               return kk.cDk().map(((kk, ik) => ({
+ ... (10 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L559-L561` → after: `L570-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L570-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L570-L593) · [Before (L559-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L559-L561)

```diff
-     async function QF(QQ) {
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       return await aQ(QQ, (0, oQ.e)(QQ.name), FQ)
+     var me = ik(3190),
+       Me = ik(6477);
+     const Ke = "bloxdShaderPackWasmFailureReported";
+     let xe = null;
+ 
+     function ne() {
+       return xe ??= async function() {
+         if ("undefined" === typeof WebAssembly) return Ue("unsupported", "This browser has no WebAssembly"), null;
+         const kk = (0, Me.loadShaderPackTextures)().then((() => !0), (kk => (console.error("Could not load the shader pack textures, so shader packs can't run", kk), !1)));
+         try {
+           const ek = await async function() {
+             let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rk;
+             return Pe(await kk())
+           }();
+           return await kk ? ek : null
+         } catch (ek) {
+ ... (8 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L564` → after: `L596-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L596-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L596-L599) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L564)

```diff
-   6446: (QQ, FQ, wQ) => {
+   6468: (kk, ek, ik) => {
+     kk.exports = ik.p + "static/media/bloxd_wasm_shader_pack_bg.0ec0aac09a9dc6e3be94.wasm"
+   },
+   6459: (kk, ek, ik) => {
```

#### 34. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L566` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L601) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L566)

```diff
-       e: () => DQ
+       d: () => bk
```

#### 35. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L568` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L603) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L568)

```diff
-     var LQ = wQ(2811);
+     var Dk = ik(2823);
```

#### 36. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L570-L581` → after: `L605-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L605-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L605-L616) · [Before (L570-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L570-L581)

```diff
-       bloxd_wasm: () => "1dd71b260cf77c239728051b861ab33f1bc93c07cb4fd28db7884da2815d9fb7",
-       bloxd_wasm_client: () => "3cfdd659c2eb8b6808b191f6b866ba4e169bdaee4701af255db5568969af1bb7",
-       bloxd_wasm_workers: () => "e767134c25f99ed90bec9c0af92587618ddb83193667d16121760ce713ad3288",
-       bloxd_wasm_models: () => "7efbd9cd4bdaa31a2b1cc79e297121e9fc854705c550b2f59e1da981f144f4cb",
-       bloxd_wasm_webgpu: () => "5a2823876f9d5f8660104cc25ddeb02c3ddbc283e88525fa31e6d0deaa802210",
-       bloxd_wasm_webgl: () => "08bd13fedb12bff9b9605ef44db652dccf2f7dcf60a963258385b5f773a6f220",
-       bloxd_wasm_webgl1: () => "d6f63b1aa81b972a9480431e3334c89fc0648b9790fe3b5c8ff72a4945814f45",
-       bloxd_wasm_replay: () => "225276b91dfdf588b8a1477982fd12458f6ce65cfbaf6a782c82ab32d22513fb",
-       bloxd_wasm_recorder: () => "5fccb956d97b8d65d45cf6afb9a7042d1e4e4bad858c8aa1ec94da37e97ec72f",
-       bloxd_wasm_anim: () => "3f5071fcbbd4cd73afc810a4abff7c2f49f86a8638003d25fa9521ff9c12ae28",
-       bloxd_wasm_textures: () => "f13f878b8e801e1b7391eae5c539ceb75b7c99a88018bdad896fe7b520427f2f",
-       bloxd_wasm_shader_pack: () => "e521fc18804ece0348d56f2c73e39ef69fee01e1ad9f9c53d92bd0fdbf472492"
+       bloxd_wasm: () => "295c5cd2cc27f19595e8622c000a7c41e60e485a07dbba504442890cbd24a8aa",
+       bloxd_wasm_client: () => "416b91d2a16ae728bbeca95bbffddabc8a3a7b4a34aa66d1fe6f3b3eaf78245d",
+       bloxd_wasm_workers: () => "1d7067ca0a5537d6f71a4946b88fe0f1c972f70665e18d64e4adb5d5285f18e2",
+       bloxd_wasm_models: () => "867866320707b9f1ca78d6925955f07814ec1ca44420a0c7cde5311c04365e33",
+       bloxd_wasm_webgpu: () => "9867480be13b90b64fe4abafb562dec31eaac1bd6f0fcc19b9bb76500d4fdc10",
+       bloxd_wasm_webgl: () => "9f4c0bbaef65b13dad73d1ed314d3c8b192b18cfc30179c3542f3ca03efb48fd",
+       bloxd_wasm_webgl1: () => "014507591fe08d6df7d489a19d8df0b9f54e5fadda2418f355e9f2ae9280bb00",
+       bloxd_wasm_replay: () => "03359aae307812a1ddfe49365a61deb594b3a7b4fb670fa4cb1f3ee68976c741",
+       bloxd_wasm_recorder: () => "0b07d8728842a235c0e7a2c268ef34837026080bff9775bbc59cb6b2df75da11",
+       bloxd_wasm_anim: () => "39f782ac95bb53f159aa901360aa630676baa5e6c493e3edb2871e65cc6a978c",
+       bloxd_wasm_textures: () => "ef551c40e5bb3fca12998cd42e0e4317f1aad8584357c16a578ec219fc254bcb",
+       bloxd_wasm_shader_pack: () => "9f488776af56b7975c23b43dfcad2bdc3764d5025ab085512a39009b8882a5ef"
```

#### 37. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L583` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L618) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L583)

```diff
-     var oQ = wQ(4540);
+     var Sk = ik(4629);
```

#### 38. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L589` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L624) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L589)

```diff
-         onMismatch: oQ.o
+         onMismatch: Sk.s
```

#### 39. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L591` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L626) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L591)

```diff
-       throw new LQ.j(`${QQ} has no release digest, so this build refuses it`)
+       throw new Dk.l(`${kk} has no release digest, so this build refuses it`)
```

#### 40. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L594` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L629) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L594)

```diff
-   35929: (QQ, FQ, wQ) => {
+   6479: (kk, ek, ik) => {
```

#### 41. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L598-L600` → after: `L633-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L633-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L633-L634) · [Before (L598-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L598-L600)

```diff
-       k: () => vQ,
-       m: () => DQ,
-       o: () => qQ
+       j: () => pk,
+       n: () => lk
```

#### 42. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L602` → after: `L636-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L636-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L636-L647) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L602)

```diff
-     const LQ = /^alloc_failed (\d+) bytes$/;
+     var Dk = ik(6484);
+     const fk = 6,
+       Sk = 3,
+       bk = 1,
+       rk = 2,
+       Pk = 4,
+       mk = 8,
+       Mk = 16,
+       Kk = 32,
+       xk = 64,
+       nk = 128,
+       Uk = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
```

#### 43. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L604-L605` → after: `L649-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L649-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L649-L653) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L604-L605)

```diff
-     function qQ(QQ, FQ) {
-       return oQ(QQ, FQ) ? `trap=alloc_failed ${FQ} bytes` : `trap=${QQ}`
+     function Hk(kk) {
+       if (!kk) return 0;
+       const ek = Uk.indexOf(kk);
+       if (ek <= 0) throw new Error(`"${kk}" is not a shader pack hook function`);
+       return ek
```

#### 44. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L608-L609` → after: `L656-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L656-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L656-L660) · [Before (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L608-L609)

```diff
-     function oQ(QQ, FQ) {
-       return "unreachable" === QQ && FQ > 0
+     function wk(kk) {
+       if (0 === kk) return null;
+       const ek = Uk[kk];
+       if (void 0 === ek) throw new Error(`${kk} is not a shader pack hook function id`);
+       return ek
```

#### 45. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L612-L622` → after: `L663-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L663-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L663-L664) · [Before (L612-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L612-L622)

```diff
-     function DQ(QQ, FQ, wQ) {
-       const LQ = function(QQ) {
-         return QQ instanceof WebAssembly.RuntimeError ? /unreachable/i.test(QQ.message) ? "unreachable" : /out of bounds/i.test(QQ.message) ? "out_of_bounds" : "runtime_error" : (QQ instanceof RangeError || QQ instanceof Error && "InternalError" === QQ.name) && /call stack|recurs … [truncated]
-       }(QQ);
-       if ("unreachable" !== LQ) return {
-         kind: LQ,
-         panic: null,
-         refusedBytes: 0
-       };
-       const qQ = FQ(),
-         oQ = wQ();
+     function lk(kk) {
+       const ek = Dk.c.length;
```

#### 46. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L624-L626` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L666-L667) · [Before (L624-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L624-L626)

```diff
-         kind: LQ,
-         panic: oQ > 0 ? null : qQ,
-         refusedBytes: oQ
+         strict: kk >= ek,
+         program: Dk.c[kk % ek]
```

#### 47. `bundles/bloxd.io/chunks/js/133.js` (Changed code · before: `L632` → after: `L672-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9c58c53af5f58dbc346ca9492fed7089e16527e44d32f467d349395a7abdd934) · [After (L672-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/133.js#L672-L752) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/133.js#L632)

```diff
-       return QQ.replace(/\s*\n\s*/g, " / ").slice(0, kQ)
+       return Number(kk.strict) * Dk.c.length + Dk.c.indexOf(kk.program)
+     }
+ 
+     function yk(kk) {
+       return "" === kk ? [] : kk.split(" ")
+     }
+ 
+     function Yk(kk) {
+       const ek = {
+         variantFlags: new Uint8Array(fk),
+         hooks: new Uint8Array(fk * Sk),
+         moduleCodes: Array(fk).fill(""),
+         reads: Array(2 * fk).fill("")
+       };
+       for (const ik of kk) {
+         const kk = pk(ik.key),
+ ... (65 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/134.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/134.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789)

#### 1. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/134.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/134.js#L4)

```diff
-   6467: (QQ, FQ, wQ) => {
+   35841: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/134.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/134.js#L6-L7)

```diff
-       c: () => pQ,
-       g: () => cQ,
+       e: () => Dk,
+       h: () => fk,
```

#### 3. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L11-L95` → after: `L11-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L11-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/134.js#L11-L19) · [Before (L11-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/134.js#L11-L95)

```diff
-     var LQ = wQ(6470);
-     const qQ = 6,
-       oQ = 3,
-       DQ = 1,
-       kQ = 2,
-       vQ = 4,
-       mQ = 8,
-       uQ = 16,
-       HQ = 32,
-       bQ = 64,
-       YQ = 128,
-       xQ = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
- 
-     function AQ(QQ) {
-       if (!QQ) return 0;
-       const FQ = xQ.indexOf(QQ);
- ... (69 more removed lines; see GitHub link above)
+     const Dk = 1024,
+       fk = 1024 * Dk;
+ 
+     function Sk(kk) {
+       return 2 ** Math.floor(Math.log2(Math.max(1, kk / fk)))
+     }
+ 
+     function bk(kk) {
+       return (kk / fk).toFixed(1)
```

#### 4. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L98-L190` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/134.js#L22) · [Before (L98-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/134.js#L98-L190)

```diff
-   40307: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       A: () => DQ,
-       D: () => AQ,
-       F: () => YQ,
-       J: () => xQ,
-       e: () => qQ,
-       h: () => LQ,
-       i: () => bQ,
-       k: () => uQ,
-       n: () => tQ,
-       q: () => oQ,
-       u: () => kQ,
-       x: () => vQ
-     });
-     const LQ = 3,
- ... (77 more removed lines; see GitHub link above)
+   35843: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L194-L196` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/134.js#L618) · [Before (L194-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/134.js#L194-L196)

```diff
-       l: () => kQ,
-       m: () => qQ,
-       o: () => oQ
+       l: () => fk
```

#### 6. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L198-L216` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/134.js#L620) · [Before (L198-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/134.js#L198-L216)

```diff
-     const LQ = ["terrain", "liquid", "model"];
- 
-     function qQ() {
-       const QQ = [];
-       for (const FQ of [!1, !0])
-         for (const wQ of LQ) QQ.push({
-           strict: FQ,
-           program: wQ
-         });
-       return QQ
-     }
- 
-     function oQ(QQ) {
-       return `${QQ.strict?"strict":"allow"}.${QQ.program}`
-     }
- 
- ... (3 more removed lines; see GitHub link above)
+     const Dk = /^alloc_failed (\d+) bytes$/;
```

#### 7. `bundles/bloxd.io/chunks/js/134.js` (Changed code · before: `L219-L245` → after: `L623-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-49aefbb429b2493b89c762c2f71f62bea844127a14149b796ffd0c577e687789) · [After (L623-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/134.js#L623-L651) · [Before (L219-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/134.js#L219-L245)

```diff
-       return "off" !== FQ && (null === QQ || QQ.some((QQ => QQ.key.strict === ("strict" === FQ) && !DQ(QQ))))
-     }
-   },
-   40664: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       SHADER_PACK_INPUTS_BINDING: () => oQ.e,
-       SHADER_PACK_INPUTS_GROUP: () => oQ.h,
-       SHADER_PACK_INPUTS_SIZE: () => oQ.i,
-       SHADER_PACK_INPUTS_VAR: () => oQ.k,
-       SHADER_PACK_MODES: () => oQ.n,
-       SHADER_PACK_PROGRAMS: () => LQ.d,
-       SHADER_PACK_SCENE_DEPTH_BINDING: () => oQ.q,
-       SHADER_PACK_SUN_SHADOW_BINDINGS: () => oQ.u,
-       SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => oQ.x,
-       SHADER_PACK_TEXTURES_BINDING: () => oQ.A,
-       encodeTextureLayers: () => oQ.D,
- ... (11 more removed lines; see GitHub link above)
+       return Sk(kk, ek) ? `trap=alloc_failed ${ek} bytes` : `trap=${kk}`
+     }
+ 
+     function Sk(kk, ek) {
+       return "unreachable" === kk && ek > 0
+     }
+ 
+     function bk(kk, ek, ik) {
+       const Dk = function(kk) {
+         return kk instanceof WebAssembly.RuntimeError ? /unreachable/i.test(kk.message) ? "unreachable" : /out of bounds/i.test(kk.message) ? "out_of_bounds" : "runtime_error" : (kk instanceof RangeError || kk instanceof Error && "InternalError" === kk.name) && /call stack|recurs … [truncated]
+       }(kk);
+       if ("unreachable" !== Dk) return {
+         kind: Dk,
+         panic: null,
+         refusedBytes: 0
+       };
+ ... (13 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/135.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/135.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13)

#### 1. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/135.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/135.js#L4)

```diff
-   41149: (QQ, FQ, wQ) => {
+   6477: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/135.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/135.js#L6-L8)

```diff
-       compilePagePack: () => mQ,
-       prefetchCompiler: () => kQ,
-       reconcileHint: () => vQ
+       loadShaderPackTextures: () => bk,
+       shaderPackTextures: () => rk
```

#### 3. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L10-L13` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/135.js#L9-L11) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/135.js#L10-L13)

```diff
-     var LQ = wQ(6438),
-       qQ = wQ(6481),
-       oQ = wQ(6460),
-       DQ = wQ(6476);
+     var Dk = ik(4965);
+     let fk = null,
+       Sk = null;
```

#### 4. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L16-L117` → after: `L14-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/135.js#L14-L21) · [Before (L16-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/135.js#L16-L117)

```diff
-       (0, LQ.loadPageShaderPackCompiler)()
-     }
-     async function vQ() {
-       const QQ = await (0, LQ.loadPageShaderPackCompiler)();
-       await (QQ ? (0, qQ.reconcileStoredShaderPackHint)(QQ) : (0, qQ.forgetShaderPackActiveHint)())
-     }
-     async function mQ(QQ) {
-       const FQ = await (0, LQ.loadPageShaderPackCompiler)();
-       if (!FQ) return {
-         status: "none"
-       };
-       const wQ = await (0, DQ.e)(QQ, FQ),
-         kQ = (0, qQ.storedPackOutcome)(wQ, FQ);
-       if ("none" === kQ.kind) return {
-         status: "none"
-       };
- ... (86 more removed lines; see GitHub link above)
+       return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: ek,
+           textureNameToIndex: ik,
+           textureAnimationData: Sk
+         } = kk;
+         return fk ??= (0, Dk.h)(ik, Sk, ek), fk
+       })), Sk
```

#### 5. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L121-L268` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/135.js#L25-L26) · [Before (L121-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/135.js#L121-L268)

```diff
-       return xQ(MQ)
-     }
- 
-     function pQ(QQ, FQ) {
-       return "active" === cQ(QQ, FQ).kind
-     }
- 
-     function cQ(QQ, FQ) {
-       var wQ;
-       return null === QQ ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : iQ(QQ) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.ok) || QQ.validation.fromRecheck ? null === FQ ? {
- ... (132 more removed lines; see GitHub link above)
+       if (null === fk) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return fk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/136.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/136.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036)

#### 1. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/136.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/136.js#L3)

```diff
- export const ids = [136];
+ export const ids = [135, 136];
```

#### 2. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L5-L2417` → after: `L4-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L4-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/136.js#L4-L162) · [Before (L5-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/136.js#L5-L2417)

```diff
-   6531: (QQ, FQ, wQ) => {
-     var LQ = wQ(6539);
-     FQ.b = {
-       prefix: LQ.prefix,
-       iconName: LQ.iconName,
-       icon: [LQ.width, LQ.height, LQ.aliases, LQ.unicode, LQ.svgPathData]
-     }, FQ.d = FQ.b, LQ.prefix, LQ.iconName, LQ.width, LQ.height, LQ.aliases, LQ.unicode, LQ.svgPathData, LQ.aliases
-   },
-   6545: (QQ, FQ, wQ) => {
-     var LQ = wQ(6551);
-     FQ.b = {
-       prefix: LQ.prefix,
-       iconName: LQ.iconName,
-       icon: [LQ.width, LQ.height, LQ.aliases, LQ.unicode, LQ.svgPathData]
-     }, FQ.e = FQ.b, LQ.prefix, LQ.iconName, LQ.width, LQ.height, LQ.aliases, LQ.unicode, LQ.svgPathData, LQ.aliases
-   },
- ... (2397 more removed lines; see GitHub link above)
+   6498: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       forgetShaderPackActiveHint: () => Fk,
+       isOtherApiVersion: () => jk,
+       isShaderPackActive: () => Yk,
+       isShaderPackChangePending: () => Ak,
+       markShaderPackChangePending: () => Ck,
+       pageShaderPackValidationVersion: () => sk,
+       reconcileStoredShaderPackHint: () => Vk,
+       removeShaderPack: () => yk,
+       replaceShaderPack: () => wk,
+       saveShaderPack: () => Hk,
+       shaderPackNeedsCheck: () => dk,
+       storedPackOutcome: () => Lk,
+       storedShaderPackFiles: () => xk,
+       toStoredShaderPack: () => Kk
+ ... (143 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/137.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/137.js` (70 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a)

#### 1. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L4-L81` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L4) · [Before (L4-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L4-L81)

```diff
-   7875: (QQ, FQ) => {
-     var wQ = "youtube",
-       LQ = [61802],
-       qQ = "f167",
-       oQ = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
-     FQ.d = {
-       prefix: "fab",
-       iconName: wQ,
-       icon: [576, 512, LQ, qQ, oQ]
-     }, FQ.h = FQ.d
-   },
-   6680: (QQ, FQ) => {
-     Object.defineProperty(FQ, "__esModule", {
-       value: !0
-     });
-     var wQ = "bolt",
- ... (62 more removed lines; see GitHub link above)
+   38345: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L83-L84` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L6-L11) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L83-L84)

```diff
-       d: () => kQ,
-       g: () => DQ
+       c: () => Pk,
+       g: () => Kk,
+       i: () => Hk,
+       j: () => Mk,
+       l: () => mk,
+       p: () => nk
```

#### 3. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L86-L88` → after: `L13-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L13-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L13-L34) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L86-L88)

```diff
-     var LQ = wQ(3158);
-     let qQ = null,
-       oQ = null;
+     var Dk = ik(293),
+       fk = ik(1684);
+     const Sk = "A valid external Instance reference no longer exists.",
+       bk = [
+         [1e4, "<10s", "lt10s"],
+         [6e4, "<1m", "lt1m"],
+         [3e5, "<5m", "lt5m"],
+         [18e5, "<30m", "lt30m"],
+         [1 / 0, "30m+", "ge30m"]
+       ],
+       rk = [
+         [1e3, "lt1s"],
+         [2e3, "lt2s"],
+         [5e3, "lt5s"],
+         [1e4, "lt10s"],
+         [3e4, "lt30s"],
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L90-L108` → after: `L36-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L36-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L36-L41) · [Before (L90-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L90-L108)

```diff
-     function DQ() {
-       return oQ ??= wQ.e(209).then((() => wQ(35973))).then((QQ => {
-         let {
-           ITEM_SPRITES: FQ,
-           ITEM_SPRITES_WITHOUT_FILE: wQ,
-           ITEM_FILES_WITHOUT_SPRITE: oQ
-         } = QQ;
-         qQ = function(QQ, FQ, wQ) {
-           const qQ = new Set,
-             oQ = (0, LQ.x)(FQ);
-           let DQ = 0;
-           for (const [LQ, kQ] of QQ.entries()) LQ === oQ[DQ] ? DQ++ : qQ.add(kQ);
-           if ("" !== wQ)
-             for (const kQ of wQ.split(LQ.s)) qQ.add(kQ);
-           return qQ
-         }(FQ.split(LQ.s), wQ, oQ)
- ... (3 more removed lines; see GitHub link above)
+     function mk(kk, ek) {
+       return kk ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(kk) {
+         var ek;
+         const ik = null !== (ek = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(kk)) && void 0 !== ek ? ek : /failed with ([A-Z][A-Z0-9_]+)/.exec(kk);
+         return ik ? ik[1] : kk.includes(Sk) ? "gpu_process_lost" : "other"
+       }(ek)
```

#### 5. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L112-L113` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L45) · [Before (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L112-L113)

```diff
-       var FQ, wQ;
-       return null !== (FQ = null === (wQ = qQ) || void 0 === wQ ? void 0 : wQ.has(QQ)) && void 0 !== FQ && FQ
+       return `${(null===kk||void 0===kk?void 0:kk.vendor)||"unknown vendor"} ${(null===kk||void 0===kk?void 0:kk.architecture)||"unknown architecture"}`
```

#### 6. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L125-L128` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L48-L49) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L125-L128)

```diff
-     function DQ() {
-       return qQ ??= wQ.e(59).then((() => wQ(42016))).catch((QQ => {
-         throw qQ = null, QQ
-       })), qQ
+     function Kk(kk) {
+       return wk(kk)[1]
```

#### 7. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L131-L137` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L52-L53) · [Before (L131-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L131-L137)

```diff
-     function kQ() {
-       return oQ ??= Promise.all([DQ(), (0, LQ.g)()]).then((QQ => {
-         let [FQ] = QQ;
-         return FQ
-       }), (QQ => {
-         throw oQ = null, QQ
-       })), oQ
+     function xk(kk) {
+       return wk(kk)[2]
```

#### 8. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L177-L178` → after: `L56-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L56-L60) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L177-L178)

```diff
-     function cQ(QQ) {
-       const [FQ, wQ, , , LQ] = QQ.icon;
+     function nk(kk, ek, ik) {
+       const fk = (0, Dk.d)(),
+         Sk = null !== fk && fk >= ek,
+         bk = document.hidden ? "hidden" : Sk ? "shown" : "visible",
+         rk = Sk ? ik - fk : null;
```

#### 9. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L180-L182` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L62-L63) · [Before (L180-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L180-L182)

```diff
-         width: FQ,
-         height: wQ,
-         path: "string" === typeof LQ ? LQ : LQ.join(" ")
+         page: null === rk ? bk : `${bk}${Kk(rk)}`,
+         code: `${kk}_${null===rk?bk:`${bk}_${xk(rk)}`}_${Uk(ik)}`
```

#### 10. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L197-L200` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L68-L70) · [Before (L197-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L197-L200)

```diff
-       return QQ.split(",").map((QQ => {
-         const [FQ, wQ = FQ] = QQ.slice(2).split("-");
-         return [parseInt(FQ, 16), parseInt(wQ, 16)]
-       }))
+       if ((0, fk.c)()) return "ad_open";
+       const ek = (0, fk.b)();
+       return null === ek ? "ad_none" : `ad_${xk(kk-ek.endedAt)}_${ek.pageHid?"h":"v"}`
```

#### 11. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L209-L211` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L74) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L209-L211)

```diff
-       return FQ => {
-         console.warn(`[bloxd-wasm-client] the text font's ${QQ} file did not load`, FQ)
-       }
+       return lk(rk, kk)[1]
```

#### 12. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L226-L227` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L77-L78) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L226-L227)

```diff
-     function XQ() {
-       return jQ
+     function wk(kk) {
+       return lk(bk, kk)
```

#### 13. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L230-L264` → after: `L81-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L81-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L81-L100) · [Before (L230-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L230-L264)

```diff
-     function fQ() {
-       jQ++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? aQ = "all" : "none" === aQ && (aQ = "notBoards")
-     }(0, vQ.q)((() => {
-       (function() {
-         const QQ = SQ;
-         return SQ = !1, QQ
-       })() && fQ(!1)
-     }));
-     const VQ = new class {
-       constructor(QQ) {
-         this.loaded = QQ, this.latin = null, this.rest = null, this.restWanted = !1
-       }
-       load() {
-         if (null === this.latin) {
-           this.latin = new FontFace(RQ, `url(${(0,WQ.d)()}) format("woff2")`, {
-             unicodeRange: OQ
- ... (19 more removed lines; see GitHub link above)
+     function lk(kk, ek) {
+       var ik;
+       return null !== (ik = kk.find((kk => {
+         let [ik] = kk;
+         return ek < ik
+       }))) && void 0 !== ik ? ik : kk[kk.length - 1]
+     }
+   },
+   40221: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk,
+       g: () => Mk,
+       h: () => bk,
+       k: () => fk,
+       m: () => rk,
+       n: () => mk
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L273` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L105) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L273)

```diff
-       QQ !== lQ && (lQ = QQ, fQ())
+       return kk instanceof RangeError && /call stack/i.test(kk.message) || kk instanceof Error && "InternalError" === kk.name && /recursion/i.test(kk.message)
```

#### 15. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L277-L278` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L110-L111) · [Before (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L277-L278)

```diff
-       if ("none" === aQ || null === QQ) return;
-       QQ(TQ, "all" === aQ ? 0 : KQ, new Uint8Array(0)) && (aQ = "none")
+       var ek;
+       return kk instanceof WebAssembly.RuntimeError || kk instanceof Dk || fk(kk) && Sk.test(null !== (ek = kk.stack) && void 0 !== ek ? ek : "")
```

#### 16. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L283-L322` → after: `L114-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L114-L117) · [Before (L283-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L283-L322)

```diff
-     function PQ(QQ, FQ, wQ) {
-       var LQ;
-       const qQ = wQ ? `${QQ}#${wQ.join(",")}` : QQ,
-         oQ = nQ.get(qQ);
-       if (oQ) return oQ.image;
-       const DQ = {
-         image: null !== (LQ = gQ.get(qQ)) && void 0 !== LQ ? LQ : null
-       };
-       return nQ.set(qQ, DQ), FQ().then((async QQ => {
-         if (null === QQ) return null;
-         const FQ = new Image;
-         FQ.crossOrigin = "anonymous", FQ.src = QQ, await FQ.decode();
-         const LQ = await createImageBitmap(FQ);
-         if (!wQ) return LQ;
-         try {
-           return function(QQ, FQ) {
- ... (24 more removed lines; see GitHub link above)
+     function rk(kk, ek) {
+       if (bk(kk)) throw kk;
+       console.error(ek, kk)
+     }
```

#### 17. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L324-L325` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L119-L120) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L324-L325)

```diff
-     function BQ() {
-       (0, YQ.e)().catch((() => {}))
+     function Pk(kk, ek, ik, fk, Sk) {
+       if (ek % fk !== 0 || ek + ik > kk.byteLength) throw new Dk(`${Sk}: ${ik} bytes at ${ek}, ${fk}-aligned, outside ${kk.byteLength} bytes of memory`)
```

#### 18. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L328-L332` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L123-L124) · [Before (L328-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L328-L332)

```diff
-     function dQ(QQ) {
-       return ZQ.has(QQ) ? PQ(`icon:${QQ}`, (async () => {
-         var FQ, wQ;
-         return null !== (FQ = null === (wQ = (0, bQ.f)()) || void 0 === wQ ? void 0 : wQ.textureUrl(QQ)) && void 0 !== FQ ? FQ : (await (0, YQ.b)()).ingameIconUrl(QQ)
-       })) : null
+     function mk(kk, ek, ik, Dk, fk) {
+       return 0 === ik ? null : (Pk(ek, ik, Dk * kk.BYTES_PER_ELEMENT, kk.BYTES_PER_ELEMENT, fk), new kk(ek, ik, Dk))
```

#### 19. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L334-L385` → after: `L126-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L126-L128) · [Before (L334-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L334-L385)

```diff
-     let QF = "unasked";
-     const FF = {
-       get canSeeRealPlayerNames() {
-         return uQ.featureFlags.canSeeRealPlayerNames
-       },
-       get canSeePlayerWrittenText() {
-         return uQ.featureFlags.canSeePlayerWrittenText
-       },
-       get localPlayerDbId() {
-         return lQ
-       },
-       shownPlayerName: QQ => (0, HQ.f)(QQ, zQ.hiddenNames),
-       translate: (QQ, FQ) => {
-         const wQ = "object" === typeof FQ && null !== FQ ? FQ : void 0;
-         return zQ.translate(QQ, (0, HQ.j)(wQ, zQ.hiddenNames))
-       },
- ... (36 more removed lines; see GitHub link above)
+ 
+     function Mk(kk, ek, ik, Dk, fk) {
+       return 0 === ek ? null : (Pk(kk, ek, ik, Dk, fk), new DataView(kk, ek, ik))
```

#### 20. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L388` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L131) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L388)

```diff
-   41970: (QQ, FQ, wQ) => {
+   40297: (kk, ek, ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L390-L391` → after: `L133-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L133-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L133-L152) · [Before (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L390-L391)

```diff
-       e: () => CF,
-       h: () => AF
+       B: () => Bk,
+       D: () => tk,
+       E: () => Tk,
+       I: () => De,
+       L: () => ck,
+       N: () => Xk,
+       Q: () => Zk,
+       T: () => Gk,
+       U: () => Se,
+       W: () => Jk,
+       _: () => Fk,
+       d: () => fe,
+       g: () => me,
+       k: () => Rk,
+       l: () => ie,
+       m: () => gk,
+ ... (4 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L393-L407` → after: `L154-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L154-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L154-L178) · [Before (L393-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L393-L407)

```diff
-     var LQ = wQ(36378),
-       qQ = wQ(40407),
-       oQ = wQ(38395),
-       DQ = wQ(600),
-       kQ = wQ(307);
-     const vQ = {
-         DEFAULT_FONT_SIZE: 47,
-         DEFAULT_SUBTITLE_FONT_SIZE: 30,
-         HORIZONTAL_PADDING: 30,
-         VERTICAL_PADDING: 22,
-         TEXT_SHADOW_WIDTH: 2,
-         LINE_SPACING: 8,
-         EFFECT_ICON_SIZE: 70
-       },
-       mQ = 41;
+     var Dk = ik(302),
+       fk = ik(259),
+       Sk = ik(267),
+       bk = ik(22),
+       rk = ik(2752),
+       Pk = ik(646),
+       mk = ik(4453),
+       Mk = ik(2723),
+       Kk = ik(3419),
+       xk = ik(99),
+       nk = ik(293),
+       Uk = ik(38),
+       Hk = ik(280),
+       wk = ik(115),
+       lk = ik(607),
+       pk = ik(129),
+ ... (9 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L410` → after: `L181-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L181-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L181-L201) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L410)

```diff
-       return `bolder ${QQ}px 'Jetbrains Mono'`
+       let ek;
+       try {
+         ek = kk.getContext("webgl", {
+           powerPreference: pk.e
+         })
+       } catch {
+         ek = null
+       }
+       if (null === ek) return null;
+       let ik = null;
+       try {
+         const kk = ek.getParameter(ek.MAX_TEXTURE_SIZE);
+         ik = "number" === typeof kk && kk > 0 ? kk : null
+       } catch {
+         ik = null
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L414` → after: `L208-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L208-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L208-L219) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L414)

```diff
-       return "object" === typeof QQ && null !== QQ
+       return function(kk) {
+         try {
+           return kk()
+         } catch {
+           return null
+         }
+       }((() => {
+         var ek, ik, Dk, bk;
+         const rk = null !== (ek = null === (ik = kk.info) || void 0 === ik ? void 0 : ik.vendor) && void 0 !== ek ? ek : "";
+         return "windows" === (0, xk.getOperatingSystem)() && "" !== rk && "intel" !== (0, xk.normaliseGpuVendor)(rk) ? null : ((0, xk.seedGpuVendor)(rk), Pk = (0, fk.g)(), mk = (0, Sk.f)(rk, null !== (Dk = null === (bk = kk.info) || void 0 === bk ? void 0 : bk.architecture) && vo … [truncated]
+         var Pk, mk
+       }))
```

#### 25. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L417-L419` → after: `L222-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L222-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L222-L302) · [Before (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L417-L419)

```diff
-     function bQ(QQ, FQ) {
-       const wQ = "number" === typeof QQ ? QQ : "string" === typeof QQ ? Number(QQ.replace("px", "")) : NaN;
-       return Number.isFinite(wQ) && wQ > 0 ? wQ : FQ
+     function Qk() {
+       var kk;
+       return {
+         gpu: null !== (kk = navigator.gpu) && void 0 !== kk ? kk : null,
+         webgl2: () => {
+           try {
+             return null !== document.createElement("canvas").getContext("webgl2")
+           } catch {
+             return !1
+           }
+         },
+         webgl1: () => function(kk) {
+           let ek, ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lk.c;
+           try {
+             ek = kk.getContext("webgl")
+           } catch {
+ ... (65 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L423` → after: `L306-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L306-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L306-L310) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L423)

```diff
-       return HQ(QQ) ? QQ : void 0
+       try {
+         return kk()
+       } catch {
+         return !1
+       }
```

#### 27. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L427-L432` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L314) · [Before (L427-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L427-L432)

```diff
-       const FQ = "number" === typeof QQ ? DQ.u[QQ] : QQ;
-       return "string" === typeof FQ && Object.hasOwn(DQ.m, FQ) ? DQ.m[FQ] : void 0
-     }
- 
-     function AQ(QQ, FQ) {
-       return "string" === typeof QQ ? QQ : HQ(QQ) ? "string" === typeof QQ.translationKey ? FQ.translate(QQ.translationKey, QQ.params).map((QQ => "string" === typeof QQ ? QQ : QQ.icon)).join("") : "string" === typeof QQ.entityName ? FQ.shownPlayerName(QQ.entityName) : "" : void 0 … [truncated]
+       return "lite" === kk ? "webgpu" : "webgl2" === kk || "babylon" === kk ? "webgl" : null
```

#### 28. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L434-L476` → after: `L316-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L316-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L316-L365) · [Before (L434-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L434-L476)

```diff
- 
-     function tQ(QQ, FQ, wQ, LQ) {
-       if (!Array.isArray(QQ)) return [];
-       const qQ = [];
-       for (const uQ of QQ) {
-         var oQ, DQ;
-         if (HQ(uQ) && "chatTag" in uQ) {
-           qQ.push({
-             kind: "rank",
-             rank: uQ
-           });
-           continue
-         }
-         if (HQ(uQ) && "icon" in uQ && !("mainRGB" in uQ)) {
-           var mQ;
-           qQ.push({
- ... (27 more removed lines; see GitHub link above)
+     async function hk() {
+       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qk();
+       const ek = await async function(kk) {
+         const ek = function(kk) {
+             const ek = kk.override(),
+               ik = kk.webGpuSetting(),
+               Dk = null === ek && !0 !== ik && kk.AU(),
+               fk = null !== ek || null !== ik || Dk ? null : kk.claimed(),
+               Sk = null !== ek ? "override" : !0 === ik ? "setting" : Dk ? "pack" : !1 === ik ? "setting" : null !== fk ? "claim" : "default",
+               bk = function(kk) {
+                 return "override" === kk || "setting" === kk
+               }(Sk);
+             if ("webgl" === ek || "webgl1" === ek || "webgl" === fk || "setting" === Sk && !1 === ik) return {
+               source: Sk,
+               asked: bk,
+               refused: "not_requested"
+ ... (34 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L478-L483` → after: `L367-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L367-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L367-L379) · [Before (L478-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L478-L483)

```diff
-               kind: "icon",
-               icon: QQ.icon,
-               size: tQ
-             });
-             continue
-           }
+               reason: kk,
+               adapter: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               source: ik
+             }
+           };
+         if (!("gpu" in ek)) return bk(ek.refused);
+         let rk;
+         try {
+           rk = await (0, Ck.l)((0, yk.j)(ek.gpu, {
+             compatibility: ek.asked
+           }), be, `requestAdapter didn't settle in ${be/1e3} s`)
+         } catch {
+           return bk("adapter_error")
```

#### 30. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L485-L490` → after: `L381-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L381-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L381-L440) · [Before (L485-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L485-L490)

```diff
-         qQ.push({
-           kind: "text",
-           text: AQ(QQ, wQ),
-           size: tQ,
-           colour: eQ
-         })
+         if ("string" === typeof rk) return bk(rk);
+         const Pk = (0, yk.b)(rk);
+         if ((0, yk.e)(rk)) return bk("software_adapter", Pk);
+         const mk = kk.windows() && function(kk) {
+           return Ik.has((0, Sk.f)(kk.vendor, kk.architecture))
+         }(Pk);
+         if (kk.storeHoldbackSpared(mk), fk && !mk) return bk("webgl_holdback");
+         const Mk = kk.intelGen9(rk);
+         kk.storeIntelGen9Verdict(Mk);
+         const Kk = Mk ? null : kk.gpuClassWebGlArm(rk);
+         kk.storeGpuClassVerdict(null !== Kk && void 0 !== Kk && Kk);
+         const xk = kk.wasmArmOnWebGl(Pk);
+         if (kk.storeWasmArmVerdict(xk), Dk && kk.oldIntelDriver(rk)) return bk("old_intel_driver", Pk);
+         if ("default" === ik && Mk && kk.intelGen9OnWebGl()) return bk("intel_gen9", Pk);
+         if ("default" === ik && null !== Kk && kk.gpuClassOnWebGl(Kk)) return bk("gpu_class_webgl", Pk);
+         if ("default" === ik && xk) return bk("gpu_wasm_arm", Pk);
+ ... (44 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L495-L496` → after: `L444-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L444-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L444-L447) · [Before (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L495-L496)

```diff
-     function eQ(QQ) {
-       return void 0 !== QQ && "rank" !== QQ.kind
+     function Xk(kk, ek, ik) {
+       if ("webgpu" !== kk.backend) return !1;
+       const Dk = Ok(kk, ek, "terrainFetch", "texture", "storage");
+       return null !== Dk ? Dk : null !== kk.adapter && (0, wk.h)(kk.adapter, ik)
```

#### 32. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L500-L502` → after: `L451-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L451-L453) · [Before (L500-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L500-L502)

```diff
-       const wQ = eQ(QQ),
-         LQ = eQ(FQ);
-       return void 0 === QQ && !LQ || !wQ && void 0 === FQ ? 0 : wQ !== LQ ? .5 * vQ.HORIZONTAL_PADDING : 0
+       if ("webgpu" !== kk.backend) return !1;
+       const ik = Ok(kk, ek, "skyOrder", "early", "last");
+       return null !== ik ? ik : null !== kk.adapter && (0, Sk.f)(kk.adapter.vendor, kk.adapter.architecture) === qk
```

#### 33. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L505-L506` → after: `L456-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L456-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L456-L459) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L505-L506)

```diff
-     function GQ(QQ) {
-       return "rank" === QQ.kind ? vQ.DEFAULT_FONT_SIZE : QQ.size
+     function ck(kk, ek, ik) {
+       if ("webgpu" !== kk.backend) return !1;
+       const Dk = Ok(kk, ek, "sceneDepth", "off", "on");
+       return null !== Dk ? Dk : null !== kk.adapter && (0, wk.k)(kk.adapter, ik)
```

#### 34. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L509-L513` → after: `L462-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L462-L463) · [Before (L509-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L509-L513)

```diff
-     function pQ(QQ, FQ, wQ) {
-       return "icon" === QQ.kind ? QQ.size : "rank" === QQ.kind ? function(QQ, FQ) {
-         const wQ = FQ.rankIcon(QQ.rank.icon);
-         return wQ ? mQ * (wQ.width / wQ.height) : mQ
-       }(QQ, wQ) + vQ.HORIZONTAL_PADDING : (wQ.glyphsShown(QQ.text), FQ.font = uQ(QQ.size), FQ.measureText(QQ.text).width)
+     function Tk(kk, ek) {
+       return "webgl" === kk.backend ? Ok(kk, ek, "instancedTerrain", "1", "0") : null
```

#### 35. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L516-L537` → after: `L466-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L466-L467) · [Before (L516-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L516-L537)

```diff
-     function cQ(QQ, FQ, wQ) {
-       if (0 === QQ.length) return {
-         width: 0,
-         height: 0,
-         sizes: []
-       };
-       let LQ = 0;
-       for (const DQ of QQ) LQ = Math.max(LQ, GQ(DQ));
-       const qQ = [];
-       let oQ = MQ(void 0, QQ[0]);
-       for (let DQ = 0; DQ < QQ.length; DQ++) {
-         const LQ = oQ;
-         oQ += pQ(QQ[DQ], FQ, wQ), oQ += MQ(QQ[DQ], QQ[DQ + 1]), qQ.push({
-           x: LQ,
-           width: oQ - LQ
-         })
- ... (6 more removed lines; see GitHub link above)
+     function Zk(kk) {
+       return "webgpu" !== kk.backend || null === kk.adapter || !(0, Hk.I)(kk.adapter)
```

#### 36. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L540-L545` → after: `L470-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L470-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L470-L473) · [Before (L540-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L540-L545)

```diff
-     function CQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
-       FQ += MQ(void 0, QQ[0]);
-       for (let kQ = 0; kQ < QQ.length; kQ++) {
-         const vQ = SQ(QQ[kQ], FQ, wQ, LQ, qQ, oQ, DQ);
-         FQ += 0 === vQ ? 0 : vQ + MQ(QQ[kQ], QQ[kQ + 1])
-       }
+     function Ok(kk, ek, ik, Dk, fk) {
+       const Sk = new URLSearchParams(ek).get(ik),
+         bk = null !== Sk && void 0 !== Sk ? Sk : (0, Pk.f)(ik);
+       return bk !== Dk && bk !== fk ? null : (ak ||= null === Sk && "webgpu" === kk.backend, bk === Dk)
```

#### 37. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L548-L590` → after: `L476-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L476-L477) · [Before (L548-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L548-L590)

```diff
-     function SQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
-       var HQ;
-       if ("icon" === QQ.kind) {
-         const LQ = oQ.iconImage(QQ.icon);
-         return LQ && DQ.push({
-           image: LQ,
-           x: FQ,
-           y: wQ + vQ.VERTICAL_PADDING / 2,
-           size: QQ.size
-         }), QQ.size
-       }
-       if ("rank" === QQ.kind) {
-         const DQ = null !== kQ && void 0 !== kQ ? kQ : pQ(QQ, qQ, oQ);
-         return function(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
-           var kQ, uQ;
-           const {
- ... (27 more removed lines; see GitHub link above)
+     function gk(kk) {
+       return null !== kk && "missing" in kk
```

#### 38. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L593-L598` → after: `L480-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L480-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L480-L490) · [Before (L593-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L593-L598)

```diff
-     function iQ(QQ, FQ) {
-       for (const {
-           image: wQ,
-           x: LQ,
-           y: qQ,
-           size: oQ
+     function Gk(kk) {
+       return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Jk()) ? function(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk.b;
+         try {
+           const ik = "start_failed" === kk || "pipeline_failed" === kk,
+             Dk = ek.turnOffWebGpuAfterDeviceLoss(ik ? "visible" : (0, Hk.l)((0, nk.f)()), ik);
+           return !ak || Dk && !ek.isWebGpuOffAfterLoss() || (0, Pk.u)("webgpuLoss"), ek.isWebGpuOffAfterLoss() && "webgpu" === Ek(Uk.f.getItem(Mk.h)) && Uk.f.removeItem(Mk.h), (0, rk.s)("webgpuloss") && (0, mk.b)((ek => {
+             ek.noteWebGpuLoss("wasm", Dk ? kk : `${kk}, which storage didn't keep`, null)
+           })), Dk
+         } catch {
+           return !1
```

#### 39. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L600` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L492) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L600)

```diff
-         of QQ) FQ.imageSmoothingEnabled = !1, FQ.drawImage(wQ, LQ, qQ, oQ, oQ)
+       }(kk) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
```

#### 40. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L603-L604` → after: `L496-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L496-L498) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L603-L604)

```diff
-     function WQ(QQ, FQ, wQ, LQ, qQ, oQ) {
-       QQ.save(), QQ.translate(wQ, LQ), QQ.scale(qQ, qQ), QQ.fillStyle = oQ, QQ.fill(FQ), QQ.restore()
+     function Rk(kk) {
+       const ek = new URLSearchParams(kk).get(Nk);
+       return null !== ek && /^\d{1,9}$/.test(ek) ? Number(ek) : void 0
```

#### 41. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L607-L692` → after: `L501-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L501-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L501-L506) · [Before (L607-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L607-L692)

```diff
-     function RQ(QQ, FQ, wQ) {
-       const LQ = "object" === typeof QQ && null !== QQ ? QQ : {},
-         qQ = function(QQ, FQ, wQ) {
-           if (!Array.isArray(QQ) || 0 === QQ.length) return [];
-           const LQ = [{
-             width: 0,
-             height: 0,
-             y: 0,
-             items: []
-           }];
-           for (const DQ of tQ(QQ, vQ.DEFAULT_FONT_SIZE, wQ)) {
-             if ("text" !== DQ.kind) {
-               LQ[LQ.length - 1].items.push({
-                 content: DQ,
-                 chars: 1,
-                 size: {
- ... (70 more removed lines; see GitHub link above)
+     function Jk() {
+       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
+       try {
+         return "webgpu" === Ek(new URLSearchParams(kk).get(Mk.e))
+       } catch {
+         return !1
```

#### 42. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L725` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L511) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L725)

```diff
-       return "object" !== typeof QQ || null === QQ || Array.isArray(QQ) ? void 0 : QQ
+       return !!ee(kk) || kk instanceof Error && !(kk instanceof WebAssembly.RuntimeError) && kk.message.startsWith(`${Yk.p.RenderSurfaceUnusable}:`)
```

#### 43. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L729-L730` → after: `L514-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L514-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L514-L519) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L729-L730)

```diff
-     function XQ(QQ, FQ) {
-       return "string" === typeof QQ ? bQ(QQ, FQ) : FQ
+     function ee(kk) {
+       const {
+         name: ek,
+         message: ik
+       } = null !== kk && void 0 !== kk ? kk : {};
+       return "InvalidStateError" === ek && "string" === typeof ik && ik.startsWith("GPUDevice.")
```

#### 44. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L734` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L523-L524) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L734)

```diff
-       return XQ(QQ.width, UQ)
+       const ek = kk;
+       return "function" === typeof ek.Iik && "function" === typeof ek.zik ? ek : null
```

#### 45. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L737-L740` → after: `L527-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L527-L528) · [Before (L737-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L737-L740)

```diff
-     function VQ(QQ, FQ) {
-       var wQ;
-       const LQ = null !== (wQ = QQ.applyTo) && void 0 !== wQ ? wQ : "both";
-       return "both" === LQ || LQ === FQ
+     function De(kk) {
+       return "function" === typeof kk.Jw ? kk : null
```

#### 46. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L744-L745` → after: `L533-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L533-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L533-L534) · [Before (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L744-L745)

```diff
-       const FQ = fQ(QQ);
-       return "glow" === QQ.style ? FQ * NQ : Math.ceil(FQ / 2) + 1
+       const ek = null === kk || void 0 === kk ? void 0 : kk.Nfk();
+       return void 0 === ek ? void 0 : new Error(ek)
```

#### 47. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L748-L771` → after: `L539-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L539-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L539-L550) · [Before (L748-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L748-L771)

```diff
-     function JQ(QQ, FQ, wQ) {
-       var LQ, qQ;
-       const oQ = null !== (LQ = jQ(QQ.info)) && void 0 !== LQ ? LQ : {},
-         kQ = "string" === typeof QQ.name ? QQ.name : "",
-         mQ = oQ.subtitle;
-       if (Array.isArray(oQ.content) && 0 === oQ.content.length && !(Array.isArray(mQ) && mQ.length > 0)) return null;
-       const uQ = "number" === typeof QQ.hideNameSeed ? QQ.hideNameSeed : null,
-         HQ = "" === kQ || !0 === QQ.mesh ? kQ : (0, sQ.e)(kQ, !wQ.canSeeRealPlayerNames, uQ);
-       if (!HQ && !oQ.content) return null;
-       const bQ = "string" === typeof QQ.colour ? QQ.colour : "default",
-         YQ = Object.hasOwn(DQ.s, bQ) ? DQ.s[bQ] : void 0,
-         AQ = oQ.content ? tQ(oQ.content, vQ.DEFAULT_FONT_SIZE, wQ, YQ) : [{
-           kind: "text",
-           text: HQ,
-           size: vQ.DEFAULT_FONT_SIZE,
-           colour: YQ
- ... (8 more removed lines; see GitHub link above)
+     function Pe(kk, ek, ik, Dk, fk, Sk) {
+       return (0, Ck.l)(function(kk, ek, ik, Dk, fk, Sk) {
+         return (0, Ak.g)(kk, ek, (() => kk.Jw(ik, Dk, fk, Sk.indirectHangs, Sk.storagePullBreaks, Sk.splitPassBreaks, Sk.earlySky, Sk.instancedTerrain, Sk.framesAhead, Sk.webGpuRestores)))
+       }(kk, ek, ik, Dk, fk, Sk), re, `${Yk.p.RenderSurfaceUnusable}: the renderer didn't open in ${re/1e3} s`, Me)
+     }
+     async function me(kk, ek, ik, Dk, fk, Sk) {
+       if ("function" !== typeof kk.hSk) throw new Error("this core has no set_renderer");
+       const bk = await Pe(ek, fe, ik, fk, Dk, Sk);
+       try {
+         kk.hSk(bk)
+       } catch (rk) {
+         throw Me(bk), rk
```

#### 48. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L773-L812` → after: `L552-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L552-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L552-L592) · [Before (L773-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L773-L812)

```diff
-       eQ.push(...AQ);
-       ("boolean" === typeof QQ.player ? QQ.player : Array.isArray(QQ.ranks)) && "" !== kQ && wQ.isFriend(kQ) && eQ.push({
-         kind: "rank",
-         rank: lQ
-       }), "number" === typeof QQ.kD && eQ.push({
-         kind: "text",
-         text: ` ${QQ.kD}m`,
-         size: vQ.DEFAULT_FONT_SIZE,
-         colour: "#cef3ff"
-       });
-       const MQ = mQ ? tQ(mQ, vQ.DEFAULT_SUBTITLE_FONT_SIZE, wQ) : null,
-         GQ = "string" === typeof oQ.backgroundColor ? oQ.backgroundColor : "#22283b",
-         pQ = "string" === typeof oQ.subtitleBackgroundColor ? oQ.subtitleBackgroundColor : "#1a1e2d",
-         SQ = jQ(oQ.healthbar),
-         WQ = jQ(oQ.border),
-         RQ = Array.isArray(QQ.effects) ? QQ.effects.filter((QQ => "string" === typeof QQ && aQ.has(QQ))) : [],
- ... (24 more removed lines; see GitHub link above)
+     }
+ 
+     function Me(kk) {
+       try {
+         kk.free()
+       } catch {}
+     }
+   },
+   40407: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk
+     });
+     const Dk = {
+       destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
+       destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
+       destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
+ ... (25 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L814-L881` → after: `L594-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L594-L596) · [Before (L814-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L814-L881)

```diff
-         width: BQ,
-         height: dQ,
-         draw: QQ => {
-           const FQ = [];
-           if (QQ.fillStyle = GQ, QQ.fillRect(LF, qF, wF, rQ.height), CQ(eQ, (BQ - QF) / 2 + vQ.HORIZONTAL_PADDING / 2, qF, rQ.height, QQ, wQ, FQ), MQ) {
-             const LQ = qF + rQ.height;
-             QQ.fillStyle = pQ, QQ.fillRect(LF, LQ, wF, UQ.height), CQ(MQ, (BQ - FF) / 2 + vQ.HORIZONTAL_PADDING / 2, LQ, UQ.height, QQ, wQ, FQ)
-           }
-           let LQ = null;
-           if (null !== OQ) {
-             const FQ = dQ - nQ - gQ;
-             null !== SQ && void 0 !== SQ && SQ.backgroundColour && (QQ.fillStyle = SQ.backgroundColour, QQ.fillRect(LF, FQ, wF, nQ)), QQ.fillStyle = function(QQ, FQ) {
-               const wQ = null === QQ || void 0 === QQ ? void 0 : QQ.foregroundColour;
-               if ("string" === typeof wQ) return wQ;
-               const LQ = [...Array.isArray(wQ) && wQ.length > 0 ? wQ : TQ].sort(((QQ, FQ) => QQ.healthFraction - FQ.healthFraction)),
-                 qQ = LQ.find((QQ => FQ <= QQ.healthFraction));
- ... (52 more removed lines; see GitHub link above)
+         promise: new Promise((ek => {
+           kk = () => {
+             ek(null)
```

#### 50. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L883` → after: `L598-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L598-L599) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L883)

```diff
-         }
+         })),
+         resolve: kk
```

#### 51. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L886-L891` → after: `L602-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L602-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L602-L627) · [Before (L886-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L886-L891)

```diff
-     var EQ = wQ(38183);
-     const nQ = 256,
-       gQ = 1024,
-       PQ = {
-         width: 1,
-         height: 7 / 8
+ 
+     function Mk() {
+       if (null === bk) {
+         const kk = Sk();
+         bk = kk, kk.then((ek => {
+           bk === kk && (rk = ek)
+         }), (() => {
+           bk === kk && (bk = null)
+         }))
+       }
+       return bk
+     }
+ 
+     function Kk() {
+       Mk().catch((() => {}))
+     }
+ ... (10 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L893-L897` → after: `L629-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L629-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L629-L846) · [Before (L893-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L893-L897)

```diff
-     var ZQ = wQ(38188);
-     const yQ = {
-       leaderboard: ""
-     };
-     var BQ = wQ(41972);
+       const {
+         fingerprint: Sk
+       } = kk.clientErrorKey(ek, ik, Dk);
+       return {
+         errorKind: ek,
+         fingerprint: Sk,
+         dedupe: Sk
+       }
+     }
+ 
+     function Uk(kk, ek, ik, Dk) {
+       return null === rk ? Dk ? (Kk(), nk(null, kk, ek, ik)) : null : nk(rk, kk, ek, ik)
+     }
+     async function Hk(kk, ek, ik) {
+       let fk;
+       const Sk = new Promise((kk => {
+ ... (202 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L899-L902` → after: `L848-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L848-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L848-L872) · [Before (L899-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L899-L902)

```diff
-         Nametag: 1,
-         MultilineText: 2,
-         Board: 3,
-         Leaderboard: 4
+         crash: "wasm_load",
+         unsupported: "wasm_load",
+         model: "wasm_load",
+         join: "matchmake_failed",
+         pageJoin: null,
+         unsupportedFallback: "wasm_load",
+         gpuFallback: null,
+         coreError: null,
+         meshHeap: null,
+         recovered: null,
+         unstreamedLoad: null,
+         modelLate: null,
+         worldgenLoad: null,
+         texturePackLoad: null,
+         texturePackKeptOut: null,
+         terrainTexture: null,
+ ... (9 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L904-L912` → after: `L874-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L874-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L874-L886) · [Before (L904-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L904-L912)

```diff
-       QF = 2048,
-       FF = 256,
-       wF = 10,
-       LF = 4,
-       qF = 65536,
-       oF = new TextDecoder;
-     let DF = BQ.n,
-       kF = -1;
-     const vF = new Map,
+       we = {
+         coreError: "wasm_load",
+         recovered: "wasm_load",
+         unstreamedLoad: "wasm_load",
+         noTerrain: "wasm_load",
+         mainStall: "wasm_load",
+         gpuFallback: "wasm_load",
+         texturePackKeptOut: "texture_pack"
+       },
+       le = new Set(["unstreamedLoad"]),
+       pe = new Set(["linkCensus", "linksReadAfterView"]);
+     let ye = !1;
+     const Ye = 20,
```

#### 55. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L914-L915` → after: `L888-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L888-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L888-L891) · [Before (L914-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L914-L915)

```diff
-     let uF = 0;
-     const HF = new TextEncoder;
+     let Ce = 0,
+       Ae = 0;
+     const je = new Set,
+       se = new Set;
```

#### 56. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L918-L920` → after: `L894-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L894-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L894-L898) · [Before (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L918-L920)

```diff
-       const wQ = HF.encode(JSON.stringify(FQ)),
-         LQ = new Uint8Array(wQ.length + 1);
-       return LQ[0] = QQ, LQ.set(wQ, 1), LQ
+       const ik = Object.assign(new Error(`${kk.code}: ${kk.message}`), {
+         name: "WasmClientCrash",
+         cause: null !== ek && void 0 !== ek ? ek : void 0
+       });
+       return ek instanceof Error && ek.stack && (ik.stack = ek.stack), ik
```

#### 57. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L955-L959` → after: `L902-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L902-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L902-L948) · [Before (L955-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L955-L959)

```diff
-       BQ.f.load().then((() => {
-         if (QQ()) return;
-         const FQ = (0, qQ.d)(1, 1, {
-           willReadFrequently: !0
-         });
+       var ek, Dk;
+       const {
+         kind: fk,
+         code: Sk,
+         site: bk,
+         fatal: rk,
+         message: Pk,
+         error: mk
+       } = kk, Mk = !1 !== kk.toTransport && !le.has(fk), Kk = !rk && Mk && !pe.has(fk), xk = {
+         kind: fk,
+         code: Sk,
+         site: bk,
+         fatal: rk,
+         message: Pk,
+         details: null !== (ek = kk.details) && void 0 !== ek ? ek : {}
+       }, nk = `${Sk}@${bk}${void 0===kk.instance?"":`#${kk.instance}`}${rk?"!":""}`, Uk = (null !== (Dk = Le.get(nk)) && void 0 !== Dk ? Dk : 0) + 1;
+ ... (31 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L961` → after: `L950-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L950-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L950-L966) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L961)

```diff
-         FQ && (wQ = FQ.canvas, xF.map((QQ => CF(QQ, wQ))))
+         const ek = null !== (Hk = kk.screen) && void 0 !== Hk ? Hk : {
+           text: (0, Fk.g)(xk, !0),
+           reload: !0
+         };
+         qe((() => {
+           me(ek)
+         }))
+       }
+       return xk
+     }
+ 
+     function Fe(kk) {
+       Ie("counts", (async () => {
+         const {
+           peekVisitSessionId: ek
+         } = await Promise.resolve().then((() => ik(630)));
+ ... (1 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L966-L967` → after: `L970-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L970-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L970-L986) · [Before (L966-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L966-L967)

```diff
-     function eF() {
-       vF.clear(), mF.clear()
+     function ue(kk) {
+       je.has(kk.errorKind) || (je.add(kk.errorKind), Fe((async () => {
+         const {
+           reportClientError: ek
+         } = await Promise.resolve().then((() => ik(2866)));
+         ek(kk.errorKind, kk.error, kk.code, !0, void 0, kk.fields)
+       })))
+     }
+ 
+     function qe(kk) {
+       try {
+         kk()
+       } catch (ek) {
+         try {
+           console.warn(`${vk} could not send a report`, ek)
+         } catch {}
+ ... (1 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L971-L972` → after: `L990-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L990-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L990-L1020) · [Before (L971-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L971-L972)

```diff
-       const wQ = QQ.get(FQ);
-       return void 0 !== wQ && (QQ.delete(FQ), QQ.set(FQ, wQ)), wQ
+       try {
+         const ik = ek().catch((ek => {
+           console.warn(`${vk} could not send the report to ${kk}`, ek)
+         })).finally((() => {
+           se.delete(ik)
+         }));
+         se.add(ik)
+       } catch (ik) {
+         console.warn(`${vk} could not send the report to ${kk}`, ik)
+       }
+     }
+     async function ze(kk) {
+       let ek;
+       (0, rk.g)();
+       const ik = new Promise((ik => {
+         ek = setTimeout(ik, kk)
+ ... (15 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L975-L976` → after: `L1023-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1023-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L1023-L1024) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L975-L976)

```diff
-     function GF(QQ, FQ, wQ) {
-       QQ.set(FQ, wQ), QQ.size > FF && QQ.delete(QQ.keys().next().value)
+     function Ee() {
+       Le.clear(), Ce = 0, ye = !1, De = 0, fe.clear(), Ae = 0, je.clear(), (0, mk.p)()
```

#### 62. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L979-L998` → after: `L1027-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1027-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L1027-L1036) · [Before (L979-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L979-L998)

```diff
-     function pF(QQ, FQ, wQ) {
-       if (QQ === dQ.Nametag) {
-         let QQ = MF(vF, FQ);
-         return void 0 === QQ && (QQ = JQ(JSON.parse(FQ), wQ, DF), GF(vF, FQ, QQ)), QQ
-       }
-       if (QQ === dQ.MultilineText) {
-         var qQ;
-         const QQ = JSON.parse(FQ),
-           LQ = JSON.stringify(null !== (qQ = QQ.box) && void 0 !== qQ ? qQ : null),
-           oQ = "number" === typeof QQ.shown ? QQ.shown : null;
-         let DQ = MF(mF, LQ);
-         void 0 === DQ && (DQ = RQ(QQ.box, wQ, DF), GF(mF, LQ, DQ));
-         const kQ = null === oQ ? null : Math.min(Math.max(0, Math.floor(oQ)), DQ.chars),
-           vQ = DQ;
-         return {
-           width: vQ.width,
- ... (4 more removed lines; see GitHub link above)
+     function he(kk) {
+       const ek = "object" === typeof kk && null !== kk ? kk.type : kk;
+       return "string" !== typeof ek ? "sky not named" : `sky ${JSON.stringify(Array.from(ek).slice(0,ee).join(""))}`
+     }
+ 
+     function ae(kk, ek, ik, Dk) {
+       Ae += ek;
+       for (const {
+           code: rk,
+           detail: Mk
```

#### 63. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1001-L1015` → after: `L1068-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1068-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L1068-L1087) · [Before (L1001-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L1001-L1015)

```diff
-       if (QQ === dQ.Board) return function(QQ, FQ) {
-         var wQ;
-         if (!FQ.canSeePlayerWrittenText) return null;
-         const {
-           shared: qQ,
-           w: oQ = 0,
-           h: DQ = 0
-         } = QQ, kQ = !oQ;
-         let vQ;
-         if (kQ) {
-           var mQ, uQ;
-           vQ = null !== (mQ = null === qQ || void 0 === qQ || null === (uQ = qQ.text) || void 0 === uQ ? void 0 : uQ.toString()) && void 0 !== mQ ? mQ : ""
-         } else {
-           if ("string" !== typeof(null === qQ || void 0 === qQ ? void 0 : qQ.text)) return null;
-           vQ = qQ.text
+     }
+ 
+     function We(kk, ek) {
+       return kk === Pk.P.RenderDeviceLost && 0 !== (ek & Pk.Z.RESTORE_UNHELD) ? "restoreUnheld" : void 0
+     }
+ 
+     function te(kk, ek) {
+       return kk === Pk.P.JobsHeapGaveUp ? "meshHeap" : (0, mk.g)(kk, ek) ? "linksReadAfterView" : (0, mk.f)(kk, ek) ? "linkCensus" : "coreError"
+     }
+ 
+     function Xe(kk) {
+       return (0, qk.h)(kk instanceof Ik.d ? kk.trap : kk, Ak.J, Ak.gb)
+     }
+     const Be = "declined=js";
+ 
+     function ce(kk) {
+ ... (4 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1017-L1031` → after: `L1089-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1089-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L1089-L1144) · [Before (L1017-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L1017-L1031)

```diff
-         if ("" === vQ.trim()) return null;
-         const HQ = null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ.textSize) && void 0 !== wQ ? wQ : 0,
-           bQ = LQ.e[HQ].ingameFontSize;
-         let YQ = PQ,
-           xQ = nQ;
-         kQ || (vQ = (0, LQ.o)(vQ, HQ, oQ, DQ), YQ = (0, LQ.s)(oQ, DQ), xQ = Math.min(nQ, gQ / Math.max(YQ.width, YQ.height)));
-         const AQ = Math.round(xQ * YQ.width),
-           tQ = Math.round(xQ * YQ.height),
-           eQ = xQ / nQ;
-         return {
-           width: AQ,
-           height: tQ,
-           draw: QQ => {
-             EQ.e.fontSize = bQ * eQ, EQ.e.fontWeight = "bold", EQ.e.font = "'Jetbrains Mono', monospace", EQ.e.drawText(QQ, vQ, 0, (-10 - 7 * HQ) * eQ, AQ, tQ)
-           }
+       } : {
+         labels: [],
+         details: {}
+       }
+     }
+ 
+     function Te(kk, ek, ik) {
+       return Ze(kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
+     }
+ 
+     function oe(kk, ek, ik) {
+       return Ze(kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
+     }
+ 
+     function Ze(kk, ek, ik, Dk, fk) {
+       let {
+ ... (40 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1033-L1053` → after: `L1146-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1146-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L1146-L1161) · [Before (L1033-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L1033-L1053)

```diff
-       }(JSON.parse(FQ), DF);
-       if (QQ === dQ.Leaderboard) return function(QQ, FQ, wQ) {
-         var LQ;
-         const qQ = (0, ZQ.k)(QQ.opts, yQ),
-           oQ = (0, ZQ.d)(qQ, wQ),
-           DQ = {
-             top: (0, ZQ.h)(qQ, (0, ZQ.l)(QQ.top)),
-             around: null !== (LQ = QQ.around) && void 0 !== LQ ? LQ : null,
-             showPlayerText: FQ.canSeePlayerWrittenText,
-             localPlayerDbId: FQ.localPlayerDbId
-           };
-         return {
-           width: oQ.pixelWidth,
-           height: oQ.pixelHeight,
-           draw: QQ => {
-             const {
- ... (5 more removed lines; see GitHub link above)
+       })
+     }
+ 
+     function ge(kk, ek, ik) {
+       return Ve({
+         kind: "unsupportedFallback",
+         code: "blockedAfterLoss" === ek ? "blocked_after_loss" : "unsupported_js_fallback",
+         site: hk,
+         fatal: !1,
+         message: ik,
+         details: {
+           ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
+           cause: kk,
+           status: "unsupported",
+           decline: ek,
+           fallback: "js"
```

#### 66. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1055-L1056` → after: `L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L1163) · [Before (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L1055-L1056)

```diff
-       }(JSON.parse(FQ), DF, QF);
-       throw new Error(`unknown text plane kind ${QQ}`)
+       })
```

#### 67. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1058` → after: `L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L1165) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L1058)

```diff
-     const cF = 2 ** Math.floor(Math.log2(QF));
+     const Ge = "misdrawn_gpu_js_fallback";
```

#### 68. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1061-L1075` → after: `L1168-L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1168-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L1168-L1177) · [Before (L1061-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L1061-L1075)

```diff
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       try {
-         if (QQ.length < 2) return [0, 0];
-         const oQ = (0, qQ.b)(FQ);
-         if (!oQ) return [0, 0];
-         const DQ = tF();
-         DQ !== kF && (kF = DQ, eF());
-         const [kQ] = QQ, vQ = oF.decode(QQ.subarray(1));
-         let mQ;
-         kQ !== dQ.Board && kQ !== dQ.Leaderboard || !DF.canSeePlayerWrittenText || DF.glyphsShown(vQ), oQ.save();
-         try {
-           mQ = pF(kQ, vQ, oQ)
-         } finally {
-           oQ.restore()
+       return Ve({
+         kind: "gpuFallback",
+         code: Ge,
+         site: hk,
+         fatal: !1,
+         message: `the renderer plays ${kk} on ${ek} worse than the JS client`,
+         details: {
+           gpuFamily: kk,
+           backend: ek,
+           fallback: "js"
```

#### 69. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1077-L1095` → after: `L1179-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1179-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L1179-L1190) · [Before (L1077-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L1077-L1095)

```diff
-         if (null === mQ || !(mQ.width > 0 && mQ.height > 0)) return [0, 0];
-         const uQ = Math.min(1, QF / mQ.width, QF / mQ.height),
-           HQ = QQ => LQ ? function(QQ) {
-             const FQ = 2 ** Math.ceil(Math.log2(QQ));
-             return Math.min(cF, FQ - QQ > QQ - FQ / 2 ? FQ / 2 : FQ)
-           }(QQ) : Math.min(QF, Math.ceil(QQ * uQ)),
-           [bQ, YQ] = [HQ(mQ.width), HQ(mQ.height)];
-         ! function(QQ, FQ, wQ, LQ, qQ) {
-           const oQ = Math.max(QQ.width, wQ),
-             DQ = Math.max(QQ.height, LQ),
-             kQ = qQ || oQ * DQ > Math.max(LF * wQ * LQ, qF),
-             [vQ, mQ] = kQ ? [wQ, LQ] : [oQ, DQ];
-           vQ === QQ.width && mQ === QQ.height ? FQ.clearRect(0, 0, vQ, mQ) : (QQ.width = vQ, QQ.height = mQ)
-         }(FQ, oQ, bQ, YQ, wQ), oQ.save();
-         try {
-           const [QQ, FQ] = LQ ? [bQ / mQ.width, YQ / mQ.height] : [uQ, uQ];
- ... (3 more removed lines; see GitHub link above)
+       })
+     }
+ 
+     function Re(kk) {
+       return Ve({
+         kind: "recovered",
+         code: "WEBGPU-unknownLimits",
+         site: Jk,
+         fatal: !1,
+         message: "WebGPU dropped required limits the browser doesn't name",
+         details: {
+           limits: kk.join(",")
```

#### 70. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L1097-L1105` → after: `L1192-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L1192-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/137.js#L1192-L1305) · [Before (L1097-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/137.js#L1097-L1105)

```diff
-         return [bQ, YQ]
-       } catch (oQ) {
-         ! function(QQ, FQ) {
-           uF < wF && (uF++, console.warn(`[bloxd-wasm-client] ${QQ}`, FQ))
-         }("could not raster a text plane", oQ);
-         try {
-           FQ.width = 1
-         } catch {}
-         return [0, 0]
+       })
+     }
+ 
+     function Je(kk) {
+       Ie("counts", (async () => {
+         await (0, nk.e)(kk), ye = !0
+       }))
+     }
+ 
+     function ki(kk, ek, ik, Dk) {
+       const fk = ce(Dk);
+       return Ve({
+         kind: "unsupported",
+         code: ek,
+         site: hk,
+         fatal: !1,
+ ... (98 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/138.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/138.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4)

#### 1. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/138.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/138.js#L4)

```diff
-   7879: (QQ, FQ, wQ) => {
+   6479: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L6-L12` → after: `L6-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L6-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/138.js#L6-L245) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/138.js#L6-L12)

```diff
-       encodeBinaryMessageWithMetricsCookies: () => qQ
-     });
-     var LQ = wQ(3621);
- 
-     function qQ(QQ) {
-       return LQ.i.toBuffer(QQ)
-     }
+       c: () => Yk,
+       g: () => Lk,
+       j: () => pk,
+       n: () => lk
+     });
+     var Dk = ik(6484);
+     const fk = 6,
+       Sk = 3,
+       bk = 1,
+       rk = 2,
+       Pk = 4,
+       mk = 8,
+       Mk = 16,
+       Kk = 32,
+       xk = 64,
+       nk = 128,
+ ... (224 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/139.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/139.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28)

#### 1. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/139.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/139.js#L4)

```diff
-   7881: (QQ, FQ, wQ) => {
+   41318: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/139.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/139.js#L6-L8)

```diff
-       BloxdDiscordSDK: () => AQ,
-       DiscordLoginCancelledError: () => xQ,
-       discordPopupTimeoutMs: () => YQ
+       compilePagePack: () => mk,
+       prefetchCompiler: () => rk,
+       reconcileHint: () => Pk
```

#### 3. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L10-L78` → after: `L10-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L10-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/139.js#L10-L50) · [Before (L10-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/139.js#L10-L78)

```diff
-     var LQ = wQ(160),
-       qQ = wQ(1243),
-       oQ = wQ(1147),
-       DQ = wQ(1158),
-       kQ = wQ.n(DQ),
-       vQ = wQ(1213),
-       mQ = wQ(27),
-       uQ = wQ(619),
-       HQ = wQ(1362),
-       bQ = wQ(1221);
-     const YQ = 6e5;
-     class xQ extends Error {
-       constructor() {
-         super(...arguments), this.name = oQ.discordLoginCancelledErrorName
-       }
-     }
- ... (53 more removed lines; see GitHub link above)
+     var Dk = ik(6451),
+       fk = ik(6498),
+       Sk = ik(6477),
+       bk = ik(6493);
+ 
+     function rk() {
+       (0, Dk.loadPageShaderPackCompiler)()
+     }
+     async function Pk() {
+       const kk = await (0, Dk.loadPageShaderPackCompiler)();
+       await (kk ? (0, fk.reconcileStoredShaderPackHint)(kk) : (0, fk.forgetShaderPackActiveHint)())
+     }
+     async function mk(kk) {
+       const ek = await (0, Dk.loadPageShaderPackCompiler)();
+       if (!ek) return {
+         status: "none"
+ ... (25 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L80-L109` → after: `L52-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L52-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/139.js#L52-L204) · [Before (L80-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/139.js#L80-L109)

```diff
-         if (console.log("Discord OAuth window opened:", FQ), !FQ) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
-         this.popupWindow = FQ;
-         const wQ = window.setInterval((() => {
-           FQ.closed && this.popupWindowPromise === QQ && (window.clearInterval(wQ), this.popupWindowCheckInterval = null, window.setTimeout((() => {
-             this.popupWindowPromise === QQ && this.failPopup(new xQ("Discord authentication was cancelled - popup window was closed"))
-           }), 1e3))
-         }), 200);
-         this.popupWindowCheckInterval = wQ
-       }
-       async exchangeAuthorizationCodeForAccessToken(QQ, FQ) {
-         const {
-           accessToken: wQ,
-           refreshToken: LQ
-         } = await kQ()((async () => await (0, oQ.postJsonWithMetricsCookiesAndJsonResponse)(`${vQ.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
-           authorizationCode: QQ,
-           bloxdClientEnvironment: bQ.d.clientEnvironment,
- ... (14 more removed lines; see GitHub link above)
+       }
+     }
+   },
+   6498: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       forgetShaderPackActiveHint: () => Fk,
+       isOtherApiVersion: () => jk,
+       isShaderPackActive: () => Yk,
+       isShaderPackChangePending: () => Ak,
+       markShaderPackChangePending: () => Ck,
+       pageShaderPackValidationVersion: () => sk,
+       reconcileStoredShaderPackHint: () => Vk,
+       removeShaderPack: () => yk,
+       replaceShaderPack: () => wk,
+       saveShaderPack: () => Hk,
+       shaderPackNeedsCheck: () => dk,
+ ... (137 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L113-L125` → after: `L207-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L207-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/139.js#L207-L234) · [Before (L113-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/139.js#L113-L125)

```diff
-           const LQ = await kQ()((async () => {
-             try {
-               return await (0, oQ.postJsonWithMetricsCookiesAndJsonResponse)(`${vQ.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
-                 refreshToken: FQ
-               }, {
-                 retries: 0
-               }, QQ.getMetricsCookies())
-             } catch (wQ) {
-               if (tQ(wQ)) throw new(kQ().AbortError)(wQ);
-               throw wQ
-             }
-           }), {
-             retries: 3
+           const ek = await (0, Sk.t)(kk);
+           return ek ? await ek.requestDevice() : null
+         } catch (ek) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", ek), null
+         }
+       }(Dk);
+       if (!rk) return null;
+       let Pk = !1;
+       rk.lost.then((() => {
+         Pk = !0
+       }));
+       try {
+         const ek = await Promise.all(bk.validationModules.map((ek => async function(kk, ek, ik) {
+           ek.pushErrorScope("validation");
+           const Dk = ek.createShaderModule({
+               code: ik.code
+ ... (12 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L127-L141` → after: `L236-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L236-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/139.js#L236-L268) · [Before (L127-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/139.js#L127-L141)

```diff
-           wQ = LQ.accessToken, mQ.d.setItem(this.bloxdDiscordRefreshTokenKey, LQ.refreshToken)
-         } catch (LQ) {
-           return tQ(LQ) ? (mQ.d.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", LQ), null)
-         }
-         return {
-           accessToken: wQ
-         }
-       }
-       signOut() {
-         this.failPopup(new xQ("Signed out of Discord during login")), mQ.d.removeItem(this.bloxdDiscordRefreshTokenKey)
-       }
-     }
- 
-     function tQ(QQ) {
-       return QQ instanceof LQ.d && 435 === QQ.httpCode
+           return bk
+         }(kk, rk, ek))));
+         return Pk ? null : mk(kk, kk.uik(ek.flat()), bk.offInStrict)
+       } catch (Mk) {
+         return console.error("Couldn't validate the shader pack on WebGPU.", Mk), null
+       } finally {
+         rk.destroy()
+       }
+     }
+     async function Pk(kk, ek) {
+       var ik;
+       if (!(0, Dk.shaderPackNeedsCheck)(kk, ek) || (0, Dk.isOtherApiVersion)(kk)) return kk;
+       const fk = await rk(ek, (0, Dk.storedShaderPackFiles)(kk));
+       if (!fk) return kk;
+       const Sk = !1 === (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) && !kk.validation.fromRecheck,
+         bk = {
+ ... (17 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/140.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/140.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846)

#### 1. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L4-L159` → after: `L5-L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L5-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/140.js#L5-L2417) · [Before (L4-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/140.js#L4-L159)

```diff
-   7889: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       BloxdFirebaseSdk: () => uQ
-     });
-     var LQ = wQ(1821),
-       qQ = wQ(2845),
-       oQ = wQ(106),
-       DQ = wQ(96),
-       kQ = wQ(1694),
-       vQ = wQ(2004);
-     const mQ = {
-       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-       authDomain: "bloxd-ee1aa.firebaseapp.com",
-       projectId: "bloxd-ee1aa",
-       storageBucket: "bloxd-ee1aa.appspot.com",
-       messagingSenderId: "758847442742",
- ... (140 more removed lines; see GitHub link above)
+   6550: (kk, ek, ik) => {
+     var Dk = ik(6554);
+     ek.b = {
+       prefix: Dk.prefix,
+       iconName: Dk.iconName,
+       icon: [Dk.width, Dk.height, Dk.aliases, Dk.unicode, Dk.svgPathData]
+     }, ek.c = ek.b, Dk.prefix, Dk.iconName, Dk.width, Dk.height, Dk.aliases, Dk.unicode, Dk.svgPathData, Dk.aliases
+   },
+   6563: (kk, ek, ik) => {
+     var Dk = ik(6566);
+     ek.c = {
+       prefix: Dk.prefix,
+       iconName: Dk.iconName,
+       icon: [Dk.width, Dk.height, Dk.aliases, Dk.unicode, Dk.svgPathData]
+     }, ek.g = ek.c, Dk.prefix, Dk.iconName, Dk.width, Dk.height, Dk.aliases, Dk.unicode, Dk.svgPathData, Dk.aliases
+   },
+ ... (2397 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/141.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/141.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5)

#### 1. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L4-L6` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L4-L17) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L4-L6)

```diff
-   7892: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       BloxdDiscordActivitySdk: () => MQ
+   7894: (kk, ek) => {
+     var ik = "youtube",
+       Dk = [61802],
+       fk = "f167",
+       Sk = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+     ek.e = {
+       prefix: "fab",
+       iconName: ik,
+       icon: [576, 512, Dk, fk, Sk]
+     }, ek.f = ek.e
+   },
+   6695: (kk, ek) => {
+     Object.defineProperty(ek, "__esModule", {
+       value: !0
```

#### 2. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L8-L26` → after: `L19-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L19-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L19-L167) · [Before (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L8-L26)

```diff
-     var LQ = wQ(7896),
-       qQ = wQ(1243),
-       oQ = wQ(1207),
-       DQ = wQ(619),
-       kQ = wQ(1265),
-       vQ = wQ(1725),
-       mQ = wQ(1339),
-       uQ = wQ(745),
-       HQ = wQ(17),
-       bQ = wQ(1221),
-       YQ = function(QQ) {
-         return QQ.APPLICATION_COMMANDS = "applications.commands", QQ.IDENTIFY = "identify", QQ.EMAIL = "email", QQ.GUILDS = "guilds", QQ.READ_DM_CHANNELS = "dm_channels.read", QQ.WRITE_ACTIVITIES = "rpc.activities.write", QQ
-       }(YQ || {}),
-       xQ = function(QQ) {
-         return QQ[QQ.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", QQ[QQ.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", QQ[QQ.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", QQ[QQ.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", QQ[QQ.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", QQ[QQ.RATELIMITE … [truncated]
-       }(xQ || {}),
- ... (3 more removed lines; see GitHub link above)
+     var ik = "bolt",
+       Dk = [9889, "zap"],
+       fk = "f0e7",
+       Sk = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
+     ek.definition = {
+       prefix: "fas",
+       iconName: ik,
+       icon: [448, 512, Dk, fk, Sk]
+     }, ek.faBolt = ek.definition, ek.prefix = "fas", ek.iconName = ik, ek.width = 448, ek.height = 512, ek.ligatures = Dk, ek.unicode = fk, ek.svgPathData = Sk, ek.aliases = Dk
+   },
+   7403: (kk, ek) => {
+     var ik = "person-military-pointing",
+       Dk = [],
+       fk = "e54a",
+       Sk = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l1 … [truncated]
+     ek.b = {
+ ... (133 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L28-L56` → after: `L169-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L169-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L169-L204) · [Before (L28-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L28-L56)

```diff
-         Minigames: "Playing",
-         Puzzle: "Solving",
-         Escape: "Escaping",
-         Parkour: "Parkouring",
-         "Cool Parkour": "Parkouring",
-         "Two Player Parkour": "Parkouring",
-         "Clutch Parkour": "Parkouring",
-         "Challenging Parkour": "Parkouring",
-         "Progressive Parkour": "Parkouring",
-         "Themed Parkour": "Parkouring",
-         Obby: "Parkouring",
-         Tower: "Climbing",
-         Roleplay: "Roleplaying",
-         Arena: "Battling",
-         Duels: "Duelling",
-         Shooting: "Shooting",
- ... (13 more removed lines; see GitHub link above)
+       youtube: Uk.f,
+       "person-military-pointing": Hk.d,
+       sparkle: wk.e,
+       user: lk.e,
+       wrench: pk.d,
+       zap: yk.c
+     };
+ 
+     function Lk(kk) {
+       const [ek, ik, , , Dk] = kk.icon;
+       return {
+         width: ek,
+         height: ik,
+         path: "string" === typeof Dk ? Dk : Dk.join(" ")
+       }
+     }
+ ... (20 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L59-L62` → after: `L216-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L216-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L216-L220) · [Before (L59-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L59-L62)

```diff
-         goalRush: "Playing",
-         heroesvbrainrots: "Battling",
-         hideseek: "Playing",
-         bingo: "Playing"
+         translate: kk => [kk],
+         keyBindingText: kk => kk,
+         isFriend: () => !1,
+         hiddenNames: {},
+         loadsFontRest: !1
```

#### 5. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L64` → after: `L222-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L222-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L222-L238) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L64)

```diff
-     class MQ {
+     let hk = null,
+       ak = 0,
+       Wk = "none";
+ 
+     function tk() {
+       return ak
+     }
+ 
+     function Xk() {
+       ak++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? Wk = "all" : "none" === Wk && (Wk = "notBoards")
+     }(0, Pk.x)((() => {
+       (function() {
+         const kk = Ak;
+         return Ak = !1, kk
+       })() && Xk(!1)
+     }));
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L66-L98` → after: `L240-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L240-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L240-L255) · [Before (L66-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L66-L98)

```diff
-         this.discordSdk = QQ, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
-       }
-       static async setup() {
-         console.log("Setting up Discord SDK with client id", bQ.d.discordClientID);
-         const QQ = new LQ.c(bQ.d.discordClientID);
-         let FQ = !1;
-         setTimeout((() => {
-           FQ || (console.warn("Discord SDK took too long to initialize"), (0, vQ.reloadBloxd)())
-         }), 15e3), await QQ.ready(), FQ = !0;
-         try {
-           const {
-             enabled: FQ
-           } = await QQ.commands.encourageHardwareAcceleration();
-           FQ || console.warn("Hardware acceleration not enabled in the Discord client")
-         } catch (qQ) {
-           console.error("Failed to encourage hardware acceleration in the Discord client", qQ)
- ... (17 more removed lines; see GitHub link above)
+         this.loaded = kk, this.latin = null, this.rest = null, this.restWanted = !1
+       }
+       load() {
+         if (null === this.latin) {
+           this.latin = new FontFace(dk, `url(${(0,sk.i)()}) format("woff2")`, {
+             unicodeRange: Vk
+           }).load().then((kk => {
+             document.fonts.add(kk), this.loaded()
+           }), zk("Latin"));
+           const kk = new FontFace(dk, `url(${(0,sk.j)()}) format("woff2")`, {
+             unicodeRange: Fk,
+             display: "swap"
+           });
+           document.fonts.add(kk), kk.loaded.then((() => {
+             this.loaded()
+           }), zk("rest")), this.rest = kk, this.restWanted && kk.load()
```

#### 7. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L100-L115` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L257) · [Before (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L100-L115)

```diff
-         await this.discordSdk.commands.setActivity({
-           activity: {
-             type: AQ.PLAYING,
-             details: FQ,
-             state: wQ,
-             assets: {
-               large_image: "icon",
-               large_text: FQ
-             },
-             timestamps: {
-               start: this.startTime
-             }
-           }
-         }).catch((QQ => {
-           console.error(`Failed to update Discord activity rich presence with description="${FQ}":`, QQ)
-         }))
+         return this.latin
```

#### 8. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L117` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L259) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L117)

```diff
-       async getInGameDescriptions() {
+       loadRest() {
```

#### 9. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L119-L174` → after: `L261-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L261-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L261-L342) · [Before (L119-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L119-L174)

```diff
-         const {
-           requestedGameNameWithVariation: FQ
-         } = (0, mQ.c)(), wQ = (0, uQ.l)(FQ), LQ = null !== (QQ = eQ[FQ]) && void 0 !== QQ ? QQ : tQ[wQ.type], qQ = await (0, oQ.x)(kQ.c.ENGLISH, wQ.title), vQ = (0, mQ.c)();
-         if ((0, mQ.i)(vQ)) return {
-           primary: `${LQ} in a Discord World`
-         };
-         const HQ = `${LQ} in ${qQ}`;
-         return (0, DQ.F)(vQ.lobbyName) ? {
-           primary: HQ
-         } : {
-           primary: HQ,
-           secondary: `Lobby ${vQ.lobbyName}`
-         }
-       }
-       getCurrentChannelType() {
-         const {
- ... (40 more removed lines; see GitHub link above)
+         this.restWanted || (this.restWanted = !0, null === (kk = this.rest) || void 0 === kk || kk.load())
+       }
+       loadFor(kk) {
+         !this.restWanted && Ik.test(kk) && this.loadRest()
+       }
+     }(Xk);
+ 
+     function ck(kk) {
+       Object.assign(Ek, kk), Ek.loadsFontRest && Bk.loadRest(), Xk(!1)
+     }
+ 
+     function Tk(kk) {
+       kk !== hk && (hk = kk, Xk())
+     }
+ 
+     function Zk(kk) {
+ ... (66 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L177-L178` → after: `L386-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L386-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L386-L531) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L177-L178)

```diff
-       getCachedAccessToken() {
-         return this.cachedAccessToken
+     }
+   },
+   42192: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Ae,
+       i: () => we
+     });
+     var Dk = ik(36329),
+       fk = ik(40400),
+       Sk = ik(38441),
+       bk = ik(581),
+       rk = ik(302);
+     const Pk = {
+         DEFAULT_FONT_SIZE: 47,
+         DEFAULT_SUBTITLE_FONT_SIZE: 30,
+         HORIZONTAL_PADDING: 30,
+ ... (130 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L180-L181` → after: `L533-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L533-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L533-L536) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L180-L181)

```diff
-       setCachedAccessToken(QQ) {
-         this.cachedAccessToken = QQ
+       return {
+         width: Sk,
+         height: Dk + Pk.VERTICAL_PADDING,
+         sizes: fk
```

#### 12. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L183-L184` → after: `L538-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L538-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L538-L544) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L183-L184)

```diff
-       registerGuild(QQ, FQ) {
-         this.guildNameCache[QQ] = FQ
+     }
+ 
+     function Ck(kk, ek, ik, Dk, fk, Sk, bk) {
+       ek += pk(void 0, kk[0]);
+       for (let rk = 0; rk < kk.length; rk++) {
+         const Pk = Ak(kk[rk], ek, ik, Dk, fk, Sk, bk);
+         ek += 0 === Pk ? 0 : Pk + pk(kk[rk], kk[rk + 1])
```

#### 13. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L186-L189` → after: `L546-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L546-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L546-L557) · [Before (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L186-L189)

```diff
-       async authenticate(QQ) {
-         return this.discordSdk.commands.authenticate({
-           access_token: QQ
-         }).then((QQ => null !== QQ))
+     }
+ 
+     function Ak(kk, ek, ik, Dk, fk, Sk, bk, rk) {
+       var Kk;
+       if ("icon" === kk.kind) {
+         const Dk = Sk.iconImage(kk.icon);
+         return Dk && bk.push({
+           image: Dk,
+           x: ek,
+           y: ik + Pk.VERTICAL_PADDING / 2,
+           size: kk.size
+         }), kk.size
```

#### 14. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L191-L192` → after: `L559-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L559-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L559-L562) · [Before (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L191-L192)

```diff
-       async getUserLocale() {
-         try {
+       if ("rank" === kk.kind) {
+         const bk = null !== rk && void 0 !== rk ? rk : Yk(kk, fk, Sk);
+         return function(kk, ek, ik, Dk, fk, Sk, bk) {
+           var rk, Mk;
```

#### 15. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L194-L198` → after: `L564-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L564-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L564-L598) · [Before (L194-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L194-L198)

```diff
-             locale: QQ
-           } = await this.discordSdk.commands.userSettingsGetLocale();
-           return QQ
-         } catch (QQ) {
-           return console.error("Failed to get user locale from Discord:", QQ.stack), null
+             rank: Kk
+           } = kk;
+           Sk.fillStyle = Kk.mainRGB, Sk.fillRect(ek, ik, Dk, fk);
+           const xk = bk.rankIcon(Kk.icon);
+           if (!xk) return;
+           const nk = mk / xk.height,
+             Uk = ek + (Dk - xk.width * nk) / 2,
+             Hk = ik + (fk - mk) / 2,
+             wk = new Path2D(xk.path),
+             lk = Pk.TEXT_SHADOW_WIDTH,
+             pk = (null === (rk = Kk.nameTag) || void 0 === rk ? void 0 : rk.iconShadowRGB) || "black";
+           for (const Pk of [-1, 1])
+             for (const kk of [-1, 1]) sk(Sk, wk, Uk + lk * Pk, Hk + lk * kk, nk, pk);
+           sk(Sk, wk, Uk, Hk, nk, (null === (Mk = Kk.nameTag) || void 0 === Mk ? void 0 : Mk.iconRGB) || "white")
+         }(kk, ek, ik, bk, Dk, fk, Sk), bk
+       }
+ ... (19 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L201-L204` → after: `L671-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L671-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L671-L692) · [Before (L201-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L201-L204)

```diff
-       async getChannelName(QQ) {
-         return this.discordSdk.commands.getChannel({
-           channel_id: QQ
-         }).then((QQ => QQ.name)).catch((QQ => "Your Current Discord Chat"))
+       const Mk = "string" === typeof Dk.backgroundColor ? Dk.backgroundColor : "#22283b";
+       return {
+         width: bk,
+         height: rk,
+         chars: mk,
+         draw: (kk, ek) => {
+           const Dk = [];
+           if (kk.fillStyle = Mk, kk.fillRect(0, 0, bk, rk), null === ek)
+             for (const Sk of fk) Sk.items.length > 0 && Ck(Sk.items.map((kk => kk.content)), 0, Sk.y, Sk.height, kk, ik, Dk);
+           else {
+             let Sk = 0;
+             for (const bk of fk)
+               for (const fk of bk.items) {
+                 if (Sk >= ek) break;
+                 Ak("text" === fk.content.kind ? {
+                   ...fk.content,
+ ... (6 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L206-L211` → after: `L694-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L694-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L694-L770) · [Before (L206-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L206-L211)

```diff
-       async getDiscordContextFromChannelId(QQ) {
-         const FQ = await this.getChannelName(QQ);
-         return qQ.k.from({
-           type: qQ.d.DM,
-           channelId: QQ,
-           channelName: FQ
+     }
+     var Vk = ik(4415),
+       Fk = ik(1248),
+       uk = ik(1998);
+     const qk = 10,
+       Ik = 3,
+       zk = 3,
+       Qk = [{
+         healthFraction: .25,
+         colour: "#ff0000"
+       }, {
+         healthFraction: .5,
+         colour: "#ffaa00"
+       }, {
+         healthFraction: 1,
+         colour: "#00ff00"
+ ... (61 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L214-L220` → after: `L773-L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L773-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L773-L982) · [Before (L214-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L214-L220)

```diff
-       getDiscordContextFromGuildId(QQ) {
-         const FQ = this.guildNameCache[QQ];
-         return (0, DQ.F)(FQ) ? null : qQ.h.from({
-           type: qQ.d.GUILD,
-           guildId: QQ,
-           guildName: FQ
-         })
+       lk.push(...Hk);
+       ("boolean" === typeof kk.player ? kk.player : Array.isArray(kk.ranks)) && "" !== rk && ik.isFriend(rk) && lk.push({
+         kind: "rank",
+         rank: hk
+       }), "number" === typeof kk.Vb && lk.push({
+         kind: "text",
+         text: ` ${kk.Vb}m`,
+         size: Pk.DEFAULT_FONT_SIZE,
+         colour: "#cef3ff"
+       });
+       const pk = mk ? wk(mk, Pk.DEFAULT_SUBTITLE_FONT_SIZE, ik) : null,
+         yk = "string" === typeof Sk.backgroundColor ? Sk.backgroundColor : "#22283b",
+         Yk = "string" === typeof Sk.subtitleBackgroundColor ? Sk.subtitleBackgroundColor : "#1a1e2d",
+         Ak = ak(Sk.healthbar),
+         sk = ak(Sk.border),
+         dk = Array.isArray(kk.effects) ? kk.effects.filter((kk => "string" === typeof kk && Wk.has(kk))) : [],
+ ... (194 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L222` → after: `L984-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L984-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L984-L1003) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L222)

```diff
-       async getCurrentDiscordContext() {
+       if (kk === ke.MultilineText) {
+         var fk;
+         const kk = JSON.parse(ek),
+           Dk = JSON.stringify(null !== (fk = kk.box) && void 0 !== fk ? fk : null),
+           Sk = "number" === typeof kk.shown ? kk.shown : null;
+         let bk = ye(Me, Dk);
+         void 0 === bk && (bk = dk(kk.box, ik, re), Ye(Me, Dk, bk));
+         const rk = null === Sk ? null : Math.min(Math.max(0, Math.floor(Sk)), bk.chars),
+           Pk = bk;
+         return {
+           width: Pk.width,
+           height: Pk.height,
+           draw: kk => {
+             Pk.draw(kk, rk)
+           }
+         }
+ ... (4 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L224-L239` → after: `L1005-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L1005-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L1005-L1042) · [Before (L224-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L224-L239)

```diff
-           channelId: QQ,
-           guildId: FQ
-         } = this.getCurrentChannelAndGuild();
-         return null !== FQ ? this.getDiscordContextFromGuildId(FQ) : null !== QQ ? this.getDiscordContextFromChannelId(QQ) : null
-       }
-       exit(QQ) {
-         console.log("Exiting Discord Activity:", QQ), this.discordSdk.close(xQ.CLOSE_NORMAL, QQ)
-       }
-       isMobilePlatform() {
-         return this.discordSdk.platform === LQ.g.MOBILE
-       }
-       applyDiscordSafeAreaNotch() {
-         const QQ = getComputedStyle(document.documentElement),
-           FQ = (FQ, wQ) => {
-             const LQ = parseFloat(QQ.getPropertyValue(`--discord-safe-area-inset-${FQ}`));
-             return isNaN(LQ) || 0 === wQ ? 0 : LQ / wQ * 100
+           shared: fk,
+           w: Sk = 0,
+           h: bk = 0
+         } = kk, rk = !Sk;
+         let Pk;
+         if (rk) {
+           var mk, Mk;
+           Pk = null !== (mk = null === fk || void 0 === fk || null === (Mk = fk.text) || void 0 === Mk ? void 0 : Mk.toString()) && void 0 !== mk ? mk : ""
+         } else {
+           if ("string" !== typeof(null === fk || void 0 === fk ? void 0 : fk.text)) return null;
+           Pk = fk.text
+         }
+         if ("" === Pk.trim()) return null;
+         const Kk = null !== (ik = null === fk || void 0 === fk ? void 0 : fk.textSize) && void 0 !== ik ? ik : 0,
+           xk = Dk.d[Kk].ingameFontSize;
+         let nk = Gk,
+ ... (22 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L241-L246` → after: `L1044-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L1044-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L1044-L1052) · [Before (L241-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L241-L246)

```diff
-         HQ.c.set({
-           notchSize: {
-             top: FQ("top", window.innerHeight),
-             right: Math.max(FQ("right", window.innerWidth), 7),
-             bottom: 0,
-             left: FQ("left", window.innerWidth)
+         return {
+           width: Sk.pixelWidth,
+           height: Sk.pixelHeight,
+           draw: kk => {
+             const {
+               a: ek,
+               d: ik
+             } = kk.getTransform();
+             (0, Nk.e)(kk, Math.round(Sk.pixelWidth * ek), Math.round(Sk.pixelHeight * ik), Sk, fk, bk)
```

#### 22. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L248` → after: `L1054-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L1054-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/141.js#L1054-L1105) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/141.js#L248)

```diff
-         })
+         }
+       }(JSON.parse(ek), re, ee);
+       throw new Error(`unknown text plane kind ${kk}`)
+     }
+     const Ce = 2 ** Math.floor(Math.log2(ee));
+ 
+     function Ae(kk, ek) {
+       let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       try {
+         if (kk.length < 2) return [0, 0];
+         const Sk = (0, fk.c)(ek);
+         if (!Sk) return [0, 0];
+         const bk = le();
+         bk !== Pe && (Pe = bk, pe());
+         const [rk] = kk, Pk = be.decode(kk.subarray(1));
+ ... (36 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/142.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/142.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0)

#### 1. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/142.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/142.js#L6-L7)

```diff
-       c: () => oo,
-       g: () => zw
+       encodeBinaryMessageWithMetricsCookies: () => fk
```

#### 2. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L9-L1605` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/142.js#L8) · [Before (L9-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/142.js#L9-L1605)

```diff
-     var LQ = {};
-     wQ.r(LQ), wQ.d(LQ, {
-       c: () => qL,
-       g: () => kL,
-       f: () => DL,
-       i: () => Zw,
-       j: () => Pw,
-       n: () => rL,
-       o: () => dw,
-       s: () => NL,
-       t: () => SL,
-       v: () => UL,
-       z: () => yw,
-       D: () => WL,
-       G: () => sL,
-       I: () => IL,
- ... (1581 more removed lines; see GitHub link above)
+     var Dk = ik(3693);
```

#### 3. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L1608-L3832` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/142.js#L11) · [Before (L1608-L3832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/142.js#L1608-L3832)

```diff
-       if (QQ instanceof LF) {
-         const FQ = {};
-         for (const wQ in QQ.shape) {
-           const LQ = QQ.shape[wQ];
-           FQ[wQ] = cF.create(wF(LQ))
-         }
-         return new LF({
-           ...QQ._def,
-           shape: () => FQ
-         })
-       }
-       return QQ instanceof FF ? new FF({
-         ...QQ._def,
-         type: wF(QQ.element)
-       }) : QQ instanceof cF ? cF.create(wF(QQ.unwrap())) : QQ instanceof CF ? CF.create(wF(QQ.unwrap())) : QQ instanceof mF ? mF.create(QQ.items.map((QQ => wF(QQ)))) : QQ
-     }
- ... (2209 more removed lines; see GitHub link above)
+       return Dk.i.toBuffer(kk)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/143.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/143.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8)

#### 1. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/143.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/143.js#L4)

```diff
-   7904: (QQ, FQ, wQ) => {
+   7898: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/143.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/143.js#L6-L8)

```diff
-       BloxdMsnAccountSdk: () => HQ,
-       MsnSdkAdaptor: () => AQ,
-       msnMockIdentityStorageKey: () => vQ
+       BloxdDiscordSDK: () => Hk,
+       DiscordLoginCancelledError: () => Uk,
+       discordPopupTimeoutMs: () => nk
```

#### 3. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L10-L23` → after: `L10-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L10-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/143.js#L10-L24) · [Before (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/143.js#L10-L23)

```diff
-     var LQ = wQ(1335),
-       qQ = wQ(1196),
-       oQ = wQ(3331),
-       DQ = wQ(619);
-     wQ(27);
-     const kQ = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
-       vQ = "msnMockIdentity";
-     let mQ = null;
- 
-     function uQ() {
-       return mQ ??= async function() {
-         await (0, qQ.e)(kQ, {}, !1);
-         for (let QQ = 0; QQ < 50 && !window.$msstart; QQ++) await (0, DQ.J)(100)
-       }(), mQ
+     var Dk = ik(165),
+       fk = ik(1212),
+       Sk = ik(1104),
+       bk = ik(1120),
+       rk = ik.n(bk),
+       Pk = ik(1177),
+       mk = ik(38),
+       Mk = ik(594),
+       Kk = ik(1333),
+       xk = ik(1181);
+     const nk = 6e5;
+     class Uk extends Error {
+       constructor() {
+         super(...arguments), this.name = Sk.discordLoginCancelledErrorName
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L26-L27` → after: `L27-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L27-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/143.js#L27-L111) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/143.js#L26-L27)

```diff
-       constructor() {}
-       static async setup() {
+       constructor() {
+         this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirect … [truncated]
+         const kk = new URL(this.discordRedirectUrl).origin;
+         window.addEventListener("message", (ek => {
+           var ik;
+           if (ek.origin !== kk || "oauth_authentication_discord" !== (null === (ik = ek.data) || void 0 === ik ? void 0 : ik.type)) return;
+           if ("string" !== typeof ek.data.code || !ek.data.code) return void this.failPopup(new Uk("Discord authentication was cancelled on Discord"));
+           const Dk = this.popupWindowPromiseResolve;
+           this.resetPopupState(), null === Dk || void 0 === Dk || Dk(ek.data.code)
+         }))
+       }
+       resetPopupState() {
+         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
+       }
+       failPopup(kk) {
+         var ek;
+ ... (69 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L29-L31` → after: `L113-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L113-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/143.js#L113-L127) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/143.js#L29-L31)

```diff
-           await Promise.race([uQ(), (0, DQ.J)(1e4).then((() => {
-             throw new Error("Not loaded after 10000ms")
-           }))])
+           const Dk = await rk()((async () => {
+             try {
+               return await (0, Sk.postJsonWithMetricsCookiesAndJsonResponse)(`${Pk.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
+                 refreshToken: ek
+               }, {
+                 retries: 0
+               }, kk.getMetricsCookies())
+             } catch (ik) {
+               if (wk(ik)) throw new(rk().AbortError)(ik);
+               throw ik
+             }
+           }), {
+             retries: 3
+           });
+           ik = Dk.accessToken, mk.c.setItem(this.bloxdDiscordRefreshTokenKey, Dk.refreshToken)
```

#### 6. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L33` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/143.js#L129) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/143.js#L33)

```diff
-           return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", QQ), null
+           return wk(Dk) ? (mk.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Dk), null)
```

#### 7. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L35-L43` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/143.js#L131-L132) · [Before (L35-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/143.js#L35-L43)

```diff
-         return window.$msstart ? new HQ : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
-       }
-       async getSignedInUser() {
-         try {
-           return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, DQ.J)(1e4).then((() => {
-             throw new Error("No answer after 10000ms")
-           }))])
-         } catch (QQ) {
-           return "USER_NOT_CONSENTED" !== (null === QQ || void 0 === QQ ? void 0 : QQ.code) && console.error("Failed to get the signed-in MSN Play player:", QQ), null
+         return {
+           accessToken: ik
```

#### 8. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L46-L180` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/143.js#L135-L136) · [Before (L46-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/143.js#L46-L180)

```diff
-       async signIn() {
-         return null !== null ? null : await window.$msstart.signInAsync()
-       }
-     }
-     const bQ = 20,
-       YQ = {
-         top: [{
-           width: 970,
-           height: 250
-         }, {
-           width: 728,
-           height: 90
-         }, {
-           width: 320,
-           height: 50
-         }],
- ... (119 more removed lines; see GitHub link above)
+       signOut() {
+         this.failPopup(new Uk("Signed out of Discord during login")), mk.c.removeItem(this.bloxdDiscordRefreshTokenKey)
```

#### 9. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L185-L207` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/143.js#L141) · [Before (L185-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/143.js#L185-L207)

```diff
-       let FQ, wQ;
-       switch (QQ.placement) {
-         case "top":
-           FQ = (window.innerWidth - QQ.width) / 2, wQ = bQ;
-           break;
-         case "right":
-           FQ = window.innerWidth - QQ.width - bQ, wQ = window.innerHeight / 2 - QQ.height / 2 - 10;
-           break;
-         case "left":
-           FQ = bQ, wQ = window.innerHeight / 2 - QQ.height / 2 - 10
-       }
-       return {
-         x1: FQ,
-         y1: wQ,
-         x2: FQ + QQ.width,
-         y2: wQ + QQ.height
- ... (7 more removed lines; see GitHub link above)
+       return kk instanceof Dk.d && 435 === kk.httpCode
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/144.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/144.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5)

#### 1. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/144.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/144.js#L4)

```diff
-   7908: (QQ, FQ, wQ) => {
+   7905: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/144.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/144.js#L6)

```diff
-       GameDistributionSdkAdaptor: () => oQ
+       BloxdFirebaseSdk: () => xk
```

#### 3. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L8-L12` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/144.js#L8-L31) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/144.js#L8-L12)

```diff
-     var LQ = wQ(1335),
-       qQ = wQ(1196);
-     class oQ extends LQ.b {
-       constructor(QQ) {
-         super(), this.setOnEndCb = QQ, this.name = "gamedistribution"
+     var Dk = ik(1799),
+       fk = ik(2849),
+       Sk = ik(107),
+       bk = ik(99),
+       rk = ik(1659),
+       Pk = ik(2005);
+     const mk = {
+       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+       authDomain: "bloxd-ee1aa.firebaseapp.com",
+       projectId: "bloxd-ee1aa",
+       storageBucket: "bloxd-ee1aa.appspot.com",
+       messagingSenderId: "758847442742",
+       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
+     };
+     var Mk = ik(2866),
+       Kk = ik(1676);
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L14-L46` → after: `L33-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L33-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/144.js#L33-L127) · [Before (L14-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/144.js#L14-L46)

```diff
-       static async setup() {
-         let QQ;
-         let FQ;
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: wQ => {
-             const LQ = () => {
-               FQ && (window.adCompleteSoResume(), FQ = !1), QQ && (QQ(), QQ = null)
-             };
-             switch (wQ.name) {
-               case "SDK_GAME_START":
-                 console.log("Gamedis SDK_GAME_START"), FQ = !1, QQ ? (QQ(), QQ = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
-                 break;
-               case "SDK_GAME_PAUSE":
-                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
-                   preventMovement: !0
- ... (17 more removed lines; see GitHub link above)
+       static async setupInternal() {
+         const kk = await Promise.all([ik.e(262), ik.e(261)]).then((() => ik(40071))),
+           ek = await Promise.all([ik.e(262), ik.e(263)]).then((() => ik(40106))),
+           nk = await Promise.all([ik.e(262), ik.e(264)]).then((() => ik(40111))),
+           Uk = kk.initializeApp({
+             ...mk,
+             measurementId: fk.b
+           });
+         (0, fk.A)(), window.gtag("config", fk.b), (0, fk.v)(), window.gtag("config", "AW-16469618203");
+         const Hk = ek.getAnalytics(Uk),
+           wk = {
+             portal: Sk.currentUrl.getSearchParam("portal") || "root",
+             loggedIn: !1
+           };
+         ek.setUserProperties(Hk, wk);
+         const lk = nk.initializeAuth(Uk, {
+ ... (79 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L49-L61` → after: `L130-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L130-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/144.js#L130-L160) · [Before (L49-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/144.js#L49-L61)

```diff
-         }, await (0, qQ.e)("https://html5.api.gamedistribution.com/main.min.js", {
-           id: "gamedistribution-jssdk"
-         }), new oQ((FQ => {
-           QQ = FQ
-         }))
-       }
-       playVideoAd(QQ, FQ) {
-         this.setOnEndCb(QQ), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
-       }
-       renderBanner(QQ) {
-         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(QQ.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, QQ.divId), window.gdsdk.showAd … [truncated]
-           containerId: QQ.divId
-         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((QQ => console.info(QQ)))) : console.error("window.gdsdk.AdType.Display is undefined")
+           async getCurrentUser(kk) {
+             const ek = lk.currentUser;
+             if (ek) {
+               const {
+                 signInProvider: ik
+               } = await ek.getIdTokenResult(!1);
+               if (ik === Dk.h[kk]) return ek
+             }
+             const ik = (0, Pk.b)(kk);
+             if (null === ik) return null;
+             try {
+               return await Ak(ik, "getCurrentUser")
+             } catch (fk) {
+               return console.error(`Failed to get the current ${kk} user from the app:`, fk), null
+             }
+           }
+ ... (15 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/145.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/145.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977)

#### 1. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/145.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/145.js#L4)

```diff
-   7917: (QQ, FQ, wQ) => {
+   7913: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/145.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/145.js#L6)

```diff
-       CoolMathGamesSdkAdaptor: () => oQ
+       BloxdDiscordActivitySdk: () => pk
```

#### 3. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L8-L24` → after: `L8-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/145.js#L8-L66) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/145.js#L8-L24)

```diff
-     var LQ = wQ(1335),
-       qQ = wQ(1196);
-     class oQ extends LQ.b {
-       constructor() {
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const QQ = document.getElementsByClassName("ads-popup");
-         for (const FQ of QQ) FQ instanceof HTMLElement && (FQ.style.position = "fixed")
-       }
-       doAdBreakComplete() {
- ... (1 more removed lines; see GitHub link above)
+     var Dk = ik(7919),
+       fk = ik(1212),
+       Sk = ik(1172),
+       bk = ik(594),
+       rk = ik(1223),
+       Pk = ik(1688),
+       mk = ik(1302),
+       Mk = ik(741),
+       Kk = ik(22),
+       xk = ik(1181),
+       nk = function(kk) {
+         return kk.APPLICATION_COMMANDS = "applications.commands", kk.IDENTIFY = "identify", kk.EMAIL = "email", kk.GUILDS = "guilds", kk.READ_DM_CHANNELS = "dm_channels.read", kk.WRITE_ACTIVITIES = "rpc.activities.write", kk
+       }(nk || {}),
+       Uk = function(kk) {
+         return kk[kk.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", kk[kk.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", kk[kk.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", kk[kk.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", kk[kk.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", kk[kk.RATELIMITE … [truncated]
+       }(Uk || {}),
+ ... (43 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L27-L38` → after: `L69-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L69-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/145.js#L69-L74) · [Before (L27-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/145.js#L27-L38)

```diff
-         return await (0, qQ.e)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, qQ.e)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new oQ
-       }
-       playVideoAd(QQ, FQ) {
-         this.adBreakStartCallback = () => {
-           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
-             preventMovement: !0
-           })
-         }, this.adBreakCompleteCallback = () => {
-           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), QQ()
-         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
-       }
-       onGameplayStart() {
+         console.log("Setting up Discord SDK with client id", xk.e.discordClientID);
+         const kk = new Dk.b(xk.e.discordClientID);
+         let ek = !1;
+         setTimeout((() => {
+           ek || (console.warn("Discord SDK took too long to initialize"), (0, Pk.reloadBloxd)())
+         }), 15e3), await kk.ready(), ek = !0;
```

#### 5. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L40-L46` → after: `L76-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L76-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/145.js#L76-L191) · [Before (L40-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/145.js#L40-L46)

```diff
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
-       }
-       onGameplayStop() {}
-       onGameEntered() {
+           const {
+             enabled: ek
+           } = await kk.commands.encourageHardwareAcceleration();
+           ek || console.warn("Hardware acceleration not enabled in the Discord client")
+         } catch (fk) {
+           console.error("Failed to encourage hardware acceleration in the Discord client", fk)
+         }
+         const ik = new pk(kk);
+         return ik.isMobilePlatform() && (ik.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
+           ik.applyDiscordSafeAreaNotch()
+         }))), ik
+       }
+       async updateActivityDescription(kk) {
+         let ek, ik;
+         switch (kk) {
+           case "homePage":
+ ... (100 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L48-L53` → after: `L193-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L193-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/145.js#L193-L249) · [Before (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/145.js#L48-L53)

```diff
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
-       }
-       onGameExited() {}
+           const {
+             locale: kk
+           } = await this.discordSdk.commands.userSettingsGetLocale();
+           return kk
+         } catch (kk) {
+           return console.error("Failed to get user locale from Discord:", kk.stack), null
+         }
+       }
+       async getChannelName(kk) {
+         return this.discordSdk.commands.getChannel({
+           channel_id: kk
+         }).then((kk => kk.name)).catch((kk => "Your Current Discord Chat"))
+       }
+       async getDiscordContextFromChannelId(kk) {
+         const ek = await this.getChannelName(kk);
+         return fk.g.from({
+ ... (41 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/146.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/146.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af)

#### 1. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L4` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L4-L9) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L4)

```diff
-   7922: (QQ, FQ, wQ) => {
+   7919: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => mS,
+       f: () => ai
+     });
+     var Dk = {};
```

#### 2. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L6-L22` → after: `L11-L2950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L11-L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L11-L2950) · [Before (L6-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L6-L22)

```diff
-       AdMobSdkAdaptor: () => uQ
-     });
-     var LQ = wQ(1335),
-       qQ = wQ(17),
-       oQ = wQ(1694),
-       DQ = wQ(134),
-       kQ = wQ(3331),
-       vQ = wQ(317);
-     const mQ = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
- ... (1 more removed lines; see GitHub link above)
+       c: () => bD,
+       f: () => mD,
+       d: () => PD,
+       i: () => Ri,
+       l: () => Ni,
+       o: () => ID,
+       q: () => eD,
+       t: () => vD,
+       x: () => sD,
+       z: () => QD,
+       C: () => Ji,
+       E: () => VD,
+       G: () => qD,
+       K: () => zD,
+       P: () => kD,
+       L: () => fD,
+ ... (2924 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L24-L34` → after: `L2952-L2953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR2952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L2952-L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L2952-L2953) · [Before (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L24-L34)

```diff
-         rewarded: "ca-app-pub-5991928098122027/5726886857",
-         interstitial: "ca-app-pub-5991928098122027/1979213537"
-       },
-       mobileIos: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/4652945503",
-           leaderboard_4: "ca-app-pub-5991928098122027/2921518285",
-           leaderboard_5: "ca-app-pub-5991928098122027/7518781992",
-           skyscraper_1: "ca-app-pub-5991928098122027/8344778507",
-           skyscraper_2: "ca-app-pub-5991928098122027/3781201590",
-           square_1: "ca-app-pub-5991928098122027/2468119924"
+         get objectUtil() {
+           return Pk
```

#### 4. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L36-L37` → after: `L2955-L3830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR2955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L2955-L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L2955-L3830) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L36-L37)

```diff
-         rewarded: "ca-app-pub-5991928098122027/5014392212",
-         interstitial: "ca-app-pub-5991928098122027/4405533493"
+         ZodParsedType: Mk,
+         getParsedType: Kk,
+         ZodType: Ik,
+         ZodString: Xk,
+         ZodNumber: ck,
+         ZodBigInt: Tk,
+         ZodBoolean: Zk,
+         ZodDate: Ok,
+         ZodSymbol: gk,
+         ZodUndefined: Gk,
+         ZodNull: Nk,
+         ZodAny: Rk,
+         ZodUnknown: Jk,
+         ZodNever: ke,
+         ZodVoid: ee,
+         ZodArray: ie,
+ ... (860 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L39-L50` → after: `L3832-L3894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L3832-L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L3832-L3894) · [Before (L39-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L39-L50)

```diff
-     };
-     class uQ extends LQ.b {
-       constructor(QQ) {
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = mQ[QQ], oQ.d.on("ads.bannerStatus", (QQ => {
-           let {
-             placementId: FQ,
-             shown: wQ,
-             error: LQ
-           } = QQ;
-           const qQ = !this.bannerFirstResponseSeen.has(FQ);
-           this.bannerFirstResponseSeen.add(FQ), qQ ? wQ ? console.log(`AD ${FQ}: AdMob banner loaded`) : console.warn(`AD ${FQ}: AdMob banner failed to load: ${LQ}`) : wQ || console.warn(`AD ${FQ}: AdMob banner refresh failed: ${LQ}`)
-         }))
+       return Dk
+     }
+ 
+     function Ai(kk) {
+       const ek = [];
+       for (let ik = 0; ik < kk.length; ik++) {
+         let Dk = Number(kk[ik]);
+         for (let kk = 0; Dk || kk < ek.length; kk++) Dk += 10 * (ek[kk] || 0), ek[kk] = Dk % 16, Dk = (Dk - ek[kk]) / 16
+       }
+       return ek
+     }
+     class ji {
+       static fromString(kk) {
+         return new ji(function(kk) {
+           const ek = Ai(kk),
+             ik = Array(4);
+ ... (47 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L52-L54` → after: `L3896-L3897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR3896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L3896-L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L3896-L3897) · [Before (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L52-L54)

```diff
-       static async setup() {
-         const QQ = "mobileIos" === DQ.r ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${QQ}`), new uQ(QQ)
+       toJSON() {
+         return this.toString()
```

#### 7. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L56-L61` → after: `L3899-L4635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L3899-L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L3899-L4635) · [Before (L56-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L56-L61)

```diff
-       muteGameDuring(QQ) {
-         return this.fullScreenAdsInFlight++, qQ.c.set({
-           soundOnFromAd: !1
-         }), QQ.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && qQ.c.set({
-             soundOnFromAd: !0
+     }
+     const si = function() {
+       try {
+         return BigInt, !0
+       } catch (kk) {
+         return !1
+       }
+     }();
+     si && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
+       return this.toString()
+     });
+     const di = {},
+       Vi = si ? function(kk) {
+         return BigInt(kk)
+       } : function(kk) {
+         return kk instanceof ji ? kk : ("number" === typeof kk && (kk = kk.toString()), null != di[kk] || (di[kk] = ji.fromString(kk)), di[kk])
+ ... (721 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L65-L75` → after: `L4785-L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR4785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L4785-L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L4785-L5206) · [Before (L65-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L65-L75)

```diff
-       playRewarded(QQ, FQ) {
-         const wQ = this.adUnitIds.rewarded;
-         this.muteGameDuring(oQ.d.request("ads.showRewarded", {
-           placementId: wQ
-         })).then((wQ => {
-           let {
-             rewarded: LQ
-           } = wQ;
-           LQ ? QQ() : FQ()
-         }), (QQ => {
-           console.warn(`AD ${wQ}: AdMob rewarded failed:`, QQ), FQ()
+     }
+     Ge({
+       frame_id: ve(),
+       platform: mi(ai).optional().nullable()
+     }), Ge({
+       v: ri(1),
+       encoding: ri("json").optional(),
+       client_id: ve(),
+       frame_id: ve()
+     });
+     const xf = Ge({
+         code: Ee(),
+         message: ve().optional()
+       }),
+       nf = Ge({
+         evt: ve().nullable(),
+ ... (406 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L78-L85` → after: `L5209-L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR5209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L5209-L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L5209-L5220) · [Before (L78-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L78-L85)

```diff
-       playVideoAd(QQ, FQ) {
-         const wQ = this.adUnitIds.interstitial;
-         this.muteGameDuring(oQ.d.request("ads.showInterstitial", {
-           placementId: wQ
-         })).then((() => {
-           QQ()
-         }), (FQ => {
-           console.warn(`AD ${wQ}: AdMob interstitial failed:`, FQ), QQ()
+       handshake() {
+         var kk;
+         null === (kk = this.source) || void 0 === kk || kk.postMessage([rS.HANDSHAKE, {
+           v: 1,
+           encoding: "json",
+           client_id: this.clientId,
+           frame_id: this.frameId
+         }], this.sourceOrigin)
+       }
+       addOnReadyListener() {
+         this.eventBus.once(hD.READY, (() => {
+           this.overrideConsoleLogging(), this.isReady = !0
```

#### 10. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L88-L102` → after: `L5223-L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L5223-L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L5223-L5229) · [Before (L88-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L88-L102)

```diff
-       renderBanner(QQ) {
-         const FQ = (0, kQ.b)(QQ),
-           wQ = this.adUnitIds.banners[FQ];
-         if (void 0 === wQ) return;
-         const LQ = document.getElementById(QQ.divId);
-         if (!LQ) return void console.warn(`AD ${FQ}: AdMob renderBanner called but div ${QQ.divId} is not in DOM`);
-         const qQ = LQ.getBoundingClientRect(),
-           DQ = window.innerWidth,
-           mQ = window.innerHeight;
-         if (0 === DQ || 0 === mQ) return void console.warn(`AD ${FQ}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
-         const uQ = {
-           x1: vQ.e.clamp(qQ.left / DQ * 100, 0, 100),
-           y1: vQ.e.clamp(qQ.top / mQ * 100, 0, 100),
-           x2: vQ.e.clamp(qQ.right / DQ * 100, 0, 100),
-           y2: vQ.e.clamp(qQ.bottom / mQ * 100, 0, 100)
+       overrideConsoleLogging() {
+         if (this.configuration.disableConsoleLogOverride) return;
+         const kk = (kk, ek) => {
+           this.commands.captureLog({
+             level: kk,
+             message: ek
+           })
```

#### 11. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L104-L113` → after: `L5231-L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L5231-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L5231-L5240) · [Before (L104-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L104-L113)

```diff
-         this.bannerPlacementByBloxdId.set(FQ, wQ), console.log(`AD ${FQ}: AdMob renderBanner placementId=${wQ} box=`, uQ), oQ.d.emit("ads.showBanner", {
-           placementId: wQ,
-           ...uQ
-         })
-       }
-       clearBanner(QQ) {
-         const FQ = (0, kQ.b)(QQ),
-           wQ = this.bannerPlacementByBloxdId.get(FQ);
-         void 0 !== wQ && (this.bannerPlacementByBloxdId.delete(FQ), this.bannerFirstResponseSeen.delete(wQ), console.log(`AD ${FQ}: AdMob clearBanner placementId=${wQ}`), oQ.d.emit("ads.hideBanner", {
-           placementId: wQ
+         bS.forEach((ek => {
+           ! function(kk, ek, ik) {
+             const Dk = kk[ek],
+               fk = kk;
+             Dk && (kk[ek] = function() {
+               const kk = [].slice.call(arguments),
+                 Sk = "" + kk.join(" ");
+               ik(ek, Sk), Dk.apply(fk, kk)
+             })
+           }(console, ek, kk)
```

#### 12. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L116-L117` → after: `L5243-L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L5243-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/146.js#L5243-L5483) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/146.js#L116-L117)

```diff
-       canShowBloxdAd(QQ) {
-         return !1
+       handleClose(kk) {
+         xf.parse(kk)
+       }
+       handleHandshake() {}
+       handleFrame(kk) {
+         var ek, ik;
+         let Dk;
+         try {
+           Dk = Uf(kk)
+         } catch (fk) {
+           return console.error("Failed to parse", kk), void console.error(fk)
+         }
+         if ("DISPATCH" === Dk.cmd) this.eventBus.emit(Dk.evt, Dk.data);
+         else {
+           if (Dk.evt === ED) {
+             if (null != Dk.nonce) return null === (ek = this.pendingCommands.get(Dk.nonce)) || void 0 === ek || ek.reject(Dk.data), void this.pendingCommands.delete(Dk.nonce);
+ ... (225 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/147.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/147.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05)

#### 1. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/147.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/147.js#L4)

```diff
-   7927: (QQ, FQ, wQ) => {
+   7922: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/147.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/147.js#L6)

```diff
-       AdinPlaySdkAdaptor: () => kQ
+       BloxdMsnAccountSdk: () => Kk,
+       MsnSdkAdaptor: () => Hk,
+       msnMockIdentityStorageKey: () => Pk
```

#### 3. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L8-L12` → after: `L10-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L10-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/147.js#L10-L101) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/147.js#L8-L12)

```diff
-     var LQ = wQ(1335),
-       qQ = wQ(1196),
-       oQ = wQ(239);
-     const DQ = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
-     class kQ extends LQ.b {
+     var Dk = ik(1298),
+       fk = ik(1163),
+       Sk = ik(3430),
+       bk = ik(594);
+     ik(38);
+     const rk = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
+       Pk = "msnMockIdentity";
+     let mk = null;
+ 
+     function Mk() {
+       return mk ??= async function() {
+         await (0, fk.d)(rk, {}, !1);
+         for (let kk = 0; kk < 50 && !window.$msstart; kk++) await (0, bk.H)(100)
+       }(), mk
+     }
+     class Kk {
+ ... (76 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L14` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/147.js#L103) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/147.js#L14)

```diff
-         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = DQ
+         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
```

#### 5. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L17` → after: `L106-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/147.js#L106-L109) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/147.js#L17)

```diff
-         return (0, oQ.canonicaliseZonesWhenIdle)(DQ), await (0, qQ.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new kQ
+         return await Mk(), new Hk
+       }
+       playVideoAd(kk, ek) {
+         this.playVideoOrRewarded("video", kk, kk)
```

#### 6. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L20-L68` → after: `L112-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L112-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/147.js#L112-L207) · [Before (L20-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/147.js#L20-L68)

```diff
-         if ("undefined" !== typeof window.aiptag.adplayer) {
-           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
-           const wQ = "video_reward";
-           window.aiptag.cmd.player.push((function() {
-             window.aiptag.adplayer.startPreRoll({
-               alias: wQ
-             })
-           })), window.adStartSoPause(QQ, {
-             onFailCb: FQ
-           })
-         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), FQ()
-       }
-       playVideoAd(QQ, FQ) {
-         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (FQ ? ` (alias: ${FQ})` : "")), window.aiptag.cmd.player.push((function() {
-           window.aiptag.adplayer.startPreRoll({
-             alias: FQ
- ... (33 more removed lines; see GitHub link above)
+         this.playVideoOrRewarded("rewarded", kk, ek)
+       }
+       canShowBloxdAd(kk) {
+         for (const ek in Uk)
+           if (kk.adId in Uk[ek]) return !1;
+         return !0
+       }
+       async renderBanner(kk) {
+         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Sk.d)(kk)}: msn placement is already showing so not requesting`);
+         const ek = Uk[kk.adType][kk.adId];
+         if ((0, bk.F)(ek)) return void console.warn(`AD ${(0,Sk.d)(kk)}: no msn placement is configured for this bloxd placement so not showing any ad`);
+         const ik = [];
+         for (const Dk of ek)
+           for (const kk of nk[Dk])
+             if (kk.width <= window.innerWidth - 40 && kk.height <= window.innerHeight - 40) {
+               const ek = {
+ ... (80 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/148.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/148.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162)

#### 1. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/148.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/148.js#L4)

```diff
-   7929: (QQ, FQ, wQ) => {
+   7926: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/148.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/148.js#L6)

```diff
-       AdsenseForGamesSdkAdaptor: () => oQ
+       GameDistributionSdkAdaptor: () => Sk
```

#### 3. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L8-L12` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/148.js#L8-L12) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/148.js#L8-L12)

```diff
-     var LQ = wQ(1335),
-       qQ = wQ(1196);
-     class oQ extends LQ.b {
-       constructor() {
-         super(), this.name = "adsense"
+     var Dk = ik(1298),
+       fk = ik(1163);
+     class Sk extends Dk.e {
+       constructor(kk) {
+         super(), this.setOnEndCb = kk, this.name = "gamedistribution"
```

#### 4. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L15-L21` → after: `L15-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L15-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/148.js#L15-L47) · [Before (L15-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/148.js#L15-L21)

```diff
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(QQ) {
-           window.adsbygoogle.push(QQ)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
+         let kk;
+         let ek;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: ik => {
+             const Dk = () => {
+               ek && (window.adCompleteSoResume(), ek = !1), kk && (kk(), kk = null)
+             };
+             switch (ik.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), ek = !1, kk ? (kk(), kk = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+                 }), ek = !0;
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L23-L27` → after: `L49-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L49-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/148.js#L49-L53) · [Before (L23-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/148.js#L23-L27)

```diff
-         }), await (0, qQ.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
-           "data-ad-client": "ca-pub-5991928098122027",
-           "data-ad-frequency-hint": "120s",
-           type: "text/javascript"
-         }), console.log("Loaded adsense for games"), new oQ
+         }, await (0, fk.d)("https://html5.api.gamedistribution.com/main.min.js", {
+           id: "gamedistribution-jssdk"
+         }), new Sk((ek => {
+           kk = ek
+         }))
```

#### 6. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L30-L49` → after: `L56-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L56-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/148.js#L56-L61) · [Before (L30-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/148.js#L30-L49)

```diff
-         console.log("playPreroll requested");
-         let wQ = !1;
-         const LQ = setTimeout((() => {
-           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), wQ = !0, QQ()
-         }), 3e3);
-         window.adBreak({
-           type: "video_start" === FQ ? "start" : "next",
-           name: FQ,
-           beforeAd: () => {
-             console.log("beforeAd called"), clearTimeout(LQ), window.adStartSoPause(null, {
-               preventMovement: !0
-             })
-           },
-           afterAd: () => {
-             console.log("afterAd called"), window.adCompleteSoResume()
-           },
- ... (4 more removed lines; see GitHub link above)
+         this.setOnEndCb(kk), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
+       }
+       renderBanner(kk) {
+         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(kk.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, kk.divId), window.gdsdk.showAd … [truncated]
+           containerId: kk.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((kk => console.info(kk)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/149.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/149.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353)

#### 1. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/149.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/149.js#L4)

```diff
-   7933: (QQ, FQ, wQ) => {
+   7932: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/149.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/149.js#L6)

```diff
-       AditudeSdkAdaptor: () => DQ
+       CoolMathGamesSdkAdaptor: () => Sk
```

#### 3. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L8-L14` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/149.js#L8-L10) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/149.js#L8-L14)

```diff
-     var LQ = wQ(1335),
-       qQ = wQ(1196);
-     const oQ = {
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
-     };
-     class DQ extends LQ.b {
+     var Dk = ik(1298),
+       fk = ik(1163);
+     class Sk extends Dk.e {
```

#### 4. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L16` → after: `L12-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/149.js#L12-L24) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/149.js#L16)

```diff
-         super(), this.name = "aditude"
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
+       }
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const kk = document.getElementsByClassName("ads-popup");
+         for (const ek of kk) ek instanceof HTMLElement && (ek.style.position = "fixed")
+       }
+       doAdBreakComplete() {
+         this.adBreakCompleteCallback()
```

#### 5. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L19-L21` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/149.js#L27) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/149.js#L19-L21)

```diff
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, qQ.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new DQ
+         return await (0, fk.d)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, fk.d)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new Sk
```

#### 6. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L24` → after: `L30-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/149.js#L30-L36) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/149.js#L24)

```diff
-         this.playVideoOrRewarded("video", QQ, QQ)
+         this.adBreakStartCallback = () => {
+           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+             preventMovement: !0
+           })
+         }, this.adBreakCompleteCallback = () => {
+           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), kk()
+         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
```

#### 7. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L26-L27` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/149.js#L38-L43) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/149.js#L26-L27)

```diff
-       playRewarded(QQ, FQ) {
-         this.playVideoOrRewarded("rewarded", QQ, FQ)
+       onGameplayStart() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L29-L36` → after: `L45-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/149.js#L45-L51) · [Before (L29-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/149.js#L29-L36)

```diff
-       renderBanner(QQ) {
-         const FQ = this.getBaseDivId(QQ.adId, QQ.width, QQ.height);
-         window.tude.cmd.push((function() {
-           window.tude.refreshAdsViaDivMappings([{
-             divId: QQ.divId,
-             baseDivId: FQ
-           }])
-         }))
+       onGameplayStop() {}
+       onGameEntered() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 9. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L38-L79` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/149.js#L53) · [Before (L38-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/149.js#L38-L79)

```diff
-       getBaseDivId(QQ, FQ, wQ) {
-         return `pb-slot-bloxdio-${FQ}-${wQ}${QQ>1?`-${QQ}`:""}`
-       }
-       playVideoOrRewarded(QQ, FQ, wQ) {
-         var LQ;
-         let qQ = !1;
-         const DQ = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", qQ = !0
-           },
-           kQ = (QQ, FQ) => {
-             console.error(`AD: Error while playing Aditude video ad: ${QQ}:`, FQ), DQ(), wQ()
-           };
-         if (console.log(`AD: Requesting Aditude ${QQ} ad`), void 0 === (null === (LQ = window.tude) || void 0 === LQ ? void 0 : LQ.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${QQ} ad playing`), void kQ("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
- ... (26 more removed lines; see GitHub link above)
+       onGameExited() {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/150.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/150.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166)

#### 1. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/150.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/150.js#L4)

```diff
-   7936: (QQ, FQ, wQ) => {
+   7935: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/150.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/150.js#L6)

```diff
-       NitroSdkAdaptor: () => DQ
+       AdMobSdkAdaptor: () => Mk
```

#### 3. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L8-L13` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/150.js#L8-L50) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/150.js#L8-L13)

```diff
-     var LQ = wQ(1335),
-       qQ = wQ(1196);
-     const oQ = "NitroOutstreamVideo";
-     class DQ extends LQ.b {
-       constructor() {
-         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
+     var Dk = ik(1298),
+       fk = ik(22),
+       Sk = ik(1659),
+       bk = ik(131),
+       rk = ik(3430),
+       Pk = ik(314);
+     const mk = {
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+         },
+ ... (27 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L16-L34` → after: `L53-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L53-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/150.js#L53-L76) · [Before (L16-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/150.js#L16-L34)

```diff
-         return window.nitroAds = window.nitroAds || {
-           createAd: function() {
-             for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
-             return new Promise((QQ => {
-               window.nitroAds.queue.push(["createAd", FQ, QQ])
-             }))
-           },
-           addUserToken: function() {
-             for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
-             window.nitroAds.queue.push(["addUserToken", FQ])
-           },
-           queue: []
-         }, document.addEventListener("nitroAds.rendered", (QQ => {
-           var FQ, wQ, LQ;
-           const qQ = document.getElementById(null !== (FQ = null === (wQ = QQ.detail) || void 0 === wQ || null === (LQ = wQ.adInfo) || void 0 === LQ ? void 0 : LQ.adUnitCode) && void 0 !== FQ ? FQ : "");
-           null !== qQ && void 0 !== qQ && qQ.classList.contains("NitroBanner") && qQ.classList.toggle("NitroBannerUnfilled", "blank" === QQ.detail.type)
- ... (3 more removed lines; see GitHub link above)
+         const kk = "mobileIos" === bk.t ? "mobileIos" : "mobileAndroid";
+         return console.log(`AD: AdMobSDK initialised for ${kk}`), new Mk(kk)
+       }
+       muteGameDuring(kk) {
+         return this.fullScreenAdsInFlight++, fk.b.set({
+           soundOnFromAd: !1
+         }), kk.finally((() => {
+           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && fk.b.set({
+             soundOnFromAd: !0
+           })
+         }))
+       }
+       playRewarded(kk, ek) {
+         const ik = this.adUnitIds.rewarded;
+         this.muteGameDuring(Sk.b.request("ads.showRewarded", {
+           placementId: ik
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L37-L108` → after: `L79-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/150.js#L79-L86) · [Before (L37-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/150.js#L37-L108)

```diff
-         this.showVideoAd(QQ, QQ)
-       }
-       playRewarded(QQ, FQ) {
-         this.showVideoAd(QQ, FQ)
-       }
-       showVideoAd(QQ, FQ) {
-         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void FQ();
-         const wQ = document.getElementById("GenericVideoWrapper"),
-           LQ = document.getElementById("GenericVideoInner");
-         if (null === wQ || null === LQ) return void FQ();
-         this.videoInFlight = !0;
-         let qQ = !1;
-         const DQ = document.createElement("div");
-         DQ.id = oQ, DQ.className = "NitroVideoPlacement";
-         const kQ = oQ => {
-           if (!qQ) {
- ... (56 more removed lines; see GitHub link above)
+         const ik = this.adUnitIds.interstitial;
+         this.muteGameDuring(Sk.b.request("ads.showInterstitial", {
+           placementId: ik
+         })).then((() => {
+           kk()
+         }), (ek => {
+           console.warn(`AD ${ik}: AdMob interstitial failed:`, ek), kk()
+         }))
```

#### 6. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L111-L125` → after: `L89-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L89-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/150.js#L89-L107) · [Before (L111-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/150.js#L111-L125)

```diff
-         const {
-           divId: FQ,
-           width: wQ,
-           height: LQ
-         } = QQ, qQ = `${FQ}-nitro`;
-         let oQ = document.getElementById(qQ);
-         null === oQ && (oQ = document.createElement("div"), oQ.id = qQ, oQ.className = "NitroBanner", oQ.style.setProperty("--nitro-slot-width", `${wQ}px`), oQ.style.setProperty("--nitro-slot-height", `${LQ}px`), document.getElementById(FQ).appendChild(oQ));
-         const DQ = [
-           [String(wQ), String(LQ)]
-         ];
-         Promise.resolve(window.nitroAds.createAd(qQ, {
-           sizes: DQ
-         })).catch((QQ => {
-           console.error(`AD: Nitro failed to create banner ${qQ}:`, QQ)
-         })), console.log(`AD: Requested Nitro banner ${qQ}`)
+         const ek = (0, rk.d)(kk),
+           ik = this.adUnitIds.banners[ek];
+         if (void 0 === ik) return;
+         const Dk = document.getElementById(kk.divId);
+         if (!Dk) return void console.warn(`AD ${ek}: AdMob renderBanner called but div ${kk.divId} is not in DOM`);
+         const fk = Dk.getBoundingClientRect(),
+           bk = window.innerWidth,
+           mk = window.innerHeight;
+         if (0 === bk || 0 === mk) return void console.warn(`AD ${ek}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
+         const Mk = {
+           x1: Pk.c.clamp(fk.left / bk * 100, 0, 100),
+           y1: Pk.c.clamp(fk.top / mk * 100, 0, 100),
+           x2: Pk.c.clamp(fk.right / bk * 100, 0, 100),
+           y2: Pk.c.clamp(fk.bottom / mk * 100, 0, 100)
+         };
+         this.bannerPlacementByBloxdId.set(ek, ik), console.log(`AD ${ek}: AdMob renderBanner placementId=${ik} box=`, Mk), Sk.b.emit("ads.showBanner", {
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L127-L129` → after: `L109-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/150.js#L109-L114) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/150.js#L127-L129)

```diff
-       displayConsentUI() {
-         var QQ, FQ;
-         null === (QQ = (FQ = window).__cmp) || void 0 === QQ || QQ.call(FQ, "showModal")
+       clearBanner(kk) {
+         const ek = (0, rk.d)(kk),
+           ik = this.bannerPlacementByBloxdId.get(ek);
+         void 0 !== ik && (this.bannerPlacementByBloxdId.delete(ek), this.bannerFirstResponseSeen.delete(ik), console.log(`AD ${ek}: AdMob clearBanner placementId=${ik}`), Sk.b.emit("ads.hideBanner", {
+           placementId: ik
+         }))
```

#### 8. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L131-L140` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/150.js#L116-L117) · [Before (L131-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/150.js#L131-L140)

```diff
-       addPrivacyLinks(QQ) {
-         var FQ, wQ, LQ, qQ;
-         const oQ = document.createElement("span");
-         oQ.dataset.ccpaLink = "1";
-         const DQ = document.createElement("div");
-         DQ.id = "ncmp-consent-link", QQ.replaceChildren(oQ, DQ), null === (FQ = (wQ = window).__uspapi) || void 0 === FQ || FQ.call(wQ, "addLink", 1), null === (LQ = (qQ = window).__cmp) || void 0 === LQ || LQ.call(qQ, "addConsentLink")
-       }
-       newPageSession() {
-         var QQ, FQ;
-         null === (QQ = (FQ = window.nitroAds).navigate) || void 0 === QQ || QQ.call(FQ)
+       canShowBloxdAd(kk) {
+         return !1
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/151.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/151.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b)

#### 1. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L4)

```diff
-   8638: (QQ, FQ, wQ) => {
+   7950: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L6)

```diff
-       d: () => kQ
+       e: () => mk
```

#### 3. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L8-L254` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L8-L12) · [Before (L8-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L8-L254)

```diff
-     var LQ = wQ(17),
-       qQ = wQ(1207),
-       oQ = wQ(4837),
-       DQ = wQ(1107);
- 
-     function kQ(QQ) {
-       let {
-         note: FQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, qQ.y)(), {
-         clientEscMenuOptions: kQ
-       } = (0, LQ.l)(["clientEscMenuOptions"]);
-       return (0, DQ.jsx)(oQ.e, {
-         label: wQ("touchSettings:actionButtons"),
- ... (231 more removed lines; see GitHub link above)
+     var Dk = ik(2849);
+     const fk = [1, 8, 9],
+       Sk = 5,
+       bk = 200,
+       rk = 150;
```

#### 4. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L257-L1000` → after: `L15-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L15-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L15-L27) · [Before (L257-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L257-L1000)

```diff
-       var wQ;
-       QQ.contains(document.activeElement) && FQ.focus({
-         preventScroll: !0
-       }), null === (wQ = (0, OQ.d)()) || void 0 === wQ || wQ.handOverPadFocus(QQ, FQ)
-     }
- 
-     function nQ(QQ) {
-       const FQ = QQ.closest("[data-hud-row]"),
-         wQ = null === FQ || void 0 === FQ ? void 0 : FQ.querySelector(".HudElementRowName");
-       return !(!FQ || !wQ) && (EQ(FQ, wQ), !0)
-     }
-     const gQ = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";
- 
-     function PQ(QQ, FQ) {
-       return "joystick" === QQ && !FQ
-     }
- ... (728 more removed lines; see GitHub link above)
+       let ik = 0;
+       kk("addEventListener", 2, ((kk, bk) => {
+         if (!bk) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const rk = function(kk) {
+           const ek = "useractioncomplete" === kk.eventStatus || "tcloaded" === kk.eventStatus && !!kk.tcString;
+           return kk.gdprApplies && ek ? fk.every((ek => !0 === kk.purpose.consents[ek])) : null
+         }(kk);
+         if (null === rk) return;
+         const Pk = ++ik;
+         if (!rk) return void(0, Dk.B)(!1);
+         if ("nitro" === ek) return void(0, Dk.B)(!0);
+         const mk = window.__tcfapi;
+         mk ? mk("getNonIABVendorConsents", 2, ((kk, ek) => {
```

#### 5. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L1002-L1183` → after: `L29-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L29-L31) · [Before (L1002-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L1002-L1183)

```diff
-           if ("LINK" !== FQ.nodeName) return !0;
-           const LQ = null === (wQ = FQ.getAttribute("href")) || void 0 === wQ ? void 0 : wQ.trim();
-           if (!LQ) return !1;
-           try {
-             return new URL(LQ, QQ.baseURI).origin === DQ
-           } catch {
-             return !1
-           }
-         };
-       let vQ = null;
-       const mQ = () => {
-           vQ !== (0 === oQ.size) && (vQ = 0 === oQ.size, null === LQ || void 0 === LQ || LQ(vQ))
-         },
-         uQ = QQ => {
-           const FQ = QQ.cloneNode(!0);
-           if ("LINK" === FQ.tagName) {
- ... (166 more removed lines; see GitHub link above)
+           Pk === ik && (0, Dk.B)(ek && !0 === (null === (fk = kk.nonIabVendorConsents) || void 0 === fk ? void 0 : fk[Sk]))
+         })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
+       }))
```

#### 6. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L1193-L1391` → after: `L35-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L35-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L35-L41) · [Before (L1193-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L1193-L1391)

```diff
-       let {
-         preview: FQ,
-         stageRef: wQ,
-         ringRef: LQ,
-         centreLineRef: oQ,
-         snapCentre: DQ,
-         ready: kQ,
-         measure: vQ,
-         k: mQ,
-         viewport: uQ,
-         boxes: HQ,
-         pieces: bQ,
-         selected: YQ,
-         insets: xQ,
-         layout: AQ,
-         canMove: tQ,
- ... (183 more removed lines; see GitHub link above)
+       if (window.__tcfapi) return void Pk(window.__tcfapi, kk);
+       let ek = 0;
+       const ik = window.setInterval((() => {
+         ek++;
+         const Dk = window.__tcfapi;
+         Dk ? (window.clearInterval(ik), Pk(Dk, kk)) : ek >= rk && window.clearInterval(ik)
+       }), bk)
```

#### 7. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L1393-L1412` → after: `L43-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L43-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L43-L56) · [Before (L1393-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L1393-L1412)

```diff
- 
-     function Fw(QQ, FQ) {
-       return Object.keys(QQ).filter((QQ => QQ !== FQ)).map((FQ => QQ[FQ]))
-     }
- 
-     function ww(QQ) {
-       const FQ = [],
-         wQ = FQ => (0, sQ.L)(FQ) && !QQ.documentElement.classList.contains((0, LF.I)(FQ));
-       for (const DQ of QQ.querySelectorAll(`[${lQ}]`)) {
-         const QQ = wQ(DQ.getAttribute(lQ)) ? DQ.querySelector(".ScaleOnHover") : null,
-           LQ = (null !== QQ && void 0 !== QQ ? QQ : DQ).getBoundingClientRect();
-         (LQ.width > 0 || LQ.height > 0) && FQ.push({
-           id: DQ.getAttribute(lQ),
-           box: {
-             left: LQ.left,
-             top: LQ.top,
- ... (4 more removed lines; see GitHub link above)
+   },
+   7943: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       AdinPlaySdkAdaptor: () => mk
+     });
+     var Dk = ik(1298),
+       fk = ik(1163),
+       Sk = ik(224),
+       bk = ik(7950),
+       rk = ik(2849);
+     const Pk = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
+     class mk extends Dk.e {
+       constructor() {
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Pk
```

#### 8. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L1414-L1430` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L58-L59) · [Before (L1414-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L1414-L1430)

```diff
-       const LQ = QQ => (0, FF.E)(FQ.filter((FQ => {
-           let {
-             id: wQ
-           } = FQ;
-           return QQ(wQ)
-         })).map((QQ => {
-           let {
-             box: FQ
-           } = QQ;
-           return FQ
-         }))),
-         qQ = {};
-       for (const DQ of new Set(FQ.map((QQ => QQ.id)))) qQ[DQ] = LQ((QQ => QQ === DQ));
-       const oQ = LQ((QQ => UQ.has(QQ)));
-       return oQ && (qQ.cluster = oQ), {
-         boxes: qQ,
- ... (1 more removed lines; see GitHub link above)
+       static async setup() {
+         return (0, Sk.canonicaliseZonesWhenIdle)(Pk), (0, rk.A)(), await (0, fk.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, bk.e)("inMobi"), new mk
```

#### 9. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L1432-L1544` → after: `L61-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L61-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L61-L72) · [Before (L1432-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L1432-L1544)

```diff
-     }
- 
-     function Lw(QQ, FQ, wQ) {
-       const LQ = FQ.right - FQ.left,
-         qQ = FQ.bottom - FQ.top;
-       return XF(QQ, "cluster", (FQ => {
-         const oQ = wQ => {
-             FQ(wQ);
-             const LQ = [...QQ.querySelectorAll(`[${lQ}]:not(.HudPreviewGhost)`)].filter((QQ => UQ.has(QQ.getAttribute(lQ)))).map((QQ => {
-                 const FQ = QQ.getBoundingClientRect();
-                 return {
-                   left: FQ.left,
-                   top: FQ.top,
-                   right: FQ.right,
-                   bottom: FQ.bottom
-                 }
- ... (97 more removed lines; see GitHub link above)
+       playRewarded(kk, ek) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
+           const ik = "video_reward";
+           window.aiptag.cmd.player.push((function() {
+             window.aiptag.adplayer.startPreRoll({
+               alias: ik
+             })
+           })), window.adStartSoPause(kk, {
+             onFailCb: ek
+           })
+         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), ek()
```

#### 10. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L1546-L2774` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/151.js#L74-L77) · [Before (L1546-L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/151.js#L1546-L2774)

```diff
-     }
-     const Dw = [
-         ["hotbar", "arrows"],
-         ["hotbar", "inventory"]
-       ],
-       kw = (QQ, FQ, wQ) => {
-         const LQ = QQ => (0, wF.w)(QQ, wQ.hudElements[QQ]);
-         return "cluster" === QQ && UQ.has(FQ) || "cluster" === FQ && UQ.has(QQ) || "menu" === QQ && LQ(FQ) || "menu" === FQ && LQ(QQ) || Dw.some((LQ => {
-           let [qQ, oQ] = LQ;
-           const DQ = wQ.hudElements.hotbar,
-             kQ = "inventory" === oQ && wQ.hudLocked.includes(oQ) && void 0 !== DQ && !(0, sQ.J)(DQ);
-           return (QQ === qQ && FQ === oQ || QQ === oQ && FQ === qQ) && !kQ
-         }))
-       };
-     const vw = ["Above", "Below", "Left", "Right"];
- 
- ... (1213 more removed lines; see GitHub link above)
+       playVideoAd(kk, ek) {
+         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (ek ? ` (alias: ${ek})` : "")), window.aiptag.cmd.player.push((function() {
+           window.aiptag.adplayer.startPreRoll({
+             alias: ek
```
